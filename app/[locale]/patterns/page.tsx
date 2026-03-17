import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/Section"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const isES = locale === "es"
  const title = isES ? "Patterns | N3uralia" : "Patterns | N3uralia"
  const description = isES
    ? "Patrones de diseño y arquitectura para sistemas agénticos."
    : "Design and architecture patterns for agentic systems."

  return {
    title,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/patterns`,
      languages: {
        es: `https://n3uralia.com/es/patterns`,
        en: `https://n3uralia.com/en/patterns`,
      },
    },
  }
}

export default function PatternsPage({ params }: PageProps) {
  const locale = params.locale as Locale

  return (
    <>
      <main style={{ minHeight: "100vh" }}>
        <Section 
          title={locale === "es" ? "Patterns" : "Patterns"} 
          subtitle={locale === "es" 
            ? "Patrones de diseño y arquitectura probados para sistemas agénticos."
            : "Proven design and architecture patterns for agentic systems."}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Coordinación" : "Coordination"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Patrones para coordinar múltiples agentes." : "Patterns for coordinating multiple agents."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Comunicación" : "Communication"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Protocolos seguros y eficientes entre agentes." : "Secure and efficient protocols between agents."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Tolerancia a Fallos" : "Fault Tolerance"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Recuperación automática y consistencia." : "Automatic recovery and consistency."}
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
