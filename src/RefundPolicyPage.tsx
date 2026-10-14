import { BrandMark } from "./components/BrandMark";
import { useLanguage } from "./LanguageContext";

const contactEmail = "Support@tryeasyreply.com";

type TermsSection = { title: string; paragraphs: string[]; bullets?: string[] };

// Required by Paddle, the merchant of record: refund eligibility has to be
// public. 14 days on the first payment - the owner's decision of 14 Oct 2026.
const termsSectionsEn: TermsSection[] = [
  {
    title: "Who handles payments and refunds",
    paragraphs: [
      'Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.',
      "Refunds are paid by Paddle to the payment method you used.",
    ],
  },
  {
    title: "Your first payment: 14 days",
    paragraphs: [
      "If Easy Reply is not right for you, you can request a full refund of your first subscription payment within 14 days of that payment, for any reason.",
    ],
    bullets: [
      "This applies once per customer, to the first payment of your first paid plan, monthly or yearly.",
      "Once the refund is issued, the subscription ends and access to paid features stops.",
    ],
  },
  {
    title: "Free trial",
    paragraphs: [
      "New accounts can start with a 3-day free trial. Cancel before the trial ends and you are not charged.",
    ],
  },
  {
    title: "Renewals",
    paragraphs: ["Renewal payments, monthly or yearly, are not refundable."],
    bullets: [
      "To avoid the next charge, cancel before your renewal date from your account or from the link in your Paddle receipt.",
      "You keep access until the end of the period you have already paid for.",
    ],
  },
  {
    title: "Extra AI replies",
    paragraphs: [
      "Extra reply packs can be refunded within 14 days of purchase if none of the extra replies have been used.",
    ],
  },
  {
    title: "If the service is unavailable",
    paragraphs: [
      "If Easy Reply is unavailable for a significant period because of a problem on our side, we will refund the time you could not use, in proportion to what you paid for that period.",
    ],
  },
  {
    title: "How to request a refund",
    paragraphs: [
      `Email ${contactEmail} from the email address on your account and include your Paddle receipt or order number. You can also contact Paddle directly through the link in your receipt.`,
      "Refunds usually appear on your statement within a few business days, depending on your bank.",
    ],
  },
  {
    title: "Your legal rights",
    paragraphs: [
      "Nothing in this policy limits any right to a refund that you have under the consumer protection laws that apply to you.",
    ],
  },
];

const termsSectionsAr: TermsSection[] = [
  {
    title: "من يتولّى المدفوعات والاسترداد",
    paragraphs: [
      "تتم عملية الشراء من خلال الموزّع المعتمد لدينا Paddle.com، وهو البائع الرسمي (Merchant of Record) لجميع طلباتنا. ويتولّى Paddle جميع استفسارات خدمة العملاء المتعلقة بالدفع ويتعامل مع عمليات الاسترداد.",
      "يردّ Paddle المبالغ المستردّة إلى وسيلة الدفع التي استخدمتها.",
    ],
  },
  {
    title: "أول دفعة: ١٤ يوماً",
    paragraphs: [
      "إذا لم يكن Easy Reply مناسباً لك، يمكنك طلب استرداد كامل قيمة أول دفعة اشتراك خلال ١٤ يوماً من تاريخها، لأي سبب.",
    ],
    bullets: [
      "ينطبق ذلك مرة واحدة لكل عميل، على أول دفعة من أول خطة مدفوعة، شهرية كانت أو سنوية.",
      "بمجرد ردّ المبلغ ينتهي الاشتراك ويتوقف الوصول إلى المزايا المدفوعة.",
    ],
  },
  {
    title: "التجربة المجانية",
    paragraphs: [
      "يمكن للحسابات الجديدة البدء بتجربة مجانية لمدة ٣ أيام. ألغِ قبل انتهاء التجربة ولن يُحصَّل منك أي مبلغ.",
    ],
  },
  {
    title: "التجديدات",
    paragraphs: ["لا تُسترد قيمة دفعات التجديد، شهرية كانت أو سنوية."],
    bullets: [
      "لتجنّب الدفعة التالية، ألغِ قبل تاريخ التجديد من حسابك أو من الرابط الموجود في إيصال Paddle.",
      "يستمر وصولك حتى نهاية الفترة التي دفعت قيمتها.",
    ],
  },
  {
    title: "الردود الإضافية",
    paragraphs: [
      "يمكن استرداد قيمة باقات الردود الإضافية خلال ١٤ يوماً من الشراء إذا لم يُستخدم أي رد منها.",
    ],
  },
  {
    title: "إذا تعطّلت الخدمة",
    paragraphs: [
      "إذا تعطّل Easy Reply لفترة كبيرة بسبب مشكلة من جانبنا، نردّ لك قيمة المدة التي لم تتمكّن من استخدامها، بالتناسب مع ما دفعته عن تلك الفترة.",
    ],
  },
  {
    title: "طريقة طلب الاسترداد",
    paragraphs: [
      `راسل ${contactEmail} من البريد الإلكتروني المسجّل في حسابك، وأرفق إيصال Paddle أو رقم الطلب. ويمكنك أيضاً التواصل مع Paddle مباشرة من الرابط الموجود في الإيصال.`,
      "يظهر المبلغ المسترد عادةً في كشف حسابك خلال بضعة أيام عمل بحسب البنك.",
    ],
  },
  {
    title: "حقوقك القانونية",
    paragraphs: [
      "لا يحدّ أي بند في هذه السياسة من أي حق في الاسترداد تكفله لك قوانين حماية المستهلك المعمول بها.",
    ],
  },
];

export default function RefundPolicyPage() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const termsSections = isAr ? termsSectionsAr : termsSectionsEn;

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6">
      <main className="mx-auto max-w-3xl">
        <h1 className="text-center font-display text-4xl font-bold text-ink md:text-5xl">
          {isAr ? "سياسة الاسترداد" : "Refund Policy"}
        </h1>
        <p className="mt-4 text-center text-ink-muted">
          {isAr ? "آخر تحديث: ١٤ أكتوبر ٢٠٢٦" : "Last updated: October 14, 2026"}
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
