import type { Locale } from "@/lib/get-locale"

export function SolutionSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  const solutions = [
    {
      es: "Automatiza flujos críticos",
      en: "Automates critical workflows",
    },
    {
      es: "Conecta datos y herramientas",
      en: "Connects data and tools",
    },
    {
      es: "Aprueba con supervisión humana",
      en: "Approves with human oversight",
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance">
            {isES ? "Un sistema que ejecuta, no solo responde" : "A system that executes, not just responds"}
          </h2>
        </div>

        <div className="grid gap-6">
          {solutions.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="text-lg text-muted-foreground">
                  {isES ? item.es : item.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
