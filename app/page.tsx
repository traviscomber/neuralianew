"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Crown,
  TrendingUp,
  Zap,
  Network,
  MessageCircle,
  Play,
  Code,
  Users,
  Building,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Clock,
} from "lucide-react"
import { AuthModal } from "@/components/auth/auth-modal"
import { useAuth } from "@/hooks/use-auth"
import { ChatWidget } from "@/components/chat/chat-widget"

// AI Executives for Our Products section
const aiExecutives = [
  {
    id: "orchestrator",
    name: "Neural Director",
    role: "Central Command & Coordination",
    description: "Master AI that coordinates all executives and provides unified strategic oversight.",
    icon: <Network className="h-8 w-8" />,
    color: "from-indigo-600 to-purple-700",
    features: ["Multi-Agent Coordination", "Strategic Orchestration", "Task Delegation", "Executive Synthesis"],
    responses: {
      greeting: "I am the Neural Director, coordinating all AI executives to deliver comprehensive business solutions.",
      capabilities: [
        "Multi-agent coordination",
        "Cross-functional planning",
        "Executive synthesis",
        "Project orchestration",
      ],
      sampleQuestions: [
        "Coordinate a digital transformation across all executives",
        "How should CEO, CMO, and CTO work together on market expansion?",
        "Delegate our product launch across the executive team",
      ],
    },
  },
  {
    id: "ceo",
    name: "AI Chief Executive",
    role: "Strategic Leadership & Vision",
    description: "Strategic planning, market analysis, executive decision-making, and organizational leadership.",
    icon: <Crown className="h-8 w-8" />,
    color: "from-purple-600 to-blue-600",
    features: ["Strategic Planning", "Market Analysis", "Leadership", "Business Development"],
    responses: {
      greeting: "I provide strategic leadership and executive decision-making support to drive your business forward.",
      capabilities: ["Strategic planning", "Market analysis", "Executive decisions", "Organizational development"],
      sampleQuestions: [
        "What's our market expansion strategy?",
        "How should we approach this acquisition?",
        "What are the key strategic priorities?",
      ],
    },
  },
  {
    id: "cmo",
    name: "AI Chief Marketing",
    role: "Growth & Customer Acquisition",
    description: "Marketing strategy, brand development, customer acquisition, and growth optimization.",
    icon: <TrendingUp className="h-8 w-8" />,
    color: "from-green-600 to-teal-600",
    features: ["Marketing Strategy", "Brand Development", "Customer Acquisition", "Growth Optimization"],
    responses: {
      greeting: "I drive growth through strategic marketing initiatives and customer-centric approaches.",
      capabilities: ["Marketing strategy", "Brand development", "Customer acquisition", "Growth optimization"],
      sampleQuestions: [
        "How can we improve our conversion rates?",
        "What's the best customer acquisition strategy?",
        "How should we position our brand?",
      ],
    },
  },
  {
    id: "cto",
    name: "AI Chief Technology",
    role: "Innovation & Technical Excellence",
    description: "Technology strategy, system architecture, innovation, and digital transformation.",
    icon: <Zap className="h-8 w-8" />,
    color: "from-orange-600 to-red-600",
    features: ["Technology Strategy", "System Architecture", "Innovation", "Digital Transformation"],
    responses: {
      greeting: "I provide technical leadership and innovation strategy to transform your technology landscape.",
      capabilities: ["Technology strategy", "System architecture", "Innovation", "Digital transformation"],
      sampleQuestions: [
        "What's our technology roadmap?",
        "How can we improve our security posture?",
        "What emerging technologies should we adopt?",
      ],
    },
  },
]

// Development services for Want Dev section
const devServices = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Custom AI Integration",
    description: "Integrate our AI executives into your existing systems and workflows",
    features: ["API Integration", "Custom Workflows", "Data Synchronization", "Real-time Updates"],
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Multi-Agent Orchestration",
    description: "Deploy coordinated AI executive teams for complex business operations",
    features: ["Team Coordination", "Task Delegation", "Unified Reporting", "Cross-functional Alignment"],
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-level security with compliance and data protection standards",
    features: ["End-to-End Encryption", "SOC 2 Compliance", "GDPR Compliant", "Zero-Trust Architecture"],
  },
]

