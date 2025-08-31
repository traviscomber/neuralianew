import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Globe, Lock, MessageSquare, Rocket, Settings, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Leverage state-of-the-art language models and machine learning algorithms",
    badge: "GPT-4 Powered",
  },
  {
    icon: Code,
    title: "No-Code Builder",
    description: "Create sophisticated AI agents without writing a single line of code",
    badge: "Visual Editor",
  },
  {
    icon: Database,
    title: "Smart Data Integration",
    description: "Connect to any data source and let AI understand your business context",
    badge: "Real-time Sync",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Deployment",
    description: "Deploy agents across web, mobile, WhatsApp, Slack, and more",
    badge: "Omnichannel",
  },
  {
    icon: Settings,
    title: "Advanced Customization",
    description: "Fine-tune behavior, personality, and responses for your specific needs",
    badge: "Fully Configurable",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with global security standards",
    badge: "SOC 2 Compliant",
  },
  {
    icon: Rocket,
    title: "Instant Deployment",
    description: "Go from concept to production in minutes with our streamlined pipeline",
    badge: "One-Click Deploy",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Serve millions of users worldwide with our distributed infrastructure",
    badge: "Auto-scaling",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second response times with optimized AI inference engines",
    badge: "< 200ms Response",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Powerful Features for Modern AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale intelligent AI agents that deliver real business value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50" />
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-white/80">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
