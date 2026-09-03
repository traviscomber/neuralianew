import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, Target, Users, Zap } from "lucide-react"
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
    metadataTitle: "Acerca de | N3uralia",
    metadataDescription:
      "N3uralia construye sistemas de IA y software desde Chile para equipos que necesitan arquitectura, integracion y operacion real.",
    badge: "Acerca de N3uralia",
    title: "Construimos IA y software como infraestructura, no como truco",
    subtitle:
      "N3uralia nace desde Santiago con una obsesion simple: llevar inteligencia aplicada a operaciones reales en Chile y LATAM. Menos humo, menos piloto infinito, menos software aislado. Mas arquitectura, mas integracion y mas sistemas que realmente funcionan.",
    storyTitle: "Que clase de empresa queremos ser",
    storyParagraphs: [
      "No nos interesa competir por la demo mas llamativa. Nos interesa construir sistemas que sobrevivan al uso diario, a las integraciones feas y a la realidad de los equipos operativos.",
      "Creemos que la ventaja en Chile y LATAM no va a venir solo de usar modelos. Va a venir de saber combinar software, datos, automatizacion y criterio operacional con mucha mas disciplina que el promedio.",
      "Por eso N3uralia no se vende como magia. Se vende como una forma seria de construir capacidad tecnica y mover negocio.",
    ],
    pillarsTitle: "En que creemos",
    pillars: [
      {
        title: "Arquitectura antes que hype",
        description:
          "La IA sirve cuando se integra bien, se monitorea bien y tiene un lugar claro dentro de la operacion.",
        icon: Zap,
      },
      {
        title: "Contexto local importa",
        description:
          "Construimos desde Chile para equipos que operan en Chile y LATAM, con sus tiempos, restricciones y oportunidades reales.",
        icon: Users,
      },
      {
        title: "Control y trazabilidad",
        description:
          "Si un sistema toma decisiones, debe poder explicarse, medirse y operarse sin fe ciega.",
        icon: Shield,
      },
      {
        title: "Impacto medible",
        description:
          "No basta con decir que algo usa IA. Tiene que reducir friccion, acelerar respuesta o abrir una capacidad nueva de negocio.",
        icon: Target,
      },
    ],
    fitTitle: "Con quien encajamos mejor",
    fitItems: [
      "Equipos que ya sienten friccion operacional y no necesitan que se la expliquen.",
      "Lideres que quieren construir software y automatizacion con criterio, no comprar una promesa vaga.",
      "Empresas que entienden que la IA sin integracion, gobernanza y ownership termina en piloto eterno.",
    ],
    ctaTitle: "Si te importa construir algo serio, hablemos",
    ctaSubtitle:
      "Nos gusta trabajar con equipos que quieren llegar a produccion, aprender rapido y dejar una base tecnica mas fuerte que antes.",
    primaryCta: "Contactar a N3uralia",
    secondaryCta: "Ver como trabajamos",
  },
  en: {
    metadataTitle: "About | N3uralia",
    metadataDescription:
      "N3uralia builds AI systems and software from Chile for teams that need architecture, integration, and real operations.",
    badge: "About N3uralia",
    title: "We build AI and software like infrastructure, not like a trick",
    subtitle:
      "N3uralia is built from Santiago around one simple obsession: bring applied intelligence into real operations across Chile and LATAM. Less hype, fewer endless pilots, less isolated software. More architecture, more integration, and more systems that actually work.",
    storyTitle: "What kind of company we want to be",
    storyParagraphs: [
      "We are not trying to win with the flashiest demo. We are trying to build systems that survive daily use, ugly integrations, and the reality of operational teams.",
      "In Chile and LATAM, the real advantage will not come from using models alone. It will come from combining software, data, automation, and operational judgment with more discipline than the average team.",
      "That is why N3uralia does not position itself as magic. We position it as a serious way to build technical capacity and move the business.",
    ],
    pillarsTitle: "What we believe",
    pillars: [
      {
        title: "Architecture before hype",
        description:
          "AI matters when it integrates well, gets monitored well, and has a clear place inside the operation.",
        icon: Zap,
      },
      {
        title: "Local context matters",
        description:
          "We build from Chile for teams operating across Chile and LATAM, with their real timing, constraints, and opportunities.",
        icon: Users,
      },
      {
        title: "Control and traceability",
        description:
          "If a system makes decisions, it should be explainable, measurable, and operable without blind trust.",
        icon: Shield,
      },
      {
        title: "Measured impact",
        description:
          "It is not enough to say something uses AI. It has to reduce friction, speed response, or open a new business capability.",
        icon: Target,
      },
    ],
    fitTitle: "Who we fit best",
    fitItems: [
      "Teams that already feel operational friction and do not need a lecture to recognize it.",
      "Leaders who want to build software and automation with judgment, not buy a vague promise.",
      "Companies that understand AI without integration, governance, and ownership becomes an endless pilot.",
    ],
    ctaTitle: "If you care about building something serious, let's talk",
    ctaSubtitle:
      "We like working with teams that want to reach production, learn fast, and leave with a stronger technical base than they started with.",
    primaryCta: "Contact N3uralia",
    secondaryCta: "See how we work",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    title: page.metadataTitle,
    description: page.metadataDescription,
    path: "/about",
  })
}

