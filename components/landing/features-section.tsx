"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, MessageSquare, BarChart3, Zap, Shield, Cpu } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Bot,
    title: "Intelligent AI Agents",
    description:
      "Deploy sophisticated AI agents that understand context and deliver personalized experiences using advanced vibe coding techniques.",
    badge: "Core Feature",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Natural language processing that feels human-like, powered by our proprietary vibe coding algorithms for enhanced understanding.",
    badge: "Popular",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Real-time insights and performance metrics that help you optimize your AI implementations with data-driven vibe coding.",
    badge: "Analytics",
  },
  {
    icon: Zap,
    title: "Rapid Integration",
    description:
      "Seamlessly integrate with your existing systems using our vibe coding framework for minimal disruption and maximum efficiency.",
    badge: "Integration",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption, ensuring your data remains protected while leveraging vibe coding innovations.",
    badge: "Security",
  },
  {
    icon: Cpu,
    title: "Scalable Architecture",
    description:
      "Built to scale from startup to enterprise, our vibe coding infrastructure grows with your business needs.",
    badge: "Scalability",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Powerful Features Built with <span className="gradient-text">Vibe Coding</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our comprehensive suite of AI tools leverages innovative vibe coding methodologies to deliver unparalleled
            performance and user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <feature.icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
