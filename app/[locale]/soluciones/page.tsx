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
import { SolutionsFitExplorer } from "@/components/solutions-fit-explorer"
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
      "Soluciones de IA y software para retail, minería, manufactura, turismo, logística y equipos que operan en Chile y LATAM.",
    badge: "Soluciones para operaciones reales",
    title: "IA y software aplicados a sectores con presión operativa real",
    subtitle:
      "Partimos donde el volumen, la coordinación y las integraciones ya duelen: retail, minería, manufactura, turismo y logística. No vendemos un bot genérico. Diseñamos sistemas que viven dentro de una operación real.",
    quickStats: ["Pilotos en 30 días", "Integraciones reales", "Arquitectura escalable"],
    sectorsTitle: "Dónde vemos mejor fit comercial",
    sectorsSubtitle:
      "Cada vertical combina software, automatización e IA con una lógica distinta. Estas son las que hoy hacen más sentido para Chile y LATAM.",
    sectors: [
      {
        title: "Retail y e-commerce",
        description:
          "Catálogo, operaciones comerciales, soporte y coordinación entre canales con más velocidad y menos trabajo manual.",
        outcome: "Más conversión, menos fricción operativa.",
        icon: Package,
      },
      {
        title: "Minería y recursos",
        description:
          "Alertas, trazabilidad, monitoreo y coordinación de equipos donde la continuidad operacional importa más que la demo.",
        outcome: "Más visibilidad, menos respuesta tardía.",
        icon: TrendingUp,
      },
      {
        title: "Manufactura",
        description:
          "Flujos de planta, calidad, documentación y handoffs entre áreas con procesos más claros y auditables.",
        outcome: "Menos desorden, más continuidad.",
        icon: Cpu,
      },
      {
        title: "Turismo y hospitality",
        description:
          "Reservas, operaciones, respuesta a clientes y coordinación interna para equipos que viven de la experiencia y el tiempo.",
        outcome: "Más velocidad y mejor servicio.",
        icon: Users,
      },
      {
        title: "Logística y supply chain",
        description:
          "Seguimiento, excepciones, handoffs y decisiones operativas para equipos que necesitan ver todo sin perder tiempo.",
        outcome: "Más control, menos puntos ciegos.",
        icon: Workflow,
      },
      {
        title: "Servicios regulados",
        description:
          "Procesos con documentos, validaciones y trazabilidad donde la confianza y el control son parte del producto.",
        outcome: "Más gobernanza, menos riesgo operacional.",
        icon: Building2,
      },
    ],
    deliveryTitle: "Cómo solemos entrar",
    deliverySubtitle:
      "No todos necesitan lo mismo. Hay equipos que parten por un piloto y otros por un sistema core. Estas son las tres entradas más comunes.",
    deliveryModels: [
      {
        title: "Piloto operativo",
        summary:
          "Una línea de trabajo concreta, una integración prioritaria y una métrica clara para validar si esto mueve negocio.",
        bullets: ["Alcance acotado", "Entrega rápida", "Riesgo controlado"],
      },
      {
        title: "Sistema de producción",
        summary:
          "Cuando ya sabes que el problema importa y necesitas arquitectura, integraciones y una capa de operación sostenible.",
        bullets: ["Arquitectura completa", "Guardrails y monitoreo", "Handoff operacional"],
      },
      {
        title: "Modernización con IA",
        summary:
          "Para equipos que ya tienen software, pero necesitan agregar automatización, contexto y una capa mejor de coordinación.",
        bullets: ["Sin reescribir todo", "Integración progresiva", "Impacto visible por etapas"],
      },
    ],
    proofTitle: "Prueba en producción",
    proofSubtitle:
      "No hablamos solo de industria. Ya hemos construido sistemas que viven fuera del laboratorio.",
    proofs: [
      {
        title: "Ecosuelolab",
        description:
          "Monitoreo agrícola y alertas operativas automatizadas con integraciones reales.",
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        description:
          "Producto full-stack con experiencias guiadas por IA y una operación pensada para escala.",
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        description:
          "Software operativo para equipos hospitality que necesitan coordinar mejor y responder más rápido.",
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    ctaTitle: "Si tu sector no está aquí, igual conversemos",
    ctaSubtitle:
      "La pregunta no es si tu industria es especial. La pregunta es si hoy tienes fricción, volumen y decisiones repetibles. Si la respuesta es sí, hay espacio para construir algo fuerte.",
    primaryCta: "Hablar con N3uralia",
    secondaryCta: "Ver cómo funciona",
  },
  en: {
    metadataTitle: "Solutions | N3uralia",
    metadataDescription:
      "AI and software solutions for retail, mining, manufacturing, hospitality, logistics, and teams operating across Chile and LATAM.",
    badge: "Solutions for real operations",
    title: "AI and software for sectors with real operational pressure",
    subtitle:
      "We start where volume, coordination, and integrations already create drag: retail, mining, manufacturing, hospitality, and logistics. We do not sell a generic bot. We design systems that live inside a real operation.",
    quickStats: ["Pilots in 30 days", "Real integrations", "Scalable architecture"],
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
        bullets: ["Focused scope", "Fast delivery", "Controlled risk"],
      },
      {
        title: "Production system",
        summary:
          "When you already know the problem matters and need architecture, integrations, and an operating layer that lasts.",
        bullets: ["Full architecture", "Guardrails and monitoring", "Operational handoff"],
      },
      {
        title: "AI-enabled modernization",
        summary:
          "For teams that already have software but need automation, context, and a stronger coordination layer on top.",
        bullets: ["No full rewrite", "Progressive integration", "Visible wins by stage"],
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
    secondaryCta: "See how it works",
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
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="solutions" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="container mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cfe0dc] bg-white/75 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#789b96]" />
                  <span className="text-sm font-semibold text-[#526e69]">{page.badge}</span>
                </div>
                <h1 className="max-w-5xl text-balance text-5xl font-light leading-[0.98] tracking-[-0.04em] text-[#173634] md:text-7xl">
                  {page.title}
                </h1>
                <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-[#65706d]">
                  {page.subtitle}
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#d8e5e2] bg-white/80 p-5 shadow-[0_34px_110px_-82px_#173634] backdrop-blur">
                <div className="grid gap-3">
                  {page.quickStats.map((stat, index) => (
                    <div key={stat} className="flex items-center gap-4 rounded-[1.2rem] bg-[#eef5f2] p-4">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-semibold text-[#789b96]">
                        {index + 1}
                      </span>
                      <span className="text-sm font-semibold text-[#526e69]">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        <SolutionsFitExplorer locale={locale} />

        <section className="border-b border-[#d8e5e2] px-4 py-24 sm:px-8 lg:px-10">
          <div className="container mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">Verticales</p>
              <h2 className="text-balance text-4xl font-light leading-tight text-[#243331] md:text-5xl">{page.sectorsTitle}</h2>
              <p className="mt-5 text-base leading-8 text-[#65706d]">{page.sectorsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {page.sectors.map((sector) => {
                const Icon = sector.icon

                return (
                  <div
                    key={sector.title}
                    className="group rounded-[1.6rem] border border-[#d8e5e2] bg-white p-7 shadow-[0_24px_80px_-70px_#173634] transition-all duration-300 hover:-translate-y-1 hover:border-[#b8d1cc] hover:shadow-[0_34px_110px_-80px_#173634]"
                  >
                    <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96] transition-colors group-hover:bg-[#173634] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#243331]">{sector.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#65706d]">{sector.description}</p>
                    <div className="mt-6 flex items-start gap-2 rounded-[1rem] bg-[#f7faf8] p-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#789b96]" />
                      <p className="text-sm font-medium text-[#526e69]">{sector.outcome}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-24 sm:px-8 lg:px-10">
            <div className="container mx-auto max-w-6xl">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">Entrada</p>
                <h2 className="text-balance text-4xl font-light leading-tight text-[#243331] md:text-5xl">{page.deliveryTitle}</h2>
                <p className="mt-5 text-base leading-8 text-[#65706d]">{page.deliverySubtitle}</p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {page.deliveryModels.map((model, index) => (
                  <div key={model.title} className="rounded-[1.6rem] border border-[#d8e5e2] bg-white/80 p-7 shadow-[0_24px_80px_-70px_#173634] backdrop-blur">
                    <span className="mb-6 grid h-10 w-10 place-items-center rounded-full bg-[#173634] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-2xl font-light leading-tight text-[#173634]">{model.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#65706d]">{model.summary}</p>
                    <div className="mt-6 space-y-3">
                      {model.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#789b96]" />
                          <span className="text-sm text-[#65706d]">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-[#d8e5e2] px-4 py-24 sm:px-8 lg:px-10">
          <div className="container mx-auto max-w-6xl">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">Evidencia</p>
              <h2 className="text-balance text-4xl font-light leading-tight text-[#243331] md:text-5xl">{page.proofTitle}</h2>
              <p className="mt-5 text-base leading-8 text-[#65706d]">{page.proofSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {page.proofs.map((proof) => (
                <Link
                  key={proof.title}
                  href={href(locale, proof.href)}
                  className="group rounded-[1.6rem] border border-[#d8e5e2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8d1cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#789b96]"
                >
                  <h3 className="text-xl font-semibold text-[#243331] transition-colors group-hover:text-[#173634]">{proof.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#65706d]">{proof.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#789b96]">
                    {locale === "es" ? "Ver caso" : "View case"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="hero">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="container mx-auto max-w-4xl rounded-[2rem] border border-[#d8e5e2] bg-white/80 p-8 text-center shadow-[0_34px_110px_-82px_#173634] backdrop-blur md:p-12">
              <h2 className="text-balance text-4xl font-light leading-tight text-[#173634] md:text-5xl">{page.ctaTitle}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#65706d]">{page.ctaSubtitle}</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href={href(locale, "/contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]"
                >
                  {page.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={href(locale, "/#flow")}
                  className="inline-flex items-center justify-center rounded-full border border-[#b9d0cb] bg-white px-6 py-3 text-sm font-semibold text-[#526e69] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789b96] hover:bg-[#f7faf8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]"
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
