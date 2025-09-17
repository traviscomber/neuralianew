"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Zap, Shield, Globe, Clock, Brain, Users, BarChart3, MessageSquare, Cog } from "lucide-react"

export function FeaturesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Why Choose N3uralia",
      subtitle: "Advanced AI technology meets practical business solutions",
      features: [
        {
          icon: Zap,
          title: "Lightning Fast",
          description: "Deploy AI agents in minutes, not months. Our platform accelerates your digital transformation.",
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "Bank-level security with end-to-end encryption and compliance with international standards.",
        },
        {
          icon: Globe,
          title: "Multi-language Support",
          description: "Communicate with customers in their preferred language with native-level fluency.",
        },
        {
          icon: Clock,
          title: "24/7 Operation",
          description: "Your AI agents never sleep, providing round-the-clock customer service and support.",
        },
        {
          icon: Brain,
          title: "Smart Learning",
          description: "AI that learns from every interaction, continuously improving performance and accuracy.",
        },
        {
          icon: Users,
          title: "Team Collaboration",
          description: "Seamless integration with your existing team workflows and communication tools.",
        },
        {
          icon: BarChart3,
          title: "Advanced Analytics",
          description: "Detailed insights and performance metrics to optimize your business operations.",
        },
        {
          icon: MessageSquare,
          title: "Omnichannel Support",
          description: "Consistent experience across web, mobile, WhatsApp, and social media platforms.",
        },
        {
          icon: Cog,
          title: "Easy Integration",
          description: "Connect with your existing CRM, ERP, and business tools without technical complexity.",
        },
      ],
    },
    es: {
      title: "Por Qué Elegir N3uralia",
      subtitle: "Tecnología de IA avanzada se encuentra con soluciones empresariales prácticas",
      features: [
        {
          icon: Zap,
          title: "Súper Rápido",
          description:
            "Despliega agentes de IA en minutos, no meses. Nuestra plataforma acelera tu transformación digital.",
        },
        {
          icon: Shield,
          title: "Seguridad Empresarial",
          description:
            "Seguridad de nivel bancario con encriptación de extremo a extremo y cumplimiento de estándares internacionales.",
        },
        {
          icon: Globe,
          title: "Soporte Multiidioma",
          description: "Comunícate con clientes en su idioma preferido con fluidez de nivel nativo.",
        },
        {
          icon: Clock,
          title: "Operación 24/7",
          description: "Tus agentes de IA nunca duermen, proporcionando servicio al cliente y soporte las 24 horas.",
        },
        {
          icon: Brain,
          title: "Aprendizaje Inteligente",
          description: "IA que aprende de cada interacción, mejorando continuamente el rendimiento y la precisión.",
        },
        {
          icon: Users,
          title: "Colaboración en Equipo",
          description:
            "Integración perfecta con los flujos de trabajo y herramientas de comunicación de tu equipo existente.",
        },
        {
          icon: BarChart3,
          title: "Análisis Avanzado",
          description: "Insights detallados y métricas de rendimiento para optimizar las operaciones de tu negocio.",
        },
        {
          icon: MessageSquare,
          title: "Soporte Omnicanal",
          description: "Experiencia consistente en web, móvil, WhatsApp y plataformas de redes sociales.",
        },
        {
          icon: Cog,
          title: "Integración Fácil",
          description: "Conecta con tu CRM, ERP y herramientas empresariales existentes sin complejidad técnica.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
