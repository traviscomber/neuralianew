"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { language } = useLanguage()

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/56931234567", "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            {language === "en" ? (
              <>
                AI Agents for
                <br />
                <span className="text-gray-300">Business Automation</span>
              </>
            ) : (
              <>
                Agentes de IA para
                <br />
                <span className="text-gray-300">Automatización Empresarial</span>
              </>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Transform your business processes with intelligent AI agents that work 24/7 to optimize operations and drive growth."
              : "Transforma tus procesos empresariales con agentes de IA inteligentes que trabajan 24/7 para optimizar operaciones e impulsar el crecimiento."}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 flex items-center gap-2 group"
          >
            {language === "en" ? "Start Implementation" : "Comenzar Implementación"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            onClick={openWhatsApp}
            variant="outline"
            size="lg"
            className="border-2 border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 flex items-center gap-2 bg-transparent"
          >
            <MessageCircle className="w-5 h-5" />
            {language === "en" ? "Contact Human" : "Contactar Humano"}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-white mb-2">24/7</div>
            <div className="text-gray-400 font-light">
              {language === "en" ? "Continuous Operation" : "Operación Continua"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-white mb-2">90%</div>
            <div className="text-gray-400 font-light">
              {language === "en" ? "Process Automation" : "Automatización de Procesos"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-white mb-2">50%</div>
            <div className="text-gray-400 font-light">
              {language === "en" ? "Cost Reduction" : "Reducción de Costos"}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
