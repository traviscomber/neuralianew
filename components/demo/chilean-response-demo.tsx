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
  Users,
  Building,
  Briefcase,
  PieChart,
  LineChart,
  MapPin,
  Calendar,
  Clock,
  Star,
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
  roi: string
}

interface RiskFactor {
  category: string
  level: "low" | "medium" | "high"
  description: string
  mitigation: string
  probability: number
}

const marketMetrics: MarketMetric[] = [
  {
    label: "GDP Growth",
    value: "2.4%",
    change: 0.3,
    trend: "up",
    description: "Steady economic recovery with strong fundamentals",
  },
  {
    label: "Digital Adoption",
    value: "78%",
    change: 12,
    trend: "up",
    description: "Rapid digitalization across all business sectors",
  },
  {
    label: "Consumer Confidence",
    value: "65",
    change: -2,
    trend: "down",
    description: "Slight decline due to global inflation concerns",
  },
  {
    label: "Business Investment",
    value: "$45B",
    change: 8,
    trend: "up",
    description: "Strong foreign direct investment inflows",
  },
  {
    label: "Market Size",
    value: "$280B",
    change: 5.2,
    trend: "up",
    description: "Total addressable market showing consistent growth",
  },
  {
    label: "Competition Index",
    value: "6.8/10",
    change: 0.5,
    trend: "up",
    description: "Moderate competition with room for differentiation",
  },
]

const opportunities: OpportunityItem[] = [
  {
    title: "E-commerce Expansion",
    description: "Online retail growing 25% annually with significant gaps in rural markets and mobile commerce",
    impact: "high",
    timeline: "6-12 months",
    investment: "$2-5M",
    roi: "180-250%",
  },
  {
    title: "Fintech Services",
    description: "60% of population still underbanked, creating massive opportunities for digital financial services",
    impact: "high",
    timeline: "12-18 months",
    investment: "$5-10M",
    roi: "200-300%",
  },
  {
    title: "Renewable Energy",
    description: "Government incentives for solar and wind projects with guaranteed long-term returns",
    impact: "medium",
    timeline: "18-24 months",
    investment: "$10-20M",
    roi: "120-180%",
  },
  {
    title: "AgTech Solutions",
    description: "Traditional agriculture sector ready for digital transformation and precision farming",
    impact: "medium",
    timeline: "12-24 months",
    investment: "$3-8M",
    roi: "150-220%",
  },
  {
    title: "Healthcare Technology",
    description: "Aging population and healthcare digitization creating demand for health tech solutions",
    impact: "high",
    timeline: "15-20 months",
    investment: "$4-12M",
    roi: "160-240%",
  },
  {
    title: "Education Technology",
    description: "Remote learning adoption and educational modernization driving EdTech demand",
    impact: "medium",
    timeline: "8-15 months",
    investment: "$1-4M",
    roi: "140-200%",
  },
]

const riskFactors: RiskFactor[] = [
  {
    category: "Political Risk",
    level: "medium",
    description: "Upcoming elections may bring policy changes affecting business regulations",
    mitigation: "Diversify political relationships and maintain flexible strategies across party lines",
    probability: 35,
  },
  {
    category: "Currency Volatility",
    level: "high",
    description: "Chilean Peso subject to commodity price fluctuations and global market sentiment",
    mitigation: "Implement comprehensive currency hedging strategies and price contracts in USD",
    probability: 65,
  },
  {
    category: "Regulatory Changes",
    level: "low",
    description: "Generally stable regulatory environment with predictable and gradual changes",
    mitigation: "Maintain dedicated compliance team and regular government relations program",
    probability: 20,
  },
  {
    category: "Economic Slowdown",
    level: "medium",
    description: "Global economic uncertainty could impact domestic demand and investment flows",
    mitigation: "Diversify revenue streams and maintain flexible cost structure",
    probability: 40,
  },
  {
    category: "Competition Intensity",
    level: "medium",
    description: "Increasing competition from regional players and global market entrants",
    mitigation: "Focus on differentiation, local market knowledge, and customer relationship advantages",
    probability: 50,
  },
  {
    category: "Supply Chain Disruption",
    level: "low",
    description: "Potential disruptions from global supply chain issues or natural disasters",
    mitigation: "Develop local supplier networks and maintain strategic inventory buffers",
    probability: 25,
  },
]

