"use client"

import { useLanguage } from "@/lib/language-context"
import { TrendingUp, Zap, Users, BarChart3 } from "lucide-react"

export function OutcomesShowcase() {
  const { language } = useLanguage()

  console.log("[v0] OutcomesShowcase rendered with language:", language)

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
        title: "Productive Field Management",
        description:
          "Blackswan FC - Complete system for managing productive operations powered by N3uralia AI orchestration",
        impact: "65% efficiency gain",
        metric: "Comprehensive field operations",
        icon: Users,
        ceo: "Santiago Colvin",
        company: "Blackswan Facility Core",
      },
      {
        title: "Hospitality Operations & Waste Management",
        description:
          "Evergreen Guesthouse - AI-powered waste management system and intelligent booking optimization in Thailand",
        impact: "30% waste reduction",
        metric: "80+ bookings/month managed",
        icon: Users,
        location: "Phuket, Thailand",
        company: "Evergreen Guesthouse",
      },
      {
        title: "Agricultural Nutrient Monitoring",
        description:
          "EcosueloLab - Satellite-based soil nutrient analysis integrated with IrriWatch irrigation system for optimal crop yields",
        impact: "35% water savings",
        metric: "Real-time soil monitoring",
        icon: BarChart3,
        ceo: "Sebastian Puelma",
        company: "EcosueloLab",
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
        title: "Gestión de Campos Productivos",
        description:
          "Blackswan FC - Sistema completo para la gestión de operaciones productivas potenciada por orquestación de IA N3uralia",
        impact: "65% ganancia en eficiencia",
        metric: "Gestión integral de operaciones",
        icon: Users,
        ceo: "Santiago Colvin",
        company: "Blackswan Facility Core",
      },
      {
        title: "Operaciones Hoteleras y Gestión de Residuos",
        description:
          "Evergreen Guesthouse - Sistema de IA para gestión de residuos, optimización inteligente de reservas y sistema de booking eficiente en Tailandia",
        impact: "30% reducción de residuos",
        metric: "80+ reservas/mes gestionadas",
        icon: Users,
        location: "Phuket, Tailandia",
        company: "Evergreen Guesthouse",
      },
      {
        title: "Monitoreo de Nutrientes Agrícolas",
        description:
          "EcosueloLab - Análisis de nutrientes de suelo basado en satélite integrado con sistema de riego IrriWatch para maximizar rendimientos",
        impact: "35% ahorro de agua",
        metric: "Monitoreo de suelo en tiempo real",
        icon: BarChart3,
        ceo: "Sebastian Puelma",
        company: "EcosueloLab",
      },
    ],
  }

  const t = outcomes[language]

  console.log("[v0] Outcomes data loaded:", t.length, "items")

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {t.map((outcome, i) => (
        <div
          key={i}
          className="group border border-border p-8 hover:border-primary/40 transition-all duration-300 bg-card hover:bg-card/80 cursor-pointer"
        >
          <div className="mb-6">
            <div className="w-14 h-14 bg-primary text-primary-foreground rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <outcome.icon className="w-7 h-7" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {outcome.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{outcome.description}</p>

          <div className="pt-6 border-t border-border">
            <div className="mb-3">
              <p className="text-sm font-semibold text-foreground">{outcome.impact}</p>
            </div>
            <p className="text-xs text-muted-foreground font-medium">{outcome.metric}</p>
            {outcome.ceo && (
              <p className="text-xs text-muted-foreground mt-3 font-medium">
                {language === "es" ? "CEO: " : "CEO: "}
                {outcome.ceo} ({outcome.company})
              </p>
            )}
            {outcome.location && <p className="text-xs text-muted-foreground mt-3 font-medium">{`📍 ${outcome.location}`}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
