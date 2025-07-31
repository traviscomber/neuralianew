"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"
import { ChatWidget } from "@/components/chat/chat-widget"
import {
  Zap,
  MessageCircle,
  Clock,
  CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  Star,
  Sparkles,
} from "lucide-react"

interface DeployedAgent {
  id: string
  user_id: string
  agent_id: string
  name: string
  agent_name?: string
  description?: string
  agent_description?: string
  agent_type?: string
  icon?: string
  status: string
  deployment_date?: string
  trial_start?: string
  trial_end?: string
  created_at: string
  updated_at: string
}

const availableAgents = [
  {
    id: "neural-ceo",
    name: "Neural CEO",
    description: "Strategic leadership and executive decision-making specialist",
    category: "Executive",
    icon: "👔",
    price: 599,
    features: ["Strategic Planning", "Leadership Guidance", "Decision Support", "Vision Development"],
  },
  {
    id: "neural-cmo",
    name: "Neural CMO",
    description: "Marketing strategy and brand development expert",
    category: "Marketing",
    icon: "📈",
    price: 499,
    features: ["Marketing Strategy", "Brand Development", "Campaign Management", "Market Analysis"],
  },
  {
    id: "neural-cto",
    name: "Neural CTO",
    description: "Technology leadership and innovation strategist",
    category: "Technology",
    icon: "⚡",
    price: 549,
    features: ["Tech Strategy", "Innovation Planning", "System Architecture", "Team Leadership"],
  },
  {
    id: "neural-cfo",
    name: "Neural CFO",
    description: "Financial planning and strategic investment advisor",
    category: "Finance",
    icon: "💰",
    price: 529,
    features: ["Financial Planning", "Investment Strategy", "Risk Management", "Budget Optimization"],
  },
  {
    id: "neural-sales-director",
    name: "Neural Sales Director",
    description: "Sales strategy and revenue optimization expert",
    category: "Sales",
    icon: "🎯",
    price: 449,
    features: ["Sales Strategy", "Revenue Growth", "Team Management", "Pipeline Optimization"],
  },
  {
    id: "neural-hr-director",
    name: "Neural HR Director",
    description: "Human resources and organizational development specialist",
    category: "HR",
    icon: "👥",
    price: 429,
    features: ["Talent Management", "Culture Development", "Performance Optimization", "Team Building"],
  },
]

