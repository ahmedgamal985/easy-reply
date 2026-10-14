import { BrandMark } from "./components/BrandMark";
import { PricingSection } from "./components/PricingSection";
import { useLanguage } from "./LanguageContext";

type KeywordContent = {
  en: {
    h1: string;
    intro: string;
    bullets: string[];
    cta: string;
  };
  ar: {
    h1: string;
    intro: string;
    bullets: string[];
    cta: string;
  };
};

const CONTENT: Record<string, KeywordContent> = {
  "/whatsapp-automation": {
    en: {
      h1: "WhatsApp Automation with Easy Reply",
      intro:
        "Easy Reply is the AI assistant for WhatsApp Business. It answers the customers who message you, using your FAQs, website and documents, remembers the conversation context, and hands the chat to your team when a person is needed — with human-like replies, not rigid chatbot flows.",
      bullets: [
        "WhatsApp auto reply for every incoming message",
        "Understand images, voice notes, and documents",
        "Hand the chat to your team when needed",
        "AI appointment booking inside WhatsApp chat",
      ],
      cta: "Start WhatsApp automation",
    },
    ar: {
      h1: "أتمتة واتساب مع Easy Reply",
      intro:
        "Easy Reply مساعد ذكاء اصطناعي لواتساب للأعمال. يرد على العملاء الذين يراسلونك من أسئلتك الشائعة وموقعك ومستنداتك، ويتذكّر سياق المحادثة، ويسلّم المحادثة لفريقك حين يلزم تدخّل شخص — بردود طبيعية وليس فلوهات جامدة.",
      bullets: [
        "رد تلقائي على كل رسالة واتساب واردة",
        "فهم الصور والرسائل الصوتية والمستندات",
        "تسليم المحادثة لفريقك عند الحاجة",
        "حجز مواعيد داخل محادثة واتساب",
      ],
      cta: "ابدأ أتمتة واتساب",
    },
  },
  "/chat-automation": {
    en: {
      h1: "Chat Automation for WhatsApp, Instagram & Messenger",
      intro:
        "Easy Reply chat automation software answers the customers who message you on WhatsApp, Instagram, Messenger, and web chat, all from one inbox. Automate replies, answer customer questions 24/7, and hand the chat to your team when needed.",
      bullets: [
        "Omnichannel chat automation in one place",
        "Human-like AI that remembers the conversation context",
        "Answers from your FAQs, website and documents",
        "Real-time web search for accurate answers",
      ],
      cta: "Automate your chats",
    },
    ar: {
      h1: "أتمتة المحادثات لواتساب وإنستغرام وماسنجر",
      intro:
        "برنامج أتمتة محادثات Easy Reply يرد على العملاء الذين يراسلونك على واتساب وإنستغرام وماسنجر ودردشة الموقع من صندوق وارد واحد. ردود تلقائية، وإجابات عن أسئلة العملاء على مدار الساعة، وتسليم المحادثة لفريقك عند الحاجة.",
      bullets: [
        "أتمتة محادثات متعددة القنوات",
        "ذكاء اصطناعي يتذكّر سياق المحادثة",
        "إجابات من أسئلتك الشائعة وموقعك ومستنداتك",
        "بحث ويب لحظي لردود دقيقة",
      ],
      cta: "أتمّت محادثاتك",
    },
  },
  "/reply-automation": {
    en: {
      h1: "Reply Automation — Auto Reply on Every Channel",
      intro:
        "Easy Reply reply automation responds to customers instantly on WhatsApp, Instagram, Messenger, and web chat. Answer more customer questions without losing the personal touch.",
      bullets: [
        "Instant auto reply 24/7",
        "Context-aware replies that remember the conversation",
        "Multilingual replies including Arabic and English",
        "Answers detailed questions, not just FAQs",
      ],
      cta: "Automate replies now",
    },
    ar: {
      h1: "أتمتة الردود — رد تلقائي على كل القنوات",
      intro:
        "أتمتة الردود من Easy Reply ترد على العملاء فوراً على واتساب وإنستغرام وماسنجر ودردشة الموقع. أجب عن أسئلة عملاء أكثر دون أن تفقد اللمسة الشخصية.",
      bullets: [
        "رد تلقائي فوري على مدار الساعة",
        "ردود ذكية تتذكّر سياق المحادثة",
        "دعم العربية والإنجليزية",
        "يجيب عن الأسئلة التفصيلية وليس الأسئلة الشائعة فقط",
      ],
      cta: "أتمّت الردود الآن",
    },
  },
  "/ai-sales-agent": {
    en: {
      h1: "AI That Answers Buying Questions — Easy Reply",
      intro:
        "Easy Reply is an AI assistant that answers the people who message you with questions about your products, prices and plans, helps them choose the right option when they ask, books appointments on request, and hands the chat to your team when needed — inside WhatsApp and social DMs, going far beyond a basic chatbot.",
      bullets: [
        "Answer product and pricing questions from your own information",
        "Clear, on-brand replies to customer concerns",
        "Book appointments without sending links",
        "One-click AI optimization of your agent's replies",
      ],
      cta: "Get your AI assistant",
    },
    ar: {
      h1: "ذكاء اصطناعي يجيب عن أسئلة الشراء — Easy Reply",
      intro:
        "Easy Reply مساعد ذكاء اصطناعي يرد على من يراسلونك بأسئلة عن منتجاتك وأسعارك وخططك، ويساعدهم على اختيار الخيار المناسب حين يسألون، ويحجز المواعيد عند الطلب، ويسلّم المحادثة لفريقك عند الحاجة — داخل واتساب والسوشيال، أبعد بكثير من شات بوت بسيط.",
      bullets: [
        "الإجابة عن أسئلة المنتجات والأسعار من معلوماتك أنت",
        "ردود واضحة تناسب علامتك على استفسارات العملاء",
        "حجز مواعيد بدون روابط",
        "تحسين ردود وكيلك بالذكاء الاصطناعي بنقرة واحدة",
      ],
      cta: "احصل على مساعدك الذكي",
    },
  },
};

