import type { Metadata } from "next"
import Link from "next/link"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { getCaseStudy, t2 } from "@/content/caseStudies"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/Section"

interface PageProps {
  params: { locale: string; slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const caseStudy = getCaseStudy(params.slug)

  if (!caseStudy) {
    return {
      title: "Not Found",
      description: "Case study not found",
    }
  }

  const title = t2(locale, caseStudy.title)
  const description = t2(locale, caseStudy.summary)

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
  const locale = params.locale as Locale
  const d = getDict(locale)
  const caseStudy = getCaseStudy(params.slug)

  if (!caseStudy) {
    return (
      <>
        <Nav locale={locale} />
        <main style={{ minHeight: "100vh", padding: "80px 20px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: "32px", fontWeight: 700, margin: "0 0 16px 0" }}>
              {locale === "es" ? "No encontrado" : "Not found"}
            </h1>
            <p style={{ opacity: 0.7, marginBottom: "24px" }}>
              {locale === "es" ? "El caso de éxito que buscas no existe." : "The case study you're looking for doesn't exist."}
            </p>
            <Link href={`/${locale}/case-studies`} style={{ color: "#fff", textDecoration: "underline" }}>
              {locale === "es" ? "Volver a Casos de Éxito" : "Back to Case Studies"}
            </Link>
          </div>
        </main>
        <Footer locale={locale} />
      </>
    )
  }

  return (
    <>
      <Nav locale={locale} />
      <main style={{ minHeight: "100vh" }}>
        {/* Hero */}
        <div style={{ padding: "80px 20px 40px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
            <Link 
              href={`/${locale}/case-studies`} 
              style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "14px", marginBottom: "16px", display: "block" }}
            >
              {d.caseStudies.back}
            </Link>
            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontSize: "12px", opacity: 0.6 }}>{t2(locale, caseStudy.verticalTag)}</span>
            </div>
            <h1 style={{ fontSize: "48px", fontWeight: 700, margin: "0 0 16px 0", lineHeight: 1.2 }}>
              {t2(locale, caseStudy.title)}
            </h1>
            <p style={{ fontSize: "18px", opacity: 0.85, margin: 0, lineHeight: 1.6 }}>
              {t2(locale, caseStudy.summary)}
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div style={{ padding: "40px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
              {caseStudy.highlights.map((h) => (
                <div key={h.label.es} style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
                  <div style={{ fontSize: "12px", opacity: 0.6, marginBottom: "8px" }}>
                    {t2(locale, h.label)}
                  </div>
                  <div style={{ fontSize: "24px", fontWeight: 700 }}>
                    {t2(locale, h.value)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div style={{ padding: "40px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
              <div>
                <div style={{ fontSize: "12px", opacity: 0.6, marginBottom: "8px" }}>{d.caseStudies.industry}</div>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>{t2(locale, caseStudy.industry)}</div>
              </div>
              <div>
                <div style={{ fontSize: "12px", opacity: 0.6, marginBottom: "8px" }}>{d.caseStudies.status}</div>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>{t2(locale, caseStudy.status)}</div>
              </div>
              <div>
                <div style={{ fontSize: "12px", opacity: 0.6, marginBottom: "8px" }}>{d.caseStudies.implementation}</div>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>{t2(locale, caseStudy.implementation)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        {caseStudy.sections.map((section, idx) => (
          <Section key={section.id} title={t2(locale, section.heading)}>
            <p style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: "16px" }}>
              {t2(locale, section.body)}
            </p>
            {section.bullets && section.bullets.length > 0 && (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.bullets.map((bullet, bidx) => (
                  <li key={bidx} style={{ display: "flex", gap: "12px", marginBottom: "12px", opacity: 0.8 }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>•</span>
                    <span>{t2(locale, bullet)}</span>
                  </li>
                ))}
              </ul>
            )}
          </Section>
        ))}

        {/* Stack */}
        <Section title={locale === "es" ? "Stack Técnico" : "Tech Stack"}>
          <p style={{ opacity: 0.8, fontFamily: "monospace", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
            {t2(locale, caseStudy.stackLine)}
          </p>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
