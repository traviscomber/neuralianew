"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, MessageSquare, Brain, Code, Sparkles, Play, Users, TrendingUp, Globe } from "lucide-react"

const demos = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    subtitle: "Career Coaching AI",
    description: "AI-powered career guidance with emotional intelligence",
    icon: <Users className="h-6 w-6" />,
    gradient: "from-green-500 to-emerald-600",
    messages: [
      { role: "user", content: "Necesito ayuda con mi carrera profesional" },
      {
        role: "assistant",
        content:
          "¡Hola! Soy tu coach de carrera de EcosueloLab. Entiendo que buscas orientación profesional. Cuéntame, ¿en qué área trabajas actualmente y qué desafíos estás enfrentando?",
      },
      { role: "user", content: "Trabajo en marketing pero quiero cambiar a tech" },
      {
        role: "assistant",
        content:
          "¡Excelente decisión! La transición de marketing a tech es muy viable. Tus habilidades en marketing son valiosas en tech. Te sugiero: 1) Identifica qué área de tech te interesa más, 2) Aprovecha tu experiencia en marketing digital, 3) Considera roles como Product Marketing en empresas tech. ¿Qué área específica de tecnología te llama más la atención?",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    subtitle: "Language Learning AI",
    description: "Advanced conversation practice with pronunciation feedback",
    icon: <Globe className="h-6 w-6" />,
    gradient: "from-purple-500 to-violet-600",
    messages: [
      { role: "user", content: "I want to practice English conversation" },
      {
        role: "assistant",
        content:
          "Perfect! I'm ParrotfyIA, your AI conversation partner. Let's practice English together! I'll help you with pronunciation, grammar, and natural conversation flow. What topic would you like to discuss today? We could talk about travel, work, hobbies, or anything that interests you!",
      },
      { role: "user", content: "Let's talk about travel plans" },
      {
        role: "assistant",
        content:
          "Great choice! Travel is always exciting to discuss. Tell me, do you have any upcoming trips planned? Or perhaps there's a destination you've been dreaming about visiting? I can help you practice vocabulary related to travel, booking, and describing places. Where would you love to go?",
      },
    ],
  },
  {
    id: "customer-service",
    title: "Customer Service AI",
    subtitle: "Intelligent Support",
    description: "24/7 customer support with human-like understanding",
    icon: <MessageSquare className="h-6 w-6" />,
    gradient: "from-blue-500 to-cyan-600",
    messages: [
      { role: "user", content: "I'm having trouble with my order" },
      {
        role: "assistant",
        content:
          "I'm sorry to hear you're experiencing issues with your order. I'm here to help resolve this quickly for you. Could you please provide me with your order number? I'll look into the details and find the best solution.",
      },
      { role: "user", content: "Order #12345, it hasn't arrived yet" },
      {
        role: "assistant",
        content:
          "Thank you for providing order #12345. I've located your order in our system. I can see it was shipped 3 days ago via standard delivery. Let me track the current status... It appears there was a slight delay at the distribution center, but it's now out for delivery and should arrive today. I'll send you a tracking link and ensure you receive priority handling. Is there anything else I can help you with?",
      },
    ],
  },
]

export function HeroSection() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        const demo = demos[currentDemo]
        if (prev < demo.messages.length - 1) {
          return prev + 1
        } else {
          // Move to next demo
          setCurrentDemo((prevDemo) => (prevDemo + 1) % demos.length)
          return 0
        }
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [currentDemo, isPlaying])

  const currentDemoData = demos[currentDemo]

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Sparkles className="h-4 w-4 mr-1" />
              Powered by Vibe Coding
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build AI Agents with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vibe Coding
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create intelligent AI systems that understand context, emotion, and intent. Deploy conversational agents
              that feel natural and respond with human-like understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Zap className="h-5 w-5 mr-2" />
                Start Vibe Coding
              </Button>
              <Button size="lg" variant="outline">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">See Vibe Coding in Action</h2>
            <p className="text-gray-600 mb-8">
              Watch how our AI agents understand context, maintain conversation flow, and provide intelligent responses
              across different use cases.
            </p>

            <div className="space-y-4">
              {demos.map((demo, index) => (
                <motion.div
                  key={demo.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    index === currentDemo ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => {
                    setCurrentDemo(index)
                    setCurrentMessage(0)
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${demo.gradient} text-white`}>{demo.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{demo.title}</h3>
                      <p className="text-sm text-gray-600">{demo.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? "Pause" : "Play"} Demo
              </Button>
              <span className="text-sm text-gray-500">Auto-cycling every 2 seconds</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${currentDemoData.gradient} text-white`}>
                    {currentDemoData.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{currentDemoData.title}</h3>
                    <p className="text-gray-600">{currentDemoData.description}</p>
                  </div>
                </div>

                <div className="space-y-4 h-80 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {currentDemoData.messages.slice(0, currentMessage + 1).map((message, index) => (
                      <motion.div
                        key={`${currentDemo}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>Powered by Vibe Coding</span>
                  <div className="flex space-x-1">
                    {demos.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentDemo ? "bg-blue-600" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligent Understanding</h3>
              <p className="text-gray-600 text-sm">
                AI that comprehends context, emotion, and intent for natural conversations
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-purple-100 rounded-full mb-4">
                <Code className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vibe Coding Approach</h3>
              <p className="text-gray-600 text-sm">
                Intuitive development process that captures the essence of human interaction
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-green-100 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Deployment</h3>
              <p className="text-gray-600 text-sm">
                Deploy across multiple channels with consistent personality and performance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
