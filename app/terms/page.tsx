import Image from "next/image";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">
      <nav className="border-b border-[#1e293b] py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/logo-alt.jpg" alt="BrokerScale AI" width={150} height={40} className="object-contain" />
          </Link>
          <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-3">Terms & Conditions</h1>
        <p className="text-slate-500 mb-12">Last updated: March 16, 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p>These Terms and Conditions govern your use of the BrokerScale AI website and services operated by Tyrone Ward DBA BrokerScale AI (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), located at 255 Valencia Ave., Morgan Hill, CA 95037.</p>
            <p className="mt-3">By accessing our website or purchasing our services, you agree to be bound by these Terms. If you do not agree, do not use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Services</h2>
            <p>BrokerScale AI provides AI-powered automation systems for real estate brokerages, including but not limited to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Lead follow-up automation systems</li>
              <li>Agent recruiting pipeline automation</li>
              <li>CRM setup and configuration (GoHighLevel)</li>
              <li>Email and SMS campaign management</li>
              <li>Strategy consulting</li>
            </ul>
            <p className="mt-3">All services are described in detail at the time of purchase. We reserve the right to modify or discontinue services with reasonable notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Payment Terms</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Setup fees are due in full at the time of purchase before work begins.</li>
              <li>Monthly retainer fees are billed on a recurring basis beginning 30 days after setup completion.</li>
              <li>All payments are processed securely through Stripe.</li>
              <li>All fees are non-refundable except as described in Section 5 (Refund Policy).</li>
              <li>Failure to pay may result in suspension or termination of services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Month-to-Month Terms</h2>
            <p>Monthly retainer agreements are month-to-month with no long-term commitment. Either party may cancel with 30 days written notice to brokerscaleai@gmail.com. Cancellation does not entitle the client to a refund of any fees already paid.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Refund Policy</h2>
            <p>Setup fees are non-refundable once work has commenced. If BrokerScale AI fails to deliver the agreed setup within the stated timeframe through no fault of the client, a partial or full refund may be issued at our discretion. Monthly retainer fees are not refundable for months already billed.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Providing accurate business information and access credentials required for setup</li>
              <li>Ensuring their use of our automation systems complies with applicable laws, including CAN-SPAM, TCPA, and real estate regulations</li>
              <li>Maintaining active subscriptions to required third-party platforms (GoHighLevel, etc.)</li>
              <li>Responding to onboarding requests in a timely manner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Results Disclaimer</h2>
            <p>BrokerScale AI provides automation systems and tools. We do not guarantee specific results, including number of leads, closings, or revenue generated. Results depend on many factors outside our control, including market conditions, the quality of your leads, and your team&apos;s follow-through. Any statistics cited on our website are sourced from third-party research and represent industry averages, not guaranteed outcomes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and software, is the property of BrokerScale AI and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
            <p className="mt-3">Custom automation systems built for your brokerage are licensed to you for use during the active service period. Ownership of custom-built assets transfers to the client upon full payment and termination of services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by California law, BrokerScale AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you in the 30 days preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Confidentiality</h2>
            <p>Both parties agree to keep confidential any proprietary business information shared during the service relationship. This includes client data, business strategies, and system configurations.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of California. Any disputes arising under these Terms shall be resolved in the courts of Santa Clara County, California.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Changes to Terms</h2>
            <p>We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Contact Us</h2>
            <p>For questions about these Terms, contact us at:</p>
            <div className="mt-3 bg-[#111827] border border-[#1e293b] rounded-xl p-6">
              <p>Tyrone Ward DBA BrokerScale AI</p>
              <p>255 Valencia Ave., Morgan Hill, CA 95037</p>
              <p>brokerscaleai@gmail.com</p>
            </div>
          </section>

        </div>
      </div>

      <footer className="border-t border-[#1e293b] py-8 px-6 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} BrokerScale AI. All rights reserved.</p>
      </footer>
    </main>
  );
}
