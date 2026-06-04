#!/usr/bin/env node
/**
 * Small local relay: POST /notify -> Discord Incoming Webhook.
 * No npm deps (uses Node built-ins only).
 *
 * Setup:
 *  1) Copy discord-webhook.config.example.json -> discord-webhook.config.json
 *  2) Put your Discord webhook URL inside (keep file secret / gitignored)
 *  OR set env DISCORD_WEBHOOK_URL
 *
 * Run:
 *  node discord-notify-server.js
 *
 * Test:
 *  Invoke-RestMethod http://127.0.0.1:8787/health
 */

const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 8787);
const CONFIG_PATH = path.join(__dirname, "discord-webhook.config.json");

function loadWebhookUrl() {
  const envUrl = (process.env.DISCORD_WEBHOOK_URL || "").trim();
  if (envUrl) return envUrl;
  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf8");
    const j = JSON.parse(raw);
    return (j.webhookUrl || "").trim();
  } catch (_) {
    return "";
  }
}

function sendDiscordWebhook(webhookUrl, payloadObj, onDone) {
  const payload = JSON.stringify(payloadObj);
  const u = new URL(webhookUrl);
  const isHttps = u.protocol === "https:";
  const mod = isHttps ? https : http;
  const opts = {
    hostname: u.hostname,
    path: u.pathname + u.search,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(payload, "utf8"),
    },
  };
  const req = mod.request(opts, (res) => {
    res.resume();
    onDone(null, res.statusCode);
  });
  req.on("error", onDone);
  req.write(payload, "utf8");
  req.end();
}

function buildEmbed(order) {
  const items = Array.isArray(order.items) ? order.items : [];
  const lines = items
    .map((it) => {
      const line = (it.priceDa || 0) * (it.qty || 0);
      const safeTitle = String(it.title || it.id || "?").replace(/[*`_]/g, "");
      return `• **${safeTitle}** ×${it.qty || 0} — **${line}** DA`;
    })
    .join("\n");
  const desc =
    `**Réf:** \`${order.ref || "—"}\`\n` +
    `**Moyen:** **${order.method || "—"}**\n` +
    `**Total:** **${order.totalDa != null ? order.totalDa : "—"}** DA\n` +
    (order.note ? `**Note:** ${String(order.note)}\n` : "") +
    `\n**Articles**\n${lines || "—"}`;

  return {
    embeds: [
      {
        title: "🛒 Nouvelle commande — LORANS-SHOP",
        description: desc,
        color: 0x3b82f6,
        timestamp: new Date(order.at || Date.now()).toISOString(),
      },
    ],
  };
}

function setCors(req, res) {
  const origin = req.headers.origin || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

const server = http.createServer((req, res) => {
  setCors(req, res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ ok: true, service: "lorans-discord-notify" }));
    return;
  }

  if (req.method !== "POST" || req.url !== "/notify") {
    res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ ok: false, error: "not_found" }));
    return;
  }

  let buf = "";
  req.on("data", (c) => {
    buf += c;
    if (buf.length > 200_000) req.destroy();
  });
  req.on("end", () => {
    let order;
    try {
      order = JSON.parse(buf || "{}");
    } catch (_) {
      res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ ok: false, error: "invalid_json" }));
      return;
    }

    const webhookUrl = loadWebhookUrl();
    if (!webhookUrl) {
      res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
      res.end(
        JSON.stringify({
          ok: false,
          error: "missing_discord_webhook",
          hint: "Set DISCORD_WEBHOOK_URL or create discord-webhook.config.json",
        })
      );
      return;
    }

    const body = buildEmbed(order);
    sendDiscordWebhook(webhookUrl, body, (err, status) => {
      if (err) {
        res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({ ok: false, error: String(err.message || err) }));
        return;
      }
      if (status >= 400) {
        res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({ ok: false, error: `discord_http_${status}` }));
        return;
      }
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ ok: true }));
    });
  });
});

server.listen(PORT, "127.0.0.1", () => {
  // eslint-disable-next-line no-console
  console.log(`[lorans] Discord notify POST http://127.0.0.1:${PORT}/notify   health GET /health`);
});
