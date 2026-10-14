import { BrandMark } from "./components/BrandMark";
import { useLanguage } from "./LanguageContext";

const contactEmail = "Support@tryeasyreply.com";

type TermsSection = { title: string; paragraphs: string[]; bullets?: string[] };

const termsSectionsEn: TermsSection[] = [
  {
    title: "1. Agreement to Terms",
    paragraphs: [
      'These Terms of Service ("Terms") are a legally binding agreement between you ("Customer," "you") and Ahmed Gamal, an individual based in Egypt, who operates Easy Reply ("Easy Reply," "we," "us," or "our").',
      'By accessing or using our AI-powered customer conversation software and related services (the "Services"), you agree to be bound by these Terms.',
      "If you do not agree, you must not use the Services.",
    ],
  },
  {
    title: "2. Service Description",
    paragraphs: ["Easy Reply is software that businesses use to answer their own customers. It only replies to conversations that a customer starts with the business; it does not include broadcasts, bulk sending or promotional messaging. It provides:"],
    bullets: [
      "An AI agent that replies to customers who message your business on WhatsApp, Instagram, Facebook Messenger and your website chat",
      "Appointment booking when a customer asks, and handoff of any chat to your team",
      "A shared inbox, contact management and tags",
      "Integrations through webhooks, an API and automation tools",
      "Analytics and optimization tools",
    ],
  },
  {
    title: "3. AI Services",
    paragraphs: [
      "The Services use third-party AI models to understand messages and draft replies on your behalf.",
      "Your data is processed only to provide the Services and is not used to train third-party AI models. Using the Services does not grant you ownership of those models.",
      "AI-generated replies can contain mistakes. You are responsible for the instructions and information you give the agent and for reviewing its behaviour.",
      "You must not present the AI agent as a human where the law or a channel's policies require you to disclose AI. The \"Tell contacts they're chatting with AI\" setting makes the agent say it is an AI assistant in its first reply to each person.",
    ],
  },
  {
    title: "4. Account Registration and Security",
    paragraphs: [
      "The Services are intended for business use. You must provide accurate account information and keep it updated.",
      "You are responsible for your account credentials and all activity under your account.",
      "Notify us immediately if you suspect unauthorized access.",
    ],
  },
  {
    title: "5. Acceptable Use and Messaging Rules",
    paragraphs: [
      "Easy Reply is built for conversations with people who contact your business or who agreed to hear from you. You agree not to:",
    ],
    bullets: [
      "Send spam, unsolicited messages or bulk messages to people who did not contact you or did not give you their consent",
      "Use purchased, rented or scraped contact lists, or contact people you have no relationship with",
      "Use the Services for cold outreach, telemarketing or mass marketing",
      "Break the policies of the messaging channels you connect, including the WhatsApp Business and Meta platform policies",
      "Use the Services for illegal, deceptive or harmful activity, or to infringe the rights of others",
      "Attempt unauthorized access, disruption or security breaches, or upload malware",
    ],
  },
  {
    title: "6. Payments and Subscriptions",
    paragraphs: [
      'Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.',
      "Plans are sold as monthly or yearly subscriptions, priced in US dollars and shown on our pricing page. Applicable taxes are calculated and collected by Paddle at checkout.",
      "Subscriptions renew automatically at the end of each billing period until you cancel. You can cancel at any time from your account or from the link in your Paddle receipt; you keep access until the end of the period you have already paid for.",
      "A new account may start with a 3-day free trial. If you do not cancel before the trial ends, your chosen plan starts and is billed.",
      "Each plan includes a monthly allowance of AI replies. Unused replies do not carry over to the next month. You can buy additional replies at any time.",
      "We may change our prices for future billing periods. We will tell you before a change applies to your subscription.",
    ],
  },
  {
    title: "7. Refunds",
    paragraphs: [
      "You can request a full refund of your first subscription payment within 14 days of that payment. Renewals are not refundable, except where the law requires it or where the Services were unavailable for a significant period because of a problem on our side.",
      "Refunds are issued by Paddle to the original payment method. The full details are in our Refund Policy at tryeasyreply.com/refund-policy.",
    ],
  },
  {
    title: "8. Intellectual Property",
    paragraphs: [
      "Easy Reply and its licensors retain all rights in the Services, software, branding and related materials.",
      "You retain rights to your own data, content and business information uploaded to the Services.",
      "Feedback you provide may be used by us to improve the Services.",
    ],
  },
  {
    title: "9. Data Protection and Privacy",
    paragraphs: [
      "Our handling of personal data is described in our Privacy Policy.",
      `For data protection questions, contact ${contactEmail}.`,
    ],
  },
  {
    title: "10. Third-Party Services",
    paragraphs: [
      "The Services work with third-party providers, for example messaging channels, AI, hosting and payment services.",
      "Your use of those channels and integrations may also be subject to the providers' own terms and policies.",
    ],
  },
  {
    title: "11. Availability and Support",
    paragraphs: [
      "We aim to keep the Services available and reliable, but we do not guarantee uninterrupted or error-free operation.",
      `Support is available by email at ${contactEmail}.`,
    ],
  },
  {
    title: "12. Disclaimers and Limitation of Liability",
    paragraphs: [
      'The Services are provided on an "AS IS" and "AS AVAILABLE" basis, to the maximum extent permitted by law.',
      "We do not promise any particular sales, revenue or business result from using the Services.",
      "Easy Reply is not liable for indirect, incidental or consequential damages, loss of profits or business interruption.",
    ],
  },
  {
    title: "13. Indemnification",
    paragraphs: [
      "You agree to indemnify and hold Easy Reply harmless from claims, damages and expenses arising from your use of the Services, your content, the messages you send, or your violation of these Terms or applicable law.",
    ],
  },
  {
    title: "14. Termination",
    paragraphs: [
      "You may stop using the Services and cancel your subscription at any time.",
      "We may suspend or terminate access for a material breach of these Terms, including the messaging rules in section 5, non-payment, illegal activity or abuse of the Services.",
      "After termination, access may end and retained data is handled according to our legal and privacy obligations.",
    ],
  },
  {
    title: "15. Governing Law and Disputes",
    paragraphs: [
      "Disputes should first be raised with us so we can try to resolve them in good faith.",
      "If unresolved, disputes are handled under the applicable governing law and competent jurisdiction, subject to any mandatory consumer protection law that applies to you.",
    ],
  },
  {
    title: "16. Changes to Terms",
    paragraphs: [
      "We may update these Terms from time to time. Continued use of the Services after changes take effect means you accept the updated Terms.",
    ],
  },
  {
    title: "17. Contact",
    paragraphs: [
      "Easy Reply is operated by Ahmed Gamal, Egypt.",
      `For legal, billing, support or terms-related questions: ${contactEmail}`,
    ],
  },
];

