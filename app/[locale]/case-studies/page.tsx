import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { CASE_STUDIES } from "@/content/caseStudies"
import { Footer } from "@/components/layout/footer"
import { CaseStudyCard } from "@/components/CaseStudyCard"
import { generatePageMetadata } from "@/lib/metadata-utils"

interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return generatePageMetadata({
    title: isES ? "Casos de Éxito - IA y Automatización en Chile | N3uralia" : "Case Studies - AI & Automation in Chile | N3uralia",
    description: isES
      ? "5 casos reales de empresas chilenas que implementaron agentes IA: 70% reducción de costos, 300% ROI. Minería, retail, logística, manufactura, turismo. Resultados medibles."
      : "5 real cases of Chilean companies implementing AI agents: 70% cost reduction, 300% ROI. Mining, retail, logistics, manufacturing, tourism. Measurable results.",
    keywords: isES
      ? "casos de éxito IA Chile, empresas agentes IA, ROI automatización, proyectos IA"
      : "AI success cases Chile, AI agents companies, automation ROI",
    canonical: `https://n3uralia.com/${locale}/case-studies`,
    locale,
  })
}

export default function CaseStudiesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const d = getDict(locale)

  return (
    <>
      <main className="min-h-screen pt-24 pb-16">
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{d.caseStudies.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{d.caseStudies.subtitle}</p>
        </section>
        <section className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} locale={locale} />
            ))}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
