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
    tagline: "Análisis de Suelo con API y WhatsApp",
    description:
      "Portal neuronal que se conecta vía API a datos de suelo del cliente y envía análisis por WhatsApp usando Twilio",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    icon: Sprout,
    metrics: {
      status: "En desarrollo",
      focus: "Agricultura inteligente",
      integration: "API + Twilio WhatsApp",
      availability: "Demo disponible",
    },
    features: [
      "Conexión API a sistemas de análisis de suelo",
      "Análisis conversacional de nitrógeno en potreros",
      "Envío automático de reportes vía WhatsApp",
      "Integración con Twilio para mensajería",
      "Recomendaciones técnicas personalizadas",
    ],
    chatMessages: [
      {
        role: "assistant",
        content:
          "¡Hola! 🌱 Soy EcosueloBot. He accedido a los datos de tus potreros vía API. ¿Qué potrero quieres que analice hoy?",
        timestamp: "08:30",
      },
      {
        role: "user",
        content: "El potrero norte, las plantas están amarillentas desde hace una semana",
        timestamp: "08:31",
      },
      {
        role: "assistant",
        content:
          "Consultando API de análisis de suelo... 📊\n\n**Potrero Norte (12 hectáreas)**:\n• Nitrógeno: 15 ppm (BAJO)\n• pH: 6.2 (Óptimo)\n• Humedad: 45%\n\nEl amarillamiento confirma deficiencia de nitrógeno. ¿Quieres el plan de fertilización?",
        timestamp: "08:31",
      },
      {
        role: "user",
        content: "Sí, por favor. Y envíamelo por WhatsApp para compartir con mi equipo",
        timestamp: "08:32",
      },
      {
        role: "assistant",
        content:
          "¡Perfecto! 📱 Preparando reporte completo:\n\n**Plan de Fertilización**:\n• Aplicar 120 kg/ha de urea (46% N)\n• Fraccionado: 70% ahora, 30% en 15 días\n• Riego ligero post-aplicación\n• Seguimiento en 3 semanas\n\n¿Confirmas tu número de WhatsApp para enviar el reporte detallado vía Twilio?",
        timestamp: "08:33",
      },
      {
        role: "user",
        content: "Sí, es el +56 9 1234 5678. También incluye el costo estimado por favor",
        timestamp: "08:34",
      },
      {
        role: "assistant",
        content:
          "✅ **Reporte enviado a WhatsApp +56 9 1234 5678**\n\nIncluye:\n• Plan técnico detallado\n• Cronograma de aplicación\n• Costo estimado: $180.000 CLP\n• Mapa del potrero con zonas críticas\n• Contacto de proveedores recomendados\n\n📈 Programé recordatorio automático para seguimiento en 21 días. ¿Algo más que necesites?",
        timestamp: "08:35",
      },
    ],
  },
  despega: {
    name: "Despega Tu Carrera",
    tagline: "Coaching Profesional Personalizado",
    description: "Programa de desarrollo profesional con IA que entiende tus metas y te guía paso a paso",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    icon: TrendingUp,
    metrics: {
      status: "En desarrollo",
      focus: "Desarrollo profesional",
      type: "Coaching IA",
      availability: "Demo disponible",
    },
    features: [
      "Plan de carrera personalizado",
      "Mentoring conversacional 24/7",
      "Estrategias probadas de crecimiento",
      "Seguimiento de progreso",
      "Consejos específicos por industria",
    ],
    chatMessages: [
      {
        role: "assistant",
        content:
          "¡Bienvenido! 🚀 Soy tu coach de desarrollo profesional. Estoy aquí para ayudarte a alcanzar tus metas. Cuéntame, ¿cuál es esa aspiración profesional que te emociona?",
        timestamp: "14:30",
      },
      {
        role: "user",
        content:
          "Me gustaría liderar un equipo de desarrollo, pero siento que me falta experiencia en gestión de personas",
        timestamp: "14:31",
      },
      {
        role: "assistant",
        content:
          "¡Qué meta tan valiosa! 💪 Reconocer esa área de crecimiento ya te pone adelante. Cuéntame más:\n\n🎯 ¿Qué te atrae más del liderazgo técnico?\n🤔 ¿Has liderado proyectos o mentoreado a alguien?\n💭 ¿Cuál consideras tu mayor fortaleza técnica?\n⏰ ¿En qué plazo te visualizas en ese rol?",
        timestamp: "14:31",
      },
      {
        role: "user",
        content:
          "Me emociona poder mentorear y crear productos increíbles. He liderado algunos proyectos pequeños y soy bueno resolviendo problemas complejos. Me gustaría lograrlo en menos de un año",
        timestamp: "14:32",
      },
      {
        role: "assistant",
        content:
          "¡Perfecto! Tienes bases sólidas 🌟 Tu pasión por mentorear y habilidades técnicas son excelentes cimientos. Te propongo un enfoque gradual:\n\n🎯 **Primeros pasos (1-3 meses)**:\n• Buscar oportunidades de mentoría informal\n• Liderar un proyecto con más responsabilidad\n• Desarrollar habilidades de comunicación\n\n🎯 **Desarrollo (4-8 meses)**:\n• Tomar cursos de liderazgo técnico\n• Buscar feedback de tu equipo actual\n• Prepararte para entrevistas de liderazgo\n\n¿Hay algún aspecto específico en el que te gustaría enfocarte primero?",
        timestamp: "14:33",
      },
      {
        role: "user",
        content:
          "Me interesa empezar con la mentoría. Hay algunos developers junior en mi equipo que siempre me hacen preguntas",
        timestamp: "14:34",
      },
      {
        role: "assistant",
        content:
          "¡Excelente punto de partida! 🎓 Ya tienes la oportunidad perfecta. Te sugiero estructurar esa mentoría:\n\n📅 **Estructura sugerida**:\n• Sesiones regulares de 30 minutos\n• Combinar code reviews con conversación\n• Establecer objetivos claros de aprendizaje\n• Documentar el progreso de ambos\n\n🎯 **Beneficios para ti**:\n• Desarrollar habilidades de enseñanza\n• Practicar dar feedback constructivo\n• Crear casos de éxito para tu CV\n• Ganar experiencia en desarrollo de talento\n\n¿Te gustaría que te ayude a planificar la primera sesión de mentoría?",
        timestamp: "14:35",
      },
    ],
  },
  parrotfy: {
    name: "Parrotfy",
    tagline: "Asistente ERP IA",
    description: "Asistente ERP inteligente que analiza clientes, facturas y datos empresariales conversando vía API",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    icon: Settings,
    metrics: {
      status: "En desarrollo",
      focus: "Análisis empresarial",
      type: "Asistente ERP IA",
      integration: "Conexión API",
    },
    features: [
      "Análisis inteligente de clientes y facturas",
      "Identificación de mejores clientes por período",
      "Análisis de productos más vendidos por cliente",
      "Reportes de tendencias de ventas",
      "Predicciones basadas en datos históricos",
    ],
    chatMessages: [
      {
        role: "assistant",
        content:
          "¡Hola! 👋 Soy Parrotfy, tu asistente ERP IA. Me conecto vía API a tu sistema empresarial para analizar clientes, facturas y datos de negocio. ¿Qué análisis necesitas hoy? ⚙️",
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
          "Analizando facturas vía API... 📊\n\n🏆 **Mejor Cliente de Diciembre 2024**:\n• **TechCorp Solutions**: $45.000 USD\n• 12 facturas procesadas\n• Crecimiento del 23% vs mes anterior\n• Margen promedio: 35%\n\n📈 **Comparación Top 3**:\n1. TechCorp: $45.000\n2. InnovateX: $32.500  \n3. DataFlow: $28.800\n\n¿Quieres detalles específicos de algún cliente?",
        timestamp: "09:16",
      },
      {
        role: "user",
        content: "Sí, dime qué productos le vendemos más a TechCorp",
        timestamp: "09:17",
      },
      {
        role: "assistant",
        content:
          "Perfecto, analizando facturas de TechCorp vía API 🎯:\n\n💼 **Productos más vendidos a TechCorp**:\n• **Software Licenses**: 60% ($27.000)\n  - Office Suite Pro: $15.000\n  - Development Tools: $12.000\n• **Consultoría**: 25% ($11.250)\n  - Implementación: $7.500\n  - Training: $3.750\n• **Soporte Técnico**: 15% ($6.750)\n  - Premium Support: $6.750\n\n📊 **Insights**:\n• Mayor demanda en Q4\n• Prefieren paquetes enterprise\n• Renovación automática activada\n\n¿Te interesa una estrategia para aumentar ventas con ellos?",
        timestamp: "09:18",
      },
      {
        role: "user",
        content: "Sí, y también dime si hay clientes que están comprando menos últimamente",
        timestamp: "09:19",
      },
      {
        role: "assistant",
        content:
          "Excelente pregunta. Analizando tendencias vía API 📉:\n\n🚨 **Clientes con Reducción de Compras**:\n• **MegaCorp**: -40% ($18.000 → $10.800)\n  - Último pedido: hace 45 días\n  - Historial: cliente desde 2022\n• **StartupHub**: -25% ($8.000 → $6.000)\n  - Cambió a pedidos mensuales vs semanales\n• **CloudTech**: -15% ($12.000 → $10.200)\n  - Redujo licencias de 50 a 42\n\n💡 **Estrategias sugeridas**:\n• Contactar MegaCorp (riesgo alto)\n• Ofrecer descuentos por volumen a StartupHub\n• Revisar necesidades actuales de CloudTech\n\n¿Quieres que genere un plan de retención específico?",
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
            Proyectos en Desarrollo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Explora los portales neuronales que estamos desarrollando. Cada uno diseñado para entender y conectar
            emocionalmente con usuarios específicos.
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
                            ? "Capacidades API + WhatsApp"
                            : key === "parrotfy"
                              ? "Análisis de Clientes y Facturas"
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
                        Probar Demo de {caseData.name}
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
                            <span className="text-sm text-gray-600">
                              {key === "ecosuelo"
                                ? "API + WhatsApp activo"
                                : key === "parrotfy"
                                  ? "Analizando facturas vía API"
                                  : "Demo interactivo"}
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
                            ? "Demo API + WhatsApp - Simulación de integración Twilio"
                            : key === "parrotfy"
                              ? "Demo Análisis de Facturas - Simulación de conexión API"
                              : "Demo automático - Los mensajes se muestran progresivamente"}
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
                  ¿Interesado en un Portal Neuronal?
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Estamos desarrollando IA conversacional que entiende, conecta y genera valor real. Si tienes un proyecto
                en mente, nos encantaría conocer tu visión.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Explorar Colaboración
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold px-8 bg-transparent"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ver Demos Disponibles
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
