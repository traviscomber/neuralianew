"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  MessageSquare,
  ShoppingCart,
  User,
  Star,
  Zap,
  Shield,
  Clock,
  CreditCard,
  Cpu,
  Network,
  Database,
} from "lucide-react"
import { AuthModal } from "@/components/auth/auth-modal"
import { CartModal } from "@/components/cart/cart-modal"
import { ChatWidget } from "@/components/chat/chat-widget"
import { AgentDetailsModal } from "@/components/agent-details-modal"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import { dbHelpers } from "@/lib/supabase"

// Advanced Neural Network AI Agents
const neuralAgents = [
  {
    id: "ceo-neural-orchestrator",
    name: "CEO Neural Orchestrator",
    description:
      "Advanced multi-layer neural network with 175B parameters trained on Fortune 500 executive decisions. Features deep reinforcement learning for strategic planning, transformer architecture for market analysis, and quantum-inspired optimization algorithms for resource allocation.",
    avatar: "/placeholder.svg?height=80&width=80",
    expertise: [
      "Strategic Neural Planning",
      "Executive Decision Trees",
      "Market Prediction Models",
      "Risk Assessment AI",
      "Leadership Optimization",
      "Competitive Intelligence",
    ],
    pricing: "$2,999/month",
    featured: true,
    rating: 4.98,
    reviews: 847,
    price: 299,
    category: "Executive Neural Network",
    neuralSpecs: {
      parameters: "175B",
      architecture: "Transformer + Reinforcement Learning",
      trainingData: "10M+ executive decisions",
      processingSpeed: "1.2M decisions/second",
      accuracy: "97.8%",
    },
    capabilities: [
      "Real-time strategic decision making with 97.8% accuracy",
      "Multi-dimensional market analysis using quantum algorithms",
      "Predictive modeling for 5-year business forecasting",
      "Cross-functional team optimization through neural coordination",
      "Risk assessment using Monte Carlo neural simulations",
      "Competitive intelligence with sentiment analysis AI",
    ],
  },
  {
    id: "hr-neural-advisor",
    name: "HR Neural Advisory System",
    description:
      "Sophisticated neural network combining natural language processing, behavioral analysis, and predictive modeling. Built on GPT-4 architecture with specialized training on HR psychology, employment law, and organizational behavior patterns.",
    avatar: "/placeholder.svg?height=80&width=80",
    expertise: [
      "Behavioral Neural Analysis",
      "Talent Prediction Models",
      "Conflict Resolution AI",
      "Performance Optimization",
      "Culture Mapping",
      "Legal Compliance AI",
    ],
    pricing: "$1,899/month",
    featured: false,
    rating: 4.94,
    reviews: 623,
    price: 189,
    category: "Human Resources AI",
    neuralSpecs: {
      parameters: "87B",
      architecture: "GPT-4 + Behavioral Analysis",
      trainingData: "5M+ HR cases",
      processingSpeed: "850K assessments/second",
      accuracy: "96.2%",
    },
    capabilities: [
      "Predictive talent acquisition with 96% success rate",
      "Real-time conflict resolution using NLP sentiment analysis",
      "Performance optimization through behavioral pattern recognition",
      "Automated policy compliance checking with legal AI",
      "Culture fit analysis using deep learning algorithms",
      "Employee satisfaction prediction with 94% accuracy",
    ],
  },
  {
    id: "sales-neural-engine",
    name: "Sales Neural Engine",
    description:
      "High-performance neural network optimized for sales conversion and revenue prediction. Features advanced customer behavior modeling, dynamic pricing algorithms, and real-time market sentiment analysis powered by transformer neural architecture.",
    avatar: "/placeholder.svg?height=80&width=80",
    expertise: [
      "Revenue Prediction AI",
      "Customer Behavior Models",
      "Dynamic Pricing Neural Networks",
      "Pipeline Optimization",
      "Conversion Analytics",
      "Market Sentiment AI",
    ],
    pricing: "$2,499/month",
    featured: true,
    rating: 4.96,
    reviews: 1024,
    price: 249,
    category: "Sales Intelligence AI",
    neuralSpecs: {
      parameters: "120B",
      architecture: "Transformer + Reinforcement Learning",
      trainingData: "15M+ sales interactions",
      processingSpeed: "2.1M predictions/second",
      accuracy: "98.4%",
    },
    capabilities: [
      "Revenue forecasting with 98.4% accuracy using neural networks",
      "Customer lifetime value prediction through deep learning",
      "Dynamic pricing optimization with reinforcement learning",
      "Sales pipeline analysis using predictive modeling",
      "Lead scoring with behavioral neural networks",
      "Market opportunity identification through AI pattern recognition",
    ],
  },
  {
    id: "marketing-neural-brain",
    name: "Marketing Neural Brain",
    description:
      "Advanced marketing AI combining computer vision, natural language generation, and predictive analytics. Features multi-modal neural networks for content creation, customer segmentation, and campaign optimization across all digital channels.",
    avatar: "/placeholder.svg?height=80&width=80",
    expertise: [
      "Content Generation AI",
      "Customer Segmentation Neural Networks",
      "Campaign Optimization",
      "Brand Intelligence",
      "Social Media AI",
      "Conversion Prediction",
    ],
    pricing: "$2,199/month",
    featured: false,
    rating: 4.92,
    reviews: 756,
    price: 219,
    category: "Marketing Intelligence AI",
    neuralSpecs: {
      parameters: "95B",
      architecture: "Multi-modal Transformer",
      trainingData: "8M+ campaigns",
      processingSpeed: "1.8M optimizations/second",
      accuracy: "95.7%",
    },
    capabilities: [
      "Automated content generation using GPT-4 architecture",
      "Customer segmentation with unsupervised learning algorithms",
      "Campaign performance prediction with 95.7% accuracy",
      "Brand sentiment analysis across social media platforms",
      "A/B testing optimization through neural network analysis",
      "ROI prediction using advanced regression models",
    ],
  },
  {
    id: "operations-neural-optimizer",
    name: "Operations Neural Optimizer",
    description:
      "Enterprise-grade neural network for operational excellence. Combines process mining, predictive maintenance, and supply chain optimization using advanced machine learning algorithms and real-time data processing capabilities.",
    avatar: "/placeholder.svg?height=80&width=80",
    expertise: [
      "Process Mining AI",
      "Predictive Maintenance",
      "Supply Chain Neural Networks",
      "Quality Control AI",
      "Resource Optimization",
      "Efficiency Analytics",
    ],
    pricing: "$1,799/month",
    featured: false,
    rating: 4.89,
    reviews: 445,
    price: 179,
    category: "Operations Intelligence AI",
    neuralSpecs: {
      parameters: "72B",
      architecture: "Convolutional + Recurrent Neural Networks",
      trainingData: "12M+ operational processes",
      processingSpeed: "3.2M optimizations/second",
      accuracy: "97.1%",
    },
    capabilities: [
      "Process optimization using reinforcement learning algorithms",
      "Predictive maintenance with 97% failure prediction accuracy",
      "Supply chain optimization through neural network modeling",
      "Quality control automation using computer vision AI",
      "Resource allocation optimization with genetic algorithms",
      "Real-time efficiency monitoring with anomaly detection",
    ],
  },
  {
    id: "finance-neural-analyst",
    name: "Finance Neural Analyst",
    description:
      "Sophisticated financial AI powered by quantum-inspired algorithms and deep neural networks. Specializes in risk assessment, fraud detection, and financial forecasting using advanced time series analysis and market prediction models.",
    avatar: "/placeholder.svg?height=80&width=80",
    expertise: [
      "Risk Assessment AI",
      "Fraud Detection Neural Networks",
      "Financial Forecasting",
      "Market Analysis",
      "Portfolio Optimization",
      "Regulatory Compliance AI",
    ],
    pricing: "$2,799/month",
    featured: true,
    rating: 4.97,
    reviews: 592,
    price: 279,
    category: "Financial Intelligence AI",
    neuralSpecs: {
      parameters: "140B",
      architecture: "Quantum-inspired Neural Networks",
      trainingData: "20M+ financial transactions",
      processingSpeed: "4.5M calculations/second",
      accuracy: "99.2%",
    },
    capabilities: [
      "Risk assessment with 99.2% accuracy using quantum algorithms",
      "Real-time fraud detection through anomaly detection AI",
      "Financial forecasting with advanced time series neural networks",
      "Portfolio optimization using reinforcement learning",
      "Regulatory compliance monitoring with NLP analysis",
      "Market trend prediction through deep learning models",
    ],
  },
  {
    id: "customer-service-neural-hub",
    name: "Customer Service Neural Hub",
    description:
      "Multi-language customer service AI with advanced natural language understanding, emotion recognition, and automated resolution capabilities. Features transformer architecture with specialized training on customer interaction patterns.",
    avatar: "/placeholder.svg?height=80&width=80",
    expertise: [
      "Natural Language Understanding",
      "Emotion Recognition AI",
      "Multi-language Processing",
      "Automated Resolution",
      "Sentiment Analysis",
      "Customer Journey AI",
    ],
    pricing: "$1,599/month",
    featured: false,
    rating: 4.91,
    reviews: 1156,
    price: 159,
    category: "Customer Experience AI",
    neuralSpecs: {
      parameters: "65B",
      architecture: "Transformer + Emotion Recognition",
      trainingData: "25M+ customer interactions",
      processingSpeed: "5.8M responses/second",
      accuracy: "96.8%",
    },
    capabilities: [
      "Multi-language support with 96.8% accuracy across 47 languages",
      "Emotion recognition and sentiment analysis in real-time",
      "Automated issue resolution with 89% success rate",
      "Customer satisfaction prediction using behavioral analysis",
      "Escalation management through priority neural networks",
      "24/7 availability with human-like conversation quality",
    ],
  },
  {
    id: "data-neural-scientist",
    name: "Data Neural Scientist",
    description:
      "Advanced data science AI combining machine learning, statistical analysis, and predictive modeling. Features automated feature engineering, model selection, and insights generation using state-of-the-art neural architectures.",
    avatar: "/placeholder.svg?height=80&width=80",
    expertise: [
      "Machine Learning Automation",
      "Statistical Analysis AI",
      "Predictive Modeling",
      "Feature Engineering",
      "Data Visualization",
      "Insights Generation",
    ],
    pricing: "$2,399/month",
    featured: false,
    rating: 4.95,
    reviews: 378,
    price: 239,
    category: "Data Science AI",
    neuralSpecs: {
      parameters: "110B",
      architecture: "AutoML + Deep Learning",
      trainingData: "50M+ datasets",
      processingSpeed: "6.2M calculations/second",
      accuracy: "98.1%",
    },
    capabilities: [
      "Automated machine learning with 98.1% model accuracy",
      "Real-time data analysis and pattern recognition",
      "Predictive modeling across multiple business domains",
      "Automated feature engineering and selection",
      "Advanced statistical analysis with confidence intervals",
      "Interactive data visualization and dashboard generation",
    ],
  },
]

