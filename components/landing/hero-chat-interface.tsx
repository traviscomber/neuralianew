"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, Bot, User, Sparkles, CheckCircle, Clock, Zap, Globe, ArrowRight } from "lucide-react"

const demoMessages = [
  {
    type: "assistant",
    content:
      "¡Hola! 👋 Soy el **N3uralia AI Assistant**. Desarrollamos **ecosistemas tecnológicos completos** con IA integrada:\n\n• **Soluciones Full Stack** completas\n• **Desarrollo Frontend + Backend**\n• **Bases de datos y APIs**\n• **Agentes IA integrados**\n• **Arquitectura enterprise**\n\n**¿En qué puedo ayudarte?** 👇",
    timestamp: "14:32",
  },
  {
    type: "user",
    content: "Necesito una solución completa para mi empresa agrícola",
    timestamp: "14:33",
  },
  {
    type: "assistant",
    content:
      "¡Perfecto! 🌱 Para el sector agrícola desarrollamos **ecosistemas completos** como **EcosueloLab**:\n\n🖥️ **Frontend**: Dashboard web con React\n⚙️ **Backend**: APIs REST + Base de datos\n📱 **WhatsApp**: Agente IA especializado\n📊 **Analytics**: Reportes en tiempo real\n\n**Resultado**: Plataforma integral que transformó la industria\n\n¿Te interesa conocer más detalles técnicos?",
    timestamp: "14:33",
  },
  {
    type: "user",
    content: "Sí, ¿qué tecnologías utilizan?",
    timestamp: "14:35",
  },
  {
    type: "assistant",
    content:
      "🛠️ **Stack Tecnológico N3uralia**:\n\n**Frontend:**\n• React 18 + Next.js 14\n• TypeScript + Tailwind CSS\n• PWA + Responsive Design\n\n**Backend:**\n• Node.js + Python\n• PostgreSQL + Redis\n• APIs RESTful + GraphQL\n\n**IA & Cloud:**\n• OpenAI GPT-4 + Custom Models\n• AWS/GCP + Docker + Kubernetes\n• Microservicios + CI/CD\n\n¿Empezamos con tu proyecto? 🚀",
    timestamp: "14:35",
  },
]

const quickActions = [
  { text: "🚀 Ver casos de éxito", icon: Sparkles },
  { text: "💰 Consultar precios", icon: CheckCircle },
  { text: "📱 Contactar equipo", icon: MessageSquare },
]

export function HeroChatInterface() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(false)

  useEffect(() => {
    if (currentMessageIndex < demoMessages.length) {
      const timer = setTimeout(() => {
        if (currentMessageIndex < demoMessages.length - 1) {
          setIsTyping(true)
          setTimeout(() => {
            setCurrentMessageIndex((prev) => prev + 1)
            setIsTyping(false)
          }, 1500)
        } else {
          setShowQuickActions(true)
        }
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex])

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/56940946660?text=Hola%20N3uralia,%20me%20interesa%20una%20solución%20full%20stack%20con%20IA%20para%20mi%20empresa",
      "_blank",
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full max-w-md mx-auto lg:max-w-lg"
    >
      <Card className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-2xl rounded-2xl overflow-hidden">
        <CardHeader className="pb-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/20 flex items-center justify-center relative">
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-white animate-pulse" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-2 h-2 text-white" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm lg:text-base font-semibold text-white flex items-center gap-2">
                  N3uralia AI Assistant
                  <Zap className="w-3 h-3 text-yellow-300 animate-pulse" />
                </h3>
                <Badge
                  variant="secondary"
                  className="text-xs bg-emerald-100 text-emerald-800 border-0 mt-1 flex items-center gap-1"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <Globe className="w-3 h-3" />
                  <span>Full Stack Online 24/7</span>
                  <Clock className="w-3 h-3 ml-1" />
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="h-64 lg:h-80 overflow-y-auto p-3 lg:p-4 space-y-3 lg:space-y-4 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
            <AnimatePresence mode="sync">
              {demoMessages.slice(0, currentMessageIndex + 1).map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex gap-2 lg:gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.type === "assistant" && (
                    <Avatar className="w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0">
                      <AvatarFallback className="bg-slate-900 dark:bg-slate-700 text-white">
                        <Bot className="w-3 h-3 lg:w-4 lg:h-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[85%] p-2 lg:p-3 rounded-2xl shadow-sm text-xs lg:text-sm ${
                      message.type === "user"
                        ? "bg-slate-900 dark:bg-slate-700 text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
                    }`}
                  >
                    <p className="whitespace-pre-line font-medium leading-relaxed">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1 lg:mt-2">{message.timestamp}</p>
                  </div>
                  {message.type === "user" && (
                    <Avatar className="w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0">
                      <AvatarFallback className="bg-slate-600 dark:bg-slate-500 text-white">
                        <User className="w-3 h-3 lg:w-4 lg:h-4" />
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
                exit={{ opacity: 0, y: -20 }}
                className="flex gap-2 lg:gap-3 justify-start"
              >
                <Avatar className="w-6 h-6 lg:w-8 lg:h-8">
                  <AvatarFallback className="bg-slate-900 dark:bg-slate-700 text-white">
                    <Bot className="w-3 h-3 lg:w-4 lg:h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 p-2 lg:p-3 rounded-2xl shadow-sm">
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {showQuickActions && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                <div className="text-xs text-slate-600 dark:text-slate-400 text-center font-medium flex items-center justify-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  <span>¿Listo para tu proyecto full stack?</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-8 justify-start hover:bg-slate-100 dark:hover:bg-slate-700 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600"
                      onClick={handleWhatsAppClick}
                    >
                      <action.icon className="w-3 h-3 mr-2" />
                      {action.text}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="p-3 lg:p-4 border-t border-slate-200 dark:border-slate-700">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs lg:text-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Comenzar mi proyecto full stack
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
