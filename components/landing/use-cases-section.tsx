"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Send, User, Bot } from "lucide-react"

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [messages, setMessages] = useState<{
    [key: string]: Array<{ id: string; text: string; sender: "user" | "bot"; timestamp: Date }>
  }>({
    ecosuelo: [],
    carrera: [],
    parrotfy: [],
  })
  const [isTyping, setIsTyping] = useState<{ [key: string]: boolean }>({
    ecosuelo: false,
    carrera: false,
    parrotfy: false,
  })

  const useCases = {
    ecosuelo: {
      title: "EcosueloLab",
      subtitle: "Análisis de Suelos con IA",
      description:
        "Agente especializado en análisis de suelos agrícolas que proporciona recomendaciones personalizadas para optimizar cultivos",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      conversation: [
        { text: "¡Hola! Soy EcosueloBot 🌱 ¿En qué puedo ayudarte con tu análisis de suelos?", sender: "bot" as const },
        {
          text: "Necesito analizar el suelo de mi campo de maíz. Los resultados muestran pH 6.2 y baja materia orgánica",
          sender: "user" as const,
        },
        {
          text: "Perfecto! Con pH 6.2 estás en un rango bueno para maíz. Para la materia orgánica baja, te recomiendo:\n\n🌾 Incorporar compost orgánico (2-3 ton/ha)\n🍂 Cultivos de cobertura en rotación\n📊 Análisis de micronutrientes\n\n¿Qué superficie vas a trabajar?",
          sender: "bot" as const,
        },
        { text: "Son 15 hectáreas. ¿Cuánto me costaría el tratamiento?", sender: "user" as const },
        {
          text: "Para 15 hectáreas necesitarías:\n\n💰 Compost: $45,000 - $67,500\n🌱 Semillas cobertura: $15,000\n⚗️ Análisis adicional: $8,500\n\n📈 ROI esperado: 25-35% en primera cosecha\n🎯 ¿Te interesa un plan personalizado?",
          sender: "bot" as const,
        },
      ],
    },
    carrera: {
      title: "Despega tu Carrera",
      subtitle: "Coaching Profesional IA",
      description:
        "Agente de coaching profesional que guía a usuarios en su desarrollo de carrera y búsqueda de empleo",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      conversation: [
        {
          text: "¡Hola! Soy tu Coach de Carrera IA 🚀 Estoy aquí para ayudarte a impulsar tu desarrollo profesional",
          sender: "bot" as const,
        },
        {
          text: "Hola, soy ingeniero en sistemas con 3 años de experiencia pero siento que mi carrera está estancada",
          sender: "user" as const,
        },
        {
          text: "Entiendo perfectamente esa sensación. Es muy común a los 3 años de experiencia. Vamos a trabajar juntos para desbloquearte 💪\n\n¿Podrías contarme:\n🎯 ¿Cuál es tu rol actual?\n📈 ¿Qué tipo de crecimiento buscas?\n💡 ¿Hay alguna tecnología que te emocione?",
          sender: "bot" as const,
        },
        {
          text: "Trabajo como desarrollador full-stack en una startup. Me gustaría liderar proyectos y el área de machine learning me llama mucho la atención",
          sender: "user" as const,
        },
        {
          text: "¡Excelente combinación! Full-stack + ML es muy demandado 🔥\n\nTe propongo este roadmap:\n\n🎓 **Próximos 3 meses:**\n- Curso de ML fundamentals\n- Proyecto personal con ML\n- Proponer iniciativa ML en tu startup\n\n👥 **Liderazgo:**\n- Mentoría a junior developers\n- Liderar feature completa\n\n¿Por cuál empezarías?",
          sender: "bot" as const,
        },
      ],
    },
    parrotfy: {
      title: "ParrotfyIA",
      subtitle: "Aprendizaje de Idiomas IA",
      description:
        "Agente conversacional para práctica de idiomas con corrección en tiempo real y ejercicios personalizados",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      conversation: [
        {
          text: "Hello! I'm ParrotfyIA 🦜 Your AI language learning companion. Ready to practice English?",
          sender: "bot" as const,
        },
        {
          text: "Hi! Yes, I want to practice my English. I'm preparing for a job interview next week",
          sender: "user" as const,
        },
        {
          text: "Perfect! Job interview practice is one of my specialties 💼\n\nLet's start with some common questions. I'll give you feedback on:\n✅ Grammar & vocabulary\n🗣️ Pronunciation tips\n💡 Professional expressions\n\nTell me: What position are you applying for?",
          sender: "bot" as const,
        },
        { text: "I'm applying for a marketing manager position at a tech company", sender: "user" as const },
        {
          text: "Excellent! Let's practice 🎯\n\n**Mock Interview Question:**\n\"Tell me about a successful marketing campaign you've led and what made it effective.\"\n\n💡 **Tips before you answer:**\n- Use the STAR method (Situation, Task, Action, Result)\n- Include specific metrics\n- Show leadership skills\n\nGo ahead, I'm listening! 🎤",
          sender: "bot" as const,
        },
      ],
    },
  }

  const simulateConversation = (tabKey: string) => {
    const conversation = useCases[tabKey as keyof typeof useCases].conversation
    setMessages((prev) => ({ ...prev, [tabKey]: [] }))

    conversation.forEach((msg, index) => {
      setTimeout(() => {
        if (msg.sender === "bot") {
          setIsTyping((prev) => ({ ...prev, [tabKey]: true }))
          setTimeout(() => {
            setMessages((prev) => ({
              ...prev,
              [tabKey]: [
                ...prev[tabKey],
                {
                  id: `${tabKey}-${index}`,
                  text: msg.text,
                  sender: msg.sender,
                  timestamp: new Date(),
                },
              ],
            }))
            setIsTyping((prev) => ({ ...prev, [tabKey]: false }))
          }, 1500)
        } else {
          setMessages((prev) => ({
            ...prev,
            [tabKey]: [
              ...prev[tabKey],
              {
                id: `${tabKey}-${index}`,
                text: msg.text,
                sender: msg.sender,
                timestamp: new Date(),
              },
            ],
          }))
        }
      }, index * 3000)
    })
  }

  useEffect(() => {
    simulateConversation(activeTab)
  }, [activeTab])

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Casos de Uso</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Agentes IA en acción</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descubre cómo nuestros agentes IA están transformando diferentes industrias con conversaciones reales
          </p>
        </div>

        <div className="mt-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="ecosuelo"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white"
              >
                EcosueloLab
              </TabsTrigger>
              <TabsTrigger
                value="carrera"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
              >
                Despega tu Carrera
              </TabsTrigger>
              <TabsTrigger
                value="parrotfy"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white"
              >
                ParrotfyIA
              </TabsTrigger>
            </TabsList>

            {Object.entries(useCases).map(([key, useCase]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className={`${useCase.bgColor} ${useCase.borderColor} border-2`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${useCase.color}`} />
                        <Badge className={`bg-gradient-to-r ${useCase.color} text-white`}>En vivo</Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{useCase.subtitle}</p>
                      <p className="text-gray-700">{useCase.description}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-0">
                      <div className={`bg-gradient-to-r ${useCase.color} p-4 text-white`}>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5" />
                          <span className="font-semibold">Chat en vivo</span>
                          <div className="ml-auto flex items-center gap-1">
                            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-sm">Conectado</span>
                          </div>
                        </div>
                      </div>

                      <div className="h-96 overflow-y-auto p-4 space-y-4">
                        {messages[key]?.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`flex items-start gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                            >
                              <div
                                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                                  message.sender === "user" ? "bg-gray-200" : `bg-gradient-to-r ${useCase.color}`
                                }`}
                              >
                                {message.sender === "user" ? (
                                  <User className="h-4 w-4 text-gray-600" />
                                ) : (
                                  <Bot className="h-4 w-4 text-white" />
                                )}
                              </div>
                              <div
                                className={`rounded-lg p-3 ${
                                  message.sender === "user"
                                    ? "bg-gray-100 text-gray-900"
                                    : "bg-white border shadow-sm text-gray-900"
                                }`}
                              >
                                <p className="text-sm whitespace-pre-line">{message.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}

                        {isTyping[key] && (
                          <div className="flex justify-start">
                            <div className="flex items-start gap-2">
                              <div
                                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r ${useCase.color}`}
                              >
                                <Bot className="h-4 w-4 text-white" />
                              </div>
                              <div className="bg-white border shadow-sm rounded-lg p-3">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                  <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                  />
                                  <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="border-t p-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <input
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            className="flex-1 p-2 border rounded-lg text-sm"
                            disabled
                          />
                          <button className="p-2 text-gray-400" disabled>
                            <Send className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                          Demo en vivo - Los mensajes se generan automáticamente
                        </p>
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
