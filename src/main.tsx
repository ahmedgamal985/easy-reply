import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import TermsPage from "./TermsPage";
import RefundPolicyPage from "./RefundPolicyPage";
import HighTicketUseCasePage from "./HighTicketUseCasePage";
import EcommerceUseCasePage from "./EcommerceUseCasePage";
import RealEstateUseCasePage from "./RealEstateUseCasePage";
import EducationUseCasePage from "./EducationUseCasePage";
import UseCasesOverviewPage from "./UseCasesOverviewPage";
import IntercomAlternativePage from "./IntercomAlternativePage";
import TidioAlternativePage from "./TidioAlternativePage";
import ZendeskAlternativePage from "./ZendeskAlternativePage";
import DIYZapierAlternativePage from "./DIYZapierAlternativePage";
import HumanLikeAIPage from "./HumanLikeAIPage";
import WhatsAppFeaturePage from "./WhatsAppFeaturePage";
import InstagramFeaturePage from "./InstagramFeaturePage";
import MessengerFeaturePage from "./MessengerFeaturePage";
import WebChatFeaturePage from "./WebChatFeaturePage";
import RealTimeWebSearchFeaturePage from "./RealTimeWebSearchFeaturePage";
import AIAppointmentBookingFeaturePage from "./AIAppointmentBookingFeaturePage";
import OneClickAIOptimizationFeaturePage from "./OneClickAIOptimizationFeaturePage";
import AISellingAgentFeaturePage from "./AISellingAgentFeaturePage";
import MediaAIFeaturePage from "./MediaAIFeaturePage";
import AIIntegrationsFeaturePage from "./AIIntegrationsFeaturePage";
import KeywordLandingPage from "./KeywordLandingPage";
import { LanguageProvider } from "./LanguageContext";
import { SeoUpdater } from "./components/SeoUpdater";
import { SIGNIN_URL, SITE_URL } from "./lib/site";

const whatsappAgentLink = "https://wa.me/201509000921";
const signinLink = SIGNIN_URL;
const homeLink = `${SITE_URL}/`;
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const clickable = target.closest("a, button");
  if (!clickable) return;

  const anchor = clickable.tagName.toLowerCase() === "a" ? (clickable as HTMLAnchorElement) : null;
  const label = (clickable.textContent || "").trim();
  const normalizedLabel = label.toLowerCase();
  const isStartFree =
    normalizedLabel === "start free" ||
    normalizedLabel === "start for free" ||
    label === "ابدأ مجاناً" ||
    label === "ابدأ مجانًا";
  const isSignIn = normalizedLabel === "sign in" || label === "تسجيل الدخول";
  const anchorHref = anchor?.getAttribute("href") || "";
  const isContact = normalizedLabel === "contact" || label === "تواصل" || anchorHref === "#contact";
  const isPricingPlanCta = Boolean(clickable.closest('section#pricing article'));
  const isHomeClick = anchorHref === "/";

  if (isContact) {
    event.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#contact";
    }
    return;
  }

  if (isSignIn) {
    event.preventDefault();
    window.location.href = signinLink;
    return;
  }

  if (isHomeClick) {
    event.preventDefault();
    window.location.href = homeLink;
    return;
  }

  if (isStartFree || isPricingPlanCta) {
    event.preventDefault();
    window.location.href = whatsappAgentLink;
  }
});

const path = window.location.pathname.replace(/\/+$/, "") || "/";

type KeywordPageKey = "/whatsapp-auto-reply" | "/ai-chat-replies" | "/auto-reply" | "/ai-assistant";
const KEYWORD_PATHS: KeywordPageKey[] = [
  "/whatsapp-auto-reply",
  "/ai-chat-replies",
  "/auto-reply",
  "/ai-assistant",
];

const Page = KEYWORD_PATHS.includes(path as KeywordPageKey)
  ? () => <KeywordLandingPage pageKey={path as KeywordPageKey} />
  : path === "/privacy-policy"
    ? PrivacyPolicyPage
    : path === "/terms"
      ? TermsPage
      : path === "/refund-policy"
      ? RefundPolicyPage
      : path === "/use-cases"
        ? UseCasesOverviewPage
      : path === "/use-cases/high-ticket-service-providers"
        ? HighTicketUseCasePage
        : path === "/use-cases/e-commerce-brands"
          ? EcommerceUseCasePage
          : path === "/use-cases/real-estate-professionals"
            ? RealEstateUseCasePage
            : path === "/use-cases/educational-institutions"
              ? EducationUseCasePage
              : path === "/alternatives/intercom"
                      ? IntercomAlternativePage
                      : path === "/alternatives/tidio"
                        ? TidioAlternativePage
                        : path === "/alternatives/zendesk"
                          ? ZendeskAlternativePage
                          : path === "/alternatives/diy-zapier-solutions"
                            ? DIYZapierAlternativePage
                            : path === "/features/human-like-ai-conversations"
                              ? HumanLikeAIPage
                              : path === "/features/whatsapp-business"
                                ? WhatsAppFeaturePage
                                : path === "/features/instagram"
                                  ? InstagramFeaturePage
                                  : path === "/features/facebook-messenger"
                                    ? MessengerFeaturePage
                                    : path === "/features/web-chat"
                                      ? WebChatFeaturePage
                                      : path === "/features/real-time-web-search"
                                        ? RealTimeWebSearchFeaturePage
                                        : path === "/features/ai-appointment-booking"
                                          ? AIAppointmentBookingFeaturePage
                                          : path === "/features/one-click-ai-optimization"
                                            ? OneClickAIOptimizationFeaturePage
                                            : path === "/features/buying-questions"
                                              ? AISellingAgentFeaturePage
                                              : path === "/features/complete-media-understanding"
                                                ? MediaAIFeaturePage
                                                : path === "/features/integrations"
                                                    ? AIIntegrationsFeaturePage
        : App;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <SeoUpdater />
      <Page />
    </LanguageProvider>
  </StrictMode>
);
