"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageSquare,
  Users,
  Globe,
  ArrowRight,
  Play,
  Bot,
  Sparkles,
  TrendingUp,
  Shield,
  Code,
  Database,
} from "lucide-react"
import { ChatWidget } from "@/components/chat/chat-widget"
import { HeroChatInterface } from "./hero-chat-interface"

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("chat")
  const [isChatOpen, setIsChatOpen] = useState(false)

  const stats = [
    { icon: TrendingUp, value: "250%", label: "ROI Promedio", color: "text-green-400" },
    { icon: Users, value: "50+", label: "Proyectos Full Stack", color: "text-blue-400" },
    { icon: Globe, value: "24/7", label: "Soporte Global", color: "text-purple-400" },
    { icon: Shield, value: "95%", label: "Satisfacción", color: "text-orange-400" },
  ]

  return (
    <section
      id="hero"
      data-section="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 hover:bg-blue-600/30">
                <Code className="w-3 h-3 mr-1" />
                Full Stack Development
              </Badge>
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 hover:bg-purple-600/30">
                <Sparkles className="w-3 h-3 mr-1" />
                OpenAI GPT-4 Partner
              </Badge>
              <Badge className="bg-green-600/20 text-green-300 border-green-500/30 hover:bg-green-600/30">
                <Database className="w-3 h-3 mr-1" />
                Enterprise Solutions
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Full Stack</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  IA Systems
                </span>
              </h1>

              <div className="space-y-2 text-lg sm:text-xl text-slate-300">
                <p className="font-semibold text-blue-300">🚀 FULL STACK Engineering</p>
                <p className="font-semibold text-purple-300">🤖 Agentic Fleet + Custom AGENTS</p>
                <p className="font-semibold text-green-300">⚡ Next Level AI TOOLS for Your Business</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong className="text-blue-400">No solo agentes conversacionales.</strong> Desarrollamos{" "}
              <span className="text-purple-400 font-semibold">ecosistemas tecnológicos completos</span>: frontend,
              backend, bases de datos, APIs, integraciones y{" "}
              <span className="text-green-400 font-semibold">agentes de IA especializados</span>.{" "}
              <span className="text-orange-400 font-semibold">Soporte 24/7 global</span> con equipos en Chile, Singapur
              y Rusia.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => setIsChatOpen(true)}
              >
                <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Chat en Vivo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 group bg-transparent"
                onClick={() => setActiveTab("demo")}
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Ver Demo Full Stack
              </Button>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="relative">
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-0">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border-b border-slate-700/50">
                    <TabsTrigger
                      value="chat"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      <Bot className="w-4 h-4 mr-2" />
                      Chat Directo con N3uralia
                    </TabsTrigger>
                    <TabsTrigger
                      value="demo"
                      className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Demo Full Stack
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="chat" className="mt-0">
                    <div className="p-6 space-y-4">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Chat Directo con N3uralia</h3>
                        <p className="text-slate-400">
                          Habla directamente con nuestro equipo de ingenieros full stack. Respuesta garantizada en menos
                          de 1 hora.
                        </p>
                      </div>

                      <div className="flex items-center justify-center space-x-2 text-sm text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Equipo disponible 24/7</span>
                      </div>

                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white border-0 shadow-lg"
                        onClick={() =>
                          window.open(
                            "https://wa.me/56940946660?text=Hola%20N3uralia%2C%20necesito%20una%20solución%20full%20stack%20con%20IA",
                            "_blank",
                          )
                        }
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Iniciar Chat en WhatsApp
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="demo" className="mt-0">
                    <HeroChatInterface />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget isOpen={isChatOpen} onToggle={setIsChatOpen} />
    </section>
  )
}
