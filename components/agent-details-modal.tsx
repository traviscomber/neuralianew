"use client"

import { useState } from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Brain,
  Users,
  BarChart3,
  Megaphone,
  Headphones,
  Target,
  Wrench,
  Star,
  CheckCircle,
  Building2,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  MessageSquare,
  Settings,
  Database,
  Globe,
  Lightbulb,
  Award,
  Rocket,
  Heart,
  DollarSign,
  Crown,
} from "lucide-react"

interface AgentDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  agentId: string
  onAddToCart: (agent: any) => void
  onDeployAgent: (agent: any) => void
  isInCart: boolean
  isDeployed: boolean
  isDeploying: boolean
}

const agentData = {
  "ceo-neural-agent": {
    id: "ceo-neural-agent",
    name: "CEO Neural Agent",
    description: "Executive-level AI orchestrator that manages all business operations with C-suite intelligence",
    price: 0,
    icon: Brain,
    color: "bg-gradient-to-r from-purple-600 to-indigo-600",
    rating: 5.0,
    reviews: 2847,
    coreFeatures: [
      "Executive Strategic Planning",
      "Cross-Functional Orchestration",
      "Performance Optimization",
      "Risk Management & Decision Support",
      "Digital Transformation Leadership",
      "Resource Allocation & Budget Optimization",
      "Crisis Management & Contingency Planning",
      "Market Analysis & Competitive Intelligence",
    ],
    industrySectors: [
      "Fortune 500 Companies",
      "Multi-National Corporations",
      "Private Equity Firms",
      "Investment Banking",
      "Management Consulting",
      "Technology Conglomerates",
      "Healthcare Systems",
      "Financial Holdings",
      "Government Agencies",
      "Educational Institutions",
      "Large Enterprises",
      "Venture Capital",
    ],
    advancedCapabilities: [
      {
        title: "Executive Strategic Planning & Execution",
        description:
          "C-suite level strategic planning with real-time execution monitoring, adaptive planning, and board-level reporting capabilities.",
        icon: Crown,
      },
      {
        title: "Cross-Functional Business Orchestration",
        description:
          "Seamlessly coordinates all departments and AI agents to maximize organizational efficiency, eliminate silos, and drive unified execution.",
        icon: Settings,
      },
      {
        title: "Predictive Business Intelligence & Analytics",
        description:
          "Executive-level business intelligence with advanced forecasting, market trend analysis, and strategic opportunity identification.",
        icon: Database,
      },
      {
        title: "Enterprise Risk Management & Mitigation",
        description:
          "Comprehensive risk assessment and management with automated contingency planning and crisis response protocols.",
        icon: Shield,
      },
      {
        title: "Digital Transformation Leadership",
        description:
          "Leads organization-wide digital transformation initiatives with change management and technology adoption strategies.",
        icon: Rocket,
      },
      {
        title: "Performance Optimization & KPI Management",
        description:
          "Real-time monitoring of all business metrics with intelligent alerts, optimization recommendations, and executive dashboards.",
        icon: TrendingUp,
      },
    ],
    perfectFor: [
      "CEOs and Founders",
      "C-Suite Executives",
      "Board of Directors",
      "Strategic Planning Teams",
      "Operations Directors",
      "Chief Operating Officers",
      "Business Intelligence Leaders",
      "Management Consultants",
      "Digital Transformation Officers",
      "Enterprise Architects",
      "Performance Management Teams",
      "Risk Management Officers",
      "Innovation Directors",
      "Organizational Development VPs",
      "Executive Assistants to C-Suite",
      "Strategic Initiative Leaders",
    ],
  },
  "hr-advisory": {
    id: "hr-advisory",
    name: "HR Advisory Expert",
    description: "Expert human resources guidance for all your people management needs",
    price: 299,
    icon: Users,
    color: "bg-blue-600",
    rating: 4.8,
    reviews: 892,
    coreFeatures: [
      "Employee Relations Management",
      "Policy Development & Compliance",
      "Performance Management Systems",
      "Talent Acquisition Strategy",
      "Benefits Administration",
      "Workplace Culture Development",
      "Training & Development Programs",
      "Conflict Resolution",
    ],
    industrySectors: [
      "Technology & Software",
      "Healthcare & Pharmaceuticals",
      "Financial Services",
      "Manufacturing",
      "Retail & E-commerce",
      "Professional Services",
      "Education",
      "Non-Profit Organizations",
      "Government & Public Sector",
      "Hospitality & Tourism",
      "Media & Entertainment",
      "Construction & Engineering",
    ],
    advancedCapabilities: [
      {
        title: "Advanced Talent Analytics",
        description:
          "Comprehensive workforce analytics including turnover prediction, performance correlation analysis, and talent gap identification.",
        icon: BarChart3,
      },
      {
        title: "Automated Compliance Monitoring",
        description:
          "Real-time monitoring of HR compliance across multiple jurisdictions with automated policy updates and alerts.",
        icon: Shield,
      },
      {
        title: "Intelligent Recruitment Optimization",
        description:
          "AI-powered candidate screening, interview scheduling, and cultural fit assessment for optimal hiring decisions.",
        icon: Target,
      },
      {
        title: "Employee Engagement Intelligence",
        description:
          "Advanced sentiment analysis and engagement tracking with personalized retention strategies for each employee.",
        icon: Heart,
      },
      {
        title: "Performance Management Automation",
        description:
          "Automated performance review cycles, goal tracking, and development plan creation with predictive career pathing.",
        icon: TrendingUp,
      },
      {
        title: "Workplace Culture Optimization",
        description:
          "Data-driven culture assessment and improvement recommendations with real-time culture health monitoring.",
        icon: Globe,
      },
    ],
    perfectFor: [
      "HR Directors and VPs",
      "People Operations Managers",
      "Talent Acquisition Specialists",
      "Employee Relations Managers",
      "Compensation & Benefits Analysts",
      "Learning & Development Coordinators",
      "Diversity & Inclusion Officers",
      "HR Business Partners",
      "Organizational Development Consultants",
      "Workplace Culture Specialists",
      "HR Compliance Officers",
      "Employee Engagement Managers",
    ],
  },
  "customer-service": {
    id: "customer-service",
    name: "Customer Experience Expert",
    description: "24/7 customer support excellence with intelligent issue resolution",
    price: 249,
    icon: Headphones,
    color: "bg-teal-600",
    rating: 4.7,
    reviews: 1156,
    coreFeatures: [
      "Multi-Channel Support Management",
      "Intelligent Ticket Routing",
      "Customer Satisfaction Tracking",
      "Escalation Management",
      "Knowledge Base Integration",
      "Real-Time Chat Support",
      "Customer Journey Mapping",
      "Service Level Agreement Monitoring",
    ],
    industrySectors: [
      "E-commerce & Retail",
      "Telecommunications",
      "Financial Services & Banking",
      "Software & SaaS",
      "Healthcare Services",
      "Travel & Hospitality",
      "Insurance",
      "Utilities & Energy",
      "Automotive",
      "Real Estate",
      "Food & Beverage",
      "Consumer Electronics",
    ],
    advancedCapabilities: [
      {
        title: "Omnichannel Experience Orchestration",
        description:
          "Seamlessly manages customer interactions across phone, email, chat, social media, and in-person channels with unified context.",
        icon: Globe,
      },
      {
        title: "Predictive Issue Resolution",
        description:
          "Anticipates customer issues before they occur and proactively reaches out with solutions and preventive measures.",
        icon: Lightbulb,
      },
      {
        title: "Emotional Intelligence Processing",
        description:
          "Advanced sentiment analysis and emotional state recognition to provide empathetic, personalized customer interactions.",
        icon: Heart,
      },
      {
        title: "Automated Quality Assurance",
        description:
          "Real-time monitoring and scoring of all customer interactions with automated coaching recommendations for agents.",
        icon: Award,
      },
      {
        title: "Customer Lifetime Value Optimization",
        description:
          "Intelligent upselling and cross-selling recommendations based on customer behavior and satisfaction patterns.",
        icon: TrendingUp,
      },
      {
        title: "Self-Service Portal Intelligence",
        description:
          "AI-powered knowledge base that learns from interactions and continuously improves self-service success rates.",
        icon: Database,
      },
    ],
    perfectFor: [
      "Customer Service Directors",
      "Contact Center Managers",
      "Customer Experience Officers",
      "Support Team Leaders",
      "Customer Success Managers",
      "Quality Assurance Specialists",
      "Customer Retention Specialists",
      "Service Delivery Managers",
      "Customer Operations Analysts",
      "Help Desk Supervisors",
      "Client Relations Managers",
      "Customer Advocacy Teams",
    ],
  },
  "sales-coach": {
    id: "sales-coach",
    name: "Sales Performance Coach",
    description: "Advanced sales strategy and performance optimization for revenue growth",
    price: 399,
    icon: Target,
    color: "bg-red-600",
    rating: 4.9,
    reviews: 743,
    coreFeatures: [
      "Deal Strategy Optimization",
      "Pipeline Management",
      "Objection Handling Training",
      "Performance Analytics",
      "Territory Management",
      "Competitive Intelligence",
      "Sales Forecasting",
      "CRM Integration & Automation",
    ],
    industrySectors: [
      "B2B Software & SaaS",
      "Enterprise Technology",
      "Financial Services",
      "Medical Devices",
      "Industrial Equipment",
      "Professional Services",
      "Real Estate",
      "Telecommunications",
      "Automotive",
      "Pharmaceuticals",
      "Manufacturing",
      "Energy & Utilities",
    ],
    advancedCapabilities: [
      {
        title: "AI-Powered Deal Scoring",
        description:
          "Advanced machine learning algorithms analyze deal characteristics and provide probability-weighted forecasting with win/loss predictions.",
        icon: Target,
      },
      {
        title: "Behavioral Sales Analytics",
        description:
          "Deep analysis of sales rep behaviors, communication patterns, and activity correlation with deal outcomes for personalized coaching.",
        icon: BarChart3,
      },
      {
        title: "Dynamic Pricing Optimization",
        description:
          "Real-time pricing recommendations based on market conditions, competitor analysis, and customer value perception.",
        icon: TrendingUp,
      },
      {
        title: "Conversation Intelligence",
        description:
          "AI analysis of sales calls and meetings with automated insights, coaching recommendations, and next-step suggestions.",
        icon: MessageSquare,
      },
      {
        title: "Territory & Account Planning",
        description:
          "Intelligent territory optimization and account prioritization based on potential, competitive landscape, and resource allocation.",
        icon: Globe,
      },
      {
        title: "Sales Process Automation",
        description:
          "Automated follow-ups, proposal generation, and CRM updates with intelligent workflow optimization for maximum efficiency.",
        icon: Zap,
      },
    ],
    perfectFor: [
      "Sales Directors and VPs",
      "Sales Team Managers",
      "Account Executives",
      "Business Development Representatives",
      "Sales Operations Analysts",
      "Revenue Operations Managers",
      "Sales Enablement Specialists",
      "Channel Partners Managers",
      "Inside Sales Representatives",
      "Field Sales Representatives",
      "Sales Training Coordinators",
      "Customer Acquisition Specialists",
    ],
  },
  marketing: {
    id: "marketing",
    name: "Marketing Strategy Expert",
    description: "Comprehensive marketing strategy and campaign optimization for growth",
    price: 329,
    icon: Megaphone,
    color: "bg-orange-600",
    rating: 4.8,
    reviews: 967,
    coreFeatures: [
      "Campaign Strategy & Planning",
      "Multi-Channel Marketing Automation",
      "Lead Generation & Nurturing",
      "Content Strategy & Creation",
      "Brand Management",
      "Marketing Analytics & ROI",
      "Customer Segmentation",
      "Conversion Rate Optimization",
    ],
    industrySectors: [
      "E-commerce & Retail",
      "B2B Software & SaaS",
      "Healthcare & Life Sciences",
      "Real Estate",
      "Financial Services",
      "Education & EdTech",
      "Travel & Hospitality",
      "Food & Beverage",
      "Fashion & Beauty",
      "Automotive",
      "Non-Profit Organizations",
      "Professional Services",
    ],
    advancedCapabilities: [
      {
        title: "Predictive Customer Journey Mapping",
        description:
          "AI-powered analysis of customer touchpoints with predictive modeling to optimize the entire customer journey and increase conversions.",
        icon: Globe,
      },
      {
        title: "Dynamic Content Personalization",
        description:
          "Real-time content adaptation based on user behavior, preferences, and demographic data across all marketing channels.",
        icon: Lightbulb,
      },
      {
        title: "Attribution Modeling & ROI Analysis",
        description:
          "Advanced multi-touch attribution analysis with real-time ROI calculation and budget optimization recommendations.",
        icon: BarChart3,
      },
      {
        title: "Competitive Intelligence Automation",
        description:
          "Automated monitoring of competitor activities, pricing changes, and market positioning with strategic response recommendations.",
        icon: Shield,
      },
      {
        title: "Marketing Automation Orchestration",
        description:
          "Sophisticated workflow automation across email, social media, paid advertising, and content marketing with intelligent optimization.",
        icon: Zap,
      },
      {
        title: "Brand Sentiment & Reputation Management",
        description:
          "Real-time brand monitoring across all digital channels with automated response strategies and reputation protection protocols.",
        icon: Heart,
      },
    ],
    perfectFor: [
      "Marketing Directors and CMOs",
      "Digital Marketing Managers",
      "Content Marketing Specialists",
      "Growth Marketing Managers",
      "Brand Managers",
      "Marketing Operations Analysts",
      "Demand Generation Specialists",
      "Social Media Managers",
      "Email Marketing Specialists",
      "SEO/SEM Specialists",
      "Marketing Automation Specialists",
      "Customer Acquisition Managers",
    ],
  },
  analytics: {
    id: "analytics",
    name: "Data Intelligence Expert",
    description: "Advanced data intelligence and business insights for informed decision making",
    price: 379,
    icon: BarChart3,
    color: "bg-green-600",
    rating: 4.9,
    reviews: 634,
    coreFeatures: [
      "Advanced Statistical Analysis",
      "Predictive Modeling",
      "Data Visualization & Dashboards",
      "Business Intelligence Reporting",
      "Real-Time Analytics",
      "Data Mining & Pattern Recognition",
      "Performance Metrics Tracking",
      "Automated Insights Generation",
    ],
    industrySectors: [
      "Financial Services & Banking",
      "Healthcare & Pharmaceuticals",
      "Retail & E-commerce",
      "Manufacturing",
      "Technology & Software",
      "Telecommunications",
      "Energy & Utilities",
      "Government & Public Sector",
      "Insurance",
      "Media & Entertainment",
      "Transportation & Logistics",
      "Education",
    ],
    advancedCapabilities: [
      {
        title: "Machine Learning Model Development",
        description:
          "Custom ML model creation for predictive analytics, classification, clustering, and recommendation systems with automated model optimization.",
        icon: Rocket,
      },
      {
        title: "Real-Time Data Processing",
        description:
          "High-velocity data stream processing with real-time analytics, alerting, and automated decision-making capabilities.",
        icon: Zap,
      },
      {
        title: "Advanced Statistical Modeling",
        description:
          "Sophisticated statistical analysis including regression, time series forecasting, and multivariate analysis with confidence intervals.",
        icon: BarChart3,
      },
      {
        title: "Automated Anomaly Detection",
        description:
          "AI-powered detection of data anomalies, outliers, and unusual patterns with automated investigation and alerting systems.",
        icon: Shield,
      },
      {
        title: "Interactive Data Visualization",
        description:
          "Dynamic, interactive dashboards and visualizations that adapt to user needs with drill-down capabilities and custom views.",
        icon: Globe,
      },
      {
        title: "Predictive Business Intelligence",
        description:
          "Forward-looking analytics with scenario modeling, what-if analysis, and strategic planning support with confidence scoring.",
        icon: Lightbulb,
      },
    ],
    perfectFor: [
      "Data Scientists and Analysts",
      "Business Intelligence Managers",
      "Chief Data Officers",
      "Analytics Directors",
      "Market Research Analysts",
      "Financial Analysts",
      "Operations Research Analysts",
      "Performance Management Teams",
      "Strategic Planning Analysts",
      "Risk Management Analysts",
      "Product Analytics Managers",
      "Customer Insights Specialists",
    ],
  },
  "technical-support": {
    id: "technical-support",
    name: "Technical Systems Expert",
    description: "Expert technical troubleshooting and system optimization support",
    price: 349,
    icon: Wrench,
    color: "bg-indigo-600",
    rating: 4.7,
    reviews: 521,
    coreFeatures: [
      "Advanced System Diagnostics",
      "Root Cause Analysis",
      "Performance Optimization",
      "Security Assessment & Hardening",
      "Integration Support",
      "Documentation & Knowledge Base",
      "Incident Management",
      "Preventive Maintenance",
    ],
    industrySectors: [
      "Software & SaaS",
      "Cloud Infrastructure",
      "Cybersecurity",
      "Telecommunications",
      "Financial Technology",
      "Healthcare IT",
      "Manufacturing Systems",
      "E-commerce Platforms",
      "Educational Technology",
      "Government IT",
      "Media & Broadcasting",
      "Gaming & Entertainment",
    ],
    advancedCapabilities: [
      {
        title: "Automated System Monitoring",
        description:
          "24/7 intelligent monitoring of all systems with predictive failure detection and automated remediation capabilities.",
        icon: Shield,
      },
      {
        title: "Advanced Troubleshooting AI",
        description:
          "AI-powered diagnostic engine that analyzes symptoms, identifies root causes, and provides step-by-step resolution procedures.",
        icon: Lightbulb,
      },
      {
        title: "Performance Optimization Engine",
        description:
          "Continuous system performance analysis with automated tuning recommendations and capacity planning insights.",
        icon: TrendingUp,
      },
      {
        title: "Security Vulnerability Assessment",
        description:
          "Comprehensive security scanning and assessment with automated patch management and threat mitigation strategies.",
        icon: Shield,
      },
      {
        title: "Integration & API Management",
        description:
          "Expert support for complex system integrations, API management, and microservices architecture optimization.",
        icon: Settings,
      },
      {
        title: "Knowledge Base Intelligence",
        description:
          "Self-learning knowledge base that captures solutions and continuously improves troubleshooting accuracy and speed.",
        icon: Database,
      },
    ],
    perfectFor: [
      "IT Directors and Managers",
      "System Administrators",
      "DevOps Engineers",
      "Technical Support Specialists",
      "Network Engineers",
      "Security Engineers",
      "Database Administrators",
      "Cloud Architects",
      "Software Engineers",
      "IT Operations Teams",
      "Help Desk Technicians",
      "Infrastructure Specialists",
    ],
  },
}

