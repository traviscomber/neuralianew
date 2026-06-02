import type { Locale } from "@/lib/get-locale"
import { getDict } from "@/content/dictionaries"

export function PainPointsSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"
  const d = getDict(locale)

  const painPoints = [
    {
      es: "Retrasos por tareas manuales: cada hora de demora cuesta dinero",
      en: "Delays from manual tasks: every hour of delay costs money",
    },
    {
      es: "Errores sin trazabilidad: imposible saber quién decidió qué",
      en: "Errors without traceability: impossible to know who decided what",
    },
    {
      es: "Decisiones sin contexto completo: falta de datos que deberían estar listos",
      en: "Decisions without full context: missing data that should be ready",
    },
  ]

  const costByIndustry = isES 
    ? [
        { industry: "Retail", cost: "$444K - $680K" },
        { industry: "Manufactura", cost: "$996K - $1.2M" },
        { industry: "Logística", cost: "$1.26M - $1.8M" },
        { industry: "Finanzas", cost: "$2.1M - $3.4M" },
      ]
    : [
        { industry: "Retail", cost: "$444K - $680K" },
        { industry: "Manufacturing", cost: "$996K - $1.2M" },
        { industry: "Logistics", cost: "$1.26M - $1.8M" },
        { industry: "Finance", cost: "$2.1M - $3.4M" },
      ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {isES ? "Operaciones manuales = riesgo financiero y operativo" : "Manual operations = financial and operational risk"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isES 
              ? "Tres obstáculos que cada operación enfrenta. Y cómo te cuesta dinero." 
              : "Three obstacles every operation faces. And how much it's costing you."}
          </p>
        </div>

        <div className="grid gap-6 mb-12">
          {painPoints.map((point, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-destructive mt-3" />
              <p className="text-lg text-muted-foreground">
                {isES ? point.es : point.en}
              </p>
            </div>
          ))}
        </div>

        {/* Cost by Industry Grid */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            {isES ? "Costo anual típico de operaciones manuales" : "Typical annual cost of manual operations"}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {costByIndustry.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-background border border-primary/20 rounded">
                <span className="font-medium text-foreground">{item.industry}</span>
                <span className="text-sm font-semibold text-primary">{item.cost}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            {isES 
              ? "Datos basados en análisis de 50+ empresas chilenas 2024-2025" 
              : "Based on analysis of 50+ Chilean companies 2024-2025"}
          </p>
        </div>
      </div>
    </section>
  )
}
