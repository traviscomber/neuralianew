"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Zap,
  MessageSquare,
  Bot,
  Cog,
  BarChart3,
  HeadphonesIcon,
} from "lucide-react"
import { AuthModal } from "@/components/auth/auth-modal"
import { UserMenu } from "@/components/auth/user-menu"
import { useAuth } from "@/hooks/use-auth"
import { ChatWidget } from "@/components/chat/chat-widget"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isCustomerServiceOpen, setIsCustomerServiceOpen] = useState(false)
  const [chatType, setChatType] = useState<"agent" | "system" | "general">("general")
  const [specificAgent, setSpecificAgent] = useState<string | null>(null)
  const { user, loading } = useAuth()
  const solutionsRef = useRef<HTMLElement>(null)

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

    // Create particles
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
    setIsAuthModalOpen(true)
  }

  const handleTalkToExpert = () => {
    setChatType("general")
    setSpecificAgent(null)
    setIsChatOpen(true)
  }

  const handleCustomerServiceChat = () => {
    setIsCustomerServiceOpen(true)
  }

  const handleSolutionClick = (type: "agent" | "system" | "general") => {
    setChatType(type)
    setSpecificAgent(null)
    setIsChatOpen(true)
  }

  const handleAgentClick = (agentType: string) => {
    setChatType("agent")
    setSpecificAgent(agentType)
    setIsChatOpen(true)
  }

  const scrollToSolutions = () => {
    solutionsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <canvas id="particles" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <Bot className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">NeuralIA</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#solutions"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Solutions
                  </a>
                  <a
                    href="#demo"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Demo
                  </a>
                  <a
                    href="#testimonials"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Testimonials
                  </a>
                </div>
              </div>

              {/* Desktop Auth */}
              <div className="hidden md:flex items-center space-x-4">
                {loading ? (
                  <div className="w-8 h-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                ) : user ? (
                  <UserMenu user={user} />
                ) : (
                  <Button onClick={handleSignIn} variant="outline">
                    Sign In
                  </Button>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col space-y-4 mt-4">
                      <a
                        href="#solutions"
                        className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Solutions
                      </a>
                      <a
                        href="#demo"
                        className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Demo
                      </a>
                      <a
                        href="#testimonials"
                        className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Testimonials
                      </a>
                      <div className="border-t pt-4">
                        {loading ? (
                          <div className="w-8 h-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                        ) : user ? (
                          <UserMenu user={user} />
                        ) : (
                          <Button onClick={handleSignIn} className="w-full">
                            Sign In
                          </Button>
                        )}
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                🚀 AI-Powered Business Solutions
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-blue-600 block">Neural AI Agents</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Deploy intelligent AI agents that work 24/7 to automate your workflows, enhance customer service, and
                drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleTalkToExpert} className="text-lg px-8 py-3">
                  Talk to Expert
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section id="demo" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">See NeuralIA in Action</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch how our AI agents transform business operations in real-time
              </p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Play className="mr-2 h-6 w-6" />
                  Play Demo Video
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured AI Agents Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                🤖 Featured AI Agents
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready-to-Deploy AI Specialists</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our library of pre-trained AI agents, each specialized for specific business functions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Sales Coach Agent */}
              <Card
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200"
                onClick={() => handleAgentClick("sales-coach")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Sales Coach Agent</h3>
                      <Badge variant="secondary" className="text-xs">
                        Sales Expert
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    AI-powered sales coaching that improves close rates by 40% and shortens sales cycles by 25%.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Deal strategy optimization
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Objection handling scripts
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Performance analytics
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-blue-700 transition-colors">
                    Chat Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* HR Advisory Agent */}
              <Card
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200"
                onClick={() => handleAgentClick("hr-advisory")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">HR Advisory Agent</h3>
                      <Badge variant="secondary" className="text-xs">
                        HR Expert
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    24/7 HR support that reduces escalations by 60% and improves employee satisfaction by 45%.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Policy guidance & compliance
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Employee relations support
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Performance management
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-blue-700 transition-colors">
                    Chat Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Technical Support Agent */}
              <Card
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200"
                onClick={() => handleAgentClick("technical-support")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Cog className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Technical Support Agent</h3>
                      <Badge variant="secondary" className="text-xs">
                        Tech Expert
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Advanced technical support with 95% first-call resolution and 70% faster resolution times.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      System troubleshooting
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Integration support
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Documentation & guides
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-blue-700 transition-colors">
                    Chat Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Configuration Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple 3-Step Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get your AI agents up and running in minutes, not months
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Choose Your Agent</h3>
                <p className="text-gray-600">
                  Select from our library of pre-trained AI agents or request a custom solution
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Configure & Train</h3>
                <p className="text-gray-600">
                  Our team customizes the agent with your data, processes, and brand voice
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Deploy & Scale</h3>
                <p className="text-gray-600">Launch your AI agent and watch it transform your business operations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section ref={solutionsRef} id="solutions" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                🎯 Best AI Solutions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your AI Solution</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From conversational agents to complex automation systems, we have the perfect AI solution for your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Agent Mode */}
              <Card
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-green-200 bg-green-50/50"
                onClick={() => handleSolutionClick("agent")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Bot className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Agent Mode</h3>
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                        Conversational AI
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Create expert AI coaches and advisors that provide personalized guidance and support to your team
                    and customers.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Sales Coach Templates
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      HR Advisory Agents
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Customer Success Coaches
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Technical Support Experts
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-green-700 bg-green-600 transition-colors">
                    Start Agent Chat
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* System Mode */}
              <Card
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-purple-200 bg-purple-50/50"
                onClick={() => handleSolutionClick("system")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Cog className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">System Mode</h3>
                      <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                        Workflow Automation
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Deploy intelligent automation systems that handle complex workflows, data processing, and business
                    operations.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Process Automation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Data Integration
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Smart Workflows
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Custom Integrations
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-purple-700 bg-purple-600 transition-colors">
                    Explore Systems
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* General Mode */}
              <Card
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-blue-200 bg-blue-50/50"
                onClick={() => handleSolutionClick("general")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">General Mode</h3>
                      <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                        Custom Solutions
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Get a custom AI solution tailored to your specific business needs with our Neural Fleet templates
                    and rapid deployment.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Neural Fleet Templates
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      24-48hr Deployment
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Custom Training
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Full Support
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-blue-700 transition-colors">
                    Get Custom Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of companies that have transformed their operations with NeuralIA
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Active Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">AI Agent Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">48hr</div>
                <div className="text-gray-600">Average Deployment</div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "NeuralIA's sales coach agent increased our close rate by 40% in just 3 months. The ROI has been
                    incredible."
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">John Davis</div>
                      <div className="text-sm text-gray-600">VP Sales, TechCorp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The HR advisory agent has transformed our employee support. 60% reduction in escalations and
                    happier staff."
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Miller</div>
                      <div className="text-sm text-gray-600">CHRO, InnovateCo</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Our technical support agent achieves 95% first-call resolution. Customer satisfaction has never
                    been higher."
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">Mike Johnson</div>
                      <div className="text-sm text-gray-600">CTO, DataFlow</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the AI revolution and deploy your first intelligent agent in 24-48 hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleTalkToExpert}
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                Talk to Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Bot className="h-8 w-8 text-blue-400" />
                  <span className="ml-2 text-xl font-bold">NeuralIA</span>
                </div>
                <p className="text-gray-400">Transforming businesses with intelligent AI agents that work 24/7.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Agent Mode
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      System Mode
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
                <h3 className="text-lg font-semibold mb-4">Company</h3>
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
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
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
                      Status
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
      </div>

      {/* Customer Service Chat Bubble */}
      {!isCustomerServiceOpen && (
        <Button
          onClick={handleCustomerServiceChat}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 z-40 animate-pulse"
          size="icon"
        >
          <HeadphonesIcon className="h-8 w-8 text-white" />
        </Button>
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* Chat Widget */}
      <ChatWidget
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        chatType={chatType}
        specificAgent={specificAgent}
      />

      {/* Customer Service Chat Widget */}
      <ChatWidget
        isOpen={isCustomerServiceOpen}
        onClose={() => setIsCustomerServiceOpen(false)}
        chatType="agent"
        specificAgent="customer-service"
      />
    </div>
  )
}
