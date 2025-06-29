"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AuthModal } from "@/components/auth/auth-modal"
import { UserMenu } from "@/components/auth/user-menu"
import { ChatWidget } from "@/components/chat/chat-widget"
import { useAuth } from "@/hooks/use-auth"
import {
  Brain,
  CheckCircle,
  Cog,
  HeadphonesIcon,
  Menu,
  MessageSquare,
  Play,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react"

export default function LandingPage() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showChatWidget, setShowChatWidget] = useState(false)
  const [chatType, setChatType] = useState<"agent" | "system" | "general">("general")
  const [specificAgent, setSpecificAgent] = useState<string | null>(null)
  const [showCustomerService, setShowCustomerService] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, loading } = useAuth()

  // Animated background particles
  useEffect(() => {
    const canvas = document.getElementById("particles") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      dx: number
      dy: number
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleSignIn = () => {
    setShowAuthModal(true)
  }

  const handleChatOpen = (type: "agent" | "system" | "general") => {
    setChatType(type)
    setSpecificAgent(null)
    setShowChatWidget(true)
  }

  const handleSpecificAgentClick = (agentName: string) => {
    setChatType("agent")
    setSpecificAgent(agentName)
    setShowChatWidget(true)
  }

  const handleCustomerServiceChat = () => {
    setShowCustomerService(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <canvas id="particles" className="absolute inset-0 pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">NeuralIA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#agents" className="text-gray-700 hover:text-blue-600 transition-colors">
                AI Agents
              </a>
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors">
                Solutions
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonials
              </a>
            </div>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {loading ? (
                <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              ) : user ? (
                <UserMenu />
              ) : (
                <Button variant="ghost" onClick={handleSignIn}>
                  Sign In
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Features
                </a>
                <a href="#agents" className="text-gray-700 hover:text-blue-600 transition-colors">
                  AI Agents
                </a>
                <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Solutions
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Testimonials
                </a>
                {loading ? (
                  <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                ) : user ? (
                  <UserMenu />
                ) : (
                  <Button variant="ghost" onClick={handleSignIn} className="justify-start">
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Sparkles className="mr-2 h-4 w-4" />
              Revolutionary AI Technology
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Agents
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Deploy intelligent AI agents in 24-48 hours. Get expert guidance, automate workflows, and scale your
              operations with our Neural Fleet templates and custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={handleCustomerServiceChat} className="text-lg px-8 py-4">
                <MessageSquare className="mr-2 h-5 w-5" />
                Talk to Expert
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose NeuralIA?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are designed to integrate seamlessly with your existing workflows and deliver immediate
              value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Lightning Fast Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get your AI agents up and running in 24-48 hours with our Neural Fleet templates. No lengthy
                  development cycles.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Advanced AI Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Powered by cutting-edge machine learning models that understand context, learn from interactions, and
                  improve over time.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Proven ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our clients see 300-500% ROI within 6 months. Reduce costs, increase efficiency, and scale without
                  additional headcount.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured AI Agents Section */}
      <section id="agents" className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured AI Agents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our Neural Fleet templates or build custom agents tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Sales Coach Agent */}
            <Card
              className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              onClick={() => handleSpecificAgentClick("Sales Coach Agent")}
            >
              <div className="absolute -top-3 -right-3">
                <Badge className="bg-green-500 text-white">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  High ROI
                </Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Sales Coach Agent</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Sales Strategy</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Expert sales guidance and deal closing strategies available 24/7. Boost your team's close rates by
                  40%.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                  <span className="mr-2">⚡ 24/7 Available</span>
                  <span>• 24-48hr Deploy</span>
                </div>
                <Button
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSpecificAgentClick("Sales Coach Agent")
                  }}
                  variant="outline"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            {/* HR Advisory Agent */}
            <Card
              className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              onClick={() => handleSpecificAgentClick("HR Advisory Agent")}
            >
              <div className="absolute -top-3 -right-3">
                <Badge className="bg-purple-500 text-white">
                  <Users className="mr-1 h-3 w-3" />
                  Team Favorite
                </Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">HR Advisory Agent</CardTitle>
                <CardDescription className="text-purple-600 font-medium">Human Resources</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Employee relations and policy guidance available 24/7 for managers and HR teams.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                  <span className="mr-2">⚡ 24/7 Available</span>
                  <span>• 24-48hr Deploy</span>
                </div>
                <Button
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSpecificAgentClick("HR Advisory Agent")
                  }}
                  variant="outline"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            {/* Technical Support Agent */}
            <Card
              className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              onClick={() => handleSpecificAgentClick("Technical Support Agent")}
            >
              <div className="absolute -top-3 -right-3">
                <Badge className="bg-orange-500 text-white">
                  <Zap className="mr-1 h-3 w-3" />
                  Instant Help
                </Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Cog className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Technical Support Agent</CardTitle>
                <CardDescription className="text-orange-600 font-medium">Technical Support</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Instant troubleshooting and technical guidance with 95% first-call resolution rate.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                  <span className="mr-2">⚡ 24/7 Available</span>
                  <span>• 24-48hr Deploy</span>
                </div>
                <Button
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSpecificAgentClick("Technical Support Agent")
                  }}
                  variant="outline"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your AI Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick-deploy templates to custom enterprise solutions, we have the perfect AI solution for your
              business needs.
            </p>
          </div>

          <Tabs defaultValue="agents" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="agents">AI Agents</TabsTrigger>
              <TabsTrigger value="systems">AI Systems</TabsTrigger>
              <TabsTrigger value="custom">Custom Solutions</TabsTrigger>
            </TabsList>

            <TabsContent value="agents" className="space-y-6">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Conversational AI Agents</h3>
                    <p className="text-gray-600 mb-4">
                      Deploy expert AI agents that provide 24/7 guidance and coaching to your team. Perfect for sales,
                      HR, customer service, and technical support.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">24/7 Available</Badge>
                      <Badge variant="secondary">Expert Knowledge</Badge>
                      <Badge variant="secondary">Quick Deploy</Badge>
                      <Badge variant="secondary">Scalable</Badge>
                    </div>
                    <Button onClick={() => handleChatOpen("agent")} className="w-full sm:w-auto">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Chat with Expert
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="systems" className="space-y-6">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Cog className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Workflow Systems</h3>
                    <p className="text-gray-600 mb-4">
                      Automate complex workflows with intelligent data processing and decision-making. Perfect for
                      operations, finance, and enterprise processes.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Workflow Automation</Badge>
                      <Badge variant="secondary">Data Processing</Badge>
                      <Badge variant="secondary">Integration Ready</Badge>
                      <Badge variant="secondary">Enterprise Scale</Badge>
                    </div>
                    <Button onClick={() => handleChatOpen("system")} className="w-full sm:w-auto">
                      <Cog className="mr-2 h-4 w-4" />
                      Explore Systems
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="custom" className="space-y-6">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom AI Solutions</h3>
                    <p className="text-gray-600 mb-4">
                      Tailored AI implementations designed specifically for your industry, processes, and unique
                      requirements. Full customization and integration support.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Fully Custom</Badge>
                      <Badge variant="secondary">Industry Specific</Badge>
                      <Badge variant="secondary">Full Integration</Badge>
                      <Badge variant="secondary">Dedicated Support</Badge>
                    </div>
                    <Button onClick={() => handleChatOpen("general")} className="w-full sm:w-auto">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Discuss Custom Solution
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses like yours are transforming their operations with NeuralIA's AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "NeuralIA's Sales Coach Agent increased our close rate by 40% in just 3 months. The 24/7 availability
                means our team always has expert guidance."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Davis</p>
                  <p className="text-sm text-gray-500">VP Sales, TechCorp</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The HR Advisory Agent has been a game-changer for our management team. Policy questions are answered
                instantly, and employee issues are resolved faster."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-semibold">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Martinez</p>
                  <p className="text-sm text-gray-500">HR Director, Global Solutions</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Our Technical Support Agent achieved 95% first-call resolution. Customer satisfaction is up 60% and our
                support team is more efficient than ever."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-semibold">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                  <p className="text-sm text-gray-500">CTO, Innovation Hub</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using NeuralIA's AI solutions. Get started with our Neural Fleet
            templates in just 24-48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              onClick={handleCustomerServiceChat}
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Talk to Expert
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">NeuralIA</span>
              </div>
              <p className="text-gray-400">
                Transforming businesses with intelligent AI agents and automation solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Agents
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Neural Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NeuralIA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Customer Service Chat Bubble */}
      {!showCustomerService && (
        <Button
          onClick={handleCustomerServiceChat}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 z-40 animate-pulse"
          size="icon"
        >
          <HeadphonesIcon className="h-8 w-8" />
        </Button>
      )}

      {/* Modals */}
      {showAuthModal && <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />}
      {showChatWidget && (
        <ChatWidget initialType={chatType} specificAgent={specificAgent} onClose={() => setShowChatWidget(false)} />
      )}
      {showCustomerService && (
        <ChatWidget initialType="agent" onClose={() => setShowCustomerService(false)} isCustomerService={true} />
      )}
    </div>
  )
}
