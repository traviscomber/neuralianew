"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, User, Zap, Brain, Rocket, Target } from "lucide-react"

export function HeroSection() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const chatMessages = [
    {
      role: "user",
      content: "Necesito automatizar todo mi negocio, no solo WhatsApp",
      timestamp: "14:30",
    },
    {
      role: "assistant",
      content:
        "¡Perfecto! Desarrollamos ecosistemas completos de IA: chatbots inteligentes, APIs personalizadas, CRM automatizado, análisis predictivo y más. ¿Qué proceso quieres transformar primero?",
      timestamp: "14:30",
    },
    {
      role: "user",
      content: "Todo: ventas, soporte, inventario, reportes...",
      timestamp: "14:31",
    },
    {
      role: "assistant",
      content:
        "¡Bacán! Creamos plataformas inteligentes que conectan todo. Como EcosueloLab (agricultura + IA) o ParrotfyIA (educación + IA). Tu negocio funcionará solo. ¿Conversamos tu proyecto?",
      timestamp: "14:31",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true)
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % chatMessages.length)
        setIsTyping(false)
      }, 1500)
    }, 5000)

    return () => clearInterval(interval)
  }, [chatMessages.length])

  const stats = [
    { icon: Rocket, value: "10x", label: "Más eficiencia operacional" },
    { icon: Target, value: "90%", label: "Procesos automatizados" },
    { icon: Brain, value: "24/7", label: "IA trabajando por ti" },
  ]

  const technologies = [
    "OpenAI GPT-4o",
    "APIs Personalizadas",
    "WhatsApp Business",
    "Análisis Predictivo",
    "CRM Inteligente",
    "Automatización Total",
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 text-sm px-4 py-2 shadow-lg">
                <Zap className="w-4 h-4 mr-2" />🔥 Mientras otros hablan, nosotros construimos
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Transformamos
                </span>
                <br />
                <span className="text-foreground">negocios completos</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  con IA real
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                No solo chatbots. <strong className="text-foreground">Desarrollamos ecosistemas completos de IA</strong>{" "}
                que automatizan ventas, soporte, inventario, reportes y más.
                <span className="text-primary font-semibold"> Tu competencia aún está en Excel.</span>
              </p>

              <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-sm font-medium text-foreground">
                  ✅ Plataformas completas como EcosueloLab y ParrotfyIA
                  <br />✅ APIs personalizadas que conectan todo tu negocio
                  <br />✅ IA que aprende y mejora automáticamente
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Transformar Mi Negocio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg bg-transparent hover:bg-muted/50 border-2 hover:border-primary/50 transition-all duration-300"
              >
                <Brain className="w-5 h-5 mr-2" />
                Ver Casos Reales
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-blue-600/20 flex items-center justify-center mx-auto mb-2 group-hover:from-primary/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">Tecnologías que dominamos:</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur-xl animate-pulse" />

            <Card className="relative bg-background/90 backdrop-blur-sm border-2 border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center shadow-lg">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Neuralia AI System</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-muted-foreground">Procesando en tiempo real</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      <Zap className="w-3 h-3 mr-1" />
                      ACTIVO
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4 h-80 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentMessage}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      {chatMessages.slice(0, currentMessage + 1).map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: message.role === "user" ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div className="flex items-start gap-2 max-w-[85%]">
                            {message.role === "assistant" && (
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                                <Brain className="w-3 h-3 text-white" />
                              </div>
                            )}
                            {message.role === "user" && (
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-muted to-muted-foreground/20 flex items-center justify-center flex-shrink-0 mt-1 order-2">
                                <User className="w-3 h-3 text-muted-foreground" />
                              </div>
                            )}
                            <div
                              className={`p-3 rounded-2xl text-sm shadow-sm ${
                                message.role === "user"
                                  ? "bg-gradient-to-r from-primary to-blue-600 text-white rounded-br-md"
                                  : "bg-muted/80 text-foreground rounded-bl-md border border-border/50"
                              }`}
                            >
                              {message.content}
                              <div
                                className={`text-xs mt-1 ${message.role === "user" ? "text-white/70" : "text-muted-foreground"}`}
                              >
                                {message.timestamp}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center shadow-md">
                          <Brain className="w-3 h-3 text-white" />
                        </div>
                        <div className="bg-muted/80 p-3 rounded-2xl rounded-bl-md border border-border/50">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                            <div
                              className="w-2 h-2 bg-primary rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            />
                            <div
                              className="w-2 h-2 bg-primary rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      <Zap className="w-3 h-3 mr-1" />
                      Sistema en producción
                    </Badge>
                    <div className="text-xs text-muted-foreground">Powered by Neuralia AI</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
