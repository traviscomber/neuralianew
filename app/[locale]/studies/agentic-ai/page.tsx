import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What is Agentic AI? | N3uralia Studies",
  description:
    "Agentic AI is an architecture where autonomous agents plan, act, evaluate outcomes, and adapt using memory and tools. Complete explanation with real-world applications.",
  keywords: "agentic ai, autonomous agents, agent architecture, intelligent systems, ai decision making",
  openGraph: {
    title: "What is Agentic AI? | N3uralia",
    description: "Autonomous agents that plan, act, and adapt with memory and tools",
    type: "article",
    locale: "es_CL",
    url: "https://n3uralia.com/studies/agentic-ai",
  },
}

export default function AgenticAIPage() {
  return (
    <main className="min-h-screen bg-background">
      <SectionBackground section="blog" className="border-b border-border">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/studies"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Estudios
          </Link>

          <span className="inline-block text-xs font-medium text-primary uppercase tracking-wide mb-4 bg-primary/10 px-3 py-1 rounded-full">
            Concepto Fundamental
          </span>

          <h1 className="h1-light mb-6 text-foreground">Agentic AI</h1>
          <p className="body-lg text-muted-foreground">
            La arquitectura fundamental de sistemas que pueden operar autónomamente con inteligencia, memoria y
            capacidad de adaptación.
          </p>
        </div>
      </section>
      </SectionBackground>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert max-w-none">
          {/* Definition Block */}
          <div className="p-8 border border-primary/30 bg-primary/5 rounded-lg mb-12">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Definición</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Agentic AI es una arquitectura de sistema donde agentes autónomos operan con objetivos claros, acceso a
              memoria persistente, herramientas para actuar, y retroalimentación para evaluar y adaptar sus decisiones
              sin intervención humana constante.
            </p>
          </div>

          {/* Why It Matters */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Por Qué Importa</h2>
            <div className="space-y-4 text-muted-foreground body">
              <p>
                Agentic AI transforma la relación entre humanos y sistemas. Cambia desde "ejecutar una tarea específica"
                hacia "lograr un objetivo con autonomía".
              </p>
              <p>
                En empresas reales, esto significa reducir ciclos de toma de decisión, escalar operaciones sin proporcional
                aumento de personal, y permitir que sistemas comprendan contextos complejos para actuar de manera
                inteligente.
              </p>
              <p>
                Ejemplo real: En lugar de pedirle a un sistema "envía este email", un agente Agentic AI entiende "necesito
                comunicarme con clientes que cumplan X condiciones", evalúa cuál es el mejor canal, redacta mensajes
                personalizados, evalúa respuestas y ajusta la estrategia.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Cómo Funciona</h2>
            <div className="space-y-6">
              <div className="pl-6 border-l-2 border-primary/30">
                <h3 className="h3 text-primary font-semibold mb-2">1. Objetivo Claro</h3>
                <p className="text-muted-foreground body">El agente recibe un objetivo específico con contexto y limitaciones.</p>
              </div>
              <div className="pl-6 border-l-2 border-primary/30">
                <h3 className="h3 text-primary font-semibold mb-2">2. Planificación</h3>
                <p className="text-muted-foreground body">El agente desglosa el objetivo en pasos, utilizando su memoria y conocimiento.</p>
              </div>
              <div className="pl-6 border-l-2 border-primary/30">
                <h3 className="h3 text-primary font-semibold mb-2">3. Ejecución</h3>
                <p className="text-muted-foreground body">Actúa usando herramientas disponibles (APIs, bases de datos, modelos).</p>
              </div>
              <div className="pl-6 border-l-2 border-primary/30">
                <h3 className="h3 text-primary font-semibold mb-2">4. Observación</h3>
                <p className="text-muted-foreground body">Evalúa los resultados contra el objetivo inicial.</p>
              </div>
              <div className="pl-6 border-l-2 border-primary/30">
                <h3 className="h3 text-primary font-semibold mb-2">5. Adaptación</h3>
                <p className="text-muted-foreground body">Si es necesario, ajusta el plan o estrategia para lograr el objetivo.</p>
              </div>
            </div>
          </div>

          {/* Real Use Cases */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Casos de Uso Reales</h2>
            <div className="space-y-4">
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Optimización Industrial</h3>
                <p className="text-muted-foreground body">
                  Mermasapp usa agentes para monitorear líneas de producción en plantas alimentarias, detectar
                  desperdicios, ajustar parámetros y reportar anomalías sin intervención manual.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Análisis Agrícola</h3>
                <p className="text-muted-foreground body">
                  EcosueloLab implementa agentes conversacionales que interpretan datos NPK de campos, hacen
                  recomendaciones de fertilización y adaptan estrategias según condiciones.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Gestión de Campos Productivos</h3>
                <p className="text-muted-foreground body">
                  Blackswan Facility Core orquesta agentes que gestionan recursos, predicen rendimientos y optimizan
                  operaciones en campos productivos a escala.
                </p>
              </div>
            </div>
          </div>

          {/* Related Concepts */}
          <div className="mb-16 p-8 border border-primary/20 bg-primary/5 rounded-lg">
            <h2 className="h3 text-foreground mb-4">Conceptos Relacionados</h2>
            <div className="space-y-3">
              <Link href="/studies/ai-memory" className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">AI Memory - Sistema Operativo de Memoria</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link href="/studies/context-engineering" className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">Context Engineering - Ingeniería del Contexto</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link href="/studies/world-engine" className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">World Engine - Motor de Mundo</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 border border-border rounded-lg bg-card">
            <h3 className="h3 text-foreground mb-3">Implementación en N3uralia</h3>
            <p className="text-muted-foreground body mb-6">
              Agentic AI es el corazón de nuestra arquitectura Multi-Agente. Nuestro Consejo de Expertos demuestra cómo
              múltiples agentes pueden colaborar para tomar decisiones complejas.
            </p>
            <Link href="/capabilities" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Ver Arquitectura en Acción
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
