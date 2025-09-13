"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { Search, Settings, Rocket, BarChart } from "lucide-react"

export function FlowSection() {
  const { language } = useLanguage()

  const steps = [
    {
      number: "01",
      title: language === "en" ? "Analysis" : "Análisis",
      description:
        language === "en"
          ? "We analyze your current processes and identify automation opportunities."
          : "Analizamos tus procesos actuales e identificamos oportunidades de automatización.",
      icon: Search,
    },
    {
      number: "02",
      title: language === "en" ? "Design" : "Diseño",
      description:
        language === "en"
          ? "Custom AI agent design tailored to your specific business requirements."
          : "Diseño de agente de IA personalizado adaptado a tus requisitos empresariales específicos.",
      icon: Settings,
    },
    {
      number: "03",
      title: language === "en" ? "Implementation" : "Implementación",
      description:
        language === "en"
          ? "Seamless deployment and integration with your existing systems."
          : "Despliegue e integración sin problemas con tus sistemas existentes.",
      icon: Rocket,
    },
    {
      number: "04",
      title: language === "en" ? "Optimization" : "Optimización",
      description:
        language === "en"
          ? "Continuous monitoring and optimization for maximum performance."
          : "Monitoreo y optimización continua para máximo rendimiento.",
      icon: BarChart,
    },
  ]

  return (
    <section id="flow" className="py-24 bg-gray-50">
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
            {language === "en" ? "Our Process" : "Nuestro Proceso"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "A systematic approach to implementing AI solutions in your business"
              : "Un enfoque sistemático para implementar soluciones de IA en tu negocio"}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto text-xl font-light">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <step.icon className="w-12 h-12 text-gray-600 mx-auto" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-light text-gray-900 mb-4">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
