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
