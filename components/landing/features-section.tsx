"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Brain, MessageSquare, BarChart3, Shield, Rocket } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Brain,
    title: "Neural Intelligence",
    description: "Advanced AI that learns and adapts to your business needs with vibe coding principles.",
    badge: "Core AI",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Chat interfaces that feel human and understand context perfectly.",
    badge: "Communication",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Real-time insights and data visualization that drives decision making.",
    badge: "Analytics",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with complete data privacy and compliance.",
    badge: "Security",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "Get up and running in minutes, not months. Vibe coding makes it effortless.",
    badge: "Speed",
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "Works with your existing tools and workflows without disruption.",
    badge: "Integration",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI platform combines cutting-edge technology with vibe coding methodology to deliver solutions that just
            work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
