"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, Search, Code, Rocket, ArrowDown, Settings } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FlowSection() {
  const { language } = useLanguage()

  const steps = [
    {
      icon: Search,
      title: language === "en" ? "Discovery & Analysis" : "Descubrimiento y Análisis",
      description:
        language === "en"
          ? "We analyze your business needs, current systems, and identify opportunities for AI integration."
          : "Analizamos las necesidades de tu negocio, sistemas actuales e identificamos oportunidades para integración de IA.",
      duration: language === "en" ? "1-2 weeks" : "1-2 semanas",
    },
    {
      icon: Code,
      title: language === "en" ? "Development & Training" : "Desarrollo y Entrenamiento",
      description:
        language === "en"
          ? "Custom AI agents are developed and trained specifically for your business context and requirements."
          : "Los agentes IA personalizados son desarrollados y entrenados específicamente para el contexto y requisitos de tu negocio.",
      duration: language === "en" ? "2-4 weeks" : "2-4 semanas",
    },
    {
      icon: Rocket,
      title: language === "en" ? "Testing & Deployment" : "Pruebas y Despliegue",
      description:
        language === "en"
          ? "Comprehensive testing followed by seamless deployment to your production environment."
          : "Pruebas exhaustivas seguidas de un despliegue perfecto a tu entorno de producción.",
      duration: language === "en" ? "1 week" : "1 semana",
    },
    {
      icon: Settings,
      title: language === "en" ? "Support & Optimization" : "Soporte y Optimización",
      description:
        language === "en"
          ? "Ongoing support, monitoring, and continuous optimization to ensure peak performance."
          : "Soporte continuo, monitoreo y optimización continua para asegurar el máximo rendimiento.",
      duration: language === "en" ? "Ongoing" : "Continuo",
    },
  ]

  return (
    <section id="flow" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge className="bg-gray-100 text-gray-700 border-0 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 lg:mb-8 font-medium">
            {language === "en" ? "Our Process" : "Nuestro Proceso"}
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            {language === "en" ? "How We" : "Cómo"}
            <br />
            <span className="font-bold text-black">{language === "en" ? "Work" : "Trabajamos"}</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {language === "en"
              ? "Our proven methodology ensures successful AI implementation from concept to deployment."
              : "Nuestra metodología probada asegura una implementación exitosa de IA desde el concepto hasta el despliegue."}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6 lg:p-8 text-center">
                    {/* Step Number */}
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 mx-auto">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm">
                      <step.icon className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" />
                    </div>

                    {/* Duration Badge */}
                    <Badge className="bg-white text-gray-600 border border-gray-300 text-xs px-3 py-1 rounded-full mb-4">
                      {step.duration}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-gray-400">
                    <ArrowDown className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Step Number */}
                      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>

                      <div className="flex-1">
                        {/* Duration Badge */}
                        <Badge className="bg-white text-gray-600 border border-gray-300 text-xs px-3 py-1 rounded-full mb-3">
                          {step.duration}
                        </Badge>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{step.title}</h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                      </div>

                      {/* Icon */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/56940946660", "_blank")}
            className="bg-black text-white hover:bg-gray-800 font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            {language === "en" ? "Start Your Project" : "Iniciar Tu Proyecto"}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
