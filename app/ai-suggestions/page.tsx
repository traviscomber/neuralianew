"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Brain,
  Sparkles,
  Award,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  Eye,
  Settings,
  BarChart3,
  Calendar,
  Zap,
  Shield,
  Users,
  Globe,
  Activity,
  Clock,
} from "lucide-react"
import { HighConfidenceAIPanel } from "@/components/monitoring/high-confidence-ai-panel"
import { AIRecommendationsPanel } from "@/components/monitoring/ai-recommendations-panel"
import { AdvancedAISuggestions } from "@/components/monitoring/advanced-ai-suggestions"
import { EnhancedThresholdWizard } from "@/components/monitoring/enhanced-threshold-wizard"

export default function AISuggestionsPage() {
  const [activeTab, setActiveTab] = useState("high-confidence")

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Brain className="w-10 h-10 text-blue-600" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI-Powered Performance Intelligence
          </h1>
          <Sparkles className="w-8 h-8 text-yellow-500" />
        </div>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Harness the power of advanced artificial intelligence to optimize your logo performance monitoring. Get
          intelligent recommendations, predictive insights, and automated threshold optimization with 90%+ confidence
          scores.
        </p>
      </div>

      {/* AI Intelligence Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600 rounded-full">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-700">AI-Powered</div>
                <div className="text-sm text-blue-600">Smart Recommendations</div>
              </div>
            </div>
            <p className="text-sm text-blue-700 mt-3">
              Advanced machine learning algorithms analyze your performance data to provide intelligent, actionable
              recommendations.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-600 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-700">90%+</div>
                <div className="text-sm text-green-600">Confidence Scores</div>
              </div>
            </div>
            <p className="text-sm text-green-700 mt-3">
              Only the highest quality recommendations with proven accuracy and reliability make it to your dashboard.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-600 rounded-full">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-700">Predictive</div>
                <div className="text-sm text-purple-600">Analytics</div>
              </div>
            </div>
            <p className="text-sm text-purple-700 mt-3">
              Forecast future performance trends and proactively address issues before they impact users.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-red-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-600 rounded-full">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-700">Auto-Apply</div>
                <div className="text-sm text-orange-600">Optimization</div>
              </div>
            </div>
            <p className="text-sm text-orange-700 mt-3">
              Automatically implement high-confidence recommendations with one-click deployment and rollback
              capabilities.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* AI Features Showcase */}
      <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            Premium AI Intelligence Features
          </CardTitle>
          <p className="text-muted-foreground">
            Comprehensive AI-powered performance optimization and monitoring capabilities
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold">Deep Learning Analysis</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Neural networks analyze complex performance patterns to identify optimization opportunities invisible to
                traditional monitoring.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold">Precision Targeting</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-calculated optimal thresholds balance sensitivity with false positive prevention for maximum
                monitoring effectiveness.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold">Predictive Modeling</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced forecasting models predict performance trends up to 30 days in advance with 85%+ accuracy.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold">Seasonal Intelligence</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Automatically adjusts recommendations based on seasonal patterns, traffic cycles, and business events.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-red-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-red-600" />
                <h3 className="font-semibold">Risk Assessment</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive risk analysis ensures recommendations won't cause alert fatigue or system instability.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-yellow-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold">Real-time Adaptation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Continuously learns from your system's behavior to improve recommendation accuracy and relevance over
                time.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main AI Suggestions Interface */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="high-confidence" className="flex items-center gap-1">
              <Award className="w-3 h-3" />
              High Confidence
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="flex items-center gap-1">
              <Lightbulb className="w-3 h-3" />
              All Recommendations
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center gap-1">
              <BarChart3 className="w-3 h-3" />
              Advanced Insights
            </TabsTrigger>
            <TabsTrigger value="wizard" className="flex items-center gap-1">
              <Settings className="w-3 h-3" />
              Threshold Wizard
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => (window.location.href = "/ai-reasoning-explorer")}>
              <Eye className="w-4 h-4 mr-2" />
              Explore AI Reasoning
            </Button>
          </div>
        </div>

        <TabsContent value="high-confidence" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-gold-600" />
              Premium High-Confidence Recommendations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Only the most reliable AI recommendations with 90%+ confidence scores. These suggestions have been
              validated through comprehensive analysis and are ready for immediate implementation.
            </p>
          </div>
          <HighConfidenceAIPanel />
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Brain className="w-6 h-6 text-blue-600" />
              Comprehensive AI Recommendations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete suite of AI-generated recommendations with detailed reasoning, business impact analysis, and
              implementation guidance for optimal performance monitoring.
            </p>
          </div>
          <AIRecommendationsPanel />
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-600" />
              Advanced AI Intelligence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Next-generation AI insights including predictive analytics, seasonal patterns, optimization opportunities,
              and comprehensive performance intelligence beyond traditional monitoring.
            </p>
          </div>
          <AdvancedAISuggestions />
        </TabsContent>

        <TabsContent value="wizard" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Settings className="w-6 h-6 text-green-600" />
              AI-Enhanced Threshold Configuration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Intelligent threshold creation wizard with AI-powered recommendations, guided configuration, and automated
              optimization for optimal monitoring setup.
            </p>
          </div>
          <EnhancedThresholdWizard />
        </TabsContent>
      </Tabs>

      {/* AI Benefits Summary */}
      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Users className="w-5 h-5 text-indigo-600" />
            Why Choose AI-Powered Performance Monitoring?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-indigo-900">For Individual Users</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Intelligent Guidance:</span> Get smart recommendations without deep
                    monitoring expertise
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Data-Driven Decisions:</span> Make informed choices based on AI
                    analysis
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Risk Mitigation:</span> Avoid alert fatigue with precision-tuned
                    thresholds
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Time Savings:</span> Automated optimization reduces manual
                    configuration time
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-indigo-900">For Teams & Organizations</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Consistent Standards:</span> Ensure uniform monitoring practices
                    across teams
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Knowledge Sharing:</span> AI insights benefit from collective
                    performance data
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Best Practices:</span> Built-in industry standards and optimization
                    patterns
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Scalable Monitoring:</span> AI adapts recommendations as your system
                    grows
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="text-center space-y-4">
            <h3 className="font-semibold text-indigo-900">Ready to Experience AI-Powered Performance Monitoring?</h3>
            <div className="flex items-center justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Rocket className="w-4 h-4 mr-2" />
                Start with High-Confidence Recommendations
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/ai-reasoning-explorer")}>
                <Eye className="w-4 h-4 mr-2" />
                Explore AI Reasoning
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
