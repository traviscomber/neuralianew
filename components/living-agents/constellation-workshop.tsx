"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

interface Agent {
  name: string
  role: string
  emoji: string
  color: string
}

interface WorkflowStep {
  agent: string
  action: string
  description: string
  duration: number
}

const agents: Agent[] = [
  {
    name: "Creative Oracle",
    role: "Generador de Posibilidades",
    emoji: "🎯",
    color: "bg-blue-500/20 border-blue-500/40",
  },
  {
    name: "Analytic Critic",
    role: "Evaluador Crítico",
    emoji: "🔍",
    color: "bg-amber-500/20 border-amber-500/40",
  },
  {
    name: "Narrative Synthesizer",
    role: "Tejedor de Historias",
    emoji: "📖",
    color: "bg-emerald-500/20 border-emerald-500/40",
  },
  {
    name: "Context Keeper",
    role: "Guardián del Contexto",
    emoji: "🌍",
    color: "bg-purple-500/20 border-purple-500/40",
  },
]

const workflows = [
  {
    name: "World-Building Brainstorm",
    description: "Explorar nuevos mercados, productos o narrativas",
    steps: [
      {
        agent: "Creative Oracle",
        action: "Genera 20 Escenarios",
        description: "Futuros alternativos posibles",
        duration: 5,
      },
      {
        agent: "Analytic Critic",
        action: "Evalúa Viabilidad",
        description: "Riesgos, oportunidades y factibilidad",
        duration: 8,
      },
      {
        agent: "Narrative Synthesizer",
        action: "Teje Narrativas",
        description: "3 escenarios coherentes y memora bles",
        duration: 6,
      },
      {
        agent: "Context Keeper",
        action: "Valida Restricciones",
        description: "Presupuesto, tiempo, regulación",
        duration: 4,
      },
    ],
  },
  {
    name: "Brand Vision Workshop",
    description: "Definir identidad, posicionamiento y storytelling",
    steps: [
      {
        agent: "Creative Oracle",
        action: "Genera 15 Arquetipos",
        description: "Identidades de marca diferenciadas",
        duration: 5,
      },
      {
        agent: "Analytic Critic",
        action: "Valida vs Competencia",
        description: "Diferenciación y mercado viable",
        duration: 7,
      },
      {
        agent: "Narrative Synthesizer",
        action: "Crea Brand Story",
        description: "Narrativa única y memorable",
        duration: 6,
      },
      {
        agent: "Context Keeper",
        action: "Implementación Táctica",
        description: "Cómo vivir esta marca",
        duration: 4,
      },
    ],
  },
  {
    name: "Audience Signal Synthesis",
    description: "Entender audiencia y generar estrategia de conexión",
    steps: [
      {
        agent: "Creative Oracle",
        action: "Genera Perfiles",
        description: "Psicografía y motivaciones",
        duration: 5,
      },
      {
        agent: "Analytic Critic",
        action: "Valida contra Data",
        description: "Segmentos viables y tamaño",
        duration: 7,
      },
      {
        agent: "Narrative Synthesizer",
        action: "Narrativas de Conexión",
        description: "Único para cada segmento",
        duration: 6,
      },
      {
        agent: "Context Keeper",
        action: "Mapea Activación",
        description: "Canales y tácticas reales",
        duration: 4,
      },
    ],
  },
]

export function ConstellationWorkshop() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(0)
  const [animatingSteps, setAnimatingSteps] = useState<number[]>([])

  const currentWorkflow = workflows[selectedWorkflow]

  const playAnimation = () => {
    setAnimatingSteps([])
    currentWorkflow.steps.forEach((_, index) => {
      setTimeout(() => {
        setAnimatingSteps((prev) => [...prev, index])
      }, index * 1000)
    })
  }

  return (
    <div className="space-y-8">
      {/* Workflow Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {workflows.map((workflow, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedWorkflow(idx)
              setAnimatingSteps([])
            }}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedWorkflow === idx
                ? "border-primary bg-primary/10"
                : "border-border bg-card hover:border-primary/50"
            }`}
          >
            <h3 className="font-semibold text-foreground mb-1">{workflow.name}</h3>
            <p className="text-xs text-muted-foreground">{workflow.description}</p>
          </button>
        ))}
      </div>

      {/* Constellation Visualization */}
      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-foreground">{currentWorkflow.name}</CardTitle>
              <CardDescription>{currentWorkflow.description}</CardDescription>
            </div>
            <button
              onClick={playAnimation}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Reproducir
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Steps Flow */}
          <div className="space-y-4">
            {currentWorkflow.steps.map((step, idx) => {
              const agent = agents.find((a) => a.name === step.agent)
              const isAnimating = animatingSteps.includes(idx)

              return (
                <div key={idx} className="flex gap-4 items-start">
                  {/* Step Number */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all ${
                      isAnimating
                        ? "bg-primary text-primary-foreground scale-110"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {idx + 1}
                  </div>

                  {/* Step Content */}
                  <div
                    className={`flex-1 p-4 rounded-lg border transition-all ${
                      agent?.color || "bg-card border-border"
                    } ${isAnimating ? "scale-105 shadow-lg" : "scale-100"}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{agent?.emoji}</span>
                          <div>
                            <p className="font-semibold text-foreground text-sm">{step.agent}</p>
                            <p className="text-xs text-muted-foreground">{agent?.role}</p>
                          </div>
                        </div>
                        <p className="font-medium text-foreground mb-1">{step.action}</p>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <Badge variant="secondary" className="text-xs">
                          {step.duration}m
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  {idx < currentWorkflow.steps.length - 1 && (
                    <div className="flex flex-col items-center gap-1 -ml-2">
                      <ChevronRight className="w-5 h-5 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Result Box */}
          <div className="mt-8 p-4 bg-background border border-border rounded-lg">
            <p className="text-xs font-semibold text-primary uppercase mb-2">Resultado</p>
            <p className="text-sm text-foreground">
              {selectedWorkflow === 0 &&
                "Panorama de futuros posibles con rutas claras y trade-offs transparentes."}
              {selectedWorkflow === 1 &&
                "Identidad clara, storytelling único, y guía de implementación operacional."}
              {selectedWorkflow === 2 &&
                "Comprensión profunda de audiencia con estrategias de conexión accionables."}
            </p>
          </div>

          {/* Memory Note */}
          <div className="p-4 bg-background border border-border/50 rounded-lg">
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Memoria Persistente</p>
            <p className="text-xs text-muted-foreground">
              Todos los pasos quedan capturados. Las ideas generadas, críticas aplicadas y narrativas creadas se
              preservan y mejoran en futuros ciclos de ideación.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Agent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {agents.map((agent) => (
          <Card key={agent.name} className={`border-2 ${agent.color}`}>
            <CardHeader className="pb-3">
              <div className="text-3xl mb-2">{agent.emoji}</div>
              <CardTitle className="text-base text-foreground">{agent.name}</CardTitle>
              <CardDescription className="text-xs">{agent.role}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
