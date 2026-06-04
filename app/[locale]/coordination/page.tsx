"use client"
import { Users, CheckCircle2, Zap, ArrowRight } from "lucide-react"
import { Footer } from "@/components/layout/footer"

const features = [
  {
    icon: Users,
    title: "Salas de Decisión",
    description: "Equipos + Agentes trabajando juntos en tiempo real. Contexto compartido. Sin email, sin Slack caótico.",
    details: ["Contexto persistente", "Decisiones documentadas", "Ejecución automática"],
  },
  {
    icon: CheckCircle2,
    title: "Trazabilidad Total",
    description: "Cada decisión: qué, por qué, quién, cuándo. Auditoría completa, trazabilidad imposible de romper.",
    details: ["Historial inmutable", "Rationale capturado", "Cumplimiento incorporado"],
  },
  {
    icon: Zap,
    title: "Ejecución Automática",
    description: "Decisión tomada = ejecución instantánea. Sin delays. Sin hand-off manual. Coordinación que funciona de verdad.",
    details: ["Ejecución inmediata", "Integración total", "Menos fricción"],
  },
]

export default function CoordinationPage() {
  const capabilities = [
    {
      icon: Users,
      phase: "Salas de Decisión",
      description: "Equipos + Agentes trabajando juntos en tiempo real. Contexto compartido. Sin email, sin Slack caótico.",
      items: ["Contexto persistente", "Decisiones documentadas", "Ejecución automática"],
    },
    {
      icon: CheckCircle2,
      phase: "Trazabilidad Total",
      description: "Cada decisión: qué, por qué, quién, cuándo. Auditoría completa, trazabilidad imposible de romper.",
      items: ["Historial inmutable", "Rationale capturado", "Cumplimiento incorporado"],
    },
    {
      icon: Zap,
      phase: "Ejecución Automática",
      description: "Decisión tomada = ejecución instantánea. Sin delays. Sin hand-off manual. Coordinación que funciona de verdad.",
      items: ["Ejecución inmediata", "Integración total", "Menos fricción"],
    },
  ]

  return (
    <>
      <main className="min-h-screen pt-16 bg-background">
        <SectionBackground section="workflow" className="border-b border-border">
        {/* Hero Section */}
        <section className="py-20 bg-background border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/10">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Orquestación para Humanos</span>
            </div>
            <h1 className="h1-light mb-6 text-foreground">
              Coordinación de Equipos Inteligente
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Las mismas habilidades de orquestación multi-agente, adaptadas para humanos. Decisiones más rápidas, equipos mejor coordinados.
            </p>
            <p className="body text-muted-foreground max-w-2xl mx-auto">
              De la gestión de proyectos al leadership de equipos: todo lo que necesitas para que tu gente trabaje en sincronía.
            </p>
          </div>
        </section>
        </SectionBackground>

        <SectionBackground section="capabilities" className="border-b border-border">
        {/* Features Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="h2 text-foreground mb-4">Tres Pilares de Coordinación Inteligente</h2>
              <p className="body text-muted-foreground">
                Que transforman equipos dispersos en máquinas de decisión coordinadas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon
                return (
                  <div
                    key={i}
                    className="border border-border p-8 bg-card hover:border-primary/40 transition-all rounded-lg group cursor-pointer hover:bg-card/80"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {cap.phase}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {cap.description}
                    </p>
                    <div className="space-y-2">
                      {cap.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="text-primary text-xs mt-1">✓</span>
                          <span className="text-xs text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        </SectionBackground>

        {/* CTA Section */}
        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="h2 text-foreground mb-4">
              ¿Listo para coordinar mejor?
            </h2>
            <p className="body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transformamos equipos dispersos en máquinas de coordinación. Comienza hoy con una sala colaborativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Comenzar Coordinación
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/capabilities"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
              >
                Ver Capacidades de IA
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
