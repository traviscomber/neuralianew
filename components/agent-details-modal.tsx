"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Clock,
  Star,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Brain,
  Target,
  Headphones,
  Wrench,
  Megaphone,
  BarChart3,
  Plus,
  Crown,
} from "lucide-react"

interface AgentDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  agentId: string
  onAddToCart?: (agent: any) => void
  onDeployAgent?: (agent: any) => void
  isInCart?: boolean
  isDeployed?: boolean
  isDeploying?: boolean
}

const agentDetails = {
  "ceo-neural-agent": {
    name: "CEO Neural Agent",
    description:
      "Executive-level AI orchestrator that manages all business operations with C-suite intelligence and strategic oversight",
    price: 0,
    icon: Brain,
    color: "bg-gradient-to-r from-purple-600 to-indigo-600",
    category: "Executive Core",
    complexity: "Executive Level",
    deploymentTime: "Instant",
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
    advancedCapabilities: [
      "Multi-dimensional strategic analysis with real-time market intelligence",
      "Autonomous decision-making framework with risk assessment protocols",
      "Integrated business intelligence with predictive modeling capabilities",
      "Executive dashboard with KPI monitoring and alert systems",
      "Stakeholder communication automation with personalized messaging",
      "Crisis response protocols with escalation management",
    ],
    perfectFor: [
      "C-suite executives seeking strategic AI coordination",
      "Growing companies needing executive-level oversight",
      "Organizations requiring integrated business intelligence",
      "Companies implementing digital transformation initiatives",
      "Businesses needing crisis management capabilities",
    ],
    industries: [
      "Technology & Software",
      "Financial Services",
      "Healthcare & Life Sciences",
      "Manufacturing & Industrial",
      "Professional Services",
      "Retail & E-commerce",
    ],
  },
  "hr-advisory": {
    name: "HR Advisory Expert",
    description:
      "Comprehensive human resources expertise covering policy development, employee relations, and strategic workforce management",
    price: 299,
    icon: Users,
    color: "bg-blue-600",
    category: "Human Resources",
    complexity: "Expert Level",
    deploymentTime: "24-48 hours",
    features: [
      "Employee Relations Management",
      "Policy Development & Compliance",
      "Performance Management",
      "Talent Strategy",
      "Recruitment & Onboarding",
      "Training & Development",
      "Compensation Analysis",
      "Employee Engagement",
    ],
    advancedCapabilities: [
      "AI-powered talent acquisition with predictive candidate matching",
      "Automated performance review cycles with bias detection",
      "Real-time employee sentiment analysis and engagement tracking",
      "Compliance monitoring with regulatory update notifications",
      "Personalized career development pathways with skill gap analysis",
      "Predictive turnover modeling with retention strategy recommendations",
    ],
    perfectFor: [
      "HR departments seeking to modernize processes",
      "Growing companies scaling their workforce",
      "Organizations focused on employee experience",
      "Companies needing compliance management",
      "Businesses implementing performance management systems",
    ],
    industries: [
      "Technology & Software",
      "Healthcare & Life Sciences",
      "Financial Services",
      "Professional Services",
      "Manufacturing & Industrial",
      "Education & Training",
    ],
  },
  "sales-coach": {
    name: "Sales Performance Coach",
    description:
      "Advanced sales methodology expert specializing in deal strategy, pipeline optimization, and revenue acceleration",
    price: 399,
    icon: Target,
    color: "bg-red-600",
    category: "Sales & Revenue",
    complexity: "Expert Level",
    deploymentTime: "24-48 hours",
    features: [
      "Deal Strategy Optimization",
      "Advanced Sales Methodologies",
      "Pipeline Management",
      "Revenue Forecasting",
      "Lead Qualification",
      "Sales Training & Coaching",
      "CRM Integration",
      "Performance Analytics",
    ],
    advancedCapabilities: [
      "AI-driven deal scoring with win probability analysis",
      "Automated sales sequence optimization with A/B testing",
      "Real-time competitive intelligence and positioning guidance",
      "Predictive revenue forecasting with scenario modeling",
      "Personalized coaching recommendations based on performance data",
      "Advanced pipeline analytics with bottleneck identification",
    ],
    perfectFor: [
      "Sales teams looking to increase conversion rates",
      "Organizations scaling their sales operations",
      "Companies implementing new sales methodologies",
      "Businesses needing revenue predictability",
      "Sales managers seeking data-driven insights",
    ],
    industries: [
      "Technology & Software",
      "Financial Services",
      "Real Estate & Construction",
      "Manufacturing & Industrial",
      "Professional Services",
      "Healthcare & Life Sciences",
    ],
  },
  "customer-service": {
    name: "Customer Experience Expert",
    description: "Omnichannel customer service specialist focused on satisfaction optimization and service excellence",
    price: 249,
    icon: Headphones,
    color: "bg-teal-600",
    category: "Customer Support",
    complexity: "Intermediate Level",
    deploymentTime: "12-24 hours",
    features: [
      "Omnichannel Support Strategy",
      "Customer Journey Optimization",
      "Service Quality Management",
      "Retention Strategies",
      "Ticket Management",
      "Knowledge Base Optimization",
      "Customer Feedback Analysis",
      "Support Team Training",
    ],
    advancedCapabilities: [
      "AI-powered sentiment analysis with real-time escalation triggers",
      "Automated ticket routing with intelligent priority assignment",
      "Predictive customer churn modeling with intervention strategies",
      "Multi-language support with cultural context awareness",
      "Self-service optimization with dynamic content recommendations",
      "Customer satisfaction prediction with proactive outreach",
    ],
    perfectFor: [
      "Customer service teams seeking efficiency gains",
      "Companies focused on customer retention",
      "Organizations implementing omnichannel support",
      "Businesses needing 24/7 service capabilities",
      "Companies scaling their support operations",
    ],
    industries: [
      "Retail & E-commerce",
      "Technology & Software",
      "Financial Services",
      "Healthcare & Life Sciences",
      "Travel & Hospitality",
      "Telecommunications",
    ],
  },
  "technical-support": {
    name: "Technical Systems Expert",
    description:
      "Advanced technical specialist for system architecture, troubleshooting, and infrastructure optimization",
    price: 349,
    icon: Wrench,
    color: "bg-indigo-600",
    category: "Technical Operations",
    complexity: "Expert Level",
    deploymentTime: "48-72 hours",
    features: [
      "System Architecture Analysis",
      "Advanced Troubleshooting",
      "Infrastructure Optimization",
      "Security Assessment",
      "Performance Monitoring",
      "Disaster Recovery Planning",
      "Technology Stack Evaluation",
      "DevOps Integration",
    ],
    advancedCapabilities: [
      "Automated system health monitoring with predictive failure detection",
      "AI-driven root cause analysis with resolution recommendations",
      "Infrastructure optimization with cost-performance modeling",
      "Security vulnerability assessment with automated patching",
      "Performance bottleneck identification with scaling recommendations",
      "Disaster recovery simulation with business continuity planning",
    ],
    perfectFor: [
      "IT departments managing complex infrastructure",
      "Companies undergoing digital transformation",
      "Organizations needing security expertise",
      "Businesses scaling their technical operations",
      "Teams implementing DevOps practices",
    ],
    industries: [
      "Technology & Software",
      "Financial Services",
      "Healthcare & Life Sciences",
      "Manufacturing & Industrial",
      "Government & Public Sector",
      "Telecommunications",
    ],
  },
  marketing: {
    name: "Marketing Strategy Expert",
    description:
      "Comprehensive marketing intelligence covering strategy development, campaign optimization, and growth acceleration",
    price: 329,
    icon: Megaphone,
    color: "bg-orange-600",
    category: "Marketing & Growth",
    complexity: "Expert Level",
    deploymentTime: "24-48 hours",
    features: [
      "Strategic Campaign Development",
      "Multi-Channel Optimization",
      "Brand Positioning",
      "Growth Marketing",
      "Content Strategy",
      "SEO & SEM Management",
      "Social Media Strategy",
      "Marketing Analytics",
    ],
    advancedCapabilities: [
      "AI-powered audience segmentation with behavioral prediction",
      "Automated campaign optimization with real-time budget allocation",
      "Content generation with brand voice consistency",
      "Predictive customer lifetime value modeling",
      "Cross-channel attribution analysis with ROI optimization",
      "Competitive intelligence with market positioning insights",
    ],
    perfectFor: [
      "Marketing teams seeking data-driven strategies",
      "Companies launching new products or services",
      "Organizations scaling their marketing efforts",
      "Businesses needing brand positioning guidance",
      "Teams implementing growth marketing tactics",
    ],
    industries: [
      "Retail & E-commerce",
      "Technology & Software",
      "Healthcare & Life Sciences",
      "Financial Services",
      "Travel & Hospitality",
      "Professional Services",
    ],
  },
  analytics: {
    name: "Data Intelligence Expert",
    description:
      "Advanced analytics specialist providing predictive insights, statistical modeling, and business intelligence",
    price: 379,
    icon: BarChart3,
    color: "bg-green-600",
    category: "Data & Analytics",
    complexity: "Expert Level",
    deploymentTime: "48-72 hours",
    features: [
      "Predictive Analytics",
      "Statistical Modeling",
      "Business Intelligence",
      "Data Visualization",
      "Machine Learning Implementation",
      "Data Pipeline Optimization",
      "KPI Dashboard Creation",
      "Advanced Reporting",
    ],
    advancedCapabilities: [
      "Real-time predictive modeling with automated model retraining",
      "Advanced statistical analysis with causal inference capabilities",
      "Custom machine learning pipeline development and deployment",
      "Interactive dashboard creation with drill-down capabilities",
      "Automated anomaly detection with alert systems",
      "Data quality monitoring with cleansing recommendations",
    ],
    perfectFor: [
      "Data teams seeking advanced analytics capabilities",
      "Companies implementing data-driven decision making",
      "Organizations needing predictive insights",
      "Businesses scaling their analytics operations",
      "Teams building machine learning solutions",
    ],
    industries: [
      "Financial Services",
      "Technology & Software",
      "Healthcare & Life Sciences",
      "Retail & E-commerce",
      "Manufacturing & Industrial",
      "Government & Public Sector",
    ],
  },
}

