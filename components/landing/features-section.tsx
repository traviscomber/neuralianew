"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, GitBranch, MessageSquare, BarChart3, Shield, Zap, Target } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Strategic AI Executives",
      description:
        "Deploy AI agents that think like C-level executives, making strategic decisions based on comprehensive business analysis.",
      badge: "Core Feature",
      color: "text-blue-600",
    },
    {
      icon: Code,
      title: "Developer-First Architecture",
      description:
        "Built by developers, for developers. Clean APIs, comprehensive documentation, and seamless integration with your existing stack.",
      badge: "Developer Tools",
      color: "text-green-600",
    },
    {
      icon: Database,
      title: "Contextual Memory System",
      description:
        "AI executives that remember every interaction, decision, and outcome to continuously improve their performance.",
      badge: "Intelligence",
      color: "text-purple-600",
    },
    {
      icon: GitBranch,
      title: "Multi-Agent Orchestration",
      description:
        "Coordinate multiple AI executives working together on complex projects with built-in conflict resolution.",
      badge: "Orchestration",
      color: "text-orange-600",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Interface",
      description:
        "Communicate with your AI executives in plain English. No complex prompts or technical jargon required.",
      badge: "User Experience",
      color: "text-cyan-600",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Track decision quality, execution speed, and business impact with comprehensive analytics dashboards.",
      badge: "Analytics",
      color: "text-red-600",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade security with end-to-end encryption, audit logs, and compliance with major security frameworks.",
      badge: "Security",
      color: "text-gray-600",
    },
    {
      icon: Zap,
      title: "Real-Time Execution",
      description:
        "AI executives that act in real-time, making decisions and executing tasks as business conditions change.",
      badge: "Performance",
      color: "text-yellow-600",
    },
    {
      icon: Target,
      title: "Goal-Oriented Planning",
      description:
        "Set high-level objectives and watch AI executives create detailed execution plans with measurable milestones.",
      badge: "Planning",
      color: "text-indigo-600",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Built for Developers Who
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Demand Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature designed with developer experience in mind. Clean, powerful, and ready for production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 dark:border-blue-800">
            <Code className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium">Ready to integrate with your existing development workflow</span>
          </div>
        </div>
      </div>
    </section>
  )
}
