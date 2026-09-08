import type { Metadata } from "next"
import Link from "next/link"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { Section } from "@/components/Section"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps { params: { locale: string } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const isES = locale === "es"
  return buildLocalizedMetadata({
    locale,
    path: "/security",
    title: isES ? "Seguridad | N3uralia" : "Security | N3uralia",
    description: isES
      ? "Principios de seguridad, acceso, trazabilidad y gobernanza para sistemas de producción de N3uralia."
      : "Security, access, traceability and governance principles for N3uralia production systems.",
  })
}

export default function SecurityPage({ params }: PageProps) {
  const locale = params.locale as Locale
  const d = getDict(locale)
  const es = locale === "es"
  const cards = es ? [
    ["Protección de datos", "Cifrado, secretos y almacenamiento se configuran según los proveedores, sensibilidad de los datos y arquitectura del proyecto."],
    ["Acceso y trazabilidad", "Roles, permisos, acciones y evidencia se diseñan para que los flujos importantes puedan revisarse y atribuirse."],
    ["Compliance por contexto", "Los requisitos regulatorios y contractuales se mapean por proyecto. No presentamos SOC 2, ISO, HIPAA u otros marcos como certificaciones propias sin verificación."],
  ] : [
    ["Data protection", "Encryption, secrets and storage are configured according to providers, data sensitivity and project architecture."],
    ["Access and traceability", "Roles, permissions, actions and evidence are designed so important workflows can be reviewed and attributed."],
    ["Context-specific compliance", "Regulatory and contractual requirements are mapped per project. We do not present SOC 2, ISO, HIPAA or similar frameworks as our own certifications without verification."],
  ]

  return (
    <main style={{ minHeight: "100vh" }}>
      <Section title={d.nav.security} subtitle={es ? "Seguridad y gobernanza basadas en arquitectura, datos y riesgo real." : "Security and governance based on architecture, data and real risk."}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
          {cards.map(([title, body]) => (
            <div key={title} style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>{title}</h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>{body}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "28px", fontSize: "14px", opacity: 0.8 }}>
          {es ? "Para nuestra política pública de evidencia, límites y controles, consulta " : "For our public policy on evidence, limits and controls, see "}
          <Link href={`/${locale}/trust`} style={{ textDecoration: "underline" }}>{es ? "Confianza y seguridad" : "Trust & security"}</Link>.
        </p>
      </Section>
    </main>
  )
}
