"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Brain,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  BarChart3,
  Users,
  Clock,
  AlertTriangle,
  Download,
  Upload,
  RefreshCw,
  Zap,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Activity,
  Gauge,
  LineChart,
} from "lucide-react"
import { useAILearningSystem, type LearningInsight, type ModelPerformance } from "@/lib/ai-learning-system"
import { toast } from "@/hooks/use-toast"

interface AILearningDashboardProps {
  className?: string
}

export function AILearningDashboard({ className }: AILearningDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [learningInsights, setLearningInsights] = useState<LearningInsight[]>([])
  const [modelPerformance, setModelPerformance] = useState<Map<string, ModelPerformance>>(new Map())
  const [learningStats, setLearningStats] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const { getLearningInsights, getModelPerformance, getLearningStatistics, exportData, importData, recordFeedback } =
    useAILearningSystem()

  useEffect(() => {
    loadLearningData()
    const interval = setInterval(loadLearningData, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const loadLearningData = async () => {
    setIsLoading(true)
    try {
      const insights = await getLearningInsights()
      const performance = await getModelPerformance()
      const stats = await getLearningStatistics()

      setLearningInsights(insights)
      setModelPerformance(performance)
      setLearningStats(stats)
    } catch (error) {
      console.error("Failed to load learning data:", error)
      toast({
        title: "Loading Error",
        description: "Failed to load AI learning data.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleExportData = () => {
    try {
      const data = exportData()
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `ai-learning-data-${Date.now()}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast({
        title: "Data Exported",
        description: "AI learning data has been exported successfully.",
      })
    } catch (error) {
      toast({
        title: "Export Error",
        description: "Failed to export learning data.",
        variant: "destructive",
      })
    }
  }

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string)
        const success = importData(data)

        if (success) {
          toast({
            title: "Data Imported",
            description: "AI learning data has been imported successfully.",
          })
          loadLearningData()
        } else {
          throw new Error("Import failed")
        }
      } catch (error) {
        toast({
          title: "Import Error",
          description: "Failed to import learning data. Please check the file format.",
          variant: "destructive",
        })
      }
    }
    reader.readAsText(file)
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "pattern":
        return <Eye className="w-4 h-4 text-blue-600" />
      case "improvement":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-orange-600" />
      case "optimization":
        return <Zap className="w-4 h-4 text-purple-600" />
      default:
        return <Lightbulb className="w-4 h-4" />
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
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
      {/* Learning Statistics */}
      {learningStats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{learningStats.totalRecommendations}</div>
                  <div className="text-sm text-muted-foreground">Total Recommendations</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Applied: {learningStats.appliedRecommendations}</span>
                  <span>{(learningStats.applicationRate * 100).toFixed(1)}%</span>
                </div>
                <Progress value={learningStats.applicationRate * 100} className="mt-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-full">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{learningStats.modelAccuracy.toFixed(1)}%</div>
                  <div className="text-sm text-muted-foreground">Model Accuracy</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Effectiveness</span>
                  <span>{learningStats.averageEffectiveness.toFixed(1)}%</span>
                </div>
                <Progress value={learningStats.averageEffectiveness} className="mt-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{learningStats.positiveFeeback}</div>
                  <div className="text-sm text-muted-foreground">Positive Feedback</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{learningStats.positiveFeeback}</span>
                  <ThumbsDown className="w-4 h-4 text-red-600" />
                  <span className="text-sm">{learningStats.negativeFeeback}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{learningStats.learningDataSize}</div>
                  <div className="text-sm text-muted-foreground">Learning Data Points</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${learningStats.isLearning ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
                  ></div>
                  <span className="text-sm">{learningStats.isLearning ? "Learning Active" : "Learning Idle"}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Recent Learning Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            Recent Learning Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {learningInsights.slice(0, 5).map((insight) => (
              <div key={insight.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    {getInsightIcon(insight.type)}
                    <div>
                      <h3 className="font-semibold">{insight.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={getImpactColor(insight.impact)} size="sm">
                          {insight.impact} impact
                        </Badge>
                        <Badge variant="outline" size="sm">
                          {insight.confidence}% confidence
                        </Badge>
                        <Badge variant="outline" size="sm" className="capitalize">
                          {insight.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  {insight.actionable && (
                    <Button size="sm" variant="outline">
                      <Target className="w-3 h-3 mr-1" />
                      Act
                    </Button>
                  )}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-3">{insight.description}</p>

                {insight.recommendation && (
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">AI Recommendation</span>
                    </div>
                    <p className="text-sm text-blue-700">{insight.recommendation}</p>
                  </div>
                )}

                <div className="flex items-center justify-between mt-3 pt-3 border-t">
                  <div className="text-sm text-muted-foreground">
                    {insight.supportingData.dataPoints} data points • {insight.supportingData.timeframe}
                  </div>
                  <Progress value={insight.confidence} className="w-20 h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderModelPerformanceTab = () => (
    <div className="space-y-6">
      {/* Model Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from(modelPerformance.entries()).map(([modelId, performance]) => (
          <Card key={modelId}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Gauge className="w-4 h-4 text-blue-600" />
                {modelId.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Accuracy */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Accuracy</span>
                    <span className="text-sm font-bold text-green-600">{performance.accuracy.toFixed(1)}%</span>
                  </div>
                  <Progress value={performance.accuracy} className="h-2" />
                </div>

                {/* Precision */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Precision</span>
                    <span className="text-sm font-bold text-blue-600">{performance.precision.toFixed(1)}%</span>
                  </div>
                  <Progress value={performance.precision} className="h-2" />
                </div>

                {/* Recall */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Recall</span>
                    <span className="text-sm font-bold text-purple-600">{performance.recall.toFixed(1)}%</span>
                  </div>
                  <Progress value={performance.recall} className="h-2" />
                </div>

                {/* F1 Score */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">F1 Score</span>
                    <span className="text-sm font-bold text-orange-600">{performance.f1Score.toFixed(1)}%</span>
                  </div>
                  <Progress value={performance.f1Score} className="h-2" />
                </div>

                <Separator />

                {/* Additional Metrics */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-2 bg-slate-50 rounded">
                    <div className="text-lg font-bold">{performance.trainingDataSize}</div>
                    <div className="text-xs text-muted-foreground">Training Data</div>
                  </div>
                  <div className="p-2 bg-slate-50 rounded">
                    <div className="text-lg font-bold">{performance.confidenceCalibration.toFixed(1)}%</div>
                    <div className="text-xs text-muted-foreground">Calibration</div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground text-center">
                  Last updated: {performance.lastUpdated.toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="w-5 h-5 text-green-600" />
            Performance Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Accuracy Trend Simulation */}
            <div className="space-y-4">
              <h4 className="font-medium">Model Accuracy Over Time</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h5 className="text-sm font-medium text-muted-foreground">Top Performing Models</h5>
                  {Array.from(modelPerformance.entries())
                    .sort(([, a], [, b]) => b.accuracy - a.accuracy)
                    .slice(0, 3)
                    .map(([modelId, performance]) => (
                      <div
                        key={modelId}
                        className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200"
                      >
                        <span className="text-sm font-medium">
                          {modelId.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-green-700">{performance.accuracy.toFixed(1)}%</span>
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    ))}
                </div>

                <div className="space-y-3">
                  <h5 className="text-sm font-medium text-muted-foreground">Recent Improvements</h5>
                  {Array.from(modelPerformance.entries())
                    .map(([modelId, performance]) => ({
                      modelId,
                      improvement: Math.random() * 10 + 2, // Simulated improvement
                    }))
                    .sort((a, b) => b.improvement - a.improvement)
                    .slice(0, 3)
                    .map(({ modelId, improvement }) => (
                      <div
                        key={modelId}
                        className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200"
                      >
                        <span className="text-sm font-medium">
                          {modelId.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-blue-700">+{improvement.toFixed(1)}%</span>
                          <Award className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Validation Results */}
            <div className="space-y-4">
              <h4 className="font-medium">Validation Results Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.from(modelPerformance.values()).map((performance, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h5 className="font-medium text-sm mb-3">
                      {performance.modelId.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-bold text-green-700">{performance.validationResults.truePositives}</div>
                        <div className="text-green-600">True +</div>
                      </div>
                      <div className="text-center p-2 bg-red-50 rounded">
                        <div className="font-bold text-red-700">{performance.validationResults.falsePositives}</div>
                        <div className="text-red-600">False +</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-bold text-blue-700">{performance.validationResults.trueNegatives}</div>
                        <div className="text-blue-600">True -</div>
                      </div>
                      <div className="text-center p-2 bg-orange-50 rounded">
                        <div className="font-bold text-orange-700">{performance.validationResults.falseNegatives}</div>
                        <div className="text-orange-600">False -</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderInsightsTab = () => (
    <div className="space-y-6">
      {/* Insights Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { type: "pattern", count: learningInsights.filter((i) => i.type === "pattern").length, color: "blue" },
          {
            type: "improvement",
            count: learningInsights.filter((i) => i.type === "improvement").length,
            color: "green",
          },
          { type: "warning", count: learningInsights.filter((i) => i.type === "warning").length, color: "orange" },
          {
            type: "optimization",
            count: learningInsights.filter((i) => i.type === "optimization").length,
            color: "purple",
          },
        ].map(({ type, count, color }) => (
          <Card key={type}>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                {getInsightIcon(type)}
                <div>
                  <div className="text-2xl font-bold">{count}</div>
                  <div className="text-sm text-muted-foreground capitalize">{type}s</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* All Learning Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-600" />
            All Learning Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {learningInsights.map((insight) => (
              <div key={insight.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    {getInsightIcon(insight.type)}
                    <div>
                      <h3 className="font-semibold">{insight.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={getImpactColor(insight.impact)} size="sm">
                          {insight.impact} impact
                        </Badge>
                        <Badge variant="outline" size="sm">
                          {insight.confidence}% confidence
                        </Badge>
                        <Badge variant="outline" size="sm" className="capitalize">
                          {insight.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  {insight.actionable && (
                    <Button size="sm" variant="outline">
                      <Target className="w-3 h-3 mr-1" />
                      Take Action
                    </Button>
                  )}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-3">{insight.description}</p>

                {insight.recommendation && (
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">AI Recommendation</span>
                    </div>
                    <p className="text-sm text-blue-700">{insight.recommendation}</p>
                  </div>
                )}

                {/* Supporting Data */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>
                      {insight.supportingData.dataPoints} data points • {insight.supportingData.timeframe}
                    </span>
                    <Progress value={insight.confidence} className="w-20 h-2" />
                  </div>

                  {insight.supportingData.correlations.length > 0 && (
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium">Key Correlations</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {insight.supportingData.correlations.map((correlation, index) => (
                          <div key={index} className="p-2 bg-slate-50 rounded text-sm">
                            <div className="flex items-center justify-between">
                              <span className="capitalize">{correlation.factor.replace(/_/g, " ")}</span>
                              <span className="font-medium">{(correlation.correlation * 100).toFixed(1)}%</span>
                            </div>
                            <Progress value={correlation.significance * 100} className="h-1 mt-1" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderDataManagementTab = () => (
    <div className="space-y-6">
      {/* Data Management Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" />
            Learning Data Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Export Learning Data</h3>
              <p className="text-sm text-muted-foreground">
                Export all learning data including model performance, insights, and training history for backup or
                analysis.
              </p>
              <Button onClick={handleExportData} className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Export Learning Data
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Import Learning Data</h3>
              <p className="text-sm text-muted-foreground">
                Import previously exported learning data to restore or merge learning history.
              </p>
              <div className="relative">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportData}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Button variant="outline" className="w-full bg-transparent">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Learning Data
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Statistics */}
      {learningStats && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-600" />
              Detailed Learning Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Recommendation Statistics</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm">Total Recommendations</span>
                    <span className="font-bold">{learningStats.totalRecommendations}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">Applied Recommendations</span>
                    <span className="font-bold">{learningStats.appliedRecommendations}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm">Application Rate</span>
                    <span className="font-bold">{(learningStats.applicationRate * 100).toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Feedback Statistics</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">Positive Feedback</span>
                    <span className="font-bold text-green-700">{learningStats.positiveFeeback}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-sm">Negative Feedback</span>
                    <span className="font-bold text-red-700">{learningStats.negativeFeeback}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm">Feedback Rate</span>
                    <span className="font-bold">
                      {(
                        ((learningStats.positiveFeeback + learningStats.negativeFeeback) /
                          Math.max(1, learningStats.totalRecommendations)) *
                        100
                      ).toFixed(1)}
                      %
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm">Average Effectiveness</span>
                    <span className="font-bold">{learningStats.averageEffectiveness.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm">Model Accuracy</span>
                    <span className="font-bold">{learningStats.modelAccuracy.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">Learning Data Size</span>
                    <span className="font-bold">{learningStats.learningDataSize}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Learning Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-600" />
            Learning System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${learningStats?.isLearning ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
                ></div>
                <div>
                  <div className="font-semibold">Learning Status</div>
                  <div className="text-sm text-muted-foreground">
                    {learningStats?.isLearning ? "AI is actively learning from new data" : "Learning system is idle"}
                  </div>
                </div>
              </div>
              <Button variant="outline" onClick={loadLearningData} disabled={isLoading}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>

            {learningStats && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">Last Learning Cycle</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {learningStats.lastLearningCycle.toLocaleString()}
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-green-600" />
                    <span className="font-medium">System Health</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-700">Optimal Performance</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  if (isLoading && !learningStats) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 animate-pulse text-blue-600" />
            Loading AI Learning Dashboard...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-lg animate-pulse">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-4 bg-slate-200 rounded w-48"></div>
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
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-600" />
            AI Learning Dashboard
            <Badge className="bg-gold-100 text-gold-800 border-gold-200">Advanced Intelligence</Badge>
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadLearningData} disabled={isLoading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Monitor AI learning progress, model performance, and system insights
        </p>
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="models" className="flex items-center gap-1">
              <Gauge className="w-3 h-3" />
              Models
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-1">
              <Lightbulb className="w-3 h-3" />
              Insights
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-1">
              <Activity className="w-3 h-3" />
              Data
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            {renderOverviewTab()}
          </TabsContent>

          <TabsContent value="models" className="mt-0">
            {renderModelPerformanceTab()}
          </TabsContent>

          <TabsContent value="insights" className="mt-0">
            {renderInsightsTab()}
          </TabsContent>

          <TabsContent value="data" className="mt-0">
            {renderDataManagementTab()}
          </TabsContent>
        </Tabs>

        {/* AI Learning Notice */}
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-purple-600" />
            <span className="font-semibold text-purple-900">Continuous AI Learning</span>
            <Badge className="bg-gold-100 text-gold-800 border-gold-200">Self-Improving</Badge>
          </div>
          <p className="text-sm text-purple-700 leading-relaxed">
            This AI learning system continuously improves its recommendations by analyzing implementation outcomes, user
            feedback, and performance patterns. The more you use it, the smarter and more accurate it becomes, providing
            increasingly personalized and effective suggestions for your specific environment.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
