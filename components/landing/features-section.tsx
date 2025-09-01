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
      description: "IA que mejora constantemente basándose en cada interacción, adaptándose a tu negocio específico.",
    },
    {
      icon: Zap,
      title: "Respuestas Instantáneas",
      description: "Atención 24/7 con tiempos de respuesta menores a 2 segundos, sin esperas ni frustraciones.",
    },
    {
      icon: Shield,
      title: "Seguridad Empresarial",
      description: "Encriptación end-to-end, cumplimiento GDPR y protección total de datos sensibles.",
    },
    {
      icon: BarChart3,
      title: "Analytics Avanzados",
      description: "Métricas detalladas, insights de comportamiento y reportes que impulsan decisiones estratégicas.",
    },
    {
      icon: Headphones,
      title: "Soporte Especializado",
      description: "Equipo técnico dedicado disponible 24/7 para optimización y resolución de consultas.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30">
            Características Principales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Tecnología que marca la diferencia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada característica está diseñada para maximizar el impacto en tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <feature.icon className="w-8 h-8 text-primary" />
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
