"use client"

import { useLanguage } from "@/lib/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function ProductsSection() {
  const { language } = useLanguage()

  const products = [
    {
      logo: "/logos/n3u360-logo.png",
      name: "N3uralia 360°",
      title: language === "en" ? "Full Dome and VR Studio" : "Estudio Full Dome y VR",
      description:
        language === "en"
          ? "Mathematical art created for Dome 360 projection or immersive VR environments content"
          : "Arte matemático creado para proyección Dome 360 o contenido de entornos VR inmersivos",
    },
    {
      logo: "/placeholder.svg?height=40&width=120",
      name: "HabboHotel",
      title: language === "en" ? "AI Meeting Rooms" : "Salas de Reuniones IA",
      description:
        language === "en"
          ? "Soil analysis, nutrients recommendation based on real time satellite data. Is a Full Stack project."
          : "Análisis de suelo, recomendación de nutrientes basada en datos satelitales en tiempo real. Es un proyecto Full Stack.",
    },
    {
      logo: "/logos/rosetta-logo.png",
      name: "Rosetta",
      title: language === "en" ? "Crypto Trading Co-Pilot" : "Co-Piloto de Trading Crypto",
      description:
        language === "en"
          ? "N3uralia's platform will predict next market move with 90% accuracy. Apply to any coin."
          : "La plataforma de N3uralia predecirá el próximo movimiento del mercado con 90% de precisión. Aplicable a cualquier moneda.",
    },
  ]

  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-gray-300 mb-4">
              {language === "en" ? "Our Products" : "Nuestros Productos"}
            </h2>
            <p className="text-xl text-gray-400 font-light">
              {language === "en" ? "N3uralia's Ecosystem" : "Ecosistema de N3uralia"}
            </p>
            <div className="w-24 h-px bg-gray-500 mx-auto mt-6"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Logo */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Image
                    src={product.logo || "/placeholder.svg"}
                    alt={product.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="w-16 h-px bg-gray-500"></div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-6">{product.title}</h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-8 text-sm">{product.description}</p>

              {/* More Link */}
              <button className="text-gray-400 hover:text-gray-200 transition-colors text-sm font-medium">More</button>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ChevronLeft className="w-6 h-6 mr-2" />
            <span className="text-sm">...</span>
          </button>

          <span className="text-blue-400 text-sm font-medium">Load more</span>

          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <span className="text-sm">...</span>
            <ChevronRight className="w-6 h-6 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}
