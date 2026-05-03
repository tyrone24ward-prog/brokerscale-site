import { NextRequest, NextResponse } from "next/server";

const GHL_TOKEN_URL = "https://services.leadconnectorhq.com/oauth/token";
const CLIENT_ID = process.env.GHL_OAUTH_CLIENT_ID!;
const CLIENT_SECRET = process.env.GHL_OAUTH_CLIENT_SECRET!;
const REDIRECT_URI = "https://www.brokerscaleai.com/api/auth/callback";

// Stored under a different name — Vercel strips its own VERCEL_TOKEN at runtime
const VERCEL_API_TOKEN = process.env.VERCEL_API_TOKEN!;
const VERCEL_PROJECT_ID = "prj_BSoatRarIN1dq4C4yeRnp0WATuDb";
const VERCEL_TEAM_ID = "team_hAk6CQEjpdDFhy2zCrInLH6V";

async function upsertVercelEnvVar(key: string, value: string) {
  const base = `https://api.vercel.com/v9/projects/${VERCEL_PROJECT_ID}/env`;
  const headers = {
    Authorization: `Bearer ${VERCEL_API_TOKEN}`,
    "Content-Type": "application/json",
  };

  // Fetch existing vars to find the ID if it exists
  const listRes = await fetch(`${base}?teamId=${VERCEL_TEAM_ID}`, { headers });
  const listData = await listRes.json();
  const existing = (listData.envs || []).find((e: { key: string }) => e.key === key);

  if (existing?.id) {
    // Update in place
    const patchRes = await fetch(
      `https://api.vercel.com/v9/projects/${VERCEL_PROJECT_ID}/env/${existing.id}?teamId=${VERCEL_TEAM_ID}`,
      {
        method: "PATCH",
        headers,
        body: JSON.stringify({ value, target: ["production"], type: "encrypted" }),
      }
    );
    const patchData = await patchRes.json();
    console.log(`Updated ${key}:`, patchRes.status, patchData.error || "ok");
  } else {
    // Create new
    const createRes = await fetch(
      `https://api.vercel.com/v10/projects/${VERCEL_PROJECT_ID}/env?teamId=${VERCEL_TEAM_ID}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          key,
          value,
          type: "encrypted",
          target: ["production"],
        }),
      }
    );
    const createData = await createRes.json();
    console.log(`Created ${key}:`, createRes.status, createData.error || "ok");
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    return NextResponse.json(
      { error: `GHL OAuth error: ${error}` },
      { status: 400 }
    );
  }

  if (!code) {
    return NextResponse.json(
      { error: "No authorization code received from GHL" },
      { status: 400 }
    );
  }

  try {
    // Exchange code for tokens
    const response = await fetch(GHL_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }).toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("GHL token exchange failed:", data);
      return NextResponse.json(
        { error: "Token exchange failed", details: data },
        { status: 500 }
      );
    }

    const expiresAt = new Date(Date.now() + data.expires_in * 1000).toISOString();
    const locationId = data.locationId || data.location_id || "";

    // Save all tokens to Vercel env vars
    await Promise.all([
      upsertVercelEnvVar("GHL_ACCESS_TOKEN", data.access_token),
      upsertVercelEnvVar("GHL_REFRESH_TOKEN", data.refresh_token),
      upsertVercelEnvVar("GHL_TOKEN_EXPIRES_AT", expiresAt),
      upsertVercelEnvVar("GHL_TOKEN_LOCATION_ID", locationId),
    ]);

    console.log("GHL OAuth complete:", {
      location_id: locationId,
      expires_at: expiresAt,
      scope: data.scope,
    });

    return new NextResponse(
      `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>BrokerScale AI &mdash; Connected</title>
  <style>
    body { font-family: sans-serif; background: #0a0f1e; color: #fff; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .card { background: #111827; border: 1px solid #1e3a5f; border-radius: 12px; padding: 40px; text-align: center; max-width: 400px; }
    h1 { color: #3b82f6; margin-bottom: 8px; }
    p { color: #94a3b8; }
    .scope { font-size: 12px; color: #475569; margin-top: 16px; word-break: break-word; }
    .check { color: #22c55e; font-size: 48px; margin-bottom: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="check">&#10003;</div>
    <h1>Connected</h1>
    <p>GHL OAuth authorization successful.</p>
    <p>BrokerScale AI is now connected to GoHighLevel.</p>
    <p class="scope">Scope: ${data.scope || "granted"}</p>
  </div>
</body>
</html>`,
      {
        status: 200,
        headers: { "Content-Type": "text/html" },
      }
    );
  } catch (err) {
    console.error("OAuth callback error:", err);
    return NextResponse.json(
      { error: "Internal server error during token exchange" },
      { status: 500 }
    );
  }
}