export default function AboutPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <main className="retro-page min-h-screen pt-20">
      <section className="retro-dark border-b border-[rgba(118,214,214,.16)]">
        <div className="retro-shell grid gap-14 py-24 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <small>{page.badge}</small>
            <h1 className="mt-6 max-w-4xl text-[clamp(44px,5.5vw,78px)]">{page.title}</h1>
            <p className="mt-7 max-w-2xl text-[16px] text-[var(--n3-text-muted)]">{page.subtitle}</p>
          </div>

          <div className="relative min-h-[360px] border border-[rgba(168,217,216,.22)] bg-[var(--n3-deep)] p-8">
            <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
            <div className="mb-10 flex items-center justify-between gap-4">
              <span className="telemetry">N3 / OPERATING SYSTEM</span>
              <span className="h-2 w-2 rounded-full bg-[var(--n3-teal)] shadow-[0_0_18px_var(--n3-teal-dim)]" />
            </div>
            <div className="grid min-h-[245px] grid-cols-2 gap-px bg-[rgba(118,214,214,.16)]">
              {["ARCHITECTURE", "INTEGRATION", "OPERATIONS", "CONTROL"].map((label, index) => (
                <div key={label} className="flex flex-col justify-between bg-[var(--n3-black)] p-6">
                  <span className="telemetry">0{index + 1}</span>
                  <div>
                    <span className="mb-3 block h-px w-10 bg-[var(--n3-teal-soft)]" />
                    <span className="font-[var(--font-rajdhani)] text-sm tracking-[.16em] text-[var(--n3-teal-soft)]">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)]">
        <div className="retro-shell grid gap-12 py-20 lg:grid-cols-[.6fr_1.4fr]">
          <div>
            <small>01 / POSITION</small>
            <h2 className="mt-5 text-[clamp(34px,4vw,56px)]">{page.storyTitle}</h2>
          </div>
          <div className="space-y-7 border-l border-[rgba(118,214,214,.16)] pl-0 lg:pl-10">
            {page.storyParagraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-[15px] text-[var(--n3-text-muted)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20">
        <div className="retro-shell">
          <div className="mb-12 grid gap-4 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <small>02 / PRINCIPLES</small>
            <h2 className="text-[clamp(34px,4vw,56px)]">{page.pillarsTitle}</h2>
          </div>
          <div className="grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2 lg:grid-cols-4">
            {page.pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.title} className="group relative min-h-[290px] bg-[var(--n3-dark-surface)] p-7 transition-colors hover:bg-[#0e1d1e]">
                  <div className="mb-12 flex items-center justify-between">
                    <Icon className="h-7 w-7 text-[var(--n3-teal-soft)]" />
                    <span className="telemetry">0{index + 1}</span>
                  </div>
                  <h3 className="text-[22px] text-[var(--n3-text-light)]">{pillar.title}</h3>
                  <p className="mt-5 text-[13px] text-[var(--n3-text-muted)]">{pillar.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20">
        <div className="retro-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <small>03 / FIT</small>
            <h2 className="mt-5 text-[clamp(34px,4vw,56px)]">{page.fitTitle}</h2>
          </div>
          <div className="border-t border-[rgba(118,214,214,.16)]">
            {page.fitItems.map((item, index) => (
              <div key={item} className="grid grid-cols-[56px_1fr_24px] items-start gap-4 border-b border-[rgba(118,214,214,.16)] py-7">
                <span className="telemetry">0{index + 1}</span>
                <p className="text-[14px] text-[var(--n3-text-muted)]">{item}</p>
                <ArrowRight className="mt-1 h-4 w-4 text-[var(--n3-teal-soft)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="retro-shell relative border-y border-[rgba(118,214,214,.2)] py-16">
          <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
          <small>04 / NEXT MOVE</small>
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
              <Link href={href(locale, "/como-trabajamos")} className="retro-button">
                {page.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
