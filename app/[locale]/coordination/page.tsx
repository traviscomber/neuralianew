import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Users, Workflow, Zap } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import Navigation from "@/components/navigation"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

const copy = {
  es: {
    title: "Coordinacion de equipos",
    subtitle: "Equipos humanos con contexto compartido, menos friccion y decisiones mas claras.",
    badge: "Orquestacion para humanos",
    pillarsTitle: "Tres piezas de coordinacion",
    pillarsSubtitle: "Una base simple para trabajar con menos ruido y mejor seguimiento.",
    ctaTitle: "Listo para coordinar mejor?",
    ctaSubtitle: "Transformamos equipos dispersos en un sistema mas claro y accionable.",
    primaryCta: "Comenzar",
    secondaryCta: "Ver capacidades de IA",
    features: [
      {
        icon: Users,
        title: "Salas de decision",
        description: "Equipos y agentes trabajan con contexto compartido.",
        details: ["Contexto persistente", "Decisiones documentadas", "Menos handoffs"],
      },
      {
        icon: Workflow,
        title: "Trazabilidad",
        description: "Cada decision queda registrada y se puede revisar.",
        details: ["Historial visible", "Razon claro", "Auditoria simple"],
      },
      {
        icon: Zap,
        title: "Ejecucion automatica",
        description: "Cuando se decide, el sistema puede seguir sin friccion manual.",
        details: ["Paso siguiente inmediato", "Integracion directa", "Menos esperas"],
      },
    ],
  },
  en: {
    title: "Intelligent team coordination",
    subtitle: "Human teams with shared context, less friction, and clearer decisions.",
    badge: "Orchestration for humans",
    pillarsTitle: "Three coordination pieces",
    pillarsSubtitle: "A simple base for working with less noise and better follow-up.",
    ctaTitle: "Ready to coordinate better?",
    ctaSubtitle: "We turn scattered teams into a clearer and more actionable system.",
    primaryCta: "Start",
    secondaryCta: "View AI capabilities",
    features: [
      {
        icon: Users,
        title: "Decision rooms",
        description: "Teams and agents work with shared context.",
        details: ["Persistent context", "Documented decisions", "Less handoffs"],
      },
      {
        icon: Workflow,
        title: "Traceability",
        description: "Every decision is recorded and easy to review.",
        details: ["Visible history", "Clear rationale", "Simple audit"],
      },
      {
        icon: Zap,
        title: "Automatic execution",
        description: "Once decided, the system can continue without manual friction.",
        details: ["Immediate next step", "Direct integration", "Less waiting"],
      },
    ],
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = copy[locale]

  return buildLocalizedMetadata({
    locale,
    title: locale === "es" ? "Coordinacion | N3uralia" : "Coordination | N3uralia",
    description: page.subtitle,
    path: "/coordination",
  })
}

export default function CoordinationPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = copy[locale]
  const readingGuide = [
    {
      title: locale === "es" ? "Que coordina" : "What it coordinates",
      description: locale === "es" ? "Personas, decisiones y seguimiento." : "People, decisions, and follow-up.",
    },
    {
      title: locale === "es" ? "Como opera" : "How it operates",
      description: locale === "es" ? "Se ve el estado y queda historial." : "Status is visible and history remains.",
    },
    {
      title: locale === "es" ? "Que habilita" : "What it enables",
      description: locale === "es" ? "Menos friccion y mas velocidad." : "Less friction and more speed.",
    },
  ]

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="workflow" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe0dc] bg-white/75 px-4 py-2">
                <Users className="h-4 w-4 text-[#789b96]" />
                <span className="text-sm font-semibold text-[#526e69]">{page.badge}</span>
              </div>
              <h1 className="mt-6 text-balance text-5xl font-light leading-[0.98] tracking-[-0.05em] text-[#173634] md:text-7xl">
                {page.title}
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#65706d]">{page.subtitle}</p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {readingGuide.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.4rem] border border-[#d8e5e2] bg-white/80 p-5 text-left shadow-[0_16px_70px_-64px_#173634]"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8aa39d]">
                      {locale === "es" ? "Guia rapida" : "Quick guide"}
                    </p>
                    <h2 className="mt-3 text-lg font-semibold text-[#173634]">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[#65706d]">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-[#d8e5e2] px-4 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                {locale === "es" ? "Capacidades" : "Capabilities"}
              </p>
              <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">
                {page.pillarsTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#65706d]">{page.pillarsSubtitle}</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {page.features.map((feature) => {
                const Icon = feature.icon

                return (
                  <article key={feature.title} className="rounded-[1.8rem] border border-[#d8e5e2] bg-white p-6">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-[#173634]">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#65706d]">{feature.description}</p>
                    <ul className="mt-6 space-y-3">
                      {feature.details.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-[#243331]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#789b96]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                )}
              )}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d8e5e2] bg-[#edf4f1] p-8 text-center">
            <h2 className="text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">
              {page.ctaTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#65706d]">{page.ctaSubtitle}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244946]"
              >
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${locale}/capabilities`}
                className="inline-flex items-center gap-2 rounded-full border border-[#d8e5e2] bg-white px-6 py-3 text-sm font-semibold text-[#173634] transition-colors hover:border-[#b8d1cc] hover:bg-[#f5faf8]"
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
