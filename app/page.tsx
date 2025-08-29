"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AuthModal } from "@/components/auth/auth-modal"
import { ChatWidget } from "@/components/chat/chat-widget"
import {
  Brain,
  Code,
  Zap,
  Shield,
  Clock,
  Star,
  ArrowRight,
  MessageSquare,
  Briefcase,
  TrendingUp,
  CheckCircle,
  Play,
  Target,
  Award,
  Rocket,
  Database,
  Server,
  Layers,
  Bot,
  Wrench,
  Users,
  Factory,
} from "lucide-react"

export default function LandingPage() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [selectedExecutive, setSelectedExecutive] = useState<string | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const developmentServices = [
    {
      id: "custom-ai-systems",
      name: "Custom AI Systems",
      description: "End-to-end AI solutions from concept to production",
      icon: Brain,
      color: "from-blue-500 to-cyan-600",
      technologies: ["Python", "TensorFlow", "OpenAI API"],
      deliverables: ["Custom Models", "API Integration", "Scalable Architecture"],
    },
    {
      id: "ai-agents",
      name: "AI Agents",
      description: "Specialized agents for automation and decision-making",
      icon: Bot,
      color: "from-purple-500 to-indigo-600",
      technologies: ["LangChain", "CrewAI", "Multi-Agent Systems"],
      deliverables: ["Agent Architecture", "Workflow Integration", "Monitoring"],
    },
    {
      id: "ml-infrastructure",
      name: "ML Infrastructure",
      description: "Scalable ML pipelines and deployment systems",
      icon: Server,
      color: "from-green-500 to-emerald-600",
      technologies: ["Docker", "Kubernetes", "AWS/GCP"],
      deliverables: ["ML Pipelines", "Auto-scaling", "Model Versioning"],
    },
    {
      id: "data-engineering",
      name: "Data Engineering",
      description: "Real-time data pipelines and processing systems",
      icon: Database,
      color: "from-orange-500 to-red-600",
      technologies: ["Apache Spark", "PostgreSQL", "Redis"],
      deliverables: ["Data Pipelines", "Real-time Processing", "Analytics"],
    },
  ]

  const aiProducts = [
    {
      name: "Neural Director",
      role: "AI Orchestrator",
      description: "Coordinates multiple AI systems and operations",
      icon: Brain,
      color: "bg-purple-500",
    },
    {
      name: "AI CEO",
      role: "Strategic Executive",
      description: "Strategic decision making and business leadership",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      name: "AI CMO",
      role: "Marketing Executive",
      description: "Marketing strategy and customer engagement",
      icon: TrendingUp,
      color: "bg-green-500",
    },
    {
      name: "AI CTO",
      role: "Technology Executive",
      description: "Technology strategy and innovation leadership",
      icon: Code,
      color: "bg-orange-500",
    },
  ]

  const consultingServices = [
    {
      title: "AI Strategy",
      description: "Technical architecture and implementation roadmap",
      duration: "2-4 weeks",
      deliverables: ["Technical Architecture", "Implementation Plan", "Technology Stack"],
      icon: <Target className="h-8 w-8" />,
      color: "text-blue-600",
    },
    {
      title: "Custom Development",
      description: "Full-stack AI solution development to production",
      duration: "3-6 months",
      deliverables: ["Custom AI Models", "API Development", "Production Deployment"],
      icon: <Code className="h-8 w-8" />,
      color: "text-green-600",
    },
    {
      title: "Infrastructure Setup",
      description: "Scalable ML infrastructure and monitoring systems",
      duration: "1-2 months",
      deliverables: ["ML Infrastructure", "CI/CD Pipelines", "Auto-scaling Setup"],
      icon: <Server className="h-8 w-8" />,
      color: "text-purple-600",
    },
  ]

  const clientTestimonials = [
    {
      name: "Alex Chen",
      company: "TechFlow",
      role: "CTO",
      content: "Custom recommendation system increased user engagement by 300%. Exceptional code quality.",
      rating: 5,
      industry: "Technology",
      result: "300% engagement",
      avatar: "AC",
      project: "Recommendation Engine",
    },
    {
      name: "Maria Rodriguez",
      company: "DataDriven",
      role: "Head of Engineering",
      content: "Multi-agent logistics system processes millions of decisions daily. Delivered beyond expectations.",
      rating: 5,
      industry: "Logistics",
      result: "10M+ decisions/day",
      avatar: "MR",
      project: "Multi-Agent System",
    },
    {
      name: "Dr. James Wilson",
      company: "MedTech",
      role: "Chief Data Officer",
      content: "AI diagnostic system revolutionized our workflow. 95% accuracy with healthcare compliance.",
      rating: 5,
      industry: "Healthcare",
      result: "95% accuracy",
      avatar: "JW",
      project: "AI Diagnostics",
    },
  ]

  const handleGetStarted = () => {
    setShowAuthModal(true)
  }

  const handleTryDemo = () => {
    setShowChat(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Factory className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neuralia
              </span>
              <Badge variant="outline" className="hidden sm:flex">
                AI Dev Factory
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleTryDemo} className="hidden sm:flex">
                <MessageSquare className="h-4 w-4 mr-2" />
                Try Demo
              </Button>
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
              >
                Start Project
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="relative py-20 px-4 border-b-4 border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="relative container mx-auto max-w-6xl text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800">
            <Factory className="h-3 w-3 mr-1" />
            AI Development Factory
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Build
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
              Custom AI Solutions
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From AI agents to full-stack applications. Your dedicated AI development team that turns ideas into
            production-ready solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-lg px-8 py-4"
            >
              <Code className="mr-2 h-5 w-5" />
              Start AI Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleTryDemo}
              className="text-lg px-8 py-4 border-2 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Try AI Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <p className="text-sm text-gray-600">AI Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
              <p className="text-sm text-gray-600">Technologies</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">2-8</div>
              <p className="text-sm text-gray-600">Weeks to MVP</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">100%</div>
              <p className="text-sm text-gray-600">Production Ready</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Layers className="h-5 w-5 mr-2 text-blue-600" />
              <h3 className="font-bold">Tech Stack</h3>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {["Python", "TensorFlow", "Docker", "AWS", "PostgreSQL", "React"].map((tech, index) => (
                <div key={index} className="text-center p-2 bg-gray-50 rounded text-sm font-medium">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Development Services */}
      <section className="py-20 bg-white border-b-4 border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Custom AI Development</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We build scalable AI solutions tailored to your business needs and technical requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {developmentServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="border-2 hover:border-blue-500 transition-all hover:shadow-lg group">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Deliverables:</h4>
                        <div className="space-y-1">
                          {service.deliverables.map((deliverable, delIndex) => (
                            <div key={delIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full" onClick={handleGetStarted}>
                        <Code className="mr-2 h-4 w-4" />
                        Start Development
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
            >
              <Wrench className="mr-2 h-5 w-5" />
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: AI Products */}
      <section className="py-20 bg-gray-50 border-b-4 border-blue-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pre-Built AI Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready-to-deploy AI agents that you can use immediately or customize for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiProducts.map((product, index) => {
              const IconComponent = product.icon
              return (
                <Card key={index} className="border-2 hover:border-blue-500 transition-all hover:shadow-lg text-center">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 ${product.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="outline" className="mx-auto text-xs">
                      {product.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                      onClick={() => {
                        setSelectedExecutive(product.name.toLowerCase().replace(" ", "-"))
                        setShowChat(true)
                      }}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Try Demo
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
            >
              <Bot className="mr-2 h-5 w-5" />
              Customize AI Agents
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: Services */}
      <section className="py-20 bg-white border-b-4 border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Development Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From strategy to deployment, comprehensive AI development services for your project's success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 transition-all hover:shadow-lg h-full">
                <CardHeader className="text-center">
                  <div className={`${service.color} mb-4`}>{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Deliverables:</h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-sm text-gray-600">
                            <ArrowRight className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Timeline:</span>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {service.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-90"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Start Development Project
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: Success Stories */}
      <section className="py-20 bg-gray-50 border-b-4 border-blue-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Custom AI solutions that drive real business results and technical innovation.
            </p>
          </div>

          {/* Featured Project */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "{clientTestimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {clientTestimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <p className="font-semibold">{clientTestimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-gray-600">
                    {clientTestimonials[currentTestimonial].role} at {clientTestimonials[currentTestimonial].company}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">
                    {clientTestimonials[currentTestimonial].result}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {clientTestimonials[currentTestimonial].project}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* All Projects */}
          <div className="grid md:grid-cols-3 gap-6">
            {clientTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`border-2 transition-all hover:shadow-lg ${index === currentTestimonial ? "border-blue-500 bg-blue-50" : "hover:border-blue-300"}`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <p className="text-xs text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-base font-bold text-green-600">{testimonial.result}</div>
                      <div className="text-xs text-green-700">{testimonial.project}</div>
                    </div>
                    <blockquote className="text-gray-700 italic text-sm">"{testimonial.content}"</blockquote>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.industry}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="h-6 w-6 text-purple-600" />
              <div>
                <h3 className="font-semibold text-purple-900">50+ AI Projects Delivered</h3>
                <p className="text-purple-800 text-sm">Startups to enterprise, all industries</p>
              </div>
            </div>
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your AI Solution?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Your dedicated AI development factory. Let's turn your AI ideas into reality.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Code className="h-10 w-10 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">Custom Development</h3>
              <p className="text-blue-200 text-sm">Tailored AI solutions for your needs</p>
            </div>
            <div className="text-center">
              <Shield className="h-10 w-10 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">Production Ready</h3>
              <p className="text-blue-200 text-sm">Scalable, secure, enterprise-grade</p>
            </div>
            <div className="text-center">
              <Zap className="h-10 w-10 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-blue-200 text-sm">MVP in 2-8 weeks</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-4"
              onClick={handleGetStarted}
            >
              <Code className="mr-2 h-5 w-5" />
              Start AI Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 bg-transparent"
              onClick={handleTryDemo}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Try AI Agents
            </Button>
          </div>

          <div className="border-t border-blue-400 pt-8">
            <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
              <div>
                <h4 className="font-semibold mb-3 text-blue-100">Contact</h4>
                <div className="space-y-1 text-blue-200 text-sm">
                  <p>dev@neuralia.ai</p>
                  <p>+1 (555) 123-4567</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-100">Services</h4>
                <div className="space-y-1 text-blue-200 text-sm">
                  <p>Custom AI Systems</p>
                  <p>ML Infrastructure</p>
                  <p>AI Agents & Data Engineering</p>
                </div>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-blue-400">
              <p className="text-blue-200 text-sm">&copy; 2024 Neuralia AI Development Factory. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <ChatWidget isOpen={showChat} onClose={() => setShowChat(false)} selectedExecutive={selectedExecutive} />
    </div>
  )
}
