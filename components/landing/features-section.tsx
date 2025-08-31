"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Shield, Code, Database, Cpu } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Smart AI",
      description: "Advanced neural networks that actually understand your industry",
      tech: "GPT-4 + Custom Models",
    },
    {
      icon: Zap,
      title: "Fast Deploy",
      description: "From idea to working AI agent in days, not months",
      tech: "Vibe Coding Framework",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security with full data protection",
      tech: "AES-256 + GDPR",
    },
    {
      icon: Code,
      title: "Easy Integration",
      description: "Simple APIs that work with your existing systems",
      tech: "REST + GraphQL",
    },
    {
      icon: Database,
      title: "Smart Memory",
      description: "AI that remembers and learns from every conversation",
      tech: "Vector DB + RAG",
    },
    {
      icon: Cpu,
      title: "Auto-Scale",
      description: "Handles millions of conversations without breaking",
      tech: "Cloud Native",
    },
  ]

  return (
    <section id="tech" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <Cpu className="w-3 h-3 mr-1" />
            Technology
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Built Different</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Advanced tech made simple. No PhD required.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="feature-card border-0 shadow-lg hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {feature.tech}
                      </Badge>
                    </div>
                  </div>
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
