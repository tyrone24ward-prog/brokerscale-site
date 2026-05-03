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

export async function POST(req: NextRequest) {
  // Simple authentication - check for a setup key
  const body = await req.json();
  
  if (body.setup_key !== "setup_n8n_integration_ward_holdings_2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Set up the required environment variables
    await Promise.all([
      upsertVercelEnvVar("N8N_TOKEN_ENDPOINT_SECRET", "91c4b20bc3375ddbb26c0939f658552c5b5181ce8d526f30a3ec16a3df6e8541"),
      upsertVercelEnvVar("CRON_SECRET", "cron_secret_4_brokerscale_ghl_refresh_2026_ward"),
    ]);

    return NextResponse.json({
      success: true,
      message: "Environment variables configured. Redeploy required for changes to take effect.",
      variables_set: [
        "N8N_TOKEN_ENDPOINT_SECRET",
        "CRON_SECRET"
      ]
    });

  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json(
      {
        error: "Failed to configure environment variables",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}