export default function DashboardClient() {
  const { user } = useAuth()
  const { deployedAgents, isLoading, deployAgent, isAgentDeployed, isAgentDeploying, refreshDeployedAgents } = useCart()
  const { toast } = useToast()
  const [selectedAgent, setSelectedAgent] = useState<DeployedAgent | null>(null)
  const [activeTab, setActiveTab] = useState("marketplace")

  console.log("Dashboard render - User:", user?.id, "Deployed agents:", deployedAgents.length)

  useEffect(() => {
    // Listen for agent deployment events
    const handleAgentDeployed = () => {
      console.log("Agent deployed event received, refreshing...")
      refreshDeployedAgents()
    }

    window.addEventListener("agentDeployed", handleAgentDeployed)
    return () => window.removeEventListener("agentDeployed", handleAgentDeployed)
  }, [refreshDeployedAgents])

  const handleDeployTrial = async (agent: any) => {
    console.log("Starting deployment for:", agent.name)
    try {
      await deployAgent(agent)
      // Switch to My Agents tab after successful deployment
      setActiveTab("agents")
    } catch (error) {
      console.error("Deployment failed:", error)
    }
  }

  const handleChatWithAgent = (agent: DeployedAgent) => {
    console.log("Opening chat with agent:", agent.name)
    setSelectedAgent(agent)
  }

  const getTrialDaysRemaining = (trialEnd?: string) => {
    if (!trialEnd) return 0
    const now = new Date()
    const end = new Date(trialEnd)
    const diffTime = end.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return Math.max(0, diffDays)
  }

  const getTrialStatus = (agent: DeployedAgent) => {
    if (agent.status !== "trial") return agent.status
    const daysRemaining = getTrialDaysRemaining(agent.trial_end)
    if (daysRemaining <= 0) return "expired"
    return `${daysRemaining} days left`
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Please sign in to access your dashboard</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Neural Executive Dashboard</h1>
          <p className="text-gray-600">Deploy and manage your AI executive team</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="agents">
              My Agents {deployedAgents.length > 0 && <Badge className="ml-2">{deployedAgents.length}</Badge>}
            </TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Marketplace Tab */}
          <TabsContent value="marketplace" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Neural Executive Marketplace
                </CardTitle>
                <CardDescription>Deploy AI executives with 5-day free trials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableAgents.map((agent) => {
                    const deployed = isAgentDeployed(agent.id)
                    const deploying = isAgentDeploying(agent.id)

                    return (
                      <Card key={agent.id} className="hover:shadow-lg transition-shadow">
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

                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="text-sm font-medium">Key Features:</h4>
                            <div className="flex flex-wrap gap-1">
                              {agent.features.map((feature) => (
                                <Badge key={feature} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="text-lg font-bold">${agent.price}</div>
                            <div className="text-xs text-gray-500">one-time</div>
                          </div>

                          {deployed ? (
                            <Button className="w-full" disabled>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Deployed
                            </Button>
                          ) : deploying ? (
                            <Button disabled className="w-full">
                              <Clock className="mr-2 h-4 w-4 animate-spin" />
                              Deploying...
                            </Button>
                          ) : (
                            <Button onClick={() => handleDeployTrial(agent)} className="w-full">
                              <Zap className="mr-2 h-4 w-4" />
                              Start 5-Day Trial
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Agents Tab */}
          <TabsContent value="agents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  My Deployed Agents
                </CardTitle>
                <CardDescription>Manage and interact with your AI executive team</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your agents...</p>
                  </div>
                ) : deployedAgents.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Agents Deployed</h3>
                    <p className="text-gray-600 mb-4">Deploy your first AI executive from the marketplace</p>
                    <Button onClick={() => setActiveTab("marketplace")}>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Browse Marketplace
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deployedAgents.map((agent) => {
                      const trialStatus = getTrialStatus(agent)
                      const isExpired = trialStatus === "expired"

                      return (
                        <Card key={agent.id} className="hover:shadow-lg transition-shadow">
                          <CardHeader className="pb-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="text-2xl">{agent.icon || "🤖"}</div>
                                <div>
                                  <CardTitle className="text-lg">{agent.agent_name || agent.name}</CardTitle>
                                  <Badge
                                    variant={
                                      isExpired ? "destructive" : agent.status === "trial" ? "secondary" : "default"
                                    }
                                    className="text-xs mt-1"
                                  >
                                    {trialStatus}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <CardDescription className="text-sm">
                              {agent.agent_description || agent.description || "AI Executive Assistant"}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="space-y-4">
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>Deployed:</span>
                              <span>
                                {agent.deployment_date
                                  ? new Date(agent.deployment_date).toLocaleDateString()
                                  : "Unknown"}
                              </span>
                            </div>

                            <div className="flex space-x-2">
                              <Button
                                onClick={() => handleChatWithAgent(agent)}
                                disabled={isExpired}
                                className="flex-1"
                                variant={isExpired ? "outline" : "default"}
                              >
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Chat
                              </Button>
                              {agent.status === "trial" && !isExpired && (
                                <Button variant="outline" size="sm">
                                  <Star className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {deployedAgents.filter((a) => a.status === "trial" || a.status === "active").length}
                  </div>
                  <p className="text-xs text-muted-foreground">Currently deployed</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Trial Agents</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{deployedAgents.filter((a) => a.status === "trial").length}</div>
                  <p className="text-xs text-muted-foreground">On free trial</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,450</div>
                  <p className="text-xs text-muted-foreground">Estimated monthly</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Efficiency Gain</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">340%</div>
                  <p className="text-xs text-muted-foreground">Productivity increase</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Your AI executive team performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Coming Soon</h3>
                  <p className="text-gray-600">
                    Detailed performance metrics will be available once you have active agents
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Chat Widget */}
      {selectedAgent && <ChatWidget agent={selectedAgent} onClose={() => setSelectedAgent(null)} />}
    </div>
  )
}
