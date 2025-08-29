"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AuthModal } from "@/components/auth/auth-modal"
import { ChatWidget } from "@/components/chat/chat-widget"
import {
  Brain,
  Users,
  Zap,
  Shield,
  Globe,
  Clock,
  Star,
  ArrowRight,
  MessageSquare,
  Code,
  Briefcase,
  TrendingUp,
} from "lucide-react"

export default function LandingPage() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [selectedExecutive, setSelectedExecutive] = useState<string | null>(null)

  const executives = [
    {
      id: "neural-director",
      name: "Neural Director",
      role: "AI Orchestrator",
      description: "Coordinates all AI executives and optimizes business operations",
      icon: Brain,
      color: "bg-purple-500",
      capabilities: ["Team Coordination", "Strategic Planning", "Performance Analytics"],
    },
    {
      id: "ai-ceo",
      name: "AI CEO",
      role: "Chief Executive",
      description: "Strategic leadership and high-level decision making",
      icon: Users,
      color: "bg-blue-500",
      capabilities: ["Strategic Vision", "Leadership", "Decision Making"],
    },
    {
      id: "ai-cmo",
      name: "AI CMO",
      role: "Chief Marketing Officer",
      description: "Marketing strategy, campaigns, and customer engagement",
      icon: TrendingUp,
      color: "bg-green-500",
      capabilities: ["Marketing Strategy", "Brand Management", "Customer Analytics"],
    },
    {
      id: "ai-cto",
      name: "AI CTO",
      role: "Chief Technology Officer",
      description: "Technology strategy, development, and innovation",
      icon: Code,
      color: "bg-orange-500",
      capabilities: ["Tech Strategy", "Innovation", "System Architecture"],
    },
  ]

  const consultingServices = [
    {
      title: "Digital Transformation",
      description: "Complete AI integration strategy for your business operations",
      duration: "3-6 months",
      deliverables: ["AI Strategy Roadmap", "Implementation Plan", "Training Program"],
    },
    {
      title: "AI Strategy Development",
      description: "Custom AI executive deployment and optimization",
      duration: "1-3 months",
      deliverables: ["Executive Configuration", "Workflow Integration", "Performance Metrics"],
    },
    {
      title: "Executive AI Optimization",
      description: "Enhance existing AI systems with executive-level intelligence",
      duration: "2-4 months",
      deliverables: ["System Audit", "Optimization Plan", "Enhanced Capabilities"],
    },
  ]

  const clientTestimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      role: "CEO",
      content:
        "Our AI executives have transformed how we make strategic decisions. The Neural Director coordinates everything seamlessly.",
      rating: 5,
      industry: "Technology",
    },
    {
      name: "Michael Rodriguez",
      company: "Global Manufacturing Inc",
      role: "Operations Director",
      content:
        "The AI CMO revolutionized our marketing approach. We've seen significant improvements in customer engagement.",
      rating: 5,
      industry: "Manufacturing",
    },
    {
      name: "Emily Watson",
      company: "FinanceForward",
      role: "CTO",
      content:
        "Having an AI CTO that works 24/7 has accelerated our development cycles and improved our technology strategy.",
      rating: 5,
      industry: "Finance",
    },
  ]

  const handleExecutiveDemo = (executiveId: string) => {
    setSelectedExecutive(executiveId)
    setShowChat(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Section 1: Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Deploy Your{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                AI Executive Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Neural Director, CEO, CMO, and CTO working together 24/7 for your business success
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <p className="text-sm text-blue-200">Always Available</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Brain className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">4</span>
                </div>
                <p className="text-sm text-blue-200">AI Executives</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">5</span>
                </div>
                <p className="text-sm text-blue-200">Days Free Trial</p>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span className="font-semibold">Live User Feedback</span>
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                    J
                  </div>
                  <div>
                    <p className="text-sm">"The Neural Director coordinated our entire product launch flawlessly!"</p>
                    <span className="text-xs text-blue-200">- John, Startup Founder</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">
                    M
                  </div>
                  <div>
                    <p className="text-sm">"AI CMO increased our conversion rates by implementing smart campaigns."</p>
                    <span className="text-xs text-blue-200">- Maria, Marketing Director</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
                onClick={() => setShowAuthModal(true)}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 bg-transparent"
                onClick={() => setShowChat(true)}
              >
                Try AI Chat Demo
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Want Dev? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Want Dev?</h2>
            <p className="text-xl text-gray-600 mb-12">
              We build custom AI executives tailored to your specific business needs
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <Code className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
                  <CardTitle>Custom AI Executives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Develop specialized AI executives for your industry and business model
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-500 transition-colors">
                <CardHeader>
                  <Globe className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                  <CardTitle>Enterprise Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Seamless integration with your existing systems and workflows</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-500 transition-colors">
                <CardHeader>
                  <Shield className="h-12 w-12 text-purple-600 mb-4 mx-auto" />
                  <CardTitle>Global Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Deploy your AI executives globally with enterprise-grade security</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Schedule Development Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Products</h2>
              <p className="text-xl text-gray-600">
                Meet your AI executive team - each specialized for different aspects of your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {executives.map((executive) => {
                const IconComponent = executive.icon
                return (
                  <Card key={executive.id} className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
                    <CardHeader className="text-center">
                      <div
                        className={`w-16 h-16 ${executive.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{executive.name}</CardTitle>
                      <CardDescription className="text-sm font-medium text-blue-600">{executive.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm">{executive.description}</p>
                      <div className="space-y-2 mb-4">
                        {executive.capabilities.map((capability, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {capability}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        className="w-full bg-transparent"
                        variant="outline"
                        onClick={() => handleExecutiveDemo(executive.id)}
                      >
                        Try Demo
                        <MessageSquare className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                All executives work together as a coordinated team under the Neural Director
              </p>
              <Button size="lg" onClick={() => setShowAuthModal(true)}>
                Deploy Your Team Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Consultancies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Consultancies</h2>
              <p className="text-xl text-gray-600">
                Professional services to maximize your AI executive implementation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <Card key={index} className="border-2 hover:border-blue-500 transition-colors">
                  <CardHeader>
                    <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <span className="font-semibold text-gray-900">Duration:</span>
                        <p className="text-gray-600">{service.duration}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Deliverables:</span>
                        <ul className="list-disc list-inside text-gray-600 mt-2">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-sm">
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Clients */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Clients</h2>
              <p className="text-xl text-gray-600">
                See how businesses across industries are succeeding with AI executives
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {clientTestimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 hover:border-blue-500 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>
                      {testimonial.role} at {testimonial.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                    <Badge variant="outline">{testimonial.industry}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">Join hundreds of companies already using AI executives</p>
              <Button size="lg" onClick={() => setShowAuthModal(true)}>
                Start Your Success Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Footer/Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Deploy your AI executive team today and experience the future of business management
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Global</h3>
                <p className="text-blue-200">Deploy anywhere in the world</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Secure</h3>
                <p className="text-blue-200">Enterprise-grade security</p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-lg font-semibold mb-2">Instant</h3>
                <p className="text-blue-200">Deploy in minutes, not months</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
                onClick={() => setShowAuthModal(true)}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 bg-transparent"
                onClick={() => setShowChat(true)}
              >
                Talk to Neural Director
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="border-t border-blue-400 pt-8">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                  <p className="text-blue-200">support@neuralia.ai</p>
                  <p className="text-blue-200">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">AI Executives</h4>
                  <p className="text-blue-200">Neural Director • AI CEO • AI CMO • AI CTO</p>
                </div>
              </div>
              <div className="text-center mt-8 pt-8 border-t border-blue-400">
                <p className="text-blue-200">&copy; 2024 Neuralia. All rights reserved.</p>
              </div>
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
