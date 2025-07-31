"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  ArrowRight,
  Play,
  ChevronDown,
  ChevronUp,
  Building2,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Target,
  MessageCircle,
  Crown,
} from "lucide-react"
import { AuthButton } from "@/components/auth/auth-button"
import { CartModal } from "@/components/cart/cart-modal"
import { AgentDetailsModal } from "@/components/agent-details-modal"
import { ChatWidget } from "@/components/chat/chat-widget"
import { CustomerServiceChat } from "@/components/chat/customer-service-chat"
import { NeuralExecutiveDemo } from "@/components/demo/neural-executive-demo"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"
import { AuthModal } from "@/components/auth/auth-modal"

const agents = [
  {
    id: "ceo-neural-orchestrator",
    name: "Chief Executive Officer",
    displayName: "CEO Neural Orchestrator",
    icon: "🧠",
    price: 299,
    category: "Executive Leadership",
    rating: 4.9,
    reviews: 847,
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
    expertise: [
      "Strategic Planning",
      "Leadership Development",
      "Crisis Management",
      "Board Relations",
      "Stakeholder Management",
      "Vision Setting",
    ],
    neuralSpecs: {
      parameters: "175B",
      architecture: "Transformer-based Executive Neural Network",
      trainingData: "Fortune 500 CEO decisions, board minutes, strategic plans",
      processingSpeed: "< 2 seconds",
      accuracy: "97%",
    },
  },
  {
    id: "cmo-growth-engine",
    name: "Chief Marketing Officer",
    displayName: "CMO Growth Engine",
    icon: "📈",
    price: 299,
    category: "Marketing & Growth",
    rating: 4.8,
    reviews: 623,
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
    expertise: [
      "Digital Marketing",
      "Brand Strategy",
      "Growth Hacking",
      "Customer Analytics",
      "Content Marketing",
      "Performance Marketing",
    ],
    neuralSpecs: {
      parameters: "150B",
      architecture: "Multi-modal Marketing Intelligence Network",
      trainingData: "Marketing campaigns, consumer behavior, brand strategies",
      processingSpeed: "< 3 seconds",
      accuracy: "94%",
    },
  },
  {
    id: "cto-innovation-architect",
    name: "Chief Technology Officer",
    displayName: "CTO Innovation Architect",
    icon: "⚡",
    price: 299,
    category: "Technology & Innovation",
    rating: 4.9,
    reviews: 734,
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
    expertise: [
      "Cloud Architecture",
      "DevOps & CI/CD",
      "Cybersecurity",
      "Innovation Management",
      "Technical Leadership",
      "System Design",
    ],
    neuralSpecs: {
      parameters: "200B",
      architecture: "Technical Innovation Neural Framework",
      trainingData: "Technical documentation, architecture patterns, innovation cases",
      processingSpeed: "< 2 seconds",
      accuracy: "96%",
    },
  },
]

const heroStats = [
  { value: "2,847", label: "Active Deployments" },
  { value: "340%", label: "Avg ROI Increase" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "< 2s", label: "Response Time" },
]

