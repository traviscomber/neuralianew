import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { CASE_STUDIES } from "@/content/caseStudies"
import { Footer } from "@/components/Footer"
import { CaseStudyCard } from "@/components/CaseStudyCard"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const d = getDict(locale)

  return {
    title: `${d.caseStudies.title} | N3uralia`,
    description: d.caseStudies.subtitle,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/case-studies`,
      languages: {
        es: `https://n3uralia.com/es/case-studies`,
        en: `https://n3uralia.com/en/case-studies`,
      },
    },
  }
}

export default function CaseStudiesPage({ params }: PageProps) {
  const locale = params.locale as Locale
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
