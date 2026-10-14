import { SITE_NAME, SITE_URL } from "./site";

export type PageSeo = {
  en: { title: string; description: string; keywords: string };
  ar: { title: string; description: string; keywords: string };
};

const BRAND_EN = "Easy Reply, easy reply, EasyReply, tryeasyreply";
const BRAND_AR = "Easy Reply, إيزي ريپلاي, ايزي ريپلاي, easy reply عربي";

function page(
  en: { title: string; description: string; keywords?: string },
  ar: { title: string; description: string; keywords?: string },
): PageSeo {
  return {
    en: {
      title: en.title,
      description: en.description,
      keywords: en.keywords ?? `${BRAND_EN}, ${en.title}`,
    },
    ar: {
      title: ar.title,
      description: ar.description,
      keywords: ar.keywords ?? `${BRAND_AR}, ${ar.title}`,
    },
  };
}

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": page(
    {
      title: "Easy Reply — Official Website | AI Auto Reply for WhatsApp & Chat",
      description:
        "Easy Reply (tryeasyreply.com) is an AI assistant that answers your customers on WhatsApp, Instagram, Messenger, and web chat. Automatic replies from your own business information, appointment booking, and human handoff 24/7.",
      keywords: `${BRAND_EN}, tryeasyreply, tryeasyreply.com, easy reply official, whatsapp auto reply, ai chat replies, auto reply`,
    },
    {
      title: "Easy Reply إيزي ريپلاي — الموقع الرسمي | الرد التلقائي على واتساب والردود",
      description:
        "Easy Reply (tryeasyreply.com) الموقع الرسمي لمساعد الذكاء الاصطناعي الذي يرد على عملائك في واتساب وإنستغرام. ردود تلقائية من معلومات عملك وحجز مواعيد على مدار الساعة.",
      keywords: `${BRAND_AR}, tryeasyreply, tryeasyreply.com, easy reply رسمي, الردود التلقائية, الرد التلقائي على واتساب`,
    },
  ),

  "/whatsapp-auto-reply": page(
    {
      title: "WhatsApp Auto Reply — Easy Reply AI",
      description:
        "Automate WhatsApp Business replies with Easy Reply. AI answers customers who message you, answers FAQs, books appointments, and hands the chat to your team when needed — 24/7 human-like WhatsApp replies.",
      keywords: `${BRAND_EN}, whatsapp auto reply, whatsapp auto reply, whatsapp business auto reply, whatsapp business API, whatsapp AI chatbot, whatsapp customer support AI`,
    },
    {
      title: "الرد التلقائي على واتساب — ردود واتساب تلقائية | Easy Reply",
      description:
        "أتمّت ردود واتساب للأعمال مع Easy Reply. ذكاء اصطناعي يرد على من يراسلونك، يجيب على الأسئلة، يحجز المواعيد، ويسلّم المحادثة لفريقك عند الحاجة — ردود واتساب على مدار الساعة.",
      keywords: `${BRAND_AR}, الرد التلقائي على واتساب, ردود واتساب تلقائية, رد تلقائي واتساب, أتمتة الرد على واتساب, بوت واتساب, واتساب للأعمال`,
    },
  ),

  "/ai-chat-replies": page(
    {
      title: "AI Chat Reply Software — Easy Reply AI Assistant",
      description:
        "Easy Reply's AI chat replies answers customer conversations on WhatsApp, Instagram, Messenger, and web chat. Automatic replies, appointment booking, and human handoff in one inbox.",
      keywords: `${BRAND_EN}, chat replies, automated chat replies, AI chat replies, social media chat replies, omnichannel chat replies, conversational automation`,
    },
    {
      title: "الرد الذكي على المحادثات — برنامج ردود تلقائية | Easy Reply",
      description:
        "ردود ذكية على محادثات Easy Reply على واتساب وإنستغرام وماسنجر ودردشة الموقع. ردود تلقائية، وحجز مواعيد، وتسليم المحادثة لفريقك في صندوق وارد واحد.",
      keywords: `${BRAND_AR}, الرد الذكي على المحادثات, اتمتة المحادثات, أتمتة الدردشة, ردود تلقائية, الردود التلقائية على الرسائل, ذكاء اصطناعي للدردشة`,
    },
  ),

  "/auto-reply": page(
    {
      title: "Auto Reply AI for Every Channel",
      description:
        "Easy Reply's auto reply handles incoming messages automatically across WhatsApp, Instagram, and Messenger, so your team spends less time on repetitive replies.",
      keywords: `${BRAND_EN}, auto reply, auto reply, automated replies, message auto reply, auto responder, AI auto reply`,
    },
    {
      title: "الردود التلقائية — رد تلقائي على كل القنوات | Easy Reply",
      description:
        "الردود التلقائية من Easy Reply تتعامل مع الرسائل الواردة تلقائياً على واتساب وإنستغرام وماسنجر، فيقضي فريقك وقتاً أقل في الردود المتكررة.",
      keywords: `${BRAND_AR}, الردود التلقائية, اتمتة الردود, رد تلقائي, ردود تلقائية, الرد الآلي, أتمتة الرد على الرسائل`,
    },
  ),

  "/ai-assistant": page(
    {
      title: "AI That Answers Buying Questions — Easy Reply",
      description:
        "Easy Reply is an AI assistant that answers customer questions about your products, prices and plans, helps them choose when they ask, books appointments, and hands the chat to your team in WhatsApp, Instagram, and Messenger — not just a chatbot.",
      keywords: `${BRAND_EN}, AI customer service agent, AI assistant for customer questions, AI support agent, AI chat assistant, WhatsApp AI assistant`,
    },
    {
      title: "ذكاء اصطناعي يجيب عن أسئلة الشراء | Easy Reply",
      description:
        "Easy Reply مساعد ذكاء اصطناعي يجيب عن أسئلة العملاء حول منتجاتك وأسعارك وخططك، ويساعدهم على الاختيار حين يسألون، ويحجز المواعيد في محادثات واتساب وإنستغرام — ليس مجرد شات بوت.",
      keywords: `${BRAND_AR}, مساعد ذكاء اصطناعي لخدمة العملاء, الرد على أسئلة العملاء, دعم العملاء بالذكاء الاصطناعي, شات بوت خدمة عملاء`,
    },
  ),

  "/use-cases": page(
    {
      title: "Use Cases — Easy Reply AI Chat Replies",
      description: "See how Easy Reply answers customer inquiries for real estate, e-commerce, education, creators, and high-ticket service businesses.",
      keywords: `${BRAND_EN}, chat replies use cases, whatsapp auto reply examples, AI customer support use cases`,
    },
    {
      title: "حالات الاستخدام — ردود ذكية على محادثات Easy Reply",
      description: "اكتشف كيف يرد Easy Reply على استفسارات العملاء في العقارات والتجارة الإلكترونية والتعليم وصناعة المحتوى والخدمات عالية القيمة.",
      keywords: `${BRAND_AR}, حالات استخدام, الرد الذكي على المحادثات, الرد التلقائي على واتساب للشركات`,
    },
  ),

  "/use-cases/high-ticket-service-providers": page(
    {
      title: "AI Chat Replies for High-Ticket Services — Easy Reply",
      description: "Answer high-ticket service inquiries with Easy Reply AI. Detailed answers from your own information, call booking when a client asks, and handoff to your team in chat.",
    },
    {
      title: "ردود ذكية على محادثات الخدمات عالية القيمة — Easy Reply",
      description: "أجب عن استفسارات الخدمات عالية القيمة مع Easy Reply. إجابات تفصيلية من معلوماتك، وحجز المكالمات حين يطلبها العميل، وتسليم المحادثة لفريقك.",
    },
  ),

  "/use-cases/e-commerce-brands": page(
    {
      title: "E-commerce WhatsApp & Chat Auto Reply — Easy Reply",
      description: "Easy Reply helps e-commerce brands answer product questions and help shoppers choose the right products when they ask, on WhatsApp and Instagram.",
    },
    {
      title: "الرد التلقائي على واتساب للتجارة الإلكترونية — Easy Reply",
      description: "Easy Reply يساعد متاجر التجارة الإلكترونية على الرد على أسئلة المنتجات ومساعدة العملاء على اختيار المنتجات المناسبة حين يسألون.",
    },
  ),

  "/use-cases/real-estate-professionals": page(
    {
      title: "AI for Real Estate — AI Replies to WhatsApp Inquiries | Easy Reply",
      description: "Answer property inquiries and book viewings in chat with Easy Reply. Instant answers from your listings information and handoff to your agents when needed.",
    },
    {
      title: "ذكاء اصطناعي للعقارات — ردود ذكية على استفسارات واتساب | Easy Reply",
      description: "أجب عن استفسارات العقارات واحجز المعاينات داخل المحادثة مع Easy Reply. ردود فورية من معلومات عقاراتك وتسليم المحادثة لفريقك عند الحاجة.",
    },
  ),

  "/use-cases/educational-institutions": page(
    {
      title: "AI Chat Replies for Education — Easy Reply",
      description: "Easy Reply answers student inquiries and enrollment questions for schools, universities, and online courses.",
    },
    {
      title: "ردود ذكية على محادثات التعليم — Easy Reply",
      description: "Easy Reply يجيب عن استفسارات الطلاب وأسئلة التسجيل للمدارس والجامعات والدورات.",
    },
  ),




  "/alternatives/intercom": page(
    {
      title: "Easy Reply vs Intercom — AI Messaging Alternative",
      description: "Easy Reply vs Intercom: an AI assistant that answers customers in WhatsApp and social DMs with natural replies, not just support tickets.",
    },
    { title: "Easy Reply vs Intercom", description: "Easy Reply بديل Intercom: مساعد ذكاء اصطناعي يرد على عملائك في واتساب والسوشيال." },
  ),

  "/alternatives/tidio": page(
    {
      title: "Easy Reply vs Tidio — AI Auto Reply Alternative",
      description: "Easy Reply vs Tidio for AI auto replies. Go beyond basic live chat with AI that answers detailed questions and books appointments.",
    },
    { title: "Easy Reply vs Tidio — بديل الردود التلقائية", description: "Easy Reply مقابل Tidio لأتمتة الرد على أسئلة العملاء." },
  ),

  "/alternatives/zendesk": page(
    {
      title: "Easy Reply vs Zendesk — AI Chat Support Alternative",
      description: "Easy Reply vs Zendesk: AI that answers customers instantly on WhatsApp and social channels, not just helpdesk tickets.",
    },
    { title: "Easy Reply vs Zendesk", description: "Easy Reply بديل Zendesk للرد الفوري على العملاء في المحادثات." },
  ),

  "/alternatives/diy-zapier-solutions": page(
    {
      title: "Easy Reply vs DIY Zapier Chat Bots",
      description: "Replace fragile Zapier DIY chat bots with Easy Reply — one AI assistant that answers customers on WhatsApp, Instagram, and Messenger.",
    },
    {
      title: "Easy Reply vs Zapier — ردود ذكية على محادثات بدون تعقيد",
      description: "استبدل حلول Zapier المعقدة بـ Easy Reply — مساعد واحد يرد على عملائك في كل القنوات.",
    },
  ),

  "/features/human-like-ai-conversations": page(
    {
      title: "Human-Like AI Conversations — Easy Reply",
      description: "Easy Reply delivers natural, human-like AI replies that answer customer questions, remember the conversation context, and hand the chat to your team when needed.",
    },
    {
      title: "محادثات ذكاء اصطناعي شبيهة بالبشر — Easy Reply",
      description: "Easy Reply يقدم ردوداً طبيعية تجيب عن أسئلة العملاء وتتذكّر سياق المحادثة.",
    },
  ),

  "/features/whatsapp-business": page(
    {
      title: "WhatsApp Business Auto Reply — Easy Reply AI",
      description: "Automate WhatsApp Business replies with Easy Reply. AI answers to the messages customers send you, media understanding, appointment booking, and human handoff.",
      keywords: `${BRAND_EN}, whatsapp business auto reply, whatsapp business AI, whatsapp auto reply business`,
    },
    {
      title: "الرد التلقائي على واتساب للأعمال — Easy Reply",
      description: "أتمّت ردود واتساب للأعمال مع Easy Reply. ردود ذكية على رسائل عملائك، فهم وسائط، حجز مواعيد، وتسليم المحادثة لفريقك.",
      keywords: `${BRAND_AR}, الرد التلقائي على واتساب للأعمال, واتساب بيزنس, ردود واتساب تلقائية`,
    },
  ),

  "/features/instagram": page(
    {
      title: "Instagram DM Auto Reply — Easy Reply AI",
      description: "Automate replies to the Instagram DMs people send you with Easy Reply. An AI assistant that answers questions for creators and brands.",
    },
    {
      title: "الرد التلقائي على رسائل إنستغرام — Easy Reply",
      description: "أتمّت الرد على رسائل إنستغرام التي تصلك مع Easy Reply.",
    },
  ),

  "/features/facebook-messenger": page(
    {
      title: "Facebook Messenger Auto Reply — Easy Reply",
      description: "Automate replies to Facebook Messenger conversations with Easy Reply AI. Answer questions and book appointments in Messenger chat.",
    },
    {
      title: "الرد التلقائي على ماسنجر — Easy Reply",
      description: "أتمّت الرد على محادثات Facebook Messenger مع Easy Reply.",
    },
  ),

  "/features/web-chat": page(
    {
      title: "Website Chat Auto Reply — Easy Reply AI Agent",
      description: "Add AI replies for web chat to your site with Easy Reply. Answer visitors' questions with human-like automated replies.",
    },
    {
      title: "الرد التلقائي على دردشة الموقع — Easy Reply",
      description: "أضف دردشة موقع بالذكاء الاصطناعي مع Easy Reply.",
    },
  ),

  "/features/real-time-web-search": page(
    {
      title: "AI Real-Time Web Search in Chat — Easy Reply",
      description: "Easy Reply AI searches the web in real time during conversations for accurate, up-to-date answers.",
    },
    { title: "بحث ويب لحظي في المحادثة — Easy Reply", description: "Easy Reply يبحث في الويب أثناء المحادثة." },
  ),

  "/features/ai-appointment-booking": page(
    {
      title: "AI Appointment Booking in Chat — Easy Reply",
      description: "Book appointments inside WhatsApp, Instagram, and Messenger chats with Easy Reply AI — no links needed.",
    },
    {
      title: "حجز مواعيد بالذكاء الاصطناعي — Easy Reply",
      description: "احجز المواعيد داخل المحادثة مع Easy Reply.",
    },
  ),

  "/features/one-click-ai-optimization": page(
    {
      title: "One-Click AI Optimization — Easy Reply",
      description: "Improve your AI agent's replies in one click with Easy Reply, based on patterns from your own past conversations.",
    },
    {
      title: "تحسين الذكاء الاصطناعي بنقرة — Easy Reply",
      description: "حسّن ردود وكيل الذكاء الاصطناعي بنقرة واحدة بناءً على أنماط من محادثاتك السابقة.",
    },
  ),

  "/features/buying-questions": page(
    {
      title: "AI That Answers Buying Questions — Easy Reply",
      description: "Easy Reply answers detailed questions about high-ticket services in chat, helps customers choose when they ask, and books calls on request.",
    },
    {
      title: "ذكاء اصطناعي يجيب عن أسئلة الشراء — Easy Reply",
      description: "Easy Reply يجيب في المحادثة عن الأسئلة التفصيلية حول الخدمات عالية القيمة، ويساعد العملاء على الاختيار حين يسألون، ويحجز المكالمات عند الطلب.",
    },
  ),

  "/features/complete-media-understanding": page(
    {
      title: "AI Media Understanding — Voice, Image & Video | Easy Reply",
      description: "Easy Reply understands images, voice notes, videos, and documents in chat conversations.",
    },
    { title: "فهم الوسائط بالذكاء الاصطناعي — Easy Reply", description: "Easy Reply يفهم الصور والصوت والفيديو." },
  ),


  "/features/integrations": page(
    {
      title: "Connect Your Conversations to Your Tools — Easy Reply",
      description: "Easy Reply keeps a contact for everyone who messages you, organizes them with tags, sends conversation data to your tools via webhooks and API, and shows conversation analytics.",
    },
    {
      title: "اربط محادثاتك بأدواتك — Easy Reply",
      description: "Easy Reply ينشئ جهة اتصال لكل من يراسلك، وينظّمها بالوسوم، ويرسل بيانات المحادثات إلى أدواتك عبر Webhooks وواجهة API، ويعرض تحليلات المحادثات.",
    },
  ),

  "/privacy-policy": page(
    { title: "Privacy Policy", description: "Easy Reply privacy policy and data handling practices." },
    { title: "سياسة الخصوصية", description: "سياسة خصوصية Easy Reply." },
  ),

  "/terms": page(
    { title: "Terms of Service", description: "Easy Reply terms of service." },
    { title: "الشروط", description: "شروط استخدام Easy Reply." },
  ),

  "/refund-policy": page(
    { title: "Refund Policy", description: "Easy Reply refund policy: a full refund within 14 days of your first payment. Payments and refunds are handled by Paddle.com, our Merchant of Record." },
    { title: "سياسة الاسترداد", description: "سياسة الاسترداد في Easy Reply: استرداد كامل خلال ١٤ يوماً من أول دفعة. يتولّى Paddle.com المدفوعات والاسترداد بصفته البائع الرسمي." },
  ),
};

