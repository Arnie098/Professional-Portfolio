import http from "node:http";
import { getModelConfig, listModels } from "./modelRegistry.js";
import { createAnthropicChatCompletion } from "./providers/anthropic.js";
import { createOpenAIChatCompletion } from "./providers/openai.js";
import {
  readJson,
  requireGatewayAuth,
  sendError,
  sendJson,
  sendSseChatCompletion,
} from "./utils.js";

const port = Number(process.env.PORT || 8787);

async function handleModels(req, res) {
  const auth = requireGatewayAuth(req);
  if (!auth.ok) {
    sendError(res, auth.statusCode, auth.message, "authentication_error");
    return;
  }

  sendJson(res, 200, {
    object: "list",
    data: listModels().map((model) => ({
      id: model.id,
      object: "model",
      created: 0,
      owned_by: model.provider,
      permission: [],
      metadata: {
        label: model.label,
        tier: model.tier,
        supportsTools: model.supportsTools,
        supportsStreaming: model.supportsStreaming,
      },
    })),
  });
}

async function handleChatCompletions(req, res) {
  const auth = requireGatewayAuth(req);
  if (!auth.ok) {
    sendError(res, auth.statusCode, auth.message, "authentication_error");
    return;
  }

  let body;

  try {
    body = await readJson(req);
  } catch {
    sendError(res, 400, "Request body must be valid JSON.");
    return;
  }

  if (!body.model) {
    sendError(res, 400, "Missing required field: model.");
    return;
  }

  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    sendError(res, 400, "Missing required field: messages.");
    return;
  }

  const modelConfig = getModelConfig(body.model);
  if (!modelConfig) {
    sendError(res, 404, `Unknown model '${body.model}'.`);
    return;
  }

  try {
    const completion =
      modelConfig.provider === "anthropic"
        ? await createAnthropicChatCompletion(body, modelConfig)
        : await createOpenAIChatCompletion(body, modelConfig);

    if (body.stream) {
      sendSseChatCompletion(res, completion);
      return;
    }

    sendJson(res, 200, completion);
  } catch (error) {
    sendError(res, 502, error.message || "Upstream request failed.", "api_error");
  }
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    });
    res.end();
    return;
  }

  if (req.method === "GET" && req.url === "/health") {
    sendJson(res, 200, { ok: true });
    return;
  }

  if (req.method === "GET" && req.url === "/v1/models") {
    await handleModels(req, res);
    return;
  }

  if (req.method === "POST" && req.url === "/v1/chat/completions") {
    await handleChatCompletions(req, res);
    return;
  }

  sendError(res, 404, "Route not found.", "not_found_error");
});

server.listen(port, () => {
  console.log(`Gateway listening on http://localhost:${port}`);
});
