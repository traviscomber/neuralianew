import type { Metadata } from "next"
import Link from "next/link"
import { Bot, Building2, Workflow, ArrowRight, CheckCircle2 } from "lucide-react"
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
    metadataTitle: "Servicios | N3uralia",
    metadataDescription:
      "Servicios de N3uralia: sistemas de IA, automatización y software full-stack para equipos en Chile y LATAM.",
    badge: "Servicios N3uralia",
    title: "Lo que construimos para equipos que quieren salir del piloto eterno",
    subtitle:
      "Trabajamos en tres frentes: sistemas de IA en producción, automatización conectada a negocio y software full-stack para operaciones que necesitan una base más fuerte.",
    cards: [
      {
        title: "Sistemas de IA en producción",
        description:
          "Agentes, memoria, flujos y control operacional para equipos que necesitan algo más serio que un experimento.",
        icon: Bot,
        bullets: [
          "Arquitectura aplicada",
          "Integración con sistemas",
          "Guardrails y monitoreo",
        ],
      },
      {
        title: "Automatización operacional",
        description:
          "Procesos que dejan de depender de seguimiento manual y empiezan a correr con reglas, contexto y trazabilidad.",
        icon: Workflow,
        bullets: [
          "Workflows reales",
          "Menos fricción humana",
          "Impacto medible",
        ],
      },
      {
        title: "Software full-stack",
        description:
          "Productos, paneles, APIs e integraciones cuando el problema no se resuelve solo con una capa de IA.",
        icon: Building2,
        bullets: [
          "Backend y frontend",
          "Infraestructura y despliegue",
          "Base lista para escalar",
        ],
      },
    ],
    processTitle: "Cómo lo aterrizamos",
    process: [
      "Diagnóstico técnico y de negocio.",
      "Arquitectura y plan de entrega.",
      "Construcción por iteraciones visibles.",
      "Validación y handoff operacional.",
    ],
    ctaTitle: "Si ya sabes que el problema importa, podemos ayudarte a construir la respuesta",
    ctaSubtitle:
      "No hace falta partir por todo. Podemos definir si conviene un piloto, una integración o un sistema completo.",
    primaryCta: "Hablar con el equipo",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "Services | N3uralia",
    metadataDescription:
      "N3uralia services: production AI systems, automation, and full-stack software for teams in Chile and LATAM.",
    badge: "N3uralia services",
    title: "What we build for teams that want to move past the endless pilot",
    subtitle:
      "We work across three fronts: production AI systems, business-connected automation, and full-stack software for operations that need a stronger technical base.",
    cards: [
      {
        title: "Production AI systems",
        description:
          "Agents, memory, flows, and operational control for teams that need something more serious than an experiment.",
        icon: Bot,
        bullets: [
          "Applied architecture",
          "System integrations",
          "Guardrails and monitoring",
        ],
      },
      {
        title: "Operational automation",
        description:
          "Processes that stop depending on manual follow-up and begin running with rules, context, and traceability.",
        icon: Workflow,
        bullets: [
          "Real workflows",
          "Less human friction",
          "Measurable impact",
        ],
      },
      {
        title: "Full-stack software",
        description:
          "Products, dashboards, APIs, and integrations when the problem cannot be solved by an AI layer alone.",
        icon: Building2,
        bullets: [
          "Backend and frontend",
          "Infrastructure and deployment",
          "A base ready to scale",
        ],
      },
    ],
    processTitle: "How we make it real",
    process: [
      "Technical and business diagnosis.",
      "Architecture and delivery plan.",
      "Visible iterative build.",
      "Validation and operational handoff.",
    ],
    ctaTitle: "If you already know the problem matters, we can help build the answer",
    ctaSubtitle:
      "You do not need to start with everything. We can define whether the right move is a pilot, an integration, or a full system.",
    primaryCta: "Talk to the team",
    secondaryCta: "View solutions",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/services",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function ServicesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">{page.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">{page.title}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-20 px-4 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {page.cards.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="border border-border p-8 rounded-lg hover:border-primary/60 transition-all bg-card"
                  >
                    <Icon className="w-10 h-10 text-primary mb-6" />
                    <h2 className="text-xl font-semibold text-foreground mb-4">{card.title}</h2>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{card.description}</p>
                    <div className="space-y-3">
                      {card.bullets.map((bullet) => (
                        <div key={bullet} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{page.processTitle}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {page.process.map((step, index) => (
                  <div key={step} className="border border-border rounded-lg p-6 bg-card flex gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                      0{index + 1}
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="py-20 px-4">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">{page.ctaTitle}</h2>
            <p className="text-muted-foreground mb-8">{page.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={href(locale, "/contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {page.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={href(locale, "/soluciones")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
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
