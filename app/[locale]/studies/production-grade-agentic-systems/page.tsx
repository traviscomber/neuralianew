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
    path: "/studies/production-grade-agentic-systems",
    type: "article",
    title: "Production-Grade Agentic Systems | N3uralia Studies",
    description: "Deep dive into building agentic AI systems for production environments. Hybrid retrieval, agent orchestration, provenance, memory, and self-repair loops for real-world operations.",
  })
}

export default function ProductionGradeAgenticSystemsPage() {
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
            Ingeniería de Producción
          </span>

          <h1 className="h1-light mb-6 text-foreground">Production-Grade Agentic Systems</h1>
          <p className="body-lg text-muted-foreground">
            Arquitectura y patrones de ingeniería para desplegar sistemas de agentes inteligentes en entornos productivos
            con fiabilidad, trazabilidad y evolución continua.
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
              Production-Grade Agentic Systems son arquitecturas diseñadas para operaciones empresariales críticas. Integran
              orquestación multi-agente, recuperación inteligente de información, provenance-first citations, episodic memory
              y self-repair loops para garantizar decisiones confiables, auditables y mejorables continuamente.
            </p>
          </div>

          {/* Why It Matters */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Por Qué Importa</h2>
            <div className="space-y-4 text-muted-foreground body">
              <p>
                Desplegar agentes en producción no es solo "que funcione". Requiere que cada decisión sea auditable, que
                puedas confiar en lo que el sistema dice, que puedas rastrear por qué tomó cada acción, y que el sistema
                pueda repararse a sí mismo cuando falla.
              </p>
              <p>
                En empresas reales, un agente sin trazabilidad es un riesgo de compliance. Un agente sin self-repair requiere
                intervención humana constante. Un agente sin memoria episódica no aprende de sus errores.
              </p>
              <p>
                Production-Grade Agentic Systems resuelven esto con patrones de ingeniería probados: hybrid retrieval para
                información correcta, orchestration para coordinación, provenance para auditabilidad, memoria para evolución
                y self-repair para resiliencia.
              </p>
            </div>
          </div>

          {/* The 5 Core Pillars */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Los 5 Pilares de Diseño</h2>
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">1</span>
                  <h3 className="h3 text-foreground">Hybrid Retrieval</h3>
                </div>
                <p className="text-muted-foreground body">
                  Combinación de búsqueda semántica (embeddings) y búsqueda exacta (lexical). Garantiza que el agente no solo
                  recupere "conceptualmente relacionado" sino información precisa cuando es crítica. Fundamental en dominios
                  donde la exactitud es no-negociable.
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">2</span>
                  <h3 className="h3 text-foreground">Agent Orchestration</h3>
                </div>
                <p className="text-muted-foreground body">
                  Coordinación de múltiples agentes especializados. Un agente no hace todo. En su lugar, orquestas expertos:
                  uno valida datos, otro toma decisiones, otro ejecuta. Cada uno puede fallar de forma aislada sin colapsar
                  el sistema.
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">3</span>
                  <h3 className="h3 text-foreground">Provenance-First Citations</h3>
                </div>
                <p className="text-muted-foreground body">
                  Cada afirmación que hace un agente está respaldada por fuentes. No "creo que esto es cierto". Sino "esto es
                  cierto porque está aquí [cita]". Crítico para compliance, auditoría y confianza.
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">4</span>
                  <h3 className="h3 text-foreground">Episodic Memory</h3>
                </div>
                <p className="text-muted-foreground body">
                  Registro permanente de cada decisión, error y resultado. El agente no olvida. Aprende de patrones. Mejora
                  sus decisiones futuras basándose en experiencias pasadas. Facilita análisis de root cause.
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">5</span>
                  <h3 className="h3 text-foreground">Self-Repair Loops</h3>
                </div>
                <p className="text-muted-foreground body">
                  Mecanismos de validación que detectan cuando una decisión falla. En lugar de propagar el error, el agente
                  intenta repararlo: reintenta con diferente estrategia, consulta información adicional, o escala a un humano
                  si es necesario.
                </p>
              </div>
            </div>
          </div>

          {/* Architecture Pattern */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Patrón Arquitectónico</h2>
            <div className="p-8 border border-primary/20 bg-primary/5 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg">→</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">INPUT</h3>
                    <p className="text-muted-foreground text-sm">Usuario solicita una acción/decisión</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg">→</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">RETRIEVAL</h3>
                    <p className="text-muted-foreground text-sm">Hybrid retrieval obtiene información (semántica + exacta)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg">→</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">ORCHESTRATION</h3>
                    <p className="text-muted-foreground text-sm">Múltiples agentes procesan en paralelo/secuencia según contexto</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg">→</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">DECISION</h3>
                    <p className="text-muted-foreground text-sm">Decisión tomada con provenance citations (trazable)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg">→</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">VALIDATION</h3>
                    <p className="text-muted-foreground text-sm">Self-repair loop valida resultado. Si falla, auto-corrige</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg">→</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">MEMORY</h3>
                    <p className="text-muted-foreground text-sm">Episodic memory registra decisión + resultado para aprendizaje futuro</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg">→</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">OUTPUT</h3>
                    <p className="text-muted-foreground text-sm">Resultado comunicado al usuario con confianza y trazabilidad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-World Applications */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Casos de Uso Operacionales</h2>
            <div className="space-y-4">
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Compliance & Auditoría Regulatoria</h3>
                <p className="text-muted-foreground body">
                  Agentes que toman decisiones de cumplimiento deben ser trazables. Production-grade systems con provenance
                  citations pueden auditar cada decisión: qué se consultó, por qué se decidió así, quién lo aprobó.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Análisis de Datos Complejos</h3>
                <p className="text-muted-foreground body">
                  En operaciones industriales o agrícolas, un agente analiza múltiples fuentes. Hybrid retrieval asegura que
                  usa datos precisos. Self-repair detecta anomalías. Episodic memory aprende de patrones históricos.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Orquestación Multi-Departamento</h3>
                <p className="text-muted-foreground body">
                  Un agente coordinador integra inputs de múltiples departamentos (ventas, operaciones, finanzas). Cada
                  departamento es un agente especializado. El coordinador orquesta, valida y ejecuta decisiones unificadas.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Mejora Continua Operacional</h3>
                <p className="text-muted-foreground body">
                  Episodic memory permite que el sistema aprenda. Cada resultado se compara contra objetivo. Self-repair
                  ajusta estrategia. Después de 100 ejecuciones, el sistema es 40% más eficiente que en el inicio.
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Considerations */}
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-6">Consideraciones de Implementación</h2>
            <div className="space-y-4">
              <div className="pl-6 border-l-2 border-primary/30">
                <h3 className="font-semibold text-foreground mb-2">Redundancia en Retrieval</h3>
                <p className="text-muted-foreground body">
                  No depender de una sola fuente de información. Hybrid retrieval + fallback sources asegura robustez.
                </p>
              </div>
              <div className="pl-6 border-l-2 border-primary/30">
                <h3 className="font-semibold text-foreground mb-2">Logging Exhaustivo</h3>
                <p className="text-muted-foreground body">
                  Toda decisión, input y resultado debe estar registrado. Complejo pero no negociable en producción.
                </p>
              </div>
              <div className="pl-6 border-l-2 border-primary/30">
                <h3 className="font-semibold text-foreground mb-2">Timeout & Graceful Degradation</h3>
                <p className="text-muted-foreground body">
                  Si un agente tarda demasiado, el coordinador debe tomar decisión sin él. Si un servicio falla, el sistema
                  usa información en caché.
                </p>
              </div>
              <div className="pl-6 border-l-2 border-primary/30">
                <h3 className="font-semibold text-foreground mb-2">Thresholds de Confianza</h3>
                <p className="text-muted-foreground body">
                  Definir umbrales: si confianza &lt; X%, el agente escala a humano en lugar de decidir solo.
                </p>
              </div>
              <div className="pl-6 border-l-2 border-primary/30">
                <h3 className="font-semibold text-foreground mb-2">Testeo Continuo</h3>
                <p className="text-muted-foreground body">
                  Desplegar en "shadow mode" antes de producción. Comparar decisiones del agente vs. experto humano.
                </p>
              </div>
            </div>
          </div>

          {/* Related Concepts */}
          <div className="mb-16 p-8 border border-primary/20 bg-primary/5 rounded-lg">
            <h2 className="h3 text-foreground mb-4">Conceptos Relacionados</h2>
            <div className="space-y-3">
              <Link
                href="/studies/agentic-ai"
                className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group"
              >
                <span className="text-foreground font-medium group-hover:text-primary">Agentic AI - Inteligencia Autónoma</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/studies/ai-memory"
                className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group"
              >
                <span className="text-foreground font-medium group-hover:text-primary">AI Memory - Sistema de Memoria</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/studies/context-engineering"
                className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/40 transition-colors group"
              >
                <span className="text-foreground font-medium group-hover:text-primary">Context Engineering - Ingeniería del Contexto</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 border border-border rounded-lg bg-card">
            <h3 className="h3 text-foreground mb-3">Implementación en N3uralia</h3>
            <p className="text-muted-foreground body mb-6">
              Production-Grade Agentic Systems es el fundamento de nuestras soluciones empresariales. Cada deployment en
              N3uralia incorpora estos patrones: hybrid retrieval, orchestration, provenance, memory y self-repair.
            </p>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Ver Arquitectura en Producción
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
