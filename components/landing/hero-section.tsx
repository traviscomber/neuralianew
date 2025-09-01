"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const quickPrompts = [
  "💰 Necesito una cotización personalizada para mi empresa",
  "🔧 ¿Cómo funciona la arquitectura técnica de N3uralia?",
  "🏆 Muéstrame casos de éxito reales con métricas específicas",
  "⚡ ¿Cuál es el proceso completo desde consulta hasta deployment?",
]

export function HeroSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "¡Hola! Soy el AI Expert de N3uralia. Puedo ayudarte con cotizaciones, información técnica, casos de éxito y procesos de implementación. ¿En qué puedo asistirte?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    const userMessage = { role: "user" as const, content: message }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat/hero-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      })

      if (response.ok) {
        const data = await response.json()
        setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
      } else {
        throw new Error("API Error")
      }
    } catch (error) {
      // Fallback responses
      let fallbackResponse = "Gracias por tu consulta. Te conectaré con nuestro equipo especializado."

      if (message.toLowerCase().includes("cotización") || message.toLowerCase().includes("precio")) {
        fallbackResponse =
          "💰 **Cotización Personalizada:**\n\n• **Consultoría inicial:** GRATIS\n• **Chatbots básicos:** Desde $2,000 USD\n• **Sistemas full stack:** Desde $15,000 USD\n• **Agentes IA avanzados:** Desde $25,000 USD\n\n¿Te gustaría agendar una consulta gratuita?"
      } else if (message.toLowerCase().includes("arquitectura") || message.toLowerCase().includes("técnica")) {
        fallbackResponse =
          "🔧 **Arquitectura Técnica:**\n\n• **Frontend:** React/Next.js con TypeScript\n• **Backend:** Node.js, Python, APIs REST/GraphQL\n• **IA:** OpenAI GPT-4, modelos custom, RAG\n• **Base de datos:** PostgreSQL, Vector DBs\n• **Infraestructura:** AWS, Vercel, Docker\n\n¿Necesitas detalles específicos?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: fallbackResponse }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickPrompt = (prompt: string) => {
    handleSendMessage(prompt)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <Badge variant="outline" className="text-sm font-medium">
                🚀 Líderes en IA Conversacional
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                  Mientras otros hablan de IA,
                </span>
                <br />
                <span className="text-foreground">nosotros la construimos</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Sistemas que no solo funcionan, sino que revolucionan industrias completas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { number: "50+", label: "Proyectos" },
                { number: "250%", label: "ROI Promedio" },
                { number: "24/7", label: "Soporte" },
                { number: "96%", label: "Satisfacción" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20IA%20en%20mi%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consulta Gratuita
                </a>
              </Button>

              <Button size="lg" variant="outline">
                Ver Casos de Éxito
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Compact Chat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">N3uralia AI Expert</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-muted-foreground">Online 24/7</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Powered by GPT-4</Badge>
                </div>

                {/* Compact Chat Area */}
                <ScrollArea className="h-80 mb-4 pr-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className="flex items-start space-x-2 max-w-[80%]">
                          {message.role === "assistant" && (
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                              <Bot className="w-3 h-3 text-white" />
                            </div>
                          )}
                          <div
                            className={`px-3 py-2 rounded-lg text-sm ${
                              message.role === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {message.content}
                          </div>
                          {message.role === "user" && (
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                              <User className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                            <Bot className="w-3 h-3 text-white" />
                          </div>
                          <div className="bg-muted px-3 py-2 rounded-lg">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Quick Prompts */}
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {quickPrompts.slice(0, 2).map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-8 justify-start bg-transparent"
                      onClick={() => handleQuickPrompt(prompt)}
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>

                {/* Input */}
                <div className="flex space-x-2">
                  <Input
                    placeholder="Pregunta sobre IA, cotizaciones, casos..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage(input)}
                    className="flex-1"
                  />
                  <Button size="sm" onClick={() => handleSendMessage(input)} disabled={isLoading}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                {/* Expand Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full mt-2">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Consultar AI Expert Completo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh]">
                    <DialogHeader>
                      <DialogTitle>N3uralia AI Expert - Consulta Completa</DialogTitle>
                    </DialogHeader>
                    <div className="h-96">
                      <ScrollArea className="h-full pr-4">
                        <div className="space-y-4">
                          {messages.map((message, index) => (
                            <div
                              key={index}
                              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                              <div className="flex items-start space-x-3 max-w-[80%]">
                                {message.role === "assistant" && (
                                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                                    <Bot className="w-4 h-4 text-white" />
                                  </div>
                                )}
                                <div
                                  className={`px-4 py-3 rounded-lg ${
                                    message.role === "user"
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {message.content}
                                </div>
                                {message.role === "user" && (
                                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                    <User className="w-4 h-4 text-white" />
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {quickPrompts.map((prompt, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs justify-start bg-transparent"
                          onClick={() => handleQuickPrompt(prompt)}
                        >
                          {prompt}
                        </Button>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Pregunta detallada sobre implementación, arquitectura, ROI..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage(input)}
                        className="flex-1"
                      />
                      <Button onClick={() => handleSendMessage(input)} disabled={isLoading}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
