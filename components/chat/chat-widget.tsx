"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  X,
  Send,
  Sparkles,
  Mail,
  MessageCircle,
  Zap,
  Globe,
  Clock,
  CheckCircle2,
  Users,
  Headphones,
} from "lucide-react"
import { EmailContactDialog } from "@/components/contact/email-contact-dialog"

// Custom Brain Icon Component
const BrainIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C10.5 2 9.2 2.6 8.3 3.5C7.4 2.6 6.1 2 4.6 2C2.1 2 0 4.1 0 6.6C0 8.1 0.6 9.4 1.5 10.3C0.6 11.2 0 12.5 0 14C0 16.5 2.1 18.6 4.6 18.6C5.4 18.6 6.1 18.4 6.7 18.1C7.3 19.7 8.8 20.9 10.6 21.4C11.1 21.8 11.5 22 12 22C12.5 22 12.9 21.8 13.4 21.4C15.2 20.9 16.7 19.7 17.3 18.1C17.9 18.4 18.6 18.6 19.4 18.6C21.9 18.6 24 16.5 24 14C24 12.5 23.4 11.2 22.5 10.3C23.4 9.4 24 8.1 24 6.6C24 4.1 21.9 2 19.4 2C17.9 2 16.6 2.6 15.7 3.5C14.8 2.6 13.5 2 12 2ZM12 4C12.8 4 13.5 4.3 14 4.8C14.2 5 14.5 5.1 14.8 5C15.4 4.8 16.1 4.7 16.8 4.9C17.5 5.1 18.1 5.5 18.5 6.1C18.7 6.4 19 6.6 19.4 6.6C20.8 6.6 22 7.8 22 9.2C22 10.1 21.6 10.9 21 11.4C20.7 11.6 20.6 12 20.8 12.3C21.2 12.9 21.4 13.6 21.4 14.4C21.4 15.8 20.2 17 18.8 17C18.4 17 18 16.9 17.7 16.7C17.4 16.5 17 16.6 16.8 16.9C16.3 17.8 15.4 18.4 14.4 18.7C14 18.8 13.7 19.1 13.7 19.5C13.7 19.9 13.4 20.2 13 20.2H11C10.6 20.2 10.3 19.9 10.3 19.5C10.3 19.1 10 18.8 9.6 18.7C8.6 18.4 7.7 17.8 7.2 16.9C7 16.6 6.6 16.5 6.3 16.7C6 16.9 5.6 17 5.2 17C3.8 17 2.6 15.8 2.6 14.4C2.6 13.6 2.8 12.9 3.2 12.3C3.4 12 3.3 11.6 3 11.4C2.4 10.9 2 10.1 2 9.2C2 7.8 3.2 6.6 4.6 6.6C5 6.6 5.3 6.4 5.5 6.1C5.9 5.5 6.5 5.1 7.2 4.9C7.9 4.7 8.6 4.8 9.2 5C9.5 5.1 9.8 5 10 4.8C10.5 4.3 11.2 4 12 4Z" />
    <circle cx="8.5" cy="10" r="1" />
    <circle cx="15.5" cy="10" r="1" />
    <path
      d="M8 13C8.5 14 10 14.5 12 14.5C14 14.5 15.5 14 16 13"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
)

