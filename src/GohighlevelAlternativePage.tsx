import { BrandMark } from "./components/BrandMark";
import { CompareFeatureIcon, type CompareIconId } from "./components/CompareFeatureIcon";
import { TopNavMegaMenu } from "./components/TopNavMegaMenu";
import { FeaturesSection } from "./components/features/FeaturesSection";
import { PricingSection } from "./components/PricingSection";
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

type ComparisonBlock = { id: string; title: string; body: string; chip: string };

const comparisonBlocksEn: ComparisonBlock[] = [
  {
    id: "1",
    title: "Conversation Quality",
    body: "GoHighLevel is an all-in-one platform where chat is one part of a broader CRM and automation suite. Easy Reply focuses on one job: context-aware, human-like AI replies to the messages customers send you, answering their questions from your own business information.",
    chip: "Designed for Natural Dialogue",
  },
  {
    id: "2",
    title: "Setup Focus",
    body: "An all-in-one platform has many areas to configure. Easy Reply has a narrower scope: describe your business, add your website, connect your channels, and test your agent before it goes live.",
    chip: "Quick Setup",
  },
  {
    id: "3",
    title: "Depth of Answers",
    body: "GoHighLevel covers many business functions in one suite. Easy Reply goes deep on answering inbound messages: detailed questions about your products or services, booking appointments when a customer asks, and handing the chat to your team when needed.",
    chip: "Handles Detailed Questions",
  },
  {
    id: "4",
    title: "Media Intelligence",
    body: "Easy Reply understands images, voice notes, video, and documents that customers send in chat, so it can respond to what they share, not only to what they type.",
    chip: "Understands Rich Inputs",
  },
  {
    id: "5",
    title: "Continuous Optimization",
    body: "With Easy Reply, you can review past conversations and apply AI-suggested improvements to your agent in one click, which reduces the manual tuning needed to keep replies accurate.",
    chip: "One-Click Improvements",
  },
];

const comparisonBlocksAr: ComparisonBlock[] = [
  {
    id: "1",
    title: "جودة المحادثة",
    body: "GoHighLevel منصة شاملة تمثّل الدردشة فيها جزءاً واحداً من مجموعة أوسع لإدارة علاقات العملاء والأتمتة. أما Easy Reply فيركّز على مهمة واحدة: ردود بالذكاء الاصطناعي واعية بالسياق وقريبة من الإنسان على الرسائل التي يرسلها إليك العملاء، تجيب عن أسئلتهم من معلومات عملك.",
    chip: "مصمّم لحوار طبيعي",
  },
  {
    id: "2",
    title: "تركيز الإعداد",
    body: "في المنصات الشاملة جوانب كثيرة تحتاج إلى إعداد. نطاق Easy Reply أضيق: عرّف عملك، وأضف موقعك، واربط قنواتك، واختبر وكيلك قبل تشغيله.",
    chip: "إعداد سريع",
  },
  {
    id: "3",
    title: "عمق الإجابات",
    body: "يغطي GoHighLevel وظائف عمل كثيرة في مجموعة واحدة. أما Easy Reply فيتعمّق في الرد على الرسائل الواردة: الأسئلة التفصيلية عن منتجاتك أو خدماتك، وحجز المواعيد حين يطلب العميل، وتسليم المحادثة لفريقك عند الحاجة.",
    chip: "يجيب عن الأسئلة التفصيلية",
  },
  {
    id: "4",
    title: "ذكاء الوسائط",
    body: "يفهم Easy Reply الصور والملاحظات الصوتية والفيديو والمستندات التي يرسلها العملاء في المحادثة، فيرد على ما يشاركونه لا على ما يكتبونه فقط.",
    chip: "يفهم المدخلات الغنية",
  },
  {
    id: "5",
    title: "تحسين مستمر",
    body: "مع Easy Reply يمكنك مراجعة المحادثات السابقة وتطبيق تحسينات يقترحها الذكاء الاصطناعي على وكيلك بنقرة واحدة، فيقلّ الضبط اليدوي اللازم لإبقاء الردود دقيقة.",
    chip: "تحسينات بنقرة واحدة",
  },
];

