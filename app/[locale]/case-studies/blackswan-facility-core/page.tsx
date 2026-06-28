import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle2, Clock, Gauge, Layers, MessageSquare, Workflow } from "lucide-react"
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
    metadataTitle: "Caso Blackswan Facility Core | N3uralia",
    metadataDescription:
      "Cómo N3uralia ayudó a Blackswan a unificar operaciones fragmentadas en una plataforma de facility management con trazabilidad, automatización y una sola fuente de verdad.",
    badge: "Hospitality + software operativo",
    title: "De operación fragmentada a un centro de control para hospitality",
    subtitle:
      "Blackswan necesitaba coordinar propiedades, huéspedes, equipo y tareas sin vivir entre correos, planillas y WhatsApp. N3uralia diseñó una plataforma core para ordenar la operación diaria y reducir fricción real.",
    back: "Volver a casos",
    facts: [
      { label: "Industria", value: "Hospitality" },
      { label: "Sistema", value: "Facility Core" },
      { label: "Estado", value: "En uso y crecimiento" },
    ],
    challengeTitle: "El problema no era falta de esfuerzo. Era falta de sistema.",
    challenge:
      "La información crítica estaba repartida entre canales: disponibilidad, solicitudes, mantenimiento, comunicación con huéspedes y seguimiento interno. Eso generaba contexto duplicado, respuesta lenta y poca visibilidad gerencial.",
    pains: [
      { icon: Clock, title: "Tiempo perdido", text: "El equipo invertía horas coordinando datos que deberían estar conectados." },
      { icon: MessageSquare, title: "Canales dispersos", text: "Email, planillas y WhatsApp funcionaban, pero no como una operación integrada." },
      { icon: Building2, title: "Poca vista global", text: "Gestionar múltiples propiedades sin una fuente única volvía difícil priorizar." },
    ],
    solutionTitle: "Lo que construimos",
    solution:
      "Una plataforma operativa para centralizar propiedades, solicitudes, disponibilidad, tareas y comunicación. No como dashboard decorativo, sino como una capa de trabajo que el equipo puede usar todos los días.",
    flow: [
      "Base unificada de propiedades, huéspedes, tareas y estados.",
      "Flujos de coordinación para solicitudes, mantenimiento y seguimiento diario.",
      "Vista gerencial para entender carga, prioridades y puntos de fricción.",
      "Arquitectura preparada para automatizaciones e integraciones progresivas.",
    ],
    impactTitle: "Impacto esperado y primeras señales",
    metrics: [
      { value: "40%", label: "menos tiempo operativo observado en tareas repetitivas" },
      { value: "1", label: "fuente de verdad para coordinación diaria" },
      { value: "24/7", label: "base lista para operación continua" },
    ],
    ctaTitle: "Si tu operación también vive entre canales, este es el tipo de sistema que conviene diseñar.",
    primaryCta: "Agendar diagnóstico",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "Blackswan Facility Core case study | N3uralia",
    metadataDescription:
      "How N3uralia helped Blackswan unify fragmented operations into a facility management platform with traceability, automation, and a single source of truth.",
    badge: "Hospitality + operational software",
    title: "From fragmented operations to a control center for hospitality",
    subtitle:
      "Blackswan needed to coordinate properties, guests, staff, and tasks without living across email, spreadsheets, and WhatsApp. N3uralia designed a core platform to organize daily operations and reduce real friction.",
    back: "Back to cases",
    facts: [
      { label: "Industry", value: "Hospitality" },
      { label: "System", value: "Facility Core" },
      { label: "Status", value: "Live and growing" },
    ],
    challengeTitle: "The problem was not lack of effort. It was lack of system.",
    challenge:
      "Critical information was spread across channels: availability, requests, maintenance, guest communication, and internal follow-up. That created duplicated context, slow response, and limited management visibility.",
    pains: [
      { icon: Clock, title: "Lost time", text: "The team spent hours coordinating data that should already be connected." },
      { icon: MessageSquare, title: "Scattered channels", text: "Email, spreadsheets, and WhatsApp worked, but not as one integrated operation." },
      { icon: Building2, title: "Limited global view", text: "Managing multiple properties without one source of truth made prioritization harder." },
    ],
    solutionTitle: "What we built",
    solution:
      "An operational platform to centralize properties, requests, availability, tasks, and communication. Not a decorative dashboard, but a working layer the team can use every day.",
    flow: [
      "Unified base for properties, guests, tasks, and statuses.",
      "Coordination workflows for requests, maintenance, and daily follow-up.",
      "Management view to understand workload, priorities, and friction points.",
      "Architecture prepared for progressive automations and integrations.",
    ],
    impactTitle: "Expected impact and early signals",
    metrics: [
      { value: "40%", label: "less operational time observed in repeated tasks" },
      { value: "1", label: "source of truth for daily coordination" },
      { value: "24/7", label: "base ready for continuous operations" },
    ],
    ctaTitle: "If your operation also lives across channels, this is the kind of system worth designing.",
    primaryCta: "Book diagnosis",
    secondaryCta: "View solutions",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/case-studies/blackswan-facility-core",
    type: "article",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function BlackswanCaseStudy({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="hero" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <Link
                href={href(locale, "/case-studies")}
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#789b96] transition-colors hover:text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#789b96]"
              >
                {page.back}
                <ArrowRight className="h-4 w-4 rotate-180" />
              </Link>

              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
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
                    {page.facts.map((fact) => (
                      <div key={fact.label} className="rounded-[1.15rem] bg-[#eef5f2] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">{fact.label}</p>
                        <p className="mt-2 text-lg font-semibold text-[#173634]">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-[#d8e5e2] px-4 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">Challenge</p>
              <h2 className="text-balance text-4xl font-light leading-tight text-[#243331] md:text-5xl">{page.challengeTitle}</h2>
              <p className="mt-6 text-base leading-8 text-[#65706d]">{page.challenge}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {page.pains.map((pain) => {
                const Icon = pain.icon
                return (
                  <div key={pain.title} className="rounded-[1.5rem] border border-[#d8e5e2] bg-white p-6 shadow-[0_24px_80px_-72px_#173634]">
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#243331]">{pain.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#65706d]">{pain.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="rounded-[2rem] bg-[#173634] p-7 text-white shadow-[0_44px_130px_-82px_#173634] md:p-9">
                <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10">
                  <Layers className="h-6 w-6 text-[#dbe8e4]" />
                </div>
                <h2 className="text-balance text-4xl font-light leading-tight text-white md:text-5xl">{page.solutionTitle}</h2>
                <p className="mt-6 text-base leading-8 text-[#d7e4e1]">{page.solution}</p>
              </div>

              <div className="space-y-4">
                {page.flow.map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-[1.4rem] border border-[#d8e5e2] bg-white p-5 shadow-[0_24px_80px_-72px_#173634]">
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[#eef5f2] text-sm font-semibold text-[#789b96]">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-[#65706d]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-[#d8e5e2] px-4 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">Impacto</p>
              <h2 className="text-balance text-4xl font-light leading-tight text-[#243331] md:text-5xl">{page.impactTitle}</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {page.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.6rem] border border-[#d8e5e2] bg-white p-7 text-center shadow-[0_24px_80px_-72px_#173634]">
                  <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96]">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <p className="text-5xl font-light leading-none text-[#173634]">{metric.value}</p>
                  <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-[#65706d]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#d8e5e2] bg-white/85 p-8 text-center shadow-[0_34px_110px_-82px_#173634] md:p-12">
            <Workflow className="mx-auto mb-6 h-7 w-7 text-[#789b96]" />
            <h2 className="text-balance text-4xl font-light leading-tight text-[#173634] md:text-5xl">{page.ctaTitle}</h2>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={href(locale, "/contact")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]"
              >
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={href(locale, "/soluciones")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b9d0cb] bg-white px-6 py-3 text-sm font-semibold text-[#526e69] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789b96] hover:bg-[#f7faf8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]"
              >
                {page.secondaryCta}
                <CheckCircle2 className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
