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
  Code,
  Database,
  Cloud,
} from "lucide-react"

const useCases = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    subtitle: "Plataforma Full Stack de Análisis Agrícola",
    icon: Sprout,
    industry: "Agricultura",
    description:
      "Sistema completo de análisis de suelo con IA conversacional, dashboard web, API REST y base de datos en tiempo real",
    challenge:
      "Los agricultores necesitaban una solución integral que conectara laboratorios, análisis y recomendaciones en una sola plataforma",
    solution:
      "Desarrollamos una solución full stack completa: frontend web, backend con APIs, base de datos PostgreSQL, integración WhatsApp Business API y agentes de IA especializados",
    results: [
      "Plataforma web completa con dashboard",
      "API REST para integración con laboratorios",
      "Base de datos en tiempo real",
      "Agente conversacional por WhatsApp",
      "Reducción 90% en tiempo de procesamiento",
    ],
    techStack: ["Next.js", "PostgreSQL", "WhatsApp Business API", "OpenAI GPT-4", "Vercel", "Supabase"],
    chat: [
      { type: "user", message: "Hola, necesito los resultados del análisis de mi parcela #1247", time: "14:32" },
      {
        type: "bot",
        message:
          "¡Hola! Soy tu asistente de IA especializado en análisis de suelo. Consultando los resultados de tu parcela #1247 en nuestra base de datos... ✅",
        time: "14:32",
      },
      {
        type: "bot",
        message:
          "📊 **Resultados Parcela #1247:**\n\n🌱 **Nitrógeno:** 45 ppm (Óptimo)\n💧 **Fósforo:** 12 ppm (Bajo - requiere fertilización)\n🌿 **Potasio:** 180 ppm (Bueno)\n📈 **pH:** 6.8 (Ideal para cultivos)\n\n**Recomendación IA:** Aplicar fertilizante fosfórico 50kg/ha\n\n📱 También puedes ver el reporte completo en tu dashboard web",
        time: "14:33",
      },
      { type: "user", message: "¿Qué cultivo me recomiendas para esta parcela?", time: "14:35" },
      {
        type: "bot",
        message:
          "Basado en mi análisis de IA y datos históricos de nuestra plataforma:\n\n🌽 **Maíz:** 95% compatibilidad\n🥔 **Papa:** 88% compatibilidad\n🌾 **Trigo:** 82% compatibilidad\n\nRecomiendo **maíz** por condiciones óptimas. El sistema ya actualizó tu perfil con esta recomendación.",
        time: "14:35",
      },
    ],
  },
  {
    id: "despega",
    title: "Despega Tu Carrera",
    subtitle: "Ecosistema Full Stack de Coaching Profesional",
    icon: GraduationCap,
    industry: "Educación",
    description:
      "Plataforma completa de desarrollo profesional con IA, portal web, sistema de matching y analytics avanzados",
    challenge:
      "Crear un ecosistema completo que conecte profesionales, empresas y oportunidades con coaching personalizado",
    solution:
      "Desarrollamos una plataforma full stack: aplicación web React, backend Node.js, base de datos con perfiles profesionales, sistema de matching con IA y agentes conversacionales especializados",
    results: [
      "Portal web completo con perfiles",
      "Sistema de matching IA-powered",
      "Analytics de progreso profesional",
      "Agente de coaching conversacional",
      "85% mejora en colocaciones laborales",
    ],
    techStack: ["React", "Node.js", "MongoDB", "OpenAI GPT-4", "WhatsApp API", "AWS"],
    chat: [
      {
        type: "user",
        message: "Hola, soy ingeniero con 3 años de experiencia pero siento que no avanzo en mi carrera",
        time: "10:15",
      },
      {
        type: "bot",
        message:
          "¡Hola! Soy tu coach de IA. He revisado tu perfil en nuestra plataforma y entiendo tu situación. Cuéntame, ¿en qué área específica trabajas y qué tipo de crecimiento buscas?",
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
          "¡Excelente objetivo! 🚀 Basado en tu perfil y nuestro análisis de mercado:\n\n👥 **Liderazgo técnico:** Comienza mentoreando juniors\n📊 **Gestión de proyectos:** Aprende metodologías ágiles\n🗣️ **Comunicación:** Practica presentar ideas\n\n✅ He actualizado tu plan de desarrollo en el portal. ¿Cuál área priorizamos?",
        time: "10:17",
      },
      { type: "user", message: "Definitivamente la comunicación con stakeholders me cuesta", time: "10:19" },
      {
        type: "bot",
        message:
          "Perfecto! 💡 He creado un plan personalizado:\n\n📅 **Esta semana:** Curso de comunicación técnica (ya agregado a tu dashboard)\n🎯 **Este mes:** 3 oportunidades de presentación identificadas\n👨‍💼 **Próximos 3 meses:** Te conecté con 2 mentores senior\n\n¿Empezamos con el curso online?",
        time: "10:19",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "Parrotfy ERP",
    subtitle: "Suite Full Stack de Business Intelligence",
    icon: Building2,
    industry: "Empresarial",
    description:
      "Sistema completo de BI con IA conversacional, dashboards interactivos, APIs de integración y reportería automática",
    challenge:
      "Las empresas necesitaban una solución integral que unificara datos ERP, CRM y analytics con acceso conversacional",
    solution:
      "Construimos una suite completa: frontend con dashboards React, backend con microservicios, integración con múltiples ERPs, base de datos analítica y agentes conversacionales especializados",
    results: [
      "Dashboards interactivos en tiempo real",
      "APIs de integración con 15+ ERPs",
      "Base de datos analítica unificada",
      "Agente conversacional multicanal",
      "ROI 300% en primer año",
    ],
    techStack: ["React", "Python", "PostgreSQL", "OpenAI GPT-4", "Docker", "Kubernetes"],
    chat: [
      { type: "user", message: "¿Cuáles fueron las ventas del mes pasado por región?", time: "09:45" },
      {
        type: "bot",
        message: "Consultando datos en tiempo real desde nuestro data warehouse... 📊",
        time: "09:45",
      },
      {
        type: "bot",
        message:
          "**📈 Ventas Diciembre 2023:**\n\n🏙️ **Región Metropolitana:** $2,450,000\n🌊 **Valparaíso:** $1,230,000\n🏔️ **Biobío:** $890,000\n🌵 **Norte Grande:** $1,100,000\n\n**Total:** $5,670,000 (+12% vs nov)\n\n📊 Dashboard actualizado con gráficos interactivos",
        time: "09:46",
      },
      { type: "user", message: "Sí, muéstrame el detalle de la Región Metropolitana", time: "09:47" },
      {
        type: "bot",
        message:
          "**🏙️ Región Metropolitana - Análisis Completo:**\n\n👤 **Top Vendedores:**\n• María González: $580,000\n• Carlos Ruiz: $520,000\n• Ana López: $490,000\n\n🏢 **Por Sucursal:**\n• Las Condes: $980,000\n• Providencia: $750,000\n• Maipú: $720,000\n\n📈 Reporte completo enviado a tu email y disponible en el portal web",
        time: "09:47",
      },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("ecosuelo")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  const activeCase = useCases.find((useCase) => useCase.id === activeTab)

  // Animation logic for cycling through messages
  useEffect(() => {
    if (!activeCase) return

    const animateMessages = () => {
      if (currentMessageIndex < activeCase.chat.length - 1) {
        // Show typing indicator
        setIsTyping(true)

        // After typing delay, show next message
        setTimeout(() => {
          setCurrentMessageIndex((prev) => prev + 1)
          setIsTyping(false)
        }, 1200) // Typing duration
      } else {
        // Reset animation after showing all messages
        setTimeout(() => {
          setCurrentMessageIndex(0)
          setAnimationKey((prev) => prev + 1) // Force re-render for smooth restart
        }, 3000) // Pause before restart
      }
    }

    const timer = setTimeout(animateMessages, 2500) // Delay between messages

    return () => clearTimeout(timer)
  }, [activeCase, currentMessageIndex])

  // Reset animation when tab changes
  useEffect(() => {
    setCurrentMessageIndex(0)
    setIsTyping(false)
    setAnimationKey((prev) => prev + 1)
  }, [activeTab])

  if (!activeCase) return null

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
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-lg px-6 py-2">
            <Code className="w-4 h-4 mr-2" />
            Soluciones Full Stack Completas
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Ecosistemas tecnológicos que{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
              transformaron
            </span>{" "}
            industrias
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            No solo desarrollamos agentes conversacionales. Creamos <strong>ecosistemas tecnológicos completos</strong>:
            frontend, backend, bases de datos, APIs, integraciones y agentes de IA especializados.
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
                        Desafío Empresarial
                      </h4>
                      <p className="text-muted-foreground">{useCase.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Code className="w-4 h-4 text-blue-500" />
                        Solución Full Stack N3uralia
                      </h4>
                      <p className="text-muted-foreground">{useCase.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        Componentes Desarrollados
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {useCase.results.map((result, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Database className="w-4 h-4 text-purple-500" />
                        Stack Tecnológico
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
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
                          <Bot className="w-3 h-3 mr-1" />
                          Agente IA
                        </Badge>
                      </div>

                      <div className="space-y-4 h-96 overflow-y-auto" key={`${activeTab}-${animationKey}`}>
                        <AnimatePresence mode="wait">
                          {useCase.chat.slice(0, currentMessageIndex + 1).map((msg, index) => (
                            <motion.div
                              key={`${activeTab}-${index}-${animationKey}`}
                              initial={{ opacity: 0, y: 20, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -20, scale: 0.95 }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                                ease: "easeOut",
                              }}
                              className={`flex gap-3 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                            >
                              {msg.type === "bot" && (
                                <Avatar className="w-8 h-8 flex-shrink-0">
                                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                                    <Bot className="w-4 h-4" />
                                  </AvatarFallback>
                                </Avatar>
                              )}
                              <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                                className={`max-w-[85%] p-3 rounded-2xl ${
                                  msg.type === "user"
                                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                <p className="text-sm whitespace-pre-line">{msg.message}</p>
                                <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                              </motion.div>
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
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex gap-3 justify-start"
                          >
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                                <Bot className="w-4 h-4" />
                              </AvatarFallback>
                            </Avatar>
                            <div className="bg-muted p-3 rounded-2xl">
                              <div className="flex space-x-1">
                                <motion.div
                                  className="w-2 h-2 bg-muted-foreground rounded-full"
                                  animate={{ y: [0, -4, 0] }}
                                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                                />
                                <motion.div
                                  className="w-2 h-2 bg-muted-foreground rounded-full"
                                  animate={{ y: [0, -4, 0] }}
                                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                                />
                                <motion.div
                                  className="w-2 h-2 bg-muted-foreground rounded-full"
                                  animate={{ y: [0, -4, 0] }}
                                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Full Stack Architecture Highlight */}
                  <Card className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Cloud className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">
                          Arquitectura Full Stack
                        </span>
                      </div>
                      <p className="text-xs text-blue-700 dark:text-blue-300">
                        Frontend + Backend + Base de Datos + APIs + Integraciones + Agentes IA especializados
                      </p>
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
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20una%20solución%20full%20stack%20con%20IA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Crear mi ecosistema tecnológico
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
