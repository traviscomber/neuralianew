"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  MessageSquare,
  BarChart3,
  Users,
  Briefcase,
  ShoppingCart,
  FileText,
  Headphones,
  Database,
} from "lucide-react"

export function FeaturesSection() {
  const agents = [
    {
      icon: Brain,
      name: "Neural Executive",
      description:
        "Strategic decision-making AI that analyzes complex business scenarios and provides executive-level insights.",
      capabilities: ["Strategic planning", "Risk assessment", "Market analysis", "Decision automation"],
    },
    {
      icon: MessageSquare,
      name: "Customer Success AI",
      description: "Advanced customer relationship management with emotional intelligence and personalized engagement.",
      capabilities: ["Customer retention", "Satisfaction analysis", "Personalized outreach", "Churn prediction"],
    },
    {
      icon: BarChart3,
      name: "Financial Analyst AI",
      description: "Comprehensive financial analysis, forecasting, and investment strategy optimization.",
      capabilities: ["Financial modeling", "Risk analysis", "Investment planning", "Budget optimization"],
    },
    {
      icon: Users,
      name: "HR Director AI",
      description: "Complete human resources management from recruitment to performance optimization.",
      capabilities: ["Talent acquisition", "Performance reviews", "Training programs", "Culture development"],
    },
    {
      icon: Briefcase,
      name: "Operations Manager AI",
      description: "End-to-end operations management with supply chain optimization and process automation.",
      capabilities: ["Process optimization", "Supply chain", "Quality control", "Resource allocation"],
    },
    {
      icon: ShoppingCart,
      name: "Sales Director AI",
      description: "Advanced sales strategy, lead qualification, and revenue optimization with predictive analytics.",
      capabilities: ["Lead scoring", "Sales forecasting", "Pipeline management", "Revenue optimization"],
    },
    {
      icon: FileText,
      name: "Content Strategist AI",
      description: "Comprehensive content creation, brand management, and marketing campaign optimization.",
      capabilities: ["Content creation", "Brand strategy", "Campaign optimization", "SEO management"],
    },
    {
      icon: Headphones,
      name: "Support Executive AI",
      description: "Advanced technical support with problem-solving capabilities and knowledge base management.",
      capabilities: ["Technical troubleshooting", "Knowledge management", "Escalation handling", "User training"],
    },
  ]

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Executives
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized neural AI executives designed to handle complex business functions with human-level intelligence
            and strategic thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <agent.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{agent.name}</CardTitle>
                <CardDescription className="text-sm">{agent.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {agent.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                      <span className="text-sm text-muted-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Deploy Your AI Executive?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. Our neural AI executives adapt to your specific industry, processes, and
              objectives to deliver measurable results from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Badge variant="secondary" className="bg-white/60">
                <Brain className="w-4 h-4 mr-2" />
                Neural Intelligence
              </Badge>
              <Badge variant="secondary" className="bg-white/60">
                <MessageSquare className="w-4 h-4 mr-2" />
                Conversational Interface
              </Badge>
              <Badge variant="secondary" className="bg-white/60">
                <Database className="w-4 h-4 mr-2" />
                External API Integration
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
