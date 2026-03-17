import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: March 16, 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
            <p>BrokerScale AI is operated by Tyrone Ward DBA BrokerScale AI, located at 255 Valencia Ave., Morgan Hill, CA 95037. You can reach us at brokerscaleai@gmail.com.</p>
            <p className="mt-3">We provide AI-powered automation systems for real estate brokerages. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong className="text-white">Contact Information</strong> — name, email address, phone number, and business name when you submit a form or book a call.</li>
              <li><strong className="text-white">Usage Data</strong> — pages visited, time on site, browser type, and referring URLs collected automatically via analytics tools.</li>
              <li><strong className="text-white">Communications</strong> — any messages, emails, or inquiries you send to us.</li>
              <li><strong className="text-white">Payment Information</strong> — processed securely through third-party providers (Stripe). We do not store card details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to inquiries and schedule strategy calls</li>
              <li>Deliver and manage your automation services</li>
              <li>Process payments and send receipts</li>
              <li>Send service-related communications</li>
              <li>Improve our website and offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Third-Party Services</h2>
            <p>We use the following third-party platforms to deliver our services. Each has its own privacy policy:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>GoHighLevel — CRM and automation delivery</li>
              <li>Instantly.ai — cold email outreach</li>
              <li>Apollo.io — lead intelligence</li>
              <li>Stripe — payment processing</li>
              <li>Vercel — website hosting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to analyze traffic and improve user experience. You can disable cookies in your browser settings, though some features may not function properly as a result.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
            <p>We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us at brokerscaleai@gmail.com.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Your Rights (California Residents)</h2>
            <p>Under the California Consumer Privacy Act (CCPA), California residents have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Know what personal data we collect and how it is used</li>
              <li>Request deletion of their personal data</li>
              <li>Opt out of the sale of personal data (we do not sell data)</li>
              <li>Non-discrimination for exercising these rights</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at brokerscaleai@gmail.com.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Children&apos;s Privacy</h2>
            <p>Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
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
