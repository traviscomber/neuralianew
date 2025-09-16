"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, ArrowRight, MessageSquare, Calendar, ShoppingCart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function ServicesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "AI Agent Use Cases",
      title: "Versatile solutions for every business need and industry vertical",
      services: [
        {
          icon: MessageSquare,
          title: "Customer Support",
          description: "Automate first-level support, handle FAQs, and provide instant assistance to customers.",
          benefits: ["Reduce support tickets by 70%", "24/7 availability", "Consistent service quality"],
          href: "/agents/customer-support",
          cta: "Learn More",
        },
        {
          icon: Bot,
          title: "Sales Assistant",
          description: "Qualify leads, provide product information, and guide customers through the sales funnel.",
          benefits: ["Increase conversion rates", "Capture leads 24/7", "Personalized recommendations"],
          href: "/agents/sales-assistant",
          cta: "Learn More",
        },
        {
          icon: Calendar,
          title: "Appointment Booking",
          description: "Handle scheduling, confirmations, and reminders automatically across all channels.",
          benefits: ["Reduce no-shows by 60%", "Automated reminders", "Calendar integration"],
          href: "/agents/appointment-booking",
          cta: "Learn More",
        },
        {
          icon: ShoppingCart,
          title: "Order Management",
          description: "Process orders, track shipments, and handle returns with intelligent automation.",
          benefits: ["Faster order processing", "Real-time updates", "Reduced errors"],
          href: "/agents/order-management",
          cta: "Learn More",
        },
      ],
    },
    es: {
      badge: "Casos de Uso de Agentes IA",
      title: "Soluciones versátiles para cada necesidad empresarial y vertical de industria",
      services: [
        {
          icon: MessageSquare,
          title: "Soporte al Cliente",
          description:
            "Automatiza soporte de primer nivel, maneja FAQs y proporciona asistencia instantánea a clientes.",
          benefits: ["Reduce tickets de soporte en 70%", "Disponibilidad 24/7", "Calidad de servicio consistente"],
          href: "/agents/customer-support",
          cta: "Saber Más",
        },
        {
          icon: Bot,
          title: "Asistente de Ventas",
          description: "Califica leads, proporciona información de productos y guía clientes por el embudo de ventas.",
          benefits: ["Aumenta tasas de conversión", "Captura leads 24/7", "Recomendaciones personalizadas"],
          href: "/agents/sales-assistant",
          cta: "Saber Más",
        },
        {
          icon: Calendar,
          title: "Reserva de Citas",
          description: "Maneja programación, confirmaciones y recordatorios automáticamente en todos los canales.",
          benefits: ["Reduce ausencias en 60%", "Recordatorios automatizados", "Integración de calendario"],
          href: "/agents/appointment-booking",
          cta: "Saber Más",
        },
        {
          icon: ShoppingCart,
          title: "Gestión de Pedidos",
          description: "Procesa pedidos, rastrea envíos y maneja devoluciones con automatización inteligente.",
          benefits: ["Procesamiento más rápido de pedidos", "Actualizaciones en tiempo real", "Errores reducidos"],
          href: "/agents/order-management",
          cta: "Saber Más",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 border-gray-200"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {t.services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full group bg-transparent">
                  <Link href={service.href}>
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