// Consultancy services
const consultancies = [
  {
    title: "Digital Transformation",
    description: "Complete business transformation with AI executive coordination",
    icon: <Sparkles className="h-6 w-6 text-blue-600" />,
    deliverables: ["Strategic roadmap", "Technology assessment", "Change management", "Implementation plan"],
    duration: "3-6 months",
  },
  {
    title: "AI Strategy Consulting",
    description: "Develop comprehensive AI adoption strategies for your organization",
    icon: <Crown className="h-6 w-6 text-purple-600" />,
    deliverables: ["AI readiness assessment", "Use case identification", "ROI analysis", "Implementation roadmap"],
    duration: "2-4 months",
  },
  {
    title: "Executive Team Optimization",
    description: "Optimize decision-making processes with AI executive support",
    icon: <Users className="h-6 w-6 text-green-600" />,
    deliverables: ["Process analysis", "Decision frameworks", "Team coordination", "Performance metrics"],
    duration: "1-3 months",
  },
]

// Client testimonials and use cases
const clients = [
  {
    company: "TechCorp Solutions",
    industry: "Technology",
    logo: "TC",
    testimonial:
      "Neural AI Executives transformed our strategic planning process. The coordination between AI CEO, CMO, and CTO is remarkable.",
    results: ["40% faster decision-making", "Unified strategic vision", "Improved cross-team collaboration"],
    size: "500+ employees",
  },
  {
    company: "Global Manufacturing Inc",
    industry: "Manufacturing",
    logo: "GM",
    testimonial:
      "The Neural Director helped us coordinate a complex digital transformation across all business functions.",
    results: ["Streamlined operations", "Enhanced productivity", "Successful digital transformation"],
    size: "1000+ employees",
  },
  {
    company: "StartupX",
    industry: "Fintech",
    logo: "SX",
    testimonial:
      "As a growing startup, having AI executives available 24/7 gave us the strategic guidance we needed to scale.",
    results: ["Strategic clarity", "Accelerated growth", "Professional guidance"],
    size: "50+ employees",
  },
]

