import type { Metadata } from "next"
import Link from "next/link"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/Section"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale as Locale
  const isES = locale === "es"
  const title = isES ? "Infraestructura de IA en producción | N3uralia" : "Production AI infrastructure | N3uralia"
  const description = isES
    ? "RAG y pipelines listos para producción: seguridad, latencia, costo y observabilidad."
    : "Production RAG and pipelines: security, latency, cost control, and observability."

  return buildLocalizedMetadata({
    locale,
    path: "/ai-infrastructure",
    title,
    description,
  })
}

export default async function AIInfrastructurePage(props: PageProps) {
  const params = await props.params;
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
                {locale === "es" ? "Controles de seguridad" : "Security controls"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Cifrado, aislamiento de datos, permisos y controles auditables definidos según el proyecto." : "Encryption, data isolation, permissions and auditable controls defined for the project."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Observabilidad y trazas" : "Observability and traces"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Métricas, logs y trazas para cada operación." : "Metrics, logs, and traces for every operation."}
              </p>
            </div>
          </div>
        </Section>
        <section style={{ padding: "48px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link href={`/${locale}/platform`}>{locale === "es" ? "Plataforma" : "Platform"}</Link>
            <Link href={`/${locale}/${locale === "es" ? "soluciones" : "solutions"}`}>{locale === "es" ? "Soluciones" : "Solutions"}</Link>
            <Link href={`/${locale}/${locale === "es" ? "proyectos" : "projects"}`}>{locale === "es" ? "Proyectos" : "Projects"}</Link>
            <Link href={`/${locale}/diagnostico`}>{locale === "es" ? "Diagnóstico" : "Diagnosis"}</Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
