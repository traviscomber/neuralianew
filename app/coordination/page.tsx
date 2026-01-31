"use client"
import { Users, CheckCircle2, Zap, ArrowRight } from "lucide-react"
import { Footer } from "@/components/layout/footer"

export default function CoordinationPage() {
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

  const capabilities = [
    {
      phase: "Coordinación Base",
      items: ["Salas de decisión", "Trazabilidad de decisiones", "Integración teams + agentes"],
    },
    {
      phase: "Inteligencia de Reuniones",
      items: ["Parsing automático de reuniones", "Síntesis de decisiones", "Integración de canales"],
    },
    {
      phase: "Orquestación Inteligente",
      items: ["Predicción de conflictos", "Optimización de decisiones", "Ejecución automática"],
    },
  ]

  return (
    <>
      <main className="min-h-screen pt-16 bg-background">
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

        {/* Features Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="h2 text-foreground mb-4">Capacidades de Coordinación</h2>
              <p className="body text-muted-foreground">
                Tres pilares que transforman equipos dispersos en máquinas de decisión coordinadas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div
                    key={i}
                    className="border border-border p-8 bg-card hover:border-primary/40 transition-all rounded-lg group cursor-pointer hover:bg-card/80"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.details.map((detail, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="text-primary text-xs mt-1">✓</span>
                          <span className="text-xs text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Capabilities Spectrum Section */}
        <section className="py-24 bg-primary/5 border-t border-primary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="h2 text-foreground mb-4">Espectro de Capacidades</h2>
              <p className="body text-muted-foreground">
                Desde coordinación básica hasta inteligencia organizacional completa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capabilities.map((cap, i) => (
                <div key={i} className="relative">
                  <div className="border border-primary/30 p-8 bg-background rounded-lg hover:border-primary/60 transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{i + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {cap.phase}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {cap.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < capabilities.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

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
