import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
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
    metadataTitle: "Como trabajamos | N3uralia",
    metadataDescription:
      "Metodologia de N3uralia para descubrir, disenar, integrar y operar sistemas de IA y software en produccion.",
    badge: "Metodologia de entrega",
    title: "De conversacion tecnica a sistema en produccion",
    subtitle:
      "Nuestro trabajo no es vender una maqueta bonita. Es transformar una necesidad operativa en una hoja de ruta, un sistema desplegado y una operacion que tu equipo pueda sostener.",
    stepsTitle: "Las 5 fases que usamos",
    steps: [
      {
        num: "01",
        title: "Diagnostico",
        description:
          "Entendemos donde esta la friccion real: que se repite, que se atrasa, que depende de demasiadas manos y que ya no escala.",
        bullets: [
          "Contexto de negocio",
          "Mapa de sistemas y dependencias",
          "Prioridad operativa",
        ],
      },
      {
        num: "02",
        title: "Arquitectura",
        description:
          "Definimos el flujo, los componentes, los puntos de integracion y la forma correcta de medir si esto genera valor.",
        bullets: [
          "Scope tecnico",
          "Guardrails y riesgos",
          "Plan de entrega",
        ],
      },
      {
        num: "03",
        title: "Construccion",
        description:
          "Desarrollamos software, automatizaciones e integraciones con ciclos cortos para que el avance sea visible y usable.",
        bullets: [
          "Implementacion incremental",
          "Feedback temprano",
          "Documentacion viva",
        ],
      },
      {
        num: "04",
        title: "Validacion",
        description:
          "Probamos el sistema donde importa: en el flujo operativo, con usuarios reales, con restricciones reales y con metricas reales.",
        bullets: [
          "Pruebas de funcionamiento",
          "Ajustes por uso real",
          "Metricas de impacto",
        ],
      },
      {
        num: "05",
        title: "Operacion",
        description:
          "Dejamos el sistema corriendo con criterio operacional, ownership claro y una siguiente etapa definida para evolucionar.",
        bullets: [
          "Handoff al equipo",
          "Monitoreo y soporte",
          "Roadmap siguiente",
        ],
      },
    ],
    rulesTitle: "Tres reglas de trabajo",
    rules: [
      {
        title: "Nada de caja negra",
        description:
          "Tu equipo entiende que se construye, por que se construye y como se opera.",
      },
      {
        title: "Nada de scope inflado",
        description:
          "Partimos donde el impacto es mas visible y no donde el discurso se ve mas ambicioso.",
      },
      {
        title: "Nada de dependencia eterna",
        description:
          "Disenamos para que el sistema quede en una operacion sostenible y no en una dependencia sin salida.",
      },
    ],
    timelineTitle: "Ritmo tipico",
    timelineSubtitle:
      "Cada proyecto cambia, pero este es el patron comun cuando estamos bien alineados.",
    timeline: [
      "Semana 1: diagnostico y definicion del problema",
      "Semana 2: arquitectura, integraciones y plan de entrega",
      "Semanas 3-5: construccion del flujo principal",
      "Semana 6+: validacion, hardening y operacion",
    ],
    ctaTitle: "Si quieres ver si hay fit, el primer paso es una conversacion corta",
    ctaSubtitle:
      "En 30 minutos podemos decirte si esto amerita piloto, sistema completo o simplemente no hacerlo todavia.",
    primaryCta: "Hablar con el equipo",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "How we work | N3uralia",
    metadataDescription:
      "N3uralia's delivery method to discover, design, integrate, and operate AI systems and software in production.",
    badge: "Delivery method",
    title: "From technical conversation to production system",
    subtitle:
      "Our job is not to sell a pretty mockup. It is to turn an operational need into a roadmap, a deployed system, and an operation your team can actually sustain.",
    stepsTitle: "The 5 phases we use",
    steps: [
      {
        num: "01",
        title: "Diagnosis",
        description:
          "We identify where the real friction lives: what repeats, what slows down, what depends on too many hands, and what no longer scales.",
        bullets: [
          "Business context",
          "System and dependency map",
          "Operational priority",
        ],
      },
      {
        num: "02",
        title: "Architecture",
        description:
          "We define the flow, components, integration points, and the right way to measure whether this creates value.",
        bullets: [
          "Technical scope",
          "Guardrails and risks",
          "Delivery plan",
        ],
      },
      {
        num: "03",
        title: "Build",
        description:
          "We develop software, automations, and integrations in short cycles so progress is visible and usable.",
        bullets: [
          "Incremental implementation",
          "Early feedback",
          "Living documentation",
        ],
      },
      {
        num: "04",
        title: "Validation",
        description:
          "We test where it matters: inside the real workflow, with real users, real constraints, and real metrics.",
        bullets: [
          "Functional testing",
          "Adjustments from real usage",
          "Impact metrics",
        ],
      },
      {
        num: "05",
        title: "Operation",
        description:
          "We leave the system running with operational criteria, clear ownership, and a defined next stage for evolution.",
        bullets: [
          "Team handoff",
          "Monitoring and support",
          "Next roadmap",
        ],
      },
    ],
    rulesTitle: "Three working rules",
    rules: [
      {
        title: "No black box",
        description:
          "Your team understands what is being built, why it matters, and how it runs.",
      },
      {
        title: "No inflated scope",
        description:
          "We start where impact is most visible, not where the pitch sounds most ambitious.",
      },
      {
        title: "No endless dependency",
        description:
          "We design for a sustainable operating system, not for permanent vendor lock-in.",
      },
    ],
    timelineTitle: "Typical pace",
    timelineSubtitle:
      "Every project changes, but this is the common pattern when alignment is strong.",
    timeline: [
      "Week 1: diagnosis and problem definition",
      "Week 2: architecture, integrations, and delivery plan",
      "Weeks 3-5: build the core workflow",
      "Week 6+: validation, hardening, and operations",
    ],
    ctaTitle: "If you want to test for fit, the first step is a short conversation",
    ctaSubtitle:
      "In 30 minutes we can tell you whether this deserves a pilot, a full system, or simply a later revisit.",
    primaryCta: "Talk to the team",
    secondaryCta: "View solutions",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/como-trabajamos`,
      languages: {
        es: "https://n3uralia.com/es/como-trabajamos",
        en: "https://n3uralia.com/en/como-trabajamos",
      },
    },
  }
}

export default function ComoTrabajamosPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="workflow" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">{page.badge}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-foreground">{page.title}</h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">{page.stepsTitle}</h2>
            </div>

            <div className="space-y-8">
              {page.steps.map((step) => (
                <div key={step.num} className="rounded-lg border border-border bg-card p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-14 w-14 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                        {step.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {step.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="blog" className="border-b border-border">
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{page.rulesTitle}</h2>
                  <div className="space-y-5">
                    {page.rules.map((rule) => (
                      <div key={rule.title} className="rounded-lg border border-border bg-background p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{rule.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{rule.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{page.timelineTitle}</h2>
                  <p className="text-muted-foreground mb-6">{page.timelineSubtitle}</p>
                  <div className="space-y-4">
                    {page.timeline.map((item) => (
                      <div key={item} className="rounded-lg border border-border bg-background p-5 flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        <SectionBackground section="hero">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-3xl text-center">
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
