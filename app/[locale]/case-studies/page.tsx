import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, FolderKanban, Sparkles } from "lucide-react"
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
    metadataTitle: "Casos de éxito | N3uralia",
    metadataDescription:
      "Casos de éxito de N3uralia: agricultura, educación, hospitality y sistemas donde IA, software e integraciones ya están en producción.",
    badge: "Prueba operativa",
    title: "Casos donde la arquitectura ya se volvió operación",
    subtitle:
      "Estos casos muestran algo simple: cuando el sistema está bien pensado, la IA deja de verse como experimento y empieza a mover trabajo real.",
    cases: [
      {
        title: "Ecosuelolab",
        summary:
          "Monitoreo agrícola con alertas, automatización y una capa de respuesta pensada para operar con continuidad.",
        metric: "14 días",
        metricLabel: "primer sistema funcional",
        points: ["Monitoreo y alertas", "Integraciones reales", "Operación técnica"],
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        summary:
          "Producto full-stack con experiencia guiada por IA y una base preparada para crecer sin rehacer todo.",
        metric: "10k+",
        metricLabel: "usuarios proyectados",
        points: ["Producto digital", "IA aplicada", "Escala progresiva"],
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        summary:
          "Software operativo para hospitality, coordinación entre equipos y una mejor capa de respuesta diaria.",
        metric: "40%",
        metricLabel: "menos tiempo operativo observado",
        points: ["Hospitality ops", "Coordinación", "Software operativo"],
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    ctaTitle: "Si quieres que el siguiente caso sea el tuyo, partamos por el problema correcto",
    ctaSubtitle:
      "Cuéntanos qué proceso hoy vive entre planillas, correos o software desconectado. Diseñamos el primer sistema con impacto medible.",
    primaryCta: "Hablar con N3uralia",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "Case studies | N3uralia",
    metadataDescription:
      "N3uralia case studies across agriculture, education, hospitality, and systems where AI, software, and integrations are already in production.",
    badge: "Operational proof",
    title: "Cases where architecture already became operations",
    subtitle:
      "These cases show one simple thing: when the system is designed well, AI stops looking like an experiment and starts moving real work.",
    cases: [
      {
        title: "Ecosuelolab",
        summary:
          "Agricultural monitoring with alerts, automation, and a response layer designed for continuous operation.",
        metric: "14 days",
        metricLabel: "first functional system",
        points: ["Monitoring and alerts", "Real integrations", "Technical operations"],
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        summary:
          "A full-stack product with an AI-guided experience and a base ready to grow without rebuilding everything.",
        metric: "10k+",
        metricLabel: "projected users",
        points: ["Digital product", "Applied AI", "Progressive scale"],
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        summary:
          "Operational software for hospitality, better coordination across teams, and a stronger daily response layer.",
        metric: "40%",
        metricLabel: "less observed operational time",
        points: ["Hospitality ops", "Coordination", "Operational software"],
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    ctaTitle: "If you want the next case to be yours, start with the right problem",
    ctaSubtitle:
      "Tell us which process currently lives across spreadsheets, email, or disconnected software. We design the first system with measurable impact.",
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
              <h1 className="text-balance text-5xl font-light leading-[0.98] tracking-[-0.04em] text-[#173634] md:text-7xl">
                {page.title}
              </h1>
              <p className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-8 text-[#65706d]">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-[#d8e5e2] px-4 py-24 sm:px-8 lg:px-10">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {page.cases.map((item) => (
                <Link
                  key={item.title}
                  href={href(locale, item.href)}
                  className="group flex min-h-[28rem] flex-col rounded-[1.8rem] border border-[#d8e5e2] bg-white p-7 shadow-[0_24px_80px_-72px_#173634] transition-all duration-300 hover:-translate-y-1 hover:border-[#b8d1cc] hover:shadow-[0_34px_110px_-82px_#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789b96]"
                >
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5f2] text-[#789b96] transition-colors group-hover:bg-[#173634] group-hover:text-white">
                      <FolderKanban className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-light leading-none text-[#173634]">{item.metric}</p>
                      <p className="mt-2 max-w-32 text-xs leading-5 text-[#7b8582]">{item.metricLabel}</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-light leading-tight text-[#173634] transition-colors group-hover:text-[#526e69]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#65706d]">{item.summary}</p>

                  <div className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#789b96]" />
                        <span className="text-sm text-[#65706d]">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#789b96]">
                      {locale === "es" ? "Ver caso" : "View case"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-8 lg:px-10">
          <div className="container mx-auto max-w-4xl rounded-[2rem] border border-[#d8e5e2] bg-white/85 p-8 text-center shadow-[0_34px_110px_-82px_#173634] md:p-12">
            <Sparkles className="mx-auto mb-6 h-7 w-7 text-[#789b96]" />
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
                href={href(locale, "/soluciones")}
                className="inline-flex items-center justify-center rounded-full border border-[#b9d0cb] bg-white px-6 py-3 text-sm font-semibold text-[#526e69] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789b96] hover:bg-[#f7faf8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]"
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
