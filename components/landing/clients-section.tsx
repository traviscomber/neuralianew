"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function ClientsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Clients",
      subtitle: "Trusted by innovative companies across various industries",
      clients: [
        {
          name: "Parrotfy",
          logo: "/placeholder-logo.png",
          description: "AI-powered customer service automation",
          industry: "Technology",
        },
        {
          name: "Ecosuelolab",
          logo: "/placeholder-logo.png",
          description: "Environmental data analysis and reporting",
          industry: "Environmental",
        },
        {
          name: "AxentAI",
          logo: "/placeholder-logo.png",
          description: "Advanced AI research and development",
          industry: "AI Research",
        },
        {
          name: "TechCorp",
          logo: "/placeholder-logo.png",
          description: "Enterprise software solutions",
          industry: "Software",
        },
        {
          name: "RetailPlus",
          logo: "/placeholder-logo.png",
          description: "E-commerce platform optimization",
          industry: "Retail",
        },
        {
          name: "StartupX",
          logo: "/placeholder-logo.png",
          description: "Innovative startup solutions",
          industry: "Technology",
        },
      ],
    },
    es: {
      title: "Nuestros Clientes",
      subtitle: "Confiado por empresas innovadoras en diversas industrias",
      clients: [
        {
          name: "Parrotfy",
          logo: "/placeholder-logo.png",
          description: "Automatización de servicio al cliente con IA",
          industry: "Tecnología",
        },
        {
          name: "Ecosuelolab",
          logo: "/placeholder-logo.png",
          description: "Análisis y reportes de datos ambientales",
          industry: "Ambiental",
        },
        {
          name: "AxentAI",
          logo: "/placeholder-logo.png",
          description: "Investigación y desarrollo avanzado de IA",
          industry: "Investigación IA",
        },
        {
          name: "TechCorp",
          logo: "/placeholder-logo.png",
          description: "Soluciones de software empresarial",
          industry: "Software",
        },
        {
          name: "RetailPlus",
          logo: "/placeholder-logo.png",
          description: "Optimización de plataforma e-commerce",
          industry: "Retail",
        },
        {
          name: "StartupX",
          logo: "/placeholder-logo.png",
          description: "Soluciones innovadoras para startups",
          industry: "Tecnología",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">{t.title}</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">{t.subtitle}</p>
        </div>

        {/* Clients Grid - Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 group text-center"
            >
              {/* Logo */}
              <div className="mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-gray-50 transition-colors duration-300">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={60}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all duration-300 object-contain w-12 h-12 sm:w-15 sm:h-15"
                  />
                </div>
              </div>

              {/* Client Name */}
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">{client.name}</h3>

              {/* Industry */}
              <div className="text-xs sm:text-sm text-gray-500 font-medium mb-3 sm:mb-4 uppercase tracking-wide">
                {client.industry}
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
