import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, MessageSquare, Zap, Shield, Globe, BarChart3, Cpu, Layers, Rocket } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced Neural Networks",
    description: "Powered by state-of-the-art AI models with deep learning capabilities for natural conversations.",
    badge: "AI Core",
  },
  {
    icon: MessageSquare,
    title: "Multi-Language Support",
    description: "Deploy agents that communicate fluently in multiple languages with cultural context awareness.",
    badge: "Global",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Lightning-fast response times with sub-second latency for seamless user experiences.",
    badge: "Performance",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance with global data protection standards.",
    badge: "Security",
  },
  {
    icon: Globe,
    title: "Scalable Infrastructure",
    description:
      "Auto-scaling cloud infrastructure that grows with your business needs and handles millions of conversations.",
    badge: "Scale",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive insights and metrics to optimize your AI agents' performance and user satisfaction.",
    badge: "Analytics",
  },
  {
    icon: Cpu,
    title: "Custom AI Models",
    description: "Train and deploy custom AI models tailored to your specific industry and business requirements.",
    badge: "Custom",
  },
  {
    icon: Layers,
    title: "API Integration",
    description: "Seamlessly integrate with your existing systems through our comprehensive REST and GraphQL APIs.",
    badge: "Integration",
  },
  {
    icon: Rocket,
    title: "One-Click Deployment",
    description: "Deploy your AI agents instantly with our streamlined deployment process and monitoring tools.",
    badge: "Deploy",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">🔧 Platform Features</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Build
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Intelligent Agents
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive platform provides all the tools and infrastructure needed to create, deploy, and scale AI
            agents that deliver exceptional user experiences.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
