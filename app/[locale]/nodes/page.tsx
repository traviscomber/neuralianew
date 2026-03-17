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
  const title = isES ? "Nodes | N3uralia" : "Nodes | N3uralia"
  const description = isES
    ? "Nodos especializados que forman parte de la red de agentes."
    : "Specialized nodes that are part of the agent network."

  return {
    title,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/nodes`,
      languages: {
        es: `https://n3uralia.com/es/nodes`,
        en: `https://n3uralia.com/en/nodes`,
      },
    },
  }
}

export default function NodesPage({ params }: PageProps) {
  const locale = params.locale as Locale

  return (
    <>
      <main style={{ minHeight: "100vh" }}>
        <Section 
          title={locale === "es" ? "Nodes" : "Nodes"} 
          subtitle={locale === "es" 
            ? "Nodos especializados que forman parte de la red de agentes distribuida."
            : "Specialized nodes that are part of the distributed agent network."}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Especializados" : "Specialized"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Cada nodo optimizado para una tarea específica." : "Each node optimized for a specific task."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Escalables" : "Scalable"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Crece dinámicamente según demanda." : "Scales dynamically based on demand."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Resilientes" : "Resilient"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Tolerante a fallos y auto-recuperación." : "Fault-tolerant and self-healing."}
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
