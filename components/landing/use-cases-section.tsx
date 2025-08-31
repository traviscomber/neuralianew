"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageSquare, ShoppingCart, Briefcase, Heart, Globe, TrendingUp } from "lucide-react"

const useCases = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "EcosueloLab - Career Coaching",
    description: "AI-powered career guidance with emotional intelligence and personalized advice",
    features: ["Personalized career paths", "Emotional support", "Skills assessment", "Job market insights"],
    gradient: "from-green-500 to-emerald-600",
    badge: "Career Development",
    metrics: "85% user satisfaction",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "ParrotfyIA - Language Learning",
    description: "Advanced conversation practice with real-time pronunciation feedback and cultural context",
    features: ["Conversation practice", "Pronunciation feedback", "Cultural context", "Progress tracking"],
    gradient: "from-purple-500 to-violet-600",
    badge: "Education",
    metrics: "92% improvement rate",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Customer Service AI",
    description: "24/7 intelligent support that understands context and provides human-like assistance",
    features: ["24/7 availability", "Context awareness", "Multi-language", "Escalation handling"],
    gradient: "from-blue-500 to-cyan-600",
    badge: "Customer Support",
    metrics: "40% cost reduction",
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "E-commerce Assistant",
    description: "Personalized shopping experiences with product recommendations and order assistance",
    features: ["Product recommendations", "Order tracking", "Personalized offers", "Shopping guidance"],
    gradient: "from-orange-500 to-red-500",
    badge: "E-commerce",
    metrics: "35% sales increase",
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "HR & Recruitment",
    description: "Streamline hiring processes with intelligent candidate screening and employee support",
    features: ["Candidate screening", "Interview scheduling", "Employee onboarding", "FAQ automation"],
    gradient: "from-indigo-500 to-purple-500",
    badge: "Human Resources",
    metrics: "60% time savings",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Healthcare Support",
    description: "Patient assistance with appointment scheduling, medication reminders, and health guidance",
    features: ["Appointment booking", "Medication reminders", "Symptom checking", "Health education"],
    gradient: "from-pink-500 to-rose-500",
    badge: "Healthcare",
    metrics: "95% patient satisfaction",
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real-World{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vibe Coding
            </span>{" "}
            Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations across industries are using vibe coding to create AI agents that truly understand and
            connect with their users.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.gradient} flex items-center justify-center text-white`}
                    >
                      {useCase.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {useCase.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {useCase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Success Metric:</span>
                        <span className="text-sm font-bold text-green-600">{useCase.metrics}</span>
                      </div>
                    </div>
                  </div>
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
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">Your Use Case Could Be Next</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Every industry has unique challenges that can be solved with intelligent AI agents. Let's explore how
                vibe coding can transform your specific use case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Explore Your Use Case
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View All Examples
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
