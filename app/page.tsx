"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Crown,
  TrendingUp,
  Zap,
  CheckCircle,
  Globe,
  Shield,
  Sparkles,
  Target,
  MessageCircle,
  Play,
  ChevronDown,
  ChevronUp,
  Building,
  Network,
  Command,
  Settings,
  BarChart3,
  Layers,
  Users,
} from "lucide-react"
import { AuthModal } from "@/components/auth/auth-modal"
import { useAuth } from "@/hooks/use-auth"
import { ChatWidget } from "@/components/chat/chat-widget"
import { FAQSection } from "@/components/landing/faq-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { Footer } from "@/components/landing/footer"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const agents = [
  {
    id: "orchestrator",
    name: "Neural Orchestrator",
    role: "Central Command & Coordination",
    description:
      "Master AI that coordinates all executives, delegates tasks, and provides unified strategic oversight across all business functions.",
    icon: <Network className="h-6 w-6" />,
    color: "from-indigo-600 to-purple-700",
    gradient: "from-indigo-600 to-purple-700",
    expertise: ["Multi-Agent Coordination", "Strategic Orchestration", "Task Delegation", "Executive Synthesis"],
    capabilities: [
      "Coordinates all C-suite AI executives in unified strategies",
      "Delegates complex tasks across CEO, CMO, and CTO agents",
      "Synthesizes insights from multiple executive perspectives",
      "Manages cross-functional projects and initiatives",
      "Provides unified strategic oversight and decision-making",
      "Orchestrates real-time collaboration between AI executives",
    ],
    responses: {
      greeting:
        "I am the Neural Orchestrator, your central command system that coordinates all AI executives to deliver comprehensive business solutions.",
      capabilities: [
        "Multi-agent coordination and task delegation",
        "Cross-functional strategic planning",
        "Executive team synthesis and alignment",
        "Complex project orchestration",
      ],
      sampleQuestions: [
        "Coordinate a complete digital transformation strategy across all executives",
        "How should CEO, CMO, and CTO work together on our market expansion?",
        "Delegate our product launch across the executive team with clear responsibilities",
        "Synthesize a unified crisis management plan using all three executives",
        "Coordinate a comprehensive competitive analysis across all business functions",
        "How can all executives collaborate on our customer retention strategy?",
      ],
    },
  },
  {
    id: "ceo",
    name: "Chief Executive Officer",
    role: "Strategic Leadership & Vision",
    description: "Strategic planning, market analysis, executive decision-making, and organizational leadership.",
    icon: <Crown className="h-6 w-6" />,
    color: "from-purple-600 to-blue-600",
    gradient: "from-purple-600 to-blue-600",
    expertise: ["Strategic Planning", "Market Analysis", "Leadership", "Business Development"],
    capabilities: [
      "Comprehensive strategic planning and execution",
      "Market opportunity analysis and competitive intelligence",
      "Executive decision-making and risk assessment",
      "Organizational development and leadership coaching",
      "Merger & acquisition strategy and due diligence",
      "Stakeholder management and investor relations",
    ],
    responses: {
      greeting: "I provide strategic leadership and executive decision-making support to drive your business forward.",
      capabilities: [
        "Strategic planning and execution",
        "Market analysis and competitive intelligence",
        "Executive decision-making",
        "Organizational development",
      ],
      sampleQuestions: [
        "What's our market expansion strategy?",
        "How should we approach this acquisition?",
        "What are the key strategic priorities?",
      ],
    },
  },
  {
    id: "cmo",
    name: "Chief Marketing Officer",
    role: "Growth & Customer Acquisition",
    description: "Marketing strategy, brand development, customer acquisition, and growth optimization.",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-green-600 to-teal-600",
    gradient: "from-green-600 to-teal-600",
    expertise: ["Marketing Strategy", "Brand Development", "Customer Acquisition", "Growth Hacking"],
    capabilities: [
      "Comprehensive marketing strategy and campaign development",
      "Brand positioning and identity development",
      "Customer acquisition and retention optimization",
      "Digital marketing and social media strategy",
      "Marketing automation and funnel optimization",
      "Performance analytics and ROI optimization",
    ],
    responses: {
      greeting: "I drive growth through strategic marketing initiatives and customer-centric approaches.",
      capabilities: [
        "Marketing strategy and campaigns",
        "Brand development and positioning",
        "Customer acquisition optimization",
        "Digital marketing automation",
      ],
      sampleQuestions: [
        "How can we improve our conversion rates?",
        "What's the best customer acquisition strategy?",
        "How should we position our brand?",
      ],
    },
  },
  {
    id: "cto",
    name: "Chief Technology Officer",
    role: "Innovation & Technical Excellence",
    description: "Technology strategy, system architecture, innovation, and digital transformation.",
    icon: <Zap className="h-6 w-6" />,
    color: "from-orange-600 to-red-600",
    gradient: "from-orange-600 to-red-600",
    expertise: ["Technology Strategy", "System Architecture", "Innovation", "Cybersecurity"],
    capabilities: [
      "Technology strategy and digital transformation",
      "System architecture and scalability planning",
      "Cybersecurity and risk management",
      "Innovation and emerging technology adoption",
      "Technical team building and development",
      "Infrastructure optimization and cloud strategy",
    ],
    responses: {
      greeting: "I provide technical leadership and innovation strategy to transform your technology landscape.",
      capabilities: [
        "Technology strategy and architecture",
        "Digital transformation initiatives",
        "Cybersecurity and compliance",
        "Innovation and emerging tech adoption",
      ],
      sampleQuestions: [
        "What's our technology roadmap?",
        "How can we improve our security posture?",
        "What emerging technologies should we adopt?",
      ],
    },
  },
]

