import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/Section"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
  const isES = locale === "es"

  // Safety checks
  if (!d) {
    return (
      <>
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-red-500">Error loading page content</p>
        </main>
        <Footer locale={locale} />
      </>
    )
  }

  const pillarContent = d.pillars || {}
  const content = d.agenticEngineering || {}
  const aboutValues = d.about?.values || []

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 border-t border-border bg-background">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              {pillarContent.agenticTitle || "Agentic Systems"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
              {pillarContent.agenticDesc || "Governed automation systems"}
            </p>
          </div>
        </section>

        {/* Core Features Grid */}
        <Section title={isES ? "Características Clave" : "Core Features"}>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: isES ? "Human-in-the-Loop" : "Human-in-the-Loop",
                description: isES
                  ? "Los humanos siempre en el control de decisiones críticas."
                  : "Humans always in control of critical decisions.",
              },
              {
                title: isES ? "Trazabilidad Completa" : "Full Traceability",
                description: isES
                  ? "Auditoría y logs de cada decisión tomada."
                  : "Audit and logs of every decision made.",
              },
              {
                title: isES ? "Control Granular" : "Granular Control",
                description: isES
                  ? "Permisos y políticas por agente y por operación."
                  : "Permissions and policies per agent and operation.",
              },
              {
                title: isES ? "Integración Nativa" : "Native Integration",
                description: isES
                  ? "Se conecta con tu stack empresarial existente."
                  : "Connects with your existing enterprise stack.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary rounded-sm" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Engineering Manifesto */}
        <Section
          title={isES ? "Ingeniería Agentica" : "Agentic Engineering"}
          subtitle={content.subheadline}
        >
          <div className="bg-card border border-border/50 rounded-lg p-8 mt-8">
            <h3 className="text-lg font-bold text-foreground mb-6">
              {isES ? "Nuestro Manifiesto" : "Our Manifesto"}
            </h3>
            <div className="space-y-4">
              {Array.isArray(content.manifesto) && content.manifesto.length > 0 ? (
                content.manifesto.map((statement, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 pb-4 border-b border-border/30 last:border-b-0 last:pb-0"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-base text-foreground leading-relaxed">
                      {statement}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">{isES ? "Sin datos" : "No data"}</p>
              )}
            </div>
          </div>
        </Section>

        {/* Engineering Principles */}
        {Array.isArray(content.philosophy) && content.philosophy.length > 0 && (
          <Section title={isES ? "Cómo Pensamos Diferente" : "How We Think Different"}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.philosophy.map((principle, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
                >
                  <h3 className="text-base font-bold text-primary mb-3">
                    {principle.num}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Our Values */}
        {Array.isArray(aboutValues) && aboutValues.length > 0 && (
          <Section title={isES ? "Nuestros Valores" : "Our Values"}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutValues.map((value, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 border-t border-border bg-background">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {d.about?.closing || (isES ? "Sistemas agenticos para tu empresa" : "Agentic systems for your enterprise")}
            </p>
            <Link
              href={`/${locale}/`}
              className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {isES ? "Volver al inicio" : "Back to home"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
