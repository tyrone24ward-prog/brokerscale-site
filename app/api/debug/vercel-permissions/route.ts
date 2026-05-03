import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (auth !== "Bearer test_vercel_token_permissions_2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const VERCEL_API_TOKEN = process.env.VERCEL_TOKEN_ROTATION;
  const VERCEL_PROJECT_ID = "prj_BSoatRarIN1dq4C4yeRnp0WATuDb";
  const VERCEL_TEAM_ID = "team_hAk6CQEjpdDFhy2zCrInLH6V";

  if (!VERCEL_API_TOKEN) {
    return NextResponse.json({
      error: "VERCEL_TOKEN_ROTATION not found in environment",
      status: "missing_token"
    });
  }

  try {
    // Test: List environment variables (read permission)
    const listUrl = `https://api.vercel.com/v9/projects/${VERCEL_PROJECT_ID}/env?teamId=${VERCEL_TEAM_ID}`;
    const listRes = await fetch(listUrl, {
      headers: {
        Authorization: `Bearer ${VERCEL_API_TOKEN}`,
        "Content-Type": "application/json",
      }
    });
    
    const listData = await listRes.json();
    
    if (!listRes.ok) {
      return NextResponse.json({
        error: "Failed to list env vars",
        status_code: listRes.status,
        vercel_error: listData,
        test_failed: "read_permission"
      });
    }

    // Test: Create a dummy environment variable (write permission)
    const testKey = `TEST_TOKEN_${Date.now()}`;
    const createUrl = `https://api.vercel.com/v10/projects/${VERCEL_PROJECT_ID}/env?teamId=${VERCEL_TEAM_ID}`;
    const createRes = await fetch(createUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${VERCEL_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: testKey,
        value: "test_value",
        type: "encrypted",
        target: ["production"],
      }),
    });

    const createData = await createRes.json();

    if (!createRes.ok) {
      return NextResponse.json({
        error: "Failed to create test env var",
        status_code: createRes.status,
        vercel_error: createData,
        test_failed: "write_permission",
        read_permission: "working"
      });
    }

    // Clean up test variable
    const testVar = (listData.envs || []).find((e: any) => e.key === testKey);
    if (testVar?.id) {
      await fetch(`https://api.vercel.com/v9/projects/${VERCEL_PROJECT_ID}/env/${testVar.id}?teamId=${VERCEL_TEAM_ID}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${VERCEL_API_TOKEN}` }
      });
    }

    return NextResponse.json({
      success: "VERCEL_TOKEN_ROTATION has full read/write permissions",
      read_permission: "working",
      write_permission: "working",
      env_vars_found: (listData.envs || []).length
    });

  } catch (error) {
    return NextResponse.json({
      error: "Network or other error testing permissions",
      details: error instanceof Error ? error.message : String(error)
    });
  }
}