"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Leaf,
  GraduationCap,
  MessageSquare,
  BarChart3,
  Users,
  Globe,
  Droplets,
  Thermometer,
  Database,
  Zap,
  TrendingUp,
  CheckCircle,
  Play,
  ArrowRight,
  Brain,
  Target,
  Workflow,
  Package,
  ShoppingCart,
  FileText,
} from "lucide-react"

interface Message {
  id: number
  sender: "user" | "bot"
  content: string
  timestamp: string
  avatar?: string
  name?: string
}

interface ChatSimulationProps {
  messages: Message[]
  autoStart?: boolean
}

function ChatSimulation({ messages, autoStart = false }: ChatSimulationProps) {
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (autoStart && !isActive) {
      startDemo()
    }
  }, [autoStart, isActive])

  const startDemo = () => {
    setIsActive(true)
    setDisplayedMessages([])

    messages.forEach((message, index) => {
      setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, message])
      }, index * 2000)
    })
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4 h-80 overflow-y-auto">
      <div className="space-y-3">
        {displayedMessages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`flex items-start space-x-2 max-w-xs ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src={message.avatar || "/placeholder.svg"} />
                <AvatarFallback>{message.sender === "user" ? "U" : "AI"}</AvatarFallback>
              </Avatar>
              <div
                className={`rounded-lg p-3 ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-white border"}`}
              >
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-70">{message.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!isActive && (
        <div className="flex items-center justify-center h-full">
          <Button onClick={startDemo} className="bg-green-600 hover:bg-green-700">
            <Play className="w-4 h-4 mr-2" />
            Iniciar Demo
          </Button>
        </div>
      )}
    </div>
  )
}

function AIWorkflowDiagram() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
      <h3 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Flujo de Trabajo de Ejecutivos IA
      </h3>
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
            <Database className="w-8 h-8 text-white" />
          </div>
          <h4 className="font-semibold text-green-700 mb-1">Datos Reales</h4>
          <p className="text-xs text-gray-600 max-w-20">Integración con fuentes externas</p>
        </div>

        <ArrowRight className="w-6 h-6 text-gray-400 mx-2" />

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h4 className="font-semibold text-blue-700 mb-1">Procesamiento IA</h4>
          <p className="text-xs text-gray-600 max-w-20">Análisis inteligente GPT-4</p>
        </div>

        <ArrowRight className="w-6 h-6 text-gray-400 mx-2" />

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h4 className="font-semibold text-purple-700 mb-1">Decisiones</h4>
          <p className="text-xs text-gray-600 max-w-20">Recomendaciones precisas</p>
        </div>

        <ArrowRight className="w-6 h-6 text-gray-400 mx-2" />

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
            <Workflow className="w-8 h-8 text-white" />
          </div>
          <h4 className="font-semibold text-orange-700 mb-1">Automatización</h4>
          <p className="text-xs text-gray-600 max-w-20">Ejecución automática</p>
        </div>
      </div>
    </div>
  )
}

