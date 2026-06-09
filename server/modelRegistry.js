const registry = {
  "gpt-5": {
    id: "gpt-5",
    provider: "openai",
    upstreamModel: process.env.OPENAI_MODEL_GPT_5 || "gpt-5.5",
    label: "GPT-5",
    tier: "ultra",
    supportsTools: true,
    supportsStreaming: true,
  },
  "gpt-5-mini": {
    id: "gpt-5-mini",
    provider: "openai",
    upstreamModel: process.env.OPENAI_MODEL_GPT_5_MINI || "gpt-5.4-mini",
    label: "GPT-5 Mini",
    tier: "premium",
    supportsTools: true,
    supportsStreaming: true,
  },
  "gpt-4o": {
    id: "gpt-4o",
    provider: "openai",
    upstreamModel: process.env.OPENAI_MODEL_GPT_4O || "gpt-4o",
    label: "GPT-4o",
    tier: "premium",
    supportsTools: true,
    supportsStreaming: true,
  },
  "claude-sonnet-4": {
    id: "claude-sonnet-4",
    provider: "anthropic",
    upstreamModel:
      process.env.ANTHROPIC_MODEL_CLAUDE_SONNET_4 || "claude-sonnet-4-20250514",
    label: "Claude Sonnet 4",
    tier: "pro",
    supportsTools: true,
    supportsStreaming: true,
  },
  "claude-sonnet-4.6": {
    id: "claude-sonnet-4.6",
    provider: "anthropic",
    upstreamModel:
      process.env.ANTHROPIC_MODEL_CLAUDE_SONNET_46 || "claude-sonnet-4-20250514",
    label: "Claude Sonnet 4.6",
    tier: "premium",
    supportsTools: true,
    supportsStreaming: true,
  },
};

export function listModels() {
  return Object.values(registry);
}

export function getModelConfig(modelId) {
  return registry[modelId] || null;
}
