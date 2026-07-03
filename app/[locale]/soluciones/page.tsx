import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cpu,
  Package,
  ShieldCheck,
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
      "Partimos donde el volumen, la coordinación y las integraciones ya duelen. No vendemos un bot genérico: diseñamos sistemas que viven dentro de una operación real.",
    quickStats: ["Pilotos en 30 días", "Integraciones reales", "Arquitectura escalable"],
    sectorsTitle: "Dónde vemos mejor encaje comercial",
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
          "Una línea de trabajo concreta, una integración prioritaria y una métrica clara para validar impacto rápido.",
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
          "Para equipos que ya tienen software, pero necesitan agregar automatización, contexto y una mejor capa de coordinación.",
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
    fitTitle: "Elige la fricción y mira por dónde conviene partir",
    fitSubtitle:
      "Una buena implementación no empieza con la tecnología. Empieza entendiendo qué parte de la operación está perdiendo velocidad, control o contexto.",
    ctaTitle: "Si tu sector no está aquí, igual conversemos",
    ctaSubtitle:
      "La pregunta no es si tu industria es especial. La pregunta es si hoy tienes fricción, volumen y decisiones repetibles. Si la respuesta es sí, hay espacio para construir algo fuerte.",
    primaryCta: "Hablar con N3uralia",
    secondaryCta: "Ver casos de uso",
  },
  en: {
    metadataTitle: "Solutions | N3uralia",
    metadataDescription:
      "AI and software solutions for retail, mining, manufacturing, hospitality, logistics, and teams operating across Chile and LATAM.",
    badge: "Solutions for real operations",
    title: "AI and software for sectors with real operational pressure",
    subtitle:
      "We start where volume, coordination, and integrations already hurt. We do not sell a generic bot: we design systems that live inside a real operation.",
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
    fitTitle: "Pick the friction and see where to start",
    fitSubtitle:
      "Good implementation does not start with technology. It starts by understanding which part of the operation is losing speed, control, or context.",
    ctaTitle: "If your sector is not listed, we should still talk",
    ctaSubtitle:
      "The question is not whether your industry is special. The question is whether you already have friction, volume, and repeatable decisions. If yes, there is room to build something strong.",
    primaryCta: "Talk to N3uralia",
    secondaryCta: "View case studies",
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
  const readingGuide = [
    {
      title: locale === "es" ? "Empieza por el sector" : "Start with a sector",
      description:
        locale === "es"
          ? "Si ya conoces tu operación, entra por la vertical que más se le parece."
          : "If you already know your operation, start with the vertical that looks most like it.",
    },
    {
      title: locale === "es" ? "Empieza por la fricción" : "Start with the friction",
      description:
        locale === "es"
          ? "Si no estás seguro del sector, usa el selector para ubicar el problema dominante."
          : "If the sector is unclear, use the selector to identify the dominant problem.",
    },
    {
      title: locale === "es" ? "Empieza por la prueba" : "Start with proof",
      description:
        locale === "es"
          ? "Si necesitas evidencia, revisa los casos de uso que ya están en producción."
          : "If you need evidence, review the case studies already in production.",
    },
  ]

  return (
    <>
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="hero" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="container mx-auto max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe0dc] bg-white/80 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#789b96]" />
                    <span className="text-sm font-semibold text-[#526e69]">{page.badge}</span>
                  </div>
                  <h1 className="mt-6 max-w-3xl text-balance text-5xl font-light leading-[0.98] tracking-[-0.05em] text-[#173634] md:text-7xl">
                    {page.title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#65706d]">
                    {page.subtitle}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {page.quickStats.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#d8e5e2] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#789b96]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {readingGuide.map((item) => (
                      <article
                        key={item.title}
                        className="rounded-[1.4rem] border border-[#d8e5e2] bg-white/80 p-4 shadow-[0_16px_70px_-64px_#173634]"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8aa39d]">
                          {locale === "es" ? "Guía rápida" : "Quick guide"}
                        </p>
                        <h2 className="mt-3 text-sm font-semibold text-[#173634]">{item.title}</h2>
                        <p className="mt-2 text-sm leading-6 text-[#65706d]">{item.description}</p>
                      </article>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      href={href(locale, "/contact")}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244946]"
                    >
                      {page.primaryCta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={href(locale, "/case-studies")}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8e5e2] bg-white px-6 py-3 text-sm font-semibold text-[#173634] transition-colors hover:border-[#b8d1cc] hover:bg-[#f5faf8]"
                    >
                      {page.secondaryCta}
                    </Link>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#d8e5e2] bg-white p-6 shadow-[0_28px_80px_-70px_#173634]">
                  <div className="mb-5 rounded-[1.4rem] border border-[#d8e5e2] bg-[#f8fbfa] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8aa39d]">
                      {locale === "es" ? "Cómo leer esta página" : "How to read this page"}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#526e69]">
                      {locale === "es"
                        ? "Empieza por el sector, luego revisa la fricción y termina con la prueba. Así la conversación llega más rápido al punto correcto."
                        : "Start with the sector, then review the friction, and end with the proof. That gets the conversation to the right point faster."
                      }
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: locale === "es" ? "Tiempo de entrada" : "Time to start", value: "30 días" },
                      { label: locale === "es" ? "Enfoque" : "Focus", value: locale === "es" ? "Operación real" : "Real operations" },
                      { label: locale === "es" ? "Integración" : "Integration", value: locale === "es" ? "Sistemas existentes" : "Existing systems" },
                      { label: locale === "es" ? "Entrega" : "Delivery", value: locale === "es" ? "Iterativa" : "Iterative" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-[#e5eeeb] bg-[#f8fbfa] p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8aa39d]">{item.label}</p>
                        <p className="mt-3 text-xl font-semibold text-[#173634]">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-[#d8e5e2] bg-[#edf4f1] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                      {locale === "es" ? "Lectura rápida" : "Fast read"}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#526e69]">
                      {locale === "es"
                        ? "Si hoy el equipo depende de planillas, correos o herramientas aisladas, la señal es clara: hay espacio para una solución que conecte y ordene."
                        : "If the team still depends on spreadsheets, email, or isolated tools, the signal is clear: there is room for a solution that connects and organizes."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="px-4 py-24 sm:px-8 lg:px-10">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                {locale === "es" ? "Sectores" : "Sectors"}
              </p>
              <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">
                {page.sectorsTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#65706d]">{page.sectorsSubtitle}</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {page.sectors.map((sector) => {
                const Icon = sector.icon

                return (
                  <article
                    key={sector.title}
                    className="group rounded-[1.8rem] border border-[#d8e5e2] bg-white p-6 shadow-[0_24px_80px_-74px_#173634] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96] transition-colors group-hover:bg-[#173634] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-right text-xs font-semibold uppercase tracking-[0.18em] text-[#8aa39d]">
                        {locale === "es" ? "Aplicable" : "Applicable"}
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-[#173634]">{sector.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#65706d]">{sector.description}</p>
                    <div className="mt-6 rounded-2xl border border-[#e5eeeb] bg-[#f8fbfa] p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8aa39d]">
                        {locale === "es" ? "Resultado esperado" : "Expected outcome"}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#243331]">{sector.outcome}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8e5e2] bg-[#edf4f1] px-4 py-24 sm:px-8 lg:px-10">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                {locale === "es" ? "Entrada" : "Entry points"}
              </p>
              <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">
                {page.deliveryTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#65706d]">{page.deliverySubtitle}</p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {page.deliveryModels.map((model) => (
                <article key={model.title} className="rounded-[1.8rem] border border-[#d8e5e2] bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789b96]">
                    {locale === "es" ? "Modelo" : "Model"}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#173634]">{model.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#65706d]">{model.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {model.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-[#243331]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#789b96]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-8 lg:px-10">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                  {locale === "es" ? "Selector rápido" : "Quick selector"}
                </p>
                <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">
                  {page.fitTitle}
                </h2>
                <p className="mt-5 text-base leading-8 text-[#65706d]">{page.fitSubtitle}</p>
                <div className="mt-8 rounded-[1.6rem] border border-[#d8e5e2] bg-[#f8fbfa] p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#789b96]" />
                    <p className="text-sm leading-7 text-[#526e69]">
                      {locale === "es"
                        ? "Usamos esta lectura para decidir si empezar por visibilidad, automatización, respuesta o control."
                        : "We use this reading to decide whether to start with visibility, automation, response, or control."
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#d8e5e2] bg-white p-4 shadow-[0_24px_80px_-74px_#173634]">
                <SolutionsFitExplorer />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#d8e5e2] bg-white px-4 py-24 sm:px-8 lg:px-10">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                {locale === "es" ? "Prueba" : "Proof"}
              </p>
              <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">
                {page.proofTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#65706d]">{page.proofSubtitle}</p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {page.proofs.map((proof) => (
                <Link
                  key={proof.title}
                  href={href(locale, proof.href)}
                  className="group rounded-[1.8rem] border border-[#d8e5e2] bg-[#fbfbfa] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8d1cc] hover:shadow-[0_34px_110px_-84px_#173634]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789b96]">
                    {locale === "es" ? "Caso" : "Case"}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#173634]">{proof.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#65706d]">{proof.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#173634]">
                    {locale === "es" ? "Ver caso" : "View case"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#d8e5e2] bg-[#173634] px-4 py-24 text-white sm:px-8 lg:px-10">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8fb2aa]">
                  {locale === "es" ? "Contacto" : "Contact"}
                </p>
                <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
                  {page.ctaTitle}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">{page.ctaSubtitle}</p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6">
                <p className="text-sm leading-7 text-white/75">
                  {locale === "es"
                    ? "Si quieres alinear la landing con la marca y conectar el resto de las rutas, este es el punto correcto para cerrar el sistema."
                    : "If you want to align the landing with the brand and connect the rest of the routes, this is the right point to close the system."
                  }
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={href(locale, "/contact")}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#173634] transition-colors hover:bg-[#eef5f2]"
                  >
                    {page.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={href(locale, "/case-studies")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {page.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
