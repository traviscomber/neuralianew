"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Zap, Shield, Globe, BarChart3, Smartphone, Clock, Users, Brain } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FeaturesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Key Features",
      title: "Why Choose N3uralia for Your AI Transformation",
      subtitle:
        "Our platform combines cutting-edge AI technology with enterprise-grade reliability to deliver exceptional results.",
      features: [
        {
          icon: MessageSquare,
          title: "Natural Conversations",
          description: "AI agents that understand context, emotion, and intent for human-like interactions.",
        },
        {
          icon: Zap,
          title: "Lightning Fast Deployment",
          description: "Get your AI solutions up and running in days, not months, with our streamlined process.",
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "Bank-level security with SOC 2 compliance, encryption, and data protection.",
        },
        {
          icon: Globe,
          title: "Multi-Language Support",
          description: "Communicate with customers in 50+ languages with native-level understanding.",
        },
        {
          icon: BarChart3,
          title: "Advanced Analytics",
          description: "Deep insights into customer interactions, performance metrics, and business impact.",
        },
        {
          icon: Smartphone,
          title: "Omnichannel Integration",
          description: "Seamless experience across WhatsApp, web, email, voice, and social platforms.",
        },
        {
          icon: Clock,
          title: "24/7 Availability",
          description: "Round-the-clock customer support with consistent quality and response times.",
        },
        {
          icon: Users,
          title: "Smart Escalation",
          description: "Intelligent handoff to human agents when complex issues require personal attention.",
        },
        {
          icon: Brain,
          title: "Continuous Learning",
          description: "AI that gets smarter over time, adapting to your business and customer needs.",
        },
      ],
    },
    es: {
      badge: "Características Clave",
      title: "Por Qué Elegir N3uralia para Tu Transformación con IA",
      subtitle:
        "Nuestra plataforma combina tecnología de IA de vanguardia con confiabilidad de nivel empresarial para entregar resultados excepcionales.",
      features: [
        {
          icon: MessageSquare,
          title: "Conversaciones Naturales",
          description: "Agentes de IA que entienden contexto, emoción e intención para interacciones humanas.",
        },
        {
          icon: Zap,
          title: "Despliegue Ultra Rápido",
          description: "Pon en marcha tus soluciones de IA en días, no meses, con nuestro proceso optimizado.",
        },
        {
          icon: Shield,
          title: "Seguridad Empresarial",
          description: "Seguridad de nivel bancario con cumplimiento SOC 2, encriptación y protección de datos.",
        },
        {
          icon: Globe,
          title: "Soporte Multi-idioma",
          description: "Comunícate con clientes en más de 50 idiomas con comprensión de nivel nativo.",
        },
        {
          icon: BarChart3,
          title: "Análisis Avanzados",
          description:
            "Insights profundos sobre interacciones de clientes, métricas de rendimiento e impacto empresarial.",
        },
        {
          icon: Smartphone,
          title: "Integración Omnicanal",
          description: "Experiencia perfecta en WhatsApp, web, email, voz y plataformas sociales.",
        },
        {
          icon: Clock,
          title: "Disponibilidad 24/7",
          description: "Soporte al cliente las 24 horas con calidad consistente y tiempos de respuesta.",
        },
        {
          icon: Users,
          title: "Escalación Inteligente",
          description:
            "Transferencia inteligente a agentes humanos cuando problemas complejos requieren atención personal.",
        },
        {
          icon: Brain,
          title: "Aprendizaje Continuo",
          description:
            "IA que se vuelve más inteligente con el tiempo, adaptándose a tu negocio y necesidades del cliente.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
