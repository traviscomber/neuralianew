"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Users, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">AI Agents Ecosystem</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Fullstack ecosystem built by Neuralia, copiloted by AI
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative mx-auto px-4 py-24">
        <div className="text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">🚀 500+ AI Agents Deployed</Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            AI Agents Ecosystem
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Fullstack ecosystem built by Neuralia, copiloted by AI. Deploy intelligent agents that understand your
            business and deliver results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Bot className="h-8 w-8" />
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Active Agents</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Users className="h-8 w-8" />
              <div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm">Happy Users</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Zap className="h-8 w-8" />
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
