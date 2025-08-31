"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, User, Bot, ExternalLink } from "lucide-react"

const useCases = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    description: "Career coaching and job matching platform",
    category: "Career Development",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    messages: [
      { type: "user", content: "Hola, necesito ayuda para encontrar trabajo en tecnología" },
      {
        type: "bot",
        content: "¡Perfecto! Te ayudo a encontrar oportunidades en tech. ¿Cuál es tu experiencia actual?",
      },
      { type: "user", content: "Soy desarrollador frontend con 3 años de experiencia en React" },
      {
        type: "bot",
        content:
          "Excelente perfil. He encontrado 12 posiciones que coinciden con tu experiencia. Las empresas mejor valoradas están ofreciendo entre $80K-$120K. ¿Te interesa que te conecte con reclutadores?",
      },
    ],
  },
  {
    id: "carrera",
    title: "Despega tu Carrera",
    description: "Professional development and mentorship",
    category: "Coaching",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    messages: [
      { type: "user", content: "Me siento estancado en mi carrera profesional" },
      {
        type: "bot",
        content:
          "Entiendo esa sensación. Muchos profesionales pasan por esto. Cuéntame, ¿qué aspectos específicos te hacen sentir estancado?",
      },
      { type: "user", content: "Llevo 2 años en el mismo puesto sin promociones" },
      {
        type: "bot",
        content:
          "Es frustrante cuando no vemos progreso. Vamos a crear un plan de desarrollo personalizado. Primero, analicemos tus fortalezas actuales y las habilidades que necesitas desarrollar para el siguiente nivel.",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    description: "AI-powered language learning and pronunciation",
    category: "Education",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    messages: [
      { type: "user", content: "I want to improve my English pronunciation" },
      {
        type: "bot",
        content:
          "Great! I'll help you master English pronunciation. Let's start with a quick assessment. Can you say this phrase: 'The quick brown fox jumps over the lazy dog'?",
      },
      { type: "user", content: "The quick brown fox jumps over the lazy dog" },
      {
        type: "bot",
        content:
          "Good effort! I noticed you can work on the 'th' sound in 'the' and the 'ow' sound in 'brown'. Let me give you some targeted exercises to improve these specific sounds.",
      },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<(typeof useCases)[0]["messages"]>([])

  useEffect(() => {
    const activeUseCase = useCases.find((uc) => uc.id === activeTab)
    if (!activeUseCase) return

    // Reset when tab changes
    setCurrentMessageIndex(0)
    setDisplayedMessages([])

    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        const nextIndex = prev + 1
        if (nextIndex <= activeUseCase.messages.length) {
          setDisplayedMessages(activeUseCase.messages.slice(0, nextIndex))
          return nextIndex
        } else {
          // Reset the cycle
          setDisplayedMessages([])
          return 0
        }
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [activeTab])

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Real AI Agents in Action</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See how businesses across industries use Neuralia to create intelligent, conversational experiences that
            drive results.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {useCases.map((useCase) => (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="flex flex-col items-center gap-2 p-4 h-auto"
                >
                  <span className="font-semibold">{useCase.title}</span>
                  <Badge variant="secondary" className="text-xs">
                    {useCase.category}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
                <Card className={`overflow-hidden border-0 shadow-xl bg-gradient-to-br ${useCase.bgGradient}`}>
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Info Panel */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div
                          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white bg-gradient-to-r ${useCase.gradient} mb-4 w-fit`}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {useCase.category}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                        <p className="text-lg text-gray-600 mb-6">{useCase.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live demo running automatically
                        </div>
                      </div>

                      {/* Chat Demo */}
                      <div className="bg-white/80 backdrop-blur-sm p-6 lg:p-8">
                        <div className="bg-white rounded-lg shadow-lg h-96 flex flex-col">
                          <div className={`bg-gradient-to-r ${useCase.gradient} text-white p-4 rounded-t-lg`}>
                            <h4 className="font-semibold">{useCase.title} Assistant</h4>
                            <p className="text-sm opacity-90">AI-powered conversation</p>
                          </div>

                          <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            {displayedMessages.map((message, index) => (
                              <div
                                key={index}
                                className={`flex items-start gap-3 ${
                                  message.type === "user" ? "flex-row-reverse" : ""
                                }`}
                              >
                                <div
                                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                                    message.type === "user" ? "bg-gray-200" : `bg-gradient-to-r ${useCase.gradient}`
                                  }`}
                                >
                                  {message.type === "user" ? (
                                    <User className="h-4 w-4 text-gray-600" />
                                  ) : (
                                    <Bot className="h-4 w-4 text-white" />
                                  )}
                                </div>
                                <div
                                  className={`max-w-xs lg:max-w-sm p-3 rounded-lg ${
                                    message.type === "user"
                                      ? "bg-gray-100 text-gray-900"
                                      : "bg-gray-50 text-gray-900 border"
                                  }`}
                                >
                                  <p className="text-sm">{message.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
