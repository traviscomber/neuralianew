"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Brain,
  Search,
  Filter,
  BookOpen,
  Lightbulb,
  BarChart3,
  Target,
  Sparkles,
  Award,
  RefreshCw,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react"
import { AIReasoningExplorer } from "@/components/monitoring/ai-reasoning-explorer"
import { useAIThresholdRecommendations, type AIThresholdRecommendation } from "@/lib/ai-threshold-analyzer"
import { toast } from "@/hooks/use-toast"

export default function AIReasoningExplorerPage() {
  const [recommendations, setRecommendations] = useState<AIThresholdRecommendation[]>([])
  const [filteredRecommendations, setFilteredRecommendations] = useState<AIThresholdRecommendation[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRecommendation, setSelectedRecommendation] = useState<AIThresholdRecommendation | null>(null)
  const [showExplorer, setShowExplorer] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [confidenceFilter, setConfidenceFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [metricFilter, setMetricFilter] = useState("all")

  const { generateRecommendations } = useAIThresholdRecommendations()

  useEffect(() => {
    loadRecommendations()
  }, [])

  useEffect(() => {
    filterRecommendations()
  }, [recommendations, searchTerm, confidenceFilter, priorityFilter, metricFilter])

  const loadRecommendations = async () => {
    setIsLoading(true)
    try {
      const recs = await generateRecommendations({
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
      setRecommendations(recs)
    } catch (error) {
      console.error("Failed to load recommendations:", error)
      toast({
        title: "Loading Error",
        description: "Failed to load AI recommendations for analysis.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const filterRecommendations = () => {
    let filtered = recommendations

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (rec) =>
          rec.metric.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rec.reasoning.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rec.businessImpact.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Confidence filter
    if (confidenceFilter !== "all") {
      const minConfidence = Number.parseInt(confidenceFilter)
      filtered = filtered.filter((rec) => rec.confidence >= minConfidence)
    }

    // Priority filter
    if (priorityFilter !== "all") {
      filtered = filtered.filter((rec) => rec.priority === priorityFilter)
    }

    // Metric filter
    if (metricFilter !== "all") {
      filtered = filtered.filter((rec) => rec.metric === metricFilter)
    }

    setFilteredRecommendations(filtered)
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
    if (confidence >= 90) return "text-green-600 bg-green-50 border-green-200"
    if (confidence >= 75) return "text-blue-600 bg-blue-50 border-blue-200"
    if (confidence >= 60) return "text-yellow-600 bg-yellow-50 border-yellow-200"
    return "text-red-600 bg-red-50 border-red-200"
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Brain className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold">AI Reasoning Explorer</h1>
          <Sparkles className="w-6 h-6 text-yellow-500" />
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Dive deep into the comprehensive AI analysis behind each performance monitoring recommendation. Explore data
          patterns, business impact, technical considerations, and predictive insights.
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-600" />
            Analysis Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search recommendations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Confidence Level</Label>
              <Select value={confidenceFilter} onValueChange={setConfidenceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All confidence levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="90">90%+ (Premium)</SelectItem>
                  <SelectItem value="75">75%+ (High)</SelectItem>
                  <SelectItem value="60">60%+ (Medium)</SelectItem>
                  <SelectItem value="0">All Recommendations</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Priority</Label>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All priorities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Metric Type</Label>
              <Select value={metricFilter} onValueChange={setMetricFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All metrics" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Metrics</SelectItem>
                  <SelectItem value="successRate">Success Rate</SelectItem>
                  <SelectItem value="averageLoadTime">Load Time</SelectItem>
                  <SelectItem value="fallbackUsageRate">Fallback Usage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button onClick={loadRecommendations} disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">{filteredRecommendations.length}</div>
                <div className="text-sm text-muted-foreground">Total Recommendations</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold-600" />
              <div>
                <div className="text-2xl font-bold">
                  {filteredRecommendations.filter((r) => r.confidence >= 90).length}
                </div>
                <div className="text-sm text-muted-foreground">High Confidence (90%+)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <div>
                <div className="text-2xl font-bold">
                  {filteredRecommendations.filter((r) => r.priority === "critical").length}
                </div>
                <div className="text-sm text-muted-foreground">Critical Priority</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-2xl font-bold">
                  {filteredRecommendations.length > 0
                    ? Math.round(
                        filteredRecommendations.reduce((sum, r) => sum + r.confidence, 0) /
                          filteredRecommendations.length,
                      )
                    : 0}
                  %
                </div>
                <div className="text-sm text-muted-foreground">Average Confidence</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-600" />
            AI Recommendations for Deep Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
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
          ) : filteredRecommendations.length === 0 ? (
            <div className="text-center py-12">
              <Brain className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Recommendations Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or refresh to load new recommendations.
              </p>
              <Button onClick={loadRecommendations} disabled={isLoading}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Load Recommendations
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredRecommendations.map((recommendation) => (
                <div
                  key={recommendation.id}
                  className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-200"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getMetricIcon(recommendation.metric)}
                      <div>
                        <h3 className="font-semibold text-lg capitalize">
                          {recommendation.metric.replace(/([A-Z])/g, " $1")} Analysis
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getPriorityColor(recommendation.priority)} size="sm">
                            {recommendation.priority} priority
                          </Badge>
                          <Badge className={getConfidenceColor(recommendation.confidence)} size="sm">
                            {recommendation.confidence}% confidence
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        setSelectedRecommendation(recommendation)
                        setShowExplorer(true)
                      }}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Explore AI Reasoning
                    </Button>
                  </div>

                  {/* Recommendation Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">Recommended Threshold</span>
                      </div>
                      <div className="text-lg font-bold text-blue-700">
                        {recommendation.condition} {recommendation.recommendedValue}
                        {recommendation.metric === "averageLoadTime" ? "ms" : "%"}
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-2 mb-1">
                        <BarChart3 className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Expected Impact</span>
                      </div>
                      <div className="text-sm text-slate-700">{recommendation.expectedImpact.slice(0, 50)}...</div>
                    </div>

                    <div className="p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-2 mb-1">
                        <Lightbulb className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">Business Value</span>
                      </div>
                      <div className="text-sm text-slate-700">{recommendation.businessImpact.slice(0, 50)}...</div>
                    </div>
                  </div>

                  {/* AI Reasoning Preview */}
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-900">AI Reasoning Preview</span>
                    </div>
                    <p className="text-sm text-purple-800 leading-relaxed">{recommendation.reasoning}</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Related Metrics: {recommendation.relatedMetrics.length}</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span>Implementation Notes: {recommendation.implementationNotes.length}</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span>Risk Level: {recommendation.riskAssessment.includes("Low") ? "Low" : "Moderate"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">Premium AI Analysis Available</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* AI Reasoning Explorer Dialog */}
      {selectedRecommendation && (
        <AIReasoningExplorer
          recommendation={selectedRecommendation}
          isOpen={showExplorer}
          onClose={() => {
            setShowExplorer(false)
            setSelectedRecommendation(null)
          }}
        />
      )}
    </div>
  )
}
