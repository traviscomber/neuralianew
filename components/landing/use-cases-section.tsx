"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Send, Bot, User } from "lucide-react"

const useCases = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    description: "Career coaching and professional development platform",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    messages: [
      { type: "bot", text: "¡Hola! Soy tu coach de carrera de EcosueloLab. ¿En qué puedo ayudarte hoy?" },
      { type: "user", text: "Quiero mejorar mi perfil profesional" },
      {
        type: "bot",
        text: "Perfecto. Analicemos tu experiencia actual y definamos objetivos específicos para potenciar tu carrera.",
      },
      { type: "user", text: "¿Qué habilidades debería desarrollar?" },
      {
        type: "bot",
        text: "Basándome en las tendencias del mercado, te recomiendo enfocarte en liderazgo digital y análisis de datos.",
      },
    ],
  },
  {
    id: "despega",
    title: "Despega tu Carrera",
    description: "Professional growth and career acceleration platform",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    messages: [
      { type: "bot", text: "¡Bienvenido a Despega tu Carrera! Estoy aquí para impulsar tu crecimiento profesional." },
      { type: "user", text: "Necesito cambiar de trabajo" },
      {
        type: "bot",
        text: "Entiendo. Vamos a crear una estrategia personalizada para tu transición profesional exitosa.",
      },
      { type: "user", text: "¿Cómo puedo destacar en entrevistas?" },
      {
        type: "bot",
        text: "Te ayudo con técnicas de storytelling y preparación específica según el tipo de empresa y rol.",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    description: "AI-powered language learning and pronunciation platform",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    messages: [
      { type: "bot", text: "Hello! I'm your AI language tutor from ParrotfyIA. Ready to improve your English?" },
      { type: "user", text: "Yes, I want to practice pronunciation" },
      {
        type: "bot",
        text: "Great! Let's start with some common phrases. I'll analyze your pronunciation in real-time.",
      },
      { type: "user", text: "How can I sound more natural?" },
      {
        type: "bot",
        text: "Focus on rhythm and intonation. I'll provide personalized exercises based on your native language.",
      },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([])

  useEffect(() => {
    const currentUseCase = useCases.find((uc) => uc.id === activeTab)
    if (!currentUseCase) return

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        const nextIndex = (prev + 1) % currentUseCase.messages.length
        if (nextIndex === 0) {
          setDisplayedMessages([])
          setTimeout(() => {
            setDisplayedMessages([currentUseCase.messages[0]])
          }, 500)
        } else {
          setDisplayedMessages(currentUseCase.messages.slice(0, nextIndex + 1))
        }
        return nextIndex
      })
    }, 3000)

    // Initialize with first message
    setDisplayedMessages([currentUseCase.messages[0]])
    setCurrentMessageIndex(0)

    return () => clearInterval(interval)
  }, [activeTab])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">🎯 Real-World Applications</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
            See Our AI Agents
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our intelligent agents are transforming industries with real conversations and practical
            applications across different domains.
          </p>
        </div>

        {/* Use Cases Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.id}
                value={useCase.id}
                className="data-[state=active]:bg-white data-[state=active]:shadow-md"
              >
                <div className="text-center">
                  <div className="font-semibold">{useCase.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{useCase.description}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Chat Demo */}
                <Card className={`bg-gradient-to-br ${useCase.bgGradient} border-2 shadow-xl`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-gradient-to-r ${useCase.gradient} rounded-lg`}>
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{useCase.title} Demo</CardTitle>
                        <CardDescription>Live conversation simulation</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white rounded-lg p-4 h-80 overflow-y-auto">
                      <div className="space-y-4">
                        {displayedMessages.map((message, index) => (
                          <div
                            key={index}
                            className={`flex items-start gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}
                          >
                            <div
                              className={`p-2 rounded-full ${
                                message.type === "bot" ? `bg-gradient-to-r ${useCase.gradient}` : "bg-gray-200"
                              }`}
                            >
                              {message.type === "bot" ? (
                                <Bot className="h-4 w-4 text-white" />
                              ) : (
                                <User className="h-4 w-4 text-gray-600" />
                              )}
                            </div>
                            <div
                              className={`max-w-xs p-3 rounded-lg ${
                                message.type === "bot"
                                  ? "bg-gray-100 text-gray-800"
                                  : `bg-gradient-to-r ${useCase.gradient} text-white`
                              }`}
                            >
                              <p className="text-sm">{message.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 p-3 bg-white rounded-lg border">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 outline-none text-sm"
                        disabled
                      />
                      <button className={`p-2 bg-gradient-to-r ${useCase.gradient} rounded-lg`}>
                        <Send className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Use Case Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{useCase.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{useCase.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${useCase.gradient} rounded-full`}></div>
                      <span className="text-gray-700">Real-time conversation processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${useCase.gradient} rounded-full`}></div>
                      <span className="text-gray-700">Contextual understanding and responses</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${useCase.gradient} rounded-full`}></div>
                      <span className="text-gray-700">Multilingual support and adaptation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${useCase.gradient} rounded-full`}></div>
                      <span className="text-gray-700">Personalized learning and coaching</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      className={`bg-gradient-to-r ${useCase.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Try {useCase.title}
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
