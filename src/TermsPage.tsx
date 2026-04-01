import { BrandMark } from "./components/BrandMark";
import { useLanguage } from "./LanguageContext";

const contactEmail = "Support@tryeasyreply.com";

type TermsSection = { title: string; paragraphs: string[]; bullets?: string[] };

const termsSectionsEn: TermsSection[] = [
  {
    title: "1. Agreement to Terms",
    paragraphs: [
      'These Terms of Service ("Terms") are a legally binding agreement between you ("Customer," "you") and Easy Reply ("Easy Reply," "we," "us," or "our").',
      'By accessing or using our AI-powered sales and customer engagement platform and related services (the "Services"), you agree to be bound by these Terms.',
      "If you do not agree, you must not use the Services.",
    ],
  },
  {
    title: "2. Service Description",
    paragraphs: ["Easy Reply provides:"],
    bullets: [
      "AI-powered conversational sales agents",
      "Multi-channel messaging (WhatsApp, Instagram, Facebook Messenger, Web Chat)",
      "Automated lead qualification and appointment booking",
      "Integrations with third-party platforms",
      "Analytics and optimization tools",
    ],
  },
  {
    title: "3. AI Services",
    paragraphs: [
      "We use AI models and services from providers such as OpenAI, Anthropic, and Google (Gemini) to support conversations and automation.",
      "AI processing is used to provide the Services and does not grant you ownership over third-party AI models.",
    ],
  },
  {
    title: "4. Account Registration and Security",
    paragraphs: [
      "Services are intended for business use. You must provide accurate account information and keep it updated.",
      "You are responsible for account credentials and all activity under your account.",
      "Notify us immediately if you suspect unauthorized access.",
    ],
  },
  {
    title: "5. Acceptable Use",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Use the Services for illegal activities or harmful conduct",
      "Send spam or unsolicited bulk messages in violation of platform rules",
      "Infringe third-party rights or violate applicable laws",
      "Attempt unauthorized access, disruption, or security breaches",
      "Upload malware or malicious code",
      "Misuse messaging channels or violate integrated platform policies",
    ],
  },
  {
    title: "6. Intellectual Property",
    paragraphs: [
      "Easy Reply and its licensors retain all rights in the Services, software, branding, and related materials.",
      "You retain rights to your own data, content, and business information uploaded to the platform.",
      "Feedback you provide may be used by us to improve the Services.",
    ],
  },
  {
    title: "7. Data Protection and Privacy",
    paragraphs: [
      "Our handling of personal data is described in our Privacy Policy.",
      `For data protection questions, contact ${contactEmail}.`,
    ],
  },
  {
    title: "8. Third-Party Services",
    paragraphs: [
      "The Services may integrate with third-party providers (for example messaging, AI, hosting, and payment services).",
      "Your use of such integrations may be subject to those providers' own terms and policies.",
    ],
  },
  {
    title: "9. Availability and Support",
    paragraphs: [
      "We aim to keep Services available and reliable, but we do not guarantee uninterrupted or error-free operation.",
      "Support channels and response times may vary by plan or agreement.",
    ],
  },
  {
    title: "10. Disclaimers and Limitation of Liability",
    paragraphs: [
      'Services are provided on an "AS IS" and "AS AVAILABLE" basis, to the maximum extent permitted by law.',
      "Easy Reply is not liable for indirect, incidental, or consequential damages, loss of profits, or business interruption.",
      "AI-generated outputs may contain errors and should be reviewed before high-impact use.",
    ],
  },
  {
    title: "11. Indemnification",
    paragraphs: [
      "You agree to indemnify and hold Easy Reply harmless from claims, damages, and expenses arising from your use of the Services, your content, or your violation of these Terms or applicable law.",
    ],
  },
  {
    title: "12. Termination",
    paragraphs: [
      "You may stop using the Services at any time.",
      "We may suspend or terminate access for material breach, non-payment, illegal activity, or abuse of the Services.",
      "After termination, access may end immediately and retained data handling follows our legal and privacy obligations.",
    ],
  },
  {
    title: "13. Governing Law and Disputes",
    paragraphs: [
      "Disputes should first be attempted in good-faith negotiation.",
      "If unresolved, disputes are handled under applicable governing law and competent jurisdiction as determined in your service agreement or mandatory law.",
    ],
  },
  {
    title: "14. Changes to Terms",
    paragraphs: [
      "We may update these Terms from time to time. Continued use of the Services after changes take effect means you accept the updated Terms.",
    ],
  },
  {
    title: "15. Contact",
    paragraphs: [`For legal, support, or terms-related questions: ${contactEmail}`],
  },
  {
    title: "16. Acknowledgment",
    paragraphs: [
      "By using Easy Reply, you confirm that you have read, understood, and agreed to these Terms.",
    ],
  },
];

