"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bot, User, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const demoMessages = [
  {
    type: "bot",
    message: "¡Hola! Soy el asistente de IA de N3uralia. ¿En qué puedo ayudarte hoy?",
    time: "14:30",
  },
  {
    type: "user",
    message: "Necesito una solución de IA conversacional para mi empresa",
    time: "14:31",
  },
  {
    type: "bot",
    message:
      "Perfecto! Desarrollamos ecosistemas completos de IA. ¿Qué tipo de empresa tienes y cuáles son tus principales necesidades?",
    time: "14:31",
  },
  {
    type: "user",
    message: "Somos una empresa de agricultura y necesitamos automatizar consultas de análisis de suelo",
    time: "14:32",
  },
  {
    type: "bot",
    message:
      "¡Excelente! Tenemos experiencia específica en agricultura con EcosueloLab. Podemos crear una plataforma completa: frontend web, backend con APIs, base de datos y agente conversacional especializado. ¿Te interesa conocer más detalles?",
    time: "14:32",
  },
]

export function HeroChatInterface() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const animateMessages = () => {
      if (currentMessageIndex < demoMessages.length - 1) {
        setIsTyping(true)

        const typingTimer = setTimeout(() => {
          setCurrentMessageIndex((prev) => prev + 1)
          setIsTyping(false)
        }, 1500)

        return typingTimer
      } else {
        const resetTimer = setTimeout(() => {
          setCurrentMessageIndex(0)
          setAnimationKey((prev) => prev + 1)
        }, 3000)

        return resetTimer
      }
    }

    const timer = setTimeout(animateMessages, 2000)
    return () => clearTimeout(timer)
  }, [currentMessageIndex])

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="font-bold text-slate-900">Demo N3uralia IA</span>
        <Badge className="ml-auto bg-slate-100 text-slate-700 border-slate-200 font-medium">
          <Bot className="w-3 h-3 mr-1" />
          Agente IA
        </Badge>
      </div>

      <div className="space-y-4 h-80 overflow-y-auto" key={animationKey}>
        <AnimatePresence mode="sync">
          {demoMessages.slice(0, currentMessageIndex + 1).map((msg, index) => (
            <motion.div
              key={`${index}-${animationKey}`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`flex gap-3 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.type === "bot" && (
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarFallback className="bg-slate-900 text-white">
                    <Bot className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
              )}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className={`max-w-[85%] p-3 rounded-2xl shadow-sm ${
                  msg.type === "user"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-800 border border-slate-200"
                }`}
              >
                <p className="text-sm whitespace-pre-line font-medium leading-relaxed">{msg.message}</p>
                <p className="text-xs opacity-70 mt-2 font-medium">{msg.time}</p>
              </motion.div>
              {msg.type === "user" && (
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarFallback className="bg-slate-600 text-white">
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
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex gap-3 justify-start"
          >
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-slate-900 text-white">
                <Bot className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <div className="bg-slate-100 border border-slate-200 p-3 rounded-2xl shadow-sm">
              <div className="flex space-x-1">
                <motion.div
                  className="w-2 h-2 bg-slate-600 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                />
                <motion.div
                  className="w-2 h-2 bg-slate-600 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                />
                <motion.div
                  className="w-2 h-2 bg-slate-600 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <MessageCircle className="w-3 h-3" />
          <span>Demo interactivo - Conversación simulada</span>
        </div>
      </div>
    </div>
  )
}
