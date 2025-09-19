"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Calendar, ShoppingCart, Headphones, TrendingUp, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { TestFreeCTASection } from "@/components/landing/test-free-cta-section"

const translations = {
  en: {
    title: "AI Agent Use Cases",
    subtitle: "Versatile solutions for every business need and industry vertical.",
    useCases: {
      customerSupport: {
        title: "Customer Support",
        description: "Automate first-level support, handle FAQs, and provide instant assistance to customers.",
        benefits: ["Reduce support tickets by 70%", "24/7 availability", "Consistent service quality"],
      },
      salesAssistant: {
        title: "Sales Assistant",
        description: "Qualify leads, provide product information, and guide customers through the sales funnel.",
        benefits: ["Increase conversion rates", "Capture leads 24/7", "Personalized recommendations"],
      },
      appointmentBooking: {
        title: "Appointment Booking",
        description: "Handle scheduling, confirmations, and reminders automatically across all channels.",
        benefits: ["Reduce no-shows by 60%", "Automated reminders", "Calendar integration"],
      },
      orderManagement: {
        title: "Order Management",
        description: "Process orders, track shipments, and handle returns with intelligent automation.",
        benefits: ["Faster order processing", "Real-time updates", "Reduced errors"],
      },
    },
  },
  es: {
    title: "Casos de Uso de Agentes IA",
    subtitle: "Soluciones versátiles para cada necesidad empresarial y vertical de industria.",
    useCases: {
      customerSupport: {
        title: "Soporte al Cliente",
        description:
          "Automatiza el soporte de primer nivel, maneja FAQs y proporciona asistencia instantánea a los clientes.",
        benefits: ["Reduce tickets de soporte en 70%", "Disponibilidad 24/7", "Calidad de servicio consistente"],
      },
      salesAssistant: {
        title: "Asistente de Ventas",
        description:
          "Califica leads, proporciona información de productos y guía a los clientes a través del embudo de ventas.",
        benefits: ["Aumenta tasas de conversión", "Captura leads 24/7", "Recomendaciones personalizadas"],
      },
      appointmentBooking: {
        title: "Reserva de Citas",
        description: "Maneja programación, confirmaciones y recordatorios automáticamente en todos los canales.",
        benefits: ["Reduce ausencias en 60%", "Recordatorios automáticos", "Integración con calendario"],
      },
      orderManagement: {
        title: "Gestión de Pedidos",
        description: "Procesa pedidos, rastrea envíos y maneja devoluciones con automatización inteligente.",
        benefits: ["Procesamiento más rápido", "Actualizaciones en tiempo real", "Errores reducidos"],
      },
    },
  },
}

const useCaseIcons = {
  customerSupport: Headphones,
  salesAssistant: TrendingUp,
  appointmentBooking: Calendar,
  orderManagement: ShoppingCart,
}

export default function AgentsPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-slate-600 border-slate-300">
            <Bot className="w-4 h-4 mr-2" />
            {language === "es" ? "Agentes IA" : "AI Agents"}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">{t.title}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(t.useCases).map(([key, useCase], index) => {
            const IconComponent = useCaseIcons[key as keyof typeof useCaseIcons]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                        <IconComponent className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                        {useCase.title}
                      </CardTitle>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{useCase.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Test Free CTA Section */}
      <TestFreeCTASection />
    </div>
  )
}
