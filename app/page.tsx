"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Users,
  Zap,
  BarChart3,
  Megaphone,
  Headphones,
  Target,
  Wrench,
  ShoppingCart,
  Play,
  TrendingUp,
} from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import { CartModal } from "@/components/cart/cart-modal"
import { AuthModal } from "@/components/auth/auth-modal"
import { ChatWidget } from "@/components/chat/chat-widget"

const agentTypes = [
  {
    id: "hr-advisory",
    name: "HR Advisory Agent",
    description: "24/7 HR expert for policies, benefits, and employee queries",
    icon: Users,
    price: 299,
    features: ["Policy Guidance", "Benefits Support", "Compliance Help", "Employee Relations"],
    color: "bg-blue-600",
    setupTime: "24-48 hours",
    roi: "60% reduction in HR escalations",
  },
  {
    id: "sales-coach",
    name: "Sales Coach Agent",
    description: "AI sales expert to boost team performance and close rates",
    icon: Target,
    price: 399,
    features: ["Deal Strategy", "Objection Handling", "Pipeline Management", "Team Coaching"],
    color: "bg-green-600",
    setupTime: "24-48 hours",
    roi: "40% higher close rates",
  },
  {
    id: "customer-service",
    name: "Customer Service Agent",
    description: "Instant customer support with 95% resolution rate",
    icon: Headphones,
    price: 249,
    features: ["24/7 Support", "Multi-channel", "Escalation Handling", "Knowledge Base"],
    color: "bg-purple-600",
    setupTime: "24-48 hours",
    roi: "300% faster response times",
  },
  {
    id: "technical-support",
    name: "Technical Support Agent",
    description: "Expert technical troubleshooting and system guidance",
    icon: Wrench,
    price: 349,
    features: ["System Diagnostics", "Troubleshooting", "Integration Help", "Documentation"],
    color: "bg-red-600",
    setupTime: "24-48 hours",
    roi: "70% faster resolution",
  },
  {
    id: "marketing",
    name: "Marketing Agent",
    description: "Strategic marketing guidance and campaign optimization",
    icon: Megaphone,
    price: 329,
    features: ["Campaign Strategy", "Lead Generation", "Content Planning", "Performance Analysis"],
    color: "bg-orange-600",
    setupTime: "24-48 hours",
    roi: "45% increase in leads",
  },
  {
    id: "analytics",
    name: "Analytics Agent",
    description: "Data insights and business intelligence expert",
    icon: BarChart3,
    price: 379,
    features: ["Data Analysis", "Report Generation", "Trend Identification", "KPI Tracking"],
    color: "bg-indigo-600",
    setupTime: "24-48 hours",
    roi: "40% better decision making",
  },
]

const systemTypes = [
  {
    id: "workflow-automation",
    name: "Workflow Automation System",
    description: "Complete business process automation",
    icon: Zap,
    price: 599,
    features: ["Process Mapping", "Task Automation", "Integration Hub", "Performance Monitoring"],
    color: "bg-yellow-600",
    setupTime: "1-2 weeks",
    roi: "80% time savings",
  },
  {
    id: "data-intelligence",
    name: "Data Intelligence System",
    description: "Advanced analytics and business intelligence platform",
    icon: Brain,
    price: 799,
    features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "Data Integration"],
    color: "bg-cyan-600",
    setupTime: "2-3 weeks",
    roi: "300-500% ROI",
  },
]

