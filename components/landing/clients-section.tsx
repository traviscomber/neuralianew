"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClientsSection() {
  const { language } = useLanguage()

  const clients = [
    {
      name: "Parrotfy",
      logo: "🦜",
      category: language === "en" ? "ERP AI Assistant" : "Asistente IA ERP",
      description:
        language === "en"
          ? "Conversational natural language AI Agentic Nano System."
          : "Sistema Nano Agéntico de IA de lenguaje natural conversacional.",
    },
    {
      name: "Ecosuelolab",
      logo: "🌱",
      category: language === "en" ? "Agricultural Helper" : "Asistente Agrícola",
      description:
        language === "en"
          ? "Soil analysis, nutrients recommendation based on real time satellite...."
          : "Análisis de suelo, recomendación de nutrientes basado en satélite en tiempo real....",
    },
    {
      name: "AxentAI",
      logo: "⚡",
      category: language === "en" ? "Team Management" : "Gestión de Equipos",
      description:
        language === "en"
          ? "Documents and permissions. Check and get advanced...."
          : "Documentos y permisos. Verificar y obtener avanzado....",
    },
  ]

  return (
    <section id="clients" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-gray-700 mb-4">
            {language === "en" ? "Our Clients" : "Nuestros Clientes"}
          </h2>
          <p className="text-xl text-blue-600 font-light">
            {language === "en"
              ? "Full Stack Solutions Developed by N3uralia"
              : "Soluciones Full Stack Desarrolladas por N3uralia"}
          </p>
        </motion.div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              {/* Logo and Name */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">{client.logo}</div>
                <h3 className="text-xl font-semibold text-black">{client.name}</h3>
              </div>

              {/* Category */}
              <h4 className="text-lg font-medium text-gray-600 mb-4">{client.category}</h4>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">{client.description}</p>

              {/* More Link */}
              <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                {language === "en" ? "More" : "Más"}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
            {language === "en" ? "Load more" : "Cargar más"}
          </button>

          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
