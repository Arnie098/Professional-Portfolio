export async function createOpenAIChatCompletion(body, modelConfig) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY.");
  }

  const upstreamBody = {
    model: modelConfig.upstreamModel,
    messages: body.messages,
    temperature: body.temperature,
    top_p: body.top_p,
    tools: body.tools,
    tool_choice: body.tool_choice,
    max_completion_tokens:
      body.max_completion_tokens ?? body.max_tokens,
    response_format: body.response_format,
    presence_penalty: body.presence_penalty,
    frequency_penalty: body.frequency_penalty,
    stream: false,
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(upstreamBody),
  });

  const payload = await response.json();

  if (!response.ok) {
    const message = payload?.error?.message || "OpenAI request failed.";
    throw new Error(message);
  }

  return {
    ...payload,
    model: modelConfig.id,
  };
}
