import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Database, Globe, MessageSquare, Shield, Smartphone, Zap, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Leverage GPT-4, Claude, and custom models for intelligent conversations and decision-making.",
    badge: "AI-Powered",
  },
  {
    icon: Code,
    title: "No-Code Builder",
    description: "Create sophisticated AI agents without writing a single line of code using our visual interface.",
    badge: "Easy Setup",
  },
  {
    icon: Database,
    title: "Smart Integrations",
    description: "Connect to databases, APIs, CRMs, and 500+ tools to create powerful automated workflows.",
    badge: "500+ Integrations",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Deploy",
    description: "Deploy your agents across WhatsApp, Slack, websites, mobile apps, and custom platforms.",
    badge: "Omnichannel",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor performance, track conversations, and optimize your agents with detailed insights.",
    badge: "Analytics",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC2 compliance, and data privacy controls for peace of mind.",
    badge: "Secure",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Handle millions of conversations simultaneously with our distributed cloud infrastructure.",
    badge: "Scalable",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Optimized for mobile experiences with responsive design and native app integrations.",
    badge: "Mobile Ready",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second response times with intelligent caching and optimized AI model routing.",
    badge: "High Performance",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build AI agents
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our comprehensive platform provides all the tools, integrations, and infrastructure to create
            production-ready AI agents that scale with your business.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
