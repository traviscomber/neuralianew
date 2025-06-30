"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AuthModal } from "@/components/auth/auth-modal"
import { UserMenu } from "@/components/auth/user-menu"
import { CartModal } from "@/components/cart/cart-modal"
import { ChatWidget } from "@/components/chat/chat-widget"
import { AgentDetailsModal } from "@/components/agent-details-modal"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import {
  Search,
  Star,
  ShoppingCart,
  Zap,
  Brain,
  MessageSquare,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Rocket,
} from "lucide-react"

// Sample AI agents data
const sampleAgents = [
  {
    id: "ceo-neural-agent",
    name: "CEO Neural Agent",
    description: "Strategic decision-making AI for executive leadership",
    category: "Leadership",
    price: 299,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Strategic Planning", "Decision Analysis", "Market Intelligence"],
    rating: 4.9,
    reviews: 127,
  },
  {
    id: "hr-advisory",
    name: "HR Advisory Agent",
    description: "Human resources management and employee relations AI",
    category: "Human Resources",
    price: 199,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Recruitment", "Performance Management", "Policy Guidance"],
    rating: 4.8,
    reviews: 89,
  },
  {
    id: "sales-coach",
    name: "Sales Coach Agent",
    description: "AI-powered sales training and performance optimization",
    category: "Sales",
    price: 149,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Lead Qualification", "Pitch Optimization", "CRM Integration"],
    rating: 4.7,
    reviews: 203,
  },
  {
    id: "1",
    name: "DataAnalyst Pro",
    description: "Advanced data analysis and visualization AI agent",
    category: "Analytics",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=300&text=DataAnalyst+Pro",
    features: ["Real-time analytics", "Custom dashboards", "Predictive modeling", "Data visualization"],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "ChatBot Elite",
    description: "Intelligent conversational AI for customer support",
    category: "Communication",
    price: 19.99,
    image: "/placeholder.svg?height=200&width=300&text=ChatBot+Elite",
    features: ["Natural language processing", "Multi-language support", "24/7 availability", "Integration ready"],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "3",
    name: "SecurityGuard AI",
    description: "Comprehensive cybersecurity monitoring and threat detection",
    category: "Security",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=300&text=SecurityGuard+AI",
    features: ["Threat detection", "Real-time monitoring", "Automated responses", "Compliance reporting"],
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    name: "ContentCreator AI",
    description: "AI-powered content generation and optimization",
    category: "Content",
    price: 24.99,
    image: "/placeholder.svg?height=200&width=300&text=ContentCreator+AI",
    features: ["SEO optimization", "Multi-format content", "Brand voice matching", "Performance analytics"],
    rating: 4.6,
    reviews: 203,
  },
  {
    id: "5",
    name: "SalesAssistant Pro",
    description: "Intelligent sales automation and lead management",
    category: "Sales",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=300&text=SalesAssistant+Pro",
    features: ["Lead scoring", "Pipeline management", "Automated follow-ups", "Performance tracking"],
    rating: 4.8,
    reviews: 167,
  },
  {
    id: "6",
    name: "CodeReviewer AI",
    description: "Automated code review and quality assurance",
    category: "Development",
    price: 34.99,
    image: "/placeholder.svg?height=200&width=300&text=CodeReviewer+AI",
    features: ["Code analysis", "Security scanning", "Performance optimization", "Documentation generation"],
    rating: 4.9,
    reviews: 98,
  },
]

