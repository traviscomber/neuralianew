"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, MessageSquare, Code, CheckCircle, ArrowRight, Bot, User, Monitor } from "lucide-react"

const demoTypes = [
  {
    id: "chatbot",
    title: "Agente Conversacional",
    description: "Prueba nuestro agente IA especializado",
    icon: MessageSquare,
    color: "from-blue-500 to-blue-600",
    features: ["Procesamiento Natural", "Respuestas Contextuales", "Integración WhatsApp"],
  },
  {
    id: "dashboard",
    title: "Dashboard Ejecutivo",
    description: "Visualiza métricas en tiempo real",
    icon: Monitor,
    color: "from-purple-500 to-purple-600",
    features: ["Analytics en Tiempo Real", "KPIs Personalizados", "Reportes Automáticos"],
  },
  {
    id: "api",
    title: "API Integration",
    description: "Conecta con tus sistemas existentes",
    icon: Code,
    color: "from-green-500 to-green-600",
    features: ["REST APIs", "Webhooks", "SDK Personalizado"],
  },
]

const liveDemo = {
  chatbot: [
    { type: "user", message: "Hola, necesito información sobre sus servicios de IA", time: "14:32" },
    {
      type: "bot",
      message:
        "¡Hola! Soy el asistente IA de N3uralia. Ofrecemos ecosistemas tecnológicos completos que van más allá de simples chatbots. ¿Te interesa conocer nuestros casos de éxito reales?",
      time: "14:32",
    },
    { type: "user", message: "Sí, cuéntame sobre EcosueloLab", time: "14:34" },
    {
      type: "bot",
      message:
        "EcosueloLab es uno de nuestros proyectos estrella 🌱\n\n✅ **Sistema Entregado:**\n• Dashboard web completo\n• API REST para laboratorios\n• Agente WhatsApp IA especializado\n• Base de datos en tiempo real\n\n📊 **Resultados:**\n• 95% satisfacción cliente\n• 70% reducción tiempo análisis\n• 10,000+ consultas mensuales automatizadas\n\n¿Te gustaría ver una demo del dashboard?",
      time: "14:34",
    },
  ],
  dashboard: [
    { type: "system", message: "Cargando Dashboard Ejecutivo...", time: "14:35" },
    { type: "system", message: "📊 Métricas en Tiempo Real Cargadas", time: "14:35" },
    { type: "system", message: "💼 Proyectos Activos: 12", time: "14:35" },
    { type: "system", message: "⚡ Uptime: 99.9%", time: "14:35" },
    { type: "system", message: "👥 Usuarios Activos: 2,847", time: "14:36" },
    { type: "system", message: "📈 ROI Promedio: 250%", time: "14:36" },
  ],
  api: [
    { type: "code", message: "// Ejemplo de integración API N3uralia", time: "14:37" },
    {
      type: "code",
      message:
        "const n3uralia = new N3uraliaAPI({\n  apiKey: 'your-api-key',\n  endpoint: 'https://api.n3uralia.com'\n});",
      time: "14:37",
    },
    {
      type: "code",
      message:
        "// Crear agente conversacional\nconst agent = await n3uralia.createAgent({\n  name: 'Mi Asistente',\n  language: 'es',\n  industry: 'agriculture'\n});",
      time: "14:38",
    },
    {
      type: "code",
      message:
        '// Respuesta del sistema\n{\n  "id": "agent_123",\n  "status": "active",\n  "capabilities": ["nlp", "whatsapp", "analytics"]\n}',
      time: "14:38",
    },
  ],
}

export function InteractiveDemoSection() {
  const [activeDemo, setActiveDemo] = useState("chatbot")
  const [isPlaying, setIsPlaying] = useState(false)

  const startDemo = () => {
    setIsPlaying(true)
    // Auto-stop after demo duration
    setTimeout(() => setIsPlaying(false), 10000)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-lg px-6 py-2 font-semibold">
            <Play className="w-4 h-4 mr-2" />
            Demo Interactivo en Vivo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Prueba nuestros{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              sistemas reales
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Estos no son mockups. Son sistemas reales funcionando en producción que puedes probar ahora mismo.
          </p>
        </motion.div>

        <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
          {/* Demo Type Selector */}
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-900/50 border border-slate-700 rounded-2xl p-2 backdrop-blur-sm">
            {demoTypes.map((demo) => (
              <TabsTrigger
                key={demo.id}
                value={demo.id}
                className="flex items-center gap-2 data-[state=active]:bg-slate-800 data-[state=active]:text-white rounded-xl font-semibold transition-all duration-300 text-slate-300 py-3"
              >
                <demo.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{demo.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Demo Content */}
          {demoTypes.map((demo) => (
            <TabsContent key={demo.id} value={demo.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Left: Demo Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${demo.color} rounded-2xl flex items-center justify-center`}
                    >
                      <demo.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{demo.title}</h3>
                      <p className="text-slate-300">{demo.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white">Características Principales:</h4>
                    <div className="grid gap-3">
                      {demo.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={startDemo}
                      disabled={isPlaying}
                      className={`bg-gradient-to-r ${demo.color} hover:opacity-90 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {isPlaying ? "Demo en Curso..." : "Iniciar Demo"}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-600 text-white hover:bg-slate-800 px-6 py-3 rounded-xl bg-transparent"
                      onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Solicitar Acceso
                    </Button>
                  </div>
                </div>

                {/* Right: Interactive Demo */}
                <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    {/* Demo Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800/50">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white font-semibold">{demo.title} - Sistema Real</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                        <Bot className="w-3 h-3 mr-1" />
                        En Producción
                      </Badge>
                    </div>

                    {/* Demo Content */}
                    <div className="h-96 overflow-y-auto p-4 space-y-4">
                      {liveDemo[activeDemo as keyof typeof liveDemo].map((msg, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: isPlaying || index < 2 ? 1 : 0.3, y: 0 }}
                          transition={{ duration: 0.3, delay: isPlaying ? index * 0.5 : 0 }}
                          className={`flex gap-3 ${
                            msg.type === "user"
                              ? "justify-end"
                              : msg.type === "system"
                                ? "justify-center"
                                : "justify-start"
                          }`}
                        >
                          {msg.type === "bot" && (
                            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-blue-400" />
                            </div>
                          )}

                          <div
                            className={`max-w-[85%] p-3 rounded-2xl ${
                              msg.type === "user"
                                ? "bg-blue-600 text-white"
                                : msg.type === "system"
                                  ? "bg-slate-700 text-slate-300 text-center"
                                  : msg.type === "code"
                                    ? "bg-slate-800 text-green-400 font-mono text-sm"
                                    : "bg-slate-700 text-slate-200"
                            }`}
                          >
                            <p className="text-sm whitespace-pre-line">{msg.message}</p>
                            <p className="text-xs opacity-70 mt-2">{msg.time}</p>
                          </div>

                          {msg.type === "user" && (
                            <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 rounded-2xl"
            onClick={() => window.open("https://wa.me/56940946660", "_blank")}
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            Crear mi sistema como estos
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
