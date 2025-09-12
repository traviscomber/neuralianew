"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Zap, Shield, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [currentMetric, setCurrentMetric] = useState(0)
  const { t, language } = useLanguage()

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
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Minimalist Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-black/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-black/5 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge className="bg-black text-white border-0 text-sm px-6 py-2 rounded-full w-fit">
              {language === "en" ? "Next-Gen AI Solutions" : "Soluciones IA de Nueva Generación"}
            </Badge>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight">
                <span className="text-black">{language === "en" ? "Building" : "Construyendo"}</span>
                <br />
                <span className="text-black font-bold">{language === "en" ? "AI Bridges" : "Puentes IA"}</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed font-light max-w-lg">
                {language === "en"
                  ? "Transform your business with intelligent solutions that understand, learn, and deliver results."
                  : "Transforma tu negocio con soluciones inteligentes que comprenden, aprenden y entregan resultados."}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("services")}
                className="group bg-black hover:bg-gray-800 text-white font-medium px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {language === "en" ? "See Solutions" : "Ver Soluciones"}
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                variant="outline"
                className="group border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 text-lg rounded-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                {language === "en" ? "Talk to Human" : "Hablar con Humano"}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>50+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
              {/* Main Metric Display */}
              <div className="text-center mb-8">
                <motion.div
                  key={currentMetric}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="w-20 h-20 mx-auto bg-black rounded-2xl p-5">
                    {React.createElement(metrics[currentMetric].icon, {
                      className: "w-full h-full text-white",
                    })}
                  </div>
                  <div className="text-5xl font-bold text-black">{metrics[currentMetric].value}</div>
                  <div className="text-lg text-gray-600 font-medium">{metrics[currentMetric].label}</div>
                </motion.div>
              </div>

              {/* Metric Indicators */}
              <div className="grid grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: index === currentMetric ? 1.05 : 1,
                      opacity: index === currentMetric ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-center p-3 rounded-xl bg-gray-50 cursor-pointer"
                    onClick={() => setCurrentMetric(index)}
                  >
                    <div className="text-2xl font-bold text-black">{metric.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {metrics.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentMetric ? "bg-black w-8" : "bg-gray-300 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-xl text-sm font-semibold"
            >
              Live: 1,247 AI agents
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              className="absolute -bottom-4 -left-4 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold text-black shadow-lg"
            >
              99.9% Uptime
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
