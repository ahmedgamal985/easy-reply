const HOST = "tryeasyreply.com";
const KEY = "easy-reply-index-key-2026";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/whatsapp-auto-reply`,
  `https://${HOST}/ai-chat-replies`,
  `https://${HOST}/auto-reply`,
  `https://${HOST}/ai-assistant`,
  `https://${HOST}/use-cases`,
  `https://${HOST}/features/whatsapp-business`,
];

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }),
});

console.log(`IndexNow → ${res.status} ${res.statusText}`);
if (!res.ok) {
  console.log(await res.text());
}
