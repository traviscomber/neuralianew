"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Code, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: Bot,
      title: language === "en" ? "AI Agent Development" : "Desarrollo de Agentes IA",
      description:
        language === "en"
          ? "Custom AI agents that understand your business context and automate complex workflows with natural language processing."
          : "Agentes IA personalizados que entienden el contexto de tu negocio y automatizan flujos de trabajo complejos con procesamiento de lenguaje natural.",
      features: [
        language === "en" ? "Natural Language Processing" : "Procesamiento de Lenguaje Natural",
        language === "en" ? "Custom Training" : "Entrenamiento Personalizado",
        language === "en" ? "Multi-platform Integration" : "Integración Multiplataforma",
      ],
    },
    {
      icon: Code,
      title: language === "en" ? "Full-Stack Development" : "Desarrollo Full-Stack",
      description:
        language === "en"
          ? "End-to-end development solutions using modern technologies like React, Node.js, and cloud infrastructure."
          : "Soluciones de desarrollo end-to-end usando tecnologías modernas como React, Node.js e infraestructura en la nube.",
      features: [
        language === "en" ? "Modern Tech Stack" : "Stack Tecnológico Moderno",
        language === "en" ? "Scalable Architecture" : "Arquitectura Escalable",
        language === "en" ? "Cloud Deployment" : "Despliegue en la Nube",
      ],
    },
    {
      icon: Zap,
      title: language === "en" ? "System Integration" : "Integración de Sistemas",
      description:
        language === "en"
          ? "Seamless integration with your existing systems, APIs, and databases to create unified business solutions."
          : "Integración perfecta con tus sistemas existentes, APIs y bases de datos para crear soluciones empresariales unificadas.",
      features: [
        language === "en" ? "API Integration" : "Integración de APIs",
        language === "en" ? "Database Migration" : "Migración de Bases de Datos",
        language === "en" ? "Legacy System Support" : "Soporte de Sistemas Legacy",
      ],
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge className="bg-white text-gray-700 border-0 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 lg:mb-8 font-medium shadow-sm">
            {t("services.badge")}
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            {t("services.title")}
            <br />
            <span className="font-bold text-black">{t("services.titleBold")}</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-1">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-gray-200 transition-colors">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-700">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mr-3 sm:mr-4"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