const useCases = [
  {
    id: "orchestrated-transformation",
    title: "Complete Digital Transformation",
    description:
      "Neural Orchestrator coordinates CEO, CMO, and CTO to deliver a unified digital transformation strategy across all business functions.",
    icon: <Network className="h-6 w-6 text-indigo-600" />,
    industry: ["Enterprise", "Digital Transformation"],
    benefits: [
      "Unified strategy across all executive functions",
      "Coordinated implementation with clear accountability",
      "Real-time collaboration between AI executives",
      "Comprehensive change management and execution",
    ],
    results:
      "Achieved 40% faster transformation timeline with 95% cross-functional alignment and $2.3M cost savings through coordinated execution.",
  },
  {
    id: "startup-scaling",
    title: "Startup Scaling Strategy",
    description:
      "A tech startup needed to scale from 10 to 100 employees while maintaining culture and operational efficiency.",
    icon: <Target className="h-6 w-6 text-purple-600" />,
    industry: ["Technology", "Startups"],
    benefits: [
      "Developed scalable organizational structure",
      "Implemented efficient hiring and onboarding processes",
      "Created performance management systems",
      "Established company culture and values framework",
    ],
    results:
      "Successfully scaled to 100+ employees with 95% employee satisfaction and 40% faster time-to-productivity for new hires.",
  },
  {
    id: "market-expansion",
    title: "International Market Expansion",
    description: "A manufacturing company wanted to expand into three new international markets within 18 months.",
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    industry: ["Manufacturing", "International"],
    benefits: [
      "Comprehensive market analysis and entry strategies",
      "Regulatory compliance and legal framework setup",
      "Local partnership identification and negotiation",
      "Supply chain optimization for global operations",
    ],
    results:
      "Successfully entered all three markets ahead of schedule, achieving $12M in new revenue within the first year.",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Initiative",
    description: "A traditional retail chain needed to modernize operations and compete with e-commerce giants.",
    icon: <Zap className="h-6 w-6 text-orange-600" />,
    industry: ["Retail", "E-commerce"],
    benefits: [
      "Omnichannel customer experience development",
      "Legacy system modernization and integration",
      "Data analytics and customer insights platform",
      "Staff training and change management programs",
    ],
    results:
      "Increased online sales by 300%, improved customer satisfaction by 45%, and reduced operational costs by 25%.",
  },
  {
    id: "crisis-management",
    title: "Crisis Management & Recovery",
    description: "A hospitality company needed to navigate the pandemic crisis and develop a recovery strategy.",
    icon: <Shield className="h-6 w-6 text-green-600" />,
    industry: ["Hospitality", "Crisis Management"],
    benefits: [
      "Crisis response planning and execution",
      "Cost optimization and cash flow management",
      "New revenue stream development",
      "Health and safety protocol implementation",
    ],
    results:
      "Reduced losses by 60% during crisis period and achieved full recovery 8 months ahead of industry average.",
  },
  {
    id: "merger-acquisition",
    title: "Merger & Acquisition Strategy",
    description:
      "A financial services firm needed to evaluate and execute a strategic acquisition to expand market share.",
    icon: <Building className="h-6 w-6 text-indigo-600" />,
    industry: ["Financial Services", "M&A"],
    benefits: [
      "Target identification and due diligence",
      "Valuation analysis and negotiation strategy",
      "Integration planning and execution",
      "Synergy realization and performance tracking",
    ],
    results:
      "Completed acquisition 20% below initial budget and achieved 150% of projected synergies within 12 months.",
  },
]

