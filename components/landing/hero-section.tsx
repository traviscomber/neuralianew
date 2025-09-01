"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ArrowRight,
  MessageSquare,
  Brain,
  Send,
  Loader2,
  Sparkles,
  Bot,
  User,
  Calculator,
  Code,
  Globe,
  Clock,
  CheckCircle,
} from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  isTyping?: boolean
}

const QUICK_PROMPTS = [
  {
    icon: Calculator,
    text: "💰 ¿Cuánto cuesta?",
    prompt: "¿Cuánto costaría implementar un chatbot de IA para mi empresa?",
  },
  { icon: Code, text: "🔧 Arquitectura técnica", prompt: "¿Cómo funciona la arquitectura técnica de N3uralia?" },
  { icon: Globe, text: "🏆 Casos de éxito", prompt: "Muéstrame casos de éxito reales con métricas específicas" },
  { icon: Clock, text: "⚡ Proceso completo", prompt: "¿Cuál es el proceso desde consulta hasta implementación?" },
]

export function HeroSection() {
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `¡Hola! 👋 Soy el **N3uralia AI Expert**. Puedo ayudarte con:

• **Cotizaciones personalizadas** para tu proyecto específico
• **Información técnica** sobre nuestras soluciones de IA
• **Casos de éxito** con métricas reales de ROI
• **Procesos de implementación** paso a paso

**¿En qué puedo ayudarte?** 🚀`,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = async (userMessage: string): Promise<Message> => {
    try {
      const response = await fetch("/api/chat/hero-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: messages.slice(-3),
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      return {
        id: Date.now().toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      }
    } catch (error) {
      console.error("Error generating response:", error)

      // Fallback responses
      const lowerMessage = userMessage.toLowerCase()

      if (lowerMessage.includes("precio") || lowerMessage.includes("costo") || lowerMessage.includes("cotiza")) {
        return {
          id: Date.now().toString(),
          role: "assistant",
          content: `💰 **Cotización N3uralia:**

**Rangos de precios:**
• **Chatbot básico**: $2,000 - $5,000 USD
• **IA conversacional avanzada**: $5,000 - $15,000 USD
• **Solución enterprise**: $15,000+ USD

**✅ Incluido siempre:**
• Consultoría inicial GRATIS
• Desarrollo completo
• Soporte 24/7 por 6 meses
• ROI promedio: 250%

**¿Quieres una cotización exacta?**
📞 +56 9 4094 6660 | 📧 hello@n3uralia.com`,
          timestamp: new Date(),
        }
      }

      if (lowerMessage.includes("técnic") || lowerMessage.includes("arquitec")) {
        return {
          id: Date.now().toString(),
          role: "assistant",
          content: `🔧 **Arquitectura N3uralia:**

**Stack Tecnológico:**
• **Frontend**: React, Next.js, TypeScript
• **Backend**: Node.js, Python, FastAPI
• **IA**: OpenAI GPT-4, Custom Models
• **Cloud**: AWS, Google Cloud, Azure
• **Seguridad**: Encriptación end-to-end

**Ventajas:**
• Desarrollo 24/7 (3 continentes)
• 99.9% uptime garantizado
• Integración con 500+ APIs
• Deployment en < 48 horas

¿Te interesa algún aspecto específico?`,
          timestamp: new Date(),
        }
      }

      return {
        id: Date.now().toString(),
        role: "assistant",
        content: `🚀 **N3uralia - Soluciones de IA Empresarial**

**Servicios principales:**
• Sistemas Full Stack de IA
• Chatbots inteligentes
• Automatización de procesos
• Integración multicanal

**Lo que nos diferencia:**
• Equipo global 24/7
• ROI promedio 250%
• 50+ proyectos exitosos
• 96% satisfacción cliente

¿Qué te gustaría saber específicamente?`,
        timestamp: new Date(),
      }
    }
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    const typingMessage: Message = {
      id: "typing",
      role: "assistant",
      content: "",
      timestamp: new Date(),
      isTyping: true,
    }
    setMessages((prev) => [...prev, typingMessage])

    try {
      const response = await generateResponse(userMessage.content)
      setMessages((prev) => prev.filter((m) => m.id !== "typing").concat(response))
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => prev.filter((m) => m.id !== "typing"))
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
    textareaRef.current?.focus()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Powered by OpenAI GPT-4
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Transforma
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">tu negocio</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    con IA
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Desarrollamos soluciones de IA conversacional que revolucionan la experiencia de tus clientes.
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    {" "}
                    ROI promedio 250% en el primer año.
                  </span>
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    onClick={() => setShowChat(true)}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Consultar AI Expert
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                    className="px-8 py-4 text-lg border-2 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    WhatsApp Directo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">250%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">ROI Promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Soporte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">96%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Satisfacción</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Compact Chat Interface */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                <CardContent className="p-0">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-t-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">N3uralia AI Expert</h3>
                        <div className="flex items-center text-sm opacity-90">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                          Online 24/7
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <ScrollArea className="h-80 p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex items-start space-x-3 ${
                            message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.role === "user"
                                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                                : "bg-gradient-to-r from-purple-500 to-pink-500"
                            }`}
                          >
                            {message.role === "user" ? (
                              <User className="w-4 h-4 text-white" />
                            ) : (
                              <Bot className="w-4 h-4 text-white" />
                            )}
                          </div>

                          <div className={`flex-1 ${message.role === "user" ? "text-right" : ""}`}>
                            <div
                              className={`inline-block p-3 rounded-lg max-w-[85%] ${
                                message.role === "user"
                                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                              }`}
                            >
                              {message.isTyping ? (
                                <div className="flex items-center space-x-2">
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                  <span className="text-sm">Pensando...</span>
                                </div>
                              ) : (
                                <div className="text-sm whitespace-pre-line leading-relaxed">{message.content}</div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div ref={messagesEndRef} />
                  </ScrollArea>

                  {/* Quick Prompts */}
                  {messages.length === 1 && (
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 text-center">
                        Preguntas rápidas:
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {QUICK_PROMPTS.map((prompt, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickPrompt(prompt.prompt)}
                            className="text-xs h-8 justify-start hover:bg-purple-50 dark:hover:bg-purple-900/20"
                          >
                            {prompt.text}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-end space-x-2">
                      <Textarea
                        ref={textareaRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Pregúntame sobre cotizaciones, casos de éxito, arquitectura técnica..."
                        className="min-h-[40px] max-h-[80px] resize-none text-sm"
                        disabled={isLoading}
                      />
                      <Button
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        size="sm"
                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white h-10"
                      >
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      </Button>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                      Powered by N3uralia AI • Enter para enviar
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Respuesta en tiempo real
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expanded Chat Modal */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowChat(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="h-full flex flex-col">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Brain className="w-6 h-6" />
                    <div>
                      <h3 className="font-semibold">N3uralia AI Expert - Modo Completo</h3>
                      <p className="text-sm opacity-90">Consultor especializado en IA empresarial</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowChat(false)} className="text-white">
                    ✕
                  </Button>
                </div>

                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-6 max-w-3xl mx-auto">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex items-start space-x-4 ${
                          message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === "user"
                              ? "bg-gradient-to-r from-blue-500 to-purple-500"
                              : "bg-gradient-to-r from-purple-500 to-pink-500"
                          }`}
                        >
                          {message.role === "user" ? (
                            <User className="w-5 h-5 text-white" />
                          ) : (
                            <Bot className="w-5 h-5 text-white" />
                          )}
                        </div>

                        <div className={`flex-1 ${message.role === "user" ? "text-right" : ""}`}>
                          <div
                            className={`inline-block p-4 rounded-2xl max-w-[85%] ${
                              message.role === "user"
                                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            }`}
                          >
                            {message.isTyping ? (
                              <div className="flex items-center space-x-2">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>N3uralia AI está pensando...</span>
                              </div>
                            ) : (
                              <div className="whitespace-pre-line leading-relaxed">{message.content}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-end space-x-4 max-w-3xl mx-auto">
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Pregúntame sobre cotizaciones, arquitectura técnica, casos de éxito, procesos..."
                      className="min-h-[60px] max-h-[120px] resize-none"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 h-[60px]"
                    >
                      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
