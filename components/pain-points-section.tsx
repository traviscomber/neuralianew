import type { Locale } from "@/lib/get-locale"

export function PainPointsSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  const painPoints = [
    {
      es: "Retrasos por tareas manuales",
      en: "Delays from manual tasks",
    },
    {
      es: "Errores sin trazabilidad",
      en: "Errors without traceability",
    },
    {
      es: "Decisiones sin contexto completo",
      en: "Decisions without full context",
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance">
            {isES ? "Si tu operación depende de planillas, ya hay riesgo" : "If your operation relies on spreadsheets, there's risk"}
          </h2>
        </div>

        <div className="grid gap-6">
          {painPoints.map((point, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-destructive mt-3" />
              <p className="text-lg text-muted-foreground">
                {isES ? point.es : point.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
