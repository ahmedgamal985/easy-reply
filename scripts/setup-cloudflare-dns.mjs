/**
 * DNS migration for tryeasyreply.com:
 *   - apex (@) + www → Netlify (marketing site)
 *   - app → SaaS platform (tenants.youraiconnector.com)
 *
 * Usage: set CLOUDFLARE_API_TOKEN=... && node scripts/setup-cloudflare-dns.mjs
 */

const ZONE_NAME = "tryeasyreply.com";
const NETLIFY_TARGET = "celebrated-kleicha-937c74.netlify.app";
const SAAS_TARGET = "tenants.youraiconnector.com";

const token = process.env.CLOUDFLARE_API_TOKEN;
if (!token) {
  console.error("Missing CLOUDFLARE_API_TOKEN environment variable.");
  process.exit(1);
}

async function cf(path, options = {}) {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const data = await res.json();
  if (!data.success) {
    throw new Error(JSON.stringify(data.errors || data, null, 2));
  }
  return data.result;
}

async function upsertCname(zoneId, name, content, proxied = true) {
  const fqdn = name === "@" ? ZONE_NAME : `${name}.${ZONE_NAME}`;
  const records = await cf(`/zones/${zoneId}/dns_records?name=${encodeURIComponent(fqdn)}`);
  const payload = {
    type: "CNAME",
    name,
    content,
    proxied,
    ttl: 1,
  };

  const cname = records.find((r) => r.type === "CNAME");
  if (cname) {
    console.log(`Updating ${fqdn} → ${content} (proxied: ${proxied})`);
    return cf(`/zones/${zoneId}/dns_records/${cname.id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
  }

  for (const record of records) {
    if (record.type === "MX" || record.type === "TXT") {
      console.log(`Keeping ${record.type} record for ${fqdn}`);
      continue;
    }
    console.log(`Removing conflicting ${record.type} record for ${fqdn} (${record.content})`);
    await cf(`/zones/${zoneId}/dns_records/${record.id}`, { method: "DELETE" });
  }

  console.log(`Creating ${fqdn} → ${content} (proxied: ${proxied})`);
  return cf(`/zones/${zoneId}/dns_records`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

const zones = await cf(`/zones?name=${ZONE_NAME}`);
const zone = zones[0];
if (!zone) throw new Error(`Zone not found: ${ZONE_NAME}`);
console.log(`Zone: ${zone.name} (${zone.id})\n`);

await upsertCname(zone.id, "@", NETLIFY_TARGET, true);
await upsertCname(zone.id, "www", NETLIFY_TARGET, true);
await upsertCname(zone.id, "app", SAAS_TARGET, true);

const ssl = await cf(`/zones/${zone.id}/settings/ssl`);
if (ssl.value === "flexible") {
  console.log("\nSetting SSL mode to 'full' (required for Netlify)...");
  await cf(`/zones/${zone.id}/settings/ssl`, {
    method: "PATCH",
    body: JSON.stringify({ value: "full" }),
  });
  console.log("SSL mode updated to full.");
} else {
  console.log(`\nSSL mode: ${ssl.value}`);
}

console.log("\nDone. Next steps:");
console.log("  1. Add tryeasyreply.com + www.tryeasyreply.com in Netlify → Domain settings");
console.log("  2. In white-label dashboard, set app domain to app.tryeasyreply.com");
console.log("  3. Deploy: npm run build && npx netlify-cli deploy --prod --dir=dist");
