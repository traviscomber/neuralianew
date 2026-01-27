import { CapabilitiesGrid } from "@/components/landing/capabilities-grid"
import { CouncilVoting } from "@/components/landing/council-voting"
import { Footer } from "@/components/layout/footer"
import { MemoryOperatingSystem } from "@/components/landing/memory-operating-system"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Capacidades de N3uralia (Neuralia) | Arquitectura Multi-Agente y IA en Producción",
  description: "Descubre las capacidades de N3uralia (Neuralia): arquitecturas multi-agente, sistemas inteligentes integrados, automatización operacional y memoria contextual. Plataforma IA para Chile.",
}

const content = {
  title: "Capacidades",
  subtitle: "Lo que sabemos hacer",
  intro: "N3uralia (Neuralia) no es solo IA. Es IA + desarrollo, trabajando juntos. Aquí te mostramos cómo.",
  councilTitle: "Decisiones Inteligentes en Acción",
  councilScenario: "Múltiples expertos evaluando una decisión compleja, juntos, en tiempo real",
  ctaDecision: "Proceder con Implementación",
}

const councilAgents = [
  {
    name: "Dominio",
    role: "Analisis Empresarial",
    vote: "approve" as const,
    reasoning: "Alineado con objetivos",
    color: "#739696",
  },
  {
    name: "Logica",
    role: "Validacion Estructural",
    vote: "approve" as const,
    reasoning: "Coherencia verificada",
    color: "#739696",
  },
  {
    name: "Riesgo",
    role: "Gestion de Riesgos",
    vote: "caution" as const,
    reasoning: "Requiere validacion",
    color: "#739696",
  },
  {
    name: "Normativa",
    role: "Cumplimiento Legal",
    vote: "approve" as const,
    reasoning: "Conforme regulaciones",
    color: "#739696",
  },
  {
    name: "Rendimiento",
    role: "Optimizacion",
    vote: "approve" as const,
    reasoning: "Dentro de limites",
    color: "#739696",
  },
]

export default function CapabilitiesPage() {

  return (
    <>
      <main className="min-h-screen pt-16 bg-background">
        <section className="py-20 bg-background border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="h1-light mb-6 text-foreground">{content.title}</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-4">{content.subtitle}</p>
            <p className="body text-muted-foreground max-w-2xl mx-auto">{content.intro}</p>
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
              <h2 className="h2 text-primary mb-4">{content.councilTitle}</h2>
              <p className="body text-muted-foreground">{content.councilScenario}</p>
            </div>
            <CouncilVoting
              title={content.councilTitle}
              scenario={content.councilScenario}
              agents={councilAgents}
              decision={content.ctaDecision}
              confidence={88}
            />
          </div>
        </section>

        {/* Memory Operating System */}
        <MemoryOperatingSystem />

        <Footer />
      </main>
    </>
  )
}
