import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { getCaseStudy, t2 } from "@/content/caseStudies"
import { Footer } from "@/components/layout/footer"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"
  const caseStudy = getCaseStudy("ecosuelolab")
  if (!caseStudy) return {}

  return {
    title: isES
      ? "Ecosuelolab - Monitoreo Agrícola Satelital + Agentes IA | N3uralia"
      : "Ecosuelolab - Satellite Soil Monitoring + AI Agents | N3uralia",
    description: t2(locale, caseStudy.summary),
    alternates: {
      canonical: `https://n3uralia.com/${locale}/case-studies/ecosuelolab`,
      languages: {
        es: "https://n3uralia.com/es/case-studies/ecosuelolab",
        "en-US": "https://n3uralia.com/en/case-studies/ecosuelolab",
      },
    },
  }
}

export default function EcosuelolabCaseStudy({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const caseStudy = getCaseStudy("ecosuelolab")
  const isES = locale === "es"

  if (!caseStudy) {
    return <div>Case study not found</div>
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                {t2(locale, caseStudy.verticalTag)}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t2(locale, caseStudy.title)}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t2(locale, caseStudy.summary)}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {caseStudy.highlights.map((highlight, i) => (
                <div key={i} className="px-6 py-3 bg-card border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground">{t2(locale, highlight.label)}</p>
                  <p className="font-semibold text-foreground">{t2(locale, highlight.value)}</p>
                </div>
              ))}
            </div>

            <Link
              href={`/${locale}/case-studies`}
              className="text-primary hover:underline font-semibold flex items-center gap-2"
            >
              ← {isES ? "Volver a Case Studies" : "Back to Case Studies"}
            </Link>
          </div>
        </section>

        {/* Sections */}
        {caseStudy.sections.map((section, idx) => (
          <section
            key={idx}
            className={`py-16 px-4 ${idx % 2 === 1 ? "bg-muted/30" : ""} ${idx !== caseStudy.sections.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">{t2(locale, section.heading)}</h2>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">{t2(locale, section.body)}</p>

                {section.bullets && section.bullets.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.bullets.map((bullet, j) => (
                      <div key={j} className="p-6 bg-card border border-border rounded-lg">
                        <p className="text-muted-foreground text-sm">{t2(locale, bullet)}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Tech Stack */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {isES ? "Stack Técnico" : "Tech Stack"}
            </h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="font-mono text-sm text-foreground">{t2(locale, caseStudy.stackLine)}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {isES ? "¿Tienes un desafío similar?" : "Have a similar challenge?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {isES
                ? "Integraciones complejas, datos dispersos, necesidad de automatizar decisiones. Hablemos sobre cómo N3uralia puede ayudar."
                : "Complex integrations, scattered data, need to automate decisions. Let's discuss how N3uralia can help."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                {isES ? "Contactar" : "Contact"} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/capabilities`}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                {isES ? "Ver Capabilities" : "View Capabilities"}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