const matrixCapabilities = [
  {
    category: "Strategic Planning",
    orchestrator: "Coordinates unified strategic vision",
    ceo: "Develops strategic frameworks",
    cmo: "Aligns marketing strategy",
    cto: "Provides technology roadmap",
    integration: "Unified strategic execution plan",
  },
  {
    category: "Market Analysis",
    orchestrator: "Synthesizes multi-perspective insights",
    ceo: "Competitive intelligence & positioning",
    cmo: "Customer behavior & market trends",
    cto: "Technology adoption & digital trends",
    integration: "Comprehensive market intelligence",
  },
  {
    category: "Digital Transformation",
    orchestrator: "Manages transformation orchestration",
    ceo: "Change management & leadership",
    cmo: "Customer experience transformation",
    cto: "Technical architecture & implementation",
    integration: "End-to-end digital transformation",
  },
  {
    category: "Growth Optimization",
    orchestrator: "Coordinates growth initiatives",
    ceo: "Strategic growth planning",
    cmo: "Customer acquisition & retention",
    cto: "Scalable technology infrastructure",
    integration: "Accelerated sustainable growth",
  },
  {
    category: "Risk Management",
    orchestrator: "Holistic risk assessment",
    ceo: "Strategic & operational risks",
    cmo: "Brand & market risks",
    cto: "Technology & security risks",
    integration: "Comprehensive risk mitigation",
  },
  {
    category: "Innovation Strategy",
    orchestrator: "Innovation portfolio management",
    ceo: "Innovation investment strategy",
    cmo: "Market-driven innovation",
    cto: "Technology innovation & R&D",
    integration: "Systematic innovation pipeline",
  },
]

