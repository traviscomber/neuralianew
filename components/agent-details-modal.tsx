"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Crown,
  Star,
  Zap,
  Plus,
  MessageSquare,
  Clock,
  ShoppingCart,
  Brain,
  Users,
  Target,
  Headphones,
  Wrench,
  Megaphone,
  BarChart3,
  Building2,
  TrendingUp,
  Shield,
  Award,
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

const agentDetails = {
  "ceo-neural-agent": {
    name: "CEO Neural Agent",
    description: "Executive-level AI orchestrator that manages all business operations with C-suite intelligence",
    icon: Crown,
    color: "bg-gradient-to-r from-purple-600 to-indigo-600",
    price: 0,
    category: "Executive Core",
    level: "Executive Level",
    features: [
      "Executive Strategic Planning",
      "Cross-Functional Orchestration",
      "Performance Optimization",
      "Risk Management & Decision Support",
      "Board-Level Reporting",
      "Stakeholder Communication",
      "Crisis Management",
      "Innovation Strategy",
    ],
    capabilities: [
      "Strategic Vision Development",
      "Organizational Alignment",
      "Executive Decision Making",
      "Leadership Coaching",
      "Change Management",
      "Corporate Governance",
      "Investor Relations",
      "Merger & Acquisition Strategy",
    ],
    perfectFor: [
      "C-Suite Executives",
      "Business Owners",
      "Strategic Planners",
      "Board Members",
      "Management Consultants",
      "Investment Advisors",
    ],
    industries: [
      "Technology",
      "Healthcare",
      "Financial Services",
      "Manufacturing",
      "Retail & E-commerce",
      "Professional Services",
      "Real Estate",
      "Energy & Utilities",
    ],
  },
  "hr-advisory": {
    name: "HR Advisory Expert",
    description:
      "Comprehensive human resources expertise covering policy development and strategic workforce management",
    icon: Users,
    color: "bg-blue-600",
    price: 299,
    category: "Human Resources",
    level: "Expert Level",
    features: [
      "Employee Relations Management",
      "Policy Development & Compliance",
      "Performance Management",
      "Talent Strategy",
      "Compensation & Benefits",
      "Training & Development",
      "Diversity & Inclusion",
      "HR Analytics",
    ],
    capabilities: [
      "Recruitment & Selection",
      "Employee Engagement",
      "Conflict Resolution",
      "Legal Compliance",
      "Organizational Development",
      "Succession Planning",
      "Culture Transformation",
      "HR Technology Implementation",
    ],
    perfectFor: [
      "HR Directors",
      "People Operations Teams",
      "Talent Acquisition Specialists",
      "Employee Relations Managers",
      "Compensation Analysts",
      "Training Coordinators",
    ],
    industries: [
      "Technology",
      "Healthcare",
      "Financial Services",
      "Manufacturing",
      "Education",
      "Government",
      "Non-Profit",
      "Hospitality",
    ],
  },
  "sales-coach": {
    name: "Sales Performance Coach",
    description: "Advanced sales methodology expert specializing in deal strategy and revenue acceleration",
    icon: Target,
    color: "bg-red-600",
    price: 399,
    category: "Sales",
    level: "Expert Level",
    features: [
      "Deal Strategy Optimization",
      "Advanced Sales Methodologies",
      "Pipeline Management",
      "Revenue Forecasting",
      "Sales Team Training",
      "Customer Relationship Management",
      "Negotiation Strategies",
      "Sales Analytics",
    ],
    capabilities: [
      "Lead Generation",
      "Qualification Frameworks",
      "Objection Handling",
      "Closing Techniques",
      "Account Management",
      "Territory Planning",
      "Sales Process Design",
      "Performance Coaching",
    ],
    perfectFor: [
      "Sales Directors",
      "Account Executives",
      "Sales Development Reps",
      "Business Development Managers",
      "Channel Partners",
      "Sales Operations Teams",
    ],
    industries: [
      "Technology",
      "SaaS",
      "Financial Services",
      "Real Estate",
      "Manufacturing",
      "Healthcare",
      "Telecommunications",
      "Professional Services",
    ],
  },
  "customer-service": {
    name: "Customer Experience Expert",
    description: "Omnichannel customer service specialist focused on satisfaction optimization and service excellence",
    icon: Headphones,
    color: "bg-teal-600",
    price: 249,
    category: "Customer Support",
    level: "Expert Level",
    features: [
      "Omnichannel Support Strategy",
      "Customer Journey Optimization",
      "Service Quality Management",
      "Retention Strategies",
      "Support Team Training",
      "Escalation Management",
      "Customer Feedback Analysis",
      "Service Level Optimization",
    ],
    capabilities: [
      "Multi-Channel Integration",
      "Response Time Optimization",
      "Customer Satisfaction Measurement",
      "Support Process Design",
      "Knowledge Base Management",
      "Self-Service Solutions",
      "Customer Success Programs",
      "Complaint Resolution",
    ],
    perfectFor: [
      "Customer Success Managers",
      "Support Team Leaders",
      "Service Operations Managers",
      "Customer Experience Directors",
      "Quality Assurance Teams",
      "Training Coordinators",
    ],
    industries: [
      "E-commerce",
      "SaaS",
      "Telecommunications",
      "Financial Services",
      "Healthcare",
      "Travel & Hospitality",
      "Retail",
      "Technology",
    ],
  },
  "technical-support": {
    name: "Technical Systems Expert",
    description:
      "Advanced technical specialist for system architecture, troubleshooting, and infrastructure optimization",
    icon: Wrench,
    color: "bg-indigo-600",
    price: 349,
    category: "Technical",
    level: "Expert Level",
    features: [
      "System Architecture Analysis",
      "Advanced Troubleshooting",
      "Infrastructure Optimization",
      "Security Assessment",
      "Performance Monitoring",
      "Disaster Recovery Planning",
      "Technology Integration",
      "Technical Documentation",
    ],
    capabilities: [
      "Network Design",
      "Database Optimization",
      "Cloud Migration",
      "DevOps Implementation",
      "Security Auditing",
      "Capacity Planning",
      "Automation Strategies",
      "Technical Training",
    ],
    perfectFor: [
      "IT Directors",
      "System Administrators",
      "DevOps Engineers",
      "Technical Architects",
      "Security Specialists",
      "Infrastructure Teams",
    ],
    industries: [
      "Technology",
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Government",
      "Education",
      "Telecommunications",
      "Energy",
    ],
  },
  marketing: {
    name: "Marketing Strategy Expert",
    description: "Comprehensive marketing intelligence covering strategy development and growth acceleration",
    icon: Megaphone,
    color: "bg-orange-600",
    price: 329,
    category: "Marketing",
    level: "Expert Level",
    features: [
      "Strategic Campaign Development",
      "Multi-Channel Optimization",
      "Brand Positioning",
      "Growth Marketing",
      "Content Strategy",
      "Digital Marketing",
      "Market Research",
      "Marketing Analytics",
    ],
    capabilities: [
      "Customer Segmentation",
      "Competitive Analysis",
      "Marketing Automation",
      "Social Media Strategy",
      "SEO/SEM Optimization",
      "Email Marketing",
      "Conversion Optimization",
      "ROI Measurement",
    ],
    perfectFor: [
      "Marketing Directors",
      "Digital Marketing Managers",
      "Brand Managers",
      "Growth Marketers",
      "Content Strategists",
      "Marketing Analysts",
    ],
    industries: [
      "E-commerce",
      "SaaS",
      "Consumer Goods",
      "Healthcare",
      "Financial Services",
      "Real Estate",
      "Education",
      "Entertainment",
    ],
  },
  analytics: {
    name: "Data Intelligence Expert",
    description: "Advanced analytics specialist providing predictive insights and business intelligence",
    icon: BarChart3,
    color: "bg-green-600",
    price: 379,
    category: "Analytics",
    level: "Expert Level",
    features: [
      "Predictive Analytics",
      "Statistical Modeling",
      "Business Intelligence",
      "Data Visualization",
      "Machine Learning",
      "Data Mining",
      "Performance Metrics",
      "Reporting Automation",
    ],
    capabilities: [
      "Data Pipeline Design",
      "Advanced Analytics",
      "Dashboard Creation",
      "Trend Analysis",
      "Forecasting Models",
      "A/B Testing",
      "Customer Analytics",
      "Operational Intelligence",
    ],
    perfectFor: [
      "Data Scientists",
      "Business Analysts",
      "Analytics Managers",
      "BI Developers",
      "Research Teams",
      "Strategy Analysts",
    ],
    industries: [
      "Technology",
      "Financial Services",
      "Healthcare",
      "Retail",
      "Manufacturing",
      "Media & Entertainment",
      "Government",
      "Sports & Gaming",
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
  const agent = agentDetails[agentId as keyof typeof agentDetails]

  if (!agent) {
    return null
  }

  const IconComponent = agent.icon
  const isCEO = agentId === "ceo-neural-agent"

  const handleAction = () => {
    if (isDeployed) {
      // Open chat
      return
    }
    if (isInCart) {
      onDeployAgent(agent)
    } else {
      onAddToCart(agent)
    }
  }

  const getActionButton = () => {
    if (isDeployed) {
      return (
        <Button className="w-full">
          <MessageSquare className="mr-2 h-4 w-4" />
          Chat Now
        </Button>
      )
    }

    if (isDeploying) {
      return (
        <Button disabled className="w-full">
          <Clock className="mr-2 h-4 w-4" />
          Deploying...
        </Button>
      )
    }

    if (isInCart) {
      return (
        <Button onClick={handleAction} className="w-full">
          <Zap className="mr-2 h-4 w-4" />
          Deploy Now
        </Button>
      )
    }

    return (
      <Button onClick={handleAction} className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg ${agent.color}`}>
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <div>
              <DialogTitle className="flex items-center text-xl">
                {agent.name}
                {isCEO && <Crown className="ml-2 h-5 w-5 text-purple-600" />}
              </DialogTitle>
              <DialogDescription className="text-base">{agent.description}</DialogDescription>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <Badge variant="outline" className={isCEO ? "border-purple-300 text-purple-700" : ""}>
              {agent.category}
            </Badge>
            <Badge variant="secondary" className={isCEO ? "bg-purple-100 text-purple-800" : ""}>
              {agent.level}
            </Badge>
            {isCEO && (
              <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <Crown className="mr-1 h-3 w-3" />
                CEO & Orchestrator
              </Badge>
            )}
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
            <TabsTrigger value="industries">Industries</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-yellow-500" />
                    Core Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {agent.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${isCEO ? "text-purple-500" : "text-green-500"}`} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {agent.features.length > 6 && (
                      <div className="text-xs text-gray-500 pl-6">+{agent.features.length - 6} more features</div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-blue-500" />
                    Perfect For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {agent.perfectFor.map((role, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="mr-2 h-5 w-5 text-gray-600" />
                  Main Industry Sectors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {agent.industries.map((industry, index) => (
                    <Badge key={index} variant="outline" className="justify-center py-2">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="capabilities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-purple-500" />
                  Advanced Capabilities
                </CardTitle>
                <CardDescription>Comprehensive expertise and specialized skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {agent.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <TrendingUp className={`h-4 w-4 ${isCEO ? "text-purple-500" : "text-blue-500"}`} />
                      <span className="text-sm font-medium">{capability}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="industries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="mr-2 h-5 w-5 text-gray-600" />
                  Industry Expertise
                </CardTitle>
                <CardDescription>Specialized knowledge across key business sectors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {agent.industries.map((industry, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                      <Building2 className="h-5 w-5 text-gray-500" />
                      <div>
                        <h4 className="font-medium">{industry}</h4>
                        <p className="text-xs text-gray-500">Specialized expertise and best practices</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-green-500" />
                  Pricing & Deployment
                </CardTitle>
                <CardDescription>Transparent pricing with enterprise-grade features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {agent.price === 0 ? "Free" : `$${agent.price}`}
                    {agent.price > 0 && <span className="text-lg text-gray-500">/month</span>}
                  </div>
                  {isCEO && (
                    <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white mb-4">
                      <Crown className="mr-1 h-3 w-3" />
                      Executive Tier - Always Free
                    </Badge>
                  )}
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold">What's Included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">24/7 Availability</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Unlimited Conversations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Real-time Insights</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Enterprise Security</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">API Integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Custom Training</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex space-x-3">
                  {getActionButton()}
                  {isInCart && (
                    <Badge className="bg-orange-100 text-orange-800 px-3 py-1">
                      <ShoppingCart className="mr-1 h-3 w-3" />
                      In Cart
                    </Badge>
                  )}
                  {isDeployed && (
                    <Badge className="bg-green-100 text-green-800 px-3 py-1">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Deployed
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
