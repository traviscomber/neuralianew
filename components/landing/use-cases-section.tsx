"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, User, Bot } from "lucide-react"

interface Message {
  id: number
  type: "user" | "bot"
  content: string
}

const useCases = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    description: "Career coaching and professional development platform",
    gradient: "from-emerald-500 to-teal-600",
    messages: [
      { type: "user", content: "Hola, necesito ayuda para encontrar trabajo en tecnología" },
      {
        type: "bot",
        content: "¡Perfecto! Te ayudo a encontrar oportunidades en tech. ¿Cuál es tu experiencia actual?",
      },
      { type: "user", content: "Soy desarrollador junior con 1 año de experiencia en React" },
      {
        type: "bot",
        content:
          "Excelente perfil. He encontrado 15 posiciones que coinciden con tu experiencia. Te recomiendo estas 3 empresas que están contratando activamente...",
      },
    ],
  },
  {
    id: "carrera",
    title: "Despega tu Carrera",
    description: "Professional career acceleration and mentoring",
    gradient: "from-blue-500 to-indigo-600",
    messages: [
      { type: "user", content: "Quiero hacer una transición de marketing a product management" },
      {
        type: "bot",
        content:
          "¡Excelente decisión! Product Management es un campo en crecimiento. ¿Qué experiencia tienes trabajando con equipos técnicos?",
      },
      { type: "user", content: "He colaborado con developers en campañas digitales por 3 años" },
      {
        type: "bot",
        content:
          "Perfecto, esa experiencia es muy valiosa. Te sugiero este plan de 6 meses: 1) Certificación en Product Management, 2) Proyecto personal, 3) Networking...",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    description: "AI-powered language learning and conversation practice",
    gradient: "from-purple-500 to-pink-600",
    messages: [
      { type: "user", content: "I want to practice my English conversation skills" },
      {
        type: "bot",
        content: "Great! I'm here to help you improve your English. What topics would you like to discuss today?",
      },
      { type: "user", content: "Let's talk about technology and artificial intelligence" },
      {
        type: "bot",
        content:
          "Excellent choice! AI is fascinating. What aspect of artificial intelligence interests you most? Machine learning, natural language processing, or perhaps robotics?",
      },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentUseCase = useCases.find((uc) => uc.id === activeTab)
      if (currentUseCase) {
        if (currentMessageIndex < currentUseCase.messages.length - 1) {
          setIsTyping(true)
          setTimeout(() => {
            setCurrentMessageIndex((prev) => prev + 1)
            setIsTyping(false)
          }, 1000)
        } else {
          // Reset to start
          setCurrentMessageIndex(0)
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [activeTab, currentMessageIndex])

  useEffect(() => {
    setCurrentMessageIndex(0)
  }, [activeTab])

  const currentUseCase = useCases.find((uc) => uc.id === activeTab)

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700">Use Cases</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Real-World Applications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI agents are transforming businesses across different industries with intelligent conversations
            and automated solutions.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.id}
                value={useCase.id}
                className={`data-[state=active]:bg-gradient-to-r data-[state=active]:${useCase.gradient} data-[state=active]:text-white`}
              >
                {useCase.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{useCase.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-gradient-to-r ${useCase.gradient} rounded-lg text-white`}>
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <span className="font-medium">Intelligent Conversations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-gradient-to-r ${useCase.gradient} rounded-lg text-white`}>
                        <Bot className="h-5 w-5" />
                      </div>
                      <span className="font-medium">24/7 Availability</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-gradient-to-r ${useCase.gradient} rounded-lg text-white`}>
                        <User className="h-5 w-5" />
                      </div>
                      <span className="font-medium">Personalized Experience</span>
                    </div>
                  </div>
                </div>

                <Card className="bg-white shadow-xl">
                  <CardContent className="p-6">
                    <div className="space-y-4 h-80 overflow-y-auto">
                      {useCase.messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.type === "user"
                                ? "bg-blue-500 text-white"
                                : `bg-gradient-to-r ${useCase.gradient} text-white`
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-gradient-to-r ${useCase.gradient} text-white`}
                          >
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-white rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-white rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
