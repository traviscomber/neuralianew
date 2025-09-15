"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, MessageSquare, Zap, BarChart3, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Our Services",
      title: "Comprehensive AI Solutions for Every Business Need",
      subtitle:
        "From intelligent chatbots to complex automation systems, we provide end-to-end AI solutions that drive real business results.",
      services: [
        {
          icon: Bot,
          title: "AI Agent Development",
          description:
            "Custom AI agents trained on your business data, capable of handling complex customer interactions, sales processes, and internal operations with human-like intelligence.",
          features: ["Custom training", "Multi-language support", "24/7 availability", "CRM integration"],
          cta: "Learn More",
          href: "/ai-agent-development",
        },
        {
          icon: MessageSquare,
          title: "Intelligent Chatbots",
          description:
            "Advanced conversational AI that understands context, maintains conversation flow, and provides accurate responses across multiple channels including WhatsApp, web, and mobile.",
          features: ["Natural conversations", "Context awareness", "Multi-channel", "Analytics dashboard"],
          cta: "Get Started",
          href: "/services#chatbots",
        },
        {
          icon: Zap,
          title: "Process Automation",
          description:
            "Streamline your business operations with intelligent automation that handles repetitive tasks, data processing, and workflow management with precision and speed.",
          features: ["Workflow automation", "Data processing", "Task scheduling", "Error reduction"],
          cta: "Automate Now",
          href: "/process-automation",
        },
        {
          icon: BarChart3,
          title: "AI Analytics & Insights",
          description:
            "Transform your data into actionable insights with AI-powered analytics that identify trends, predict outcomes, and optimize business performance in real-time.",
          features: ["Predictive analytics", "Real-time insights", "Custom dashboards", "Performance optimization"],
          cta: "Explore Analytics",
          href: "/services#analytics",
        },
      ],
    },
    es: {
      badge: "Nuestros Servicios",
      title: "Soluciones de IA Integrales para Cada Necesidad Empresarial",
      subtitle:
        "Desde chatbots inteligentes hasta sistemas de automatización complejos, proporcionamos soluciones de IA de extremo a extremo que generan resultados empresariales reales.",
      services: [
        {
          icon: Bot,
          title: "Desarrollo de Agentes de IA",
          description:
            "Agentes de IA personalizados entrenados con tus datos empresariales, capaces de manejar interacciones complejas con clientes, procesos de ventas y operaciones internas con inteligencia similar a la humana.",
          features: ["Entrenamiento personalizado", "Soporte multiidioma", "Disponibilidad 24/7", "Integración CRM"],
          cta: "Saber Más",
          href: "/ai-agent-development",
        },
        {
          icon: MessageSquare,
          title: "Chatbots Inteligentes",
          description:
            "IA conversacional avanzada que entiende el contexto, mantiene el flujo de conversación y proporciona respuestas precisas a través de múltiples canales incluyendo WhatsApp, web y móvil.",
          features: ["Conversaciones naturales", "Conciencia contextual", "Multicanal", "Panel de análisis"],
          cta: "Comenzar",
          href: "/services#chatbots",
        },
        {
          icon: Zap,
          title: "Automatización de Procesos",
          description:
            "Optimiza tus operaciones empresariales con automatización inteligente que maneja tareas repetitivas, procesamiento de datos y gestión de flujos de trabajo con precisión y velocidad.",
          features: [
            "Automatización de flujos",
            "Procesamiento de datos",
            "Programación de tareas",
            "Reducción de errores",
          ],
          cta: "Automatizar Ahora",
          href: "/process-automation",
        },
        {
          icon: BarChart3,
          title: "Análisis e Insights de IA",
          description:
            "Transforma tus datos en insights accionables con análisis impulsados por IA que identifican tendencias, predicen resultados y optimizan el rendimiento empresarial en tiempo real.",
          features: [
            "Análisis predictivo",
            "Insights en tiempo real",
            "Dashboards personalizados",
            "Optimización de rendimiento",
          ],
          cta: "Explorar Análisis",
          href: "/services#analytics",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10">{t.badge}</Badge>

          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.services.map((service, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-black mb-4">{service.title}</CardTitle>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold group-hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a href={service.href}>
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
