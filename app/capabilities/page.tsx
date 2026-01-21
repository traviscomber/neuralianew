"use client"
import { CapabilitiesGrid } from "@/components/landing/capabilities-grid"
import { CouncilVoting } from "@/components/landing/council-voting"
import { Footer } from "@/components/layout/footer"
import { useState } from "react"

export default function CapabilitiesPage() {
  const [language] = useState("es")

  const content = {
    en: {
      title: "Capacidades",
      subtitle: "Lo que sabemos hacer",
      intro: "N3uralia no es solo IA. Es IA + desarrollo, trabajando juntos. Aquí te mostramos cómo.",
      councilTitle: "Decisiones Inteligentes en Acción",
      councilScenario: "Múltiples expertos evaluando una decisión compleja, juntos, en tiempo real",
    },
    es: {
      title: "Capacidades",
      subtitle: "Lo que sabemos hacer",
      intro: "N3uralia no es solo IA. Es IA + desarrollo, trabajando juntos. Aquí te mostramos cómo.",
      councilTitle: "Decisiones Inteligentes en Acción",
      councilScenario: "Múltiples expertos evaluando una decisión compleja, juntos, en tiempo real",
    },
  }

  const t = content[language]

  const councilAgents = [
    {
      name: "Domain",
      role: "Análisis Empresarial",
      vote: "approve" as const,
      reasoning: "Alineado con objetivos",
      color: "#739696",
    },
    {
      name: "Logic",
      role: "Validación Lógica",
      vote: "approve" as const,
      reasoning: "Coherencia verificada",
      color: "#739696",
    },
    {
      name: "Risk",
      role: "Gestión de Riesgos",
      vote: "caution" as const,
      reasoning: "Requiere validación",
      color: "#739696",
    },
    {
      name: "Compliance",
      role: "Normativas",
      vote: "approve" as const,
      reasoning: "Conforme regulaciones",
      color: "#739696",
    },
    {
      name: "Performance",
      role: "Optimización",
      vote: "approve" as const,
      reasoning: "Dentro de límites",
      color: "#739696",
    },
  ]

  return (
    <>
      <main className="min-h-screen pt-16 bg-background">
        <section className="py-20 bg-background border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="h1-light mb-6 text-foreground">{t.title}</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-4">{t.subtitle}</p>
            <p className="body text-muted-foreground max-w-2xl mx-auto">{t.intro}</p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <CapabilitiesGrid />
          </div>
        </section>

        {/* Expert Council Section */}
        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="h2 text-primary mb-4">{t.councilTitle}</h2>
              <p className="body text-muted-foreground">{t.councilScenario}</p>
            </div>
            <CouncilVoting
              title={t.councilTitle}
              scenario={t.councilScenario}
              agents={councilAgents}
              decision={language === "es" ? "Proceder con Implementación" : "Proceed with Implementation"}
              confidence={88}
            />
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
