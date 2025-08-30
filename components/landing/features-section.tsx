"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Zap, Shield, Users, Rocket, Database, Globe } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Model Development",
    description: "Custom neural networks and machine learning models tailored to your specific use case.",
    badge: "Core Service",
    color: "text-blue-600",
  },
  {
    icon: Code,
    title: "Full-Stack Integration",
    description: "Seamless integration with your existing systems and infrastructure.",
    badge: "Technical",
    color: "text-purple-600",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "From prototype to production in days, not months.",
    badge: "Speed",
    color: "text-yellow-600",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with compliance for regulated industries.",
    badge: "Security",
    color: "text-green-600",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Your own AI development team working exclusively on your project.",
    badge: "Support",
    color: "text-pink-600",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Built to scale from startup to enterprise with millions of users.",
    badge: "Growth",
    color: "text-indigo-600",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Complete data pipeline setup and optimization for AI workloads.",
    badge: "Infrastructure",
    color: "text-cyan-600",
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Deploy your AI solutions worldwide with edge computing support.",
    badge: "Scale",
    color: "text-orange-600",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Build AI</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial concept to production deployment, we provide end-to-end AI development services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform`} />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
