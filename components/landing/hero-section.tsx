"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, Sparkles, ArrowRight, Bot, User } from "lucide-react"

const realQuestions = [
  {
    id: 1,
    emoji: "💰",
    question: "¿Cuánto cuesta implementar IA en mi negocio?",
    response:
      "Desde $500 USD/mes. Pero ojo: se paga solo en 2-3 meses con la automatización que genera. Te mostramos casos reales, no demos fake.",
  },
  {
    id: 2,
    emoji: "🤔",
    question: "¿Realmente funciona o es puro marketing?",
    response:
      "100% real. Tenemos clientes usando nuestros sistemas ahora mismo. EcosueloLab procesa datos de suelo por WhatsApp, Parrotfy ERP maneja consultas de inventario. Datos que generan dinero.",
  },
  {
    id: 3,
    emoji: "⏰",
    question: "¿Cuánto tiempo toma ver resultados?",
    response:
      "Primera semana: configuración. Segunda semana: ya está funcionando. Cuarta semana: procesos sin intervención humana. No prometemos milagros, prometemos sistemas que funcionan.",
  },
  {
    id: 4,
    emoji: "🤯",
    question: "¿Es muy complicado de usar?",
    response:
      "Súper fácil. Si sabes usar WhatsApp, sabes usar nuestros sistemas. La IA maneja la complejidad, tú solo conversas normalmente y obtienes resultados.",
  },
  {
    id: 5,
    emoji: "😅",
    question: "¿Qué pasa si no sé nada de tecnología?",
    response:
      "Perfecto, nosotros nos encargamos de todo. Instalación, configuración, entrenamiento. Tú solo usas el sistema. Soporte 24/7 incluido.",
  },
  {
    id: 6,
    emoji: "🔗",
    question: "¿Pueden integrarse con mis sistemas actuales?",
    response:
      "Sí, nos conectamos con todo: tu CRM, tu sistema de ventas, tu base de datos, tu WhatsApp Business. Una sola conversación accede a toda tu información.",
  },
]

export function HeroSection() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showResponse, setShowResponse] = useState(false)
  const [showQuestions, setShowQuestions] = useState(true)

  useEffect(() => {
    if (!showResponse && showQuestions) {
      const timer = setTimeout(() => {
        setCurrentQuestionIndex((prev) => (prev + 1) % realQuestions.length)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [currentQuestionIndex, showResponse, showQuestions])

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index)
    setShowQuestions(false)
    setShowResponse(true)

    setTimeout(() => {
      setShowResponse(false)
      setTimeout(() => {
        setShowQuestions(true)
      }, 500)
    }, 7000)
  }

  const currentQuestion = realQuestions[currentQuestionIndex]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Tu competencia ya usa IA
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">¿No usas</span>{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                IA?
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Desarrollamos sistemas de IA que{" "}
              <span className="font-semibold text-foreground">realmente funcionan</span>.
              <br />
              Desde chatbots hasta automatización completa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20IA%20en%20mi%20negocio.%20%C2%BFPodemos%20conversar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Empezar Ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-muted/50 transition-all duration-300 bg-transparent"
                onClick={() => document.getElementById("use-cases")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Casos Reales
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Interactive Chat */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Card className="bg-card/80 dark:bg-card/90 backdrop-blur-sm border-2 border-border shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-card-foreground">Respondiendo preguntas reales</span>
                </div>

                <div className="space-y-4 min-h-[400px]">
                  <AnimatePresence mode="wait">
                    {showQuestions && (
                      <motion.div
                        key="questions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <Bot className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          <span className="text-sm font-medium text-muted-foreground">Selecciona una pregunta:</span>
                        </div>

                        {realQuestions.map((q, index) => (
                          <motion.button
                            key={q.id}
                            onClick={() => handleQuestionClick(index)}
                            className={`w-full text-left p-3 rounded-lg border transition-all duration-300 hover:shadow-md ${
                              index === currentQuestionIndex
                                ? "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700 shadow-sm"
                                : "bg-muted/30 dark:bg-muted/20 border-border hover:bg-muted/50 dark:hover:bg-muted/30"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-lg">{q.emoji}</span>
                              <span className="text-sm font-medium text-card-foreground leading-relaxed">
                                {q.question}
                              </span>
                            </div>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}

                    {showResponse && (
                      <motion.div
                        key="response"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-4"
                      >
                        {/* User Question */}
                        <div className="flex items-start gap-3 justify-end">
                          <div className="bg-purple-600 dark:bg-purple-500 text-white p-3 rounded-lg rounded-tr-none max-w-xs">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg">{currentQuestion.emoji}</span>
                            </div>
                            <p className="text-sm font-medium">{currentQuestion.question}</p>
                          </div>
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-purple-600 dark:bg-purple-500 text-white text-xs">
                              <User className="w-4 h-4" />
                            </AvatarFallback>
                          </Avatar>
                        </div>

                        {/* AI Response */}
                        <div className="flex items-start gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white text-xs">
                              <Bot className="w-4 h-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="bg-muted dark:bg-muted/80 p-3 rounded-lg rounded-tl-none max-w-sm">
                            <p className="text-sm text-card-foreground leading-relaxed">{currentQuestion.response}</p>
                          </div>
                        </div>

                        <motion.button
                          onClick={() => {
                            setShowResponse(false)
                            setTimeout(() => setShowQuestions(true), 500)
                          }}
                          className="w-full mt-4 p-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-200"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          ← Ver más preguntas
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
