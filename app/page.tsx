"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight, Play, CheckCircle } from "lucide-react"
import { AuthButton } from "@/components/auth/auth-button"
import { CartModal } from "@/components/cart/cart-modal"
import { AgentDetailsModal } from "@/components/agent-details-modal"
import { ChatWidget } from "@/components/chat/chat-widget"
import { CustomerServiceChat } from "@/components/chat/customer-service-chat"
import { FAQSection } from "@/components/landing/faq-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { TeamSection } from "@/components/landing/team-section"
import { Footer } from "@/components/landing/footer"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"

const agents = [
  {
    id: "ceo-neural-orchestrator",
    name: "CEO Neural Orchestrator",
    icon: "🧠",
    price: 299,
    description: "Strategic leadership and executive decision-making AI trained on Fortune 500 CEO patterns",
    capabilities: [
      "Strategic Planning & Vision Setting",
      "Market Analysis & Competitive Intelligence",
      "Executive Decision Trees",
      "Board Presentation Generation",
      "Crisis Management Protocols",
      "Stakeholder Communication",
    ],
    metrics: {
      accuracy: "97%",
      responseTime: "< 2s",
      satisfaction: "4.9/5",
    },
    features: [
      "175B parameter neural network",
      "Real-time market data integration",
      "Executive communication templates",
      "Strategic framework library",
      "Risk assessment algorithms",
      "Performance dashboard",
    ],
  },
  {
    id: "cmo-growth-engine",
    name: "CMO Growth Engine",
    icon: "📈",
    price: 299,
    description: "Marketing strategy and growth optimization AI with deep consumer psychology understanding",
    capabilities: [
      "Customer Segmentation & Personas",
      "Campaign Strategy & Optimization",
      "Brand Positioning & Messaging",
      "Growth Hacking Frameworks",
      "Content Strategy & Planning",
      "ROI Analysis & Attribution",
    ],
    metrics: {
      accuracy: "94%",
      responseTime: "< 3s",
      satisfaction: "4.8/5",
    },
    features: [
      "Consumer psychology models",
      "Multi-channel attribution",
      "A/B testing frameworks",
      "Creative brief generation",
      "Influencer matching algorithms",
      "Conversion optimization",
    ],
  },
  {
    id: "cto-innovation-architect",
    name: "CTO Innovation Architect",
    icon: "⚡",
    price: 299,
    description: "Technology strategy and innovation AI with cutting-edge engineering expertise",
    capabilities: [
      "Technology Roadmap Planning",
      "Architecture Design & Review",
      "Innovation Strategy & R&D",
      "Team Structure & Hiring",
      "Security & Compliance",
      "Vendor Evaluation & Selection",
    ],
    metrics: {
      accuracy: "96%",
      responseTime: "< 2s",
      satisfaction: "4.9/5",
    },
    features: [
      "Technical architecture patterns",
      "Security vulnerability scanning",
      "Performance optimization",
      "Cloud migration strategies",
      "API design frameworks",
      "DevOps best practices",
    ],
  },
]

const heroStats = [
  { value: "2,847", label: "Active Deployments" },
  { value: "340%", label: "Avg ROI Increase" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "< 2s", label: "Response Time" },
]

export default function HomePage() {
  const [showCart, setShowCart] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<(typeof agents)[0] | null>(null)
  const [showCustomerChat, setShowCustomerChat] = useState(false)
  const { addToCart, cartItems } = useCart()
  const { user } = useAuth()

  const handleAddToCart = (agent: (typeof agents)[0]) => {
    addToCart({
      id: agent.id,
      name: agent.name,
      price: agent.price,
      type: "agent",
    })
  }

  const handleTryDemo = () => {
    // Scroll to chat widget or open demo
    const chatWidget = document.getElementById("chat-widget")
    if (chatWidget) {
      chatWidget.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neuralia
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#agents" className="text-gray-600 hover:text-gray-900 transition-colors">
                Agents
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
              <a href="#team" className="text-gray-600 hover:text-gray-900 transition-colors">
                Team
              </a>
              <button
                onClick={() => setShowCustomerChat(true)}
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                Need Help?
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => setShowCart(true)} className="relative">
                Cart
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
              <AuthButton />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Sparkles className="h-3 w-3 mr-1" />
              Now with 5-Day Free Trial
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Deploy Neural AI Executives
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Specialized AI agents that think, strategize, and execute like world-class business leaders. Get
              executive-level insights powered by quantum-inspired algorithms and 175B parameters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                onClick={handleTryDemo}
              >
                <Play className="h-5 w-5 mr-2" />
                Try Neural Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-2 bg-transparent"
                onClick={() => document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Agents
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Neural AI Executives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your specialized AI executive. Each agent is trained on executive decision-making patterns from
              Fortune 500 companies and optimized for specific business functions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <Card
                key={agent.id}
                className="border-2 hover:border-blue-200 transition-all duration-200 hover:shadow-lg group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{agent.icon}</div>
                  <CardTitle className="text-xl mb-2">{agent.name}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{agent.description}</p>

                  {/* Metrics */}
                  <div className="flex justify-center gap-4 mt-4 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-green-600">{agent.metrics.accuracy}</div>
                      <div className="text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-blue-600">{agent.metrics.responseTime}</div>
                      <div className="text-gray-500">Response</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-purple-600">{agent.metrics.satisfaction}</div>
                      <div className="text-gray-500">Rating</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Capabilities */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Core Capabilities:</h4>
                    <div className="space-y-2">
                      {agent.capabilities.slice(0, 4).map((capability, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {capability}
                        </div>
                      ))}
                      {agent.capabilities.length > 4 && (
                        <button
                          onClick={() => setSelectedAgent(agent)}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          +{agent.capabilities.length - 4} more capabilities
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">${agent.price}</div>
                        <div className="text-sm text-gray-500">per month</div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">5-Day Free Trial</Badge>
                    </div>

                    <div className="space-y-2">
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => handleAddToCart(agent)}
                      >
                        Start Free Trial
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => setSelectedAgent(agent)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Team */}
      <div id="team">
        <TeamSection />
      </div>

      {/* Chat Widget */}
      <div id="chat-widget">
        <ChatWidget />
      </div>

      {/* Footer */}
      <Footer />

      {/* Customer Service Chat */}
      <CustomerServiceChat isOpen={showCustomerChat} onToggle={() => setShowCustomerChat(!showCustomerChat)} />

      {/* Modals */}
      <CartModal isOpen={showCart} onClose={() => setShowCart(false)} />
      {selectedAgent && (
        <AgentDetailsModal
          agent={selectedAgent}
          isOpen={!!selectedAgent}
          onClose={() => setSelectedAgent(null)}
          onAddToCart={() => handleAddToCart(selectedAgent)}
        />
      )}
    </div>
  )
}
