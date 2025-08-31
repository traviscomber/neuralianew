import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Database, Globe, MessageSquare, Shield, Smartphone, TrendingUp, Zap } from "lucide-react"

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
    description: "Build sophisticated AI agents without writing code using our intuitive drag-and-drop interface.",
    badge: "Visual Editor",
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Connect to any data source, API, or database to give your agents access to real-time information.",
    badge: "100+ Integrations",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Deploy",
    description: "Deploy your agents across websites, mobile apps, WhatsApp, Slack, and more with one click.",
    badge: "Omnichannel",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Track performance, user interactions, and business impact with comprehensive analytics dashboards.",
    badge: "Real-time",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 compliance, data encryption, and privacy controls.",
    badge: "SOC 2 Certified",
  },
  {
    icon: Zap,
    title: "Auto-scaling",
    description: "Handle millions of conversations simultaneously with our cloud-native infrastructure.",
    badge: "99.9% Uptime",
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Deploy agents worldwide with edge computing for ultra-low latency responses.",
    badge: "50+ Regions",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Native mobile experiences with responsive design and offline capabilities.",
    badge: "iOS & Android",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build AI agents
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From ideation to deployment, Neuralia provides all the tools and infrastructure needed to create powerful AI
            agents that deliver real business value.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
