import { BOOKING_URL, SITE_URL } from "@/lib/site";

const siteDescription =
  "AI-powered automation that helps real estate brokerages respond to leads in seconds, recruit agents on autopilot, and close more deals without adding to your team's workload.";

export function buildRootJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "BrokerScale AI",
        url: SITE_URL,
        description: siteDescription,
        address: {
          "@type": "PostalAddress",
          streetAddress: "255 Valencia Ave.",
          addressLocality: "Morgan Hill",
          addressRegion: "CA",
          postalCode: "95037",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          url: BOOKING_URL,
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "BrokerScale AI",
        description: siteDescription,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "BrokerScale AI",
        url: SITE_URL,
        description:
          "Automation systems for real estate brokerages: speed-to-lead, agent recruiting pipelines, and growth systems built on GoHighLevel and related platforms.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "255 Valencia Ave.",
          addressLocality: "Morgan Hill",
          addressRegion: "CA",
          postalCode: "95037",
          addressCountry: "US",
        },
        areaServed: { "@type": "Country", name: "United States" },
        serviceType: [
          "Real estate lead automation",
          "CRM and pipeline setup",
          "Agent recruiting automation",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "BrokerScale AI - Automated growth for real estate brokerages",
        description: siteDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}
