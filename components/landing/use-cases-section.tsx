"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Package, GraduationCap, BarChart3, Users, ShoppingCart, TrendingUp } from "lucide-react"

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
  badge?: string
  color: string
  messages?: Message[]
  examples?: string[]
  metrics?: {
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
          "Hola Carlos! Soy IrriWatch, tu asistente de análisis de suelos con IA.\n\nAnálisis Sector Norte Completado:\n\nNiveles de Nitrógeno:\n• Zona A: 45 ppm (Óptimo ✅)\n• Zona B: 28 ppm (Bajo ⚠️)\n• Zona C: 52 ppm (Alto 📈)\n\nHidratación Foliar:\n• Humedad promedio: 68%\n• Estrés hídrico detectado en Zona B\n\nRecomendaciones IA:\n✅ Aplicar fertilizante nitrogenado en Zona B\n✅ Reducir riego en Zona C\n✅ Mantener programa actual en Zona A",
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
          "Cronograma Óptimo de Fertilización:\n\nAplicación Recomendada:\n• Fecha ideal: Próximos 3-5 días\n• Hora: 6:00-8:00 AM (menor evaporación)\n• Condiciones: Sin lluvia pronosticada\n\nCondiciones Actuales:\n• Temperatura: 18°C (Ideal)\n• Humedad: 65% (Óptima)\n• Viento: 8 km/h (Favorable)\n\nDosis Calculada por IA:\n• 25 kg/hectárea de urea (46-0-0)\n• Cobertura: 2.3 hectáreas en Zona B\n• Total necesario: 57.5 kg\n\nPróximos pasos automatizados:\n✅ Alerta programada para mañana 6 AM\n✅ Monitoreo post-aplicación en 7 días",
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
          "Sistema Automatizado Configurado\n\nAlertas Programadas:\n• Mañana 6:00 AM: 'Aplicar fertilizante Zona B'\n• En 7 días: 'Monitoreo post-fertilización'\n• En 14 días: 'Análisis de efectividad'\n\nNotificaciones Activas:\n• WhatsApp: +56 9 XXXX-XXXX\n• Email: carlos@campo-norte.cl\n• Dashboard: ecosuelolab.com/alertas\n\nIA Trabajando 24/7:\n• Monitoreo satelital continuo\n• Análisis predictivo de crecimiento\n• Optimización automática de recursos\n\nResultado esperado: +15% rendimiento en Zona B\n\n¡Tu campo está ahora bajo supervisión inteligente! 🚜✨",
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
          'Hola Roberto! Soy Parrotfy, tu asistente ERP inteligente con OpenAI GPT-4.\n\nGenerando reporte Q3... ✅\n\nResumen Ventas Q3 2024:\n• Total: $847M CLP (+12% vs Q2)\n• Transacciones: 2,847 órdenes\n• Ticket promedio: $297,450 CLP\n\nTop 3 Productos:\n1. Laptop Dell XPS 13: 234 unidades\n2. Monitor Samsung 27": 189 unidades\n3. Teclado Mecánico: 156 unidades\n\nAnálisis IA:\n• Tendencia: Crecimiento sostenido\n• Predicción Q4: +8% adicional\n• Recomendación: Aumentar stock laptops',
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
          "Inventario Actualizado en Tiempo Real\n\nLaptop Dell XPS 13:\n• Stock anterior: 12 unidades\n• Ingreso registrado: +50 unidades\n• Stock actual: 62 unidades\n• Ubicación: Bodega A-15\n\nAcciones Automáticas:\n✅ Sistema ERP sincronizado\n✅ Notificación a equipo de ventas\n✅ Actualización en tienda online\n✅ Cálculo automático de valorización\n\nImpacto Financiero:\n• Valor ingreso: $74.5M CLP\n• Stock total valorizado: $92.1M CLP\n\nAlerta IA: Stock óptimo alcanzado para demanda Q4",
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
          "Recomendaciones IA para Optimización:\n\nAnálisis Predictivo:\n• Monitor Samsung: Stock bajo (23 unidades)\n• Demanda proyectada: 45 unidades/semana\n• Acción: Reabastecer en 5 días\n\nOportunidades Detectadas:\n• Bundle Laptop + Monitor: +25% margen\n• Promoción teclados: Inventario alto (89 unidades)\n• Cross-selling automático activado\n\nEstrategia Sugerida:\n✅ Campaña 'Combo Productividad'\n✅ Descuento 15% en teclados\n✅ Alerta automática restock monitores\n\nImpacto Estimado: +$127M CLP en Q4\n\n¿Activo las campañas automáticas? 🤖✨",
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
          "Hola querido/a, entiendo perfectamente esa sensación de incertidumbre. Es completamente normal sentirse así, y quiero que sepas que estás dando un paso muy valiente al buscar claridad. 🌟\n\nPrimero, respira hondo. Esos sentimientos son válidos y muchas personas exitosas han pasado por exactamente lo mismo.\n\nVamos a explorar juntos:\n• ¿Qué es lo que más te gusta de tu trabajo actual?\n• ¿Qué te hace sentir realizado/a profesionalmente?\n• ¿Cuáles son tus valores más importantes?\n\nNo hay respuestas correctas o incorrectas aquí. Solo quiero conocerte mejor para poder acompañarte de la mejor manera.\n\n¿Te parece si empezamos por lo que SÍ te gusta de tu situación actual? A veces ahí encontramos pistas valiosas. ✨",
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
          "Qué valioso lo que compartes! Tener un buen ambiente laboral es un tesoro que no todos tienen, y es hermoso que valores esas relaciones. 💕\n\nTu sentir es súper legítimo. El crecimiento profesional es una necesidad humana básica, como el aire que respiramos. No te sientas mal por quererlo.\n\nReflexionemos juntos:\n• ¿Has conversado con tu jefe sobre oportunidades de crecimiento?\n• ¿Existen proyectos nuevos donde podrías aportar más?\n• ¿Hay capacitaciones o certificaciones que te interesen?\n\nPosibles caminos:\n1. Crecer donde estás: Proponer nuevas responsabilidades\n2. Crecer hacia afuera: Buscar oportunidades externas\n3. Crecer por dentro: Desarrollar habilidades mientras decides\n\nRecuerda: No tienes que decidir todo hoy. ¿Qué te resuena más en este momento? Estoy aquí para acompañarte sin presión. 💜",
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
          "Ay, mi querido/a, ese miedo es TAN humano y comprensible. La estabilidad es importante, y es inteligente de tu parte valorarla. No eres cobarde por sentir miedo, eres prudente. 🤗\n\nEl miedo y la emoción pueden coexistir:\n• Miedo = Tu mente cuidándote\n• Emoción = Tu corazón llamándote a crecer\n• Ambos son válidos y necesarios\n\nEstrategia suave para explorar:\n✨ Actualiza tu LinkedIn sin prisa\n✨ Conversa informalmente con contactos\n✨ Explora ofertas sin compromiso\n✨ Mantén tu trabajo mientras investigas\n\nTu red de seguridad:\n• Tienes experiencia valiosa\n• Conoces tu valor en el mercado\n• Puedes tomarte el tiempo necesario\n\nRecuerda: Explorar no es comprometerse. Es darte el regalo de conocer tus opciones.\n\n¿Qué te parece si empezamos por algo pequeñito y sin presión? 🌱✨",
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
          "Hola María! Soy tu asistente CRM con IA. Aquí tienes el resumen de tus clientes VIP:\n\nTop 3 Clientes Estratégicos:\n\n1. TechCorp SA 💼\n   • Valor: $2.4M CLP/año\n   • Última interacción: Hace 3 días\n   • Estado: Renovación pendiente (Dic 2024)\n   • Acción requerida: Llamada de seguimiento\n\n2. Innovatech Ltda 🚀\n   • Valor: $1.8M CLP/año\n   • Última interacción: Ayer (email)\n   • Estado: Interesados en upgrade\n   • Oportunidad: Propuesta premium\n\n3. StartupXYZ 🌟\n   • Valor: $950K CLP/año\n   • Última interacción: Hace 1 semana\n   • Estado: Satisfecho, referidos potenciales\n   • Acción: Solicitar testimonial",
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
          "Seguimiento Automático Configurado para TechCorp SA\n\nCronograma IA Personalizado:\n• Hoy 3:00 PM: Recordatorio para llamada\n• Mañana 10:00 AM: Email de seguimiento automático\n• En 3 días: Propuesta de renovación generada\n• Semanal: Monitoreo de engagement\n\nEmail Borrador Generado:\n'Hola Roberto, espero que estés bien. Quería hacer seguimiento a nuestra conversación sobre la renovación...'\n\nEstrategia IA Sugerida:\n• Destacar ROI actual: +34% eficiencia\n• Mencionar nuevas funcionalidades 2024\n• Ofrecer descuento por renovación temprana\n\nProbabilidad de cierre: 78% (basado en historial)\n\n¿Apruebas el envío automático del email mañana? 🤖",
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
          "Campaña Premium Creada para Innovatech\n\nEstrategia Personalizada IA:\n\nAnálisis del Cliente:\n• Uso actual: 67% de capacidad\n• Crecimiento: +45% último trimestre\n• Pain points: Reportes limitados\n\nPropuesta Premium Generada:\n• Reportes avanzados con IA\n• Integraciones ilimitadas\n• Soporte prioritario 24/7\n• Dashboard ejecutivo personalizado\n\nPricing Inteligente:\n• Upgrade: +$480K CLP/año\n• ROI estimado: 340%\n• Descuento lanzamiento: 15%\n\nSecuencia Automática:\n✅ Email personalizado (hoy 4 PM)\n✅ Demo interactiva (programada)\n✅ Propuesta formal (en 2 días)\n✅ Follow-up inteligente\n\nProbabilidad de upgrade: 85%\n\n¡Campaña activada! Te notificaré los resultados. 📈✨",
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
  {
    id: "chat",
    title: "Smart Chat",
    icon: MessageSquare,
    description: "AI assistants that understand context",
    examples: ["Customer support", "Sales chat", "Help desk"],
    color: "bg-blue-100",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Boost sales with intelligent recommendations",
    examples: ["Product suggestions", "Cart recovery", "Price optimization"],
    color: "bg-green-100",
  },
  {
    id: "hr",
    title: "HR & Recruiting",
    icon: Users,
    description: "Streamline hiring and employee management",
    examples: ["Resume screening", "Interview scheduling", "Onboarding"],
    color: "bg-purple-100",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: TrendingUp,
    description: "Turn data into actionable insights",
    examples: ["Performance tracking", "Trend analysis", "Reporting"],
    color: "bg-orange-100",
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Use Cases
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Real solutions for real people</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how businesses use our AI agents to solve actual problems
          </p>
        </div>

        <Tabs defaultValue={activeTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <TabsTrigger key={useCase.id} value={useCase.id} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{useCase.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {useCases.map((useCase) => {
            const Icon = useCase.icon
            return (
              <TabsContent key={useCase.id} value={useCase.id}>
                <Card className="max-w-4xl mx-auto">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${useCase.color}`}>
                        <Icon className={`h-8 w-8 text-white`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                        <p className="text-gray-600 mt-1">{useCase.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {useCase.messages ? (
                      <div className="space-y-4">
                        {useCase.messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`flex items-start gap-3 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                            >
                              <div
                                className={`p-2 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"}`}
                              >
                                <p className="text-sm whitespace-pre-line">{message.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {useCase.examples.map((example, index) => (
                          <div key={index} className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">{example}</h4>
                            <p className="text-sm text-gray-600">
                              Automated solution that saves time and improves results
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
