import type { Locale } from "@/lib/get-locale"

export function HowWeWorkSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  const phases = [
    {
      week: "1",
      es: "Diagnóstico y alcance",
      en: "Diagnosis & scope",
    },
    {
      week: "2",
      es: "Integración con sistemas y datos",
      en: "Integration with systems & data",
    },
    {
      week: "3",
      es: "Orquestación de agentes y flujos",
      en: "Orchestration of agents & workflows",
    },
    {
      week: "4",
      es: "Salida a producción con monitoreo",
      en: "Production deployment with monitoring",
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance">
            {isES ? "De diagnóstico a producción en 4 semanas" : "From diagnosis to production in 4 weeks"}
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {phases.map((phase, i) => (
            <div key={i} className="relative">
              <div className="p-6 rounded-lg border border-border/50 bg-card">
                <div className="text-sm font-semibold text-primary mb-3">
                  {isES ? "Semana" : "Week"} {phase.week}
                </div>
                <p className="text-base font-medium text-foreground">
                  {isES ? phase.es : phase.en}
                </p>
              </div>
              {i < phases.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 w-4 h-0.5 bg-primary/20 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
