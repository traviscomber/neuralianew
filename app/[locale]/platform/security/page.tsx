import Link from "next/link"
import { ArrowRight, Lock, Shield, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "N3uralia Security & Governance",
  description: "Enterprise-grade security and governance for agentic systems with audit trails, access control, and compliance.",
}

export default function SecurityPage() {
  const features = [
    { title: "Access Control", desc: "Role-based access with fine-grained permissions", icon: Lock },
    { title: "Audit Trails", desc: "Complete audit logs for all agent operations", icon: Shield },
    { title: "Compliance Ready", desc: "Built for SOC 2, GDPR, and enterprise standards", icon: CheckCircle2 },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise Security</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">Security & Governance</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security with built-in governance, compliance, and audit capabilities.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="p-6 rounded-lg border border-border/50 bg-card">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Compliance & Standards</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {["SOC 2 Type II", "GDPR", "HIPAA", "ISO 27001"].map((standard) => (
                <div key={standard} className="flex items-center gap-3 p-4 border border-border/50 rounded-lg bg-card">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Enterprise-ready security</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            Talk to Sales
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