export function AgentDetailsModal({
  isOpen,
  onClose,
  agentId,
  onAddToCart,
  onDeployAgent,
  isInCart,
  isDeployed,
  isDeploying,
}: AgentDetailsModalProps) {
  const agent = agentData[agentId as keyof typeof agentData]
  const [showPricing, setShowPricing] = useState(false)
  const isCEO = agentId === "ceo-neural-agent"

  if (!agent) return null

  const Icon = agent.icon

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${agent.color} ${isCEO ? "shadow-lg" : ""}`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className={`text-2xl font-bold flex items-center ${isCEO ? "text-purple-800" : ""}`}>
                {agent.name}
                {isCEO && <Crown className="ml-2 h-5 w-5 text-purple-600" />}
              </h2>
              <p className={`font-normal ${isCEO ? "text-purple-700" : "text-gray-600"}`}>{agent.description}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Core Features & Industry Sectors */}
          <div className="lg:col-span-1 space-y-6">
            {/* Rating */}
            <div className={`p-4 rounded-lg ${isCEO ? "bg-purple-50 border border-purple-200" : "bg-gray-50"}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{agent.rating}</span>
                  <span className={`${isCEO ? "text-purple-600" : "text-gray-500"}`}>({agent.reviews} reviews)</span>
                </div>
                <Badge variant="secondary" className={`text-xs ${isCEO ? "bg-purple-100 text-purple-800" : ""}`}>
                  {isCEO ? "Executive Level" : "Expert Level"}
                </Badge>
              </div>
              {!showPricing && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPricing(true)}
                  className={`w-full ${isCEO ? "border-purple-300 text-purple-700 hover:bg-purple-50" : ""}`}
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  View Pricing
                </Button>
              )}
              {showPricing && (
                <div className="text-center">
                  <span className={`text-3xl font-bold ${isCEO ? "text-purple-600" : "text-green-600"}`}>
                    {agent.price === 0 ? "Free" : `$${agent.price}`}
                  </span>
                  <p className={`text-sm ${isCEO ? "text-purple-600" : "text-gray-600"}`}>
                    {isCEO ? "Always included" : "One-time deployment"}
                  </p>
                </div>
              )}
            </div>

            {/* Core Features */}
            <div>
              <h3 className={`font-semibold mb-3 flex items-center ${isCEO ? "text-purple-800" : ""}`}>
                <CheckCircle className={`h-4 w-4 mr-2 ${isCEO ? "text-purple-600" : "text-green-600"}`} />
                Core Features
              </h3>
              <div className="space-y-2">
                {agent.coreFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle
                      className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isCEO ? "text-purple-600" : "text-green-600"}`}
                    />
                    <span className={`text-sm ${isCEO ? "text-purple-700" : ""}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Sectors */}
            <div>
              <h3 className={`font-semibold mb-3 flex items-center ${isCEO ? "text-purple-800" : ""}`}>
                <Building2 className={`h-4 w-4 mr-2 ${isCEO ? "text-purple-600" : "text-blue-600"}`} />
                Main Industry Sectors
              </h3>
              <div className="flex flex-wrap gap-2">
                {agent.industrySectors.map((sector, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className={`text-xs ${isCEO ? "bg-purple-100 text-purple-800 border-purple-200" : ""}`}
                  >
                    {sector}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              {isDeployed ? (
                <Button disabled className="w-full">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Deployed & Active
                </Button>
              ) : isDeploying ? (
                <Button disabled className="w-full">
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                  Deploying...
                </Button>
              ) : (
                <>
                  <Button
                    onClick={() => onDeployAgent(agent)}
                    className={`w-full ${
                      isCEO
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        : ""
                    }`}
                  >
                    <Rocket className="h-4 w-4 mr-2" />
                    {isCEO ? "Deploy CEO Agent" : "Deploy Expert"}
                  </Button>
                  {!isInCart ? (
                    <Button
                      variant="outline"
                      onClick={() => onAddToCart(agent)}
                      className={`w-full ${isCEO ? "border-purple-300 text-purple-700 hover:bg-purple-50" : ""}`}
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <Button variant="outline" disabled className="w-full bg-transparent">
                      In Cart
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Right Column - Advanced Capabilities & Perfect For */}
          <div className="lg:col-span-2 space-y-6">
            {/* Advanced Capabilities */}
            <div>
              <h3 className={`font-semibold mb-4 flex items-center ${isCEO ? "text-purple-800" : ""}`}>
                <Zap className={`h-5 w-5 mr-2 ${isCEO ? "text-purple-600" : "text-purple-600"}`} />
                Advanced Capabilities
              </h3>
              <ScrollArea className="h-64">
                <div className="grid gap-4">
                  {agent.advancedCapabilities.map((capability, index) => {
                    const CapIcon = capability.icon
                    return (
                      <div
                        key={index}
                        className={`border rounded-lg p-4 hover:bg-gray-50 transition-colors ${
                          isCEO ? "border-purple-200 hover:bg-purple-50" : ""
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${isCEO ? "bg-purple-100" : "bg-purple-100"}`}>
                            <CapIcon className={`h-4 w-4 ${isCEO ? "text-purple-600" : "text-purple-600"}`} />
                          </div>
                          <div>
                            <h4 className={`font-medium mb-1 ${isCEO ? "text-purple-800" : ""}`}>{capability.title}</h4>
                            <p className={`text-sm ${isCEO ? "text-purple-700" : "text-gray-600"}`}>
                              {capability.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </ScrollArea>
            </div>

            <Separator />

            {/* Perfect For */}
            <div>
              <h3 className={`font-semibold mb-4 flex items-center ${isCEO ? "text-purple-800" : ""}`}>
                <Target className={`h-5 w-5 mr-2 ${isCEO ? "text-purple-600" : "text-green-600"}`} />
                Perfect For
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {agent.perfectFor.map((role, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 p-2 rounded-lg ${
                      isCEO ? "bg-purple-50 border border-purple-200" : "bg-green-50"
                    }`}
                  >
                    <CheckCircle className={`h-4 w-4 flex-shrink-0 ${isCEO ? "text-purple-600" : "text-green-600"}`} />
                    <span className={`text-sm font-medium ${isCEO ? "text-purple-800" : ""}`}>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