type Props = { pageKey: "/whatsapp-automation" | "/chat-automation" | "/reply-automation" | "/ai-sales-agent" };

export default function KeywordLandingPage({ pageKey }: Props) {
  const { lang, toggleLang, L } = useLanguage();
  const c = CONTENT[pageKey][lang];

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-1 z-50 px-2.5 pb-1.5 pt-1.5 sm:top-2 sm:px-4 sm:pb-2 sm:pt-2">
        <header className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-white/40 bg-white/65 px-4 py-3 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <a href="/">
            <BrandMark variant="header" />
          </a>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-ink-muted hover:text-ink"
            >
              {L.langSwitch}
            </button>
            <a href="/#pricing" className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white">
              {L.startFree}
            </a>
          </div>
        </header>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Easy Reply</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink md:text-5xl">{c.h1}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">{c.intro}</p>
        <ul className="mt-8 space-y-3">
          {c.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-ink-muted">
              <span className="mt-1 text-accent">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/#pricing" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover">
            {c.cta}
          </a>
          <a href="/" className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-ink hover:border-accent/40">
            {lang === "en" ? "Back to homepage" : "العودة للرئيسية"}
          </a>
        </div>
        <nav className="mt-16 border-t border-gray-100 pt-8" aria-label="Related">
          <p className="text-sm font-semibold text-ink">{lang === "en" ? "Related pages" : "صفحات ذات صلة"}</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <a href="/whatsapp-automation" className="text-accent hover:underline">
              {lang === "en" ? "WhatsApp automation" : "أتمتة واتساب"}
            </a>
            <a href="/chat-automation" className="text-accent hover:underline">
              {lang === "en" ? "Chat automation" : "أتمتة المحادثات"}
            </a>
            <a href="/reply-automation" className="text-accent hover:underline">
              {lang === "en" ? "Reply automation" : "أتمتة الردود"}
            </a>
            <a href="/features/whatsapp-business" className="text-accent hover:underline">
              {lang === "en" ? "WhatsApp features" : "مزايا واتساب"}
            </a>
          </div>
        </nav>
      </main>

      <PricingSection L={L} lang={lang} />
    </div>
  );
}

export { CONTENT as KEYWORD_PAGES };
