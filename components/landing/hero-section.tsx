"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Briefcase, GraduationCap, TrendingUp, ChevronRight, Sparkles, Zap } from "lucide-react"

const demos = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    subtitle: "Environmental Intelligence",
    description: "AI-powered environmental monitoring and analysis with vibe coding integration",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600",
    messages: [
      { role: "user", content: "¿Cuál es el estado actual de la calidad del aire en Santiago?" },
      {
        role: "assistant",
        content:
          "Basado en los datos en tiempo real, la calidad del aire en Santiago presenta un ICA de 85 (Moderado). Las concentraciones de PM2.5 están en 35 μg/m³. Recomiendo limitar actividades al aire libre para grupos sensibles. ¿Te gustaría un análisis más detallado?",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    subtitle: "Language Learning Revolution",
    description: "Advanced AI language tutor with vibe coding methodology for immersive learning",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "from-blue-500 to-purple-600",
    messages: [
      { role: "user", content: "Help me practice English conversation about business meetings" },
      {
        role: "assistant",
        content:
          "Great choice! Let's simulate a business meeting scenario. I'll be your colleague. *clears throat* Good morning! I've reviewed the quarterly reports. What are your thoughts on our market expansion strategy? Remember, focus on clear pronunciation and professional vocabulary.",
      },
    ],
  },
  {
    id: "career",
    title: "Career Coach AI",
    subtitle: "Professional Growth Partner",
    description: "Personalized career guidance powered by vibe coding insights and market intelligence",
    icon: <Briefcase className="h-6 w-6" />,
    color: "from-orange-500 to-red-600",
    messages: [
      { role: "user", content: "I'm feeling stuck in my current role. How can I advance my career?" },
      {
        role: "assistant",
        content:
          "I understand that feeling completely, and it's actually a positive sign that you're ready for growth! Let's explore your strengths and create a personalized development plan. What aspects of your current role energize you most? This will help us identify the best path forward for your unique situation.",
      },
    ],
  },
]

export function HeroSection() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length)
      setMessageIndex(0)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (messageIndex < demos[currentDemo].messages.length) {
      setIsTyping(true)
      const timer = setTimeout(() => {
        setIsTyping(false)
        setMessageIndex((prev) => prev + 1)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [currentDemo, messageIndex])

  const currentDemoData = demos[currentDemo]

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                Powered by Vibe Coding
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with <span className="gradient-text">AI Solutions</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the future of artificial intelligence with Neuralia's innovative vibe coding approach. Build,
                deploy, and scale AI agents that understand your business context and deliver exceptional results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 group">
                Start Your AI Journey
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 bg-transparent">
                <Bot className="mr-2 h-5 w-5" />
                Try Live Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">AI Agents Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Vibe Coding Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <div className={`h-2 bg-gradient-to-r ${currentDemoData.color}`} />

                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${currentDemoData.color} text-white`}>
                      {currentDemoData.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{currentDemoData.title}</h3>
                      <p className="text-sm text-muted-foreground">{currentDemoData.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-4 min-h-[200px]">
                    <AnimatePresence mode="wait">
                      {demos[currentDemo].messages.slice(0, messageIndex).map((message, idx) => (
                        <motion.div
                          key={`${currentDemo}-${idx}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div className={`chat-bubble ${message.role} max-w-[85%]`}>{message.content}</div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {isTyping && messageIndex < demos[currentDemo].messages.length && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                        <div className="chat-bubble assistant">
                          <div className="typing-indicator">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex justify-center mt-6 gap-2">
                    {demos.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentDemo(idx)
                          setMessageIndex(0)
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentDemo ? "bg-primary w-6" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Vibe Coding Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">
              Experience the power of <strong>vibe coding</strong> - where AI meets intuitive development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
