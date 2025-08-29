"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Shield, Rocket, Code, BarChart3, Users, Clock, CheckCircle, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Custom AI Models",
    description: "Tailored machine learning solutions designed specifically for your business requirements and data.",
    badge: "Popular",
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "From prototype to production in days, not months. Our streamlined process gets you results fast.",
    badge: "Fast",
    color: "text-yellow-500 dark:text-yellow-400",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, compliance certifications, and data protection.",
    badge: "Secure",
    color: "text-green-500 dark:text-green-400",
  },
  {
    icon: Rocket,
    title: "Auto Scaling",
    description: "Automatically scale your AI infrastructure based on demand. Pay only for what you use.",
    badge: "Smart",
    color: "text-purple-500 dark:text-purple-400",
  },
  {
    icon: Code,
    title: "API Integration",
    description: "Seamless integration with your existing systems through RESTful APIs and SDKs.",
    badge: "Developer",
    color: "text-indigo-500 dark:text-indigo-400",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor performance, track usage, and gain insights with comprehensive analytics dashboards.",
    badge: "Insights",
    color: "text-pink-500 dark:text-pink-400",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 support from our team of AI engineers and data scientists. We're here when you need us.",
    badge: "Support",
    color: "text-orange-500 dark:text-orange-400",
  },
  {
    icon: Clock,
    title: "Continuous Learning",
    description: "Your AI models improve over time with continuous learning and automatic model updates.",
    badge: "Adaptive",
    color: "text-teal-500 dark:text-teal-400",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Features</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need to build
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              intelligent solutions
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom AI models to enterprise-grade infrastructure, we provide all the tools and expertise you need to
            succeed with artificial intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-background border flex items-center justify-center ${feature.color}`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-muted/50 border border-border rounded-2xl p-6">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-background"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-background"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 border-2 border-background"></div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Ready to get started?</p>
              <p className="text-sm text-muted-foreground">Join thousands of companies using our AI platform</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
