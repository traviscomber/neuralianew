"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageSquare,
  Package,
  GraduationCap,
  BarChart3,
  Users,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
}

interface UseCase {
  id: string
  title: string
  description: string
  icon: React.ComponentType<any>
  badge: string
  color: string
  messages: Message[]
  metrics: {
    improvement: string
    automation: string
    users: string
  }
}

const useCases: UseCase[] = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    description: "Análisis de suelos con IA para agricultura de precisión",
    icon: BarChart3,
    badge: "ecosuelolab.com",
    color: "bg-green-500",
    messages: [
      {
        id: "1",
        content: "Necesito analizar los niveles de nitrógeno en el sector norte de mi campo",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "2",
        content:
          "🌱 ¡Hola Carlos! Soy IrriWatch, tu asistente de análisis de suelos con IA.\n\n📊 **Análisis Sector Norte Completado:**\n\n🔬 **Niveles de Nitrógeno:**\n• Zona A: 45 ppm (Óptimo ✅)\n• Zona B: 28 ppm (Bajo ⚠️)\n• Zona C: 52 ppm (Alto 📈)\n\n💧 **Hidratación Foliar:**\n• Humedad promedio: 68%\n• Estrés hídrico detectado en Zona B\n\n📋 **Recomendaciones IA:**\n✅ Aplicar fertilizante nitrogenado en Zona B\n✅ Reducir riego en Zona C\n✅ Mantener programa actual en Zona A",
        sender: "assistant",
        timestamp: new Date(),
      },
      {
        id: "3",
        content: "Perfecto. ¿Cuándo debería aplicar el fertilizante en la Zona B?",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "4",
        content:
          "⏰ **Cronograma Óptimo de Fertilización:**\n\n🗓️ **Aplicación Recomendada:**\n• **Fecha ideal:** Próximos 3-5 días\n• **Hora:** 6:00-8:00 AM (menor evaporación)\n• **Condiciones:** Sin lluvia pronosticada\n\n🌡️ **Condiciones Actuales:**\n• Temperatura: 18°C (Ideal)\n• Humedad: 65% (Óptima)\n• Viento: 8 km/h (Favorable)\n\n📦 **Dosis Calculada por IA:**\n• 25 kg/hectárea de urea (46-0-0)\n• Cobertura: 2.3 hectáreas en Zona B\n• Total necesario: 57.5 kg\n\n🚜 **Próximos pasos automatizados:**\n✅ Alerta programada para mañana 6 AM\n✅ Monitoreo post-aplicación en 7 días",
        sender: "assistant",
        timestamp: new Date(),
      },
      {
        id: "5",
        content: "Excelente. Programa la alerta y el monitoreo automático",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "6",
        content:
          '✅ **Sistema Automatizado Configurado**\n\n🔔 **Alertas Programadas:**\n• Mañana 6:00 AM: "Aplicar fertilizante Zona B"\n• En 7 días: "Monitoreo post-fertilización"\n• En 14 días: "Análisis de efectividad"\n\n📱 **Notificaciones Activas:**\n• WhatsApp: +56 9 XXXX-XXXX\n• Email: carlos@campo-norte.cl\n• Dashboard: ecosuelolab.com/alertas\n\n🤖 **IA Trabajando 24/7:**\n• Monitoreo satelital continuo\n• Análisis predictivo de crecimiento\n• Optimización automática de recursos\n\n🌱 **Resultado esperado:** +15% rendimiento en Zona B\n\n¡Tu campo está ahora bajo supervisión inteligente! 🚜✨',
        sender: "assistant",
        timestamp: new Date(),
      },
    ],
    metrics: {
      improvement: "40% Aumento en rendimiento de cultivos",
      automation: "85% Automatización en análisis de suelos",
      users: "500+ Agricultores usando IA",
    },
  },
  {
    id: "parrotfy",
    title: "Parrotfy ERP",
    description: "Sistema ERP online inteligente para gestión empresarial",
    icon: Package,
    badge: "parrotfy.com",
    color: "bg-blue-500",
    messages: [
      {
        id: "1",
        content: "Necesito el reporte de ventas del Q3 y actualizar el inventario de productos",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "2",
        content:
          '📊 ¡Hola Roberto! Soy Parrotfy, tu asistente ERP inteligente con OpenAI GPT-4.\n\n**Generando reporte Q3...** ✅\n\n📈 **Resumen Ventas Q3 2024:**\n• Total: $847M CLP (+12% vs Q2)\n• Transacciones: 2,847 órdenes\n• Ticket promedio: $297,450 CLP\n\n🏆 **Top 3 Productos:**\n1. Laptop Dell XPS 13: 234 unidades\n2. Monitor Samsung 27": 189 unidades  \n3. Teclado Mecánico: 156 unidades\n\n📊 **Análisis IA:**\n• Tendencia: Crecimiento sostenido\n• Predicción Q4: +8% adicional\n• Recomendación: Aumentar stock laptops',
        sender: "assistant",
        timestamp: new Date(),
      },
      {
        id: "3",
        content: "Perfecto. ¿Puedes actualizar el stock de laptops Dell? Llegaron 50 unidades hoy",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "4",
        content:
          "✅ **Inventario Actualizado en Tiempo Real**\n\n💻 **Laptop Dell XPS 13:**\n• Stock anterior: 12 unidades\n• Ingreso registrado: +50 unidades\n• **Stock actual: 62 unidades**\n• Ubicación: Bodega A-15\n\n📋 **Acciones Automáticas:**\n✅ Sistema ERP sincronizado\n✅ Notificación a equipo de ventas\n✅ Actualización en tienda online\n✅ Cálculo automático de valorización\n\n💰 **Impacto Financiero:**\n• Valor ingreso: $74.5M CLP\n• Stock total valorizado: $92.1M CLP\n\n🔔 **Alerta IA:** Stock óptimo alcanzado para demanda Q4",
        sender: "assistant",
        timestamp: new Date(),
      },
      {
        id: "5",
        content: "Genial. ¿Hay alguna recomendación para optimizar las ventas?",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "6",
        content:
          '🚀 **Recomendaciones IA para Optimización:**\n\n📊 **Análisis Predictivo:**\n• Monitor Samsung: Stock bajo (23 unidades)\n• Demanda proyectada: 45 unidades/semana\n• **Acción:** Reabastecer en 5 días\n\n💡 **Oportunidades Detectadas:**\n• Bundle Laptop + Monitor: +25% margen\n• Promoción teclados: Inventario alto (89 unidades)\n• Cross-selling automático activado\n\n🎯 **Estrategia Sugerida:**\n✅ Campaña "Combo Productividad" \n✅ Descuento 15% en teclados\n✅ Alerta automática restock monitores\n\n📈 **Impacto Estimado:** +$127M CLP en Q4\n\n¿Activo las campañas automáticas? 🤖✨',
        sender: "assistant",
        timestamp: new Date(),
      },
    ],
    metrics: {
      improvement: "75% Reducción en tiempo de gestión",
      automation: "90% Automatización de procesos empresariales",
      users: "800+ Empresas gestionando con IA",
    },
  },
  {
    id: "despega",
    title: "Despega tu Carrera",
    description: "Coaching personalizado con IA para desarrollo profesional",
    icon: GraduationCap,
    badge: "Coaching IA",
    color: "bg-purple-500",
    messages: [
      {
        id: "1",
        content: "Me siento perdido en mi carrera. No sé si seguir en mi trabajo actual o buscar algo nuevo",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "2",
        content:
          "💜 Hola querido/a, entiendo perfectamente esa sensación de incertidumbre. Es completamente normal sentirse así, y quiero que sepas que estás dando un paso muy valiente al buscar claridad. 🌟\n\n😌 **Primero, respira hondo.** Esos sentimientos son válidos y muchas personas exitosas han pasado por exactamente lo mismo.\n\n🤗 **Vamos a explorar juntos:**\n• ¿Qué es lo que más te gusta de tu trabajo actual?\n• ¿Qué te hace sentir realizado/a profesionalmente?\n• ¿Cuáles son tus valores más importantes?\n\n💭 No hay respuestas correctas o incorrectas aquí. Solo quiero conocerte mejor para poder acompañarte de la mejor manera.\n\n¿Te parece si empezamos por lo que SÍ te gusta de tu situación actual? A veces ahí encontramos pistas valiosas. ✨",
        sender: "assistant",
        timestamp: new Date(),
      },
      {
        id: "3",
        content:
          "Me gusta el ambiente de trabajo y mis compañeros, pero siento que no estoy creciendo profesionalmente",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "4",
        content:
          "🌱 ¡Qué valioso lo que compartes! Tener un buen ambiente laboral es un tesoro que no todos tienen, y es hermoso que valores esas relaciones. 💕\n\n😊 **Tu sentir es súper legítimo.** El crecimiento profesional es una necesidad humana básica, como el aire que respiramos. No te sientas mal por quererlo.\n\n🤔 **Reflexionemos juntos:**\n• ¿Has conversado con tu jefe sobre oportunidades de crecimiento?\n• ¿Existen proyectos nuevos donde podrías aportar más?\n• ¿Hay capacitaciones o certificaciones que te interesen?\n\n💡 **Posibles caminos:**\n1. **Crecer donde estás:** Proponer nuevas responsabilidades\n2. **Crecer hacia afuera:** Buscar oportunidades externas\n3. **Crecer por dentro:** Desarrollar habilidades mientras decides\n\n🫂 Recuerda: No tienes que decidir todo hoy. ¿Qué te resuena más en este momento? Estoy aquí para acompañarte sin presión. 💜",
        sender: "assistant",
        timestamp: new Date(),
      },
      {
        id: "5",
        content: "Creo que me gustaría explorar oportunidades externas, pero me da miedo dejar la estabilidad",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "6",
        content:
          "💙 Ay, mi querido/a, ese miedo es TAN humano y comprensible. La estabilidad es importante, y es inteligente de tu parte valorarla. No eres cobarde por sentir miedo, eres prudente. 🤗\n\n🌈 **El miedo y la emoción pueden coexistir:**\n• Miedo = Tu mente cuidándote\n• Emoción = Tu corazón llamándote a crecer\n• Ambos son válidos y necesarios\n\n💪 **Estrategia suave para explorar:**\n✨ Actualiza tu LinkedIn sin prisa\n✨ Conversa informalmente con contactos\n✨ Explora ofertas sin compromiso\n✨ Mantén tu trabajo mientras investigas\n\n🛡️ **Tu red de seguridad:**\n• Tienes experiencia valiosa\n• Conoces tu valor en el mercado\n• Puedes tomarte el tiempo necesario\n\n💜 **Recuerda:** Explorar no es comprometerse. Es darte el regalo de conocer tus opciones.\n\n¿Qué te parece si empezamos por algo pequeñito y sin presión? 🌱✨",
        sender: "assistant",
        timestamp: new Date(),
      },
    ],
    metrics: {
      improvement: "85% Mejora en claridad profesional",
      automation: "70% Personalización automática de coaching",
      users: "1,200+ Profesionales creciendo con IA",
    },
  },
  {
    id: "crm",
    title: "CRM Inteligente",
    description: "Gestión de clientes potenciada con IA conversacional",
    icon: Users,
    badge: "CRM IA",
    color: "bg-orange-500",
    messages: [
      {
        id: "1",
        content: "Necesito un resumen de mis clientes más importantes y sus últimas interacciones",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "2",
        content:
          "👋 ¡Hola María! Soy tu asistente CRM con IA. Aquí tienes el resumen de tus clientes VIP:\n\n🏆 **Top 3 Clientes Estratégicos:**\n\n1. **TechCorp SA** 💼\n   • Valor: $2.4M CLP/año\n   • Última interacción: Hace 3 días\n   • Estado: Renovación pendiente (Dic 2024)\n   • ⚠️ Acción requerida: Llamada de seguimiento\n\n2. **Innovatech Ltda** 🚀\n   • Valor: $1.8M CLP/año\n   • Última interacción: Ayer (email)\n   • Estado: Interesados en upgrade\n   • ✅ Oportunidad: Propuesta premium\n\n3. **StartupXYZ** 🌟\n   • Valor: $950K CLP/año\n   • Última interacción: Hace 1 semana\n   • Estado: Satisfecho, referidos potenciales\n   • 💡 Acción: Solicitar testimonial",
        sender: "assistant",
        timestamp: new Date(),
      },
      {
        id: "3",
        content: "Perfecto. ¿Puedes programar un seguimiento automático para TechCorp?",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "4",
        content:
          '✅ **Seguimiento Automático Configurado para TechCorp SA**\n\n📅 **Cronograma IA Personalizado:**\n• **Hoy 3:00 PM:** Recordatorio para llamada\n• **Mañana 10:00 AM:** Email de seguimiento automático\n• **En 3 días:** Propuesta de renovación generada\n• **Semanal:** Monitoreo de engagement\n\n📧 **Email Borrador Generado:**\n*"Hola Roberto, espero que estés bien. Quería hacer seguimiento a nuestra conversación sobre la renovación..."*\n\n🎯 **Estrategia IA Sugerida:**\n• Destacar ROI actual: +34% eficiencia\n• Mencionar nuevas funcionalidades 2024\n• Ofrecer descuento por renovación temprana\n\n📊 **Probabilidad de cierre:** 78% (basado en historial)\n\n¿Apruebas el envío automático del email mañana? 🤖',
        sender: "assistant",
        timestamp: new Date(),
      },
      {
        id: "5",
        content: "Sí, apruebo. También quiero crear una campaña para Innovatech sobre el upgrade premium",
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: "6",
        content:
          "🚀 **Campaña Premium Creada para Innovatech**\n\n✨ **Estrategia Personalizada IA:**\n\n📊 **Análisis del Cliente:**\n• Uso actual: 67% de capacidad\n• Crecimiento: +45% último trimestre\n• Pain points: Reportes limitados\n\n💎 **Propuesta Premium Generada:**\n• Reportes avanzados con IA\n• Integraciones ilimitadas\n• Soporte prioritario 24/7\n• Dashboard ejecutivo personalizado\n\n💰 **Pricing Inteligente:**\n• Upgrade: +$480K CLP/año\n• ROI estimado: 340%\n• Descuento lanzamiento: 15%\n\n📱 **Secuencia Automática:**\n✅ Email personalizado (hoy 4 PM)\n✅ Demo interactiva (programada)\n✅ Propuesta formal (en 2 días)\n✅ Follow-up inteligente\n\n🎯 **Probabilidad de upgrade:** 85%\n\n¡Campaña activada! Te notificaré los resultados. 📈✨",
        sender: "assistant",
        timestamp: new Date(),
      },
    ],
    metrics: {
      improvement: "60% Aumento en conversión de leads",
      automation: "80% Automatización en seguimiento de clientes",
      users: "2,500+ Vendedores optimizando con IA",
    },
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState<{ [key: string]: number }>({})
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({})

  // Auto-start demo for all use cases
  useEffect(() => {
    const startAllDemos = () => {
      const initialPlaying: { [key: string]: boolean } = {}
      const initialMessageIndex: { [key: string]: number } = {}

      useCases.forEach((useCase) => {
        initialPlaying[useCase.id] = true
        initialMessageIndex[useCase.id] = 0
      })

      setIsPlaying(initialPlaying)
      setCurrentMessageIndex(initialMessageIndex)
    }

    // Start all demos after a short delay
    const timer = setTimeout(startAllDemos, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Auto-advance messages
  useEffect(() => {
    const intervals: { [key: string]: NodeJS.Timeout } = {}

    useCases.forEach((useCase) => {
      if (isPlaying[useCase.id] && currentMessageIndex[useCase.id] < useCase.messages.length) {
        intervals[useCase.id] = setInterval(() => {
          setCurrentMessageIndex((prev) => {
            const current = prev[useCase.id] || 0
            if (current < useCase.messages.length - 1) {
              return { ...prev, [useCase.id]: current + 1 }
            } else {
              // Stop playing when all messages are shown
              setIsPlaying((prevPlaying) => ({ ...prevPlaying, [useCase.id]: false }))
              return prev
            }
          })
        }, 3000) // 3 seconds between messages
      }
    })

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval))
    }
  }, [isPlaying, currentMessageIndex])

  const togglePlayPause = (useCaseId: string) => {
    setIsPlaying((prev) => ({ ...prev, [useCaseId]: !prev[useCaseId] }))
  }

  const resetDemo = (useCaseId: string) => {
    setCurrentMessageIndex((prev) => ({ ...prev, [useCaseId]: 0 }))
    setIsPlaying((prev) => ({ ...prev, [useCaseId]: true }))
  }

  const activeUseCase = useCases.find((uc) => uc.id === activeTab)!
  const visibleMessages = activeUseCase.messages.slice(0, (currentMessageIndex[activeTab] || 0) + 1)

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Casos de Uso Reales
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            IA Conversacional en <span className="text-blue-600">Acción</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestros agentes de IA están transformando industrias reales con conversaciones inteligentes y
            automatización avanzada
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <TabsTrigger key={useCase.id} value={useCase.id} className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{useCase.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {useCases.map((useCase) => {
            const Icon = useCase.icon
            const messages = useCase.messages.slice(0, (currentMessageIndex[useCase.id] || 0) + 1)

            return (
              <TabsContent key={useCase.id} value={useCase.id}>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Chat Simulation */}
                  <Card className="h-[600px] flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${useCase.color} text-white`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{useCase.title}</CardTitle>
                            <Badge variant="secondary" className="text-xs">
                              {useCase.badge}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => togglePlayPause(useCase.id)}>
                            {isPlaying[useCase.id] ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => resetDemo(useCase.id)}>
                            Reiniciar
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto">
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`flex items-start gap-3 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                            >
                              <Avatar className="w-8 h-8 flex-shrink-0">
                                <AvatarFallback className={message.sender === "user" ? "bg-blue-100" : "bg-green-100"}>
                                  {message.sender === "user" ? "U" : "IA"}
                                </AvatarFallback>
                              </Avatar>
                              <div
                                className={`p-3 rounded-lg ${
                                  message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                                }`}
                              >
                                <p className="text-sm whitespace-pre-line">{message.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Use Case Details */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Icon className="w-6 h-6" />
                          {useCase.title}
                        </CardTitle>
                        <CardDescription className="text-base">{useCase.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="font-medium">{useCase.metrics.improvement}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-yellow-500" />
                            <span className="font-medium">{useCase.metrics.automation}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-blue-500" />
                            <span className="font-medium">{useCase.metrics.users}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Capacidades Técnicas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <MessageSquare className="w-4 h-4 text-blue-500" />
                            <span className="text-sm">Procesamiento de lenguaje natural avanzado</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <BarChart3 className="w-4 h-4 text-green-500" />
                            <span className="text-sm">Análisis predictivo con machine learning</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Globe className="w-4 h-4 text-purple-500" />
                            <span className="text-sm">Integración con sistemas existentes</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm">Automatización de procesos complejos</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Button className="w-full" size="lg">
                      Crear Agente Similar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
