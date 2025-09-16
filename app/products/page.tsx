"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, Zap, Building, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ProductsPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Our Products",
      title: "AI Solutions for Every Business Need",
      subtitle: "Comprehensive AI products designed to transform your operations and enhance customer experience.",
      products: [
        {
          icon: Bot,
          title: "AI Agent Platform",
          description:
            "Complete platform for building, deploying, and managing intelligent AI agents across all channels.",
          features: ["Multi-channel deployment", "Visual agent builder", "Real-time analytics", "Enterprise security"],
          price: "Starting at $299/month",
        },
        {
          icon: MessageSquare,
          title: "Conversational AI Suite",
          description: "Advanced conversational AI tools for customer service, sales, and support automation.",
          features: ["Natural language processing", "Context awareness", "Multi-language support", "Integration APIs"],
          price: "Starting at $199/month",
        },
        {
          icon: Zap,
          title: "Automation Engine",
          description: "Powerful automation tools that streamline business processes and workflows.",
          features: ["Workflow automation", "Process optimization", "Smart routing", "Performance monitoring"],
          price: "Starting at $399/month",
        },
        {
          icon: Building,
          title: "Enterprise Solution",
          description: "Complete enterprise-grade AI transformation with dedicated support and custom development.",
          features: ["Custom development", "Dedicated support", "SLA guarantees", "Advanced security"],
          price: "Custom pricing",
        },
      ],
    },
    es: {
      badge: "Nuestros Productos",
      title: "Soluciones de IA para Cada Necesidad Empresarial",
      subtitle:
        "Productos integrales de IA diseñados para transformar tus operaciones y mejorar la experiencia del cliente.",
      products: [
        {
          icon: Bot,
          title: "Plataforma de Agentes IA",
          description:
            "Plataforma completa para construir, desplegar y gestionar agentes de IA inteligentes en todos los canales.",
          features: [
            "Despliegue multicanal",
            "Constructor visual de agentes",
            "Análisis en tiempo real",
            "Seguridad empresarial",
          ],
          price: "Desde $299/mes",
        },
        {
          icon: MessageSquare,
          title: "Suite de IA Conversacional",
          description:
            "Herramientas avanzadas de IA conversacional para automatización de servicio al cliente, ventas y soporte.",
          features: [
            "Procesamiento de lenguaje natural",
            "Conciencia contextual",
            "Soporte multi-idioma",
            "APIs de integración",
          ],
          price: "Desde $199/mes",
        },
        {
          icon: Zap,
          title: "Motor de Automatización",
          description:
            "Herramientas poderosas de automatización que optimizan procesos y flujos de trabajo empresariales.",
          features: [
            "Automatización de flujos",
            "Optimización de procesos",
            "Enrutamiento inteligente",
            "Monitoreo de rendimiento",
          ],
          price: "Desde $399/mes",
        },
        {
          icon: Building,
          title: "Solución Empresarial",
          description:
            "Transformación completa de IA de nivel empresarial con soporte dedicado y desarrollo personalizado.",
          features: ["Desarrollo personalizado", "Soporte dedicado", "Garantías SLA", "Seguridad avanzada"],
          price: "Precio personalizado",
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
              {t.products.map((product, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <product.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{product.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                      <Button variant="outline" size="sm">
                        {language === "es" ? "Saber Más" : "Learn More"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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
