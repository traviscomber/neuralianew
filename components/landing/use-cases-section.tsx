"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sprout, Building2, TrendingUp, Bot, User, MessageCircle, ExternalLink, Play, Pause } from "lucide-react"

const useCases = [
  {
    id: "ecosuelo",
    title: "🌱 Campo Inteligente",
    subtitle: "EcosueloLab",
    description: "Bot que analiza datos de suelo y responde por WhatsApp",
    benefit: "Cosechas 40% mejores",
    icon: Sprout,
    color: "from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500",
    chat: [
      { type: "user", message: "Hola, necesito datos del lote 15" },
      { type: "bot", message: "¡Hola! Te traigo los datos del lote 15 📊" },
      { type: "bot", message: "🌱 Nitrógeno: 45 ppm (Óptimo)\n💧 Humedad: 68% (Buena)\n🌡️ pH: 6.8 (Ideal)" },
      {
        type: "bot",
        message: "Recomendación: Aplicar fertilizante potásico en 3 días. El suelo está perfecto para siembra 🚜",
      },
      { type: "user", message: "¿Y el lote 22?" },
      {
        type: "bot",
        message: "Lote 22: Nitrógeno bajo (28 ppm). Necesita fertilización urgente. ¿Programo la aplicación? 🌾",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "🏢 Empresa Automática",
    subtitle: "Parrotfy ERP",
    description: "IA que maneja consultas de inventario, ventas y clientes",
    benefit: "Cero trabajo manual",
    icon: Building2,
    color: "from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500",
    chat: [
      { type: "user", message: "¿Cuántas unidades vendimos este mes?" },
      { type: "bot", message: "📈 Ventas de Octubre 2024:" },
      { type: "bot", message: "• Total unidades: 2,847\n• Ingresos: $142,350\n• Crecimiento: +23% vs mes anterior" },
      {
        type: "bot",
        message:
          "Top 3 productos:\n1. Laptop Pro: 156 unidades\n2. Mouse Wireless: 234 unidades\n3. Teclado RGB: 189 unidades",
      },
      { type: "user", message: "¿Qué productos necesitan restock?" },
      {
        type: "bot",
        message:
          "🚨 Stock crítico:\n• Laptop Pro: 12 unidades (mín: 50)\n• Auriculares: 8 unidades (mín: 30)\n\n¿Genero las órdenes de compra?",
      },
    ],
  },
  {
    id: "despega",
    title: "🚀 Coach Personal IA",
    subtitle: "Despega Tu Carrera",
    description: "Mentor de carrera que entiende el mercado laboral chileno",
    benefit: "Sueldos 60% más altos",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500",
    chat: [
      { type: "user", message: "Soy ingeniero junior, ¿cómo puedo ganar más?" },
      { type: "bot", message: "¡Hola! Como ingeniero junior tienes muchas oportunidades 🚀" },
      {
        type: "bot",
        message:
          "Análisis de tu perfil:\n• Sueldo actual promedio: $800K\n• Potencial en 12 meses: $1.2M\n• Skills más demandadas: Python, AWS, React",
      },
      {
        type: "bot",
        message:
          "Plan personalizado:\n1. Certificarte en AWS (3 meses)\n2. Proyecto portfolio con React\n3. Aplicar a startups tech\n\n¿Empezamos con AWS?",
      },
      { type: "user", message: "Sí, ¿qué certificación me recomiendas?" },
      {
        type: "bot",
        message:
          "Para tu perfil: AWS Solutions Architect Associate. Costo: $150 USD, ROI: +$400K anuales. Te envío roadmap completo 📚",
      },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const activeCase = useCases.find((c) => c.id === activeTab)!

  useEffect(() => {
    if (!isPlaying) return

    const timer = setTimeout(() => {
      setCurrentMessageIndex((prev) => {
        if (prev >= activeCase.chat.length - 1) {
          // Reset to start after a pause
          setTimeout(() => setCurrentMessageIndex(0), 2000)
          return prev
        }
        return prev + 1
      })
    }, 1800)

    return () => clearTimeout(timer)
  }, [currentMessageIndex, activeCase.chat.length, isPlaying])

  useEffect(() => {
    setCurrentMessageIndex(0)
    setIsPlaying(true)
  }, [activeTab])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Casos de Éxito Reales
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Sistemas que{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              funcionan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proyectos reales, con clientes reales, generando resultados reales. Mira cómo la IA está transformando estos
            negocios.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 dark:bg-muted/30">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.id}
                value={useCase.id}
                className="data-[state=active]:bg-background dark:data-[state=active]:bg-card data-[state=active]:text-foreground"
              >
                <useCase.icon className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">{useCase.title}</span>
                <span className="sm:hidden">{useCase.title.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left Column - Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-card border-2 border-border">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-6`}
                      >
                        <useCase.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-3xl font-bold mb-2 text-card-foreground">{useCase.title}</h3>
                      <p className="text-lg text-muted-foreground mb-4">{useCase.subtitle}</p>
                      <p className="text-card-foreground mb-6 leading-relaxed">{useCase.description}</p>

                      <div className="bg-muted/50 dark:bg-muted/30 rounded-lg p-4 mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <span className="font-semibold text-card-foreground">Resultado:</span>
                        </div>
                        <p className="text-lg font-bold text-green-600 dark:text-green-400">{useCase.benefit}</p>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full border-2 hover:bg-muted/50 dark:hover:bg-muted/30 bg-transparent"
                        asChild
                      >
                        <a
                          href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20un%20sistema%20como%20este%20para%20mi%20negocio"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Quiero uno igual
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Right Column - Chat Demo */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-card border-2 border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                          <span className="font-semibold text-card-foreground">Demo en Vivo</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={togglePlayPause}
                          className="hover:bg-muted/50 dark:hover:bg-muted/30"
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                      </div>

                      <div className="space-y-4 min-h-[400px] max-h-[400px] overflow-y-auto">
                        <AnimatePresence>
                          {useCase.chat.slice(0, currentMessageIndex + 1).map((message, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4 }}
                              className={`flex items-start gap-3 ${
                                message.type === "user" ? "justify-end" : "justify-start"
                              }`}
                            >
                              {message.type === "bot" && (
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback className={`bg-gradient-to-r ${useCase.color} text-white text-xs`}>
                                    <Bot className="w-4 h-4" />
                                  </AvatarFallback>
                                </Avatar>
                              )}

                              <div
                                className={`max-w-xs p-3 rounded-lg ${
                                  message.type === "user"
                                    ? `bg-gradient-to-r ${useCase.color} text-white rounded-tr-none`
                                    : "bg-muted dark:bg-muted/80 text-card-foreground rounded-tl-none"
                                }`}
                              >
                                <p className="text-sm leading-relaxed whitespace-pre-line">{message.message}</p>
                              </div>

                              {message.type === "user" && (
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback className="bg-gray-500 dark:bg-gray-600 text-white text-xs">
                                    <User className="w-4 h-4" />
                                  </AvatarFallback>
                                </Avatar>
                              )}
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
