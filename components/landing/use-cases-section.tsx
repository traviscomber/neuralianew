"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Leaf, GraduationCap, MessageSquare } from "lucide-react"

const useCases = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    subtitle: "Análisis de Suelos con IA",
    icon: Leaf,
    color: "emerald",
    gradient: "from-emerald-500 to-green-600",
    bgGradient: "from-emerald-50 to-green-50",
    messages: [
      { sender: "user", text: "Hola, necesito analizar mi suelo para cultivo de tomates" },
      {
        sender: "bot",
        text: "¡Perfecto! Te ayudo con el análisis de suelo para tomates. ¿Podrías enviarme una foto del área de cultivo?",
      },
      { sender: "user", text: "📸 [Imagen del terreno]" },
      {
        sender: "bot",
        text: "Excelente. Veo que es un suelo arcilloso. Para tomates recomiendo: pH 6.0-6.8, drenaje mejorado y materia orgánica. ¿Quieres el análisis completo?",
      },
      { sender: "user", text: "Sí, por favor" },
      {
        sender: "bot",
        text: "📊 Análisis EcosueloLab:\n• Tipo: Arcilloso\n• pH recomendado: 6.2-6.5\n• Nutrientes: Agregar compost\n• Drenaje: Instalar surcos\n• Mejor época: Primavera",
      },
    ],
  },
  {
    id: "carrera",
    title: "Despega tu Carrera",
    subtitle: "Coaching Profesional IA",
    icon: GraduationCap,
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    messages: [
      { sender: "user", text: "Hola, quiero cambiar de carrera pero no sé por dónde empezar" },
      {
        sender: "bot",
        text: "¡Hola! Me alegra que quieras dar este paso. Soy tu coach de carrera IA. ¿Qué área te interesa explorar?",
      },
      { sender: "user", text: "Me gusta la tecnología, pero trabajo en marketing" },
      {
        sender: "bot",
        text: "Perfecto, hay muchas oportunidades en la intersección de marketing y tecnología. ¿Has considerado Marketing Digital, UX/UI, o Product Management?",
      },
      { sender: "user", text: "UX/UI me llama la atención" },
      {
        sender: "bot",
        text: "¡Excelente elección! UX/UI tiene gran demanda. Te recomiendo:\n\n🎯 Plan de transición:\n• Curso de Figma (2 semanas)\n• Portfolio con 3 proyectos\n• Networking en LinkedIn\n• Aplicar a roles junior en 3 meses",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    subtitle: "Asistente de Idiomas IA",
    icon: MessageSquare,
    color: "purple",
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50",
    messages: [
      { sender: "user", text: "Hi! I want to practice my English conversation skills" },
      {
        sender: "bot",
        text: "Hello! I'm ParrotfyIA, your AI language assistant. I'd love to help you practice English! What topics interest you?",
      },
      { sender: "user", text: "I'm preparing for a job interview" },
      {
        sender: "bot",
        text: "Great! Job interview practice is very important. Let's start with a common question: 'Tell me about yourself.' Try answering, and I'll give you feedback!",
      },
      { sender: "user", text: "I am software developer with 3 years experience in React and Node.js" },
      {
        sender: "bot",
        text: "Good start! Here's my feedback:\n\n✅ Clear and concise\n💡 Suggestion: Add 'I am A software developer' and mention a specific achievement\n\n🎯 Try: 'I am a software developer with 3 years of experience in React and Node.js. I recently led a team project that increased app performance by 40%.'",
      },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const currentUseCase = useCases.find((uc) => uc.id === activeTab)
    if (!currentUseCase) return

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev < currentUseCase.messages.length - 1) {
          setIsTyping(true)
          setTimeout(() => setIsTyping(false), 1000)
          return prev + 1
        } else {
          // Reset to start
          setTimeout(() => {
            setCurrentMessageIndex(0)
          }, 2000)
          return prev
        }
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [activeTab])

  // Reset message index when tab changes
  useEffect(() => {
    setCurrentMessageIndex(0)
  }, [activeTab])

  const currentUseCase = useCases.find((uc) => uc.id === activeTab)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            Casos de Uso Reales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Agentes IA en
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Acción Real
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestros agentes IA están transformando diferentes industrias con conversaciones inteligentes
            y soluciones automatizadas.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-xl">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.id}
                value={useCase.id}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === useCase.id
                    ? `bg-gradient-to-r ${useCase.gradient} text-white shadow-lg`
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <useCase.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{useCase.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Info Card */}
                <Card className={`bg-gradient-to-br ${useCase.bgGradient} border-0 shadow-xl`}>
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${useCase.gradient} text-white shadow-lg`}>
                        <useCase.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900">{useCase.title}</CardTitle>
                        <p className="text-gray-600 font-medium">{useCase.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {useCase.id === "ecosuelo" && (
                      <div className="space-y-3">
                        <p className="text-gray-700 leading-relaxed">
                          Agente especializado en análisis de suelos que ayuda a agricultores y jardineros a optimizar
                          sus cultivos mediante IA.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/70 rounded-lg p-3">
                            <div className="font-semibold text-emerald-700">Análisis IA</div>
                            <div className="text-sm text-gray-600">Suelos y nutrientes</div>
                          </div>
                          <div className="bg-white/70 rounded-lg p-3">
                            <div className="font-semibold text-emerald-700">Recomendaciones</div>
                            <div className="text-sm text-gray-600">Personalizadas</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {useCase.id === "carrera" && (
                      <div className="space-y-3">
                        <p className="text-gray-700 leading-relaxed">
                          Coach profesional IA que guía a personas en transiciones de carrera y desarrollo profesional
                          con planes personalizados.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/70 rounded-lg p-3">
                            <div className="font-semibold text-blue-700">Coaching IA</div>
                            <div className="text-sm text-gray-600">Personalizado</div>
                          </div>
                          <div className="bg-white/70 rounded-lg p-3">
                            <div className="font-semibold text-blue-700">Plan de Carrera</div>
                            <div className="text-sm text-gray-600">Paso a paso</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {useCase.id === "parrotfy" && (
                      <div className="space-y-3">
                        <p className="text-gray-700 leading-relaxed">
                          Asistente de idiomas IA que mejora habilidades conversacionales con práctica interactiva y
                          retroalimentación instantánea.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/70 rounded-lg p-3">
                            <div className="font-semibold text-purple-700">Conversación IA</div>
                            <div className="text-sm text-gray-600">Tiempo real</div>
                          </div>
                          <div className="bg-white/70 rounded-lg p-3">
                            <div className="font-semibold text-purple-700">Feedback</div>
                            <div className="text-sm text-gray-600">Instantáneo</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Chat Demo */}
                <Card className="shadow-xl border-0 bg-white">
                  <CardHeader className="border-b bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${useCase.gradient}`}></div>
                      <div className="font-semibold text-gray-900">{useCase.title}</div>
                      <Badge variant="secondary" className="ml-auto">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        En vivo
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-96 overflow-y-auto p-4 space-y-4">
                      {currentUseCase?.messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                              message.sender === "user"
                                ? "bg-gray-200 text-gray-900"
                                : `bg-gradient-to-r ${useCase.gradient} text-white`
                            } ${index === currentMessageIndex ? "animate-pulse" : ""}`}
                          >
                            <p className="text-sm whitespace-pre-line">{message.text}</p>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className={`bg-gradient-to-r ${useCase.gradient} text-white px-4 py-2 rounded-2xl`}>
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
