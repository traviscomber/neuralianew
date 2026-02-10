'use client'

import { ArrowRight, BookOpen, Shield, Zap, Network, Code2 } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'

export function SolutionsContent() {
  const pillars = [
    {
      icon: Network,
      title: 'Multi-Agent Orchestration',
      description: 'Arquitecturas coordinadas donde múltiples agentes trabajan en paralelo, comparten contexto y se comunican sin fricción. Escalable de 2 a N agentes.',
      details: [
        'Comunicación sin acoplamiento',
        'Coordinación descentralizada',
        'Escalabilidad horizontal',
        'Manejo de conflictos',
      ],
    },
    {
      icon: Shield,
      title: 'Provenance-First Citations',
      description: 'Trazabilidad total. Cada decisión del agente se vincula a fuentes verificables. No alucinaciones, no claims no fundados. Auditable y verificable.',
      details: [
        'Cadena de evidencia',
        'Citas verificables',
        'Trazabilidad completa',
        'Cumplimiento regulatorio',
      ],
    },
    {
      icon: Zap,
      title: 'Hybrid Retrieval & Validation',
      description: 'Combinación inteligente de retrieval semántico, BM25 exacto y validación de evidencia. Sistemas que entienden matices y recuperan contexto correcto.',
      details: [
        'Búsqueda semántica',
        'Búsqueda exacta (BM25)',
        'Ranking multicriterio',
        'Validación automática',
      ],
    },
    {
      icon: Code2,
      title: 'Self-Repair Loops',
      description: 'Sistemas que detectan propios errores, intentan corregirse, y si no pueden, escalan de forma controlada. Arquitectura resiliente por diseño.',
      details: [
        'Detección automática de errores',
        'Estrategias de corrección',
        'Escalado inteligente',
        'Logging completo',
      ],
    },
    {
      icon: BookOpen,
      title: 'Episodic Memory',
      description: 'Memoria estructurada que registra experiencias, decisiones y resultados. Los agentes aprenden de su propio historial y del colectivo.',
      details: [
        'Persistencia de episodios',
        'Indexación temporal',
        'Recuperación contextual',
        'Aprendizaje acumulativo',
      ],
    },
    {
      icon: Zap,
      title: 'Production-Ready Architecture',
      description: 'Diseñado desde el inicio para operar en producción. Monitoreo, alertas, observabilidad, manejo de fallos y escalabilidad integradas.',
      details: [
        'Observabilidad total',
        'Manejo de errores',
        'Rate limiting inteligente',
        'Fallback automático',
      ],
    },
  ]

  const patterns = [
    {
      pattern: 'Retrieval-Augmented Generation (RAG)',
      description: 'Agentes acceden a datos actualizados en tiempo real sin reentrenamiento. Conocimiento dinámico, respuestas precisas.',
      example: 'Soporte técnico que consulta tu documentación exacta',
    },
    {
      pattern: 'Multi-Turn Reasoning',
      description: 'Agentes que piensan en pasos, reflexionan sobre sus propias conclusiones, ajustan estrategia según contexto.',
      example: 'Análisis que requieren múltiples iteraciones y validación',
    },
    {
      pattern: 'Tool-Augmented Execution',
      description: 'Agentes que entienden qué herramientas usar, cuándo usarlas, e integran resultados en el razonamiento siguiente.',
      example: 'Orquestación automática de APIs, bases de datos, servicios externos',
    },
    {
      pattern: 'Consensus-Based Decision Making',
      description: 'Múltiples agentes analizan el mismo problema, comparten perspectivas, alcanzan consenso en decisiones críticas.',
      example: 'Aprobaciones complejas que requieren múltiples criterios',
    },
  ]

  const implementationSteps = [
    {
      step: '1',
      title: 'Data Preparation',
      description: 'Estructuración de datos, creación de índices, setup de retrieval. Baseline de calidad.',
    },
    {
      step: '2',
      title: 'Agent Architecture Design',
      description: 'Definición de roles, responsabilidades, canales de comunicación entre agentes.',
    },
    {
      step: '3',
      title: 'Integration Layer',
      description: 'Conexión con tu infraestructura: bases de datos, APIs, servicios internos.',
    },
    {
      step: '4',
      title: 'Observability Setup',
      description: 'Logging, tracing, alertas. Visibilidad total de qué hace cada agente, cuándo, por qué.',
    },
    {
      step: '5',
      title: 'Production Deployment',
      description: 'Gradual rollout, monitoreo 24/7, fallbacks automáticos, escalabilidad bajo demanda.',
    },
    {
      step: '6',
      title: 'Continuous Optimization',
      description: 'Análisis de patrones, mejora de prompts, ajuste de parámetros basado en datos reales.',
    },
  ]

  return (
    <main className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/10">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Soluciones en Producción</span>
          </div>

          <h1 className="h1-light mb-6 text-foreground">
            Sistemas Agenticos
            <br />
            <span className="text-primary/70">Diseñados para Producción Real</span>
          </h1>

          <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            No templates. No "almost production-ready". Arquitecturas que operan en el mundo real con requerimientos empresariales: auditoría, trazabilidad, escalabilidad, confiabilidad.
          </p>

          <p className="body text-muted-foreground max-w-3xl mx-auto mb-12">
            Basadas en patrones probados de ingeniería de IA, con énfasis en observabilidad, recuperación de fallos y diseño defensivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Consultar Implementación
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/living-agents"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
            >
              Ver Living Agents
            </Link>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="h2 text-foreground mb-4">Pilares Técnicos</h2>
            <p className="body text-muted-foreground">
              Seis dimensiones que definen sistemas agenticos profesionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div key={idx} className="border border-border rounded-lg p-8 bg-card hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.details.map((detail, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Design Patterns */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="h2 text-foreground mb-4">Patrones de Diseño Comprobados</h2>
            <p className="body text-muted-foreground">
              Arquitecturas que funcionan en el mundo real
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {patterns.map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-8 bg-background">
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.pattern}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-primary font-medium">Caso de uso:</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Path */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="h2 text-foreground mb-4">Ruta de Implementación</h2>
            <p className="body text-muted-foreground">
              De concepto a producción en 6 fases medibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationSteps.map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-8 bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-lg font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Guarantees */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="h2 text-foreground mb-4">Garantías Técnicas</h2>
            <p className="body text-muted-foreground">
              Lo que aseguramos en cada implementación
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Observabilidad Total',
                desc: 'Cada decisión del agente es logueable, trazable y auditable. Zero black boxes.',
              },
              {
                title: 'Escalabilidad Horizontal',
                desc: 'Diseño que crece desde 1 a 1M requests/día sin rediseño arquitectónico.',
              },
              {
                title: 'Recuperación de Fallos',
                desc: 'Sistemas que detectan errores, intentan auto-corrección, escalan controladamente.',
              },
              {
                title: 'Seguridad de Datos',
                desc: 'Integración con tu infraestructura de seguridad existente. RLS, encriptación, compliance.',
              },
              {
                title: 'Performance Predecible',
                desc: 'Latencia medida, optimizada y monitoreada. SLA definido desde inicio.',
              },
              {
                title: 'Soporte 24/7',
                desc: 'Equipo técnico disponible para optimización, debuggeo y escalado bajo demanda.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-border/50 rounded-lg p-6 bg-background">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="h2 text-foreground mb-6">¿Tu operación necesita agentes en producción?</h2>
          <p className="body text-muted-foreground mb-8">
            Exploremos si sistemas agenticos encajan en tu arquitectura. Sin presión. Análisis técnico real.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors gap-2"
          >
            Iniciar Consultoría Técnica
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
