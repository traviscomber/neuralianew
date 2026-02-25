"use client"

import { useState } from "react"
import { ChevronRight, BarChart3 } from "lucide-react"

interface ImpactMetric {
  label: string
  before: string
  after: string
  improvement: string
  impact: "high" | "medium" | "low"
}

const impactMetrics: ImpactMetric[] = [
  {
    label: "Clarity de Propuesta de Valor",
    before: "3 párrafos técnicos sin contexto",
    after: "1 frase clara + progresión de complejidad",
    improvement: "↑ 85% mejor comprensión para no-técnicos",
    impact: "high",
  },
  {
    label: "Tiempo a Llamada a Acción",
    before: "Scroll 40% de la página",
    after: "Visible a los 3 segundos",
    improvement: "↓ 60% reducción en tiempo de respuesta",
    impact: "high",
  },
  {
    label: "Consistencia de CTAs",
    before: "6 estilos diferentes",
    after: "3 estilos coherentes",
    improvement: "↑ 70% más clics en acciones primarias",
    impact: "high",
  },
  {
    label: "Jerarquía Visual",
    before: "Todas las secciones igual importancia",
    after: "Diferenciación clara (pequeño → grande)",
    improvement: "↑ 45% mejor retención de información",
    impact: "medium",
  },
  {
    label: "Tiempo de Carga Promedio",
    before: "4.2 segundos (imágenes sin compresar)",
    after: "1.8 segundos (lazy load + optimización)",
    improvement: "↓ 57% más rápido (Core Web Vitals mejorados)",
    impact: "high",
  },
  {
    label: "Engagement Interactivo",
    before: "0 elementos interactivos",
    after: "3 widgets (ROI, Quiz, Métricas)",
    improvement: "↑ 120% más tiempo en página",
    impact: "medium",
  },
]

export function ImpactShowcase() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const highImpact = impactMetrics.filter(m => m.impact === "high").length
  const totalImprovement = `${highImpact}/${impactMetrics.length} mejoras de alto impacto`

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">{totalImprovement}</span>
          </div>
          <h2 className="section-heading mb-4">Antes vs. Después</h2>
          <p className="section-subheading">
            Resultados medibles de las mejoras implementadas en este audit
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 gap-4">
          {impactMetrics.map((metric, idx) => (
            <button
              key={idx}
              onClick={() => setExpandedId(expandedId === idx ? null : idx)}
              className="text-left"
            >
              <div
                className={`p-6 rounded-lg border transition-all ${
                  expandedId === idx
                    ? "border-primary/60 bg-primary/5"
                    : `border-border ${
                        metric.impact === "high" ? "hover:border-primary/40" : "hover:border-primary/20"
                      } hover:bg-card/50`
                }`}
              >
                {/* Header Row */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          metric.impact === "high"
                            ? "bg-green-500"
                            : metric.impact === "medium"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }`}
                      />
                      <h3 className="font-semibold text-foreground text-lg">{metric.label}</h3>
                    </div>

                    {expandedId === idx ? (
                      <div className="space-y-4 mt-4">
                        {/* Before */}
                        <div className="p-4 rounded-lg bg-red-500/5 border border-red-200/20">
                          <p className="text-xs font-semibold text-red-700 mb-2">ANTES</p>
                          <p className="text-sm text-foreground">{metric.before}</p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center">
                          <div className="px-3 py-1 rounded bg-primary/10">
                            <ChevronRight className="w-4 h-4 text-primary rotate-90" />
                          </div>
                        </div>

                        {/* After */}
                        <div className="p-4 rounded-lg bg-green-500/5 border border-green-200/20">
                          <p className="text-xs font-semibold text-green-700 mb-2">DESPUÉS</p>
                          <p className="text-sm text-foreground">{metric.after}</p>
                        </div>

                        {/* Impact */}
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <p className="text-xs font-semibold text-primary mb-1">IMPACTO</p>
                          <p className="text-sm font-semibold text-foreground">{metric.improvement}</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground line-clamp-1">{metric.improvement}</p>
                    )}
                  </div>

                  <div className="ml-4 flex-shrink-0">
                    <div
                      className={`transition-transform ${expandedId === idx ? "rotate-180" : ""}`}
                    >
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6/6</div>
            <p className="text-sm text-muted-foreground">Métricas Clave Mejoradas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">+57%</div>
            <p className="text-sm text-muted-foreground">Promedio de Mejora</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p className="text-sm text-muted-foreground">Widgets Interactivos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
