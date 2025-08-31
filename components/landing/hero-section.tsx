"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, MessageSquare, Users, TrendingUp, Play, Pause } from "lucide-react"

const demos = [
  {
    id: "ecosuelo",
    title: "EcosueloLab - Career Coaching",
    description: "AI-powered career guidance with vibe coding approach",
    messages: [
      { role: "user", content: "I feel stuck in my current job and don't know what career path to take next." },
      {
        role: "assistant",
        content:
          "I totally get that feeling! 🌟 Let's vibe check your career energy. What activities make you lose track of time? When do you feel most alive at work? Let's decode your passion patterns and find that perfect career match that aligns with your authentic self!",
      },
    ],
    metrics: { users: "15K+", satisfaction: "94%", placements: "2.3K" },
  },
  {
    id: "parrotfy",
    title: "ParrotfyIA - Language Learning",
    description: "Conversational AI that adapts to your learning vibe",
    messages: [
      { role: "user", content: "I want to practice Spanish but I'm nervous about making mistakes." },
      {
        role: "assistant",
        content:
          "¡No te preocupes! 🦜 Making mistakes is part of the vibe! I'm here to help you practice in a chill, judgment-free zone. Let's start with something fun - tell me about your favorite hobby in Spanish, and I'll help you express it naturally. ¡Vamos a practicar con buena onda!",
      },
    ],
    metrics: { users: "28K+", retention: "87%", fluency: "+65%" },
  },
  {
    id: "customer-service",
    title: "Customer Service AI",
    description: "Empathetic support that matches your brand's vibe",
    messages: [
      {
        role: "user",
        content: "My order hasn't arrived and I'm really frustrated. This is the third time this has happened.",
      },
      {
        role: "assistant",
        content:
          "I completely understand your frustration, and I'm genuinely sorry this keeps happening. 💙 That's definitely not the experience we want for you. Let me personally track down your order right now and make sure we get this sorted out properly. Can you share your order number? I'm going to make this right!",
      },
    ],
    metrics: { resolution: "92%", satisfaction: "96%", response: "< 30s" },
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

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="secondary" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Vibe Coding Revolution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              AI That Gets Your Vibe
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Create AI agents that understand your unique energy and communication style. With Neuralia's vibe coding
              approach, build intelligent solutions that feel authentically you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Vibe Coding
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Live Vibe Coding Demos</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={togglePlayback}
                className="flex items-center gap-2 bg-transparent"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? "Pause" : "Play"}
              </Button>
            </div>

            <div className="flex gap-2 mb-6">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setCurrentDemo(index)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    currentDemo === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {demo.title.split(" - ")[0]}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentDemo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{demos[currentDemo].title}</h3>
                        <p className="text-sm text-muted-foreground">{demos[currentDemo].description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {demos[currentDemo].messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(demos[currentDemo].metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Vibe-First Development</h3>
                </div>
                <p className="text-muted-foreground">
                  Our AI agents don't just process requests—they understand context, emotion, and personality. Each
                  interaction feels natural and aligned with your brand's unique energy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Human-Centric AI</h3>
                </div>
                <p className="text-muted-foreground">
                  Built for real people, not just data points. Our vibe coding approach ensures every AI interaction
                  feels authentic, empathetic, and genuinely helpful.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Proven Results</h3>
                </div>
                <p className="text-muted-foreground">
                  Join 50,000+ users who've transformed their businesses with AI that truly gets their vibe. See
                  measurable improvements in engagement, satisfaction, and growth.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
