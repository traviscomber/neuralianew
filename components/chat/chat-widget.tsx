"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, X, Send, Sparkles, Mail, MessageCircle } from "lucide-react"

const chatResponses = [
  {
    trigger: ["hello", "hi", "hey", "hola", "servicios", "que hacen", "productos"],
    responses: [
      "🚀 **N3uralia ofrece soluciones completas de IA:**\n\n• **Sistemas Full Stack de IA** - Desarrollo completo para 11+ industrias\n• **Agentes de IA & Automatizaciones** - Chatbots inteligentes y workflows\n• **Integración Multicanal** - WhatsApp, web, apps móviles\n• **Soporte 24/7** - Equipo global en 3 continentes\n\n¿Te interesa algún servicio específico?",
      "💡 **Especializaciones de N3uralia:**\n\n• IA Conversacional avanzada\n• Automatización de procesos empresariales\n• Integración con sistemas existentes\n• Desarrollo full-stack personalizado\n\nTenemos experiencia en retail, salud, educación, finanzas y más. ¿En qué industria trabajas?",
    ],
  },
  {
    trigger: ["precios", "costo", "precio", "cuanto cuesta", "cotizacion"],
    responses: [
      "💰 **Precios de N3uralia (transparentes):**\n\n• **Consultoría inicial**: GRATIS 🎁\n• **Proyectos básicos**: Desde $2,000 USD\n• **Soluciones medianas**: $5,000 - $15,000 USD\n• **Enterprise**: Cotización personalizada\n\n✅ Todos incluyen soporte 24/7\n✅ Sin costos ocultos\n✅ Garantía de satisfacción\n\n¿Quieres una cotización personalizada?",
      "📊 **Planes flexibles disponibles:**\n\n• **Startup**: Ideal para pequeñas empresas ($2K-5K)\n• **Business**: Para medianas empresas ($5K-15K)\n• **Enterprise**: Soluciones a gran escala (personalizado)\n\n🎯 **Incluye**: Desarrollo, implementación, capacitación y soporte\n\n¿Te gustaría que evaluemos tu caso específico?",
    ],
  },
  {
    trigger: ["casos", "ejemplos", "clientes", "exito", "proyectos"],
    responses: [
      "🏆 **Casos de éxito destacados:**\n\n• **EcosueloLab** 🌱: IA para coaching de carrera\n  → 95% satisfacción del usuario\n  → 3x más conversiones\n\n• **ParrotfyIA** 🦜: Plataforma de aprendizaje de idiomas\n  → 80% retención de usuarios\n  → IA conversacional avanzada\n\n• **CRM Inteligente** 📊: Automatización de ventas\n  → 50% menos tiempo en tareas manuales\n  → 200% ROI en 6 meses\n\n¿Te interesa algún sector específico?",
      "✨ **Transformaciones empresariales:**\n\n• **Retail**: Chatbots que aumentaron ventas 40%\n• **Salud**: Asistentes médicos que redujeron esperas 60%\n• **Educación**: Tutores de IA con 90% aprobación\n• **Finanzas**: Asesores automatizados 24/7\n\n🎯 **Resultados promedio**: 3x ROI, 50% menos costos operativos\n\n¿En qué industria está tu empresa?",
    ],
  },
  {
    trigger: ["equipo", "soporte", "24/7", "team", "desarrolladores"],
    responses: [
      "👥 **Nuestro equipo global 24/7:**\n\n🇨🇱 **Chile**: Full Stack Development & Project Management\n🇸🇬 **Singapur**: IA & Machine Learning Specialists\n🇷🇺 **Rusia**: DevOps & Infrastructure Experts\n\n⚡ **Ventaja única**: Mientras tu competencia duerme, nosotros desarrollamos\n🔄 **Desarrollo continuo**: Tu proyecto avanza 24 horas\n👨‍💻 **100% ingenieros reales** (no bots ni outsourcing)\n\n¿Necesitas soporte inmediato?",
      "🌍 **Soporte real 24/7 desde 3 continentes:**\n\n✅ Ingenieros senior disponibles siempre\n✅ Cobertura completa en todas las zonas horarias\n✅ Respuesta garantizada en menos de 1 hora\n✅ 0% downtime en nuestros servicios\n\n🚀 **Resultado**: Tu proyecto nunca para de avanzar\n\n¡Siempre hay alguien trabajando en tu éxito!",
    ],
  },
  {
    trigger: ["whatsapp", "contacto", "hablar", "llamar", "email"],
    responses: [
      "📱 **¡Hablemos directamente!**\n\n• **WhatsApp**: +56 9 4094 6660 💬\n• **Email**: hello@n3uralia.com 📧\n• **Teléfono**: +56 9 4094 6660 ☎️\n\n🎁 **Consulta inicial GRATIS**\n⚡ **Respuesta en menos de 1 hora**\n📋 **Evaluación personalizada de tu proyecto**\n\n¿Prefieres WhatsApp para empezar ahora?",
      "🤝 **Conectemos para transformar tu negocio:**\n\n📞 **Llamada directa**: +56 9 4094 6660\n💬 **WhatsApp Business**: Respuesta inmediata\n📧 **Email profesional**: hello@n3uralia.com\n\n✨ **Proceso simple**:\n1. Contactas → 2. Evaluamos gratis → 3. Propuesta en 24h\n\n¡Haz clic en WhatsApp para empezar!",
    ],
  },
]

