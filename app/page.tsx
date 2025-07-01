"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AuthModal } from "@/components/auth/auth-modal"
import { UserMenu } from "@/components/auth/user-menu"
import { CartModal } from "@/components/cart/cart-modal"
import { ChatWidget } from "@/components/chat/chat-widget"
import { AgentDetailsModal } from "@/components/agent-details-modal"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import {
  ShoppingCart,
  MessageSquare,
  Eye,
  Plus,
  Zap,
  Clock,
  CheckCircle,
  Brain,
  Users,
  BarChart3,
  Megaphone,
  Headphones,
  Target,
  Wrench,
  Star,
  TrendingUp,
  Shield,
  Sparkles,
  Crown,
  LogIn,
  ArrowRight,
} from "lucide-react"

interface Agent {
  id: string
  type: string
  name: string
  description: string
  price: number
  features: string[]
  icon: string
  color: string
  category?: string
  priority?: number
}

const iconMap = {
  brain: Brain,
  users: Users,
  "bar-chart-3": BarChart3,
  megaphone: Megaphone,
  headphones: Headphones,
  target: Target,
  wrench: Wrench,
}

const agentTypes: Agent[] = [
  {
    id: "ceo-neural-agent",
    type: "ceo-neural-agent",
    name: "CEO Neural Agent",
    description:
      "Executive-level AI orchestrator that manages all business operations with C-suite intelligence and strategic oversight",
    icon: "brain",
    price: 0,
    features: [
      "Executive Strategic Planning",
      "Cross-Functional Orchestration",
      "Performance Optimization",
      "Risk Management & Decision Support",
    ],
    color: "bg-gradient-to-r from-purple-600 to-indigo-600",
    category: "Executive Core",
    priority: 1,
  },
  {
    id: "hr-advisory",
    type: "hr-advisory",
    name: "HR Advisory Expert",
    description:
      "Comprehensive human resources expertise covering policy development, employee relations, and strategic workforce management",
    icon: "users",
    price: 299,
    features: [
      "Employee Relations Management",
      "Policy Development & Compliance",
      "Performance Management",
      "Talent Strategy",
    ],
    color: "bg-blue-600",
    category: "HR",
    priority: 2,
  },
  {
    id: "sales-coach",
    type: "sales-coach",
    name: "Sales Performance Coach",
    description:
      "Advanced sales methodology expert specializing in deal strategy, pipeline optimization, and revenue acceleration",
    icon: "target",
    price: 399,
    features: [
      "Deal Strategy Optimization",
      "Advanced Sales Methodologies",
      "Pipeline Management",
      "Revenue Forecasting",
    ],
    color: "bg-red-600",
    category: "Sales",
    priority: 3,
  },
  {
    id: "customer-service",
    type: "customer-service",
    name: "Customer Experience Expert",
    description: "Omnichannel customer service specialist focused on satisfaction optimization and service excellence",
    icon: "headphones",
    price: 249,
    features: [
      "Omnichannel Support Strategy",
      "Customer Journey Optimization",
      "Service Quality Management",
      "Retention Strategies",
    ],
    color: "bg-teal-600",
    category: "Support",
    priority: 4,
  },
  {
    id: "technical-support",
    type: "technical-support",
    name: "Technical Systems Expert",
    description:
      "Advanced technical specialist for system architecture, troubleshooting, and infrastructure optimization",
    icon: "wrench",
    price: 349,
    features: [
      "System Architecture Analysis",
      "Advanced Troubleshooting",
      "Infrastructure Optimization",
      "Security Assessment",
    ],
    color: "bg-indigo-600",
    category: "Technical",
    priority: 5,
  },
  {
    id: "marketing",
    type: "marketing",
    name: "Marketing Strategy Expert",
    description:
      "Comprehensive marketing intelligence covering strategy development, campaign optimization, and growth acceleration",
    icon: "megaphone",
    price: 329,
    features: ["Strategic Campaign Development", "Multi-Channel Optimization", "Brand Positioning", "Growth Marketing"],
    color: "bg-orange-600",
    category: "Marketing",
    priority: 6,
  },
  {
    id: "analytics",
    type: "analytics",
    name: "Data Intelligence Expert",
    description:
      "Advanced analytics specialist providing predictive insights, statistical modeling, and business intelligence",
    icon: "bar-chart-3",
    price: 379,
    features: ["Predictive Analytics", "Statistical Modeling", "Business Intelligence", "Data Visualization"],
    color: "bg-green-600",
    category: "Analytics",
    priority: 7,
  },
]

// Sort agents by priority (CEO Neural Agent first)
const sortedAgentTypes = agentTypes.sort((a, b) => (a.priority || 999) - (b.priority || 999))

