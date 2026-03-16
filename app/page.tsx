export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur border-b border-[#1e293b]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">BrokerScale <span className="text-blue-500">AI</span></span>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Get a Free Strategy Call
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-36 pb-24 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Built exclusively for real estate brokerages
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Stop Losing Deals to<br />
          <span className="text-blue-500">Slow Follow-Up</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          BrokerScale AI builds automation systems that contact new leads within 60 seconds, recruit agents on autopilot, and fill your pipeline — without adding to your team&apos;s workload.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
        >
          Book a Free Strategy Call
        </a>
        <p className="text-slate-500 text-sm mt-4">No pressure. No pitch. Just a plan.</p>
      </section>

      {/* PROBLEM */}
      <section className="py-20 px-6 bg-[#0d1425]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Average Brokerage Responds to Leads in <span className="text-red-400">2–5 Hours</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            By then, your lead has already talked to three other agents. The brokerages winning today are the ones who respond first — every single time.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How BrokerScale AI Works</h2>
          <p className="text-slate-400 text-lg">We build it. We set it up. You close deals.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "We Build Your System",
              desc: "In one week, we set up a fully automated follow-up and pipeline system customized for your brokerage.",
            },
            {
              step: "02",
              title: "Leads Get Contacted Instantly",
              desc: "Every new lead receives an SMS and email within 60 seconds — day or night, weekday or weekend.",
            },
            {
              step: "03",
              title: "Appointments Land on Your Calendar",
              desc: "Interested leads automatically schedule time with your agents. You just show up and close.",
            },
          ].map((item) => (
            <div key={item.step} className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8">
              <div className="text-blue-500 text-4xl font-black mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 px-6 bg-[#0d1425]" id="packages">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Growth System</h2>
            <p className="text-slate-400 text-lg">No long-term contracts. Month-to-month after setup.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Package 1 */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">Speed-to-Lead System</h3>
                <p className="text-slate-400 text-sm mb-4">For brokerages losing leads to slow follow-up</p>
                <div className="text-3xl font-black text-white">$1,500 <span className="text-lg font-normal text-slate-400">setup</span></div>
                <div className="text-blue-400 font-semibold">+ $500/mo</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-3 mb-8 flex-1">
                {[
                  "60-second lead response via SMS + Email",
                  "10-touch automated sequence over 14 days",
                  "GHL pipeline setup and configuration",
                  "Appointment booking to agent calendars",
                  "Monthly performance report",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">+</span> {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center bg-blue-600/10 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-white font-semibold py-3 rounded-xl transition-all">
                Get Started
              </a>
            </div>

            {/* Package 2 */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">Agent Recruiting Pipeline</h3>
                <p className="text-slate-400 text-sm mb-4">For brokerages growing their agent headcount</p>
                <div className="text-3xl font-black text-white">$2,000 <span className="text-lg font-normal text-slate-400">setup</span></div>
                <div className="text-blue-400 font-semibold">+ $750/mo</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-3 mb-8 flex-1">
                {[
                  "Automated outreach to licensed agents in your market",
                  "20-touch SMS + email nurture over 30 days",
                  "Full recruiting pipeline in GHL",
                  "Automated interview scheduling",
                  "Objection-handling follow-up sequences",
                  "Monthly recruiting report",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">+</span> {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center bg-blue-600/10 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-white font-semibold py-3 rounded-xl transition-all">
                Get Started
              </a>
            </div>

            {/* Package 3 */}
            <div className="bg-[#0f1f3d] border-2 border-blue-500 rounded-2xl p-8 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">MOST POPULAR</div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">Full Growth System</h3>
                <p className="text-slate-400 text-sm mb-4">For brokerages ready to scale everything</p>
                <div className="text-3xl font-black text-white">$3,500 <span className="text-lg font-normal text-slate-400">setup</span></div>
                <div className="text-blue-400 font-semibold">+ $1,200/mo</div>
              </div>
              <ul className="text-slate-300 text-sm space-y-3 mb-8 flex-1">
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
                    <span className="text-blue-400 mt-0.5">+</span> {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors">
                Get Started
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 max-w-2xl mx-auto text-center" id="contact">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your Brokerage?</h2>
        <p className="text-slate-400 text-lg mb-10">
          Book a free 30-minute strategy call. We&apos;ll map out exactly what your brokerage needs and show you what the system looks like in action.
        </p>
        <a
          href="https://calendly.com/brokerscaleai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold px-10 py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
        >
          Book Your Free Call
        </a>
        <p className="text-slate-500 text-sm mt-4">No commitment. No pitch decks. Just a conversation.</p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1e293b] py-8 px-6 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} BrokerScale AI. All rights reserved.</p>
      </footer>

    </main>
  );
}
