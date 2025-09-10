"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  Award,
  Building2,
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

  const trustIndicators = [
    { icon: Shield, text: "ISO 27001 Certificado", color: "text-green-400" },
    { icon: Award, text: "OpenAI Partner", color: "text-blue-400" },
    { icon: Building2, text: "Enterprise Ready", color: "text-purple-400" },
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Enhanced Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Professional Badges */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 text-xs sm:text-sm px-4 py-2 font-semibold shadow-lg">
                <Zap className="w-3 h-3 mr-2 flex-shrink-0" />
                <span className="truncate">FULL STACK Engineering</span>
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0 text-xs sm:text-sm px-4 py-2 font-semibold shadow-lg">
                <Users className="w-3 h-3 mr-2 flex-shrink-0" />
                <span className="truncate">Agentic Fleet + Custom AGENTS</span>
              </Badge>
              <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white border-0 text-xs sm:text-sm px-4 py-2 font-semibold shadow-lg">
                <Globe className="w-3 h-3 mr-2 flex-shrink-0" />
                <span className="truncate">Next Level AI TOOLS</span>
              </Badge>
            </div>

            {/* Enhanced Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight">
                <span className="block">Enterprise AI</span>
                <span className="block">Implementation</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block animate-pulse">
                  Partner
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Transformamos empresas con{" "}
                <span className="text-white font-bold">ecosistemas tecnológicos completos</span> que van más allá de
                simples chatbots.
                <span className="block mt-2 text-blue-300">
                  Metodología "Human in the Middle" con equipos en Chile, Singapur y Rusia.
                </span>
              </p>
            </div>

            {/* Enhanced Rotating Metrics */}
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-700/50 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 sm:gap-8">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon
                    return (
                      <div
                        key={index}
                        className={`transition-all duration-700 ${
                          index === currentMetric ? "opacity-100 scale-110 transform" : "opacity-50 scale-95 transform"
                        }`}
                      >
                        <div className="flex items-center space-x-3 text-center sm:text-left">
                          <div className="p-2 bg-slate-800/50 rounded-xl">
                            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${metric.color} flex-shrink-0`} />
                          </div>
                          <div>
                            <div className={`text-2xl sm:text-3xl font-black ${metric.color}`}>{metric.value}</div>
                            <div className="text-sm sm:text-base text-slate-400 whitespace-nowrap font-medium">
                              {metric.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="flex space-x-2">
                  {metrics.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        index === currentMetric
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                          : "bg-slate-600 scale-100"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 w-full sm:w-auto text-lg px-8 py-4 rounded-2xl font-bold"
              >
                <MessageSquare className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="truncate">Comenzar Proyecto</span>
                <ArrowRight className="w-5 h-5 ml-3 flex-shrink-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("use-cases")}
                className="border-2 border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 transition-all duration-500 w-full sm:w-auto text-lg px-8 py-4 rounded-2xl font-bold backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="truncate">Ver Casos Reales</span>
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" />
                  ))}
                </div>
                <span className="text-sm text-slate-300 whitespace-nowrap font-medium">
                  4.9/5 de 50+ clientes enterprise
                </span>
              </div>
              <div className="flex items-center space-x-6">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <indicator.icon className={`w-4 h-4 ${indicator.color} flex-shrink-0`} />
                    <span className="text-sm text-slate-300 whitespace-nowrap font-medium">{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Interactive Demo */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Glow effect behind demo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <HeroChatInterface />
            </div>
          </div>
        </div>

        {/* Mobile Demo Section */}
        <div className="mt-12 lg:hidden">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <HeroChatInterface />
          </div>
        </div>
      </div>
    </section>
  )
}
