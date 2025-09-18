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
      logo: "/logos/hawo-hotel-ai-meeting-rooms.png",
      name: "HAWO Hotel",
      title: language === "en" ? "AI Meeting Rooms" : "Salas de Reuniones IA",
      description:
        language === "en"
          ? "Virtual hotel meeting rooms with AI-powered moderation, real-time translation, and intelligent scheduling systems for seamless collaboration."
          : "Salas de reuniones de hotel virtual con moderación impulsada por IA, traducción en tiempo real y sistemas de programación inteligente para colaboración perfecta.",
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
              className="bg-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up hover:bg-gray-600"
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
              <button className="text-gray-400 hover:text-gray-200 transition-colors text-sm font-medium group">
                More
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
            <ChevronLeft className="w-6 h-6 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">Previous</span>
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>

          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
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
