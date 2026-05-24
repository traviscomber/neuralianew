import type { Locale } from "@/lib/get-locale"

export function HowWeWorkSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  const phases = [
    {
      week: "1",
      es: "Mapa y alcance",
      en: "Mapping & scope",
    },
    {
      week: "2-3",
      es: "Integración y flujos",
      en: "Integration & workflows",
    },
    {
      week: "4",
      es: "Salida productiva",
      en: "Live deployment",
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance">
            {isES ? "De diagnóstico a producción" : "From diagnosis to production"}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {phases.map((phase, i) => (
            <div key={i} className="p-6 rounded-lg border border-border/50 bg-card">
              <div className="text-sm font-semibold text-primary mb-2">
                {isES ? "Semana" : "Week"} {phase.week}
              </div>
              <p className="text-lg font-medium text-foreground">
                {isES ? phase.es : phase.en}
              </p>
              {i < phases.length - 1 && (
                <div className="hidden md:block absolute left-[calc(33.333%)] top-1/2 w-8 h-[2px] bg-primary/20 transform translate-x-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
