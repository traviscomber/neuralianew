import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/Section"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const isES = locale === "es"
  const title = isES ? "Sistemas Agénticos | N3uralia" : "Agentic Systems | N3uralia"
  const description = isES
    ? "Automatización gobernable con human-in-the-loop, permisos, trazabilidad y control en producción."
    : "Governed automation with human-in-the-loop, permissions, traceability, and production control."

  return {
    title,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/agentic-systems`,
      languages: {
        es: `https://n3uralia.com/es/agentic-systems`,
        en: `https://n3uralia.com/en/agentic-systems`,
      },
    },
  }
}

export default function AgenticSystemsPage({ params }: PageProps) {
  const locale = params.locale as Locale
  const d = getDict(locale)

  return (
    <>
      <main style={{ minHeight: "100vh" }}>
        <Section title={d.pillars.agenticTitle} subtitle={d.pillars.agenticDesc}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Human-in-the-Loop" : "Human-in-the-Loop"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Los humanos siempre en el control de decisiones críticas." : "Humans always in control of critical decisions."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Trazabilidad Completa" : "Full Traceability"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Auditoría y logs de cada decisión tomada." : "Audit and logs of every decision made."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Control Granular" : "Granular Control"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Permisos y políticas por agente y por operación." : "Permissions and policies per agent and operation."}
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
