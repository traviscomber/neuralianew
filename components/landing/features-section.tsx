"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, MessageSquare, Zap, Shield, BarChart3, Clock, Users, Globe, Cpu } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FeaturesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Powerful AI Features",
      subtitle: "Everything you need to build and deploy intelligent AI solutions",
      features: [
        {
          icon: Brain,
          title: "Advanced AI Models",
          description: "State-of-the-art language models and machine learning algorithms",
          badge: "Core",
        },
        {
          icon: MessageSquare,
          title: "Natural Conversations",
          description: "Human-like interactions with context awareness and memory",
          badge: "Popular",
        },
        {
          icon: Zap,
          title: "Lightning Fast",
          description: "Sub-second response times with optimized infrastructure",
          badge: "Performance",
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "Bank-level encryption and compliance with industry standards",
          badge: "Security",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          description: "Real-time insights and performance metrics for your AI agents",
          badge: "Analytics",
        },
        {
          icon: Clock,
          title: "24/7 Availability",
          description: "Round-the-clock operation with 99.9% uptime guarantee",
          badge: "Reliability",
        },
        {
          icon: Users,
          title: "Multi-User Support",
          description: "Concurrent conversations with unlimited user capacity",
          badge: "Scalability",
        },
        {
          icon: Globe,
          title: "Global Deployment",
          description: "Worldwide infrastructure with low-latency edge computing",
          badge: "Global",
        },
        {
          icon: Cpu,
          title: "Custom Integration",
          description: "Seamless integration with your existing systems and workflows",
          badge: "Integration",
        },
      ],
    },
    es: {
      title: "Características Poderosas de IA",
      subtitle: "Todo lo que necesitas para construir y desplegar soluciones inteligentes de IA",
      features: [
        {
          icon: Brain,
          title: "Modelos de IA Avanzados",
          description: "Modelos de lenguaje de vanguardia y algoritmos de aprendizaje automático",
          badge: "Principal",
        },
        {
          icon: MessageSquare,
          title: "Conversaciones Naturales",
          description: "Interacciones similares a las humanas con conciencia contextual y memoria",
          badge: "Popular",
        },
        {
          icon: Zap,
          title: "Súper Rápido",
          description: "Tiempos de respuesta de menos de un segundo con infraestructura optimizada",
          badge: "Rendimiento",
        },
        {
          icon: Shield,
          title: "Seguridad Empresarial",
          description: "Encriptación de nivel bancario y cumplimiento con estándares industriales",
          badge: "Seguridad",
        },
        {
          icon: BarChart3,
          title: "Panel de Análisis",
          description: "Insights en tiempo real y métricas de rendimiento para tus agentes de IA",
          badge: "Análisis",
        },
        {
          icon: Clock,
          title: "Disponibilidad 24/7",
          description: "Operación las 24 horas con garantía de 99.9% de tiempo activo",
          badge: "Confiabilidad",
        },
        {
          icon: Users,
          title: "Soporte Multi-Usuario",
          description: "Conversaciones concurrentes con capacidad ilimitada de usuarios",
          badge: "Escalabilidad",
        },
        {
          icon: Globe,
          title: "Despliegue Global",
          description: "Infraestructura mundial con computación de borde de baja latencia",
          badge: "Global",
        },
        {
          icon: Cpu,
          title: "Integración Personalizada",
          description: "Integración perfecta con tus sistemas y flujos de trabajo existentes",
          badge: "Integración",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="hidden md:block py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">{t.title}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:border-black transition-all duration-300 group bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs font-medium"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
