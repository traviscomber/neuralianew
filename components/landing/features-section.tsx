"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageSquare, Zap, Shield, Globe, BarChart3, Code2, Sparkles } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Contextual Intelligence",
    description:
      "AI agents that understand conversation context, remember previous interactions, and maintain coherent dialogue flow.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Vibe Coding Framework",
    description:
      "Intuitive development approach that captures personality, tone, and behavioral patterns for authentic AI interactions.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Multi-Channel Deployment",
    description:
      "Deploy your AI agents across web, mobile, WhatsApp, Telegram, and other messaging platforms seamlessly.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Real-Time Processing",
    description: "Lightning-fast response times with advanced caching and optimization for smooth user experiences.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, compliance standards, and data privacy protection.",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Advanced Analytics",
    description: "Comprehensive insights into user interactions, conversation patterns, and AI performance metrics.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Multilingual Support",
    description: "Native support for 50+ languages with cultural context awareness and localized responses.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "API Integration",
    description: "Robust APIs and webhooks for seamless integration with existing systems and third-party services.",
    gradient: "from-violet-500 to-purple-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vibe Coding
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale intelligent AI agents that understand and respond with
            human-like intuition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Vibe Coding?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who are building the next generation of AI agents with our intuitive vibe
              coding approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
