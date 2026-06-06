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
  const title = isES ? "Infraestructura IA | N3uralia" : "AI Infrastructure | N3uralia"
  const description = isES
    ? "RAG y pipelines listos para producción: seguridad, latencia, costo y observabilidad."
    : "Production RAG and pipelines: security, latency, cost control, and observability."

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.n3uralia.com/${locale}/ai-infrastructure`,
      languages: {
        es: `https://www.n3uralia.com/es/ai-infrastructure`,
        en: `https://www.n3uralia.com/en/ai-infrastructure`,
      },
    },
  }
}

export default function AIInfrastructurePage({ params }: PageProps) {
  const locale = params.locale as Locale
  const d = getDict(locale)

  return (
    <>
      <Nav locale={locale} />
      <main style={{ minHeight: "100vh" }}>
        <Section title={d.pillars.infraTitle} subtitle={d.pillars.infraDesc}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "RAG Producción" : "Production RAG"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Recuperación y generación de contexto optimizado para latencia baja." : "Optimized retrieval and generation for low latency."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Seguridad Garantizada" : "Guaranteed Security"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Encriptación, aislamiento de datos y compliance automático." : "Encryption, data isolation, and automatic compliance."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Observabilidad Total" : "Total Observability"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Métricas, logs y trazas para cada operación." : "Metrics, logs, and traces for every operation."}
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
