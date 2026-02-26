import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/Section"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const isES = locale === "es"
  const title = isES ? "Labs | N3uralia" : "Labs | N3uralia"
  const description = isES
    ? "Laboratorio de innovación donde probamos tecnologías emergentes."
    : "Innovation lab where we test emerging technologies."

  return {
    title,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/labs`,
      languages: {
        es: `https://n3uralia.com/es/labs`,
        en: `https://n3uralia.com/en/labs`,
      },
    },
  }
}

export default function LabsPage({ params }: PageProps) {
  const locale = params.locale as Locale

  return (
    <>
      <Nav locale={locale} />
      <main style={{ minHeight: "100vh" }}>
        <Section 
          title={locale === "es" ? "Labs" : "Labs"} 
          subtitle={locale === "es" 
            ? "Laboratorio de innovación donde probamos y validamos tecnologías emergentes."
            : "Innovation lab where we test and validate emerging technologies."}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Investigación" : "Research"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Exploramos nuevas técnicas en IA y sistemas distribuidos." : "We explore new techniques in AI and distributed systems."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Prototipado" : "Prototyping"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Validamos ideas antes de llevarlas a producción." : "We validate ideas before bringing them to production."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Colaboración" : "Collaboration"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Trabajamos con universidades y centros de investigación." : "We work with universities and research centers."}
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
