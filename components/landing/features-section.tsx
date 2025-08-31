"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Shield, Gauge, Users, Code, Brain, Sparkles, ArrowRight } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Vibe Coding Intelligence",
    description:
      "Revolutionary approach to AI development that understands context, emotion, and business nuance through advanced vibe coding techniques.",
    badge: "Core Technology",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "Smart AI Agents",
    description:
      "Deploy intelligent agents that learn from your business patterns and adapt to your unique workflow with vibe coding integration.",
    badge: "AI Powered",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast Deployment",
    description: "Go from concept to production in minutes with our vibe coding framework and pre-built AI components.",
    badge: "Performance",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption, ensuring your vibe coding implementations remain protected.",
    badge: "Security",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: "Real-time Analytics",
    description: "Monitor your AI agents' performance with detailed vibe coding metrics and actionable insights.",
    badge: "Analytics",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description:
      "Built for teams with shared vibe coding workspaces, version control, and collaborative AI development.",
    badge: "Collaboration",
    color: "from-indigo-500 to-purple-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            Vibe Coding Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for <span className="gradient-text">Modern AI Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our vibe coding approach revolutionizes AI development with intuitive tools, intelligent
            automation, and seamless integration capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  <div className="flex items-center mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Vibe Coding Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">What is Vibe Coding?</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vibe coding is our revolutionary approach to AI development that combines intuitive programming with
                emotional intelligence. It allows developers to create AI systems that not only process data but
                understand context, sentiment, and business nuance - making AI more human-like and effective.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
