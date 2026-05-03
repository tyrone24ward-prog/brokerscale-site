/**
 * GHL OAuth client
 * Handles token refresh and authenticated API calls to GoHighLevel v2.
 */

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_TOKEN_URL=`${GHL_BASE}/oauth/token`;
const GHL_VERSION = "2021-07-28";

// Vercel API configuration
const VERCEL_API_TOKEN = process.env.VERCEL_TOKEN_ROTATION!;
const VERCEL_PROJECT_ID = "prj_BSoatRarIN1dq4C4yeRnp0WATuDb";
const VERCEL_TEAM_ID = "team_hAk6CQEjpdDFhy2zCrInLH6V";

interface GHLTokens {
  access_token: string;
  refresh_token: string;
  expires_at: string;
  location_id: string | null;
}

// In-memory token cache (persists for the lifetime of the serverless function)
let _tokenCache: GHLTokens | null = null;

/**
 * Update Vercel environment variables (extracted from callback route)
 */
async function updateVercelEnvVars(vars: Record<string, string>) {
  const base = `https://api.vercel.com/v9/projects/${VERCEL_PROJECT_ID}/env`;
  const headers = {
    Authorization: `Bearer ${VERCEL_API_TOKEN}`,
    "Content-Type": "application/json",
  };

  for (const [key, value] of Object.entries(vars)) {
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
      if (!patchRes.ok) {
        throw new Error(`Failed to update ${key}: ${patchData.error || patchRes.status}`);
      }
      console.log(`Updated ${key}:`, patchRes.status);
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
      if (!createRes.ok) {
        throw new Error(`Failed to create ${key}: ${createData.error || createRes.status}`);
      }
      console.log(`Created ${key}:`, createRes.status);
    }
  }
}

/**
 * Get a valid access token, refreshing if expired.
 */
export async function getGHLToken(): Promise<string> {
  const clientId = process.env.GHL_OAUTH_CLIENT_ID!;
  const clientSecret = process.env.GHL_OAUTH_CLIENT_SECRET!;
  const accessToken = process.env.GHL_ACCESS_TOKEN;
  const refreshToken = process.env.GHL_REFRESH_TOKEN;
  const expiresAt = process.env.GHL_TOKEN_EXPIRES_AT;

  if (!accessToken || !refreshToken) {
    throw new Error(
      "GHL tokens not found. Complete OAuth flow at /api/auth/authorize"
    );
  }

  // Check if token is still valid (with 5 min buffer)
  const expiry = expiresAt ? new Date(expiresAt) : new Date(0);
  const now = new Date();
  const bufferMs = 5 * 60 * 1000;

  if (expiry.getTime() - now.getTime() > bufferMs) {
    return accessToken;
  }

  // Token expired — refresh it
  console.log("GHL access token expired, refreshing...");

  const response = await fetch(GHL_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }).toString(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`GHL token refresh failed: ${JSON.stringify(data)}`);
  }

  // Save refreshed tokens back to Vercel environment variables
  const newExpiresAt = new Date(Date.now() + data.expires_in * 1000).toISOString();
  
  try {
    await updateVercelEnvVars({
      GHL_ACCESS_TOKEN: data.access_token,
      GHL_REFRESH_TOKEN: data.refresh_token,
      GHL_TOKEN_EXPIRES_AT: newExpiresAt,
    });

    console.log("GHL tokens refreshed and saved successfully:", {
      expires_at: newExpiresAt,
      location_id: data.locationId || "unchanged",
    });

    return data.access_token;
  } catch (error) {
    console.error("Failed to save refreshed GHL tokens:", error);
    throw new Error(`Token refresh succeeded but persistence failed: ${error}`);
  }
}

/**
 * Make an authenticated GHL API request.
 */
export async function ghlFetch(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = await getGHLToken();

  const headers = {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
    "User-Agent": "BrokerScaleAI/1.0",
    ...(options.headers || {}),
  };

  return fetch(`${GHL_BASE}${endpoint}`, {
    ...options,
    headers,
  });
}

/**
 * Common GHL operations
 */
export const GHL = {
  locationId: process.env.GHL_Subaccount_Location_ID || "hYUddktSCkA5suERzeRD",

  async getLocation() {
    const res = await ghlFetch(`/locations/${this.locationId}`);
    return res.json();
  },

  async getContacts(limit = 20) {
    const res = await ghlFetch(
      `/contacts/?locationId=${this.locationId}&limit=${limit}`
    );
    return res.json();
  },

  async upsertContact(data: Record<string, unknown>) {
    const res = await ghlFetch("/contacts/upsert", {
      method: "POST",
      body: JSON.stringify({ locationId: this.locationId, ...data }),
    });
    return res.json();
  },

  async getCalendars() {
    const res = await ghlFetch(`/calendars/?locationId=${this.locationId}`);
    return res.json();
  },

  async getPipelines() {
    const res = await ghlFetch(
      `/opportunities/pipelines?locationId=${this.locationId}`
    );
    return res.json();
  },

  async createOpportunity(data: Record<string, unknown>) {
    const res = await ghlFetch("/opportunities/", {
      method: "POST",
      body: JSON.stringify({ locationId: this.locationId, ...data }),
    });
    return res.json();
  },
};
