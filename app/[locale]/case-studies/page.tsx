import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { CASE_STUDIES, t2 } from "@/content/caseStudies"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/Section"
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
      <Nav locale={locale} />
      <main style={{ minHeight: "100vh" }}>
        <Section title={d.caseStudies.title} subtitle={d.caseStudies.subtitle}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px", marginTop: "32px" }}>
            {CASE_STUDIES.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} locale={locale} />
            ))}
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