export function UseCasesSection() {
  const ecosueloMessages: Message[] = [
    {
      id: 1,
      sender: "user",
      content: "Hola, necesito analizar el suelo de mi campo en Curicó para plantar viñas",
      timestamp: "10:30",
      name: "Carlos Mendoza",
    },
    {
      id: 2,
      sender: "bot",
      content:
        "¡Hola Carlos! 🌱 Soy EcosueloLab. Te ayudo con análisis de suelos. ¿Podrías enviarme la ubicación exacta de tu campo?",
      timestamp: "10:31",
    },
    {
      id: 3,
      sender: "user",
      content: "📍 Ubicación: -34.9823, -71.2394 (Curicó, Región del Maule)",
      timestamp: "10:32",
    },
    {
      id: 4,
      sender: "bot",
      content:
        "📊 Consultando base de datos INIA...\n\n✅ **Datos INIA obtenidos:**\n🌾 Tipo de suelo: Franco arcilloso\n🧪 pH promedio zona: 6.5-7.0\n🌡️ Temperatura media: 16-18°C\n📈 Aptitud viñas: ALTA",
      timestamp: "10:33",
    },
    {
      id: 5,
      sender: "bot",
      content:
        "🔬 Conectando con IrriWatch para análisis nutricional...\n\n✅ **Datos IrriWatch:**\n🧪 Nitrógeno (N): 45 ppm - ÓPTIMO\n🍃 Hidratación foliar: 78% - BUENA\n💧 Estrés hídrico: BAJO\n\n🍇 Condiciones ideales para plantación de viñas!",
      timestamp: "10:34",
    },
  ]

  const careerMessages: Message[] = [
    {
      id: 1,
      sender: "user",
      content:
        "Hola, me siento un poco perdida en mi carrera. Soy desarrolladora Python con 3 años de experiencia pero no sé si voy por buen camino...",
      timestamp: "14:20",
      name: "María González",
    },
    {
      id: 2,
      sender: "bot",
      content:
        "¡Hola María! 💙 Me da mucha alegría que me escribas. Primero, quiero que sepas que es completamente normal sentirse así - yo he acompañado a miles de profesionales que han pasado por lo mismo.\n\n¿Sabes qué? 3 años de Python es increíble! Estás en un momento perfecto para dar el siguiente paso. Cuéntame, ¿qué es lo que más te gusta de programar?",
      timestamp: "14:21",
    },
    {
      id: 3,
      sender: "user",
      content:
        "Me encanta resolver problemas complejos, pero a veces siento que no crezco lo suficiente en mi trabajo actual...",
      timestamp: "14:22",
    },
    {
      id: 4,
      sender: "bot",
      content:
        "María, eso que sientes es tu intuición diciéndote que estás lista para más desafíos - ¡y eso es hermoso! 🌟\n\nHe estado revisando el mercado y hay empresas increíbles buscando exactamente tu perfil:\n\n💎 **Banco Estado** - Senior Python Dev\n$2.8M-$3.2M • Remoto\n*Proyectos de transformación digital*\n\n🚀 **Falabella** - Data Engineer  \n$2.5M-$3.0M • Las Condes\n*Análisis de big data, súper desafiante*\n\n¿Te late alguna? Estoy aquí para prepararte para lo que necesites 💪",
      timestamp: "14:23",
    },
    {
      id: 5,
      sender: "bot",
      content:
        "Y María, recuerda: tu valor no se mide solo en años de experiencia. Tu pasión por resolver problemas complejos es oro puro en este mercado. Confía en ti, yo ya lo hago ✨",
      timestamp: "14:24",
    },
  ]

  const parrotfyMessages: Message[] = [
    {
      id: 1,
      sender: "user",
      content: "Necesito el reporte de ventas del Q3 y actualizar el inventario de productos",
      timestamp: "09:15",
      name: "Roberto Silva",
    },
    {
      id: 2,
      sender: "bot",
      content:
        "¡Hola Roberto! 📊 Soy Parrotfy, tu asistente ERP inteligente con OpenAI GPT-4.\n\nGenerando reporte Q3... ✅\n📈 Ventas Q3: $847M CLP (+12% vs Q2)\n🏆 Top producto: Laptop Dell (234 unidades)",
      timestamp: "09:16",
    },
    {
      id: 3,
      sender: "user",
      content: "Perfecto. ¿Puedes actualizar el stock de laptops Dell? Llegaron 50 unidades hoy",
      timestamp: "09:17",
    },
    {
      id: 4,
      sender: "bot",
      content:
        "✅ **Inventario Actualizado**\n\n💻 Laptop Dell XPS 13:\n• Stock anterior: 12 unidades\n• Ingreso: +50 unidades\n• **Stock actual: 62 unidades**\n\n📋 Sistema ERP sincronizado\n🔔 Notificación enviada a equipo de ventas\n\n¿Necesitas actualizar algo más?",
      timestamp: "09:18",
    },
    {
      id: 5,
      sender: "bot",
      content:
        "💡 **Sugerencia Inteligente:**\n\nCon 62 unidades en stock y el ritmo de ventas actual (19 unidades/semana), tienes inventario para 3.2 semanas.\n\n📅 Recomiendo planificar próximo pedido para el 15 de octubre.\n\n¿Quieres que configure un recordatorio automático?",
      timestamp: "09:19",
    },
  ]

  return (
    <section id="use-cases" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Casos de Uso{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Reales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestros ejecutivos IA están transformando industrias con datos reales y conversaciones
            auténticas
          </p>
        </div>

        <AIWorkflowDiagram />

        <Tabs defaultValue="ecosuelo" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gradient-to-r from-gray-100 to-gray-200 p-1 rounded-xl">
            <TabsTrigger
              value="ecosuelo"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-lg"
            >
              <Leaf className="w-4 h-4" />
              EcosueloLab
            </TabsTrigger>
            <TabsTrigger
              value="career"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-lg"
            >
              <GraduationCap className="w-4 h-4" />
              Despega tu Carrera
            </TabsTrigger>
            <TabsTrigger
              value="parrotfy"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-lg"
            >
              <Package className="w-4 h-4" />
              Parrotfy ERP
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ecosuelo" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-xl">
                        <Leaf className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-green-800 text-xl">EcosueloLab</CardTitle>
                        <p className="text-sm text-green-600 font-medium">Laboratorio Agrícola Inteligente</p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 font-semibold"
                    >
                      WhatsApp Business
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Análisis de suelos en tiempo real con integración a INIA, IrriWatch y sensores IoT para agricultura
                    de precisión.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">Hidratación Foliar</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                      <Thermometer className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-medium">Monitoreo Clima</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                      <Database className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium">Datos INIA</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">Análisis N</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">Fuentes de Datos Integradas:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          <strong>INIA:</strong> Base de datos agrícola nacional
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          <strong>IrriWatch:</strong> Nitrógeno e hidratación foliar
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          <strong>DMC:</strong> Datos meteorológicos en tiempo real
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          <strong>Sensores IoT:</strong> Humedad, pH, temperatura del suelo
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    Conversación Real - WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChatSimulation messages={ecosueloMessages} autoStart={true} />
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-lg">40% Aumento</h3>
                  <p className="text-sm text-muted-foreground">en rendimiento de cultivos</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-lg">60% Ahorro</h3>
                  <p className="text-sm text-muted-foreground">en consumo de agua</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-lg">2,500+ Agricultores</h3>
                  <p className="text-sm text-muted-foreground">usando la plataforma</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="career" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-blue-800 text-xl">Despega tu Carrera</CardTitle>
                        <p className="text-sm text-blue-600 font-medium">Tu Coach Personal y Confidente</p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 font-semibold"
                    >
                      Apoyo Incondicional
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Tu compañero de confianza en el desarrollo profesional. Más que un coach, soy tu amigo que cree en
                    tu potencial y te acompaña en cada paso.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 p-2 bg-pink-50 rounded-lg">
                      <BarChart3 className="w-4 h-4 text-pink-500" />
                      <span className="text-sm font-medium">Apoyo Emocional</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium">Confianza Total</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">Crecimiento Personal</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                      <Globe className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium">Visión Global</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3">Mi Compromiso Contigo:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>
                          <strong>Escucha Activa:</strong> Entiendo tus miedos y aspiraciones
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>
                          <strong>Apoyo 24/7:</strong> Siempre aquí cuando me necesites
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>
                          <strong>Crecimiento Integral:</strong> No solo trabajo, sino bienestar
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    Conversación Real - Apoyo Personal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChatSimulation messages={careerMessages} autoStart={true} />
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-lg">95% Satisfacción</h3>
                  <p className="text-sm text-muted-foreground">en apoyo emocional</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-lg">40% Más Confianza</h3>
                  <p className="text-sm text-muted-foreground">en decisiones profesionales</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-lg">15,000+ Vidas</h3>
                  <p className="text-sm text-muted-foreground">transformadas con cariño</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="parrotfy" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl">
                        <Package className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-purple-800 text-xl">Parrotfy ERP</CardTitle>
                        <p className="text-sm text-purple-600 font-medium">Sistema ERP Online Inteligente</p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 font-semibold"
                    >
                      parrotfy.com
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Sistema ERP online potenciado por OpenAI GPT-4 que gestiona inventarios, ventas, reportes y
                    operaciones empresariales mediante conversación natural.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                      <BarChart3 className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">Reportes IA</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                      <Package className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">Gestión Inventario</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                      <ShoppingCart className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium">Control Ventas</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg">
                      <FileText className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">Automatización</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-3">Capacidades ERP con IA:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        <span>
                          <strong>Gestión Conversacional:</strong> Comandos en lenguaje natural
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        <span>
                          <strong>Análisis Predictivo:</strong> Sugerencias inteligentes de inventario
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        <span>
                          <strong>Reportes Dinámicos:</strong> Informes automáticos en tiempo real
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        <span>
                          <strong>Integración Total:</strong> Ventas, inventario, finanzas unificadas
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                    Gestión ERP Conversacional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChatSimulation messages={parrotfyMessages} autoStart={true} />
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-lg">75% Reducción</h3>
                  <p className="text-sm text-muted-foreground">en tiempo de gestión</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-lg">90% Automatización</h3>
                  <p className="text-sm text-muted-foreground">de procesos empresariales</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-lg">800+ Empresas</h3>
                  <p className="text-sm text-muted-foreground">gestionando con IA</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
