import { ConstellationWorkshop } from "@/components/living-agents/constellation-workshop"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Constellation Workshop Demo | N3uralia",
  description:
    "Experimente cómo múltiples agentes creativos colaboran para generar ideas, sintetizar perspectivas y producir pensamiento innovador.",
}

export default function ConstellationDemoPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Capacidades
          </Link>

          <h1 className="h1-light mb-6 text-foreground">Constellation Workshop</h1>
          <p className="body-lg text-muted-foreground max-w-3xl">
            Visualización interactiva de cómo 4 agentes creativos colaboran simultáneamente para generar ideas, evaluarlas y sintetizarlas en insights accionables.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ConstellationWorkshop />
        </div>
      </section>

      {/* Explanation */}
      <section className="py-16 px-4 bg-primary/5 border-t border-border">
        <div className="max-w-3xl mx-auto prose prose-invert max-w-none">
          <h2 className="h2 text-foreground mb-6">Cómo Usar Este Workshop</h2>

          <div className="space-y-6">
            <div>
              <h3 className="h3 text-foreground mb-2">Paso 1: Elige un Workflow</h3>
              <p className="text-muted-foreground body">
                Selecciona qué tipo de ideación necesitas:
              </p>
              <ul className="list-disc list-inside text-muted-foreground body space-y-2 mt-3">
                <li><strong>World-Building:</strong> Explorar nuevos mercados o futuros posibles</li>
                <li><strong>Brand Vision:</strong> Definir identidad y posicionamiento de marca</li>
                <li><strong>Audience Signals:</strong> Entender audiencia y generar estrategia de conexión</li>
              </ul>
            </div>

            <div>
              <h3 className="h3 text-foreground mb-2">Paso 2: Presiona Reproducir</h3>
              <p className="text-muted-foreground body">
                Observa cómo cada agente entra en acción secuencialmente. Cada uno aporta su perspectiva especializada:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="p-4 bg-card border border-border rounded">
                  <p className="text-sm"><strong className="text-primary">🎯 Creative Oracle</strong></p>
                  <p className="text-xs text-muted-foreground mt-2">Genera posibilidades sin restricciones</p>
                </div>
                <div className="p-4 bg-card border border-border rounded">
                  <p className="text-sm"><strong className="text-primary">🔍 Analytic Critic</strong></p>
                  <p className="text-xs text-muted-foreground mt-2">Evalúa con rigor y detecta limitaciones</p>
                </div>
                <div className="p-4 bg-card border border-border rounded">
                  <p className="text-sm"><strong className="text-primary">📖 Narrative Synthesizer</strong></p>
                  <p className="text-xs text-muted-foreground mt-2">Crea narrativas coherentes</p>
                </div>
                <div className="p-4 bg-card border border-border rounded">
                  <p className="text-sm"><strong className="text-primary">🌍 Context Keeper</strong></p>
                  <p className="text-xs text-muted-foreground mt-2">Asegura viabilidad operacional</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="h3 text-foreground mb-2">Paso 3: Revisa el Resultado</h3>
              <p className="text-muted-foreground body">
                Al finalizar, cada workflow produce un resultado concreto. Este resultado queda capturado en memoria persistente para futuros ciclos de ideación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2 text-foreground mb-6">¿Listo para usar esto en tu empresa?</h2>
          <p className="body text-muted-foreground mb-8">
            Este es un ejemplo de cómo N3uralia orquesta múltiples agentes para generar pensamiento innovador. En producción, el sistema es completamente customizable para tu dominio, audiencia y objetivos.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Hablar con Equipo
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
