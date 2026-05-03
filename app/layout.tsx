import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
  width: "device-width",
  initialScale: 1,
};

const siteTitle =
  "BrokerScale AI - Automated Growth Systems for Real Estate Brokerages";
const siteDescription =
  "AI-powered automation that helps real estate brokerages respond to leads in seconds, recruit agents on autopilot, and close more deals without adding to your team's workload.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: "%s | BrokerScale AI",
  },
  description: siteDescription,
  applicationName: "BrokerScale AI",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logo-icon.jpg", type: "image/jpeg" }],
    shortcut: "/logo-icon.jpg",
    apple: "/logo-icon.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "BrokerScale AI",
    title: "BrokerScale AI",
    description:
      "Automated growth systems for real estate brokerages: speed-to-lead, recruiting, and full pipeline automation.",
  },
  twitter: {
    card: "summary",
    title: "BrokerScale AI",
    description:
      "Automated growth systems for real estate brokerages: speed-to-lead, recruiting, and full pipeline automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
