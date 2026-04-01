import { BrandMark } from "./components/BrandMark";
import { useLanguage } from "./LanguageContext";

const contactEmail = "Support@tryeasyreply.com";

type PolicySection = { title: string; body: string[]; bullets?: string[] };

const sectionsEn: PolicySection[] = [
  {
    title: "1. Introduction",
    body: [
      'This Privacy Policy describes how Easy Reply ("we," "us," or "our") collects, uses, and shares information when you use our AI-powered sales and customer engagement platform and related services ("Services").',
      "We are committed to protecting your privacy and complying with the General Data Protection Regulation (GDPR) and other applicable data protection laws.",
      `Data Controller Contact: ${contactEmail}`,
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "2.1 Information You Provide",
      "Account Information: Name, email address, phone number, company name, billing information",
      "Business Data: Customer lists, conversation histories, product information, pricing data",
      "Communication Data: Messages, voice notes, images, and documents shared through our platform",
      "Payment Information: Processed securely through Stripe (we don't store card details)",
      "",
      "2.2 Automatically Collected Information",
      "Usage Data: Features used, conversation metrics, API calls, performance data",
      "Device Information: IP address, browser type, operating system, device identifiers",
      "Log Data: Access times, pages viewed, system activity, error reports",
      "Location Data: Approximate location based on IP address",
      "",
      "2.3 Information from Third Parties",
      "Social Media Platforms: When you connect WhatsApp, Instagram, Facebook Messenger",
      "OAuth Providers: Profile information from Google, Microsoft, or Facebook login",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: ["3.1 Primary Purposes"],
    bullets: [
      "Provide and maintain our Services",
      "Process AI-powered conversations and sales automation",
      "Handle customer support and respond to inquiries",
      "Process payments and manage subscriptions",
      "Send service updates and important notifications",
      "3.2 AI Processing: We use AI services from OpenAI, Anthropic (Claude), and Google (Gemini). Your data is NOT used to train AI models and is processed solely to provide our Services.",
      "3.3 Legal Basis for Processing (GDPR): Contract performance, legitimate interests, consent, and legal obligations.",
    ],
  },
  {
    title: "4. Data Sharing and Sub-Processors",
    body: [
      "We may share data with service providers that help us operate the platform, including AI providers, communication providers, infrastructure providers, and payment processors.",
      "We do NOT sell your personal data or share data for third-party marketing.",
    ],
  },
  {
    title: "5. Data Retention",
    body: [
      "We retain data only as long as needed to provide the Services and comply with legal obligations.",
      "Upon account termination, data is deleted or anonymized within a reasonable period, unless retention is legally required.",
    ],
  },
  {
    title: "6. Your Rights Under GDPR",
    body: [
      `You may request access, correction, deletion, portability, restriction, objection, and withdrawal of consent. To exercise these rights, contact: ${contactEmail}.`,
      "Response time is typically within 30 days.",
    ],
  },
  {
    title: "7. Cookie Policy",
    body: [
      "We use essential, analytics, and functional cookies to operate and improve the Services.",
      "You can control cookies through your browser settings; disabling essential cookies may affect functionality.",
    ],
  },
  {
    title: "8. Data Security",
    body: [
      "We use industry-standard security measures including encryption in transit, access controls, monitoring, and incident response procedures.",
      "No system is 100% secure, but we follow legal obligations for breach notifications.",
    ],
  },
  {
    title: "9. International Data Transfers",
    body: [
      "When data is transferred internationally, we apply appropriate safeguards, such as Standard Contractual Clauses where required.",
    ],
  },
  {
    title: "10. Children's Privacy",
    body: ["Our Services are intended for business use and not directed to children under 16."],
  },
  {
    title: "11. AI-Specific Disclosures",
    body: [
      "AI may analyze conversations to provide responses and automation features.",
      "AI outputs may not always be error-free and human oversight may be needed for critical decisions.",
    ],
  },
  {
    title: "12. Marketing Communications",
    body: [
      "Marketing emails are opt-in. You can unsubscribe at any time using the link in marketing messages.",
      "Service and transactional messages may still be sent when required.",
    ],
  },
  {
    title: "13. Legal Disclosures",
    body: [
      "We may disclose information when legally required, to protect rights and safety, or to investigate fraud and abuse.",
    ],
  },
  {
    title: "14. Changes to This Policy",
    body: [
      "We may update this policy from time to time. Material changes will be communicated in advance when required.",
    ],
  },
  {
    title: "15. Privacy Contact",
    body: [`For privacy concerns or questions: ${contactEmail}`],
  },
  {
    title: "16. Supervisory Authority",
    body: [
      `If you have unresolved concerns, contact us first at ${contactEmail} and we will do our best to resolve them promptly.`,
    ],
  },
  {
    title: "17. California Privacy Rights",
    body: [
      `California residents may have additional rights under applicable law. To exercise rights, contact: ${contactEmail}.`,
    ],
  },
  {
    title: "18. Consent and Agreement",
    body: ["By using our Services, you acknowledge that you have read and understood this Privacy Policy."],
  },
];

const sectionsAr: PolicySection[] = [
  {
    title: "١. مقدمة",
    body: [
      'تصف سياسة الخصوصية هذه كيفية قيام Easy Reply («نحن» أو «لنا») بجمع المعلومات واستخدامها ومشاركتها عند استخدامكم منصة المبيعات والتفاعل مع العملاء المدعومة بالذكاء الاصطناعي والخدمات ذات الصلة («الخدمات»).',
      "نلتزم بحماية خصوصيتكم والامتثال للائحة حماية البيانات العامة (GDPR) وغيرها من قوانين حماية البيانات المعمول بها.",
      `جهة التحكم في البيانات — للتواصل: ${contactEmail}`,
    ],
  },
  {
    title: "٢. المعلومات التي نجمعها",
    body: [
      "٢.١ المعلومات التي تقدمونها",
      "معلومات الحساب: الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة، بيانات الفوترة",
      "بيانات الأعمال: قوائم العملاء، سجلات المحادثات، معلومات المنتجات، بيانات التسعير",
      "بيانات التواصل: الرسائل، الملاحظات الصوتية، الصور، والمستندات المشاركة عبر منصتنا",
      "معلومات الدفع: تُعالج بأمان عبر Stripe (لا نخزن بيانات البطاقات)",
      "",
      "٢.٢ المعلومات المجمعة تلقائيًا",
      "بيانات الاستخدام: الميزات المستخدمة، مقاييس المحادثات، استدعاءات واجهة البرمجة، بيانات الأداء",
      "معلومات الجهاز: عنوان IP، نوع المتصفح، نظام التشغيل، معرّفات الجهاز",
      "سجلات البيانات: أوقات الوصول، الصفحات المعروضة، نشاط النظام، تقارير الأخطاء",
      "بيانات الموقع: موقع تقريبي يستند إلى عنوان IP",
      "",
      "٢.٣ معلومات من أطراف ثالثة",
      "منصات التواصل الاجتماعي: عند ربط واتساب أو إنستغرام أو ماسنجر فيسبوك",
      "مزودو OAuth: معلومات الملف الشخصي من تسجيل الدخول عبر Google أو Microsoft أو Facebook",
    ],
  },
  {
    title: "٣. كيف نستخدم معلوماتكم",
    body: ["٣.١ الأغراض الأساسية"],
    bullets: [
      "تقديم الخدمات وصيانتها",
      "معالجة المحادثات المدعومة بالذكاء الاصطناعي وأتمتة المبيعات",
      "تقديم الدعم والرد على الاستفسارات",
      "معالجة المدفوعات وإدارة الاشتراكات",
      "إرسال تحديثات الخدمة والإشعارات المهمة",
      "٣.٢ معالجة الذكاء الاصطناعي: نستخدم خدمات ذكاء اصطناعي من OpenAI وAnthropic (Claude) وGoogle (Gemini). لا تُستخدم بياناتكم لتدريب نماذج الذكاء الاصطناعي، ويقتصر المعالجة على تقديم خدماتنا.",
      "٣.٣ الأساس القانوني للمعالجة (GDPR): تنفيذ العقد، المصالح المشروعة، الموافقة، والالتزامات القانونية.",
    ],
  },
  {
    title: "٤. مشاركة البيانات والمعالجون الفرعيون",
    body: [
      "قد نشارك البيانات مع مزودي خدمات يساعدوننا في تشغيل المنصة، بما في ذلك مزودي الذكاء الاصطناعي والاتصالات والبنية التحتية ومعالجات الدفع.",
      "لا نبيع بياناتكم الشخصية ولا نشاركها لتسويق أطراف ثالثة.",
    ],
  },
  {
    title: "٥. الاحتفاظ بالبيانات",
    body: [
      "نحتفظ بالبيانات فقط للمدة اللازمة لتقديم الخدمات والامتثال للالتزامات القانونية.",
      "عند إنهاء الحساب، تُحذف البيانات أو تُجهّل هويتها خلال فترة معقولة، ما لم يكن الاحتفاظ مطلوبًا قانونًا.",
    ],
  },
  {
    title: "٦. حقوقكم بموجب GDPR",
    body: [
      `يمكنكم طلب الوصول أو التصحيح أو الحذف أو النقل أو التقييد أو الاعتراض أو سحب الموافقة. لممارسة هذه الحقوق، تواصلوا مع: ${contactEmail}.`,
      "يُرد عادةً خلال ٣٠ يومًا.",
    ],
  },
  {
    title: "٧. سياسة ملفات تعريف الارتباط (الكوكيز)",
    body: [
      "نستخدم ملفات تعريف الارتباط الأساسية والتحليلية والوظيفية لتشغيل الخدمات وتحسينها.",
      "يمكنكم التحكم في الكوكيز عبر إعدادات المتصفح؛ قد يؤثر تعطيل الكوكيز الأساسية على الوظائف.",
    ],
  },
  {
    title: "٨. أمن البيانات",
    body: [
      "نطبق تدابير أمنية معيارية تشمل التشفير أثناء النقل، ضوابط الوصول، المراقبة، وإجراءات الاستجابة للحوادث.",
      "لا يوجد نظام آمن بنسبة ١٠٠٪، لكننا نلتزم بالتبليغ عن الاختراقات وفق القانون.",
    ],
  },
  {
    title: "٩. التحويلات الدولية للبيانات",
    body: [
      "عند نقل البيانات دوليًا، نطبق ضمانات مناسبة، مثل البنود التعاقدية المعيارية حيث يلزم.",
    ],
  },
  {
    title: "١٠. خصوصية الأطفال",
    body: ["الخدمات مخصصة للاستخدام التجاري وليست موجهة للأطفال دون سن ١٦ عامًا."],
  },
  {
    title: "١١. إفصاحات خاصة بالذكاء الاصطناعي",
    body: [
      "قد يحلل الذكاء الاصطناعي المحادثات لتقديم الردود وميزات الأتمتة.",
      "قد لا تكون مخرجات الذكاء الاصطناعي خالية من الأخطاء دائمًا، وقد يلزم الإشراف البشري للقرارات الحساسة.",
    ],
  },
  {
    title: "١٢. الاتصالات التسويقية",
    body: [
      "رسائل التسويق بالاشتراك فقط. يمكنكم إلغاء الاشتراك في أي وقت عبر الرابط في الرسائل.",
      "قد تُرسل رسائل الخدمة والمعاملات عند الاقتضاء.",
    ],
  },
  {
    title: "١٣. الإفصاحات القانونية",
    body: [
      "قد نفصح عن المعلومات عند الاقتضاء قانونًا، لحماية الحقوق والسلامة، أو للتحقيق في الاحتيال وإساءة الاستخدام.",
    ],
  },
  {
    title: "١٤. تغييرات على هذه السياسة",
    body: [
      "قد نحدّث هذه السياسة من وقت لآخر. سيتم إبلاغكم بالتغييرات الجوهرية مسبقًا عندما يقتضي القانون ذلك.",
    ],
  },
  {
    title: "١٥. جهة اتصال الخصوصية",
    body: [`للاستفسارات أو المخاوف المتعلقة بالخصوصية: ${contactEmail}`],
  },
  {
    title: "١٦. السلطة الإشرافية",
    body: [
      `إن كانت لديكم مخاوف لم تُحل، تواصلوا معنا أولاً على ${contactEmail} وسنبذل جهدنا لحلها بسرعة.`,
    ],
  },
  {
    title: "١٧. حقوق خصوصية كاليفورنيا",
    body: [
      `قد يتمتع سكان كاليفورنيا بحقوق إضافية بموجب القانون المعمول به. لممارسة الحقوق: ${contactEmail}.`,
    ],
  },
  {
    title: "١٨. الموافقة والإقرار",
    body: ["باستخدامكم للخدمات، تقرون بأنكم قرأتم وفهمتم سياسة الخصوصية هذه."],
  },
];

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const sections = isAr ? sectionsAr : sectionsEn;

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6">
      <main className="mx-auto max-w-3xl">
        <h1 className="text-center font-display text-4xl font-bold text-ink md:text-5xl">
          {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
        </h1>
        <p className="mt-4 text-center text-ink-muted">
          {isAr ? "آخر تحديث: سبتمبر ٢٠٢٥" : "Last updated: September, 2025"}
        </p>

        <div className="mt-10 space-y-8 text-ink-muted">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-bold text-ink">{section.title}</h2>
              <div className="mt-3 space-y-2 text-base leading-relaxed">
                {section.body.map((line, idx) =>
                  line ? <p key={`${section.title}-b-${idx}`}>{line}</p> : <div key={`${section.title}-b-${idx}`} />
                )}
                {section.bullets ? (
                  <ul className="mt-3 list-disc space-y-2 ps-6">
                    {section.bullets.map((item, bi) => (
                      <li key={`${section.title}-bl-${bi}`}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="mx-auto mt-16 max-w-6xl border-t border-gray-100 pt-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold text-ink">Features</h3>
            <ul className="mt-3 space-y-2 text-base text-ink-muted">
              <li>
                <a href="/features/human-like-ai-conversations" className="hover:text-accent">
                  Human Like AI
                </a>
              </li>
              <li>WhatsApp AI</li>
              <li>Instagram AI</li>
              <li>Messenger AI</li>
              <li>Web Chat AI</li>
              <li>Real-time Web Search</li>
              <li>AI Appointment Booking</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-ink">Alternatives</h3>
            <ul className="mt-3 space-y-2 text-base text-ink-muted">
              <li>
                <a href="/alternatives/manychat" className="hover:text-accent">
                  ManyChat
                </a>
              </li>
              <li>
                <a href="/alternatives/gohighlevel" className="hover:text-accent">
                  GoHighLevel
                </a>
              </li>
              <li>
                <a href="/alternatives/intercom" className="hover:text-accent">
                  Intercom
                </a>
              </li>
              <li>
                <a href="/alternatives/tidio" className="hover:text-accent">
                  Tidio
                </a>
              </li>
              <li>
                <a href="/alternatives/zendesk" className="hover:text-accent">
                  Zendesk
                </a>
              </li>
              <li>
                <a href="/alternatives/diy-zapier-solutions" className="hover:text-accent">
                  DIY/Zapier
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-ink">Use Cases</h3>
            <ul className="mt-3 space-y-2 text-base text-ink-muted">
              <li>
                <a href="/use-cases/high-ticket-service-providers" className="hover:text-accent">
                  High-Ticket
                </a>
              </li>
              <li>
                <a href="/use-cases/e-commerce-brands" className="hover:text-accent">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="/use-cases/real-estate-professionals" className="hover:text-accent">
                  Real Estate
                </a>
              </li>
              <li>
                <a href="/use-cases/educational-institutions" className="hover:text-accent">
                  Education
                </a>
              </li>
              <li>
                <a href="/use-cases/social-media-brands-influencers" className="hover:text-accent">
                  Influencers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-ink">Company</h3>
            <ul className="mt-3 space-y-2 text-base text-ink-muted">
              <li>
                <a href="/#pricing" className="hover:text-accent">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-accent">
                  Contact
                </a>
              </li>
              <li>About</li>
              <li>
                <a href="/privacy-policy" className="hover:text-accent">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-accent">
                  Terms
                </a>
              </li>
              <li>Sign In</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-8 border-t border-gray-100 pt-8 md:flex-row">
          <div className="text-center md:text-start">
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink-faint">Contact</p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-1 block text-lg font-semibold text-accent hover:text-accent-hover"
            >
              {contactEmail}
            </a>
          </div>
          <div className="text-center">
            <a href="/">
              <BrandMark variant="footer" />
            </a>
            <p className="mt-2 text-xs text-ink-faint">© 2026 Easy Reply, All Rights Reserved</p>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-ink-muted">
            <a href="/privacy-policy" className="hover:text-accent">
              Privacy
            </a>
            <a href="/terms" className="hover:text-accent">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
