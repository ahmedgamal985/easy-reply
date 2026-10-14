export type Lang = "en" | "ar";

export const defaultLang: Lang = "en";

const BASIC_FEATURES_EN = [
  "WhatsApp Business, Instagram & Messenger",
  "Website chat",
  "AI replies to the messages customers send you, 24/7",
  "Answers from your FAQs, website & documents",
  "Understands images, voice notes & files",
  "Contact management & tagging",
  "Unlimited appointment calendars",
  "Hand any chat to your team",
  "Analytics & reports",
  "APIs & webhooks",
] as const;

const PRO_FEATURES_EN = [
  "WhatsApp Business, Instagram & Messenger",
  "Website chat",
  "Telegram & LINE",
  "AI replies to the messages customers send you, 24/7",
  "Answers from your FAQs, website & documents",
  "Understands images, voice notes & files",
  "AI appointment booking",
  "Remembers each customer's conversation",
  "One-click AI optimization",
  "Contact management & tagging",
  "Unlimited appointment calendars",
  "Hand any chat to your team",
  "Analytics & reports",
  "APIs & webhooks",
  "Custom channel integrations",
] as const;

const PREMIUM_FEATURES_EN = [
  "WhatsApp Business, Instagram & Messenger",
  "Website chat",
  "Telegram & LINE",
  "AI replies to the messages customers send you, 24/7",
  "Answers from your FAQs, website & documents",
  "Understands images, voice notes & files",
  "AI appointment booking",
  "Remembers each customer's conversation",
  "One-click AI optimization",
  "Advanced AI knowledge & context",
  "Contact management & tagging",
  "Unlimited appointment calendars",
  "Hand any chat to your team",
  "Advanced analytics",
  "APIs & webhooks",
  "Custom channel integrations",
] as const;

const BASIC_FEATURES_AR = [
  "واتساب للأعمال وإنستغرام وماسنجر",
  "دردشة الموقع",
  "ردود بالذكاء الاصطناعي على الرسائل التي يرسلها عملاؤك، على مدار الساعة",
  "إجابات من أسئلتك الشائعة وموقعك ومستنداتك",
  "يفهم الصور والرسائل الصوتية والملفات",
  "إدارة جهات الاتصال ووسومها",
  "تقويمات مواعيد غير محدودة",
  "تسليم أي محادثة لفريقك",
  "التحليلات والتقارير",
  "واجهات API وWebhooks",
] as const;

const PRO_FEATURES_AR = [
  "واتساب للأعمال وإنستغرام وماسنجر",
  "دردشة الموقع",
  "تيليجرام ولاين",
  "ردود بالذكاء الاصطناعي على الرسائل التي يرسلها عملاؤك، على مدار الساعة",
  "إجابات من أسئلتك الشائعة وموقعك ومستنداتك",
  "يفهم الصور والرسائل الصوتية والملفات",
  "حجز مواعيد بالذكاء الاصطناعي",
  "يتذكر محادثة كل عميل",
  "تحسين الذكاء الاصطناعي بنقرة واحدة",
  "إدارة جهات الاتصال ووسومها",
  "تقويمات مواعيد غير محدودة",
  "تسليم أي محادثة لفريقك",
  "التحليلات والتقارير",
  "واجهات API وWebhooks",
  "تكاملات قنوات مخصصة",
] as const;

const PREMIUM_FEATURES_AR = [
  "واتساب للأعمال وإنستغرام وماسنجر",
  "دردشة الموقع",
  "تيليجرام ولاين",
  "ردود بالذكاء الاصطناعي على الرسائل التي يرسلها عملاؤك، على مدار الساعة",
  "إجابات من أسئلتك الشائعة وموقعك ومستنداتك",
  "يفهم الصور والرسائل الصوتية والملفات",
  "حجز مواعيد بالذكاء الاصطناعي",
  "يتذكر محادثة كل عميل",
  "تحسين الذكاء الاصطناعي بنقرة واحدة",
  "معرفة وسياق متقدم بالذكاء الاصطناعي",
  "إدارة جهات الاتصال ووسومها",
  "تقويمات مواعيد غير محدودة",
  "تسليم أي محادثة لفريقك",
  "تحليلات متقدمة",
  "واجهات API وWebhooks",
  "تكاملات قنوات مخصصة",
] as const;

