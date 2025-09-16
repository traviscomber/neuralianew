"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Bot, Calendar, ShoppingCart, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function AgentsPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "AI Agent Solutions",
      title: "AI Agent Use Cases",
      subtitle: "Versatile solutions for every business need and industry vertical.",
      agents: [
        {
          icon: MessageSquare,
          title: "Customer Support",
          description: "Automate first-level support, handle FAQs, and provide instant assistance to customers.",
          benefits: ["Reduce support tickets by 70%", "24/7 availability", "Consistent service quality"],
        },
        {
          icon: Bot,
          title: "Sales Assistant",
          description: "Qualify leads, provide product information, and guide customers through the sales funnel.",
          benefits: ["Increase conversion rates", "Capture leads 24/7", "Personalized recommendations"],
        },
        {
          icon: Calendar,
          title: "Appointment Booking",
          description: "Handle scheduling, confirmations, and reminders automatically across all channels.",
          benefits: ["Reduce no-shows by 60%", "Automated reminders", "Calendar integration"],
        },
        {
          icon: ShoppingCart,
          title: "Order Management",
          description: "Process orders, track shipments, and handle returns with intelligent automation.",
          benefits: ["Faster order processing", "Real-time updates", "Reduced errors"],
        },
      ],
    },
    es: {
      badge: "Soluciones de Agentes IA",
      title: "Casos de Uso de Agentes IA",
      subtitle: "Soluciones versátiles para cada necesidad empresarial y vertical de industria.",
      agents: [
        {
          icon: MessageSquare,
          title: "Soporte al Cliente",
          description:
            "Automatiza soporte de primer nivel, maneja FAQs y proporciona asistencia instantánea a clientes.",
          benefits: ["Reduce tickets de soporte en 70%", "Disponibilidad 24/7", "Calidad de servicio consistente"],
        },
        {
          icon: Bot,
          title: "Asistente de Ventas",
          description: "Califica leads, proporciona información de productos y guía clientes por el embudo de ventas.",
          benefits: ["Aumenta tasas de conversión", "Captura leads 24/7", "Recomendaciones personalizadas"],
        },
        {
          icon: Calendar,
          title: "Reserva de Citas",
          description: "Maneja programación, confirmaciones y recordatorios automáticamente en todos los canales.",
          benefits: ["Reduce ausencias en 60%", "Recordatorios automatizados", "Integración de calendario"],
        },
        {
          icon: ShoppingCart,
          title: "Gestión de Pedidos",
          description: "Procesa pedidos, rastrea envíos y maneja devoluciones con automatización inteligente.",
          benefits: ["Procesamiento más rápido de pedidos", "Actualizaciones en tiempo real", "Errores reducidos"],
        },
      ],
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 border-gray-200"
              >
                {t.badge}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t.title}</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {t.agents.map((agent, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <agent.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{agent.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{agent.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {agent.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
