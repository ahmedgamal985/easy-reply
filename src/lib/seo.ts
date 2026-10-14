import { SITE_NAME, SITE_URL } from "./site";
import { buildFaqJsonLd, buildSoftwareApplicationJsonLd } from "./seo-pages";

export type SeoInput = {
  title: string;
  description?: string;
  keywords?: string;
  path?: string;
  lang?: "en" | "ar";
  noindex?: boolean;
  includeFaqSchema?: boolean;
};

const OG_IMAGE = `${SITE_URL}/logo.png`;
const JSON_LD_ID = "easy-reply-jsonld";

function upsertMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, extra?: { hreflang?: string }) {
  const selector = extra?.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
  if (extra?.hreflang) el.hreflang = extra.hreflang;
}

function upsertJsonLd(payload: object) {
  let el = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = JSON_LD_ID;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(payload);
}

export function updateSeo({
  title,
  description = "",
  keywords = "",
  path = "/",
  lang = "en",
  noindex = false,
  includeFaqSchema = false,
}: SeoInput) {
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = fullTitle;

  upsertMeta("description", description);
  if (keywords) upsertMeta("keywords", keywords);
  upsertMeta("robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  upsertMeta("googlebot", "index, follow");

  upsertMeta("og:title", fullTitle, "property");
  upsertMeta("og:description", description, "property");
  upsertMeta("og:type", "website", "property");
  upsertMeta("og:url", canonical, "property");
  upsertMeta("og:site_name", SITE_NAME, "property");
  upsertMeta("og:locale", lang === "ar" ? "ar_EG" : "en_US", "property");
  upsertMeta("og:locale:alternate", lang === "ar" ? "en_US" : "ar_EG", "property");
  upsertMeta("og:image", OG_IMAGE, "property");
  upsertMeta("og:image:alt", `${SITE_NAME} — AI chat replies`, "property");

  upsertMeta("twitter:card", "summary_large_image");
  upsertMeta("twitter:title", fullTitle);
  upsertMeta("twitter:description", description);
  upsertMeta("twitter:image", OG_IMAGE);

  upsertLink("canonical", canonical);
  upsertLink("alternate", canonical, { hreflang: lang });
  upsertLink("alternate", canonical, { hreflang: lang === "ar" ? "en" : "ar" });
  upsertLink("alternate", canonical, { hreflang: "x-default" });

  const graph: object[] = [
    {
      "@type": "Organization",
      name: SITE_NAME,
      alternateName: ["EasyReply", "easy reply", "tryeasyreply", "إيزي ريپلاي"],
      url: SITE_URL,
      logo: OG_IMAGE,
      contactPoint: {
        "@type": "ContactPoint",
        email: "Support@tryeasyreply.com",
        contactType: "customer support",
        availableLanguage: ["English", "Arabic"],
      },
    },
    {
      "@type": "WebSite",
      name: SITE_NAME,
      alternateName: lang === "ar" ? "إيزي ريپلاي" : "Easy Reply",
      url: SITE_URL,
      inLanguage: ["en", "ar"],
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/use-cases?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      name: fullTitle,
      description,
      url: canonical,
      inLanguage: lang === "ar" ? "ar" : "en",
      isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
    },
  ];

  if (path === "/") {
    graph.push(buildSoftwareApplicationJsonLd(lang));
    if (includeFaqSchema) graph.push(buildFaqJsonLd(lang));
  }

  upsertJsonLd({ "@context": "https://schema.org", "@graph": graph });
}