export const copy = {
  en: {
    meta: {
      title: "Easy Reply — AI chat replies for WhatsApp, Instagram & Messenger",
      description:
        "Easy Reply is an AI assistant that answers the messages your customers send you on WhatsApp, Instagram, Messenger, and web chat. Instant replies from your own information, appointment booking, and human handoff, 24/7.",
    },
    faq: {
      title: "Frequently Asked Questions about Easy Reply",
      subtitle: "Everything you need to know about Easy Reply and its AI auto replies on WhatsApp, Instagram, Messenger and web chat.",
      items: [
        {
          q: "What is Easy Reply?",
          a: "Easy Reply is an AI assistant for customer conversations on WhatsApp, Instagram, Messenger, and web chat. It answers the messages customers send you, using your FAQs, website and documents, books appointments when they ask, and hands the chat to your team when needed, 24/7.",
        },
        {
          q: "How does Easy Reply answer chats automatically?",
          a: "It means Easy Reply answers the incoming messages customers send you on all your channels, from one dashboard, with natural, human-like replies.",
        },
        {
          q: "Does Easy Reply auto-reply on WhatsApp?",
          a: "Yes. Easy Reply automates WhatsApp Business conversations: it answers the customers who message you, understands images and voice notes, books appointments, and hands the chat to your team whenever a person is needed.",
        },
        {
          q: "Is Easy Reply just a menu chatbot?",
          a: "No. Instead of rigid button menus, Easy Reply understands what the customer actually asked, remembers the conversation, and answers from your own information.",
        },
        {
          q: "Can Easy Reply message people who have not contacted me?",
          a: "No. Easy Reply only answers conversations that a customer starts with your business, on your own WhatsApp Business, Instagram, Messenger or website chat. Plans do not include broadcasts, bulk sending or promotional messaging.",
        },
        {
          q: "Do my customers know they are chatting with AI?",
          a: "They can. Turn on \"Tell contacts they're chatting with AI\" and the agent's first reply to each person briefly mentions that it is an AI assistant. Your team can take over any conversation at any time.",
        },
        {
          q: "Does Easy Reply work in Arabic and English?",
          a: "Yes. Easy Reply supports multilingual conversations including Arabic and English with replies tailored to your brand.",
        },
      ],
    },
    nav: [
      { href: "#features", label: "Features" },
      { href: "#compare", label: "Alternatives" },
      { href: "/use-cases", label: "Use Cases" },
      { href: "#pricing", label: "Pricing" },
      { href: "#contact", label: "Contact" },
    ],
    langSwitch: "Arabic",
    signIn: "Sign in",
    startFree: "Start Free",
    hero: {
      titleParts: [
        { text: "human-like AI that answers ", em: false },
        { text: "every customer message, instantly", em: true },
      ],
      mid: "Never leave a customer waiting for a reply.",
      sub:
        "AI that answers the messages customers send you on WhatsApp, Instagram, Messenger, and your website: answers, bookings, and handoff to your team. One inbox. Live in minutes.",
      ctaPrimary: "Sign in",
      ctaSecondary: "View pricing",
    },
    heroShowcase: {
      eyebrow: "Live preview",
      tagline: "A quick look at how Easy Reply answers customers: natural, accurate, and helpful.",
      windowTitle: "AI assistant",
      footerNote: "Same intelligence across WhatsApp, Instagram, Messenger, and web chat.",
      messages: [
        {
          from: "lead",
          chunks: ["Hi — can you help me pick the right plan for my team?"],
        },
        {
          from: "agent",
          chunks: [
            "Of course.",
            "Where do most of your customer conversations happen today?",
          ],
        },
        {
          from: "lead",
          chunks: ["Mostly WhatsApp and Instagram DMs."],
        },
        {
          from: "agent",
          chunks: [
            "Perfect. That’s a strong combo.",
            "I can answer your customers' questions, book appointments, and pass the chat to your team when needed.",
            "Want a quick walkthrough of the 3-day trial?",
          ],
        },
      ],
    },
    stats: [
      { label: "Channels in one inbox", value: "4" },
      { label: "Typical setup", value: "~15 min" },
      { label: "Always answering", value: "24/7" },
    ],
    vision: {
      title: "Customer conversations with truly human AI",
      body: "Instead of rigid bot menus, Easy Reply holds a natural conversation that answers what each customer actually asked. Our vision: helping businesses answer every customer quickly without losing the personal touch.",
    },
    compare: {
      badge: "Us vs. them",
      title: "AI assistant vs. regular chatbot",
      subtitle:
        "What Easy Reply does that a menu-based chatbot does not.",
      colFeature: "Capability",
      colCompetitor: "Regular chatbots",
      rows: [
        { icon: "deal", name: "Helps customers choose when they ask" },
        { icon: "objection", name: "Answers detailed questions" },
        { icon: "media", name: "Understands images, voice & video" },
        { icon: "calendar", name: "Books appointments in chat" },
        { icon: "memory", name: "Remembers past conversations" },
        { icon: "learn", name: "Gets smarter automatically" },
        { icon: "brand", name: "Tailored to your brand & tone" },
        { icon: "channels", name: "Every channel in one dashboard" },
      ],
    },
    how: {
      badge: "How it works",
      title: "Set up your AI agent in 15 minutes",
      subtitle:
        "Describe your business, paste your website, connect your channels. The AI handles the heavy lifting.",
      connectPrefix: "Connect ",
      typewriterChannels: ["WhatsApp", "Instagram", "Messenger", "Web Chat"] as const,
      ui: {
        addLinks: "Add your links",
        customInstructions: "Custom instructions",
        generateAi: "Generate AI",
        siteUrl: "https://tryeasyreply.com/",
        chipSearch: "Web search",
        chipBooking: "Booking",
        chipFollow: "Handoff",
        connected: "Connected Channels",
        yourAgent: "Your AI Agent",
        step1: "Step 1",
        step2: "Step 2",
        step3: "Step 3",
        launch: "Launch",
        dashboard: "Dashboard",
        optimize: "One-click optimize",
        optimizeBarPrefix: "Make AI ",
        optimizeBarHighlight: "more",
        optimizeBarSuffixes: [" efficient", " helpful", " on-brand"] as const,
      },
      steps: [
        {
          title: "Add your website",
          desc: "We read your offer, pricing, and FAQs to shape the agent — no manual prompt writing.",
        },
        {
          title: "Pick your channels",
          desc: "WhatsApp, Instagram, Messenger, website chat. Turn on the ones you use. Done.",
        },
        {
          title: "Turn It On",
          desc: "The AI starts answering the customers who message you: answering questions, booking appointments, and handing chats to your team when needed, 24/7.",
        },
        {
          title: "Keep improving",
          desc: "Review results from your dashboard and use one-click optimization to refine how the agent answers over time.",
        },
      ],
    },
    features: {
      badge: "Features",
      title: "It’s not a menu chatbot. It actually answers.",
      subtitle: "Here’s what it actually does for your business.",
      topRow: [
        {
          icon: "sell",
          title: "It answers",
          desc: "Answers product, pricing and service questions with your own information, clearly and politely, for simple products and consultative services alike.",
        },
        {
          icon: "calendar",
          title: "It books appointments",
          desc: "When a customer asks for an appointment, it checks your availability and books it right inside the chat.",
        },
      ],
      gridRow: [
        {
          icon: "glasses",
          title: "It understands everything",
          desc: "Images, voice notes, documents, PDFs, video. Not just text.",
        },
        {
          icon: "books",
          title: "It remembers",
          desc: "Past conversations, context, preferences, so customers never have to repeat themselves.",
        },
        {
          icon: "brain",
          title: "It gets smarter",
          desc: "One click and it analyzes top-performing conversations to improve automatically.",
        },
        {
          icon: "plane",
          title: "It hands off",
          desc: "When a customer needs a person, the chat goes to your team with the full context, and they can take over any conversation at any time.",
        },
      ],
      bottomRow: [
        {
          icon: "link",
          title: "It connects to your tools",
          desc: "Send conversation data to your CRM, help desk or automation tools through webhooks, the API or Zapier.",
        },
        {
          icon: "roi",
          title: "Built to save your team time",
          desc: "Answer more messages without adding staff, around the clock, while your team steps in only where it matters.",
        },
      ],
    },
    integrations: {
      title: "Plugs into your stack",
      subtitle:
        "Don’t strand conversations outside CRM, support, or automation. Use native-style connectors, webhooks, and APIs.",
      tags: [
        "Chat automation tools",
        "CRM tools",
        "Support & ticketing",
        "Zapier & no-code",
        "Custom webhooks",
        "REST API",
      ],
    },
    pricing: {
      title: "Simple pricing. Pick the replies you need.",
      subtitle:
        "All prices are in US dollars. Start with a 3-day free trial, cancel any time, and get a full refund within 14 days of your first payment. Our order process is conducted by our online reseller Paddle.com, the Merchant of Record for all our orders.",
      footnote:
        "Every plan includes one connected WhatsApp number. Need more replies? Add 1,000 extra AI replies for $35. Yearly billing is priced at 10 months, so you get 2 months free. Taxes may apply depending on your country.",
      refundLabel: "Refund Policy",
      contactsLabel: "AI Replies per Month",
      currency: "USD",
      cta: "Start free trial",
      plans: [
        {
          name: "Starter",
          tag: "Getting started",
          price: "$29",
          period: "mo",
          contacts: 500,
          features: [...BASIC_FEATURES_EN],
        },
        {
          name: "Growth",
          tag: "Most popular",
          price: "$69",
          period: "mo",
          contacts: 1500,
          highlighted: true,
          features: [...PRO_FEATURES_EN],
        },
        {
          name: "Pro",
          tag: "Busy businesses",
          price: "$149",
          period: "mo",
          contacts: 4000,
          features: [...PREMIUM_FEATURES_EN],
        },
        {
          name: "Scale",
          tag: "High volume",
          price: "$349",
          period: "mo",
          contacts: 10000,
          features: [...PREMIUM_FEATURES_EN],
        },
      ],
    },
    closing: {
      title: "Ready to answer every customer, instantly?",
      subtitle: "",
      cta: "Get started",
    },
    footer: {
      tagline: "AI customer-support assistant for WhatsApp, Instagram, Messenger and web chat.",
      privacy: "Privacy",
      terms: "Terms",
      columns: [
        {
          title: "Features",
          links: [
            "Human Like AI",
            "WhatsApp AI",
            "Instagram AI",
            "Messenger AI",
            "Web Chat AI",
            "Real-time Web Search",
            "AI Appointment Booking",
            "1-Click AI",
            "Buying Questions AI",
            "Media AI",
            "AI Integrations",
          ],
        },
        {
          title: "Alternatives",
          links: ["Intercom", "Tidio", "Zendesk", "DIY/Zapier"],
        },
        {
          title: "Use Cases",
          links: ["High-Ticket", "E-commerce", "Real Estate", "Education"],
        },
        {
          title: "Company",
          links: ["Pricing", "Contact", "Refund Policy", "Privacy Policy", "Terms", "Sign In"],
        },
      ],
    },
    bands: {
      help: {
        title: "Help guide",
        body: "Documentation, video walkthroughs, and setup checklists — launching soon.",
      },
      contact: {
        title: "Contact",
        body: "Support@tryeasyreply.com",
        whatsapp: "01509000921",
        note: "Try our AI Agent directly from here. It will reply and assist you instantly.",
      },
    },
    a11y: { yes: "Included", no: "Not included" },
  },
  ar: {
    meta: {
      title: "Easy Reply — ردود ذكية على عملائك في واتساب وإنستغرام وماسنجر",
      description:
        "Easy Reply مساعد بالذكاء الاصطناعي يرد على الرسائل التي يرسلها لك عملاؤك على واتساب وإنستغرام وماسنجر ودردشة الموقع. ردود فورية من معلوماتك، وحجز مواعيد، وتسليم لفريقك على مدار الساعة.",
    },
    faq: {
      title: "الأسئلة الشائعة عن Easy Reply",
      subtitle: "كل ما تحتاج معرفته عن Easy Reply والردود التلقائية والرد التلقائي على واتساب والمحادثات.",
      items: [
        {
          q: "ما هو Easy Reply (إيزي ريپلاي)؟",
          a: "Easy Reply مساعد بالذكاء الاصطناعي لمحادثات العملاء على واتساب وإنستغرام وماسنجر ودردشة الموقع. يرد على الرسائل التي يرسلها لك العملاء من أسئلتك الشائعة وموقعك ومستنداتك، ويحجز المواعيد عند طلبها، ويسلّم المحادثة لفريقك عند الحاجة.",
        },
        {
          q: "ما هي الردود التلقائية؟",
          a: "الردود التلقائية تعني أن Easy Reply يرد على رسائل العملاء تلقائياً بالذكاء الاصطناعي على واتساب وإنستغرام وماسنجر وموقعك.",
        },
        {
          q: "هل يدعم Easy Reply الرد التلقائي على واتساب؟",
          a: "نعم. Easy Reply يؤتمت محادثات واتساب للأعمال: يرد على العملاء الذين يراسلونك، ويفهم الصور والرسائل الصوتية، ويحجز المواعيد، ويسلّم المحادثة لفريقك متى احتاج العميل إلى شخص.",
        },
        {
          q: "هل Easy Reply مجرد بوت قوائم؟",
          a: "لا. بدلاً من قوائم الأزرار الجامدة، يفهم Easy Reply ما سأله العميل فعلاً، ويتذكر المحادثة، ويجيب من معلوماتك أنت.",
        },
        {
          q: "هل يرسل Easy Reply رسائل لأشخاص لم يتواصلوا معي؟",
          a: "لا. Easy Reply يرد فقط على المحادثات التي يبدأها العميل مع عملك، على حسابك في واتساب للأعمال أو إنستغرام أو ماسنجر أو دردشة موقعك. ولا تتضمن الباقات أي إرسال جماعي أو رسائل ترويجية.",
        },
        {
          q: "هل يعرف عملائي أنهم يتحدثون مع ذكاء اصطناعي؟",
          a: "نعم، إذا أردت. فعّل خيار \"إخبار العملاء بأنهم يتحدثون مع ذكاء اصطناعي\" وسيذكر الوكيل في أول رد لكل شخص أنه مساعد ذكاء اصطناعي. ويمكن لفريقك تولّي أي محادثة في أي وقت.",
        },
        {
          q: "هل يعمل Easy Reply بالعربية والإنجليزية؟",
          a: "نعم. Easy Reply يدعم محادثات بالعربية والإنجليزية بردود طبيعية تناسب علامتك.",
        },
      ],
    },
    nav: [
      { href: "#features", label: "المزايا" },
      { href: "#compare", label: "البدائل" },
      { href: "/use-cases", label: "حالات الاستخدام" },
      { href: "#pricing", label: "الأسعار" },
      { href: "#contact", label: "تواصل" },
    ],
    langSwitch: "English",
    signIn: "تسجيل الدخول",
    startFree: "ابدأ مجاناً",
    hero: {
      titleParts: [
        { text: "ذكاء يشبه الإنسان يرد على ", em: false },
        { text: "كل رسالة من عملائك فوراً", em: true },
      ],
      mid: "لا تترك أي عميل ينتظر الرد.",
      sub: "ذكاء اصطناعي يرد على الرسائل التي يرسلها لك العملاء على واتساب وإنستغرام وماسنجر وموقعك: إجابات، وحجز مواعيد، وتسليم لفريقك. صندوق واحد. تشغيل سريع.",
      ctaPrimary: "تسجيل الدخول",
      ctaSecondary: "الأسعار",
    },
    heroShowcase: {
      eyebrow: "معاينة حية",
      tagline: "لمحة سريعة عن طريقة رد Easy Reply على العملاء: طبيعي، دقيق، ومفيد.",
      windowTitle: "مساعد بالذكاء الاصطناعي",
      footerNote: "نفس الذكاء على واتساب وإنستغرام وماسنجر ودردشة الموقع.",
      messages: [
        {
          from: "lead",
          chunks: ["أهلاً — ممكن تساعدني أختار الخطة المناسبة لفريقي؟"],
        },
        {
          from: "agent",
          chunks: ["أكيد.", "فين بيتم أغلب تواصل عملاءك حاليًا؟"],
        },
        {
          from: "lead",
          chunks: ["غالبًا واتساب ورسائل إنستغرام."],
        },
        {
          from: "agent",
          chunks: [
            "جميل. دي مزيج قوي فعلًا.",
            "أقدر أرد على أسئلة عملائك، وأحجز المواعيد، وأحوّل المحادثة لفريقك وقت الحاجة.",
            "تحب أشرح لك بسرعة تجربة الـ ٣ أيام؟",
          ],
        },
      ],
    },
    stats: [
      { label: "قنوات في صندوق واحد", value: "٤" },
      { label: "مدة الإعداد التقريبية", value: "١٥ دقيقة" },
      { label: "يرد دائماً", value: "24/7" },
    ],
    vision: {
      title: "محادثات عملاء طبيعية بالذكاء الاصطناعي",
      body: "بدلاً من قوائم البوت الجامدة، يدير Easy Reply محادثة طبيعية تجيب عمّا سأله كل عميل فعلاً. رؤيتنا: تمكين الأعمال من الرد على كل عميل بسرعة دون أن تضيع اللمسة الشخصية.",
    },
    compare: {
      badge: "إحنا مقابل الباقي",
      title: "مساعد ذكي مقابل البوت العادي",
      subtitle:
        "ما يقدّمه Easy Reply ولا يقدّمه بوت القوائم.",
      colFeature: "القدرة",
      colCompetitor: "بوتات دردشة عادية",
      rows: [
        { icon: "deal", name: "يساعد العميل على الاختيار عندما يسأل" },
        { icon: "objection", name: "يجيب عن الأسئلة التفصيلية" },
        { icon: "media", name: "يفهم الصور والصوت والفيديو" },
        { icon: "calendar", name: "يحجز المواعيد داخل المحادثة" },
        { icon: "memory", name: "يتذكر المحادثات السابقة" },
        { icon: "learn", name: "يتحسّن تلقائياً" },
        { icon: "brand", name: "ملائم لصوت علامتك وأسلوبها" },
        { icon: "channels", name: "كل القنوات في لوحة واحدة" },
      ],
    },
    how: {
      badge: "كيف يعمل",
      title: "جهّز وكيل الذكاء الاصطناعي خلال ١٥ دقيقة",
      subtitle:
        "عرّف عملك، الصق موقعك، واربط قنواتك. الذكاء الاصطناعي يتولى الباقي.",
      connectPrefix: "اربط ",
      typewriterChannels: ["WhatsApp", "Instagram", "Messenger", "Web Chat"] as const,
      ui: {
        addLinks: "أضف روابطك",
        customInstructions: "تعليمات مخصصة",
        generateAi: "إنشاء الذكاء الاصطناعي",
        siteUrl: "https://tryeasyreply.com/",
        chipSearch: "بحث ويب",
        chipBooking: "حجز",
        chipFollow: "تسليم لموظف",
        connected: "القنوات المتصلة",
        yourAgent: "وكيل الذكاء الاصطناعي",
        step1: "الخطوة ١",
        step2: "الخطوة ٢",
        step3: "الخطوة ٣",
        launch: "تشغيل",
        dashboard: "لوحة التحكم",
        optimize: "تحسين بنقرة واحدة",
        optimizeBarPrefix: "Make AI ",
        optimizeBarHighlight: "more",
        optimizeBarSuffixes: [" efficient", " helpful", " on-brand"] as const,
      },
      steps: [
        {
          title: "أضف موقعك",
          desc: "نقرأ عرضك، الأسعار، والأسئلة الشائعة لصياغة الوكيل — دون كتابة برومبت يدوياً.",
        },
        {
          title: "اختَر قنواتك",
          desc: "واتساب، إنستغرام، ماسنجر، ودردشة الموقع. فعّل القنوات التي تستخدمها. انتهى.",
        },
        {
          title: "شغّله",
          desc: "يبدأ الذكاء الاصطناعي الرد على العملاء الذين يراسلونك فوراً: الإجابة عن الأسئلة، وحجز المواعيد، وتسليم المحادثة لفريقك عند الحاجة — على مدار الساعة.",
        },
        {
          title: "استمر في التحسين",
          desc: "تابع النتائج من لوحة التحكم، واستخدم التحسين بنقرة واحدة لتطوير طريقة رد الوكيل مع الوقت.",
        },
      ],
    },
    features: {
      badge: "المزايا",
      title: "ليس بوت قوائم. إنه يجيب فعلاً.",
      subtitle: "إليك ما يفعله فعلياً لعملك.",
      topRow: [
        {
          icon: "sell",
          title: "يجيب",
          desc: "يجيب عن أسئلة المنتجات والأسعار والخدمات بمعلوماتك أنت، بوضوح ولباقة — للمنتجات البسيطة والخدمات الاستشارية على حد سواء.",
        },
        {
          icon: "calendar",
          title: "يحجز المواعيد",
          desc: "عندما يطلب العميل موعداً، يتحقق من أوقاتك المتاحة ويحجزه من داخل المحادثة.",
        },
      ],
      gridRow: [
        {
          icon: "glasses",
          title: "يفهم كل شيء",
          desc: "صور، رسائل صوتية، مستندات، PDF، وفيديو — ليس النص فقط.",
        },
        {
          icon: "books",
          title: "يتذكر",
          desc: "محادثات سابقة، سياق، وتفضيلات — فلا يضطر العميل لتكرار كلامه.",
        },
        {
          icon: "brain",
          title: "يصبح أذكى",
          desc: "بنقرة واحدة يحلّل أفضل المحادثات أداءً ويتحسّن تلقائياً.",
        },
        {
          icon: "plane",
          title: "يسلّم لفريقك",
          desc: "عندما يحتاج العميل إلى شخص، تنتقل المحادثة لفريقك بكامل سياقها، ويمكنهم تولّي أي محادثة في أي وقت.",
        },
      ],
      bottomRow: [
        {
          icon: "link",
          title: "يتصل بأدواتك",
          desc: "أرسل بيانات المحادثات إلى نظام CRM أو أداة الدعم أو أدوات الأتمتة عبر الويب هوك أو الـ API أو Zapier.",
        },
        {
          icon: "roi",
          title: "يوفّر وقت فريقك",
          desc: "رد على رسائل أكثر دون توظيف إضافي، على مدار الساعة، ويتدخل فريقك فقط حيث يلزم.",
        },
      ],
    },
    integrations: {
      title: "يتصل ببقية أدواتك",
      subtitle:
        "لا تعزل المحادثة عن CRM أو الدعم أو الأتمتة. تكاملات جاهزة أو ويب هوك وAPI.",
      tags: [
        "أدوات أتمتة الدردشة",
        "أنظمة CRM",
        "أدوات الدعم والتذاكر",
        "Zapier والأتمتة بدون كود",
        "ويب هوك مخصص",
        "REST API",
      ],
    },
    pricing: {
      title: "أسعار بسيطة. اختر عدد الردود الذي تحتاجه.",
      subtitle:
        "جميع الأسعار بالدولار الأمريكي. ابدأ بتجربة مجانية لمدة ٣ أيام، وألغِ في أي وقت، واسترد كامل المبلغ خلال ١٤ يوماً من أول دفعة. تتم عملية الشراء من خلال الموزّع المعتمد لدينا Paddle.com، وهو البائع الرسمي (Merchant of Record) لجميع طلباتنا.",
      footnote:
        "كل باقة تشمل رقم واتساب واحداً متصلاً. تحتاج ردوداً أكثر؟ أضف ١٬٠٠٠ رد إضافي مقابل ٣٥ دولاراً. الاشتراك السنوي بسعر ١٠ أشهر، أي شهرين مجاناً. قد تُضاف الضرائب حسب بلدك.",
      refundLabel: "سياسة الاسترداد",
      contactsLabel: "ردود ذكية شهرياً",
      currency: "USD",
      cta: "ابدأ التجربة المجانية",
      plans: [
        {
          name: "البداية",
          tag: "للبداية",
          price: "$29",
          period: "شهرياً",
          contacts: 500,
          features: [...BASIC_FEATURES_AR],
        },
        {
          name: "النمو",
          tag: "الأكثر طلباً",
          price: "$69",
          period: "شهرياً",
          contacts: 1500,
          highlighted: true,
          features: [...PRO_FEATURES_AR],
        },
        {
          name: "المحترف",
          tag: "للأعمال المزدحمة",
          price: "$149",
          period: "شهرياً",
          contacts: 4000,
          features: [...PREMIUM_FEATURES_AR],
        },
        {
          name: "التوسّع",
          tag: "حجم عالٍ",
          price: "$349",
          period: "شهرياً",
          contacts: 10000,
          features: [...PREMIUM_FEATURES_AR],
        },
      ],
    },
    closing: {
      title: "جاهز ترد على كل عميل فوراً؟",
      subtitle: "",
      cta: "ابدأ الآن",
    },
    footer: {
      tagline: "مساعد دعم عملاء بالذكاء الاصطناعي لواتساب وإنستغرام وماسنجر ودردشة الموقع.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط",
      columns: [
        {
          title: "المزايا",
          links: [
            "ذكاء اصطناعي بشري",
            "واتساب AI",
            "إنستغرام AI",
            "ماسنجر AI",
            "دردشة الموقع AI",
            "بحث ويب لحظي",
            "حجز مواعيد بالذكاء الاصطناعي",
            "ذكاء بنقرة واحدة",
            "إجابات أسئلة الشراء",
            "فهم الوسائط",
            "تكاملات الذكاء الاصطناعي",
          ],
        },
        {
          title: "البدائل",
          links: ["Intercom", "Tidio", "Zendesk", "DIY/Zapier"],
        },
        {
          title: "حالات الاستخدام",
          links: ["High-Ticket", "التجارة الإلكترونية", "العقارات", "التعليم"],
        },
        {
          title: "الشركة",
          links: ["الأسعار", "تواصل", "سياسة الاسترداد", "سياسة الخصوصية", "الشروط", "تسجيل الدخول"],
        },
      ],
    },
    bands: {
      help: {
        title: "دليل المساعدة",
        body: "توثيق، فيديوهات، وقوائم إعداد — قريباً.",
      },
      contact: {
        title: "تواصل",
        body: "Support@tryeasyreply.com",
        whatsapp: "01509000921",
        note: "يمكنك تجربة وكيل الذكاء الاصطناعي مباشرة من هنا، وهو الذي سيرد عليك ويتابع معك تلقائياً.",
      },
    },
    a11y: { yes: "متوفر", no: "غير متوفر" },
  },
} as const;

export type Copy = (typeof copy)["en"];
