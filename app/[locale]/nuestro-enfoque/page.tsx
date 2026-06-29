import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Compass, Shield, Target, Workflow } from "lucide-react"
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
    metadataTitle: "Nuestro enfoque | N3uralia",
    metadataDescription:
      "Principios de trabajo de N3uralia para construir sistemas de IA, software e integraciones con criterio operacional en Chile y LATAM.",
    badge: "Principios de trabajo",
    title: "Nuestro enfoque: menos show, mas arquitectura operable",
    subtitle:
      "Este enfoque nace de una idea simple: la IA sirve cuando se integra bien, se mide bien y se deja operar por equipos reales bajo presion real.",
    principlesTitle: "Cinco principios que guian el trabajo",
    principles: [
      {
        title: "Partir por la friccion real",
        description: "No empezamos por la tecnologia disponible. Empezamos por donde el negocio ya siente costo, atraso o desorden.",
      },
      {
        title: "Disenar para produccion",
        description: "Cada decision de arquitectura tiene que sobrevivir al uso diario, a las integraciones feas y a la operacion real.",
      },
      {
        title: "Construir con trazabilidad",
        description: "Preferimos sistemas que se puedan explicar, revisar y mejorar, antes que cajas negras dificiles de gobernar.",
      },
      {
        title: "Medir con criterio",
        description: "No basta con actividad o volumen. Buscamos mejores handoffs, menos retrabajo y decisiones mas rapidas.",
      },
      {
        title: "Dejar una base mas fuerte",
        description: "El proyecto tiene que dejar software, integraciones y criterio reutilizable para la siguiente etapa.",
      },
    ],
    whatItLooksLikeTitle: "Como se ve esto en la practica",
    whatItLooksLike: [
      "Un problema acotado con una metrica clara antes de escalar scope.",
      "Integraciones pensadas para convivir con el stack actual y no para resetearlo todo.",
      "Capas de IA con reglas, monitoreo y ownership visible.",
    ],
    ctaTitle: "Si este enfoque te hace sentido, podemos trabajar bien juntos",
    ctaSubtitle:
      "Nos acomodamos mejor con equipos que quieren construir capacidad tecnica y no solo comprar una narrativa bonita.",
    primaryCta: "Hablar con el equipo",
    secondaryCta: "Ver como trabajamos",
  },
  en: {
    metadataTitle: "Our approach | N3uralia",
    metadataDescription:
      "N3uralia's working principles for building AI systems, software, and integrations with operational discipline across Chile and LATAM.",
    badge: "Working principles",
    title: "Our approach: less theater, more operable architecture",
    subtitle:
      "This approach starts from one simple idea: AI matters when it integrates well, gets measured well, and can be operated by real teams under real pressure.",
    principlesTitle: "Five principles that guide the work",
    principles: [
      {
        title: "Start from real friction",
        description: "We do not begin with available technology. We begin where the business already feels cost, delay, or operational mess.",
      },
      {
        title: "Design for production",
        description: "Every architecture decision has to survive daily use, ugly integrations, and real operations.",
      },
      {
        title: "Build with traceability",
        description: "We prefer systems that can be explained, reviewed, and improved over black boxes that are hard to govern.",
      },
      {
        title: "Measure with judgment",
        description: "Activity or volume alone is not enough. We look for better handoffs, less rework, and faster decisions.",
      },
      {
        title: "Leave a stronger base behind",
        description: "The project should leave reusable software, integrations, and operational judgment for the next stage.",
      },
    ],
    whatItLooksLikeTitle: "What this looks like in practice",
    whatItLooksLike: [
      "A focused problem with a clear metric before scope expands.",
      "Integrations designed to coexist with the current stack instead of forcing a total reset.",
      "AI layers with rules, monitoring, and visible ownership.",
    ],
    ctaTitle: "If this approach resonates, we will likely work well together",
    ctaSubtitle:
      "We fit best with teams that want to build technical capacity, not just buy a polished story.",
    primaryCta: "Talk to the team",
    secondaryCta: "See how we work",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/nuestro-enfoque",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function NuestroEnfoquePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
                <Compass className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{page.badge}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">{page.title}</h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">{page.principlesTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.principles.map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-card p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow" className="border-b border-border">
          <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-10 text-center">{page.whatItLooksLikeTitle}</h2>
              <div className="space-y-4">
                {page.whatItLooksLike.map((item, index) => (
                  <div key={item} className="rounded-lg border border-border bg-background p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                      0{index + 1}
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-primary" />
            </div>
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
      </main>

      <Footer />
    </>
  )
}
