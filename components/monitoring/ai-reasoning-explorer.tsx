"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Brain,
  BarChart3,
  Target,
  TrendingUp,
  Lightbulb,
  Shield,
  Clock,
  Users,
  DollarSign,
  Zap,
  AlertTriangle,
  CheckCircle,
  Eye,
  Download,
  Share,
  BookOpen,
  Cpu,
  Network,
  Activity,
  Gauge,
  LineChart,
  PieChart,
  MapPin,
  Award,
  Sparkles,
} from "lucide-react"
import { useAIThresholdRecommendations, type AIThresholdRecommendation } from "@/lib/ai-threshold-analyzer"
import { toast } from "@/hooks/use-toast"

interface AIReasoningExplorerProps {
  recommendation: AIThresholdRecommendation
  isOpen: boolean
  onClose: () => void
}

export function AIReasoningExplorer({ recommendation, isOpen, onClose }: AIReasoningExplorerProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [comprehensiveAnalysis, setComprehensiveAnalysis] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const { getComprehensiveAnalysis } = useAIThresholdRecommendations()

  useEffect(() => {
    if (isOpen && recommendation) {
      loadComprehensiveAnalysis()
    }
  }, [isOpen, recommendation])

  const loadComprehensiveAnalysis = async () => {
    setIsLoading(true)
    try {
      const analysis = await getComprehensiveAnalysis(recommendation.id)
      setComprehensiveAnalysis(analysis)
    } catch (error) {
      console.error("Failed to load comprehensive analysis:", error)
      toast({
        title: "Analysis Error",
        description: "Failed to load detailed AI analysis.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const exportAnalysis = () => {
    const analysisData = {
      recommendation,
      comprehensiveAnalysis,
      exportedAt: new Date().toISOString(),
    }

    const blob = new Blob([JSON.stringify(analysisData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `ai-analysis-${recommendation.metric}-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Analysis Exported",
      description: "Comprehensive AI analysis has been downloaded.",
    })
  }

  const shareAnalysis = async () => {
    const shareData = {
      title: `AI Analysis: ${recommendation.metric.replace(/([A-Z])/g, " $1")}`,
      text: `AI Recommendation with ${recommendation.confidence}% confidence: ${recommendation.reasoning}`,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        toast({
          title: "Analysis Shared",
          description: "AI analysis has been shared successfully.",
        })
      } catch (error) {
        console.log("Share cancelled")
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(`${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`)
      toast({
        title: "Copied to Clipboard",
        description: "Analysis details copied to clipboard.",
      })
    }
  }

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case "successRate":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "averageLoadTime":
        return <Clock className="w-5 h-5 text-blue-600" />
      case "fallbackUsageRate":
        return <AlertTriangle className="w-5 h-5 text-orange-600" />
      default:
        return <Target className="w-5 h-5" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Executive Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-600" />
            Executive Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <p className="text-sm leading-relaxed text-slate-700">
                {comprehensiveAnalysis?.overview || "Loading comprehensive analysis..."}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-700">{recommendation.confidence}%</div>
                <div className="text-sm text-green-600">AI Confidence</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">
                  {recommendation.recommendedValue}
                  {recommendation.metric === "averageLoadTime" ? "ms" : "%"}
                </div>
                <div className="text-sm text-blue-600">Threshold Value</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-700 capitalize">{recommendation.priority}</div>
                <div className="text-sm text-purple-600">Priority Level</div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-700">{recommendation.relatedMetrics.length}</div>
                <div className="text-sm text-orange-600">Related Metrics</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Lightbulb className="w-4 h-4 text-yellow-500" />
              Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <span className="font-medium">High Confidence:</span> This recommendation has achieved{" "}
                {recommendation.confidence}% confidence through comprehensive data analysis.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <span className="font-medium">Optimal Threshold:</span> AI-calculated value balances sensitivity with
                false positive prevention.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <span className="font-medium">Expected Impact:</span> {recommendation.expectedImpact}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <span className="font-medium">Risk Level:</span>{" "}
                {recommendation.riskAssessment.includes("Low")
                  ? "Low risk implementation"
                  : "Moderate risk with mitigation strategies"}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <BarChart3 className="w-4 h-4 text-green-600" />
              Business Value
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="text-sm font-medium text-green-800 mb-1">Primary Benefits</div>
              <div className="text-sm text-green-700">{recommendation.businessImpact}</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-sm font-medium text-blue-800 mb-1">Technical Value</div>
              <div className="text-sm text-blue-700">{recommendation.technicalJustification}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderDataAnalysisTab = () => (
    <div className="space-y-6">
      {comprehensiveAnalysis?.dataAnalysis && (
        <>
          {/* Current Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-blue-600" />
                Current Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(comprehensiveAnalysis.dataAnalysis.currentMetrics).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-slate-50 rounded-lg border">
                    <div className="text-lg font-bold text-slate-700">
                      {typeof value === "number" ? value.toFixed(1) : String(value ?? "")}
                    </div>
                    <div className="text-xs text-slate-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Historical Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="w-5 h-5 text-green-600" />
                Historical Trends Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.dataAnalysis.historicalTrends.map((trend: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
                  >
                    <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-800">{trend}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Patterns */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-purple-600" />
                Performance Patterns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.dataAnalysis.performancePatterns.map((pattern: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200"
                  >
                    <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-purple-800">{pattern}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Anomaly Detection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                Anomaly Detection Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.dataAnalysis.anomalyDetection.map((anomaly: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200"
                  >
                    <Eye className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-orange-800">{anomaly}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )

  const renderAIReasoningTab = () => (
    <div className="space-y-6">
      {comprehensiveAnalysis?.aiReasoning && (
        <>
          {/* Confidence Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                AI Confidence Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(comprehensiveAnalysis.aiReasoning.confidenceBreakdown).map(([factor, score]) => (
                  <div key={factor} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium capitalize">{factor.replace(/([A-Z])/g, " $1")}</span>
                      <span className="text-sm font-bold">{String(score ?? "")}%</span>
                    </div>
                    <Progress value={score as number} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Primary Factors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                Primary Analysis Factors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.aiReasoning.primaryFactors.map((factor: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-800">{factor}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Secondary Factors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Secondary Considerations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.aiReasoning.secondaryFactors.map((factor: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200"
                  >
                    <Lightbulb className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-yellow-800">{factor}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Algorithmic Approach */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-600" />
                Algorithmic Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-800 leading-relaxed">
                  {comprehensiveAnalysis.aiReasoning.algorithmicApproach}
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )

  const renderBusinessContextTab = () => (
    <div className="space-y-6">
      {comprehensiveAnalysis?.businessContext && (
        <>
          {/* Industry Benchmarks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Industry Benchmarks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.businessContext.industryBenchmarks.map((benchmark: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <BarChart3 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">{benchmark}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Competitive Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Competitive Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.businessContext.competitiveAnalysis.map((analysis: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
                  >
                    <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-800">{analysis}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Impact Assessment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                User Impact Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-800 leading-relaxed">
                  {comprehensiveAnalysis.businessContext.userImpactAssessment}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Implications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Revenue Implications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800 leading-relaxed">
                  {comprehensiveAnalysis.businessContext.revenueImplications}
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )

  const renderTechnicalTab = () => (
    <div className="space-y-6">
      {comprehensiveAnalysis?.technicalDeepDive && (
        <>
          {/* Infrastructure Considerations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="w-5 h-5 text-blue-600" />
                Infrastructure Considerations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.technicalDeepDive.infrastructureConsiderations.map(
                  (consideration: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200"
                    >
                      <Network className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-blue-800">{consideration}</div>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          {/* Scalability Factors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Scalability Factors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.technicalDeepDive.scalabilityFactors.map((factor: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
                  >
                    <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-800">{factor}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Bottlenecks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                Performance Bottlenecks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.technicalDeepDive.performanceBottlenecks.map(
                  (bottleneck: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200"
                    >
                      <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-orange-800">{bottleneck}</div>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          {/* Optimization Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Optimization Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.technicalDeepDive.optimizationOpportunities.map(
                  (opportunity: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200"
                    >
                      <Zap className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-yellow-800">{opportunity}</div>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )

  const renderRiskAnalysisTab = () => (
    <div className="space-y-6">
      {comprehensiveAnalysis?.riskAnalysis && (
        <>
          {/* Implementation Risks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Implementation Risks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.riskAnalysis.implementationRisks.map((risk: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-red-800">{risk}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mitigation Strategies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Mitigation Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.riskAnalysis.mitigationStrategies.map((strategy: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
                  >
                    <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-800">{strategy}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rollback Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Rollback Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800 leading-relaxed">
                  {comprehensiveAnalysis.riskAnalysis.rollbackPlan}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Monitoring Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-600" />
                Monitoring Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.riskAnalysis.monitoringRequirements.map((requirement: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200"
                  >
                    <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-purple-800">{requirement}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )

  const renderPredictiveTab = () => (
    <div className="space-y-6">
      {comprehensiveAnalysis?.predictiveInsights && (
        <>
          {/* Success Probability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-600" />
                Success Probability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-green-600">
                  {comprehensiveAnalysis.predictiveInsights.successProbability}%
                </div>
                <div className="text-lg text-muted-foreground">Predicted Success Rate</div>
                <Progress value={comprehensiveAnalysis.predictiveInsights.successProbability} className="h-3" />
              </div>
            </CardContent>
          </Card>

          {/* Expected Outcomes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Expected Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.predictiveInsights.expectedOutcomes.map((outcome: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
                  >
                    <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-800">{outcome}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Time to Impact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Time to Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800 leading-relaxed">
                  {comprehensiveAnalysis.predictiveInsights.timeToImpact}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Scenarios */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-600" />
                Alternative Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comprehensiveAnalysis.predictiveInsights.alternativeScenarios.map(
                  (scenario: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200"
                    >
                      <MapPin className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-purple-800">{scenario}</div>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-600" />
            Comprehensive AI Analysis
            <Badge className="bg-gold-100 text-gold-800 border-gold-200">{recommendation.confidence}% Confidence</Badge>
          </DialogTitle>
          <DialogDescription>
            Deep dive into the AI reasoning behind this {recommendation.metric.replace(/([A-Z])/g, " $1")}{" "}
            recommendation
          </DialogDescription>
        </DialogHeader>

        {/* Recommendation Header */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {getMetricIcon(recommendation.metric)}
              <div>
                <h3 className="font-semibold text-lg capitalize">
                  {recommendation.metric.replace(/([A-Z])/g, " $1")} Optimization
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className={getPriorityColor(recommendation.priority)}>
                    {recommendation.priority} priority
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Alert when {recommendation.condition} {recommendation.recommendedValue}
                    {recommendation.metric === "averageLoadTime" ? "ms" : "%"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={shareAnalysis}>
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" onClick={exportAnalysis}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 overflow-hidden">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview" className="text-xs">
              <BookOpen className="w-3 h-3 mr-1" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="data" className="text-xs">
              <BarChart3 className="w-3 h-3 mr-1" />
              Data
            </TabsTrigger>
            <TabsTrigger value="ai" className="text-xs">
              <Brain className="w-3 h-3 mr-1" />
              AI Logic
            </TabsTrigger>
            <TabsTrigger value="business" className="text-xs">
              <DollarSign className="w-3 h-3 mr-1" />
              Business
            </TabsTrigger>
            <TabsTrigger value="technical" className="text-xs">
              <Cpu className="w-3 h-3 mr-1" />
              Technical
            </TabsTrigger>
            <TabsTrigger value="predictive" className="text-xs">
              <Sparkles className="w-3 h-3 mr-1" />
              Predictive
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="flex-1 mt-4">
            <TabsContent value="overview" className="mt-0">
              {renderOverviewTab()}
            </TabsContent>
            <TabsContent value="data" className="mt-0">
              {renderDataAnalysisTab()}
            </TabsContent>
            <TabsContent value="ai" className="mt-0">
              {renderAIReasoningTab()}
            </TabsContent>
            <TabsContent value="business" className="mt-0">
              {renderBusinessContextTab()}
            </TabsContent>
            <TabsContent value="technical" className="mt-0">
              {renderTechnicalTab()}
            </TabsContent>
            <TabsContent value="predictive" className="mt-0">
              {renderPredictiveTab()}
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close Analysis
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