export default function HomePage() {
  const [showCartModal, setShowCartModal] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showChatWidget, setShowChatWidget] = useState(false)
  const [chatType, setChatType] = useState<"agent" | "system" | "general">("general")
  const [specificAgent, setSpecificAgent] = useState<string | null>(null)
  const { user } = useAuth()
  const {
    items,
    addItem,
    deployItems,
    isDeploying,
    deploymentProgress,
    deployedAgents,
    notifications,
    dismissNotification,
    // Legacy compatibility
    state,
    itemCount,
    deployingAgents,
  } = useCart()

  const handleAddToCart = (item: any) => {
    if (!user) {
      setShowAuthModal(true)
      return
    }
    addItem(item)
  }

  const handleDeploy = async () => {
    if (!user) {
      setShowAuthModal(true)
      return
    }
    await deployItems()
  }

  const handleChatWithAgent = (agentId: string) => {
    setSpecificAgent(agentId)
    setChatType("agent")
    setShowChatWidget(true)
  }

  const handleChatWithSystem = () => {
    setChatType("system")
    setShowChatWidget(true)
  }

  const handleGeneralChat = () => {
    setChatType("general")
    setSpecificAgent(null)
    setShowChatWidget(true)
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
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">NeuralIA</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleGeneralChat}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat
              </Button>
              {user && (
                <Button variant="outline" onClick={() => setShowCartModal(true)} className="relative">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart ({itemCount || 0})
                </Button>
              )}
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Welcome, {user.email}</span>
                </div>
              ) : (
                <Button onClick={() => setShowAuthModal(true)}>Sign In</Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Agents
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Deploy intelligent AI agents that work 24/7 to handle customer service, sales, HR, and more. Get
              expert-level performance with 300% faster response times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleGeneralChat} className="bg-blue-600 hover:bg-blue-700">
                <Play className="mr-2 h-5 w-5" />
                Try Demo Chat
              </Button>
              <Button size="lg" variant="outline" onClick={() => setShowCartModal(true)}>
                <Sparkles className="mr-2 h-5 w-5" />
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deployed Agents Section */}
      {deployedAgents.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your AI Workforce</h2>
              <p className="text-gray-600">Your deployed agents are ready to help</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deployedAgents.map((agent) => (
                <Card key={agent.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl">{agent.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{agent.name}</CardTitle>
                          <CardDescription>{agent.description}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={agent.status === "active" ? "default" : "secondary"}>{agent.status}</Badge>
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
                        onClick={() => handleChatWithAgent(agent.id)}
                        disabled={agent.status !== "active"}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Chat Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deployment Progress */}
      {deployingAgents && deployingAgents.length > 0 && (
        <section className="py-8 px-4 bg-blue-50">
          <div className="container mx-auto">
            <h3 className="text-xl font-semibold text-center mb-6">Deploying Your AI Agents</h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              {deployingAgents.map((agent) => (
                <Card key={agent.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{agent.name}</span>
                      <span className="text-sm text-gray-500 capitalize">{agent.status}</span>
                    </div>
                    <Progress value={agent.progress} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">{agent.progress}% complete</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AI Agents Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Agents</h2>
            <p className="text-gray-600">24/7 conversational experts for every business function</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentTypes.map((agent) => {
              const Icon = agent.icon
              const isInCart = items.some((item) => item.id === agent.id)
              const isDeployed = deployedAgents.some((deployed) => deployed.id === agent.id)

              return (
                <Card key={agent.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${agent.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                        <CardDescription>{agent.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">${agent.price}</span>
                        <Badge variant="outline">{agent.setupTime}</Badge>
                      </div>
                      <div className="space-y-2">
                        {agent.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-green-800">{agent.roi}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {isDeployed ? (
                          <Button className="flex-1" onClick={() => handleChatWithAgent(agent.id)}>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Chat Now
                          </Button>
                        ) : (
                          <Button
                            className="flex-1"
                            onClick={() =>
                              handleAddToCart({
                                id: agent.id,
                                name: agent.name,
                                type: "agent",
                                price: agent.price,
                                description: agent.description,
                                features: agent.features,
                                category: agent.name.split(" ")[0],
                                icon: agent.icon.name,
                                setupTime: agent.setupTime,
                                roi: agent.roi,
                              })
                            }
                            disabled={isInCart}
                          >
                            {isInCart ? "In Cart" : "Add to Cart"}
                          </Button>
                        )}
                        <Button variant="outline" size="icon" onClick={() => handleChatWithAgent(agent.id)}>
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

      {/* AI Systems Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Systems</h2>
            <p className="text-gray-600">Complete workflow automation and business intelligence</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {systemTypes.map((system) => {
              const Icon = system.icon
              const isInCart = items.some((item) => item.id === system.id)

              return (
                <Card key={system.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg ${system.color}`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{system.name}</CardTitle>
                        <CardDescription className="text-base">{system.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold">${system.price}</span>
                        <Badge variant="outline">{system.setupTime}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {system.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-green-800">{system.roi}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          className="flex-1"
                          onClick={() =>
                            handleAddToCart({
                              id: system.id,
                              name: system.name,
                              type: "system",
                              price: system.price,
                              description: system.description,
                              features: system.features,
                              category: system.name.split(" ")[0],
                              icon: system.icon.name,
                              setupTime: system.setupTime,
                              roi: system.roi,
                            })
                          }
                          disabled={isInCart}
                        >
                          {isInCart ? "In Cart" : "Add to Cart"}
                        </Button>
                        <Button variant="outline" size="icon" onClick={handleChatWithSystem}>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies using AI agents to automate workflows, improve customer service, and boost
              productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => setShowCartModal(true)}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                View Cart ({itemCount || 0})
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                onClick={handleGeneralChat}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with AI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <CartModal isOpen={showCartModal} onClose={() => setShowCartModal(false)} />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      {/* Chat Widget */}
      {showChatWidget && (
        <ChatWidget
          isOpen={showChatWidget}
          onClose={() => setShowChatWidget(false)}
          chatType={chatType}
          specificAgent={specificAgent}
        />
      )}
    </div>
  )
}
