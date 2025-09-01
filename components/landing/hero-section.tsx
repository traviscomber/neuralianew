"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sprout, TrendingUp, Settings, Bot, User, ArrowRight, Calendar, Clock } from "lucide-react"

const demos = [
  {
    id: "ecosuelo",
    name: "EcosueloLab",
    tagline: "Te ahorra 15 horas semanales",
    description: "Se conecta con tus datos de suelo y te manda recomendaciones por WhatsApp",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    icon: Sprout,
    messages: [
      {
        role: "bot",
        content: "🌱 Tu potrero norte tiene déficit de nitrógeno. Te envío el plan por WhatsApp.",
      },
      {
        role: "user",
        content: "¿Cuánto me va a costar?",
      },
      {
        role: "bot",
        content: "Plan completo: $180.000. Tu cosecha va a subir 23%. Se recupera en 2 meses.",
      },
      {
        role: "user",
        content: "Bacán, mandámelo",
      },
      {
        role: "bot",
        content: "✅ Enviado. Incluye mapa, proveedores y recordatorio en 21 días.",
      },
    ],
  },
  {
    id: "despega",
    name: "Despega Tu Carrera",
    tagline: "Sube tu sueldo 40% en 12 meses",
    description: "Coach con IA que analiza tu perfil y te arma un plan personalizado",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    icon: TrendingUp,
    messages: [
      {
        role: "bot",
        content: "🚀 Tienes 85% de probabilidades de conseguir liderazgo este año. ¿Partimos?",
      },
      {
        role: "user",
        content: "Sí, pero no cacho de liderar equipos",
      },
      {
        role: "bot",
        content: "Plan 12 meses: Mes 1-3 mentoring, Mes 4-6 liderar proyecto, Mes 7-12 Tech Lead. ¿Te tinca?",
      },
      {
        role: "user",
        content: "Me gusta, ¿por dónde empiezo?",
      },
      {
        role: "bot",
        content: "Mañana habla con Juan y ofrécele mentoring. Te programo recordatorio y temas.",
      },
    ],
  },
  {
    id: "parrotfy",
    name: "Parrotfy ERP",
    tagline: "Te encuentra $50K+ por mes",
    description: "IA que analiza tus datos y encuentra clientes en riesgo y oportunidades",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    icon: Settings,
    messages: [
      {
        role: "bot",
        content: "🚨 MegaCorp (-40% ventas) no compra hace 45 días. ¿Llamamos HOY?",
      },
      {
        role: "user",
        content: "Sí, ¿qué le ofrezco?",
      },
      {
        role: "bot",
        content: "20% descuento por renovación anual + consultoría gratis. Probabilidad: 78%",
      },
      {
        role: "user",
        content: "¿Y hay oportunidades nuevas?",
      },
      {
        role: "bot",
        content: "¡Obvio! TechCorp puede comprar $15K adicionales. ROI asegurado.",
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
        }, 4000)
        return
      }

      const message = demo.messages[messageIndex]

      if (message.role === "bot") {
        setIsTyping(true)
        setTimeout(() => {
          setDisplayedMessages((prev) => [...prev, message])
          setIsTyping(false)
          setCurrentMessageIndex(messageIndex + 1)
          // Wait longer before next message (slower pace)
          setTimeout(() => showNextMessage(messageIndex + 1), 3500)
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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-green-300 dark:bg-green-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000" />
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
              className="mb-6 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900 dark:to-orange-900 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700 px-4 py-2"
            >
              <Clock className="w-4 h-4 mr-2" />
              ¿Perdiste $50K+ por no automatizar?
            </Badge>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
            >
              Tu competencia ya usa{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                IA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              <span className="font-semibold text-purple-700 dark:text-purple-300">Mientras tú haces todo manual</span>,
              ellos automatizan y te ganan clientes.
              <br />
              <span className="text-lg text-gray-500 dark:text-gray-400">
                Ponte al día en 2-3 meses o quédate atrás
              </span>
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-green-200 dark:border-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">40% menos gastos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-200 dark:border-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sin saber tecnología</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <a
                  href="https://wa.me/56940946660?text=¡Hola!%20Quiero%20una%20asesoría%20gratuita%20sobre%20cómo%20la%20IA%20puede%20automatizar%20mi%20empresa%20y%20no%20quedarme%20atrás.%20¿Cuándo%20podemos%20conversar?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Asesoría Gratuita</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                onClick={() => {
                  const element = document.getElementById("success-cases")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Ver Casos de Éxito
              </Button>
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
                      index === currentDemo ? "bg-purple-600 w-8" : "bg-gray-300 dark:bg-gray-600"
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
                  <Card className={`${demo.bgColor} dark:bg-gray-800 border-2 border-opacity-20 shadow-2xl`}>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${demo.color} flex items-center justify-center shadow-lg`}
                        >
                          <demo.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{demo.name}</h3>
                          <p className="text-sm text-green-600 dark:text-green-400 font-medium">{demo.tagline}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{demo.description}</p>

                      {/* Chat Interface */}
                      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-inner p-4 min-h-[300px]">
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
                                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tr-sm"
                                  }`}
                                >
                                  <p className="text-sm leading-relaxed">{message.content}</p>
                                </div>
                                {message.role === "user" && (
                                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                                    <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
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
                              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-2xl rounded-tl-sm">
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
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span>Funcionando</span>
                        </div>
                        <span className="font-medium text-green-600 dark:text-green-400">ROI: 300%+</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-200 dark:bg-purple-700 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-200 dark:bg-blue-700 rounded-full animate-pulse animation-delay-1000" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-200 dark:bg-green-700 rounded-full animate-pulse animation-delay-2000" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
