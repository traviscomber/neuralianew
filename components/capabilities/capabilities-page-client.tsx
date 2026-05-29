"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/layout/footer"

interface CapabilitiesPageClientProps {
  locale: 'es' | 'en'
}

export function CapabilitiesPageClient({ locale }: CapabilitiesPageClientProps) {
  const isES = locale === 'es'
  const href = (path: string) => `/${locale}${path}`

  const content = {
    heroTitle: isES ? "Capacidades Técnicas" : "Technical Capabilities",
    heroDesc: isES 
      ? "Agentes IA técnicamente capaces, conductualmente seguros y medibles en impacto humano"
      : "Technically capable AI agents, behaviorally safe and measurable in real human impact",
    
    tabPillars: isES ? "7 Pilares" : "7 Pillars",
    tabResponsible: isES ? "IA Conversacional Responsable" : "Responsible Conversational AI",
    tabLiving: isES ? "Living Agents" : "Living Agents",
    tabConversational: isES ? "Inteligencia Conversacional" : "Conversational Intelligence",
    tabProduction: isES ? "En Producción" : "In Production",
  }

  const sevenPillars = [
    {
      titleES: "IA Conversacional Responsable",
      titleEN: "Responsible Conversational AI",
      descES: "Diálogos seguros, medibles y humanamente responsables que respetan autonomía",
      descEN: "Safe, measurable conversations designed for human dignity and autonomy",
      features: isES 
        ? ["Seguridad Conductual", "Detección de Riesgos", "Escalamiento a Humano", "Memoria Responsable", "Evaluación de Impacto", "Límites Claros"]
        : ["Behavioral Safety", "Risk Detection", "Human Escalation", "Responsible Memory", "Impact Evaluation", "Clear Boundaries"],
    },
    {
      titleES: "Arquitectura Agentica",
      titleEN: "Agentic Architecture",
      descES: "Agentes autónomos con memoria persistente y toma de decisiones mejorada",
      descEN: "Autonomous agents with persistent memory and enhanced decision making",
      features: isES 
        ? ["Planificación & Reasoning", "Workflows Multi-paso", "Uso Dinámico de Herramientas", "Conciencia de Contexto"]
        : ["Planning & Reasoning", "Multi-step Workflows", "Dynamic Tool Usage", "Context Awareness"],
    },
    {
      titleES: "Living Agents",
      titleEN: "Living Agents",
      descES: "Agentes que evolucionan, aprenden y mejoran continuamente",
      descEN: "Agents that evolve, learn and continuously improve",
      features: isES 
        ? ["Aprendizaje Continuo", "Auto-Optimización", "Adaptación de Comportamiento", "Seguimiento de Desempeño"]
        : ["Continuous Learning", "Self-Optimization", "Behavior Adaptation", "Performance Tracking"],
    },
    {
      titleES: "Orquestación Multi-Agente",
      titleEN: "Multi-Agent Coordination",
      descES: "Coordinación inteligente de múltiples agentes trabajando en paralelo",
      descEN: "Intelligent coordination of multiple agents working in parallel",
      features: isES 
        ? ["Distribución de Tareas", "Optimización de Recursos", "Resolución de Conflictos", "Inteligencia Colectiva"]
        : ["Task Distribution", "Resource Optimization", "Conflict Resolution", "Collective Intelligence"],
    },
    {
      titleES: "Inteligencia Conversacional",
      titleEN: "Conversational Intelligence",
      descES: "Diálogos naturales con comprensión profunda del contexto",
      descEN: "Natural dialogues with deep context understanding",
      features: isES 
        ? ["NLP Avanzado", "Preservación de Contexto", "Reconocimiento de Intención", "Respuestas Dinámicas"]
        : ["Advanced NLP", "Context Preservation", "Intent Recognition", "Dynamic Responses"],
    },
    {
      titleES: "Síntesis de Conocimiento",
      titleEN: "Knowledge Synthesis",
      descES: "Integración y procesamiento de múltiples fuentes de información",
      descEN: "Integration and processing of multiple information sources",
      features: isES 
        ? ["Integración de Datos", "Reconocimiento de Patrones", "Gráficos de Conocimiento", "Procesamiento Real-time"]
        : ["Data Integration", "Pattern Recognition", "Knowledge Graphs", "Real-time Processing"],
    },
    {
      titleES: "Comunicación Empática",
      titleEN: "Empathic Communication",
      descES: "Comunicación personalizada que genera conexión y confianza",
      descEN: "Personalized communication that builds connection and trust",
      features: isES 
        ? ["Análisis de Sentimiento", "Adaptación de Tono", "Matching de Personalidad", "Optimización de Engagement"]
        : ["Sentiment Analysis", "Tone Adaptation", "Personality Matching", "Engagement Optimization"],
    },
  ]

  const livingAgentsFeatures = [
    {
      titleES: "Memoria Persistente",
      titleEN: "Persistent Memory",
      descES: "Los agentes recuerdan interacciones previas y aprenden continuamente",
      descEN: "Agents remember previous interactions and learn continuously",
    },
    {
      titleES: "Auto-Optimización",
      titleEN: "Self-Optimization",
      descES: "Mejora continua basada en feedback y resultados medibles",
      descEN: "Continuous improvement based on feedback and measurable results",
    },
    {
      titleES: "Comportamiento Adaptivo",
      titleEN: "Adaptive Behavior",
      descES: "Cambian estrategia según contexto, usuario y objetivos",
      descEN: "Adapt strategy based on context, user and objectives",
    },
    {
      titleES: "Inteligencia Predictiva",
      titleEN: "Predictive Intelligence",
      descES: "Anticipan necesidades y toman acciones proactivas",
      descEN: "Anticipate needs and take proactive actions",
    },
  ]

  const conversationalFeatures = [
    {
      titleES: "Comprensión de Contexto",
      titleEN: "Context Understanding",
      descES: "Comprende matices, implicaciones y trasfondo de cada conversación",
      descEN: "Understands nuances, implications and context of every conversation",
    },
    {
      titleES: "Diálogos Naturales",
      titleEN: "Natural Dialogues",
      descES: "Respuestas fluidas que generan confianza y conexión",
      descEN: "Fluid responses that build trust and connection",
    },
    {
      titleES: "Conversaciones Multi-turno",
      titleEN: "Multi-turn Conversations",
      descES: "Mantiene coherencia en conversaciones largas y complejas",
      descEN: "Maintains coherence in long and complex conversations",
    },
    {
      titleES: "Inteligencia Emocional",
      titleEN: "Emotional Intelligence",
      descES: "Reconoce y responde a estados emocionales del usuario",
      descEN: "Recognizes and responds to user emotional states",
    },
  ]

  const productionFeatures = [
    {
      titleES: "99.9% Disponibilidad",
      titleEN: "99.9% Uptime SLA",
      descES: "Infraestructura redundante y monitoreo 24/7",
      descEN: "Redundant infrastructure and 24/7 monitoring",
    },
    {
      titleES: "Seguridad Empresarial",
      titleEN: "Enterprise Security",
      descES: "Encriptación, compliance (SOC 2, GDPR), auditoría completa",
      descEN: "Encryption, compliance (SOC 2, GDPR), complete auditing",
    },
    {
      titleES: "Escalabilidad",
      titleEN: "Scalability",
      descES: "Desde miles hasta millones de interacciones simultáneas",
      descEN: "From thousands to millions of simultaneous interactions",
    },
    {
      titleES: "Analítica Real-time",
      titleEN: "Real-time Analytics",
      descES: "Métricas, insights y dashboards en tiempo real",
      descEN: "Metrics, insights and real-time dashboards",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 border-b border-border px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">{content.heroTitle}</h1>
          <p className="text-xl text-muted-foreground">{content.heroDesc}</p>
        </div>
      </section>

      {/* Responsible AI Section */}
      <section className="py-20 px-4 border-b border-border bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{content.tabResponsible}</h2>
            <p className="text-lg text-muted-foreground">
              {isES
                ? "La diferencia de N3uralia: agentes que no solo son inteligentes, sino psicológicamente seguros, culturalmente adaptados y medibles en impacto humano real."
                : "N3uralia's difference: agents that are not only intelligent, but psychologically safe, culturally adapted, and measurable in real human impact."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="font-bold mb-2">
                {isES ? "🛡️ Seguridad Conductual" : "🛡️ Behavioral Safety"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isES
                  ? "Detecta riesgos, respeta límites, escala a humanos cuando es necesario"
                  : "Detects risks, respects boundaries, escalates to humans when needed"}
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="font-bold mb-2">
                {isES ? "📊 Medida Real" : "📊 Real Measurement"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isES
                  ? "Más allá de engagement: autoeficacia, confianza, aprendizaje real"
                  : "Beyond engagement: self-efficacy, trust, real learning outcomes"}
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="font-bold mb-2">
                {isES ? "🌍 Responsable" : "🌍 Culturally Aware"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isES
                  ? "Adaptado a Chile y LATAM, respetando contexto local y matices"
                  : "Adapted to Chile and LATAM, respecting local context and nuances"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Pillars Section */}
      <section id="pillars" className="py-20 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{content.tabPillars}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {isES 
              ? "No solo automatización. Sistemas conversacionales diseñados con seguridad conductual, medida de impacto real y responsabilidad cultural."
              : "Not just automation. Conversational systems designed with behavioral safety, real impact measurement, and cultural responsibility."}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sevenPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className={`p-6 border rounded-lg hover:shadow-lg transition-all ${
                  idx === 0 
                    ? "lg:col-span-2 border-primary/50 bg-primary/5" 
                    : "border-border hover:border-primary/50"
                }`}
              >
                <h3 className="text-lg font-bold mb-2">{isES ? pillar.titleES : pillar.titleEN}</h3>
                <p className="text-sm text-muted-foreground mb-4">{isES ? pillar.descES : pillar.descEN}</p>
                <ul className="space-y-1.5">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className="text-xs flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Agents Section */}
      <section id="living-agents" className="py-20 px-4 border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{content.tabLiving}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {livingAgentsFeatures.map((feature, idx) => (
              <div key={idx} className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-bold mb-2">{isES ? feature.titleES : feature.titleEN}</h3>
                <p className="text-sm text-muted-foreground">{isES ? feature.descES : feature.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversational Intelligence Section */}
      <section id="conversational" className="py-20 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{content.tabConversational}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {conversationalFeatures.map((feature, idx) => (
              <div key={idx} className="p-6 bg-muted/50 border border-border rounded-lg">
                <h3 className="text-lg font-bold mb-2">{isES ? feature.titleES : feature.titleEN}</h3>
                <p className="text-sm text-muted-foreground">{isES ? feature.descES : feature.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Ready Section */}
      <section id="production" className="py-20 px-4 border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{content.tabProduction}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {productionFeatures.map((feature, idx) => (
              <div key={idx} className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-bold mb-2">{isES ? feature.titleES : feature.titleEN}</h3>
                <p className="text-sm text-muted-foreground">{isES ? feature.descES : feature.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isES ? "¿Listo para implementar?" : "Ready to implement?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {isES ? "Descubre cómo N3uralia puede transformar tu negocio" : "Discover how N3uralia can transform your business"}
          </p>
          <Link
            href={href("/contact")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            {isES ? "Contáctanos" : "Contact Us"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
