import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/Section"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const isES = locale === "es"
  const title = isES ? "Plataforma | N3uralia" : "Platform | N3uralia"
  const description = isES
    ? "La arquitectura central que coordina agentes especializados e integra tu stack existente."
    : "The central architecture that coordinates specialized agents and integrates your existing stack."

  return {
    title,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/platform`,
      languages: {
        es: `https://n3uralia.com/es/platform`,
        en: `https://n3uralia.com/en/platform`,
      },
    },
  }
}

export default function PlatformPage({ params }: PageProps) {
  const locale = params.locale as Locale
  const d = getDict(locale)

  return (
    <>
      <Nav locale={locale} />
      <main style={{ minHeight: "100vh" }}>
        <Section title={d.pillars.platformTitle} subtitle={d.pillars.platformDesc}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Orquestación Central" : "Central Orchestration"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Un orquestador que coordina múltiples agentes especializados." : "An orchestrator that coordinates multiple specialized agents."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Integración Sin Fricción" : "Seamless Integration"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Conecta con tu stack existente sin disrupciones." : "Connect with your existing stack without disruption."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Escalabilidad Real" : "Real Scalability"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Escala desde hoy hacia millones de transacciones." : "Scale from today to millions of transactions."}
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
