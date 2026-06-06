import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cpu,
  Package,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react"
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
    metadataTitle: "Soluciones | N3uralia",
    metadataDescription:
      "Soluciones de IA y software para retail, mineria, manufactura, turismo, logistica y equipos que operan en Chile y LATAM.",
    badge: "Soluciones para operaciones reales",
    title: "IA y software aplicados a sectores donde Chile ya tiene presion operativa",
    subtitle:
      "Partimos donde el volumen, la coordinacion y las integraciones ya duelen: retail, mineria, manufactura, turismo y logistica. No vendemos un bot generico. Disenamos sistemas que viven dentro de una operacion real.",
    sectorsTitle: "Donde vemos mejor fit comercial",
    sectorsSubtitle:
      "Cada vertical combina software, automatizacion e IA con una logica distinta. Estas son las que hoy hacen mas sentido para Chile y LATAM.",
    sectors: [
      {
        title: "Retail y e-commerce",
        description:
          "Catalogo, operaciones comerciales, soporte y coordinacion entre canales con mas velocidad y menos trabajo manual.",
        outcome: "Mas conversion, menos friccion operativa.",
        icon: Package,
      },
      {
        title: "Mineria y recursos",
        description:
          "Alertas, trazabilidad, monitoreo y coordinacion de equipos donde la continuidad operacional importa mas que la demo.",
        outcome: "Mas visibilidad, menos respuesta tardia.",
        icon: TrendingUp,
      },
      {
        title: "Manufactura",
        description:
          "Flujos de planta, calidad, documentacion y handoffs entre areas con procesos mas claros y auditables.",
        outcome: "Menos desorden, mas continuidad.",
        icon: Cpu,
      },
      {
        title: "Turismo y hospitality",
        description:
          "Reservas, operaciones, respuesta a clientes y coordinacion interna para equipos que viven de la experiencia y el tiempo.",
        outcome: "Mas velocidad y mejor servicio.",
        icon: Users,
      },
      {
        title: "Logistica y supply chain",
        description:
          "Seguimiento, excepciones, handoffs y decisiones operativas para equipos que necesitan ver todo sin perder tiempo.",
        outcome: "Mas control, menos puntos ciegos.",
        icon: Workflow,
      },
      {
        title: "Servicios regulados",
        description:
          "Procesos con documentos, validaciones y trazabilidad donde la confianza y el control son parte del producto.",
        outcome: "Mas gobernanza, menos riesgo operacional.",
        icon: Building2,
      },
    ],
    deliveryTitle: "Como solemos entrar",
    deliverySubtitle:
      "No todos necesitan lo mismo. Hay equipos que parten por un piloto y otros por un sistema core. Estas son las tres entradas mas comunes.",
    deliveryModels: [
      {
        title: "Piloto operativo",
        summary:
          "Una linea de trabajo concreta, una integracion prioritaria y una metrica clara para validar si esto mueve negocio.",
        bullets: [
          "Alcance acotado",
          "Entrega rapida",
          "Riesgo controlado",
        ],
      },
      {
        title: "Sistema de produccion",
        summary:
          "Cuando ya sabes que el problema importa y necesitas arquitectura, integraciones y una capa de operacion sostenible.",
        bullets: [
          "Arquitectura completa",
          "Guardrails y monitoreo",
          "Handoff operacional",
        ],
      },
      {
        title: "Modernizacion con IA",
        summary:
          "Para equipos que ya tienen software, pero necesitan agregar automatizacion, contexto y una capa mejor de coordinacion.",
        bullets: [
          "Sin reescribir todo",
          "Integracion progresiva",
          "Impacto visible por etapas",
        ],
      },
    ],
    proofTitle: "Prueba en produccion",
    proofSubtitle:
      "No hablamos solo de industria. Ya hemos construido sistemas que viven fuera del laboratorio.",
    proofs: [
      {
        title: "Ecosuelolab",
        description:
          "Monitoreo agricola y alertas operativas automatizadas con integraciones reales.",
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        description:
          "Producto full-stack con experiencias guiadas por IA y una operacion pensada para escala.",
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        description:
          "Software operativo para equipos hospitality que necesitan coordinar mejor y responder mas rapido.",
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    ctaTitle: "Si tu sector no esta aqui, igual conversemos",
    ctaSubtitle:
      "La pregunta no es si tu industria es especial. La pregunta es si hoy tienes friccion, volumen y decisiones repetibles. Si la respuesta es si, hay espacio para construir algo fuerte.",
    primaryCta: "Hablar con N3uralia",
    secondaryCta: "Ver capacidades",
  },
  en: {
    metadataTitle: "Solutions | N3uralia",
    metadataDescription:
      "AI and software solutions for retail, mining, manufacturing, hospitality, logistics, and teams operating across Chile and LATAM.",
    badge: "Solutions for real operations",
    title: "AI and software for sectors where Chile already has operational pressure",
    subtitle:
      "We start where volume, coordination, and integrations already create drag: retail, mining, manufacturing, hospitality, and logistics. We do not sell a generic bot. We design systems that live inside a real operation.",
    sectorsTitle: "Where we see the strongest fit",
    sectorsSubtitle:
      "Each vertical combines software, automation, and AI differently. These are the ones that currently make the most sense for Chile and LATAM.",
    sectors: [
      {
        title: "Retail and e-commerce",
        description:
          "Catalog operations, commercial workflows, support, and channel coordination with less manual work and faster execution.",
        outcome: "More conversion, less operational drag.",
        icon: Package,
      },
      {
        title: "Mining and resources",
        description:
          "Alerts, traceability, monitoring, and team coordination where operational continuity matters more than a flashy demo.",
        outcome: "More visibility, less delayed response.",
        icon: TrendingUp,
      },
      {
        title: "Manufacturing",
        description:
          "Plant workflows, quality, documentation, and cross-team handoffs with clearer and more auditable processes.",
        outcome: "Less chaos, more continuity.",
        icon: Cpu,
      },
      {
        title: "Hospitality and tourism",
        description:
          "Reservations, operations, guest response, and internal coordination for teams that live on service speed and experience.",
        outcome: "Faster response and stronger service.",
        icon: Users,
      },
      {
        title: "Logistics and supply chain",
        description:
          "Tracking, exceptions, handoffs, and operational decisions for teams that need visibility without wasting time.",
        outcome: "More control, fewer blind spots.",
        icon: Workflow,
      },
      {
        title: "Regulated services",
        description:
          "Document-heavy processes, validations, and traceability where trust and control are part of the product.",
        outcome: "More governance, less operational risk.",
        icon: Building2,
      },
    ],
    deliveryTitle: "How we usually enter",
    deliverySubtitle:
      "Not every team needs the same thing. Some start with a pilot, others need a core system. These are the three most common entry points.",
    deliveryModels: [
      {
        title: "Operational pilot",
        summary:
          "One concrete workflow, one priority integration, and one clear metric to validate business impact quickly.",
        bullets: [
          "Focused scope",
          "Fast delivery",
          "Controlled risk",
        ],
      },
      {
        title: "Production system",
        summary:
          "When you already know the problem matters and need architecture, integrations, and an operating layer that lasts.",
        bullets: [
          "Full architecture",
          "Guardrails and monitoring",
          "Operational handoff",
        ],
      },
      {
        title: "AI-enabled modernization",
        summary:
          "For teams that already have software but need automation, context, and a stronger coordination layer on top.",
        bullets: [
          "No full rewrite",
          "Progressive integration",
          "Visible wins by stage",
        ],
      },
    ],
    proofTitle: "Production proof",
    proofSubtitle:
      "We do not only talk about industries. We have already built systems that live outside the lab.",
    proofs: [
      {
        title: "Ecosuelolab",
        description:
          "Agricultural monitoring and automated operational alerts with real integrations.",
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        description:
          "A full-stack product with AI-guided experiences and an operation designed for scale.",
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        description:
          "Operational software for hospitality teams that need better coordination and faster response times.",
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    ctaTitle: "If your sector is not listed, we should still talk",
    ctaSubtitle:
      "The question is not whether your industry is special. The question is whether you already have friction, volume, and repeatable decisions. If yes, there is room to build something strong.",
    primaryCta: "Talk to N3uralia",
    secondaryCta: "View capabilities",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    title: page.metadataTitle,
    description: page.metadataDescription,
    path: "/soluciones",
  })
}

export default function SolucionesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="solutions" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">{page.badge}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-foreground max-w-4xl mx-auto">
                {page.title}
              </h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                {page.subtitle}
              </p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">{page.sectorsTitle}</h2>
              <p className="text-muted-foreground">{page.sectorsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.sectors.map((sector) => {
                const Icon = sector.icon

                return (
                  <div
                    key={sector.title}
                    className="rounded-lg border border-border bg-card p-8 hover:border-primary/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{sector.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {sector.description}
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-primary">{sector.outcome}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow" className="border-b border-border">
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">{page.deliveryTitle}</h2>
                <p className="text-muted-foreground">{page.deliverySubtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {page.deliveryModels.map((model) => (
                  <div
                    key={model.title}
                    className="rounded-lg border border-border bg-background p-8"
                  >
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{model.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {model.summary}
                    </p>
                    <div className="space-y-3">
                      {model.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">{page.proofTitle}</h2>
              <p className="text-muted-foreground">{page.proofSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.proofs.map((proof) => (
                <Link
                  key={proof.title}
                  href={href(locale, proof.href)}
                  className="rounded-lg border border-border bg-card p-8 hover:border-primary/40 transition-colors group"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {proof.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {proof.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                    {locale === "es" ? "Ver caso" : "View case"}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
                  href={href(locale, "/capabilities")}
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
