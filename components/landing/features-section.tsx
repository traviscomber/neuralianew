import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Globe, MessageSquare, Shield, Zap, BarChart3, Workflow } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description:
      "Leverage cutting-edge language models and machine learning algorithms to create intelligent, context-aware agents.",
    badge: "GPT-4 Powered",
  },
  {
    icon: Code,
    title: "No-Code Builder",
    description:
      "Build sophisticated AI agents without writing a single line of code using our intuitive drag-and-drop interface.",
    badge: "Visual Builder",
  },
  {
    icon: Database,
    title: "Smart Data Integration",
    description:
      "Connect to any data source, API, or database. Your agents learn from your data to provide accurate responses.",
    badge: "Multi-Source",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Deploy agents that communicate fluently in over 50 languages with automatic translation capabilities.",
    badge: "50+ Languages",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Deployment",
    description: "Deploy your agents across web, mobile, WhatsApp, Slack, and more with a single configuration.",
    badge: "All Platforms",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and advanced access controls keep your data secure.",
    badge: "SOC 2 Certified",
  },
  {
    icon: Zap,
    title: "Real-Time Learning",
    description: "Agents continuously improve through interactions, becoming more accurate and helpful over time.",
    badge: "Auto-Learning",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards and insights to track performance, user satisfaction, and ROI.",
    badge: "Full Analytics",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Create complex workflows that trigger actions, send notifications, and integrate with your existing tools.",
    badge: "Smart Automation",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful features for modern AI agents
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From simple chatbots to complex AI assistants, our platform provides all the tools you need to build,
            deploy, and scale intelligent agents.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