const termsSectionsAr: TermsSection[] = [
  {
    title: "١. الموافقة على الشروط",
    paragraphs: [
      'تُعدّ شروط الخدمة هذه («الشروط») اتفاقًا ملزمًا قانونًا بينكم («العميل»، «أنتم») وبين Easy Reply («Easy Reply»، «نحن»، «لنا»).',
      'بالوصول إلى منصة المبيعات والتفاعل مع العملاء المدعومة بالذكاء الاصطناعي والخدمات ذات الصلة («الخدمات») أو استخدامها، توافقون على الالتزام بهذه الشروط.',
      "إن لم توافقوا، يجب ألا تستخدموا الخدمات.",
    ],
  },
  {
    title: "٢. وصف الخدمة",
    paragraphs: ["تقدّم Easy Reply:"],
    bullets: [
      "وكلاء مبيعات محادثة مدعومون بالذكاء الاصطناعي",
      "رسائل متعددة القنوات (واتساب، إنستغرام، ماسنجر فيسبوك، دردشة الويب)",
      "تأهيل العملاء المحتملين وحجز المواعيد تلقائيًا",
      "تكاملات مع منصات طرف ثالث",
      "أدوات تحليلات وتحسين",
    ],
  },
  {
    title: "٣. خدمات الذكاء الاصطناعي",
    paragraphs: [
      "نستخدم نماذج وخدمات ذكاء اصطناعي من مزودين مثل OpenAI وAnthropic وGoogle (Gemini) لدعم المحادثات والأتمتة.",
      "يُستخدم معالج الذكاء الاصطناعي لتقديم الخدمات ولا يمنحكم ملكية نماذج الذكاء الاصطناعي التابعة لأطراف ثالثة.",
    ],
  },
  {
    title: "٤. تسجيل الحساب والأمن",
    paragraphs: [
      "الخدمات مخصصة للاستخدام التجاري. يجب تقديم معلومات حساب دقيقة وتحديثها.",
      "تتحملون مسؤولية بيانات اعتماد الحساب وكل النشاط تحت حسابكم.",
      "أبلغونا فورًا إذا اشتبهتم في وصول غير مصرح به.",
    ],
  },
  {
    title: "٥. الاستخدام المقبول",
    paragraphs: ["توافقون على عدم:"],
    bullets: [
      "استخدام الخدمات لأنشطة غير قانونية أو سلوك ضار",
      "إرسال رسائل غير مرغوب فيها أو جماعية تخالف قواعد المنصات",
      "انتهاك حقوق الغير أو القوانين المعمول بها",
      "محاولة وصول غير مصرح به أو تعطيل أو خرق أمني",
      "تحميل برمجيات خبيثة أو ضارة",
      "إساءة استخدام قنوات الرسائل أو انتهاك سياسات المنصات المدمجة",
    ],
  },
  {
    title: "٦. الملكية الفكرية",
    paragraphs: [
      "تحتفظ Easy Reply والمرخصون لها بجميع الحقوق في الخدمات والبرمجيات والعلامات والمواد ذات الصلة.",
      "تحتفظون بحقوق بياناتكم ومحتواكم ومعلومات أعمالكم المرفوعة إلى المنصة.",
      "قد نستخدم الملاحظات التي تقدمونها لتحسين الخدمات.",
    ],
  },
  {
    title: "٧. حماية البيانات والخصوصية",
    paragraphs: [
      "يُوضح في سياسة الخصوصية كيفية معالجتنا للبيانات الشخصية.",
      `للاستفسارات المتعلقة بحماية البيانات: ${contactEmail}.`,
    ],
  },
  {
    title: "٨. خدمات الأطراف الثالثة",
    paragraphs: [
      "قد تتكامل الخدمات مع مزودي طرف ثالث (مثل الرسائل والذكاء الاصطناعي والاستضافة والدفع).",
      "قد يخضع استخدامكم لهذه التكاملات لشروط وسياسات هؤلاء المزودين.",
    ],
  },
  {
    title: "٩. التوفر والدعم",
    paragraphs: [
      "نسعى لإبقاء الخدمات متاحة وموثوقة، لكننا لا نضمن تشغيلًا دون انقطاع أو خالٍ من الأخطاء.",
      "قد تختلف قنوات الدعم وأوقات الاستجابة حسب الخطة أو الاتفاق.",
    ],
  },
  {
    title: "١٠. إخلاء المسؤولية وحدود المسؤولية",
    paragraphs: [
      "تُقدَّم الخدمات «كما هي» و«حسب التوفر»، في أقصى حد يسمح به القانون.",
      "لا تتحمل Easy Reply المسؤولية عن الأضرار غير المباشرة أو العرضية أو التبعية أو فقدان الأرباح أو انقطاع الأعمال.",
      "قد تحتوي مخرجات الذكاء الاصطناعي على أخطاء ويُنصح بمراجعتها قبل الاستخدامات ذات الأثر الكبير.",
    ],
  },
  {
    title: "١١. التعويض",
    paragraphs: [
      "توافقون على تعويض Easy Reply وحمايتها من المطالبات والأضرار والنفقات الناشئة عن استخدامكم للخدمات أو محتواكم أو انتهاكم لهذه الشروط أو القانون.",
    ],
  },
  {
    title: "١٢. الإنهاء",
    paragraphs: [
      "يمكنكم التوقف عن استخدام الخدمات في أي وقت.",
      "قد نعلق أو ننهي الوصول عند الإخلال الجسيم أو عدم السداد أو النشاط غير القانوني أو إساءة استخدام الخدمات.",
      "بعد الإنهاء قد ينتهي الوصول فورًا، وتُعالج البيانات المحفوظة وفق التزاماتنا القانونية وسياسة الخصوصية.",
    ],
  },
  {
    title: "١٣. القانون الواجب التطبيق والنزاعات",
    paragraphs: [
      "يُفضّل محاولة حل النزاعات بالتفاوض بحسن نية أولاً.",
      "إن لم يُحل النزاع، يُعالج بموجب القانون والاختصاص القضائي المعمول بهما وفق اتفاق الخدمة أو القانون الإلزامي.",
    ],
  },
  {
    title: "١٤. تغييرات الشروط",
    paragraphs: [
      "قد نحدّث هذه الشروط من وقت لآخر. استمرار استخدامكم للخدمات بعد سريان التغييرات يعني قبولكم للشروط المحدّثة.",
    ],
  },
  {
    title: "١٥. الاتصال",
    paragraphs: [`للاستفسارات القانونية أو الدعم أو المتعلقة بالشروط: ${contactEmail}`],
  },
  {
    title: "١٦. الإقرار",
    paragraphs: ["باستخدامكم Easy Reply، تؤكدون أنكم قرأتم وفهمتم ووافقتم على هذه الشروط."],
  },
];

export default function TermsPage() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const termsSections = isAr ? termsSectionsAr : termsSectionsEn;

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6">
      <main className="mx-auto max-w-3xl">
        <h1 className="text-center font-display text-4xl font-bold text-ink md:text-5xl">
          {isAr ? "شروط الخدمة" : "Terms of Service"}
        </h1>
        <p className="mt-4 text-center text-ink-muted">
          {isAr ? "آخر تحديث: سبتمبر ٢٠٢٥" : "Last updated: September, 2025"}
        </p>

        <div className="mt-10 space-y-8 text-ink-muted">
          {termsSections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-bold text-ink">{section.title}</h2>
              <div className="mt-3 space-y-2 text-base leading-relaxed">
                {section.paragraphs.map((line, pi) => (
                  <p key={`${section.title}-p-${pi}`}>{line}</p>
                ))}
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
