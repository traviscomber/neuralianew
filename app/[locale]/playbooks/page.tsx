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
  const title = isES ? "Playbooks | N3uralia" : "Playbooks | N3uralia"
  const description = isES
    ? "Estrategias y guías probadas para implementar sistemas agénticos."
    : "Proven strategies and guides for implementing agentic systems."

  return {
    title,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/playbooks`,
      languages: {
        es: `https://n3uralia.com/es/playbooks`,
        en: `https://n3uralia.com/en/playbooks`,
      },
    },
  }
}

export default function PlaybooksPage({ params }: PageProps) {
  const locale = params.locale as Locale
  const readingGuide = [
    {
      title: locale === "es" ? "Cómo leer" : "How to read",
      description:
        locale === "es"
          ? "Empieza por el modelo, luego mira los casos y cierra con prácticas."
          : "Start with the model, then review cases, and finish with practices.",
    },
    {
      title: locale === "es" ? "Qué aplicar" : "What to apply",
      description:
        locale === "es"
          ? "Busca la parte de implementación que más se parece a tu operación."
          : "Look for the implementation part that most resembles your operation.",
    },
    {
      title: locale === "es" ? "Qué validar" : "What to validate",
      description:
        locale === "es"
          ? "Cada playbook debe terminar en una métrica, un hito o una decisión."
          : "Each playbook should end in a metric, milestone, or decision.",
    },
  ]

  return (
    <>
      <main style={{ minHeight: "100vh" }}>
        <Section 
          title={locale === "es" ? "Playbooks" : "Playbooks"} 
          subtitle={locale === "es" 
            ? "Estrategias y guías probadas para implementar sistemas agénticos en tu operación."
            : "Proven strategies and guides for implementing agentic systems in your operations."}
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
                {locale === "es" ? "Modelo de Implementación" : "Implementation Model"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Fases, hitos y métricas de éxito." : "Phases, milestones, and success metrics."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Casos de Uso" : "Use Cases"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Patrones validados en producción real." : "Patterns validated in production environments."}
              </p>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
                {locale === "es" ? "Mejores Prácticas" : "Best Practices"}
              </h3>
              <p style={{ opacity: 0.8, margin: 0, fontSize: "14px" }}>
                {locale === "es" ? "Recomendaciones de la industria." : "Industry recommendations."}
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
