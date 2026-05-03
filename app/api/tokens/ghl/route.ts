import { NextRequest, NextResponse } from "next/server";
import { getGHLToken } from "@/lib/ghl";

const ENDPOINT_SECRET = process.env.N8N_TOKEN_ENDPOINT_SECRET || "91c4b20bc3375ddbb26c0939f658552c5b5181ce8d526f30a3ec16a3df6e8541";

/**
 * Get current valid GHL access token for external services (n8n).
 * Requires shared secret authentication.
 * Auto-refreshes tokens if near expiry.
 */
export async function GET(req: NextRequest) {
  // Check authentication
  const authorization = req.headers.get("authorization");
  
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Missing or invalid Authorization header. Expected: Bearer <secret>" },
      { status: 401 }
    );
  }

  const providedSecret = authorization.replace("Bearer ", "");
  
  if (!ENDPOINT_SECRET) {
    console.error("N8N_TOKEN_ENDPOINT_SECRET not configured");
    return NextResponse.json(
      { error: "Token endpoint not properly configured" },
      { status: 500 }
    );
  }

  if (providedSecret !== ENDPOINT_SECRET) {
    return NextResponse.json(
      { error: "Invalid shared secret" },
      { status: 401 }
    );
  }

  try {
    // Get current valid token (triggers refresh if needed)
    const accessToken = await getGHLToken();
    
    // Get current expiry time
    const expiresAt = process.env.GHL_TOKEN_EXPIRES_AT;
    
    if (!expiresAt) {
      throw new Error("Token expiry time not available");
    }

    return NextResponse.json({
      access_token: accessToken,
      expires_at: expiresAt,
    });
    
  } catch (error) {
    console.error("Token endpoint error:", error);
    
    // Check if this is a refresh failure that requires reauthorization
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    if (errorMessage.includes("refresh_token") || 
        errorMessage.includes("unauthorized") || 
        errorMessage.includes("invalid_grant")) {
      return NextResponse.json(
        { 
          error: "Token refresh failed - reauthorization required", 
          details: "Please complete the OAuth flow again at /api/auth/authorize",
          code: "REAUTH_REQUIRED"
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { 
        error: "Failed to retrieve access token", 
        details: errorMessage 
      },
      { status: 503 }
    );
  }
}