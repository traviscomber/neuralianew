"use client"

import { Brain, Zap, Shield, Eye, Database } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AiCoreDiagram() {
  const { t } = useLanguage()

  const modules = [
    {
      icon: Brain,
      label: { en: "AI Agents", es: "Agentes de IA" },
      description: { en: "Intelligent assistants", es: "Asistentes inteligentes" },
      color: "from-accent to-accent/90",
    },
    {
      icon: Eye,
      label: { en: "User Interfaces", es: "Interfaces de Usuario" },
      description: { en: "Seamless experiences", es: "Experiencias fluidas" },
      color: "from-tertiary to-tertiary/90",
    },
    {
      icon: Zap,
      label: { en: "Orchestrator", es: "Orquestador" },
      description: { en: "Central coordination", es: "Coordinación central" },
      color: "from-secondary to-secondary/90",
    },
    {
      icon: Database,
      label: { en: "Distributed Memory", es: "Memoria Distribuida" },
      description: { en: "Persistent intelligence", es: "Inteligencia persistente" },
      color: "from-primary to-primary/90",
    },
    {
      icon: Shield,
      label: { en: "Automations & APIs", es: "Automatizaciones y APIs" },
      description: { en: "Seamless integrations", es: "Integraciones fluidas" },
      color: "from-accent/90 to-primary/90",
    },
  ]

  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50/50 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(61,143,127,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative w-[500px] h-[500px]">
        {/* Core center circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(61,143,127,0.25)] border-2 border-accent/30 backdrop-blur-sm z-10 will-change-transform">
          <div className="absolute inset-2 rounded-full border border-accent/20" />
          <Brain className="w-14 h-14 text-white drop-shadow-lg" />
        </div>

        {/* Module cards positioned around center */}
        {modules.map((module, i) => {
          const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2
          const x = Math.cos(angle) * 180
          const y = Math.sin(angle) * 180

          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <div
                className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/40 backdrop-blur-sm overflow-hidden`}
              >
                <div className="relative z-10">
                  <module.icon className="w-8 h-8 text-white drop-shadow-md" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
