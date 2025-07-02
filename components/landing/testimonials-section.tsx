"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Users, DollarSign } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    industry: "SaaS",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "The CEO Neural Orchestrator transformed our strategic planning process. We went from quarterly strategy sessions to real-time strategic adjustments. Our revenue increased 340% in 6 months.",
    metrics: {
      roi: "340%",
      timeSaved: "25 hrs/week",
      improvement: "Revenue Growth",
    },
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder & CTO",
    company: "DataVault Inc",
    industry: "Fintech",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Our CTO Innovation Architect identified 3 critical security vulnerabilities and optimized our infrastructure, saving us $2.3M in potential losses. The technical insights are phenomenal.",
    metrics: {
      roi: "2300%",
      timeSaved: "40 hrs/week",
      improvement: "Security & Performance",
    },
  },
  {
    name: "Jennifer Walsh",
    role: "VP Marketing",
    company: "GrowthLab",
    industry: "E-commerce",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "The CMO Growth Engine revolutionized our marketing strategy. Lead quality improved 97%, conversion rates doubled, and our customer acquisition cost dropped by 60%. It's like having a world-class CMO 24/7.",
    metrics: {
      roi: "180%",
      timeSaved: "30 hrs/week",
      improvement: "Lead Quality & Conversions",
    },
  },
  {
    name: "David Kim",
    role: "Managing Director",
    company: "Apex Consulting",
    industry: "Professional Services",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "We deployed all three Neural AI Executives across our portfolio companies. The strategic insights and operational efficiency gains have been extraordinary. Our portfolio performance improved 280% year-over-year.",
    metrics: {
      roi: "280%",
      timeSaved: "60 hrs/week",
      improvement: "Portfolio Performance",
    },
  },
  {
    name: "Lisa Thompson",
    role: "COO",
    company: "MedTech Innovations",
    industry: "Healthcare",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "The operational insights from our Neural AI Executive helped us streamline 15 critical processes, reduce costs by 45%, and improve patient satisfaction scores to 98%. Absolutely game-changing.",
    metrics: {
      roi: "450%",
      timeSaved: "35 hrs/week",
      improvement: "Operational Efficiency",
    },
  },
  {
    name: "Robert Chang",
    role: "President",
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Our supply chain optimization improved 65% within 30 days of deployment. The Neural AI Executive identified bottlenecks we didn't even know existed and provided actionable solutions immediately.",
    metrics: {
      roi: "220%",
      timeSaved: "50 hrs/week",
      improvement: "Supply Chain Optimization",
    },
  },
]

const overallStats = [
  {
    icon: TrendingUp,
    value: "340%",
    label: "Average ROI Increase",
    description: "Within 90 days of deployment",
  },
  {
    icon: Users,
    value: "500+",
    label: "Enterprise Clients",
    description: "Including 50+ Fortune 500 companies",
  },
  {
    icon: DollarSign,
    value: "$50M+",
    label: "Cost Savings Generated",
    description: "Across all client deployments",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Neural AI Executives are transforming businesses across industries with measurable results and
            unprecedented ROI.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {overallStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            )
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full bg-gray-200"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm font-medium text-blue-600">{testimonial.company}</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.industry}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</blockquote>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{testimonial.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{testimonial.metrics.timeSaved}</div>
                    <div className="text-xs text-gray-600">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-medium text-purple-600 leading-tight">
                      {testimonial.metrics.improvement}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join 500+ companies already using Neural AI Executives</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            <div className="text-2xl font-bold text-gray-400">Salesforce</div>
            <div className="text-2xl font-bold text-gray-400">Adobe</div>
            <div className="text-2xl font-bold text-gray-400">Shopify</div>
          </div>
        </div>
      </div>
    </section>
  )
}
