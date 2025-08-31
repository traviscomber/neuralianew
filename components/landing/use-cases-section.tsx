"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  GraduationCap,
  MessageSquare,
  Globe,
  TrendingUp,
  CheckCircle,
  Zap,
  Send,
  Bot,
  User,
  ArrowRight,
  BarChart3,
  Target,
  Award,
} from "lucide-react"

const successCases = {
  ecosuelo: {
    name: "EcosueloLab",
    tagline: "Coaching de Carrera Inteligente",
    description: "Plataforma de coaching profesional que conecta talento con oportunidades usando IA empática",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    icon: GraduationCap,
    metrics: {
      users: "15,000+",
      success: "94%",
      placements: "2,300+",
      satisfaction: "4.9/5",
    },
    features: [
      "Evaluación personalizada de habilidades",
      "Preparación para entrevistas con IA",
      "Análisis de mercado laboral en tiempo real",
      "Matching inteligente con oportunidades",
      "Coaching emocional y motivacional",
    ],
    chatMessages: [
      {
        role: "assistant",
        content:
          "¡Hola! 👋 Soy tu coach de carrera de EcosueloLab. Estoy aquí para ayudarte a despegar tu carrera profesional. ¿En qué área te gustaría crecer?",
        timestamp: "10:00",
      },
      {
        role: "user",
        content: "Hola, me siento estancado en mi trabajo actual y no sé cómo avanzar",
        timestamp: "10:01",
      },
      {
        role: "assistant",
        content:
          "Entiendo perfectamente esa sensación 💪 Es muy común y el primer paso es reconocerlo. Cuéntame, ¿qué es lo que más te apasiona de tu trabajo actual? Y ¿hay alguna área específica donde sientes que podrías brillar más?",
        timestamp: "10:01",
      },
      {
        role: "user",
        content: "Me gusta mucho el análisis de datos, pero siento que no tengo las habilidades técnicas suficientes",
        timestamp: "10:02",
      },
      {
        role: "assistant",
        content:
          "¡Excelente! 📊 El análisis de datos es un campo increíblemente demandado. He analizado tu perfil y veo gran potencial. Te propongo un plan personalizado:\n\n✅ Evaluación de habilidades actuales\n✅ Roadmap de aprendizaje específico\n✅ Proyectos prácticos para tu portafolio\n✅ Conexiones con empresas que buscan tu perfil\n\n¿Te parece si empezamos con una evaluación rápida?",
        timestamp: "10:03",
      },
    ],
  },
  despega: {
    name: "Despega Tu Carrera",
    tagline: "Impulso Profesional Personalizado",
    description: "Programa intensivo de desarrollo profesional con IA que entiende tus metas y personalidad",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    icon: TrendingUp,
    metrics: {
      users: "8,500+",
      growth: "+156%",
      promotions: "1,800+",
      satisfaction: "4.8/5",
    },
    features: [
      "Plan de carrera personalizado con IA",
      "Mentoring virtual 24/7",
      "Simulación de entrevistas avanzadas",
      "Network building inteligente",
      "Seguimiento de progreso en tiempo real",
    ],
    chatMessages: [
      {
        role: "assistant",
        content:
          "¡Bienvenido a Despega Tu Carrera! 🚀 Soy tu mentor de crecimiento profesional. Estoy aquí para ayudarte a alcanzar tus metas más ambiciosas. ¿Cuál es tu objetivo profesional principal?",
        timestamp: "14:30",
      },
      {
        role: "user",
        content: "Quiero conseguir una promoción a gerente en los próximos 6 meses",
        timestamp: "14:31",
      },
      {
        role: "assistant",
        content:
          "¡Me encanta tu ambición! 🎯 Una promoción a gerente en 6 meses es totalmente alcanzable con la estrategia correcta. Primero, cuéntame: ¿qué posición tienes actualmente y qué habilidades de liderazgo has desarrollado hasta ahora?",
        timestamp: "14:31",
      },
      {
        role: "user",
        content: "Soy analista senior, lidero algunos proyectos pequeños pero nunca he manejado un equipo grande",
        timestamp: "14:32",
      },
      {
        role: "assistant",
        content:
          "Perfecto, tienes una base sólida 💼 He creado un plan estratégico para ti:\n\n🎯 **Mes 1-2**: Desarrollo de habilidades de liderazgo\n🎯 **Mes 3-4**: Proyectos de alto impacto y visibilidad\n🎯 **Mes 5-6**: Preparación para la conversación de promoción\n\nIncluye: simulaciones de liderazgo, feedback 360°, y networking estratégico. ¿Empezamos con tu perfil de liderazgo?",
        timestamp: "14:33",
      },
    ],
  },
  parrotfy: {
    name: "ParrotfyIA",
    tagline: "Domina Idiomas Naturalmente",
    description: "Plataforma de aprendizaje de idiomas con IA conversacional que se adapta a tu ritmo y estilo",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    icon: Globe,
    metrics: {
      users: "28,000+",
      retention: "87%",
      fluency: "+65%",
      satisfaction: "4.9/5",
    },
    features: [
      "Conversaciones naturales con IA nativa",
      "Corrección de pronunciación en tiempo real",
      "Inmersión cultural contextual",
      "Gamificación adaptativa",
      "Certificaciones internacionales",
    ],
    chatMessages: [
      {
        role: "assistant",
        content:
          "Hello! 👋 Welcome to ParrotfyIA! I'm your personal language learning companion. I can help you practice English in a natural, fun way. What would you like to talk about today?",
        timestamp: "16:45",
      },
      {
        role: "user",
        content: "Hi! I want to practice English for job interviews. I'm a bit nervous about it.",
        timestamp: "16:46",
      },
      {
        role: "assistant",
        content:
          "That's fantastic! 🌟 Job interview practice is one of my specialties. I totally understand the nerves - it's completely normal! Let's start with something comfortable. Can you tell me about your current job or the position you're applying for? Don't worry about perfect grammar, just speak naturally! 😊",
        timestamp: "16:46",
      },
      {
        role: "user",
        content: "I work in marketing, but I want to apply for a digital marketing manager position",
        timestamp: "16:47",
      },
      {
        role: "assistant",
        content:
          'Excellent! 🎯 Digital marketing is such an exciting field! Your English is already quite good, by the way. Let me ask you a common interview question: "What digital marketing strategies have you found most effective in your current role?" \n\nTake your time, and remember - I\'m here to help you sound confident and natural! 💪',
        timestamp: "16:47",
      },
    ],
  },
}

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const currentCase = successCases[activeTab as keyof typeof successCases]

  useEffect(() => {
    setCurrentMessageIndex(0)
  }, [activeTab])

  useEffect(() => {
    if (currentMessageIndex < currentCase.chatMessages.length - 1) {
      const timer = setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setCurrentMessageIndex((prev) => prev + 1)
          setIsTyping(false)
        }, 1000)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex, currentCase.chatMessages.length])

  return (
    <section id="success-cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200"
          >
            <Award className="w-4 h-4 mr-2" />
            Casos de Éxito Reales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Portales Neuronales
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Descubre cómo nuestros portales neuronales han transformado industrias completas con IA que entiende,
            conecta y genera resultados extraordinarios.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-14 bg-gradient-to-r from-gray-50 to-gray-100">
            <TabsTrigger
              value="ecosuelo"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white font-semibold"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              EcosueloLab
            </TabsTrigger>
            <TabsTrigger
              value="despega"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white font-semibold"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Despega Tu Carrera
            </TabsTrigger>
            <TabsTrigger
              value="parrotfy"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-violet-600 data-[state=active]:text-white font-semibold"
            >
              <Globe className="w-4 h-4 mr-2" />
              ParrotfyIA
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(successCases).map(([key, caseData]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-8"
                >
                  {/* Información del caso */}
                  <Card className={`${caseData.bgColor} border-2 border-opacity-20`}>
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${caseData.color} flex items-center justify-center shadow-lg`}
                        >
                          <caseData.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold">{caseData.name}</CardTitle>
                          <CardDescription className={`text-lg font-medium ${caseData.textColor}`}>
                            {caseData.tagline}
                          </CardDescription>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{caseData.description}</p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Métricas de éxito */}
                      <div>
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5" />
                          Métricas de Impacto
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(caseData.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-white/70 rounded-lg">
                              <div
                                className={`text-2xl font-bold bg-gradient-to-r ${caseData.color} bg-clip-text text-transparent`}
                              >
                                {value}
                              </div>
                              <div className="text-sm text-gray-600 capitalize font-medium">
                                {key === "users"
                                  ? "Usuarios"
                                  : key === "success"
                                    ? "Éxito"
                                    : key === "placements"
                                      ? "Colocaciones"
                                      : key === "satisfaction"
                                        ? "Satisfacción"
                                        : key === "growth"
                                          ? "Crecimiento"
                                          : key === "promotions"
                                            ? "Promociones"
                                            : key === "retention"
                                              ? "Retención"
                                              : key === "fluency"
                                                ? "Fluidez"
                                                : key}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Características principales */}
                      <div>
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5" />
                          Características Clave
                        </h4>
                        <ul className="space-y-3">
                          {caseData.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className={`w-5 h-5 mt-0.5 ${caseData.textColor} flex-shrink-0`} />
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        className={`w-full bg-gradient-to-r ${caseData.color} hover:opacity-90 text-white font-semibold py-3`}
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Explorar {caseData.name}
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Chat demo */}
                  <Card className="bg-white shadow-xl border-2">
                    <CardHeader className={`${caseData.bgColor} border-b`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-r ${caseData.color} flex items-center justify-center`}
                        >
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Portal Neuronal - {caseData.name}</CardTitle>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600">En línea</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="h-96 overflow-y-auto p-4 space-y-4">
                        {caseData.chatMessages.slice(0, currentMessageIndex + 1).map((message, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div className={`max-w-[80%] ${message.role === "user" ? "order-2" : "order-1"}`}>
                              <div
                                className={`flex items-end gap-2 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                              >
                                <div
                                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                    message.role === "user" ? "bg-gray-200" : `bg-gradient-to-r ${caseData.color}`
                                  }`}
                                >
                                  {message.role === "user" ? (
                                    <User className="w-4 h-4 text-gray-600" />
                                  ) : (
                                    <Bot className="w-4 h-4 text-white" />
                                  )}
                                </div>
                                <div
                                  className={`px-4 py-3 rounded-2xl ${
                                    message.role === "user"
                                      ? "bg-gray-100 text-gray-800"
                                      : `bg-gradient-to-r ${caseData.color} text-white`
                                  } shadow-sm`}
                                >
                                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                                  <span
                                    className={`text-xs mt-1 block ${
                                      message.role === "user" ? "text-gray-500" : "text-white/70"
                                    }`}
                                  >
                                    {message.timestamp}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}

                        {isTyping && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                            <div className="flex items-end gap-2">
                              <div
                                className={`w-8 h-8 rounded-full bg-gradient-to-r ${caseData.color} flex items-center justify-center`}
                              >
                                <Bot className="w-4 h-4 text-white" />
                              </div>
                              <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                  <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                  ></div>
                                  <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      <div className="p-4 border-t bg-gray-50">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                            disabled
                          />
                          <Button size="sm" className={`rounded-full bg-gradient-to-r ${caseData.color}`} disabled>
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                          Demo interactivo - Los mensajes se muestran automáticamente
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 border-2 border-purple-100">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ¿Listo para tu Portal Neuronal?
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Únete a miles de empresas que han transformado su experiencia de usuario con IA que verdaderamente
                entiende, conecta y genera resultados extraordinarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Crear Mi Portal Neuronal
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold px-8 bg-transparent"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ver Demo Personalizada
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
