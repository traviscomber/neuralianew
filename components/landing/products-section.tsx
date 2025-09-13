"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function ProductsSection() {
  const { language } = useLanguage()

  const products = [
    {
      logo: "/n3uralia-logo-new.png",
      title: "Full Dome and VR Studio",
      subtitle: "360°",
      description: "Mathematical art created for Dome 360 projection or immersive VR environments content",
    },
    {
      logo: "/placeholder.svg?height=60&width=120&text=HabboHotel",
      title: "AI Meeting Rooms",
      subtitle: "HabboHotel",
      description:
        "Soil analysis, nutrients recommendation based on real time satellite data. Is a Full Stack project.",
    },
    {
      logo: "/placeholder.svg?height=60&width=120&text=Rosetta",
      title: "Crypto Trading Co-Pilot",
      subtitle: "Rosetta",
      description: "N3uralia's platform will predict next market move with 90% accuracy. Apply to any coin.",
    },
  ]

  return (
    <section id="products" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-3 sm:mb-4 px-4">Our Products</h2>
          <p className="text-lg sm:text-xl text-gray-700">N3uralia's Ecosystem</p>
        </motion.div>

        {/* Mobile-optimized Products Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 text-white rounded-2xl h-full touch-manipulation">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <Image
                        src={product.logo || "/placeholder.svg"}
                        alt={product.title}
                        width={50}
                        height={50}
                        className="w-12 h-12 sm:w-15 sm:h-15 object-contain grayscale"
                      />
                      <span className="text-xs sm:text-sm text-gray-400">{product.subtitle}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight">{product.title}</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {product.description}
                    </p>
                    <Button
                      variant="outline"
                      className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent text-sm sm:text-base min-h-[44px] w-full sm:w-auto"
                    >
                      More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile-optimized Navigation */}
          <div className="flex justify-between items-center mt-6 sm:mt-8 px-4">
            <Button variant="ghost" size="sm" className="text-gray-600 border-0 min-h-[44px] px-2">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              <span className="text-sm sm:text-base">..</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 border-0 min-h-[44px] px-4">
              <span className="text-sm sm:text-base">Load more</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 border-0 min-h-[44px] px-2">
              <span className="text-sm sm:text-base">..</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
