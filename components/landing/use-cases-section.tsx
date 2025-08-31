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
    description: "Career coaching and professional development",
    gradient: "from-emerald-500 to-teal-600",
    messages: [
      { role: "user", content: "Hola, necesito ayuda con mi carrera profesional" },
      {
        role: "bot",
        content:
          "¡Hola! Soy tu coach de carrera de EcosueloLab. Te ayudo a desarrollar tu potencial profesional. ¿En qué área te gustaría enfocar tu crecimiento?",
      },
      { role: "user", content: "Quiero mejorar mis habilidades de liderazgo" },
      {
        role: "bot",
        content:
          "Excelente elección. El liderazgo es fundamental para el crecimiento profesional. Te recomiendo comenzar con nuestro programa de desarrollo de liderazgo que incluye:",
      },
      {
        role: "bot",
        content:
          "• Comunicación efectiva\n• Gestión de equipos\n• Toma de decisiones estratégicas\n• Inteligencia emocional",
      },
    ],
  },
  {
    id: "carrera",
    title: "Despega tu Carrera",
    description: "Professional career acceleration platform",
    gradient: "from-blue-500 to-indigo-600",
    messages: [
      { role: "user", content: "I want to transition to a tech career" },
      {
        role: "bot",
        content:
          "Great choice! Tech offers amazing opportunities. I'm here to help you navigate this transition successfully. What's your current background?",
      },
      { role: "user", content: "I have a marketing background but I'm interested in product management" },
      {
        role: "bot",
        content:
          "Perfect! Your marketing experience is actually valuable for product management. Here's your personalized roadmap:",
      },
      {
        role: "bot",
        content:
          "1. Learn product fundamentals\n2. Build a portfolio with case studies\n3. Network with product managers\n4. Apply to entry-level PM roles\n\nI'll guide you through each step!",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    description: "AI-powered language learning and pronunciation",
    gradient: "from-purple-500 to-pink-600",
    messages: [
      { role: "user", content: "I want to improve my English pronunciation" },
      {
        role: "bot",
        content:
          "Welcome to ParrotfyIA! I'm your AI pronunciation coach. Let's work on perfecting your English pronunciation. What specific sounds do you find challenging?",
      },
      { role: "user", content: "I have trouble with the 'th' sound" },
      {
        role: "bot",
        content:
          "The 'th' sound is tricky for many learners! Let's practice together. Try saying 'think' - place your tongue between your teeth and blow air gently.",
      },
      {
        role: "bot",
        content:
          "🎯 Practice words: think, thank, three, through\n🔊 Listen and repeat after me\n📊 I'll analyze your pronunciation in real-time!",
      },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<(typeof useCases)[0]["messages"]>([])

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
    setCurrentMessageIndex(0)
    setDisplayedMessages([currentUseCase.messages[0]])

    return () => clearInterval(interval)
  }, [activeTab])

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Real AI Agents in Action</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how our platform powers diverse AI agents across different industries and use cases.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
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
                <Card className="overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`} />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                        <p className="text-gray-600">{useCase.description}</p>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        Live Demo
                      </Badge>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 h-80 overflow-y-auto">
                      <div className="space-y-4">
                        {displayedMessages.map((message, index) => (
                          <div
                            key={index}
                            className={`flex items-start gap-3 ${
                              message.role === "user" ? "justify-end" : "justify-start"
                            }`}
                          >
                            {message.role === "bot" && (
                              <div
                                className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${useCase.gradient}`}
                              >
                                <Bot className="h-4 w-4 text-white" />
                              </div>
                            )}
                            <div
                              className={`max-w-xs rounded-lg px-4 py-2 ${
                                message.role === "user"
                                  ? "bg-blue-500 text-white"
                                  : "bg-white text-gray-900 shadow-sm border"
                              }`}
                            >
                              <p className="text-sm whitespace-pre-line">{message.content}</p>
                            </div>
                            {message.role === "user" && (
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
                                <User className="h-4 w-4 text-gray-600" />
                              </div>
                            )}
                          </div>
                        ))}
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
