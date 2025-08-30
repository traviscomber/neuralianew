"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageCircle,
  TrendingUp,
  Globe,
  Briefcase,
  GraduationCap,
  BarChart3,
  Target,
  Zap,
  Star,
  Sprout,
  Building2,
  Droplets,
  Thermometer,
  CloudRain,
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
  const [activeTab, setActiveTab] = useState("ecosuelo")

  const useCases = {
    ecosuelo: {
      title: "EcosueloBot",
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
          text: "¡Perfecto! Según datos integrados:\n\n🌱 **INIA:** pH 6.5 óptimo, fósforo bajo común en Maule\n💧 **IrriWatch:** Humedad suelo 45% - necesita riego\n🌡️ **Sensores:** Temp 22°C, evapotranspiración 4.2mm/día\n\n📊 **Recomendación:**\n• Riego: 25mm mañana (6-8 AM)\n• Fertilización: Superfosfato triple 150 kg/ha\n• Próximo riego: en 3 días según pronóstico",
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
    career: {
      title: "Despega tu Carrera",
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
    parrotfy: {
      title: "ParrotfyIA",
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
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Casos de Éxito Reales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestros agentes de IA están transformando industrias específicas con soluciones
            personalizadas y resultados medibles
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-xl">
            {Object.entries(useCases).map(([key, useCase]) => (
              <TabsTrigger
                key={key}
                value={key}
                className={`rounded-lg font-medium transition-all duration-200 ${
                  activeTab === key
                    ? useCase.colorScheme === "green"
                      ? "bg-green-500 text-white shadow-lg"
                      : useCase.colorScheme === "blue"
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {useCase.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(useCases).map(([key, useCase]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              {/* Header */}
              <div
                className={`text-center p-8 rounded-2xl bg-gradient-to-r ${
                  useCase.colorScheme === "green"
                    ? "from-green-500 to-emerald-600"
                    : useCase.colorScheme === "blue"
                      ? "from-blue-500 to-indigo-600"
                      : "from-purple-500 to-indigo-600"
                } text-white`}
              >
                <h3 className="text-3xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-xl opacity-90 mb-4">{useCase.subtitle}</p>
                <p className="text-lg opacity-80 max-w-2xl mx-auto">{useCase.description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {useCase.stats.map((stat, index) => (
                  <Card
                    key={index}
                    className={`text-center border-2 ${
                      useCase.colorScheme === "green"
                        ? "border-green-200 bg-green-50"
                        : useCase.colorScheme === "blue"
                          ? "border-blue-200 bg-blue-50"
                          : "border-purple-200 bg-purple-50"
                    }`}
                  >
                    <CardContent className="p-6">
                      <stat.icon
                        className={`w-8 h-8 mx-auto mb-3 ${
                          useCase.colorScheme === "green"
                            ? "text-green-600"
                            : useCase.colorScheme === "blue"
                              ? "text-blue-600"
                              : "text-purple-600"
                        }`}
                      />
                      <div
                        className={`text-2xl font-bold mb-1 ${
                          useCase.colorScheme === "green"
                            ? "text-green-700"
                            : useCase.colorScheme === "blue"
                              ? "text-blue-700"
                              : "text-purple-700"
                        }`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Data Sources for EcosueloBot */}
              {key === "ecosuelo" && (
                <Card className="border-2 border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <Globe className="w-5 h-5" />
                      Fuentes de Datos Integradas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                        <Sprout className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold text-green-700">INIA</div>
                        <div className="text-xs text-gray-600">Análisis de suelos</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                        <Droplets className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold text-green-700">IrriWatch</div>
                        <div className="text-xs text-gray-600">Riego inteligente</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                        <Thermometer className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <div className="font-semibold text-green-700">Sensores IoT</div>
                        <div className="text-xs text-gray-600">Temp & Humedad</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                        <CloudRain className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                        <div className="font-semibold text-green-700">DMC</div>
                        <div className="text-xs text-gray-600">Pronóstico clima</div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-2">Integración en Tiempo Real:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>
                          • <strong>INIA:</strong> Análisis de suelos, recomendaciones de fertilización por región
                        </li>
                        <li>
                          • <strong>IrriWatch:</strong> Monitoreo de humedad del suelo y programación de riego
                        </li>
                        <li>
                          • <strong>Sensores IoT:</strong> Temperatura, humedad relativa, evapotranspiración
                        </li>
                        <li>
                          • <strong>DMC (Dirección Meteorológica):</strong> Pronósticos climáticos precisos
                        </li>
                        <li>
                          • <strong>Agromet:</strong> Datos fenológicos y alertas fitosanitarias
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Main Content */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Features */}
                <Card
                  className={`border-2 ${
                    useCase.colorScheme === "green"
                      ? "border-green-200"
                      : useCase.colorScheme === "blue"
                        ? "border-blue-200"
                        : "border-purple-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`flex items-center gap-2 ${
                        useCase.colorScheme === "green"
                          ? "text-green-700"
                          : useCase.colorScheme === "blue"
                            ? "text-blue-700"
                            : "text-purple-700"
                      }`}
                    >
                      <Zap className="w-5 h-5" />
                      Características Principales
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {useCase.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            useCase.colorScheme === "green"
                              ? "bg-green-500"
                              : useCase.colorScheme === "blue"
                                ? "bg-blue-500"
                                : "bg-purple-500"
                          }`}
                        ></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    <div className="pt-4">
                      <Button
                        className={`w-full ${
                          useCase.colorScheme === "green"
                            ? "bg-green-500 hover:bg-green-600"
                            : useCase.colorScheme === "blue"
                              ? "bg-blue-500 hover:bg-blue-600"
                              : "bg-purple-500 hover:bg-purple-600"
                        }`}
                      >
                        Probar {useCase.title}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Chat Demo */}
                <Card
                  className={`border-2 ${
                    useCase.colorScheme === "green"
                      ? "border-green-200"
                      : useCase.colorScheme === "blue"
                        ? "border-blue-200"
                        : "border-purple-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`flex items-center gap-2 ${
                        useCase.colorScheme === "green"
                          ? "text-green-700"
                          : useCase.colorScheme === "blue"
                            ? "text-blue-700"
                            : "text-purple-700"
                      }`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      {useCase.colorScheme === "green" ? "Demo WhatsApp Business" : "Demostración en Vivo"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChatDemo
                      messages={useCase.messages}
                      isActive={activeTab === key}
                      colorScheme={useCase.colorScheme}
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
