import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Layers, BookOpen } from "lucide-react"
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
    metadataTitle: "N3uralia Patterns | Patrones para sistemas agenticos",
    metadataDescription:
      "Biblioteca de patrones para construir sistemas agenticos escalables: orquestacion, memoria, coordinacion, resiliencia e integraciones.",
    badge: "Patrones de diseno",
    title: "Patrones para sistemas agenticos",
    subtitle: "Practicas probadas para construir sistemas agenticos robustos, escalables y operables.",
    libraryTitle: "Biblioteca de patrones",
    patterns: [
      { title: "Patron de orquestacion", desc: "Coordina multiples agentes con flujos de control centralizados." },
      { title: "Patron de memoria", desc: "Memoria persistente y contextual para aprendizaje y continuidad operacional." },
      { title: "Patron de decision", desc: "Decisiones multicriterio a traves de la red de agentes." },
      { title: "Patron de resiliencia", desc: "Manejo de errores y recuperacion en agentes distribuidos." },
      { title: "Patron de escalamiento", desc: "Escalamiento horizontal de instancias de agentes." },
      { title: "Patron de integracion", desc: "Conexion fluida con sistemas legacy y herramientas existentes." },
    ],
    ctaTitle: "Listo para aplicar los patrones?",
    cta: "Solicitar acceso",
  },
  en: {
    metadataTitle: "N3uralia Patterns | Agentic system design patterns",
    metadataDescription:
      "Design patterns library for building scalable agentic systems: orchestration, memory, coordination, resilience, and integrations.",
    badge: "Design patterns",
    title: "Agentic system patterns",
    subtitle: "Proven design patterns and best practices for building robust, scalable agentic systems.",
    libraryTitle: "Pattern library",
    patterns: [
      { title: "Orchestration pattern", desc: "Coordinate multiple agents with centralized control flow." },
      { title: "Memory pattern", desc: "Persistent and contextual memory for agent learning." },
      { title: "Decision pattern", desc: "Multi-criteria decision making across the agent network." },
      { title: "Resilience pattern", desc: "Error handling and recovery in distributed agents." },
      { title: "Scaling pattern", desc: "Horizontal scaling of agent instances." },
      { title: "Integration pattern", desc: "Seamless integration with legacy systems." },
    ],
    ctaTitle: "Ready to learn the patterns?",
    cta: "Get access",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/platform/patterns",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function PatternsPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{page.badge}</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">{page.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {page.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{page.libraryTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.patterns.map((pattern, i) => (
              <div key={i} className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/60 transition-colors">
                <BookOpen className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{pattern.title}</h3>
                <p className="text-sm text-muted-foreground">{pattern.desc}</p>
              </div>
            ))}
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