type Agent = {
  id: string
  name: string
  description: string
  avatar?: string
  expertise?: string[]
  pricing?: string
  featured?: boolean
  rating?: number
  reviews?: number
  price?: number
  status?: string
  expiresAt?: Date
  userId?: string
  category?: string
  neuralSpecs?: {
    parameters: string
    architecture: string
    trainingData: string
    processingSpeed: string
    accuracy: string
  }
  capabilities?: string[]
}

export default function HomePage() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [cartModalOpen, setCartModalOpen] = useState(false)
  const [chatWidgetOpen, setChatWidgetOpen] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [agents, setAgents] = useState<Agent[]>(neuralAgents)
  const { user } = useAuth()
  const { addToCart, deployedAgents, getTotalItems, upgradeAgent } = useCart()

  useEffect(() => {
    // Try to load agents from database, fallback to neural agents data
    dbHelpers
      .getAIAgents()
      .then((data) => {
        if (data && data.length > 0) {
          setAgents(data)
        }
      })
      .catch(() => {
        // Keep neural agents if database fails
        console.log("Using neural agents data")
      })
  }, [])

  const handleAddToCart = (agent: Agent) => {
    const cartItem = {
      id: agent.id,
      name: agent.name,
      description: agent.description,
      price: agent.price || 299,
      category: agent.category || "Neural Network AI",
    }
    addToCart(cartItem)
  }

  const handleAgentClick = (agent: Agent) => {
    setSelectedAgent(agent)
  }

  const handleCartClick = () => {
    setCartModalOpen(true)
  }

  const handleChatClick = () => {
    setChatWidgetOpen(true)
  }

  const getTimeRemaining = (expiresAt: Date) => {
    const now = new Date()
    const diff = expiresAt.getTime() - now.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    if (days > 0) return `${days}d ${hours}h`
    if (hours > 0) return `${hours}h`
    return "Expired"
  }

  // Filter deployed agents for current user only
  const userDeployedAgents = user ? deployedAgents.filter((agent) => agent.user_id === user.id) : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="h-10 w-10 text-purple-400" />
              <div className="absolute inset-0 h-10 w-10 bg-purple-400/20 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Neuralia
              </span>
              <div className="text-xs text-purple-300">Neural Network AI</div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleChatClick}
              className="relative bg-transparent border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Neural Chat
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleCartClick}
              className="relative bg-transparent border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-purple-500">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            {user ? (
              <div className="flex items-center space-x-2 text-purple-300">
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">{user.email}</span>
              </div>
            ) : (
              <Button onClick={() => setAuthModalOpen(true)} size="sm" className="bg-purple-600 hover:bg-purple-700">
                Neural Access
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Cpu className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Advanced Neural Network Architecture</span>
            </div>
          </div>

          <h1 className="text-6xl font-bold text-white mb-6">
            Deploy{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Neural AI Executives
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade neural networks with billions of parameters, trained on millions of executive decisions.
            Each AI agent features advanced transformer architecture, quantum-inspired algorithms, and real-time
            learning capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
              <Network className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">175B+</div>
              <div className="text-sm text-gray-400">Neural Parameters</div>
            </div>
            <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
              <Database className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50M+</div>
              <div className="text-sm text-gray-400">Training Datasets</div>
            </div>
            <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
              <Zap className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">99.2%</div>
              <div className="text-sm text-gray-400">Peak Accuracy</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => !user && setAuthModalOpen(true)}
            >
              <Brain className="mr-2 h-5 w-5" />
              {user ? "Deploy Neural Network" : "Access Neural AI"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-transparent border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Neural Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Deployed Agents Section */}
      {user && userDeployedAgents.length > 0 && (
        <section className="py-12 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Your Neural Executive Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userDeployedAgents.map((agent) => (
                <Card key={agent.id} className="border-purple-500/30 bg-black/60 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src="/placeholder.svg?height=50&width=50"
                          alt={agent.name}
                          className="w-12 h-12 rounded-full border-2 border-purple-500/50"
                        />
                        <div className="absolute inset-0 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-white">{agent.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          {agent.status === "deploying" ? (
                            <Badge
                              variant="secondary"
                              className="bg-orange-500/20 text-orange-300 border-orange-500/30"
                            >
                              <Clock className="w-3 h-3 mr-1" />
                              Neural Deploying
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                              <Zap className="w-3 h-3 mr-1" />
                              Neural Active
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-3">{agent.description}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700" onClick={handleChatClick}>
                        <Brain className="mr-2 h-4 w-4" />
                        Neural Chat
                      </Button>
                      {agent.status === "deploying" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => upgradeAgent(agent.id)}
                          className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                        >
                          <CreditCard className="mr-1 h-3 w-3" />
                          Upgrade
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Neural Agents Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">Neural Executive Network</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced AI neural networks with billions of parameters, each specialized for executive-level decision
              making. Powered by transformer architecture and quantum-inspired algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <Card
                key={agent.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 bg-black/60 border-purple-500/30 backdrop-blur-sm ${
                  agent.featured ? "ring-2 ring-purple-500 relative" : ""
                }`}
                onClick={() => handleAgentClick(agent)}
              >
                {agent.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Neural Elite
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={agent.avatar || "/placeholder.svg"}
                      alt={agent.name}
                      className="w-20 h-20 rounded-full mx-auto border-2 border-purple-500/50"
                    />
                    <div className="absolute inset-0 w-20 h-20 bg-purple-400/20 rounded-full animate-pulse mx-auto"></div>
                  </div>

                  <CardTitle className="text-xl mb-2 text-white">{agent.name}</CardTitle>
                  <Badge variant="outline" className="mb-3 border-purple-500/50 text-purple-300">
                    {agent.category}
                  </Badge>

                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1 text-white">{agent.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400">({agent.reviews} neural tests)</span>
                  </div>

                  <CardDescription className="text-center text-gray-300 leading-relaxed">
                    {agent.description.substring(0, 120)}...
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Neural Specs */}
                  {agent.neuralSpecs && (
                    <div className="mb-4 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-purple-300">Parameters:</span>
                          <div className="font-bold text-white">{agent.neuralSpecs.parameters}</div>
                        </div>
                        <div>
                          <span className="text-purple-300">Accuracy:</span>
                          <div className="font-bold text-green-400">{agent.neuralSpecs.accuracy}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {agent.expertise?.slice(0, 2).map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {agent.expertise?.length > 2 && (
                        <Badge variant="outline" className="text-xs border-purple-500/50 text-purple-400">
                          +{agent.expertise?.length - 2} neural capabilities
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">5 Days Free</div>
                      <div className="text-xs text-gray-400">Then ${agent.price} USDT</div>
                    </div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAddToCart(agent)
                      }}
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Brain className="mr-1 h-3 w-3" />
                      Deploy Neural
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neural Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Neural Architecture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade neural networks with cutting-edge AI technology and quantum-inspired optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-black/40 border border-purple-500/20 rounded-lg p-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">5-Day Neural Trial</h3>
              <p className="text-gray-300">
                Experience full neural network capabilities completely free for 5 days. No limitations.
              </p>
            </div>

            <div className="text-center bg-black/40 border border-purple-500/20 rounded-lg p-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">USDT Neural Upgrade</h3>
              <p className="text-gray-300">
                Unlock unlimited neural processing power with simple USDT payment. No subscriptions.
              </p>
            </div>

            <div className="text-center bg-black/40 border border-purple-500/20 rounded-lg p-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Quantum Security</h3>
              <p className="text-gray-300">
                Military-grade encryption with quantum-resistant security protocols for enterprise data protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USDT Neural Upgrade Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Neural Network Upgrade Protocol</h2>
          <p className="text-gray-300 mb-6">
            Unlock unlimited neural processing power and advanced AI capabilities with USDT payment
          </p>
          <div className="bg-black/60 border border-green-500/30 p-8 rounded-lg max-w-md mx-auto">
            <div className="mb-4">
              <Cpu className="h-12 w-12 text-green-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-2">Neural Upgrade Address (TRC20)</h3>
            </div>
            <div className="font-mono text-sm bg-green-500/10 border border-green-500/30 p-4 rounded break-all text-green-300">
              TQn9Y2khEsLMG73Zyy56JdKHD8rQQzaUvr
            </div>
            <p className="text-sm text-gray-400 mt-4">Send USDT per neural agent for unlimited processing power</p>
            <div className="mt-4 text-xs text-green-400">
              ✓ Instant neural activation ✓ Unlimited parameters ✓ Quantum processing
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      <CartModal open={cartModalOpen} onOpenChange={setCartModalOpen} />
      <AgentDetailsModal
        agent={selectedAgent}
        open={!!selectedAgent}
        onOpenChange={(open) => !open && setSelectedAgent(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Neural Chat Widget */}
      <ChatWidget isOpen={chatWidgetOpen} onClose={() => setChatWidgetOpen(false)} />
    </div>
  )
}
