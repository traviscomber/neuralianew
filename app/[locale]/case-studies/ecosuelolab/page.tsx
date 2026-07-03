import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart3, Bell, CheckCircle2, Clock, Gauge, Layers, Workflow } from "lucide-react"
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
    metadataTitle: "Caso Ecosuelolab | N3uralia",
    metadataDescription:
      "Cómo Ecosuelolab automatizó monitoreo de suelo con alertas satelitales, agentes de IA y WhatsApp para operación agrícola 24/7.",
    badge: "Agrotech + IA operacional",
    title: "Alertas agrícolas convertidas en decisiones accionables",
    subtitle:
      "Ecosuelolab necesitaba transformar datos satelitales y recomendaciones de riego en una capa de respuesta clara, continua y útil para equipos en terreno. N3uralia conectó datos, reglas e IA para operar sin depender de revisión manual permanente.",
    back: "Volver a casos",
    facts: [
      { label: "Industria", value: "Agricultura" },
      { label: "Implementación", value: "14 días" },
      { label: "Estado", value: "Automatizado" },
    ],
    challengeTitle: "El dato existía, pero la operación lo recibía tarde o disperso.",
    challenge:
      "Las alertas de monitoreo llegaban con información valiosa, pero requerían validación, interpretación y distribución manual. Eso demoraba decisiones críticas como priorizar riego, revisar zonas de estrés o avisar a responsables.",
    pains: [
      { icon: Clock, title: "Revisión manual", text: "Cada alerta necesitaba lectura, criterio y reenvío antes de transformarse en acción." },
      { icon: Bell, title: "Respuesta tardía", text: "Cuando la recomendación llega tarde, el impacto agrícola ya puede estar ocurriendo." },
      { icon: BarChart3, title: "Contexto disperso", text: "Datos, responsables y acciones quedaban separados en distintos canales." },
    ],
    solutionTitle: "Lo que construimos",
    solution:
      "Una integración que recibe alertas, normaliza información, interpreta urgencia y distribuye recomendaciones accionables por canales familiares como WhatsApp.",
    flow: [
      "Recepción de datos satelitales y alertas de monitoreo.",
      "Normalización del evento para entender zona, severidad y tipo de acción.",
      "Capa de decisión con reglas, contexto e IA para priorizar respuesta.",
      "Entrega automática a responsables con mensaje claro y trazable.",
    ],
    impactTitle: "Impacto operativo",
    metrics: [
      { value: "100%", label: "menos intervención manual en alertas repetibles" },
      { value: "24/7", label: "monitoreo preparado para continuidad operacional" },
      { value: "14d", label: "primer sistema funcional desde el diagnóstico" },
    ],
    ctaTitle: "Si tu operación recibe datos pero no los convierte en acción, ahí hay un sistema por construir.",
    primaryCta: "Agendar diagnóstico",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "Ecosuelolab case study | N3uralia",
    metadataDescription:
      "How Ecosuelolab automated soil monitoring with satellite alerts, AI agents, and WhatsApp for 24/7 agricultural operations.",
    badge: "Agrotech + operational AI",
    title: "Agricultural alerts turned into actionable decisions",
    subtitle:
      "Ecosuelolab needed to turn satellite data and irrigation recommendations into a clear, continuous, useful response layer for field teams. N3uralia connected data, rules, and AI so the operation did not depend on permanent manual review.",
    back: "Back to cases",
    facts: [
      { label: "Industry", value: "Agriculture" },
      { label: "Implementation", value: "14 days" },
      { label: "Status", value: "Automated" },
    ],
    challengeTitle: "The data existed, but the operation received it late or scattered.",
    challenge:
      "Monitoring alerts carried valuable information, but required manual validation, interpretation, and distribution. That delayed critical decisions such as prioritizing irrigation, checking stress zones, or notifying owners.",
    pains: [
      { icon: Clock, title: "Manual review", text: "Each alert needed reading, judgment, and forwarding before becoming action." },
      { icon: Bell, title: "Delayed response", text: "When a recommendation arrives late, the agricultural impact may already be happening." },
      { icon: BarChart3, title: "Scattered context", text: "Data, owners, and actions lived across disconnected channels." },
    ],
    solutionTitle: "What we built",
    solution:
      "An integration that receives alerts, normalizes information, interprets urgency, and distributes actionable recommendations through familiar channels such as WhatsApp.",
    flow: [
      "Receive satellite data and monitoring alerts.",
      "Normalize the event to understand zone, severity, and action type.",
      "Decision layer with rules, context, and AI to prioritize response.",
      "Automatic delivery to owners with clear, traceable messages.",
    ],
    impactTitle: "Operational impact",
    metrics: [
      { value: "100%", label: "less manual intervention in repeatable alerts" },
      { value: "24/7", label: "monitoring prepared for operational continuity" },
      { value: "14d", label: "first functional system from diagnosis" },
    ],
    ctaTitle: "If your operation receives data but does not turn it into action, there is a system to build.",
    primaryCta: "Book diagnosis",
    secondaryCta: "View solutions",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/case-studies/ecosuelolab",
    type: "article",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function EcosuelolabCaseStudy({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="hero" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <Link href={href(locale, "/case-studies")} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#789b96] transition-colors hover:text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#789b96]">
                <ArrowRight className="h-4 w-4 rotate-180" />
                {page.back}
              </Link>

              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cfe0dc] bg-white/75 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#789b96]" />
                    <span className="text-sm font-semibold text-[#526e69]">{page.badge}</span>
                  </div>
                  <h1 className="max-w-5xl text-balance text-5xl font-light leading-[0.98] tracking-[-0.04em] text-[#173634] md:text-7xl">{page.title}</h1>
                  <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-[#65706d]">{page.subtitle}</p>
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
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[#eef5f2] text-sm font-semibold text-[#789b96]">{index + 1}</span>
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
              <Link href={href(locale, "/contact")} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]">
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href(locale, "/soluciones")} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b9d0cb] bg-white px-6 py-3 text-sm font-semibold text-[#526e69] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789b96] hover:bg-[#f7faf8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]">
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
