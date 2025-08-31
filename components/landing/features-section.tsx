import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Database, Globe, MessageSquare, Shield, Smartphone, Zap, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Development",
    description:
      "Build intelligent agents with advanced machine learning capabilities and natural language processing.",
    badge: "Core",
  },
  {
    icon: Code,
    title: "No-Code Builder",
    description: "Create sophisticated AI workflows without writing a single line of code using our visual interface.",
    badge: "Popular",
  },
  {
    icon: Database,
    title: "Integrated Database",
    description: "Store and manage your agent data with our built-in, scalable database solution.",
    badge: "Essential",
  },
  {
    icon: Globe,
    title: "Multi-Platform Deploy",
    description: "Deploy your agents across web, mobile, and API endpoints with one-click deployment.",
    badge: "Pro",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Build natural, context-aware conversations with advanced dialogue management.",
    badge: "Core",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with encryption, compliance, and audit trails built-in.",
    badge: "Enterprise",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Responsive design ensures your agents work perfectly on any device or platform.",
    badge: "Standard",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast response times with optimized processing and caching.",
    badge: "Performance",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into agent performance, user interactions, and business metrics.",
    badge: "Insights",
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
            From development to deployment, our comprehensive platform provides all the tools and infrastructure you
            need to create powerful AI agents.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
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