const useCases = [
  {
    id: "strategic-planning",
    icon: Building2,
    title: "Strategic Planning",
    description:
      "Transform your strategic planning process with AI-powered market analysis, competitive intelligence, and scenario modeling.",
    benefits: [
      "Reduce planning cycles by 60%",
      "Identify market opportunities faster",
      "Generate data-driven strategic frameworks",
      "Optimize resource allocation decisions",
    ],
    industries: ["Fortune 500", "Consulting", "Private Equity"],
    metrics: {
      efficiency: "60%",
      accuracy: "94%",
      satisfaction: "4.8/5",
    },
  },
  {
    id: "growth-optimization",
    icon: TrendingUp,
    title: "Growth Optimization",
    description:
      "Accelerate growth with AI-driven customer segmentation, campaign optimization, and conversion rate improvements.",
    benefits: [
      "Increase conversion rates by 40%",
      "Optimize marketing spend efficiency",
      "Personalize customer experiences",
      "Predict customer lifetime value",
    ],
    industries: ["E-commerce", "SaaS", "Digital Marketing"],
    metrics: {
      efficiency: "40%",
      accuracy: "92%",
      satisfaction: "4.7/5",
    },
  },
  {
    id: "risk-management",
    icon: Shield,
    title: "Risk Management",
    description:
      "Proactively identify and mitigate business risks with AI-powered threat detection and scenario analysis.",
    benefits: [
      "Detect risks 3x faster",
      "Reduce compliance violations",
      "Automate risk assessment workflows",
      "Generate regulatory reports",
    ],
    industries: ["Financial Services", "Healthcare", "Manufacturing"],
    metrics: {
      efficiency: "300%",
      accuracy: "96%",
      satisfaction: "4.9/5",
    },
  },
  {
    id: "innovation-strategy",
    icon: Zap,
    title: "Innovation Strategy",
    description: "Drive innovation with AI-assisted R&D planning, technology roadmapping, and competitive analysis.",
    benefits: [
      "Accelerate product development",
      "Identify emerging technologies",
      "Optimize R&D investments",
      "Track innovation metrics",
    ],
    industries: ["Technology", "Pharmaceuticals", "Automotive"],
    metrics: {
      efficiency: "45%",
      accuracy: "93%",
      satisfaction: "4.6/5",
    },
  },
  {
    id: "team-optimization",
    icon: Users,
    title: "Team Optimization",
    description:
      "Enhance team performance with AI-driven hiring recommendations, skill gap analysis, and organizational design.",
    benefits: [
      "Improve hiring success rates",
      "Reduce employee turnover",
      "Optimize team structures",
      "Identify skill development needs",
    ],
    industries: ["HR Services", "Consulting", "Technology"],
    metrics: {
      efficiency: "35%",
      accuracy: "89%",
      satisfaction: "4.5/5",
    },
  },
  {
    id: "performance-analytics",
    icon: Target,
    title: "Performance Analytics",
    description:
      "Maximize business performance with AI-powered KPI tracking, predictive analytics, and actionable insights.",
    benefits: [
      "Increase operational efficiency",
      "Predict performance trends",
      "Automate reporting processes",
      "Generate actionable recommendations",
    ],
    industries: ["Operations", "Finance", "Executive Leadership"],
    metrics: {
      efficiency: "50%",
      accuracy: "95%",
      satisfaction: "4.8/5",
    },
  },
]

