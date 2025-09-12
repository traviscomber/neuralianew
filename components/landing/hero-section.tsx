"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Shield,
  Building2,
  Users,
  BarChart3,
} from "lucide-react"
import { HeroChatInterface } from "./hero-chat-interface"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [currentMetric, setCurrentMetric] = useState(0)
  const { t } = useLanguage()

  const metrics = [
    { value: "95%", label: t("hero.metrics.satisfaction"), icon: TrendingUp, color: "text-green-400" },
    { value: "60%", label: t("hero.metrics.cost"), icon: BarChart3, color: "text-blue-400" },
    { value: "48h", label: t("hero.metrics.setup"), icon: Clock, color: "text-purple-400" },
    { value: "99.9%", label: t("hero.metrics.uptime"), icon: Shield, color: "text-emerald-400" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 4000)
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Professional Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Professional Badges */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start">
              <Badge className="bg-slate-800 text-slate-200 border border-slate-700 text-sm px-4 py-2 font-medium">
                <Building2 className="w-4 h-4 mr-2" />
                {t("hero.badge.enterprise")}
              </Badge>
              <Badge className="bg-slate-800 text-slate-200 border border-slate-700 text-sm px-4 py-2 font-medium">
                <Users className="w-4 h-4 mr-2" />
                {t("hero.badge.fullstack")}
              </Badge>
              <Badge className="bg-slate-800 text-slate-200 border border-slate-700 text-sm px-4 py-2 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                {t("hero.badge.certified")}
              </Badge>
            </div>

            {/* Professional Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t("hero.title").split(" ").slice(0, 2).join(" ")}{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t("hero.title").split(" ").slice(2).join(" ")}
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">{t("hero.subtitle")}</p>
            </div>

            {/* Professional Metrics */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon
                    return (
                      <div
                        key={index}
                        className={`transition-all duration-500 ${
                          index === currentMetric ? "opacity-100 scale-105" : "opacity-60 scale-95"
                        }`}
                      >
                        <div className="flex items-center space-x-3 text-center sm:text-left">
                          <div className="p-2 bg-slate-800 rounded-lg">
                            <Icon className={`w-5 h-5 ${metric.color}`} />
                          </div>
                          <div>
                            <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                            <div className="text-sm text-slate-400 font-medium">{metric.label}</div>
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
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentMetric ? "bg-blue-500" : "bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Professional CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                {t("hero.cta.primary")}
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("use-cases")}
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 px-8 py-4 text-lg rounded-xl"
              >
                {t("hero.cta.secondary")}
              </Button>
            </div>

            {/* Professional Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-slate-300 font-medium">{t("hero.trust.projects")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-300 font-medium">{t("hero.trust.certification")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-slate-300 font-medium">{t("hero.trust.support")}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Demo */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              <HeroChatInterface />
            </div>
          </div>
        </div>

        {/* Mobile Demo Section */}
        <div className="mt-12 lg:hidden">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
            <HeroChatInterface />
          </div>
        </div>
      </div>
    </section>
  )
}
