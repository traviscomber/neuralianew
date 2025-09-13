"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ClientsSection() {
  const { language } = useLanguage()

  const clients = [
    {
      name: "Parrotfy",
      logo: "🦜",
      category: language === "en" ? "ERP AI Assistant" : "Asistente IA ERP",
      description:
        language === "en"
          ? "Conversational natural language AI Agentic Nano System for enterprise resource planning."
          : "Sistema Nano Agéntico de IA de lenguaje natural conversacional para planificación de recursos empresariales.",
    },
    {
      name: "Ecosuelolab",
      logo: "🌱",
      category: language === "en" ? "Agricultural Helper" : "Asistente Agrícola",
      description:
        language === "en"
          ? "Soil analysis and nutrient recommendations based on real-time satellite data and AI insights."
          : "Análisis de suelo y recomendaciones de nutrientes basado en datos satelitales en tiempo real e insights de IA.",
    },
    {
      name: "AxentAI",
      logo: "⚡",
      category: language === "en" ? "Team Management" : "Gestión de Equipos",
      description:
        language === "en"
          ? "Document management and permissions system with advanced AI-powered workflow automation."
          : "Sistema de gestión de documentos y permisos con automatización de flujos de trabajo avanzada impulsada por IA.",
    },
  ]

  return (
    <section id="clients" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gray-100 px-4 sm:px-6 lg:px-8">
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
            {language === "en" ? "Success Stories" : "Casos de Éxito"}
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-4 sm:mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            {language === "en" ? "Our Clients" : "Nuestros Clientes"}
          </h2>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
            {language === "en"
              ? "Full Stack Solutions Developed by N3uralia"
              : "Soluciones Full Stack Desarrolladas por N3uralia"}
          </p>
        </motion.div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo and Name */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl">{client.logo}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black">{client.name}</h3>
              </div>

              {/* Category */}
              <h4 className="text-base sm:text-lg font-medium text-gray-600 mb-3 sm:mb-4">{client.category}</h4>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{client.description}</p>

              {/* More Link */}
              <button className="text-gray-800 text-sm sm:text-base font-medium hover:text-gray-600 transition-colors hover:underline">
                {language === "en" ? "Learn More" : "Saber Más"}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 p-2">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <button className="text-gray-800 font-medium hover:text-gray-600 transition-colors text-sm sm:text-base">
              {language === "en" ? "Load more" : "Cargar más"}
            </button>

            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 p-2">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
