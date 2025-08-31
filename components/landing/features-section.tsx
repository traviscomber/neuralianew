"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Shield, Rocket, Users, BarChart } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Smart AI",
      description: "Advanced algorithms that learn and adapt",
      badge: "Core",
    },
    {
      icon: Zap,
      title: "Fast Deploy",
      description: "Launch in minutes, not months",
      badge: "Speed",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security built-in",
      badge: "Trust",
    },
    {
      icon: Rocket,
      title: "Scalable",
      description: "Grows with your business needs",
      badge: "Growth",
    },
    {
      icon: Users,
      title: "Team Ready",
      description: "Built for collaboration",
      badge: "Social",
    },
    {
      icon: BarChart,
      title: "Analytics",
      description: "Real insights, real results",
      badge: "Data",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Advanced tech made simple</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="feature-card group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