export function AgentDetailsModal({
  isOpen,
  onClose,
  agentId,
  onAddToCart,
  onDeployAgent,
  isInCart = false,
  isDeployed = false,
  isDeploying = false,
}: AgentDetailsModalProps) {
  const agent = agentDetails[agentId as keyof typeof agentDetails]

  if (!agent) {
    return null
  }

  const IconComponent = agent.icon
  const isCEO = agentId === "ceo-neural-agent"

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        id: agentId,
        type: agentId,
        name: agent.name,
        description: agent.description,
        price: agent.price,
        features: agent.features,
        icon: agent.icon,
        color: agent.color,
      })
    }
  }

  const handleDeploy = () => {
    if (onDeployAgent) {
      onDeployAgent({
        id: agentId,
        type: agentId,
        name: agent.name,
        description: agent.description,
        price: agent.price,
        features: agent.features,
        icon: agent.icon,
        color: agent.color,
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg ${agent.color}`}>
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <div>
              <DialogTitle className="flex items-center gap-2">
                {agent.name}
                {isCEO && <Crown className="h-5 w-5 text-yellow-500" />}
              </DialogTitle>
              <DialogDescription>{agent.description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            {/* Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">${agent.price}</div>
                  <div className="text-sm text-gray-500">One-time setup</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">
                    <Clock className="h-6 w-6 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-500">{agent.deploymentTime}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    <Star className="h-6 w-6 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-500">{agent.complexity}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    <Shield className="h-6 w-6 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-500">Enterprise</div>
                </CardContent>
              </Card>
            </div>

            {/* Core Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Core Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {agent.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className={`h-4 w-4 ${isCEO ? "text-purple-500" : "text-green-500"}`} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Industry Sectors */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Main Industry Sectors</h3>
              <div className="flex flex-wrap gap-2">
                {agent.industries.map((industry, index) => (
                  <Badge key={index} variant="outline" className={isCEO ? "border-purple-300 text-purple-700" : ""}>
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Advanced Capabilities */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Advanced Capabilities</h3>
              <div className="space-y-3">
                {agent.advancedCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Zap className={`h-4 w-4 mt-0.5 ${isCEO ? "text-purple-500" : "text-blue-500"}`} />
                    <span className="text-sm text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Perfect For */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Perfect For</h3>
              <div className="space-y-2">
                {agent.perfectFor.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <TrendingUp className={`h-4 w-4 mt-0.5 ${isCEO ? "text-purple-500" : "text-green-500"}`} />
                    <span className="text-sm text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>

        <Separator />

        <div className="flex space-x-3">
          {isDeployed ? (
            <Button className="flex-1" disabled>
              <CheckCircle className="mr-2 h-4 w-4" />
              Deployed
            </Button>
          ) : isDeploying ? (
            <Button className="flex-1" disabled>
              <Clock className="mr-2 h-4 w-4" />
              Deploying...
            </Button>
          ) : isInCart ? (
            <Button onClick={handleDeploy} className="flex-1">
              <Zap className="mr-2 h-4 w-4" />
              Deploy Now
            </Button>
          ) : (
            <Button onClick={handleAddToCart} className="flex-1">
              <Plus className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          )}
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
