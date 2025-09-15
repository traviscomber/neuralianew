"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, MessageSquare, BarChart3, Cog, ArrowRight, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Our Services",
      title: "Comprehensive AI Solutions for Every Business Need",
      subtitle:
        "From intelligent chatbots to complex automation systems, we deliver AI solutions that drive real business results.",
      services: [
        {
          icon: Bot,
          title: "AI Agent Development",
          description: "Custom AI agents tailored to your specific business processes and requirements.",
          features: [
            "Natural Language Processing",
            "Multi-platform Integration",
            "Custom Training Models",
            "Real-time Learning",
          ],
          cta: "Learn More",
        },
        {
          icon: MessageSquare,
          title: "Intelligent Chatbots",
          description: "Advanced conversational AI that provides exceptional customer service 24/7.",
          features: ["Multi-language Support", "Context Awareness", "Human Handoff", "Analytics Dashboard"],
          cta: "Get Started",
        },
        {
          icon: BarChart3,
          title: "Business Analytics",
          description: "AI-powered insights that help you make data-driven decisions with confidence.",
          features: ["Predictive Analytics", "Real-time Reporting", "Custom Dashboards", "Automated Insights"],
          cta: "Explore",
        },
        {
          icon: Cog,
          title: "Process Automation",
          description: "Streamline operations with intelligent automation that adapts to your workflow.",
          features: ["Workflow Optimization", "Error Reduction", "Cost Savings", "Scalable Solutions"],
          cta: "Automate Now",
        },
      ],
    },
    es: {
      badge: "Nuestros Servicios",
      title: "Soluciones de IA Integrales para Cada Necesidad Empresarial",
      subtitle:
        "Desde chatbots inteligentes hasta sistemas de automatización complejos, entregamos soluciones de IA que generan resultados empresariales reales.",
      services: [
        {
          icon: Bot,
          title: "Desarrollo de Agentes de IA",
          description: "Agentes de IA personalizados adaptados a tus procesos y requisitos empresariales específicos.",
          features: [
            "Procesamiento de Lenguaje Natural",
            "Integración Multiplataforma",
            "Modelos de Entrenamiento Personalizados",
            "Aprendizaje en Tiempo Real",
          ],
          cta: "Saber Más",
        },
        {
          icon: MessageSquare,
          title: "Chatbots Inteligentes",
          description: "IA conversacional avanzada que proporciona servicio al cliente excepcional 24/7.",
          features: ["Soporte Multiidioma", "Conciencia Contextual", "Transferencia Humana", "Panel de Análisis"],
          cta: "Comenzar",
        },
        {
          icon: BarChart3,
          title: "Análisis Empresarial",
          description: "Insights impulsados por IA que te ayudan a tomar decisiones basadas en datos con confianza.",
          features: [
            "Análisis Predictivo",
            "Reportes en Tiempo Real",
            "Dashboards Personalizados",
            "Insights Automatizados",
          ],
          cta: "Explorar",
        },
        {
          icon: Cog,
          title: "Automatización de Procesos",
          description: "Optimiza operaciones con automatización inteligente que se adapta a tu flujo de trabajo.",
          features: [
            "Optimización de Flujo de Trabajo",
            "Reducción de Errores",
            "Ahorro de Costos",
            "Soluciones Escalables",
          ],
          cta: "Automatizar Ahora",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section id="services" className="py-20 bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.map((service, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-black mb-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold" asChild>
                  <a href="/services">
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
