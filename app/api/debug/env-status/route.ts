import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Security check 
  const auth = req.headers.get("authorization");
  if (auth !== "Bearer debug_token_status_check_2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Check what env vars are available
  const tokenStatus = {
    GHL_ACCESS_TOKEN: process.env.GHL_ACCESS_TOKEN ? "present" : "missing",
    GHL_REFRESH_TOKEN: process.env.GHL_REFRESH_TOKEN ? "present" : "missing", 
    GHL_TOKEN_EXPIRES_AT: process.env.GHL_TOKEN_EXPIRES_AT || "missing",
    GHL_OAUTH_CLIENT_ID: process.env.GHL_OAUTH_CLIENT_ID ? "present" : "missing",
    GHL_OAUTH_CLIENT_SECRET: process.env.GHL_OAUTH_CLIENT_SECRET ? "present" : "missing",
    VERCEL_TOKEN_ROTATION: process.env.VERCEL_TOKEN_ROTATION ? "present" : "missing",
    N8N_TOKEN_ENDPOINT_SECRET: process.env.N8N_TOKEN_ENDPOINT_SECRET ? "present" : "using_fallback"
  };

  // Check token expiry if present
  let expiryStatus = "unknown";
  if (process.env.GHL_TOKEN_EXPIRES_AT) {
    const expiry = new Date(process.env.GHL_TOKEN_EXPIRES_AT);
    const now = new Date();
    const diffHours = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60);
    expiryStatus = diffHours > 0 ? `valid_for_${Math.round(diffHours)}_hours` : `expired_${Math.abs(Math.round(diffHours))}_hours_ago`;
  }

  return NextResponse.json({
    env_status: tokenStatus,
    token_expiry_status: expiryStatus,
    timestamp: new Date().toISOString()
  });
}