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
      title: "Easy Reply — Official Website | AI WhatsApp & Chat Automation",
      description:
        "Easy Reply (tryeasyreply.com) is an AI assistant that answers your customers on WhatsApp, Instagram, Messenger, and web chat. Automatic replies from your own business information, appointment booking, and human handoff 24/7.",
      keywords: `${BRAND_EN}, tryeasyreply, tryeasyreply.com, easy reply official, whatsapp automation, chat automation, reply automation`,
    },
    {
      title: "Easy Reply إيزي ريپلاي — الموقع الرسمي | أتمتة واتساب والردود",
      description:
        "Easy Reply (tryeasyreply.com) الموقع الرسمي لمساعد الذكاء الاصطناعي الذي يرد على عملائك في واتساب وإنستغرام. ردود تلقائية من معلومات عملك وحجز مواعيد على مدار الساعة.",
      keywords: `${BRAND_AR}, tryeasyreply, tryeasyreply.com, easy reply رسمي, أتمتة الردود, أتمتة واتساب`,
    },
  ),

  "/whatsapp-automation": page(
    {
      title: "WhatsApp Automation — Easy Reply AI Auto Reply",
      description:
        "Automate WhatsApp Business replies with Easy Reply. AI answers customers who message you, answers FAQs, books appointments, and hands the chat to your team when needed — 24/7 human-like WhatsApp replies.",
      keywords: `${BRAND_EN}, whatsapp automation, whatsapp auto reply, whatsapp business automation, whatsapp business API, whatsapp AI chatbot, whatsapp customer support AI`,
    },
    {
      title: "أتمتة واتساب — ردود واتساب تلقائية | Easy Reply",
      description:
        "أتمّت ردود واتساب للأعمال مع Easy Reply. ذكاء اصطناعي يرد على من يراسلونك، يجيب على الأسئلة، يحجز المواعيد، ويسلّم المحادثة لفريقك عند الحاجة — ردود واتساب على مدار الساعة.",
      keywords: `${BRAND_AR}, أتمتة واتساب, ردود واتساب تلقائية, رد تلقائي واتساب, أتمتة الرد على واتساب, بوت واتساب, واتساب للأعمال`,
    },
  ),

  "/chat-automation": page(
    {
      title: "Chat Automation Software — Easy Reply AI Assistant",
      description:
        "Easy Reply chat automation answers customer conversations on WhatsApp, Instagram, Messenger, and web chat. Automatic replies, appointment booking, and human handoff in one inbox.",
      keywords: `${BRAND_EN}, chat automation, automated chat replies, AI chat automation, social media chat automation, omnichannel chat automation, conversational automation`,
    },
    {
      title: "أتمتة المحادثات — برنامج ردود تلقائية | Easy Reply",
      description:
        "أتمتة محادثات Easy Reply على واتساب وإنستغرام وماسنجر ودردشة الموقع. ردود تلقائية، وحجز مواعيد، وتسليم المحادثة لفريقك في صندوق وارد واحد.",
      keywords: `${BRAND_AR}, أتمتة المحادثات, اتمتة المحادثات, أتمتة الدردشة, ردود تلقائية, أتمتة الردود على الرسائل, ذكاء اصطناعي للدردشة`,
    },
  ),

  "/reply-automation": page(
    {
      title: "Reply Automation — Auto Reply AI for Every Channel",
      description:
        "Easy Reply reply automation handles incoming messages automatically across WhatsApp, Instagram, and Messenger, so your team spends less time on repetitive replies.",
      keywords: `${BRAND_EN}, reply automation, auto reply, automated replies, message reply automation, auto responder, AI auto reply`,
    },
    {
      title: "أتمتة الردود — رد تلقائي على كل القنوات | Easy Reply",
      description:
        "أتمتة الردود من Easy Reply تتعامل مع الرسائل الواردة تلقائياً على واتساب وإنستغرام وماسنجر، فيقضي فريقك وقتاً أقل في الردود المتكررة.",
      keywords: `${BRAND_AR}, أتمتة الردود, اتمتة الردود, رد تلقائي, ردود تلقائية, الرد الآلي, أتمتة الرد على الرسائل`,
    },
  ),

  "/ai-sales-agent": page(
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
      title: "Use Cases — Easy Reply AI Chat Automation",
      description: "See how Easy Reply answers customer inquiries for real estate, e-commerce, education, creators, and high-ticket service businesses.",
      keywords: `${BRAND_EN}, chat automation use cases, whatsapp automation examples, AI customer support use cases`,
    },
    {
      title: "حالات الاستخدام — أتمتة محادثات Easy Reply",
      description: "اكتشف كيف يرد Easy Reply على استفسارات العملاء في العقارات والتجارة الإلكترونية والتعليم وصناعة المحتوى والخدمات عالية القيمة.",
      keywords: `${BRAND_AR}, حالات استخدام, أتمتة المحادثات, أتمتة واتساب للشركات`,
    },
  ),

  "/use-cases/high-ticket-service-providers": page(
    {
      title: "AI Chat Automation for High-Ticket Services — Easy Reply",
      description: "Answer high-ticket service inquiries with Easy Reply AI. Detailed answers from your own information, call booking when a client asks, and handoff to your team in chat.",
    },
    {
      title: "أتمتة محادثات الخدمات عالية القيمة — Easy Reply",
      description: "أجب عن استفسارات الخدمات عالية القيمة مع Easy Reply. إجابات تفصيلية من معلوماتك، وحجز المكالمات حين يطلبها العميل، وتسليم المحادثة لفريقك.",
    },
  ),

  "/use-cases/e-commerce-brands": page(
    {
      title: "E-commerce WhatsApp & Chat Automation — Easy Reply",
      description: "Easy Reply helps e-commerce brands answer product questions and help shoppers choose the right products when they ask, on WhatsApp and Instagram.",
    },
    {
      title: "أتمتة واتساب للتجارة الإلكترونية — Easy Reply",
      description: "Easy Reply يساعد متاجر التجارة الإلكترونية على الرد على أسئلة المنتجات ومساعدة العملاء على اختيار المنتجات المناسبة حين يسألون.",
    },
  ),

  "/use-cases/real-estate-professionals": page(
    {
      title: "AI for Real Estate — WhatsApp Inquiry Automation | Easy Reply",
      description: "Answer property inquiries and book viewings in chat with Easy Reply. Instant answers from your listings information and handoff to your agents when needed.",
    },
    {
      title: "ذكاء اصطناعي للعقارات — أتمتة استفسارات واتساب | Easy Reply",
      description: "أجب عن استفسارات العقارات واحجز المعاينات داخل المحادثة مع Easy Reply. ردود فورية من معلومات عقاراتك وتسليم المحادثة لفريقك عند الحاجة.",
    },
  ),

  "/use-cases/educational-institutions": page(
    {
      title: "AI Chat Automation for Education — Easy Reply",
      description: "Easy Reply answers student inquiries and enrollment questions for schools, universities, and online courses.",
    },
    {
      title: "أتمتة محادثات التعليم — Easy Reply",
      description: "Easy Reply يجيب عن استفسارات الطلاب وأسئلة التسجيل للمدارس والجامعات والدورات.",
    },
  ),

  "/use-cases/social-media-brands-influencers": page(
    {
      title: "Instagram & Social DM Automation — Easy Reply",
      description: "Answer the DMs people send you and handle brand inquiries with Easy Reply AI on Instagram, Facebook, and WhatsApp.",
    },
    {
      title: "أتمتة رسائل إنستغرام والسوشيال — Easy Reply",
      description: "أجب عن الرسائل الخاصة التي تصلك، وتعامل مع استفسارات العلامات التجارية مع Easy Reply على إنستغرام وواتساب.",
    },
  ),

  "/alternatives/manychat": page(
    {
      title: "Easy Reply vs ManyChat — AI Reply Alternative",
      description: "Compare Easy Reply and ManyChat. Easy Reply is an AI assistant that answers the messages your customers send you in natural conversation, not a flow-based chatbot.",
    },
    {
      title: "Easy Reply vs ManyChat — بديل أذكى",
      description: "قارن Easy Reply وManyChat. Easy Reply مساعد ذكاء اصطناعي يرد على الرسائل التي يرسلها إليك عملاؤك بحوار طبيعي، وليس شات بوت قائماً على الفلو.",
    },
  ),

  "/alternatives/gohighlevel": page(
    {
      title: "Easy Reply vs GoHighLevel — Chat Automation Alternative",
      description: "Easy Reply vs GoHighLevel for AI chat automation. Human-like AI replies to customers who message you on WhatsApp, Instagram, and Messenger.",
    },
    {
      title: "Easy Reply vs GoHighLevel — بديل أتمتة المحادثات",
      description: "Easy Reply مقابل GoHighLevel لأتمتة الرد على المحادثات بالذكاء الاصطناعي.",
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
      title: "Easy Reply vs Tidio — AI Reply Automation Alternative",
      description: "Easy Reply vs Tidio for reply automation. Go beyond basic live chat with AI that answers detailed questions and books appointments.",
    },
    { title: "Easy Reply vs Tidio — بديل أتمتة الردود", description: "Easy Reply مقابل Tidio لأتمتة الرد على أسئلة العملاء." },
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
      title: "Easy Reply vs DIY Zapier Chat Automation",
      description: "Replace fragile Zapier DIY chat automation with Easy Reply — one AI assistant that answers customers on WhatsApp, Instagram, and Messenger.",
    },
    {
      title: "Easy Reply vs Zapier — أتمتة محادثات بدون تعقيد",
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
      title: "WhatsApp Business Automation — Easy Reply AI",
      description: "Automate WhatsApp Business replies with Easy Reply. AI answers to the messages customers send you, media understanding, appointment booking, and human handoff.",
      keywords: `${BRAND_EN}, whatsapp business automation, whatsapp business AI, whatsapp auto reply business`,
    },
    {
      title: "أتمتة واتساب للأعمال — Easy Reply",
      description: "أتمّت ردود واتساب للأعمال مع Easy Reply. ردود ذكية على رسائل عملائك، فهم وسائط، حجز مواعيد، وتسليم المحادثة لفريقك.",
      keywords: `${BRAND_AR}, أتمتة واتساب للأعمال, واتساب بيزنس, ردود واتساب تلقائية`,
    },
  ),

  "/features/instagram": page(
    {
      title: "Instagram DM Automation — Easy Reply AI",
      description: "Automate replies to the Instagram DMs people send you with Easy Reply. An AI assistant that answers questions for creators and brands.",
    },
    {
      title: "أتمتة رسائل إنستغرام — Easy Reply",
      description: "أتمّت الرد على رسائل إنستغرام التي تصلك مع Easy Reply.",
    },
  ),

  "/features/facebook-messenger": page(
    {
      title: "Facebook Messenger Automation — Easy Reply",
      description: "Automate replies to Facebook Messenger conversations with Easy Reply AI. Answer questions and book appointments in Messenger chat.",
    },
    {
      title: "أتمتة ماسنجر — Easy Reply",
      description: "أتمّت الرد على محادثات Facebook Messenger مع Easy Reply.",
    },
  ),

  "/features/web-chat": page(
    {
      title: "Website Chat Automation — Easy Reply AI Agent",
      description: "Add AI web chat automation to your site with Easy Reply. Answer visitors' questions with human-like automated replies.",
    },
    {
      title: "أتمتة دردشة الموقع — Easy Reply",
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

  "/features/high-ticket-sales-capability": page(
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
      q: "What is Easy Reply chat automation?",
      a: "Easy Reply chat automation uses AI to answer incoming messages across all your messaging channels from one inbox.",
    },
    {
      q: "Does Easy Reply support WhatsApp automation?",
      a: "Yes. Easy Reply provides WhatsApp Business automation including auto replies to the messages customers send you, media understanding, AI appointment booking, and human handoff.",
    },
    {
      q: "Is Easy Reply a chatbot or an AI assistant?",
      a: "Easy Reply is an AI assistant — not a basic chatbot. It remembers context, understands images and voice notes, and answers detailed questions, not just FAQs.",
    },
    {
      q: "Can Easy Reply automate replies in Arabic and English?",
      a: "Yes. Easy Reply supports multilingual conversations including Arabic and English, with human-like replies tailored to your brand tone.",
    },
    {
      q: "How is Easy Reply different from ManyChat or Tidio?",
      a: "ManyChat and Tidio focus on flows and live chat. Easy Reply answers the messages customers send you with AI that understands context, uses your own business information, and books appointments when a customer asks.",
    },
  ],
  ar: [
    {
      q: "ما هو Easy Reply (إيزي ريپلاي)؟",
      a: "Easy Reply مساعد ذكاء اصطناعي يرد على العملاء الذين يراسلونك على واتساب وإنستغرام وماسنجر ودردشة الموقع. يرد تلقائياً من معلومات عملك، ويحجز المواعيد، ويسلّم المحادثة لفريقك على مدار الساعة.",
    },
    {
      q: "ما هي أتمتة الردود؟",
      a: "أتمتة الردود تعني أن Easy Reply يرد على رسائل العملاء تلقائياً بالذكاء الاصطناعي دون تدخل يدوي — على واتساب وإنستغرام وماسنجر وموقعك.",
    },
    {
      q: "هل يدعم Easy Reply أتمتة واتساب؟",
      a: "نعم. Easy Reply يوفر أتمتة واتساب للأعمال: ردود تلقائية على رسائل عملائك، فهم صور وصوت، حجز مواعيد بالذكاء الاصطناعي، وتسليم المحادثة لفريقك.",
    },
    {
      q: "هل Easy Reply شات بوت أم مساعد ذكي؟",
      a: "Easy Reply مساعد ذكاء اصطناعي — ليس شات بوت بسيط. يتذكر السياق، ويفهم الصور والرسائل الصوتية، ويجيب عن الأسئلة التفصيلية وليس الأسئلة الشائعة فقط.",
    },
    {
      q: "هل يعمل Easy Reply بالعربية والإنجليزية؟",
      a: "نعم. Easy Reply يدعم محادثات متعددة اللغات بما فيها العربية والإنجليزية بردود طبيعية تناسب علامتك التجارية.",
    },
    {
      q: "كيف يختلف Easy Reply عن ManyChat أو Tidio؟",
      a: "ManyChat وTidio يركزان على الفلو والدردشة المباشرة. Easy Reply يرد على الرسائل التي يرسلها إليك العملاء بذكاء اصطناعي يفهم السياق، ويستخدم معلومات عملك، ويحجز المواعيد حين يطلبها العميل.",
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
        ? "منصة أتمتة الردود والمحادثات بالذكاء الاصطناعي لواتساب وإنستغرام وماسنجر"
        : "AI chat automation and reply automation platform for WhatsApp, Instagram, and Messenger",
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
