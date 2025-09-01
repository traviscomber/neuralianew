"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Sprout,
  Settings,
  TrendingUp,
  CheckCircle,
  Send,
  Bot,
  User,
  ArrowRight,
  BarChart3,
  Target,
  Award,
  Smartphone,
  DollarSign,
  Clock,
  MessageCircle,
} from "lucide-react"

const successCases = {
  ecosuelo: {
    name: "EcosueloLab",
    tagline: "80 horas/mes ahorradas",
    description: "Se conecta con laboratorio y manda recomendaciones por WhatsApp",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-700 dark:text-green-300",
    icon: Sprout,
    metrics: {
      challenge: "20 horas semanales analizando suelos",
      solution: "IA + API laboratorio + WhatsApp",
      result: "80% menos tiempo + 25% mejor productividad",
      roi: "ROI 300% en 4 meses",
    },
    features: [
      "Se conecta automáticamente a análisis de laboratorio",
      "Traduce datos técnicos en lenguaje simple",
      "Manda recomendaciones por WhatsApp",
      "Calcula costos exactos de fertilización",
      "Programa recordatorios automáticos",
    ],
    chatMessages: [
      {
        role: "assistant",
        content: "🌱 Tu potrero norte tiene nitrógeno crítico (12 ppm). Riesgo alto.",
        timestamp: "08:30",
      },
      {
        role: "user",
        content: "¿Qué tan jodido está?",
        timestamp: "08:31",
      },
      {
        role: "assistant",
        content: "Vas a perder 35% de cosecha. Plan urgente:\n• 150 kg/ha urea HOY\n• $220.000\n• ROI: 400%",
        timestamp: "08:31",
      },
      {
        role: "user",
        content: "Bacán, mándame todo",
        timestamp: "08:32",
      },
      {
        role: "assistant",
        content: "✅ Enviado: Plan detallado, proveedores, cronograma. Recordatorio en 21 días.",
        timestamp: "08:33",
      },
    ],
  },
  despega: {
    name: "Despega Tu Carrera",
    tagline: "+40% sueldo promedio",
    description: "Coach IA que analiza perfiles y arma planes de crecimiento",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-700 dark:text-blue-300",
    icon: TrendingUp,
    metrics: {
      challenge: "Profesionales estancados sin plan",
      solution: "Coach IA + análisis predictivo",
      result: "40% aumento sueldo + 85% logran objetivos",
      roi: "ROI personal 500%+ en 1 año",
    },
    features: [
      "Analiza tu perfil profesional completo",
      "Calcula probabilidades de éxito",
      "Plan personalizado mes a mes",
      "Seguimiento automático",
      "Conexiones estratégicas",
    ],
    chatMessages: [
      {
        role: "assistant",
        content: "🚀 87% probabilidades de Tech Lead en 8 meses. Tu perfil está fuerte.",
        timestamp: "14:30",
      },
      {
        role: "user",
        content: "¿En serio? Me siento estancado",
        timestamp: "14:31",
      },
      {
        role: "assistant",
        content:
          "Plan 8 meses:\n🎯 Mes 1-2: Mentoring\n🎯 Mes 3-5: Liderar proyecto\n🎯 Mes 6-8: Tech Lead\nSueldo: +40%",
        timestamp: "14:31",
      },
      {
        role: "user",
        content: "¿Por dónde arranco?",
        timestamp: "14:32",
      },
      {
        role: "assistant",
        content: "MAÑANA: Habla con María, ofrécele mentoring. Te programo seguimiento semanal.",
        timestamp: "14:33",
      },
    ],
  },
  parrotfy: {
    name: "Parrotfy ERP",
    tagline: "$50K+ oportunidades/mes",
    description: "IA que analiza ERP y encuentra clientes en riesgo y oportunidades",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-700 dark:text-purple-300",
    icon: Settings,
    metrics: {
      challenge: "Oportunidades perdidas por falta de análisis",
      solution: "IA conectada a ERP + análisis predictivo",
      result: "$50K+ oportunidades identificadas/mes",
      roi: "ROI 400% en 3 meses",
    },
    features: [
      "Se conecta directamente con tu ERP",
      "Identifica clientes en riesgo",
      "Encuentra oportunidades de upselling",
      "Predice comportamiento de compra",
      "Genera propuestas personalizadas",
    ],
    chatMessages: [
      {
        role: "assistant",
        content: "🚨 MegaCorp ($18K/mes) sin pedidos hace 47 días. Riesgo: 89%",
        timestamp: "09:15",
      },
      {
        role: "user",
        content: "¡La cagó! ¿Qué hago?",
        timestamp: "09:16",
      },
      {
        role: "assistant",
        content: "Plan urgente:\n📞 LLAMAR HOY\n💰 25% descuento anual\n🎁 Consultoría gratis\nProbabilidad: 73%",
        timestamp: "09:16",
      },
      {
        role: "user",
        content: "¿Y oportunidades nuevas?",
        timestamp: "09:17",
      },
      {
        role: "assistant",
        content:
          "3 oportunidades HOT:\n🔥 TechCorp: +$15K\n🔥 StartupX: Upgrade\n🔥 DataFlow: Ventana abierta\nTotal: $67K",
        timestamp: "09:18",
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
      }, 3500) // Slower timing
      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex, currentCase.chatMessages.length])

  return (
    <section id="success-cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
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
            className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700"
          >
            <Award className="w-4 h-4 mr-2" />
            Casos de Éxito Reales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Resultados{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">medibles</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Sistemas reales funcionando en producción, generando resultados medibles.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
            <TabsTrigger
              value="ecosuelo"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white font-semibold text-sm"
            >
              <Sprout className="w-4 h-4 mr-2" />
              <div className="text-left">
                <div>EcosueloLab</div>
                <div className="text-xs opacity-80">80h/mes ahorradas</div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="despega"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white font-semibold text-sm"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              <div className="text-left">
                <div>Despega Tu Carrera</div>
                <div className="text-xs opacity-80">+40% sueldo promedio</div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="parrotfy"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-violet-600 data-[state=active]:text-white font-semibold text-sm"
            >
              <Settings className="w-4 h-4 mr-2" />
              <div className="text-left">
                <div>Parrotfy ERP</div>
                <div className="text-xs opacity-80">$50K+ oportunidades/mes</div>
              </div>
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
                  <Card className={`${caseData.bgColor} border-2 border-opacity-20 shadow-lg`}>
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${caseData.color} flex items-center justify-center shadow-lg`}
                        >
                          <caseData.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                            {caseData.name}
                          </CardTitle>
                          <CardDescription className={`text-lg font-semibold ${caseData.textColor}`}>
                            {caseData.tagline}
                          </CardDescription>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                        {caseData.description}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Métricas de impacto */}
                      <div>
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                          <BarChart3 className="w-5 h-5" />
                          Impacto Medible
                        </h4>
                        <div className="space-y-3">
                          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-400">
                            <div className="text-sm font-medium text-red-700 dark:text-red-300 mb-1">❌ Desafío:</div>
                            <div className="font-semibold text-red-800 dark:text-red-200">
                              {caseData.metrics.challenge}
                            </div>
                          </div>
                          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400">
                            <div className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">
                              🔧 Solución:
                            </div>
                            <div className="font-semibold text-blue-800 dark:text-blue-200">
                              {caseData.metrics.solution}
                            </div>
                          </div>
                          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
                            <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                              ✅ Resultado:
                            </div>
                            <div className="font-semibold text-green-800 dark:text-green-200">
                              {caseData.metrics.result}
                            </div>
                          </div>
                          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
                            <div className="text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-1">💰 ROI:</div>
                            <div className="font-bold text-yellow-800 dark:text-yellow-200 text-lg">
                              {caseData.metrics.roi}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Características principales */}
                      <div>
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                          {key === "ecosuelo" ? (
                            <Smartphone className="w-5 h-5" />
                          ) : key === "parrotfy" ? (
                            <DollarSign className="w-5 h-5" />
                          ) : (
                            <Target className="w-5 h-5" />
                          )}
                          Cómo Funciona
                        </h4>
                        <ul className="space-y-3">
                          {caseData.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className={`w-5 h-5 mt-0.5 ${caseData.textColor} flex-shrink-0`} />
                              <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        asChild
                        className={`w-full bg-gradient-to-r ${caseData.color} hover:opacity-90 text-white font-semibold py-3 shadow-lg`}
                      >
                        <a
                          href={`https://wa.me/56940946660?text=¡Hola!%20Me%20interesa%20${caseData.name}.%20¿Podrían%20mostrarme%20cómo%20implementar%20algo%20similar?`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Implementar en Mi Empresa</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Chat demo */}
                  <Card className="bg-white dark:bg-gray-900 shadow-xl border-2">
                    <CardHeader className={`${caseData.bgColor} border-b`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-r ${caseData.color} flex items-center justify-center`}
                        >
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-gray-900 dark:text-white">{caseData.name}</CardTitle>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">En Producción</span>
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
                                    message.role === "user"
                                      ? "bg-gray-200 dark:bg-gray-600"
                                      : `bg-gradient-to-r ${caseData.color}`
                                  }`}
                                >
                                  {message.role === "user" ? (
                                    <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                                  ) : (
                                    <Bot className="w-4 h-4 text-white" />
                                  )}
                                </div>
                                <div
                                  className={`px-4 py-3 rounded-2xl ${
                                    message.role === "user"
                                      ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                      : `bg-gradient-to-r ${caseData.color} text-white`
                                  } shadow-sm`}
                                >
                                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                                  <span
                                    className={`text-xs mt-1 block ${
                                      message.role === "user" ? "text-gray-500 dark:text-gray-400" : "text-white/70"
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
                              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-2xl">
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

                      <div className="p-4 border-t bg-gray-50 dark:bg-gray-800">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            disabled
                          />
                          <Button size="sm" className={`rounded-full bg-gradient-to-r ${caseData.color}`} disabled>
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-xs text-gray-500 dark:text-gray-400">Sistema en producción</p>
                          <p className="text-xs font-semibold text-green-600 dark:text-green-400">
                            {caseData.metrics.roi}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">¿Listo para resultados similares?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Cada proyecto es único, pero los resultados son consistentes: menos tiempo, menos gastos, más crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
              >
                <a
                  href="https://wa.me/56940946660?text=¡Hola!%20He%20visto%20los%20casos%20de%20éxito%20y%20quiero%20desarrollar%20algo%20similar.%20¿Podemos%20agendar%20una%20asesoría?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Desarrollar Mi Sistema</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4 text-green-500" />
                <span>Asesoría gratuita • ROI asegurado</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