export default function HomePage() {
  const [showCart, setShowCart] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<(typeof agents)[0] | null>(null)
  const [showCustomerChat, setShowCustomerChat] = useState(false)
  const [showExecutiveDemo, setShowExecutiveDemo] = useState(false)
  const [expandedCards, setExpandedCards] = useState<string[]>([])
  const [expandedUseCases, setExpandedUseCases] = useState<string[]>([])
  const { addToCart, cartItems } = useCart()
  const { user } = useAuth()

  // Estados para el chat unificado
  const [chatAgent, setChatAgent] = useState<(typeof agents)[0] | null>(null)
  const [showChatWidget, setShowChatWidget] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleAddToCart = (agent: (typeof agents)[0]) => {
    addToCart({
      id: agent.id,
      name: agent.name,
      price: agent.price,
      type: "agent",
    })
  }

  const handleTryDemo = () => {
    setShowExecutiveDemo(true)
  }

  // Función unificada para abrir el chat con un agente específico
  const handleTryAgentDemo = (agent: (typeof agents)[0]) => {
    setChatAgent(agent)
    setShowChatWidget(true)
  }

  const handleAuthRequired = () => {
    setShowAuthModal(true)
  }

  const toggleCardExpansion = (agentId: string) => {
    setExpandedCards((prev) => (prev.includes(agentId) ? prev.filter((id) => id !== agentId) : [...prev, agentId]))
  }

  const toggleUseCaseExpansion = (useCaseId: string) => {
    setExpandedUseCases((prev) =>
      prev.includes(useCaseId) ? prev.filter((id) => id !== useCaseId) : [...prev, useCaseId],
    )
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
              <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">
                Use Cases
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
              <button
                onClick={() => setShowCustomerChat(true)}
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                Need Help?
              </button>
              <button
                onClick={() => setShowExecutiveDemo(true)}
                className="text-purple-600 hover:text-purple-700 transition-colors font-medium flex items-center space-x-1"
              >
                <Sparkles className="h-4 w-4" />
                <span>Live Demo</span>
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
              Try 3 Free Questions Per Agent + Live Demo
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
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg"
                onClick={handleTryDemo}
              >
                <Play className="h-5 w-5 mr-2" />
                Try Live Demo
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
            <div className="mt-6">
              <Badge className="bg-green-100 text-green-700 text-sm px-4 py-2">
                <MessageCircle className="h-4 w-4 mr-2" />
                Try 3 free questions with each agent before signing up
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {agents.map((agent) => {
              const isExpanded = expandedCards.includes(agent.id)

              return (
                <Card
                  key={agent.id}
                  className="border-2 hover:border-blue-200 transition-all duration-200 hover:shadow-lg group"
                >
                  {/* Compact Header - Always Visible */}
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
                    {/* Expandable Section Toggle */}
                    <div className="border-t pt-4 mb-4">
                      <Button
                        variant="ghost"
                        onClick={() => toggleCardExpansion(agent.id)}
                        className="w-full flex items-center justify-between p-2 hover:bg-gray-50"
                      >
                        <span className="font-semibold text-gray-900">Core Capabilities</span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        )}
                      </Button>
                    </div>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="space-y-4 mb-6">
                        {/* Capabilities as Tags */}
                        <div className="flex flex-wrap gap-2">
                          {agent.capabilities.map((capability, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-default"
                            >
                              {capability}
                            </Badge>
                          ))}
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="font-semibold mb-2 text-gray-900">Key Features:</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {agent.features.slice(0, 4).map((feature, index) => (
                              <div key={index} className="text-sm text-gray-600 flex items-center">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Interactive Demo & Pricing - Always Visible */}
                    <div className="border-t pt-6 space-y-3">
                      {/* Try Interactive Demo Button - ESTE ES EL ÚNICO BOTÓN DE DEMO */}
                      <Button
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                        onClick={() => handleTryAgentDemo(agent)}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Try Interactive Demo
                      </Button>

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
              )
            })}
          </div>

          {/* Call to Action for More Agents */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Need More Specialized Agents?</h3>
              <p className="text-lg mb-6 text-gray-600">
                We offer 15+ additional specialized AI executives including CFO, CHRO, COO, and industry-specific roles.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                onClick={() => setShowCustomerChat(true)}
              >
                <Crown className="h-5 w-5 mr-2" />
                Explore All Agents
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Neural AI Executives are revolutionizing business processes across industries with measurable
              results and unprecedented efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => {
              const IconComponent = useCase.icon
              const isExpanded = expandedUseCases.includes(useCase.id)

              return (
                <Card
                  key={useCase.id}
                  className="border-2 hover:border-blue-200 transition-all duration-200 hover:shadow-lg bg-white"
                >
                  {/* Compact Header - Always Visible */}
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>

                    {/* Metrics */}
                    <div className="flex justify-center gap-4 mt-4 text-xs">
                      <div className="text-center">
                        <div className="font-bold text-green-600">{useCase.metrics.efficiency}</div>
                        <div className="text-gray-500">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-blue-600">{useCase.metrics.accuracy}</div>
                        <div className="text-gray-500">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-purple-600">{useCase.metrics.satisfaction}</div>
                        <div className="text-gray-500">Rating</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Expandable Section Toggle */}
                    <div className="border-t pt-4 mb-4">
                      <Button
                        variant="ghost"
                        onClick={() => toggleUseCaseExpansion(useCase.id)}
                        className="w-full flex items-center justify-between p-2 hover:bg-gray-50"
                      >
                        <span className="font-semibold text-gray-900">Key Benefits</span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        )}
                      </Button>
                    </div>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="space-y-4 mb-6">
                        {/* Benefits */}
                        <div className="space-y-2">
                          {useCase.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                              {benefit}
                            </div>
                          ))}
                        </div>

                        {/* Industries */}
                        <div>
                          <h4 className="font-semibold mb-2 text-gray-900">Popular Industries:</h4>
                          <div className="flex flex-wrap gap-2">
                            {useCase.industries.map((industry, index) => (
                              <Badge key={index} variant="secondary" className="text-xs bg-purple-50 text-purple-700">
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA - Always Visible */}
                    <div className="border-t pt-6">
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={handleTryDemo}
                      >
                        Try This Use Case
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of companies already using Neural AI Executives to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                  onClick={handleTryDemo}
                >
                  <Play className="h-5 w-5 mr-2" />
                  Try Live Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
                  onClick={() => document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Pricing
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* CHAT WIDGET UNIFICADO - Este es el único chat que se usa */}
      <ChatWidget
        isOpen={showChatWidget}
        onClose={() => {
          setShowChatWidget(false)
          setChatAgent(null)
        }}
        agent={
          chatAgent
            ? {
                id: chatAgent.id,
                name: chatAgent.name,
                icon: chatAgent.icon,
                description: chatAgent.description,
              }
            : undefined
        }
        maxQuestions={user ? Number.POSITIVE_INFINITY : 3}
        onAuthRequired={handleAuthRequired}
      />

      {/* Footer */}
      <Footer />

      {/* Customer Service Chat */}
      <CustomerServiceChat isOpen={showCustomerChat} onToggle={() => setShowCustomerChat(!showCustomerChat)} />

      {/* Neural Executive Demo */}
      <NeuralExecutiveDemo isOpen={showExecutiveDemo} onToggle={() => setShowExecutiveDemo(!showExecutiveDemo)} />

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

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