const recommendations = [
  {
    title: "Market Entry Strategy",
    description: "Begin with Santiago and Valparaíso regions, capturing 60% of target market before national expansion",
    priority: "high",
    timeline: "Q1 2024",
    impact: "Foundation for all subsequent growth",
    resources: "Market research team, local partnerships",
  },
  {
    title: "Strategic Partnerships",
    description: "Establish alliances with 2-3 established Chilean companies for market credibility and distribution",
    priority: "high",
    timeline: "Q1-Q2 2024",
    impact: "Accelerated market penetration and reduced entry costs",
    resources: "Business development, legal support",
  },
  {
    title: "Regulatory Compliance Framework",
    description: "Ensure full compliance with Chilean data protection, labor, and industry-specific regulations",
    priority: "medium",
    timeline: "Q2 2024",
    impact: "Risk mitigation and operational legitimacy",
    resources: "Legal team, compliance specialists",
  },
  {
    title: "Local Talent Acquisition",
    description: "Build core team of 15-20 local professionals with market knowledge and cultural understanding",
    priority: "medium",
    timeline: "Q2-Q3 2024",
    impact: "Cultural integration and market insights",
    resources: "HR team, recruitment partners",
  },
  {
    title: "Digital Marketing Infrastructure",
    description: "Establish comprehensive digital presence optimized for Chilean market preferences and behaviors",
    priority: "high",
    timeline: "Q1-Q2 2024",
    impact: "Brand awareness and customer acquisition",
    resources: "Marketing team, digital agencies",
  },
  {
    title: "Financial Infrastructure",
    description: "Set up local banking, payment processing, and financial reporting systems",
    priority: "medium",
    timeline: "Q2 2024",
    impact: "Operational efficiency and customer convenience",
    resources: "Finance team, banking partners",
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
        return "bg-green-100 text-green-800 border-green-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getRiskColor = (level: "high" | "medium" | "low") => {
    switch (level) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-green-100 text-green-800 border-green-200"
    }
  }

  const getPriorityColor = (priority: "high" | "medium" | "low") => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-green-100 text-green-800 border-green-200"
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Globe className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Chilean Market Intelligence</h2>
        </div>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
          Comprehensive AI-powered analysis of the Chilean market landscape, opportunities, and strategic
          recommendations for successful market entry and expansion.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
            <MapPin className="h-3 w-3 mr-1" />
            Chile Market Focus
          </Badge>
          <Badge className="bg-green-100 text-green-800 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Real-time Data
          </Badge>
          <Badge className="bg-purple-100 text-purple-800 border-purple-200">
            <Clock className="h-3 w-3 mr-1" />
            Updated Today
          </Badge>
        </div>
      </div>

      {/* Interactive Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="analysis" className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span>Market Analysis</span>
          </TabsTrigger>
          <TabsTrigger value="opportunities" className="flex items-center space-x-2">
            <Target className="h-4 w-4" />
            <span>Opportunities</span>
          </TabsTrigger>
          <TabsTrigger value="recommendations" className="flex items-center space-x-2">
            <Lightbulb className="h-4 w-4" />
            <span>Strategic Plan</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="analysis" className="space-y-8">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketMetrics.map((metric, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">{metric.label}</CardTitle>
                    {getTrendIcon(metric.trend)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div
                    className={`text-sm flex items-center mb-3 ${metric.change >= 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {metric.change >= 0 ? "+" : ""}
                    {metric.change}% vs last quarter
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Market Readiness Score */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Target className="h-6 w-6 mr-3 text-green-600" />
                Market Readiness Assessment
              </CardTitle>
              <p className="text-gray-600">Comprehensive evaluation of market entry conditions</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Economic Stability</span>
                      <span className="text-green-600 font-semibold">78%</span>
                    </div>
                    <Progress value={78} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Digital Infrastructure</span>
                      <span className="text-green-600 font-semibold">85%</span>
                    </div>
                    <Progress value={85} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Regulatory Environment</span>
                      <span className="text-yellow-600 font-semibold">72%</span>
                    </div>
                    <Progress value={72} className="h-3" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Market Demand</span>
                      <span className="text-green-600 font-semibold">82%</span>
                    </div>
                    <Progress value={82} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Competitive Landscape</span>
                      <span className="text-yellow-600 font-semibold">68%</span>
                    </div>
                    <Progress value={68} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Cultural Alignment</span>
                      <span className="text-green-600 font-semibold">79%</span>
                    </div>
                    <Progress value={79} className="h-3" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <p className="font-bold text-green-800 text-lg">Overall Score: 77% - Market Ready</p>
                    <p className="text-green-700">
                      Chile presents a favorable environment for market entry with manageable risks
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Low</div>
                    <div className="text-sm text-gray-600">Entry Barriers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">High</div>
                    <div className="text-sm text-gray-600">Growth Potential</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">6-12M</div>
                    <div className="text-sm text-gray-600">Recommended Timeline</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Assessment */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <AlertTriangle className="h-6 w-6 mr-3 text-yellow-600" />
                Comprehensive Risk Assessment
              </CardTitle>
              <p className="text-gray-600">Detailed analysis of potential risks and mitigation strategies</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {riskFactors.map((risk, index) => (
                <div key={index} className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900 text-lg">{risk.category}</h4>
                    <div className="flex items-center space-x-3">
                      <Badge className={`${getRiskColor(risk.level)} font-semibold`}>
                        {risk.level.toUpperCase()} RISK
                      </Badge>
                      <div className="text-sm text-gray-500">{risk.probability}% probability</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{risk.description}</p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong className="text-blue-900">Mitigation Strategy:</strong> {risk.mitigation}
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Risk Probability</span>
                      <span>{risk.probability}%</span>
                    </div>
                    <Progress value={risk.probability} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-8">
          {/* Market Size Overview */}
          <Card className="border-2 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <DollarSign className="h-6 w-6 mr-3 text-green-600" />
                Total Addressable Market Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$280B</div>
                  <p className="text-sm text-gray-600">Total Market Size</p>
                  <p className="text-xs text-gray-500 mt-1">All sectors combined</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$85B</div>
                  <p className="text-sm text-gray-600">Serviceable Market</p>
                  <p className="text-xs text-gray-500 mt-1">Addressable segments</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">$12B</div>
                  <p className="text-sm text-gray-600">Obtainable Market</p>
                  <p className="text-xs text-gray-500 mt-1">Realistic capture</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">7.2%</div>
                  <p className="text-sm text-gray-600">Annual Growth</p>
                  <p className="text-xs text-gray-500 mt-1">Market expansion rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opportunities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="border-2 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg font-bold">{opportunity.title}</CardTitle>
                    <Badge className={`${getImpactColor(opportunity.impact)} font-semibold`}>
                      {opportunity.impact.toUpperCase()} IMPACT
                    </Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="font-semibold text-gray-700 text-sm">Timeline</span>
                      </div>
                      <p className="text-gray-600 text-sm">{opportunity.timeline}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <DollarSign className="h-4 w-4 text-gray-500" />
                        <span className="font-semibold text-gray-700 text-sm">Investment</span>
                      </div>
                      <p className="text-gray-600 text-sm">{opportunity.investment}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-green-600" />
                      <span className="font-semibold text-green-800">Expected ROI</span>
                    </div>
                    <p className="text-green-700 font-bold text-lg">{opportunity.roi}</p>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:opacity-90 text-white">
                    <Lightbulb className="h-4 w-4 mr-2" />
                    Explore Opportunity
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sector Analysis */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <PieChart className="h-6 w-6 mr-3 text-blue-600" />
                Sector Growth Analysis
              </CardTitle>
              <p className="text-gray-600">Key sectors driving market opportunities</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">23%</div>
                  <div className="text-sm text-gray-600">Technology</div>
                  <div className="text-xs text-gray-500 mt-1">Annual growth</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Briefcase className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">18%</div>
                  <div className="text-sm text-gray-600">Financial Services</div>
                  <div className="text-xs text-gray-500 mt-1">Annual growth</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">15%</div>
                  <div className="text-sm text-gray-600">Healthcare</div>
                  <div className="text-xs text-gray-500 mt-1">Annual growth</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Globe className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">12%</div>
                  <div className="text-sm text-gray-600">E-commerce</div>
                  <div className="text-xs text-gray-500 mt-1">Annual growth</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-8">
          {/* Strategic Roadmap */}
          <Card className="border-2 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Target className="h-6 w-6 mr-3 text-purple-600" />
                Strategic Market Entry Roadmap
              </CardTitle>
              <p className="text-gray-600">Comprehensive 18-month plan for successful Chilean market entry</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Foundation Phase</h4>
                  <p className="text-sm text-gray-600">Market research, legal setup, initial partnerships</p>
                  <div className="text-xs text-purple-600 font-semibold mt-2">Months 1-6</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Launch Phase</h4>
                  <p className="text-sm text-gray-600">Product launch, marketing campaigns, team building</p>
                  <div className="text-xs text-blue-600 font-semibold mt-2">Months 7-12</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Scale Phase</h4>
                  <p className="text-sm text-gray-600">Market expansion, optimization, growth acceleration</p>
                  <div className="text-xs text-green-600 font-semibold mt-2">Months 13-18</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Recommendations */}
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <Card
                key={index}
                className="border-2 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{rec.title}</h3>
                        <Badge className={`${getPriorityColor(rec.priority)} font-semibold`}>
                          {rec.priority.toUpperCase()} PRIORITY
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{rec.description}</p>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="font-semibold text-gray-700 text-sm">Timeline</span>
                          </div>
                          <p className="text-gray-600 text-sm">{rec.timeline}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <Target className="h-4 w-4 text-gray-500" />
                            <span className="font-semibold text-gray-700 text-sm">Impact</span>
                          </div>
                          <p className="text-gray-600 text-sm">{rec.impact}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="font-semibold text-gray-700 text-sm">Resources</span>
                          </div>
                          <p className="text-gray-600 text-sm">{rec.resources}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    View Detailed Action Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Implementation Timeline */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <LineChart className="h-6 w-6 mr-3 text-blue-600" />
                Implementation Timeline & Milestones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">Market Research & Legal Setup</h4>
                    <p className="text-sm text-gray-600">
                      Complete market analysis, establish legal entity, obtain necessary permits
                    </p>
                    <div className="text-xs text-purple-600 font-semibold mt-1">Weeks 1-8</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">Partnership Development</h4>
                    <p className="text-sm text-gray-600">
                      Identify and negotiate partnerships with local distributors and service providers
                    </p>
                    <div className="text-xs text-blue-600 font-semibold mt-1">Weeks 6-16</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">Team Building & Infrastructure</h4>
                    <p className="text-sm text-gray-600">
                      Hire local talent, establish office, set up operational infrastructure
                    </p>
                    <div className="text-xs text-green-600 font-semibold mt-1">Weeks 12-24</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">Market Launch & Optimization</h4>
                    <p className="text-sm text-gray-600">
                      Launch products/services, execute marketing campaigns, optimize based on feedback
                    </p>
                    <div className="text-xs text-orange-600 font-semibold mt-1">Weeks 20-52</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Success Metrics */}
          <Card className="border-2 bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <BarChart3 className="h-6 w-6 mr-3 text-green-600" />
                Success Metrics & KPIs
              </CardTitle>
              <p className="text-gray-600">Key performance indicators to track market entry success</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">$5M</div>
                  <div className="text-sm text-gray-600">Revenue Target</div>
                  <div className="text-xs text-gray-500 mt-1">Year 1 goal</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">2,500</div>
                  <div className="text-sm text-gray-600">Customer Base</div>
                  <div className="text-xs text-gray-500 mt-1">Active customers</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
                  <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">15%</div>
                  <div className="text-sm text-gray-600">Market Share</div>
                  <div className="text-xs text-gray-500 mt-1">Target segment</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-orange-200">
                  <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">25%</div>
                  <div className="text-sm text-gray-600">ROI Target</div>
                  <div className="text-xs text-gray-500 mt-1">18-month period</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="border-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Enter the Chilean Market?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get personalized market entry strategies and ongoing support from our Neural Executive team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Users className="h-5 w-5 mr-2" />
              Consult with Neural Executives
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 bg-transparent"
            >
              <Globe className="h-5 w-5 mr-2" />
              Download Full Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ChileanResponseDemo
