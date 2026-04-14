import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

const GHL_AGENCY_API_KEY = process.env.GHL_AGENCY_API_KEY!;
const GHL_COMPANY_ID = "xjXjgXUCXRzuuxquRK2n";

// Map Stripe Product IDs to GHL Snapshot IDs
const PRODUCT_SNAPSHOT_MAP: Record<string, { snapshotId: string; name: string }> = {
  // Autopilot packages
  [process.env.STRIPE_PRODUCT_AUTOPILOT_STL_SETUP!]: {
    snapshotId: "3AAuNhw31k7euO5LKmSC",
    name: "Speed-to-Lead Snapshot",
  },
  [process.env.STRIPE_PRODUCT_AUTOPILOT_REC_SETUP!]: {
    snapshotId: "3SVUfVgCMb6W9kDS0PSD",
    name: "Agent Recruiting Pipeline Snapshot",
  },
  [process.env.STRIPE_PRODUCT_AUTOPILOT_FG_SETUP!]: {
    snapshotId: "560GOTEGGVF9EMKXXrJd",
    name: "Full Growth System Snapshot",
  },
  // DFY packages
  [process.env.STRIPE_PRODUCT_DFY_QUICKSTART!]: {
    snapshotId: "YzwfsNKd0h9NuMZPYYpG",
    name: "The Quickstart Snapshot",
  },
  [process.env.STRIPE_PRODUCT_DFY_FULL_SYSTEM_SETUP!]: {
    snapshotId: "DiosLhSKaN1actfpEBGB",
    name: "The Full System Snapshot",
  },
  [process.env.STRIPE_PRODUCT_DFY_BROKERAGE_SETUP!]: {
    snapshotId: "wSU3apcjvebCKp6z0Jdl",
    name: "The Brokerage Package Snapshot",
  },
};

const GHL_HEADERS = {
  Authorization: `Bearer ${GHL_AGENCY_API_KEY}`,
  "Content-Type": "application/json",
  "Version": "2021-07-28",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
};

async function createGHLSubaccount(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  businessName: string
): Promise<string> {
  const res = await fetch("https://services.leadconnectorhq.com/locations/", {
    method: "POST",
    headers: GHL_HEADERS,
    body: JSON.stringify({
      name: businessName || `${firstName} ${lastName}`,
      companyId: GHL_COMPANY_ID,
      email,
      phone,
      firstName,
      lastName,
      country: "US",
      timezone: "America/Los_Angeles",
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`GHL subaccount creation failed: ${JSON.stringify(data)}`);
  }

  const locationId = data.location?.id || data.id;
  if (!locationId) {
    throw new Error(`No location ID returned from GHL: ${JSON.stringify(data)}`);
  }

  return locationId;
}

async function applySnapshot(locationId: string, snapshotId: string): Promise<void> {
  const res = await fetch(
    `https://services.leadconnectorhq.com/locations/${locationId}/snapshot`,
    {
      method: "POST",
      headers: GHL_HEADERS,
      body: JSON.stringify({
        snapshotId,
        companyId: GHL_COMPANY_ID,
        override: true,
      }),
    }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Snapshot apply failed: ${JSON.stringify(data)}`);
  }
}

async function sendTelegramAlert(message: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_HOME_CHANNEL;
  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    }),
  });
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Only process completed checkout sessions
  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  try {
    // Get line items to identify the product
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      expand: ["data.price.product"],
    });

    const productId = (
      lineItems.data[0]?.price?.product as Stripe.Product
    )?.id;

    if (!productId || !PRODUCT_SNAPSHOT_MAP[productId]) {
      console.log(`No snapshot mapping for product: ${productId}`);
      return NextResponse.json({ received: true });
    }

    const { snapshotId, name: snapshotName } = PRODUCT_SNAPSHOT_MAP[productId];

    // Extract customer info from session
    const customerDetails = session.customer_details;
    const fullName = customerDetails?.name || "New Client";
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0] || "New";
    const lastName = nameParts.slice(1).join(" ") || "Client";
    const email = customerDetails?.email || "";
    const phone = customerDetails?.phone || "";
    const businessName = (session.metadata?.business_name) || fullName;

    console.log(`Processing purchase: ${snapshotName} for ${fullName} (${email})`);

    // Step 1: Create GHL subaccount
    const locationId = await createGHLSubaccount(
      firstName,
      lastName,
      email,
      phone,
      businessName
    );

    console.log(`GHL subaccount created: ${locationId}`);

    // Step 2: Apply snapshot
    await applySnapshot(locationId, snapshotId);

    console.log(`Snapshot applied: ${snapshotName} to ${locationId}`);

    // Step 3: Notify Tyrone via Telegram
    await sendTelegramAlert(
      `<b>New BrokerScale Client Onboarded</b>\n\n` +
      `Client: ${fullName}\n` +
      `Email: ${email}\n` +
      `Package: ${snapshotName}\n` +
      `GHL Location ID: ${locationId}\n` +
      `Status: Subaccount created + snapshot applied`
    );

    return NextResponse.json({
      success: true,
      locationId,
      snapshotApplied: snapshotName,
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Onboarding error:", errorMessage);

    // Alert Tyrone of failure
    await sendTelegramAlert(
      `<b>BrokerScale Onboarding Error</b>\n\n` +
      `Session: ${session.id}\n` +
      `Error: ${errorMessage}\n\n` +
      `Manual intervention required.`
    );

    return NextResponse.json(
      { error: "Onboarding failed", details: errorMessage },
      { status: 500 }
    );
  }
}