const chatResponses = [
  {
    trigger: ["hello", "hi", "hey", "hola", "servicios", "que hacen", "productos", "full stack", "desarrollo"],
    responses: [
      "**N3uralia construye software e IA para operaciones reales.**\n\n• Sistemas de IA y asistentes conectados a datos y procesos\n• Automatizacion de workflows y aprobaciones\n• Plataformas full-stack e integraciones\n• Reconocimiento e inteligencia documental\n\nSi me cuentas el problema operativo, te indico qué tipo de sistema tendría sentido evaluar.",
      "**Trabajamos sobre problemas operacionales concretos.**\n\nPodemos conectar documentos, datos, equipos, APIs y decisiones dentro de una misma arquitectura, con trazabilidad y validacion humana cuando corresponde.\n\n¿En qué proceso quieres reducir friccion o ganar visibilidad?",
    ],
  },
  {
    trigger: ["precios", "costo", "precio", "cuanto cuesta", "cotizacion", "presupuesto"],
    responses: [
      "**El costo depende del alcance real.**\n\nNo publicamos tarifas genéricas porque integración, datos, seguridad y operación cambian mucho entre proyectos. El primer paso es definir problema, fuentes, usuarios y criterio de éxito.\n\nPodemos evaluar el caso y preparar un alcance concreto.",
      "**Primero dimensionamos el sistema.**\n\nRevisamos qué hay que conectar, qué debe automatizarse, dónde necesita validación humana y qué evidencia permitirá saber si el proyecto funciona. Después se cotiza sobre ese alcance.",
    ],
  },
  {
    trigger: ["casos", "ejemplos", "clientes", "exito", "proyectos", "portfolio"],
    responses: [
      "**Ejemplos públicos de implementación:**\n\n• EcoSueloLab: información agronómica y satelital accesible desde WhatsApp\n• Despega Tu Carrera: producto full-stack con experiencias guiadas por IA\n• Black Swan Facility Core: software operativo para hospitality\n\nPuedes revisar los casos publicados para ver arquitectura, flujo y evidencia disponible.",
      "**Nuestro foco es evidencia de sistema, no métricas inventadas.**\n\nPublicamos proyectos reales y explicamos qué problema resuelven, cómo se conectan los datos y qué parte del flujo automatizan. Si buscas un sector específico, dime cuál.",
    ],
  },
  {
    trigger: ["equipo", "soporte", "24/7", "team", "desarrolladores", "global"],
    responses: [
      "**N3uralia trabaja desde Chile con foco en Chile y LATAM.**\n\nEl equipo combina arquitectura de IA, desarrollo full-stack, integración y diseño de producto. La cobertura y soporte se definen según cada proyecto y acuerdo.",
      "**El modelo de trabajo se adapta al sistema.**\n\nDefinimos responsables, operación, monitoreo, escalamiento y soporte según criticidad. No prometemos disponibilidad o tiempos de respuesta sin un acuerdo explícito.",
    ],
  },
  {
    trigger: ["whatsapp", "contacto", "hablar", "llamar", "email", "reunion"],
    responses: [
      "**Contacto N3uralia**\n\n• WhatsApp: +56 9 9382 6127\n• Email: info@n3uralia.com\n\nSi compartes el problema operativo y el sistema actual, podemos llegar a la conversación con contexto.",
      "**Podemos partir por un diagnóstico.**\n\nDescribe dónde se pierde tiempo, control o visibilidad. A partir de eso evaluamos si conviene un asistente de IA, una automatización, una integración o una plataforma.",
    ],
  },
  {
    trigger: ["tecnologia", "stack", "backend", "frontend", "base de datos", "arquitectura"],
    responses: [
      "**La arquitectura se elige según el problema.**\n\nTrabajamos con aplicaciones web, APIs, bases de datos, modelos de IA, embeddings, integraciones y automatización. Priorizamos seguridad, trazabilidad y mantenibilidad sobre imponer un stack fijo.",
      "**No vendemos una arquitectura única.**\n\nDefinimos frontend, backend, datos, modelos, permisos y observabilidad según las restricciones reales del proyecto y el stack existente del cliente.",
    ],
  },
]

const quickQuestions = [
  { text: "¿Qué sistemas construyen?", trigger: "servicios", icon: Zap },
  { text: "¿Cómo cotizan un proyecto?", trigger: "precios", icon: CheckCircle2 },
  { text: "Ver ejemplos reales", trigger: "casos", icon: Users },
  { text: "Hablar con el equipo", trigger: "contacto", icon: MessageCircle },
  { text: "¿Cómo trabajan el soporte?", trigger: "equipo", icon: Globe },
  { text: "¿Cómo definen la arquitectura?", trigger: "tecnologia", icon: Headphones },
]

interface ChatWidgetProps {
  isOpen?: boolean
  onToggle?: (isOpen?: boolean) => void
  specificAgent?: string | null
}

