"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function CosmicServicesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our AI Solutions",
      subtitle: "Comprehensive AI services designed to transform your business operations",
      services: [
        {
          title: "AI Agent Development",
          description: "Custom AI agents tailored to your specific business needs and workflows",
          icon: "/icons/agents-automations.png",
          features: ["Custom Training", "Multi-language Support", "24/7 Operation", "Integration Ready"],
        },
        {
          title: "Process Automation",
          description: "Streamline operations with intelligent automation that learns and adapts",
          icon: "/icons/own-ecosystem.png",
          features: ["Workflow Optimization", "Smart Routing", "Error Handling", "Performance Analytics"],
        },
        {
          title: "Enterprise Integration",
          description: "Seamlessly connect AI agents with your existing business systems",
          icon: "/icons/fullstack.png",
          features: ["API Integration", "Database Sync", "Security Compliance", "Scalable Architecture"],
        },
      ],
      learnMore: "Learn More",
      getStarted: "Get Started",
    },
    es: {
      title: "Nuestras Soluciones de IA",
      subtitle: "Servicios integrales de IA diseñados para transformar las operaciones de tu negocio",
      services: [
        {
          title: "Desarrollo de Agentes IA",
          description: "Agentes de IA personalizados adaptados a las necesidades específicas de tu negocio",
          icon: "/icons/agents-automations.png",
          features: ["Entrenamiento Personalizado", "Soporte Multiidioma", "Operación 24/7", "Listo para Integrar"],
        },
        {
          title: "Automatización de Procesos",
          description: "Optimiza operaciones con automatización inteligente que aprende y se adapta",
          icon: "/icons/own-ecosystem.png",
          features: [
            "Optimización de Flujos",
            "Enrutamiento Inteligente",
            "Manejo de Errores",
            "Análisis de Rendimiento",
          ],
        },
        {
          title: "Integración Empresarial",
          description: "Conecta sin problemas agentes de IA con tus sistemas empresariales existentes",
          icon: "/icons/fullstack.png",
          features: ["Integración API", "Sincronización BD", "Cumplimiento Seguridad", "Arquitectura Escalable"],
        },
      ],
      learnMore: "Saber Más",
      getStarted: "Comenzar",
    },
  }

  const t = content[language]

  const openWhatsApp = () => {
    window.open("https://wa.me/56940946660", "_blank")
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <Button
                      variant="outline"
                      className="w-full border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white bg-transparent"
                    >
                      {t.learnMore}
                    </Button>
                    <Button onClick={openWhatsApp} className="w-full bg-slate-800 hover:bg-slate-700 text-white">
                      {t.getStarted}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
