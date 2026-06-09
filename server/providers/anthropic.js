import { normalizeTextContent } from "../utils.js";

function toAnthropicContent(content) {
  const text = normalizeTextContent(content);
  return text ? [{ type: "text", text }] : [];
}

function mapToolChoice(toolChoice) {
  if (!toolChoice || toolChoice === "auto") {
    return { type: "auto" };
  }

  if (toolChoice === "none") {
    return undefined;
  }

  if (toolChoice === "required") {
    return { type: "any" };
  }

  if (toolChoice.type === "function" && toolChoice.function?.name) {
    return { type: "tool", name: toolChoice.function.name };
  }

  return { type: "auto" };
}

function mapTools(tools = []) {
  return tools
    .map((tool) => {
      if (tool.type !== "function" || !tool.function?.name) {
        return null;
      }

      return {
        name: tool.function.name,
        description: tool.function.description || "",
        input_schema: tool.function.parameters || {
          type: "object",
          properties: {},
        },
      };
    })
    .filter(Boolean);
}

function convertMessages(messages = []) {
  const systemParts = [];
  const anthropicMessages = [];

  for (const message of messages) {
    if (message.role === "system") {
      const text = normalizeTextContent(message.content);
      if (text) {
        systemParts.push(text);
      }
      continue;
    }

    if (message.role === "tool") {
      const previous = anthropicMessages[anthropicMessages.length - 1];
      const toolResultBlock = {
        type: "tool_result",
        tool_use_id: message.tool_call_id,
        content: normalizeTextContent(message.content),
      };

      if (previous?.role === "user") {
        previous.content.push(toolResultBlock);
      } else {
        anthropicMessages.push({
          role: "user",
          content: [toolResultBlock],
        });
      }
      continue;
    }

    if (message.role === "assistant" && Array.isArray(message.tool_calls) && message.tool_calls.length) {
      const content = [];
      const text = normalizeTextContent(message.content);

      if (text) {
        content.push({ type: "text", text });
      }

      for (const toolCall of message.tool_calls) {
        let input = {};

        try {
          input = JSON.parse(toolCall.function?.arguments || "{}");
        } catch {
          input = {};
        }

        content.push({
          type: "tool_use",
          id: toolCall.id,
          name: toolCall.function?.name || "tool",
          input,
        });
      }

      anthropicMessages.push({
        role: "assistant",
        content,
      });
      continue;
    }

    anthropicMessages.push({
      role: message.role,
      content: toAnthropicContent(message.content),
    });
  }

  return {
    system: systemParts.join("\n\n").trim(),
    messages: anthropicMessages,
  };
}

function mapFinishReason(stopReason) {
  if (stopReason === "max_tokens") {
    return "length";
  }

  if (stopReason === "tool_use") {
    return "tool_calls";
  }

  return "stop";
}

function convertResponse(payload, publicModelId) {
  const textParts = [];
  const toolCalls = [];

  for (const block of payload.content || []) {
    if (block.type === "text" && block.text) {
      textParts.push(block.text);
    }

    if (block.type === "tool_use") {
      toolCalls.push({
        id: block.id,
        type: "function",
        function: {
          name: block.name,
          arguments: JSON.stringify(block.input || {}),
        },
      });
    }
  }

  return {
    id: payload.id,
    object: "chat.completion",
    created: Math.floor(Date.now() / 1000),
    model: publicModelId,
    choices: [
      {
        index: 0,
        message: {
          role: "assistant",
          content: textParts.join("\n").trim() || null,
          ...(toolCalls.length ? { tool_calls: toolCalls } : {}),
        },
        finish_reason: mapFinishReason(payload.stop_reason),
      },
    ],
    usage: {
      prompt_tokens: payload.usage?.input_tokens || 0,
      completion_tokens: payload.usage?.output_tokens || 0,
      total_tokens:
        (payload.usage?.input_tokens || 0) + (payload.usage?.output_tokens || 0),
    },
  };
}

export async function createAnthropicChatCompletion(body, modelConfig) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error("Missing ANTHROPIC_API_KEY.");
  }

  const { system, messages } = convertMessages(body.messages);
  const tools = mapTools(body.tools);
  const toolChoice = mapToolChoice(body.tool_choice);

  const upstreamBody = {
    model: modelConfig.upstreamModel,
    system: system || undefined,
    messages,
    max_tokens: body.max_completion_tokens ?? body.max_tokens ?? 4096,
    temperature: body.temperature,
    tools: tools.length ? tools : undefined,
    tool_choice: tools.length ? toolChoice : undefined,
    stream: false,
  };

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify(upstreamBody),
  });

  const payload = await response.json();

  if (!response.ok) {
    const message = payload?.error?.message || "Anthropic request failed.";
    throw new Error(message);
  }

  return convertResponse(payload, modelConfig.id);
}
