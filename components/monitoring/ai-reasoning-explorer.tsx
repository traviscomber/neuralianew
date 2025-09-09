"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  Brain,
  BarChart3,
  TrendingUp,
  Target,
  Shield,
  Lightbulb,
  Database,
  DollarSign,
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Eye,
  Activity,
  Globe,
  Server,
  LineChart,
  PieChart,
  Settings,
  Award,
  Sparkles,
  ArrowRight,
  TrendingDown,
} from "lucide-react"
import { aiThresholdAnalyzer, type AIThresholdRecommendation } from "@/lib/ai-threshold-analyzer"
import { toast } from "@/hooks/use-toast"

interface AIReasoningExplorerProps {
  recommendation: AIThresholdRecommendation
  isOpen: boolean
  onClose: () => void
}

export function AIReasoningExplorer({ recommendation, isOpen, onClose }: AIReasoningExplorerProps) {
  const [comprehensiveAnalysis, setComprehensiveAnalysis] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    if (isOpen && recommendation) {
      loadComprehensiveAnalysis()
    }
  }, [isOpen, recommendation])

  const loadComprehensiveAnalysis = async () => {
    setIsLoading(true)
    try {
      const analysis = aiThresholdAnalyzer.getComprehensiveAnalysis(recommendation.id)
      setComprehensiveAnalysis(analysis)
    } catch (error) {
      console.error("Failed to load comprehensive analysis:", error)
      toast({
        title: "Analysis Error",
        description: "Failed to load detailed AI reasoning.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
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

  if (isLoading) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Brain className="w-6 h-6 animate-pulse text-blue-600" />
              Loading AI Analysis...
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Brain className="w-16 h-16 text-blue-600 animate-pulse mx-auto mb-4" />
              <p className="text-lg font-semibold mb-2">Analyzing Performance Data</p>
              <p className="text-muted-foreground">Generating comprehensive AI insights...</p>
              <Progress value={75} className="w-64 mx-auto mt-4" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  if (!comprehensiveAnalysis) {
    return null
  }

  return (
    <TooltipProvider>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-7xl max-h-[95vh] overflow-hidden p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {getMetricIcon(recommendation.metric)}
                <span className="capitalize">{recommendation.metric.replace(/([A-Z])/g, " $1")}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                <span>Comprehensive AI Analysis</span>
                <Badge className="bg-gold-100 text-gold-800 border-gold-200">
                  {recommendation.confidence}% Confidence
                </Badge>
              </div>
            </DialogTitle>
            <DialogDescription>
              Deep dive into the AI reasoning, data analysis, and predictive insights behind this high-confidence
              recommendation
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
              <div className="px-6">
                <TabsList className="grid w-full grid-cols-7">
                  <TabsTrigger value="overview" className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="data" className="flex items-center gap-1">
                    <Database className="w-3 h-3" />
                    Data
                  </TabsTrigger>
                  <TabsTrigger value="ai" className="flex items-center gap-1">
                    <Brain className="w-3 h-3" />
                    AI Logic
                  </TabsTrigger>
                  <TabsTrigger value="business" className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    Business
                  </TabsTrigger>
                  <TabsTrigger value="technical" className="flex items-center gap-1">
                    <Server className="w-3 h-3" />
                    Technical
                  </TabsTrigger>
                  <TabsTrigger value="risk" className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Risk
                  </TabsTrigger>
                  <TabsTrigger value="predictions" className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Insights
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="flex-1 overflow-hidden px-6 pb-6">
                <ScrollArea className="h-full">
                  <div className="space-y-6 py-4">
                    {/* Overview Tab */}
                    <TabsContent value="overview" className="mt-0 space-y-6">
                      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-gold-600" />
                            Executive Summary
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-700 leading-relaxed">{comprehensiveAnalysis.overview}</p>
                        </CardContent>
                      </Card>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Target className="w-4 h-4 text-blue-600" />
                              Recommendation Details
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">Threshold Value:</span>
                              <span className="font-bold text-lg">
                                {recommendation.condition} {recommendation.recommendedValue}
                                {recommendation.metric === "averageLoadTime" ? "ms" : "%"}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">Priority Level:</span>
                              <Badge className={getPriorityColor(recommendation.priority)}>
                                {recommendation.priority}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">AI Confidence:</span>
                              <div className="flex items-center gap-2">
                                <Progress value={recommendation.confidence} className="w-20 h-2" />
                                <span className="font-bold text-green-600">{recommendation.confidence}%</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-green-600" />
                              Expected Impact
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-slate-700 mb-4">{recommendation.expectedImpact}</p>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm">Improved monitoring accuracy</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm">Reduced false positives</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm">Enhanced user experience</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* Data Analysis Tab */}
                    <TabsContent value="data" className="mt-0 space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-blue-600" />
                            Current Performance Metrics
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Object.entries(comprehensiveAnalysis.dataAnalysis.currentMetrics).map(([key, value]) => (
                              <div key={key} className="text-center p-3 bg-slate-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">
                                  {typeof value === "number" ? value.toFixed(1) : value}
                                </div>
                                <div className="text-sm text-muted-foreground capitalize">
                                  {key.replace(/([A-Z])/g, " $1")}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <LineChart className="w-4 h-4 text-green-600" />
                              Historical Trends
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {comprehensiveAnalysis.dataAnalysis.historicalTrends.map(
                                (trend: string, index: number) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-slate-700">{trend}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Activity className="w-4 h-4 text-purple-600" />
                              Performance Patterns
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {comprehensiveAnalysis.dataAnalysis.performancePatterns.map(
                                (pattern: string, index: number) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <PieChart className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-slate-700">{pattern}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-600" />
                            Anomaly Detection Insights
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {comprehensiveAnalysis.dataAnalysis.anomalyDetection.map(
                              (anomaly: string, index: number) => (
                                <div key={index} className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg">
                                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-slate-700">{anomaly}</span>
                                </div>
                              ),
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* AI Reasoning Tab */}
                    <TabsContent value="ai" className="mt-0 space-y-6">
                      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Brain className="w-5 h-5 text-purple-600" />
                            Algorithmic Approach
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-700 leading-relaxed">
                            {comprehensiveAnalysis.aiReasoning.algorithmicApproach}
                          </p>
                        </CardContent>
                      </Card>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-blue-600" />
                              Primary Factors
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              {comprehensiveAnalysis.aiReasoning.primaryFactors.map((factor: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                                  </div>
                                  <span className="text-sm text-slate-700">{factor}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Settings className="w-4 h-4 text-gray-600" />
                              Secondary Factors
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              {comprehensiveAnalysis.aiReasoning.secondaryFactors.map(
                                (factor: string, index: number) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-xs font-bold text-gray-600">{index + 1}</span>
                                    </div>
                                    <span className="text-sm text-slate-700">{factor}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-green-600" />
                            Confidence Score Breakdown
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {Object.entries(comprehensiveAnalysis.aiReasoning.confidenceBreakdown).map(
                              ([factor, score]) => (
                                <div key={factor} className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium capitalize">
                                      {factor.replace(/([A-Z])/g, " $1")}
                                    </span>
                                    <span className="text-sm font-bold">{score}%</span>
                                  </div>
                                  <Progress value={score as number} className="h-2" />
                                </div>
                              ),
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Business Context Tab */}
                    <TabsContent value="business" className="mt-0 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <BarChart3 className="w-4 h-4 text-blue-600" />
                              Industry Benchmarks
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {comprehensiveAnalysis.businessContext.industryBenchmarks.map(
                                (benchmark: string, index: number) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-slate-700">{benchmark}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-green-600" />
                              Competitive Analysis
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {comprehensiveAnalysis.businessContext.competitiveAnalysis.map(
                                (analysis: string, index: number) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-slate-700">{analysis}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-600" />
                            User Impact Assessment
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-700 leading-relaxed">
                            {comprehensiveAnalysis.businessContext.userImpactAssessment}
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            Revenue Implications
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-700 leading-relaxed">
                            {comprehensiveAnalysis.businessContext.revenueImplications}
                          </p>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Technical Deep Dive Tab */}
                    <TabsContent value="technical" className="mt-0 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Server className="w-4 h-4 text-blue-600" />
                              Infrastructure
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {comprehensiveAnalysis.technicalDeepDive.infrastructureConsiderations.map(
                                (consideration: string, index: number) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <Server className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-slate-700">{consideration}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-green-600" />
                              Scalability
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {comprehensiveAnalysis.technicalDeepDive.scalabilityFactors.map(
                                (factor: string, index: number) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-slate-700">{factor}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-600" />
                            Performance Bottlenecks
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {comprehensiveAnalysis.technicalDeepDive.performanceBottlenecks.map(
                              (bottleneck: string, index: number) => (
                                <div key={index} className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg">
                                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-slate-700">{bottleneck}</span>
                                </div>
                              ),
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-blue-600" />
                            Optimization Opportunities
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {comprehensiveAnalysis.technicalDeepDive.optimizationOpportunities.map(
                              (opportunity: string, index: number) => (
                                <div key={index} className="flex items-start gap-2 p-3 bg-white rounded-lg border">
                                  <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-slate-700">{opportunity}</span>
                                </div>
                              ),
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Risk Analysis Tab */}
                    <TabsContent value="risk" className="mt-0 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4 text-red-600" />
                              Implementation Risks
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {comprehensiveAnalysis.riskAnalysis.implementationRisks.map(
                                (risk: string, index: number) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-slate-700">{risk}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-green-600" />
                              Mitigation Strategies
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {comprehensiveAnalysis.riskAnalysis.mitigationStrategies.map(
                                (strategy: string, index: number) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-slate-700">{strategy}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <TrendingDown className="w-4 h-4 text-orange-600" />
                            Rollback Plan
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-700 leading-relaxed">
                            {comprehensiveAnalysis.riskAnalysis.rollbackPlan}
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-blue-600" />
                            Monitoring Requirements
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {comprehensiveAnalysis.riskAnalysis.monitoringRequirements.map(
                              (requirement: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-slate-700">{requirement}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Predictive Insights Tab */}
                    <TabsContent value="predictions" className="mt-0 space-y-6">
                      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Success Probability
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              {comprehensiveAnalysis.predictiveInsights.successProbability}%
                            </Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4 mb-4">
                            <Progress
                              value={comprehensiveAnalysis.predictiveInsights.successProbability}
                              className="flex-1 h-3"
                            />
                            <span className="text-2xl font-bold text-green-600">
                              {comprehensiveAnalysis.predictiveInsights.successProbability}%
                            </span>
                          </div>
                          <p className="text-slate-700">
                            <strong>Time to Impact:</strong> {comprehensiveAnalysis.predictiveInsights.timeToImpact}
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            Expected Outcomes
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {comprehensiveAnalysis.predictiveInsights.expectedOutcomes.map(
                              (outcome: string, index: number) => (
                                <div key={index} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-slate-700">{outcome}</span>
                                </div>
                              ),
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Settings className="w-4 h-4 text-blue-600" />
                            Alternative Scenarios
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {comprehensiveAnalysis.predictiveInsights.alternativeScenarios.map(
                              (scenario: string, index: number) => (
                                <div key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                  <div className="flex items-start gap-2">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                                    </div>
                                    <span className="text-sm text-slate-700">{scenario}</span>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </div>
                </ScrollArea>
              </div>
            </Tabs>
          </div>

          <div className="p-6 pt-0 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-muted-foreground">
                  AI Analysis completed with {recommendation.confidence}% confidence
                </span>
              </div>
              <Button onClick={onClose}>Close Analysis</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  )
}
