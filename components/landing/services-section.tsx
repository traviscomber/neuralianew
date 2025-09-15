"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Workflow, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Our Services",
      title: "Comprehensive AI Solutions for Every Business Need",
      subtitle:
        "From intelligent chatbots to enterprise automation, we deliver AI solutions that drive real business results.",
      services: [
        {
          icon: Bot,
          title: "AI Agent Development",
          description:
            "Custom AI agents that understand your business context and deliver personalized customer experiences across all channels.",
          features: ["Natural Language Processing", "Multi-channel Support", "Custom Training", "Real-time Learning"],
          href: "/ai-agent-development",
        },
        {
          icon: Workflow,
          title: "Process Automation",
          description:
            "Intelligent automation that streamlines operations, reduces costs, and eliminates repetitive tasks with precision.",
          features: ["Workflow Optimization", "Task Automation", "Data Processing", "Quality Assurance"],
          href: "/process-automation",
        },
        {
          icon: Building2,
          title: "Enterprise Integration",
          description:
            "Seamless integration with existing systems, ensuring AI solutions work harmoniously with your current infrastructure.",
          features: ["Legacy System Integration", "API Development", "Cloud Migration", "Security Compliance"],
          href: "/enterprise-integration",
        },
      ],
      learnMore: "Learn More",
    },
    es: {
      badge: "Nuestros Servicios",
      title: "Soluciones Integrales de IA para Cada Necesidad Empresarial",
      subtitle:
        "Desde chatbots inteligentes hasta automatización empresarial, entregamos soluciones de IA que generan resultados reales.",
      services: [
        {
          icon: Bot,
          title: "Desarrollo de Agentes de IA",
          description:
            "Agentes de IA personalizados que entienden el contexto de tu negocio y brindan experiencias personalizadas en todos los canales.",
          features: [
            "Procesamiento de Lenguaje Natural",
            "Soporte Multicanal",
            "Entrenamiento Personalizado",
            "Aprendizaje en Tiempo Real",
          ],
          href: "/ai-agent-development",
        },
        {
          icon: Workflow,
          title: "Automatización de Procesos",
          description:
            "Automatización inteligente que optimiza operaciones, reduce costos y elimina tareas repetitivas con precisión.",
          features: [
            "Optimización de Flujos",
            "Automatización de Tareas",
            "Procesamiento de Datos",
            "Control de Calidad",
          ],
          href: "/process-automation",
        },
        {
          icon: Building2,
          title: "Integración Empresarial",
          description:
            "Integración perfecta con sistemas existentes, asegurando que las soluciones de IA trabajen en armonía con tu infraestructura actual.",
          features: [
            "Integración de Sistemas Legacy",
            "Desarrollo de APIs",
            "Migración a la Nube",
            "Cumplimiento de Seguridad",
          ],
          href: "/enterprise-integration",
        },
      ],
      learnMore: "Saber Más",
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-white">
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

        <div className="grid md:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-black transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white group bg-transparent"
                >
                  <Link href={service.href}>
                    {t.learnMore}
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
