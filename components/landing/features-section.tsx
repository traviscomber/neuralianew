"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, MessageSquare, Shield, Sparkles, Target } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Brain,
    title: "Vibe Intelligence",
    description: "AI that learns and adapts to your unique communication style, brand voice, and business culture.",
    badge: "Core Feature",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Instant Vibe Matching",
    description: "Deploy AI agents that instantly understand your vibe and start delivering personalized experiences.",
    badge: "Lightning Fast",
    color: "purple",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Engage in authentic, context-aware conversations that feel genuinely human and on-brand.",
    badge: "Human-like",
    color: "green",
  },
  {
    icon: Shield,
    title: "Secure Vibe Coding",
    description: "Enterprise-grade security ensures your unique vibe and data remain protected and private.",
    badge: "Enterprise Ready",
    color: "red",
  },
  {
    icon: Sparkles,
    title: "Creative Adaptation",
    description:
      "AI that doesn't just follow rules but creatively adapts to new situations while maintaining your vibe.",
    badge: "Innovative",
    color: "yellow",
  },
  {
    icon: Target,
    title: "Goal-Aligned AI",
    description: "Every AI interaction is optimized to achieve your specific business objectives and KPIs.",
    badge: "Results Driven",
    color: "indigo",
  },
]

const colorClasses = {
  blue: "bg-blue-100 text-blue-800 border-blue-200",
  purple: "bg-purple-100 text-purple-800 border-purple-200",
  green: "bg-green-100 text-green-800 border-green-200",
  red: "bg-red-100 text-red-800 border-red-200",
  yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
  indigo: "bg-indigo-100 text-indigo-800 border-indigo-200",
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Sparkles className="mr-1 h-3 w-3" />
            Vibe Coding Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI That Speaks Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Language</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our vibe coding technology creates AI agents that understand not just what you say, but how you say it, why
            you say it, and what you really mean.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge className={colorClasses[feature.color as keyof typeof colorClasses]}>{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Vibe Coding?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their AI interactions with our vibe coding approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
                Start Free Trial
              </button>
              <button className="border border-gray-300 hover:border-blue-300 text-gray-700 px-8 py-3 rounded-lg font-medium transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
