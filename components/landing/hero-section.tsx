"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Bot, Sparkles, ArrowRight, Send, User } from "lucide-react"

const chatMessages = [
  {
    type: "user" as const,
    message: "¿Cómo puede la IA ayudar a mi negocio?",
    avatar: "/placeholder-user.jpg",
  },
  {
    type: "bot" as const,
    message:
      "¡Excelente pregunta! La IA puede automatizar procesos, mejorar la atención al cliente y optimizar decisiones. ¿En qué industria trabajas?",
    avatar: "/placeholder-logo.png",
  },
  {
    type: "user" as const,
    message: "Tengo una empresa de agricultura",
    avatar: "/placeholder-user.jpg",
  },
  {
    type: "bot" as const,
    message:
      "Perfecto. Podemos crear un sistema que analice datos de suelo, clima y cultivos para optimizar rendimientos y reducir costos. ¿Te interesa una demo?",
    avatar: "/placeholder-logo.png",
  },
]

export function HeroSection() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentMessageIndex < chatMessages.length - 1) {
        setIsTyping(true)
        setTimeout(() => {
          setCurrentMessageIndex((prev) => prev + 1)
          setIsTyping(false)
        }, 1000)
      } else {
        // Reset animation after showing all messages
        setTimeout(() => {
          setCurrentMessageIndex(0)
        }, 3000)
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [currentMessageIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-indigo-950/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 text-sm px-4 py-2"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Implementación de IA en 48 horas
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">¿No usas</span>{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                IA
              </span>{" "}
              <span className="text-foreground">en tu negocio?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Mientras tus competidores automatizan procesos y mejoran la experiencia del cliente, tú sigues perdiendo
              tiempo en tareas repetitivas. Implementamos IA conversacional que funciona desde el primer día.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20IA%20en%20mi%20negocio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Implementar IA Ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold px-8 py-4 text-lg transition-all duration-300 bg-transparent"
                onClick={() => {
                  const element = document.getElementById("use-cases")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Ver Casos de Éxito
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">48h</div>
                <div className="text-sm text-muted-foreground">Implementación</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Disponibilidad</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Personalizado</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Chat Container */}
              <Card className="bg-card/80 dark:bg-card/90 backdrop-blur-sm border-2 border-border shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-card-foreground">N3uralia AI Assistant</span>
                    <Badge variant="secondary" className="ml-auto text-xs">
                      En línea
                    </Badge>
                  </div>

                  <div className="space-y-4 h-80 overflow-y-auto">
                    <AnimatePresence>
                      {chatMessages.slice(0, currentMessageIndex + 1).map((msg, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className={`flex gap-3 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          {msg.type === "bot" && (
                            <Avatar className="w-8 h-8 flex-shrink-0">
                              <AvatarImage src={msg.avatar || "/placeholder.svg"} alt="AI" />
                              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                                <Bot className="w-4 h-4" />
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={`max-w-[80%] p-3 rounded-2xl ${
                              msg.type === "user"
                                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white ml-auto"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <p className="text-sm">{msg.message}</p>
                          </div>
                          {msg.type === "user" && (
                            <Avatar className="w-8 h-8 flex-shrink-0">
                              <AvatarImage src={msg.avatar || "/placeholder.svg"} alt="User" />
                              <AvatarFallback className="bg-gray-500 text-white">
                                <User className="w-4 h-4" />
                              </AvatarFallback>
                            </Avatar>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3 justify-start"
                      >
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                            <Bot className="w-4 h-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-muted p-3 rounded-2xl">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce animation-delay-200"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce animation-delay-400"></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex gap-2">
                      <div className="flex-1 bg-muted rounded-full px-4 py-2">
                        <span className="text-muted-foreground text-sm">Escribe tu mensaje...</span>
                      </div>
                      <Button size="sm" className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-full shadow-lg"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-full shadow-lg"
              >
                <Bot className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