export default function HomePage() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showChatWidget, setShowChatWidget] = useState(false)
  const [chatAgent, setChatAgent] = useState<(typeof aiExecutives)[0] | null>(null)
  const { user } = useAuth()

  const handleTryAgent = (agent: (typeof aiExecutives)[0]) => {
    setShowChatWidget(false)
    setChatAgent(null)
    setTimeout(() => {
      setChatAgent(agent)
      setShowChatWidget(true)
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Sparkles className="h-3 w-3 mr-1" />
            AI Executive Suite Now Available
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Neural AI Executives
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Deploy a complete AI C-suite with Neural Director coordination. Get strategic insights, coordinated
            execution, and unified business transformation 24/7.
          </p>

          {/* Hero Comments */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Crown className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-sm">Strategic Leadership</span>
              </div>
              <p className="text-sm text-gray-600">
                "AI CEO provides executive-level strategic guidance and decision-making support."
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-sm">Growth Optimization</span>
              </div>
              <p className="text-sm text-gray-600">
                "AI CMO drives customer acquisition and marketing strategy optimization."
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-sm">Technical Innovation</span>
              </div>
              <p className="text-sm text-gray-600">
                "AI CTO provides technology strategy and digital transformation leadership."
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-lg px-8 py-6"
              onClick={() => setShowAuthModal(true)}
            >
              <Play className="h-5 w-5 mr-2" />
              Start 5-Day Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-transparent"
              onClick={() => handleTryAgent(aiExecutives[0])}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Try AI Chat Demo
            </Button>
          </div>

          {/* Powerful AI Chat Preview */}
          <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm border-2">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-center space-x-2">
                <Network className="h-6 w-6 text-indigo-600" />
                <CardTitle className="text-lg">Powerful AI Chat Integration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Experience real-time conversations with AI executives. Get strategic insights, coordinated planning, and
                executive-level guidance instantly.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {aiExecutives.slice(0, 4).map((exec) => (
                  <Button
                    key={exec.id}
                    variant="outline"
                    size="sm"
                    onClick={() => handleTryAgent(exec)}
                    className="justify-start"
                  >
                    <div className={`w-4 h-4 rounded bg-gradient-to-r ${exec.color} mr-2`} />
                    {exec.name.split(" ")[0]} {exec.name.split(" ")[1]}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 2. WANT DEV? SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Want Dev?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need custom development or integration? We provide comprehensive development services to integrate AI
              executives into your existing systems and workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {devServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
              <Code className="h-5 w-5 mr-2" />
              Request Custom Development
            </Button>
          </div>
        </div>
      </section>

      {/* 3. OUR PRODUCTS SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy specialized AI executives for strategic leadership, marketing growth, and technical innovation.
              Each executive brings deep expertise in their domain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiExecutives.map((executive) => (
              <Card
                key={executive.id}
                className="border-2 hover:border-blue-200 transition-all duration-300 group cursor-pointer"
                onClick={() => handleTryAgent(executive)}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-lg bg-gradient-to-r ${executive.color} flex items-center justify-center text-white mb-4`}
                  >
                    {executive.icon}
                  </div>
                  <CardTitle className="text-lg">{executive.name}</CardTitle>
                  <p className="text-sm text-gray-600">{executive.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{executive.description}</p>
                  <div className="space-y-2">
                    {executive.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs mr-1">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className={`w-full mt-4 bg-gradient-to-r ${executive.color} hover:opacity-90`} size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Try Demo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONSULTANCIES SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Consultancies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert consulting services to help you implement AI executives and transform your business operations with
              coordinated AI leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultancies.map((consultancy, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {consultancy.icon}
                    <CardTitle className="text-xl">{consultancy.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{consultancy.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                    <ul className="space-y-1">
                      {consultancy.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <Badge variant="outline">{consultancy.duration}</Badge>
                    <Button size="sm" variant="outline">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR CLIENTS SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by companies across industries to provide AI executive leadership and strategic guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {client.logo}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{client.company}</CardTitle>
                      <p className="text-sm text-gray-600">
                        {client.industry} • {client.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{client.testimonial}"</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {client.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Join companies already using Neural AI Executives</p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
              <Building className="h-5 w-5 mr-2" />
              Become Our Client
            </Button>
          </div>
        </div>
      </section>

      {/* 6. FOOTER/CTA SECTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Deploy Your AI Executive Suite?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start with the Neural Director and complete C-suite team. Experience coordinated AI leadership that
            transforms your business operations and strategic decision-making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => setShowAuthModal(true)}
            >
              <Network className="h-5 w-5 mr-2" />
              Start Executive Suite Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
              onClick={() => handleTryAgent(aiExecutives[0])}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Try Neural Director
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <h4 className="font-semibold mb-1">Global Access</h4>
              <p className="text-sm opacity-80">Available worldwide, 24/7</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <h4 className="font-semibold mb-1">Enterprise Security</h4>
              <p className="text-sm opacity-80">SOC 2 compliant, encrypted</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <h4 className="font-semibold mb-1">Instant Deployment</h4>
              <p className="text-sm opacity-80">Start in minutes, not months</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm opacity-80 mb-4 md:mb-0">© 2024 Neuralia. All rights reserved.</div>
              <div className="flex space-x-6">
                <a href="mailto:hello@neuralia.ai" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  hello@neuralia.ai
                </a>
                <a
                  href="https://t.me/neuralia_support"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  @neuralia_support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      <ChatWidget
        agent={chatAgent}
        isOpen={showChatWidget}
        onClose={() => {
          setShowChatWidget(false)
          setChatAgent(null)
        }}
        maxQuestions={5}
      />
    </div>
  )
}
