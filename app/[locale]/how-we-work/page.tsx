import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Users, Zap, Shield, BarChart3 } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"

interface PageProps {
  params: Promise<{ locale: string }>
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  const canonical = `https://n3uralia.com/${locale}/how-we-work`
  const isES = locale === 'es'

  return {
    title: isES 
      ? "Metodología N3uralia | 5 Fases para Sistemas Agenticos en Producción"
      : "N3uralia Methodology | 5 Phases to Deploy Agentic Systems in Production",
    description: isES
      ? "Cómo implementamos sistemas agenticos. 5 fases: descubrimiento, diseño arquitectónico, implementación, lanzamiento y optimización continua. Metodología comprobada para desplegar agentes IA en producción con gobernanza, memoria persistente y escalabilidad."
      : "How N3uralia implements agentic systems. 5 phases: discovery, architectural design, implementation, go-live and continuous optimization. Proven methodology to deploy AI agents in production with governance, persistent memory and scalability.",
    keywords: isES
      ? "metodología implementación, sistemas agenticos producción, cómo trabajamos, fases implementación, arquitectura IA, agentes inteligentes, lanzamiento, infraestructura cloud, LATAM, Chile"
      : "implementation methodology, agentic systems production, how we work, implementation phases, AI architecture, intelligent agents, go-live, cloud infrastructure, LATAM, Chile",
    alternates: {
      canonical,
      languages: {
        es: "https://n3uralia.com/es/como-trabajamos",
        en: "https://n3uralia.com/en/how-we-work",
      },
    },
    openGraph: {
      title: isES 
        ? "Metodología N3uralia - Sistemas Agenticos"
        : "N3uralia Methodology - Agentic Systems Implementation",
      description: isES 
        ? "Nuestra metodología comprobada de 5 fases para desplegar sistemas agenticos en producción."
        : "Our proven 5-phase methodology for deploying agentic systems in production.",
      url: canonical,
      type: 'article',
    },
  }
}

