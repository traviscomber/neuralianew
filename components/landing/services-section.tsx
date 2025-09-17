"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Cog, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function ServicesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Our Services",
      title: "AI Solutions for Every Business Need",
      subtitle:
        "From intelligent agents to complete automation systems, we provide comprehensive AI solutions that transform how you operate.",
      services: [
        {
          icon: Bot,
          title: "AI Agent Development",
          description:
            "Custom AI agents that understand your business context and handle complex customer interactions with human-like intelligence.",
          features: ["Natural Language Processing", "Multi-channel Support", "Custom Training", "24/7 Availability"],
          link: "/ai-agent-development",
        },
        {
          icon: Cog,
          title: "Process Automation",
          description:
            "Streamline operations with intelligent automation that adapts to your workflows and reduces manual tasks by up to 80%.",
          features: ["Workflow Optimization", "Data Processing", "Task Automation", "Integration APIs"],
          link: "/process-automation",
        },
        {
          icon: Zap,
          title: "Enterprise Integration",
          description:
            "Seamlessly integrate AI capabilities into your existing systems with our enterprise-grade solutions and support.",
          features: ["System Integration", "Scalable Architecture", "Security Compliance", "24/7 Support"],
          link: "/enterprise-integration",
        },
      ],
      learnMore: "Learn More",
    },
    es: {
      badge: "Nuestros Servicios",
      title: "Soluciones de IA para Cada Necesidad Empresarial",
      subtitle:
        "Desde agentes inteligentes hasta sistemas de automatización completos, proporcionamos soluciones integrales de IA que transforman tu operación.",
      services: [
        {
          icon: Bot,
          title: "Desarrollo de Agentes IA",
          description:
            "Agentes de IA personalizados que entienden el contexto de tu negocio y manejan interacciones complejas con inteligencia humana.",
          features: [
            "Procesamiento de Lenguaje Natural",
            "Soporte Multicanal",
            "Entrenamiento Personalizado",
            "Disponibilidad 24/7",
          ],
          link: "/ai-agent-development",
        },
        {
          icon: Cog,
          title: "Automatización de Procesos",
          description:
            "Optimiza operaciones con automatización inteligente que se adapta a tus flujos de trabajo y reduce tareas manuales hasta 80%.",
          features: [
            "Optimización de Flujos",
            "Procesamiento de Datos",
            "Automatización de Tareas",
            "APIs de Integración",
          ],
          link: "/process-automation",
        },
        {
          icon: Zap,
          title: "Integración Empresarial",
          description:
            "Integra capacidades de IA en tus sistemas existentes con nuestras soluciones y soporte de nivel empresarial.",
          features: ["Integración de Sistemas", "Arquitectura Escalable", "Cumplimiento de Seguridad", "Soporte 24/7"],
          link: "/enterprise-integration",
        },
      ],
      learnMore: "Saber Más",
    },
  }

  const t = content[language]

  return (
    <section id="services-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-slate-100 text-slate-700">
            {t.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-slate-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                  >
                    <Link href={service.link}>{t.learnMore}</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
