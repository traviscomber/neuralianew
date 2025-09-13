"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Zap, Shield, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [currentMetric, setCurrentMetric] = useState(0)
  const { language } = useLanguage()

  const metrics = [
    { value: "95%", label: "Client Satisfaction", icon: TrendingUp },
    { value: "60%", label: "Cost Reduction", icon: TrendingUp },
    { value: "48h", label: "Quick Setup", icon: Zap },
    { value: "99.9%", label: "Uptime SLA", icon: Shield },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = window.innerWidth < 768 ? 70 : 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 pt-16 sm:pt-20 px-4">
      {/* Minimalist Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Elements - Adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/6 w-24 h-24 sm:w-40 sm:h-40 bg-gray-400/10 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-1/3 right-1/6 w-20 h-20 sm:w-32 sm:h-32 bg-gray-400/10 rounded-full blur-xl sm:blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Mobile-optimized heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-tight px-2">
            <span className="block sm:inline">Building Bridges</span>
            <span className="block sm:inline"> to AI</span>
          </h1>

          {/* Mobile-optimized description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            {language === "en"
              ? "At N3uralia, we specialize in cutting-edge AI solutions designed to elevate your business to new heights."
              : "En N3uralia, nos especializamos en soluciones de IA de vanguardia diseñadas para elevar tu negocio a nuevas alturas."}
          </p>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            {language === "en"
              ? "Our intuitive platforms harness the power of artificial intelligence, transforming complex data into actionable insights."
              : "Nuestras plataformas intuitivas aprovechan el poder de la inteligencia artificial, transformando datos complejos en insights accionables."}
          </p>

          {/* Mobile-optimized buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-8 px-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("solutions")}
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full border-0 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto"
            >
              {language === "en" ? "Explore Solutions" : "Explorar Soluciones"}
            </Button>
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/56940946660", "_blank")}
              variant="outline"
              className="border-2 border-gray-700 text-gray-900 hover:bg-gray-100 bg-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full min-h-[48px] sm:min-h-[56px] w-full sm:w-auto"
            >
              {language === "en" ? "Contact Human" : "Contactar Humano"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
