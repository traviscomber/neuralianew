import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, Shield, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Strategic Thinking",
      description: "AI executives that analyze complex scenarios and make strategic decisions like senior leadership.",
    },
    {
      icon: Zap,
      title: "Autonomous Execution",
      description: "Deploy agents that execute tasks independently, reducing your management overhead by 80%.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with full audit trails and compliance monitoring for peace of mind.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time insights into agent performance with detailed metrics and optimization recommendations.",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Neuralia AI Executives?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Unlike simple chatbots, our AI executives think strategically and execute autonomously
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
