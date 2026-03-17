import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur border-b border-[#1e293b]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <Image src="/logo-alt.jpg" alt="BrokerScale AI" width={180} height={48} className="object-contain" priority />
          <a href="https://link.brokerscaleai.com/widget/booking/pOWeqYfq4xIZMO11PhYH" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Get a Free Strategy Call
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-28 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          Built exclusively for real estate brokerages
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
          Stop Losing Deals to<br />
          <span className="text-blue-500">Slow Follow-Up</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          BrokerScale AI builds automation systems that contact new leads within 60 seconds, recruit agents on autopilot, and fill your pipeline — without adding to your team&apos;s workload.
        </p>
        <a href="https://link.brokerscaleai.com/widget/booking/pOWeqYfq4xIZMO11PhYH" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold px-10 py-4 rounded-xl transition-colors shadow-2xl shadow-blue-600/30">
          Book a Free Strategy Call
        </a>
        <p className="text-slate-500 text-sm mt-5">No pressure. No pitch. Just a plan.</p>

        {/* STATS BAR */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border border-[#1e293b] rounded-2xl p-8 bg-[#0d1425]">
          {[
            { stat: "60 sec", label: "Average lead response time" },
            { stat: "391%", label: "More conversions vs. waiting" },
            { stat: "10+", label: "Automated touches per lead" },
            { stat: "5x", label: "More closings vs. slow follow-up" },
          ].map((item) => (
            <div key={item.stat} className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">{item.stat}</div>
              <div className="text-slate-400 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-xs mt-3">Source: Velocify / LeadAngel research</p>
      </section>

      {/* THE REAL COST OF SLOW FOLLOW-UP */}
      <section className="py-24 px-6 bg-[#0d1425]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              The Real Cost of Waiting
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Out of 1,000 leads, here&apos;s what the data says about your closings based on how fast you respond.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0a0f1e] border border-red-900/40 rounded-2xl p-8">
              <div className="text-red-400 font-bold text-sm uppercase tracking-widest mb-4">Wait a Week to Respond</div>
              <div className="text-6xl font-black text-red-400 mb-3">4–12</div>
              <div className="text-slate-300 text-lg mb-4">closings out of 1,000 leads</div>
              <p className="text-slate-500 text-sm leading-relaxed">
                At the industry&apos;s typical 0.4%–1.2% conversion rate for slow follow-up, most of your leads have already gone cold — or signed with a competitor who called first.
              </p>
              <p className="text-slate-600 text-xs mt-4">Source: RealGeeks.com</p>
            </div>
            <div className="bg-blue-600/5 border border-blue-500/30 rounded-2xl p-8">
              <div className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">Contact Within 60 Seconds</div>
              <div className="text-6xl font-black text-blue-400 mb-3">196–589</div>
              <div className="text-slate-300 text-lg mb-4">closings out of 1,000 leads</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Applying the 391% conversion lift from responding within 60 seconds puts your closing range at 1.96%–5.89%. That&apos;s not a small difference — it&apos;s the difference between a struggling brokerage and a thriving one.
              </p>
              <p className="text-slate-500 text-xs mt-4">Source: Velocify / LeadAngel</p>
            </div>
          </div>
          <p className="text-center text-slate-400 text-lg mt-10 font-medium">
            BrokerScale AI makes the 60-second response automatic. <span className="text-blue-400">Every lead. Every time.</span>
          </p>
        </div>
      </section>

      {/* PROBLEM VS SOLUTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Brokerages Choose BrokerScale AI</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Without BrokerScale AI", items: ["Leads sit for hours before contact", "Agents manually chase every follow-up", "Recruiting relies on word of mouth", "No system, no consistency, no scale"], dark: true },
              { label: "With BrokerScale AI", items: ["Leads contacted in under 60 seconds", "10–20 automated touches per prospect", "Agent recruiting runs on autopilot", "Full pipeline visibility in one dashboard"], dark: false },
            ].map((col) => (
              <div key={col.label} className={`rounded-2xl p-8 border ${col.dark ? "bg-[#0a0f1e] border-red-900/30" : "bg-blue-600/5 border-blue-500/30"}`}>
                <h3 className={`font-bold text-lg mb-5 ${col.dark ? "text-red-400" : "text-blue-400"}`}>{col.label}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300">
                      <span className={`mt-1 font-bold ${col.dark ? "text-red-500" : "text-blue-500"}`}>{col.dark ? "x" : "+"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-[#0d1425]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How BrokerScale AI Works</h2>
            <p className="text-slate-400 text-lg">We build it. We set it up. You close deals.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "We Build Your System", desc: "In one week, we configure a fully automated follow-up and pipeline system — customized to your brokerage, your market, and your agents." },
              { step: "02", title: "Leads Get Contacted Instantly", desc: "Every new lead receives an SMS and email within 60 seconds — day or night, weekday or weekend. No agent action required." },
              { step: "03", title: "Appointments Land on Your Calendar", desc: "Qualified leads automatically schedule time with your agents. Your team just shows up and closes." },
            ].map((item) => (
              <div key={item.step} className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 relative">
                <div className="text-6xl font-black text-blue-600/20 absolute top-6 right-8">{item.step}</div>
                <div className="text-blue-500 text-3xl font-black mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / WHO WE ARE */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          </div>
          <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-10">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              BrokerScale AI is a specialized automation agency built for one industry: real estate brokerages. We don&apos;t do generic marketing. We don&apos;t build websites. We build the systems that turn your lead flow into a predictable, scalable machine.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Every system we build runs on the same platforms that power the fastest-growing real estate teams in the country — GoHighLevel, Instantly, and Apollo — configured specifically for your brokerage, your market, and your agents.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              We handle the tech. You handle the relationships. That&apos;s the division.
            </p>
          </div>
        </div>
      </section>

      {/* BUILT ON PROVEN SYSTEMS */}
      <section className="py-20 px-6 bg-[#0d1425]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Proven Systems</h2>
            <p className="text-slate-400 text-lg">Industry-leading platforms trusted by thousands of agencies worldwide.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "GoHighLevel", desc: "CRM & Automation" },
              { name: "Instantly.ai", desc: "Cold Email" },
              { name: "Apollo.io", desc: "Lead Intelligence" },
              { name: "Twilio", desc: "SMS Delivery" },
              { name: "Google Calendar", desc: "Appointment Booking" },
            ].map((tool) => (
              <div key={tool.name} className="bg-[#111827] border border-[#1e293b] rounded-xl p-5 text-center">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-blue-400 font-black text-lg">{tool.name[0]}</span>
                </div>
                <div className="text-white font-semibold text-sm mb-1">{tool.name}</div>
                <div className="text-slate-500 text-xs">{tool.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 px-6" id="packages">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Growth System</h2>
            <p className="text-slate-400 text-lg">No long-term contracts. Month-to-month after setup. 1-week delivery.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Package 1 */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Package 1</div>
                <h3 className="text-2xl font-bold mb-2">Speed-to-Lead System</h3>
                <p className="text-slate-400 text-sm mb-6">For brokerages losing leads to slow follow-up</p>
                <div className="text-4xl font-black text-white">$1,500</div>
                <div className="text-slate-400 text-sm mb-1">one-time setup</div>
                <div className="text-blue-400 font-bold text-lg">+ $500/mo</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-3 mb-8 flex-1">
                {["60-second lead response via SMS + Email", "10 automated touches over 14 days", "GHL pipeline setup and configuration", "Appointment booking to agent calendars", "Monthly performance report"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">+</span> {item}</li>
                ))}
              </ul>
              <a href="https://buy.stripe.com/4gM6oHcuwdAJdz0a05bEA00" target="_blank" rel="noopener noreferrer" className="block text-center bg-[#0a0f1e] hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-white font-semibold py-3 rounded-xl transition-all">
                Get Started
              </a>
            </div>

            {/* Package 2 */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Package 2</div>
                <h3 className="text-2xl font-bold mb-2">Agent Recruiting Pipeline</h3>
                <p className="text-slate-400 text-sm mb-6">For brokerages growing their agent headcount</p>
                <div className="text-4xl font-black text-white">$2,000</div>
                <div className="text-slate-400 text-sm mb-1">one-time setup</div>
                <div className="text-blue-400 font-bold text-lg">+ $750/mo</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-3 mb-8 flex-1">
                {["Automated outreach to agents in your market", "20 automated touches over 30 days", "Full recruiting pipeline in GHL", "Automated interview scheduling", "Objection-handling follow-up sequences", "Monthly recruiting activity report"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">+</span> {item}</li>
                ))}
              </ul>
              <a href="https://buy.stripe.com/eVqfZhbqs2W5dz03BHbEA05" target="_blank" rel="noopener noreferrer" className="block text-center bg-[#0a0f1e] hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-white font-semibold py-3 rounded-xl transition-all">
                Get Started
              </a>
            </div>

            {/* Package 3 */}
            <div className="bg-[#0a1628] border-2 border-blue-500 rounded-2xl p-8 flex flex-col relative shadow-2xl shadow-blue-600/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap">MOST POPULAR</div>
              <div className="mb-6">
                <div className="text-xs font-bold text-blue-400/60 uppercase tracking-widest mb-2">Package 3</div>
                <h3 className="text-2xl font-bold mb-2">Full Growth System</h3>
                <p className="text-slate-400 text-sm mb-6">For brokerages ready to scale everything at once</p>
                <div className="text-4xl font-black text-white">$3,500</div>
                <div className="text-slate-400 text-sm mb-1">one-time setup</div>
                <div className="text-blue-400 font-bold text-lg">+ $1,200/mo</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-3 mb-8 flex-1">
                {["Everything in Package 1 + Package 2", "Past client reactivation campaign", "Referral request automation post-close", "Google review request sequence", "Unified dashboard — leads, recruiting, retention", "Bi-weekly strategy call (30 min)", "Priority support"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-blue-400 font-bold mt-0.5">+</span> {item}</li>
                ))}
              </ul>
              <a href="https://buy.stripe.com/bJecN5bqs4091Qic8dbEA01" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/30">
                Get Started
              </a>
            </div>

          </div>
          <p className="text-center text-slate-500 text-sm mt-8">All packages include 1-week setup, training handoff, and 30-day support window.</p>
        </div>
      </section>

      {/* BOOK A CALL */}
      <section className="py-24 px-6" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Not Sure Which Package?</h2>
          <p className="text-slate-400 text-xl mb-10 leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll map out exactly what your brokerage needs and show you what the system looks like in action.
          </p>
          <a href="https://link.brokerscaleai.com/widget/booking/pOWeqYfq4xIZMO11PhYH" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-xl font-semibold px-12 py-5 rounded-xl transition-colors shadow-2xl shadow-blue-600/30">
            Book Your Free Call
          </a>
          <p className="text-slate-500 text-sm mt-5">No commitment. No pitch decks. Just a conversation.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1e293b] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Image src="/logo-alt.jpg" alt="BrokerScale AI" width={150} height={40} className="object-contain" />
          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} BrokerScale AI. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
