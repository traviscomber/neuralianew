import type { Locale } from "@/lib/get-locale"

export function ProofSection({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  // Real case studies from actual clients
  const realCases = [
    {
      title: isES ? "Compañía Agrícola" : "Agricultural Company",
      vertical: isES ? "Agricultura" : "Agriculture",
      problem: isES ? "Alertas satelitales sin estructura, decisiones manuales retrasadas" : "Unstructured satellite alerts, delayed manual decisions",
      metric: "200+",
      metricLabel: isES ? "decisiones automáticas/día" : "automated decisions/day",
      timeframe: isES ? "Implementado en 14 días" : "Implemented in 14 days",
      improvement: isES ? "De 4-8 horas a <5s" : "From 4-8 hours to <5s",
    },
    {
      title: isES ? "Cadena de Hoteles de Lujo" : "Luxury Hotel Chain",
      vertical: isES ? "Hotelería" : "Hospitality",
      problem: isES ? "Operaciones fragmentadas, 200+ horas/mes trabajo manual" : "Fragmented operations, 200+ hours/month manual work",
      metric: "-40%",
      metricLabel: isES ? "ahorro operacional" : "operational savings",
      timeframe: isES ? "Escalando de 8 a 20+ propiedades" : "Scaling from 8 to 20+ properties",
      improvement: isES ? "De 4-8 horas a 15 minutos" : "From 4-8 hours to 15 minutes",
    },
    {
      title: isES ? "Plataforma Educativa" : "Educational Platform",
      vertical: isES ? "Educación" : "Education",
      problem: isES ? "Contenido educativo no escalable, generación manual" : "Unscalable educational content, manual generation",
      metric: "1000+",
      metricLabel: isES ? "historias generadas/día" : "stories generated/day",
      timeframe: isES ? "Lanzado en 45 días" : "Launched in 45 days",
      improvement: isES ? "Latencia <3s, -70% costo" : "Latency <3s, -70% cost",
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {isES ? "Resultados medibles en operación real" : "Measurable results in real operations"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isES 
              ? "Clientes reales, resultados verificables. Casos de producción activos."
              : "Real clients, verifiable results. Active production cases."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {realCases.map((caseData, i) => (
            <div key={i} className="p-8 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/60 transition-colors">
              {/* Vertical Tag */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 mb-4">
                {caseData.vertical}
              </div>

              {/* Client/Case Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">{caseData.title}</h3>

              {/* Problem */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {caseData.problem}
              </p>

              {/* Main Metric */}
              <div className="mb-6 p-4 bg-background border border-primary/30 rounded">
                <p className="text-3xl font-bold text-primary mb-1">{caseData.metric}</p>
                <p className="text-xs text-muted-foreground">{caseData.metricLabel}</p>
              </div>

              {/* Improvement */}
              <div className="space-y-2 mb-6 p-4 rounded bg-background">
                <p className="text-sm text-muted-foreground">{isES ? "Mejora" : "Improvement"}:</p>
                <p className="text-base font-semibold text-secondary">{caseData.improvement}</p>
              </div>

              {/* Timeframe */}
              <p className="text-xs text-muted-foreground border-t border-primary/20 pt-4">
                {caseData.timeframe}
              </p>
            </div>
          ))}
        </div>

        {/* Verification */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            {isES
              ? "50+ empresas en Chile confían en N3uralia. Casos activos, auditable, con SLA garantizado."
              : "50+ companies in Chile trust N3uralia. Active cases, auditable, with guaranteed SLA."}
          </p>
        </div>
      </div>
    </section>
  )
}
