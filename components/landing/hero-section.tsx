"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Zap, Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Brain className="relative h-20 w-20 text-primary mx-auto" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Deploy AI Executives
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              That Actually Think
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Stop managing AI tools. Start deploying AI executives that think, decide, and execute like your best team
            members.
            <span className="text-foreground font-semibold"> Built for developers who demand more than chatbots.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Deploy Your First Executive
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
              Watch Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border">
              <Zap className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Autonomous Decision Making</h3>
              <p className="text-sm text-muted-foreground text-center">
                AI executives that analyze, strategize, and execute without constant supervision
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border">
              <Target className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Goal-Oriented Execution</h3>
              <p className="text-sm text-muted-foreground text-center">
                Set objectives and watch AI executives break them down into actionable plans
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border">
              <Brain className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Contextual Intelligence</h3>
              <p className="text-sm text-muted-foreground text-center">
                Deep understanding of your business context, industry, and specific challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
