"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Shield, Code, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Vibe Coding Intelligence",
    description:
      "Our revolutionary vibe coding methodology enables AI to understand emotional context, cultural nuances, and human intuition for more natural interactions.",
    badge: "Core Technology",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Empathetic AI Responses",
    description:
      "Using vibe coding, our AI agents provide emotionally intelligent responses that adapt to user mood, context, and communication style.",
    badge: "Emotional AI",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Contextual Understanding",
    description:
      "Vibe coding enables deep contextual awareness, allowing AI to understand implied meanings, cultural references, and situational nuances.",
    badge: "Smart Context",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast Processing",
    description:
      "Optimized vibe coding algorithms deliver instant responses while maintaining the depth and quality of human-like understanding.",
    badge: "Performance",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description:
      "Built with vibe coding security protocols, ensuring your data remains protected while maintaining the natural flow of AI interactions.",
    badge: "Security",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Easy Integration",
    description:
      "Our vibe coding framework integrates seamlessly with existing systems, requiring minimal setup while maximizing AI capabilities.",
    badge: "Developer Friendly",
    color: "from-teal-500 to-blue-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/30">
            <Sparkles className="h-3 w-3 mr-1" />
            Vibe Coding Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Revolutionary AI with <span className="gradient-text">Vibe Coding</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of artificial intelligence powered by our proprietary vibe coding
            methodology. Our AI doesn't just process data—it understands the human experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 h-full group hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <Badge variant="outline" className="border-blue-600/30 text-blue-400 text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Vibe Coding Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-600/30">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-blue-600/20">
                  <Zap className="h-12 w-12 text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">What Makes Vibe Coding Special?</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Vibe coding is our breakthrough methodology that combines emotional intelligence, contextual awareness,
                and cultural sensitivity into AI systems. Unlike traditional AI that processes data mechanically, vibe
                coding enables our AI to understand the <em>feeling</em> behind the data, creating more natural,
                empathetic, and effective interactions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
