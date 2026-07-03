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
    metadataTitle: "N3uralia Patterns | Patrones para sistemas agénticos",
    metadataDescription:
      "Biblioteca de patrones para construir sistemas agénticos: orquestación, memoria, coordinación y resiliencia.",
    badge: "Patrones de diseno",
    title: "Patrones para sistemas agénticos",
    subtitle: "Prácticas probadas para construir sistemas robustos y operables.",
    libraryTitle: "Biblioteca de patrones",
    patterns: [
      { title: "Patrón de orquestación", desc: "Coordina múltiples agentes con control central." },
      { title: "Patrón de memoria", desc: "Memoria persistente para continuidad operativa." },
      { title: "Patrón de decisión", desc: "Decisiones multicriterio entre agentes." },
      { title: "Patrón de resiliencia", desc: "Manejo de errores y recuperación distribuida." },
      { title: "Patrón de escalamiento", desc: "Escalamiento horizontal de instancias." },
      { title: "Patrón de integración", desc: "Conexión con sistemas legacy y herramientas." },
    ],
    ctaTitle: "¿Listo para aplicar los patrones?",
    cta: "Solicitar acceso",
  },
  en: {
    metadataTitle: "N3uralia Patterns | Agentic system design patterns",
    metadataDescription:
      "Design patterns library for building agentic systems: orchestration, memory, coordination, and resilience.",
    badge: "Design patterns",
    title: "Agentic system patterns",
    subtitle: "Proven patterns for building robust systems.",
    libraryTitle: "Pattern library",
    patterns: [
      { title: "Orchestration pattern", desc: "Coordinate multiple agents with central control." },
      { title: "Memory pattern", desc: "Persistent memory for learning and continuity." },
      { title: "Decision pattern", desc: "Multi-criteria decisions across agents." },
      { title: "Resilience pattern", desc: "Error handling and recovery in distributed agents." },
      { title: "Scaling pattern", desc: "Horizontal scaling of agent instances." },
      { title: "Integration pattern", desc: "Connection with legacy systems and tools." },
    ],
    ctaTitle: "Ready to apply the patterns?",
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
