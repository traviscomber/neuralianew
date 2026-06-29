import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart3, Clock, Shield, Workflow, Zap } from "lucide-react"
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
    metadataTitle: "Integraciones empresariales | N3uralia",
    metadataDescription:
      "Integramos ERP, CRM, operaciones y software legacy sin reescribirlo todo. Arquitectura e integracion para equipos en Chile y LATAM.",
    badge: "Integraciones empresariales",
    title: "Conecta sistemas legacy sin romper la operacion",
    subtitle:
      "Muchas empresas en Chile y LATAM no necesitan botar su stack. Necesitan una capa seria de integracion, sincronizacion y control para que los sistemas por fin trabajen juntos.",
    problemTitle: "El problema real no es el software viejo",
    problemSubtitle:
      "El problema es la friccion entre sistemas, equipos y decisiones. Ahi es donde N3uralia entra.",
    problems: [
      "Datos repartidos entre ERP, CRM, planillas y procesos manuales.",
      "Reingreso de informacion que consume tiempo y genera errores.",
      "Integraciones lentas o inexistentes entre plataformas criticas.",
      "Reportes incompletos porque cada sistema cuenta una historia distinta.",
    ],
    solutionTitle: "Que construimos en estos casos",
    solutions: [
      {
        title: "Orquestacion entre sistemas",
        description:
          "Conectamos software legacy y herramientas modernas para que los datos fluyan sin depender de copiar y pegar.",
        icon: Workflow,
      },
      {
        title: "Sincronizacion con criterio",
        description:
          "Definimos que viaja, cuando viaja y como se valida para que la integracion ayude en vez de crear ruido nuevo.",
        icon: BarChart3,
      },
      {
        title: "Despliegue sin caos",
        description:
          "Construimos en paralelo a la operacion actual para reducir riesgo y evitar cortar procesos criticos.",
        icon: Clock,
      },
      {
        title: "Seguridad y trazabilidad",
        description:
          "Logs, permisos, validaciones y una capa de control que permita operar integraciones sin fe ciega.",
        icon: Shield,
      },
    ],
    outcomesTitle: "Lo que suele mejorar",
    outcomes: [
      "Menos reentrada manual y menos errores de coordinacion.",
      "Mejor visibilidad entre equipos comerciales, operativos y financieros.",
      "Menos tiempo perdido reconciliando datos.",
      "Mas capacidad para automatizar encima de una base unificada.",
    ],
    ctaTitle: "Si tus sistemas no se hablan, ahi hay una oportunidad",
    ctaSubtitle:
      "Podemos ayudarte a definir si necesitas una integracion puntual, una capa de orquestacion o una modernizacion por etapas.",
    primaryCta: "Hablar con N3uralia",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "Enterprise integrations | N3uralia",
    metadataDescription:
      "We integrate ERP, CRM, operations, and legacy software without rewriting everything. Architecture and integration for teams in Chile and LATAM.",
    badge: "Enterprise integrations",
    title: "Connect legacy systems without breaking operations",
    subtitle:
      "Many companies across Chile and LATAM do not need to throw their stack away. They need a serious integration, synchronization, and control layer so systems can finally work together.",
    problemTitle: "The real problem is not old software",
    problemSubtitle:
      "The real problem is friction between systems, teams, and decisions. That is where N3uralia enters.",
    problems: [
      "Data spread across ERP, CRM, spreadsheets, and manual workflows.",
      "Repeated data entry that wastes time and creates errors.",
      "Slow or missing integrations between critical platforms.",
      "Incomplete reporting because each system tells a different story.",
    ],
    solutionTitle: "What we build in these cases",
    solutions: [
      {
        title: "Cross-system orchestration",
        description:
          "We connect legacy software and modern tools so data flows without relying on copy-paste work.",
        icon: Workflow,
      },
      {
        title: "Synchronization with discipline",
        description:
          "We define what moves, when it moves, and how it gets validated so integration reduces friction instead of adding more noise.",
        icon: BarChart3,
      },
      {
        title: "Low-chaos deployment",
        description:
          "We build in parallel to the current operation to reduce risk and avoid cutting critical workflows.",
        icon: Clock,
      },
      {
        title: "Security and traceability",
        description:
          "Logs, permissions, validations, and a control layer that lets teams operate integrations without blind trust.",
        icon: Shield,
      },
    ],
    outcomesTitle: "What usually improves",
    outcomes: [
      "Less manual re-entry and fewer coordination errors.",
      "Better visibility across commercial, operational, and financial teams.",
      "Less time wasted reconciling data.",
      "More room to automate on top of a unified base.",
    ],
    ctaTitle: "If your systems do not talk to each other, there is an opportunity there",
    ctaSubtitle:
      "We can help define whether you need a point integration, an orchestration layer, or a phased modernization plan.",
    primaryCta: "Talk to N3uralia",
    secondaryCta: "View solutions",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/integraciones-empresariales",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function IntegracionesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{page.badge}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-foreground">{page.title}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{page.problemTitle}</h2>
            <p className="text-muted-foreground mb-10">{page.problemSubtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {page.problems.map((problem) => (
                <div key={problem} className="border border-border rounded-lg p-6 bg-card">
                  <p className="text-sm text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow" className="border-b border-border">
          <section className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-foreground text-center">{page.solutionTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {page.solutions.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="border border-border rounded-lg p-8 bg-card hover:border-primary/40 transition-colors"
                    >
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-foreground text-center">{page.outcomesTitle}</h2>
            <div className="space-y-4">
              {page.outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-3 p-5 border border-border rounded-lg bg-card">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">{page.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8">{page.ctaSubtitle}</p>
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
