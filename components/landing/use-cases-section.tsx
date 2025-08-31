"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Sprout,
  MessageSquare,
  Settings,
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
  MessageCircle,
  Smartphone,
  Users,
  Receipt,
} from "lucide-react"

const successCases = {
  ecosuelo: {
    name: "EcosueloLab",
    tagline: "Análisis de Suelo Inteligente",
    description: "Se conecta a tus datos de suelo y te envía análisis claros por WhatsApp",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    icon: Sprout,
    metrics: {
      status: "Entregado",
      focus: "Agricultura",
      integration: "API + WhatsApp",
      availability: "Funcionando",
    },
    features: [
      "Se conecta a tus sistemas de análisis de suelo",
      "Habla contigo sobre nitrógeno y nutrientes",
      "Envía reportes automáticos por WhatsApp",
      "Te da recomendaciones técnicas claras",
      "Hace seguimiento de tus cultivos",
    ],
    chatMessages: [
      {
        role: "assistant",
        content: "¡Hola! 🌱 Soy EcosueloBot. Tengo acceso a los datos de tus potreros. ¿Cuál revisamos hoy?",
        timestamp: "08:30",
      },
      {
        role: "user",
        content: "El potrero norte, las plantas están amarillas desde hace una semana",
        timestamp: "08:31",
      },
      {
        role: "assistant",
        content:
          "Revisando datos de suelo... 📊\n\n**Potrero Norte (12 hectáreas)**:\n• Nitrógeno: 15 ppm (MUY BAJO)\n• pH: 6.2 (Perfecto)\n• Humedad: 45% (Buena)\n\nEl amarillo es por falta de nitrógeno. ¿Quieres el plan para solucionarlo?",
        timestamp: "08:31",
      },
      {
        role: "user",
        content: "Sí, y envíamelo por WhatsApp para mi equipo",
        timestamp: "08:32",
      },
      {
        role: "assistant",
        content:
          "¡Perfecto! 📱 Preparando plan completo:\n\n**Plan de Fertilización**:\n• Aplicar 120 kg/ha de urea (46% N)\n• Primera aplicación: 70% ahora\n• Segunda aplicación: 30% en 15 días\n• Riego ligero después\n\n¿Confirmas tu WhatsApp para enviar el reporte completo?",
        timestamp: "08:33",
      },
      {
        role: "user",
        content: "Sí, +56 9 1234 5678. Incluye costos por favor",
        timestamp: "08:34",
      },
      {
        role: "assistant",
        content:
          "✅ **Reporte enviado por WhatsApp**\n\nIncluye:\n• Plan paso a paso\n• Cronograma detallado\n• Costo total: $180.000 CLP\n• Mapa del potrero\n• Contactos de proveedores\n\n📅 Te recordaré revisar en 21 días. ¡Tu potrero se va a recuperar!",
        timestamp: "08:35",
      },
    ],
  },
  despega: {
    name: "Despega Tu Carrera",
    tagline: "Tu Coach Personal",
    description: "Tu mentor que entiende tus metas y te guía paso a paso",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    icon: TrendingUp,
    metrics: {
      status: "Entregado",
      focus: "Desarrollo profesional",
      type: "Coach personal",
      availability: "Funcionando",
    },
    features: [
      "Plan de carrera hecho para ti",
      "Mentoring 24/7 cuando lo necesites",
      "Estrategias que realmente funcionan",
      "Seguimiento de tu progreso",
      "Consejos específicos para tu industria",
    ],
    chatMessages: [
      {
        role: "assistant",
        content:
          "¡Hola! 🚀 Soy tu coach personal. Estoy aquí para ayudarte a crecer profesionalmente. ¿Cuál es tu meta?",
        timestamp: "14:30",
      },
      {
        role: "user",
        content: "Quiero liderar un equipo de desarrollo, pero me falta experiencia en gestión",
        timestamp: "14:31",
      },
      {
        role: "assistant",
        content:
          "¡Qué meta tan buena! 💪 Reconocer esa área de mejora ya te pone adelante. Cuéntame:\n\n🎯 ¿Qué te emociona del liderazgo?\n🤔 ¿Has liderado proyectos antes?\n💭 ¿Cuál es tu fortaleza técnica?\n⏰ ¿En cuánto tiempo quieres lograrlo?",
        timestamp: "14:31",
      },
      {
        role: "user",
        content:
          "Me emociona mentorear y crear productos increíbles. He liderado proyectos pequeños. Soy bueno resolviendo problemas complejos. Quiero lograrlo en un año",
        timestamp: "14:32",
      },
      {
        role: "assistant",
        content:
          "¡Perfecto! Tienes bases sólidas 🌟 Tu plan de 12 meses:\n\n🎯 **Primeros 3 meses**:\n• Mentorea developers junior\n• Lidera un proyecto más grande\n• Mejora tu comunicación\n\n🎯 **Siguientes 6 meses**:\n• Curso de liderazgo técnico\n• Pide feedback constante\n• Prepárate para entrevistas\n\n¿Por dónde empezamos?",
        timestamp: "14:33",
      },
      {
        role: "user",
        content: "La mentoría me interesa. Hay juniors en mi equipo que siempre me preguntan",
        timestamp: "14:34",
      },
      {
        role: "assistant",
        content:
          "¡Excelente! Ya tienes la oportunidad perfecta 🎓\n\n**Plan de Mentoría**:\n\n📅 **Estructura**:\n• 30 minutos semanales con cada junior\n• Combina code reviews con conversación\n• Objetivos claros de aprendizaje\n• Documenta el progreso\n\n🎯 **Beneficios para ti**:\n• Desarrollas habilidades de enseñanza\n• Practicas dar feedback\n• Casos de éxito para tu CV\n\n¿Te ayudo a planificar la primera sesión?",
        timestamp: "14:35",
      },
    ],
  },
  parrotfy: {
    name: "Parrotfy",
    tagline: "Tu Asistente de Negocio",
    description: "Analiza tus clientes y facturas hablando contigo de forma natural",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    icon: Settings,
    metrics: {
      status: "Entregado",
      focus: "Análisis de negocio",
      type: "Asistente inteligente",
      integration: "Datos en tiempo real",
    },
    features: [
      "Analiza clientes y facturas de forma inteligente",
      "Identifica tus mejores clientes cada mes",
      "Descubre qué productos vender más",
      "Detecta tendencias y oportunidades",
      "Predicciones basadas en tu historial",
    ],
    chatMessages: [
      {
        role: "assistant",
        content: "¡Hola! 💼 Soy Parrotfy. Tengo acceso a todos tus datos de negocio. ¿Qué quieres descubrir hoy?",
        timestamp: "09:15",
      },
      {
        role: "user",
        content: "¿Quién es mi mejor cliente este mes?",
        timestamp: "09:16",
      },
      {
        role: "assistant",
        content:
          "Revisando todas tus facturas... 📊\n\n🏆 **Tu Mejor Cliente - Diciembre 2024**:\n• **TechCorp Solutions**: $45.000 USD\n• 12 facturas este mes\n• Creció 23% vs mes pasado\n• Margen promedio: 35% (excelente)\n\n📈 **Top 3**:\n1. TechCorp: $45.000\n2. InnovateX: $32.500\n3. DataFlow: $28.800\n\n¿Quieres saber más de TechCorp?",
        timestamp: "09:16",
      },
      {
        role: "user",
        content: "Sí, ¿qué productos le vendemos más?",
        timestamp: "09:17",
      },
      {
        role: "assistant",
        content:
          "Analizando ventas a TechCorp 🎯:\n\n💼 **Sus Productos Favoritos**:\n• **Software**: 60% ($27.000)\n  - Office Suite Pro: $15.000\n  - Herramientas Dev: $12.000\n• **Consultoría**: 25% ($11.250)\n  - Implementación: $7.500\n  - Capacitación: $3.750\n• **Soporte**: 15% ($6.750)\n\n💡 **Descubrí que**:\n• Compra más en fin de año\n• Prefiere paquetes enterprise\n• Tiene renovación automática\n\n¿Quieres ideas para venderles más?",
        timestamp: "09:18",
      },
      {
        role: "user",
        content: "Sí, y dime si hay clientes comprando menos",
        timestamp: "09:19",
      },
      {
        role: "assistant",
        content:
          "Detecté algunas señales de alerta 🚨:\n\n📉 **Clientes en Riesgo**:\n• **MegaCorp**: -40% ($18.000 → $10.800)\n  - Sin pedidos hace 45 días\n  - Cliente desde 2022 (¡cuidado!)\n• **StartupHub**: -25% ($8.000 → $6.000)\n  - Cambió de pedidos semanales a mensuales\n• **CloudTech**: -15% ($12.000 → $10.200)\n  - Redujo licencias de 50 a 42\n\n💡 **Te sugiero**:\n• Llamar a MegaCorp HOY (riesgo alto)\n• Ofrecer descuento por volumen a StartupHub\n• Revisar necesidades de CloudTech\n\n¿Genero un plan de retención?",
        timestamp: "09:20",
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
        }, 1500)
      }, 3000)
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
            Proyectos Entregados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Mira lo que hemos entregado. Cada proyecto está funcionando y diseñado para entender y conectar de verdad
            contigo.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-14 bg-gradient-to-r from-gray-50 to-gray-100">
            <TabsTrigger
              value="ecosuelo"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white font-semibold"
            >
              <Sprout className="w-4 h-4 mr-2" />
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
              <Settings className="w-4 h-4 mr-2" />
              Parrotfy
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
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">{caseData.description}</p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Estado del proyecto */}
                      <div>
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5" />
                          Estado del Proyecto
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(caseData.metrics).map(([key, value]) => (
                            <div
                              key={key}
                              className={`p-4 rounded-xl ${caseData.bgColor} ${caseData.textColor} border`}
                            >
                              <div className="text-sm font-medium text-gray-600 capitalize mb-1">
                                {key === "status"
                                  ? "Estado"
                                  : key === "focus"
                                    ? "Enfoque"
                                    : key === "type"
                                      ? "Tipo"
                                      : key === "availability"
                                        ? "Disponibilidad"
                                        : key === "integration"
                                          ? "Integración"
                                          : key}
                              </div>
                              <div className="font-bold text-gray-900">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Características principales */}
                      <div>
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          {key === "ecosuelo" ? (
                            <Smartphone className="w-5 h-5" />
                          ) : key === "parrotfy" ? (
                            <Users className="w-5 h-5" />
                          ) : (
                            <Target className="w-5 h-5" />
                          )}
                          {key === "ecosuelo"
                            ? "Capacidades Principales"
                            : key === "parrotfy"
                              ? "Análisis de Negocio"
                              : "Características Principales"}
                        </h4>
                        <ul className="space-y-3">
                          {caseData.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              {key === "ecosuelo" ? (
                                <MessageCircle className={`w-5 h-5 mt-0.5 ${caseData.textColor} flex-shrink-0`} />
                              ) : key === "parrotfy" ? (
                                <Receipt className={`w-5 h-5 mt-0.5 ${caseData.textColor} flex-shrink-0`} />
                              ) : (
                                <CheckCircle className={`w-5 h-5 mt-0.5 ${caseData.textColor} flex-shrink-0`} />
                              )}
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        className={`w-full bg-gradient-to-r ${caseData.color} hover:opacity-90 text-white font-semibold py-3`}
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Ver {caseData.name} en Acción
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
                          <CardTitle className="text-lg">{caseData.name}</CardTitle>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600">
                              {key === "ecosuelo"
                                ? "Funcionando"
                                : key === "parrotfy"
                                  ? "Analizando datos"
                                  : "Entregado"}
                            </span>
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
                            <div className={`max-w-[85%] ${message.role === "user" ? "order-2" : "order-1"}`}>
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
                          {key === "ecosuelo"
                            ? "Proyecto entregado - API de suelo + WhatsApp"
                            : key === "parrotfy"
                              ? "Proyecto entregado - Análisis ERP en tiempo real"
                              : "Proyecto entregado - Coach profesional funcionando"}
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
                  Proyectos Reales, Resultados Reales
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Estos no son demos ni prototipos. Son proyectos entregados y funcionando. Si tienes una idea, nos
                encantaría hacerla realidad contigo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Hablemos de Tu Proyecto
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold px-8 bg-transparent"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ver Más Casos
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
