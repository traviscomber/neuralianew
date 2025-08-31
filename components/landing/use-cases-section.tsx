"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  Heart,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { motion } from "framer-motion"

const useCases = [
  {
    icon: MessageCircle,
    title: "Customer Support Revolution",
    description: "Transform customer service with AI that understands emotions, context, and brand personality.",
    benefits: ["24/7 empathetic support", "90% faster resolution", "Consistent brand voice"],
    industry: "E-commerce",
    color: "blue",
  },
  {
    icon: GraduationCap,
    title: "Personalized Learning",
    description: "Educational AI that adapts to each student's learning style, pace, and interests.",
    benefits: ["Adaptive curriculum", "Real-time feedback", "Engagement tracking"],
    industry: "Education",
    color: "green",
  },
  {
    icon: Briefcase,
    title: "Business Intelligence",
    description: "AI consultants that understand your industry, challenges, and strategic goals.",
    benefits: ["Strategic insights", "Market analysis", "Decision support"],
    industry: "Consulting",
    color: "purple",
  },
  {
    icon: ShoppingCart,
    title: "Smart Sales Assistant",
    description: "AI that knows your products, customers, and sales process to maximize conversions.",
    benefits: ["Personalized recommendations", "Objection handling", "Upselling optimization"],
    industry: "Retail",
    color: "orange",
  },
  {
    icon: Heart,
    title: "Healthcare Companion",
    description: "Compassionate AI that provides health guidance while understanding patient concerns.",
    benefits: ["Symptom assessment", "Treatment adherence", "Emotional support"],
    industry: "Healthcare",
    color: "red",
  },
  {
    icon: Zap,
    title: "Creative Collaboration",
    description: "AI creative partners that understand your artistic vision and brand aesthetics.",
    benefits: ["Content generation", "Design assistance", "Brand consistency"],
    industry: "Creative",
    color: "yellow",
  },
]

const colorClasses = {
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  purple: "bg-purple-100 text-purple-800",
  orange: "bg-orange-100 text-orange-800",
  red: "bg-red-100 text-red-800",
  yellow: "bg-yellow-100 text-yellow-800",
}

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            <Briefcase className="mr-1 h-3 w-3" />
            Real-World Applications
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vibe Coding in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses across industries are using vibe coding to create AI experiences that feel natural,
            authentic, and perfectly aligned with their brand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg group-hover:scale-110 transition-transform">
                      <useCase.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <Badge className={colorClasses[useCase.color as keyof typeof colorClasses]}>
                      {useCase.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">{useCase.description}</CardDescription>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
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
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Use Case?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our vibe coding technology adapts to any industry or application. Let's discuss how we can create the
              perfect AI solution for your unique needs.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
              Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
