"use client"

import { useLanguage } from "@/lib/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function OurClientsSection() {
  const { language } = useLanguage()
  const router = useRouter()

  const clients = [
    {
      logo: "/logos/parrotfy-logo.png",
      name: "Parrotfy",
      title: language === "en" ? "ERP AI Assistant" : "Asistente IA ERP",
      description:
        language === "en"
          ? "Advanced conversational AI system that connects to any ERP API and transforms complex business data into natural language responses. Users can ask questions about inventory, sales, finances, and operations in plain language and receive intelligent, contextual answers."
          : "Sistema avanzado de IA conversacional que se conecta a cualquier API de ERP y transforma datos empresariales complejos en respuestas de lenguaje natural. Los usuarios pueden hacer preguntas sobre inventario, ventas, finanzas y operaciones en lenguaje simple y recibir respuestas inteligentes y contextuales.",
    },
    {
      logo: "/logos/ecosuelo-logo.png",
      name: "Ecosuelolab",
      title: language === "en" ? "Agricultural AI Assistant" : "Asistente IA Agrícola",
      description:
        language === "en"
          ? "Intelligent agricultural system that connects to satellite data APIs, weather services, and soil sensor networks to provide conversational insights about crop conditions. Farmers can ask natural language questions and receive detailed, actionable responses."
          : "Sistema agrícola inteligente que se conecta a APIs de datos satelitales, servicios meteorológicos y redes de sensores de suelo para proporcionar insights conversacionales sobre condiciones de cultivos. Los agricultores pueden hacer preguntas en lenguaje natural y recibir respuestas detalladas y accionables.",
    },
    {
      logo: "/logos/despega-tu-carrera-logo.png",
      name: "Despega Tu Carrera",
      title: language === "en" ? "AI Career Mentoring Platform" : "Plataforma de Mentoría Profesional con IA",
      description:
        language === "en"
          ? "Comprehensive AI-powered career coaching platform that connects to job market APIs and career databases to provide personalized mentoring. Users can discuss career goals, ask for interview preparation, and receive guidance on professional development paths."
          : "Plataforma integral de coaching profesional impulsada por IA que se conecta a APIs del mercado laboral y bases de datos de carreras para proporcionar mentoría personalizada. Los usuarios pueden discutir objetivos profesionales, pedir preparación para entrevistas y recibir orientación sobre trayectorias de desarrollo profesional.",
    },
    {
      logo: "/logos/seguralia-logo.png",
      name: "Seguralia",
      title: language === "en" ? "Security AI Platform" : "Plataforma de Seguridad IA",
      description:
        language === "en"
          ? "Advanced security system leveraging AI for threat detection, risk assessment, and incident response. Provides real-time security intelligence and automated threat mitigation through natural language interaction with security teams."
          : "Sistema de seguridad avanzado que aprovecha la IA para detección de amenazas, evaluación de riesgos y respuesta ante incidentes. Proporciona inteligencia de seguridad en tiempo real y mitigación automática de amenazas a través de interacción con lenguaje natural.",
    },
    {
      logo: "/logos/doublec-information-logo.png",
      name: "DoubleC Information",
      title: language === "en" ? "Enterprise IT Solutions" : "Soluciones TI Empresariales",
      description:
        language === "en"
          ? "Comprehensive IT infrastructure and management platform enhanced with AI for system optimization, predictive maintenance, and intelligent resource allocation. Delivers enterprise-grade solutions through conversational AI interfaces."
          : "Plataforma integral de infraestructura y gestión TI mejorada con IA para optimización de sistemas, mantenimiento predictivo y asignación inteligente de recursos. Entrega soluciones de nivel empresarial a través de interfaces de IA conversacionales.",
    },
  ]

  const handleLearnMore = () => {
    router.push("/clients")
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-gray-700 mb-4">
              {language === "en" ? "Our Clients" : "Nuestros Clientes"}
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {language === "en"
                ? "Full Stack AI Solutions Developed by N3uralia"
                : "Soluciones IA Full Stack Desarrolladas por N3uralia"}
            </p>
            <div className="w-24 h-px bg-gray-400 mx-auto mt-6"></div>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up group hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Logo Container */}
              <div className="mb-8">
                <div className="flex items-center justify-start mb-4 h-16">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={140}
                    height={64}
                    className="h-16 w-auto object-contain object-left filter grayscale hover:grayscale-0 transition-all duration-300"
                    style={{ maxWidth: "140px", maxHeight: "64px" }}
                  />
                </div>
                <div className="w-16 h-px bg-gray-300"></div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {client.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-sm">{client.description}</p>
                <button
                  onClick={handleLearnMore}
                  className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium group cursor-pointer"
                >
                  {language === "en" ? "Learn More" : "Saber Más"}
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors group">
            <ChevronLeft className="w-6 h-6 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">{language === "en" ? "Previous" : "Anterior"}</span>
          </button>

          <span className="text-blue-600 text-sm font-medium">{language === "en" ? "Load more" : "Cargar más"}</span>

          <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors group">
            <span className="text-sm">{language === "en" ? "Next" : "Siguiente"}</span>
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
