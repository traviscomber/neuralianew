import type { Locale } from "@/lib/get-locale"

export function ProofSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  const proofs = [
    {
      label: isES ? "Implementación" : "Implementation",
      value: "4 semanas" || "4 weeks",
      es: "4 semanas",
      en: "4 weeks",
    },
    {
      label: isES ? "Operación" : "Operation",
      value: "24/7",
      es: "24/7",
      en: "24/7",
    },
    {
      label: isES ? "Procesos automatizados" : "Automated processes",
      value: "+40",
      es: "+40",
      en: "+40",
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            {isES ? "Resultados medibles" : "Measurable results"}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {proofs.map((proof, i) => (
            <div key={i} className="p-8 rounded-lg border border-border/50 bg-card">
              <div className="text-3xl font-bold text-primary mb-2">
                {isES && proof.es || proof.en}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {proof.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
