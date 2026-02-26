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

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">
                        {isES ? "Desafío" : "Challenge"}
                      </p>
                      <p className="text-sm">
                        {isES ? study.challengeES : study.challengeEN}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">
                        {isES ? "Solución" : "Solution"}
                      </p>
                      <p className="text-sm">
                        {isES ? study.solutionES : study.solutionEN}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-3">
                        {isES ? "Resultados" : "Results"}
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center">
                            <p className="font-bold text-lg text-primary">{result.metric}</p>
                            <p className="text-xs text-muted-foreground">
                              {isES ? result.labelES : result.labelEN}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      {(isES ? study.tagsES : study.tagsEN).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    {isES ? "Ver caso completo" : "View full case"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