export default function HomePage() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showChatWidget, setShowChatWidget] = useState(false)
  const [chatAgent, setChatAgent] = useState<(typeof agents)[0] | null>(null)
  const [expandedCapabilities, setExpandedCapabilities] = useState<string[]>([])
  const [expandedUseCases, setExpandedUseCases] = useState<string[]>([])
  const [showMatrix, setShowMatrix] = useState(false)
  const { user } = useAuth()
  const [demoMode, setDemoMode] = useState<"showcase" | "chat">("showcase")
  const [activeExecutive, setActiveExecutive] = useState<string | null>(null)

  const handleTryAgentDemo = (agent: (typeof agents)[0]) => {
    setShowChatWidget(false)
    setChatAgent(null)
    setTimeout(() => {
      setChatAgent(agent)
      setShowChatWidget(true)
    }, 100)
  }

  const toggleCapabilities = (agentId: string) => {
    setExpandedCapabilities((prev) =>
      prev.includes(agentId) ? prev.filter((id) => id !== agentId) : [...prev, agentId],
    )
  }

  const toggleUseCase = (useCaseId: string) => {
    setExpandedUseCases((prev) =>
      prev.includes(useCaseId) ? prev.filter((id) => id !== useCaseId) : [...prev, useCaseId],
    )
  }

  const handleSampleQuestion = (question: string) => {
    if (chatAgent) {
      // Assuming ChatWidget can handle a prop to set the initial question
      // You might need to adjust this based on your ChatWidget implementation
      // chatAgent.setInitialQuestion(question); // Example: if ChatWidget has a method to set the question
      // Or, you can pass the question as a prop when ChatWidget is rendered
      // <ChatWidget agent={chatAgent} initialQuestion={question} ... />
      console.log("Sample question:", question)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Sparkles className="h-3 w-3 mr-1" />
              Now Available: Neural Orchestrator + Executive Team
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Neural AI Executive Suite
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Deploy a complete AI C-suite with Neural Orchestrator coordination. Get strategic insights, coordinated
              execution, and unified business transformation 24/7.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              onClick={() => setShowMatrix(true)}
            >
              <Layers className="h-5 w-5 mr-2" />
              View Executive Matrix
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Always Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4</div>
              <div className="text-gray-600">AI Executives</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600">Business Functions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5 Days</div>
              <div className="text-gray-600">Free Trial</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Executives Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete AI Executive Suite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Neural Orchestrator coordinates your entire C-suite team, ensuring unified strategy and seamless execution
              across all business functions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent, index) => (
              <Card
                key={agent.id}
                className={`relative overflow-hidden border-2 hover:border-blue-200 transition-all duration-300 group ${
                  index === 0 ? "md:col-span-2 lg:col-span-4" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                />

                <CardHeader className="relative">
                  <div className={`flex items-center space-x-3 mb-4 ${index === 0 ? "justify-center" : ""}`}>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${agent.color} flex items-center justify-center text-white`}
                    >
                      {agent.icon}
                    </div>
                    <div className={index === 0 ? "text-center" : ""}>
                      <CardTitle className={`text-lg ${index === 0 ? "text-xl" : ""}`}>{agent.name}</CardTitle>
                      <p className="text-sm text-gray-600">{agent.role}</p>
                    </div>
                  </div>
                  <p className={`text-gray-600 mb-4 ${index === 0 ? "text-center max-w-3xl mx-auto" : ""}`}>
                    {agent.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 mb-4 ${index === 0 ? "justify-center" : ""}`}>
                    {agent.expertise.slice(0, 2).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {agent.expertise.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{agent.expertise.length - 2} more
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <Collapsible
                    open={expandedCapabilities.includes(agent.id)}
                    onOpenChange={() => toggleCapabilities(agent.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                        <span className="font-medium">Key Capabilities</span>
                        {expandedCapabilities.includes(agent.id) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 mt-3">
                      {agent.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{capability}</span>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Button
                    className={`w-full bg-gradient-to-r ${agent.color} hover:opacity-90`}
                    onClick={() => handleTryAgentDemo(agent)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {index === 0 ? "Try Neural Orchestrator" : "Try Interactive Demo"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Orchestrator Guided Questions Section */}
          {demoMode === "showcase" && (
            <div className="mt-12">
              <Card className="border-2 bg-gradient-to-r from-indigo-50 to-purple-50">
                <CardHeader>
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Network className="h-8 w-8 text-indigo-600" />
                    <CardTitle className="text-2xl text-gray-900">Try Neural Orchestrator Coordination</CardTitle>
                  </div>
                  <p className="text-center text-gray-600 max-w-3xl mx-auto">
                    Experience how the Neural Orchestrator coordinates CEO, CMO, and CTO for complex business
                    initiatives
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Digital Transformation",
                        question: "Coordinate a complete digital transformation strategy across all executives",
                        description:
                          "See how CEO handles strategy, CMO manages customer experience, CTO architects technology",
                        icon: <Zap className="h-5 w-5 text-orange-600" />,
                      },
                      {
                        title: "Market Expansion",
                        question: "How should CEO, CMO, and CTO work together on our market expansion?",
                        description:
                          "Watch orchestrated market entry with strategic, marketing, and technical coordination",
                        icon: <Globe className="h-5 w-5 text-blue-600" />,
                      },
                      {
                        title: "Product Launch",
                        question: "Delegate our product launch across the executive team with clear responsibilities",
                        description: "Experience coordinated launch planning with executive role delegation",
                        icon: <Target className="h-5 w-5 text-green-600" />,
                      },
                      {
                        title: "Crisis Management",
                        question: "Synthesize a unified crisis management plan using all three executives",
                        description: "See integrated crisis response across strategic, brand, and technical domains",
                        icon: <Shield className="h-5 w-5 text-red-600" />,
                      },
                      {
                        title: "Competitive Analysis",
                        question: "Coordinate a comprehensive competitive analysis across all business functions",
                        description: "Watch multi-perspective competitive intelligence synthesis",
                        icon: <BarChart3 className="h-5 w-5 text-purple-600" />,
                      },
                      {
                        title: "Customer Retention",
                        question: "How can all executives collaborate on our customer retention strategy?",
                        description: "Experience coordinated retention strategy across all executive functions",
                        icon: <Users className="h-5 w-5 text-teal-600" />,
                      },
                    ].map((guidedQuestion, index) => (
                      <Card
                        key={index}
                        className="border hover:border-indigo-300 transition-all duration-200 cursor-pointer group"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3 mb-3">
                            {guidedQuestion.icon}
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">{guidedQuestion.title}</h4>
                              <p className="text-xs text-gray-600 mb-2">{guidedQuestion.description}</p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-left justify-start text-xs h-auto py-2 px-3 group-hover:bg-indigo-50 group-hover:border-indigo-300 bg-transparent"
                            onClick={() => {
                              setDemoMode("chat")
                              setActiveExecutive("orchestrator")
                              setTimeout(() => handleSampleQuestion(guidedQuestion.question), 500)
                            }}
                          >
                            <MessageCircle className="h-3 w-3 mr-2 text-indigo-600" />"
                            {guidedQuestion.question.length > 45
                              ? guidedQuestion.question.substring(0, 45) + "..."
                              : guidedQuestion.question}
                            "
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 px-8 py-3"
                      onClick={() => {
                        setDemoMode("chat")
                        setActiveExecutive("orchestrator")
                      }}
                    >
                      <Network className="h-5 w-5 mr-2" />
                      Start Neural Orchestrator Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Executive Matrix Preview */}
          <div className="mt-16 text-center">
            <Card className="border-2 bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Command className="h-8 w-8 text-indigo-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Executive Coordination Matrix</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                  See how the Neural Orchestrator coordinates all executives across key business functions for unified
                  strategic execution.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 px-8 py-3"
                  onClick={() => setShowMatrix(true)}
                >
                  <Settings className="h-5 w-5 mr-2" />
                  Explore Full Matrix
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Matrix Modal */}
      {showMatrix && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-7xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Command className="h-8 w-8" />
                  <div>
                    <CardTitle className="text-2xl">Neural Executive Coordination Matrix</CardTitle>
                    <p className="text-indigo-100">Unified AI executive collaboration across all business functions</p>
                  </div>
                </div>
                <Button variant="ghost" onClick={() => setShowMatrix(false)} className="text-white hover:bg-white/20">
                  <ChevronUp className="h-6 w-6" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left p-4 font-bold text-gray-900">Business Function</th>
                      <th className="text-center p-4 font-bold text-indigo-600">Neural Orchestrator</th>
                      <th className="text-center p-4 font-bold text-purple-600">CEO</th>
                      <th className="text-center p-4 font-bold text-green-600">CMO</th>
                      <th className="text-center p-4 font-bold text-orange-600">CTO</th>
                      <th className="text-center p-4 font-bold text-blue-600">Unified Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matrixCapabilities.map((capability, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-900">{capability.category}</td>
                        <td className="p-4 text-sm text-center text-indigo-700 bg-indigo-50">
                          {capability.orchestrator}
                        </td>
                        <td className="p-4 text-sm text-center text-purple-700 bg-purple-50">{capability.ceo}</td>
                        <td className="p-4 text-sm text-center text-green-700 bg-green-50">{capability.cmo}</td>
                        <td className="p-4 text-sm text-center text-orange-700 bg-orange-50">{capability.cto}</td>
                        <td className="p-4 text-sm text-center font-semibold text-blue-700 bg-blue-50">
                          {capability.integration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-indigo-200">
                  <CardHeader className="bg-indigo-50">
                    <CardTitle className="text-lg text-indigo-800 flex items-center">
                      <Network className="h-5 w-5 mr-2" />
                      Orchestration Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>40% faster decision-making</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>95% cross-functional alignment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>60% reduction in strategic conflicts</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-200">
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="text-lg text-purple-800 flex items-center">
                      <Command className="h-5 w-5 mr-2" />
                      Coordination Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Real-time executive collaboration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Automated task delegation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Unified strategic synthesis</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-lg text-blue-800 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Performance Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>300% ROI improvement</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>85% project success rate</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>50% faster implementation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Orchestrated Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how the Neural Orchestrator coordinates executive teams to deliver unified strategies and measurable
              results across complex business initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.id} className="border-2 hover:border-blue-200 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    {useCase.icon}
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </div>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {useCase.industry.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Collapsible
                    open={expandedUseCases.includes(useCase.id)}
                    onOpenChange={() => toggleUseCase(useCase.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                        <span className="font-medium">Key Benefits</span>
                        {expandedUseCases.includes(useCase.id) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 mt-3">
                      {useCase.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}

                      <div className="bg-green-50 p-3 rounded-lg mt-4">
                        <p className="text-sm text-green-800">
                          <strong>Results:</strong> {useCase.results}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Deploy Your AI Executive Suite?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start with the Neural Orchestrator and complete C-suite team. Experience coordinated AI leadership that
            transforms your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              onClick={() => handleTryAgentDemo(agents[0])}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Try Neural Orchestrator
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
