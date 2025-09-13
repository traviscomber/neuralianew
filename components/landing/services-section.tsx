"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { Bot, Zap, Shield, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export function ServicesSection() {
  const { language } = useLanguage()
  const router = useRouter()

  const services = [
    {
      title: language === "en" ? "AI Agent Development" : "Desarrollo de Agentes de IA",
      shortDescription:
        language === "en"
          ? "Custom AI agents tailored to your specific business needs and processes."
          : "Agentes de IA personalizados adaptados a tus necesidades y procesos empresariales específicos.",
      fullDescription:
        language === "en"
          ? "We develop intelligent conversational agents that understand your business context, automate complex workflows, and provide 24/7 customer support with natural language processing capabilities."
          : "Desarrollamos agentes conversacionales inteligentes que entienden el contexto de tu negocio, automatizan flujos de trabajo complejos y brindan soporte al cliente 24/7 con capacidades de procesamiento de lenguaje natural.",
      features:
        language === "en"
          ? ["Custom Training", "Process Integration", "24/7 Operation", "Scalable Architecture"]
          : ["Entrenamiento Personalizado", "Integración de Procesos", "Operación 24/7", "Arquitectura Escalable"],
      icon: Bot,
      href: "/services",
      metrics: language === "en" ? "95% Customer Satisfaction" : "95% Satisfacción del Cliente",
    },
    {
      title: language === "en" ? "Process Automation" : "Automatización de Procesos",
      shortDescription:
        language === "en"
          ? "Streamline your workflows with intelligent automation that adapts to your business."
          : "Optimiza tus flujos de trabajo con automatización inteligente que se adapta a tu negocio.",
      fullDescription:
        language === "en"
          ? "Transform your business operations with AI-powered automation that reduces manual tasks, eliminates errors, and increases efficiency across all departments and processes."
          : "Transforma tus operaciones empresariales con automatización impulsada por IA que reduce tareas manuales, elimina errores y aumenta la eficiencia en todos los departamentos y procesos.",
      features:
        language === "en"
          ? ["Workflow Optimization", "Task Automation", "Error Reduction", "Performance Analytics"]
          : ["Optimización de Flujos", "Automatización de Tareas", "Reducción de Errores", "Análisis de Rendimiento"],
      icon: Zap,
      href: "/process-automation",
      metrics: language === "en" ? "70% Time Reduction" : "70% Reducción de Tiempo",
    },
    {
      title: language === "en" ? "Enterprise Integration" : "Integración Empresarial",
      shortDescription:
        language === "en"
          ? "Seamlessly integrate AI solutions with your existing systems and infrastructure."
          : "Integra sin problemas las soluciones de IA con tus sistemas e infraestructura existentes.",
      fullDescription:
        language === "en"
          ? "Connect your AI agents with existing CRM, ERP, and business systems for unified operations. We ensure secure, compliant, and scalable integrations with enterprise-grade support."
          : "Conecta tus agentes de IA con sistemas CRM, ERP y empresariales existentes para operaciones unificadas. Garantizamos integraciones seguras, compatibles y escalables con soporte de nivel empresarial.",
      features:
        language === "en"
          ? ["System Integration", "Data Security", "Compliance", "Support & Maintenance"]
          : ["Integración de Sistemas", "Seguridad de Datos", "Cumplimiento", "Soporte y Mantenimiento"],
      icon: Shield,
      href: "/enterprise-integration",
      metrics: language === "en" ? "99.9% Uptime" : "99.9% Tiempo Activo",
    },
  ]

  const handleCardClick = (href: string) => {
    router.push(href)
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light text-gray-900 mb-4">
            {language === "en" ? "Our Services" : "Nuestros Servicios"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Comprehensive AI solutions designed to transform your business operations"
              : "Soluciones integrales de IA diseñadas para transformar tus operaciones empresariales"}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group perspective-1000 h-80"
            >
              <div
                className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180 cursor-pointer"
                onClick={() => handleCardClick(service.href)}
              >
                {/* Front of Card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden border-0 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white group-hover:bg-black">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gray-100 group-hover:bg-gray-800 rounded-2xl flex items-center justify-center transition-colors duration-300">
                        <service.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-light text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-gray-300 font-light mb-6 leading-relaxed transition-colors duration-300">
                      {service.shortDescription}
                    </p>

                    {/* Metrics */}
                    <div className="mt-auto">
                      <div className="bg-gray-100 group-hover:bg-gray-800 text-gray-700 group-hover:text-white px-4 py-2 rounded-full text-sm font-light transition-colors duration-300 inline-block">
                        {service.metrics}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back of Card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border-0 shadow-xl bg-black text-white">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>

                    {/* Full Description */}
                    <p className="text-gray-300 font-light mb-6 leading-relaxed text-sm">{service.fullDescription}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto flex items-center text-white font-light">
                      <span className="mr-2">{language === "en" ? "Learn More" : "Saber Más"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
