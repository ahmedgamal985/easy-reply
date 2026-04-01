import { useLanguage } from "../../LanguageContext";
import { FeatureIconCircle, type FeatureGlyph } from "./FeatureIcon";

const cardShell =
  "rounded-[22px] border border-gray-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.045)]";

function FeatureCardTopCentered({
  icon,
  title,
  desc,
}: {
  icon: FeatureGlyph;
  title: string;
  desc: string;
}) {
  return (
    <article className={`${cardShell} px-8 py-10 text-center md:py-12`}>
      <div className="mb-6 flex justify-center md:mb-7">
        <FeatureIconCircle name={icon} />
      </div>
      <h3 className="font-display text-xl font-bold leading-snug text-ink md:text-[1.35rem]">{title}</h3>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-muted">{desc}</p>
    </article>
  );
}

function FeatureCardIconTopTextStart({
  icon,
  title,
  desc,
  idAttr,
}: {
  icon: FeatureGlyph;
  title: string;
  desc: string;
  idAttr?: string;
}) {
  return (
    <article
      id={idAttr}
      className={`${cardShell} p-8 md:p-9 md:px-10 md:py-10`}
    >
      <div className="mb-5 flex justify-center md:mb-6">
        <FeatureIconCircle name={icon} />
      </div>
      <h3 className="text-start font-display text-lg font-bold leading-snug text-ink md:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-start text-sm leading-relaxed text-ink-muted md:text-base">{desc}</p>
    </article>
  );
}

export function FeaturesSection() {
  const { L } = useLanguage();
  const f = L.features;

  return (
    <section id="features" className="border-t border-gray-100 bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-accent">
          <span className="me-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" aria-hidden />
          {f.badge}
        </p>
        <h2 className="text-center font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[2.5rem] lg:leading-tight">
          {f.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-ink-muted md:text-lg">
          {f.subtitle}
        </p>

        {/* Row 1 — two wide cards, centered copy */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {f.topRow.map((item) => (
            <FeatureCardTopCentered
              key={item.title}
              icon={item.icon as FeatureGlyph}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

        {/* Row 2 — 2×2 grid, icon centered, text left */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:mt-8 md:gap-8">
          {f.gridRow.map((item) => (
            <FeatureCardIconTopTextStart
              key={item.title}
              icon={item.icon as FeatureGlyph}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

        {/* Row 3 — two wide cards */}
        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2 md:gap-8">
          <FeatureCardIconTopTextStart
            icon={f.bottomRow[0].icon as FeatureGlyph}
            title={f.bottomRow[0].title}
            desc={f.bottomRow[0].desc}
            idAttr="integrations"
          />
          <FeatureCardIconTopTextStart
            icon={f.bottomRow[1].icon as FeatureGlyph}
            title={f.bottomRow[1].title}
            desc={f.bottomRow[1].desc}
          />
        </div>
      </div>
    </section>
  );
}
