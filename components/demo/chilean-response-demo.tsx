"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Target,
  BarChart3,
} from "lucide-react"

interface MarketInsight {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  trend?: "up" | "down" | "stable"
  description: string
}

interface Recommendation {
  priority: "high" | "medium" | "low"
  title: string
  description: string
  timeline: string
  impact: string
}

const MARKET_INSIGHTS: MarketInsight[] = [
  {
    icon: Users,
    title: "Población Objetivo",
    value: "8.2M usuarios",
    trend: "up",
    description: "Segmento digital activo en Chile",
  },
  {
    icon: DollarSign,
    title: "Poder Adquisitivo",
    value: "$1,200 USD",
    trend: "stable",
    description: "Ingreso promedio mensual target",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Digital",
    value: "+23% anual",
    trend: "up",
    description: "Adopción de servicios digitales",
  },
  {
    icon: MapPin,
    title: "Concentración",
    value: "67% RM",
    trend: "stable",
    description: "Usuarios en Región Metropolitana",
  },
]

const RECOMMENDATIONS: Recommendation[] = [
  {
    priority: "high",
    title: "Localización de Contenido",
    description: "Adaptar messaging y referencias culturales específicas para el mercado chileno",
    timeline: "2-4 semanas",
    impact: "Alto impacto en conversión",
  },
  {
    priority: "high",
    title: "Partnership con Bancos Locales",
    description: "Integración con Banco de Chile y BCI para facilitar pagos locales",
    timeline: "6-8 semanas",
    impact: "Reduce fricción en checkout",
  },
  {
    priority: "medium",
    title: "Influencer Marketing Regional",
    description: "Colaboración con micro-influencers chilenos en nicho específico",
    timeline: "3-5 semanas",
    impact: "Aumenta credibilidad local",
  },
  {
    priority: "medium",
    title: "SEO Local",
    description: "Optimización para búsquedas específicas del mercado chileno",
    timeline: "4-6 semanas",
    impact: "Mejora visibilidad orgánica",
  },
  {
    priority: "low",
    title: "Eventos Presenciales",
    description: "Participación en ferias y eventos tecnológicos en Santiago",
    timeline: "8-12 semanas",
    impact: "Networking y brand awareness",
  },
]

export function ChileanResponseDemo() {
  const [selectedTab, setSelectedTab] = useState<"insights" | "recommendations">("insights")

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "down":
        return <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />
      default:
        return <BarChart3 className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Análisis de Mercado Chileno</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Insights específicos y recomendaciones estratégicas para el mercado chileno basados en data local y tendencias
          regionales.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-gray-100 p-1 rounded-lg">
          <Button
            variant={selectedTab === "insights" ? "default" : "ghost"}
            size="sm"
            onClick={() => setSelectedTab("insights")}
            className="mr-1"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Market Insights
          </Button>
          <Button
            variant={selectedTab === "recommendations" ? "default" : "ghost"}
            size="sm"
            onClick={() => setSelectedTab("recommendations")}
          >
            <Lightbulb className="h-4 w-4 mr-2" />
            Recomendaciones
          </Button>
        </div>
      </div>

      {/* Content */}
      {selectedTab === "insights" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MARKET_INSIGHTS.map((insight, index) => {
            const IconComponent = insight.icon
            return (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{insight.title}</CardTitle>
                    </div>
                    {getTrendIcon(insight.trend)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">{insight.value}</div>
                    <CardDescription>{insight.description}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {selectedTab === "recommendations" && (
        <div className="space-y-4">
          {RECOMMENDATIONS.map((rec, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={getPriorityColor(rec.priority)}>
                        {rec.priority === "high" && <AlertCircle className="h-3 w-3 mr-1" />}
                        {rec.priority === "medium" && <Clock className="h-3 w-3 mr-1" />}
                        {rec.priority === "low" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {rec.priority.toUpperCase()}
                      </Badge>
                      <CardTitle className="text-lg">{rec.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{rec.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">Timeline:</span>
                    <span>{rec.timeline}</span>
                  </div>
                  <Separator orientation="vertical" className="hidden sm:block h-4" />
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Target className="h-4 w-4" />
                    <span className="font-medium">Impacto:</span>
                    <span>{rec.impact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="text-center pt-6 border-t">
        <p className="text-sm text-gray-500">
          Análisis basado en data de mercado actualizada y tendencias locales • Última actualización: Enero 2024
        </p>
      </div>
    </div>
  )
}

// Export both named and default exports
export default ChileanResponseDemo
