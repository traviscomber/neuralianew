"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Shield, Zap, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Technology",
    description: "Built on cutting-edge neural network architectures and machine learning models",
    details: [
      "Large Language Models",
      "Decision Tree Algorithms",
      "Pattern Recognition",
      "Natural Language Processing",
    ],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance standards",
    details: ["SOC 2 Compliance", "End-to-End Encryption", "Zero-Trust Architecture", "GDPR Compliant"],
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Instant responses and real-time coordination across all AI executives",
    details: ["Sub-second Response Times", "Real-time Coordination", "Parallel Processing", "24/7 Availability"],
  },
  {
    icon: Users,
    title: "Multi-Agent Coordination",
    description: "Seamless collaboration between specialized AI executives",
    details: ["Task Delegation", "Resource Optimization", "Unified Strategy", "Cross-functional Alignment"],
  },
]

const companyValues = [
  {
    title: "Innovation First",
    description: "Continuously advancing AI capabilities to serve business needs better",
  },
  {
    title: "Security & Privacy",
    description: "Your business data is protected with enterprise-grade security measures",
  },
  {
    title: "Practical AI",
    description: "Focus on delivering real business value through actionable AI insights",
  },
  {
    title: "Continuous Learning",
    description: "AI executives improve through interaction and feedback",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Built for Business Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neural AI Executives combine advanced artificial intelligence with practical business applications to
            deliver real value for your organization.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.details.map((detail, detailIndex) => (
                      <Badge key={detailIndex} variant="outline" className="text-xs justify-center">
                        {detail}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Company Values */}
        <Card className="max-w-4xl mx-auto border-2 border-blue-200 bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">Our Commitment</CardTitle>
            <p className="text-gray-600">
              We're dedicated to providing reliable, secure, and effective AI executive solutions for businesses of all
              sizes.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t text-center">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Always Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">4</div>
                  <div className="text-gray-600">AI Executives</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">5 Days</div>
                  <div className="text-gray-600">Free Trial</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
