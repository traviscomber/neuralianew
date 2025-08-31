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
} from "lucide-react"

const successCases = {
  ecosuelo: {
    name: "EcosueloLab",
    tagline: "Análisis Inteligente de Suelo Agrícola",
    description: "Plataforma de análisis de nitrógeno en el suelo que optimiza la agricultura con IA especializada",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    icon: Sprout,
    metrics: {
      farmers: "3,200+",
      accuracy: "96%",
      yield: "+34%",
      satisfaction: "4.8/5",
    },
    features: [
      "Análisis de nitrógeno en tiempo real",
      "Recomendaciones de fertilización personalizadas",
      "Predicción de rendimiento de cultivos",
      "Monitoreo de salud del suelo",
      "Optimización de recursos agrícolas",
    ],
    chatMessages: [
      {
        role: "assistant",
        content:
          "¡Hola! 🌱 Soy EcosueloBot de ecosuelobot.vercel.app. Te ayudo a analizar el nitrógeno en tu suelo para optimizar tus cultivos. ¿Qué tipo de análisis necesitas hoy?",
        timestamp: "08:30",
      },
      {
        role: "user",
        content: "Hola, tengo un problema con mi campo de maíz. Las plantas se ven amarillentas en algunas zonas",
        timestamp: "08:31",
      },
      {
        role: "assistant",
        content:
          "Entiendo tu preocupación 🌽 El amarillamiento puede indicar deficiencia de nitrógeno. Para hacer un diagnóstico preciso, necesito algunos datos:\n\n📍 ¿En qué región está tu campo?\n📏 ¿Cuántas hectáreas afectadas?\n🌱 ¿En qué etapa está el maíz?\n💧 ¿Cuándo fue el último riego?\n🌡️ ¿Has notado patrones en las zonas afectadas?",
        timestamp: "08:31",
      },
      {
        role: "user",
        content:
          "Está en Temuco, son como 8 hectáreas afectadas de 20 totales. El maíz tiene 6 semanas. Regué hace 4 días y las zonas amarillas están más en las partes altas del terreno",
        timestamp: "08:32",
      },
      {
        role: "assistant",
        content:
          "Perfecto, esa información es muy valiosa 📊 Basado en tu descripción:\n\n🔬 **Diagnóstico**: Deficiencia de N en zonas de drenaje rápido\n⚠️ **Causa probable**: Lixiviación de nitrógeno en partes altas\n💡 **Solución inmediata**: Aplicar 60kg N/ha en zonas afectadas\n🎯 **Estrategia**: Fertilización fraccionada para evitar pérdidas\n\n¿Quieres que calcule el plan de fertilización específico para tu terreno?",
        timestamp: "08:33",
      },
      {
        role: "user",
        content: "Sí, por favor. Y me gustaría saber cómo prevenir esto en el futuro",
        timestamp: "08:34",
      },
      {
        role: "assistant",
        content:
          "¡Excelente pregunta! 🎯 Aquí tienes tu plan completo:\n\n📋 **Plan Inmediato**:\n• Urea 46%: 130kg en zonas afectadas\n• Aplicar en 2 dosis: 70% ahora, 30% en 10 días\n• Regar ligeramente después de aplicar\n\n🛡️ **Prevención Futura**:\n• Análisis de suelo cada 6 meses\n• Fertilización fraccionada en 3-4 aplicaciones\n• Considerar inhibidores de nitrificación\n• Monitoreo con sensores de humedad\n\n¿Te interesa que configure alertas automáticas para tu campo?",
        timestamp: "08:35",
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
          "¡Bienvenido a Despega Tu Carrera! 🚀 Soy tu mentor de crecimiento profesional. Veo que tienes potencial increíble. Cuéntame, ¿cuál es ese sueño profesional que te emociona pero también te da un poco de miedo?",
        timestamp: "14:30",
      },
      {
        role: "user",
        content:
          "Siempre he querido liderar un equipo de desarrollo, pero siento que me falta experiencia en gestión de personas",
        timestamp: "14:31",
      },
      {
        role: "assistant",
        content:
          "¡Qué honesto y valiente! 💪 Reconocer esa brecha ya te pone adelante del 80% de profesionales. Cuéntame más:\n\n🎯 ¿Qué es lo que más te atrae del liderazgo técnico?\n🤔 ¿Has tenido alguna experiencia informal liderando proyectos?\n💭 ¿Cuál crees que es tu mayor fortaleza como desarrollador?\n⏰ ¿En cuánto tiempo te visualizas en ese rol?",
        timestamp: "14:31",
      },
      {
        role: "user",
        content:
          "Me emociona la idea de mentorear a otros devs y crear productos increíbles. He liderado algunos proyectos pequeños y creo que soy bueno resolviendo problemas complejos. Me gustaría lograrlo en 8-12 meses",
        timestamp: "14:32",
      },
      {
        role: "assistant",
        content:
          "¡Me encanta tu visión! 🌟 Tienes las bases perfectas: pasión por mentorear y habilidades técnicas sólidas. He diseñado tu roadmap personalizado:\n\n🎯 **Fase 1 (Meses 1-3)**: Liderazgo Técnico\n• Curso intensivo de gestión de equipos\n• Mentoría con 2 desarrolladores junior\n• Proyecto piloto liderando 3-4 personas\n\n🎯 **Fase 2 (Meses 4-6)**: Habilidades Blandas\n• Workshop de comunicación efectiva\n• Simulaciones de conflictos en equipos\n• Feedback 360° con tu equipo actual\n\n¿Qué te parece si empezamos identificando a esos developers que podrías mentorear?",
        timestamp: "14:33",
      },
      {
        role: "user",
        content:
          "Suena perfecto! Hay dos juniors en mi equipo que siempre me hacen preguntas. ¿Cómo estructuro esa mentoría?",
        timestamp: "14:34",
      },
      {
        role: "assistant",
        content:
          "¡Perfecto! Ya tienes tus primeros mentees 🎓 Aquí está tu framework de mentoría:\n\n📅 **Estructura Semanal**:\n• 30 min 1:1 con cada junior\n• 15 min de code review conjunto\n• 1 hora grupal de 'tech talks' informales\n\n🎯 **Objetivos Medibles**:\n• Reducir sus preguntas repetitivas en 50%\n• Que completen 1 feature independiente/mes\n• Feedback positivo en sus 1:1s con el manager\n\n📊 **Tu Crecimiento**:\n• Documentar lecciones aprendidas\n• Medir tu impacto en su productividad\n• Preparar casos de éxito para tu próxima entrevista\n\n¿Empezamos con el plan de la primera sesión de mentoría?",
        timestamp: "14:35",
      },
    ],
  },
  parrotfy: {
    name: "Parrotfy",
    tagline: "Asistente IA para ERP",
    description:
      "Asistente inteligente que revoluciona la gestión empresarial con IA conversacional especializada en ERP",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    icon: Settings,
    metrics: {
      companies: "1,200+",
      efficiency: "+78%",
      automation: "85%",
      satisfaction: "4.9/5",
    },
    features: [
      "Gestión conversacional de inventarios",
      "Automatización de procesos ERP",
      "Análisis predictivo de ventas",
      "Integración con sistemas existentes",
      "Reportes inteligentes en tiempo real",
    ],
    chatMessages: [
      {
        role: "assistant",
        content:
          "¡Hola! 👋 Soy Parrotfy, tu asistente IA para ERP de parrotfyia.vercel.app. He notado algunas anomalías interesantes en tus datos. ¿Tienes un momento para revisar algo que podría ahorrarte mucho dinero?",
        timestamp: "09:15",
      },
      {
        role: "user",
        content: "¡Por supuesto! ¿Qué has encontrado?",
        timestamp: "09:16",
      },
      {
        role: "assistant",
        content:
          "Excelente 🔍 He detectado un patrón preocupante:\n\n⚠️ **Alerta de Inventario**:\n• 15 productos con rotación <30 días están sobre-stockeados\n• Costo de oportunidad: $23,400 inmovilizados\n• 3 proveedores han subido precios sin que lo notes\n\n💡 **Oportunidad detectada**:\n• Puedes liberar $18K optimizando stock\n• Renegociar con Proveedor A podría ahorrarte 12%\n\n¿Quieres que analice producto por producto o prefieres que genere el plan de optimización completo?",
        timestamp: "09:16",
      },
      {
        role: "user",
        content: "¡Wow! No tenía idea. Muéstrame el plan completo, por favor",
        timestamp: "09:17",
      },
      {
        role: "assistant",
        content:
          "¡Perfecto! 📊 Aquí tienes tu **Plan de Optimización Inteligente**:\n\n🎯 **Acciones Inmediatas (Esta semana)**:\n• Reducir stock de Mouse Gamer Pro: 45→20 unidades (-$3,200)\n• Promocionar Teclado RGB: 60→25 unidades (-$2,800)\n• Pausar orden de Webcam 4K (ya tienes 3 meses de stock)\n\n💰 **Renegociaciones Sugeridas**:\n• TechSupply Co: Proponer descuento por volumen (ahorro: $1,200/mes)\n• ComponentesPro: Cambiar términos de pago 30→45 días\n\n📈 **Proyección**: +$4,500 flujo de caja en 30 días\n\n¿Quieres que prepare los emails de renegociación automáticamente?",
        timestamp: "09:18",
      },
      {
        role: "user",
        content: "¡Increíble! Sí, prepara los emails. Y me gustaría configurar alertas para que esto no vuelva a pasar",
        timestamp: "09:19",
      },
      {
        role: "assistant",
        content:
          "¡Listo! ✅ **Emails preparados y enviados**:\n\n📧 **TechSupply Co**: Propuesta de descuento por volumen enviada\n📧 **ComponentesPro**: Solicitud de extensión de términos enviada\n\n🚨 **Sistema de Alertas Configurado**:\n• Alerta si rotación <45 días y stock >30 días\n• Notificación de cambios de precios >5%\n• Reporte semanal de oportunidades de optimización\n• Dashboard predictivo de flujo de caja\n\n📱 **Bonus**: He creado un dashboard móvil para que monitorees todo desde tu teléfono\n\n¿Te gustaría que también analice tus patrones de ventas para predecir la demanda del próximo trimestre?",
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
            Casos de Éxito Reales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Descubre cómo nuestros clientes han transformado sus industrias con IA que entiende, conecta y genera
            resultados extraordinarios.
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
                                {key === "farmers"
                                  ? "Agricultores"
                                  : key === "accuracy"
                                    ? "Precisión"
                                    : key === "yield"
                                      ? "Rendimiento"
                                      : key === "users"
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
                                                  : key === "companies"
                                                    ? "Empresas"
                                                    : key === "efficiency"
                                                      ? "Eficiencia"
                                                      : key === "automation"
                                                        ? "Automatización"
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
