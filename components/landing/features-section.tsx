"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Shield, BarChart3, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Smart AI Agents",
    description: "Deploy intelligent agents that learn and adapt to your business needs",
    badge: "Popular",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Get your AI agents up and running in minutes, not hours",
    badge: "Fast",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance",
    badge: "Secure",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor performance and optimize your AI agents with detailed insights",
    badge: "Analytics",
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "Your AI agents work around the clock, never taking a break",
    badge: "Always On",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share and manage AI agents across your entire organization",
    badge: "Teamwork",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="text-blue-600 dark:text-blue-400"> Modern Business</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to deploy, manage, and scale AI agents for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
