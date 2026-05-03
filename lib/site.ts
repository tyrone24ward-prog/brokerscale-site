export const SITE_URL = "https://brokerscaleai.com";

export const BOOKING_URL =
  "https://link.brokerscaleai.com/widget/booking/pOWeqYfq4xIZMO11PhYH";

// ---------------------------------------------------------------------------
// Stripe — all values sourced from environment variables.
// Links are buy.stripe.com payment links.
// Product IDs are used for server-side Stripe API calls if needed.
// ---------------------------------------------------------------------------

export const STRIPE = {
  // Done-For-You tiers
  quickstart:         process.env.NEXT_PUBLIC_STRIPE_LINK_DFY_QUICKSTART!,
  fullSystemSetup:    process.env.NEXT_PUBLIC_STRIPE_LINK_DFY_FULL_SYSTEM_SETUP!,
  fullSystemMonthly:  process.env.NEXT_PUBLIC_STRIPE_LINK_DFY_FULL_SYSTEM_MONTHLY!,
  brokerage:          process.env.NEXT_PUBLIC_STRIPE_LINK_DFY_BROKERAGE!,
  brokerageMonthly:   process.env.NEXT_PUBLIC_STRIPE_LINK_DFY_BROKERAGE_MONTHLY!,

  // Autopilot tiers
  speedToLead:        process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOPILOT_SPEED_TO_LEAD!,
  speedToLeadMonthly: process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOPILOT_SPEED_TO_LEAD_MONTHLY!,
  recruiting:         process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOPILOT_RECRUITING!,
  recruitingMonthly:  process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOPILOT_RECRUITING_MONTHLY!,
  fullGrowth:         process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOPILOT_FULL_GROWTH!,
  fullGrowthMonthly:  process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOPILOT_FULL_GROWTH_MONTHLY!,
};

export const STRIPE_PRODUCTS = {
  // Setup / one-time
  dfyQuickstart:        process.env.STRIPE_PRODUCT_DFY_QUICKSTART!,
  dfyFullSystemSetup:   process.env.STRIPE_PRODUCT_DFY_FULL_SYSTEM_SETUP!,
  dfyBrokerageSetup:    process.env.STRIPE_PRODUCT_DFY_BROKERAGE_SETUP!,
  autopilotStlSetup:    process.env.STRIPE_PRODUCT_AUTOPILOT_STL_SETUP!,
  autopilotRecSetup:    process.env.STRIPE_PRODUCT_AUTOPILOT_REC_SETUP!,
  autopilotFgSetup:     process.env.STRIPE_PRODUCT_AUTOPILOT_FG_SETUP!,

  // Monthly recurring
  dfyFullSystemMonthly:       process.env.STRIPE_PRODUCT_DFY_FULL_SYSTEM_MONTHLY!,
  dfyBrokerageMonthly:        process.env.STRIPE_PRODUCT_DFY_BROKERAGE_MONTHLY!,
  autopilotStlMonthly:        process.env.STRIPE_PRODUCT_AUTOPILOT_STL_MONTHLY!,
  autopilotRecMonthly:        process.env.STRIPE_PRODUCT_AUTOPILOT_REC_MONTHLY!,
  autopilotFgMonthly:         process.env.STRIPE_PRODUCT_AUTOPILOT_FG_MONTHLY!,
};
