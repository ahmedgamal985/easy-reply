import type { Copy, Lang } from "../locales";
import { SIGNIN_URL } from "../lib/site";

export function PricingPlansGrid({ L }: { L: Copy; lang: Lang }) {
  // Western numerals in both languages so the reply count and the price match.
  const fmt = (n: number) => n.toLocaleString("en-US");

  return (
    <>
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {L.pricing.plans.map((plan) => {
        const isHighlighted = "highlighted" in plan && plan.highlighted;

        return (
          <article
            key={plan.name}
            className={`flex flex-col rounded-2xl border bg-white p-5 shadow-card sm:p-6 ${
              isHighlighted ? "border-2 border-accent ring-4 ring-accent/15" : "border-gray-200"
            }`}
          >
            {isHighlighted ? (
              <p className="mx-auto -mt-8 mb-1 w-fit rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                {plan.tag}
              </p>
            ) : (
              <p className="text-xs font-semibold text-accent">{plan.tag}</p>
            )}
            <h3 className="mt-2 font-display text-xl font-bold text-ink">{plan.name}</h3>

            <div className="mt-4 rounded-xl border border-gray-100 bg-surface-muted/80 px-3 py-3 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                {L.pricing.contactsLabel}
              </p>
              <p className="mt-1 font-display text-2xl font-bold tabular-nums text-accent">
                {fmt(plan.contacts)}
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="font-display text-3xl font-bold text-ink">
                {plan.price}
                <span className="text-lg text-ink-muted"> {L.pricing.currency}</span>
                <span className="text-sm font-normal text-ink-muted"> / {plan.period}</span>
              </p>
            </div>

            <ul className="mt-5 flex flex-1 flex-col gap-2 text-sm text-ink-muted">
              {plan.features.map((f) => (
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
              href={SIGNIN_URL}
              className={`mt-6 block w-full rounded-lg py-3 text-center text-sm font-semibold transition ${
                isHighlighted
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
    {/* Extra replies, yearly billing and taxes, then the refund policy - Paddle asks for it to be easy to find. */}
    <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-ink-muted">
      {L.pricing.footnote}{" "}
      <a href="/refund-policy" className="font-semibold text-accent hover:text-accent-hover">
        {L.pricing.refundLabel}
      </a>
    </p>
    </>
  );
}