export default function HomePage() {
  const { user, loading } = useAuth()
  const { addToCart, getTotalItems, isAgentInCart, isAgentDeployed, isAgentDeploying } = useCart()
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [cartModalOpen, setCartModalOpen] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<any | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    "Analytics",
    "Communication",
    "Security",
    "Content",
    "Sales",
    "Development",
    "Leadership",
    "Human Resources",
  ]

  const filteredAgents = sampleAgents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || agent.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (agent: any) => {
    if (!user) {
      setAuthModalOpen(true)
      return
    }
    addToCart(agent)
  }

  const getAgentButtonState = (agent: any) => {
    if (isAgentDeployed(agent.id)) {
      return { text: "Deployed", variant: "secondary" as const, disabled: true, icon: CheckCircle }
    }
    if (isAgentDeploying(agent.id)) {
      return { text: "Deploying...", variant: "secondary" as const, disabled: true, icon: Rocket }
    }
    if (isAgentInCart(agent.id)) {
      return { text: "In Cart", variant: "outline" as const, disabled: false, icon: ShoppingCart }
    }
    return { text: "Add to Cart", variant: "default" as const, disabled: false, icon: ShoppingCart }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Neuralia</h1>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Button variant="outline" size="sm" onClick={() => setCartModalOpen(true)} className="relative">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Cart
                    {getTotalItems() > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-white/90 text-gray-800">
                        {getTotalItems()}
                      </Badge>
                    )}
                  </Button>
                  <UserMenu />
                </>
              ) : (
                <Button onClick={() => setAuthModalOpen(true)}>Sign In</Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Deploy AI Agents in Minutes
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Choose from our marketplace of pre-built AI agents or create your own. Scale your business with
              intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Sparkles className="mr-2 h-5 w-5" />
                Explore Agents
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                <ArrowRight className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">AI Agents</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search AI agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured AI Agents</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover powerful AI agents designed to automate and enhance your business processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAgents.map((agent) => {
              const buttonState = getAgentButtonState(agent)
              const ButtonIcon = buttonState.icon

              return (
                <Card key={agent.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={agent.image || "/placeholder.svg"}
                      alt={agent.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {agent.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{agent.name}</CardTitle>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{agent.rating}</span>
                        <span className="text-sm text-gray-500">({agent.reviews})</span>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">{agent.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {agent.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {agent.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{agent.features.length - 2} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="text-2xl font-bold text-blue-600">
                        ${agent.price}
                        <span className="text-sm font-normal text-gray-500">/month</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setSelectedAgent(agent)}>
                          Details
                        </Button>
                        <Button
                          variant={buttonState.variant}
                          size="sm"
                          onClick={() => handleAddToCart(agent)}
                          disabled={buttonState.disabled}
                        >
                          <ButtonIcon className="h-4 w-4 mr-2" />
                          {buttonState.text}
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Neuralia?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Built for scale, designed for simplicity, powered by cutting-edge AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
              <p className="opacity-90">
                Deploy AI agents in minutes, not months. Our platform handles all the complexity.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Enterprise Security</h3>
              <p className="opacity-90">Bank-grade security with SOC 2 compliance and end-to-end encryption.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Global Scale</h3>
              <p className="opacity-90">Deployed across 50+ countries with 99.9% uptime guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of companies already using Neuralia to automate their workflows and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => !user && setAuthModalOpen(true)}>
                <Users className="mr-2 h-5 w-5" />
                {user ? "Browse Agents" : "Get Started Free"}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                <MessageSquare className="mr-2 h-5 w-5" />
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Neuralia</span>
              </div>
              <p className="text-gray-400">The leading platform for AI agent deployment and management.</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <div className="space-y-2 text-gray-400">
                <div>AI Agents</div>
                <div>Marketplace</div>
                <div>Analytics</div>
                <div>Integrations</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2 text-gray-400">
                <div>About</div>
                <div>Careers</div>
                <div>Blog</div>
                <div>Contact</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <div className="space-y-2 text-gray-400">
                <div>Documentation</div>
                <div>Help Center</div>
                <div>Status</div>
                <div>Security</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Neuralia. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      <CartModal open={cartModalOpen} onOpenChange={setCartModalOpen} />
      {selectedAgent && (
        <AgentDetailsModal
          agent={selectedAgent}
          open={!!selectedAgent}
          onOpenChange={() => setSelectedAgent(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}
