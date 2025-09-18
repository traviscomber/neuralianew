"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function ProductsSection() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const content = {
    en: {
      title: "Our Products",
      subtitle: "N3uralia's Ecosystem",
      products: [
        {
          name: "N3uralia 360°",
          title: "Full Dome and VR Studio",
          description: "Mathematical art created for Dome 360 projection or immersive VR environments content",
          logo: "/logos/n3u360-logo.png",
          moreText: "More",
        },
        {
          name: "Hawo AI Meeting Rooms",
          title: "Virtual Hotel Solution",
          description:
            "Virtual hotel meeting rooms with AI-powered moderation, real-time translation, and intelligent scheduling systems for seamless collaboration",
          logo: "/logos/hawo-final-logo.png",
          moreText: "More",
        },
        {
          name: "Rosetta",
          title: "Crypto Trading Co-Pilot",
          description: "N3uralia's platform will predict next market move with 90% accuracy. Apply to any coin",
          logo: "/logos/rosetta-logo.png",
          moreText: "More",
        },
      ],
    },
    es: {
      title: "Nuestros Productos",
      subtitle: "Ecosistema N3uralia",
      products: [
        {
          name: "N3uralia 360°",
          title: "Estudio Full Dome y VR",
          description: "Arte matemático creado para proyección Dome 360 o contenido de entornos VR inmersivos",
          logo: "/logos/n3u360-logo.png",
          moreText: "Más",
        },
        {
          name: "Salas de Reuniones IA Hawo",
          title: "Solución Hotelera Virtual",
          description:
            "Salas de reuniones hoteleras virtuales con moderación impulsada por IA, traducción en tiempo real y sistemas de programación inteligente para colaboración perfecta",
          logo: "/logos/hawo-final-logo.png",
          moreText: "Más",
        },
        {
          name: "Rosetta",
          title: "Co-Piloto de Trading Crypto",
          description:
            "La plataforma de N3uralia predecirá el próximo movimiento del mercado con 90% de precisión. Aplicable a cualquier moneda",
          logo: "/logos/rosetta-logo.png",
          moreText: "Más",
        },
      ],
    },
  }

  const t = content[language]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % t.products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + t.products.length) % t.products.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-xl text-gray-400">{t.subtitle}</p>
        </motion.div>

        {/* Products Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {t.products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* Logo Container */}
                  <div className="h-16 flex items-center justify-center mb-6">
                    <Image
                      src={product.logo || "/placeholder.svg"}
                      alt={`${product.name} logo`}
                      width={product.name === "Hawo AI Meeting Rooms" ? 220 : 180}
                      height={product.name === "Hawo AI Meeting Rooms" ? 80 : 64}
                      className={`${
                        product.name === "Hawo AI Meeting Rooms" ? "h-16" : "h-12"
                      } w-auto object-contain filter brightness-0 invert`}
                    />
                  </div>

                  {/* Divider */}
                  <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-6" />

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">{product.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6 text-center">{product.description}</p>
                  </div>

                  {/* Button */}
                  <div className="text-center">
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 bg-transparent group-hover:border-blue-500 group-hover:text-blue-400 transition-all duration-300"
                    >
                      {product.moreText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Products Carousel - Mobile/Tablet */}
        <div className="lg:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    {/* Logo Container */}
                    <div className="h-16 flex items-center justify-center mb-6">
                      <Image
                        src={t.products[currentIndex].logo || "/placeholder.svg"}
                        alt={`${t.products[currentIndex].name} logo`}
                        width={t.products[currentIndex].name === "Hawo AI Meeting Rooms" ? 220 : 180}
                        height={t.products[currentIndex].name === "Hawo AI Meeting Rooms" ? 80 : 64}
                        className={`${
                          t.products[currentIndex].name === "Hawo AI Meeting Rooms" ? "h-16" : "h-12"
                        } w-auto object-contain filter brightness-0 invert`}
                      />
                    </div>

                    {/* Divider */}
                    <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-6" />

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4 text-center">{t.products[currentIndex].title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6 text-center">
                      {t.products[currentIndex].description}
                    </p>

                    {/* Button */}
                    <div className="text-center">
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 bg-transparent transition-all duration-300"
                      >
                        {t.products[currentIndex].moreText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 z-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 z-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {t.products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
