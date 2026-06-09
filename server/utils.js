export async function readJson(req) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

export function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  });
  res.end(JSON.stringify(payload, null, 2));
}

export function sendError(res, statusCode, message, type = "invalid_request_error") {
  sendJson(res, statusCode, {
    error: {
      message,
      type,
    },
  });
}

export function getBearerToken(req) {
  const header = req.headers.authorization || "";

  if (!header.startsWith("Bearer ")) {
    return null;
  }

  return header.slice("Bearer ".length).trim();
}

export function requireGatewayAuth(req) {
  const expected = process.env.GATEWAY_API_KEY;

  if (!expected) {
    return { ok: true };
  }

  const received = getBearerToken(req);

  if (!received || received !== expected) {
    return { ok: false, statusCode: 401, message: "Invalid gateway API key." };
  }

  return { ok: true };
}

export function normalizeTextContent(content) {
  if (typeof content === "string") {
    return content;
  }

  if (Array.isArray(content)) {
    return content
      .map((item) => {
        if (typeof item === "string") {
          return item;
        }

        if (item?.type === "text") {
          return item.text || "";
        }

        return "";
      })
      .join("\n")
      .trim();
  }

  return "";
}

export function createChatCompletionChunk({ id, model, delta = {}, finishReason = null }) {
  return {
    id,
    object: "chat.completion.chunk",
    created: Math.floor(Date.now() / 1000),
    model,
    choices: [
      {
        index: 0,
        delta,
        finish_reason: finishReason,
      },
    ],
  };
}

export function sendSseChatCompletion(res, completion) {
  const choice = completion.choices?.[0] || {};
  const message = choice.message || {};
  const chunkId = completion.id;

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  });

  res.write(`data: ${JSON.stringify(createChatCompletionChunk({
    id: chunkId,
    model: completion.model,
    delta: { role: "assistant" },
  }))}\n\n`);

  if (message.content) {
    res.write(`data: ${JSON.stringify(createChatCompletionChunk({
      id: chunkId,
      model: completion.model,
      delta: { content: message.content },
    }))}\n\n`);
  }

  if (message.tool_calls?.length) {
    res.write(`data: ${JSON.stringify(createChatCompletionChunk({
      id: chunkId,
      model: completion.model,
      delta: { tool_calls: message.tool_calls },
    }))}\n\n`);
  }

  res.write(`data: ${JSON.stringify(createChatCompletionChunk({
    id: chunkId,
    model: completion.model,
    finishReason: choice.finish_reason || "stop",
  }))}\n\n`);
  res.write("data: [DONE]\n\n");
  res.end();
}
