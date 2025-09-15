"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Brain, MessageSquare, Zap, Shield, Clock, Users, BarChart3, Globe, Cpu } from "lucide-react"

export function FeaturesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Powerful AI Features",
      title: "Advanced Capabilities",
      subtitle: "Enterprise-grade AI technology built for your success",
      features: [
        {
          icon: Brain,
          title: "Advanced AI Training",
          description:
            "Custom training on your specific business data and processes for maximum accuracy and relevance.",
        },
        {
          icon: MessageSquare,
          title: "Natural Conversations",
          description: "Human-like interactions that understand context, intent, and nuance in multiple languages.",
        },
        {
          icon: Zap,
          title: "Real-time Processing",
          description: "Sub-200ms response times ensuring instant customer satisfaction and seamless experiences.",
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "ISO 27001 certified with end-to-end encryption and compliance with global security standards.",
        },
        {
          icon: Clock,
          title: "24/7 Operation",
          description: "Never miss a customer inquiry with round-the-clock availability and consistent performance.",
        },
        {
          icon: Users,
          title: "Multi-language Support",
          description: "Native Spanish and English support with cultural adaptation and localized responses.",
        },
        {
          icon: BarChart3,
          title: "Analytics & Insights",
          description: "Comprehensive analytics dashboard with real-time metrics and performance insights.",
        },
        {
          icon: Globe,
          title: "Global Scalability",
          description: "Cloud-native architecture that scales automatically with your business growth worldwide.",
        },
        {
          icon: Cpu,
          title: "Smart Integration",
          description: "Seamless integration with existing systems, CRMs, and business tools through robust APIs.",
        },
      ],
    },
    es: {
      badge: "Características Poderosas de IA",
      title: "Capacidades Avanzadas",
      subtitle: "Tecnología de IA de nivel empresarial construida para tu éxito",
      features: [
        {
          icon: Brain,
          title: "Entrenamiento Avanzado de IA",
          description:
            "Entrenamiento personalizado en tus datos y procesos empresariales específicos para máxima precisión y relevancia.",
        },
        {
          icon: MessageSquare,
          title: "Conversaciones Naturales",
          description:
            "Interacciones similares a las humanas que entienden contexto, intención y matices en múltiples idiomas.",
        },
        {
          icon: Zap,
          title: "Procesamiento en Tiempo Real",
          description:
            "Tiempos de respuesta sub-200ms asegurando satisfacción instantánea del cliente y experiencias fluidas.",
        },
        {
          icon: Shield,
          title: "Seguridad Empresarial",
          description:
            "Certificado ISO 27001 con cifrado de extremo a extremo y cumplimiento con estándares de seguridad globales.",
        },
        {
          icon: Clock,
          title: "Operación 24/7",
          description:
            "Nunca pierdas una consulta de cliente con disponibilidad las 24 horas y rendimiento consistente.",
        },
        {
          icon: Users,
          title: "Soporte Multiidioma",
          description: "Soporte nativo en español e inglés con adaptación cultural y respuestas localizadas.",
        },
        {
          icon: BarChart3,
          title: "Análisis e Insights",
          description: "Panel de análisis integral con métricas en tiempo real e insights de rendimiento.",
        },
        {
          icon: Globe,
          title: "Escalabilidad Global",
          description:
            "Arquitectura nativa en la nube que escala automáticamente con el crecimiento de tu negocio mundialmente.",
        },
        {
          icon: Cpu,
          title: "Integración Inteligente",
          description:
            "Integración perfecta con sistemas existentes, CRMs y herramientas empresariales a través de APIs robustas.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="hidden md:block py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-black text-white border-0 mb-6">{t.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6">{t.title}</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">{t.subtitle}</p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                      <feature.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-2xl font-light text-gray-900 mb-4">{feature.title}</h3>

                    <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
