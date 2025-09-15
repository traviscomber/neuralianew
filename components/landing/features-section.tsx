"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Globe, BarChart3, MessageSquare, Cog, Users, Clock, TrendingUp } from "lucide-react"
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
          icon: Zap,
          title: "Lightning Fast Processing",
          description:
            "Process thousands of requests per second with sub-millisecond response times for real-time interactions.",
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description:
            "Bank-level encryption, SOC 2 compliance, and advanced security protocols protect your sensitive data.",
        },
        {
          icon: Globe,
          title: "Multi-Language Support",
          description:
            "Communicate with customers in 50+ languages with native-level understanding and cultural context.",
        },
        {
          icon: BarChart3,
          title: "Advanced Analytics",
          description:
            "Deep insights into customer behavior, performance metrics, and business intelligence dashboards.",
        },
        {
          icon: MessageSquare,
          title: "Omnichannel Integration",
          description: "Seamlessly connect across WhatsApp, Telegram, web chat, email, and voice channels.",
        },
        {
          icon: Cog,
          title: "No-Code Automation",
          description: "Build complex workflows and automations without technical expertise using our visual builder.",
        },
        {
          icon: Users,
          title: "Team Collaboration",
          description: "Multi-user workspaces with role-based permissions and real-time collaboration tools.",
        },
        {
          icon: Clock,
          title: "24/7 Operation",
          description: "Round-the-clock availability with 99.9% uptime guarantee and automatic failover systems.",
        },
        {
          icon: TrendingUp,
          title: "Scalable Infrastructure",
          description: "Auto-scaling cloud infrastructure that grows with your business from startup to enterprise.",
        },
      ],
    },
    es: {
      badge: "Características Clave",
      title: "Por Qué Elegir N3uralia para Tu Transformación de IA",
      subtitle:
        "Nuestra plataforma combina tecnología de IA de vanguardia con confiabilidad de nivel empresarial para entregar resultados excepcionales.",
      features: [
        {
          icon: Zap,
          title: "Procesamiento Ultra Rápido",
          description:
            "Procesa miles de solicitudes por segundo con tiempos de respuesta sub-milisegundo para interacciones en tiempo real.",
        },
        {
          icon: Shield,
          title: "Seguridad Empresarial",
          description:
            "Encriptación de nivel bancario, cumplimiento SOC 2 y protocolos de seguridad avanzados protegen tus datos sensibles.",
        },
        {
          icon: Globe,
          title: "Soporte Multiidioma",
          description: "Comunícate con clientes en más de 50 idiomas con comprensión nativa y contexto cultural.",
        },
        {
          icon: BarChart3,
          title: "Análisis Avanzado",
          description:
            "Insights profundos sobre comportamiento del cliente, métricas de rendimiento y dashboards de inteligencia empresarial.",
        },
        {
          icon: MessageSquare,
          title: "Integración Omnicanal",
          description: "Conecta sin problemas a través de WhatsApp, Telegram, chat web, email y canales de voz.",
        },
        {
          icon: Cog,
          title: "Automatización Sin Código",
          description:
            "Construye flujos de trabajo complejos y automatizaciones sin experiencia técnica usando nuestro constructor visual.",
        },
        {
          icon: Users,
          title: "Colaboración en Equipo",
          description:
            "Espacios de trabajo multiusuario con permisos basados en roles y herramientas de colaboración en tiempo real.",
        },
        {
          icon: Clock,
          title: "Operación 24/7",
          description:
            "Disponibilidad las 24 horas con garantía de 99.9% de tiempo activo y sistemas de failover automático.",
        },
        {
          icon: TrendingUp,
          title: "Infraestructura Escalable",
          description:
            "Infraestructura en la nube con auto-escalado que crece con tu negocio desde startup hasta empresa.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-gray-50 hidden md:block">
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
            <Card
              key={index}
              className="border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg bg-white"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
