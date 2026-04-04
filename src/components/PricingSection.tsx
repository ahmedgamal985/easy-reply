import { useState } from "react";
import type { Copy, Lang } from "../locales";
import {
  CLAUDE_SONNET_PRICING_META,
  estimateApiUsdForOverage,
  estimatedUsdPerAiMessage,
  overageMessageCount,
  tokensPerMessage,
} from "../lib/claudeSonnetUsageEstimate";

/** Fixed token profile for estimates (balanced multilingual mix). */
const ESTIMATE_TOKEN_MODE = "mixed" as const;

type Plan = Copy["pricing"]["plans"][number];

function hasPricingMeta(plan: Plan): plan is Plan & { basePriceUsd: number; includedCredits: number } {
  return (
    typeof (plan as Plan & { basePriceUsd?: number }).basePriceUsd === "number" &&
    typeof (plan as Plan & { includedCredits?: number }).includedCredits === "number"
  );
}

export function PricingSection({ L, lang }: { L: Copy; lang: Lang }) {
  const isAr = lang === "ar";
  const loc = L.pricing.estimate;
  const plans = L.pricing.plans;
  const [monthlyMessages, setMonthlyMessages] = useState(100);

  const presets = [100, 200, 500, 1000, 3000, 10000];
  const tok = tokensPerMessage(ESTIMATE_TOKEN_MODE);
  const perMsg = estimatedUsdPerAiMessage(ESTIMATE_TOKEN_MODE);

  const fmt = (n: number) => n.toLocaleString(isAr ? "ar-EG" : "en-US");

  return (
    <section id="pricing" className="border-t border-gray-100 bg-surface-muted px-3 py-16 sm:px-4 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl font-bold text-ink md:text-4xl">
          {L.pricing.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted">{L.pricing.subtitle}</p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-medium text-ink md:text-base">
          {L.pricing.modelNote}
        </p>

        <div
          className="mx-auto mt-10 max-w-2xl rounded-2xl border-2 border-accent/25 bg-white p-6 shadow-[0_20px_50px_-28px_rgba(34,197,94,0.35)] sm:p-8"
          dir={isAr ? "rtl" : "ltr"}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {loc.counterEyebrow}
          </p>
          <h3 className="mt-2 text-center font-display text-lg font-bold text-ink md:text-xl">
            {loc.title}
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-ink-muted">{loc.subtitle}</p>

          <div className="mt-8 text-center">
            <label className="text-sm font-medium text-ink-muted" htmlFor="pricing-messages">
              {loc.monthlyMessagesLabel}
            </label>
            <output
              htmlFor="pricing-messages pricing-messages-exact"
              className="mt-3 block font-display text-5xl font-bold tabular-nums tracking-tight text-accent sm:text-6xl"
              aria-live="polite"
            >
              {fmt(monthlyMessages)}
            </output>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {presets.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setMonthlyMessages(n)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  monthlyMessages === n
                    ? "border-accent bg-accent text-white shadow-sm"
                    : "border-gray-200 text-ink-muted hover:border-accent/50"
                }`}
              >
                {fmt(n)}
              </button>
            ))}
          </div>

          <input
            id="pricing-messages"
            type="range"
            min={0}
            max={100000}
            step={100}
            value={Math.min(100000, monthlyMessages)}
            onChange={(e) => setMonthlyMessages(Number(e.target.value))}
            className="mt-6 h-3 w-full cursor-pointer accent-accent"
            aria-valuemin={0}
            aria-valuemax={100000}
            aria-valuenow={Math.min(100000, monthlyMessages)}
          />
          <div className="mt-2 flex items-center justify-between gap-3 text-xs text-ink-faint">
            <span>0</span>
            <div className="flex items-center gap-2">
              <label className="sr-only" htmlFor="pricing-messages-exact">
                {loc.exactLabel}
              </label>
              <input
                id="pricing-messages-exact"
                type="number"
                min={0}
                max={500000}
                step={1}
                value={monthlyMessages}
                onChange={(e) => setMonthlyMessages(Math.max(0, Number(e.target.value) || 0))}
                className="w-32 rounded-xl border border-gray-200 px-3 py-2 text-center font-display text-lg font-bold tabular-nums text-ink shadow-inner"
              />
            </div>
            <span>100k</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            if (!hasPricingMeta(p)) return null;
            const overage = overageMessageCount(monthlyMessages, p.includedCredits);
            const apiAddon = estimateApiUsdForOverage(overage, ESTIMATE_TOKEN_MODE);
            const total = p.basePriceUsd + apiAddon;

            return (
              <article
                key={p.name}
                className={`flex flex-col rounded-2xl border bg-white p-6 shadow-card ${
                  "highlighted" in p && p.highlighted
                    ? "border-2 border-accent ring-4 ring-accent/15"
                    : "border-gray-200"
                }`}
              >
                <p className="text-xs font-semibold text-accent">{p.tag}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{p.name}</h3>
                {p.note ? <p className="mt-1 text-xs text-ink-faint">{p.note}</p> : null}

                <div className="mt-4 rounded-xl border border-accent/20 bg-accent/5 px-4 py-4 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                    {loc.cardTotalLabel}
                  </p>
                  <p className="mt-1 font-display text-3xl font-bold tabular-nums text-accent sm:text-4xl">
                    <span className="text-xl text-ink-muted">$</span>
                    {total.toFixed(2)}
                  </p>
                  <div className="mt-3 space-y-1 text-xs text-ink-muted">
                    <p>
                      <span className="font-medium text-ink">{loc.cardPlatform}</span> ${p.basePriceUsd}{" "}
                      · {fmt(p.includedCredits)} {loc.cardIncluded}
                    </p>
                    <p>
                      <span className="font-medium text-ink">{loc.cardApiLine}</span> +$
                      {apiAddon.toFixed(2)} · {fmt(overage)} {loc.cardOverage}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-center text-[11px] text-ink-faint">
                  {loc.cardFootNote} · ${p.price}/{p.period}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-2 text-sm text-ink-muted">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[10px] font-bold leading-none text-white"
                        aria-hidden
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition ${
                    "highlighted" in p && p.highlighted
                      ? "bg-accent text-white hover:bg-accent-hover"
                      : "border border-gray-200 text-ink hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  {L.pricing.cta}
                </a>
              </article>
            );
          })}
        </div>

        <div
          className="mx-auto mt-10 max-w-3xl space-y-3 rounded-xl border border-gray-200 bg-white/80 px-4 py-5 text-xs leading-relaxed text-ink-faint sm:px-6"
          dir={isAr ? "rtl" : "ltr"}
        >
          <p>{loc.disclaimer}</p>
          <p>
            {loc.technicalAssumption
              .replace("{{inp}}", String(CLAUDE_SONNET_PRICING_META.usdPerMillionInput))
              .replace("{{outp}}", String(CLAUDE_SONNET_PRICING_META.usdPerMillionOutput))
              .replace("{{inTok}}", String(tok.input))
              .replace("{{outTok}}", String(tok.output))
              .replace("{{perMsg}}", perMsg.toFixed(4))}
          </p>
          <p>{loc.lastUpdated.replace("{{date}}", CLAUDE_SONNET_PRICING_META.lastReviewed)}</p>
        </div>
      </div>
    </section>
  );
}
