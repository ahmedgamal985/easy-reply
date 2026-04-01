import { Fragment } from "react";
import { BrandMark } from "./components/BrandMark";
import { HeroProofStory } from "./components/HeroProofStory";
import { CompareFeatureIcon, type CompareIconId } from "./components/CompareFeatureIcon";
import { TopNavMegaMenu } from "./components/TopNavMegaMenu";
import { FeaturesSection } from "./components/features/FeaturesSection";
import { HowItWorksSection } from "./components/how/HowItWorksSection";
import { useLanguage } from "./LanguageContext";

function CompareCellYes({ label }: { label: string }) {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-sm font-bold leading-none text-white shadow-sm ring-2 ring-white"
      aria-label={label}
    >
      ✓
    </span>
  );
}

function CompareCellNo({ label }: { label: string }) {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-lg font-bold leading-none text-white shadow-sm ring-2 ring-white"
      aria-label={label}
    >
      ×
    </span>
  );
}

export default function App() {
  const { L, lang, toggleLang } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-1 z-50 px-2.5 pb-1.5 pt-1.5 sm:top-2 sm:px-4 sm:pb-2 sm:pt-2 md:top-3">
        <header className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 rounded-2xl border border-white/40 bg-white/65 px-3 py-2.5 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] backdrop-blur-xl backdrop-saturate-150 ring-1 ring-black/[0.04] sm:gap-4 sm:px-5 sm:py-3 md:px-6 md:py-[0.875rem] xl:flex-nowrap">
          <div className="order-1 shrink-0">
            <a href="/">
              <BrandMark variant="header" />
            </a>
          </div>

          <nav
            className="order-3 min-h-0 min-w-0 basis-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden xl:order-2 xl:basis-auto xl:flex-1 xl:overflow-visible"
            aria-label="Primary"
          >
            <TopNavMegaMenu nav={L.nav} lang={lang} />
          </nav>

          <div className="order-2 ms-auto flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3 xl:order-3 xl:ms-0">
            <button
              type="button"
              onClick={toggleLang}
              className="rounded-lg border border-gray-200/80 bg-white/80 px-2 py-1.5 text-[11px] font-medium text-ink-muted backdrop-blur-sm transition hover:border-accent/40 hover:text-ink sm:px-2.5 sm:text-xs md:px-3 md:text-sm"
              aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              {L.langSwitch}
            </button>
            <a
              href="#pricing"
              className="whitespace-nowrap text-[11px] font-semibold text-ink transition hover:text-accent sm:text-xs md:text-sm"
            >
              {L.signIn}
            </a>
            <a
              href="#pricing"
              className="whitespace-nowrap rounded-lg bg-accent px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-accent-hover sm:px-3 sm:text-sm md:px-4 md:py-2"
            >
              {L.startFree}
            </a>
          </div>
        </header>
      </div>

      <main>
        <section className="relative overflow-hidden bg-white px-3 pb-16 pt-6 sm:px-4 sm:pb-20 md:pb-28 md:pt-10">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-cyan-100/70 bg-gradient-to-b from-[#f8fffe] via-[#fdfdff] to-[#f6fbff] px-4 pb-10 pt-8 text-center shadow-[0_16px_45px_-25px_rgba(34,197,94,0.22),inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-6 md:pb-12 md:pt-10">
            <div className="pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-cyan-200/35 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -right-16 top-8 h-52 w-52 rounded-full bg-violet-200/35 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-t from-cyan-100/45 to-transparent" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl">
              <h1 className="font-display text-[1.75rem] font-bold leading-[1.2] text-ink sm:text-3xl md:text-5xl md:leading-tight lg:text-[3.35rem]">
                {L.hero.titleParts.map((part, i) => (
                  <Fragment key={i}>
                    {part.em ? (
                      <span className="text-accent">{part.text}</span>
                    ) : (
                      <span>{part.text}</span>
                    )}
                  </Fragment>
                ))}
              </h1>
              <p className="mt-4 font-display text-xl font-bold leading-snug text-ink md:mt-5 md:text-2xl md:leading-snug">
                {L.hero.mid}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:mt-5 md:text-lg md:leading-relaxed">
                {L.hero.sub}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10">
                <a
                  href="#how"
                  className="w-full rounded-lg bg-accent px-8 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover sm:w-auto"
                >
                  {L.hero.ctaPrimary}
                </a>
                <a
                  href="#pricing"
                  className="w-full rounded-lg border border-gray-200 bg-white px-8 py-3 text-center text-sm font-semibold text-ink transition hover:border-accent/50 hover:text-accent sm:w-auto"
                >
                  {L.hero.ctaSecondary}
                </a>
              </div>
              <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-3 text-center text-sm sm:grid-cols-3 md:mt-14 md:gap-5">
                {L.stats.map((s, i) => (
                  <div
                    key={s.label || `${s.value}-${i}`}
                    className="mx-auto w-full max-w-xs rounded-2xl border border-gray-100 bg-surface-muted/80 px-2 py-4 shadow-sm sm:max-w-none md:px-4"
                  >
                    {s.label ? (
                      <dt className="text-[11px] text-ink-faint md:text-xs">{s.label}</dt>
                    ) : null}
                    <dd
                      className={`font-display text-lg font-bold text-accent md:text-2xl ${s.label ? "mt-1" : ""}`}
                      dir={s.label ? undefined : "ltr"}
                    >
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mt-14 border-t border-gray-100 pt-14 md:mt-20 md:pt-20">
              <HeroProofStory story={L.heroStory} />
            </div>
          </div>
        </section>

        <section id="vision" className="border-t border-gray-100 bg-white px-3 py-14 sm:px-4 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold leading-tight text-ink md:text-3xl lg:text-[2.125rem] lg:leading-snug">
              {L.vision.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg md:leading-relaxed">
              {L.vision.body}
            </p>
          </div>
        </section>

        <section id="compare" className="border-y border-gray-100 bg-surface-muted px-3 py-16 sm:px-4 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-accent">
              {L.compare.badge}
            </p>
            <h2 className="text-center font-display text-3xl font-bold text-ink md:text-4xl">
              {L.compare.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted">{L.compare.subtitle}</p>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-card">
              <table className="w-full min-w-[520px] text-start text-sm sm:min-w-[560px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/90">
                    <th className="p-4 ps-5 font-semibold text-ink">{L.compare.colFeature}</th>
                    <th className="p-4 text-center align-middle" scope="col">
                      <span className="sr-only">Easy Reply</span>
                      <a href="/" className="flex justify-center">
                        <BrandMark variant="compare" />
                      </a>
                    </th>
                    <th className="p-4 pe-5 text-center font-semibold text-ink-muted">
                      {L.compare.colCompetitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {L.compare.rows.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50/40"
                    >
                      <td className="p-4 ps-5 text-ink">
                        <div className="flex items-center gap-3">
                          <CompareFeatureIcon id={row.icon as CompareIconId} />
                          <span className="font-medium">{row.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center align-middle">
                        <div className="flex justify-center">
                          <CompareCellYes label={L.a11y.yes} />
                        </div>
                      </td>
                      <td className="p-4 pe-5 text-center align-middle">
                        <div className="flex justify-center">
                          <CompareCellNo label={L.a11y.no} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <HowItWorksSection />

        <FeaturesSection />

        <section id="pricing" className="border-t border-gray-100 bg-surface-muted px-3 py-16 sm:px-4 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-display text-3xl font-bold text-ink md:text-4xl">
              {L.pricing.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted">{L.pricing.subtitle}</p>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {L.pricing.plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`flex flex-col rounded-2xl border bg-white p-6 shadow-card ${
                    "highlighted" in plan && plan.highlighted
                      ? "border-2 border-accent ring-4 ring-accent/15"
                      : "border-gray-200"
                  }`}
                >
                  <p className="text-xs font-semibold text-accent">{plan.tag}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">{plan.name}</h3>
                  {plan.note ? <p className="mt-1 text-xs text-ink-faint">{plan.note}</p> : null}
                  <p className="mt-4 font-display text-3xl font-bold text-ink">
                    <span className="text-lg text-ink-muted">$</span>
                    {plan.price}
                    <span className="text-sm font-normal text-ink-muted"> / {plan.period}</span>
                  </p>
                  <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm text-ink-muted">
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
                    href="#"
                    className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition ${
                      "highlighted" in plan && plan.highlighted
                        ? "bg-accent text-white hover:bg-accent-hover"
                        : "border border-gray-200 text-ink hover:border-accent/50 hover:text-accent"
                    }`}
                  >
                    {L.pricing.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-3 py-16 sm:px-4 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-gradient-to-br from-accent-soft/60 to-white p-6 text-center shadow-card sm:p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">{L.closing.title}</h2>
            <p className="mt-4 text-ink-muted">{L.closing.subtitle}</p>
            <a
              href="#pricing"
              className="mt-8 inline-block w-full rounded-lg bg-accent px-10 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover sm:w-auto"
            >
              {L.closing.cta}
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-gray-200 bg-white px-3 py-12 sm:px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {L.footer.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xl font-semibold text-ink">{col.title}</h3>
                <ul className="mt-3 space-y-2 text-base text-ink-muted">
                  {col.links.map((link) => {
                    const href =
                      link === "Pricing" || link === "الأسعار"
                        ? "#pricing"
                        : link === "Contact" || link === "تواصل"
                          ? "#contact"
                          : link === "Privacy Policy" || link === "سياسة الخصوصية"
                              ? "/privacy-policy"
                              : link === "Terms" || link === "الشروط"
                                ? "/terms"
                              : link === "High-Ticket"
                                ? "/use-cases/high-ticket-service-providers"
                                : link === "E-commerce" || link === "التجارة الإلكترونية"
                                  ? "/use-cases/e-commerce-brands"
                                  : link === "Real Estate" || link === "العقارات"
                                    ? "/use-cases/real-estate-professionals"
                                    : link === "Education" || link === "التعليم"
                                      ? "/use-cases/educational-institutions"
                                      : link === "Influencers" || link === "المؤثرون"
                                        ? "/use-cases/social-media-brands-influencers"
                                        : link === "ManyChat"
                                          ? "/alternatives/manychat"
                                          : link === "GoHighLevel"
                                            ? "/alternatives/gohighlevel"
                                            : link === "Intercom"
                                              ? "/alternatives/intercom"
                                                : link === "Tidio"
                                                  ? "/alternatives/tidio"
                                                  : link === "Zendesk"
                                                    ? "/alternatives/zendesk"
                                                    : link === "DIY/Zapier"
                                                      ? "/alternatives/diy-zapier-solutions"
                                                      : link === "Human Like AI" || link === "ذكاء اصطناعي بشري"
                                                        ? "/features/human-like-ai-conversations"
                                                        : link === "WhatsApp AI" || link === "واتساب AI"
                                                          ? "/features/whatsapp-business"
                                                          : link === "Instagram AI" || link === "إنستغرام AI"
                                                            ? "/features/instagram"
                                                            : link === "Messenger AI" || link === "ماسنجر AI"
                                                              ? "/features/facebook-messenger"
                                                              : link === "Web Chat AI" || link === "دردشة الموقع AI"
                                                                ? "/features/web-chat"
                                                                : link === "Real-time Web Search" ||
                                                                    link === "بحث ويب لحظي"
                                                                  ? "/features/real-time-web-search"
                                                                  : link === "AI Appointment Booking" ||
                                                                      link === "حجز مواعيد بالذكاء الاصطناعي"
                                                                    ? "/features/ai-appointment-booking"
                                                                    : link === "1-Click AI" ||
                                                                        link === "ذكاء بنقرة واحدة"
                                                                      ? "/features/one-click-ai-optimization"
                                                                      : link === "AI Selling Agent" ||
                                                                          link === "وكيل بيع بالذكاء الاصطناعي"
                                                                        ? "/features/high-ticket-sales-capability"
                                                                        : link === "Media AI" ||
                                                                            link === "فهم الوسائط"
                                                                          ? "/features/complete-media-understanding"
                                                                          : link === "Comment DM AI" ||
                                                                              link === "تعليقات إلى رسائل"
                                                                            ? "/features/comment-to-dm-conversion"
                                                                            : link === "AI Integrations" ||
                                                                                link === "تكاملات الذكاء الاصطناعي"
                                                                              ? "/features/advanced-contact-campaign-management"
                                : link === "Sign In" || link === "تسجيل الدخول"
                                  ? "#pricing"
                                  : "#";

                    return (
                      <li key={link}>
                        <a href={href} className="transition hover:text-accent">
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-8 border-t border-gray-100 pt-8 md:flex-row md:items-start">
          <div className="text-center md:text-start">
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink-faint">
              {L.bands.contact.title}
            </p>
            <a
              href={`mailto:${L.bands.contact.body}`}
              className="mt-1 block text-lg font-semibold text-accent hover:text-accent-hover"
            >
              {L.bands.contact.body}
            </a>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">{L.bands.contact.note}</p>
            <a
              href="https://wa.me/201509000921"
              className="mt-2 inline-block text-base font-semibold text-accent hover:text-accent-hover"
            >
              {L.bands.contact.whatsapp}
            </a>
          </div>
          <div className="text-center">
            <a href="/">
              <BrandMark variant="footer" />
            </a>
            <p className="mt-2 text-xs text-ink-faint">© 2026 Easy Reply, All Rights Reserved</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-ink-muted md:justify-end">
            <a href="/privacy-policy" className="hover:text-accent">
              {L.footer.privacy}
            </a>
            <a href="/terms" className="hover:text-accent">
              {L.footer.terms}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
