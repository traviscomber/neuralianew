"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Brain, Zap, Shield, BarChart3, Headphones } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "Conversaciones Naturales",
      description:
        "Agentes que entienden contexto, emociones y matices del lenguaje humano para interacciones auténticas.",
    },
    {
      icon: Brain,
      title: "Aprendizaje Continuo",
      description: "IA que se adapta y mejora constantemente basándose en cada interacción y feedback recibido.",
    },
    {
      icon: Zap,
      title: "Respuestas Instantáneas",
      description: "Tiempo de respuesta menor a 2 segundos con disponibilidad 24/7 sin interrupciones.",
    },
    {
      icon: Shield,
      title: "Seguridad Empresarial",
      description: "Encriptación end-to-end, cumplimiento GDPR y protocolos de seguridad de nivel bancario.",
    },
    {
      icon: BarChart3,
      title: "Analytics Avanzados",
      description: "Dashboards en tiempo real con métricas de satisfacción, conversiones y rendimiento detallado.",
    },
    {
      icon: Headphones,
      title: "Soporte Especializado",
      description: "Equipo técnico dedicado con soporte 24/7 y optimización continua de rendimiento.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Características</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Tecnología de vanguardia</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestros agentes de IA combinan las últimas innovaciones en procesamiento de lenguaje natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
