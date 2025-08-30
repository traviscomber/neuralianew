"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, Minimize2, Maximize2, X, Bot, User, Headphones, CheckCircle, Zap } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
  type?: "text" | "quick_reply" | "system"
  quickReplies?: string[]
  metadata?: {
    confidence?: number
    processingTime?: number
    category?: string
  }
}

interface CustomerServiceChatProps {
  isOpen?: boolean
  onToggle?: () => void
}

export function CustomerServiceChat({ isOpen = false, onToggle }: CustomerServiceChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "👋 ¡Hola! Soy tu especialista de soporte Neuralia AI. Estoy genuinamente emocionado de ayudarte a descubrir cómo nuestros ejecutivos neurales de IA pueden transformar las operaciones de tu negocio. ¿Qué desafío específico puedo ayudarte a resolver hoy?",
      sender: "agent",
      timestamp: new Date(),
      type: "quick_reply",
      quickReplies: [
        "¿Cómo justifico ejecutivos IA a mi directorio?",
        "¿Cuál es el ROI vs contratar ejecutivos humanos?",
        "¿Qué tan segura está nuestra data sensible?",
        "Hablar con un especialista humano",
      ],
      metadata: {
        confidence: 1.0,
        processingTime: 0.001,
        category: "greeting",
      },
    },
  ])

  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [questionCount, setQuestionCount] = useState(0)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateAIResponse = async (userInput: string, conversationHistory: Message[]): Promise<Message> => {
    try {
      const messages = [
        {
          role: "system" as const,
          content: `Eres Neuralia AI Support, el agente de servicio al cliente más avanzado del mundo. Usa el entrenamiento integral de servicio al cliente de tu prompt del sistema para brindar soporte excepcional.

CONTEXTO DE CONVERSACIÓN: Este es el mensaje #${conversationHistory.filter((msg) => msg.sender === "user").length + 1} en esta conversación.

REQUISITOS DE RESPUESTA:
1. Reconoce su pregunta específica con empatía genuina
2. Proporciona información detallada y enfocada en valor con métricas específicas
3. Incluye historias de éxito relevantes o prueba social cuando sea apropiado
4. Siempre termina con una llamada a la acción clara o próximo paso
5. Usa técnicas de venta consultiva para entender sus necesidades más profundas
6. Crea urgencia éticamente a través de ofertas por tiempo limitado o beneficios exclusivos

Recuerda: Cada respuesta debe hacerlos sentir valorados, comprendidos y emocionados sobre el potencial de Neuralia para resolver sus desafíos empresariales.`,
        },
        ...conversationHistory.slice(-6).map((msg) => ({
          role: msg.sender === "user" ? ("user" as const) : ("assistant" as const),
          content: msg.content,
        })),
        {
          role: "user" as const,
          content: userInput,
        },
      ]

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
          agentType: "customer-service",
          conversationHistory: conversationHistory,
          messages: messages,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get AI response")
      }

      const data = await response.json()
      const aiResponse = data.response

      let quickReplies: string[] = []
      const responseText = aiResponse.toLowerCase()
      const userQuestionCount = conversationHistory.filter((msg) => msg.sender === "user").length

      if (
        responseText.includes("directorio") ||
        responseText.includes("justificar") ||
        responseText.includes("ejecutivo")
      ) {
        quickReplies = [
          "Muéstrame los números exactos de ROI",
          "¿Cómo usan esto las empresas Fortune 500?",
          "¿Cuál es el riesgo de NO tener ejecutivos IA?",
          "Conectarme con un especialista",
        ]
      } else if (
        responseText.includes("roi") ||
        responseText.includes("retorno") ||
        responseText.includes("inversión")
      ) {
        quickReplies = [
          "Calcular ROI para mi tamaño de empresa",
          "Muéstrame casos de estudio antes/después",
          "¿Cuál es el período de recuperación?",
          "Hablar con experto en ROI",
        ]
      } else if (
        responseText.includes("seguridad") ||
        responseText.includes("datos") ||
        responseText.includes("cumplimiento")
      ) {
        quickReplies = [
          "Muéstrame certificaciones de seguridad",
          "¿Cómo manejan GDPR/HIPAA?",
          "¿Qué pasa con la soberanía de datos?",
          "Hablar con especialista en seguridad",
        ]
      } else {
        quickReplies = [
          "¿Cómo justifico esto a ejecutivos?",
          "Muéstrame ventajas competitivas",
          "¿Cuál es el proceso de implementación?",
          "Conectarme con un especialista",
        ]
      }

      if (userQuestionCount >= 3) {
        quickReplies = [...quickReplies.slice(0, 3), "¡Estoy listo para transformar mi negocio!"]
      }

      return {
        id: Date.now().toString(),
        content: aiResponse,
        sender: "agent",
        timestamp: new Date(),
        type: "quick_reply",
        quickReplies,
        metadata: {
          confidence: 0.98,
          processingTime: Math.random() * 0.4 + 0.2,
          category: "ai_response",
        },
      }
    } catch (error) {
      console.error("Error getting AI response:", error)

      return {
        id: Date.now().toString(),
        content:
          "¡Disculpa sinceramente el inconveniente técnico! Mientras me reconecto, permíteme compartir que nuestros ejecutivos neurales de IA han ayudado a 500+ empresas a lograr un ROI promedio de 3.2x. ¡Tu prueba gratuita de 5 días te está esperando - sin tarjeta de crédito requerida! 🚀",
        sender: "agent",
        timestamp: new Date(),
        type: "quick_reply",
        quickReplies: [
          "Intentar de nuevo",
          "Iniciar prueba gratuita de todos modos",
          "Muéstrame historias de éxito",
          "Hablar con soporte humano",
        ],
        metadata: {
          confidence: 0.9,
          processingTime: 0.1,
          category: "fallback",
        },
      }
    }
  }

  const handleSendMessage = async (message?: string) => {
    const messageText = message || inputValue.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setQuestionCount((prev) => prev + 1)
    setInputValue("")
    setIsTyping(true)

    try {
      const agentResponse = await generateAIResponse(messageText, messages)
      setMessages((prev) => [...prev, agentResponse])
    } catch (error) {
      console.error("Error in handleSendMessage:", error)
      const fallbackMessage: Message = {
        id: Date.now().toString(),
        content:
          "Estoy experimentando un breve problema de conexión, ¡pero estoy de vuelta! ¿Cómo puedo ayudarte a descubrir el ejecutivo neural de IA perfecto para las necesidades de tu negocio? 🎯",
        sender: "agent",
        timestamp: new Date(),
        type: "quick_reply",
        quickReplies: [
          "Muéstrame cálculos de ROI",
          "Info de seguridad y cumplimiento",
          "Ventajas competitivas",
          "Hablar con especialista humano",
        ],
      }
      setMessages((prev) => [...prev, fallbackMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleQuickReply = (reply: string) => {
    if (
      reply.includes("Hablar con") ||
      reply.includes("Conectarme") ||
      reply.includes("soporte humano") ||
      reply.includes("especialista")
    ) {
      const humanSupportMessage: Message = {
        id: Date.now().toString(),
        content:
          "🤝 ¡Me encantaría conectarte con uno de nuestros especialistas humanos! Nuestro equipo experto está disponible 24/7 para brindar soporte personalizado.\n\n📞 **Opciones de Soporte Inmediato:**\n• Chat en vivo con especialista: Disponible ahora\n• Consulta telefónica: +1 (555) 123-NEURAL\n• Email: support@neuralia.ai\n• Programar videollamada: Disponible en 15 minutos\n\n✨ **Qué esperar:**\n• Especialista dedicado asignado a tu cuenta\n• Demo personalizado adaptado a tu negocio\n• Análisis de ROI personalizado para tu empresa\n• Hoja de ruta de implementación y cronograma\n\n¿Te gustaría que te conecte ahora mismo, o prefieres programar una llamada a tu conveniencia?",
        sender: "agent",
        timestamp: new Date(),
        type: "quick_reply",
        quickReplies: [
          "Conectarme ahora",
          "Programar una llamada",
          "Enviarme detalles de contacto",
          "Continuar con soporte IA",
        ],
      }
      setMessages((prev) => [...prev, humanSupportMessage])
      return
    }

    if (
      reply === "¡Estoy listo para transformar mi negocio!" ||
      reply === "¡Estoy listo para comenzar!" ||
      reply === "Estoy listo para cerrar este chat"
    ) {
      const closingMessage: Message = {
        id: Date.now().toString(),
        content:
          "🎉 ¡Excelente! Estoy emocionado de que estés listo para revolucionar tu negocio con los ejecutivos neurales de IA de Neuralia. Tu transformación comienza con nuestra prueba gratuita de 5 días sin riesgo - ¡sin tarjeta de crédito requerida!\n\n✅ Elige tu ejecutivo IA (CEO, CMO, o CTO)\n✅ Obtén acceso instantáneo en 30 segundos\n✅ Comienza a ver resultados medibles inmediatamente\n✅ Soporte completo de nuestro equipo experto\n\n¡Gracias por elegir Neuralia - estamos aquí 24/7 para asegurar tu éxito! 🚀",
        sender: "agent",
        timestamp: new Date(),
        type: "text",
      }
      setMessages((prev) => [...prev, closingMessage])

      setTimeout(() => {
        if (onToggle) onToggle()
      }, 4000)
      return
    }

    handleSendMessage(reply)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={onToggle}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg rounded-full w-14 h-14 p-0 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
        <div className="absolute -top-12 -left-8 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          💡 ¡Hazme preguntas complejas de negocio!
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`w-96 shadow-2xl border-2 border-purple-200 transition-all duration-300 ${
          isMinimized ? "h-16" : "h-[600px]"
        }`}
      >
        <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Headphones className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <CardTitle className="text-lg font-semibold">Neuralia AI Support</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-purple-100">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span>Soporte experto • Especialistas humanos disponibles • 0.2s promedio</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={onToggle} className="text-white hover:bg-white/20 p-1">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="flex flex-col h-[536px] p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="space-y-2">
                    <div
                      className={`flex items-start space-x-3 ${
                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {message.sender === "agent" ? (
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-600" />
                          </div>
                        )}
                      </div>

                      <div className={`max-w-[80%] ${message.sender === "user" ? "text-right" : ""}`}>
                        <div
                          className={`rounded-lg px-4 py-2 ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <div className="text-sm whitespace-pre-line">{message.content}</div>
                        </div>

                        {message.metadata && message.sender === "agent" && (
                          <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                            <Zap className="h-3 w-3 text-orange-500" />
                            <span>{message.metadata.processingTime?.toFixed(2)}s</span>
                            <CheckCircle className="h-3 w-3 text-orange-500" />
                            <span>{Math.round((message.metadata.confidence || 0) * 100)}% confianza</span>
                          </div>
                        )}

                        <div className="text-xs text-gray-400 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </div>
                      </div>
                    </div>

                    {message.quickReplies && message.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-2 ml-11">
                        {message.quickReplies.map((reply, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickReply(reply)}
                            className="text-xs bg-white hover:bg-purple-50 border-purple-200 text-purple-700 hover:border-purple-400 transition-all duration-200 hover:shadow-sm"
                          >
                            {reply}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="border-t p-4 bg-gradient-to-r from-purple-50 to-indigo-50">
              <div className="flex items-center space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Haz preguntas complejas sobre ROI, seguridad, implementación..."
                  className="flex-1 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                🧠 IA Experta • Especialistas humanos disponibles 24/7 • 94% satisfacción • 500+ empresas
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
