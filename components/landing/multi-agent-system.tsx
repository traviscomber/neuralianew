"use client"

import { useLanguage } from "@/lib/language-context"
import { Brain, GitBranch, RefreshCw, Network, Zap, Database } from "lucide-react"

export function MultiAgentSystem() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Multi-Agent AI System",
      subtitle: "Not just a product. A living, evolving ecosystem of intelligent agents.",
      agents: [
        {
          name: "Conversational Agents",
          icon: Brain,
          description: "Natural language processing with context awareness and memory",
        },
        {
          name: "Workflow Orchestration",
          icon: GitBranch,
          description: "Coordinate complex multi-step processes across systems",
        },
        {
          name: "Self-Improving Logic",
          icon: RefreshCw,
          description: "Agents that learn from interactions and optimize over time",
        },
        {
          name: "Integration Layer",
          icon: Network,
          description: "Connect and synchronize data across your entire stack",
        },
        {
          name: "Real-Time Processing",
          icon: Zap,
          description: "Sub-second response times for mission-critical operations",
        },
        {
          name: "Knowledge Management",
          icon: Database,
          description: "Persistent memory and architectural decision tracking",
        },
      ],
      cta: "This is what sets N3uralia apart from simple automation tools",
    },
    es: {
      title: "Sistema Multi-Agente de IA",
      subtitle: "No es solo un producto. Es un ecosistema vivo y evolutivo de agentes inteligentes.",
      agents: [
        {
          name: "Agentes Conversacionales",
          icon: Brain,
          description: "Procesamiento de lenguaje natural con conciencia de contexto y memoria",
        },
        {
          name: "Orquestación de Flujos",
          icon: GitBranch,
          description: "Coordina procesos complejos de múltiples pasos entre sistemas",
        },
        {
          name: "Lógica Auto-Mejorante",
          icon: RefreshCw,
          description: "Agentes que aprenden de las interacciones y optimizan con el tiempo",
        },
        {
          name: "Capa de Integración",
          icon: Network,
          description: "Conecta y sincroniza datos en todo tu stack tecnológico",
        },
        {
          name: "Procesamiento en Tiempo Real",
          icon: Zap,
          description: "Tiempos de respuesta subsegundo para operaciones críticas",
        },
        {
          name: "Gestión de Conocimiento",
          icon: Database,
          description: "Memoria persistente y seguimiento de decisiones arquitectónicas",
        },
      ],
      cta: "Esto es lo que diferencia a N3uralia de las herramientas de automatización simples",
    },
  }

  const t = content[language]

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h2>
          <p className="text-xl text-gray-400">{t.subtitle}</p>
        </div>

        {/* Agent Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {t.agents.map((agent, index) => {
            const Icon = agent.icon
            return (
              <div
                key={index}
                className="p-6 border border-gray-800 bg-gray-950/50 hover:border-gray-700 transition-colors"
              >
                <Icon className="w-10 h-10 mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2">{agent.name}</h3>
                <p className="text-sm text-gray-400">{agent.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Text */}
        <div className="text-center">
          <p className="text-gray-400 italic">{t.cta}</p>
        </div>
      </div>
    </section>
  )
}
