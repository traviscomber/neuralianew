"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Brain,
  TrendingUp,
  Target,
  AlertTriangle,
  CheckCircle,
  Download,
  Upload,
  Activity,
  BarChart3,
  Zap,
  Lightbulb,
  Settings,
} from "lucide-react"
import { aiLearningSystem, type LearningInsight, type ModelMetrics } from "@/lib/ai-learning-system"

export function AILearningDashboard() {
  const [modelMetrics, setModelMetrics] = useState<ModelMetrics | null>(null)
  const [insights, setInsights] = useState<LearningInsight[]>([])
  const [learningStats, setLearningStats] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = () => {
      setModelMetrics(aiLearningSystem.getModelMetrics())
      setInsights(aiLearningSystem.getInsights())
      setLearningStats(aiLearningSystem.getLearningStats())
      setIsLoading(false)
    }

    loadData()
    const interval = setInterval(loadData, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleExportData = () => {
    const data = aiLearningSystem.exportLearningData()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `ai-learning-data-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string)
        aiLearningSystem.importLearningData(data)
        // Refresh data
        setModelMetrics(aiLearningSystem.getModelMetrics())
        setInsights(aiLearningSystem.getInsights())
        setLearningStats(aiLearningSystem.getLearningStats())
      } catch (error) {
        console.error("Failed to import learning data:", error)
      }
    }
    reader.readAsText(file)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <Brain className="w-12 h-12 mx-auto animate-pulse text-blue-500" />
          <p className="text-slate-600 dark:text-slate-400">Loading AI Learning System...</p>
        </div>
      </div>
    )
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "pattern":
        return <BarChart3 className="w-4 h-4" />
      case "improvement":
        return <TrendingUp className="w-4 h-4" />
      case "warning":
        return <AlertTriangle className="w-4 h-4" />
      case "optimization":
        return <Settings className="w-4 h-4" />
      default:
        return <Lightbulb className="w-4 h-4" />
    }
  }

  const getInsightColor = (type: string) => {
    switch (type) {
      case "pattern":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "improvement":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "warning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "optimization":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">AI Learning Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Monitor and analyze AI model learning progress and insights
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handleExportData}>
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Button variant="outline" onClick={() => document.getElementById("import-file")?.click()}>
            <Upload className="w-4 h-4 mr-2" />
            Import Data
          </Button>
          <input id="import-file" type="file" accept=".json" onChange={handleImportData} className="hidden" />
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Model Performance</TabsTrigger>
          <TabsTrigger value="insights">Learning Insights</TabsTrigger>
          <TabsTrigger value="data">Data Management</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Learning Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Model Accuracy</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {modelMetrics ? `${(modelMetrics.accuracy * 100).toFixed(1)}%` : "N/A"}
                </div>
                <Progress value={modelMetrics ? modelMetrics.accuracy * 100 : 0} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Implementation Rate</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {learningStats ? `${(learningStats.implementationRate * 100).toFixed(1)}%` : "N/A"}
                </div>
                <Progress value={learningStats ? learningStats.implementationRate * 100 : 0} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Effectiveness Score</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {learningStats ? `${(learningStats.averageEffectiveness * 100).toFixed(1)}%` : "N/A"}
                </div>
                <Progress value={learningStats ? learningStats.averageEffectiveness * 100 : 0} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Learning Data Size</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {learningStats ? learningStats.learningDataSize.toLocaleString() : "N/A"}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Training samples</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5" />
                <span>Recent Learning Insights</span>
              </CardTitle>
              <CardDescription>Latest insights from the AI learning system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.slice(0, 5).map((insight) => (
                  <div key={insight.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                    <div className={`p-2 rounded-md ${getInsightColor(insight.type)}`}>
                      {getInsightIcon(insight.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white">{insight.title}</h4>
                        <Badge variant="outline" className="ml-2">
                          {(insight.confidence * 100).toFixed(0)}% confidence
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{insight.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500">
                        <span>{new Date(insight.timestamp).toLocaleString()}</span>
                        <Badge
                          variant={
                            insight.impact === "high"
                              ? "destructive"
                              : insight.impact === "medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {insight.impact} impact
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          {/* Model Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Model Performance Metrics</CardTitle>
                <CardDescription>Current AI model performance indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {modelMetrics && (
                  <>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Accuracy</span>
                        <span className="text-sm">{(modelMetrics.accuracy * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={modelMetrics.accuracy * 100} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Precision</span>
                        <span className="text-sm">{(modelMetrics.precision * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={modelMetrics.precision * 100} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Recall</span>
                        <span className="text-sm">{(modelMetrics.recall * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={modelMetrics.recall * 100} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">F1 Score</span>
                        <span className="text-sm">{(modelMetrics.f1Score * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={modelMetrics.f1Score * 100} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Confidence Calibration</span>
                        <span className="text-sm">{(modelMetrics.confidenceCalibration * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={modelMetrics.confidenceCalibration * 100} />
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Statistics</CardTitle>
                <CardDescription>User feedback and implementation data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {learningStats && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Recommendations</span>
                      <span className="text-sm font-bold">{learningStats.totalRecommendations}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Positive Feedback</span>
                      <Badge variant="default">{learningStats.positiveFeedback}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Negative Feedback</span>
                      <Badge variant="destructive">{learningStats.negativeFeedback}</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Last Learning Cycle</span>
                      <span className="text-xs text-slate-500">
                        {new Date(learningStats.lastLearningCycle).toLocaleString()}
                      </span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>All Learning Insights</CardTitle>
              <CardDescription>Complete history of AI learning insights and discoveries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight) => (
                  <div key={insight.id} className="flex items-start space-x-3 p-4 rounded-lg border">
                    <div className={`p-2 rounded-md ${getInsightColor(insight.type)}`}>
                      {getInsightIcon(insight.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white">{insight.title}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{(insight.confidence * 100).toFixed(0)}% confidence</Badge>
                          <Badge
                            variant={
                              insight.impact === "high"
                                ? "destructive"
                                : insight.impact === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {insight.impact} impact
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{insight.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500">
                        <span>{new Date(insight.timestamp).toLocaleString()}</span>
                        <Badge variant="outline" className={getInsightColor(insight.type)}>
                          {insight.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Export</CardTitle>
                <CardDescription>Export learning data for backup or analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Export all learning data including model metrics, insights, and training data.
                </p>
                <Button onClick={handleExportData} className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Export Learning Data
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Import</CardTitle>
                <CardDescription>Import previously exported learning data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Import learning data from a previous export to restore or merge datasets.
                </p>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("import-file")?.click()}
                  className="w-full"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Import Learning Data
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Data Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Data Statistics</CardTitle>
              <CardDescription>Overview of learning data collection</CardDescription>
            </CardHeader>
            <CardContent>
              {learningStats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{learningStats.learningDataSize}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Total Samples</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{learningStats.positiveFeedback}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Positive Feedback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{learningStats.negativeFeedback}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Negative Feedback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{insights.length}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Total Insights</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
