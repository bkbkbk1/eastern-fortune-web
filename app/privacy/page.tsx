export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: February 2026</p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p>Eastern Fortune 2026 collects the following information solely to provide fortune readings:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Birth date, birth time, and gender (entered by you)</li>
            <li>Language preference</li>
          </ul>
          <p className="mt-2">We do not collect names, email addresses, phone numbers, or location data.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Blockchain Transactions</h2>
          <p>When you make a payment through the app, the transaction is processed on the Solana blockchain. Wallet addresses and transaction signatures are publicly visible on the blockchain. We do not store your wallet private keys.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. How We Use Information</h2>
          <p>Birth information is sent to our API to calculate your Four Pillars (Saju) and generate a fortune reading via AI. This data is not stored after the reading is generated.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>OpenAI API - for AI-powered fortune interpretation</li>
            <li>Vercel Analytics - for anonymous usage statistics</li>
            <li>Solana blockchain - for payment processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
          <p>We do not permanently store your birth information or fortune readings. Language preferences are stored locally in your browser.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Contact</h2>
          <p>For privacy concerns, contact us at winmbk99@gmail.com</p>
        </section>
      </div>
    </div>
  );
}
