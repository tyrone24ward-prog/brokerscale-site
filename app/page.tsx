import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "BrokerScale AI — Lead Follow-Up & Pipeline Automation for Real Estate",
  description:
    "BrokerScale AI automates your lead follow-up, appointment booking, and pipeline so you can focus on closing. Done-for-you setups starting at $1,500. BrokerScale Autopilot — fully managed platform.",
  keywords: [
    "real estate lead automation",
    "done for you AI setup real estate",
    "BrokerScale AI",
    "BrokerScale Autopilot",
    "speed to lead real estate",
    "GoHighLevel real estate automation",
    "real estate CRM automation",
    "The Quickstart real estate",
  ],
  openGraph: {
    url: SITE_URL,
    type: "website",
    title: "BrokerScale AI — Lead Follow-Up & Pipeline Automation for Real Estate",
    description:
      "Stop losing leads. Start running on autopilot. Done-for-you setups starting at $1,500.",
  },
};

const HomeRest = dynamic(() => import("./home-rest"), {
  loading: () => (
    <div
      className="min-h-[50vh] bg-[#0a0f1e]"
      aria-busy="true"
      aria-label="Loading additional sections"
    />
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white overflow-x-hidden">
      <a
        href="#site-main"
        className="fixed top-4 left-[-9999px] z-[100] whitespace-nowrap rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg focus:left-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
      >
        Skip to main content
      </a>

      {/* NAV */}
      <nav
        className="fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur border-b border-[#1e293b]"
        aria-label="Primary"
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link
            href="/"
            className="shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]"
          >
            <Image
              src="/logo-alt.jpg"
              alt="BrokerScale AI"
              width={180}
              height={48}
              className="object-contain h-10 w-auto md:h-12"
              sizes="(max-width: 768px) 160px, 180px"
              priority
              fetchPriority="high"
              quality={90}
            />
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]"
          >
            Book a Free Call
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="site-main"
        className="scroll-mt-28 pt-40 pb-28 px-6 text-center max-w-5xl mx-auto"
        aria-labelledby="hero-heading"
      >
        <div className="inline-block bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          Built exclusively for real estate agents and brokerages
        </div>
        <h1
          id="hero-heading"
          className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8 text-balance"
        >
          Stop Losing Leads.
          <br />
          <span className="text-blue-500">Start Running on Autopilot.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
          BrokerScale AI automates your lead follow-up, appointment booking, and
          pipeline so every new lead gets contacted in under 60 seconds — and you
          can focus on closing instead of chasing.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold px-10 py-4 rounded-xl transition-colors shadow-2xl shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]"
        >
          Book a Free Strategy Call
        </a>
        <p className="text-slate-500 text-sm mt-5">
          No pitch decks. 30 minutes. We&apos;ll show you exactly what we&apos;d build.
        </p>

        {/* STATS */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border border-[#1e293b] rounded-2xl p-8 bg-[#0d1425]"
          role="group"
          aria-label="Key performance metrics"
        >
          {[
            { stat: "60 sec", label: "Lead response time after setup" },
            { stat: "391%", label: "More conversions vs. slow follow-up" },
            { stat: "5–15", label: "Automated touchpoints per lead" },
            { stat: "3–5 days", label: "From deposit to live system" },
          ].map((item) => (
            <div key={item.stat} className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">
                {item.stat}
              </div>
              <div className="text-slate-400 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-xs mt-3">
          Source: Velocify / LeadAngel research · BrokerScale AI delivery standard
        </p>
      </section>

      <HomeRest />
    </main>
  );
}
