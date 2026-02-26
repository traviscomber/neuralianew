import Link from "next/link"
import { ArrowRight, Cpu, Zap, Share2 } from "lucide-react"

export const metadata = {
  title: "N3uralia Nodes - Distributed Agentic Agents",
  description: "Learn about N3uralia Nodes: Autonomous agents that communicate and collaborate in distributed systems.",
}

export default function NodesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Agentic Architecture</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">N3uralia Nodes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Autonomous, intelligent agents that operate independently while maintaining seamless coordination across your entire system.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Autonomous Decision Making", desc: "Agents make decisions based on real-time context without constant human intervention" },
                { title: "Self-Healing", desc: "Automatic error detection and recovery to maintain system reliability" },
                { title: "Distributed Communication", desc: "Efficient message passing between agents with built-in retry logic" },
                { title: "Performance Optimization", desc: "Load balancing and resource allocation across agent instances" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg border border-border/50 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Node Communication</h2>
            <div className="p-8 rounded-lg border border-border/50 bg-card">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Nodes communicate through a publish-subscribe architecture with guaranteed delivery, allowing complex workflows and multi-agent coordination.
                </p>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Share2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Event-driven coordination with full audit trails</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to deploy Nodes?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
