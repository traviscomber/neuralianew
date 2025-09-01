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
  Send,
  Sparkles,
  Brain,
  Zap,
  Loader2,
  Copy,
  ThumbsUp,
  ThumbsDown,
  User,
  Bot,
  Lightbulb,
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
  metadata?: {
    type?: "quotation" | "technical" | "general" | "pricing"
    confidence?: number
    sources?: string[]
    suggestions?: string[]
  }
}

const SUGGESTED_PROMPTS = [
  {
    icon: Calculator,
    title: "Cotización Personalizada",
    prompt:
      "Necesito una cotización para un chatbot de atención al cliente para mi empresa de retail con 1000 consultas diarias",
    category: "pricing",
  },
  {
    icon: Code,
    title: "Arquitectura Técnica",
    prompt: "¿Cómo funciona la arquitectura técnica de N3uralia? ¿Qué tecnologías usan para IA conversacional?",
    category: "technical",
  },
  {
    icon: Globe,
    title: "Casos de Éxito",
    prompt: "Muéstrame casos de éxito reales de N3uralia en diferentes industrias con métricas específicas",
    category: "cases",
  },
  {
    icon: Lightbulb,
    title: "Proceso de Implementación",
    prompt: "¿Cuál es el proceso completo desde la consulta inicial hasta el deployment de una solución de IA?",
    category: "process",
  },
  {
    icon: Clock,
    title: "Tiempos y Soporte",
    prompt: "¿Cuánto tiempo toma desarrollar una solución y cómo funciona el soporte 24/7?",
    category: "support",
  },
  {
    icon: Brain,
    title: "Capacidades de IA",
    prompt: "¿Qué tipos de IA pueden desarrollar? ¿Machine Learning, NLP, Computer Vision, automatización?",
    category: "capabilities",
  },
]

