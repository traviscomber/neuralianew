"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Globe,
  ArrowRight,
  BarChart3,
  Target,
  Lightbulb,
} from "lucide-react"

interface MarketMetric {
  label: string
  value: string
  change: number
  trend: "up" | "down" | "stable"
  description: string
}

interface OpportunityItem {
  title: string
  description: string
  impact: "high" | "medium" | "low"
  timeline: string
  investment: string
}

interface RiskFactor {
  category: string
  level: "low" | "medium" | "high"
  description: string
  mitigation: string
}

const marketMetrics: MarketMetric[] = [
  {
    label: "GDP Growth",
    value: "2.4%",
    change: 0.3,
    trend: "up",
    description: "Steady economic recovery post-pandemic",
  },
  {
    label: "Digital Adoption",
    value: "78%",
    change: 12,
    trend: "up",
    description: "Rapid digitalization across all sectors",
  },
  {
    label: "Consumer Confidence",
    value: "65",
    change: -2,
    trend: "down",
    description: "Slight decline due to inflation concerns",
  },
  {
    label: "Business Investment",
    value: "$45B",
    change: 8,
    trend: "up",
    description: "Strong foreign direct investment inflows",
  },
]

const opportunities: OpportunityItem[] = [
  {
    title: "E-commerce Expansion",
    description: "Online retail growing 25% annually with significant gaps in rural markets",
    impact: "high",
    timeline: "6-12 months",
    investment: "$2-5M",
  },
  {
    title: "Fintech Services",
    description: "60% of population still underbanked, creating opportunities for digital financial services",
    impact: "high",
    timeline: "12-18 months",
    investment: "$5-10M",
  },
  {
    title: "Renewable Energy",
    description: "Government incentives for solar and wind projects with guaranteed returns",
    impact: "medium",
    timeline: "18-24 months",
    investment: "$10-20M",
  },
  {
    title: "AgTech Solutions",
    description: "Traditional agriculture sector ready for digital transformation",
    impact: "medium",
    timeline: "12-24 months",
    investment: "$3-8M",
  },
]

const riskFactors: RiskFactor[] = [
  {
    category: "Political Risk",
    level: "medium",
    description: "Upcoming elections may bring policy changes",
    mitigation: "Diversify political relationships and maintain flexible strategies",
  },
  {
    category: "Currency Volatility",
    level: "high",
    description: "Chilean Peso subject to commodity price fluctuations",
    mitigation: "Implement currency hedging strategies and price in USD when possible",
  },
  {
    category: "Regulatory Changes",
    level: "low",
    description: "Stable regulatory environment with predictable changes",
    mitigation: "Maintain compliance team and regular government relations",
  },
  {
    category: "Competition",
    level: "medium",
    description: "Increasing competition from regional and global players",
    mitigation: "Focus on differentiation and local market knowledge advantages",
  },
]

const recommendations = [
  {
    title: "Market Entry Strategy",
    description: "Start with Santiago and Valparaíso regions before expanding nationally",
    priority: "high",
    timeline: "Q1 2024",
  },
  {
    title: "Local Partnerships",
    description: "Establish strategic alliances with established Chilean companies",
    priority: "high",
    timeline: "Q1-Q2 2024",
  },
  {
    title: "Regulatory Compliance",
    description: "Ensure full compliance with Chilean data protection and business laws",
    priority: "medium",
    timeline: "Q2 2024",
  },
  {
    title: "Talent Acquisition",
    description: "Build local team with market knowledge and cultural understanding",
    priority: "medium",
    timeline: "Q2-Q3 2024",
  },
]

export function ChileanResponseDemo() {
  const [activeTab, setActiveTab] = useState("analysis")

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <BarChart3 className="h-4 w-4 text-gray-600" />
    }
  }

  const getImpactColor = (impact: "high" | "medium" | "low") => {
    switch (impact) {
      case "high":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRiskColor = (level: "high" | "medium" | "low") => {
    switch (level) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-green-100 text-green-800"
    }
  }

  const getPriorityColor = (priority: "high" | "medium" | "low") => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-green-100 text-green-800"
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Chilean Market Analysis</h2>
        <p className="text-lg text-gray-600">
          Comprehensive market intelligence powered by AI analysis of Chilean business environment
        </p>
        <Badge className="mt-2 bg-blue-100 text-blue-800">
          <Globe className="h-3 w-3 mr-1" />
          Real-time Market Data
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="analysis">Market Analysis</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="analysis" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketMetrics.map((metric, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">{metric.label}</CardTitle>
                    {getTrendIcon(metric.trend)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div
                    className={`text-sm flex items-center ${metric.change >= 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {metric.change >= 0 ? "+" : ""}
                    {metric.change}% vs last quarter
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Risk Assessment */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {riskFactors.map((risk, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{risk.category}</h4>
                    <Badge className={getRiskColor(risk.level)}>{risk.level.toUpperCase()}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{risk.description}</p>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>Mitigation:</strong> {risk.mitigation}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Market Readiness Score */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-green-600" />
                Market Readiness Score
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Economic Stability</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Digital Infrastructure</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Regulatory Environment</span>
                    <span>72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Market Demand</span>
                    <span>82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <div>
                    <p className="font-semibold text-green-800">Overall Score: 79% - Market Ready</p>
                    <p className="text-sm text-green-700">
                      Chile presents a favorable environment for market entry with manageable risks
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="border-2 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                    <Badge className={getImpactColor(opportunity.impact)}>
                      {opportunity.impact.toUpperCase()} IMPACT
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{opportunity.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Timeline:</span>
                      <p className="text-gray-600">{opportunity.timeline}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Investment:</span>
                      <p className="text-gray-600">{opportunity.investment}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Lightbulb className="h-4 w-4 mr-2" />
                    Explore Opportunity
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Market Size Estimation */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                Total Addressable Market (TAM)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$12.5B</div>
                  <p className="text-sm text-gray-600">Total Market Size</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$3.2B</div>
                  <p className="text-sm text-gray-600">Serviceable Market</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$850M</div>
                  <p className="text-sm text-gray-600">Obtainable Market</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <Card key={index} className="border-2 hover:border-purple-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{rec.title}</h3>
                      <p className="text-gray-600">{rec.description}</p>
                    </div>
                    <div className="ml-4 space-y-2">
                      <Badge className={getPriorityColor(rec.priority)}>{rec.priority.toUpperCase()}</Badge>
                      <div className="text-sm text-gray-500">{rec.timeline}</div>
                    </div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    View Action Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Next Steps */}
          <Card className="border-2 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-blue-600" />
                Immediate Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <p className="text-gray-700">Conduct detailed market research in Santiago metropolitan area</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <p className="text-gray-700">Identify and approach potential local partners</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <p className="text-gray-700">Establish legal entity and ensure regulatory compliance</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <p className="text-gray-700">Launch pilot program with select customers</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ChileanResponseDemo
