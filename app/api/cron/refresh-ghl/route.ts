import { NextRequest, NextResponse } from "next/server";
import { getGHLToken } from "@/lib/ghl";

export async function POST(req: NextRequest) {
  // Verify this is a legitimate Vercel cron request
  const authHeader = req.headers.get("authorization");
  
  if (authHeader !== `Bearer ${process.env.CRON_SECRET || "cron_secret_4_brokerscale_ghl_refresh_2026_ward"}`) {
    console.error("Unauthorized cron request");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    console.log("🔄 Scheduled GHL token refresh starting...");
    
    // Force token refresh by calling getGHLToken
    // If token is not near expiry, it returns current token
    // If token is near expiry, it refreshes and saves new tokens
    const token = await getGHLToken();
    
    const expiresAt = process.env.GHL_TOKEN_EXPIRES_AT;
    const now = new Date();
    const expiry = expiresAt ? new Date(expiresAt) : new Date(0);
    const hoursUntilExpiry = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60);
    
    console.log("✅ Scheduled GHL token refresh completed", {
      hours_until_expiry: Math.round(hoursUntilExpiry * 10) / 10,
      expires_at: expiresAt,
    });
    
    return NextResponse.json({
      success: true,
      hours_until_expiry: Math.round(hoursUntilExpiry * 10) / 10,
      expires_at: expiresAt,
      refreshed: hoursUntilExpiry < 24, // Assume refresh happened if <24h remaining
    });
    
  } catch (error) {
    console.error("❌ Scheduled GHL token refresh failed:", error);
    
    return NextResponse.json(
      {
        error: "Token refresh failed",
        details: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

// Also support GET for manual testing (when authenticated)
export async function GET(req: NextRequest) {
  return POST(req);
}