export default function GohighlevelAlternativePage() {
  const { L, lang, toggleLang } = useLanguage();
  const isAr = lang === "ar";
  const comparisonBlocks = isAr ? comparisonBlocksAr : comparisonBlocksEn;

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
            aria-label={isAr ? "التنقل الرئيسي" : "Primary"}
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
        <section className="px-3 pt-10 sm:px-4 md:pt-16">
          <div className="mx-auto max-w-6xl rounded-[28px] bg-gradient-to-br from-cyan-50 via-white to-violet-50 px-4 pb-16 pt-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:px-6 md:pb-20 md:pt-12">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {isAr ? "بديل GoHighLevel" : "GoHighLevel Alternative"}
            </p>
            <h1 className="mt-5 font-display text-[1.9rem] font-bold leading-[1.2] text-ink sm:text-4xl md:text-5xl">
              {isAr ? "Easy Reply مقابل GoHighLevel" : "Easy Reply vs GoHighLevel"}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {isAr
                ? "يقدّم GoHighLevel منصة شاملة لإدارة علاقات العملاء والأتمتة والمواقع، والدردشة فيها أداة من أدوات كثيرة."
                : "GoHighLevel offers a broad all-in-one platform for CRM, automation, and websites, with chat as one of many tools."}
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {isAr
                ? "يسلك Easy Reply مساراً مركّزاً: ذكاء اصطناعي يرد على العملاء الذين يراسلونك، بردود طبيعية مبنية على السياق ومعلومات عملك."
                : "Easy Reply takes a focused path: AI that answers customers who message you, with natural, context-aware replies based on your business information."}
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {isAr
                ? "بدلاً من تغطية كل وظائف العمل، صُمّم Easy Reply ليجيب عن أسئلة العملاء على مدار الساعة، ويحجز المواعيد حين يطلبونها، ويسلّم المحادثة لفريقك عند الحاجة."
                : "Rather than covering every business function, Easy Reply is built to answer customer questions 24/7, book appointments when customers ask, and hand the chat to your team when needed."}
            </p>
            <a
              href="#pricing"
              className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover"
            >
              {isAr ? "ابدأ مجاناً" : "Start for free"}
            </a>
          </div>
        </section>

        <section className="bg-white px-3 py-14 sm:px-4 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {isAr ? "كيف يعمل" : "How it works"}
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
              {isAr
                ? "GoHighLevel يغطي وظائف كثيرة، وEasy Reply يركّز على المحادثة"
                : "GoHighLevel Covers Many Functions; Easy Reply Focuses on the Conversation"}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {isAr
                ? "يجمع GoHighLevel بين إدارة علاقات العملاء والأتمتة وأدوات الموقع وميزات الدردشة في منصة واحدة."
                : "GoHighLevel combines CRM, automation, website tools, and chat features in one platform."}
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {isAr
                ? "يناسب هذا الاتساع الفرق التي تريد أداة واحدة لمهام كثيرة. أما Easy Reply فمصمّم للفرق التي تكون أولويتها جودة المحادثة نفسها، حين يكون أسلوب الحوار هو ما يصنع الفرق."
                : "That breadth suits teams who want one tool for many jobs. Easy Reply is purpose-built for teams whose priority is the quality of the conversation itself, where how you talk to customers matters most."}
            </p>
          </div>
        </section>

        <section className="bg-white px-3 pb-16 sm:px-4 md:pb-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:gap-10">
            {comparisonBlocks.map((item, idx) => (
              <div key={item.id} className="grid items-center gap-5 md:grid-cols-2 md:gap-8">
                <div className={idx % 2 ? "md:order-2" : ""}>
                  <p className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    {item.id}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">{item.body}</p>
                </div>
                <div
                  className={`rounded-3xl border border-gray-100 bg-gradient-to-br from-cyan-100 via-emerald-50 to-violet-100 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)] ${idx % 2 ? "md:order-1" : ""}`}
                >
                  <div className="mx-auto flex h-44 max-w-md items-center justify-center rounded-2xl bg-white/55 backdrop-blur-sm">
                    <span className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm ring-1 ring-gray-100">
                      {item.chip}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="compare" className="border-y border-gray-100 bg-surface-muted px-3 py-16 sm:px-4 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-accent">
              {L.compare.badge}
            </p>
            <h2 className="text-center font-display text-3xl font-bold text-ink md:text-4xl">{L.compare.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted">{L.compare.subtitle}</p>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-card">
              <table className="w-full min-w-[520px] text-start text-sm sm:min-w-[560px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/90">
                    <th className="p-4 ps-5 font-semibold text-ink">{L.compare.colFeature}</th>
                    <th className="p-4 text-center align-middle" scope="col">
                      <span className="sr-only">Easy Reply</span>
                      <div className="flex justify-center">
                        <BrandMark variant="compare" />
                      </div>
                    </th>
                    <th className="p-4 pe-5 text-center font-semibold text-ink-muted">{L.compare.colCompetitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {L.compare.rows.map((row) => (
                    <tr key={row.name} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/40">
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

        <PricingSection L={L} lang={lang} />

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
                          : link === "Refund Policy" || link === "سياسة الاسترداد"
                            ? "/refund-policy"
                          : link === "Privacy Policy" || link === "سياسة الخصوصية"
                            ? "/privacy-policy"
                            : link === "Terms" || link === "الشروط"
                              ? "/terms"
                              : link === "Sign In" || link === "تسجيل الدخول"
                                ? "/signin"
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
                                                                      : link === "Buying Questions AI" ||
                                                                          link === "إجابات أسئلة الشراء"
                                                                        ? "/features/high-ticket-sales-capability"
                                                                        : link === "Media AI" ||
                                                                            link === "فهم الوسائط"
                                                                          ? "/features/complete-media-understanding"
                                                                          : link === "AI Integrations" ||
                                                                                link === "تكاملات الذكاء الاصطناعي"
                                                                              ? "/features/integrations"
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
            <a href="https://wa.me/201509000921" className="mt-2 inline-block text-base font-semibold text-accent hover:text-accent-hover">
              {L.bands.contact.whatsapp}
            </a>
          </div>
          <div className="text-center">
            <a href="/">
              <BrandMark variant="footer" />
            </a>
            <p className="mt-2 text-xs text-ink-faint">
              {isAr ? "© 2026 Easy Reply، جميع الحقوق محفوظة" : "© 2026 Easy Reply, All Rights Reserved"}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-ink-muted md:justify-end">
            <a href="/privacy-policy" className="hover:text-accent">
              {L.footer.privacy}
            </a>
            <a href="/terms" className="hover:text-accent">
              {L.footer.terms}
            </a>
            <a href="/refund-policy" className="hover:text-accent">
              {L.pricing.refundLabel}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
