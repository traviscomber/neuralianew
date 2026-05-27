import type { Locale } from "@/lib/get-locale"

export function SolutionSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  const solutions = [
    {
      es: "Interfaces, backend y APIs listas para uso diario",
      en: "Interfaces, backend and APIs ready for daily use",
    },
    {
      es: "Agentes conectados a tus sistemas y datos reales",
      en: "Agents connected to your systems and real data",
    },
    {
      es: "Auditoría, seguridad y checkpoints humanos",
      en: "Audit, security and human checkpoints",
    },
    {
      es: "Arquitectura agnóstica, sin lock-in de proveedor",
      en: "Vendor-agnostic architecture, no provider lock-in",
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance">
            {isES ? "No entregamos bots sueltos. Entregamos infraestructura operativa." : "We don't deliver loose bots. We deliver operational infrastructure."}
          </h2>
        </div>

        <div className="grid gap-6">
          {solutions.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-secondary mt-3" />
              <p className="text-lg text-muted-foreground">
                {isES ? item.es : item.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
