"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, User, Bot } from "lucide-react"

const useCases = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    description: "Environmental consulting and sustainability solutions",
    color: "emerald",
    messages: [
      { type: "user", content: "¿Cómo puedo reducir la huella de carbono de mi empresa?" },
      {
        type: "bot",
        content:
          "Te ayudo a crear un plan de sostenibilidad personalizado. Primero, analicemos tus principales fuentes de emisiones...",
      },
      { type: "user", content: "Tenemos oficinas en 3 ciudades y una flota de 50 vehículos" },
      {
        type: "bot",
        content:
          "Perfecto. Para oficinas, recomiendo auditoría energética y transición a renovables. Para la flota, evaluemos vehículos eléctricos...",
      },
    ],
  },
  {
    id: "carrera",
    title: "Despega tu Carrera",
    description: "Career coaching and professional development platform",
    color: "blue",
    messages: [
      { type: "user", content: "Quiero cambiar de carrera pero no sé por dónde empezar" },
      {
        type: "bot",
        content: "¡Excelente decisión! Vamos a explorar tus intereses y habilidades. ¿Qué te motiva más en el trabajo?",
      },
      { type: "user", content: "Me gusta resolver problemas y trabajar con tecnología" },
      {
        type: "bot",
        content:
          "Perfecto perfil para tech. Te sugiero explorar: Desarrollo de Software, Data Science, o UX Design. ¿Cuál te llama más la atención?",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    description: "AI-powered language learning and pronunciation coach",
    color: "purple",
    messages: [
      { type: "user", content: "I want to improve my English pronunciation" },
      {
        type: "bot",
        content:
          "Great! I'll help you master English pronunciation. Let's start with common problem areas. Say: 'The weather is beautiful today'",
      },
      { type: "user", content: "Ze wezer is byutiful today" },
      {
        type: "bot",
        content:
          "Good effort! Focus on 'th' sound in 'The' and 'weather'. Try: 'Thuh weather'. Put your tongue between your teeth.",
      },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentUseCase = useCases.find((uc) => uc.id === activeTab)
      if (currentUseCase) {
        setCurrentMessageIndex((prev) => (prev >= currentUseCase.messages.length - 1 ? 0 : prev + 1))
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [activeTab])

  useEffect(() => {
    setCurrentMessageIndex(0)
  }, [activeTab])

  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return {
          bg: "bg-gradient-to-br from-emerald-500 to-teal-600",
          border: "border-emerald-200",
          text: "text-emerald-700",
          badge: "bg-emerald-100 text-emerald-800",
        }
      case "blue":
        return {
          bg: "bg-gradient-to-br from-blue-500 to-indigo-600",
          border: "border-blue-200",
          text: "text-blue-700",
          badge: "bg-blue-100 text-blue-800",
        }
      case "purple":
        return {
          bg: "bg-gradient-to-br from-purple-500 to-pink-600",
          border: "border-purple-200",
          text: "text-purple-700",
          badge: "bg-purple-100 text-purple-800",
        }
      default:
        return {
          bg: "bg-gradient-to-br from-gray-500 to-gray-600",
          border: "border-gray-200",
          text: "text-gray-700",
          badge: "bg-gray-100 text-gray-800",
        }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Real Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI agents are transforming businesses across different industries
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {useCases.map((useCase) => {
              const colors = getColorClasses(useCase.color)
              return (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className={`data-[state=active]:${colors.bg} data-[state=active]:text-white`}
                >
                  {useCase.title}
                </TabsTrigger>
              )
            })}
          </TabsList>

          {useCases.map((useCase) => {
            const colors = getColorClasses(useCase.color)
            return (
              <TabsContent key={useCase.id} value={useCase.id} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className={`${colors.border} border-2`}>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-2xl font-bold ${colors.text}`}>{useCase.title}</h3>
                          <Badge className={colors.badge}>Live Demo</Badge>
                        </div>
                        <p className="text-gray-600 text-lg">{useCase.description}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <MessageCircle className="h-4 w-4" />
                          <span>Auto-cycling conversation demo</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

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
                                className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0`}
                              >
                                <Bot className="h-4 w-4 text-white" />
                              </div>
                            )}
                            <div
                              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                message.type === "user"
                                  ? "bg-gray-100 text-gray-900"
                                  : "bg-white border-2 " + colors.border
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                            </div>
                            {message.type === "user" && (
                              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
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
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
