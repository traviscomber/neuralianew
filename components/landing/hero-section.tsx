"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageCircle, Zap, Globe, Users, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { ChatWidget } from "@/components/chat/chat-widget"
import { useState } from "react"

export function HeroSection() {
  const { language } = useLanguage()
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      action()
    }
  }

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen)
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/56940946660?text=Hola%20N3uralia,%20me%20interesa%20una%20solución%20completa%20con%20IA",
      "_blank",
    )
  }

  const handleLearnMoreClick = () => {
    const element = document.getElementById("solutions")
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                {language === "en" ? "AI Systems Online 24/7" : "Sistemas IA Online 24/7"}
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight"
            >
              {language === "en" ? (
                <>
                  Complete AI
                  <br />
                  <span className="font-normal">Ecosystems</span>
                </>
              ) : (
                <>
                  Ecosistemas IA
                  <br />
                  <span className="font-normal">Completos</span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {language === "en"
                ? "Full-stack development with integrated AI agents. From frontend to backend, databases to intelligent conversations."
                : "Desarrollo full-stack con agentes IA integrados. Desde frontend hasta backend, bases de datos hasta conversaciones inteligentes."}
            </motion.p>

            {/* CTA Buttons - Enhanced keyboard accessibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                onClick={handleWhatsAppClick}
                onKeyDown={(e) => handleKeyDown(e, handleWhatsAppClick)}
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 min-h-[56px]"
                aria-label="Start WhatsApp conversation to get started"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {language === "en" ? "Get Started" : "Comenzar"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                onClick={handleLearnMoreClick}
                onKeyDown={(e) => handleKeyDown(e, handleLearnMoreClick)}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 text-gray-700 hover:text-gray-900 focus:text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 focus:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 min-h-[56px]"
                aria-label="Learn more about our solutions"
              >
                {language === "en" ? "Learn More" : "Saber Más"}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 sm:gap-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1">35+</div>
                <div className="text-sm text-gray-600">{language === "en" ? "AI Projects" : "Proyectos IA"}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1">24/7</div>
                <div className="text-sm text-gray-600">{language === "en" ? "Global Support" : "Soporte Global"}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">{language === "en" ? "Uptime" : "Disponibilidad"}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <Card className="bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* Demo Header */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">N3uralia AI Assistant</h3>
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 text-xs">
                          <Globe className="w-3 h-3 mr-1" />
                          {language === "en" ? "Online" : "En línea"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">{language === "en" ? "Active" : "Activo"}</span>
                    </div>
                  </div>
                </div>

                {/* Demo Content */}
                <div className="p-6 space-y-4">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700 mb-2">
                          {language === "en"
                            ? "Hello! I'm your AI assistant. I can help you with:"
                            : "¡Hola! Soy tu asistente IA. Puedo ayudarte con:"}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            {language === "en" ? "Full-stack development" : "Desarrollo full-stack"}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            {language === "en" ? "AI integration" : "Integración IA"}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            {language === "en" ? "24/7 support" : "Soporte 24/7"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Chat Button - Keyboard accessible */}
                  <Button
                    onClick={handleChatToggle}
                    onKeyDown={(e) => handleKeyDown(e, handleChatToggle)}
                    className="w-full bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 text-white py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    aria-label={isChatOpen ? "Close chat demo" : "Open chat demo"}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {language === "en" ? "Try Live Demo" : "Probar Demo en Vivo"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center"
            >
              <Zap className="w-8 h-8 text-gray-700" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center"
            >
              <Globe className="w-6 h-6 text-gray-700" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget isOpen={isChatOpen} onToggle={setIsChatOpen} />
    </section>
  )
}
