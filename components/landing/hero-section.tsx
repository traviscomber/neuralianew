"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Brain, Sparkles } from "lucide-react"

export function HeroSection() {
  const [stats, setStats] = useState({ agents: 0, users: 0, accuracy: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setStats((prev) => ({
        agents: Math.min(prev.agents + 2, 150),
        users: Math.min(prev.users + 100, 25000),
        accuracy: Math.min(prev.accuracy + 1, 98.7),
      }))
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <Sparkles className="w-3 h-3 mr-1" />
            Built with Vibe Coding
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Smart AI</span>
            <br />
            Simple Results
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We build AI agents that actually work. No complexity, just results.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <Card className="p-4 bg-white/80">
              <CardContent className="p-0 text-center">
                <div className="text-2xl font-bold gradient-text">{stats.agents}+</div>
                <div className="text-sm text-gray-600">AI Agents</div>
              </CardContent>
            </Card>
            <Card className="p-4 bg-white/80">
              <CardContent className="p-0 text-center">
                <div className="text-2xl font-bold gradient-text">{(stats.users / 1000).toFixed(0)}K+</div>
                <div className="text-sm text-gray-600">Users</div>
              </CardContent>
            </Card>
            <Card className="p-4 bg-white/80">
              <CardContent className="p-0 text-center">
                <div className="text-2xl font-bold gradient-text">{stats.accuracy.toFixed(1)}%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg">
              <Zap className="mr-2 h-5 w-5" />
              Try Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
              See Demo
            </Button>
          </div>
        </div>

        {/* Live Demo Preview */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
              <div className="flex items-center gap-2 text-white">
                <Brain className="w-5 h-5" />
                <span className="font-semibold">Neuralia AI</span>
                <Badge variant="secondary" className="bg-white/20 text-white border-0 ml-auto">
                  Live
                </Badge>
              </div>
            </div>

            <div className="p-6 space-y-4 bg-gray-50">
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">Need help with my soil analysis</div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg max-w-xs shadow-sm">
                  I'll analyze your soil right now. What crop are you planning?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">Tomatoes in Chile</div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg max-w-xs shadow-sm">
                  Perfect! For Chilean tomatoes, I recommend pH 6.2-6.8. Need specific fertilizer amounts?
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
