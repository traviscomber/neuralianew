"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Brain, Zap } from "lucide-react"
import { motion } from "framer-motion"

const demos = [
  {
    title: "EcosueloLab - Soil Analysis AI",
    description: "Advanced soil analysis through WhatsApp. Get instant recommendations for your crops.",
    icon: "🌱",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "ParrotfyIA - Language Learning",
    description: "AI-powered conversation practice. Master any language with personalized coaching.",
    icon: "🦜",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Career Coach - Professional Growth",
    description: "Personalized career guidance. Navigate your professional journey with AI insights.",
    icon: "🚀",
    color: "from-purple-500 to-pink-600",
  },
]

export function HeroSection() {
  const [currentDemo, setCurrentDemo] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Built with Vibe Coding methodology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart AI,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Simple Results
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We build AI agents that actually work. Advanced technology made simple for real people. Experience the
              power of intelligent automation with our proven vibe coding approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Auto-cycling Demo Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Live AI Agents in Action</h3>
                <div className="flex space-x-2">
                  {demos.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentDemo ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                key={currentDemo}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium mb-4 bg-gradient-to-r ${demos[currentDemo].color}`}
                >
                  <span className="mr-2 text-lg">{demos[currentDemo].icon}</span>
                  {demos[currentDemo].title}
                </div>
                <p className="text-gray-600 text-lg mb-6">{demos[currentDemo].description}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Brain className="w-4 h-4 mr-1" />
                    AI-Powered
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Zap className="w-4 h-4 mr-1" />
                    Real-time
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Vibe Coding
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
