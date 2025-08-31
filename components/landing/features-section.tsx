import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Brain, MessageSquare, Zap, Shield, BarChart3, Code, Globe, Sparkles } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Intelligent Agents",
    description: "Deploy AI agents that understand context, learn from interactions, and adapt to your business needs.",
    badge: "Core",
  },
  {
    icon: Brain,
    title: "Neural Processing",
    description: "Advanced neural networks process complex queries and deliver human-like responses.",
    badge: "AI",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Chat",
    description: "Seamless integration across WhatsApp, web chat, SMS, and social media platforms.",
    badge: "Integration",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast response times with real-time data processing and instant insights.",
    badge: "Performance",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance with global standards.",
    badge: "Security",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards with AI-powered insights and predictive analytics.",
    badge: "Analytics",
  },
  {
    icon: Code,
    title: "Developer APIs",
    description: "Robust APIs and SDKs for seamless integration with your existing systems.",
    badge: "Developer",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with multi-language support and regional data centers.",
    badge: "Scale",
  },
  {
    icon: Sparkles,
    title: "Auto-Learning",
    description: "Agents continuously improve through machine learning and user feedback loops.",
    badge: "ML",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700">Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Powerful AI Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI tools and features empowers businesses to create, deploy, and manage
            intelligent agents at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