export function ChatWidget({ isOpen: externalIsOpen, onToggle }: ChatWidgetProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const [emailDialogOpen, setEmailDialogOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Soy el asistente de **N3uralia**. Puedo orientarte sobre nuestros sistemas de IA, automatización, integraciones, productos y proyectos públicos. Si una respuesta requiere información que no está disponible, te lo diré directamente.",
    },
  ])
  const [input, setInput] = useState("")
  const [showQuickQuestions, setShowQuickQuestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Use external state if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto-open when externally controlled and reset quick questions
  useEffect(() => {
    if (externalIsOpen) {
      setShowQuickQuestions(true)
    }
  }, [externalIsOpen])

  const getResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase()

    for (const responseSet of chatResponses) {
      if (responseSet.trigger.some((trigger) => lowerInput.includes(trigger))) {
        const randomResponse = responseSet.responses[Math.floor(Math.random() * responseSet.responses.length)]
        return randomResponse
      }
    }

    // Default responses emphasizing full stack
    const defaultResponses = [
      "🤔 **Interesante pregunta.** Te puedo ayudar con:\n\n• **Soluciones Full Stack**: Desarrollo completo de plataformas\n• **Casos de éxito**: Proyectos reales con stack completo\n• **Precios**: Cotizaciones para ecosistemas tecnológicos\n• **Contacto**: Hablar con nuestro equipo técnico\n\n¿Qué te interesa más?",
      "💡 **No estoy seguro de entender completamente.** ¿Te interesa saber sobre:\n\n• Nuestras soluciones full stack con IA\n• Casos de éxito de plataformas completas\n• Precios para desarrollo integral\n• Hablar con nuestro equipo de arquitectos\n\n¡Selecciona una opción o pregúntame directamente!",
      "🚀 **¡Excelente!** Puedo contarte sobre cómo N3uralia desarrolla ecosistemas tecnológicos completos. ¿Prefieres:\n\n• Ver nuestro stack tecnológico\n• Conocer casos de plataformas completas\n• Obtener una cotización full stack\n• Contactar al equipo técnico directamente\n\n¿Cuál te interesa?",
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

  const handleQuickQuestion = (question: { text: string; trigger: string; icon: any }) => {
    const userMessage = { role: "user", content: question.text }
    const assistantMessage = { role: "assistant", content: getResponse(question.trigger) }
    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setShowQuickQuestions(false)
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://web.whatsapp.com/send/?phone=56993826127&text=Hola+N3uralia%2C+me+gustaría+conocer+más+sobre+vuestras+soluciones+de+IA&type=phone_number&app_absent=0",
      "_blank",
    )
  }

  const toggleChat = () => {
    const newState = !isOpen
    if (onToggle) {
      onToggle(newState)
    } else {
      setInternalIsOpen(newState)
    }
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
            className="fixed bottom-20 right-4 w-[90vw] max-w-sm h-[70vh] max-h-[600px] z-50 sm:w-96 sm:h-[600px]"
          >
            <Card className="h-full flex flex-col shadow-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden">
              <CardHeader className="pb-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 relative">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
                      {/* AI Status Indicator with Icon */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-sm font-semibold truncate text-white flex items-center gap-2">
                        N3uralia AI Assistant
                        <Zap className="w-3 h-3 text-yellow-300 animate-pulse" />
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-emerald-100 text-emerald-800 border-0 mt-1 flex items-center gap-1"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse flex-shrink-0"></div>
                        <Globe className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">N3uralia · online</span>
                        <Clock className="w-3 h-3 flex-shrink-0 ml-1" />
                      </Badge>
                    </div>
                  </div>
                        <Button
                          onClick={() =>
                            window.open("https://web.whatsapp.com/send/?phone=56993826127&text=Hola+N3uralia%2C+me+interesa+conocer+más&type=phone_number&app_absent=0", "_blank")
                          }
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm h-8 sm:h-10 px-2 sm:px-3 flex items-center gap-2 rounded-lg transition-colors"
                        >
                          <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">WhatsApp: +56 9 9382 6127</span>
                          <Clock className="w-3 h-3 text-emerald-200 flex-shrink-0" />
                        </Button>
                        <Button
                          onClick={() => setEmailDialogOpen(true)}
                          className="w-full bg-slate-700 hover:bg-slate-800 text-white text-xs sm:text-sm h-8 sm:h-10 px-2 sm:px-3 flex items-center gap-2 rounded-lg transition-colors"
                        >
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">info@n3uralia.com</span>
                        </Button>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0 min-h-0">
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] p-2.5 sm:p-3 rounded-lg text-xs sm:text-sm whitespace-pre-line break-words ${
                          message.role === "user"
                            ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white"
                            : "bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-200 dark:border-slate-600">
                            <BrainIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">AI Assistant</span>
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          </div>
                        )}
                        {message.content}
                      </div>
                    </div>
                  ))}

                  {/* Quick Questions - Always visible with enhanced icons */}
                  {showQuickQuestions && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2 sm:space-y-3"
                    >
                      <div className="text-xs text-slate-600 dark:text-slate-400 text-center font-medium px-2 flex items-center justify-center gap-2">
                        <Sparkles className="w-3 h-3" />
                        <span>Selecciona una pregunta o escribe la tuya:</span>
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <div className="grid grid-cols-1 gap-1.5 sm:gap-2 px-1">
                        {quickQuestions.map((question, index) => {
                          const IconComponent = question.icon
                          return (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="text-xs h-8 sm:h-10 justify-start hover:bg-slate-100 hover:border-slate-400 dark:hover:bg-slate-700 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-200 px-2 sm:px-3"
                              onClick={() => handleQuickQuestion(question)}
                            >
                              <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0 text-slate-600 dark:text-slate-400" />
                              <span className="truncate">{question.text}</span>
                            </Button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Contact Buttons with enhanced icons */}
                  {!showQuickQuestions && messages.length > 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2 px-1"
                    >
                      <div className="text-xs text-slate-600 dark:text-slate-400 text-center flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span>¿Listo para tu proyecto full stack?</span>
                        <Zap className="w-3 h-3 text-yellow-500" />
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        <Button
                          onClick={handleWhatsAppClick}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm h-8 sm:h-10 px-2 sm:px-3 flex items-center gap-2"
                        >
                          <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <CheckCircle2 className="w-3 h-3 text-emerald-200 flex-shrink-0" />
                          <span className="truncate">WhatsApp: +56 9 9382 6127</span>
                          <Clock className="w-3 h-3 text-emerald-200 flex-shrink-0" />
                        </Button>
                        <Button
                          onClick={() => setEmailDialogOpen(true)}
                          className="w-full bg-slate-700 hover:bg-slate-800 text-white text-xs sm:text-sm h-8 sm:h-10 px-2 sm:px-3 flex items-center gap-2"
                        >
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">info@n3uralia.com</span>
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-700 flex-shrink-0">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Pregúntame sobre soluciones full stack..."
                        className="w-full pl-8 pr-3 py-2 text-xs sm:text-sm border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                      />
                      <MessageCircle className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3 h-3 text-slate-400" />
                    </div>
                    <Button
                      size="sm"
                      onClick={handleSend}
                      className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white flex-shrink-0 px-2 sm:px-3 flex items-center gap-1"
                    >
                      <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                      <Zap className="h-2 w-2 text-yellow-300" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button with enhanced status indicators */}
      {!isOpen && (
        <motion.div className="fixed bottom-4 right-4 z-50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {/* Pulsating Ring Effect */}
          <div className="absolute inset-0 rounded-full">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-400 to-slate-500 opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-400 to-slate-500 opacity-20"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.05, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

          <Button
            onClick={toggleChat}
            size="lg"
            className="relative rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-xl bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 border-4 border-white dark:border-slate-800 transition-all duration-300"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center"
            >
              <BrainIcon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </motion.div>

            {/* Status indicators on floating button */}
            <div className="absolute -top-1 -right-1 flex items-center gap-1">
              <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-2.5 h-2.5 text-white" />
              </div>
            </div>

            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <Zap className="w-2 h-2 text-slate-800" />
            </div>
          </Button>
        </motion.div>
      )}

      <EmailContactDialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen} />
    </>
  )
}
