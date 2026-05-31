"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Users, Zap, Target, Rocket } from "lucide-react"
import { Footer } from "@/components/layout/footer"

interface HowWeWorkPageClientProps {
  locale: 'es' | 'en'
}

export function HowWeWorkPageClient({ locale }: HowWeWorkPageClientProps) {
  const isES = locale === 'es'
  const href = (path: string) => `/${locale}${path}`

  const weeks = [
    {
      week: isES ? "Semana 1" : "Week 1",
      title: { es: "Diagnóstico + Setup", en: "Diagnosis + Setup" },
      subtitle: { es: "Entender tu operación", en: "Understand your operation" },
      icon: Target,
      activities: isES 
        ? [
            "Workshop de 2 días: mapeamos procesos, identificamos puntos críticos",
            "Auditoría de datos: dónde está la info, cómo fluye hoy",
            "Definición clara de objetivos: ¿cuál es el problema #1?",
            "Setup de ambiente: infraestructura, acceso a datos",
            "Kick-off con tu equipo: roles, expectativas, timeline"
          ]
        : [
            "2-day workshop: map processes, identify critical bottlenecks",
            "Data audit: where information lives, current flow",
            "Clear objective definition: what's problem #1?",
            "Environment setup: infrastructure, data access",
            "Team kick-off: roles, expectations, timeline"
          ],
      outcome: {
        es: "Documento de diseño claro. Tu equipo sabe exactamente qué esperar.",
        en: "Clear design document. Your team knows exactly what to expect."
      }
    },
    {
      week: isES ? "Semana 2-3" : "Weeks 2-3",
      title: { es: "Build + Integration", en: "Build + Integration" },
      subtitle: { es: "Construir y conectar", en: "Build and connect" },
      icon: Zap,
      activities: isES 
        ? [
            "Desarrollo del motor central: agentes IA, lógica de decisión",
            "Integración con tus sistemas: APIs, bases de datos, herramientas existentes",
            "Testing iterativo: tu equipo valida cada componente",
            "Documentación en vivo: cómo funciona, cómo mantenerlo",
            "Entrenamientos técnicos: tu equipo aprende internamente"
          ]
        : [
            "Build core engine: AI agents, decision logic",
            "System integration: APIs, databases, existing tools",
            "Iterative testing: your team validates each component",
            "Live documentation: how it works, how to maintain it",
            "Technical training: your team learns internally"
          ],
      outcome: {
        es: "Sistema funcionando en ambiente de staging. Tu equipo lo maneja.",
        en: "System running in staging. Your team operates it."
      }
    },
    {
      week: isES ? "Semana 4" : "Week 4",
      title: { es: "Launch + 24/7", en: "Launch + 24/7" },
      subtitle: { es: "Ir a producción", en: "Go live" },
      icon: Rocket,
      activities: isES 
        ? [
            "Validación final: datos reales, tráfico real, escalas reales",
            "Migration: datos históricos si es necesario",
            "Go-live: transición suave desde sistema antiguo",
            "Monitoreo 24/7: alertas, health checks, performance",
            "Handoff: tu equipo ya maneja todo independientemente"
          ]
        : [
            "Final validation: real data, real traffic, real scale",
            "Migration: historical data if needed",
            "Go-live: smooth transition from legacy system",
            "24/7 monitoring: alerts, health checks, performance",
            "Handoff: your team operates independently"
          ],
      outcome: {
        es: "Sistema en producción 24/7. Sin interrupciones. Sin sorpresas.",
        en: "System in production 24/7. Zero downtime. No surprises."
      }
    }
  ]

  const keyPrinciples = [
    {
      titleES: "Transparencia Total",
      titleEN: "Total Transparency",
      descES: "Ves exactamente qué estamos haciendo, cuándo, y por qué. Nada oculto.",
      descEN: "See exactly what we're doing, when, and why. Nothing hidden.",
      icon: CheckCircle2,
    },
    {
      titleES: "Tu Equipo, Protagonista",
      titleEN: "Your Team Leads",
      descES: "No dejamos sistemas 'mágicos' que solo nosotros entendemos. Tu equipo controla todo.",
      descEN: "We don't leave 'black box' systems. Your team controls everything.",
      icon: Users,
    },
    {
      titleES: "Resultados Medibles",
      titleEN: "Measurable Results",
      descES: "Cada semana ves progreso real: métricas, dashboards, indicadores clave.",
      descEN: "See real progress every week: metrics, dashboards, KPIs.",
      icon: Target,
    },
    {
      titleES: "Sin Sorpresas",
      titleEN: "No Surprises",
      descES: "Presupuesto fijo. Timeline fijo. Alcance claro. Así es.",
      descEN: "Fixed budget. Fixed timeline. Clear scope. That's it.",
      icon: Zap,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">{isES ? "Proceso Probado" : "Proven Process"}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance text-foreground">
            {isES 
              ? "De Cero a Producción en 4 Semanas" 
              : "Zero to Production in 4 Weeks"}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {isES 
              ? "Sin sorpresas. Sin retrasos. Sin dependencia de nosotros. Exactamente lo que necesitas, cuando lo necesitas."
              : "No surprises. No delays. No lock-in. Exactly what you need, when you need it."}
          </p>
          <Link href={href("/contact")} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            {isES ? "Agendar diagnóstico" : "Schedule diagnosis"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 4-Week Timeline */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isES ? "Las 4 Semanas Explicadas" : "The 4 Weeks Explained"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isES 
                ? "Cómo transformamos tu operación, paso a paso"
                : "How we transform your operation, step by step"}
            </p>
          </div>

          {/* Timeline visualization */}
          <div className="space-y-8">
            {weeks.map((week, idx) => {
              const Icon = week.icon
              return (
                <div key={idx} className="relative">
                  {/* Connector line (except for last) */}
                  {idx < weeks.length - 1 && (
                    <div className="absolute left-8 top-24 w-1 h-16 bg-gradient-to-b from-primary to-primary/30" />
                  )}

                  <div className="flex gap-6">
                    {/* Timeline dot and icon */}
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 pb-8">
                      <div className="p-8 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="mb-4">
                          <span className="text-sm font-semibold text-primary">{week.week}</span>
                          <h3 className="text-2xl font-bold text-foreground mt-2">{isES ? week.title.es : week.title.en}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{isES ? week.subtitle.es : week.subtitle.en}</p>
                        </div>

                        {/* Activities */}
                        <div className="space-y-2 mb-6">
                          {week.activities.map((activity, i) => (
                            <div key={i} className="flex gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-foreground">{activity}</p>
                            </div>
                          ))}
                        </div>

                        {/* Outcome */}
                        <div className="pt-4 border-t border-primary/20">
                          <p className="text-sm font-semibold text-primary">
                            {isES ? "Resultado:" : "Outcome:"} <span className="text-foreground">{isES ? week.outcome.es : week.outcome.en}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-16 px-4 bg-primary/5 border-t border-primary/20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {isES ? "4 Principios Clave" : "4 Key Principles"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyPrinciples.map((principle, idx) => {
              const Icon = principle.icon
              return (
                <div key={idx} className="p-8 bg-background border border-primary/20 rounded-lg hover:shadow-lg transition-all">
                  <div className="flex gap-4 items-start">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{principle.titleES}</h3>
                      <p className="text-sm text-muted-foreground">{principle.descES}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ-style section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {isES ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h2>

          <div className="space-y-6">
            <div className="p-6 border border-primary/20 rounded-lg">
              <h3 className="font-bold text-lg text-foreground mb-3">
                {isES ? "¿Qué pasa después de las 4 semanas?" : "What happens after 4 weeks?"}
              </h3>
              <p className="text-foreground/80">
                {isES 
                  ? "Tu equipo está a cargo del 100%. Nosotros pasamos a modo soporte: parches de seguridad, optimizaciones de rendimiento, nuevas features cuando las necesites. No hay sorpresas, no hay sobrecostos."
                  : "Your team is 100% in control. We move to support mode: security patches, performance optimization, new features when you need them. No surprises, no cost overruns."}
              </p>
            </div>

            <div className="p-6 border border-primary/20 rounded-lg">
              <h3 className="font-bold text-lg text-foreground mb-3">
                {isES ? "¿Qué pasa si encontramos problemas durante el proceso?" : "What if we find issues during the process?"}
              </h3>
              <p className="text-foreground/80">
                {isES 
                  ? "Los problemas se resuelven EN el proceso, no después. Cada semana hay validación con tu equipo. Si hay que ajustar scope, lo hacemos transparentemente en la semana siguiente."
                  : "Problems get fixed IN the process, not after. Weekly validation with your team. If scope needs adjustment, we handle it transparently the next week."}
              </p>
            </div>

            <div className="p-6 border border-primary/20 rounded-lg">
              <h3 className="font-bold text-lg text-foreground mb-3">
                {isES ? "¿Necesitamos equipos técnicos grandes?" : "Do we need large technical teams?"}
              </h3>
              <p className="text-foreground/80">
                {isES 
                  ? "No. Tu equipo necesita 1-2 personas que puedan dedicar 20 horas la primera semana. Después, 2-3 horas por semana para validar. Nada más."
                  : "No. Your team needs 1-2 people who can commit 20 hours week 1. Then 2-3 hours/week to validate. That's it."}
              </p>
            </div>

            <div className="p-6 border border-primary/20 rounded-lg">
              <h3 className="font-bold text-lg text-foreground mb-3">
                {isES ? "¿Cuánto cuesta?" : "How much does it cost?"}
              </h3>
              <p className="text-foreground/80">
                {isES 
                  ? "Depende de complejidad, pero presupuesto fijo para el proyecto. Nada de surprises. Presupuesta entre $150K-500K USD dependiendo de la escala y complejidad. Incluye todo: diagnóstico, build, deploy, training, soporte 30 días."
                  : "Depends on complexity, but fixed budget for the project. No surprises. Budget $150K-500K USD depending on scale and complexity. Includes everything: diagnosis, build, deploy, training, 30-day support."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {isES ? "¿Listo para empezar?" : "Ready to get started?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {isES 
              ? "Agendar una llamada de 30 minutos. Sin costo, sin compromiso. Solo entender si podemos ayudarte."
              : "Schedule a 30-minute call. No cost, no commitment. Just understand if we can help."}
          </p>
          <Link href={href("/contact")} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            {isES ? "Agendar llamada" : "Schedule call"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
