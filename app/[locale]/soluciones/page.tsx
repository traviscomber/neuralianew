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
    <main className="retro-page min-h-screen pt-20">
      <section className="border-b border-[rgba(118,214,214,.16)]">
        <div className="retro-shell grid gap-14 py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <small>{page.badge}</small>
            <h1 className="mt-6 max-w-5xl text-[clamp(44px,5.6vw,78px)]">{page.title}</h1>
            <p className="mt-7 max-w-3xl text-[16px] text-[var(--n3-text-muted)]">{page.subtitle}</p>
          </div>

          <div className="relative border border-[rgba(168,217,216,.22)] bg-[var(--n3-deep)] p-7">
            <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
            <div className="mb-7 flex items-center justify-between">
              <span className="telemetry">N3 / EXPERTISE SIGNALS</span>
              <span className="h-2 w-2 rounded-full bg-[var(--n3-teal)] shadow-[0_0_18px_var(--n3-teal-dim)]" />
            </div>
            <div className="border-t border-[rgba(118,214,214,.16)]">
              {page.quickStats.map((stat, index) => (
                <div key={stat} className="grid grid-cols-[52px_1fr] items-center gap-4 border-b border-[rgba(118,214,214,.16)] py-5">
                  <span className="telemetry">0{index + 1}</span>
                  <span className="font-[var(--font-rajdhani)] text-sm tracking-[.14em] text-[var(--n3-teal-soft)] uppercase">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SolutionsFitExplorer locale={locale} />

      <section className="border-b border-[rgba(118,214,214,.16)] py-24">
        <div className="retro-shell">
          <div className="mb-14 grid gap-5 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <small>{locale === "es" ? "01 / VERTICALES" : "01 / VERTICALS"}</small>
            <div>
              <h2 className="text-[clamp(36px,4.4vw,60px)]">{page.sectorsTitle}</h2>
              <p className="mt-5 max-w-3xl text-[14px] text-[var(--n3-text-muted)]">{page.sectorsSubtitle}</p>
            </div>
          </div>

          <div className="grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2 lg:grid-cols-3">
            {page.sectors.map((sector, index) => {
              const Icon = sector.icon
              return (
                <article key={sector.title} className="group min-h-[330px] bg-[var(--n3-dark-surface)] p-7 transition-colors hover:bg-[#0e1d1e]">
                  <div className="mb-10 flex items-center justify-between">
                    <Icon className="h-7 w-7 text-[var(--n3-teal-soft)]" />
                    <span className="telemetry">0{index + 1}</span>
                  </div>
                  <h3 className="text-[23px]">{sector.title}</h3>
                  <p className="mt-5 text-[13px] text-[var(--n3-text-muted)]">{sector.description}</p>
                  <div className="mt-7 flex items-start gap-3 border-t border-[rgba(118,214,214,.16)] pt-5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--n3-teal-soft)]" />
                    <p className="text-[12px] text-[var(--n3-teal-soft)]">{sector.outcome}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-24">
        <div className="retro-shell">
          <div className="mb-14 grid gap-5 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <small>{locale === "es" ? "02 / ENTRADA" : "02 / ENTRY"}</small>
            <div>
              <h2 className="text-[clamp(36px,4.4vw,60px)]">{page.deliveryTitle}</h2>
              <p className="mt-5 max-w-3xl text-[14px] text-[var(--n3-text-muted)]">{page.deliverySubtitle}</p>
            </div>
          </div>

          <div className="grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-3">
            {page.deliveryModels.map((model, index) => (
              <article key={model.title} className="relative min-h-[350px] bg-[var(--n3-black)] p-7">
                <span className="telemetry">0{index + 1}</span>
                <h3 className="mt-9 text-[24px]">{model.title}</h3>
                <p className="mt-5 text-[13px] text-[var(--n3-text-muted)]">{model.summary}</p>
                <div className="mt-7 space-y-3 border-t border-[rgba(118,214,214,.16)] pt-5">
                  {model.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-[var(--n3-teal)]" />
                      <span className="text-[12px] text-[var(--n3-text-muted)]">{bullet}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-24">
        <div className="retro-shell">
          <div className="mb-14 grid gap-5 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <small>{locale === "es" ? "03 / EVIDENCIA" : "03 / EVIDENCE"}</small>
            <div>
              <h2 className="text-[clamp(36px,4.4vw,60px)]">{page.proofTitle}</h2>
              <p className="mt-5 max-w-3xl text-[14px] text-[var(--n3-text-muted)]">{page.proofSubtitle}</p>
            </div>
          </div>

          <div className="border-t border-[rgba(118,214,214,.16)]">
            {page.proofs.map((proof, index) => (
              <Link
                key={proof.title}
                href={href(locale, proof.href)}
                className="group grid gap-5 border-b border-[rgba(118,214,214,.16)] py-7 transition-colors hover:bg-[rgba(168,217,216,.03)] md:grid-cols-[70px_1fr_1.2fr_30px] md:items-center"
              >
                <span className="telemetry">0{index + 1}</span>
                <h3 className="text-[22px]">{proof.title}</h3>
                <p className="text-[13px] text-[var(--n3-text-muted)]">{proof.description}</p>
                <ArrowRight className="h-4 w-4 text-[var(--n3-teal-soft)] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="retro-shell relative border-y border-[rgba(118,214,214,.2)] py-16">
          <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
          <small>{locale === "es" ? "04 / SIGUIENTE MOVIMIENTO" : "04 / NEXT MOVE"}</small>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-[clamp(36px,4.5vw,62px)]">{page.ctaTitle}</h2>
              <p className="mt-6 max-w-2xl text-[14px] text-[var(--n3-text-muted)]">{page.ctaSubtitle}</p>
            </div>
            <div className="button-row lg:justify-end">
              <Link href={href(locale, "/contact")} className="retro-button retro-button-primary gap-2">
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href(locale, "/#flow")} className="retro-button">
                {page.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
