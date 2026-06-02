import type { Locale } from "@/lib/get-locale"
import { getDict } from "@/content/dictionaries"
import { CheckCircle2 } from "lucide-react"

export function SolutionSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"
  const d = getDict(locale)

  const solutions = [
    {
      es: "Interfaces, backend y APIs listas para uso diario - tu equipo trabaja desde el día 1",
      en: "Interfaces, backend and APIs ready for daily use - your team works from day 1",
    },
    {
      es: "Agentes conectados a tus sistemas y datos reales - Salesforce, Oracle, bases de datos internas",
      en: "Agents connected to your systems and real data - Salesforce, Oracle, internal databases",
    },
    {
      es: "Auditoría, seguridad y checkpoints humanos - cada decisión es verificable y reversible",
      en: "Audit, security and human checkpoints - every decision is verifiable and reversible",
    },
    {
      es: "Arquitectura agnóstica, sin lock-in de proveedor - tu infraestructura, nuestro soporte",
      en: "Vendor-agnostic architecture, no provider lock-in - your infrastructure, our support",
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {isES ? "No entregamos bots sueltos. Entregamos infraestructura operativa." : "We don't deliver loose bots. We deliver operational infrastructure."}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isES 
              ? "Cuatro pilares que convierten IA en resultados medibles" 
              : "Four pillars that turn AI into measurable results"}
          </p>
        </div>

        <div className="grid gap-6">
          {solutions.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/60 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
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
