"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AIReasoningExplorer } from "./ai-reasoning-explorer"
import {
  Brain,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Target,
  Sparkles,
  Play,
  Eye,
  BarChart3,
  Shield,
  Lightbulb,
  RefreshCw,
  Award,
  Rocket,
} from "lucide-react"
import { useAIThresholdRecommendations, type AIThresholdRecommendation } from "@/lib/ai-threshold-analyzer"
import { logoPerformanceMonitor } from "@/lib/logo-performance-monitor"
import { toast } from "@/hooks/use-toast"

interface HighConfidenceAIPanelProps {
  onRecommendationsApplied?: (applied: AIThresholdRecommendation[]) => void
  className?: string
}

interface OptimalSuggestion {
  metric: string
  currentValue: number
  suggestedValue: number
  confidence: number
  reasoning: string
  impact: "low" | "medium" | "high"
}

export function HighConfidenceAIPanel({ onRecommendationsApplied, className }: HighConfidenceAIPanelProps) {
  const [highConfidenceRecs, setHighConfidenceRecs] = useState<AIThresholdRecommendation[]>([])
  const [optimalSuggestions, setOptimalSuggestions] = useState<OptimalSuggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isApplying, setIsApplying] = useState(false)
  const [appliedCount, setAppliedCount] = useState(0)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [selectedRecommendation, setSelectedRecommendation] = useState<AIThresholdRecommendation | null>(null)
  const [autoApplyEnabled, setAutoApplyEnabled] = useState(false)
  const [showReasoningExplorer, setShowReasoningExplorer] = useState(false)
  const [selectedReasoningRec, setSelectedReasoningRec] = useState<AIThresholdRecommendation | null>(null)

  const { generateRecommendations } = useAIThresholdRecommendations()

  useEffect(() => {
    loadHighConfidenceRecommendations()
  }, [])

  const loadHighConfidenceRecommendations = async () => {
    setIsLoading(true)
    try {
      const allRecommendations = await generateRecommendations({
        businessContext: {
          environment: "production",
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

      // Filter for high confidence (90%+) recommendations
      const highConfidence = allRecommendations.filter((rec) => rec.confidence >= 90)
      setHighConfidenceRecs(highConfidence)

      // Get optimal suggestions
      const aiAnalyzer = (await import("@/lib/ai-threshold-analyzer")).aiThresholdAnalyzer
      const optimal = aiAnalyzer.getOptimalThresholdSuggestions()
      setOptimalSuggestions(optimal)
    } catch (error) {
      console.error("Failed to load high-confidence recommendations:", error)
      toast({
        title: "AI Analysis Error",
        description: "Failed to load high-confidence recommendations.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const applyAllHighConfidenceRecommendations = async () => {
    setIsApplying(true)
    try {
      const aiAnalyzer = (await import("@/lib/ai-threshold-analyzer")).aiThresholdAnalyzer
      const result = await aiAnalyzer.applyHighConfidenceRecommendations(90)

      const successCount = result.results.filter((r) => r.success).length
      setAppliedCount(successCount)

      if (successCount > 0) {
        toast({
          title: `🚀 ${successCount} AI Recommendations Applied!`,
          description: `High-confidence thresholds are now monitoring your performance automatically.`,
        })

        if (onRecommendationsApplied) {
          onRecommendationsApplied(result.applied)
        }
      }

      if (result.results.some((r) => !r.success)) {
        const errorCount = result.results.filter((r) => !r.success).length
        toast({
          title: "Partial Application",
          description: `${errorCount} recommendation${errorCount !== 1 ? "s" : ""} could not be applied.`,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Application Error",
        description: "Failed to apply recommendations. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsApplying(false)
    }
  }

  const applyIndividualRecommendation = async (recommendation: AIThresholdRecommendation) => {
    try {
      const threshold = logoPerformanceMonitor.addThreshold({
        name: `AI: ${recommendation.metric.replace(/([A-Z])/g, " $1")} Alert`,
        metric: recommendation.metric,
        condition: recommendation.condition,
        value: recommendation.recommendedValue,
        enabled: true,
        cooldownMinutes: recommendation.priority === "critical" ? 5 : recommendation.priority === "high" ? 10 : 15,
        notificationChannels: recommendation.priority === "critical" ? ["browser", "console"] : ["console"],
      })

      toast({
        title: "AI Recommendation Applied! 🤖",
        description: `"${threshold.name}" is now monitoring your performance.`,
      })

      // Remove from high confidence list
      setHighConfidenceRecs((prev) => prev.filter((rec) => rec.id !== recommendation.id))
      setAppliedCount((prev) => prev + 1)
    } catch (error) {
      toast({
        title: "Application Error",
        description: "Failed to apply recommendation. Please try again.",
        variant: "destructive",
      })
    }
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

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-red-700 bg-red-50 border-red-200"
      case "medium":
        return "text-yellow-700 bg-yellow-50 border-yellow-200"
      case "low":
        return "text-green-700 bg-green-50 border-green-200"
      default:
        return "text-gray-700 bg-gray-50 border-gray-200"
    }
  }

  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 animate-pulse text-blue-600" />
            Loading High-Confidence AI Recommendations...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-lg animate-pulse">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-4 bg-slate-200 rounded w-32"></div>
                  <div className="h-6 bg-slate-200 rounded w-20"></div>
                </div>
                <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-slate-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
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
              <Award className="w-5 h-5 text-gold-600" />
              High-Confidence AI Recommendations
              <Badge className="bg-gold-100 text-gold-800 border-gold-200">90%+ Confidence</Badge>
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={loadHighConfidenceRecommendations} disabled={isLoading}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              {highConfidenceRecs.length > 0 && (
                <Button
                  onClick={applyAllHighConfidenceRecommendations}
                  disabled={isApplying}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isApplying ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Applying...
                    </>
                  ) : (
                    <>
                      <Rocket className="w-4 h-4 mr-2" />
                      Apply All ({highConfidenceRecs.length})
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-powered recommendations with 90%+ confidence scores for optimal performance monitoring
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Applied Count Banner */}
          {appliedCount > 0 && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                🎉 Successfully applied {appliedCount} high-confidence AI recommendation
                {appliedCount !== 1 ? "s" : ""}! Your monitoring is now optimized.
              </AlertDescription>
            </Alert>
          )}

          {/* High Confidence Recommendations */}
          {highConfidenceRecs.length === 0 ? (
            <div className="text-center py-8">
              <Brain className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold mb-2">No High-Confidence Recommendations</h3>
              <p className="text-muted-foreground mb-4">
                {appliedCount > 0
                  ? "All high-confidence recommendations have been applied!"
                  : "Collect more performance data for high-confidence AI analysis"}
              </p>
              {appliedCount === 0 && (
                <Button variant="outline" onClick={loadHighConfidenceRecommendations}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Check Again
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  Premium AI Recommendations ({highConfidenceRecs.length})
                </h3>
                <Badge variant="outline" className="text-blue-700 border-blue-300">
                  Ready to Apply
                </Badge>
              </div>

              {highConfidenceRecs.map((recommendation) => (
                <div
                  key={recommendation.id}
                  className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200 hover:shadow-lg transition-all duration-200"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {getMetricIcon(recommendation.metric)}
                      <div>
                        <span className="font-semibold capitalize">
                          {recommendation.metric.replace(/([A-Z])/g, " $1")}
                        </span>
                        <Badge className={getPriorityColor(recommendation.priority)} size="sm">
                          {recommendation.priority}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full">
                            <Brain className="w-3 h-3 text-green-600" />
                            <span className="text-sm font-bold text-green-700">{recommendation.confidence}%</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>High Confidence AI Recommendation</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  {/* Recommendation Value */}
                  <div className="mb-3 p-3 bg-white rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      {recommendation.condition === "above" ? (
                        <TrendingUp className="w-4 h-4 text-red-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      <span className="text-lg font-bold text-blue-700">
                        Alert when {recommendation.condition} {recommendation.recommendedValue}
                        {recommendation.metric === "averageLoadTime" ? "ms" : "%"}
                      </span>
                    </div>
                    <Progress value={recommendation.confidence} className="h-2" />
                  </div>

                  {/* AI Reasoning */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">AI Reasoning</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{recommendation.reasoning}</p>
                  </div>

                  {/* Business Impact */}
                  <div className="mb-4 p-2 bg-white rounded border border-blue-100">
                    <div className="flex items-center gap-2 mb-1">
                      <BarChart3 className="w-3 h-3 text-purple-600" />
                      <span className="text-xs font-medium text-purple-800">Business Impact</span>
                    </div>
                    <p className="text-xs text-slate-600">{recommendation.businessImpact}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge variant="outline" className="text-green-700 border-green-300">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>High-confidence recommendation verified by AI</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    <Button
                      size="sm"
                      onClick={() => applyIndividualRecommendation(recommendation)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Play className="w-3 h-3 mr-1" />
                      Apply Now
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setSelectedReasoningRec(recommendation)
                        setShowReasoningExplorer(true)
                      }}
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      AI Analysis
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Optimal Suggestions */}
          {optimalSuggestions.length > 0 && (
            <div className="space-y-4">
              <div className="border-t pt-4">
                <h3 className="font-semibold flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-blue-600" />
                  Optimal Performance Targets
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {optimalSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-3 bg-slate-50 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm capitalize">
                          {suggestion.metric.replace(/([A-Z])/g, " $1")}
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {suggestion.confidence}%
                          </Badge>
                          <Badge className={getImpactColor(suggestion.impact)} size="sm">
                            {suggestion.impact} impact
                          </Badge>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        Current: {suggestion.currentValue.toFixed(1)} → Suggested:{" "}
                        {suggestion.suggestedValue.toFixed(1)}
                      </div>
                      <p className="text-xs text-slate-600">{suggestion.reasoning}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* AI Learning Notice */}
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-900">Premium AI Intelligence</span>
              <Badge className="bg-gold-100 text-gold-800 border-gold-200">90%+ Confidence</Badge>
            </div>
            <p className="text-sm text-purple-700 leading-relaxed">
              These recommendations represent the highest quality AI analysis based on your performance data. The 90%+
              confidence threshold ensures optimal monitoring with minimal false positives. Applied thresholds will
              continuously learn and adapt to your system's behavior patterns.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold-600" />
              High-Confidence AI Recommendation
              {selectedRecommendation && (
                <Badge className="bg-gold-100 text-gold-800 border-gold-200">
                  {selectedRecommendation.confidence}% Confidence
                </Badge>
              )}
            </DialogTitle>
            <DialogDescription>
              Detailed analysis and implementation guidance for this premium AI recommendation
            </DialogDescription>
          </DialogHeader>

          {selectedRecommendation && (
            <div className="space-y-6">
              {/* Overview */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  {getMetricIcon(selectedRecommendation.metric)}
                  <h3 className="font-semibold capitalize">
                    {selectedRecommendation.metric.replace(/([A-Z])/g, " $1")} Optimization
                  </h3>
                  <Badge className={getPriorityColor(selectedRecommendation.priority)}>
                    {selectedRecommendation.priority} priority
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Recommended Threshold:</span>
                    <p className="font-bold text-blue-700 text-lg">
                      {selectedRecommendation.condition} {selectedRecommendation.recommendedValue}
                      {selectedRecommendation.metric === "averageLoadTime" ? "ms" : "%"}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">AI Confidence:</span>
                    <p className="font-bold text-green-700 text-lg">{selectedRecommendation.confidence}%</p>
                  </div>
                </div>
              </div>

              {/* AI Analysis Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Expected Impact</h4>
                  <p className="text-sm text-green-700">{selectedRecommendation.expectedImpact}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Business Value</h4>
                  <p className="text-sm text-blue-700">{selectedRecommendation.businessImpact}</p>
                </div>
              </div>

              {/* Technical Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                    AI Reasoning
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded">
                    {selectedRecommendation.reasoning}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-500" />
                    Technical Justification
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded">
                    {selectedRecommendation.technicalJustification}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    Risk Assessment
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded">
                    {selectedRecommendation.riskAssessment}
                  </p>
                </div>
              </div>

              {/* Implementation Notes */}
              <div>
                <h4 className="font-semibold mb-2">Implementation Guidelines</h4>
                <ul className="text-sm text-slate-700 space-y-1 bg-slate-50 p-3 rounded">
                  {selectedRecommendation.implementationNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Premium AI Badge */}
              <div className="p-4 bg-gradient-to-r from-gold-50 to-yellow-50 rounded-lg border border-gold-200">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-gold-600" />
                  <span className="font-semibold text-gold-900">Premium AI Analysis</span>
                </div>
                <p className="text-sm text-gold-800">
                  This recommendation has achieved our highest confidence threshold (90%+), indicating exceptional
                  reliability based on comprehensive data analysis, pattern recognition, and performance modeling.
                </p>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDetailsDialog(false)}>
              Close
            </Button>
            {selectedRecommendation && (
              <Button
                onClick={() => {
                  applyIndividualRecommendation(selectedRecommendation)
                  setShowDetailsDialog(false)
                }}
                className="bg-green-600 hover:bg-green-700"
              >
                <Play className="w-4 h-4 mr-2" />
                Apply Recommendation
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* AI Reasoning Explorer */}
      {selectedReasoningRec && (
        <AIReasoningExplorer
          recommendation={selectedReasoningRec}
          isOpen={showReasoningExplorer}
          onClose={() => {
            setShowReasoningExplorer(false)
            setSelectedReasoningRec(null)
          }}
        />
      )}
    </TooltipProvider>
  )
}
