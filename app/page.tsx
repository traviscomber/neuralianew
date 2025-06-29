"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bot,
  Brain,
  Zap,
  Shield,
  MessageSquare,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Clock,
  Award,
  Globe,
  Headphones,
  ShoppingCart,
  UserCheck,
  Database,
  Settings,
  Play,
  Menu,
  X,
  ChevronRight,
} from "lucide-react"
import { AuthModal } from "@/components/auth/auth-modal"
import { UserMenu } from "@/components/auth/user-menu"
import { ChatWidget } from "@/components/chat/chat-widget"
import { useAuth } from "@/hooks/use-auth"

export default function LandingPage() {
  const { user, loading } = useAuth()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatType, setChatType] = useState<"agent" | "system" | "general">("general")

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

  const handleChatOpen = (type: "agent" | "system" | "general") => {
    setChatType(type)
    setChatOpen(true)
  }

  const handleGetStarted = () => {
    if (user) {
      // User is logged in, scroll to solutions
      document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })
    } else {
      // User not logged in, show auth modal
      setIsAuthModalOpen(true)
    }
  }

  const solutions = [
    {
      type: "agent" as const,
      title: "AI Agents",
      description: "Intelligent conversational agents for customer service, sales, and support",
      icon: Bot,
      gradient: "from-blue-500 to-cyan-500",
      features: ["24/7 Customer Support", "Lead Qualification", "Appointment Scheduling", "Multi-language Support"],
      metrics: ["95% Customer Satisfaction", "60% Cost Reduction", "3x Faster Response Time"],
      deployTime: "24-48 hours",
    },
    {
      type: "system" as const,
      title: "AI Systems",
      description: "Complete AI-powered business intelligence and automation systems",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      features: ["Data Integration", "Predictive Analytics", "Automated Reporting", "Real-time Dashboards"],
      metrics: ["40% Efficiency Increase", "85% Accuracy Rate", "50% Time Savings"],
      deployTime: "24-72 hours",
    },
    {
      type: "general" as const,
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business needs",
      icon: Sparkles,
      gradient: "from-emerald-500 to-teal-500",
      features: ["Custom Development", "Industry-Specific", "Scalable Architecture", "Ongoing Support"],
      metrics: ["100% Customized", "Enterprise-Grade", "24/7 Monitoring"],
      deployTime: "1-2 weeks",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "NeuralIA transformed our customer service. Our response time improved by 300% and customer satisfaction is at an all-time high.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Operations Director, RetailCorp",
      content:
        "The AI system they built for us processes thousands of orders daily with 99.9% accuracy. It's been a game-changer for our business.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager, GrowthCo",
      content:
        "Our AI agent handles lead qualification 24/7. We've seen a 250% increase in qualified leads since implementation.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
  ]

  const agentTypes = [
    { icon: Headphones, name: "Customer Service", description: "Handle inquiries, complaints, and support tickets" },
    { icon: ShoppingCart, name: "Sales Assistant", description: "Qualify leads, schedule demos, and close deals" },
    { icon: UserCheck, name: "HR Support", description: "Manage recruitment, onboarding, and employee queries" },
    { icon: Settings, name: "Operations", description: "Automate workflows and process management" },
    { icon: Target, name: "Marketing", description: "Lead generation and customer engagement" },
    { icon: Database, name: "Data Analysis", description: "Process and analyze business data" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <canvas id="particles" className="absolute inset-0 pointer-events-none opacity-30" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">NeuralIA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="hover:text-blue-400 transition-colors">
                Solutions
              </a>
              <a href="#features" className="hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {loading ? (
                <div className="w-8 h-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
              ) : user ? (
                <UserMenu />
              ) : (
                <Button onClick={() => setIsAuthModalOpen(true)} className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
              <div className="flex flex-col space-y-4 mt-4">
                <a href="#solutions" className="hover:text-blue-400 transition-colors">
                  Solutions
                </a>
                <a href="#features" className="hover:text-blue-400 transition-colors">
                  Features
                </a>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors">
                  Testimonials
                </a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
                {!user && (
                  <Button onClick={() => setIsAuthModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 w-full">
                    Get Started
                  </Button>
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">🚀 Advanced AI Solutions</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Transform Your Business with AI
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Deploy intelligent AI agents and systems in 24-48 hours. Automate customer service, boost sales, and
              streamline operations with cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-3"
                onClick={handleGetStarted}
              >
                Start Building AI <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-3 bg-transparent"
                onClick={() => handleChatOpen("general")}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Solutions That Deliver Results</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from our proven AI solutions or get a custom system built for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">{solution.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Performance:</h4>
                    <div className="space-y-2">
                      {solution.metrics.map((metric, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-slate-700 text-slate-200 mr-2 mb-2">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="flex items-center text-slate-300">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{solution.deployTime}</span>
                    </div>
                    <Button
                      onClick={() => handleChatOpen(solution.type)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      size="sm"
                    >
                      Ask Expert
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured AI Agents Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured AI Agents</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialized AI agents ready to transform different areas of your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentTypes.map((agent, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300 group cursor-pointer"
                onClick={() => handleChatOpen("agent")}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <agent.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">{agent.name}</h3>
                      <p className="text-slate-300 text-sm">{agent.description}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">See AI in Action</h2>
            <p className="text-xl text-slate-300 mb-12">Watch how our AI solutions transform businesses in real-time</p>

            <div
              className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 group cursor-pointer"
              onClick={() => handleChatOpen("general")}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-semibold text-white mb-2">AI Customer Service Demo</h3>
                <p className="text-slate-300">
                  See how our AI handles complex customer inquiries with human-like intelligence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration Process Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple 3-Step Process</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From consultation to deployment, we make AI implementation effortless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We analyze your business needs and design the perfect AI solution",
                icon: MessageSquare,
                color: "from-blue-500 to-cyan-500",
              },
              {
                step: "02",
                title: "Development",
                description: "Our experts build and train your custom AI system with your data",
                icon: Settings,
                color: "from-purple-500 to-pink-500",
              },
              {
                step: "03",
                title: "Deployment",
                description: "Launch your AI solution and start seeing results within 24-48 hours",
                icon: Zap,
                color: "from-emerald-500 to-teal-500",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <process.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-600 mb-4">{process.step}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{process.title}</h3>
                <p className="text-slate-300 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="testimonials" className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join hundreds of companies already transforming their business with our AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "AI Agents Deployed" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24-48h", label: "Average Deployment" },
              { number: "95%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-12">
              Join the AI revolution today. Get your custom AI solution deployed in 24-48 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-3"
                onClick={handleGetStarted}
              >
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-3 bg-transparent"
                onClick={() => handleChatOpen("general")}
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Talk to AI Expert
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Enterprise Security
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                99.9% Uptime SLA
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                24/7 Global Support
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-900/50">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">NeuralIA</span>
                </div>
                <p className="text-slate-400 mb-4">
                  Advanced AI solutions for modern businesses. Transform your operations with intelligent automation.
                </p>
                <div className="flex space-x-4">
                  <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                    Twitter
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4">Solutions</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <button
                      onClick={() => handleChatOpen("agent")}
                      className="hover:text-white transition-colors text-left"
                    >
                      AI Agents
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleChatOpen("system")}
                      className="hover:text-white transition-colors text-left"
                    >
                      AI Systems
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleChatOpen("general")}
                      className="hover:text-white transition-colors text-left"
                    >
                      Custom Development
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleChatOpen("general")}
                      className="hover:text-white transition-colors text-left"
                    >
                      Integration Services
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
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
                <h3 className="font-semibold text-white mb-4">Support</h3>
                <ul className="space-y-2 text-slate-400">
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
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
              <p>&copy; 2024 NeuralIA. All rights reserved. Built with advanced AI technology.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Auth Modal */}
      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />

      {/* Chat Widget */}
      <ChatWidget
        open={chatOpen}
        onOpenChange={setChatOpen}
        solutionType={chatType}
        onSolutionTypeChange={setChatType}
      />
    </div>
  )
}
