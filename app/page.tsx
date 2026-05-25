export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Test AI Prompts Against<br />
          <span className="text-[#58a6ff]">Injection Attacks</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Simulate dozens of prompt injection techniques against your system prompts. Get a vulnerability score and actionable hardening recommendations — before attackers find the gaps.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Securing Prompts — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access.</p>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-[#8b949e] text-sm">Attack Patterns</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Real-time</div>
            <div className="text-[#8b949e] text-sm">Vulnerability Score</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Actionable</div>
            <div className="text-[#8b949e] text-sm">Hardening Tips</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompt tests',
              '50+ injection attack patterns',
              'Vulnerability scoring (0–100)',
              'Hardening recommendations',
              'Attack pattern library updates',
              'API access included'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">What is a prompt injection attack?</h3>
            <p className="text-[#8b949e] text-sm">Prompt injection is when malicious user input overrides or manipulates your AI system prompt, causing the model to ignore instructions, leak data, or behave unexpectedly. It&apos;s one of the top risks in LLM-powered applications.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the simulator work?</h3>
            <p className="text-[#8b949e] text-sm">Paste your system prompt and we run it through 50+ known injection techniques — role-play overrides, delimiter escapes, jailbreaks, and more. Each test returns a pass/fail result and an overall security score with specific fix suggestions.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Do you store my prompts?</h3>
            <p className="text-[#8b949e] text-sm">No. Prompts are processed in memory and never persisted to a database. Your intellectual property stays yours.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Prompt Injection Attack Simulator. All rights reserved.
      </footer>
    </main>
  )
}
