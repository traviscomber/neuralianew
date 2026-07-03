"use client"

import { useState, useEffect } from "react"
import {
  Brain,
  MessageSquare,
  TrendingUp,
  Star,
  Activity,
  Settings,
  Plus,
  BarChart3,
  Shield,
  Sparkles,
  CheckCircle,
  Clock,
  Zap,
  Crown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChatWidget } from "@/components/chat/chat-widget"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"

export default function DashboardClient() {
  const { user } = useAuth()
  const { deployedAgents, deployAgent, isAgentDeployed, isAgentDeploying } = useCart()

  const [isChatOpen, setIsChatOpen] = useState(false)
  const [specificAgent, setSpecificAgent] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing hooks
  useEffect(() => {
    setMounted(true)
  }, [])

  // Provide default values during SSR
  const safeDeployedAgents = mounted ? deployedAgents : []
  const safeIsAgentDeployed = mounted ? isAgentDeployed : () => false
  const safeIsAgentDeploying = mounted ? isAgentDeploying : () => false
  const safeDeployAgent = mounted ? deployAgent : async () => {}

  /* -------------------------------------------------------------------------- */
  /*                              Available agents                              */
  /* -------------------------------------------------------------------------- */
  const availableAgents = [
    {
      id: "financial-advisor",
      type: "financial-advisor",
      name: "Financial Strategy Expert",
      description: "Advanced financial planning, investment strategy, and risk management specialist",
      icon: "💰",
      price: 449,
      features: ["Financial Planning", "Investment Strategy", "Risk Assessment", "Budget Optimization"],
      category: "Finance",
    },
    {
      id: "legal-counsel",
      type: "legal-counsel",
      name: "Legal Advisory Expert",
      description: "Corporate legal expertise covering compliance, contracts, and regulatory matters",
      icon: "⚖️",
      price: 499,
      features: ["Contract Review", "Compliance Management", "Legal Research", "Risk Mitigation"],
      category: "Legal",
    },
    {
      id: "operations-manager",
      type: "operations-manager",
      name: "Operations Excellence Expert",
      description: "Process optimization, supply chain management, and operational efficiency specialist",
      icon: "⚙️",
      price: 379,
      features: ["Process Optimization", "Supply Chain Management", "Quality Control", "Efficiency Analysis"],
      category: "Operations",
    },
    {
      id: "innovation-strategist",
      type: "innovation-strategist",
      name: "Innovation & R&D Expert",
      description: "Product development, innovation strategy, and technology advancement specialist",
      icon: "🚀",
      price: 429,
      features: ["Product Development", "Innovation Strategy", "Technology Assessment", "Market Research"],
      category: "Innovation",
    },
  ]

  const handleChat = (agentType: string) => {
    setSpecificAgent(agentType)
    setIsChatOpen(true)
  }

  const handleDeployAgent = async (agent: any) => {
    await safeDeployAgent(agent)
  }

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
          </div>
          <p className="text-muted-foreground">Loading your neural dashboard...</p>
        </div>
      </div>
    )
  }

  /* -------------------------------------------------------------------------- */
  /*                                   Render                                   */
  /* -------------------------------------------------------------------------- */
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-bold text-primary">
                  Neuralia Dashboard
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="px-3 py-1">
                <Activity className="mr-1 h-3 w-3" />
                {safeDeployedAgents.length} Active Agents
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="h2 mb-2">Welcome back, {user?.email?.split("@")[0] || "User"}!</h2>
          <p className="body text-muted-foreground">
            Manage your AI executive team and deploy new experts to grow your capabilities.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{safeDeployedAgents.length}</div>
              <p className="text-xs text-muted-foreground">AI experts deployed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Uptime</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.9%</div>
              <p className="text-xs text-muted-foreground">System reliability</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Performance</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.9/5</div>
              <p className="text-xs text-muted-foreground">Average rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Deployed Agents Section */}
        {safeDeployedAgents.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="h2">Your AI Executive Team</h3>
              <Badge variant="secondary" className="px-3 py-1">
                <Shield className="mr-1 h-3 w-3" />
                Enterprise Ready
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safeDeployedAgents.map((agent) => (
                <Card key={agent.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{agent.icon}</div>
                        <div>
                          <CardTitle className="text-lg flex items-center">
                            {agent.name}
                            {agent.type === "ceo-neural-agent" && <Crown className="ml-2 h-4 w-4 text-primary" />}
                          </CardTitle>
                          <CardDescription className="text-sm">{agent.description}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={agent.status === "active" ? "default" : "secondary"}>{agent.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Uptime:</span>
                        <span className="font-medium text-primary">{agent.uptime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Last Active:</span>
                        <span className="font-medium">{agent.lastActive}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Conversations:</span>
                        <span className="font-medium">{Math.floor(Math.random() * 50) + 10}</span>
                      </div>
                      <Separator />
                      <div className="flex space-x-2">
                        <Button
                          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                          onClick={() => handleChat(agent.type)}
                          disabled={agent.status !== "active"}
                        >
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Chat
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Available Agents to Deploy */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="h2">Expand Your Team</h3>
            <Badge variant="outline" className="px-3 py-1">
              <Sparkles className="mr-1 h-3 w-3" />
              New Experts Available
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableAgents.map((agent) => {
              const deployed = safeIsAgentDeployed(agent.id)
              const deploying = safeIsAgentDeploying(agent.id)

              return (
                <Card key={agent.id} className="hover:shadow-lg transition-shadow relative">
                  {deployed && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-primary/10 text-primary">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Deployed
                      </Badge>
                    </div>
                  )}
                  {deploying && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-primary/10 text-primary">
                        <Clock className="mr-1 h-3 w-3" />
                        Deploying
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{agent.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                        <Badge variant="outline" className="text-xs mt-1">
                          {agent.category}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">{agent.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {agent.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                        <div className="text-xs text-muted-foreground pl-5">+{agent.features.length - 2} more capabilities</div>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold">${agent.price}</div>
                        <div className="text-xs text-muted-foreground">one-time</div>
                      </div>

                      {deployed ? (
                        <Button onClick={() => handleChat(agent.type)} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Chat Now
                        </Button>
                      ) : deploying ? (
                        <Button disabled className="w-full">
                          <Clock className="mr-2 h-4 w-4" />
                          Deploying...
                        </Button>
                      ) : (
                        <Button onClick={() => handleDeployAgent(agent)} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          <Zap className="mr-2 h-4 w-4" />
                          Deploy Now
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="mr-2 h-5 w-5" />
                Deploy New Agent
              </CardTitle>
              <CardDescription>Expand your AI team with specialized experts</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Analytics
              </CardTitle>
              <CardDescription>Monitor performance and usage metrics</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                Team Settings
              </CardTitle>
              <CardDescription>Configure your AI executive team</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Chat Widget */}
      {isChatOpen && (
        <ChatWidget
          isOpen={isChatOpen}
          onToggle={() => {
            setIsChatOpen(false)
            setSpecificAgent(null)
          }}
          specificAgent={specificAgent}
        />
      )}
    </div>
  )
}
