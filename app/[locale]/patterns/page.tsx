import type { Metadata } from "next"
import { CheckCircle2, GitBranch, Shield, Workflow } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

const content = {
  es: {
    metadataTitle: "Patrones | N3uralia",
    metadataDescription:
      "Patrones de diseno para sistemas de IA y software: coordinacion, trazabilidad, control y resiliencia en produccion.",
    title: "Patrones que usamos cuando un sistema necesita sobrevivir al mundo real",
    subtitle:
      "Los patrones importan porque reducen improvisacion. Nos ayudan a construir componentes, flujos y decisiones de una forma mas revisable y repetible.",
    cards: [
      {
        title: "Coordinacion",
        description: "Patrones para repartir responsabilidades entre componentes, agentes y equipos sin perder claridad.",
        icon: Workflow,
      },
      {
        title: "Versionado y control",
        description: "Formas de capturar decisiones, revisar cambios y volver a ejecutar workflows con mas consistencia.",
        icon: GitBranch,
      },
      {
        title: "Trazabilidad",
        description: "Eventos, estados y decisiones observables para no depender de intuicion cuando algo falla.",
        icon: Shield,
      },
    ],
    rulesTitle: "Un buen patron no es una moda",
    rules: [
      "Es una forma de reducir riesgo de implementacion.",
      "Es una forma de acelerar decisiones sin perder rigor.",
      "Es una forma de dejar un sistema que otros tambien puedan operar.",
    ],
  },
  en: {
    metadataTitle: "Patterns | N3uralia",
    metadataDescription:
      "Design patterns for AI systems and software: coordination, traceability, control, and resilience in production.",
    title: "Patterns we use when a system has to survive the real world",
    subtitle:
      "Patterns matter because they reduce improvisation. They help us build components, workflows, and decisions in a more reviewable and repeatable way.",
    cards: [
      {
        title: "Coordination",
        description: "Patterns to distribute responsibilities across components, agents, and teams without losing clarity.",
        icon: Workflow,
      },
      {
        title: "Versioning and control",
        description: "Ways to capture decisions, review changes, and re-run workflows with stronger consistency.",
        icon: GitBranch,
      },
      {
        title: "Traceability",
        description: "Observable events, states, and decisions so teams do not rely on intuition when something fails.",
        icon: Shield,
      },
    ],
    rulesTitle: "A good pattern is not a trend",
    rules: [
      "It is a way to reduce implementation risk.",
      "It is a way to speed up decisions without losing rigor.",
      "It is a way to leave behind a system others can also operate.",
    ],
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/patterns",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function PatternsPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">{page.title}</h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.cards.map((card) => {
                const Icon = card.icon
                return (
                  <div key={card.title} className="rounded-lg border border-border bg-card p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">{card.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow">
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-10 text-center">{page.rulesTitle}</h2>
              <div className="space-y-4">
                {page.rules.map((item) => (
                  <div key={item} className="rounded-lg border border-border bg-background p-6 flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>
      </main>

      <Footer />
    </>
  )
}
