import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, STRIPE } from "@/lib/site";

export default function HomeRest() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          TWO OFFERINGS OVERVIEW
      ───────────────────────────────────────────── */}
      <section
        id="offerings"
        className="section-cv scroll-mt-28 py-20 px-6 bg-[#0d1425]"
        aria-labelledby="offerings-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="offerings-heading"
              className="text-3xl md:text-4xl font-bold mb-4 text-balance"
            >
              Two Ways to Work With BrokerScale AI
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Whether you need us to build your system from scratch or want a
              fully managed platform that runs itself — we have an offering for
              where you are.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="#dfy"
              className="group bg-[#111827] border border-blue-500/40 hover:border-blue-500 rounded-2xl p-8 transition-all block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <div className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">
                Offering 1
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Done-For-You AI Setups
              </h3>
              <p className="text-slate-400 text-base leading-relaxed mb-4">
                We build your lead follow-up and pipeline automation inside your
                existing CRM. Custom-built in your voice, live in 3–14 business
                days. Best for agents and brokerages who want a hands-on,
                done-for-you system.
              </p>
              <div className="text-blue-400 text-sm font-semibold">
                Starting at $1,500 flat · No monthly fee on entry tier ↓
              </div>
            </a>
            <a
              href="#autopilot"
              className="group bg-[#111827] border border-[#1e293b] hover:border-blue-500/40 rounded-2xl p-8 transition-all block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">
                Offering 2
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                BrokerScale Autopilot
              </h3>
              <p className="text-slate-400 text-base leading-relaxed mb-4">
                A fully managed, always-running automation platform. Speed-to-lead,
                agent recruiting, and pipeline growth — CRM included and managed
                end-to-end. Built for brokerages that want everything handled.
              </p>
              <div className="text-slate-400 text-sm font-semibold">
                Starting at $1,500 setup + $500/mo ↓
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          THE PROBLEM
      ───────────────────────────────────────────── */}
      <section
        id="problem"
        className="section-cv scroll-mt-28 py-24 px-6"
        aria-labelledby="problem-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="problem-heading"
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-balance"
            >
              The Real Cost of Slow Follow-Up
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Out of 1,000 leads, here&apos;s what the data says happens based on
              how fast you respond.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0a0f1e] border border-red-900/40 rounded-2xl p-8">
              <div className="text-red-400 font-bold text-sm uppercase tracking-widest mb-4">
                Typical Agent — Responds in Hours
              </div>
              <div className="text-6xl font-black text-red-400 mb-3">4–12</div>
              <div className="text-slate-300 text-lg mb-4">
                closings out of 1,000 leads
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Industry average conversion for slow follow-up sits at 0.4%–1.2%.
                By the time you call back, most leads have already moved on to
                whoever responded first.
              </p>
              <p className="text-slate-600 text-xs mt-4">Source: RealGeeks.com</p>
            </div>
            <div className="bg-blue-600/5 border border-blue-500/30 rounded-2xl p-8">
              <div className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">
                With BrokerScale AI — Responds in 60 Seconds
              </div>
              <div className="text-6xl font-black text-blue-400 mb-3">196–589</div>
              <div className="text-slate-300 text-lg mb-4">
                closings out of 1,000 leads
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                A 391% conversion lift from responding within 60 seconds. Not a
                marginal improvement — the difference between a struggling pipeline
                and a full calendar.
              </p>
              <p className="text-slate-500 text-xs mt-4">
                Source: Velocify / LeadAngel
              </p>
            </div>
          </div>
          <p className="text-center text-slate-400 text-lg mt-10 font-medium">
            Both BrokerScale offerings make 60-second response automatic.{" "}
            <span className="text-blue-400">Every lead. Every time.</span>
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════
          OFFERING 1 — DONE-FOR-YOU AI SETUPS
      ═════════════════════════════════════════════ */}
      <section id="dfy" className="scroll-mt-28 pt-16 pb-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-[#1e293b]" />
            <div className="bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-bold px-5 py-2 rounded-full uppercase tracking-widest whitespace-nowrap">
              Offering 1 — Done-For-You AI Setups
            </div>
            <div className="h-px flex-1 bg-[#1e293b]" />
          </div>
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              We Build Your System. You Approve It. It Goes Live.
            </h2>
            <p className="text-slate-400 text-lg">
              For agents and brokerages who already have a CRM and need it
              configured to actually work. We handle sequences, triggers,
              pipelines, and copy — in your voice, on your timeline.
            </p>
          </div>
        </div>
      </section>

      {/* DFY — HOW IT WORKS */}
      <section
        id="dfy-how"
        className="section-cv scroll-mt-28 py-12 px-6 bg-[#0d1425]"
        aria-labelledby="dfy-how-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3
              id="dfy-how-heading"
              className="text-2xl md:text-3xl font-bold mb-3"
            >
              How the Done-For-You Process Works
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "30 minutes. We learn your lead sources, CRM, and communication style.",
              },
              {
                step: "02",
                title: "We Build",
                desc: "We configure sequences, pipelines, tagging logic, and triggers — all written in your voice.",
              },
              {
                step: "03",
                title: "You Review",
                desc: "We walk through everything before go-live. You adjust anything that doesn't sound like you.",
              },
              {
                step: "04",
                title: "Go Live",
                desc: "System activates. Every new lead gets contacted in under 60 seconds, automatically.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 relative"
              >
                <div className="text-5xl font-black text-blue-600/20 absolute top-4 right-5">
                  {item.step}
                </div>
                <div className="text-blue-500 text-2xl font-black mb-3">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DFY — THE QUICKSTART FEATURED */}
      <section
        id="quickstart"
        className="section-cv scroll-mt-28 py-24 px-6"
        aria-labelledby="quickstart-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Most Popular · Best Starting Point
            </div>
            <h3
              id="quickstart-heading"
              className="text-3xl md:text-4xl font-bold mb-3 text-balance"
            >
              Tier 1 — The Quickstart
            </h3>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              For solo agents whose leads are going cold. Low commitment,
              fast delivery, immediate results.
            </p>
          </div>
          <div className="bg-[#0d1425] border-2 border-blue-500 rounded-2xl p-10 shadow-2xl shadow-blue-600/10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
              <div className="flex-1">
                <div className="text-5xl font-black text-white mb-1">$1,500</div>
                <div className="text-blue-400 font-bold text-lg mb-1">
                  One-time. No monthly fee.
                </div>
                <div className="text-slate-500 text-sm mb-8">
                  Delivered in 3–5 business days from onboarding
                </div>
                <div className="text-blue-400/70 text-xs font-bold uppercase tracking-widest mb-3">
                  What We Build For You
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Automated lead follow-up system inside your existing CRM",
                    "Instant SMS + email sequence triggered the moment a new lead arrives — Zillow, Realtor.com, Facebook, website, referrals",
                    "5–7 follow-up touchpoints over 14 days, written in your voice",
                    "Hot / Warm / Cold lead tagging so you see pipeline status at a glance",
                    "Instant notification when a lead replies so you step in at the right moment",
                    "All sequences fully branded to your business",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-300 text-sm"
                    >
                      <span className="text-blue-400 font-black mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#0a0f1e] border border-[#1e293b] rounded-xl p-4">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">
                    Not Included
                  </div>
                  <p className="text-slate-500 text-sm">
                    Appointment booking automation, ongoing management, full CRM
                    buildout beyond the follow-up workflow, or custom third-party
                    integrations. Those are in Tier 2+.
                  </p>
                </div>
              </div>
              <div className="md:w-56 shrink-0 flex flex-col gap-3">
                <div className="bg-[#111827] border border-[#1e293b] rounded-xl p-5">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                    The ROI Math
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Avg commission</span>
                      <span className="text-white font-semibold">$8,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Break-even</span>
                      <span className="text-white font-semibold">0.19 deals</span>
                    </div>
                    <div className="flex justify-between border-t border-[#1e293b] pt-2 mt-1">
                      <span className="text-slate-400">1 deal converts</span>
                      <span className="text-blue-400 font-bold">5.3× ROI</span>
                    </div>
                  </div>
                </div>
                <a
                  href={STRIPE.quickstart}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="checkout-button"
                  className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-base py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Get The Quickstart →
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-blue-500/30 text-blue-400 hover:bg-blue-600/10 font-semibold py-3 rounded-xl transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Book a call first
                </a>
                <p className="text-slate-600 text-xs text-center">
                  Limited to 3 new clients/month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DFY — ALL THREE TIERS */}
      <section
        id="dfy-tiers"
        className="section-cv scroll-mt-28 py-12 pb-24 px-6 bg-[#0d1425]"
        aria-labelledby="dfy-tiers-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3
              id="dfy-tiers-heading"
              className="text-2xl md:text-3xl font-bold mb-3 text-balance"
            >
              All Done-For-You Tiers
            </h3>
            <p className="text-slate-400">
              Start with The Quickstart. Scale when you&apos;re ready.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1 — Quickstart */}
            <div className="bg-[#0a1628] border-2 border-blue-500 rounded-2xl p-8 flex flex-col relative shadow-xl shadow-blue-600/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap">
                START HERE
              </div>
              <div className="mb-5">
                <div className="text-xs font-bold text-blue-400/60 uppercase tracking-widest mb-2">Tier 1</div>
                <h4 className="text-2xl font-bold mb-2">The Quickstart</h4>
                <p className="text-slate-400 text-sm mb-4">For solo agents whose leads are going cold.</p>
                <div className="text-4xl font-black text-white">$1,500</div>
                <div className="text-slate-400 text-sm">one-time setup</div>
                <div className="text-green-400 font-bold mt-1">No monthly fee</div>
                <div className="text-slate-500 text-xs mt-1">Delivered in 3–5 business days</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-2 mb-6 flex-1">
                {[
                  "Automated SMS + email follow-up on every new lead",
                  "5–7 touchpoints over 14 days in your voice",
                  "Hot / Warm / Cold lead tagging",
                  "Instant reply notifications",
                  "Works with any major CRM",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#0a0f1e] border border-[#1e293b] rounded-lg p-3 mb-4 text-xs text-slate-500">
                <span className="font-bold text-slate-400">Not included: </span>
                Appointment booking, ongoing management, custom integrations
              </div>
              <a
                href={STRIPE.quickstart}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Get Started — $1,500
              </a>
            </div>

            {/* Tier 2 — Full System */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 flex flex-col">
              <div className="mb-5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Tier 2</div>
                <h4 className="text-2xl font-bold mb-2">The Full System</h4>
                <p className="text-slate-400 text-sm mb-4">For agents who want the full front end automated.</p>
                <div className="text-4xl font-black text-white">$2,500</div>
                <div className="text-slate-400 text-sm">one-time setup</div>
                <div className="text-blue-400 font-bold mt-1">+ $500/month management</div>
                <div className="text-slate-500 text-xs mt-1">Delivered in 5–7 business days</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-2 mb-6 flex-1">
                {[
                  "Everything in The Quickstart, plus:",
                  "AI appointment booking — leads self-schedule on your calendar",
                  "12–15 touchpoints over 30 days",
                  "Multi-channel: email, SMS, voicemail drops",
                  "Full CRM pipeline with automated stage movement",
                  "Weekly performance report",
                  "Monthly management + sequence optimization",
                ].map((item) => (
                  <li key={item} className={`flex items-start gap-2 ${item.endsWith(":") ? "text-slate-400 font-semibold pt-1" : ""}`}>
                    {!item.endsWith(":") && <span className="text-blue-500 font-bold mt-0.5 shrink-0">+</span>}
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#0a0f1e] border border-[#1e293b] rounded-lg p-3 mb-4 text-xs text-slate-500">
                <span className="font-bold text-slate-400">Not included: </span>
                Lead generation, website builds, paid ad management, multi-agent setups
              </div>
              <a
                href={STRIPE.fullSystemSetup}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#0a0f1e] hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-white font-semibold py-3 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Get Started — $2,500
              </a>
            </div>

            {/* Tier 3 — Brokerage Package */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 flex flex-col">
              <div className="mb-5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Tier 3</div>
                <h4 className="text-2xl font-bold mb-2">The Brokerage Package</h4>
                <p className="text-slate-400 text-sm mb-4">For brokerage owners managing 3–10 agents.</p>
                <div className="text-3xl font-black text-white">$5,000<span className="text-xl text-slate-400">–$7,500</span></div>
                <div className="text-slate-400 text-sm">one-time setup</div>
                <div className="text-blue-400 font-bold mt-1">+ $1,000–$1,500/month</div>
                <div className="text-slate-500 text-xs mt-1">Delivered in 10–14 business days</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-2 mb-6 flex-1">
                {[
                  "Everything in The Full System — deployed per agent",
                  "Individual sequences per agent (name, voice, market area)",
                  "Master dashboard: who's converting, where leads die",
                  "Individual CRM pipelines under one brokerage account",
                  "Round-robin or rules-based lead distribution",
                  "Weekly brokerage-level accountability report",
                  "Per-agent onboarding documentation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-0.5 shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#0a0f1e] border border-[#1e293b] rounded-lg p-3 mb-4 text-xs text-slate-500">
                <span className="font-bold text-slate-400">Not included: </span>
                Recruiting, sales training, ad spend management
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#0a0f1e] hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-white font-semibold py-3 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Book a Call to Get Started
              </a>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            All tiers include a review session before go-live and a 30-day support window post-launch.
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════
          OFFERING 2 — BROKERSCALE AUTOPILOT
      ═════════════════════════════════════════════ */}
      <section id="autopilot" className="scroll-mt-28 pt-16 pb-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-[#1e293b]" />
            <div className="bg-[#111827] border border-[#1e293b] text-slate-300 text-sm font-bold px-5 py-2 rounded-full uppercase tracking-widest whitespace-nowrap">
              Offering 2 — BrokerScale Autopilot
            </div>
            <div className="h-px flex-1 bg-[#1e293b]" />
          </div>
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              BrokerScale Autopilot
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              A fully managed, always-running automation platform for real estate
              brokerages. CRM included and managed end-to-end. Pick your focus —
              speed-to-lead, agent recruiting, or the full growth stack.
            </p>
          </div>
        </div>
      </section>

      {/* AUTOPILOT — THREE PACKAGES */}
      <section
        id="autopilot-packages"
        className="section-cv scroll-mt-28 py-12 pb-24 px-6 bg-[#0d1425]"
        aria-labelledby="autopilot-packages-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3
              id="autopilot-packages-heading"
              className="text-2xl md:text-3xl font-bold mb-3"
            >
              Autopilot Packages
            </h3>
            <p className="text-slate-400">
              CRM included. Fully managed. No tech skills required.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Speed-to-Lead */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 flex flex-col">
              <div className="mb-5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Package 1</div>
                <h4 className="text-2xl font-bold mb-2">Speed-to-Lead System</h4>
                <p className="text-slate-400 text-sm mb-4">For brokerages losing leads to slow follow-up.</p>
                <div className="text-4xl font-black text-white">$1,500</div>
                <div className="text-slate-400 text-sm">one-time setup</div>
                <div className="text-blue-400 font-bold mt-1">+ $500/month</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-2 mb-6 flex-1">
                {[
                  "60-second lead response via SMS + email",
                  "10+ automated touches over 14 days",
                  "GHL pipeline setup and configuration",
                  "Appointment booking to agent calendars",
                  "Monthly performance report",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-0.5 shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={STRIPE.speedToLead}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#0a0f1e] hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-white font-semibold py-3 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Get Started — $1,500
              </a>
            </div>

            {/* Agent Recruiting */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 flex flex-col">
              <div className="mb-5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Package 2</div>
                <h4 className="text-2xl font-bold mb-2">Agent Recruiting Pipeline</h4>
                <p className="text-slate-400 text-sm mb-4">For brokerages growing their agent headcount.</p>
                <div className="text-4xl font-black text-white">$2,000</div>
                <div className="text-slate-400 text-sm">one-time setup</div>
                <div className="text-blue-400 font-bold mt-1">+ $750/month</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-2 mb-6 flex-1">
                {[
                  "Automated outreach to agents in your market",
                  "20 automated touches over 30 days",
                  "Full recruiting pipeline in GHL",
                  "Automated interview scheduling",
                  "Objection-handling follow-up sequences",
                  "Monthly recruiting activity report",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-0.5 shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={STRIPE.recruiting}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#0a0f1e] hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-white font-semibold py-3 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Get Started — $2,000
              </a>
            </div>

            {/* Full Growth System */}
            <div className="bg-[#0a1628] border-2 border-blue-500 rounded-2xl p-8 flex flex-col relative shadow-xl shadow-blue-600/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap">
                MOST POPULAR
              </div>
              <div className="mb-5">
                <div className="text-xs font-bold text-blue-400/60 uppercase tracking-widest mb-2">Package 3</div>
                <h4 className="text-2xl font-bold mb-2">Full Growth System</h4>
                <p className="text-slate-400 text-sm mb-4">For brokerages ready to scale everything at once.</p>
                <div className="text-4xl font-black text-white">$3,500</div>
                <div className="text-slate-400 text-sm">one-time setup</div>
                <div className="text-blue-400 font-bold mt-1">+ $1,200/month</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-2 mb-6 flex-1">
                {[
                  "Everything in Package 1 + Package 2",
                  "Past client reactivation campaign",
                  "Referral request automation post-close",
                  "Google review request sequence",
                  "Unified dashboard — leads, recruiting, retention",
                  "Bi-weekly strategy call (30 min)",
                  "Priority support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold mt-0.5 shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={STRIPE.fullGrowth}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Get Started — $3,500
              </a>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            All Autopilot packages include 1-week setup, training handoff, and 30-day support window.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          GUARANTEE
      ───────────────────────────────────────────── */}
      <section
        id="guarantee"
        className="section-cv scroll-mt-28 py-20 px-6"
        aria-labelledby="guarantee-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-10">
            <div className="text-4xl mb-4">🔒</div>
            <h2
              id="guarantee-heading"
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Performance Guarantee
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              If your system doesn&apos;t respond to new leads within 60 seconds
              at least 95% of the time during the first 30 days after launch,
              we&apos;ll fix it — on us — until it does.
            </p>
            <p className="text-slate-500 text-sm">
              Applies to all Done-For-You tiers and all Autopilot packages.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FAQ
      ───────────────────────────────────────────── */}
      <section
        id="faq"
        className="section-cv scroll-mt-28 py-24 px-6 bg-[#0d1425]"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What's the difference between Done-For-You and Autopilot?",
                a: "Done-For-You is a custom build delivered inside your existing CRM — you own the system and we hand it off after setup (with optional ongoing management). BrokerScale Autopilot includes the CRM and we manage everything end-to-end on a monthly basis. DFY is for agents who have a CRM. Autopilot is for brokerages that want the whole stack handled.",
              },
              {
                q: "What CRM do I need for the Done-For-You service?",
                a: "GoHighLevel is our primary platform and what we recommend if you don't have one. If you already have a different CRM with API or webhook support, we can work within it. We confirm compatibility on the discovery call.",
              },
              {
                q: "I already have a CRM — do I need to switch?",
                a: "Not necessarily. We build inside your existing setup if it supports the automation we need. If it can't, we'll tell you upfront — not after you've paid.",
              },
              {
                q: "How do you handle leads that come in after hours?",
                a: "The system runs 24/7/365. A lead at midnight on Saturday gets the same 60-second response as one at noon on Tuesday. You get a notification when they reply — you decide when to take over.",
              },
              {
                q: "What lead sources can you connect?",
                a: "Zillow, Realtor.com, Facebook Lead Ads, Google Ads forms, your website contact form, direct SMS, and referral intake. If it can send a webhook or email notification, we can trigger the system from it.",
              },
              {
                q: "How long until I see results?",
                a: "Lead response time improves on launch day. Most clients see higher reply rates in the first week. Additional closed transactions typically appear within 30–45 days depending on lead volume.",
              },
              {
                q: "Is there a long-term contract?",
                a: "The Quickstart is one-time — no ongoing commitment. All other tiers and packages include monthly management on a month-to-month basis with 30 days notice to cancel. No long-term contracts.",
              },
              {
                q: "Why only 3 new Done-For-You clients per month?",
                a: "Every system is built from scratch — not templated and cloned. Limiting intake lets us deliver real quality and support each client through the 30-day post-launch window.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-[#111827] border border-[#1e293b] rounded-xl p-6"
              >
                <h3 className="text-white font-bold mb-2">{item.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FINAL CTA
      ───────────────────────────────────────────── */}
      <section
        id="contact"
        className="section-cv scroll-mt-28 py-24 px-6"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="contact-heading"
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-balance"
          >
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-slate-400 text-xl mb-4 leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll map out exactly what
            we&apos;d build — Done-For-You or Autopilot — and give you a clear
            price and timeline before you commit to anything.
          </p>
          <p className="text-slate-500 text-base mb-10">
            Or skip the call and{" "}
            <a
              href={STRIPE.quickstart}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            >
              get The Quickstart for $1,500 →
            </a>
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-xl font-semibold px-12 py-5 rounded-xl transition-colors shadow-2xl shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]"
          >
            Book Your Free Strategy Call
          </a>
          <p className="text-slate-500 text-sm mt-5">
            No pitch decks. No pressure. 3 new Done-For-You clients per month.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1e293b] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link
            href="/"
            className="shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]"
          >
            <Image
              src="/logo-alt.jpg"
              alt="BrokerScale AI"
              width={150}
              height={40}
              className="object-contain"
              sizes="150px"
              fetchPriority="low"
              decoding="async"
            />
          </Link>
          <div className="flex gap-6 text-slate-500 text-sm">
            <Link
              href="/privacy"
              prefetch={true}
              className="hover:text-white transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              prefetch={true}
              className="hover:text-white transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Terms & Conditions
            </Link>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} BrokerScale AI. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
