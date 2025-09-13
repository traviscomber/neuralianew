"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

const caseStudies = [
  {
    id: "retail-automation",
    title: {
      en: "Retail Chain Automation",
      es: "Automatización de Cadena Retail",
    },
    client: "MegaRetail Corp",
    industry: {
      en: "Retail & E-commerce",
      es: "Retail y E-commerce",
    },
    summary: {
      en: "Transformed inventory management across 150+ stores with AI-powered prediction and automation",
      es: "Transformó la gestión de inventario en 150+ tiendas con predicción y automatización impulsada por IA",
    },
    keyMetric: "85%",
    keyMetricLabel: {
      en: "Reduction in stockouts",
      es: "Reducción en falta de stock",
    },
    duration: "6 months",
    teamSize: "8 specialists",
    savings: "$2.3M",
    image: "/placeholder.svg?height=300&width=400&text=Retail+Dashboard",
  },
  {
    id: "banking-chatbot",
    title: {
      en: "Banking Customer Service AI",
      es: "IA de Atención al Cliente Bancario",
    },
    client: "SecureBank International",
    industry: {
      en: "Financial Services",
      es: "Servicios Financieros",
    },
    summary: {
      en: "Deployed multilingual AI chatbot handling 92% of customer inquiries with secure transaction capabilities",
      es: "Desplegó chatbot de IA multiidioma manejando 92% de consultas de clientes con capacidades de transacciones seguras",
    },
    keyMetric: "92%",
    keyMetricLabel: {
      en: "Query resolution rate",
      es: "Tasa de resolución de consultas",
    },
    duration: "4 months",
    teamSize: "6 specialists",
    savings: "$1.8M",
    image: "/placeholder.svg?height=300&width=400&text=Banking+Chatbot",
  },
  {
    id: "manufacturing-optimization",
    title: {
      en: "Manufacturing Process Optimization",
      es: "Optimización de Procesos de Manufactura",
    },
    client: "TechManufacturing Ltd",
    industry: {
      en: "Manufacturing",
      es: "Manufactura",
    },
    summary: {
      en: "Implemented IoT sensors with AI analytics for predictive maintenance and quality control",
      es: "Implementó sensores IoT con análisis de IA para mantenimiento predictivo y control de calidad",
    },
    keyMetric: "35%",
    keyMetricLabel: {
      en: "Increase in efficiency",
      es: "Aumento en eficiencia",
    },
    duration: "8 months",
    teamSize: "12 specialists",
    savings: "$4.2M",
    image: "/placeholder.svg?height=300&width=400&text=Manufacturing+Analytics",
  },
]

export function CaseStudiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage()

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentCase = caseStudies[currentIndex]

  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-gray-900 text-white mb-6">
            {language === "en" ? "Success Stories" : "Casos de Éxito"}
          </Badge>
          <h2 className="text-5xl font-light text-gray-900 mb-4">
            {language === "en" ? "Case Studies" : "Casos de Estudio"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Real results from real clients. Discover how our AI solutions have transformed businesses across industries."
              : "Resultados reales de clientes reales. Descubre cómo nuestras soluciones de IA han transformado empresas en diversas industrias."}
          </p>
        </motion.div>

        {/* Case Study Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={currentCase.image || "/placeholder.svg"}
                      alt={currentCase.title[language]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {currentCase.industry[language]}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl font-light text-gray-900 mb-2">
                        {currentCase.title[language]}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600">{currentCase.client}</CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-gray-700 mb-8 leading-relaxed text-lg">{currentCase.summary[language]}</p>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-900 text-white p-6 rounded-lg">
                          <div className="text-4xl font-light mb-2">{currentCase.keyMetric}</div>
                          <div className="text-gray-300 text-sm">{currentCase.keyMetricLabel[language]}</div>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                          <div className="text-4xl font-light text-gray-900 mb-2">{currentCase.savings}</div>
                          <div className="text-gray-600 text-sm">
                            {language === "en" ? "Annual Savings" : "Ahorro Anual"}
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-5 h-5 mr-3" />
                          <div>
                            <div className="font-medium">{language === "en" ? "Duration" : "Duración"}</div>
                            <div className="text-sm">{currentCase.duration}</div>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-5 h-5 mr-3" />
                          <div>
                            <div className="font-medium">{language === "en" ? "Team Size" : "Tamaño del Equipo"}</div>
                            <div className="text-sm">{currentCase.teamSize}</div>
                          </div>
                        </div>
                      </div>

                      <Link href={`/case-studies/${currentCase.id}`}>
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg group">
                          {language === "en" ? "Read Full Case Study" : "Leer Caso Completo"}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={prevCase}
              variant="outline"
              size="lg"
              className="border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              {language === "en" ? "Previous" : "Anterior"}
            </Button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextCase}
              variant="outline"
              size="lg"
              className="border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              {language === "en" ? "Next" : "Siguiente"}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/case-studies">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 group">
              {language === "en" ? "View All Case Studies" : "Ver Todos los Casos"}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
