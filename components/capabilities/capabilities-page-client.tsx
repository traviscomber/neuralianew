"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

interface CapabilitiesPageClientProps { locale: 'es' | 'en' }

export function CapabilitiesPageClient({ locale }: CapabilitiesPageClientProps) {
  const isES = locale === 'es'
  const href = (path: string) => `/${locale}${path}`
  const content = {
    heroTitle: isES ? "Capacidades Técnicas" : "Technical Capabilities",
    heroDesc: isES ? "Arquitectura modular para sistemas inteligentes en producción" : "Modular architecture for intelligent systems in production",
    tabPillars: isES ? "6 Pilares" : "6 Pillars",
    tabLiving: "Living Agents",
    tabConversational: isES ? "Inteligencia Conversacional" : "Conversational Intelligence",
    tabProduction: isES ? "En Producción" : "In Production",
  }

  const sixPillars = [
    { titleES: "Arquitectura Agéntica", titleEN: "Agentic Architecture", descES: "Agentes con contexto, herramientas, memoria y límites definidos por el proceso", descEN: "Agents with context, tools, memory and boundaries defined by the process", features: isES ? ["Planificación & reasoning", "Workflows multi-paso", "Uso de herramientas", "Contexto operacional"] : ["Planning & reasoning", "Multi-step workflows", "Tool use", "Operational context"] },
    { titleES: "Living Agents", titleEN: "Living Agents", descES: "Agentes que incorporan feedback y evolución controlada cuando el caso lo requiere", descEN: "Agents that incorporate feedback and controlled evolution when the use case requires it", features: isES ? ["Memoria persistente", "Feedback loops", "Versionado", "Seguimiento de desempeño"] : ["Persistent memory", "Feedback loops", "Versioning", "Performance tracking"] },
    { titleES: "Orquestación Multi-Agente", titleEN: "Multi-Agent Coordination", descES: "Coordinación de especialistas con responsabilidades y handoffs explícitos", descEN: "Coordination of specialists with explicit responsibilities and handoffs", features: isES ? ["Distribución de tareas", "Permisos por rol", "Escalamiento", "Trazabilidad"] : ["Task distribution", "Role-based permissions", "Escalation", "Traceability"] },
    { titleES: "Inteligencia Conversacional", titleEN: "Conversational Intelligence", descES: "Interfaces de lenguaje natural conectadas a contexto y datos autorizados", descEN: "Natural-language interfaces connected to authorized context and data", features: isES ? ["Comprensión de intención", "Contexto", "RAG", "Respuestas con evidencia"] : ["Intent understanding", "Context", "RAG", "Evidence-grounded responses"] },
    { titleES: "Síntesis de Conocimiento", titleEN: "Knowledge Synthesis", descES: "Integración y procesamiento de fuentes operacionales con lineage visible", descEN: "Integration and processing of operational sources with visible lineage", features: isES ? ["Integración de datos", "Búsqueda semántica", "Grafos de conocimiento", "Validación"] : ["Data integration", "Semantic search", "Knowledge graphs", "Validation"] },
    { titleES: "Interacción Adaptativa", titleEN: "Adaptive Interaction", descES: "Tono, formato y nivel de detalle adaptados al usuario y al contexto sin alterar la verdad canónica", descEN: "Tone, format and detail adapted to the user and context without changing canonical truth", features: isES ? ["Tono configurable", "Contexto de usuario", "Formatos estructurados", "Guardrails"] : ["Configurable tone", "User context", "Structured formats", "Guardrails"] },
  ]

  const livingAgentsFeatures = [
    { titleES: "Memoria Persistente", titleEN: "Persistent Memory", descES: "Contexto histórico cuando el caso y las políticas de datos lo permiten", descEN: "Historical context when the use case and data policies allow it" },
    { titleES: "Mejora Controlada", titleEN: "Controlled Improvement", descES: "Feedback y evaluación antes de promover cambios de comportamiento", descEN: "Feedback and evaluation before promoting behavioral changes" },
    { titleES: "Comportamiento Adaptativo", titleEN: "Adaptive Behavior", descES: "Estrategias condicionadas por contexto, permisos y objetivos definidos", descEN: "Strategies conditioned by context, permissions and defined objectives" },
    { titleES: "Señales Predictivas", titleEN: "Predictive Signals", descES: "Modelos predictivos cuando existen datos y validación suficientes", descEN: "Predictive models when sufficient data and validation exist" },
  ]

  const conversationalFeatures = [
    { titleES: "Comprensión de Contexto", titleEN: "Context Understanding", descES: "Conecta la conversación con datos y documentos autorizados", descEN: "Connects the conversation with authorized data and documents" },
    { titleES: "Diálogos Naturales", titleEN: "Natural Dialogues", descES: "Interfaces conversacionales diseñadas para reducir fricción operacional", descEN: "Conversational interfaces designed to reduce operational friction" },
    { titleES: "Conversaciones Multi-turno", titleEN: "Multi-turn Conversations", descES: "Mantiene estado y referencias relevantes durante el flujo", descEN: "Maintains relevant state and references throughout the workflow" },
    { titleES: "Escalamiento Humano", titleEN: "Human Escalation", descES: "Deriva ambigüedad o decisiones de alto impacto a responsables autorizados", descEN: "Escalates ambiguity or high-impact decisions to authorized owners" },
  ]

  const productionFeatures = [
    { titleES: "Observabilidad y Recuperación", titleEN: "Observability & Recovery", descES: "Monitoreo, alertas, reintentos y rollback definidos según criticidad", descEN: "Monitoring, alerts, retries and rollback defined by criticality" },
    { titleES: "Seguridad por Arquitectura", titleEN: "Architecture-led Security", descES: "Control de acceso, cifrado, secretos, auditoría y requisitos de compliance definidos por proyecto", descEN: "Access control, encryption, secrets, auditing and compliance requirements defined per project" },
    { titleES: "Escala Medible", titleEN: "Measured Scale", descES: "Capacidad, límites y costos se validan con carga y patrones reales antes de prometer escala", descEN: "Capacity, limits and cost are validated with real load and usage patterns before scale is promised" },
    { titleES: "Métricas Operacionales", titleEN: "Operational Metrics", descES: "Métricas y dashboards conectados a fuentes y definiciones trazables", descEN: "Metrics and dashboards connected to traceable sources and definitions" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 border-b border-border px-4"><div className="max-w-4xl mx-auto text-center"><h1 className="text-5xl font-bold mb-4">{content.heroTitle}</h1><p className="text-xl text-muted-foreground">{content.heroDesc}</p></div></section>
      <section id="pillars" className="py-20 px-4 border-b border-border"><div className="max-w-6xl mx-auto"><h2 className="text-3xl font-bold mb-12 text-center">{content.tabPillars}</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{sixPillars.map((pillar) => <div key={pillar.titleEN} className="p-6 border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all"><h3 className="text-xl font-bold mb-3">{isES ? pillar.titleES : pillar.titleEN}</h3><p className="text-sm text-muted-foreground mb-4">{isES ? pillar.descES : pillar.descEN}</p><ul className="space-y-2">{pillar.features.map((feature) => <li key={feature} className="text-sm flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"/><span>{feature}</span></li>)}</ul></div>)}</div></div></section>
      <section id="living-agents" className="py-20 px-4 border-b border-border bg-muted/30"><div className="max-w-6xl mx-auto"><h2 className="text-3xl font-bold mb-12 text-center">{content.tabLiving}</h2><div className="grid md:grid-cols-2 gap-8">{livingAgentsFeatures.map((feature) => <div key={feature.titleEN} className="p-6 bg-background border border-border rounded-lg"><h3 className="text-lg font-bold mb-2">{isES ? feature.titleES : feature.titleEN}</h3><p className="text-sm text-muted-foreground">{isES ? feature.descES : feature.descEN}</p></div>)}</div></div></section>
      <section id="conversational" className="py-20 px-4 border-b border-border"><div className="max-w-6xl mx-auto"><h2 className="text-3xl font-bold mb-12 text-center">{content.tabConversational}</h2><div className="grid md:grid-cols-2 gap-8">{conversationalFeatures.map((feature) => <div key={feature.titleEN} className="p-6 bg-muted/50 border border-border rounded-lg"><h3 className="text-lg font-bold mb-2">{isES ? feature.titleES : feature.titleEN}</h3><p className="text-sm text-muted-foreground">{isES ? feature.descES : feature.descEN}</p></div>)}</div></div></section>
      <section id="production" className="py-20 px-4 border-b border-border bg-muted/30"><div className="max-w-6xl mx-auto"><h2 className="text-3xl font-bold mb-12 text-center">{content.tabProduction}</h2><div className="grid md:grid-cols-2 gap-8">{productionFeatures.map((feature) => <div key={feature.titleEN} className="p-6 bg-background border border-border rounded-lg"><h3 className="text-lg font-bold mb-2">{isES ? feature.titleES : feature.titleEN}</h3><p className="text-sm text-muted-foreground">{isES ? feature.descES : feature.descEN}</p></div>)}</div></div></section>
      <section className="py-20 px-4 bg-background"><div className="max-w-2xl mx-auto text-center"><h2 className="text-3xl font-bold mb-4">{isES ? "¿Listo para evaluar un caso?" : "Ready to evaluate a use case?"}</h2><p className="text-lg text-muted-foreground mb-8">{isES ? "Revisamos datos, arquitectura, riesgo y valor antes de definir el sistema." : "We review data, architecture, risk and value before defining the system."}</p><Link href={href("/contact")} className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">{isES ? "Contáctanos" : "Contact Us"}<ArrowRight className="w-4 h-4"/></Link></div></section>
    </main>
  )
}
