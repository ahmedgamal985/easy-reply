import { useState } from "react";
import type { Lang } from "../locales";

type NavItem = {
  href: string;
  label: string;
};

type MegaLink = {
  label: string;
  href: string;
};

const megaMenus: Record<Lang, Record<string, { title: string; links: MegaLink[] }>> = {
  en: {
    Features: {
      title: "Features",
      links: [
        { label: "Human Like AI", href: "/features/human-like-ai-conversations" },
        { label: "WhatsApp AI", href: "/features/whatsapp-business" },
        { label: "Instagram AI", href: "/features/instagram" },
        { label: "Messenger AI", href: "/features/facebook-messenger" },
        { label: "Web Chat AI", href: "/features/web-chat" },
        { label: "Real-time Web Search", href: "/features/real-time-web-search" },
        { label: "AI Appointment Booking", href: "/features/ai-appointment-booking" },
        { label: "1-Click AI", href: "/features/one-click-ai-optimization" },
        { label: "AI Selling Agent", href: "/features/high-ticket-sales-capability" },
        { label: "Media AI", href: "/features/complete-media-understanding" },
        { label: "Comment DM AI", href: "/features/comment-to-dm-conversion" },
        { label: "AI Integrations", href: "/features/advanced-contact-campaign-management" },
      ],
    },
    Alternatives: {
      title: "Alternatives",
      links: [
        { label: "ManyChat", href: "/alternatives/manychat" },
        { label: "GoHighLevel", href: "/alternatives/gohighlevel" },
        { label: "Intercom", href: "/alternatives/intercom" },
        { label: "Tidio", href: "/alternatives/tidio" },
        { label: "Zendesk", href: "/alternatives/zendesk" },
        { label: "DIY/Zapier", href: "/alternatives/diy-zapier-solutions" },
      ],
    },
    "Use Cases": {
      title: "Use Cases",
      links: [
        { label: "High-Ticket", href: "/use-cases/high-ticket-service-providers" },
        { label: "E-commerce", href: "/use-cases/e-commerce-brands" },
        { label: "Real Estate", href: "/use-cases/real-estate-professionals" },
        { label: "Education", href: "/use-cases/educational-institutions" },
        { label: "Influencers", href: "/use-cases/social-media-brands-influencers" },
      ],
    },
  },
  ar: {
    "المزايا": {
      title: "المزايا",
      links: [
        { label: "ذكاء اصطناعي بشري", href: "/features/human-like-ai-conversations" },
        { label: "واتساب AI", href: "/features/whatsapp-business" },
        { label: "إنستغرام AI", href: "/features/instagram" },
        { label: "ماسنجر AI", href: "/features/facebook-messenger" },
        { label: "دردشة الموقع AI", href: "/features/web-chat" },
        { label: "بحث ويب لحظي", href: "/features/real-time-web-search" },
        { label: "حجز مواعيد بالذكاء الاصطناعي", href: "/features/ai-appointment-booking" },
        { label: "ذكاء بنقرة واحدة", href: "/features/one-click-ai-optimization" },
        { label: "وكيل بيع بالذكاء الاصطناعي", href: "/features/high-ticket-sales-capability" },
        { label: "فهم الوسائط", href: "/features/complete-media-understanding" },
        { label: "تعليقات إلى رسائل", href: "/features/comment-to-dm-conversion" },
        { label: "تكاملات الذكاء الاصطناعي", href: "/features/advanced-contact-campaign-management" },
      ],
    },
    "البدائل": {
      title: "البدائل",
      links: [
        { label: "ManyChat", href: "/alternatives/manychat" },
        { label: "GoHighLevel", href: "/alternatives/gohighlevel" },
        { label: "Intercom", href: "/alternatives/intercom" },
        { label: "Tidio", href: "/alternatives/tidio" },
        { label: "Zendesk", href: "/alternatives/zendesk" },
        { label: "DIY/Zapier", href: "/alternatives/diy-zapier-solutions" },
      ],
    },
    "حالات الاستخدام": {
      title: "حالات الاستخدام",
      links: [
        { label: "الخدمات عالية القيمة", href: "/use-cases/high-ticket-service-providers" },
        { label: "التجارة الإلكترونية", href: "/use-cases/e-commerce-brands" },
        { label: "العقارات", href: "/use-cases/real-estate-professionals" },
        { label: "التعليم", href: "/use-cases/educational-institutions" },
        { label: "المؤثرون", href: "/use-cases/social-media-brands-influencers" },
      ],
    },
  },
};

export function TopNavMegaMenu({ nav, lang }: { nav: NavItem[]; lang: Lang }) {
  const menuByLabel = megaMenus[lang];
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const activeMega = activeLabel ? menuByLabel[activeLabel] : undefined;
  const isFeatureMenu = activeLabel === "Features" || activeLabel === "المزايا";

  return (
    <div className="relative" onMouseLeave={() => setActiveLabel(null)}>
      <ul className="flex w-max max-w-full items-center justify-start gap-3 px-1 sm:gap-4 md:gap-5 lg:px-2 xl:mx-auto xl:justify-center">
        {nav.map((item) => {
          const hasMega = Boolean(menuByLabel[item.label]);
          return (
            <li
              key={item.href}
              className="shrink-0"
              onMouseEnter={() => {
                if (hasMega) setActiveLabel(item.label);
              }}
            >
              <a
                href={item.href}
                className="whitespace-nowrap text-[11px] font-medium text-ink-muted transition hover:text-accent sm:text-xs md:text-[13px]"
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      {activeMega ? (
        <div
          className={`absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-3 xl:block ${isFeatureMenu ? "w-[min(92vw,760px)]" : "w-[min(92vw,560px)]"}`}
        >
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.28)]">
            <h3 className="text-2xl font-bold leading-tight text-ink">{activeMega.title}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3 text-xl text-ink-muted">
              {activeMega.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
