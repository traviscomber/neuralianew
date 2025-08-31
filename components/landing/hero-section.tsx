"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Zap, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-cyan-950/20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200 dark:border-blue-800">
              <Brain className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Neural AI Executives</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              AI Executives
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Deploy intelligent AI executives that think, reason, and act autonomously. From WhatsApp soil analysis to
            complex business operations - our neural AI transforms how you work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Explore Use Cases
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-foreground">10,000+</span>
              </div>
              <p className="text-sm text-muted-foreground">Daily Interactions</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-foreground">24/7</span>
              </div>
              <p className="text-sm text-muted-foreground">Autonomous Operation</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Brain className="w-5 h-5 text-cyan-600 mr-2" />
                <span className="text-2xl font-bold text-foreground">95%</span>
              </div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
