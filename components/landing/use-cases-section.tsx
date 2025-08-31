"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bot,
  MessageCircle,
  Send,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Zap,
  Globe,
  Brain,
  Target,
  Award,
  Leaf,
  GraduationCap,
  Building2,
  Shield,
  Cpu,
  Database,
  Cloud,
  Code,
  Layers,
  GitBranch,
} from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: string
}

interface ChatState {
  messages: Message[]
  isTyping: boolean
  currentIndex: number
}

const USE_CASES = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    subtitle: "Análisis de Suelos Inteligente",
    description: "Optimiza tus cultivos con datos en tiempo real de IrriWatch sobre nitrógeno y hidratación foliar",
    icon: Leaf,
    primaryColor: "emerald",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-600",
    bgGradient: "from-emerald-100 to-green-100",
    textColor: "text-emerald-700",
    hoverBg: "hover:bg-emerald-50",
    messages: [
      {
        id: 1,
        text: "Hola, necesito datos sobre el nivel de nitrógeno en mi cultivo de maíz, sector norte.",
        sender: "user" as const,
        timestamp: "10:30",
      },
      {
        id: 2,
        text: "¡Hola! Analizando los datos de IrriWatch para tu sector norte... Los niveles de nitrógeno están en 45 ppm, ligeramente por debajo del óptimo (50-60 ppm). La hidratación foliar está al 78%, dentro del rango ideal.",
        sender: "bot" as const,
        timestamp: "10:31",
      },
      {
        id: 3,
        text: "¿Qué me recomiendas para optimizar el nitrógeno?",
        sender: "user" as const,
        timestamp: "10:32",
      },
      {
        id: 4,
        text: "Te recomiendo aplicar 15 kg/ha de urea en las próximas 48 horas. Basándome en los datos meteorológicos, no hay lluvia prevista, ideal para la aplicación. También sugiero monitorear la zona sur que muestra patrones similares.",
        sender: "bot" as const,
        timestamp: "10:33",
      },
    ],
    features: [
      "Monitoreo de nitrógeno en tiempo real",
      "Análisis de hidratación foliar",
      "Recomendaciones de fertilización",
      "Integración con datos meteorológicos",
      "Alertas automáticas de cultivo",
      "Reportes de productividad",
    ],
    metrics: [
      { label: "Precisión", value: "94%", icon: Target },
      { label: "Ahorro Costos", value: "23%", icon: TrendingUp },
      { label: "Tiempo Respuesta", value: "< 2min", icon: Clock },
      { label: "Satisfacción", value: "4.8/5", icon: Award },
    ],
  },
  {
    id: "career",
    title: "Despega tu Carrera",
    subtitle: "Coaching Personal con IA",
    description: "Tu compañero de confianza para el crecimiento profesional y desarrollo de carrera",
    icon: GraduationCap,
    primaryColor: "blue",
    gradientFrom: "from-blue-500",
    gradientTo: "to-indigo-600",
    bgGradient: "from-blue-100 to-indigo-100",
    textColor: "text-blue-700",
    hoverBg: "hover:bg-blue-50",
    messages: [
      {
        id: 1,
        text: "Me siento perdido en mi carrera profesional. No sé si seguir en mi trabajo actual o buscar algo nuevo.",
        sender: "user" as const,
        timestamp: "14:20",
      },
      {
        id: 2,
        text: "Entiendo perfectamente esa sensación, es más común de lo que piensas y es completamente válida. Cuéntame, ¿qué es lo que más te genera dudas sobre tu situación actual? ¿Es el crecimiento profesional, el ambiente laboral, o tal vez sientes que tus habilidades no están siendo aprovechadas?",
        sender: "bot" as const,
        timestamp: "14:21",
      },
      {
        id: 3,
        text: "Creo que es una mezcla. Siento que no estoy creciendo y que podría estar haciendo algo más significativo.",
        sender: "user" as const,
        timestamp: "14:22",
      },
      {
        id: 4,
        text: "Esa sensación de querer algo más significativo habla muy bien de ti y de tu ambición personal. Es una señal de que estás listo para el siguiente nivel. ¿Has identificado qué tipo de trabajo o industria te haría sentir más realizado? Podemos explorar juntos tus fortalezas y pasiones para encontrar ese camino que te emocione.",
        sender: "bot" as const,
        timestamp: "14:23",
      },
    ],
    features: [
      "Coaching personalizado y empático",
      "Análisis de fortalezas profesionales",
      "Planificación de carrera estratégica",
      "Preparación para entrevistas",
      "Desarrollo de habilidades blandas",
      "Seguimiento de objetivos profesionales",
    ],
    metrics: [
      { label: "Usuarios Activos", value: "12K+", icon: Users },
      { label: "Tasa Éxito", value: "87%", icon: TrendingUp },
      { label: "Sesiones/Mes", value: "45K", icon: MessageCircle },
      { label: "Rating", value: "4.9/5", icon: Award },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    subtitle: "Sistema ERP Inteligente",
    description: "Gestiona tu negocio con inteligencia artificial integrada en parrotfy.com",
    icon: Building2,
    primaryColor: "purple",
    gradientFrom: "from-purple-500",
    gradientTo: "to-violet-600",
    bgGradient: "from-purple-100 to-violet-100",
    textColor: "text-purple-700",
    hoverBg: "hover:bg-purple-50",
    messages: [
      {
        id: 1,
        text: "Necesito generar el reporte de ventas del último trimestre y analizar la rentabilidad por producto.",
        sender: "user" as const,
        timestamp: "09:15",
      },
      {
        id: 2,
        text: "Perfecto, generando el reporte Q3 2024... He analizado 1,247 transacciones. Las ventas totales fueron $2.8M (+15% vs Q2). Los productos más rentables: Software Licenses (42% margen), Consulting Services (38% margen), y Hardware (23% margen).",
        sender: "bot" as const,
        timestamp: "09:16",
      },
      {
        id: 3,
        text: "¿Puedes mostrarme las tendencias de inventario para el próximo mes?",
        sender: "user" as const,
        timestamp: "09:17",
      },
      {
        id: 4,
        text: "Analizando patrones de inventario... Detecté que necesitarás restock de 3 productos clave: Laptops Dell (stock crítico: 12 unidades), Licencias Office (vencen 45 en 15 días), y Cables HDMI (alta rotación). ¿Genero las órdenes de compra automáticamente?",
        sender: "bot" as const,
        timestamp: "09:18",
      },
    ],
    features: [
      "Análisis automático de ventas",
      "Gestión inteligente de inventario",
      "Reportes financieros en tiempo real",
      "Predicción de demanda",
      "Automatización de procesos",
      "Integración con OpenAI GPT-4",
    ],
    metrics: [
      { label: "Empresas", value: "2.5K+", icon: Globe },
      { label: "Eficiencia", value: "+40%", icon: Zap },
      { label: "Procesamiento", value: "1M+ ops", icon: Brain },
      { label: "Uptime", value: "99.9%", icon: CheckCircle },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [chatStates, setChatStates] = useState<Record<string, ChatState>>({})

  // Initialize chat states
  useEffect(() => {
    const initialStates: Record<string, ChatState> = {}
    USE_CASES.forEach((useCase) => {
      initialStates[useCase.id] = {
        messages: [],
        isTyping: false,
        currentIndex: 0,
      }
    })
    setChatStates(initialStates)
  }, [])

  // Auto-start demo when tab changes
  useEffect(() => {
    const timer = setTimeout(() => {
      startDemo(activeTab)
    }, 1000)

    return () => clearTimeout(timer)
  }, [activeTab])

  const startDemo = (useCaseId: string) => {
    const useCase = USE_CASES.find((uc) => uc.id === useCaseId)
    if (!useCase) return

    setChatStates((prev) => ({
      ...prev,
      [useCaseId]: {
        messages: [],
        isTyping: false,
        currentIndex: 0,
      },
    }))

    simulateConversation(useCaseId, useCase.messages, 0)
  }

  const simulateConversation = (useCaseId: string, messages: Message[], index: number) => {
    if (index >= messages.length) return

    const message = messages[index]
    const delay = message.sender === "user" ? 1500 : 2500

    setTimeout(() => {
      if (message.sender === "bot") {
        // Show typing indicator
        setChatStates((prev) => ({
          ...prev,
          [useCaseId]: {
            ...prev[useCaseId],
            isTyping: true,
          },
        }))

        // Add message after typing delay
        setTimeout(() => {
          setChatStates((prev) => ({
            ...prev,
            [useCaseId]: {
              messages: [...prev[useCaseId].messages, message],
              isTyping: false,
              currentIndex: index + 1,
            },
          }))

          simulateConversation(useCaseId, messages, index + 1)
        }, 1500)
      } else {
        // Add user message immediately
        setChatStates((prev) => ({
          ...prev,
          [useCaseId]: {
            ...prev[useCaseId],
            messages: [...prev[useCaseId].messages, message],
            currentIndex: index + 1,
          },
        }))

        simulateConversation(useCaseId, messages, index + 1)
      }
    }, delay)
  }

  const resetDemo = (useCaseId: string) => {
    setChatStates((prev) => ({
      ...prev,
      [useCaseId]: {
        messages: [],
        isTyping: false,
        currentIndex: 0,
      },
    }))

    setTimeout(() => startDemo(useCaseId), 500)
  }

  const getActiveUseCase = () => USE_CASES.find((uc) => uc.id === activeTab)
  const activeUseCase = getActiveUseCase()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-purple-200 text-purple-700">
            Casos de Uso Reales
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Neuralia en Acción
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestros agentes de IA están transformando industrias y mejorando la vida de miles de usuarios
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList
            className={`grid w-full grid-cols-3 mb-12 bg-gradient-to-r ${activeUseCase?.bgGradient || "from-purple-100 to-blue-100"} shadow-lg border-0 rounded-xl p-1 transition-all duration-300`}
          >
            {USE_CASES.map((useCase) => {
              const IconComponent = useCase.icon
              const isActive = activeTab === useCase.id
              return (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className={`flex items-center gap-2 rounded-lg transition-all duration-200 font-medium ${
                    isActive
                      ? `bg-gradient-to-r ${useCase.gradientFrom} ${useCase.gradientTo} text-white shadow-md`
                      : `${useCase.textColor} ${useCase.hoverBg}`
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{useCase.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {USE_CASES.map((useCase) => {
            const IconComponent = useCase.icon
            const chatState = chatStates[useCase.id] || { messages: [], isTyping: false, currentIndex: 0 }

            return (
              <TabsContent key={useCase.id} value={useCase.id} className="space-y-8">
                <div className="text-center space-y-2 mb-8">
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${useCase.gradientFrom} ${useCase.gradientTo} bg-clip-text text-transparent`}
                  >
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">{useCase.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Chat Interface */}
                  <Card className="h-[500px] flex flex-col shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
                    {/* Chat Header */}
                    <CardHeader
                      className={`p-4 bg-gradient-to-r ${useCase.gradientFrom} ${useCase.gradientTo} text-white rounded-t-lg`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Bot className="w-6 h-6" />
                          </div>
                          <div>
                            <CardTitle className="text-white text-lg">Neuralia AI</CardTitle>
                            <p className="text-sm opacity-90">Asistente Inteligente</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => resetDemo(useCase.id)}
                          className="text-white hover:bg-white/20"
                        >
                          ↻ Reiniciar
                        </Button>
                      </div>
                    </CardHeader>

                    {/* Messages */}
                    <CardContent className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
                      {chatState.messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.sender === "user"
                                ? `bg-gradient-to-r ${useCase.gradientFrom} ${useCase.gradientTo} text-white`
                                : "bg-white border shadow-sm text-gray-800"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{message.text}</p>
                            <p
                              className={`text-xs mt-1 ${
                                message.sender === "user" ? "text-white/70" : "text-gray-500"
                              }`}
                            >
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}

                      {chatState.isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-white border shadow-sm p-3 rounded-lg">
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
                      )}
                    </CardContent>

                    {/* Input */}
                    <div className="p-4 border-t bg-white rounded-b-lg">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="Escribe tu mensaje..."
                          className="flex-1 p-2 border rounded-lg bg-gray-50"
                          disabled
                        />
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${useCase.gradientFrom} ${useCase.gradientTo} hover:opacity-90`}
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Features & Metrics */}
                  <div className="space-y-6">
                    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-gray-800">
                          <IconComponent className={`w-5 h-5 ${useCase.textColor.replace("text-", "text-")}`} />
                          Características Principales
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {useCase.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
                      <CardHeader>
                        <CardTitle className="text-gray-800">Métricas de Rendimiento</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          {useCase.metrics.map((metric, index) => {
                            const MetricIcon = metric.icon
                            return (
                              <div key={index} className="text-center p-3 bg-white rounded-lg border">
                                <MetricIcon
                                  className={`w-6 h-6 mx-auto mb-2 ${useCase.textColor.replace("text-", "text-")}`}
                                />
                                <div className="text-lg font-bold text-gray-800">{metric.value}</div>
                                <div className="text-xs text-gray-600">{metric.label}</div>
                              </div>
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>

                    <Button
                      onClick={() => resetDemo(useCase.id)}
                      className={`w-full bg-gradient-to-r ${useCase.gradientFrom} ${useCase.gradientTo} hover:opacity-90 text-white`}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Ver Demo Completo
                    </Button>
                  </div>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>

        {/* Technical Infrastructure Section */}
        <div className="mt-20 mb-16">
          <Card className="bg-gradient-to-br from-slate-900 to-gray-900 text-white border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
            <CardContent className="relative p-12">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 border-purple-400 text-purple-300 bg-purple-900/20">
                  Infraestructura Tecnológica
                </Badge>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Ecosistema Fullstack Neuralia
                </h3>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Todos estos agentes funcionan sobre un <strong>ecosistema fullstack completo</strong> desarrollado
                  íntegramente por <strong>Neuralia</strong>, utilizando tecnología de vanguardia y{" "}
                  <strong>copilotado por IA</strong> para garantizar máximo rendimiento, escalabilidad y confiabilidad.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-purple-300">IA Copiloto</h4>
                  <p className="text-sm text-gray-400">
                    Sistema de IA que optimiza y supervisa toda la infraestructura en tiempo real
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-blue-300">Cloud Native</h4>
                  <p className="text-sm text-gray-400">
                    Arquitectura distribuida en la nube con auto-escalado y alta disponibilidad
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-green-300">Base de Datos IA</h4>
                  <p className="text-sm text-gray-400">
                    Sistemas de datos vectoriales y relacionales optimizados para IA conversacional
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-orange-300">Seguridad Total</h4>
                  <p className="text-sm text-gray-400">
                    Encriptación end-to-end, autenticación multi-factor y cumplimiento normativo
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Code className="w-5 h-5 text-purple-400" />
                      Stack Tecnológico
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Next.js 15 + React 18
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      TypeScript + Tailwind CSS
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Supabase + PostgreSQL
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      OpenAI GPT-4 + AI SDK
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Layers className="w-5 h-5 text-blue-400" />
                      Arquitectura
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Microservicios Distribuidos
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      API Gateway Inteligente
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Event-Driven Architecture
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Real-time WebSockets
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <GitBranch className="w-5 h-5 text-green-400" />
                      DevOps IA
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      CI/CD Automatizado
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Monitoreo Inteligente
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Auto-scaling Predictivo
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Deployment Zero-Downtime
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30 rounded-full px-6 py-3">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300 font-medium">
                    99.9% Uptime • Latencia &lt; 100ms • Escalabilidad Infinita
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold mb-4">¿Listo para Crear tu Propio Agente?</h3>
              <p className="text-xl mb-6 opacity-90">
                Únete a miles de empresas que ya están transformando sus procesos con el ecosistema Neuralia
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3">
                <Brain className="w-5 h-5 mr-2" />
                Comenzar Gratis
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
