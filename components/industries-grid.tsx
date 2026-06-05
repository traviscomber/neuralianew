"use client"

import type { Locale } from "@/lib/get-locale"
import Link from "next/link"
import { ArrowRight, Store, Truck, Factory } from "lucide-react"

export function IndustriesGrid({ locale }: { locale: Locale }) {
  const isES = locale === "es"

  const deepCaseStudy = {
    title: isES ? "Retail: El Caso de la Cadena con 50 Locales" : "Retail: 50-Store Chain Case Study",
    subtitle: isES ? "De 4 horas de respuesta a 15 minutos" : "From 4-hour response to 15 minutes",
    problem: isES
      ? "Una cadena de retail distribuida tenía un problema crítico: clientes llamaban con dudas sobre inventario, cambios de órdenes, o problemas. Cada consulta requería que un empleado checara 50 sistemas diferentes (Salesforce, ERP interno, warehouse system). Promedio: 4-8 horas para responder."
      : "A distributed retail chain had a critical problem: customers called with questions about inventory, order changes, or issues. Each inquiry required an employee to check 50 different systems (Salesforce, internal ERP, warehouse system). Average: 4-8 hours to respond.",
    solution: isES
      ? "N3uralia creó 3 agentes coordinados: (1) Agent de Inventario que consulta todos los sistemas, (2) Agent de Precios que valida promociones, (3) Agent de Órdenes que procesa cambios. Un cliente pregunta, los agentes coordinan la respuesta en 30 segundos, un empleado la aprueba en 10 segundos."
      : "N3uralia created 3 coordinated agents: (1) Inventory Agent checking all systems, (2) Pricing Agent validating promotions, (3) Order Agent processing changes. Customer asks, agents coordinate response in 30 seconds, employee approves in 10 seconds.",
    results: [
      { metric: "15 min", label: isES ? "Tiempo de respuesta" : "Response time" },
      { metric: "+58%", label: isES ? "Conversión de clientes" : "Customer conversion" },
      { metric: "-$65K", label: isES ? "Costos anuales" : "Annual costs" },
    ],
    timeline: isES ? "En producción en 28 días" : "In production in 28 days",
  }

  const industrySpotlights = [
    {
      icon: Truck,
      title: isES ? "Logística" : "Logistics",
      metric: "+2.3%",
      metricLabel: isES ? "Mejora OTIF" : "OTIF Improvement",
      description: isES
        ? "Optimización de rutas + predicción de delays = entregas a tiempo, visibilidad en tiempo real."
        : "Route optimization + delay prediction = on-time delivery, real-time visibility.",
      link: isES ? "/es/soluciones/logistica" : "/en/solutions/logistics",
    },
    {
      icon: Factory,
      title: isES ? "Manufactura" : "Manufacturing",
      metric: "-2.5%",
      metricLabel: isES ? "Reducción de defectos" : "Defect reduction",
      description: isES
        ? "Control de calidad automatizado + detección de anomalías = producción limpia, cero sorpresas."
        : "Automated quality control + anomaly detection = clean production, zero surprises.",
      link: isES ? "/es/soluciones/manufactura" : "/en/solutions/manufacturing",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 mb-6 bg-primary/5">
            <Store className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {isES ? "Casos por Industria" : "Cases by Industry"}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {isES ? "Historias de impacto real en diferentes industrias" : "Real impact stories across industries"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isES
              ? "Una historia profunda de Retail + spotlights de Logística y Manufactura"
              : "One deep story from Retail + quick wins in Logistics and Manufacturing"}
          </p>
        </div>

        {/* Deep Case Study */}
        <div className="mb-16 p-8 border border-primary/30 bg-primary/5 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Story */}
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 mb-4">
                {deepCaseStudy.title}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{deepCaseStudy.subtitle}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{deepCaseStudy.problem}</p>
              <p className="text-muted-foreground leading-relaxed mb-6 pt-4 border-t border-primary/20">
                {deepCaseStudy.solution}
              </p>
              <p className="text-xs text-muted-foreground italic">
                {deepCaseStudy.timeline}
              </p>
            </div>

            {/* Right: Results */}
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-foreground mb-4">
                {isES ? "Resultados Medibles" : "Measurable Results"}
              </h4>
              <div className="space-y-3">
                {deepCaseStudy.results.map((result, idx) => (
                  <div key={idx} className="p-4 bg-background border border-primary/20 rounded">
                    <p className="text-3xl font-bold text-primary">{result.metric}</p>
                    <p className="text-xs text-muted-foreground mt-1">{result.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href={isES ? "/es/case-studies/retail" : "/en/case-studies/retail"}
                className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                {isES ? "Ver caso completo" : "See full case"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Industry Spotlights */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">
            {isES ? "Otros sectores transformados" : "Other transformed sectors"}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {industrySpotlights.map((spotlight, idx) => {
              const Icon = spotlight.icon
              return (
                <Link
                  key={idx}
                  href={spotlight.link}
                  className="p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">{spotlight.title}</h4>
                  <p className="text-3xl font-bold text-secondary mb-1">{spotlight.metric}</p>
                  <p className="text-xs text-muted-foreground mb-4">{spotlight.metricLabel}</p>
                  <p className="text-sm text-muted-foreground">{spotlight.description}</p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 pt-12 border-t border-border">
          <p className="text-muted-foreground mb-4">
            {isES
              ? "10+ casos documentados por industria. Cada uno con métricas verificadas."
              : "10+ documented cases per industry. Each with verified metrics."}
          </p>
          <Link
            href={isES ? "/es/case-studies" : "/en/case-studies"}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-1 transition-all font-medium"
          >
            {isES ? "Explorar todos los casos" : "Explore all cases"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
