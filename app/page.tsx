"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Brain,
  MessageSquare,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  Star,
  Plus,
  Settings,
  BarChart3,
  Bot,
  Headphones,
  UserCheck,
  Wrench,
  ShoppingCart,
  Eye,
  LogOut,
  User,
  CreditCard,
  Bell,
  ChevronDown,
} from "lucide-react"
import { AuthModal } from "@/components/auth/auth-modal"
import { ChatWidget } from "@/components/chat/chat-widget"
import { useAuth } from "@/hooks/use-auth"
import { signOut } from "@/lib/auth"
import { useCart } from "@/hooks/use-cart"
import { CartModal } from "@/components/cart/cart-modal"
import { toast } from "@/hooks/use-toast"

export default function HomePage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatType, setChatType] = useState<"agent" | "system" | "general">("general")
  const [specificAgent, setSpecificAgent] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("home")
  const { user, loading } = useAuth()

  const { addItem, itemCount } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleDeployAgent = (
    agentId: string,
    agentName: string,
    description: string,
    price: number,
    icon: string,
    features: string[],
  ) => {
    addItem({
      id: agentId,
      name: agentName,
      description,
      price,
      icon,
      features,
    })

    toast({
      title: "Added to Cart",
      description: `${agentName} has been added to your cart`,
    })

    setIsCartOpen(true)
  }

  // Set active tab to dashboard when user logs in
  useEffect(() => {
    if (user && activeTab === "home") {
      setActiveTab("dashboard")
    }
  }, [user, activeTab])

  const handleSignOut = async () => {
    try {
      await signOut()
      setActiveTab("home")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const handleChatWithAgent = (agentType: string) => {
    setChatType("agent")
    setSpecificAgent(agentType)
    setIsChatOpen(true)
  }

  const handleGeneralChat = () => {
    setChatType("general")
    setSpecificAgent(null)
    setIsChatOpen(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">NeuralIA</span>
            </div>

            {user ? (
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" onClick={handleGeneralChat}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  AI Chat
                </Button>

                <Button variant="outline" size="sm" onClick={() => setIsCartOpen(true)} className="relative">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart
                  {itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {itemCount}
                    </Badge>
                  )}
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:block text-sm">{user.email?.split("@")[0]}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Billing & Plans
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      System Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="ghost" onClick={() => setIsAuthModalOpen(true)}>
                  Sign In
                </Button>
                <Button onClick={() => setIsAuthModalOpen(true)}>Get Started</Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-none lg:flex">
              {!user && <TabsTrigger value="home">Home</TabsTrigger>}
              {user && (
                <>
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="agents">Agents</TabsTrigger>
                </>
              )}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Home Tab - Only visible when not logged in */}
          {!user && (
            <TabsContent value="home" className="space-y-12">
              {/* Hero Section */}
              <section className="text-center space-y-6 py-12">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Transform Your Business with <span className="text-blue-600">AI Agents</span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Deploy intelligent AI agents and systems in 24-48 hours. Automate customer service, boost sales, and
                    streamline operations with cutting-edge artificial intelligence.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => setIsAuthModalOpen(true)} className="text-lg px-8 py-3">
                    Start Free Trial
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleGeneralChat}
                    className="text-lg px-8 py-3 bg-transparent"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Try AI Demo
                  </Button>
                </div>
              </section>

              {/* Features Grid */}
              <section className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Lightning Fast Deployment</CardTitle>
                    <CardDescription>Get your AI agents up and running in 24-48 hours, not months</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <CardTitle>Enterprise Security</CardTitle>
                    <CardDescription>Bank-grade security with SOC 2 compliance and data encryption</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle>Proven ROI</CardTitle>
                    <CardDescription>Average 300% ROI within 6 months of deployment</CardDescription>
                  </CardHeader>
                </Card>
              </section>

              {/* Stats Section */}
              <section className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
                  <p className="text-gray-600">Join thousands of companies already using NeuralIA</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">10,000+</div>
                    <div className="text-gray-600">AI Agents Deployed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">99.9%</div>
                    <div className="text-gray-600">Uptime Guarantee</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">50M+</div>
                    <div className="text-gray-600">Conversations Handled</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>
              </section>
            </TabsContent>
          )}

          {/* Dashboard Tab - Only visible when logged in */}
          {user && (
            <TabsContent value="dashboard" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                  <p className="text-gray-600">Welcome back! Here's your AI system overview.</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={handleGeneralChat}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    AI Chat
                  </Button>
                  <Button onClick={() => setActiveTab("agents")}>
                    <Plus className="mr-2 h-4 w-4" />
                    New Agent
                  </Button>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
                    <Bot className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">+1 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Conversations</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,247</div>
                    <p className="text-xs text-muted-foreground">+12% from last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Satisfaction Rate</CardTitle>
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">94.2%</div>
                    <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1.2s</div>
                    <p className="text-xs text-muted-foreground">-0.3s from last week</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates from your AI systems</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Sales Coach Agent deployed</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">147 new conversations processed</p>
                        <p className="text-xs text-gray-500">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Customer satisfaction improved to 94.2%</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common tasks and shortcuts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      className="w-full justify-start bg-transparent"
                      variant="outline"
                      onClick={() => setActiveTab("agents")}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Create New AI Agent
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      View Analytics
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Settings className="mr-2 h-4 w-4" />
                      System Settings
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Users className="mr-2 h-4 w-4" />
                      Team Management
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Usage Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Usage Overview</CardTitle>
                  <CardDescription>Current plan usage and limits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Monthly Conversations</span>
                      <span>1,247 / 5,000</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Active Agents</span>
                      <span>3 / 10</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Storage Used</span>
                      <span>2.1 GB / 10 GB</span>
                    </div>
                    <Progress value={21} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Agents Tab - Only visible when logged in */}
          {user && (
            <TabsContent value="agents" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">AI Agents</h1>
                  <p className="text-gray-600">Manage your AI agents and explore new ones.</p>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Custom Agent
                </Button>
              </div>

              {/* My Agents */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">My Agents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Headphones className="h-8 w-8 text-blue-600" />
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <CardTitle>Customer Service Agent</CardTitle>
                      <CardDescription>Handles customer inquiries and support tickets</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Conversations:</span>
                          <span className="font-medium">847</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Satisfaction:</span>
                          <span className="font-medium">96.2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Response Time:</span>
                          <span className="font-medium">0.8s</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          onClick={() => handleChatWithAgent("customer-service")}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <MessageSquare className="mr-1 h-3 w-3" />
                          Chat
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="mr-1 h-3 w-3" />
                          Configure
                        </Button>
                        <Button size="sm" variant="outline">
                          <BarChart3 className="mr-1 h-3 w-3" />
                          Analytics
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <UserCheck className="h-8 w-8 text-green-600" />
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <CardTitle>Sales Coach Agent</CardTitle>
                      <CardDescription>Assists sales team with lead qualification</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Conversations:</span>
                          <span className="font-medium">234</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Conversion Rate:</span>
                          <span className="font-medium">23.4%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Response Time:</span>
                          <span className="font-medium">1.1s</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          onClick={() => handleChatWithAgent("sales-coach")}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <MessageSquare className="mr-1 h-3 w-3" />
                          Chat
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="mr-1 h-3 w-3" />
                          Configure
                        </Button>
                        <Button size="sm" variant="outline">
                          <BarChart3 className="mr-1 h-3 w-3" />
                          Analytics
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Wrench className="h-8 w-8 text-purple-600" />
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <CardTitle>Technical Support Agent</CardTitle>
                      <CardDescription>Provides technical assistance and troubleshooting</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Conversations:</span>
                          <span className="font-medium">166</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Resolution Rate:</span>
                          <span className="font-medium">89.2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Response Time:</span>
                          <span className="font-medium">1.5s</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          onClick={() => handleChatWithAgent("technical-support")}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          <MessageSquare className="mr-1 h-3 w-3" />
                          Chat
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="mr-1 h-3 w-3" />
                          Configure
                        </Button>
                        <Button size="sm" variant="outline">
                          <BarChart3 className="mr-1 h-3 w-3" />
                          Analytics
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Available Agents */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Available Agents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-dashed">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Users className="h-8 w-8 text-orange-600" />
                        <Badge variant="outline">New</Badge>
                      </div>
                      <CardTitle>HR Advisory Agent</CardTitle>
                      <CardDescription>Assists with HR policies, benefits, and employee queries</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Employee onboarding assistance</p>
                        <p>• Policy and benefits information</p>
                        <p>• Leave and attendance queries</p>
                        <p>• Performance review support</p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          onClick={() =>
                            handleDeployAgent(
                              "hr-advisory",
                              "HR Advisory Agent",
                              "Assists with HR policies, benefits, and employee queries",
                              299,
                              "👥",
                              [
                                "Employee onboarding assistance",
                                "Policy and benefits information",
                                "Leave and attendance queries",
                                "Performance review support",
                              ],
                            )
                          }
                        >
                          <ShoppingCart className="mr-1 h-3 w-3" />
                          Deploy - $299
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleChatWithAgent("hr-advisory")}>
                          <Eye className="mr-1 h-3 w-3" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-dashed">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <BarChart3 className="h-8 w-8 text-indigo-600" />
                        <Badge variant="outline">Popular</Badge>
                      </div>
                      <CardTitle>Analytics Agent</CardTitle>
                      <CardDescription>Provides business insights and data analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Real-time data analysis</p>
                        <p>• Custom report generation</p>
                        <p>• Performance metrics tracking</p>
                        <p>• Predictive analytics</p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          onClick={() =>
                            handleDeployAgent(
                              "analytics",
                              "Analytics Agent",
                              "Provides business insights and data analysis",
                              499,
                              "📊",
                              [
                                "Real-time data analysis",
                                "Custom report generation",
                                "Performance metrics tracking",
                                "Predictive analytics",
                              ],
                            )
                          }
                        >
                          <ShoppingCart className="mr-1 h-3 w-3" />
                          Deploy - $499
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleChatWithAgent("analytics")}>
                          <Eye className="mr-1 h-3 w-3" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-dashed">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <MessageSquare className="h-8 w-8 text-pink-600" />
                        <Badge variant="outline">Beta</Badge>
                      </div>
                      <CardTitle>Marketing Agent</CardTitle>
                      <CardDescription>Assists with marketing campaigns and lead generation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Campaign optimization</p>
                        <p>• Lead scoring and qualification</p>
                        <p>• Content recommendations</p>
                        <p>• Social media insights</p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          onClick={() =>
                            handleDeployAgent(
                              "marketing",
                              "Marketing Agent",
                              "Assists with marketing campaigns and lead generation",
                              399,
                              "📢",
                              [
                                "Campaign optimization",
                                "Lead scoring and qualification",
                                "Content recommendations",
                                "Social media insights",
                              ],
                            )
                          }
                        >
                          <ShoppingCart className="mr-1 h-3 w-3" />
                          Deploy - $399
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleChatWithAgent("marketing")}>
                          <Eye className="mr-1 h-3 w-3" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </main>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* Chat Widget */}
      <ChatWidget
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        chatType={chatType}
        specificAgent={specificAgent}
      />

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
