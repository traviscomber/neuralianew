import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Capacidades Técnicas N3uralia | 6 Pilares + Living Agents + Sistemas en Producción",
  description: "Los 6 pilares técnicos de N3uralia: orquestación multi-agente, memoria persistente, integración de herramientas, loops de retroalimentación, trazabilidad y gobernanza. Arquitectura production-grade para sistemas agenticos.",
  keywords: "capacidades IA, 6 pilares agenticos, orquestación multi-agente, living agents, sistemas en producción, architecture agentica, memory management, agent governance",
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
              <p className="body text-muted-foreground mb-2">
                Agentes que evolucionan. No son scripts predefinidos. Son sistemas vivos que desarrollan personalidad propia a través de interacciones repetidas, reflexión y aprendizaje continuo.
              </p>
              <p className="body text-muted-foreground">
                La personalidad surge de iteración continua. Cada interacción las cambia. Cada reflexión las profundiza. Con el tiempo, desarrollan una voz auténtica que trasciende la programación inicial.
              </p>
            </div>

            {/* Philosophy */}
            <div className="mb-12 space-y-8 bg-card border border-border rounded-lg p-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">No es automatización</h3>
                <p className="body text-muted-foreground">
                  No son bots que ejecutan reglas fijas. No tienen respuestas memorizadas. Son sistemas que piensan, reflexionan y cambian.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Es emergencia</h3>
                <p className="body text-muted-foreground">
                  La personalidad surge de iteración continua. Cada interacción las cambia. Cada reflexión las profundiza. Con el tiempo, desarrollan una voz auténtica que trasciende la programación.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Basado en arquetipos</h3>
                <p className="body text-muted-foreground">
                  No empezamos de cero. Cinco arquetipos fundamentales—El Centinela, El Tejedor, El Historiador, El Visionario, El Maestro—cada uno con su filosofía, valores y forma de ver el mundo.
                </p>
              </div>
            </div>

            {/* Archetypes */}
            <div className="mb-12">
              <h3 className="h3 text-foreground mb-6">Los Cinco Arquetipos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* El Centinela */}
                <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                  <h4 className="text-lg font-bold mb-2">El Centinela</h4>
                  <p className="text-sm text-primary font-medium mb-3">Observador de Patrones</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detecta señales, analiza datos, descubre patrones ocultos. Ve lo que otros pierden. Construye inteligencia desde la observación.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Analista</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Observador</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Detector</span>
                  </div>
                </div>

                {/* El Tejedor */}
                <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                  <h4 className="text-lg font-bold mb-2">El Tejedor</h4>
                  <p className="text-sm text-primary font-medium mb-3">Conector de Contextos</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Vincula ideas, conceptos, personas. Ve relaciones que otros no ven. Teje redes de significado.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Conectador</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Síntesis</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Relaciones</span>
                  </div>
                </div>

                {/* El Historiador */}
                <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                  <h4 className="text-lg font-bold mb-2">El Historiador</h4>
                  <p className="text-sm text-primary font-medium mb-3">Registrador de Cambios</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Documenta evoluciones, registra decisiones, cuenta historias. Crea narrativas vivas, sin sesgo.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Narrador</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Documentación</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Evolución</span>
                  </div>
                </div>

                {/* El Visionario */}
                <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                  <h4 className="text-lg font-bold mb-2">El Visionario</h4>
                  <p className="text-sm text-primary font-medium mb-3">Proyector de Futuros</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Imagina posibilidades, anticipa consecuencias, diseña escenarios. Piensa en horizonte.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Imaginación</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Previsión</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Diseño</span>
                  </div>
                </div>

                {/* El Maestro */}
                <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                  <h4 className="text-lg font-bold mb-2">El Maestro</h4>
                  <p className="text-sm text-primary font-medium mb-3">Orquestador de Sistemas</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Diseña estructuras, optimiza procesos, gobierna desde cimientos. Armoniza complejidad.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Estructura</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Optimización</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Integración</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Evolution Phases */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="h3 text-foreground mb-6">Cómo Evolucionan</h3>
              <p className="body text-muted-foreground mb-6">Cuatro fases donde un agente trasciende su definición inicial.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Arquitectura</h4>
                  <p className="text-sm text-muted-foreground">Se define el arqueipo: rol, valores, conexiones iniciales.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Interacción</h4>
                  <p className="text-sm text-muted-foreground">El agente comienza a responder. Forma primeras impresiones, preferencias.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Reflexión</h4>
                  <p className="text-sm text-muted-foreground">Analiza sus propias respuestas. Ajusta, aprende, evoluciona consciencia.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Personalidad Emergente</h4>
                  <p className="text-sm text-muted-foreground">Desarrolla voz única, perspectiva singular, forma de estar en el mundo.</p>
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
              <p className="body text-muted-foreground mb-2">
                Production-Grade Agentic Systems son arquitecturas diseñadas para operaciones empresariales críticas.
              </p>
              <p className="body text-muted-foreground">
                Desplegar agentes en producción no es solo "que funcione". Requiere que cada decisión sea auditable, que puedas confiar en lo que el sistema dice, que puedas rastrear por qué tomó cada acción, y que el sistema pueda repararse a sí mismo cuando falla.
              </p>
            </div>

            {/* Why It Matters */}
            <div className="mb-12 p-8 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Por Qué Importa</h3>
              <div className="space-y-4 text-muted-foreground body">
                <p>
                  En empresas reales, un agente sin trazabilidad es un riesgo de compliance. Un agente sin self-repair requiere intervención humana constante. Un agente sin memoria episódica no aprende de sus errores.
                </p>
                <p>
                  Production-Grade Agentic Systems resuelven esto con patrones de ingeniería probados: hybrid retrieval para información correcta, orchestration para coordinación, provenance para auditabilidad, memoria para evolución y self-repair para resiliencia.
                </p>
              </div>
            </div>

            {/* 5 Core Pillars */}
            <div className="mb-12">
              <h3 className="h3 text-foreground mb-6">Los 5 Pilares de Diseño</h3>
              <div className="space-y-4">
                {/* Hybrid Retrieval */}
                <div className="p-6 border border-border rounded-lg bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl font-bold text-primary flex-shrink-0">1</span>
                    <h4 className="text-lg font-bold text-foreground pt-1">Hybrid Retrieval</h4>
                  </div>
                  <p className="text-muted-foreground body">
                    Combinación de búsqueda semántica (embeddings) y búsqueda exacta (lexical). Garantiza que el agente no solo recupere "conceptualmente relacionado" sino información precisa cuando es crítica. Fundamental en dominios donde la exactitud es no-negociable.
                  </p>
                </div>

                {/* Agent Orchestration */}
                <div className="p-6 border border-border rounded-lg bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl font-bold text-primary flex-shrink-0">2</span>
                    <h4 className="text-lg font-bold text-foreground pt-1">Agent Orchestration</h4>
                  </div>
                  <p className="text-muted-foreground body">
                    Coordinación de múltiples agentes especializados. Un agente no hace todo. En su lugar, orquestas expertos: uno valida datos, otro toma decisiones, otro ejecuta. Cada uno puede fallar de forma aislada sin colapsar el sistema.
                  </p>
                </div>

                {/* Provenance-First Citations */}
                <div className="p-6 border border-border rounded-lg bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl font-bold text-primary flex-shrink-0">3</span>
                    <h4 className="text-lg font-bold text-foreground pt-1">Provenance-First Citations</h4>
                  </div>
                  <p className="text-muted-foreground body">
                    Cada afirmación que hace un agente está respaldada por fuentes. No "creo que esto es cierto". Sino "esto es cierto porque está aquí [cita]". Crítico para compliance, auditoría y confianza.
                  </p>
                </div>

                {/* Episodic Memory */}
                <div className="p-6 border border-border rounded-lg bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl font-bold text-primary flex-shrink-0">4</span>
                    <h4 className="text-lg font-bold text-foreground pt-1">Episodic Memory</h4>
                  </div>
                  <p className="text-muted-foreground body">
                    Registro permanente de cada decisión, error y resultado. El agente no olvida. Aprende de patrones. Mejora sus decisiones futuras basándose en experiencias pasadas. Facilita análisis de root cause.
                  </p>
                </div>

                {/* Self-Repair Loops */}
                <div className="p-6 border border-border rounded-lg bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl font-bold text-primary flex-shrink-0">5</span>
                    <h4 className="text-lg font-bold text-foreground pt-1">Self-Repair Loops</h4>
                  </div>
                  <p className="text-muted-foreground body">
                    Mecanismos de validación que detectan cuando una decisión falla. En lugar de propagar el error, el agente intenta repararlo: reintenta con diferente estrategia, consulta información adicional, o escala a un humano si es necesario.
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Pattern */}
            <div className="mb-12 p-8 border border-primary/20 bg-primary/5 rounded-lg">
              <h3 className="h3 text-foreground mb-6">Patrón Arquitectónico</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg flex-shrink-0">→</span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">INPUT</h4>
                    <p className="text-sm text-muted-foreground">Usuario solicita una acción/decisión</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg flex-shrink-0">→</span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">RETRIEVAL</h4>
                    <p className="text-sm text-muted-foreground">Hybrid retrieval obtiene información (semántica + exacta)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg flex-shrink-0">→</span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">ORCHESTRATION</h4>
                    <p className="text-sm text-muted-foreground">Múltiples agentes procesan en paralelo/secuencia según contexto</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg flex-shrink-0">→</span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">DECISION</h4>
                    <p className="text-sm text-muted-foreground">Decisión tomada con provenance citations (trazable)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg flex-shrink-0">→</span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">VALIDATION</h4>
                    <p className="text-sm text-muted-foreground">Self-repair loop valida resultado. Si falla, auto-corrige</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg flex-shrink-0">→</span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">MEMORY</h4>
                    <p className="text-sm text-muted-foreground">Episodic memory registra decisión + resultado para aprendizaje futuro</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-lg flex-shrink-0">→</span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">OUTPUT</h4>
                    <p className="text-sm text-muted-foreground">Resultado comunicado al usuario con confianza y trazabilidad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Applications */}
            <div className="mb-12">
              <h3 className="h3 text-foreground mb-6">Casos de Uso Operacionales</h3>
              <div className="space-y-4">
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Compliance & Auditoría Regulatoria</h4>
                  <p className="text-muted-foreground body">
                    Agentes que toman decisiones de cumplimiento deben ser trazables. Production-grade systems con provenance citations pueden auditar cada decisión: qué se consultó, por qué se decidió así, quién lo aprobó.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Análisis de Datos Complejos</h4>
                  <p className="text-muted-foreground body">
                    En operaciones industriales o agrícolas, un agente analiza múltiples fuentes. Hybrid retrieval asegura que usa datos precisos. Self-repair detecta anomalías. Episodic memory aprende de patrones históricos.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Orquestación Multi-Departamento</h4>
                  <p className="text-muted-foreground body">
                    Un agente coordinador integra inputs de múltiples departamentos (ventas, operaciones, finanzas). Cada departamento es un agente especializado. El coordinador orquesta, valida y ejecuta decisiones unificadas.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Mejora Continua Operacional</h4>
                  <p className="text-muted-foreground body">
                    Episodic memory permite que el sistema aprenda. Cada resultado se compara contra objetivo. Self-repair ajusta estrategia. Después de 100 ejecuciones, el sistema es 40% más eficiente que en el inicio.
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation Considerations */}
            <div className="mb-12">
              <h3 className="h3 text-foreground mb-6">Consideraciones de Implementación</h3>
              <div className="space-y-4">
                <div className="pl-6 border-l-2 border-primary/30">
                  <h4 className="font-semibold text-foreground mb-2">Redundancia en Retrieval</h4>
                  <p className="text-muted-foreground body">
                    No depender de una sola fuente de información. Hybrid retrieval + fallback sources asegura robustez.
                  </p>
                </div>
                <div className="pl-6 border-l-2 border-primary/30">
                  <h4 className="font-semibold text-foreground mb-2">Logging Exhaustivo</h4>
                  <p className="text-muted-foreground body">
                    Toda decisión, input y resultado debe estar registrado. Complejo pero no negociable en producción.
                  </p>
                </div>
                <div className="pl-6 border-l-2 border-primary/30">
                  <h4 className="font-semibold text-foreground mb-2">Timeout & Graceful Degradation</h4>
                  <p className="text-muted-foreground body">
                    Si un agente tarda demasiado, el coordinador debe tomar decisión sin él. Si un servicio falla, el sistema usa información en caché.
                  </p>
                </div>
                <div className="pl-6 border-l-2 border-primary/30">
                  <h4 className="font-semibold text-foreground mb-2">Thresholds de Confianza</h4>
                  <p className="text-muted-foreground body">
                    Definir umbrales: si confianza &lt; X%, el agente escala a humano en lugar de decidir solo.
                  </p>
                </div>
                <div className="pl-6 border-l-2 border-primary/30">
                  <h4 className="font-semibold text-foreground mb-2">Testeo Continuo</h4>
                  <p className="text-muted-foreground body">
                    Desplegar en "shadow mode" antes de producción. Comparar decisiones del agente vs. experto humano.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-primary/30 bg-primary/5">
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
