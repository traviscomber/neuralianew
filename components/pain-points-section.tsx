import type { Locale } from "@/lib/get-locale"

export function PainPointsSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  const painPoints = [
    {
      es: "Retrasos por procesos manuales",
      en: "Delays from manual processes",
    },
    {
      es: "Errores sin trazabilidad",
      en: "Errors without traceability",
    },
    {
      es: "Decisiones sin contexto",
      en: "Decisions without context",
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance">
            {isES ? "Si tu operación depende de planillas, hay riesgo" : "If your operation relies on spreadsheets, there's risk"}
          </h2>
        </div>

        <div className="grid gap-6">
          {painPoints.map((point, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="text-lg text-muted-foreground">
                  {isES ? point.es : point.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
