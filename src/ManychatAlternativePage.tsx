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
    body: "ManyChat is built around structured flows and predefined paths, which work well for predictable journeys. Easy Reply answers the messages customers send you with AI that understands context, remembers earlier messages in the chat, and adapts each reply to what the customer actually asked.",
    chip: "Adapts to Context",
  },
  {
    id: "2",
    title: "Unified Multi-Channel Experience",
    body: "Easy Reply runs one AI agent with one knowledge base across WhatsApp, Instagram, Facebook Messenger, and web chat, so answers and tone stay consistent wherever a customer writes in.",
    chip: "One Agent, Every Channel",
  },
  {
    id: "3",
    title: "Answering Customer Questions",
    body: "ManyChat is widely used for flow-based chat automation. Easy Reply does one job: it answers the questions customers send you, explains your products and plans when they ask, books appointments on request, and hands the chat to your team when a person is needed.",
    chip: "Built to Answer Customers",
  },
  {
    id: "4",
    title: "Media Understanding",
    body: "Easy Reply can read images, transcribe voice notes, look at video, and pull key details from documents that customers send, so it can answer questions that arrive as media rather than text.",
    chip: "Understands Rich Media",
  },
  {
    id: "5",
    title: "Ongoing Improvement",
    body: "Flow-based setups are usually improved by editing flows by hand. With Easy Reply, you can review past conversations and apply suggested improvements to your agent's knowledge and instructions in one click.",
    chip: "One-Click Improvements",
  },
];

const comparisonBlocksAr: ComparisonBlock[] = [
  {
    id: "1",
    title: "جودة المحادثة",
    body: "بُني ManyChat حول تدفقات منظّمة ومسارات جاهزة، وهي مناسبة للرحلات المتوقّعة. أما Easy Reply فيرد على الرسائل التي يرسلها إليك العملاء بذكاء اصطناعي يفهم السياق، ويتذكّر الرسائل السابقة في المحادثة، وتكيّف كل رد بحسب ما سأل عنه العميل فعلاً.",
    chip: "يتكيّف مع السياق",
  },
  {
    id: "2",
    title: "تجربة موحّدة عبر القنوات",
    body: "يشغّل Easy Reply وكيلاً واحداً بالذكاء الاصطناعي وقاعدة معرفة واحدة عبر واتساب وإنستغرام وفيسبوك ماسنجر ودردشة الموقع، فتبقى الإجابات والأسلوب متّسقة أينما راسلك العميل.",
    chip: "وكيل واحد لكل القنوات",
  },
  {
    id: "3",
    title: "الإجابة عن أسئلة العملاء",
    body: "يُستخدم ManyChat على نطاق واسع لأتمتة الدردشة المبنية على التدفقات. أما Easy Reply فيؤدي مهمة واحدة: يجيب عن الأسئلة التي يرسلها إليك العملاء، ويشرح منتجاتك وخططك حين يسألون، ويحجز المواعيد عند الطلب، ويسلّم المحادثة لفريقك حين يلزم تدخّل شخص.",
    chip: "مصمّم للرد على العملاء",
  },
  {
    id: "4",
    title: "فهم الوسائط",
    body: "يستطيع Easy Reply قراءة الصور، وتفريغ الملاحظات الصوتية، ومشاهدة الفيديو، واستخراج المعلومات المهمة من المستندات التي يرسلها العملاء، فيجيب عن الأسئلة حتى عندما تصل في صورة وسائط لا نص.",
    chip: "يفهم الوسائط الغنية",
  },
  {
    id: "5",
    title: "تحسين مستمر",
    body: "عادةً ما تُحسَّن الأنظمة المبنية على التدفقات بتعديلها يدوياً. مع Easy Reply يمكنك مراجعة المحادثات السابقة وتطبيق التحسينات المقترحة على معرفة وكيلك وتعليماته بنقرة واحدة.",
    chip: "تحسينات بنقرة واحدة",
  },
];

export default function ManychatAlternativePage() {
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
              {isAr ? "بديل ManyChat" : "ManyChat Alternative"}
            </p>
            <h1 className="mt-5 font-display text-[1.9rem] font-bold leading-[1.2] text-ink sm:text-4xl md:text-5xl">
              {isAr ? "Easy Reply مقابل ManyChat" : "Easy Reply vs ManyChat"}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {isAr
                ? "يُبنى ManyChat على تدفقات منظّمة ومسارات محدّدة مسبقاً، بينما يرد Easy Reply على الرسائل التي يرسلها إليك العملاء بردود ذكاء اصطناعي قريبة من الإنسان تتكيّف مع السياق لحظياً."
                : "ManyChat is built around structured flows and predefined paths, while Easy Reply answers the messages customers send you with human-like AI replies that adapt to context in real time."}
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {isAr
                ? "بدلاً من رسم كل مسار مسبقاً، تزوّد Easy Reply بمعلومات عملك، فيرد على العملاء الذين يراسلونك، ويجيب عن أسئلتهم من أسئلتك الشائعة وموقعك ومستنداتك، ويسلّم المحادثة لفريقك عند الحاجة."
                : "Rather than mapping every path in advance, you give Easy Reply your business information and it answers customers who message you, using your FAQs, website and documents, and hands the chat to your team when needed."}
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {isAr
                ? "هكذا تتجاوز الفرق الأتمتة البسيطة إلى ردود تجيب فعلاً عمّا يسأل عنه العملاء، على مدار الساعة."
                : "This helps teams go beyond basic automation toward replies that actually answer what customers ask, 24/7."}
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
                ? "أتمتة التدفقات ومحادثات الذكاء الاصطناعي تحلّان مشكلتين مختلفتين"
                : "Flow Automation and AI Conversations Solve Different Problems"}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {isAr
                ? "ساعد ManyChat كثيراً من الشركات على تبنّي أتمتة الدردشة عبر تدفقات جاهزة."
                : "ManyChat helped many businesses adopt chat automation through predefined flows."}
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-ink-muted md:text-lg">
              {isAr
                ? "تعمل التدفقات أفضل ما يكون عندما تكون المحادثات متوقّعة. وحين يراسلك العملاء بأسئلة مفتوحة أو يسألون عن الفرق بين الخيارات، يستطيع مساعد ذكاء اصطناعي يفهم السياق أن يجيبهم بدقة، وهذا ما صُمّم Easy Reply من أجله."
                : "Flows work best when conversations are predictable. When customers message you with open-ended questions or ask how options differ, an AI assistant that understands context can answer them accurately. That is what Easy Reply is designed for."}
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
