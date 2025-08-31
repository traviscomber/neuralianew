import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    description: "Built-in vector database and traditional storage solutions for seamless data management.",
    badge: "Enterprise",
  },
  {
    icon: Globe,
    title: "Multi-Platform Deploy",
    description: "Deploy your agents across web, mobile, and API endpoints with one-click deployment.",
    badge: "Core",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Advanced chat capabilities with context awareness and multi-turn conversations.",
    badge: "Popular",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with encryption, compliance, and audit trails built-in.",
    badge: "Enterprise",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Responsive design and native mobile apps ensure your agents work everywhere.",
    badge: "Core",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Lightning-fast response times with edge computing and optimized infrastructure.",
    badge: "Performance",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into agent performance, user interactions, and business metrics.",
    badge: "Analytics",
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
            Our comprehensive platform provides all the tools, infrastructure, and support you need to create
            world-class AI experiences.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                    <feature.icon className="h-5 w-5 text-white" />
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
    </section>
  )
}