const quickQuestions = [
  { text: "🚀 ¿Qué servicios ofrecen?", trigger: "servicios" },
  { text: "💰 ¿Cuánto cuesta?", trigger: "precios" },
  { text: "🏆 Ver casos de éxito", trigger: "casos" },
  { text: "📱 Hablar con el equipo", trigger: "contacto" },
  { text: "👥 Soporte 24/7", trigger: "equipo" },
  { text: "📊 Cotización personalizada", trigger: "cotizacion" },
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "¡Hola! 👋 Soy el **N3uralia AI Assistant**. Puedo ayudarte con:\n\n• Información sobre servicios de IA\n• Casos de éxito y ejemplos\n• Precios y cotizaciones\n• Contacto directo con el equipo\n\n**¿En qué puedo ayudarte?** 👇",
    },
  ])
  const [input, setInput] = useState("")
  const [showQuickQuestions, setShowQuickQuestions] = useState(true)

  const getResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase()

    for (const responseSet of chatResponses) {
      if (responseSet.trigger.some((trigger) => lowerInput.includes(trigger))) {
        const randomResponse = responseSet.responses[Math.floor(Math.random() * responseSet.responses.length)]
        return randomResponse
      }
    }

    // Default responses
    const defaultResponses = [
      "🤔 **Interesante pregunta.** Te puedo ayudar con:\n\n• **Servicios**: IA conversacional y automatización\n• **Casos**: Ejemplos de proyectos exitosos\n• **Precios**: Cotizaciones transparentes\n• **Contacto**: Hablar directamente con el equipo\n\n¿Qué te interesa más?",
      "💡 **No estoy seguro de entender completamente.** ¿Te interesa saber sobre:\n\n• Nuestros servicios de IA\n• Casos de éxito reales\n• Precios y cotizaciones\n• Hablar con nuestro equipo\n\n¡Selecciona una opción o pregúntame directamente!",
      "🚀 **¡Excelente!** Puedo contarte sobre cómo N3uralia transforma negocios con IA. ¿Prefieres:\n\n• Ver nuestros servicios\n• Conocer casos de éxito\n• Obtener una cotización\n• Contactar al equipo directamente\n\n¿Cuál te interesa?",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    const assistantMessage = { role: "assistant", content: getResponse(input) }

    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setInput("")
    setShowQuickQuestions(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleQuickQuestion = (question: { text: string; trigger: string }) => {
    const userMessage = { role: "user", content: question.text }
    const assistantMessage = { role: "assistant", content: getResponse(question.trigger) }
    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setShowQuickQuestions(false)
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/56940946660?text=Hola%20N3uralia,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20IA",
      "_blank",
    )
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-4 w-96 h-[600px] z-50"
          >
            <Card className="h-full flex flex-col shadow-2xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-900">
              <CardHeader className="pb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white animate-pulse" />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-semibold">N3uralia AI Assistant</CardTitle>
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-0">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                        Online 24/7
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6 text-white hover:bg-white/20"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-line ${
                          message.role === "user"
                            ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                            : "bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}

                  {/* Quick Questions - Always visible */}
                  {showQuickQuestions && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                      <div className="text-xs text-gray-500 dark:text-gray-400 text-center font-medium">
                        👆 Selecciona una pregunta o escribe la tuya:
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {quickQuestions.map((question, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs h-10 justify-start hover:bg-purple-50 hover:border-purple-300 dark:hover:bg-purple-900/20 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200"
                            onClick={() => handleQuickQuestion(question)}
                          >
                            {question.text}
                          </Button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Contact Buttons */}
                  {!showQuickQuestions && messages.length > 2 && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        ¿Listo para empezar? 👇
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        <Button
                          onClick={handleWhatsAppClick}
                          className="bg-green-500 hover:bg-green-600 text-white text-sm h-10"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp: +56 9 4094 6660
                        </Button>
                        <Button
                          onClick={() => window.open("mailto:hello@n3uralia.com", "_blank")}
                          variant="outline"
                          className="text-sm h-10 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          hello@n3uralia.com
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Pregúntame sobre N3uralia..."
                      className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                    <Button
                      size="sm"
                      onClick={handleSend}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed bottom-4 right-4 z-50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-16 h-16 shadow-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-4 border-white dark:border-gray-800 transition-all duration-300"
        >
          <MessageSquare className="h-7 w-7 text-white" />
        </Button>
      </motion.div>
    </>
  )
}
