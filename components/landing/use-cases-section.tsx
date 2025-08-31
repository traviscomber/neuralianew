"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, MessageCircle } from "lucide-react"

const useCases = [
  {
    title: "EcosueloLab",
    subtitle: "Soil Analysis AI",
    description:
      "Revolutionary soil analysis through WhatsApp. Farmers get instant, accurate recommendations for optimal crop yields.",
    icon: "🌱",
    metrics: {
      users: "10,000+",
      accuracy: "94%",
      response: "< 30s",
    },
    tags: ["Agriculture", "WhatsApp Bot", "Real-time Analysis"],
    link: "ecosuelolab.com",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "ParrotfyIA",
    subtitle: "Language Learning Revolution",
    description:
      "AI-powered conversation practice that adapts to your learning style. Master any language with personalized coaching.",
    icon: "🦜",
    metrics: {
      users: "25,000+",
      retention: "89%",
      improvement: "3x faster",
    },
    tags: ["Education", "Language Learning", "Adaptive AI"],
    link: "parrotfy.com",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Career Coach AI",
    subtitle: "Professional Growth Assistant",
    description:
      "Personalized career guidance powered by AI. Navigate your professional journey with intelligent insights and recommendations.",
    icon: "🚀",
    metrics: {
      placements: "500+",
      satisfaction: "96%",
      growth: "40% avg salary increase",
    },
    tags: ["Career Development", "Professional Coaching", "AI Insights"],
    link: "neuralia.com/career",
    gradient: "from-purple-500 to-pink-600",
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real AI, Real Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our vibe coding approach creates AI solutions that deliver measurable impact across different
              industries and use cases.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center text-2xl mb-4`}
                  >
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{useCase.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-600">{useCase.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>

                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(useCase.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent bg-transparent"
                  >
                    Visit {useCase.link}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:text-white" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your AI Solution?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our vibe coding approach to create AI that works.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Project
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
