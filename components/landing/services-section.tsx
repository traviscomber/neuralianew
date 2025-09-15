"use client"

import Link from "next/link"
import { Bot, Cog, Building2, ArrowRight } from "lucide-react"
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
          description:
            "Custom intelligent agents that automate complex business processes and provide 24/7 customer support.",
          href: "/ai-agent-development",
        },
        {
          icon: Cog,
          title: "Process Automation",
          description:
            "Streamline operations with intelligent workflow automation that reduces costs and improves efficiency.",
          href: "/process-automation",
        },
        {
          icon: Building2,
          title: "Enterprise Integration",
          description: "Seamless integration of AI solutions with your existing enterprise systems and infrastructure.",
          href: "/enterprise-integration",
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
          description: "Agentes inteligentes personalizados que automatizan procesos complejos y brindan soporte 24/7.",
          href: "/ai-agent-development",
        },
        {
          icon: Cog,
          title: "Automatización de Procesos",
          description: "Optimiza operaciones con automatización inteligente que reduce costos y mejora la eficiencia.",
          href: "/process-automation",
        },
        {
          icon: Building2,
          title: "Integración Empresarial",
          description:
            "Integración perfecta de soluciones de IA con tus sistemas e infraestructura empresarial existente.",
          href: "/enterprise-integration",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 group block"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                <service.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
