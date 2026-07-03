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
    title: "Lo que cambia cuando la IA deja de ser promesa y entra a operar",
    subtitle:
      "Nos importa menos la narrativa y mas lo que queda funcionando: integraciones reales, decisiones mejor coordinadas y equipos con menos friccion operacional.",
    signalsTitle: "Senales de impacto que buscamos",
    signals: [
      {
        title: "Menos trabajo manual",
        description: "Flujos, seguimientos y handoffs que ya no dependen de persecucion humana constante.",
      },
      {
        title: "Mas visibilidad",
        description: "Equipos con mejor lectura de estado, excepciones y prioridades en la operacion diaria.",
      },
      {
        title: "Mas velocidad operativa",
        description: "Respuestas, coordinacion y ejecucion mas rapidas donde antes habia espera o desorden.",
      },
      {
        title: "Base lista para crecer",
        description: "Software e integraciones que permiten seguir automatizando sin reconstruir desde cero.",
      },
    ],
    casesTitle: "Casos que muestran la direccion",
    casesSubtitle:
      "Cada caso es distinto, pero todos comparten una idea: construir sistemas que sobreviven al uso real.",
    cases: [
      {
        title: "Ecosuelolab",
        description:
          "Monitoreo agricola, alertas y automatizacion conectada a una operacion tecnica con necesidad de respuesta oportuna.",
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        description:
          "Producto full-stack con experiencia guiada por IA y una capa de operacion preparada para escalar.",
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        description:
          "Software operativo para hospitality con mejor coordinacion entre equipos, tareas y respuesta diaria.",
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    principlesTitle: "Como evaluamos si valio la pena",
    principles: [
      "Si el equipo opera mejor sin depender de heroicidad manual.",
      "Si la informacion correcta llega antes a la persona correcta.",
      "Si la arquitectura deja espacio para una siguiente etapa y no para un reinicio total.",
    ],
    ctaTitle: "Si quieres resultados serios, hay que construir sistemas serios",
    ctaSubtitle:
      "Podemos revisar tu operacion y decirte donde hay una oportunidad real de automatizacion, integracion o software con IA.",
    primaryCta: "Hablar con N3uralia",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "Outcomes | N3uralia",
    metadataDescription:
      "N3uralia outcomes and case studies: AI systems, integrations, and software deployed for real operations across Chile and LATAM.",
    badge: "Production outcomes",
    title: "What changes when AI stops being a promise and starts operating",
    subtitle:
      "We care less about the story and more about what stays running: real integrations, better coordinated decisions, and less operational drag for the team.",
    signalsTitle: "Impact signals we look for",
    signals: [
      {
        title: "Less manual work",
        description: "Workflows, follow-up, and handoffs that no longer depend on constant human chasing.",
      },
      {
        title: "More visibility",
        description: "Teams with clearer visibility into status, exceptions, and priorities in daily operations.",
      },
      {
        title: "Faster operations",
        description: "Quicker response, coordination, and execution where waiting or confusion used to dominate.",
      },
      {
        title: "A base ready to grow",
        description: "Software and integrations that make future automation possible without a full rebuild.",
      },
    ],
    casesTitle: "Cases that show the direction",
    casesSubtitle:
      "Each case is different, but all of them share one idea: build systems that survive real use.",
    cases: [
      {
        title: "Ecosuelolab",
        description:
          "Agricultural monitoring, alerts, and automation connected to a technical operation that needs timely response.",
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        description:
          "A full-stack product with an AI-guided experience and an operating layer prepared to scale.",
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        description:
          "Operational software for hospitality with better coordination across teams, tasks, and daily response.",
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    principlesTitle: "How we decide it was worth it",
    principles: [
      "If the team operates better without depending on manual heroics.",
      "If the right information reaches the right person sooner.",
      "If the architecture leaves room for a next stage instead of a full restart.",
    ],
    ctaTitle: "Serious outcomes require serious systems",
    ctaSubtitle:
      "We can review your operation and tell you where there is a real opportunity for automation, integration, or AI-enabled software.",
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
