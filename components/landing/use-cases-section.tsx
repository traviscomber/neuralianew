"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sprout,
  GraduationCap,
  Building2,
  MessageCircle,
  Bot,
  User,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
} from "lucide-react"

const useCases = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    subtitle: "Análisis de Suelo Inteligente",
    icon: Sprout,
    industry: "Agricultura",
    description: "Bot de WhatsApp que entrega análisis de suelo en tiempo real conectado a API de laboratorio",
    challenge: "Los agricultores esperaban días para recibir resultados de análisis de suelo por email o teléfono",
    solution: "Bot inteligente que consulta la API del laboratorio y entrega resultados instantáneos por WhatsApp",
    results: [
      "Respuesta instantánea 24/7",
      "Reducción de 5 días a 5 minutos",
      "95% de satisfacción del cliente",
      "Integración perfecta con Twilio + API",
    ],
    chat: [
      { type: "user", message: "Hola, necesito los resultados del análisis de mi parcela #1247", time: "14:32" },
      {
        type: "bot",
        message: "¡Hola! Consultando los resultados de tu parcela #1247... ✅",
        time: "14:32",
      },
      {
        type: "bot",
        message:
          "📊 **Resultados Parcela #1247:**\n\n🌱 **Nitrógeno:** 45 ppm (Óptimo)\n💧 **Fósforo:** 12 ppm (Bajo - requiere fertilización)\n🌿 **Potasio:** 180 ppm (Bueno)\n📈 **pH:** 6.8 (Ideal para cultivos)\n\n**Recomendación:** Aplicar fertilizante fosfórico en dosis de 50kg/ha",
        time: "14:33",
      },
      { type: "user", message: "Perfecto, ¿cuándo fue tomada esta muestra?", time: "14:35" },
      {
        type: "bot",
        message:
          "La muestra fue procesada el 15 de enero 2024 a las 09:30 AM. Los resultados están certificados por nuestro laboratorio. ¿Necesitas el reporte completo en PDF?",
        time: "14:35",
      },
    ],
  },
  {
    id: "despega",
    title: "Despega Tu Carrera",
    subtitle: "Coaching Profesional con IA",
    icon: GraduationCap,
    industry: "Educación",
    description: "Asistente de IA que guía a profesionales en su desarrollo de carrera con consejos personalizados",
    challenge: "Los profesionales necesitan orientación de carrera personalizada pero los coaches son costosos",
    solution: "IA conversacional que analiza perfiles y entrega consejos de carrera específicos y motivacionales",
    results: [
      "Consejos personalizados 24/7",
      "85% mejora en claridad de objetivos",
      "Coaching accesible para todos",
      "Seguimiento continuo del progreso",
    ],
    chat: [
      {
        type: "user",
        message: "Hola, soy ingeniero con 3 años de experiencia pero siento que no avanzo en mi carrera",
        time: "10:15",
      },
      {
        type: "bot",
        message:
          "Hola! Entiendo perfectamente esa sensación. Es muy común en ingenieros con tu experiencia. Cuéntame, ¿en qué área específica trabajas y qué tipo de crecimiento buscas?",
        time: "10:15",
      },
      {
        type: "user",
        message: "Trabajo en desarrollo de software, pero quiero liderar proyectos más grandes",
        time: "10:17",
      },
      {
        type: "bot",
        message:
          "¡Excelente objetivo! 🚀 Para liderar proyectos grandes necesitas desarrollar 3 áreas clave:\n\n👥 **Liderazgo técnico:** Comienza mentoreando juniors\n📊 **Gestión de proyectos:** Aprende metodologías ágiles\n🗣️ **Comunicación:** Practica presentar ideas a stakeholders\n\n¿Cuál de estas áreas sientes que es tu mayor desafío?",
        time: "10:17",
      },
      { type: "user", message: "Definitivamente la comunicación con stakeholders me cuesta", time: "10:19" },
      {
        type: "bot",
        message:
          "Perfecto, identificaste el punto clave! 💡 Te sugiero:\n\n1. **Esta semana:** Ofrécete para presentar en la próxima reunión de equipo\n2. **Este mes:** Toma un curso de comunicación técnica\n3. **Próximos 3 meses:** Busca un mentor senior que sea buen comunicador\n\n¿Te parece un plan realista? ¿Con cuál empezarías?",
        time: "10:19",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "Parrotfy ERP",
    subtitle: "Asistente IA para ERP",
    icon: Building2,
    industry: "Empresarial",
    description: "Agente conversacional que permite consultar datos del ERP usando lenguaje natural",
    challenge: "Los usuarios necesitan capacitación extensa para usar sistemas ERP complejos",
    solution: "IA que interpreta consultas en lenguaje natural y extrae información específica del ERP",
    results: [
      "Consultas ERP en lenguaje natural",
      "70% reducción en tiempo de capacitación",
      "Acceso instantáneo a reportes",
      "Integración con OpenAI GPT-4",
    ],
    chat: [
      { type: "user", message: "¿Cuáles fueron las ventas del mes pasado por región?", time: "09:45" },
      {
        type: "bot",
        message: "Consultando las ventas de diciembre 2023 por región... 📊",
        time: "09:45",
      },
      {
        type: "bot",
        message:
          "**📈 Ventas Diciembre 2023:**\n\n🏙️ **Región Metropolitana:** $2,450,000\n🌊 **Valparaíso:** $1,230,000\n🏔️ **Biobío:** $890,000\n🌵 **Norte Grande:** $1,100,000\n\n**Total:** $5,670,000 (+12% vs nov)\n\n¿Quieres ver el detalle de alguna región específica?",
        time: "09:46",
      },
      { type: "user", message: "Sí, muéstrame el detalle de la Región Metropolitana", time: "09:47" },
      {
        type: "bot",
        message:
          "**🏙️ Región Metropolitana - Detalle:**\n\n👤 **Top Vendedores:**\n• María González: $580,000\n• Carlos Ruiz: $520,000\n• Ana López: $490,000\n\n🏢 **Por Sucursal:**\n• Las Condes: $980,000\n• Providencia: $750,000\n• Maipú: $720,000\n\n¿Necesitas algún reporte específico?",
        time: "09:47",
      },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const activeCase = useCases.find((useCase) => useCase.id === activeTab)

  useEffect(() => {
    if (!activeCase) return

    const timer = setInterval(() => {
      if (currentMessageIndex < activeCase.chat.length - 1) {
        setIsTyping(true)
        setTimeout(() => {
          setCurrentMessageIndex((prev) => prev + 1)
          setIsTyping(false)
        }, 1500)
      } else {
        setTimeout(() => {
          setCurrentMessageIndex(0)
        }, 4000)
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [activeCase, currentMessageIndex])

  useEffect(() => {
    setCurrentMessageIndex(0)
  }, [activeTab])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
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
            <CheckCircle className="w-4 h-4 mr-2" />
            Casos de éxito reales
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Proyectos que{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
              transformaron
            </span>{" "}
            negocios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo hemos implementado IA conversacional en diferentes industrias, generando resultados medibles
            desde el primer día.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 dark:bg-muted/30">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.id}
                value={useCase.id}
                className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                <useCase.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{useCase.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Case Details */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.subtitle}</p>
                    </div>
                    <Badge variant="outline" className="ml-auto">
                      {useCase.industry}
                    </Badge>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">{useCase.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-500" />
                        Desafío
                      </h4>
                      <p className="text-muted-foreground">{useCase.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Bot className="w-4 h-4 text-blue-500" />
                        Solución N3uralia
                      </h4>
                      <p className="text-muted-foreground">{useCase.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        Resultados
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {useCase.results.map((result, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Interactive Chat Demo */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="sticky top-8"
                >
                  <Card className="bg-card border-2 border-border shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-card-foreground">{useCase.title}</span>
                        <Badge variant="secondary" className="ml-auto text-xs">
                          Demo en vivo
                        </Badge>
                      </div>

                      <div className="space-y-4 h-96 overflow-y-auto">
                        <AnimatePresence>
                          {useCase.chat.slice(0, currentMessageIndex + 1).map((msg, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              className={`flex gap-3 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                            >
                              {msg.type === "bot" && (
                                <Avatar className="w-8 h-8 flex-shrink-0">
                                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                                    <Bot className="w-4 h-4" />
                                  </AvatarFallback>
                                </Avatar>
                              )}
                              <div
                                className={`max-w-[85%] p-3 rounded-2xl ${
                                  msg.type === "user"
                                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                <p className="text-sm whitespace-pre-line">{msg.message}</p>
                                <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                              </div>
                              {msg.type === "user" && (
                                <Avatar className="w-8 h-8 flex-shrink-0">
                                  <AvatarFallback className="bg-gray-500 text-white">
                                    <User className="w-4 h-4" />
                                  </AvatarFallback>
                                </Avatar>
                              )}
                            </motion.div>
                          ))}
                        </AnimatePresence>

                        {isTyping && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-3 justify-start"
                          >
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                                <Bot className="w-4 h-4" />
                              </AvatarFallback>
                            </Avatar>
                            <div className="bg-muted p-3 rounded-2xl">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce animation-delay-200"></div>
                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce animation-delay-400"></div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20IA%20en%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Crear mi proyecto de IA
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
