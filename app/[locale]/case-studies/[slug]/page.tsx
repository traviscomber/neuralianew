import type { Metadata } from "next"
import Link from "next/link"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { getCaseStudy, t2 } from "@/content/caseStudies"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/Section"

interface PageProps {
  params: { locale: string; slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const caseStudy = getCaseStudy(params.slug)

  if (!caseStudy) {
    return {
      title: "Not Found",
      description: "Case study not found",
    }
  }

  const title = t2(locale as Locale, caseStudy.title)
  const description = t2(locale as Locale, caseStudy.summary)

  return {
    title: `${title} | N3uralia`,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/case-studies/${params.slug}`,
      languages: {
        es: `https://n3uralia.com/es/case-studies/${params.slug}`,
        en: `https://n3uralia.com/en/case-studies/${params.slug}`,
      },
    },
  }
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const d = getDict(locale)
  const caseStudy = getCaseStudy(params.slug)

  if (!caseStudy) {
    return (
      <>
        <main className="min-h-screen pt-24 px-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {locale === "es" ? "No encontrado" : "Not found"}
            </h1>
            <p className="text-muted-foreground mb-8">
              {locale === "es" ? "El caso de éxito que buscas no existe." : "The case study you're looking for doesn't exist."}
            </p>
            <Link href={`/${locale}/case-studies`} className="text-primary hover:underline">
              {locale === "es" ? "Volver a Casos de Éxito" : "Back to Case Studies"}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Hero */}
        <div className="border-b border-border pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href={`/${locale}/case-studies`} 
              className="text-muted-foreground hover:text-foreground text-sm mb-4 inline-block transition-colors"
            >
              {d.caseStudies.back}
            </Link>
            <div className="mb-4">
              <span className="text-xs text-muted-foreground">{t2(locale, caseStudy.verticalTag)}</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4">
              {t2(locale, caseStudy.title)}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t2(locale, caseStudy.summary)}
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="border-b border-border py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.highlights.map((h) => (
                <div key={h.label.es} className="p-6 border border-border rounded-lg bg-card">
                  <div className="text-xs text-muted-foreground mb-2">
                    {t2(locale, h.label)}
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {t2(locale, h.value)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="border-b border-border py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-muted-foreground mb-2">{d.caseStudies.industry}</div>
                <div className="text-lg font-semibold text-foreground">{t2(locale, caseStudy.industry)}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-2">{d.caseStudies.status}</div>
                <div className="text-lg font-semibold text-foreground">{t2(locale, caseStudy.status)}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-2">{d.caseStudies.implementation}</div>
                <div className="text-lg font-semibold text-foreground">{t2(locale, caseStudy.implementation)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        {caseStudy.sections.map((section) => (
          <Section key={section.id} title={t2(locale, section.heading)}>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t2(locale, section.body)}
            </p>
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-none space-y-3">
                {section.bullets.map((bullet, bidx) => (
                  <li key={bidx} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{t2(locale, bullet)}</span>
                  </li>
                ))}
              </ul>
            )}
          </Section>
        ))}

        {/* Stack */}
        <Section title={locale === "es" ? "Stack Técnico" : "Tech Stack"}>
          <div className="mb-6 p-4 bg-muted/30 border border-border rounded-lg">
            <p className="text-sm text-foreground font-semibold mb-2">
              {locale === "es" ? "Proyecto" : "Project"}
            </p>
            <p className="text-lg font-bold text-primary">
              {t2(locale, caseStudy.title)}
            </p>
          </div>

          <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8">
            {t2(locale, caseStudy.stackLine)}
          </p>
          
          {/* Tech Stack Badges */}
          {caseStudy.techLogos && caseStudy.techLogos.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {locale === "es" ? "Tecnologías Utilizadas" : "Technologies Used"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techLogos.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all"
                  >
                    <span className="text-xs font-medium text-primary">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </>
  )
}
