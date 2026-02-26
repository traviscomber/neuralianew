import Link from "next/link"
import { ArrowRight, Zap, Lock, Layers, Cpu } from "lucide-react"

export const metadata = {
  title: "N3uralia Platform - Agentic Systems Architecture",
  description: "Explore the N3uralia platform: Nodes, Patterns, Security, and complete agentic systems infrastructure",
}

export default function PlatformPage() {
  const sections = [
    {
      title: "Nodes",
      description: "Distributed agent nodes that communicate, collaborate, and evolve independently while maintaining coordination.",
      icon: Cpu,
      href: "/platform/nodes",
      features: ["Autonomous agents", "Message passing", "Self-healing"]
    },
    {
      title: "Patterns",
      description: "Proven design patterns for agentic systems. Reusable blueprints for orchestration, memory, and decision-making.",
      icon: Layers,
      href: "/platform/patterns",
      features: ["Orchestration", "Memory systems", "Decision frameworks"]
    },
    {
      title: "Security & Governance",
      description: "Enterprise-grade security with built-in governance, audit trails, and access control for agentic operations.",
      icon: Lock,
      href: "/platform/security",
      features: ["Access control", "Audit logs", "Compliance ready"]
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Platform Architecture</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-balance">The Foundation of Agentic Systems</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            N3uralia Platform provides the complete infrastructure for building, deploying, and scaling agentic systems in production.
          </p>
        </div>
      </section>

      {/* Platform Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, i) => {
              const Icon = section.icon
              return (
                <Link key={i} href={section.href} className="group">
                  <div className="h-full p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all hover:shadow-md">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {section.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {section.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-border bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to build with N3uralia Platform?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Start building agentic systems today with our complete platform architecture.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
