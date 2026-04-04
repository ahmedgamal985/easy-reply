/**
 * Indicative Claude Sonnet API cost for messaging estimates.
 * Verify current rates at: https://docs.anthropic.com/en/about-claude/pricing
 * Update the constants below when Anthropic changes pricing.
 */
export const CLAUDE_SONNET_PRICING_META = {
  modelLabel: "Claude Sonnet (API)",
  /** USD per 1M input tokens */
  usdPerMillionInput: 3,
  /** USD per 1M output tokens */
  usdPerMillionOutput: 15,
  /** ISO date string — bump when you edit the numbers above */
  lastReviewed: "2026-04-04",
} as const;

/** How you expect most AI replies to be written (affects token averages). */
export type ReplyLanguageMode = "en" | "ar" | "mixed";

/**
 * Estimated average tokens per AI reply (one turn: context + model output).
 * Arabic often needs more tokens than English for the same intent — tune with your logs.
 */
const TOKENS_PER_MESSAGE: Record<ReplyLanguageMode, { input: number; output: number }> = {
  en: { input: 2000, output: 500 },
  ar: { input: 2800, output: 720 },
  mixed: { input: 2400, output: 610 },
};

export function tokensPerMessage(mode: ReplyLanguageMode): { input: number; output: number } {
  return TOKENS_PER_MESSAGE[mode];
}

export function estimatedUsdPerAiMessage(mode: ReplyLanguageMode = "en"): number {
  const t = tokensPerMessage(mode);
  const inCost = (t.input * CLAUDE_SONNET_PRICING_META.usdPerMillionInput) / 1_000_000;
  const outCost = (t.output * CLAUDE_SONNET_PRICING_META.usdPerMillionOutput) / 1_000_000;
  return inCost + outCost;
}

export function overageMessageCount(monthlyMessages: number, includedCredits: number): number {
  return Math.max(0, Math.round(monthlyMessages) - Math.round(includedCredits));
}

export function estimateApiUsdForOverage(overageMessages: number, mode: ReplyLanguageMode): number {
  if (overageMessages <= 0) return 0;
  return overageMessages * estimatedUsdPerAiMessage(mode);
}
