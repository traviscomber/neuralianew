import Link from "next/link"
import { ArrowRight, Beaker, Lightbulb, Rocket } from "lucide-react"

export const metadata = {
  title: "N3uralia Labs - Research & Innovation",
  description: "Explore cutting-edge research in agentic systems, AI, and enterprise automation at N3uralia Labs.",
}

export default function LabsPage() {
  const research = [
    { title: "Agentic AI Research", desc: "Exploring the frontier of multi-agent systems and agentic architectures", icon: Beaker },
    { title: "Memory & Learning", desc: "Advanced memory systems for agent knowledge retention and evolution", icon: Lightbulb },
    { title: "Production Orchestration", desc: "Bringing agentic systems from research to enterprise production", icon: Rocket },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <Beaker className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Research & Innovation</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">N3uralia Labs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge research in agentic systems, pushing the boundaries of what's possible with AI in production.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {research.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-colors">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Current Research Areas</h2>
            <div className="space-y-4">
              {[
                "Multi-agent coordination and orchestration",
                "Emergent behavior in agentic systems",
                "Long-term memory and knowledge persistence",
                "Safe agent deployment and governance",
                "Real-time adaptation and learning",
              ].map((area, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border border-border/50 rounded-lg bg-card">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join our research initiatives</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            Collaborate with Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
