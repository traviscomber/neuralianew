"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"

export function CapabilitiesPageClient() {
  const sixPillars = [
    {
      title: "Agentic Architecture",
      description: "Agents autónomos con memoria persistente y toma de decisiones mejorada",
      features: ["Planning & Reasoning", "Multi-step Workflows", "Dynamic Tool Usage", "Context Awareness"],
      link: "/conversational-intelligence"
    },
    {
      title: "Living Agents",
      description: "Agents que evolucionan, aprenden y mejoran continuamente",
      features: ["Continuous Learning", "Self-Optimization", "Behavior Adaptation", "Performance Tracking"],
      link: "/living-agents"
    },
    {
      title: "Multi-Agent Coordination",
      description: "Orquestación inteligente de múltiples agentes trabajando en paralelo",
      features: ["Task Distribution", "Resource Optimization", "Conflict Resolution", "Collective Intelligence"],
      link: "/coordination"
    },
    {
      title: "Conversational Intelligence",
      description: "Diálogos naturales con comprensión profunda del contexto",
      features: ["NLP Advanced", "Context Preservation", "Intent Recognition", "Dynamic Responses"],
      link: "/conversational-intelligence"
    },
    {
      title: "Knowledge Synthesis",
      description: "Integración y procesamiento de múltiples fuentes de información",
      features: ["Data Integration", "Pattern Recognition", "Knowledge Graphs", "Real-time Processing"],
      link: "/capabilities"
    },
    {
      title: "Vibe Selling",
      description: "Comunicación empática y personalizada que genera conexión",
      features: ["Sentiment Analysis", "Tone Adaptation", "Personality Matching", "Engagement Optimization"],
      link: "/vibe-selling"
    },
  ]

  const livingAgentsFeatures = [
    {
      title: "Persistent Memory",
      description: "Los agentes recuerdan interacciones previas y aprenden de cada conversación"
    },
    {
      title: "Self-Optimization",
      description: "Mejora continua basada en feedback y resultados medibles"
    },
    {
      title: "Adaptive Behavior",
      description: "Cambian su estrategia según contexto, usuario y objetivos"
    },
    {
      title: "Predictive Intelligence",
      description: "Anticipan necesidades y toman acciones proactivas"
    },
  ]

  const conversationalFeatures = [
    {
      title: "Context Understanding",
      description: "Comprende matices, implicaciones y trasfondo de cada conversación"
    },
    {
      title: "Natural Dialogues",
      description: "Respuestas fluidas y naturales que generan confianza"
    },
    {
      title: "Multi-turn Conversations",
      description: "Mantiene coherencia en conversaciones largas y complejas"
    },
    {
      title: "Emotional Intelligence",
      description: "Reconoce y responde a estados emocionales del usuario"
    },
  ]

  const productionFeatures = [
    {
      title: "99.9% Uptime SLA",
      description: "Infrastructure redundante y monitoreo 24/7"
    },
    {
      title: "Enterprise Security",
      description: "Encryption, compliance (SOC 2, GDPR), auditoría completa"
    },
    {
      title: "Scalability",
      description: "Desde miles hasta millones de interacciones simultáneas"
    },
    {
      title: "Real-time Analytics",
      description: "Métricas, dashboards y reporting en tiempo real"
    },
  ]

  return (
    <>
      {/* 6 Pillars Section */}
      <SectionBackground section="capabilities">
        <section id="pilares" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="h2 mb-4">Los 6 Pilares</h2>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                Arquitectura diseñada para máxima inteligencia, escalabilidad y control
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sixPillars.map((pillar, i) => (
                <Link key={i} href={pillar.link}>
                  <div className="h-full border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pillar.description}</p>
                    <ul className="space-y-2">
                      {pillar.features.map((feature, j) => (
                        <li key={j} className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Living Agents */}
      <SectionBackground section="solutions">
        <section id="living-agents" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="h2 mb-4">Living Agents</h2>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                Agentes que no solo responden, sino que evolucionan y mejoran constantemente
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {livingAgentsFeatures.map((feature, i) => (
                <div key={i} className="border border-border rounded-lg p-8 bg-card">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/living-agents"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Explorar Living Agents
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Conversational Intelligence */}
      <SectionBackground section="blog">
        <section id="conversational" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="h2 mb-4">Conversational Intelligence</h2>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                Comprensión profunda del lenguaje natural y generación de respuestas inteligentes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {conversationalFeatures.map((feature, i) => (
                <div key={i} className="border border-border rounded-lg p-8 bg-card">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/conversational-intelligence"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Explorar Conversational Intelligence
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Production Ready */}
      <SectionBackground section="workflow">
        <section id="produccion" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="h2 mb-4">Production-Grade</h2>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                Sistema confiable, seguro y escalable para aplicaciones empresariales críticas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productionFeatures.map((feature, i) => (
                <div key={i} className="border border-border rounded-lg p-8 bg-card">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Conversar sobre tu proyecto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </>
  )
}
