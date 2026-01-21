"use client"

import { Eye, Brain, Wand2, CheckCircle2 } from "lucide-react"

const agents = [
  {
    id: "observer",
    name: "Observer Agent",
    role: "Inteligencia Perceptual",
    description: "Analiza contexto, datos y patrones. Entiende tu negocio profundamente.",
    icon: Eye,
    capabilities: ["Análisis de datos en tiempo real", "Detección de patrones ocultos", "Contextualización automática"],
    color: "#739696",
  },
  {
    id: "strategist",
    name: "Strategist Agent",
    role: "Inteligencia Decisiva",
    description: "Propone decisiones inteligentes basadas en análisis. Minimiza riesgos, maximiza oportunidades.",
    icon: Brain,
    capabilities: ["Evaluación multi-criterio", "Simulación de escenarios", "Recomendaciones basadas en IA"],
    color: "#739696",
  },
  {
    id: "creator",
    name: "Creator Agent",
    role: "Inteligencia Ejecutiva",
    description: "Genera soluciones, contenido y automatizaciones. Transforma ideas en realidad.",
    icon: Wand2,
    capabilities: ["Generación de contenido personalizado", "Automatización inteligente", "Integración full-stack"],
    color: "#739696",
  },
  {
    id: "verifier",
    name: "Verifier Agent",
    role: "Inteligencia Verificadora",
    description: "Valida resultados en tiempo real. Garantiza calidad y consistencia.",
    icon: CheckCircle2,
    capabilities: ["Control de calidad continuo", "Validación en tiempo real", "Alertas proactivas"],
    color: "#739696",
  },
]

export function MultiAgentRoles() {
  return (
    <section className="bg-background py-24 border-t border-border px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="h2 text-foreground mb-4">Los Cuatro Agentes Inteligentes de N3uralia</h2>
          <p className="body text-muted-foreground max-w-2xl mx-auto">
            No es solo IA. Son cuatro roles cognitivos que trabajan juntos como un equipo humano,
            pero con velocidad y precisión de máquina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent) => {
            const IconComponent = agent.icon
            return (
              <div
                key={agent.id}
                className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-300 p-8"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon and Role */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="h3 text-foreground group-hover:text-primary transition-colors">{agent.name}</h3>
                        <p className="text-sm font-medium text-primary/80">{agent.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="body text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                    {agent.description}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Capacidades</p>
                    <ul className="space-y-2">
                      {agent.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Integration Note */}
        <div className="mt-16 p-8 rounded-lg border border-primary/20 bg-primary/5">
          <p className="text-center text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Los 4 agentes trabajan en sincronía.</span>
            {" "}
            Observer proporciona inteligencia, Strategist decide, Creator ejecuta, Verifier valida.
            Esto es lo que hace a N3uralia diferente: no es una herramienta, es un equipo cognitivo.
          </p>
        </div>
      </div>
    </section>
  )
}