export function HeroChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `¡Hola! 👋 Soy el **N3uralia AI Expert**, tu consultor inteligente especializado en soluciones de IA empresarial.

Puedo ayudarte con:
• **Cotizaciones personalizadas** para tu proyecto específico
• **Arquitectura técnica** y capacidades de nuestras soluciones
• **Casos de éxito** con métricas reales de ROI
• **Procesos de implementación** paso a paso
• **Comparativas** con otras soluciones del mercado
• **Análisis de viabilidad** para tu industria

**¿En qué puedo ayudarte hoy?** Puedes usar las sugerencias de abajo o preguntarme directamente. 🚀`,
      timestamp: new Date(),
      metadata: {
        type: "general",
        confidence: 1.0,
        suggestions: [
          "¿Cuánto costaría un chatbot para mi empresa?",
          "¿Cómo se comparan con la competencia?",
          "¿Qué garantías ofrecen?",
          "¿Pueden integrar con mi CRM actual?",
        ],
      },
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
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
          conversationHistory: messages.slice(-5), // Last 5 messages for context
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
        metadata: {
          type: data.type || "general",
          confidence: data.confidence || 0.95,
          sources: data.sources || [],
          suggestions: data.suggestions || [],
        },
      }
    } catch (error) {
      console.error("Error generating response:", error)

      // Fallback intelligent responses based on keywords
      const lowerMessage = userMessage.toLowerCase()

      if (lowerMessage.includes("precio") || lowerMessage.includes("costo") || lowerMessage.includes("cotiza")) {
        return {
          id: Date.now().toString(),
          role: "assistant",
          content: `💰 **Cotización Personalizada para tu Proyecto**

Basado en tu consulta, puedo darte una estimación inicial:

**🎯 Factores que influyen en el precio:**
• Complejidad de la IA requerida
• Volumen de interacciones esperadas
• Integraciones con sistemas existentes
• Nivel de personalización necesario

**💡 Rangos de precios típicos:**
• **Chatbot básico**: $2,000 - $5,000 USD
• **IA conversacional avanzada**: $5,000 - $15,000 USD
• **Solución enterprise completa**: $15,000+ USD

**✅ Incluido siempre:**
• Consultoría inicial GRATIS
• Desarrollo completo
• Implementación y capacitación
• Soporte 24/7 por 6 meses
• Garantía de satisfacción

**¿Te gustaría una cotización exacta?** Necesitaría conocer:
1. Tu industria y tipo de negocio
2. Volumen aproximado de consultas
3. Integraciones necesarias
4. Presupuesto aproximado

¡Contáctanos para una evaluación gratuita! 📞 +56 9 4094 6660`,
          timestamp: new Date(),
          metadata: {
            type: "quotation",
            confidence: 0.9,
            suggestions: [
              "¿Qué incluye exactamente el soporte 24/7?",
              "¿Tienen planes de pago flexibles?",
              "¿Cuál es el ROI típico de sus soluciones?",
              "¿Ofrecen garantía de resultados?",
            ],
          },
        }
      }

      if (lowerMessage.includes("técnic") || lowerMessage.includes("arquitec") || lowerMessage.includes("tecnolog")) {
        return {
          id: Date.now().toString(),
          role: "assistant",
          content: `🔧 **Arquitectura Técnica de N3uralia**

**🏗️ Stack Tecnológico Principal:**
• **Frontend**: React, Next.js, TypeScript
• **Backend**: Node.js, Python, FastAPI
• **IA/ML**: OpenAI GPT-4, Custom Models, TensorFlow
• **Base de datos**: PostgreSQL, Redis, Vector DBs
• **Cloud**: AWS, Google Cloud, Azure
• **Integraciones**: REST APIs, GraphQL, WebSockets

**🧠 Capacidades de IA:**
• **NLP Avanzado**: Comprensión contextual profunda
• **Machine Learning**: Modelos personalizados
• **Computer Vision**: Análisis de imágenes/documentos
• **Automatización**: Workflows inteligentes
• **Análisis Predictivo**: Insights basados en datos

**🔒 Seguridad y Compliance:**
• Encriptación end-to-end
• Cumplimiento GDPR/CCPA
• Auditorías de seguridad regulares
• Backup automático 24/7

**🌐 Arquitectura Escalable:**
• Microservicios distribuidos
• Auto-scaling automático
• CDN global para baja latencia
• 99.9% uptime garantizado

**⚡ Ventajas Competitivas:**
• Desarrollo 24/7 (3 continentes)
• Integración con 500+ APIs
• Personalización completa
• Deployment en < 48 horas

¿Te interesa algún aspecto técnico específico?`,
          timestamp: new Date(),
          metadata: {
            type: "technical",
            confidence: 0.95,
            suggestions: [
              "¿Cómo manejan la escalabilidad?",
              "¿Qué medidas de seguridad implementan?",
              "¿Pueden integrar con mi sistema actual?",
              "¿Cuánto tiempo toma el deployment?",
            ],
          },
        }
      }

      if (lowerMessage.includes("caso") || lowerMessage.includes("ejemplo") || lowerMessage.includes("cliente")) {
        return {
          id: Date.now().toString(),
          role: "assistant",
          content: `🏆 **Casos de Éxito Reales de N3uralia**

**🌱 EcosueloLab - Coaching de Carrera con IA**
• **Industria**: EdTech / Recursos Humanos
• **Solución**: Asistente de IA para orientación profesional
• **Resultados**:
  - 95% satisfacción del usuario
  - 3x más conversiones que métodos tradicionales
  - 60% reducción en tiempo de consultoría
  - ROI de 280% en 8 meses

**🦜 ParrotfyIA - Plataforma de Idiomas**
• **Industria**: Educación / E-learning
• **Solución**: IA conversacional para aprendizaje de idiomas
• **Resultados**:
  - 80% retención de usuarios (vs 30% promedio)
  - 50% mejora en velocidad de aprendizaje
  - 200% aumento en engagement
  - Expansión a 5 países en 1 año

**📊 CRM Inteligente - Retail Chain**
• **Industria**: Retail / E-commerce
• **Solución**: Automatización de ventas y atención al cliente
• **Resultados**:
  - 40% aumento en ventas
  - 65% reducción en tiempo de respuesta
  - 50% menos costos operativos
  - 300% ROI en 6 meses

**🏥 Asistente Médico Virtual - Clínica Privada**
• **Industria**: Salud
• **Solución**: Triaje automático y agendamiento inteligente
• **Resultados**:
  - 70% reducción en llamadas telefónicas
  - 90% precisión en triaje inicial
  - 45% mejora en satisfacción del paciente
  - Payback en 4 meses

**💼 Métricas Generales de N3uralia:**
• **+50 proyectos** completados exitosamente
• **ROI promedio**: 250% en primer año
• **Satisfacción cliente**: 96%
• **Tiempo implementación**: 2-8 semanas

¿Te interesa algún caso específico de tu industria?`,
          timestamp: new Date(),
          metadata: {
            type: "general",
            confidence: 0.92,
            suggestions: [
              "¿Tienen casos en mi industria específica?",
              "¿Cuál es el ROI típico por industria?",
              "¿Puedo hablar con algún cliente actual?",
              "¿Qué garantías ofrecen de resultados?",
            ],
          },
        }
      }

      // Default fallback
      return {
        id: Date.now().toString(),
        role: "assistant",
        content: `🤔 **Excelente pregunta sobre N3uralia**

Permíteme ayudarte con información específica. Como experto en nuestras soluciones de IA, puedo proporcionarte detalles sobre:

**🚀 Nuestros Servicios:**
• Sistemas Full Stack de IA personalizados
• Agentes conversacionales inteligentes
• Automatización de procesos empresariales
• Integración multicanal (WhatsApp, Web, Apps)

**💡 Lo que nos diferencia:**
• **Desarrollo 24/7**: Equipo global en 3 continentes
• **100% personalizado**: No usamos plantillas
• **ROI garantizado**: Promedio 250% primer año
• **Soporte real**: Ingenieros, no bots

**📊 Proceso típico:**
1. **Consulta gratuita** (30 min)
2. **Análisis de viabilidad** (2-3 días)
3. **Propuesta detallada** (48 horas)
4. **Desarrollo ágil** (2-8 semanas)
5. **Deployment y capacitación**
6. **Soporte continuo 24/7**

¿Hay algo específico que te gustaría saber? Puedo darte detalles técnicos, casos de uso, precios, o lo que necesites.`,
        timestamp: new Date(),
        metadata: {
          type: "general",
          confidence: 0.85,
          suggestions: [
            "¿Cuánto tiempo toma implementar una solución?",
            "¿Qué tipo de soporte ofrecen post-implementación?",
            "¿Pueden mostrarme una demo en vivo?",
            "¿Cuál es su proceso de desarrollo?",
          ],
        },
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
    setShowSuggestions(false)

    // Add typing indicator
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

  const handleSuggestedPrompt = (prompt: string) => {
    setInput(prompt)
    setShowSuggestions(false)
    textareaRef.current?.focus()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                N3uralia AI Expert
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Tu consultor inteligente especializado en IA empresarial
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              Powered by OpenAI GPT-4
            </Badge>
            <Badge variant="secondary">
              <Clock className="w-3 h-3 mr-1" />
              Respuesta en tiempo real
            </Badge>
            <Badge variant="secondary">
              <CheckCircle className="w-3 h-3 mr-1" />
              Información actualizada 2024
            </Badge>
          </div>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* Messages */}
              <ScrollArea className="h-[600px] p-6">
                <div className="space-y-6">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-start space-x-4 ${
                        message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      {/* Avatar */}
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
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

                      {/* Message Content */}
                      <div className={`flex-1 max-w-3xl ${message.role === "user" ? "text-right" : ""}`}>
                        <div
                          className={`inline-block p-4 rounded-2xl ${
                            message.role === "user"
                              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                          }`}
                        >
                          {message.isTyping ? (
                            <div className="flex items-center space-x-2">
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span className="text-sm">N3uralia AI está pensando...</span>
                            </div>
                          ) : (
                            <div className="whitespace-pre-line text-sm leading-relaxed">{message.content}</div>
                          )}
                        </div>

                        {/* Message Actions */}
                        {!message.isTyping && message.role === "assistant" && (
                          <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyMessage(message.content)}
                              className="h-6 px-2"
                            >
                              <Copy className="w-3 h-3 mr-1" />
                              Copiar
                            </Button>
                            <Button variant="ghost" size="sm" className="h-6 px-2">
                              <ThumbsUp className="w-3 h-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-6 px-2">
                              <ThumbsDown className="w-3 h-3" />
                            </Button>
                            {message.metadata?.confidence && (
                              <span className="text-xs">
                                Confianza: {Math.round(message.metadata.confidence * 100)}%
                              </span>
                            )}
                          </div>
                        )}

                        {/* Suggestions */}
                        {message.metadata?.suggestions && message.metadata.suggestions.length > 0 && (
                          <div className="mt-3 space-y-2">
                            <div className="text-xs text-gray-500 dark:text-gray-400">Preguntas relacionadas:</div>
                            <div className="grid grid-cols-1 gap-2">
                              {message.metadata.suggestions.map((suggestion, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleSuggestedPrompt(suggestion)}
                                  className="text-xs h-8 justify-start hover:bg-purple-50 dark:hover:bg-purple-900/20"
                                >
                                  {suggestion}
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Suggested Prompts */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200 dark:border-gray-700 p-6"
                  >
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                      Preguntas sugeridas para empezar:
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {SUGGESTED_PROMPTS.map((prompt, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          onClick={() => handleSuggestedPrompt(prompt.prompt)}
                          className="h-auto p-4 text-left justify-start hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
                        >
                          <div className="flex items-start space-x-3">
                            <prompt.icon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-sm">{prompt.title}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                                {prompt.prompt.substring(0, 80)}...
                              </div>
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-end space-x-4">
                  <div className="flex-1">
                    <Textarea
                      ref={textareaRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Pregúntame sobre cotizaciones, arquitectura técnica, casos de éxito, procesos de implementación..."
                      className="min-h-[60px] max-h-[120px] resize-none border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 h-[60px]"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  </Button>
                </div>

                <div className="flex items-center justify-between mt-3 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span>Presiona Enter para enviar, Shift+Enter para nueva línea</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-3 h-3 text-green-500" />
                    <span>Powered by N3uralia AI</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 text-center bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos Exitosos</div>
            </Card>
            <Card className="p-4 text-center bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-600">250%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">ROI Promedio</div>
            </Card>
            <Card className="p-4 text-center bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Soporte Global</div>
            </Card>
            <Card className="p-4 text-center bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
              <div className="text-2xl font-bold text-orange-600">96%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Satisfacción Cliente</div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
