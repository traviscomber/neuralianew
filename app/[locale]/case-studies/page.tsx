import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, FolderKanban, Sparkles } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"

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
    metadataTitle: "Casos de exito | N3uralia",
    metadataDescription:
      "Casos de exito de N3uralia: agricultura, educacion, hospitality y otros sistemas donde IA, software e integraciones ya estan en produccion.",
    title: "Casos donde la arquitectura ya se volvio operacion",
    subtitle:
      "Estos casos muestran algo simple: cuando el sistema esta bien pensado, la IA deja de verse como experimento y empieza a mover trabajo real.",
    cases: [
      {
        title: "Ecosuelolab",
        summary:
          "Monitoreo agricola con alertas, automatizacion y una capa de respuesta pensada para operar con continuidad.",
        points: ["Monitoreo y alertas", "Integraciones reales", "Operacion tecnica"],
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        summary:
          "Producto full-stack con experiencia guiada por IA y una base preparada para crecer sin rehacer todo.",
        points: ["Producto digital", "IA aplicada", "Escala progresiva"],
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        summary:
          "Software operativo para hospitality, coordinacion entre equipos y una mejor capa de respuesta diaria.",
        points: ["Hospitality ops", "Coordinacion", "Software operativo"],
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    ctaTitle: "Si quieres que el siguiente caso sea el tuyo, partamos por el problema correcto",
    primaryCta: "Hablar con N3uralia",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "Case studies | N3uralia",
    metadataDescription:
      "N3uralia case studies across agriculture, education, hospitality, and other systems where AI, software, and integrations are already in production.",
    title: "Cases where architecture already became operations",
    subtitle:
      "These cases show one simple thing: when the system is designed well, AI stops looking like an experiment and starts moving real work.",
    cases: [
      {
        title: "Ecosuelolab",
        summary:
          "Agricultural monitoring with alerts, automation, and a response layer designed for continuous operation.",
        points: ["Monitoring and alerts", "Real integrations", "Technical operations"],
        href: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        summary:
          "A full-stack product with an AI-guided experience and a base ready to grow without rebuilding everything.",
        points: ["Digital product", "Applied AI", "Progressive scale"],
        href: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        summary:
          "Operational software for hospitality, better coordination across teams, and a stronger daily response layer.",
        points: ["Hospitality ops", "Coordination", "Operational software"],
        href: "/case-studies/blackswan-facility-core",
      },
    ],
    ctaTitle: "If you want the next case to be yours, start with the right problem",
    primaryCta: "Talk to N3uralia",
    secondaryCta: "View solutions",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/case-studies`,
      languages: {
        es: "https://n3uralia.com/es/case-studies",
        en: "https://n3uralia.com/en/case-studies",
      },
    },
  }
}

export default function CaseStudiesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">{page.title}</h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.cases.map((item) => (
                <Link
                  key={item.title}
                  href={href(locale, item.href)}
                  className="rounded-lg border border-border bg-card p-8 hover:border-primary/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <FolderKanban className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{item.summary}</p>
                  <div className="space-y-3 mb-6">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                    {locale === "es" ? "Ver caso" : "View case"}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-8">{page.ctaTitle}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={href(locale, "/contact")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                {page.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={href(locale, "/soluciones")}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
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