const termsSectionsAr: TermsSection[] = [
  {
    title: "١. الموافقة على الشروط",
    paragraphs: [
      'شروط الخدمة هذه ("الشروط") اتفاقية ملزمة قانونياً بينك ("العميل"، "أنت") وبين أحمد جمال (Ahmed Gamal)، فرد مقيم في مصر، وهو مشغّل خدمة Easy Reply ("Easy Reply"، "نحن").',
      'باستخدامك برنامج Easy Reply لمحادثات العملاء بالذكاء الاصطناعي والخدمات المرتبطة به ("الخدمات")، فإنك توافق على الالتزام بهذه الشروط.',
      "إذا لم توافق، فلا يجوز لك استخدام الخدمات.",
    ],
  },
  {
    title: "٢. وصف الخدمة",
    paragraphs: ["Easy Reply برنامج تستخدمه الأعمال للرد على عملائها. وهو يرد فقط على المحادثات التي يبدأها العميل مع النشاط، ولا يتضمن أي إرسال جماعي أو رسائل ترويجية. ويوفّر:"],
    bullets: [
      "وكيل ذكاء اصطناعي يرد على العملاء الذين يراسلون عملك عبر واتساب وإنستغرام وماسنجر ودردشة موقعك",
      "حجز المواعيد عندما يطلبها العميل، وتسليم أي محادثة لفريقك",
      "صندوق وارد مشترك وإدارة جهات الاتصال والتصنيفات",
      "تكاملات عبر الويب هوك والـ API وأدوات الأتمتة",
      "أدوات التحليلات والتحسين",
    ],
  },
  {
    title: "٣. خدمات الذكاء الاصطناعي",
    paragraphs: [
      "تستخدم الخدمات نماذج ذكاء اصطناعي من أطراف ثالثة لفهم الرسائل وصياغة الردود نيابةً عنك.",
      "تُعالج بياناتك فقط لتقديم الخدمات، ولا تُستخدم لتدريب نماذج الذكاء الاصطناعي لدى الأطراف الثالثة. ولا يمنحك استخدام الخدمات ملكية تلك النماذج.",
      "قد تحتوي الردود المولّدة بالذكاء الاصطناعي على أخطاء. أنت مسؤول عن التعليمات والمعلومات التي تعطيها للوكيل وعن مراجعة أدائه.",
      "لا يجوز لك تقديم وكيل الذكاء الاصطناعي على أنه إنسان حيث يوجب القانون أو سياسات القناة الإفصاح عن استخدام الذكاء الاصطناعي. ويجعل خيار \"إخبار العملاء بأنهم يتحدثون مع ذكاء اصطناعي\" الوكيلَ يذكر أنه مساعد ذكاء اصطناعي في أول رد لكل شخص.",
    ],
  },
  {
    title: "٤. تسجيل الحساب والأمن",
    paragraphs: [
      "الخدمات مخصّصة للاستخدام التجاري. يجب أن تقدّم معلومات حساب صحيحة وأن تحدّثها باستمرار.",
      "أنت مسؤول عن بيانات دخول حسابك وعن كل نشاط يتم من خلاله.",
      "أبلغنا فوراً إذا اشتبهت في أي دخول غير مصرّح به.",
    ],
  },
  {
    title: "٥. الاستخدام المقبول وقواعد المراسلة",
    paragraphs: [
      "صُمّم Easy Reply للمحادثات مع الأشخاص الذين يتواصلون مع عملك أو الذين وافقوا على استقبال رسائلك. وتوافق على ألّا:",
    ],
    bullets: [
      "ترسل رسائل مزعجة أو غير مرغوب فيها أو رسائل جماعية لأشخاص لم يتواصلوا معك أو لم يمنحوك موافقتهم",
      "تستخدم قوائم جهات اتصال مشتراة أو مستأجرة أو مجمّعة آلياً، أو تتواصل مع أشخاص لا تربطك بهم علاقة",
      "تستخدم الخدمات للتواصل البارد أو التسويق الهاتفي أو التسويق الجماعي",
      "تخالف سياسات قنوات المراسلة التي تربطها، بما فيها سياسات واتساب للأعمال ومنصات ميتا",
      "تستخدم الخدمات في نشاط غير قانوني أو مضلل أو ضار، أو للتعدي على حقوق الآخرين",
      "تحاول الدخول غير المصرّح به أو التعطيل أو الاختراق، أو ترفع برمجيات خبيثة",
    ],
  },
  {
    title: "٦. المدفوعات والاشتراكات",
    paragraphs: [
      "تتم عملية الشراء من خلال الموزّع المعتمد لدينا Paddle.com، وهو البائع الرسمي (Merchant of Record) لجميع طلباتنا. ويتولّى Paddle جميع استفسارات خدمة العملاء المتعلقة بالدفع ويتعامل مع عمليات الاسترداد.",
      "تُباع الخطط كاشتراكات شهرية أو سنوية بالدولار الأمريكي كما هو موضّح في صفحة الأسعار. ويحسب Paddle الضرائب المطبّقة ويحصّلها عند الدفع.",
      "تتجدّد الاشتراكات تلقائياً في نهاية كل فترة فوترة حتى تلغيها. ويمكنك الإلغاء في أي وقت من حسابك أو من الرابط الموجود في إيصال Paddle، ويستمر وصولك حتى نهاية الفترة التي دفعت قيمتها.",
      "قد يبدأ الحساب الجديد بتجربة مجانية لمدة ٣ أيام. إذا لم تلغِ قبل انتهاء التجربة، تبدأ الخطة التي اخترتها وتُحصّل قيمتها.",
      "تتضمّن كل خطة رصيداً شهرياً من ردود الذكاء الاصطناعي، ولا يُرحَّل الرصيد غير المستخدم إلى الشهر التالي. ويمكنك شراء ردود إضافية في أي وقت.",
      "قد نغيّر أسعارنا لفترات الفوترة المستقبلية، وسنبلغك قبل أن يُطبَّق أي تغيير على اشتراكك.",
    ],
  },
  {
    title: "٧. الاسترداد",
    paragraphs: [
      "يمكنك طلب استرداد كامل قيمة أول دفعة اشتراك خلال ١٤ يوماً من تاريخها. ولا تُسترد دفعات التجديد، إلا إذا اقتضى القانون ذلك أو تعطّلت الخدمات لفترة كبيرة بسبب مشكلة من جانبنا.",
      "يردّ Paddle المبالغ المستردّة إلى وسيلة الدفع الأصلية. والتفاصيل الكاملة في سياسة الاسترداد على tryeasyreply.com/refund-policy.",
    ],
  },
  {
    title: "٨. الملكية الفكرية",
    paragraphs: [
      "تحتفظ Easy Reply والجهات المرخِّصة لها بجميع الحقوق في الخدمات والبرمجيات والعلامة التجارية والمواد المرتبطة بها.",
      "تحتفظ أنت بحقوق بياناتك ومحتواك ومعلومات عملك التي ترفعها إلى الخدمات.",
      "قد نستخدم ملاحظاتك لتحسين الخدمات.",
    ],
  },
  {
    title: "٩. حماية البيانات والخصوصية",
    paragraphs: [
      "توضّح سياسة الخصوصية طريقة تعاملنا مع البيانات الشخصية.",
      `لأي أسئلة عن حماية البيانات، راسل ${contactEmail}.`,
    ],
  },
  {
    title: "١٠. خدمات الأطراف الثالثة",
    paragraphs: [
      "تعمل الخدمات مع مزوّدين من أطراف ثالثة، مثل قنوات المراسلة والذكاء الاصطناعي والاستضافة وخدمات الدفع.",
      "قد يخضع استخدامك لتلك القنوات والتكاملات أيضاً لشروط مزوّديها وسياساتهم.",
    ],
  },
  {
    title: "١١. التوفّر والدعم",
    paragraphs: [
      "نسعى لإبقاء الخدمات متاحة وموثوقة، لكننا لا نضمن تشغيلاً دون انقطاع أو دون أخطاء.",
      `الدعم متاح عبر البريد الإلكتروني ${contactEmail}.`,
    ],
  },
  {
    title: "١٢. إخلاء المسؤولية وحدودها",
    paragraphs: [
      'تُقدَّم الخدمات "كما هي" و"حسب التوفّر" إلى أقصى حد يسمح به القانون.',
      "لا نَعِد بأي مبيعات أو إيرادات أو نتائج تجارية محددة من استخدام الخدمات.",
      "لا تتحمّل Easy Reply المسؤولية عن الأضرار غير المباشرة أو العرضية أو التبعية، أو خسارة الأرباح، أو توقّف الأعمال.",
    ],
  },
  {
    title: "١٣. التعويض",
    paragraphs: [
      "توافق على تعويض Easy Reply وإبراء ذمتها من أي مطالبات أو أضرار أو نفقات تنشأ عن استخدامك للخدمات أو محتواك أو الرسائل التي ترسلها أو مخالفتك لهذه الشروط أو للقانون.",
    ],
  },
  {
    title: "١٤. الإنهاء",
    paragraphs: [
      "يمكنك التوقف عن استخدام الخدمات وإلغاء اشتراكك في أي وقت.",
      "يجوز لنا تعليق الوصول أو إنهاؤه عند مخالفة جوهرية لهذه الشروط، بما فيها قواعد المراسلة في البند ٥، أو عدم الدفع، أو نشاط غير قانوني، أو إساءة استخدام الخدمات.",
      "بعد الإنهاء قد يتوقف الوصول، ويُتعامل مع البيانات المحفوظة وفق التزاماتنا القانونية وسياسة الخصوصية.",
    ],
  },
  {
    title: "١٥. القانون الواجب التطبيق والنزاعات",
    paragraphs: [
      "يجب عرض أي نزاع علينا أولاً لمحاولة حلّه بحسن نية.",
      "إذا لم يُحل، يُنظر النزاع وفق القانون الواجب التطبيق والجهة القضائية المختصة، مع مراعاة أي قانون إلزامي لحماية المستهلك ينطبق عليك.",
    ],
  },
  {
    title: "١٦. تغييرات الشروط",
    paragraphs: [
      "قد نحدّث هذه الشروط من وقت لآخر. واستمرارك في استخدام الخدمات بعد سريان التغييرات يعني قبولك للشروط المحدّثة.",
    ],
  },
  {
    title: "١٧. الاتصال",
    paragraphs: [
      "يشغّل خدمة Easy Reply أحمد جمال (Ahmed Gamal)، مصر.",
      `لأي أسئلة قانونية أو متعلقة بالفوترة أو الدعم أو الشروط: ${contactEmail}`,
    ],
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
          {isAr ? "آخر تحديث: ١٥ أكتوبر ٢٠٢٦" : "Last updated: October 15, 2026"}
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
              <li>
                <a href="/refund-policy" className="hover:text-accent">
                  Refund Policy
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
            <a href="/refund-policy" className="hover:text-accent">
              Refund Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
