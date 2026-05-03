import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (auth !== "Bearer verify_production_env_vars_2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get fresh reads from environment (these should be the actual Vercel production env vars)
  const currentEnvValues = {
    GHL_ACCESS_TOKEN: process.env.GHL_ACCESS_TOKEN ? `${process.env.GHL_ACCESS_TOKEN.slice(0, 20)}...` : "missing",
    GHL_REFRESH_TOKEN: process.env.GHL_REFRESH_TOKEN ? `${process.env.GHL_REFRESH_TOKEN.slice(0, 20)}...` : "missing",
    GHL_TOKEN_EXPIRES_AT: process.env.GHL_TOKEN_EXPIRES_AT || "missing",
  };

  // Parse the expiry date and check how it compares to known timestamps
  const expiresAt = process.env.GHL_TOKEN_EXPIRES_AT;
  let expiryAnalysis = "unknown";

  if (expiresAt) {
    const expiry = new Date(expiresAt);
    const now = new Date();
    const hoursFromNow = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60);
    
    // Check if this matches the old stale timestamp
    const oldStaleTimestamp = "2026-04-25T18:56:16.094Z";
    const isOldTimestamp = expiresAt === oldStaleTimestamp;
    
    expiryAnalysis = {
      timestamp: expiresAt,
      is_old_stale_timestamp: isOldTimestamp,
      hours_from_now: Math.round(hoursFromNow * 10) / 10,
      is_future: hoursFromNow > 0,
      appears_fresh: !isOldTimestamp && hoursFromNow > 0
    };
  }

  return NextResponse.json({
    message: "Direct read from production env vars at runtime",
    env_var_values: currentEnvValues,
    expiry_analysis: expiryAnalysis,
    runtime: new Date().toISOString(),
    environment: process.env.VERCEL_ENV || "unknown"
  });
}