"use client"

import { User, Globe, Lightbulb } from "lucide-react"

const contextPillars = [
  {
    id: "human",
    icon: User,
    title: "Perfil Cognitivo",
    description: "Construye un modelo de tu contexto, objetivos y estilo. Cada interaccion refina la comprension.",
    details: ["Perfil de usuario persistente", "Preferencias aprendidas", "Historial de decisiones"],
  },
  {
    id: "world",
    icon: Globe,
    title: "Inteligencia de Dominio",
    description: "Domina tu industria, mercado y competencia. Sabe que funciona en tu contexto especifico.",
    details: ["Analisis de industria", "Inteligencia de mercado", "Benchmarking competitivo"],
  },
  {
    id: "assist",
    icon: Lightbulb,
    title: "Asistencia Adaptativa",
    description: "Propone soluciones calibradas a ti. No respuestas genericas, sino recomendaciones de precision.",
    details: ["Soluciones contextualizadas", "Automatizacion inteligente", "Optimizacion continua"],
  },
]

export function HumanContextEngine() {
  return (
    <section className="bg-background py-24 border-t border-border px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 text-foreground mb-4">Motor de Contexto Inteligente</h2>
          <p className="body text-muted-foreground max-w-2xl mx-auto">
            Un sistema que te entiende a ti, tu negocio y tu mundo. Contexto persistente, no conversaciones aisladas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contextPillars.map((pillar) => {
            const IconComponent = pillar.icon
            return (
              <div key={pillar.id} className="group">
                <div className="flex flex-col items-start">
                  {/* Icon */}
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{pillar.description}</p>

                  {/* Details */}
                  <ul className="space-y-2 flex-1">
                    {pillar.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Context Engine Workflow */}
        <div className="p-8 rounded-lg border border-border bg-card">
          <h3 className="h3 text-foreground mb-6 text-center">Ciclo de Contexto</h3>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
              <p className="text-sm font-semibold text-foreground mb-2">Aprender</p>
              <p className="text-xs text-muted-foreground">Recopila datos sobre ti y tu contexto</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-8 h-0.5 bg-primary/30" />
              <span className="text-primary/30">→</span>
            </div>

            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                <span className="text-sm font-bold text-primary">2</span>
              </div>
              <p className="text-sm font-semibold text-foreground mb-2">Analizar</p>
              <p className="text-xs text-muted-foreground">Identifica patrones y oportunidades</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-8 h-0.5 bg-primary/30" />
              <span className="text-primary/30">→</span>
            </div>

            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                <span className="text-sm font-bold text-primary">3</span>
              </div>
              <p className="text-sm font-semibold text-foreground mb-2">Actuar</p>
              <p className="text-xs text-muted-foreground">Propone acciones personalizadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
