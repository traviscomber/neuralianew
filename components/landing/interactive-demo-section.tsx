"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, MessageSquare, CheckCircle, ArrowRight, Bot, User } from "lucide-react"

const demoTypes = [
  {
    id: "chatbot",
    title: "Agente Conversacional",
    description: "Prueba nuestro agente IA especializado",
    icon: MessageSquare,
    color: "from-slate-800 to-emerald-700",
    features: ["Procesamiento Natural", "Respuestas Contextuales", "Integración WhatsApp"],
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
}

export function InteractiveDemoSection() {
  const [activeDemo, setActiveDemo] = useState("chatbot")
  const [isPlaying, setIsPlaying] = useState(false)

  const startDemo = () => {
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 10000)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-slate-700 to-emerald-600 text-white border-0 text-lg px-6 py-2 font-semibold">
            <Play className="w-4 h-4 mr-2" />
            Demo Interactivo en Vivo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
            Prueba nuestros{" "}
            <span className="bg-gradient-to-r from-slate-800 to-emerald-700 bg-clip-text text-transparent">
              sistemas reales
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estos no son mockups. Son sistemas reales funcionando en producción que puedes probar ahora mismo.
          </p>
        </motion.div>

        <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
          {/* Demo Type Selector */}
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white border border-slate-200 rounded-2xl p-2">
            {demoTypes.map((demo) => (
              <TabsTrigger
                key={demo.id}
                value={demo.id}
                className="flex items-center gap-2 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-semibold transition-all duration-300 text-slate-600 py-3"
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
                      className={`w-16 h-16 bg-gradient-to-r ${demo.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <demo.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{demo.title}</h3>
                      <p className="text-slate-600">{demo.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-900">Características Principales:</h4>
                    <div className="grid gap-3">
                      {demo.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={startDemo}
                      disabled={isPlaying}
                      className={`bg-gradient-to-r ${demo.color} hover:opacity-90 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md`}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {isPlaying ? "Demo en Curso..." : "Iniciar Demo"}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-300 text-slate-900 hover:bg-slate-50 px-6 py-3 rounded-xl bg-white"
                      onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Solicitar Acceso
                    </Button>
                  </div>
                </div>

                {/* Right: Interactive Demo */}
                <Card className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
                  <CardContent className="p-0">
                    {/* Demo Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-slate-900 font-semibold">{demo.title} - Sistema Real</span>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">
                        <Bot className="w-3 h-3 mr-1" />
                        En Producción
                      </Badge>
                    </div>

                    {/* Demo Content */}
                    <div className="h-96 overflow-y-auto p-4 space-y-4 bg-white">
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
                                : msg.type === "code"
                                  ? "justify-start"
                                  : "justify-start"
                          }`}
                        >
                          {msg.type === "bot" && (
                            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-slate-700" />
                            </div>
                          )}

                          <div
                            className={`max-w-[85%] p-3 rounded-2xl ${
                              msg.type === "user"
                                ? "bg-slate-800 text-white"
                                : msg.type === "system"
                                  ? "bg-slate-100 text-slate-700 text-center"
                                  : msg.type === "code"
                                    ? "bg-slate-900 text-emerald-400 font-mono text-sm"
                                    : "bg-slate-100 text-slate-800"
                            }`}
                          >
                            <p className="text-sm whitespace-pre-line">{msg.message}</p>
                            <p className="text-xs opacity-70 mt-2">{msg.time}</p>
                          </div>

                          {msg.type === "user" && (
                            <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
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
            className="bg-gradient-to-r from-slate-800 to-emerald-700 hover:from-slate-900 hover:to-emerald-800 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 rounded-2xl"
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