export default async function HowWeWorkPage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = isValidLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE
  const isES = locale === "es"

  const phases = isES ? [
    {
      num: "01",
      title: "Descubrimiento & Diagnóstico",
      duration: "Semanas 1-2",
      description: "Entendemos tu operación: procesos críticos, sistemas existentes, pain points y oportunidades de automatización.",
      activities: [
        "Auditoría de procesos actuales",
        "Mapeo de sistemas y datos",
        "Identificación de quick wins",
        "Definición de métricas de éxito"
      ],
      icon: "🔍"
    },
    {
      num: "02",
      title: "Diseño Arquitectónico",
      duration: "Semanas 3-4",
      description: "Diseñamos la solución: agentes necesarios, integraciones, flujos y gobernanza. Todo documentado y revisado.",
      activities: [
        "Arquitectura de agentes",
        "Diseño de integraciones",
        "Definición de seguridad y auditoría",
        "Plan de implementación"
      ],
      icon: "🏗️"
    },
    {
      num: "03",
      title: "Implementación & Desarrollo",
      duration: "Semanas 5-8",
      description: "Construimos la solución en nuestro ambiente. Agentes viven, APIs funcionan, bases de datos están listas.",
      activities: [
        "Desarrollo de agentes",
        "Integración de sistemas",
        "Setup de infraestructura",
        "Testing inicial"
      ],
      icon: "⚙️"
    },
    {
      num: "04",
      title: "Validación & Go-Live",
      duration: "Semanas 9-10",
      description: "Ejecutamos el lanzamiento: pruebas finales, migración de datos, capacitación del equipo y go-live controlado.",
      activities: [
        "Testing de UAT",
        "Migración de datos",
        "Capacitación del equipo",
        "Lanzamiento en producción"
      ],
      icon: "🚀"
    },
    {
      num: "05",
      title: "Operación & Evolución",
      duration: "Ongoing",
      description: "Monitoreo 24/7, optimizaciones continuas, mejoras y evolución del sistema según métricas y feedback.",
      activities: [
        "Monitoreo y alertas",
        "Optimización de performance",
        "Nuevas funcionalidades",
        "Evolución de agentes"
      ],
      icon: "📈"
    }
  ] : [
    {
      num: "01",
      title: "Discovery & Diagnosis",
      duration: "Weeks 1-2",
      description: "We understand your operations: critical processes, existing systems, pain points and automation opportunities.",
      activities: [
        "Audit of current processes",
        "Systems and data mapping",
        "Quick wins identification",
        "Success metrics definition"
      ],
      icon: "🔍"
    },
    {
      num: "02",
      title: "Architectural Design",
      duration: "Weeks 3-4",
      description: "We design the solution: required agents, integrations, workflows and governance. Everything documented and reviewed.",
      activities: [
        "Agent architecture",
        "Integration design",
        "Security and audit definition",
        "Implementation plan"
      ],
      icon: "🏗️"
    },
    {
      num: "03",
      title: "Implementation & Development",
      duration: "Weeks 5-8",
      description: "We build the solution in our environment. Living agents, working APIs, databases ready.",
      activities: [
        "Agent development",
        "Systems integration",
        "Infrastructure setup",
        "Initial testing"
      ],
      icon: "⚙️"
    },
    {
      num: "04",
      title: "Validation & Go-Live",
      duration: "Weeks 9-10",
      description: "We execute the launch: final testing, data migration, team training and controlled production launch.",
      activities: [
        "UAT testing",
        "Data migration",
        "Team training",
        "Production launch"
      ],
      icon: "🚀"
    },
    {
      num: "05",
      title: "Operations & Evolution",
      duration: "Ongoing",
      description: "24/7 monitoring, continuous optimization, improvements and system evolution based on metrics and feedback.",
      activities: [
        "Monitoring and alerts",
        "Performance optimization",
        "New features",
        "Agent evolution"
      ],
      icon: "📈"
    }
  ]

  const values = isES ? [
    { title: "Velocidad sin riesgo", icon: Zap, desc: "Implementamos rápido pero sin sacrificar seguridad, auditoría o control." },
    { title: "Transparencia total", icon: Shield, desc: "Cada decisión, cada agente, cada cambio es auditable y reversible." },
    { title: "Tu equipo es dueño", icon: Users, desc: "No dejamos dependencias. Tu equipo comprende, opera y evoluciona el sistema." },
    { title: "ROI demostrable", icon: BarChart3, desc: "Métricas claras desde día 1. Mides el impacto en tiempo real." },
  ] : [
    { title: "Speed without risk", icon: Zap, desc: "We implement fast but without sacrificing security, audit or control." },
    { title: "Total transparency", icon: Shield, desc: "Every decision, every agent, every change is auditable and reversible." },
    { title: "Your team owns it", icon: Users, desc: "We don't create dependencies. Your team understands, operates and evolves the system." },
    { title: "Demonstrable ROI", icon: BarChart3, desc: "Clear metrics from day 1. You measure impact in real-time." },
  ]

  return (
    <>
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="py-24 pt-32 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full border border-primary/30 mb-6 bg-primary/5">
              <span className="text-sm font-medium text-primary">
                {isES ? "Metodología Comprobada" : "Proven Methodology"}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {isES ? "5 Fases para Sistemas Agenticos" : "5 Phases to Agentic Systems"}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {isES 
                ? "De diagnóstico a producción en 10 semanas. Estructura, proceso y governance para que tu equipo tenga control total."
                : "From diagnosis to production in 10 weeks. Structure, process and governance for your team to have total control."}
            </p>
            <Link href={isES ? "/es/contact" : "/en/contact"} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all font-medium">
              {isES ? "Comenzar diagnóstico" : "Start diagnosis"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 5 Phases */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {phases.map((phase, idx) => (
                <div key={idx} className="border border-border rounded-lg p-8 bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all">
                  <div className="flex gap-8">
                    {/* Left: Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex flex-col items-center">
                        <div className="text-5xl font-bold text-primary/20 mb-2">{phase.num}</div>
                        <div className="text-3xl">{phase.icon}</div>
                      </div>
                    </div>

                    {/* Middle: Content */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                      <p className="text-sm text-primary font-medium mb-4">{phase.duration}</p>
                      <p className="text-muted-foreground mb-6">{phase.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.activities.map((activity, i) => (
                          <div key={i} className="flex gap-2 items-start">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Arrow */}
                  {idx < phases.length - 1 && (
                    <div className="flex justify-center mt-6">
                      <ArrowRight className="w-6 h-6 text-primary/30 transform rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 px-4 bg-background border-t border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              {isES ? "Cómo trabajamos" : "How we work"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <div key={idx} className="p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline View */}
        <section className="py-24 bg-background border-t border-border px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {isES ? "Timeline Típico" : "Typical Timeline"}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {isES 
                  ? "La duración depende de la complejidad, pero aquí está el patrón típico:"
                  : "Duration depends on complexity, but here's the typical pattern:"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {phases.map((phase, i) => (
                <div key={i} className="border border-border rounded-lg p-6 bg-card/50 text-center hover:border-primary/50 transition-all">
                  <div className="text-3xl font-bold text-primary mb-2">{phase.num}</div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">{phase.title.split("&")[0].trim()}</h4>
                  <p className="text-xs text-muted-foreground mb-3">{phase.duration}</p>
                  {i < phases.length - 1 && (
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 hidden md:block">
                      <ArrowRight className="w-4 h-4 text-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {isES ? "¿Listo para transformar tu operación?" : "Ready to transform your operations?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {isES 
                ? "Comienza con un diagnóstico de 30 minutos. Sin compromiso. Solo respuestas claras."
                : "Start with a 30-minute diagnosis. No commitment. Just clear answers."}
            </p>
            <Link href={isES ? "/es/contact" : "/en/contact"} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all font-medium text-lg">
              {isES ? "Agendar diagnóstico" : "Schedule diagnosis"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
