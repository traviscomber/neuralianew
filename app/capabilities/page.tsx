import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Capacidades - N3uralia | Pilares, Living Agents y Sistemas en Producción",
  description: "Descubre nuestras capacidades técnicas: 6 pilares arquitectónicos, arquetipos de Living Agents y patrones de implementación en producción.",
  keywords: "capacidades, arquitectura IA, living agents, agentic systems, producción",
}

export default function CapabilitiesPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 border-b border-border px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="h1-light mb-4">Capacidades Técnicas</h1>
            <p className="body-lg text-muted-foreground">
              Arquitectura modular, agnóstica y escalable diseñada para sistemas inteligentes en producción.
            </p>
          </div>
        </section>

        {/* Tab Navigation - Sticky */}
        <section className="sticky top-0 bg-background border-b border-border z-40">
          <div className="max-w-6xl mx-auto px-4 py-0">
            <div className="flex gap-8 overflow-x-auto">
              <a href="#pilares" className="px-0 py-4 text-sm font-medium text-primary border-b-2 border-primary whitespace-nowrap">
                6 Pilares
              </a>
              <a href="#living-agents" className="px-0 py-4 text-sm text-muted-foreground hover:text-foreground border-b-2 border-transparent hover:border-primary/30 whitespace-nowrap transition-colors">
                Living Agents
              </a>
              <a href="#produccion" className="px-0 py-4 text-sm text-muted-foreground hover:text-foreground border-b-2 border-transparent hover:border-primary/30 whitespace-nowrap transition-colors">
                En Producción
              </a>
            </div>
          </div>
        </section>

        {/* Section 1: 6 Pilares */}
        <section id="pilares" className="py-16 px-4 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="h2-light mb-4">6 Pilares Técnicos</h2>
              <p className="body text-muted-foreground">
                La arquitectura de N3uralia se construye sobre estos seis pilares fundamentales que hacen posible sistemas inteligentes resilientes y escalables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pilar 1 */}
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold mb-3">Orquestación Multi-Agente</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Coordinación de múltiples agentes especializados. Cada uno con rol definido, comunicación en tiempo real, consenso guiado.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Coordinación síncrona</li>
                  <li>• Roles y especialización</li>
                  <li>• Escalabilidad horizontal</li>
                </ul>
              </div>

              {/* Pilar 2 */}
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold mb-3">Memoria Persistente</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contexto compartido entre agentes, totalmente recuperable, versionable y auditable. Cada interacción se registra.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Historial inmutable</li>
                  <li>• Recuperación rápida</li>
                  <li>• Contexto compartido</li>
                </ul>
              </div>

              {/* Pilar 3 */}
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold mb-3">Integración de Herramientas</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Acceso a APIs externas, bases de datos, servicios empresariales. Cada agente con toolkit especializado.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Plugins modulares</li>
                  <li>• Manejo de errores</li>
                  <li>• Fallback automático</li>
                </ul>
              </div>

              {/* Pilar 4 */}
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold mb-3">Loops de Retroalimentación</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Aprendizaje del resultado de cada decisión. Los agentes ajustan comportamiento mejorando continuamente.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Reinforcement learning</li>
                  <li>• Mejora iterativa</li>
                  <li>• Adaptación continua</li>
                </ul>
              </div>

              {/* Pilar 5 */}
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold mb-3">Trazabilidad Completa</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Cada decisión es rastreable. Logs detallados, auditoría, explicabilidad total. Sabes exactamente por qué.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Audit trail inmutable</li>
                  <li>• Explicabilidad</li>
                  <li>• Compliance ready</li>
                </ul>
              </div>

              {/* Pilar 6 */}
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold mb-3">Gobernanza y Control</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Guardrails, límites de autoridad, escalación automática. Los agentes actúan dentro de parámetros definidos.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Políticas configurables</li>
                  <li>• Aprobaciones automáticas</li>
                  <li>• Escalación guiada</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Living Agents */}
        <section id="living-agents" className="py-16 px-4 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="h2-light mb-4">Living Agents</h2>
              <p className="body text-muted-foreground">
                Arquetipos de agentes inteligentes que evolucionan con el tiempo. Cada uno con personalidad, contexto y autoridad específicos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Reasoning Agent */}
              <div className="p-8 rounded-lg border border-border bg-card">
                <h3 className="text-lg font-bold mb-4">Reasoning Agent</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Especializado en análisis profundo y decisiones complejas. Excava en datos, evalúa opciones y argumenta conclusiones.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p><strong>Personalidad:</strong> Metódico, exhaustivo</p>
                  <p><strong>Contexto:</strong> Análisis estratégico</p>
                  <p><strong>Autoridad:</strong> Recomendaciones de negocio</p>
                </div>
              </div>

              {/* Execution Agent */}
              <div className="p-8 rounded-lg border border-border bg-card">
                <h3 className="text-lg font-bold mb-4">Execution Agent</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Implementa decisiones con velocidad. Coordina acciones, maneja excepciones y reporta progreso en tiempo real.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p><strong>Personalidad:</strong> Rápido, confiable</p>
                  <p><strong>Contexto:</strong> Operaciones críticas</p>
                  <p><strong>Autoridad:</strong> Acciones sistémicas</p>
                </div>
              </div>

              {/* Monitor Agent */}
              <div className="p-8 rounded-lg border border-border bg-card">
                <h3 className="text-lg font-bold mb-4">Monitor Agent</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Vigilancia permanente del sistema. Detecta anomalías, predice problemas y escala alertas automáticamente.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p><strong>Personalidad:</strong> Vigilante, preventivo</p>
                  <p><strong>Contexto:</strong> Health & Performance</p>
                  <p><strong>Autoridad:</strong> Escalaciones de riesgo</p>
                </div>
              </div>

              {/* Learner Agent */}
              <div className="p-8 rounded-lg border border-border bg-card">
                <h3 className="text-lg font-bold mb-4">Learner Agent</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Evoluciona continuamente. Captura patrones, refina heurísticas y mejora precisión con cada interacción.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p><strong>Personalidad:</strong> Adaptable, curioso</p>
                  <p><strong>Contexto:</strong> Mejora continua</p>
                  <p><strong>Autoridad:</strong> Ajustes de modelo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: En Producción */}
        <section id="produccion" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="h2-light mb-4">Sistemas en Producción</h2>
              <p className="body text-muted-foreground">
                Patrones probados para escalar sistemas inteligentes en ambientes críticos. De MVP a millones de eventos/día.
              </p>
            </div>

            <div className="space-y-6">
              {/* Patrón 1 */}
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Multi-Agent Orchestration</h3>
                    <p className="text-sm text-muted-foreground">
                      Coordinación de múltiples agentes sin punto único de fallo. Message-driven, idempotente, resiliente.
                    </p>
                    <div className="mt-3 text-xs text-muted-foreground space-y-1">
                      <p><strong>Stack:</strong> Event-driven, async/await, circuit breakers</p>
                      <p><strong>Escala:</strong> 10K+ agentes simultáneos</p>
                      <p><strong>Latencia P99:</strong> &lt;200ms</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patrón 2 */}
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Context Management at Scale</h3>
                    <p className="text-sm text-muted-foreground">
                      Gestión distribuida de contexto. Cache inteligente, versionamiento, consistency garantizado.
                    </p>
                    <div className="mt-3 text-xs text-muted-foreground space-y-1">
                      <p><strong>Stack:</strong> Redis/Memcached, distributed consensus</p>
                      <p><strong>Escala:</strong> PB+ de contexto compartido</p>
                      <p><strong>Consistencia:</strong> Strong consistency con fallback</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patrón 3 */}
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Governance & Audit</h3>
                    <p className="text-sm text-muted-foreground">
                      Trazabilidad completa de decisiones. Auditabilidad, compliance, forensics integrado en kernel.
                    </p>
                    <div className="mt-3 text-xs text-muted-foreground space-y-1">
                      <p><strong>Stack:</strong> Event sourcing, immutable log</p>
                      <p><strong>Retención:</strong> 7 años de auditoría</p>
                      <p><strong>Cumplimiento:</strong> GDPR, SOC2, ISO 27001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patrón 4 */}
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Legacy Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Bridging con sistemas históricos. API adapters, schema migration, gradual modernization.
                    </p>
                    <div className="mt-3 text-xs text-muted-foreground space-y-1">
                      <p><strong>Stack:</strong> API gateways, schema translation</p>
                      <p><strong>Compatibilidad:</strong> SOAP, REST, gRPC, messaging</p>
                      <p><strong>Migration:</strong> Zero-downtime upgrades</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-lg border border-primary/30 bg-primary/5">
              <p className="text-sm text-muted-foreground mb-4">
                ¿Necesitas implementar estas capacidades? Nuestro equipo te guía en el diseño y ejecución.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-sm font-medium">
                Contacta al equipo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
