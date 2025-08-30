"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Shield, Code, Users, Rocket, Target, BarChart3, MessageSquare } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Core Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Executives That Actually
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Execute</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlike simple chatbots, our AI executives understand context, make strategic decisions, and take autonomous
            action to achieve your business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Strategic Thinking</CardTitle>
              <CardDescription>
                AI executives that understand your business model, analyze market conditions, and develop comprehensive
                strategies for growth and optimization.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Goal-Oriented Execution</CardTitle>
              <CardDescription>
                Set high-level objectives and watch AI executives break them down into actionable tasks, assign
                priorities, and execute with precision.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Autonomous Decision Making</CardTitle>
              <CardDescription>
                AI executives that can make complex decisions independently, weighing multiple factors and considering
                long-term implications without human intervention.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>
                Real-time monitoring and analysis of AI executive performance with detailed insights into decision
                patterns, success rates, and optimization opportunities.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Enterprise Security</CardTitle>
              <CardDescription>
                Bank-level security with end-to-end encryption, role-based access control, and comprehensive audit logs
                for all AI executive actions and decisions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <MessageSquare className="h-6 w-6 text-cyan-600" />
              </div>
              <CardTitle>Natural Communication</CardTitle>
              <CardDescription>
                Communicate with AI executives in natural language. They understand context, remember conversations, and
                provide detailed explanations for their decisions.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Developer-focused section */}
        <div className="mt-20 text-center">
          <Badge variant="outline" className="mb-4">
            For Developers
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Built by Developers,
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              For Developers
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">API-First Design</h4>
              <p className="text-muted-foreground">
                RESTful APIs, webhooks, and SDKs for seamless integration into your existing tech stack.
              </p>
            </div>
            <div className="text-center">
              <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Rapid Deployment</h4>
              <p className="text-muted-foreground">
                Deploy AI executives in minutes with our CLI tools and infrastructure-as-code templates.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Team Collaboration</h4>
              <p className="text-muted-foreground">
                Built-in version control, testing frameworks, and collaboration tools for development teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
