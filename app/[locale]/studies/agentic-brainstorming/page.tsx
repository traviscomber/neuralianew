import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: "/studies/agentic-brainstorming",
    type: "article",
    title: "Agentic AI Brainstorming | N3uralia Studies",
    description: "Creative intelligence meets agentic systems. Multiple creative agents collaborate to brainstorm, synthesize ideas, and generate breakthrough thinking. Powered by persistent memory and constellation workflows.",
  })
}

export default function AgenticBrainstormingPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${locale}/studies`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Estudios
          </Link>

          <span className="inline-block text-xs font-medium text-primary uppercase tracking-wide mb-4 bg-primary/10 px-3 py-1 rounded-full">
            Inteligencia Creativa
          </span>

          <h1 className="h1-light mb-6 text-foreground">Agentic AI Brainstorming</h1>
          <p className="body-lg text-muted-foreground">
            Cómo múltiples agentes creativos pueden colaborar para generar ideas, sintetizar perspectivas y producir pensamiento de ruptura.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert max-w-none">
          {/* Definition Block */}
          <div className="p-8 border border-primary/30 bg-primary/5 rounded-lg mb-12">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Concepto Clave</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Agentic AI Brainstorming es un sistema donde múltiples agentes especializados colaboran simultáneamente para explorar un desafío. Cada agente aporta una perspectiva única, evalúa ideas, detecta limitaciones y genera síntesis creativas usando memoria persistente.
            </p>
          </div>

          {/* The Four Creative Agents */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-8">Los Cuatro Agentes Creativos</h2>
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="h3 text-foreground mb-2">Creative Oracle</h3>
                    <p className="text-sm text-primary font-medium mb-3">Rol: Generador de Posibilidades</p>
                    <p className="text-muted-foreground body">
                      Genera ideas sin restricciones. Su función es explorar el espacio de posibilidades completo, conectar conceptos inesperados y proponer soluciones radicales. No juzga viabilidad; expande horizonte.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="h3 text-foreground mb-2">Analytic Critic</h3>
                    <p className="text-sm text-primary font-medium mb-3">Rol: Evaluador Crítico</p>
                    <p className="text-muted-foreground body">
                      Examina cada idea con rigor. Identifica fortalezas, debilidades, supuestos ocultos y riesgos. Su retroalimentación refina ideas y prepara el terreno para síntesis más inteligentes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">📖</span>
                  </div>
                  <div>
                    <h3 className="h3 text-foreground mb-2">Narrative Synthesizer</h3>
                    <p className="text-sm text-primary font-medium mb-3">Rol: Tejedor de Historias</p>
                    <p className="text-muted-foreground body">
                      Toma ideas fragmentadas y crea narrativas coherentes. Identifica conexiones, construye lógica compartida y produce historias que hacen que ideas complejas sean accesibles y memorables.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">🌍</span>
                  </div>
                  <div>
                    <h3 className="h3 text-foreground mb-2">Context Keeper</h3>
                    <p className="text-sm text-primary font-medium mb-3">Rol: Guardián del Contexto</p>
                    <p className="text-muted-foreground body">
                      Mantiene memoria de restricciones, audiencia, objetivos y aprendizajes previos. Asegura que la brainstorm no pierda relevancia y que cada idea se sitúa en realidad operacional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-8">Cómo Funciona: Tres Constellation Workflows</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="h3 text-foreground mb-3">Constellation 1: World-Building Brainstorm</h3>
                <p className="text-muted-foreground body mb-4">
                  Para explorar nuevos mercados, productos o narrativas.
                </p>
                <div className="bg-card p-4 rounded border border-border text-sm space-y-3">
                  <p><strong className="text-primary">Fase 1:</strong> Creative Oracle genera 20 escenarios alternativos del futuro.</p>
                  <p><strong className="text-primary">Fase 2:</strong> Analytic Critic evalúa viabilidad, riesgos y oportunidades en cada escenario.</p>
                  <p><strong className="text-primary">Fase 3:</strong> Narrative Synthesizer teje los 3 escenarios más prometedores en historias coherentes.</p>
                  <p><strong className="text-primary">Fase 4:</strong> Context Keeper asegura que todas las ideas respeten restricciones reales (presupuesto, regulación, tiempo).</p>
                  <p><strong className="text-primary">Resultado:</strong> Panorama de futuros posibles, con rutas claras y trade-offs transparentes.</p>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="h3 text-foreground mb-3">Constellation 2: Brand Vision Workshop</h3>
                <p className="text-muted-foreground body mb-4">
                  Para definir identidad, posicionamiento y storytelling de marca.
                </p>
                <div className="bg-card p-4 rounded border border-border text-sm space-y-3">
                  <p><strong className="text-primary">Fase 1:</strong> Creative Oracle genera 15 arquetipos de marca y narrativas diferenciadas.</p>
                  <p><strong className="text-primary">Fase 2:</strong> Analytic Critic valida cada arquetipo contra competencia, valores y target audience.</p>
                  <p><strong className="text-primary">Fase 3:</strong> Narrative Synthesizer crea brand story coherente, memorable y diferenciada.</p>
                  <p><strong className="text-primary">Fase 4:</strong> Context Keeper anota puntos de implementación operacional (cómo vivir esta marca).</p>
                  <p><strong className="text-primary">Resultado:</strong> Identidad clara, storytelling único, guía de implementación.</p>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="h3 text-foreground mb-3">Constellation 3: Audience Signal Synthesis</h3>
                <p className="text-muted-foreground body mb-4">
                  Para entender audiencia y generar estrategia de conexión.
                </p>
                <div className="bg-card p-4 rounded border border-border text-sm space-y-3">
                  <p><strong className="text-primary">Fase 1:</strong> Creative Oracle genera múltiples perfiles psicográficos y motivacionales de audiencia.</p>
                  <p><strong className="text-primary">Fase 2:</strong> Analytic Critic valida cada perfil contra data real y detecta segmentos viables.</p>
                  <p><strong className="text-primary">Fase 3:</strong> Narrative Synthesizer crea narrativas de conexión únicos para cada segmento.</p>
                  <p><strong className="text-primary">Fase 4:</strong> Context Keeper mapea cómo activar cada narrativa en canales reales.</p>
                  <p><strong className="text-primary">Resultado:</strong> Comprensión profunda de audiencia + estrategias de conexión accionables.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Persistent Memory */}
          <div className="mb-16 p-8 border border-primary/30 bg-primary/5 rounded-lg">
            <h2 className="h3 text-foreground mb-4">Memoria Persistente: El Secreto de la Evolución</h2>
            <p className="text-muted-foreground body mb-4">
              A diferencia de brainstorming humano, cada ciclo de ideación queda capturado:
            </p>
            <ul className="space-y-2 text-muted-foreground body">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Ideas Generadas:</strong> Todas las propuestas del Creative Oracle se archivan y pueden ser combinadas en futuros ciclos.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Crítica Capturada:</strong> Las evaluaciones del Analytic Critic se preservan como conocimiento sobre qué funciona y qué no en tu contexto específico.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Narrativas Exitosas:</strong> Las síntesis del Narrative Synthesizer se reutilizan, mejoran y adaptan en nuevos contextos.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Aprendizaje Acumulado:</strong> El sistema mejora con cada brainstorm. Las ideas que funcionan en realidad se refuerzan; las que fallan se aprenden.</span>
              </li>
            </ul>
          </div>

          {/* Comparison */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">vs Brainstorming Tradicional</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-primary font-semibold">Aspecto</th>
                    <th className="text-left py-3 px-4 text-primary font-semibold">Brainstorming Humano</th>
                    <th className="text-left py-3 px-4 text-primary font-semibold">Agentic Brainstorming</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-medium">Perspectivas Simultáneas</td>
                    <td className="py-3 px-4 text-muted-foreground">1 persona por vez</td>
                    <td className="py-3 px-4 text-muted-foreground">4 agentes en paralelo</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-medium">Sesgo Cognitivo</td>
                    <td className="py-3 px-4 text-muted-foreground">Alto (groupthink, autoridad)</td>
                    <td className="py-3 px-4 text-muted-foreground">Bajo (perspectivas diseñadas)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-medium">Iteración</td>
                    <td className="py-3 px-4 text-muted-foreground">Limitada (fatiga mental)</td>
                    <td className="py-3 px-4 text-muted-foreground">Ilimitada (24/7)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-medium">Memoria</td>
                    <td className="py-3 px-4 text-muted-foreground">Notas fragmentadas</td>
                    <td className="py-3 px-4 text-muted-foreground">Completa, estructurada, reutilizable</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-medium">Síntesis</td>
                    <td className="py-3 px-4 text-muted-foreground">Manual, variable</td>
                    <td className="py-3 px-4 text-muted-foreground">Automática, consistente</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground font-medium">Aprendizaje Acumulado</td>
                    <td className="py-3 px-4 text-muted-foreground">Casi nulo</td>
                    <td className="py-3 px-4 text-muted-foreground">Exponencial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Real Application */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Aplicación Real: Ejemplo de Startup</h2>
            <div className="p-6 border border-border rounded-lg bg-card space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Desafío</h3>
                <p className="text-muted-foreground body">
                  Una startup fintech necesita definir su posicionamiento en un mercado abarrotado. ¿Quiénes somos? ¿Quién nos necesita? ¿Cuál es nuestra historia única?
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Lo Que Sucede</h3>
                <div className="space-y-3 text-muted-foreground body text-sm">
                  <p>1. <strong>Creative Oracle</strong> genera 12 posicionamientos alternativos (desde "FinTech para millennials" hasta "Plataforma de educación financiera")</p>
                  <p>2. <strong>Analytic Critic</strong> evalúa cada uno: tamaño de mercado, viabilidad tecnológica, diferenciación competitiva</p>
                  <p>3. <strong>Narrative Synthesizer</strong> teje los 3 mejores en historias de marca que conectan emocionalmente</p>
                  <p>4. <strong>Context Keeper</strong> asegura que cada narrativa sea ejecutable con equipo y presupuesto actual</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Resultado</h3>
                <p className="text-muted-foreground body">
                  En 48 horas, la startup tiene: 1) Estrategia de posicionamiento clara, 2) Narrativa de marca diferenciada, 3) Guía de implementación táctica, 4) Registro capturado para futuros pivots.
                </p>
              </div>
            </div>
          </div>

          {/* Related Concepts */}
          <div className="mb-16 p-8 border border-primary/20 bg-primary/5 rounded-lg">
            <h2 className="h3 text-foreground mb-4">Conceptos Relacionados</h2>
            <div className="space-y-3">
              <Link href={`/${locale}/studies/agentic-ai`} className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">Agentic AI - Inteligencia Autónoma</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link href={`/${locale}/studies/ai-memory`} className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">AI Memory - Memoria Persistente</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link href={`/${locale}/studies/context-engineering`} className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-foreground font-medium group-hover:text-primary">Context Engineering - Ingeniería de Contexto</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 border border-border rounded-lg bg-card">
            <h3 className="h3 text-foreground mb-3">Implementación en N3uralia</h3>
            <p className="text-muted-foreground body mb-6">
              Agentic AI Brainstorming es una de nuestras aplicaciones de Living Agents. Demuestra cómo múltiples perspectivas pueden colaborar de manera inteligente y persistente para generar breakthrough thinking.
            </p>
            <Link href={`/${locale}/living-agents/demo`} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Ver Demo Interactiva
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
