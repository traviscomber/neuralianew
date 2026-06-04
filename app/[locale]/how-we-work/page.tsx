import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { methodologySteps } from "@/app/constants/content"
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

  return {
    title: "N3uralia Methodology | 5 Phases to Deploy Agentic Systems in Production",
    description:
      "How N3uralia implements agentic systems. 5 phases: discovery, architectural design, implementation, go-live and continuous optimization. Proven methodology to deploy AI agents in production with governance, persistent memory and scalability.",
    keywords:
      "implementation methodology, agentic systems production, how we work, implementation phases, AI architecture, intelligent agents, AI agents, go-live, cloud infrastructure, LATAM, Chile",
    alternates: {
      canonical,
      languages: {
        es: "https://n3uralia.com/es/como-trabajamos",
        en: "https://n3uralia.com/en/how-we-work",
      },
    },
    openGraph: {
      title: "N3uralia Methodology | Agentic Systems Implementation",
      description: "Our proven 5-phase methodology for deploying agentic systems in production.",
      url: canonical,
      type: 'article',
    },
  }
}

export default async function HowWeWorkPage({ params }: PageProps) {
  const { locale: rawLocale } = await params
  const locale = isValidLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE
  const isES = locale === "es"

  const services = isES ? [
    "Arquitectura de Software Agentica",
    "Sistemas Multi-Agente en Producción",
    "Automatización de Procesos Empresariales",
    "Integración de Datos y Pipelines",
    "Infraestructura Cloud Escalable",
    "Living Agents (Agentes Inteligentes)",
    "Operación y Monitoreo 24/7",
  ] : [
    "Agentic Software Architecture",
    "Multi-Agent Systems in Production",
    "Enterprise Process Automation",
    "Data Integration and Pipelines",
    "Scalable Cloud Infrastructure",
    "Living Agents (Intelligent AI Agents)",
    "24/7 Operations and Monitoring",
  ]

  const timeline = isES ? [
    { phase: "Fase 1-2", duration: "Semanas 1-4", focus: "Estrategia & Desarrollo" },
    { phase: "Fase 3", duration: "Semana 5-6", focus: "Infraestructura" },
    { phase: "Fase 4", duration: "Semana 7-10", focus: "Validación & Testing" },
    { phase: "Fase 5+", duration: "Ongoing", focus: "Operación & Evolución" },
  ] : [
    { phase: "Phase 1-2", duration: "Weeks 1-4", focus: "Strategy & Development" },
    { phase: "Phase 3", duration: "Weeks 5-6", focus: "Infrastructure" },
    { phase: "Phase 4", duration: "Weeks 7-10", focus: "Validation & Testing" },
    { phase: "Phase 5+", duration: "Ongoing", focus: "Operations & Evolution" },
  ]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">

      {/* Timeline View */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Timeline Típico</h2>
            <p className="body text-muted-foreground max-w-2xl mx-auto">
              La duración depende de la complejidad, pero aquí está el patrón típico:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timeline.map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-6 bg-background">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.phase}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.duration}</p>
                    <p className="text-sm text-primary font-medium">{item.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      </main>
      <Footer />
    </>
  )
}
