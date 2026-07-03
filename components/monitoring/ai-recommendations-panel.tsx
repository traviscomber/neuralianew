"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Brain,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Clock,
  AlertTriangle,
  Info,
  Sparkles,
  Target,
  Zap,
  RefreshCw,
  Eye,
  ThumbsUp,
  BookOpen,
} from "lucide-react"
import { useAIThresholdRecommendations, type AIThresholdRecommendation } from "@/lib/ai-threshold-analyzer"
import { logoPerformanceMonitor } from "@/lib/logo-performance-monitor"
import { toast } from "@/hooks/use-toast"

interface AIRecommendationsPanelProps {
  onApplyRecommendation?: (recommendation: AIThresholdRecommendation) => void
  className?: string
}

export function AIRecommendationsPanel({ onApplyRecommendation, className }: AIRecommendationsPanelProps) {
  const [recommendations, setRecommendations] = useState<AIThresholdRecommendation[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRecommendation, setSelectedRecommendation] = useState<AIThresholdRecommendation | null>(null)
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false)
  const [appliedRecommendations, setAppliedRecommendations] = useState<Set<string>>(new Set())

  const { generateRecommendations, explainRecommendation, getConfidenceScore } = useAIThresholdRecommendations()

  useEffect(() => {
    loadRecommendations()
  }, [])

  const loadRecommendations = async () => {
    setIsLoading(true)
    try {
      const recs = await generateRecommendations({
        businessContext: {
          environment: "production", // Could be inferred or user-selected
          criticality: "high",
          userBase: "mixed",
          geographicDistribution: "global",
        },
        technicalContext: {
          infrastructure: "cdn",
          caching: "aggressive",
          fallbackStrategy: "comprehensive",
        },
      })
      setRecommendations(recs)
    } catch (error) {
      console.error("Failed to generate AI recommendations:", error)
      toast({
        title: "AI Analysis Error",
        description: "Failed to generate recommendations. Using fallback analysis.",
        variant: "destructive",
      })
      // Fallback to basic recommendations
      const basicRecs = await generateRecommendations()
      setRecommendations(basicRecs)
    } finally {
      setIsLoading(false)
    }
  }

  const handleApplyRecommendation = (recommendation: AIThresholdRecommendation) => {
    try {
      // Apply the recommendation to the monitoring system
      const threshold = logoPerformanceMonitor.addThreshold({
        name: `AI: ${recommendation.metric.replace(/([A-Z])/g, " $1")} Alert`,
        metric: recommendation.metric,
        condition: recommendation.condition,
        value: recommendation.recommendedValue,
        enabled: true,
        cooldownMinutes: recommendation.priority === "critical" ? 5 : recommendation.priority === "high" ? 10 : 15,
        notificationChannels: recommendation.priority === "critical" ? ["browser", "console"] : ["console"],
      })

      setAppliedRecommendations((prev) => new Set([...prev, recommendation.id]))

      toast({
        title: "AI Recommendation Applied! 🤖",
        description: `Smart threshold "${threshold.name}" is now monitoring your performance.`,
      })

      if (onApplyRecommendation) {
        onApplyRecommendation(recommendation)
      }
    } catch (error) {
      toast({
        title: "Application Error",
        description: "Failed to apply recommendation. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleViewDetails = (recommendation: AIThresholdRecommendation) => {
    setSelectedRecommendation(recommendation)
    setDetailsDialogOpen(true)
  }

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case "successRate":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "averageLoadTime":
        return <Clock className="w-4 h-4 text-blue-600" />
      case "fallbackUsageRate":
        return <AlertTriangle className="w-4 h-4 text-orange-600" />
      default:
        return <Target className="w-4 h-4" />
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

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "text-green-600"
    if (confidence >= 75) return "text-blue-600"
    if (confidence >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 animate-pulse text-blue-600" />
            AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-lg animate-pulse">
              <div className="flex items-center justify-between mb-2">
                <div className="h-4 bg-slate-200 rounded w-24"></div>
                <div className="h-6 bg-slate-200 rounded w-16"></div>
              </div>
              <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-3/4"></div>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }

  return (
    <TooltipProvider>
      <Card className={className}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              AI-Powered Recommendations
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </CardTitle>
            <Button variant="outline" size="sm" onClick={loadRecommendations} disabled={isLoading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Intelligent threshold suggestions based on your performance data and industry best practices
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.length === 0 ? (
            <div className="text-center py-8">
              <Brain className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No recommendations available</p>
              <p className="text-sm text-muted-foreground">Collect more performance data for AI analysis</p>
            </div>
          ) : (
            recommendations.map((recommendation) => (
              <div
                key={recommendation.id}
                className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getMetricIcon(recommendation.metric)}
                    <span className="font-medium capitalize">{recommendation.metric.replace(/([A-Z])/g, " $1")}</span>
                    <Badge className={getPriorityColor(recommendation.priority)}>{recommendation.priority}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex items-center gap-1">
                          <Brain className="w-3 h-3 text-blue-600" />
                          <span className={`text-sm font-medium ${getConfidenceColor(recommendation.confidence)}`}>
                            {recommendation.confidence}%
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>AI Confidence Score</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                {/* Recommendation Value */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    {recommendation.condition === "above" ? (
                      <TrendingUp className="w-4 h-4 text-red-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-lg font-bold text-blue-700">
                      {recommendation.condition} {recommendation.recommendedValue}
                      {recommendation.metric === "averageLoadTime" ? "ms" : "%"}
                    </span>
                  </div>
                  <Progress value={recommendation.confidence} className="h-2" />
                </div>

                {/* Reasoning */}
                <p className="text-sm text-slate-700 mb-3 leading-relaxed">{recommendation.reasoning}</p>

                {/* Expected Impact */}
                <div className="mb-3 p-2 bg-white rounded border border-blue-100">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <span className="text-xs font-medium text-green-800">Expected Impact</span>
                  </div>
                  <p className="text-xs text-slate-600">{recommendation.expectedImpact}</p>
                </div>

                {/* Business Impact */}
                <div className="mb-4 p-2 bg-white rounded border border-blue-100">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-3 h-3 text-purple-600" />
                    <span className="text-xs font-medium text-purple-800">Business Impact</span>
                  </div>
                  <p className="text-xs text-slate-600">{recommendation.businessImpact}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button size="sm" onClick={() => handleViewDetails(recommendation)} variant="outline">
                      <Eye className="w-3 h-3 mr-1" />
                      Details
                    </Button>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button size="sm" variant="ghost">
                          <ThumbsUp className="w-3 h-3" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Mark as helpful</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  {appliedRecommendations.has(recommendation.id) ? (
                    <Badge variant="outline" className="text-green-700 border-green-300">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Applied
                    </Badge>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => handleApplyRecommendation(recommendation)}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Zap className="w-3 h-3 mr-1" />
                      Apply
                    </Button>
                  )}
                </div>
              </div>
            ))
          )}

          {/* AI Learning Notice */}
          {recommendations.length > 0 && (
            <div className="mt-6 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-900">AI Learning System</span>
              </div>
              <p className="text-xs text-purple-700">
                These recommendations improve over time as the AI learns from your performance patterns and feedback.
                Applied thresholds help train the system for better future suggestions.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Details Dialog */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              AI Recommendation Details
              {selectedRecommendation && (
                <Badge className={getPriorityColor(selectedRecommendation.priority)}>
                  {selectedRecommendation.priority}
                </Badge>
              )}
            </DialogTitle>
            <DialogDescription>
              Comprehensive analysis and implementation guidance for this AI-generated threshold recommendation
            </DialogDescription>
          </DialogHeader>

          {selectedRecommendation && (
            <div className="space-y-6">
              {/* Overview */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  {getMetricIcon(selectedRecommendation.metric)}
                  <h3 className="font-semibold capitalize">
                    {selectedRecommendation.metric.replace(/([A-Z])/g, " $1")} Threshold
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Recommended Value:</span>
                    <p className="font-bold text-blue-700">
                      {selectedRecommendation.condition} {selectedRecommendation.recommendedValue}
                      {selectedRecommendation.metric === "averageLoadTime" ? "ms" : "%"}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">AI Confidence:</span>
                    <p className={`font-bold ${getConfidenceColor(selectedRecommendation.confidence)}`}>
                      {selectedRecommendation.confidence}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Reasoning */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  AI Reasoning
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">{selectedRecommendation.reasoning}</p>
              </div>

              {/* Technical Justification */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-500" />
                  Technical Justification
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedRecommendation.technicalJustification}
                </p>
              </div>

              {/* Business Impact */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  Business Impact
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">{selectedRecommendation.businessImpact}</p>
              </div>

              {/* Expected Impact */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-500" />
                  Expected Impact
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">{selectedRecommendation.expectedImpact}</p>
              </div>

              {/* Risk Assessment */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  Risk Assessment
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">{selectedRecommendation.riskAssessment}</p>
              </div>

              {/* Implementation Notes */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  Implementation Notes
                </h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  {selectedRecommendation.implementationNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Metrics */}
              <div>
                <h4 className="font-semibold mb-2">Related Metrics</h4>
                <div className="flex gap-2">
                  {selectedRecommendation.relatedMetrics.map((metric) => (
                    <Badge key={metric} variant="outline">
                      {metric.replace(/([A-Z])/g, " $1")}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Historical Context */}
              {selectedRecommendation.historicalContext && (
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    Historical Context
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{selectedRecommendation.historicalContext}</p>
                </div>
              )}

              {/* Seasonal Considerations */}
              {selectedRecommendation.seasonalConsiderations && (
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-cyan-500" />
                    Seasonal Considerations
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedRecommendation.seasonalConsiderations}
                  </p>
                </div>
              )}

              {/* AI Explanation */}
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-600" />
                  Complete AI Analysis
                </h4>
                <pre className="text-xs text-slate-600 whitespace-pre-wrap font-mono bg-white p-3 rounded border overflow-x-auto">
                  {explainRecommendation(selectedRecommendation.id)}
                </pre>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setDetailsDialogOpen(false)}>
              Close
            </Button>
            {selectedRecommendation && !appliedRecommendations.has(selectedRecommendation.id) && (
              <Button
                onClick={() => {
                  handleApplyRecommendation(selectedRecommendation)
                  setDetailsDialogOpen(false)
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Zap className="w-4 h-4 mr-2" />
                Apply Recommendation
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  )
}
