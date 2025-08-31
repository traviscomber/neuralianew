"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, TrendingUp, Zap, ArrowRight, Bot, Briefcase } from "lucide-react"

const demos = [
  {
    id: "ecosuelo",
    title: "EcosueloLab",
    subtitle: "Environmental Intelligence",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600",
    messages: [
      { type: "user", text: "¿Cómo está el nivel de contaminación hoy?" },
      {
        type: "bot",
        text: "Basado en nuestros sensores IoT, el índice de calidad del aire es 45 (Bueno). Recomiendo actividades al aire libre entre 10-16hrs.",
      },
      { type: "user", text: "¿Qué medidas preventivas sugiere?" },
      {
        type: "bot",
        text: "Con vibe coding, he analizado patrones ambientales y sugiero: 1) Aumentar áreas verdes en zona norte, 2) Implementar filtros en industrias cercanas.",
      },
    ],
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA",
    subtitle: "Language Learning Revolution",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "from-purple-500 to-pink-600",
    messages: [
      { type: "user", text: "Help me practice English pronunciation" },
      { type: "bot", text: "Perfect! Let's work on your pronunciation. Say: 'The weather is beautiful today'" },
      { type: "user", text: "Ze wezzer is byutiful today" },
      {
        type: "bot",
        text: "Great effort! Using vibe coding analysis: 'The' should be 'thuh' not 'ze'. Try: 'THUH weather'. Your rhythm is excellent! 🎯",
      },
    ],
  },
  {
    id: "career",
    title: "Career Coach AI",
    subtitle: "Intelligent Career Guidance",
    icon: <Briefcase className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-600",
    messages: [
      { type: "user", text: "I feel stuck in my current job. What should I do?" },
      {
        type: "bot",
        text: "I understand that feeling. Let's explore this together. What aspects of your current role energize you the most?",
      },
      { type: "user", text: "I love solving complex problems and mentoring others" },
      {
        type: "bot",
        text: "That's wonderful insight! With vibe coding methodology, I see you'd thrive in senior technical roles or team leadership. Have you considered transitioning to a Tech Lead position? 🚀",
      },
    ],
  },
]

export function HeroSection() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length)
      setCurrentMessage(0)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentMessage < demos[currentDemo].messages.length) {
      const timer = setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setCurrentMessage((prev) => prev + 1)
          setIsTyping(false)
        }, 1000)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [currentDemo, currentMessage])

  const currentDemoData = demos[currentDemo]

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/30">
              <Zap className="h-3 w-3 mr-1" />
              Powered by Vibe Coding
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Solutions with <span className="gradient-text">Vibe Coding</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the future of artificial intelligence with our revolutionary vibe coding methodology. Transform
              your business with intelligent solutions that understand context, emotion, and human nuance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 animate-pulse-glow">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400">AI Agents Deployed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Vibe Coding Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Demo Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${currentDemoData.color}`}>
                      {currentDemoData.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{currentDemoData.title}</h3>
                      <p className="text-gray-400 text-sm">{currentDemoData.subtitle}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-blue-600/30 text-blue-400">
                    Live Demo
                  </Badge>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4 h-80 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {currentDemoData.messages.slice(0, currentMessage).map((message, index) => (
                      <motion.div
                        key={`${currentDemo}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-lg ${
                            message.type === "user" ? "bg-blue-600 text-white" : "bg-slate-700 text-gray-100"
                          }`}
                        >
                          {message.type === "bot" && (
                            <div className="flex items-center space-x-2 mb-1">
                              <Bot className="h-4 w-4 text-blue-400" />
                              <span className="text-xs text-blue-400">vibe coding AI</span>
                            </div>
                          )}
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                      <div className="bg-slate-700 text-gray-100 px-4 py-2 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-4 w-4 text-blue-400" />
                          <span className="text-xs text-blue-400">vibe coding AI</span>
                        </div>
                        <div className="flex space-x-1 mt-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Demo Indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {demos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentDemo(index)
                        setCurrentMessage(0)
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentDemo ? "bg-blue-400" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
