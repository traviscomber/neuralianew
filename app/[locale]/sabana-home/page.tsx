import Link from "next/link"
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { Footer } from "@/components/layout/footer"

interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return {
    title: isES
      ? "IA Aplicada a Operaciones Críticas | N3uralia Chile y LATAM"
      : "AI Applied to Critical Operations | N3uralia Chile and LATAM",
    description: isES
      ? "Automatiza procesos críticos sin perder control. Sistemas inteligentes con supervisión humana, integración total y resultados medibles en 4 semanas."
      : "Automate critical processes without losing control. Intelligent systems with human supervision, full integration, and measurable results in 4 weeks.",
    keywords: isES
      ? "automatización empresarial, IA operaciones, agentes inteligentes, procesos automatizados, transformación digital Chile"
      : "business automation, AI operations, intelligent agents, automated processes, digital transformation",
  }
}

export default function SabanaHomePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* 1. HERO SECTION */}
        <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16">
          <div className="max-w-5xl mx-auto w-full text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">
                {isES ? "IA aplicada a operaciones críticas | Chile y LATAM" : "AI applied to critical operations | Chile and LATAM"}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance text-foreground">
              {isES ? "Automatiza procesos críticos sin perder control" : "Automate critical processes without losing control"}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {isES
                ? "Diseñamos e integramos sistemas inteligentes que reducen errores, aceleran tiempos de respuesta y mantienen supervisión humana en cada decisión relevante."
                : "We design and integrate intelligent systems that reduce errors, accelerate response times, and maintain human supervision in every relevant decision."}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full">
              <Link
                href={`/${locale}/contact`}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-center"
              >
                {isES ? "Agendar diagnóstico" : "Schedule diagnostic"}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/case-studies`}
                className="px-8 py-4 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
              >
                {isES ? "Ver casos reales" : "View real cases"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro proof */}
            <div className="flex flex-wrap gap-4 sm:gap-8 justify-center text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{isES ? "Implementaciones en 4 semanas" : "Implementations in 4 weeks"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{isES ? "Integración con sistemas existentes" : "Integration with existing systems"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{isES ? "Trazabilidad end-to-end" : "End-to-end traceability"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUICK PROOF METRICS */}
        <section className="py-12 px-4 bg-muted/50 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">-40%</div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {isES ? "tiempo operativo" : "operational time"}
                </p>
              </div>
              <div className="text-center border-l border-r border-border/50">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {isES ? "continuidad" : "continuity"}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {isES ? "integración con stack actual" : "integration with current stack"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROBLEM SECTION */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              {isES
                ? "Si tu operación depende de planillas y tareas manuales, ya hay riesgo."
                : "If your operation depends on spreadsheets and manual tasks, there's already risk."}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {isES
                ? "Los cuellos de botella no vienen por falta de talento. Vienen por procesos fragmentados, errores repetitivos y decisiones sin contexto unificado."
                : "Bottlenecks don't come from lack of talent. They come from fragmented processes, repetitive errors, and decisions without unified context."}
            </p>

            <div className="space-y-4">
              {(isES
                ? [
                    "Retrasos en procesos clave",
                    "Errores sin trazabilidad",
                    "Dependencia de personas para tareas repetitivas",
                    "Baja visibilidad para decidir a tiempo",
                  ]
                : [
                    "Delays in key processes",
                    "Errors without traceability",
                    "Dependence on people for repetitive tasks",
                    "Low visibility to decide in time",
                  ]
              ).map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-primary/60 mt-3 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SOLUTION SECTION */}
        <section className="py-24 px-4 bg-muted/30 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              {isES
                ? "No instalamos bots sueltos. Diseñamos infraestructura operativa con IA."
                : "We don't install loose bots. We design operational infrastructure with AI."}
            </h2>
            <p className="text-lg text-muted-foreground mb-16">
              {isES
                ? "Conectamos datos, reglas de negocio y agentes especializados para que la operación funcione mejor desde el día uno."
                : "We connect data, business rules, and specialized agents so operations work better from day one."}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {(isES
                ? [
                    {
                      icon: "🔗",
                      title: "Orquestación de procesos",
                      desc: "Coordinación inteligente de flujos complejos",
                    },
                    {
                      icon: "⚙️",
                      title: "Integración con tus sistemas",
                      desc: "Sin cambios disruptivos en tu infraestructura",
                    },
                    {
                      icon: "🛡️",
                      title: "Control y gobernanza",
                      desc: "Supervisión humana en decisiones críticas",
                    },
                    {
                      icon: "📈",
                      title: "Evolución continua del sistema",
                      desc: "Aprendizaje y mejora automática",
                    },
                  ]
                : [
                    {
                      icon: "🔗",
                      title: "Process Orchestration",
                      desc: "Intelligent coordination of complex flows",
                    },
                    {
                      icon: "⚙️",
                      title: "Integration with your systems",
                      desc: "No disruptive changes to your infrastructure",
                    },
                    {
                      icon: "🛡️",
                      title: "Control and governance",
                      desc: "Human supervision in critical decisions",
                    },
                    {
                      icon: "📈",
                      title: "Continuous system evolution",
                      desc: "Automatic learning and improvement",
                    },
                  ]
              ).map((pillar, i) => (
                <div key={i} className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/30 transition-colors">
                  <div className="text-3xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CASE HIGHLIGHT */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-foreground">
              {isES ? "Resultados medibles en operación real" : "Measurable results in real operations"}
            </h2>

            <div className="bg-muted/50 rounded-lg p-8 sm:p-12 border border-border/50">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-sm font-semibold text-primary mb-4">
                    {isES ? "INDUSTRIA: HOTELERÍA" : "INDUSTRY: HOSPITALITY"}
                  </p>
                  <div className="space-y-6">
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">{isES ? "Antes" : "Before"}</p>
                      <p className="text-2xl font-bold text-foreground">4 horas</p>
                      <p className="text-sm text-muted-foreground">{isES ? "respuesta promedio" : "average response"}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">{isES ? "Después" : "After"}</p>
                      <p className="text-2xl font-bold text-primary">15 minutos</p>
                      <p className="text-sm text-muted-foreground">{isES ? "respuesta actual" : "current response"}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <p className="text-muted-foreground text-sm mb-2">{isES ? "Impacto" : "Impact"}</p>
                    <p className="text-5xl font-bold text-primary mb-4">-40%</p>
                    <p className="text-lg text-foreground font-semibold">
                      {isES ? "reducción operativa" : "operational reduction"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href={`/${locale}/case-studies`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                {isES ? "Ver más casos" : "View more cases"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. IMPLEMENTATION ROADMAP */}
        <section className="py-24 px-4 bg-muted/30 border-y border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              {isES ? "De diagnóstico a operación en 4 semanas" : "From diagnostic to operation in 4 weeks"}
            </h2>
            <p className="text-lg text-muted-foreground mb-16">
              {isES
                ? "Con acompañamiento de equipo experto y control humano en puntos críticos."
                : "With expert team support and human control at critical points."}
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {(isES
                ? [
                    { week: "Semana 1", title: "Diagnóstico y alcance" },
                    { week: "Semana 2", title: "Integración de datos y sistemas" },
                    { week: "Semana 3", title: "Orquestación y pruebas" },
                    { week: "Semana 4", title: "Salida a producción con métricas" },
                  ]
                : [
                    { week: "Week 1", title: "Diagnostic and scope" },
                    { week: "Week 2", title: "Data and systems integration" },
                    { week: "Week 3", title: "Orchestration and testing" },
                    { week: "Week 4", title: "Production launch with metrics" },
                  ]
              ).map((item, i) => (
                <div key={i} className="relative">
                  <div className="p-6 rounded-lg border border-primary/30 bg-card hover:bg-primary/5 transition-colors">
                    <p className="text-sm font-bold text-primary mb-2">{item.week}</p>
                    <p className="text-lg font-semibold text-foreground">{item.title}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-5 h-5 text-primary/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. INDUSTRIES */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-foreground">
              {isES ? "Aplicaciones por industria en Chile y LATAM" : "Applications by industry in Chile and LATAM"}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {(isES
                ? [
                    "Retail y e-commerce",
                    "Turismo y hospitalidad",
                    "Logística y supply chain",
                    "Manufactura",
                    "Servicios financieros",
                    "Minería y operaciones intensivas",
                  ]
                : [
                    "Retail and e-commerce",
                    "Tourism and hospitality",
                    "Logistics and supply chain",
                    "Manufacturing",
                    "Financial services",
                    "Mining and intensive operations",
                  ]
              ).map((industry, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
                >
                  <p className="text-lg font-semibold text-foreground">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. SECURITY & CONTROL */}
        <section className="py-24 px-4 bg-muted/30 border-y border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              {isES ? "Automatizar sí. Perder control, no." : "Automate yes. Lose control, no."}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {(isES
                ? [
                    { title: "Trazabilidad de decisiones", desc: "Cada acción registrada y auditable" },
                    { title: "Políticas de seguridad y acceso", desc: "Control granular de permisos y roles" },
                    { title: "Supervisión humana configurable", desc: "Escaladas automáticas a personas clave" },
                    { title: "Arquitectura agnóstica, sin lock-in", desc: "Portabilidad total de tu solución" },
                  ]
                : [
                    { title: "Decision traceability", desc: "Every action recorded and auditable" },
                    { title: "Security and access policies", desc: "Granular control of permissions and roles" },
                    { title: "Configurable human supervision", desc: "Automatic escalations to key people" },
                    { title: "Agnostic architecture, no lock-in", desc: "Complete portability of your solution" },
                  ]
              ).map((item, i) => (
                <div key={i} className="flex gap-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-foreground">
              {isES ? "Preguntas frecuentes" : "Frequently asked questions"}
            </h2>

            <div className="space-y-6">
              {(isES
                ? [
                    {
                      q: "¿En cuánto tiempo vemos resultados?",
                      a: "La mayoría de los primeros flujos operativos quedan en producción en 4 semanas.",
                    },
                    {
                      q: "¿Necesito cambiar mis sistemas actuales?",
                      a: "No. Diseñamos sobre tu stack actual e integramos por etapas.",
                    },
                    {
                      q: "¿Qué procesos conviene automatizar primero?",
                      a: "Los que tienen alta frecuencia, alto costo de error y dependencia manual.",
                    },
                    {
                      q: "¿Cómo abordan seguridad y privacidad?",
                      a: "Con trazabilidad, control de accesos, políticas claras y supervisión humana en decisiones críticas.",
                    },
                  ]
                : [
                    {
                      q: "How long until we see results?",
                      a: "Most first operational flows are in production within 4 weeks.",
                    },
                    {
                      q: "Do I need to change my current systems?",
                      a: "No. We design on your current stack and integrate in stages.",
                    },
                    {
                      q: "Which processes should we automate first?",
                      a: "Those with high frequency, high error cost, and manual dependency.",
                    },
                    {
                      q: "How do you handle security and privacy?",
                      a: "With traceability, access controls, clear policies, and human supervision in critical decisions.",
                    },
                  ]
              ).map((item, i) => (
                <details key={i} className="group border border-border/50 rounded-lg p-6 hover:border-primary/30 transition-colors">
                  <summary className="font-semibold text-lg text-foreground cursor-pointer flex justify-between items-center">
                    {item.q}
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-muted-foreground mt-4">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-24 px-4 bg-muted/50 border-y border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              {isES
                ? "Si tu operación no puede fallar, conversemos."
                : "If your operation can't fail, let's talk."}
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              {isES
                ? "Agenda un diagnóstico de 30 minutos y te llevas un plan priorizado para automatizar con impacto real."
                : "Schedule a 30-minute diagnostic and get a prioritized plan to automate with real impact."}
            </p>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {isES ? "Quiero mi diagnóstico" : "I want my diagnostic"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
