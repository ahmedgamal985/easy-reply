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
        "Easy Reply (tryeasyreply.com) is an AI sales agent that answers your customers on WhatsApp, Instagram, Messenger, and web chat. Automate replies, qualify leads, and book appointments 24/7.",
      keywords: `${BRAND_EN}, tryeasyreply, tryeasyreply.com, easy reply official, whatsapp automation, chat automation, reply automation`,
    },
    {
      title: "Easy Reply إيزي ريپلاي — الموقع الرسمي | أتمتة واتساب والردود",
      description:
        "Easy Reply (tryeasyreply.com) الموقع الرسمي لوكيل المبيعات بالذكاء الاصطناعي لواتساب وإنستغرام. أتمتة الردود وتأهيل العملاء على مدار الساعة.",
      keywords: `${BRAND_AR}, tryeasyreply, tryeasyreply.com, easy reply رسمي, أتمتة الردود, أتمتة واتساب`,
    },
  ),

  "/whatsapp-automation": page(
    {
      title: "WhatsApp Automation — Easy Reply AI Auto Reply",
      description:
        "Automate WhatsApp Business replies with Easy Reply. AI answers customers who message you, qualifies leads, answers FAQs, and books appointments — 24/7 human-like WhatsApp automation.",
      keywords: `${BRAND_EN}, whatsapp automation, whatsapp auto reply, whatsapp business automation, whatsapp business API, whatsapp AI chatbot, whatsapp sales automation`,
    },
    {
      title: "أتمتة واتساب — ردود واتساب تلقائية | Easy Reply",
      description:
        "أتمّت ردود واتساب للأعمال مع Easy Reply. ذكاء اصطناعي يرد على من يراسلونك، يؤهل العملاء، يجيب على الأسئلة، ويحجز المواعيد — أتمتة واتساب على مدار الساعة.",
      keywords: `${BRAND_AR}, أتمتة واتساب, ردود واتساب تلقائية, رد تلقائي واتساب, أتمتة الرد على واتساب, بوت واتساب, واتساب للأعمال`,
    },
  ),

  "/chat-automation": page(
    {
      title: "Chat Automation Software — Easy Reply AI Sales Agent",
      description:
        "Easy Reply chat automation answers customer conversations on WhatsApp, Instagram, Messenger, and web chat. Automate replies, follow-ups, and bookings in one platform.",
      keywords: `${BRAND_EN}, chat automation, automated chat replies, AI chat automation, social media chat automation, omnichannel chat automation, conversational automation`,
    },
    {
      title: "أتمتة المحادثات — برنامج ردود تلقائية | Easy Reply",
      description:
        "أتمتة محادثات Easy Reply على واتساب وإنستغرام وماسنجر ودردشة الموقع. ردود تلقائية، متابعات، وحجز مواعيد في منصة واحدة.",
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
      title: "AI Sales Agent — Easy Reply Sells in Chat",
      description:
        "Easy Reply is an AI sales agent that answers inquiries, qualifies leads, handles objections, and books appointments in WhatsApp, Instagram, and Messenger conversations — not just a chatbot.",
      keywords: `${BRAND_EN}, AI sales agent, AI selling agent, sales automation AI, conversational sales AI, AI sales assistant, chat sales automation`,
    },
    {
      title: "وكيل مبيعات بالذكاء الاصطناعي | Easy Reply",
      description:
        "Easy Reply وكيل مبيعات بالذكاء الاصطناعي يرد على الاستفسارات ويؤهل العملاء ويتعامل مع الاعتراضات ويحجز المواعيد في محادثات واتساب وإنستغرام — ليس مجرد شات بوت.",
      keywords: `${BRAND_AR}, وكيل مبيعات بالذكاء الاصطناعي, ذكاء اصطناعي للمبيعات, أتمتة المبيعات, بوت مبيعات, شات بوت مبيعات`,
    },
  ),

  "/use-cases": page(
    {
      title: "Use Cases — Easy Reply AI Chat Automation",
      description: "See how Easy Reply answers customer inquiries for real estate, e-commerce, education, creators, and high-ticket service businesses.",
      keywords: `${BRAND_EN}, chat automation use cases, whatsapp automation examples, AI sales use cases`,
    },
    {
      title: "حالات الاستخدام — أتمتة محادثات Easy Reply",
      description: "اكتشف كيف يرد Easy Reply على استفسارات العملاء في العقارات والتجارة الإلكترونية والتعليم وصناعة المحتوى والخدمات عالية القيمة.",
      keywords: `${BRAND_AR}, حالات استخدام, أتمتة المحادثات, أتمتة واتساب للشركات`,
    },
  ),

  "/use-cases/high-ticket-service-providers": page(
    {
      title: "AI Chat Automation for High-Ticket Sales — Easy Reply",
      description: "Answer high-ticket inquiries with Easy Reply AI. Qualify premium leads, handle objections, and book strategy calls automatically in chat.",
    },
    {
      title: "أتمتة محادثات المبيعات عالية القيمة — Easy Reply",
      description: "أجب عن استفسارات الخدمات عالية القيمة مع Easy Reply. أهّل العملاء المميزين وتعامل مع الاعتراضات واحجز المكالمات تلقائياً.",
    },
  ),

  "/use-cases/e-commerce-brands": page(
    {
      title: "E-commerce WhatsApp & Chat Automation — Easy Reply",
      description: "Easy Reply helps e-commerce brands answer product questions, suggest the right products, and follow up with shoppers who messaged them on WhatsApp and Instagram.",
    },
    {
      title: "أتمتة واتساب للتجارة الإلكترونية — Easy Reply",
      description: "Easy Reply يساعد متاجر التجارة الإلكترونية على الرد على أسئلة المنتجات واقتراح المنتجات المناسبة ومتابعة العملاء الذين راسلوها.",
    },
  ),

  "/use-cases/real-estate-professionals": page(
    {
      title: "AI for Real Estate — WhatsApp Lead Automation | Easy Reply",
      description: "Answer property inquiries and book viewings in chat with Easy Reply. Instant answers, buyer qualification, and follow-ups with people who contacted you.",
    },
    {
      title: "ذكاء اصطناعي للعقارات — أتمتة عملاء واتساب | Easy Reply",
      description: "أجب عن استفسارات العقارات واحجز المعاينات داخل المحادثة مع Easy Reply. ردود فورية وتأهيل مشترين ومتابعة من تواصلوا معك.",
    },
  ),

  "/use-cases/educational-institutions": page(
    {
      title: "AI Chat Automation for Education — Easy Reply",
      description: "Easy Reply automates student inquiries, enrollment questions, and follow-ups for schools, universities, and online courses.",
    },
    {
      title: "أتمتة محادثات التعليم — Easy Reply",
      description: "Easy Reply يؤتمت استفسارات الطلاب وأسئلة التسجيل والمتابعات للمدارس والجامعات والدورات.",
    },
  ),

  "/use-cases/social-media-brands-influencers": page(
    {
      title: "Instagram & Social DM Automation — Easy Reply",
      description: "Answer your audience's DMs, reply privately to people who comment on your posts, and handle brand inquiries with Easy Reply AI on Instagram, Facebook, and WhatsApp.",
    },
    {
      title: "أتمتة رسائل إنستغرام والسوشيال — Easy Reply",
      description: "أجب عن رسائل جمهورك الخاصة، ورد برسالة خاصة على من يعلّق على منشوراتك، وتعامل مع استفسارات العلامات التجارية مع Easy Reply على إنستغرام وواتساب.",
    },
  ),

  "/alternatives/manychat": page(
    {
      title: "Easy Reply vs ManyChat — AI Sales Agent Alternative",
      description: "Compare Easy Reply and ManyChat. Easy Reply is an AI sales agent that holds real conversations with your customers, not just a flow-based chatbot.",
    },
    {
      title: "Easy Reply vs ManyChat — بديل أذكى",
      description: "قارن Easy Reply وManyChat. Easy Reply وكيل مبيعات بالذكاء الاصطناعي يجري محادثات حقيقية مع عملائك، وليس مجرد شات بوت قائم على الفلو.",
    },
  ),

  "/alternatives/gohighlevel": page(
    {
      title: "Easy Reply vs GoHighLevel — Chat Automation Alternative",
      description: "Easy Reply vs GoHighLevel for AI chat automation. Human-like sales conversations across WhatsApp, Instagram, and Messenger.",
    },
    {
      title: "Easy Reply vs GoHighLevel — بديل أتمتة المحادثات",
      description: "Easy Reply مقابل GoHighLevel لأتمتة المحادثات بالذكاء الاصطناعي.",
    },
  ),

  "/alternatives/intercom": page(
    {
      title: "Easy Reply vs Intercom — AI Sales Alternative",
      description: "Easy Reply vs Intercom: an AI sales agent built for sales conversations in WhatsApp and social DMs, not just support tickets.",
    },
    { title: "Easy Reply vs Intercom", description: "Easy Reply بديل Intercom لوكيل مبيعات بالذكاء الاصطناعي." },
  ),

  "/alternatives/tidio": page(
    {
      title: "Easy Reply vs Tidio — AI Reply Automation Alternative",
      description: "Easy Reply vs Tidio for reply automation. Go beyond basic live chat with AI that sells and books appointments.",
    },
    { title: "Easy Reply vs Tidio — بديل أتمتة الردود", description: "Easy Reply مقابل Tidio لأتمتة الردود والمبيعات." },
  ),

  "/alternatives/zendesk": page(
    {
      title: "Easy Reply vs Zendesk — Sales Chat Automation",
      description: "Easy Reply vs Zendesk: AI sales automation for WhatsApp and social channels, not just helpdesk support.",
    },
    { title: "Easy Reply vs Zendesk", description: "Easy Reply بديل Zendesk لأتمتة مبيعات المحادثات." },
  ),

  "/alternatives/diy-zapier-solutions": page(
    {
      title: "Easy Reply vs DIY Zapier Chat Automation",
      description: "Replace fragile Zapier DIY chat automation with Easy Reply — one AI sales agent for WhatsApp, Instagram, and Messenger.",
    },
    {
      title: "Easy Reply vs Zapier — أتمتة محادثات بدون تعقيد",
      description: "استبدل حلول Zapier المعقدة بـ Easy Reply — وكيل مبيعات واحد لكل القنوات.",
    },
  ),

  "/features/human-like-ai-conversations": page(
    {
      title: "Human-Like AI Conversations — Easy Reply",
      description: "Easy Reply delivers natural, human-like AI conversations that answer questions, handle objections, and guide buyers toward a purchase.",
    },
    {
      title: "محادثات ذكاء اصطناعي شبيهة بالبشر — Easy Reply",
      description: "Easy Reply يقدم محادثات طبيعية تبني الثقة وتتعامل مع الاعتراضات.",
    },
  ),

  "/features/whatsapp-business": page(
    {
      title: "WhatsApp Business Automation — Easy Reply AI",
      description: "Automate WhatsApp Business with Easy Reply. AI replies, media understanding, appointment booking, and follow-ups to opted-in customers with Meta-approved templates.",
      keywords: `${BRAND_EN}, whatsapp business automation, whatsapp business AI, whatsapp auto reply business`,
    },
    {
      title: "أتمتة واتساب للأعمال — Easy Reply",
      description: "أتمّت واتساب للأعمال مع Easy Reply. ردود ذكية، فهم وسائط، حجز مواعيد، ومتابعات للعملاء الموافقين بقوالب معتمدة من Meta.",
      keywords: `${BRAND_AR}, أتمتة واتساب للأعمال, واتساب بيزنس, ردود واتساب تلقائية`,
    },
  ),

  "/features/instagram": page(
    {
      title: "Instagram DM Automation — Easy Reply AI",
      description: "Automate replies to Instagram DMs and reply privately to people who comment on your posts with Easy Reply. AI sales agent for creators and brands.",
    },
    {
      title: "أتمتة رسائل إنستغرام — Easy Reply",
      description: "أتمّت الرد على رسائل إنستغرام، ورد برسالة خاصة على من يعلّق على منشوراتك مع Easy Reply.",
    },
  ),

  "/features/facebook-messenger": page(
    {
      title: "Facebook Messenger Automation — Easy Reply",
      description: "Automate replies to Facebook Messenger conversations with Easy Reply AI. Answer questions, qualify leads, and book appointments in Messenger chat.",
    },
    {
      title: "أتمتة ماسنجر — Easy Reply",
      description: "أتمّت محادثات Facebook Messenger مع Easy Reply.",
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
      title: "AI Selling Agent for High-Ticket Sales — Easy Reply",
      description: "Easy Reply AI selling agent handles high-ticket inquiries in chat with consultative questions, objection handling, and call booking.",
    },
    {
      title: "وكيل بيع بالذكاء الاصطناعي — Easy Reply",
      description: "Easy Reply يتعامل مع استفسارات الخدمات عالية القيمة في المحادثة ويجيب عن الاعتراضات ويحجز المكالمات.",
    },
  ),

  "/features/complete-media-understanding": page(
    {
      title: "AI Media Understanding — Voice, Image & Video | Easy Reply",
      description: "Easy Reply understands images, voice notes, videos, and documents in chat conversations.",
    },
    { title: "فهم الوسائط بالذكاء الاصطناعي — Easy Reply", description: "Easy Reply يفهم الصور والصوت والفيديو." },
  ),

  "/features/comment-to-dm-conversion": page(
    {
      title: "Comment to DM Automation — Easy Reply",
      description: "Reply privately to people who comment on your Instagram and Facebook posts with Easy Reply AI.",
    },
    {
      title: "تحويل التعليقات إلى رسائل — Easy Reply",
      description: "رد برسالة خاصة على من يعلّق على منشوراتك في إنستغرام وفيسبوك مع Easy Reply.",
    },
  ),

  "/features/advanced-contact-campaign-management": page(
    {
      title: "Contact Management & Follow-Ups — Easy Reply",
      description: "Manage contacts, tags, and follow-ups with customers who contacted you across WhatsApp, Instagram, and Messenger with Easy Reply.",
    },
    {
      title: "إدارة جهات الاتصال والمتابعات — Easy Reply",
      description: "أدر جهات الاتصال والوسوم والمتابعات مع العملاء الذين تواصلوا معك على واتساب وإنستغرام وماسنجر مع Easy Reply.",
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
      a: "Easy Reply is an AI sales agent that answers the customers who message you on WhatsApp, Instagram, Messenger, and web chat. It replies automatically, qualifies leads, and books appointments 24/7.",
    },
    {
      q: "What is Easy Reply chat automation?",
      a: "Easy Reply chat automation uses AI to handle incoming messages, follow-ups, and sales conversations across all your messaging channels from one dashboard.",
    },
    {
      q: "Does Easy Reply support WhatsApp automation?",
      a: "Yes. Easy Reply provides WhatsApp Business automation including auto replies, media understanding, AI appointment booking, and follow-ups to opted-in customers using Meta-approved templates.",
    },
    {
      q: "Is Easy Reply a chatbot or a sales agent?",
      a: "Easy Reply is an AI sales agent — not a basic chatbot. It handles objections, remembers context, and guides buyers toward a purchase, not just answers FAQs.",
    },
    {
      q: "Can Easy Reply automate replies in Arabic and English?",
      a: "Yes. Easy Reply supports multilingual conversations including Arabic and English, with human-like replies tailored to your brand tone.",
    },
    {
      q: "How is Easy Reply different from ManyChat or Tidio?",
      a: "ManyChat and Tidio focus on flows and support. Easy Reply is built for sales conversations — qualifying leads, handling objections, and booking appointments automatically in chat.",
    },
  ],
  ar: [
    {
      q: "ما هو Easy Reply (إيزي ريپلاي)؟",
      a: "Easy Reply وكيل مبيعات بالذكاء الاصطناعي يرد على العملاء الذين يراسلونك على واتساب وإنستغرام وماسنجر ودردشة الموقع. يرد تلقائياً، يؤهل العملاء، ويحجز المواعيد على مدار الساعة.",
    },
    {
      q: "ما هي أتمتة الردود؟",
      a: "أتمتة الردود تعني أن Easy Reply يرد على رسائل العملاء تلقائياً بالذكاء الاصطناعي دون تدخل يدوي — على واتساب وإنستغرام وماسنجر وموقعك.",
    },
    {
      q: "هل يدعم Easy Reply أتمتة واتساب؟",
      a: "نعم. Easy Reply يوفر أتمتة واتساب للأعمال: ردود تلقائية، فهم صور وصوت، حجز مواعيد بالذكاء الاصطناعي، ومتابعات للعملاء الموافقين بقوالب معتمدة من Meta.",
    },
    {
      q: "هل Easy Reply شات بوت أم وكيل مبيعات؟",
      a: "Easy Reply وكيل مبيعات بالذكاء الاصطناعي — ليس شات بوت بسيط. يتعامل مع الاعتراضات، يتذكر السياق، ويرشد المشترين نحو الشراء.",
    },
    {
      q: "هل يعمل Easy Reply بالعربية والإنجليزية؟",
      a: "نعم. Easy Reply يدعم محادثات متعددة اللغات بما فيها العربية والإنجليزية بردود طبيعية تناسب علامتك التجارية.",
    },
    {
      q: "كيف يختلف Easy Reply عن ManyChat أو Tidio؟",
      a: "ManyChat وTidio يركزان على الفلو والدعم. Easy Reply مبني لمحادثات البيع — تأهيل العملاء، التعامل مع الاعتراضات، وحجز المواعيد تلقائياً.",
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
