"use client"

import { ArrowRight, Network, Zap, Eye, Shield } from "lucide-react"
import Link from "next/link"

interface AgentMatrixShowcaseProps {
  locale?: "es" | "en"
}

export function AgentMatrixShowcase({ locale = "es" }: AgentMatrixShowcaseProps) {
  const isES = locale === "es"

  const features = [
    {
      icon: Network,
      title: isES ? "Redes de Agentes" : "Agent Networks",
      description: isES 
        ? "Múltiples agentes especializados trabajan coordinados en tu infraestructura"
        : "Multiple specialized agents working coordinated within your infrastructure",
    },
    {
      icon: Eye,
      title: isES ? "Observable" : "Observable",
      description: isES
        ? "Visualiza exactamente qué está sucediendo dentro de tu sistema IA"
        : "Visualize exactly what is happening inside your AI system",
    },
    {
      icon: Shield,
      title: isES ? "Auditable" : "Auditable",
      description: isES
        ? "Cada decisión de un agente es registrada, trazable y verificable"
        : "Every agent decision is recorded, traceable, and verifiable",
    },
    {
      icon: Zap,
      title: isES ? "En Tiempo Real" : "Real-Time",
      description: isES
        ? "Monitorea performance, latencia y errores mientras suceden"
        : "Monitor performance, latency, and errors as they happen",
    },
  ]

  const agents = [
    "Research Agent",
    "Data Processing",
    "Workflow Automation",
    "Brand Intelligence",
    "Knowledge Retrieval",
    "Content Generation",
    "Integration Layer",
    "Infrastructure Control",
  ]

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
            <Network className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {isES ? "N3uralia Agent Matrix" : "N3uralia Agent Matrix"}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            {isES 
              ? "Orquestación de Agentes Inteligentes"
              : "Intelligent Agent Orchestration"}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {isES
              ? "No reemplazamos tu equipo. Ampliamos su capacidad con redes de agentes especializados que trabajan 24/7, observable y bajo tu control total."
              : "We don't replace your team. We extend their capacity with specialized agent networks working 24/7, observable and under your total control."}
          </p>
        </div>

        {/* Agent Network Grid */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">
            {isES ? "Red de Agentes Coordinados" : "Coordinated Agent Network"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {agents.map((agent, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-lg border border-border/50 bg-card/50 hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-pointer"
              >
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {agent}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            {isES
              ? "Cada agente especializado puede ser personalizado para tu flujo de trabajo específico"
              : "Each specialized agent can be customized for your specific workflow"}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div 
                key={idx}
                className="p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all"
              >
                <Icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={isES ? "/es/agent-matrix" : "/en/agent-matrix"}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-1 transition-all font-medium"
          >
            {isES ? "Explorar Agent Matrix" : "Explore Agent Matrix"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
