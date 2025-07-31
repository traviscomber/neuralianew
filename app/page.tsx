"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AuthButton } from "@/components/auth/auth-button"
import { ChatWidget } from "@/components/chat/chat-widget"
import { CartModal } from "@/components/cart/cart-modal"
import { FAQSection } from "@/components/landing/faq-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { TeamSection } from "@/components/landing/team-section"
import { Footer } from "@/components/landing/footer"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import { useRouter } from "next/navigation"
import {
  Brain,
  Zap,
  TrendingUp,
  Shield,
  MessageCircle,
  ShoppingCart,
  Rocket,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react"

export default function HomePage() {
  const { user } = useAuth()
  const { addToCart, cartItems } = useCart()
  const router = useRouter()
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [specificAgent, setSpecificAgent] = useState<string | null>(null)

  const handleGetStarted = () => {
    if (user) {
      router.push("/dashboard")
    } else {
      // Scroll to agents section or open auth modal
      document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleTryDemo = (agentType: string) => {
    setSpecificAgent(agentType)
    setIsChatOpen(true)
  }

  const handleAddToCart = (agent: any) => {
    addToCart({
      id: agent.id,
      name: agent.name,
      price: agent.price,
      type: "agent",
    })
  }

  const agents = [
    {
      id: "ceo-neural-orchestrator",
      name: "CEO Neural Orchestrator",
      description: "Strategic leadership and executive decision-making with quantum-inspired algorithms",
      icon: "🧠",
      price: 299,
      features: ["Strategic Planning", "Executive Decisions", "Team Coordination", "Vision Setting"],
      performance: "97% accuracy in strategic decisions",
      color: "bg-blue-600",
      category: "Leadership",
    },
    {
      id: "cmo-growth-engine",
      name: "CMO Growth Engine",
      description: "Advanced marketing automation and growth hacking with 175B parameter neural network",
      icon: "📈",
      price: 249,
      features: ["Growth Hacking", "Marketing Automation", "Customer Acquisition", "Brand Strategy"],
      performance: "340% average ROI increase",
      color: "bg-green-600",
      category: "Marketing",
    },
    {
      id: "cto-innovation-architect",
      name: "CTO Innovation Architect",
      description: "Technical leadership and innovation strategy with cutting-edge AI capabilities",
      icon: "⚡",
      price: 279,
      features: ["Technical Strategy", "Innovation Planning", "Architecture Design", "Team Leadership"],
      performance: "85% faster development cycles",
      color: "bg-purple-600",
      category: "Technology",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neuralia
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#agents" className="text-gray-600 hover:text-blue-600 transition-colors">
                Agents
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                FAQ
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              {cartItems.length > 0 && (
                <Button variant="outline" size="sm" onClick={() => setIsCartOpen(true)} className="relative">
                  <ShoppingCart className="h-4 w-4" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </Badge>
                </Button>
              )}
              <AuthButton />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              <Zap className="mr-1 h-3 w-3" />
              Powered by 175B Parameter Neural Networks
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Deploy Your AI Executive Team
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Revolutionary neural AI executives that think, strategize, and execute like top-tier C-suite leaders.
              Start with a <span className="font-semibold text-blue-600">5-day free trial</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
              >
                {user ? "Go to Dashboard" : "Start Free Trial"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                onClick={() => handleTryDemo("ceo-neural-orchestrator")}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
              >
                <Play className="mr-2 h-5 w-5" />
                Try Neural Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                847 Neural Tests Completed
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                97% Decision Accuracy
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                500+ Enterprise Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Neural AI Executives?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our quantum-inspired algorithms deliver executive-level intelligence with unprecedented accuracy and
              strategic thinking capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Neural Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">175B parameter neural networks trained on executive decision patterns</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">340% average ROI increase and 97% strategic decision accuracy</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">SOC 2, ISO 27001 compliant with end-to-end encryption</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Instant Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Deploy in seconds with 5-day free trial, no setup required</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Your AI Executive Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each neural executive specializes in different aspects of business leadership, powered by quantum-inspired
              algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <Card
                key={agent.id}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${agent.color}`}></div>

                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 ${agent.color} rounded-xl flex items-center justify-center text-white text-2xl`}
                    >
                      {agent.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{agent.name}</CardTitle>
                      <CardDescription className="text-green-600 font-medium">{agent.performance}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600">{agent.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Neural Capabilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-blue-600">
                      ${agent.price} <span className="text-sm font-normal text-gray-500">USDT</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={() => handleTryDemo(agent.id)} variant="outline" size="sm">
                        <MessageCircle className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button
                        onClick={() => handleAddToCart(agent)}
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-purple-600"
                      >
                        <ShoppingCart className="mr-1 h-3 w-3" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => setIsCartOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              View Cart ({cartItems.length}) & Deploy Agents
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-blue-100">Cost Savings Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">97%</div>
              <div className="text-blue-100">Decision Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Team */}
      <TeamSection />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <Footer />

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

      {/* Cart Modal */}
      {isCartOpen && <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
    </div>
  )
}
