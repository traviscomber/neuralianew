"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, User, Bot } from "lucide-react"

const useCases = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    description: "Career coaching and professional development platform",
    badge: "Career Coach",
    gradient: "from-emerald-500 to-teal-600",
    messages: [
      { type: "user", content: "Hola, necesito ayuda para encontrar trabajo en tecnología" },
      {
        type: "bot",
        content:
          "¡Hola! Me alegra que busques oportunidades en tecnología. Cuéntame sobre tu experiencia actual y qué tipo de rol te interesa.",
      },
      { type: "user", content: "Soy desarrollador junior con 1 año de experiencia en React" },
      {
        type: "bot",
        content:
          "Excelente base. Con React tienes muchas oportunidades. Te recomiendo enfocarte en empresas que buscan desarrolladores frontend. ¿Has trabajado con TypeScript o Next.js?",
      },
      { type: "user", content: "Un poco de TypeScript, pero no Next.js" },
      {
        type: "bot",
        content:
          "Perfecto. Te sugiero un plan: 1) Completa un proyecto con Next.js, 2) Mejora tu portfolio, 3) Practica entrevistas técnicas. ¿Te parece bien empezar por ahí?",
      },
    ],
  },
  {
    id: "despega",
    title: "Despega tu Carrera",
    description: "Professional growth and skill development assistant",
    badge: "Growth Coach",
    gradient: "from-blue-500 to-indigo-600",
    messages: [
      { type: "user", content: "Quiero hacer una transición de marketing a product management" },
      {
        type: "bot",
        content:
          "¡Excelente decisión! Tu experiencia en marketing es muy valiosa para product management. ¿Qué aspectos del marketing te han gustado más?",
      },
      { type: "user", content: "Me encanta analizar datos de usuarios y entender sus necesidades" },
      {
        type: "bot",
        content:
          "Perfecto, esas son habilidades clave en PM. Te recomiendo: 1) Aprende sobre roadmaps de producto, 2) Estudia metodologías ágiles, 3) Practica con casos de estudio. ¿Tienes experiencia con herramientas como Jira o Figma?",
      },
      { type: "user", content: "Figma sí, Jira no tanto" },
      {
        type: "bot",
        content:
          "Genial. Figma te ayudará mucho trabajando con diseñadores. Para Jira, te sugiero hacer un curso básico. También considera certificarte en Product Management. ¿Te interesa que te recomiende algunos recursos específicos?",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    description: "AI-powered language learning and pronunciation coach",
    badge: "Language Coach",
    gradient: "from-purple-500 to-pink-600",
    messages: [
      { type: "user", content: "I want to improve my English pronunciation for job interviews" },
      {
        type: "bot",
        content:
          "Great goal! Job interviews require clear, confident pronunciation. Let's start with common interview phrases. Can you tell me about your current English level?",
      },
      { type: "user", content: "I'm intermediate but struggle with 'th' sounds and word stress" },
      {
        type: "bot",
        content:
          "Those are very common challenges! For 'th' sounds, practice with words like 'think', 'this', 'through'. For word stress, let's work on interview keywords like 'experience', 'responsibility', 'achievement'. Would you like to practice some phrases now?",
      },
      { type: "user", content: "Yes, let's practice 'I have experience in project management'" },
      {
        type: "bot",
        content:
          "Perfect! Focus on: 'I have ex-PE-ri-ence in PRO-ject MA-nage-ment'. The stress is on 'PE', 'PRO', and 'MA'. Try saying it slowly first, then at normal speed. Remember to clearly pronounce the 'th' in 'the' if you add it.",
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
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Success Stories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real AI agents solving real problems
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how our platform powers intelligent agents across different industries and use cases.
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                        <Badge
                          variant="secondary"
                          className={`bg-gradient-to-r ${useCase.gradient} text-white border-0`}
                        >
                          {useCase.badge}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mt-2">{useCase.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Key Features:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {useCase.id === "ecosuelo" && (
                            <>
                              <li>• Personalized career guidance in Spanish</li>
                              <li>• Industry-specific job market insights</li>
                              <li>• Interview preparation and skill assessment</li>
                              <li>• Professional network building strategies</li>
                            </>
                          )}
                          {useCase.id === "despega" && (
                            <>
                              <li>• Career transition planning and roadmaps</li>
                              <li>• Skill gap analysis and learning paths</li>
                              <li>• Professional development coaching</li>
                              <li>• Goal setting and progress tracking</li>
                            </>
                          )}
                          {useCase.id === "parrotfy" && (
                            <>
                              <li>• AI-powered pronunciation analysis</li>
                              <li>• Real-time feedback and corrections</li>
                              <li>• Personalized learning curriculum</li>
                              <li>• Progress tracking and achievements</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Live Demo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 rounded-lg p-4 h-80 overflow-y-auto">
                        <div className="space-y-4">
                          {displayedMessages.map((message, index) => (
                            <div
                              key={index}
                              className={`flex items-start gap-3 ${
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
                                className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                                  message.type === "user" ? "bg-blue-500 text-white" : "bg-white border shadow-sm"
                                }`}
                              >
                                {message.content}
                              </div>
                              {message.type === "user" && (
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
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
