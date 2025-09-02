"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, SkipForward, Bot, Zap, Users, TrendingUp } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp?: string
}

interface Demo {
  id: string
  title: string
  description: string
  industry: string
  messages: Message[]
  metrics: {
    satisfaction: string
    improvement: string
    automation: string
  }
}

export function HeroChatInterface() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [messages, setMessages] = useState<Message[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const demos: Demo[] = [
    {
      id: "ecosuelolab",
      title: "EcosueloLab - IA Agricultura",
      description: "Análisis de suelos con IA conversacional",
      industry: "Agricultura",
      messages: [
        {
          role: "user",
          content: "Hola, necesito analizar el suelo de mi campo de maíz en la Región del Maule",
        },
        {
          role: "assistant",
          content:
            "¡Hola! Soy el asistente de EcosueloLab. Te ayudo con el análisis de suelos. Para tu campo de maíz en el Maule, necesito algunos datos: ¿cuántas hectáreas tienes y qué tipo de riego usas?",
        },
        {
          role: "user",
          content: "Son 15 hectáreas con riego por goteo. El año pasado tuve problemas de rendimiento",
        },
        {
          role: "assistant",
          content:
            "Perfecto. Con riego por goteo tienes ventaja. Para el análisis completo necesito que tomes muestras en 5 puntos del campo. Te envío el protocolo por WhatsApp y coordino la visita técnica. ¿Prefieres esta semana o la próxima?",
        },
        {
          role: "user",
          content: "Esta semana sería ideal. ¿Qué costo tiene el análisis completo?",
        },
        {
          role: "assistant",
          content:
            "El análisis completo para 15 hectáreas cuesta $180.000 e incluye: análisis físico-químico, recomendaciones de fertilización, plan de mejoramiento y seguimiento por 6 meses. Te programo para el jueves. ¡Vamos a mejorar ese rendimiento!",
        },
      ],
      metrics: {
        satisfaction: "95%",
        improvement: "70% reducción tiempo análisis",
        automation: "10,000+ consultas/mes",
      },
    },
    {
      id: "parrotfy",
      title: "Parrotfy ERP - IA Software",
      description: "Asistente inteligente para software empresarial",
      industry: "Software Empresarial",
      messages: [
        {
          role: "user",
          content: "No puedo generar el reporte de ventas del último trimestre en Parrotfy",
        },
        {
          role: "assistant",
          content:
            "Te ayudo con el reporte de ventas. Primero verifico tus permisos... ✅ Tienes acceso completo. El problema puede ser el filtro de fechas. ¿Estás en el módulo 'Reportes > Ventas > Trimestral'?",
        },
        {
          role: "user",
          content: "Sí, estoy ahí pero me sale error cuando selecciono Q4 2024",
        },
        {
          role: "assistant",
          content:
            "Detecté el problema. Hay datos incompletos en diciembre. Te genero el reporte con los datos disponibles y marco las transacciones pendientes. ¿Quieres que también revise las facturas sin cerrar?",
        },
        {
          role: "user",
          content: "Sí, por favor. Y si puedes enviarme el reporte por email",
        },
        {
          role: "assistant",
          content:
            "¡Listo! ✅ Reporte generado con 847 transacciones ✅ 12 facturas pendientes identificadas ✅ Enviado a tu email ✅ Creé un recordatorio para revisar las pendientes mañana. ¿Necesitas algo más?",
        },
      ],
      metrics: {
        satisfaction: "92%",
        improvement: "80% automatización consultas",
        automation: "50,000+ transacciones/mes",
      },
    },
    {
      id: "despega-carrera",
      title: "Despega Tu Carrera - IA Educación",
      description: "Coach de carrera con inteligencia artificial",
      industry: "Educación",
      messages: [
        {
          role: "user",
          content: "Terminé mi carrera de Ingeniería Comercial pero no encuentro trabajo hace 3 meses",
        },
        {
          role: "assistant",
          content:
            "Entiendo tu frustración. Como tu coach de carrera, vamos a cambiar eso. Primero, cuéntame: ¿en qué área te gustaría trabajar y qué experiencia tienes (prácticas, proyectos, trabajos de verano)?",
        },
        {
          role: "user",
          content: "Me interesa marketing digital. Hice mi práctica en una startup y manejo redes sociales",
        },
        {
          role: "assistant",
          content:
            "¡Excelente! Marketing digital está en alta demanda. Tu experiencia en startup es valiosa. Te voy a ayudar con: 1) Optimizar tu CV para marketing digital 2) Prepararte para entrevistas 3) Conectarte con empresas que buscan tu perfil. ¿Empezamos con el CV?",
        },
        {
          role: "user",
          content: "Sí, mi CV actual es muy genérico. ¿Qué debería destacar?",
        },
        {
          role: "assistant",
          content:
            "Para marketing digital destaca: ✅ Experiencia en startup (agilidad, innovación) ✅ Manejo de RRSS (métricas específicas) ✅ Proyectos universitarios con resultados ✅ Herramientas digitales que manejes. Te envío una plantilla optimizada y 5 ofertas que calzan perfecto contigo.",
        },
      ],
      metrics: {
        satisfaction: "88%",
        improvement: "88% tasa colocación laboral",
        automation: "5,000+ estudiantes activos",
      },
    },
  ]

  const startDemo = async (demoIndex: number) => {
    if (isPlaying) return

    setCurrentDemo(demoIndex)
    setMessages([])
    setCurrentMessageIndex(0)
    setIsPlaying(true)

    const demo = demos[demoIndex]

    for (let i = 0; i < demo.messages.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setMessages((prev) => [...prev, demo.messages[i]])
      setCurrentMessageIndex(i + 1)
    }

    setIsPlaying(false)
  }

  const nextDemo = () => {
    if (isPlaying) return
    const nextIndex = (currentDemo + 1) % demos.length
    startDemo(nextIndex)
  }

  const currentDemoData = demos[currentDemo]

  return (
    <div className="space-y-4">
      {/* Demo Selector */}
      <div className="flex flex-wrap gap-2">
        {demos.map((demo, index) => (
          <Button
            key={demo.id}
            variant={currentDemo === index ? "default" : "outline"}
            size="sm"
            className={`text-xs ${
              currentDemo === index
                ? "bg-blue-500 text-white border-0"
                : "border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
            } transition-all duration-300`}
            onClick={() => !isPlaying && setCurrentDemo(index)}
            disabled={isPlaying}
          >
            {demo.industry}
          </Button>
        ))}
      </div>

      {/* Chat Interface */}
      <Card className="bg-slate-900/80 border-slate-700/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg text-white">{currentDemoData.title}</CardTitle>
              <p className="text-sm text-slate-400 mt-1">{currentDemoData.description}</p>
            </div>
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              En Vivo
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Messages */}
          <div className="space-y-3 min-h-[300px] max-h-[400px] overflow-y-auto">
            {messages.length === 0 && !isPlaying ? (
              <div className="flex items-center justify-center h-[300px] text-slate-400">
                <div className="text-center space-y-3">
                  <Bot className="w-12 h-12 mx-auto text-slate-500" />
                  <p>Haz clic en "Reproducir" para ver la conversación</p>
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-slate-800 text-slate-200 border border-slate-700"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))
            )}
            {isPlaying && (
              <div className="flex justify-start">
                <div className="bg-slate-800 border border-slate-700 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex gap-2 pt-3 border-t border-slate-700">
            <Button
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 text-white flex-1"
              onClick={() => startDemo(currentDemo)}
              disabled={isPlaying}
            >
              <Play className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Reproducir</span>
              <span className="sm:hidden">Play</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              onClick={nextDemo}
              disabled={isPlaying}
            >
              <SkipForward className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Siguiente Demo</span>
              <span className="sm:hidden">Siguiente</span>
            </Button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-700">
            <div className="text-center">
              <div className="text-lg font-bold text-green-400">{currentDemoData.metrics.satisfaction}</div>
              <div className="text-xs text-slate-400">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400">{currentDemoData.metrics.improvement.split(" ")[0]}</div>
              <div className="text-xs text-slate-400">
                {currentDemoData.metrics.improvement.split(" ").slice(1).join(" ")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">
                {currentDemoData.metrics.automation.split(" ")[0]}
              </div>
              <div className="text-xs text-slate-400">
                {currentDemoData.metrics.automation.split(" ").slice(1).join(" ")}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Cases Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Card className="bg-slate-900/50 border-slate-700/50">
          <CardContent className="p-3 text-center">
            <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-1" />
            <div className="text-sm font-bold text-white">95%</div>
            <div className="text-xs text-slate-400">EcosueloLab</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/50 border-slate-700/50">
          <CardContent className="p-3 text-center">
            <Zap className="w-5 h-5 text-blue-400 mx-auto mb-1" />
            <div className="text-sm font-bold text-white">92%</div>
            <div className="text-xs text-slate-400">Parrotfy ERP</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/50 border-slate-700/50">
          <CardContent className="p-3 text-center">
            <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
            <div className="text-sm font-bold text-white">88%</div>
            <div className="text-xs text-slate-400">Despega Carrera</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
