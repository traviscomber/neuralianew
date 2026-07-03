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
      "Conoce N3uralia Nodes: agentes autónomos que se comunican y coordinan.",
    badge: "Arquitectura agentica",
    title: "N3uralia Nodes",
    subtitle:
      "Agentes autónomos que operan con coordinación.",
    featuresTitle: "Capacidades principales",
    features: [
      {
        title: "Decisión autónoma",
        desc: "Deciden con contexto en tiempo real.",
      },
      {
        title: "Auto-recuperación",
        desc: "Detectan y recuperan errores automáticamente.",
      },
      {
        title: "Comunicación distribuida",
        desc: "Mensajería eficiente con reintentos y trazabilidad.",
      },
      {
        title: "Optimización de rendimiento",
        desc: "Balanceo de carga y asignación de recursos.",
      },
    ],
    communicationTitle: "Comunicación entre Nodes",
    communicationDescription:
      "Nodes se comunican con una arquitectura publish-subscribe confiable.",
    communicationCallout: "Coordinación basada en eventos",
    ctaTitle: "¿Listo para desplegar Nodes?",
    cta: "Agendar demo",
  },
  en: {
    metadataTitle: "N3uralia Nodes | Distributed agentic agents",
    metadataDescription:
      "Learn about N3uralia Nodes: autonomous agents that communicate and coordinate.",
    badge: "Agentic architecture",
    title: "N3uralia Nodes",
    subtitle:
      "Autonomous agents that operate with coordination.",
    featuresTitle: "Key features",
    features: [
      {
        title: "Autonomous decision making",
        desc: "Agents decide with real-time context.",
      },
      {
        title: "Self-healing",
        desc: "Automatic error detection and recovery.",
      },
      {
        title: "Distributed communication",
        desc: "Efficient messaging with retries and traceability.",
      },
      {
        title: "Performance optimization",
        desc: "Load balancing and resource allocation.",
      },
    ],
    communicationTitle: "Node communication",
    communicationDescription:
      "Nodes communicate through a reliable publish-subscribe architecture.",
    communicationCallout: "Event-driven coordination",
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
