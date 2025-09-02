"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, MessageSquare, Zap, Users, TrendingUp, Globe, ArrowRight, Play, Sparkles } from "lucide-react"
import { HeroChatInterface } from "./hero-chat-interface"
import Image from "next/image"

export function HeroSection() {
  const [currentMetric, setCurrentMetric] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const metrics = [
    { value: "250%", label: "ROI Promedio", icon: TrendingUp, color: "text-green-400" },
    { value: "50+", label: "Proyectos Exitosos", icon: Users, color: "text-blue-400" },
    { value: "99.9%", label: "Tiempo Actividad", icon: Zap, color: "text-purple-400" },
    { value: "24/7", label: "Soporte Global", icon: Globe, color: "text-yellow-400" },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-yellow-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className={`space-y-8 ${isVisible ? "animate-in slide-in-from-left duration-1000" : "opacity-0"}`}>
          {/* Company Badge */}
          <div className="flex items-center space-x-2">
            <Image src="/n3uralia-logo-new.png" alt="N3uralia Logo" width={40} height={40} className="rounded-lg" />
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Agentes Conversacionales Inteligentes
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                IA Systems
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-slate-300 space-y-2">
              <p className="font-semibold text-blue-300">🔧 FULL STACK Engineering</p>
              <p className="font-semibold text-purple-300">🤖 Agentic Fleet + Custom AGENTS</p>
              <p className="font-semibold text-green-300">⚡ Next Level AI TOOLS for Your Business</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Transformamos tu negocio con{" "}
            <strong className="text-blue-400">agentes conversacionales inteligentes</strong> que realmente entienden a
            tus usuarios. Desde automatización empresarial hasta integración completa con WhatsApp, CRM y ERP.{" "}
            <strong className="text-purple-400">Soporte 24/7 global</strong> con equipos en Chile, Singapur y Rusia.
          </p>

          {/* Animated Metrics */}
          <div className="flex flex-wrap gap-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              const isActive = index === currentMetric
              return (
                <Card
                  key={index}
                  className={`transition-all duration-500 ${
                    isActive
                      ? "bg-slate-800/80 border-blue-500/50 scale-105 shadow-lg shadow-blue-500/20"
                      : "bg-slate-900/50 border-slate-700/50"
                  }`}
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${isActive ? metric.color : "text-slate-400"}`} />
                    <div>
                      <div className={`text-lg font-bold ${isActive ? metric.color : "text-white"}`}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-slate-400">{metric.label}</div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => scrollToSection("casos-de-uso")}
            >
              <Bot className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Ver Casos de Éxito
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent backdrop-blur-sm group"
              onClick={() => scrollToSection("demo-chat")}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Demo Interactivo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800">
            <div className="flex items-center space-x-2 text-slate-400">
              <MessageSquare className="w-4 h-4 text-green-400" />
              <span className="text-sm">Integración WhatsApp Certificada</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <Bot className="w-4 h-4 text-blue-400" />
              <span className="text-sm">OpenAI GPT-4 Partner</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-sm">Presencia Global</span>
            </div>
          </div>
        </div>

        {/* Right Column - Interactive Demo */}
        <div className={`${isVisible ? "animate-in slide-in-from-right duration-1000 delay-300" : "opacity-0"}`}>
          <div id="demo-chat">
            <HeroChatInterface />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
