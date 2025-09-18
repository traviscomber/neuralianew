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
          ? "Conversational natural language AI Agentic Nano System for enterprise resource planning and business process automation."
          : "Sistema Nano Agéntico de IA de lenguaje natural conversacional para planificación de recursos empresariales y automatización de procesos comerciales.",
    },
    {
      logo: "/logos/ecosuelo-logo.png",
      name: "Ecosuelolab",
      title: language === "en" ? "Agricultural Helper" : "Asistente Agrícola",
      description:
        language === "en"
          ? "Soil analysis, nutrients recommendation based on real time satellite data with precision agriculture insights and crop optimization."
          : "Análisis de suelo, recomendación de nutrientes basada en datos satelitales en tiempo real con información de agricultura de precisión y optimización de cultivos.",
    },
    {
      logo: "/logos/despega-tu-carrera-logo.jpg",
      name: "Despega Tu Carrera",
      title: language === "en" ? "Career Coaching Platform" : "Plataforma de Coaching Profesional",
      description:
        language === "en"
          ? "AI-powered career coaching and professional development platform with personalized guidance and automated mentoring systems."
          : "Plataforma de coaching profesional y desarrollo personal impulsada por IA con orientación personalizada y sistemas de mentoría automatizada.",
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
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Logo */}
              <div className="mb-8">
                <div className="flex items-center mb-4 h-12">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={48}
                    className={`max-h-12 w-auto object-contain ${client.isGrayscale ? "filter grayscale" : ""}`}
                  />
                </div>
                <div className="w-16 h-px bg-gray-300"></div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{client.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">{client.description}</p>

              {/* More Link */}
              <button className="text-gray-500 hover:text-gray-700 transition-colors text-sm font-medium group">
                More
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors group">
            <ChevronLeft className="w-6 h-6 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">Previous</span>
          </button>

          <span className="text-blue-500 text-sm font-medium">Load more</span>

          <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors group">
            <span className="text-sm">Next</span>
            <ChevronRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
