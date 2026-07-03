import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Cpu, Share2 } from "lucide-react"
import { buildLocalizedMetadata } from "@/lib/page-metadata"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

function href(locale: Locale, path: string) {
  return `/${locale}${path}`
}

const content = {
  es: {
    metadataTitle: "N3uralia Nodes | Agentes distribuidos",
    metadataDescription:
      "Conoce N3uralia Nodes: agentes autonomos que se comunican, colaboran y mantienen coordinacion en sistemas distribuidos.",
    badge: "Arquitectura agentica",
    title: "N3uralia Nodes",
    subtitle:
      "Agentes autonomos e inteligentes que operan de forma independiente sin perder coordinacion con el sistema completo.",
    featuresTitle: "Capacidades principales",
    features: [
      {
        title: "Decision autonoma",
        desc: "Los agentes toman decisiones con contexto en tiempo real sin depender de intervencion humana constante.",
      },
      {
        title: "Auto-recuperacion",
        desc: "Deteccion y recuperacion automatica de errores para sostener la confiabilidad del sistema.",
      },
      {
        title: "Comunicacion distribuida",
        desc: "Mensajeria eficiente entre agentes con reintentos, prioridades y trazabilidad incorporada.",
      },
      {
        title: "Optimizacion de rendimiento",
        desc: "Balanceo de carga y asignacion de recursos entre instancias de agentes.",
      },
    ],
    communicationTitle: "Comunicacion entre Nodes",
    communicationDescription:
      "Los Nodes se comunican mediante una arquitectura publish-subscribe con entrega confiable, permitiendo flujos complejos y coordinacion multiagente.",
    communicationCallout: "Coordinacion basada en eventos con auditoria completa",
    ctaTitle: "Listo para desplegar Nodes?",
    cta: "Agendar demo",
  },
  en: {
    metadataTitle: "N3uralia Nodes | Distributed agentic agents",
    metadataDescription:
      "Learn about N3uralia Nodes: autonomous agents that communicate, collaborate, and maintain coordination in distributed systems.",
    badge: "Agentic architecture",
    title: "N3uralia Nodes",
    subtitle:
      "Autonomous, intelligent agents that operate independently while maintaining seamless coordination across your entire system.",
    featuresTitle: "Key features",
    features: [
      {
        title: "Autonomous decision making",
        desc: "Agents make decisions based on real-time context without constant human intervention.",
      },
      {
        title: "Self-healing",
        desc: "Automatic error detection and recovery to maintain system reliability.",
      },
      {
        title: "Distributed communication",
        desc: "Efficient message passing between agents with built-in retry logic.",
      },
      {
        title: "Performance optimization",
        desc: "Load balancing and resource allocation across agent instances.",
      },
    ],
    communicationTitle: "Node communication",
    communicationDescription:
      "Nodes communicate through a publish-subscribe architecture with guaranteed delivery, allowing complex workflows and multi-agent coordination.",
    communicationCallout: "Event-driven coordination with full audit trails",
    ctaTitle: "Ready to deploy Nodes?",
    cta: "Schedule a demo",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/platform/nodes",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function NodesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{page.badge}</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">{page.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {page.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{page.featuresTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {page.features.map((item, i) => (
                <div key={i} className="p-6 rounded-lg border border-border/50 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{page.communicationTitle}</h2>
            <div className="p-8 rounded-lg border border-border/50 bg-card">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {page.communicationDescription}
                </p>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Share2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{page.communicationCallout}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{page.ctaTitle}</h2>
          <Link
            href={href(locale, "/contact")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            {page.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
