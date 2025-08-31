"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, CheckCircle } from "lucide-react"

const capabilities = [
  {
    icon: TrendingUp,
    title: "Strategic Decision Making",
    description: "AI executives provide data-driven insights for complex business decisions",
    features: ["Market analysis", "Competitive intelligence", "Risk assessment", "Growth planning"],
  },
  {
    icon: Users,
    title: "Cross-Functional Coordination",
    description: "Neural Director ensures all executives work together seamlessly",
    features: ["Task delegation", "Resource optimization", "Timeline coordination", "Goal alignment"],
  },
  {
    icon: DollarSign,
    title: "Business Optimization",
    description: "Identify opportunities for efficiency and growth across all functions",
    features: ["Process improvement", "Cost optimization", "Revenue enhancement", "Performance tracking"],
  },
]

const industries = [
  "Technology & Software",
  "Financial Services",
  "Healthcare & Life Sciences",
  "Manufacturing",
  "Retail & E-commerce",
  "Professional Services",
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Trusted Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neural AI Executives provide strategic guidance and operational support across diverse business sectors.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{capability.title}</CardTitle>
                  <p className="text-gray-600">{capability.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Industries Served */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Industries Served</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <Badge key={index} variant="outline" className="p-3 text-center justify-center">
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to experience AI executive leadership?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@neuralia.ai" className="text-blue-600 hover:text-blue-700 font-medium">
              Email: hello@neuralia.ai
            </a>
            <a href="https://t.me/neuralia_support" className="text-blue-600 hover:text-blue-700 font-medium">
              Telegram: @neuralia_support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