export const FAQ_SCHEMA = {
  en: [
    {
      q: "What is Easy Reply?",
      a: "Easy Reply is an AI assistant that answers the customers who message you on WhatsApp, Instagram, Messenger, and web chat. It replies automatically from your own business information, books appointments, and hands the chat to your team 24/7.",
    },
    {
      q: "What is Easy Reply's AI chat replies?",
      a: "Easy Reply's AI chat replies uses AI to answer incoming messages across all your messaging channels from one inbox.",
    },
    {
      q: "Can Easy Reply message people who have not contacted me?",
      a: "No. Easy Reply only answers conversations that a customer starts with your business, on your own WhatsApp Business, Instagram, Messenger or website chat. Plans do not include broadcasts, bulk sending or promotional messaging.",
    },
    {
      q: "Does Easy Reply auto-reply on WhatsApp?",
      a: "Yes. Easy Reply provides WhatsApp Business auto replies, including auto replies to the messages customers send you, media understanding, AI appointment booking, and human handoff.",
    },
    {
      q: "Is Easy Reply a chatbot or an AI assistant?",
      a: "Easy Reply is an AI assistant — not a basic chatbot. It remembers context, understands images and voice notes, and answers detailed questions, not just FAQs.",
    },
    {
      q: "Can Easy Reply automate replies in Arabic and English?",
      a: "Yes. Easy Reply supports multilingual conversations including Arabic and English, with human-like replies tailored to your brand tone.",
    },
  ],
  ar: [
    {
      q: "ما هو Easy Reply (إيزي ريپلاي)؟",
      a: "Easy Reply مساعد ذكاء اصطناعي يرد على العملاء الذين يراسلونك على واتساب وإنستغرام وماسنجر ودردشة الموقع. يرد تلقائياً من معلومات عملك، ويحجز المواعيد، ويسلّم المحادثة لفريقك على مدار الساعة.",
    },
    {
      q: "ما هي الردود التلقائية؟",
      a: "الردود التلقائية تعني أن Easy Reply يرد على رسائل العملاء تلقائياً بالذكاء الاصطناعي دون تدخل يدوي — على واتساب وإنستغرام وماسنجر وموقعك.",
    },
    {
      q: "هل يدعم Easy Reply الرد التلقائي على واتساب؟",
      a: "نعم. Easy Reply يوفر الرد التلقائي على واتساب للأعمال: ردود تلقائية على رسائل عملائك، فهم صور وصوت، حجز مواعيد بالذكاء الاصطناعي، وتسليم المحادثة لفريقك.",
    },
    {
      q: "هل Easy Reply شات بوت أم مساعد ذكي؟",
      a: "Easy Reply مساعد ذكاء اصطناعي — ليس شات بوت بسيط. يتذكر السياق، ويفهم الصور والرسائل الصوتية، ويجيب عن الأسئلة التفصيلية وليس الأسئلة الشائعة فقط.",
    },
    {
      q: "هل يعمل Easy Reply بالعربية والإنجليزية؟",
      a: "نعم. Easy Reply يدعم محادثات متعددة اللغات بما فيها العربية والإنجليزية بردود طبيعية تناسب علامتك التجارية.",
    },
  ],
};

export function getPageSeo(path: string): PageSeo | undefined {
  return PAGE_SEO[path.replace(/\/+$/, "") || "/"];
}

export function buildSoftwareApplicationJsonLd(lang: "en" | "ar") {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Easy Reply",
    alternateName: lang === "ar" ? ["إيزي ريپلاي", "EasyReply", "easy reply"] : ["EasyReply", "easy reply", "try easy reply"],
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      lang === "ar"
        ? "منصة الردود التلقائية والمحادثات بالذكاء الاصطناعي لواتساب وإنستغرام وماسنجر"
        : "AI chat replies and auto reply platform for WhatsApp, Instagram, and Messenger",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "29",
      highPrice: "349",
      priceCurrency: "USD",
      offerCount: 4,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
  };
}

export function buildFaqJsonLd(lang: "en" | "ar") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_SCHEMA[lang].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
