"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, User, MessageSquare, Zap, CheckCircle, Clock, TrendingUp } from "lucide-react"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  typing?: boolean
}

export function HeroChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentDemo, setCurrentDemo] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const demoScenarios = [
    {
      title: "EcosueloLab - Agricultura IA",
      badge: "Análisis de Suelos",
      color: "bg-green-500",
      conversation: [
        {
          type: "user" as const,
          content: "Hola, necesito analizar el suelo de mi campo de maíz en la región de O'Higgins",
        },
        {
          type: "assistant" as const,
          content:
            "¡Hola! Soy el asistente de EcosueloLab. Te ayudo con el análisis de suelos. Para tu campo de maíz en O'Higgins, necesito algunos datos: ¿Cuántas hectáreas tienes y cuál fue el último cultivo?",
        },
        {
          type: "user" as const,
          content: "Son 15 hectáreas y el año pasado planté trigo",
        },
        {
          type: "assistant" as const,
          content:
            "Perfecto. Basándome en los datos de la región y el cultivo anterior, te recomiendo: 📊 Análisis de pH y nutrientes, 🌱 Corrección de nitrógeno post-trigo, 💧 Evaluación de retención de agua. ¿Te envío el protocolo completo por WhatsApp?",
        },
      ],
    },
    {
      title: "Parrotfy ERP - Software Empresarial",
      badge: "Automatización",
      color: "bg-blue-500",
      conversation: [
        {
          type: "user" as const,
          content: "Necesito automatizar el proceso de facturación en nuestro ERP",
        },
        {
          type: "assistant" as const,
          content:
            "Hola, soy el agente de Parrotfy ERP. Te ayudo con la automatización de facturación. ¿Qué sistema ERP utilizas actualmente y cuántas facturas procesas al mes?",
        },
        {
          type: "user" as const,
          content: "Usamos SAP y procesamos unas 500 facturas mensuales",
        },
        {
          type: "assistant" as const,
          content:
            "Excelente. Para SAP con 500 facturas/mes, puedo configurar: ⚡ Auto-generación desde órdenes de compra, 📧 Envío automático por email, 💰 Seguimiento de pagos, 📊 Reportes en tiempo real. Esto reducirá tu tiempo de procesamiento en un 80%. ¿Comenzamos?",
        },
      ],
    },
    {
      title: "Despega Tu Carrera - Coaching IA",
      badge: "Desarrollo Profesional",
      color: "bg-purple-500",
      conversation: [
        {
          type: "user" as const,
          content: "Quiero cambiar de carrera pero no sé por dónde empezar",
        },
        {
          type: "assistant" as const,
          content:
            "¡Hola! Soy tu coach de carrera de Despega Tu Carrera. Entiendo que quieres hacer un cambio profesional. Es un paso importante y estoy aquí para apoyarte. ¿Podrías contarme qué estudias/trabajas actualmente y hacia qué área te gustaría moverte?",
        },
        {
          type: "user" as const,
          content: "Soy contador pero me interesa mucho la tecnología y programación",
        },
        {
          type: "assistant" as const,
          content:
            "¡Excelente combinación! Tu background en contabilidad + tecnología es muy valioso. Te sugiero: 💻 Comenzar con Python para análisis financiero, 📊 Especializarte en FinTech, 🎯 Buscar roles de Business Analyst, 📚 Certificaciones en Data Analytics. ¿Te interesa un plan personalizado de 6 meses?",
        },
      ],
    },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const typeMessage = async (message: string, delay = 50) => {
    setIsTyping(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const words = message.split(" ")
    let currentMessage = ""

    for (let i = 0; i < words.length; i++) {
      currentMessage += (i > 0 ? " " : "") + words[i]
      setMessages((prev) => {
        const newMessages = [...prev]
        const lastMessage = newMessages[newMessages.length - 1]
        if (lastMessage && lastMessage.typing) {
          lastMessage.content = currentMessage
        }
        return newMessages
      })
      await new Promise((resolve) => setTimeout(resolve, delay))
    }

    setMessages((prev) => {
      const newMessages = [...prev]
      const lastMessage = newMessages[newMessages.length - 1]
      if (lastMessage) {
        lastMessage.typing = false
      }
      return newMessages
    })
    setIsTyping(false)
  }

  const startDemo = async (scenarioIndex: number) => {
    setCurrentDemo(scenarioIndex)
    setMessages([])
    const scenario = demoScenarios[scenarioIndex]

    for (let i = 0; i < scenario.conversation.length; i++) {
      const message = scenario.conversation[i]

      if (message.type === "user") {
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-${i}`,
            type: message.type,
            content: message.content,
            timestamp: new Date(),
          },
        ])
        await new Promise((resolve) => setTimeout(resolve, 1500))
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-${i}`,
            type: message.type,
            content: "",
            timestamp: new Date(),
            typing: true,
          },
        ])
        await typeMessage(message.content)
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    }
  }

  useEffect(() => {
    // Auto-start first demo
    const timer = setTimeout(() => {
      startDemo(0)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const currentScenario = demoScenarios[currentDemo]

  return (
    <div className="space-y-6">
      {/* Demo Selector */}
      <div className="flex flex-wrap gap-2">
        {demoScenarios.map((scenario, index) => (
          <Button
            key={index}
            variant={currentDemo === index ? "default" : "outline"}
            size="sm"
            className={`${
              currentDemo === index
                ? `${scenario.color} text-white border-0`
                : "border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
            } transition-all duration-300`}
            onClick={() => startDemo(index)}
          >
            <Badge className={`${scenario.color} text-white mr-2 px-2 py-1`}>{scenario.badge}</Badge>
            {scenario.title}
          </Button>
        ))}
      </div>

      {/* Chat Interface */}
      <Card className="bg-slate-900/80 border-slate-700/50 backdrop-blur-sm shadow-2xl">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 ${currentScenario.color} rounded-full animate-pulse`}></div>
              <span className="text-white">{currentScenario.title}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className={`${currentScenario.color} text-white`}>{currentScenario.badge}</Badge>
              <div className="flex items-center space-x-1 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs">En línea</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="h-80 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-200 border border-slate-700"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.type === "assistant" && <Bot className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />}
                    {message.type === "user" && <User className="w-4 h-4 mt-1 text-blue-200 flex-shrink-0" />}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">
                        {message.content}
                        {message.typing && (
                          <span className="inline-block w-2 h-4 bg-blue-400 ml-1 animate-pulse"></span>
                        )}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs opacity-60">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                        {message.type === "user" && <CheckCircle className="w-3 h-3 text-blue-300" />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-blue-400" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Stats */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-700">
            <div className="flex items-center space-x-4 text-xs text-slate-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>Respuesta: &lt;200ms</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span>95% Satisfacción</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span>24/7 Activo</span>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              onClick={() => startDemo((currentDemo + 1) % demoScenarios.length)}
            >
              <MessageSquare className="w-3 h-3 mr-1" />
              Siguiente Demo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Demo Results */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">250%</div>
            <div className="text-xs text-slate-400">ROI Promedio</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">95%</div>
            <div className="text-xs text-slate-400">Satisfacción</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <Zap className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">24/7</div>
            <div className="text-xs text-slate-400">Soporte</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
