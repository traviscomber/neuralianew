"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, User, Bot } from "lucide-react"

const useCases = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    description: "Career coaching and professional development platform",
    gradient: "from-emerald-500 to-teal-600",
    messages: [
      { type: "user", content: "Hola, necesito ayuda para mejorar mi CV" },
      {
        type: "bot",
        content: "¡Perfecto! Te ayudo a optimizar tu currículum. ¿En qué área profesional te especializas?",
      },
      { type: "user", content: "Soy desarrollador de software con 3 años de experiencia" },
      {
        type: "bot",
        content:
          "Excelente. Para un desarrollador con tu experiencia, es clave destacar proyectos específicos y tecnologías. ¿Qué lenguajes y frameworks dominas?",
      },
    ],
  },
  {
    id: "carrera",
    title: "Despega tu Carrera",
    description: "AI-powered career guidance and job matching",
    gradient: "from-blue-500 to-indigo-600",
    messages: [
      { type: "user", content: "¿Cómo puedo cambiar de carrera a los 35 años?" },
      {
        type: "bot",
        content:
          "Cambiar de carrera a los 35 es totalmente posible y común. Tu experiencia previa es valiosa. ¿Hacia qué área te gustaría transicionar?",
      },
      { type: "user", content: "Me interesa el marketing digital" },
      {
        type: "bot",
        content:
          "¡Excelente elección! El marketing digital valora mucho la experiencia profesional. Te recomiendo comenzar con certificaciones en Google Ads y Analytics. ¿Tienes experiencia previa con redes sociales o análisis de datos?",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    description: "Language learning with AI conversation partners",
    gradient: "from-purple-500 to-pink-600",
    messages: [
      { type: "user", content: "I want to practice my English conversation skills" },
      {
        type: "bot",
        content:
          "Great! I'm here to help you improve your English. Let's start with a casual conversation. What did you do this weekend?",
      },
      { type: "user", content: "I went to the park with my family and we had a picnic" },
      {
        type: "bot",
        content:
          "That sounds wonderful! Family time is so important. What's your favorite thing about having picnics? Also, great job using the past tense correctly!",
      },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        const currentUseCase = useCases.find((uc) => uc.id === activeTab)
        if (currentUseCase && prev < currentUseCase.messages.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [activeTab])

  useEffect(() => {
    setCurrentMessageIndex(0)
  }, [activeTab])

  const currentUseCase = useCases.find((uc) => uc.id === activeTab)

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Real AI Agents in Action</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how our platform powers intelligent conversations across different industries and use cases.
          </p>
        </div>

        <div className="mt-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {useCases.map((useCase) => (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-50"
                >
                  {useCase.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div
                      className={`inline-flex items-center rounded-full bg-gradient-to-r ${useCase.gradient} px-4 py-2 text-sm font-medium text-white mb-4`}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Live Demo
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">AI Conversation</Badge>
                      <Badge variant="secondary">Real-time</Badge>
                      <Badge variant="secondary">Multilingual</Badge>
                    </div>
                  </div>

                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <div className="space-y-4 h-80 overflow-y-auto">
                        {useCase.messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                          <div
                            key={index}
                            className={`flex items-start space-x-3 ${
                              message.type === "user" ? "justify-end" : "justify-start"
                            }`}
                          >
                            {message.type === "bot" && (
                              <div
                                className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${useCase.gradient}`}
                              >
                                <Bot className="h-4 w-4 text-white" />
                              </div>
                            )}
                            <div
                              className={`max-w-xs rounded-lg px-4 py-2 ${
                                message.type === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                            </div>
                            {message.type === "user" && (
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                                <User className="h-4 w-4 text-white" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
