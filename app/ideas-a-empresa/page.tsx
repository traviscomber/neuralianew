import { ArrowRight, CheckCircle2, Zap, Brain, Building2, Shield } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "De Idea a Empresa | N3uralia",
  description: "4 fases para transformar tu concepto en negocio operacional con Living Agents.",
  keywords: "startup builder, idea a producto, N3uralia, democratización",
}

export default function IdeasAEmpresa() {
  const phases = [
    {
      num: 1,
      title: "Validación",
      agent: "El Centinela",
      role: "Analiza mercado, competencia, viabilidad",
      duration: "Semana 1",
      outcomes: ["Estudio de mercado", "Análisis competitivo", "Validación de demanda", "Reporte de riesgo"],
      icon: Brain,
    },
    {
      num: 2,
      title: "Estrategia",
      agent: "El Estratega",
      role: "Diseña modelo de negocio y posicionamiento",
      duration: "Semana 1-2",
      outcomes: ["Modelo de negocio", "Pricing strategy", "Go-to-market", "KPIs clave"],
      icon: Zap,
    },
    {
      num: 3,
      title: "Construcción",
      agent: "El Arquitecto",
      role: "Desarrolla producto e infraestructura",
      duration: "Semana 2-3",
      outcomes: ["MVP funcional", "Infraestructura cloud", "Integraciones", "Dashboard admin"],
      icon: Building2,
    },
    {
      num: 4,
      title: "Operación",
      agent: "El Guardián",
      role: "Monitorea métricas, alertas, evolución",
      duration: "Semana 4+",
      outcomes: ["Métricas en vivo", "Alertas automáticas", "Reportes", "Recomendaciones"],
      icon: Shield,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">De Idea a Empresa en 4 Semanas</h1>
          <p className="text-xl text-muted-foreground mb-8">Tu idea + Living Agents = Negocio operacional</p>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {phases.map((phase, i) => {
            const Icon = phase.icon
            return (
              <div key={i} className="mb-16 last:mb-0">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:auto-cols-reverse" : ""}`}>
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-medium">Fase {phase.num}</div>
                        <h2 className="text-3xl font-bold">{phase.title}</h2>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-lg font-semibold text-primary mb-2">{phase.agent}</p>
                      <p className="text-muted-foreground mb-4">{phase.role}</p>
                      <div className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full inline-block">{phase.duration}</div>
                    </div>

                    <div className="space-y-3">
                      <p className="font-semibold">Entregables:</p>
                      {phase.outcomes.map((outcome, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="bg-muted/30 rounded-lg p-8 border border-border h-64 flex items-center justify-center">
                    <Icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>

                {i < phases.length - 1 && <div className="border-t border-border my-16" />}
              </div>
            )
          })}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-muted/30 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Modelos de Acceso</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Revenue Sharing", price: "0% upfront", desc: "Pagamos juntos. Compartimos éxito." },
              { name: "Fixed Project", price: "Desde $15k", desc: "MVP completo en 3-4 semanas." },
              { name: "Hybrid", price: "Custom", desc: "Combinación optimizada para tu caso." },
            ].map((plan, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-lg mb-2">{plan.name}</h3>
                <p className="text-primary font-bold text-xl mb-4">{plan.price}</p>
                <p className="text-muted-foreground text-sm">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Vamos</h2>
          <p className="text-muted-foreground mb-8">Tu idea no puede esperar.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Empecemos Ahora
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
