"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  MessageSquare,
  Zap,
  Globe,
  Users,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Shield,
} from "lucide-react"
import { HeroChatInterface } from "./hero-chat-interface"

export function HeroSection() {
  const [currentMetric, setCurrentMetric] = useState(0)

  const metrics = [
    { value: "250%", label: "ROI Promedio", icon: TrendingUp, color: "text-green-400" },
    { value: "99.9%", label: "Uptime SLA", icon: Shield, color: "text-blue-400" },
    { value: "24/7", label: "Soporte Global", icon: Clock, color: "text-purple-400" },
    { value: "50+", label: "Proyectos Exitosos", icon: CheckCircle, color: "text-emerald-400" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/3 dark:to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Theme Toggle Banner */}
      <div className="absolute top-20 right-4 z-10">
        <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Theme:</span>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                <Zap className="w-3 h-3 mr-1" />
                FULL STACK Engineering
              </Badge>
              <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700">
                <Users className="w-3 h-3 mr-1" />
                Agentic Fleet + Custom AGENTS
              </Badge>
              <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700">
                <Globe className="w-3 h-3 mr-1" />
                Next Level AI TOOLS
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Agentes Conversacionales{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Inteligentes
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Transformamos tu negocio con agentes conversacionales inteligentes que realmente entienden a tus
                usuarios.
                <span className="font-semibold text-slate-900 dark:text-white"> Soporte 24/7 global</span> con equipos
                en Chile, Singapur y Rusia.
              </p>
            </div>

            {/* Rotating Metrics */}
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon
                    return (
                      <div
                        key={index}
                        className={`transition-all duration-500 ${
                          index === currentMetric ? "opacity-100 scale-110" : "opacity-40 scale-95"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className={`w-5 h-5 ${metric.color}`} />
                          <div>
                            <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">{metric.label}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="flex space-x-1">
                  {metrics.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentMetric ? "bg-blue-500 dark:bg-blue-400" : "bg-slate-300 dark:bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Comenzar Ahora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("use-cases")}
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
              >
                <Play className="w-4 h-4 mr-2" />
                Ver Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">4.9/5 de 50+ clientes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">ISO 27001 Certificado</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="relative">
            <HeroChatInterface />
          </div>
        </div>
      </div>
    </section>
  )
}
