"use client"

import { useLanguage } from "@/lib/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function OurClientsSection() {
  const { language } = useLanguage()

  const clients = [
    {
      logo: "/logos/parrotfy-logo.png",
      name: "Parrotfy",
      title: language === "en" ? "ERP AI Assistant" : "Asistente ERP IA",
      description:
        language === "en"
          ? "Conversational natural language AI Agentic Nano System."
          : "Sistema Nano Agéntico de IA de lenguaje natural conversacional.",
    },
    {
      logo: "/logos/ecosuelo-logo.png",
      name: "Ecosuelolab",
      title: language === "en" ? "Agricultural Helper" : "Asistente Agrícola",
      description:
        language === "en"
          ? "Soil analysis, nutrients recommendation based on real time satellite..."
          : "Análisis de suelo, recomendación de nutrientes basada en datos satelitales en tiempo real...",
    },
    {
      logo: "/logos/axentai-logo.jpg",
      name: "AxentAI",
      title: language === "en" ? "Team Management" : "Gestión de Equipos",
      description:
        language === "en"
          ? "Documents and permissions. Check and get advanced...."
          : "Documentos y permisos. Verificar y obtener avanzado....",
      isGrayscale: true,
    },
  ]

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-gray-700 mb-4">
              {language === "en" ? "Our Clients" : "Nuestros Clientes"}
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {language === "en"
                ? "Full Stack Solutions Developed by N3uralia"
                : "Soluciones Full Stack Desarrolladas por N3uralia"}
            </p>
            <div className="w-24 h-px bg-gray-400 mx-auto mt-6"></div>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Logo */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={40}
                    className={`h-8 w-auto object-contain ${client.isGrayscale ? "filter grayscale" : ""}`}
                  />
                </div>
                <div className="w-16 h-px bg-gray-300"></div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{client.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">{client.description}</p>

              {/* More Link */}
              <button className="text-gray-500 hover:text-gray-700 transition-colors text-sm font-medium">More</button>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors">
            <ChevronLeft className="w-6 h-6 mr-2" />
            <span className="text-sm">...</span>
          </button>

          <span className="text-blue-500 text-sm font-medium">Load more</span>

          <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors">
            <span className="text-sm">...</span>
            <ChevronRight className="w-6 h-6 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}
