import { CapabilitiesGrid } from "@/components/landing/capabilities-grid"
import { CouncilVoting } from "@/components/landing/council-voting"
import { Footer } from "@/components/layout/footer"
import { MemoryOperatingSystem } from "@/components/landing/memory-operating-system"
import { ConstellationWorkshop } from "@/components/living-agents/constellation-workshop"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Capacidades de N3uralia (Neuralia) | Arquitectura Multi-Agente y IA en Producción",
  description: "Descubre las capacidades de N3uralia (Neuralia): arquitecturas multi-agente, sistemas inteligentes integrados, automatización operacional y memoria contextual. Plataforma IA para Chile.",
}

const content = {
  title: "Capacidades",
  subtitle: "Lo que sabemos hacer",
  intro: "N3uralia no es solo IA. Es IA + desarrollo, trabajando juntos. Aquí te mostramos cómo.",
  clarification: "Nota: Living Agents = Agentic AI + Evolución Continua. Mientras que Agentic AI es la arquitectura base (autonomía, memoria, herramientas), Living Agents añaden la dimensión de personalidad emergente y aprendizaje persistente.",
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
            <p className="body text-muted-foreground max-w-2xl mx-auto mb-8">{content.intro}</p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground">{content.clarification}</p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="h2 text-foreground mb-4">5 Pilares Operacionales</h2>
              <p className="body text-muted-foreground max-w-3xl mx-auto">
                Las arquitecturas base que permiten que Living Agents trabajen dentro de tu infraestructura sin fricción.
              </p>
            </div>
            <CapabilitiesGrid />
          </div>
        </section>

        {/* Expert Council Section */}
        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="h2 text-primary mb-2">{content.councilTitle}</h2>
              <p className="body-lg text-muted-foreground mb-4">{content.councilScenario}</p>
              <p className="body text-muted-foreground">
                Múltiples perspectivas especializadas, coordinadas en tiempo real para decisiones confiables.
              </p>
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

        {/* Creative Intelligence Section */}
        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-medium text-primary uppercase tracking-wide mb-4 bg-primary/10 px-3 py-1 rounded-full">
                Inteligencia Creativa
              </span>
              <h2 className="h2 text-foreground mb-4">Agentic AI Brainstorming</h2>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-2">
                Más allá de decisiones operacionales.
              </p>
              <p className="body text-muted-foreground max-w-3xl mx-auto mb-8">
                Cuando necesitas generar breakthrough thinking, orquestamos múltiples agentes creativos colaborando simultáneamente para sintetizar visiones, explorar estrategias y definir el futuro.
              </p>
            </div>

            {/* Constellation Workshop Interactive */}
            <ConstellationWorkshop />

            {/* Learn More */}
            <div className="mt-12 p-8 border border-primary/30 bg-primary/5 rounded-lg text-center">
              <p className="body text-muted-foreground mb-6">
                Descubre cómo 4 agentes creativos pueden trabajar juntos para definir visión de marca, explorar nuevos mercados, o sintetizar estrategias de audiencia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link
                  href="/living-agents/constellation-demo"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Ver Demo Interactiva
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/studies/agentic-brainstorming"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary bg-transparent text-primary hover:bg-primary/10 rounded-lg transition-colors font-medium"
                >
                  Leer Estudio Completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
