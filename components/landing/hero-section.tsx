"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, MessageCircle, Play, Pause } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const demos = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    description: "AI-powered environmental analysis and sustainability consulting",
    category: "Environmental AI",
    messages: [
      { role: "user", content: "¿Cómo puedo reducir la huella de carbono de mi empresa?" },
      {
        role: "assistant",
        content:
          "Te ayudo a crear un plan integral de sostenibilidad. Primero, analicemos tus principales fuentes de emisión: energía, transporte, y residuos. Podemos implementar energías renovables, optimizar logística, y establecer un programa de economía circular que reduzca hasta un 40% tu huella de carbono.",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    description: "Advanced language learning with AI conversation partners",
    category: "Education AI",
    messages: [
      { role: "user", content: "I want to practice business English for presentations" },
      {
        role: "assistant",
        content:
          "Perfect! Let's work on your presentation skills. I'll help you with professional vocabulary, confident delivery, and persuasive techniques. Try starting with: 'Good morning, I'm here to present our Q4 strategy...' I'll provide real-time feedback on pronunciation and business terminology.",
      },
    ],
  },
  {
    id: "customer-service",
    title: "Customer Service AI",
    description: "Intelligent customer support with emotional understanding",
    category: "Business AI",
    messages: [
      { role: "user", content: "I'm frustrated with my order delay, this is unacceptable!" },
      {
        role: "assistant",
        content:
          "I completely understand your frustration, and I sincerely apologize for this delay. Let me immediately check your order status and provide you with a solution. I'm also arranging priority shipping at no cost and a 20% discount on your next purchase. Your satisfaction is our priority.",
      },
    ],
  },
]

export function HeroSection() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const demo = demos[currentDemo]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
                <Zap className="mr-1 h-3 w-3" />
                Vibe Coding Revolution
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI That Gets Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vibe</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with AI agents that understand your unique style, culture, and goals. Our vibe
                coding approach creates personalized AI solutions that feel natural and authentic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
              >
                <Brain className="mr-2 h-5 w-5" />
                Start Vibe Coding
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">AI Vibes Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Vibe Match Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Vibe Support</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-100 shadow-2xl">
              <CardContent className="p-6">
                {/* Demo Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>

                {/* Demo Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={demo.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <Badge className="mb-2 bg-blue-100 text-blue-800">{demo.category}</Badge>
                      <h3 className="text-xl font-bold text-gray-900">{demo.title}</h3>
                      <p className="text-sm text-gray-600">{demo.description}</p>
                    </div>

                    <div className="space-y-4">
                      {demo.messages.map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: message.role === "user" ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 }}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Demo Navigation */}
                <div className="flex justify-center space-x-2 mt-6">
                  {demos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDemo(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentDemo ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-4 -right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
            >
              <Brain className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
