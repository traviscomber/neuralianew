"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Cog, Building } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive AI solutions tailored to your business needs",
      services: [
        {
          icon: Bot,
          title: "AI Agent Development",
          description: "Custom AI agents designed specifically for your business processes and customer interactions.",
          features: ["Natural Language Processing", "Custom Training", "Multi-platform Integration", "24/7 Operation"],
          cta: "Learn More",
        },
        {
          icon: Cog,
          title: "Process Automation",
          description: "Intelligent automation solutions that streamline operations and reduce manual workload.",
          features: ["Workflow Optimization", "Data Processing", "Task Automation", "Performance Analytics"],
          cta: "Explore Solutions",
        },
        {
          icon: Building,
          title: "Enterprise Integration",
          description: "Seamless integration of AI solutions with your existing enterprise systems and infrastructure.",
          features: ["System Integration", "API Development", "Security Compliance", "Scalable Architecture"],
          cta: "Get Started",
        },
      ],
    },
    es: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales de IA adaptadas a las necesidades de tu negocio",
      services: [
        {
          icon: Bot,
          title: "Desarrollo de Agentes de IA",
          description:
            "Agentes de IA personalizados diseñados específicamente para tus procesos de negocio e interacciones con clientes.",
          features: [
            "Procesamiento de Lenguaje Natural",
            "Entrenamiento Personalizado",
            "Integración Multi-plataforma",
            "Operación 24/7",
          ],
          cta: "Saber Más",
        },
        {
          icon: Cog,
          title: "Automatización de Procesos",
          description:
            "Soluciones de automatización inteligente que optimizan operaciones y reducen la carga de trabajo manual.",
          features: [
            "Optimización de Flujos",
            "Procesamiento de Datos",
            "Automatización de Tareas",
            "Análisis de Rendimiento",
          ],
          cta: "Explorar Soluciones",
        },
        {
          icon: Building,
          title: "Integración Empresarial",
          description:
            "Integración perfecta de soluciones de IA con tus sistemas e infraestructura empresarial existentes.",
          features: [
            "Integración de Sistemas",
            "Desarrollo de APIs",
            "Cumplimiento de Seguridad",
            "Arquitectura Escalable",
          ],
          cta: "Comenzar",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">{t.title}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.services.map((service, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:border-black transition-all duration-300 group bg-white"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
