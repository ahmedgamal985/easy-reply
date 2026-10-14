import fs from "fs";
import os from "os";
import path from "path";

const siteId = "610f8c14-10d3-4e6e-a720-e24316a884cf";
const configPath = path.join(os.homedir(), "AppData/Roaming/netlify/Config/config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const userId = config.userId;
const token = config.users[userId].auth.token;

const res = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}`, {
  method: "PATCH",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    custom_domain: "tryeasyreply.com",
    domain_aliases: ["www.tryeasyreply.com"],
  }),
});

const data = await res.json();
if (!res.ok) {
  console.error("Failed:", data);
  process.exit(1);
}

console.log("Netlify domains updated:");
console.log("  custom_domain:", data.custom_domain);
console.log("  domain_aliases:", data.domain_aliases?.join(", "));
console.log("  ssl_url:", data.ssl_url);
