"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Globe,
  Users,
  BarChart3,
  Target,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
} from "lucide-react"

function ChileanResponseDemo() {
  const [activeTab, setActiveTab] = useState("market-analysis")

  const marketData = {
    "market-analysis": {
      title: "Chilean Market Analysis",
      icon: <BarChart3 className="h-5 w-5" />,
      content: {
        overview:
          "Chile presents a stable, growing market with strong economic fundamentals and increasing digital adoption.",
        keyMetrics: [
          { label: "GDP Growth", value: "2.4%", trend: "up" },
          { label: "Digital Penetration", value: "87%", trend: "up" },
          { label: "Market Size", value: "$19.2B", trend: "stable" },
          { label: "Competition Level", value: "Medium", trend: "stable" },
        ],
        insights: [
          "Strong regulatory framework supports business growth",
          "High smartphone penetration creates digital opportunities",
          "Growing middle class with increased purchasing power",
          "Strategic location for Latin American expansion",
        ],
      },
    },
    opportunities: {
      title: "Growth Opportunities",
      icon: <Target className="h-5 w-5" />,
      content: {
        overview: "Multiple high-potential sectors showing strong growth trajectories and market gaps.",
        keyMetrics: [
          { label: "E-commerce Growth", value: "23%", trend: "up" },
          { label: "Fintech Adoption", value: "45%", trend: "up" },
          { label: "Green Energy", value: "$2.1B", trend: "up" },
          { label: "Tech Startups", value: "156", trend: "up" },
        ],
        insights: [
          "E-commerce sector experiencing rapid expansion",
          "Fintech solutions addressing banking gaps",
          "Renewable energy investments increasing",
          "Government supporting tech innovation",
        ],
      },
    },
    recommendations: {
      title: "Strategic Recommendations",
      icon: <Lightbulb className="h-5 w-5" />,
      content: {
        overview: "Tailored strategies for successful market entry and sustainable growth in Chile.",
        keyMetrics: [
          { label: "Entry Timeline", value: "6-9 months", trend: "stable" },
          { label: "Initial Investment", value: "$500K-2M", trend: "stable" },
          { label: "ROI Projection", value: "18-25%", trend: "up" },
          { label: "Risk Level", value: "Low-Medium", trend: "stable" },
        ],
        insights: [
          "Partner with local distributors for faster market penetration",
          "Focus on Santiago and Valparaíso for initial launch",
          "Adapt products to local preferences and regulations",
          "Leverage digital marketing for cost-effective reach",
        ],
      },
    },
  }

  const currentData = marketData[activeTab as keyof typeof marketData]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Globe className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Chilean Market Intelligence
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive market analysis and strategic recommendations for the Chilean market, powered by our Neural
          Executive AI system.
        </p>
        <Badge className="bg-green-100 text-green-800">
          <CheckCircle className="mr-1 h-3 w-3" />
          Real-time Market Data
        </Badge>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {Object.entries(marketData).map(([key, data]) => (
            <Button
              key={key}
              variant={activeTab === key ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(key)}
              className="flex items-center space-x-2"
            >
              {data.icon}
              <span className="hidden sm:inline">{data.title}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {currentData.icon}
            <span>{currentData.title}</span>
          </CardTitle>
          <p className="text-gray-600">{currentData.content.overview}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Key Metrics */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center">
              <BarChart3 className="mr-2 h-4 w-4" />
              Key Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currentData.content.keyMetrics.map((metric, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">{metric.label}</span>
                    {metric.trend === "up" && <TrendingUp className="h-4 w-4 text-green-500" />}
                    {metric.trend === "down" && <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />}
                    {metric.trend === "stable" && <div className="w-4 h-4 bg-gray-300 rounded-full" />}
                  </div>
                  <div className="text-xl font-bold">{metric.value}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center">
              <Lightbulb className="mr-2 h-4 w-4" />
              Key Insights
            </h3>
            <div className="grid gap-3">
              {currentData.content.insights.map((insight, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Items */}
          {activeTab === "recommendations" && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center">
                <Target className="mr-2 h-4 w-4" />
                Next Steps
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                  <span>Conduct detailed competitive analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                  <span>Identify potential local partners</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                  <span>Develop localized marketing strategy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                  <span>Prepare regulatory compliance framework</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Risk Assessment */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-orange-800">
            <AlertTriangle className="h-5 w-5" />
            <span>Risk Assessment</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">Low</div>
              <div className="text-sm text-gray-600">Political Risk</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">Medium</div>
              <div className="text-sm text-gray-600">Currency Risk</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">Low</div>
              <div className="text-sm text-gray-600">Regulatory Risk</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold">Ready to Enter the Chilean Market?</h3>
        <p className="text-gray-600">
          Get personalized recommendations and detailed market entry strategies from our Neural Executive team.
        </p>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
          <Users className="mr-2 h-4 w-4" />
          Consult with Neural Executives
        </Button>
      </div>
    </div>
  )
}

export { ChileanResponseDemo }
export default ChileanResponseDemo
