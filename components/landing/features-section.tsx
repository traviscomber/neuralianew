import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Shield, Globe, MessageSquare, BarChart3, Cpu, Database, Workflow } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Neural Intelligence",
    description:
      "Advanced AI agents powered by neural networks that learn and adapt to your business needs autonomously.",
    badge: "AI-Powered",
    color: "text-blue-600",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Deploy and scale AI agents instantly with our optimized infrastructure and real-time processing capabilities.",
    badge: "Performance",
    color: "text-yellow-600",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, compliance standards, and data protection protocols.",
    badge: "Secure",
    color: "text-green-600",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy AI agents worldwide with multi-region support and localized language processing capabilities.",
    badge: "Scalable",
    color: "text-purple-600",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Engage users with human-like conversations powered by advanced NLP and contextual understanding.",
    badge: "Conversational",
    color: "text-teal-600",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Comprehensive analytics dashboard with real-time metrics, performance tracking, and business intelligence.",
    badge: "Analytics",
    color: "text-orange-600",
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description: "Automate complex workflows and business processes with intelligent decision-making capabilities.",
    badge: "Automation",
    color: "text-red-600",
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamlessly connect with existing systems, databases, and APIs for unified data management.",
    badge: "Integration",
    color: "text-indigo-600",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description: "Build and customize AI agent workflows with our visual editor and pre-built templates.",
    badge: "Customizable",
    color: "text-pink-600",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Powerful Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              AI Agent Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and infrastructure needed to build, deploy, and manage
            intelligent AI agents at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300`}
                  >
                    <feature.icon
                      className={`h-6 w-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
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
