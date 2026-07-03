import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, Target, Users, Zap } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

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
    metadataTitle: "Acerca de | N3uralia",
    metadataDescription:
      "N3uralia construye sistemas de IA y software desde Chile para equipos que necesitan arquitectura, integración y operación real.",
    badge: "Acerca de N3uralia",
    title: "Construimos IA y software como infraestructura, no como truco",
    subtitle:
      "N3uralia nace desde Santiago con una obsesión simple: llevar inteligencia aplicada a operaciones reales en Chile y LATAM. Menos humo, menos piloto infinito, menos software aislado. Más arquitectura, más integración y más sistemas que realmente funcionan.",
    storyTitle: "Qué clase de empresa queremos ser",
    storyParagraphs: [
      "No nos interesa competir por la demo más llamativa. Nos interesa construir sistemas que sobrevivan al uso diario, a las integraciones feas y a la realidad de los equipos operativos.",
      "Creemos que la ventaja en Chile y LATAM no va a venir solo de usar modelos. Va a venir de saber combinar software, datos, automatización y criterio operacional con mucha más disciplina que el promedio.",
    ],
    pillarsTitle: "En qué creemos",
    pillars: [
      {
        title: "Arquitectura antes que hype",
        description:
          "La IA sirve cuando se integra bien, se monitorea bien y tiene un lugar claro dentro de la operación.",
        icon: Zap,
      },
      {
        title: "Contexto local importa",
        description:
          "Construimos desde Chile para equipos que operan en Chile y LATAM, con tiempos, restricciones y oportunidades reales.",
        icon: Users,
      },
      {
        title: "Impacto medible",
        description:
          "No basta con decir que algo usa IA. Tiene que reducir fricción, acelerar respuesta o abrir una capacidad nueva de negocio.",
        icon: Target,
      },
    ],
    fitTitle: "Con quién encajamos mejor",
    fitItems: [
      "Equipos que ya sienten fricción operacional y no necesitan que se la expliquen.",
      "Líderes que quieren construir software y automatización con criterio, no comprar una promesa vaga.",
    ],
    ctaTitle: "Si te importa construir algo serio, hablemos",
    ctaSubtitle:
      "Nos gusta trabajar con equipos que quieren llegar a producción, aprender rápido y dejar una base técnica más fuerte que antes.",
    primaryCta: "Contactar a N3uralia",
    secondaryCta: "Ver como trabajamos",
  },
  en: {
    metadataTitle: "About | N3uralia",
    metadataDescription:
      "N3uralia builds AI systems and software from Chile for teams that need architecture, integration, and real operations.",
    badge: "About N3uralia",
    title: "We build AI and software like infrastructure, not like a trick",
    subtitle:
      "N3uralia is built from Santiago around one simple obsession: bring applied intelligence into real operations across Chile and LATAM. Less hype, fewer endless pilots, less isolated software. More architecture, more integration, and more systems that actually work.",
    storyTitle: "What kind of company we want to be",
    storyParagraphs: [
      "No nos interesa competir por la demo más llamativa. Nos interesa construir sistemas que sobrevivan al uso diario, a las integraciones feas y a la realidad de los equipos operativos.",
      "Creemos que la ventaja en Chile y LATAM no va a venir solo de usar modelos. Va a venir de saber combinar software, datos, automatización y criterio operacional con mucha más disciplina que el promedio.",
    ],
    pillarsTitle: "What we believe",
    pillars: [
      {
        title: "Arquitectura antes que hype",
        description:
          "La IA sirve cuando se integra bien, se monitorea bien y tiene un lugar claro dentro de la operación.",
        icon: Zap,
      },
      {
        title: "Contexto local importa",
        description:
          "Construimos desde Chile para equipos que operan en Chile y LATAM, con tiempos, restricciones y oportunidades reales.",
        icon: Users,
      },
      {
        title: "Impacto medible",
        description:
          "No basta con decir que algo usa IA. Tiene que reducir fricción, acelerar respuesta o abrir una capacidad nueva de negocio.",
        icon: Target,
      },
    ],
    fitTitle: "Who we fit best",
    fitItems: [
      "Equipos que ya sienten fricción operacional y no necesitan que se la expliquen.",
      "Líderes que quieren construir software y automatización con criterio, no comprar una promesa vaga.",
    ],
    ctaTitle: "If you care about building something serious, let's talk",
    ctaSubtitle:
      "We like working with teams that want to reach production, learn fast, and leave with a stronger technical base than they started with.",
    primaryCta: "Contact N3uralia",
    secondaryCta: "See how we work",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    title: page.metadataTitle,
    description: page.metadataDescription,
    path: "/about",
  })
}

export default function AboutPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen pt-20 bg-background">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="container mx-auto text-center max-w-4xl">
              <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
                {page.badge}
              </p>
              <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-foreground">{page.title}</h1>
              <p className="body-lg text-muted-foreground leading-relaxed">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">{page.storyTitle}</h2>
            <div className="space-y-6">
              {page.storyParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="capabilities" className="border-b border-border">
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">{page.pillarsTitle}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {page.pillars.map((pillar) => {
                  const Icon = pillar.icon

                  return (
                    <div
                      key={pillar.title}
                      className="bg-card border border-border rounded-lg p-8 h-full hover:border-primary/40 transition-colors"
                    >
                      <Icon className="w-10 h-10 text-primary mb-6" />
                      <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{page.fitTitle}</h2>
            <div className="space-y-4">
              {page.fitItems.map((item) => (
                <div key={item} className="rounded-lg border border-border bg-card p-6 flex gap-3">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow">
          <section className="py-20 px-4">
            <div className="container mx-auto text-center max-w-3xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">{page.ctaTitle}</h2>
              <p className="text-muted-foreground mb-10">{page.ctaSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={href(locale, "/contact")}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  {page.primaryCta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={href(locale, "/como-trabajamos")}
                  className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
                >
                  {page.secondaryCta}
                </Link>
              </div>
            </div>
          </section>
        </SectionBackground>
      </main>

      <Footer />
    </>
  )
}
