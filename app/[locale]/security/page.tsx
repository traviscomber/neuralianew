import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/Section"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const isES = locale === "es"
  const title = isES ? "Seguridad | N3uralia" : "Security | N3uralia"
  const description = isES
    ? "Seguridad y gobernanza en sistemas agénticos de producción."
    : "Security and governance in production agentic systems."

  return {
    title,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/security`,
      languages: {
        es: `https://n3uralia.com/es/security`,
        en: `https://n3uralia.com/en/security`,
      },
    },
  }
}

export default function SecurityPage({ params }: PageProps) {
  const locale = params.locale as Locale
  const d = getDict(locale)
  const readingGuide = [
    {
      title: locale === "es" ? "Qué protegemos" : "What we protect",
      description:
        locale === "es"
          ? "Datos, acciones y decisiones."
          : "Data, actions, and decisions need traceability and control.",
    },
    {
      title: locale === "es" ? "Cómo se audita" : "How it is audited",
      description:
        locale === "es"
          ? "Los logs y permisos deben hacer visible lo que pasó en producción."
          : "Logs and permissions must make production behavior visible.",
    },
    {
      title: locale === "es" ? "Cómo se gobierna" : "How it is governed",
      description:
        locale === "es"
          ? "Cada acción crítica necesita límites, contexto y menos dependencia humana."
          : "Every critical action needs limits, context, and less human dependency.",
    },
  ]

  return (
    <>
      <main style={{ minHeight: "100vh" }}>
        <Section 
          title={d.nav.security} 
          subtitle={locale === "es" 
            ? "Seguridad y gobernanza en sistemas agénticos de producción."
            : "Security and governance in production agentic systems."}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "24px" }}>
            {readingGuide.map((item) => (
              <div key={item.title} style={{ padding: "18px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", background: "rgba(255,255,255,0.03)" }}>
                <div style={{ fontSize: "12px", opacity: 0.6, marginBottom: "8px" }}>
                  {locale === "es" ? "Guía rápida" : "Quick guide"}
                </div>
                <div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>{item.title}</div>
                <div style={{ fontSize: "14px", lineHeight: 1.6, opacity: 0.85 }}>{item.description}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Encriptación" : "Encryption"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Datos en tránsito y en reposo completamente encriptados." : "Data in transit and at rest fully encrypted."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Auditoría" : "Audit"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Logs inmutables de todas las acciones." : "Immutable logs of all actions."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Compliance" : "Compliance"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "GDPR, HIPAA, SOC2 y más." : "GDPR, HIPAA, SOC2 and more."}
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
