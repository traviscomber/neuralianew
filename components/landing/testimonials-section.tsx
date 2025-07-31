"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, DollarSign, Clock, Users, BarChart3 } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow Dynamics",
      industry: "SaaS",
      content:
        "Our CEO Neural Orchestrator helped us pivot our entire business strategy in just 48 hours. The strategic insights were incredibly detailed and actionable. We've seen a 340% increase in quarterly revenue since implementation.",
      metric: "340% Revenue Increase",
      icon: TrendingUp,
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "CMO",
      company: "GrowthLab Inc",
      industry: "Marketing Agency",
      content:
        "The CMO Growth Engine revolutionized our client acquisition process. It identified market opportunities we completely missed and automated our entire lead nurturing sequence. Our conversion rates jumped from 2.3% to 8.7%.",
      metric: "278% Conversion Boost",
      icon: BarChart3,
      rating: 5,
    },
    {
      name: "Dr. Emily Watson",
      role: "CTO",
      company: "Neural Dynamics",
      industry: "AI Research",
      content:
        "As someone who builds AI systems, I was skeptical. But the CTO Innovation Architect's technical recommendations were spot-on. It helped us reduce our development cycles by 85% and identified critical architecture improvements.",
      metric: "85% Faster Development",
      icon: Clock,
      rating: 5,
    },
    {
      name: "James Park",
      role: "CFO",
      company: "FinanceFirst Corp",
      industry: "Financial Services",
      content:
        "The Financial Strategy Expert saved us $2.3M in the first quarter alone by optimizing our investment portfolio and identifying cost reduction opportunities. The ROI analysis capabilities are phenomenal.",
      metric: "$2.3M Cost Savings",
      icon: DollarSign,
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "COO",
      company: "LogiChain Solutions",
      industry: "Supply Chain",
      content:
        "Our Operations Excellence Expert streamlined our entire supply chain process. We reduced operational costs by 31% and improved delivery times by 45%. The process optimization recommendations were incredibly detailed.",
      metric: "31% Cost Reduction",
      icon: TrendingUp,
      rating: 5,
    },
    {
      name: "Robert Kim",
      role: "General Counsel",
      company: "LegalTech Innovations",
      industry: "Legal Technology",
      content:
        "The Legal Advisory Expert helped us navigate complex compliance requirements across 12 jurisdictions. It identified potential legal risks we hadn't considered and streamlined our contract review process by 67%.",
      metric: "67% Faster Reviews",
      icon: Users,
      rating: 5,
    },
  ]

  const overallStats = [
    { label: "Average ROI Increase", value: "340%", icon: TrendingUp },
    { label: "Enterprise Clients", value: "500+", icon: Users },
    { label: "Total Cost Savings", value: "$50M+", icon: DollarSign },
    { label: "Decision Accuracy", value: "97%", icon: BarChart3 },
  ]

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Neural AI Executives are transforming businesses across industries with measurable results.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {overallStats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.label}
                className="text-center border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.industry}
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>
                        {testimonial.role} at {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-sm">"{testimonial.content}"</p>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-600">{testimonial.metric}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join 500+ Successful Companies</h3>
              <p className="text-gray-600 mb-6">
                Start your 5-day free trial and experience the power of Neural AI Executives for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                  Average 340% ROI increase
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-blue-500" />
                  Deploy in under 60 seconds
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 text-purple-500" />
                  No setup or training required
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
