import type { Copy, Lang } from "../locales";
import { PricingPlansGrid } from "./PricingPlansGrid";

export function PricingSection({ L, lang }: { L: Copy; lang: Lang }) {
  return (
    <section id="pricing" className="border-t border-gray-100 bg-surface-muted px-3 py-16 sm:px-4 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl font-bold text-ink md:text-4xl">
          {L.pricing.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted">{L.pricing.subtitle}</p>
        <PricingPlansGrid L={L} lang={lang} />
      </div>
    </section>
  );
}
