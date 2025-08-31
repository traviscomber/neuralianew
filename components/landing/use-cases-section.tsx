"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, MessageSquare, Briefcase, Building, GraduationCap, Heart, ArrowRight, Zap } from "lucide-react"

const useCases = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "EcosueloLab",
    subtitle: "Environmental Intelligence Platform",
    description:
      "Monitor and analyze environmental data with vibe coding AI that understands ecological patterns, predicts environmental changes, and provides actionable insights for sustainability.",
    features: [
      "Real-time environmental monitoring",
      "Predictive analytics with vibe coding",
      "Sustainability recommendations",
      "IoT sensor integration",
    ],
    color: "from-green-500 to-emerald-600",
    badge: "Environmental AI",
    metrics: { users: "500+", accuracy: "94%", impact: "30% reduction in waste" },
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "ParrotfyIA",
    subtitle: "Intelligent Language Learning",
    description:
      "Revolutionary language learning powered by vibe coding that adapts to your learning style, cultural context, and emotional state for accelerated language acquisition.",
    features: [
      "Personalized learning paths",
      "Cultural context awareness",
      "Pronunciation coaching",
      "Emotional learning adaptation",
    ],
    color: "from-purple-500 to-pink-600",
    badge: "Language AI",
    metrics: { users: "10K+", improvement: "3x faster", satisfaction: "96%" },
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Career Coach AI",
    subtitle: "Intelligent Career Guidance",
    description:
      "Get personalized career advice with vibe coding AI that understands your aspirations, skills, and market trends to guide your professional journey.",
    features: ["Personalized career paths", "Skill gap analysis", "Market trend insights", "Interview preparation"],
    color: "from-blue-500 to-cyan-600",
    badge: "Career AI",
    metrics: { placements: "85%", satisfaction: "92%", growth: "40% salary increase" },
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Enterprise Solutions",
    subtitle: "Business Intelligence & Automation",
    description:
      "Transform your business operations with vibe coding AI that understands your company culture, processes, and goals to deliver intelligent automation.",
    features: ["Process automation", "Cultural alignment", "Predictive analytics", "Custom integrations"],
    color: "from-orange-500 to-red-600",
    badge: "Enterprise AI",
    metrics: { efficiency: "60%", cost_savings: "$2M+", adoption: "98%" },
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Educational AI",
    subtitle: "Personalized Learning Experiences",
    description:
      "Enhance education with vibe coding AI that adapts to individual learning styles, emotional states, and cultural backgrounds for optimal learning outcomes.",
    features: ["Adaptive learning", "Emotional support", "Cultural sensitivity", "Progress tracking"],
    color: "from-indigo-500 to-purple-600",
    badge: "Education AI",
    metrics: { improvement: "45%", engagement: "89%", retention: "78%" },
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Healthcare AI",
    subtitle: "Empathetic Patient Care",
    description:
      "Support healthcare with vibe coding AI that provides empathetic patient interactions, understands emotional needs, and assists in care coordination.",
    features: ["Patient empathy", "Care coordination", "Emotional support", "Health monitoring"],
    color: "from-rose-500 to-pink-600",
    badge: "Healthcare AI",
    metrics: { satisfaction: "94%", efficiency: "50%", outcomes: "25% better" },
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-600/30">
            <Zap className="h-3 w-3 mr-1" />
            Vibe Coding Applications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Real-World <span className="gradient-text">Vibe Coding</span> Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our vibe coding methodology is transforming industries and creating meaningful impact across
            diverse applications and use cases.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${useCase.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {useCase.icon}
                    </div>
                    <Badge variant="outline" className="border-blue-600/30 text-blue-400">
                      {useCase.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{useCase.title}</CardTitle>
                  <p className="text-blue-400 font-medium mb-3">{useCase.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Impact Metrics:</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(useCase.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-lg font-bold text-blue-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key.replace("_", " ")}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Learn More About {useCase.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-600/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Industry with Vibe Coding?</h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Join the vibe coding revolution and discover how our AI solutions can transform your specific use case.
                Let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Your Vibe Coding Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
