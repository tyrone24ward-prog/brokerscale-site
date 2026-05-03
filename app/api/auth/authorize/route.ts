import { NextResponse } from "next/server";

const REDIRECT_URI = "https://www.brokerscaleai.com/api/auth/callback";

const SCOPES = [
  "contacts.readonly",
  "contacts.write",
  "conversations.readonly",
  "conversations.write",
  "conversations/message.readonly",
  "conversations/message.write",
  "calendars.readonly",
  "calendars/events.write",
  "opportunities.readonly",
  "opportunities.write",
  "locations.readonly",
  "workflows.readonly",
  "forms.readonly",
].join(" ");

export async function GET() {
  const clientId = process.env.GHL_OAUTH_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json(
      { error: "GHL_OAUTH_CLIENT_ID not found in environment" },
      { status: 500 }
    );
  }

  const authUrl = new URL(
    "https://marketplace.gohighlevel.com/oauth/chooselocation"
  );
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("scope", SCOPES);

  const finalUrl = authUrl.toString();

  // Return a page with the link so you can confirm the URL before clicking
  return new NextResponse(
    `<!DOCTYPE html>
<html>
<head>
  <title>BrokerScale AI — GHL Authorization</title>
  <style>
    body { font-family: sans-serif; background: #0a0f1e; color: #fff; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .card { background: #111827; border: 1px solid #1e3a5f; border-radius: 12px; padding: 40px; text-align: center; max-width: 500px; }
    h1 { color: #3b82f6; margin-bottom: 8px; }
    p { color: #94a3b8; font-size: 14px; }
    a.btn { display: inline-block; margin-top: 20px; background: #2563eb; color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; }
    a.btn:hover { background: #3b82f6; }
    .url { font-size: 11px; color: #475569; word-break: break-all; margin-top: 16px; }
    .env { font-size: 12px; color: #22c55e; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Connect GoHighLevel</h1>
    <p>Click the button below to authorize BrokerScale AI to access your GHL account.</p>
    <p class="env">Client ID loaded: ${clientId.slice(0, 8)}...</p>
    <a class="btn" href="${finalUrl}">Authorize with GoHighLevel →</a>
    <p class="url">${finalUrl}</p>
  </div>
</body>
</html>`,
    {
      status: 200,
      headers: { "Content-Type": "text/html" },
    }
  );
}
