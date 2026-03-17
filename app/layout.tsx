import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrokerScale AI — Automated Growth Systems for Real Estate Brokerages",
  description: "We build AI-powered automation systems that help real estate brokerages respond to leads instantly, recruit agents on autopilot, and close more deals — without adding to your team's workload.",
  openGraph: {
    title: "BrokerScale AI",
    description: "Automated growth systems for real estate brokerages.",
    url: "https://brokerscaleai.com",
    siteName: "BrokerScale AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/logo-icon.jpg" />
        <link rel="shortcut icon" type="image/jpeg" href="/logo-icon.jpg" />
        <link rel="apple-touch-icon" href="/logo-icon.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
