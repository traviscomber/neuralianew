"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, User, Bot } from "lucide-react"

const useCases = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    description: "Environmental consulting and sustainability solutions",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    messages: [
      { role: "user", content: "¿Cómo puedo reducir la huella de carbono de mi empresa?" },
      {
        role: "bot",
        content:
          "Te ayudo a crear un plan de sostenibilidad personalizado. Primero, analicemos tus principales fuentes de emisiones: energía, transporte, residuos y cadena de suministro.",
      },
      { role: "user", content: "Tenemos oficinas en 3 ciudades y una flota de 50 vehículos" },
      {
        role: "bot",
        content:
          "Perfecto. Para oficinas, recomiendo auditoría energética y migración a renovables. Para la flota, evaluemos vehículos eléctricos y optimización de rutas. ¿Quieres que calculemos el ROI?",
      },
    ],
  },
  {
    id: "carrera",
    title: "Despega tu Carrera",
    description: "Career coaching and professional development platform",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    messages: [
      { role: "user", content: "Soy ingeniero con 5 años de experiencia, ¿cómo puedo avanzar a un rol de liderazgo?" },
      {
        role: "bot",
        content:
          "¡Excelente momento para dar el salto! Con tu experiencia técnica, necesitas desarrollar habilidades de gestión. Te sugiero: certificación en management, mentoría de líderes actuales y liderar un proyecto pequeño.",
      },
      { role: "user", content: "¿Qué certificaciones recomiendas?" },
      {
        role: "bot",
        content:
          "Para tech leadership: PMP o Agile, MBA ejecutivo, o certificaciones específicas como AWS Solutions Architect si estás en cloud. ¿En qué área tecnológica te especializas?",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    description: "AI-powered language learning and pronunciation training",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    messages: [
      { role: "user", content: "I want to improve my English pronunciation for business meetings" },
      {
        role: "bot",
        content:
          "Great goal! I'll help you master professional English pronunciation. Let's start with common business phrases and work on clarity, intonation, and confidence. Try saying: 'I'd like to schedule a follow-up meeting.'",
      },
      { role: "user", content: "I'd like to schedule a follow-up meeting" },
      {
        role: "bot",
        content:
          "Good! Your pronunciation is 85% accurate. Focus on the 'follow-up' - it should be 'FOL-low up' with stress on the first syllable. Also, make 'meeting' crisper: 'MEE-ting'. Try again!",
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
          setDisplayedMessages((prev) => [...prev, currentUseCase.messages[nextIndex]])
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
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Real AI Agents in Action</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how businesses across industries use Neuralia to create intelligent, conversational experiences that
            drive results.
          </p>
        </div>

        <div className="mt-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {useCases.map((useCase) => (
                <TabsTrigger key={useCase.id} value={useCase.id} className="text-sm">
                  {useCase.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id}>
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div
                      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white bg-gradient-to-r ${useCase.gradient} mb-4`}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Live Demo
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{useCase.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Auto-Response</Badge>
                        <Badge variant="outline">Multi-Language</Badge>
                        <Badge variant="outline">Context-Aware</Badge>
                      </div>
                    </div>
                  </div>

                  <Card className={`bg-gradient-to-br ${useCase.bgGradient} border-0 shadow-xl`}>
                    <CardContent className="p-6">
                      <div className="space-y-4 h-80 overflow-y-auto">
                        {displayedMessages.map((message, index) => (
                          <div
                            key={index}
                            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`flex items-start space-x-2 max-w-[80%] ${
                                message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                              }`}
                            >
                              <div
                                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                                  message.role === "user" ? "bg-gray-200" : `bg-gradient-to-r ${useCase.gradient}`
                                }`}
                              >
                                {message.role === "user" ? (
                                  <User className="w-4 h-4 text-gray-600" />
                                ) : (
                                  <Bot className="w-4 h-4 text-white" />
                                )}
                              </div>
                              <div
                                className={`rounded-lg px-4 py-2 ${
                                  message.role === "user"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "bg-white/90 text-gray-900 shadow-sm"
                                }`}
                              >
                                <p className="text-sm">{message.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center space-x-2 p-3 bg-white/50 rounded-lg">
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="flex-1 bg-transparent border-0 focus:outline-none text-sm placeholder-gray-500"
                          disabled
                        />
                        <Send className="w-4 h-4 text-gray-400" />
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
