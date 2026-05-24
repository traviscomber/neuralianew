import type { Locale } from "@/lib/get-locale"

export function ProofSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  // Brief example case: Operacion hotelera - Tiempo de respuesta 4h -> 15min, 40% reduccion operativa
  const caseStudy = {
    title: isES ? "Operación hotelera" : "Hotel operation",
    problem: isES ? "Tiempo de respuesta lento en gestión de reservas" : "Slow response time in reservation management",
    before: "4h",
    after: "15 min",
    improvement: "40%",
    metric: isES ? "reducción operativa" : "operational reduction",
  }

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            {isES ? "Resultados medibles en operación real" : "Measurable results in real operations"}
          </h2>
        </div>

        <div className="p-8 rounded-lg border border-border/50 bg-card">
          <h3 className="text-2xl font-bold text-foreground mb-6">{caseStudy.title}</h3>
          
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{isES ? "Problema" : "Problem"}:</p>
              <p className="text-lg text-foreground">{caseStudy.problem}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">{isES ? "Resultado" : "Result"}:</p>
              <div className="flex items-baseline gap-4">
                <div>
                  <p className="text-3xl font-bold text-primary">{caseStudy.before}</p>
                  <p className="text-sm text-muted-foreground">{isES ? "Antes" : "Before"}</p>
                </div>
                <div className="text-xl text-muted-foreground">→</div>
                <div>
                  <p className="text-3xl font-bold text-secondary">{caseStudy.after}</p>
                  <p className="text-sm text-muted-foreground">{isES ? "Después" : "After"}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">{isES ? "Impacto" : "Impact"}:</p>
              <p className="text-2xl font-bold text-primary">{caseStudy.improvement} {caseStudy.metric}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