export default function HomePage() {
  const { user, loading } = useAuth()
  const {
    cartItems = [],
    deployedAgents = [],
    addToCart,
    deployAgent,
    isDeploying,
    isAgentInCart,
    isAgentDeployed,
    isAgentDeploying,
    getTotalItems,
    notifications = [],
    dismissNotification,
  } = useCart()

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isCartModalOpen, setIsCartModalOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [specificAgent, setSpecificAgent] = useState<string | null>(null)
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [isAgentDetailsOpen, setIsAgentDetailsOpen] = useState(false)

  const handleAddToCart = (agent: Agent) => {
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }
    addToCart(agent)
  }

  const handleDeploy = async (agent: Agent) => {
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }
    await deployAgent(agent)
  }

  const handleChat = (agentType: string) => {
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }
    setSpecificAgent(agentType)
    setIsChatOpen(true)
  }

  const handleViewDetails = (agent: Agent) => {
    setSelectedAgent(agent)
    setIsAgentDetailsOpen(true)
  }

  const getActionButton = (agent: Agent) => {
    const inCart = isAgentInCart(agent.id)
    const deployed = isAgentDeployed(agent.id)
    const deploying = isAgentDeploying(agent.id)

    if (deployed) {
      return (
        <Button onClick={() => handleChat(agent.type)} className="w-full">
          <MessageSquare className="mr-2 h-4 w-4" />
          Chat Now
        </Button>
      )
    }

    if (deploying) {
      return (
        <Button disabled className="w-full">
          <Clock className="mr-2 h-4 w-4" />
          Deploying...
        </Button>
      )
    }

    if (inCart) {
      return (
        <Button onClick={() => handleDeploy(agent)} className="w-full">
          <Zap className="mr-2 h-4 w-4" />
          Deploy Now
        </Button>
      )
    }

    return (
      <Button onClick={() => handleAddToCart(agent)} className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    )
  }

  const totalCartItems = getTotalItems()

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Brain className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Loading Neuralia...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg shadow-lg max-w-sm ${
                notification.type === "success"
                  ? "bg-green-500 text-white"
                  : notification.type === "error"
                    ? "bg-red-500 text-white"
                    : "bg-blue-500 text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{notification.message}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => dismissNotification(notification.id)}
                  className="text-white hover:bg-white/20 h-6 w-6 p-0"
                >
                  ×
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Neuralia
                </h1>
              </div>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                <Sparkles className="mr-1 h-3 w-3" />
                AI-Powered Business Solutions
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => setIsCartModalOpen(true)} className="relative">
                <ShoppingCart className="h-4 w-4" />
                {totalCartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {totalCartItems}
                  </Badge>
                )}
              </Button>
              {user ? (
                <UserMenu user={user} />
              ) : (
                <Button onClick={() => setIsAuthModalOpen(true)}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Transform Your Business with AI Experts
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Deploy specialized AI experts led by your CEO Neural Agent - the strategic orchestrator that coordinates
              all business operations with executive-level intelligence and deep domain expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="outline" className="px-4 py-2">
                <Crown className="mr-2 h-4 w-4" />
                CEO-Level Intelligence
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <TrendingUp className="mr-2 h-4 w-4" />
                Strategic Orchestration
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Shield className="mr-2 h-4 w-4" />
                Enterprise Security
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Star className="mr-2 h-4 w-4" />
                Domain Expertise
              </Badge>
            </div>
            <div className="flex justify-center space-x-4">
              <Button size="lg" onClick={() => setIsAuthModalOpen(true)} className="px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => handleViewDetails(sortedAgentTypes[0])}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deployed Agents Section */}
      {deployedAgents.length > 1 && (
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your AI Executive Team</h2>
              <p className="text-gray-600">Your deployed experts are ready to help</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deployedAgents.map((agent) => (
                <Card key={agent.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl">{agent.icon}</div>
                        <div>
                          <CardTitle className="text-lg flex items-center">
                            {agent.name}
                            {agent.type === "ceo-neural-agent" && <Crown className="ml-2 h-4 w-4 text-yellow-500" />}
                          </CardTitle>
                          <CardDescription>{agent.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge variant={agent.status === "active" ? "default" : "secondary"}>{agent.status}</Badge>
                        {agent.type === "ceo-neural-agent" && (
                          <Badge className="bg-purple-100 text-purple-800 border-purple-200 text-xs">CEO</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Uptime:</span>
                        <span className="font-medium">{agent.uptime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Last Active:</span>
                        <span className="font-medium">{agent.lastActive}</span>
                      </div>
                      <Button
                        className="w-full"
                        onClick={() => handleChat(agent.type)}
                        disabled={agent.status !== "active"}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Chat with Expert
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Agents Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Choose Your AI Executive Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Led by the CEO Neural Agent, each expert brings deep domain knowledge and executive-level intelligence.
              Deploy individually or build your complete AI leadership team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedAgentTypes.map((agent) => {
              const IconComponent = iconMap[agent.icon as keyof typeof iconMap] || Brain
              const inCart = isAgentInCart(agent.id)
              const deployed = isAgentDeployed(agent.id)
              const deploying = isAgentDeploying(agent.id)
              const isCEO = agent.type === "ceo-neural-agent"

              return (
                <Card
                  key={agent.id}
                  className={`relative group hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${
                    isCEO ? "ring-2 ring-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50" : ""
                  }`}
                >
                  {isCEO && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1">
                        <Crown className="mr-1 h-3 w-3" />
                        CEO & Orchestrator
                      </Badge>
                    </div>
                  )}

                  {deployed && !isCEO && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                    </div>
                  )}
                  {deploying && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-blue-100 text-blue-800">
                        <Clock className="mr-1 h-3 w-3" />
                        Deploying
                      </Badge>
                    </div>
                  )}
                  {inCart && !deployed && !deploying && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-orange-100 text-orange-800">
                        <ShoppingCart className="mr-1 h-3 w-3" />
                        In Cart
                      </Badge>
                    </div>
                  )}

                  <CardHeader className={`pb-4 ${isCEO ? "pt-8" : ""}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-3 rounded-lg ${agent.color} group-hover:scale-110 transition-transform ${
                            isCEO ? "shadow-lg" : ""
                          }`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className={`text-lg flex items-center ${isCEO ? "text-purple-800" : ""}`}>
                            {agent.name}
                            {isCEO && <Crown className="ml-2 h-4 w-4 text-purple-600" />}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            {agent.category && (
                              <Badge
                                variant="outline"
                                className={`text-xs ${isCEO ? "border-purple-300 text-purple-700" : ""}`}
                              >
                                {agent.category}
                              </Badge>
                            )}
                            <Badge
                              variant="secondary"
                              className={`text-xs ${isCEO ? "bg-purple-100 text-purple-800" : ""}`}
                            >
                              {isCEO ? "Executive Level" : "Expert Level"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewDetails(agent)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardDescription className={`text-sm leading-relaxed ${isCEO ? "text-purple-700" : ""}`}>
                      {agent.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {agent.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <CheckCircle
                              className={`h-3 w-3 flex-shrink-0 ${isCEO ? "text-purple-500" : "text-green-500"}`}
                            />
                            <span className={`${isCEO ? "text-purple-700" : "text-gray-600"}`}>{feature}</span>
                          </div>
                        ))}
                        {agent.features.length > 3 && (
                          <div className={`text-xs pl-5 ${isCEO ? "text-purple-600" : "text-gray-500"}`}>
                            +{agent.features.length - 3} more capabilities
                          </div>
                        )}
                      </div>

                      <Separator />

                      <div className="flex space-x-2">
                        <div className="flex-1">{getActionButton(agent)}</div>
                        <Button variant="outline" size="sm" onClick={() => handleChat(agent.type)} disabled={!user}>
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Neuralia AI Experts?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Led by the CEO Neural Agent, our AI experts provide executive-level intelligence with deep domain
              expertise, designed to integrate seamlessly into your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Executive-Level Intelligence</h4>
              <p className="text-gray-600">
                Led by the CEO Neural Agent with C-suite experience, each expert brings executive-level strategic
                thinking to your business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Enterprise Security</h4>
              <p className="text-gray-600">
                Built with enterprise-grade security, compliance, and data protection standards from day one.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Strategic Orchestration</h4>
              <p className="text-gray-600">
                The CEO Neural Agent coordinates all experts to ensure optimal business outcomes and strategic
                alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <CartModal isOpen={isCartModalOpen} onClose={() => setIsCartModalOpen(false)} />
      <AgentDetailsModal
        isOpen={isAgentDetailsOpen}
        onClose={() => setIsAgentDetailsOpen(false)}
        agentId={selectedAgent?.id || ""}
        onAddToCart={handleAddToCart}
        onDeployAgent={handleDeploy}
        isInCart={selectedAgent ? isAgentInCart(selectedAgent.id) : false}
        isDeployed={selectedAgent ? isAgentDeployed(selectedAgent.id) : false}
        isDeploying={selectedAgent ? isAgentDeploying(selectedAgent.id) : false}
      />

      {/* Chat Widget */}
      {isChatOpen && (
        <ChatWidget
          isOpen={isChatOpen}
          onClose={() => {
            setIsChatOpen(false)
            setSpecificAgent(null)
          }}
          specificAgent={specificAgent}
        />
      )}
    </div>
  )
}
