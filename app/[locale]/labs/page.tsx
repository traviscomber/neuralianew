import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FlaskConical, Lightbulb, Shield, Wrench } from "lucide-react"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

function href(locale: Locale, path: string) {
  return `/${locale}${path}`
}

const content = {
  es: {
    metadataTitle: "Labs | N3uralia",
    metadataDescription:
      "Labs de N3uralia: exploración aplicada de IA, flujos, interfaces y componentes antes de llevarlos a producción.",
    eyebrow: "N3URALIA LABS",
    title: "Probamos ideas antes de pedirle a una operación que confíe en ellas",
    subtitle:
      "No todo experimento merece llegar a producción. En Labs validamos componentes, patrones e interfaces hasta que tienen suficiente sentido técnico y operacional.",
    signal: "EXPERIMENTAR → VALIDAR → OPERAR",
    principlesLabel: "CRITERIO DE LABORATORIO",
    blocks: [
      {
        title: "Exploración aplicada",
        description: "Probamos nuevos enfoques de agentes, memoria, interfaces y automatización con un filtro claro de utilidad operacional.",
        icon: Lightbulb,
      },
      {
        title: "Prototipos revisables",
        description: "Construimos demostraciones que permiten aprender rápido, medir límites y revisar decisiones antes de escalar.",
        icon: FlaskConical,
      },
      {
        title: "Criterio de producción",
        description: "Solo avanzamos hacia producto cuando una idea demuestra valor, control, trazabilidad y sostenibilidad técnica.",
        icon: Shield,
      },
    ],
    gateLabel: "GATE DE PRODUCCIÓN",
    gateTitle: "Un experimento no es un producto.",
    gateBody: "El paso a producción exige una fuente de verdad definida, límites operacionales, observabilidad, ownership y una forma clara de medir si el sistema funciona.",
    ctaLabel: "SIGUIENTE MOVIMIENTO",
    ctaTitle: "Explora cómo convertimos investigación aplicada en sistemas revisables.",
    primaryCta: "Ver estudios",
    secondaryCta: "Hablar con el equipo",
  },
  en: {
    metadataTitle: "Labs | N3uralia",
    metadataDescription:
      "N3uralia Labs: applied exploration of AI, workflows, interfaces, and components before they move into production.",
    eyebrow: "N3URALIA LABS",
    title: "We test ideas before asking an operation to trust them",
    subtitle:
      "Not every experiment deserves production. In Labs we validate components, patterns, and interfaces until they make enough technical and operational sense.",
    signal: "EXPERIMENT → VALIDATE → OPERATE",
    principlesLabel: "LAB CRITERIA",
    blocks: [
      {
        title: "Applied exploration",
        description: "We test new approaches to agents, memory, interfaces, and automation through a clear operational-utility filter.",
        icon: Lightbulb,
      },
      {
        title: "Reviewable prototypes",
        description: "We build demonstrations that let us learn fast, measure limits, and review decisions before scaling.",
        icon: FlaskConical,
      },
      {
        title: "Production judgment",
        description: "We only move toward product when an idea demonstrates value, control, traceability, and technical sustainability.",
        icon: Shield,
      },
    ],
    gateLabel: "PRODUCTION GATE",
    gateTitle: "An experiment is not a product.",
    gateBody: "Moving into production requires a defined source of truth, operational boundaries, observability, ownership, and a clear way to measure whether the system works.",
    ctaLabel: "NEXT MOVE",
    ctaTitle: "Explore how we turn applied research into reviewable systems.",
    primaryCta: "View studies",
    secondaryCta: "Talk to the team",
  },
} as const

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/labs",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default async function LabsPage(props: PageProps) {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <main className="retro-page min-h-screen pt-20">
      <section className="retro-dark border-b border-[rgba(118,214,214,.16)]">
        <div className="retro-shell grid gap-12 py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <small>{page.eyebrow}</small>
            <h1 className="mt-6 max-w-5xl text-[clamp(44px,5.5vw,78px)]">{page.title}</h1>
            <p className="mt-7 max-w-2xl text-[16px] text-[var(--n3-text-muted)]">{page.subtitle}</p>
          </div>
          <div className="relative border border-[rgba(168,217,216,.22)] bg-[var(--n3-deep)] p-7 lg:mb-1">
            <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
            <div className="flex items-center justify-between gap-6">
              <Wrench className="h-7 w-7 shrink-0 text-[var(--n3-teal-soft)]" aria-hidden />
              <span className="telemetry text-right">{page.signal}</span>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-px bg-[rgba(118,214,214,.16)]" aria-hidden>
              {["01", "02", "03"].map((step) => (
                <div key={step} className="bg-[var(--n3-black)] px-4 py-7 text-center font-[var(--font-rajdhani)] text-sm tracking-[.18em] text-[var(--n3-teal-soft)]">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20" aria-labelledby="labs-principles-title">
        <div className="retro-shell">
          <div className="mb-12 grid gap-5 lg:grid-cols-[.58fr_1.42fr] lg:items-end">
            <small>01 / {page.principlesLabel}</small>
            <h2 id="labs-principles-title" className="text-[clamp(34px,4vw,56px)]">
              {locale === "es" ? "Qué debe demostrar una idea" : "What an idea has to prove"}
            </h2>
          </div>
          <div className="grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-3">
            {page.blocks.map((block, index) => {
              const Icon = block.icon
              return (
                <article key={block.title} className="group min-h-[300px] bg-[var(--n3-dark-surface)] p-7 transition-colors hover:bg-[#0e1d1e]">
                  <div className="mb-12 flex items-center justify-between">
                    <Icon className="h-7 w-7 text-[var(--n3-teal-soft)]" aria-hidden />
                    <span className="telemetry">0{index + 1}</span>
                  </div>
                  <h3 className="text-[23px] text-[var(--n3-text-light)]">{block.title}</h3>
                  <p className="mt-5 text-[13px] text-[var(--n3-text-muted)]">{block.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20" aria-labelledby="labs-gate-title">
        <div className="retro-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <small>02 / {page.gateLabel}</small>
          </div>
          <div className="border-l border-[rgba(118,214,214,.16)] pl-0 lg:pl-10">
            <h2 id="labs-gate-title" className="max-w-3xl text-[clamp(34px,4vw,56px)]">{page.gateTitle}</h2>
            <p className="mt-6 max-w-2xl text-[15px] text-[var(--n3-text-muted)]">{page.gateBody}</p>
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="labs-next-title">
        <div className="retro-shell relative border-y border-[rgba(118,214,214,.2)] py-16">
          <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
          <small>03 / {page.ctaLabel}</small>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <h2 id="labs-next-title" className="max-w-4xl text-[clamp(36px,4.5vw,62px)]">{page.ctaTitle}</h2>
            <div className="button-row lg:justify-end">
              <Link href={href(locale, "/studies")} className="retro-button">
                {page.primaryCta}
              </Link>
              <Link href={href(locale, "/contact")} className="retro-button retro-button-primary gap-2">
                {page.secondaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
