"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, Shield, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Strategic AI Thinking",
    description:
      "AI agents that understand context, analyze complex scenarios, and make strategic decisions like senior executives.",
  },
  {
    icon: Zap,
    title: "Autonomous Execution",
    description:
      "Deploy agents that don't just recommend - they execute decisions, manage workflows, and drive results.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with full audit trails, compliance controls, and data sovereignty.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time insights into agent performance, decision quality, and business impact metrics.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Neuralia?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The only platform that deploys AI executives, not just assistants
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
