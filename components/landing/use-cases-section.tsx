"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  TrendingUp,
  Globe,
  BarChart3,
  Target,
  GraduationCap,
  Building2,
  Rocket,
  PieChart,
  Calendar,
  Award,
  RotateCcw,
  Phone,
  MessageCircle,
  Sparkles,
  Crown,
  Brain,
} from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
  type?: "text" | "image" | "audio" | "data"
  metadata?: any
}

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")

  // EcosueloBot Messages - Real agricultural data and scenarios
  const [ecosueloBotMessages, setEcosueloBotMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "¡Hola! 👋 Soy EcosueloBot, tu asistente agrícola inteligente. Te ayudo con análisis de suelos, recomendaciones de cultivos y optimización de rendimientos. ¿En qué región de Chile tienes tu campo?",
      sender: "agent",
      timestamp: new Date(),
    },
  ])

  // Career Coaching Messages - Real career development scenarios
  const [careerMessages, setCareerMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "🚀 ¡Hola! Soy tu Coach de Carrera IA. Analizo datos reales del mercado laboral chileno y global para ayudarte a identificar oportunidades, negociar salarios y planificar tu crecimiento profesional. ¿Cuál es tu situación profesional actual?",
      sender: "agent",
      timestamp: new Date(),
    },
  ])

  // ParrotfyIA Messages - Real business ERP scenarios
  const [parrotfyBusinessMessages, setParrotfyBusinessMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "👋 Hola, soy ParrotfyIA, tu asistente conversacional de ERP impulsado por OpenAI GPT-4.0. Manejo todas las operaciones de tu negocio a través de conversación natural. Puedo ayudarte con proyectos, finanzas, inventario, clientes y análisis en tiempo real. ¿Qué necesitas revisar hoy?",
      sender: "agent",
      timestamp: new Date(),
    },
  ])

  const [ecosueloIsPlaying, setEcosueloIsPlaying] = useState(false)
  const [careerIsPlaying, setCareerIsPlaying] = useState(false)
  const [parrotfyIsPlaying, setParrotfyIsPlaying] = useState(false)
  const [showERPPanels, setShowERPPanels] = useState(false)

  // Auto-start demos when tabs are selected
  useEffect(() => {
    if (activeTab === "ecosuelo" && !ecosueloIsPlaying && ecosueloBotMessages.length === 1) {
      setEcosueloIsPlaying(true)
      startEcosueloDemo()
    } else if (activeTab === "career" && !careerIsPlaying && careerMessages.length === 1) {
      setCareerIsPlaying(true)
      startCareerDemo()
    } else if (activeTab === "parrotfy" && !parrotfyIsPlaying && parrotfyBusinessMessages.length === 1) {
      setParrotfyIsPlaying(true)
      startParrotfyDemo()
    }
  }, [activeTab, ecosueloIsPlaying, careerIsPlaying, parrotfyIsPlaying])

  const startEcosueloDemo = () => {
    const demoMessages = [
      {
        id: "user1",
        content: "Tengo 50 hectáreas en la Región del Maule, cultivo trigo y maíz",
        sender: "user" as const,
        timestamp: new Date(),
      },
      {
        id: "agent1",
        content:
          "Perfecto! La Región del Maule es excelente para cereales. Según datos del INIA, los suelos de esa zona tienen pH promedio 6.2-6.8, ideal para trigo y maíz. 📊\n\n🌾 **Análisis de tu situación:**\n• Trigo: Rendimiento promedio regional 45 qq/ha\n• Maíz: Rendimiento promedio regional 120 qq/ha\n• Precipitaciones: 600-800mm anuales\n\n¿Has hecho análisis de suelo recientemente? Te puedo recomendar qué nutrientes optimizar según la época.",
        sender: "agent" as const,
        timestamp: new Date(),
      },
      {
        id: "user2",
        content: "Sí, el análisis muestra pH 6.5, fósforo bajo y potasio medio",
        sender: "user" as const,
        timestamp: new Date(),
      },
      {
        id: "agent2",
        content:
          "Excelente información! 🎯 Con pH 6.5 estás en el rango óptimo. El fósforo bajo es común en suelos del Maule.\n\n📋 **Recomendaciones específicas:**\n\n🌱 **Para Trigo (próxima siembra):**\n• Superfosfato triple: 150 kg/ha en siembra\n• Urea: 200 kg/ha (50% siembra, 50% macollaje)\n• Rendimiento esperado: 50-55 qq/ha (+15%)\n\n🌽 **Para Maíz:**\n• DAP: 180 kg/ha en siembra\n• Urea: 250 kg/ha fraccionado\n• Rendimiento esperado: 130-140 qq/ha (+12%)\n\n💰 **ROI estimado:** $2.8M adicionales por temporada\n\n¿Te interesa que calculemos el plan de fertilización detallado?",
        sender: "agent" as const,
        timestamp: new Date(),
      },
    ]

    let messageIndex = 0
    const addMessage = () => {
      if (messageIndex < demoMessages.length) {
        setEcosueloBotMessages((prev) => [...prev, demoMessages[messageIndex]])
        messageIndex++
        setTimeout(addMessage, 3000)
      } else {
        setEcosueloIsPlaying(false)
      }
    }
    setTimeout(addMessage, 2000)
  }

  const startCareerDemo = () => {
    const demoMessages = [
      {
        id: "user1",
        content: "Soy ingeniero de software con 3 años de experiencia en Santiago, quiero acelerar mi carrera",
        sender: "user" as const,
        timestamp: new Date(),
      },
      {
        id: "agent1",
        content:
          "¡Excelente! 🚀 Con 3 años de experiencia estás en el momento perfecto para acelerar tu crecimiento. Según datos de Laborum y GetOnBoard, el mercado tech chileno está muy activo.\n\n📊 **Tu situación actual:**\n• Rango salarial promedio: $1.8M - $2.5M CLP\n• Demanda de ingenieros: +35% vs 2023\n• Empresas contratando: 450+ posiciones abiertas\n\n🎯 **Oportunidades inmediatas:**\n• Senior Developer: $2.8M - $3.5M (+40%)\n• Tech Lead: $3.2M - $4.2M (+65%)\n• Especialización Cloud/AI: +$800K premium\n\n¿En qué tecnologías te especializas? Te ayudo a identificar el camino más rápido para tu próximo salto.",
        sender: "agent" as const,
        timestamp: new Date(),
      },
      {
        id: "user2",
        content: "Trabajo principalmente con React, Node.js y AWS. Me interesa liderar equipos",
        sender: "user" as const,
        timestamp: new Date(),
      },
      {
        id: "agent2",
        content:
          "¡Perfecto stack! 🎯 React + Node.js + AWS es una combinación muy demandada. Para liderazgo técnico, tienes una base sólida.\n\n🚀 **Plan de aceleración (6 meses):**\n\n**Mes 1-2: Fortalecimiento técnico**\n• Certificación AWS Solutions Architect ($150 USD)\n• Proyecto showcase con microservicios\n• Contribuir a proyectos open source\n\n**Mes 3-4: Desarrollo de liderazgo**\n• Mentoría de junior developers\n• Liderar iniciativa técnica en tu empresa actual\n• Networking en meetups tech Santiago\n\n**Mes 5-6: Transición**\n• Aplicar a posiciones Tech Lead\n• Negociar aumento interno (datos de mercado)\n• Entrevistas estratégicas\n\n💰 **Objetivo salarial:** $3.5M - $4.0M CLP\n📈 **Basado en:** Análisis de mercado actual\n\n¿Empezamos con la certificación AWS o prefieres enfocarte primero en liderazgo?",
        sender: "agent" as const,
        timestamp: new Date(),
      },
    ]

    let messageIndex = 0
    const addMessage = () => {
      if (messageIndex < demoMessages.length) {
        setCareerMessages((prev) => [...prev, demoMessages[messageIndex]])
        messageIndex++
        setTimeout(addMessage, 3000)
      } else {
        setCareerIsPlaying(false)
      }
    }
    setTimeout(addMessage, 2000)
  }

  const startParrotfyDemo = () => {
    const demoMessages = [
      {
        id: "user1",
        content: "¿Cómo van nuestros proyectos este mes?",
        sender: "user" as const,
        timestamp: new Date(),
      },
      {
        id: "agent1",
        content:
          "📊 **Estado de Proyectos - Noviembre 2024:**\n\n✅ **Completados:** 12 proyectos (+3 vs octubre)\n🔄 **En progreso:** 8 proyectos\n⚠️ **Retrasados:** 2 proyectos (E-commerce Mobile, CRM Integration)\n\n💰 **Facturación proyectos:**\n• Completados: $45.2M CLP\n• Pipeline: $28.7M CLP\n• Margen promedio: 34%\n\n🎯 **Próximos hitos:**\n• App Banco Regional: Entrega 15/Nov\n• Sistema Inventario: Testing 20/Nov\n\n¿Quieres que revisemos los proyectos retrasados o prefieres ver el análisis financiero detallado?",
        sender: "agent" as const,
        timestamp: new Date(),
      },
      {
        id: "user2",
        content: "Muéstrame los ingresos y gastos del trimestre",
        sender: "user" as const,
        timestamp: new Date(),
      },
      {
        id: "agent2",
        content:
          "💼 **Análisis Financiero Q4 2024:**\n\n📈 **Ingresos (Oct-Nov):**\n• Servicios desarrollo: $89.4M CLP\n• Consultoría: $23.1M CLP\n• Mantenimiento: $15.7M CLP\n• **Total:** $128.2M CLP (+18% vs Q3)\n\n📉 **Gastos principales:**\n• Nómina: $52.3M CLP (41%)\n• Infraestructura AWS: $8.9M CLP\n• Marketing: $12.1M CLP\n• Oficina: $6.8M CLP\n• **Total gastos:** $80.1M CLP\n\n💰 **Utilidad neta:** $48.1M CLP (37.5% margen)\n📊 **Cash flow:** +$35.2M CLP\n\nEstamos 12% por encima de la proyección. ¿Revisamos el inventario o analizamos satisfacción de clientes?",
        sender: "agent" as const,
        timestamp: new Date(),
        metadata: { showPanels: true },
      },
    ]

    let messageIndex = 0
    const addMessage = () => {
      if (messageIndex < demoMessages.length) {
        const message = demoMessages[messageIndex]
        setParrotfyBusinessMessages((prev) => [...prev, message])

        // Show ERP panels after the financial analysis message
        if (message.metadata?.showPanels) {
          setTimeout(() => setShowERPPanels(true), 1000)
        }

        messageIndex++
        setTimeout(addMessage, 3000)
      } else {
        setParrotfyIsPlaying(false)
      }
    }
    setTimeout(addMessage, 2000)
  }

  const resetEcosueloDemo = () => {
    setEcosueloBotMessages([ecosueloBotMessages[0]])
    setEcosueloIsPlaying(false)
  }

  const resetCareerDemo = () => {
    setCareerMessages([careerMessages[0]])
    setCareerIsPlaying(false)
  }

  const resetParrotfyDemo = () => {
    setParrotfyBusinessMessages([parrotfyBusinessMessages[0]])
    setParrotfyIsPlaying(false)
    setShowERPPanels(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            <Sparkles className="h-3 w-3 mr-1" />
            Casos de Uso Reales
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Neuralia en Acción</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestros ejecutivos IA están transformando industrias reales con datos auténticos y resultados
            medibles
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-lg rounded-xl p-2">
            <TabsTrigger
              value="ecosuelo"
              className="flex items-center space-x-2 data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-lg py-3"
            >
              <Globe className="h-4 w-4" />
              <span className="font-semibold">🌱 EcosueloBot</span>
            </TabsTrigger>
            <TabsTrigger
              value="career"
              className="flex items-center space-x-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg py-3"
            >
              <Rocket className="h-4 w-4" />
              <span className="font-semibold">🚀 Despega tu Carrera</span>
            </TabsTrigger>
            <TabsTrigger
              value="parrotfy"
              className="flex items-center space-x-2 data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-lg py-3"
            >
              <Building2 className="h-4 w-4" />
              <span className="font-semibold">💼 ParrotfyIA</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ecosuelo" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* EcosueloBot Chat Demo */}
              <Card className="border-2 border-green-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">EcosueloBot - Asistente Agrícola</CardTitle>
                        <p className="text-green-100 text-sm">WhatsApp Business • Datos INIA reales</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                      <span className="text-sm">En línea</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-green-50 p-4 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">WhatsApp Business</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={resetEcosueloDemo}
                          className="text-green-600 border-green-300 hover:bg-green-100 bg-transparent"
                        >
                          <RotateCcw className="h-3 w-3 mr-1" />
                          Reiniciar
                        </Button>
                      </div>
                    </div>
                  </div>

                  <ScrollArea className="h-96 p-4">
                    <div className="space-y-4">
                      {ecosueloBotMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg px-4 py-2 ${
                              message.sender === "user"
                                ? "bg-green-500 text-white"
                                : "bg-white border border-gray-200 text-gray-900"
                            }`}
                          >
                            <div className="text-sm whitespace-pre-line">{message.content}</div>
                            <div className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </div>
                          </div>
                        </div>
                      ))}

                      {ecosueloIsPlaying && (
                        <div className="flex justify-start">
                          <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* EcosueloBot Features */}
              <div className="space-y-6">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Capacidades Técnicas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">INIA</div>
                        <div className="text-sm text-gray-600">Datos oficiales</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">24/7</div>
                        <div className="text-sm text-gray-600">Disponibilidad</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">15+</div>
                        <div className="text-sm text-gray-600">Tipos de cultivo</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">GPT-4</div>
                        <div className="text-sm text-gray-600">OpenAI Engine</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Target className="h-5 w-5 mr-2" />
                      Funcionalidades
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Análisis de suelos</span>
                      <span className="font-bold text-green-600">✓ Activo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Recomendaciones fertilización</span>
                      <span className="font-bold text-green-600">✓ Activo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Predicción rendimientos</span>
                      <span className="font-bold text-green-600">✓ Activo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Integración WhatsApp</span>
                      <span className="font-bold text-green-600">✓ Activo</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Integración WhatsApp Business</h3>
                    <p className="text-green-100 mb-4">
                      Conecta directamente con agricultores usando la plataforma que ya conocen y usan diariamente.
                    </p>
                    <Button className="bg-white text-green-600 hover:bg-green-50">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Probar en WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="career" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Career Coach Chat Demo */}
              <Card className="border-2 border-blue-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Rocket className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Coach de Carrera IA</CardTitle>
                        <p className="text-blue-100 text-sm">Datos reales mercado laboral • Análisis personalizado</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
                      <span className="text-sm">Activo</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-blue-50 p-4 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">Coaching Personalizado</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={resetCareerDemo}
                          className="text-blue-600 border-blue-300 hover:bg-blue-100 bg-transparent"
                        >
                          <RotateCcw className="h-3 w-3 mr-1" />
                          Reiniciar
                        </Button>
                      </div>
                    </div>
                  </div>

                  <ScrollArea className="h-96 p-4">
                    <div className="space-y-4">
                      {careerMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg px-4 py-2 ${
                              message.sender === "user"
                                ? "bg-blue-500 text-white"
                                : "bg-white border border-gray-200 text-gray-900"
                            }`}
                          >
                            <div className="text-sm whitespace-pre-line">{message.content}</div>
                            <div className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </div>
                          </div>
                        </div>
                      ))}

                      {careerIsPlaying && (
                        <div className="flex justify-start">
                          <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Career Coach Features */}
              <div className="space-y-6">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-700">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Fuentes de Datos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">Laborum</div>
                        <div className="text-sm text-gray-600">Salarios reales</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">GetOnBoard</div>
                        <div className="text-sm text-gray-600">Ofertas tech</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">LinkedIn</div>
                        <div className="text-sm text-gray-600">Tendencias</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">GPT-4</div>
                        <div className="text-sm text-gray-600">Análisis IA</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-700">
                      <Award className="h-5 w-5 mr-2" />
                      Capacidades
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Análisis de mercado laboral</span>
                      <span className="font-bold text-blue-600">✓ Activo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Benchmarking salarial</span>
                      <span className="font-bold text-blue-600">✓ Activo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Planes de carrera personalizados</span>
                      <span className="font-bold text-blue-600">✓ Activo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Estrategias de negociación</span>
                      <span className="font-bold text-blue-600">✓ Activo</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Coaching Basado en Datos</h3>
                    <p className="text-blue-100 mb-4">
                      Estrategias personalizadas usando datos reales de Laborum, GetOnBoard y LinkedIn Chile.
                    </p>
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">
                      <Rocket className="h-4 w-4 mr-2" />
                      Acelerar mi Carrera
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="parrotfy" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* ParrotfyIA Chat Demo */}
              <Card className="border-2 border-purple-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">ParrotfyIA Assistant</CardTitle>
                        <p className="text-purple-100 text-sm">ERP Conversacional • OpenAI GPT-4.0</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-300 rounded-full animate-pulse"></div>
                      <span className="text-sm">Conectado</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-purple-50 p-4 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Brain className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium text-purple-800">Gestión Empresarial IA</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={resetParrotfyDemo}
                          className="text-purple-600 border-purple-300 hover:bg-purple-100 bg-transparent"
                        >
                          <RotateCcw className="h-3 w-3 mr-1" />
                          Reiniciar
                        </Button>
                      </div>
                    </div>
                  </div>

                  <ScrollArea className="h-96 p-4">
                    <div className="space-y-4">
                      {parrotfyBusinessMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg px-4 py-2 ${
                              message.sender === "user"
                                ? "bg-purple-500 text-white"
                                : "bg-white border border-gray-200 text-gray-900"
                            }`}
                          >
                            <div className="text-sm whitespace-pre-line">{message.content}</div>
                            <div className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </div>
                          </div>
                        </div>
                      ))}

                      {parrotfyIsPlaying && (
                        <div className="flex justify-start">
                          <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* ParrotfyIA Features */}
              <div className="space-y-6">
                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-700">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Capacidades ERP
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">GPT-4</div>
                        <div className="text-sm text-gray-600">OpenAI Engine</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">0.3s</div>
                        <div className="text-sm text-gray-600">Tiempo respuesta</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">15+</div>
                        <div className="text-sm text-gray-600">Módulos ERP</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">99.9%</div>
                        <div className="text-sm text-gray-600">Uptime</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Live ERP Panels */}
                {showERPPanels && (
                  <Card className="border-purple-200 animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center text-purple-700">
                        <PieChart className="h-5 w-5 mr-2" />
                        Paneles en Tiempo Real
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                          <div className="text-lg font-bold text-green-600">$48.1M</div>
                          <div className="text-xs text-gray-600">Utilidad Neta</div>
                          <div className="text-xs text-green-600">+12% vs proyección</div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-200">
                          <div className="text-lg font-bold text-blue-600">37.5%</div>
                          <div className="text-xs text-gray-600">Margen</div>
                          <div className="text-xs text-blue-600">Sobre promedio industria</div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border border-purple-200">
                          <div className="text-lg font-bold text-purple-600">12</div>
                          <div className="text-xs text-gray-600">Proyectos Completados</div>
                          <div className="text-xs text-purple-600">+3 vs mes anterior</div>
                        </div>
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border border-orange-200">
                          <div className="text-lg font-bold text-orange-600">2</div>
                          <div className="text-xs text-gray-600">Proyectos Retrasados</div>
                          <div className="text-xs text-orange-600">Requieren atención</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">ERP Conversacional</h3>
                    <p className="text-purple-100 mb-4">
                      Gestiona toda tu empresa hablando naturalmente. Proyectos, finanzas, inventario y más.
                    </p>
                    <Button className="bg-white text-purple-600 hover:bg-purple-50">
                      <Building2 className="h-4 w-4 mr-2" />
                      Probar ParrotfyIA
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">¿Listo para Transformar tu Industria?</h3>
              <p className="text-lg mb-6 opacity-90">
                Únete a empresas que ya están usando Neuralia para automatizar procesos y acelerar resultados
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                  <Crown className="h-5 w-5 mr-2" />
                  Comenzar Prueba Gratuita
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 bg-transparent"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Demo Personalizada
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
