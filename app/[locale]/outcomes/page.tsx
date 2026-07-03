import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle2, Shield, Workflow } from "lucide-react"
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
    metadataTitle: "Resultados | N3uralia",
    metadataDescription:
      "Resultados y casos de N3uralia: sistemas de IA, integraciones y software desplegados para operaciones reales en Chile y LATAM.",
    badge: "Resultados en produccion",
    title: "Resultados que se pueden operar",
    subtitle:
      "Menos friccion, mas claridad y sistemas que siguen funcionando cuando el equipo los usa de verdad.",
    signalsTitle: "Señales de impacto",
    signals: [
      {
        title: "Menos trabajo manual",
        description: "Flujos y seguimientos que dejan de depender de persecucion constante.",
      },
      {
        title: "Mas visibilidad",
        description: "Estado, excepciones y prioridades visibles en un solo lugar.",
      },
      {
        title: "Base para crecer",
        description: "Arquitectura lista para seguir automatizando sin reiniciar.",
      },
    ],
    casesTitle: "Casos que muestran el tipo de cambio",
    casesSubtitle: "Cada caso parte de una friccion concreta y termina en un sistema util.",
    cases: [
      {
        title: "Ecosuelolab",
        description: "Monitoreo, alertas y automatizacion para una operacion tecnica.",
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        description: "Producto full-stack con experiencia guiada por IA.",
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        description: "Software operativo para coordinar equipos y tareas.",
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    principlesTitle: "Como evaluamos si valio la pena",
    principles: [
      "El equipo opera mejor sin heroicidad manual.",
      "La informacion correcta llega antes a quien decide.",
      "La arquitectura deja espacio para la siguiente etapa.",
    ],
    ctaTitle: "Si quieres resultados serios, construyamos sistemas serios",
    ctaSubtitle:
      "Podemos revisar tu operacion y decirte donde hay una oportunidad real.",
    primaryCta: "Hablar con N3uralia",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "Outcomes | N3uralia",
    metadataDescription:
      "N3uralia outcomes and case studies: AI systems, integrations, and software deployed for real operations across Chile and LATAM.",
    badge: "Production outcomes",
    title: "Outcomes that can actually run",
    subtitle:
      "Less friction, more clarity, and systems that keep working when the team uses them for real.",
    signalsTitle: "Impact signals",
    signals: [
      {
        title: "Less manual work",
        description: "Workflows and follow-up that stop depending on constant chasing.",
      },
      {
        title: "More visibility",
        description: "Status, exceptions, and priorities visible in one place.",
      },
      {
        title: "Base ready to grow",
        description: "Architecture ready for more automation without a rebuild.",
      },
    ],
    casesTitle: "Cases that show the pattern",
    casesSubtitle: "Each case starts with a concrete friction and ends in a useful system.",
    cases: [
      {
        title: "Ecosuelolab",
        description: "Monitoring, alerts, and automation for a technical operation.",
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        description: "A full-stack product with an AI-guided experience.",
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        description: "Operational software for coordinating teams and tasks.",
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    principlesTitle: "How we decide it was worth it",
    principles: [
      "The team works better without manual heroics.",
      "The right information reaches the right person sooner.",
      "The architecture leaves room for the next stage.",
    ],
    ctaTitle: "Serious outcomes need serious systems",
    ctaSubtitle: "We can review your operation and spot the real opportunity.",
    primaryCta: "Talk to N3uralia",
    secondaryCta: "View solutions",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/outcomes",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function OutcomesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">{page.badge}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">{page.title}</h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">{page.signalsTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.signals.map((signal) => (
                <div key={signal.title} className="rounded-lg border border-border bg-card p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Workflow className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{signal.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{signal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="capabilities" className="border-b border-border">
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">{page.casesTitle}</h2>
                <p className="text-muted-foreground">{page.casesSubtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {page.cases.map((item) => (
                  <Link
                    key={item.title}
                    href={href(locale, item.href)}
                    className="rounded-lg border border-border bg-background p-8 hover:border-primary/40 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                      {locale === "es" ? "Ver caso" : "View case"}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">{page.principlesTitle}</h2>
            <div className="space-y-4">
              {page.principles.map((item) => (
                <div key={item} className="rounded-lg border border-border bg-card p-6 flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-3xl text-center">
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
                  href={href(locale, "/soluciones")}
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
