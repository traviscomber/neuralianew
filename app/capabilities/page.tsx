import { CapabilitiesGrid } from "@/components/landing/capabilities-grid"
import { CouncilVoting } from "@/components/landing/council-voting"
import { Footer } from "@/components/layout/footer"
import { MemoryOperatingSystem } from "@/components/landing/memory-operating-system"
import { ConstellationWorkshop } from "@/components/living-agents/constellation-workshop"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Capacidades de N3uralia | 6 Pilares de Ingeniería para Sistemas Agenticos",
  description: "Los 6 pilares técnicos de N3uralia: orquestación multi-agente, memoria persistente, integración de herramientas, loops de retroalimentación, trazabilidad y gobernanza. Arquitectura enterprise para sistemas agenticos en producción.",
}

const content = {
  title: "Capacidades",
  subtitle: "Los 6 Pilares de Ingeniería",
  intro: "Arquitectura robusta de sistemas agenticos, construida sobre 6 componentes técnicos fundamentales. Cada pilar es no-negociable para producción.",
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
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">{content.subtitle}</p>
            <p className="body text-muted-foreground max-w-3xl mx-auto">{content.intro}</p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="h2 text-foreground mb-4">Los 6 Pilares</h2>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                Arquitectura técnica robusta diseñada para escala. Cada componente es crítico, cada uno es no-negociable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* 1. Multi-Agent Orchestration */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Orquestación Multi-Agente</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Coordinación de múltiples agentes especializados. Cada uno con rol definido, comunicación en tiempo real, consenso guiado y escalabilidad horizontal infinita.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Coordinación síncrona</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Roles y especialización</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Escalabilidad horizontal</span>
                  </li>
                </ul>
              </div>

              {/* 2. Persistent Memory */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Memoria Persistente</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Contexto compartido entre agentes, totalmente recuperable, versionable y auditable. Cada interacción se registra, cada decisión es rastreable.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Historial inmutable</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Recuperación rápida</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Contexto compartido</span>
                  </li>
                </ul>
              </div>

              {/* 3. Tool Integration */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Integración de Herramientas</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Acceso a APIs externas, bases de datos, servicios empresariales. Cada agente tiene toolkit especializado para su dominio específico.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Plugins modulares</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Manejo de errores</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Fallback automático</span>
                  </li>
                </ul>
              </div>

              {/* 4. Feedback Loops */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Loops de Retroalimentación</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Aprendizaje del resultado de cada decisión. Los agentes ajustan comportamiento basado en éxito o fallo, mejorando continuamente.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Reinforcement learning</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Mejora iterativa</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Adaptación continua</span>
                  </li>
                </ul>
              </div>

              {/* 5. Observability & Traceability */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Trazabilidad Completa</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Cada decisión es rastreable. Logs detallados, auditoría, explicabilidad total. Sabes exactamente por qué cada agente hizo qué.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Audit trail inmutable</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Explicabilidad</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Compliance ready</span>
                  </li>
                </ul>
              </div>

              {/* 6. Governance & Control */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Gobernanza y Control</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Guardrails, límites de autoridad, escalación automática. Los agentes actúan dentro de parámetros definidos por tu organización.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Políticas configurables</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Aprobaciones automáticas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Escalación guiada</span>
                  </li>
                </ul>
              </div>
            </div>
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
