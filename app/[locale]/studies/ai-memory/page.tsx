import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What is AI Memory? | N3uralia Studies",
  description:
    "AI Memory is a multi-layered operating system for intelligent systems. Sensory, Working, Long-term memory and Adaptive Intelligence that enable persistent learning and evolution.",
  keywords: "ai memory, memory layers, intelligent memory, persistent learning, adaptive intelligence",
  openGraph: {
    title: "What is AI Memory? | N3uralia",
    description: "Multi-layered memory system for intelligent agents",
    type: "article",
    locale: "es_CL",
    url: "https://n3uralia.com/studies/ai-memory",
  },
}

export default function AIMemoryPage() {
  return (
    <main className="min-h-screen bg-background">
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

          <h1 className="h1-light mb-6 text-foreground">AI Memory</h1>
          <p className="body-lg text-muted-foreground">
            El sistema operativo de memoria que permite a los agentes inteligentes capturar, procesar, aprender y
            evolucionar de manera persistente.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert max-w-none">
          {/* Definition Block */}
          <div className="p-8 border border-primary/30 bg-primary/5 rounded-lg mb-12">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Definición</h2>
            <p className="text-lg text-foreground leading-relaxed">
              AI Memory es un sistema operativo de múltiples capas que permite a los agentes inteligentes capturar contexto
              inmediato, procesar información activamente, almacenar aprendizaje a largo plazo, y adaptarse continuamente
              basándose en experiencias previas.
            </p>
          </div>

          {/* Why It Matters */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Por Qué Importa</h2>
            <div className="space-y-4 text-muted-foreground body">
              <p>
                Sin memoria persistente, cada interacción es aislada. Los sistemas olvidan quién eres, qué necesitas, y qué
                ha funcionado antes.
              </p>
              <p>
                AI Memory transforma esto. Permite que un agente no solo entienda la pregunta actual, sino que recuerde tu
                contexto, aprenda de patrones pasados, y mejore constantemente.
              </p>
              <p>
                En práctica: Una plataforma que integra memoria puede detectar fraude en tiempo real porque recuerda patrones
                normales. Puede personalizar experiencias porque retiene preferencias. Puede escalar soluciones porque
                aprende de cada caso.
              </p>
            </div>
          </div>

          {/* The 4 Layers */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Las 4 Capas de Memoria</h2>
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">1</span>
                  <h3 className="h3 text-foreground">Memoria Sensorial</h3>
                </div>
                <p className="text-muted-foreground body">
                  Captura inmediata de cada interacción, contexto y evento. Ocurre en tiempo real. Es efímera pero crítica
                  para la respuesta instantánea.
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">2</span>
                  <h3 className="h3 text-foreground">Memoria Activa</h3>
                </div>
                <p className="text-muted-foreground body">
                  Procesamiento de información mientras el sistema actúa. Detecta patrones, evalúa relaciones, prepara
                  respuestas. Dura minutos a horas.
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">3</span>
                  <h3 className="h3 text-foreground">Memoria Persistente</h3>
                </div>
                <p className="text-muted-foreground body">
                  Aprendizaje codificado que persiste. Cada experiencia importante queda registrada. Durabilidad: semanas a
                  años.
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">4</span>
                  <h3 className="h3 text-foreground">Inteligencia Adaptativa</h3>
                </div>
                <p className="text-muted-foreground body">
                  Evolución constante del sistema. Se adapta a nuevos contextos sin perder aprendizajes anteriores.
                  Mejoramiento continuo.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Cómo Funciona el Ciclo</h2>
            <div className="p-8 border border-primary/20 bg-primary/5 rounded-lg">
              <div className="space-y-4 text-muted-foreground body">
                <p className="font-semibold text-foreground">1. Observa → 2. Procesa → 3. Almacena → 4. Aprende → 5. Se Adapta</p>
                <p>
                  El sistema observa un evento (Sensorial). Lo procesa en contexto (Activa). Lo codifica como aprendizaje
                  (Persistente). Lo usa en futuras decisiones (Adaptativa).
                </p>
              </div>
            </div>
          </div>

          {/* Real Applications */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Aplicaciones en N3uralia</h2>
            <div className="space-y-4">
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Persistent Intelligence Memory</h3>
                <p className="text-muted-foreground body">
                  Nuestro componente core que mantiene contexto persistente a través de toda la plataforma. Cada usuario
                  tiene su propia cadena de memoria que mejora con el tiempo.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Sistemas como EcosueloLab</h3>
                <p className="text-muted-foreground body">
                  El agente NPK recuerda historial de campos, aprende patrones estacionales, y mejora recomendaciones
                  basándose en resultados.
                </p>
              </div>
            </div>
          </div>

          {/* Related Concepts */}
          <div className="mb-16 p-8 border border-primary/20 bg-primary/5 rounded-lg">
            <h2 className="h3 text-foreground mb-4">Conceptos Relacionados</h2>
            <div className="space-y-3">
              <Link href="/studies/agentic-ai" className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">Agentic AI - Inteligencia Autónoma</span>
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
            <h3 className="h3 text-foreground mb-3">Memoria en Acción</h3>
            <p className="text-muted-foreground body mb-6">
              Explora cómo AI Memory está implementado en nuestro Memory Operating System y nuestras soluciones en
              producción.
            </p>
            <Link href="/capabilities" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Ver Capacidades
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
