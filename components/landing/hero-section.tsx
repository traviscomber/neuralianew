"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sprout, TrendingUp, Settings, Zap, ArrowRight, MessageCircle, Bot, User } from "lucide-react"

const demos = [
  {
    id: "ecosuelo",
    name: "EcosueloLab",
    tagline: "Análisis de Suelo",
    description: "Analiza nitrógeno en el suelo conversando naturalmente con IA",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    icon: Sprout,
    message: "¡Hola! Soy EcosueloBot. ¿Qué análisis de suelo necesitas hoy? 🌱",
    userMessage: "Analizar nitrógeno",
  },
  {
    id: "despega",
    name: "Despega Tu Carrera",
    tagline: "Coaching Profesional",
    description: "Impulsa tu carrera conversando naturalmente con IA",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    icon: TrendingUp,
    message: "¡Hola! Soy tu coach de carrera. ¿Cuál es tu meta profesional? 🚀",
    userMessage: "Conseguir promoción",
  },
  {
    id: "parrotfy",
    name: "Parrotfy",
    tagline: "Asistente ERP",
    description: "Gestiona tu empresa conversando naturalmente con IA",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    icon: Settings,
    message: "¡Hola! Soy Parrotfy de parrotfyia.vercel.app. ¿Qué proceso optimizamos hoy? ⚙️",
    userMessage: "Revisar inventario",
  },
]

export function HeroSection() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [showUserMessage, setShowUserMessage] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowUserMessage(false)
      setTimeout(() => {
        setCurrentDemo((prev) => (prev + 1) % demos.length)
        setTimeout(() => {
          setShowUserMessage(true)
        }, 1000)
      }, 500)
    }, 4000)

    // Show first user message after initial delay
    const initialTimer = setTimeout(() => {
      setShowUserMessage(true)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(initialTimer)
    }
  }, [])

  const demo = demos[currentDemo]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200 text-sm px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Vibe Coding Technology
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              IA que{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                Entiende
              </span>
              <br />
              tu{" "}
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vibe
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Creamos portales neuronales que no solo procesan información, sino que{" "}
              <span className="font-semibold text-purple-700">conectan emocionalmente</span> con tus usuarios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Zap className="w-5 h-5 mr-2" />
                Crear Mi Portal Neuronal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold px-8 py-4 text-lg bg-white/80 backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ver Demo en Vivo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-gray-600 font-medium">Usuarios Activos</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-gray-600 font-medium">Satisfacción</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Disponibilidad</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Demo indicators */}
              <div className="flex justify-center mb-6 space-x-2">
                {demos.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentDemo ? "bg-purple-600 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDemo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className={`${demo.bgColor} border-2 border-opacity-20 shadow-2xl`}>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${demo.color} flex items-center justify-center shadow-lg`}
                        >
                          <demo.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{demo.name}</h3>
                          <p className="text-sm text-gray-600">{demo.tagline}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{demo.description}</p>

                      {/* Chat Interface */}
                      <div className="bg-white rounded-lg shadow-inner p-4 space-y-3">
                        {/* Bot message */}
                        <div className="flex items-start gap-2">
                          <div
                            className={`w-8 h-8 rounded-full bg-gradient-to-r ${demo.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div
                            className={`bg-gradient-to-r ${demo.color} text-white px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] shadow-sm`}
                          >
                            <p className="text-sm">{demo.message}</p>
                          </div>
                        </div>

                        {/* User message */}
                        <AnimatePresence>
                          {showUserMessage && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ duration: 0.3 }}
                              className="flex items-start gap-2 justify-end"
                            >
                              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                                <p className="text-sm">{demo.userMessage}</p>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 text-gray-600" />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Typing indicator */}
                        {showUserMessage && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2"
                          >
                            <div
                              className={`w-8 h-8 rounded-full bg-gradient-to-r ${demo.color} flex items-center justify-center`}
                            >
                              <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                <div
                                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.1s" }}
                                />
                                <div
                                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.2s" }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Status */}
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span>Portal neuronal activo</span>
                        </div>
                        <span>Respuesta en tiempo real</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-200 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-200 rounded-full animate-pulse animation-delay-1000" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-200 rounded-full animate-pulse animation-delay-2000" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm font-medium">Descubre más</span>
          <ArrowRight className="w-4 h-4 rotate-90 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
