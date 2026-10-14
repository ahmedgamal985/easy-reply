import fs from "fs";

const token = process.env.CLOUDFLARE_API_TOKEN;
if (!token) {
  console.error("Set CLOUDFLARE_API_TOKEN");
  process.exit(1);
}

const zoneId = "53c174710099790af83685b843c3b1c2";
const res = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records?per_page=100`, {
  headers: { Authorization: `Bearer ${token}` },
});
const data = await res.json();
for (const r of data.result) {
  console.log(`${r.type.padEnd(5)} ${r.name.padEnd(30)} → ${r.content} (proxied: ${r.proxied})`);
}
