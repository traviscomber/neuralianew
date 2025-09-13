"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ProductsSection() {
  const { language } = useLanguage()

  const products = [
    {
      logo: "N3URALIA",
      logoSub: "360°",
      title: language === "en" ? "Full Dome and VR Studio" : "Estudio Full Dome y VR",
      description:
        language === "en"
          ? "Mathematical art created for Dome 360 projection or immersive VR environments content"
          : "Arte matemático creado para proyección Dome 360 o contenido de entornos VR inmersivos",
    },
    {
      logo: "HabboHotel",
      logoStyle: "text-red-500",
      title: language === "en" ? "AI Meeting Rooms" : "Salas de Reuniones IA",
      description:
        language === "en"
          ? "Soil analysis, nutrients recommendation based on real time satellite data. Is a Full Stack project."
          : "Análisis de suelo, recomendación de nutrientes basada en datos satelitales en tiempo real. Es un proyecto Full Stack.",
    },
    {
      logo: "Rosetta",
      title: language === "en" ? "Crypto Trading Co-Pilot" : "Co-Piloto de Trading Crypto",
      description:
        language === "en"
          ? "N3uralia's platform will predict next market move with 90% accuracy. Apply to any coin."
          : "La plataforma de N3uralia predecirá el próximo movimiento del mercado con 90% de precisión. Aplicable a cualquier moneda.",
    },
  ]

  return (
    <section id="products" className="bg-gray-100">
      {/* Header */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-gray-700 mb-4">
              {language === "en" ? "Our Products" : "Nuestros Productos"}
            </h2>
            <p className="text-xl text-blue-600 font-light">
              {language === "en" ? "N3uralia's Ecosystem" : "Ecosistema de N3uralia"}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Cards - Dark Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-2xl p-8 hover:bg-gray-600 transition-all duration-300"
              >
                {/* Logo */}
                <div className="mb-8">
                  <div className={`text-2xl font-light ${product.logoStyle || "text-white"} mb-2`}>
                    {product.logo}
                    {product.logoSub && <span className="text-lg ml-2">{product.logoSub}</span>}
                  </div>
                  <div className="w-16 h-px bg-gray-500"></div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-6">{product.title}</h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-8 text-sm">{product.description}</p>

                {/* More Link */}
                <button className="text-gray-400 hover:text-white transition-colors text-sm">More</button>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <ChevronLeft className="w-6 h-6 mr-2" />
              <span className="text-sm">...</span>
            </button>

            <span className="text-blue-400 text-sm">Load more</span>

            <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <span className="text-sm">...</span>
              <ChevronRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
