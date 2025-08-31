"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sprout, TrendingUp, Settings, Bot, User, Database, Code, Zap } from "lucide-react"

const demos = [
  {
    id: "ecosuelo",
    name: "EcosueloLab",
    tagline: "Full Stack IA + API + WhatsApp",
    description: "Sistema completo: Base de datos → IA → WhatsApp Business API",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    icon: Sprout,
    messages: [
      {
        role: "bot",
        content:
          "¡Hola! 🌱 Soy EcosueloBot. Tengo acceso completo a tu base de datos de suelo. ¿Qué potrero revisamos?",
      },
      {
        role: "user",
        content: "El potrero norte, las plantas están amarillas",
      },
      {
        role: "bot",
        content:
          "Analizando datos en tiempo real... Tu potrero norte tiene nitrógeno muy bajo (15 ppm). Sistema detecta deficiencia nutricional.",
      },
      {
        role: "user",
        content: "¿Qué hago?",
      },
      {
        role: "bot",
        content:
          "Generando plan automático... Te envío recomendación completa por WhatsApp: aplicar 120 kg/ha de urea. ¿Confirmas tu número?",
      },
    ],
  },
  {
    id: "despega",
    name: "Despega Tu Carrera",
    tagline: "IA Coach + CRM + Automatización",
    description: "Sistema full stack: Perfil de usuario → IA personalizada → Seguimiento automático",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    icon: TrendingUp,
    messages: [
      {
        role: "bot",
        content: "¡Hola! 🚀 Soy tu coach IA. Analicé tu perfil profesional. ¿Cuál es tu meta?",
      },
      {
        role: "user",
        content: "Quiero liderar un equipo de desarrollo",
      },
      {
        role: "bot",
        content:
          "Perfecto. Según tu experiencia en React/Node.js, mi sistema calcula 85% probabilidad de éxito. ¿Has liderado proyectos?",
      },
      {
        role: "user",
        content: "Sí, algunos proyectos pequeños",
      },
      {
        role: "bot",
        content:
          "Excelente. Plan personalizado generado: mentorea juniors → lidera proyectos grandes → postula a Tech Lead. Te programo seguimiento automático. ¿Empezamos?",
      },
    ],
  },
  {
    id: "parrotfy",
    name: "Parrotfy ERP",
    tagline: "IA + ERP + Business Intelligence",
    description: "Sistema completo: ERP integrado → IA analítica → Reportes automáticos",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    icon: Settings,
    messages: [
      {
        role: "bot",
        content: "¡Hola! 💼 Soy Parrotfy IA. Conectado a tu ERP en tiempo real. ¿Qué análisis necesitas?",
      },
      {
        role: "user",
        content: "¿Quién es mi mejor cliente este mes?",
      },
      {
        role: "bot",
        content:
          "Procesando datos ERP... Tu mejor cliente es TechCorp: $45.000 facturados, 12 órdenes completadas, 98% satisfacción.",
      },
      {
        role: "user",
        content: "¿Qué productos le vendemos más?",
      },
      {
        role: "bot",
        content:
          "Análisis completo: 60% Software, 25% Consultoría, 15% Soporte. Mi IA detecta oportunidad de upselling en servicios cloud. ¿Genero propuesta automática?",
      },
    ],
  },
]

export function HeroSection() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([])
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const demo = demos[currentDemo]

    // Reset when demo changes
    setCurrentMessageIndex(0)
    setDisplayedMessages([])
    setIsTyping(false)

    // Start showing messages
    const showNextMessage = (messageIndex: number) => {
      if (messageIndex >= demo.messages.length) {
        // All messages shown, wait then switch to next demo
        setTimeout(() => {
          setCurrentDemo((prev) => (prev + 1) % demos.length)
        }, 3000)
        return
      }

      const message = demo.messages[messageIndex]

      if (message.role === "bot") {
        setIsTyping(true)
        setTimeout(() => {
          setDisplayedMessages((prev) => [...prev, message])
          setIsTyping(false)
          setCurrentMessageIndex(messageIndex + 1)
          // Wait longer before next message (3x slower)
          setTimeout(() => showNextMessage(messageIndex + 1), 4000)
        }, 2000)
      } else {
        // User message appears faster
        setTimeout(() => {
          setDisplayedMessages((prev) => [...prev, message])
          setCurrentMessageIndex(messageIndex + 1)
          setTimeout(() => showNextMessage(messageIndex + 1), 2000)
        }, 1000)
      }
    }

    // Start the sequence
    const initialDelay = setTimeout(() => {
      showNextMessage(0)
    }, 1000)

    return () => {
      clearTimeout(initialDelay)
    }
  }, [currentDemo])

  const demo = demos[currentDemo]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
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
            <Badge
              variant="secondary"
              className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200 px-4 py-2"
            >
              <Code className="w-4 h-4 mr-2" />
              Full Stack IA Systems
            </Badge>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Sistemas{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                Full Stack IA
              </span>{" "}
              completos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Desarrollamos <span className="font-semibold text-purple-700">sistemas completos de IA</span>: desde la
              base de datos hasta la interfaz conversacional.
              <br />
              <span className="text-lg text-gray-500">Backend + Frontend + IA + Integraciones = Solución completa</span>
            </motion.p>

            {/* Tech Stack Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                <Database className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Base de Datos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                <Bot className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">IA Conversacional</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                <Zap className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">APIs & Integraciones</span>
              </div>
            </motion.div>
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
                      <div className="bg-white rounded-lg shadow-inner p-4 min-h-[300px]">
                        <div className="space-y-3">
                          <AnimatePresence>
                            {displayedMessages.map((message, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex items-start gap-2 ${
                                  message.role === "user" ? "justify-end" : "justify-start"
                                }`}
                              >
                                {message.role === "bot" && (
                                  <div
                                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${demo.color} flex items-center justify-center flex-shrink-0`}
                                  >
                                    <Bot className="w-4 h-4 text-white" />
                                  </div>
                                )}
                                <div
                                  className={`px-4 py-2 rounded-2xl max-w-[85%] shadow-sm ${
                                    message.role === "bot"
                                      ? `bg-gradient-to-r ${demo.color} text-white rounded-tl-sm`
                                      : "bg-gray-100 text-gray-800 rounded-tr-sm"
                                  }`}
                                >
                                  <p className="text-sm leading-relaxed">{message.content}</p>
                                </div>
                                {message.role === "user" && (
                                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                                    <User className="w-4 h-4 text-gray-600" />
                                  </div>
                                )}
                              </motion.div>
                            ))}
                          </AnimatePresence>

                          {/* Typing indicator */}
                          {isTyping && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex items-start gap-2"
                            >
                              <div
                                className={`w-8 h-8 rounded-full bg-gradient-to-r ${demo.color} flex items-center justify-center flex-shrink-0`}
                              >
                                <Bot className="w-4 h-4 text-white" />
                              </div>
                              <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-tl-sm">
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
                      </div>

                      {/* Status */}
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span>Sistema Full Stack Activo</span>
                        </div>
                        <span>Demo en tiempo real</span>
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
    </section>
  )
}
