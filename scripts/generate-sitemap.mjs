import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://tryeasyreply.com";

const paths = [
  { loc: "/", priority: "1.0", changefreq: "daily" },
  { loc: "/whatsapp-automation", priority: "0.95", changefreq: "weekly" },
  { loc: "/chat-automation", priority: "0.95", changefreq: "weekly" },
  { loc: "/reply-automation", priority: "0.95", changefreq: "weekly" },
  { loc: "/ai-sales-agent", priority: "0.95", changefreq: "weekly" },
  { loc: "/use-cases", priority: "0.9", changefreq: "weekly" },
  { loc: "/use-cases/high-ticket-service-providers", priority: "0.85", changefreq: "weekly" },
  { loc: "/use-cases/e-commerce-brands", priority: "0.85", changefreq: "weekly" },
  { loc: "/use-cases/real-estate-professionals", priority: "0.85", changefreq: "weekly" },
  { loc: "/use-cases/educational-institutions", priority: "0.85", changefreq: "weekly" },
  { loc: "/use-cases/social-media-brands-influencers", priority: "0.85", changefreq: "weekly" },
  { loc: "/alternatives/manychat", priority: "0.8", changefreq: "monthly" },
  { loc: "/alternatives/gohighlevel", priority: "0.8", changefreq: "monthly" },
  { loc: "/alternatives/intercom", priority: "0.8", changefreq: "monthly" },
  { loc: "/alternatives/tidio", priority: "0.8", changefreq: "monthly" },
  { loc: "/alternatives/zendesk", priority: "0.8", changefreq: "monthly" },
  { loc: "/alternatives/diy-zapier-solutions", priority: "0.8", changefreq: "monthly" },
  { loc: "/features/human-like-ai-conversations", priority: "0.85", changefreq: "weekly" },
  { loc: "/features/whatsapp-business", priority: "0.9", changefreq: "weekly" },
  { loc: "/features/instagram", priority: "0.85", changefreq: "weekly" },
  { loc: "/features/facebook-messenger", priority: "0.85", changefreq: "weekly" },
  { loc: "/features/web-chat", priority: "0.85", changefreq: "weekly" },
  { loc: "/features/real-time-web-search", priority: "0.8", changefreq: "weekly" },
  { loc: "/features/ai-appointment-booking", priority: "0.85", changefreq: "weekly" },
  { loc: "/features/one-click-ai-optimization", priority: "0.8", changefreq: "weekly" },
  { loc: "/features/high-ticket-sales-capability", priority: "0.85", changefreq: "weekly" },
  { loc: "/features/complete-media-understanding", priority: "0.8", changefreq: "weekly" },
  { loc: "/features/integrations", priority: "0.8", changefreq: "weekly" },
  { loc: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { loc: "/terms", priority: "0.3", changefreq: "yearly" },
  { loc: "/refund-policy", priority: "0.3", changefreq: "yearly" },
];

const today = new Date().toISOString().slice(0, 10);

const urls = paths
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.loc === "/" ? "/" : p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml);
console.log(`sitemap.xml generated with ${paths.length} URLs`);
