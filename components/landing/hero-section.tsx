"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react"

export function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { label: "Faster Deploy", value: "70%", icon: Zap },
    { label: "Better Results", value: "35%", icon: Target },
    { label: "Smart AI", value: "100%", icon: Sparkles },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 animate-bounce-in">
          Built with Vibe Coding
        </Badge>

        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 hero-title">
          Smart AI, <span className="gradient-text">Simple Results</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto hero-subtitle">
          We build AI agents that actually work. No complexity, just results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 hero-cta">
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            See Demo
          </Button>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={`p-6 rounded-lg transition-all duration-500 ${
                  index === currentStat
                    ? "bg-blue-50 border-2 border-blue-200 scale-105"
                    : "bg-white border border-gray-200"
                }`}
              >
                <Icon className={`h-8 w-8 mx-auto mb-2 ${index === currentStat ? "text-blue-600" : "text-gray-400"}`} />
                <div className={`text-3xl font-bold mb-1 ${index === currentStat ? "text-blue-600" : "text-gray-600"}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
