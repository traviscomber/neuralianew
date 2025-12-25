"use client"

import { useLanguage } from "@/lib/language-context"
import { TrendingUp, Zap, Users, BarChart3 } from "lucide-react"

export function OutcomesShowcase() {
  const { language } = useLanguage()

  const outcomes = {
    en: [
      {
        title: "Blockchain Development",
        description: "Smart contracts and decentralized solutions powered by AI orchestration",
        impact: "80% faster development",
        metric: "+250 contracts/month",
        icon: Zap,
      },
      {
        title: "Creative Production",
        description: "360° content generation and quality assurance for creative studio",
        impact: "10x faster output",
        metric: "5000+ assets/month",
        icon: TrendingUp,
      },
      {
        title: "Enterprise Operations",
        description: "Multi-channel customer service automation across all touchpoints",
        impact: "60% cost reduction",
        metric: "10k+ interactions/day",
        icon: Users,
      },
      {
        title: "Data Intelligence",
        description: "Real-time analytics and intelligent decision engine for enterprises",
        impact: "Instant insights",
        metric: "Real-time processing",
        icon: BarChart3,
      },
    ],
    es: [
      {
        title: "Desarrollos en Blockchain",
        description: "Contratos inteligentes y soluciones descentralizadas potenciadas por orquestación de IA",
        impact: "80% más rápido",
        metric: "+250 contratos/mes",
        icon: Zap,
      },
      {
        title: "Producción Creativa",
        description: "Generación 360° de contenido y aseguramiento de calidad para estudio creativo",
        impact: "10x más rápido",
        metric: "5000+ assets/mes",
        icon: TrendingUp,
      },
      {
        title: "Operaciones Empresariales",
        description: "Automatización de servicio al cliente multicanal en todos los puntos de contacto",
        impact: "60% reducción de costos",
        metric: "10k+ interacciones/día",
        icon: Users,
      },
      {
        title: "Inteligencia de Datos",
        description: "Análisis en tiempo real y motor de decisiones inteligente para empresas",
        impact: "Insights instantáneos",
        metric: "Procesamiento en vivo",
        icon: BarChart3,
      },
    ],
  }

  const t = outcomes[language]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {t.map((outcome, i) => (
        <div
          key={i}
          className="group border border-gray-200 p-8 hover:border-black transition-all duration-300 bg-white hover:bg-gray-50 cursor-pointer"
        >
          <div className="mb-6">
            <div className="w-14 h-14 bg-black text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <outcome.icon className="w-7 h-7" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
            {outcome.title}
          </h3>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">{outcome.description}</p>

          <div className="pt-6 border-t border-gray-200">
            <div className="mb-3">
              <p className="text-sm font-semibold text-black">{outcome.impact}</p>
            </div>
            <p className="text-xs text-gray-500 font-medium">{outcome.metric}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
