"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  MessageCircle,
  TrendingUp,
  Globe,
  Briefcase,
  GraduationCap,
  BarChart3,
  Target,
  Star,
  Sprout,
  Building2,
  Droplets,
  Headphones,
  ShoppingCart,
  FileText,
} from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: string
}

interface ChatDemoProps {
  messages: Message[]
  isActive: boolean
  colorScheme: "green" | "blue" | "purple"
}

const ChatDemo = ({ messages, isActive, colorScheme }: ChatDemoProps) => {
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const colorClasses = {
    green: {
      userBg: "bg-green-500",
      botBg: "bg-green-50",
      botText: "text-green-800",
      userText: "text-white",
    },
    blue: {
      userBg: "bg-blue-500",
      botBg: "bg-blue-50",
      botText: "text-blue-800",
      userText: "text-white",
    },
    purple: {
      userBg: "bg-purple-500",
      botBg: "bg-purple-50",
      botText: "text-purple-800",
      userText: "text-white",
    },
  }

  useEffect(() => {
    if (!isActive) {
      setDisplayedMessages([])
      setCurrentMessageIndex(0)
      return
    }

    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(
        () => {
          setDisplayedMessages((prev) => [...prev, messages[currentMessageIndex]])
          setCurrentMessageIndex((prev) => prev + 1)
        },
        currentMessageIndex === 0 ? 1000 : 2000,
      )

      return () => clearTimeout(timer)
    }
  }, [isActive, currentMessageIndex, messages])

  const colors = colorClasses[colorScheme]

  return (
    <div className="h-80 bg-white rounded-lg border overflow-hidden flex flex-col">
      <div
        className={`p-3 bg-gradient-to-r ${colorScheme === "green" ? "from-green-500 to-emerald-600" : colorScheme === "blue" ? "from-blue-500 to-indigo-600" : "from-purple-500 to-indigo-600"} text-white`}
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          <span className="font-medium text-sm">{colorScheme === "green" ? "WhatsApp Business" : "Chat en Vivo"}</span>
          <div className="ml-auto flex gap-1">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {displayedMessages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
                message.sender === "user"
                  ? `${colors.userBg} ${colors.userText}`
                  : `${colors.botBg} ${colors.botText} border`
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("customer-service")

  const useCases = [
    {
      id: "customer-service",
      title: "Customer Service",
      icon: Headphones,
      description: "24/7 intelligent support that understands and resolves customer issues",
      features: ["Instant responses", "Multi-language support", "Escalation handling", "Sentiment analysis"],
      metrics: { efficiency: "85%", satisfaction: "92%", cost: "60%" },
    },
    {
      id: "sales",
      title: "Sales Automation",
      icon: ShoppingCart,
      description: "AI-powered sales assistant that qualifies leads and closes deals",
      features: ["Lead qualification", "Personalized outreach", "Follow-up automation", "Deal tracking"],
      metrics: { conversion: "40%", productivity: "65%", revenue: "35%" },
    },
    {
      id: "analytics",
      title: "Business Intelligence",
      icon: BarChart3,
      description: "Transform data into actionable insights with natural language queries",
      features: ["Natural language queries", "Real-time dashboards", "Predictive analytics", "Custom reports"],
      metrics: { insights: "10x", decisions: "3x", accuracy: "95%" },
    },
    {
      id: "content",
      title: "Content Creation",
      icon: FileText,
      description: "Generate high-quality content that matches your brand voice",
      features: ["Brand voice matching", "SEO optimization", "Multi-format content", "Quality assurance"],
      metrics: { speed: "5x", quality: "90%", consistency: "100%" },
    },
    {
      id: "ecosuelo",
      title: "EcosueloBot",
      icon: Sprout,
      subtitle: "Asistente Agrícola Inteligente",
      description:
        "Análisis de suelos, riego inteligente y recomendaciones agrícolas con datos INIA, IrriWatch y sensores IoT",
      colorScheme: "green" as const,
      stats: [
        { icon: Sprout, label: "Análisis de Suelo", value: "2,847" },
        { icon: Droplets, label: "Sistemas de Riego", value: "1,234" },
        { icon: TrendingUp, label: "Mejora Rendimiento", value: "34%" },
        { icon: Globe, label: "Regiones Chile", value: "15" },
      ],
      features: [
        "Análisis de pH y nutrientes del suelo (INIA)",
        "Monitoreo de riego inteligente (IrriWatch)",
        "Predicción climática y fenológica",
        "Integración WhatsApp Business + ChatGPT",
      ],
      messages: [
        {
          id: 1,
          text: "Hola! Tengo 50 hectáreas de trigo en Maule. Mi análisis muestra pH 6.5, fósforo bajo. ¿Cuándo debo regar?",
          sender: "user" as const,
          timestamp: "10:30",
        },
        {
          id: 2,
          text: "¡Perfecto! Según datos integrados:\n\n🌱 **INIA:** pH 6.5 óptimo, fósforo bajo común en Maule\n💧 **IrriWatch:** Humedad suelo 45% - necesita riego\n🌡️ **Sensores IoT:** Temp 22°C, evapotranspiración 4.2mm/día\n\n📊 **Recomendación:**\n• Riego: 25mm mañana (6-8 AM)\n• Fertilización: Superfosfato triple 150 kg/ha\n• Próximo riego: en 3 días según pronóstico",
          sender: "bot" as const,
          timestamp: "10:31",
        },
        {
          id: 3,
          text: "¿Qué dice el pronóstico climático para esta semana?",
          sender: "user" as const,
          timestamp: "10:32",
        },
        {
          id: 4,
          text: "📡 **Datos integrados DMC + IrriWatch:**\n\n🌤️ **Próximos 7 días:**\n• Lun-Mar: Soleado, 18-25°C, viento 12 km/h\n• Mié: 40% lluvia (8-12mm esperados)\n• Jue-Vie: Despejado, 20-27°C\n• Fin semana: Estable\n\n💧 **Ajuste riego automático:**\n• Reducir 30% el miércoles\n• Suspender si lluvia >10mm\n• Reanudar jueves según humedad suelo\n\n🎯 **Ahorro estimado:** 15% agua + $180k/temporada",
          sender: "bot" as const,
          timestamp: "10:33",
        },
      ],
    },
    {
      id: "career",
      title: "Despega tu Carrera",
      icon: Briefcase,
      subtitle: "Coach de Carrera con IA",
      description: "Orientación profesional personalizada con datos reales del mercado laboral chileno",
      colorScheme: "blue" as const,
      stats: [
        { icon: Briefcase, label: "Profesionales Asesorados", value: "3,456" },
        { icon: GraduationCap, label: "Planes de Carrera", value: "1,890" },
        { icon: TrendingUp, label: "Éxito en Colocación", value: "78%" },
        { icon: Target, label: "Industrias Cubiertas", value: "25" },
      ],
      features: [
        "Análisis de mercado laboral en tiempo real",
        "Benchmarking salarial con datos Laborum",
        "Planes de carrera personalizados",
        "Estrategias de negociación salarial",
      ],
      messages: [
        {
          id: 1,
          text: "Hola! Soy ingeniero de software con 3 años de experiencia en Santiago. Quiero acelerar mi carrera y aumentar mi salario",
          sender: "user" as const,
          timestamp: "14:15",
        },
        {
          id: 2,
          text: "¡Excelente timing! Con 3 años de experiencia estás en el momento perfecto para acelerar. Según datos actuales de Laborum y GetOnBoard:\n\n💰 **Tu rango actual:** $1.8M - $2.5M CLP\n🎯 **Objetivo realista:** $2.8M - $3.5M (+40%)\n📈 **Demanda:** +35% vs 2023\n\n¿En qué tecnologías te especializas? Te ayudo a identificar el camino más rápido.",
          sender: "bot" as const,
          timestamp: "14:16",
        },
        {
          id: 3,
          text: "Trabajo con React, Node.js y AWS. Me interesa liderar equipos",
          sender: "user" as const,
          timestamp: "14:17",
        },
        {
          id: 4,
          text: "¡Stack perfecto para liderazgo! React + Node.js + AWS es muy demandado.\n\n🚀 **Plan 6 meses:**\n📚 **Mes 1-2:** Certificación AWS Solutions Architect\n👥 **Mes 3-4:** Mentoría junior developers + liderar proyecto\n💼 **Mes 5-6:** Aplicar Tech Lead positions\n\n🎯 **Objetivo salarial:** $3.5M - $4.0M CLP\n📊 **Basado en:** 127 ofertas LinkedIn + 89 GetOnBoard\n\n¿Empezamos con AWS o prefieres enfocarte en liderazgo?",
          sender: "bot" as const,
          timestamp: "14:18",
        },
      ],
    },
    {
      id: "parrotfy",
      title: "ParrotfyIA",
      icon: Building2,
      subtitle: "ERP Conversacional con OpenAI GPT-4",
      description: "Gestión empresarial completa a través de conversación natural con inteligencia artificial",
      colorScheme: "purple" as const,
      stats: [
        { icon: Building2, label: "Empresas Activas", value: "156" },
        { icon: BarChart3, label: "Consultas Diarias", value: "4,321" },
        { icon: TrendingUp, label: "Eficiencia Operativa", value: "85%" },
        { icon: Star, label: "Módulos ERP", value: "15" },
      ],
      features: [
        "Gestión de proyectos conversacional",
        "Análisis financiero en tiempo real",
        "Control de inventario inteligente",
        "Reportes automáticos con OpenAI GPT-4",
      ],
      messages: [
        {
          id: 1,
          text: "¿Cómo van nuestros proyectos este mes? Necesito un resumen ejecutivo",
          sender: "user" as const,
          timestamp: "16:45",
        },
        {
          id: 2,
          text: "📊 **Resumen Ejecutivo - Noviembre 2024:**\n\n✅ **Completados:** 12 proyectos (+3 vs octubre)\n🔄 **En progreso:** 8 proyectos\n⚠️ **Retrasados:** 2 proyectos (E-commerce Mobile, CRM Integration)\n\n💰 **Facturación:**\n• Completados: $45.2M CLP\n• Pipeline: $28.7M CLP\n• Margen: 34%\n\n🎯 **Próximos hitos:** App Banco Regional (15/Nov), Sistema Inventario (20/Nov)",
          sender: "bot" as const,
          timestamp: "16:46",
        },
        {
          id: 3,
          text: "Muéstrame el análisis financiero del trimestre",
          sender: "user" as const,
          timestamp: "16:47",
        },
        {
          id: 4,
          text: "💼 **Análisis Financiero Q4 2024:**\n\n📈 **Ingresos (Oct-Nov):**\n• Desarrollo: $89.4M CLP\n• Consultoría: $23.1M CLP\n• Mantenimiento: $15.7M CLP\n• **Total:** $128.2M CLP (+18% vs Q3)\n\n📉 **Gastos:** $80.1M CLP\n• Nómina: $52.3M (41%)\n• AWS: $8.9M\n• Marketing: $12.1M\n\n💰 **Utilidad:** $48.1M CLP (37.5% margen)\n🎯 **12% sobre proyección**",
          sender: "bot" as const,
          timestamp: "16:48",
        },
      ],
    },
  ]

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Use Cases</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Every Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our vibe coding approach creates AI solutions that fit perfectly into your workflow and deliver real
            results.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger key={useCase.id} value={useCase.id} className="flex items-center gap-2">
                <useCase.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{useCase.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase, index) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              {useCase.id === "ecosuelo" || useCase.id === "career" || useCase.id === "parrotfy" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          <useCase.icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                          <p className="text-gray-600 mt-1">{useCase.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                          <ul className="space-y-3">
                            {useCase.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-4">Impact Metrics</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {useCase.stats &&
                              useCase.stats.map((stat, idx) => (
                                <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                                  <div className="text-sm text-gray-600 capitalize">{stat.label}</div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          <useCase.icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                          <p className="text-gray-600 mt-1">{useCase.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                          <ul className="space-y-3">
                            {useCase.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-4">Impact Metrics</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(useCase.metrics).map(([key, value]) => (
                              <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                                <div className="text-sm text-gray-600 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
