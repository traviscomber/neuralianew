import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { CASE_STUDIES } from "@/content/caseStudies"
import { Footer } from "@/components/Footer"
import { CaseStudyCard } from "@/components/CaseStudyCard"
import { generatePageMetadata } from "@/lib/metadata-utils"

interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return generatePageMetadata({
    title: isES ? "Casos de Éxito - Implementaciones de Sistemas Agenticos" : "Case Studies - Agentic Systems Implementations",
    description: isES
      ? "Casos de éxito reales de N3uralia: implementaciones completas de sistemas agenticos con arquitectura, operación 24/7 y resultados medibles. Agricultura, educación, hotelería."
      : "Real case studies from N3uralia: complete agentic systems implementations with architecture, 24/7 operations, and measurable results. Agriculture, education, hospitality.",
    keywords: isES
      ? "casos de éxito, proyectos IA, sistemas agenticos, soluciones implementadas, agentes inteligentes, automatización empresarial, arquitectura agentica"
      : "case studies, AI projects, agentic systems, implemented solutions, intelligent agents, business automation, agentic architecture",
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
