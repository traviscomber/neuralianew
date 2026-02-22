import { VibeAnalyticsDashboard } from "@/components/vibe-selling/vibe-analytics-dashboard"

export default function ViebeSellingPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Vibe Selling Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Real-time insights on buyer intent, engagement, and conversion across your entire platform.
          </p>
        </div>

        <VibeAnalyticsDashboard />

        {/* Implementation Details */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-foreground mb-8">How Vibe Selling Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-foreground mb-3">Silent Detection</h3>
              <p className="text-sm text-muted-foreground">
                We analyze scroll depth, time on each vertical, assets clicked, and session duration to detect buyer intent invisibly.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-foreground mb-3">Dynamic Intent Mapping</h3>
              <p className="text-sm text-muted-foreground">
                Signals translate into buyer profiles: Explorer, Builder, Buyer, or Partner. Each gets personalized value propositions.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-foreground mb-3">Live Value Composition</h3>
              <p className="text-sm text-muted-foreground">
                AI generates custom scope, timeline, tech stack, and pricing - no generic proposals, only what matches their intent.
              </p>
            </div>
          </div>

          {/* Intent Profiles */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Intent Profiles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary p-6 bg-primary/5 rounded">
                <p className="text-sm font-medium text-primary mb-2">🔍 EXPLORER</p>
                <p className="font-semibold text-foreground mb-3">Curious, researching options</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Long scrolls, checks multiple verticals, clicks demos & visuals. Not ready to buy yet.
                </p>
                <p className="text-xs font-mono text-primary bg-white px-2 py-1 rounded w-fit">
                  Vibe: "Let's explore what's possible"
                </p>
              </div>

              <div className="border-l-4 border-primary p-6 bg-primary/5 rounded">
                <p className="text-sm font-medium text-primary mb-2">🔨 BUILDER</p>
                <p className="font-semibold text-foreground mb-3">Technical, wants to understand</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Digs into APIs, code, infrastructure. Wants to know "how" not just "what."
                </p>
                <p className="text-xs font-mono text-primary bg-white px-2 py-1 rounded w-fit">
                  Vibe: "Here's the tech stack"
                </p>
              </div>

              <div className="border-l-4 border-primary p-6 bg-primary/5 rounded">
                <p className="text-sm font-medium text-primary mb-2">💰 BUYER</p>
                <p className="font-semibold text-foreground mb-3">Ready, wants results fast</p>
                <p className="text-sm text-muted-foreground mb-3">
                  High time on results/outcomes pages. Ready to decide. Wants clear scope, timeline, price.
                </p>
                <p className="text-xs font-mono text-primary bg-white px-2 py-1 rounded w-fit">
                  Vibe: "Here's your solution"
                </p>
              </div>

              <div className="border-l-4 border-primary p-6 bg-primary/5 rounded">
                <p className="text-sm font-medium text-primary mb-2">🤝 PARTNER</p>
                <p className="font-semibold text-foreground mb-3">Strategic, thinking long-term</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Deep engagement, long sessions, checks about us, considers multiple use cases.
                </p>
                <p className="text-xs font-mono text-primary bg-white px-2 py-1 rounded w-fit">
                  Vibe: "Let's build together"
                </p>
              </div>
            </div>
          </div>

          {/* Budget Mapping */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Budget Inference</h3>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Signal</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Startup</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Mid-Market</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-3 text-muted-foreground">Assets Clicked</td>
                    <td className="px-6 py-3">&lt; 2 assets</td>
                    <td className="px-6 py-3">2-4 assets</td>
                    <td className="px-6 py-3">5+ assets (includes visuals)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 text-muted-foreground">Session Duration</td>
                    <td className="px-6 py-3">&lt; 60 min</td>
                    <td className="px-6 py-3">60-180 min</td>
                    <td className="px-6 py-3">&gt; 300 min</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 text-muted-foreground">Typical Budget</td>
                    <td className="px-6 py-3 font-semibold text-primary">$1K-5K/month</td>
                    <td className="px-6 py-3 font-semibold text-primary">$5K-50K/month</td>
                    <td className="px-6 py-3 font-semibold text-primary">$50K-500K+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Ready to experience Vibe Selling?</p>
          <a
            href="/contact"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </div>
      </main>
    </>
  )
}
