"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { TrendingUp, Clock, Shield, BarChart3, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [currentMetric, setCurrentMetric] = useState(0)
  const { t, language } = useLanguage()

  const metrics = [
    { value: "95%", label: "Client Satisfaction", icon: TrendingUp },
    { value: "60%", label: "Cost Reduction", icon: BarChart3 },
    { value: "48h", label: "Quick Setup", icon: Clock },
    { value: "99.9%", label: "Uptime SLA", icon: Shield },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimalist Background */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-black/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-black/5 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="text-center space-y-12">
          {/* Minimalist Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge className="bg-black text-white border-0 text-sm px-6 py-2 rounded-full">
              {language === "en" ? "Next-Gen AI Solutions" : "Soluciones IA de Nueva Generación"}
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight">
              <span className="text-black">
                {language === "en" ? "Building Bridges to" : "Construyendo Puentes hacia"}
              </span>
              <br />
              <span className="text-black font-bold">{language === "en" ? "AI" : "IA"}</span>
            </h1>

            <div className="max-w-4xl mx-auto space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed font-light"
              >
                {language === "en"
                  ? "At N3uralia, we specialize in cutting-edge AI solutions designed to elevate your business to new heights."
                  : "En N3uralia, nos especializamos en soluciones de IA de vanguardia diseñadas para elevar tu negocio a nuevas alturas."}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed font-light"
              >
                {language === "en"
                  ? "Our intuitive platforms harness the power of artificial intelligence, transforming complex data into actionable insights."
                  : "Nuestras plataformas intuitivas aprovechan el poder de la inteligencia artificial, transformando datos complejos en insights accionables."}
              </motion.p>
            </div>
          </motion.div>

          {/* Minimalist Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon
                  const isActive = index === currentMetric
                  return (
                    <motion.div
                      key={index}
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        opacity: isActive ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gray-100 p-3">
                        <Icon className="w-full h-full text-black" />
                      </div>
                      <div className="text-3xl font-bold text-black mb-2">{metric.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                    </motion.div>
                  )
                })}
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                {metrics.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentMetric ? "bg-black w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Minimalist CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("solutions")}
              className="group bg-black hover:bg-gray-800 text-white font-medium px-10 py-4 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {language === "en" ? "Explore Solutions" : "Explorar Soluciones"}
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/56940946660", "_blank")}
              variant="outline"
              className="group border-2 border-black text-black hover:bg-black hover:text-white font-medium px-10 py-4 text-lg rounded-xl transition-all duration-300"
            >
              {language === "en" ? "Contact Human" : "Contactar Humano"}
            </Button>
          </motion.div>

          {/* Minimalist Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span>50+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span>24/7 Global Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
