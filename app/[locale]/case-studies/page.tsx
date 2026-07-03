import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FolderKanban, Sparkles } from "lucide-react"
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
    metadataTitle: "Casos de uso | N3uralia",
    metadataDescription: "Casos de uso de N3uralia: IA, software e integraciones en produccion.",
    badge: "Prueba operativa",
    title: "Casos donde la arquitectura ya opera",
    subtitle: "Cada caso parte de una friccion concreta y termina en un sistema util.",
    cases: [
      {
        title: "Ecosuelolab",
        summary: "Monitoreo agrícola con alertas y automatización.",
        metric: "14 días",
        metricLabel: "primer sistema funcional",
        points: ["Monitoreo", "Alertas", "Integraciones"],
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        summary: "Producto full-stack con experiencia guiada por IA.",
        metric: "10k+",
        metricLabel: "usuarios proyectados",
        points: ["Producto digital", "IA aplicada", "Escala"],
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        summary: "Software operativo para hospitality y coordinación.",
        metric: "40%",
        metricLabel: "menos tiempo operativo",
        points: ["Hospitality ops", "Coordinación", "Software"],
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    ctaTitle: "Si quieres que el siguiente caso sea el tuyo, conversemos",
    ctaSubtitle: "Cuéntanos el problema y te proponemos el primer sistema posible.",
    primaryCta: "Hablar con N3uralia",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "Case studies | N3uralia",
    metadataDescription: "N3uralia case studies across AI, software, and integrations in production.",
    badge: "Operational proof",
    title: "Cases where architecture already operates",
    subtitle: "Each case starts from a concrete friction and ends in a useful system.",
    cases: [
      {
        title: "Ecosuelolab",
        summary: "Agricultural monitoring with alerts and automation.",
        metric: "14 days",
        metricLabel: "first functional system",
        points: ["Monitoring", "Alerts", "Integrations"],
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        summary: "A full-stack product with an AI-guided experience.",
        metric: "10k+",
        metricLabel: "projected users",
        points: ["Digital product", "Applied AI", "Scale"],
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        summary: "Operational software for hospitality and coordination.",
        metric: "40%",
        metricLabel: "less operational time",
        points: ["Hospitality ops", "Coordination", "Software"],
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    ctaTitle: "If you want the next case to be yours, start with the right problem",
    ctaSubtitle: "Tell us the process and we will map the first system with measurable impact.",
    primaryCta: "Talk to N3uralia",
    secondaryCta: "View solutions",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    title: page.metadataTitle,
    description: page.metadataDescription,
    path: "/case-studies",
  })
}

export default function CaseStudiesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]
  const readingGuide = [
    {
      title: locale === "es" ? "Que problema resuelve" : "What problem it solves",
      description: locale === "es" ? "Parte de una friccion real." : "Starts from a real friction.",
    },
    {
      title: locale === "es" ? "Que sistema se construyo" : "What system was built",
      description: locale === "es" ? "Muestra la arquitectura y las integraciones." : "Shows the architecture and integrations.",
    },
    {
      title: locale === "es" ? "Que evidencia mirar" : "What evidence to look for",
      description: locale === "es" ? "Mira metricas y puntos clave." : "Look at metrics and key points.",
    },
  ]

  return (
    <>
      <main className="min-h-screen bg-[#fbfbfa] pt-20 text-[#243331]">
        <SectionBackground section="hero" className="border-b border-[#d8e5e2]">
          <section className="px-4 py-20 sm:px-8 lg:px-10">
            <div className="container mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cfe0dc] bg-white/75 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#789b96]" />
                <span className="text-sm font-semibold text-[#526e69]">{page.badge}</span>
              </div>
              <h1 className="text-balance text-5xl font-light leading-[0.98] tracking-[-0.04em] text-[#173634] md:text-7xl">{page.title}</h1>
              <p className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-8 text-[#65706d]">{page.subtitle}</p>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-3">
              {readingGuide.map((item) => (
                <article key={item.title} className="rounded-[1.4rem] border border-[#d8e5e2] bg-white/80 p-5 text-left shadow-[0_16px_70px_-64px_#173634]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fb2aa]">{locale === "es" ? "Guia rapida" : "Quick guide"}</p>
                  <h2 className="mt-3 text-xl font-semibold text-[#173634]">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#65706d]">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-[#d8e5e2] px-4 py-24 sm:px-8 lg:px-10">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {page.cases.map((item) => (
                <Link key={item.title} href={href(locale, item.href)} className="group flex min-h-[24rem] flex-col rounded-[1.8rem] border border-[#d8e5e2] bg-white p-7 shadow-[0_24px_80px_-72px_#173634] transition-all duration-300 hover:-translate-y-1 hover:border-[#b8d1cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789b96]">
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96] transition-colors group-hover:bg-[#173634] group-hover:text-white">
                      <FolderKanban className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-light leading-none text-[#173634]">{item.metric}</p>
                      <p className="mt-2 max-w-32 text-xs leading-5 text-[#7b8582]">{item.metricLabel}</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fb2aa]">{locale === "es" ? "Caso en produccion" : "In production"}</p>
                    <h2 className="mt-3 text-2xl font-semibold text-[#173634]">{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-[#65706d]">{item.summary}</p>
                  </div>

                  <div className="mt-7 space-y-3 border-t border-[#e5eeeb] pt-6">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm text-[#243331]">
                        <Sparkles className="h-4 w-4 text-[#789b96]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#173634]">
                    {locale === "es" ? "Ver caso" : "View case"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d8e5e2] bg-[#edf4f1] p-8 text-center">
            <h2 className="text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">{page.ctaTitle}</h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#65706d]">{page.ctaSubtitle}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href={href(locale, "/contact")} className="inline-flex items-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244946]">
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href(locale, "/soluciones")} className="inline-flex items-center gap-2 rounded-full border border-[#d8e5e2] bg-white px-6 py-3 text-sm font-semibold text-[#173634] transition-colors hover:border-[#b8d1cc] hover:bg-[#f5faf8]">
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
