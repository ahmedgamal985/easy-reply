const SITEMAP = "https://tryeasyreply.com/sitemap.xml";

const endpoints = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
];

for (const url of endpoints) {
  try {
    const res = await fetch(url);
    console.log(`${url} → ${res.status}`);
  } catch (err) {
    console.warn(`Failed: ${url}`, err.message);
  }
}

console.log("Search engine ping complete.");
