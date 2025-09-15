"use client"

import { Bot, Zap, Shield, Brain, Globe, Users, BarChart3, Clock, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FeaturesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Powerful AI Features",
      subtitle: "Comprehensive solutions designed to transform your business operations",
      features: [
        {
          icon: Bot,
          title: "Custom AI Agents",
          description: "Tailored AI assistants that understand your business needs and provide intelligent automation.",
        },
        {
          icon: Zap,
          title: "Process Automation",
          description: "Streamline workflows and eliminate repetitive tasks with intelligent automation systems.",
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "Bank-level security with encryption, compliance, and data protection protocols.",
        },
        {
          icon: Brain,
          title: "Machine Learning",
          description: "Advanced ML algorithms that learn and adapt to improve performance over time.",
        },
        {
          icon: Globe,
          title: "Multi-Platform Integration",
          description: "Seamless integration with existing systems, APIs, and third-party applications.",
        },
        {
          icon: Users,
          title: "24/7 Support",
          description: "Round-the-clock technical support and monitoring to ensure optimal performance.",
        },
        {
          icon: BarChart3,
          title: "Analytics & Insights",
          description: "Comprehensive reporting and analytics to track performance and ROI.",
        },
        {
          icon: Clock,
          title: "Real-time Processing",
          description: "Instant responses and real-time data processing for immediate results.",
        },
        {
          icon: CheckCircle,
          title: "Quality Assurance",
          description: "Rigorous testing and quality control to ensure reliable AI solutions.",
        },
      ],
    },
    es: {
      title: "Características Poderosas de IA",
      subtitle: "Soluciones integrales diseñadas para transformar las operaciones de tu negocio",
      features: [
        {
          icon: Bot,
          title: "Agentes de IA Personalizados",
          description:
            "Asistentes de IA adaptados que entienden las necesidades de tu negocio y proporcionan automatización inteligente.",
        },
        {
          icon: Zap,
          title: "Automatización de Procesos",
          description:
            "Optimiza flujos de trabajo y elimina tareas repetitivas con sistemas de automatización inteligente.",
        },
        {
          icon: Shield,
          title: "Seguridad Empresarial",
          description:
            "Seguridad de nivel bancario con encriptación, cumplimiento y protocolos de protección de datos.",
        },
        {
          icon: Brain,
          title: "Aprendizaje Automático",
          description:
            "Algoritmos avanzados de ML que aprenden y se adaptan para mejorar el rendimiento con el tiempo.",
        },
        {
          icon: Globe,
          title: "Integración Multiplataforma",
          description: "Integración perfecta con sistemas existentes, APIs y aplicaciones de terceros.",
        },
        {
          icon: Users,
          title: "Soporte 24/7",
          description: "Soporte técnico y monitoreo las 24 horas para asegurar un rendimiento óptimo.",
        },
        {
          icon: BarChart3,
          title: "Análisis e Insights",
          description: "Reportes integrales y análisis para rastrear el rendimiento y ROI.",
        },
        {
          icon: Clock,
          title: "Procesamiento en Tiempo Real",
          description: "Respuestas instantáneas y procesamiento de datos en tiempo real para resultados inmediatos.",
        },
        {
          icon: CheckCircle,
          title: "Aseguramiento de Calidad",
          description: "Pruebas rigurosas y control de calidad para asegurar soluciones de IA confiables.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-black transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
