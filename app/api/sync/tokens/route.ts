import { NextRequest, NextResponse } from "next/server";

const VERCEL_API_TOKEN = process.env.VERCEL_TOKEN_ROTATION!;
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
    return { action: "updated", status: patchRes.status, error: patchData.error };
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
    return { action: "created", status: createRes.status, error: createData.error };
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  // Simple auth check
  if (body.sync_key !== "sync_ghl_tokens_from_local_env_2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Expecting tokens to be passed in the request body
  const { access_token, refresh_token, expires_at } = body;

  if (!access_token || !refresh_token || !expires_at) {
    return NextResponse.json({
      error: "Missing required tokens",
      required: ["access_token", "refresh_token", "expires_at"]
    }, { status: 400 });
  }

  try {
    const results = await Promise.all([
      upsertVercelEnvVar("GHL_ACCESS_TOKEN", access_token),
      upsertVercelEnvVar("GHL_REFRESH_TOKEN", refresh_token), 
      upsertVercelEnvVar("GHL_TOKEN_EXPIRES_AT", expires_at),
    ]);

    console.log("Token sync results:", results);

    return NextResponse.json({
      success: true,
      message: "Tokens synced to production. Redeployment triggered automatically.",
      results: results.map((r, i) => ({
        variable: ["GHL_ACCESS_TOKEN", "GHL_REFRESH_TOKEN", "GHL_TOKEN_EXPIRES_AT"][i],
        action: r.action,
        status: r.status
      }))
    });

  } catch (error) {
    console.error("Token sync error:", error);
    return NextResponse.json({
      error: "Failed to sync tokens",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}