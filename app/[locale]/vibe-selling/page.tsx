import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Brain } from "lucide-react"
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
    title: "Vibe Selling Dashboard",
    subtitle: "Señales en tiempo real sobre intención, engagement y conversión.",
    introTitle: "Como funciona",
    introSubtitle: "Leemos el uso para ajustar el mensaje y la siguiente accion.",
    profilesTitle: "Perfiles de intencion",
    profilesSubtitle: "Cada perfil recibe una propuesta distinta segun su momento.",
    budgetTitle: "Inferencia de presupuesto",
    budgetSubtitle: "Las señales ayudan a estimar tamaño y urgencia.",
    ctaTitle: "Listo para vender con mas contexto?",
    ctaSubtitle: "Convierte señales de navegación en mejores conversaciones y mas conversiones.",
    ctaButton: "Iniciar conversacion",
    steps: [
      {
        title: "Deteccion silenciosa",
        description: "Analizamos scroll, tiempo y clicks para detectar intencion sin friccion.",
      },
      {
        title: "Mapeo de intencion",
        description: "Las señales se traducen en perfiles claros y faciles de usar.",
      },
      {
        title: "Composicion de valor",
        description: "La IA ajusta scope, timeline y pricing al contexto del visitante.",
      },
    ],
    profiles: [
      {
        label: "Explorador",
        summary: "Curioso y comparando opciones.",
        vibe: "Vamos a explorar lo posible",
      },
      {
        label: "Builder",
        summary: "Quiere entender como funciona.",
        vibe: "Aqui esta el stack tecnico",
      },
      {
        label: "Comprador",
        summary: "Listo para decidir y avanzar.",
        vibe: "Aqui esta tu solucion",
      },
      {
        label: "Partner",
        summary: "Piensa a largo plazo.",
        vibe: "Construyamos juntos",
      },
    ],
  },
  en: {
    title: "Vibe Selling Dashboard",
    subtitle: "Real-time signals on intent, engagement, and conversion.",
    introTitle: "How it works",
    introSubtitle: "We read usage signals to adjust the message and next action.",
    profilesTitle: "Intent profiles",
    profilesSubtitle: "Each profile gets a different proposition based on timing.",
    budgetTitle: "Budget inference",
    budgetSubtitle: "Signals help estimate size and urgency.",
    ctaTitle: "Ready to sell with more context?",
    ctaSubtitle: "Turn browsing signals into better conversations and more conversions.",
    ctaButton: "Start conversation",
    steps: [
      {
        title: "Silent detection",
        description: "We analyze scroll, time, and clicks to detect intent without friction.",
      },
      {
        title: "Intent mapping",
        description: "Signals become clear profiles that are easy to use.",
      },
      {
        title: "Value composition",
        description: "AI adjusts scope, timeline, and pricing to the visitor context.",
      },
    ],
    profiles: [
      {
        label: "Explorer",
        summary: "Curious and comparing options.",
        vibe: "Let's explore what is possible",
      },
      {
        label: "Builder",
        summary: "Wants to understand how it works.",
        vibe: "Here is the technical stack",
      },
      {
        label: "Buyer",
        summary: "Ready to decide and move.",
        vibe: "Here is your solution",
      },
      {
        label: "Partner",
        summary: "Thinking long term.",
        vibe: "Let's build together",
      },
    ],
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return buildLocalizedMetadata({
    locale,
    title: locale === "es" ? "Vibe Selling | N3uralia" : "Vibe Selling | N3uralia",
    description: locale === "es" ? "Dashboard de señales de intención y conversión." : "Intent and conversion signal dashboard.",
    path: "/vibe-selling",
  })
}

export default function VibeSellingPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = copy[locale]
  const readingGuide = [
    {
      title: locale === "es" ? "Que detecta" : "What it detects",
      description: locale === "es" ? "Nivel de interes y urgencia." : "Interest level and urgency.",
    },
    {
      title: locale === "es" ? "Que interpreta" : "What it interprets",
      description: locale === "es" ? "El perfil del visitante." : "The visitor profile.",
    },
    {
      title: locale === "es" ? "Que devuelve" : "What it returns",
      description: locale === "es" ? "Mensaje y siguiente accion." : "Message and next action.",
    },
  ]

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="blog" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-16 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-6xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe0dc] bg-white/75 px-4 py-2">
                <Brain className="h-4 w-4 text-[#789b96]" />
                <span className="text-sm font-semibold text-[#526e69]">
                  {locale === "es" ? "Lectura de intencion" : "Intent reading"}
                </span>
              </div>
              <h1 className="mt-6 text-5xl font-light leading-[0.98] tracking-[-0.05em] text-[#173634] md:text-7xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#65706d]">{page.subtitle}</p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {readingGuide.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.4rem] border border-[#d8e5e2] bg-white/80 p-5 shadow-[0_16px_70px_-64px_#173634]"
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

        <section className="px-4 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {page.steps.map((step, index) => (
                <article key={step.title} className="rounded-[1.6rem] border border-[#d8e5e2] bg-white p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96] font-semibold">
                    {index + 1}
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-[#173634]">{step.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#65706d]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#d8e5e2] bg-white p-8">
            <h2 className="text-3xl font-semibold text-[#173634]">{page.budgetTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-[#65706d]">{page.budgetSubtitle}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {page.profiles.map((profile) => (
                <div key={profile.label} className="rounded-2xl border border-[#e5eeeb] bg-[#fbfbfa] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8aa39d]">{profile.label}</p>
                  <p className="mt-3 text-sm leading-7 text-[#173634]">{profile.summary}</p>
                  <p className="mt-4 text-sm font-semibold text-[#526e69]">{profile.vibe}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#d8e5e2] bg-[#173634] px-4 py-16 text-white sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">{page.ctaTitle}</h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72">{page.ctaSubtitle}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#173634] transition-colors hover:bg-[#eef5f2]"
              >
                {page.ctaButton}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${locale}/soluciones`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {locale === "es" ? "Ver soluciones" : "View solutions"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
