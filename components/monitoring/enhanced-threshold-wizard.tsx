"use client"

import { useState, useEffect } from "react"
import { CustomThresholdWizard } from "./custom-threshold-wizard"
import { HighConfidenceAIPanel } from "./high-confidence-ai-panel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Settings,
  TrendingUp,
  Sparkles,
  Target,
  BarChart3,
  Zap,
  CheckCircle,
  Clock,
  AlertTriangle,
  RefreshCw,
  Activity,
  Award,
  Shield,
} from "lucide-react"
import type { AIThresholdRecommendation } from "@/lib/ai-threshold-analyzer"
import { logoPerformanceMonitor, type PerformanceReport } from "@/lib/logo-performance-monitor"
import { toast } from "@/hooks/use-toast"

export function EnhancedThresholdWizard() {
  const [activeTab, setActiveTab] = useState("ai-recommendations")
  const [performanceReport, setPerformanceReport] = useState<PerformanceReport | null>(null)
  const [appliedRecommendations, setAppliedRecommendations] = useState<AIThresholdRecommendation[]>([])
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [dataQuality, setDataQuality] = useState<{
    status: "excellent" | "good" | "fair" | "poor" | "unknown"
    message: string
    score: number
  }>({ status: "unknown", message: "Loading...", score: 0 })

  useEffect(() => {
    loadPerformanceData()
    checkMonitoringStatus()

    // Set up periodic data refresh
    const interval = setInterval(loadPerformanceData, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const loadPerformanceData = () => {
    try {
      const report = logoPerformanceMonitor.generateReport()
      setPerformanceReport(report)
      updateDataQuality(report)
    } catch (error) {
      console.error("Failed to load performance data:", error)
      toast({
        title: "Data Loading Error",
        description: "Failed to load performance data. Some features may be limited.",
        variant: "destructive",
      })
    }
  }

  const checkMonitoringStatus = () => {
    // Check if monitoring is active (this would be a method on the monitor)
    setIsMonitoring(true) // Assume monitoring is active for now
  }

  const updateDataQuality = (report: PerformanceReport) => {
    let status: "excellent" | "good" | "fair" | "poor" = "poor"
    let message = ""
    let score = 0

    if (report.totalLogos >= 100) {
      status = "excellent"
      message = "Excellent data quality - AI recommendations are highly accurate"
      score = 95
    } else if (report.totalLogos >= 50) {
      status = "good"
      message = "Good data quality - AI recommendations are reliable"
      score = 80
    } else if (report.totalLogos >= 20) {
      status = "fair"
      message = "Fair data quality - collect more samples for better AI insights"
      score = 60
    } else if (report.totalLogos >= 5) {
      status = "poor"
      message = "Limited data - AI recommendations may be less accurate"
      score = 30
    } else {
      status = "poor"
      message = "Insufficient data - need more samples for AI analysis"
      score = 10
    }

    setDataQuality({ status, message, score })
  }

  const handleApplyRecommendation = (recommendation: AIThresholdRecommendation) => {
    setAppliedRecommendations((prev) => [...prev, recommendation])
    toast({
      title: "AI Recommendation Applied! 🤖",
      description: `Smart threshold for ${recommendation.metric.replace(/([A-Z])/g, " $1")} is now active.`,
    })
  }

  const startMonitoring = () => {
    try {
      logoPerformanceMonitor.startMonitoring()
      setIsMonitoring(true)
      toast({
        title: "Monitoring Started! 🚀",
        description: "Logo performance monitoring is now active.",
      })
    } catch (error) {
      toast({
        title: "Monitoring Error",
        description: "Failed to start monitoring. Please try again.",
        variant: "destructive",
      })
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-700 bg-green-50 border-green-200"
      case "good":
        return "text-blue-700 bg-blue-50 border-blue-200"
      case "fair":
        return "text-yellow-700 bg-yellow-50 border-yellow-200"
      case "poor":
        return "text-red-700 bg-red-50 border-red-200"
      default:
        return "text-gray-700 bg-gray-50 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header with System Status */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Brain className="w-6 h-6 text-blue-600" />
                AI-Enhanced Threshold Configuration
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Intelligent threshold creation with AI-powered recommendations and guided configuration
              </p>
            </div>
            <div className="text-right space-y-2">
              {/* Monitoring Status */}
              <div className="flex items-center gap-2">
                <Activity className={`w-4 h-4 ${isMonitoring ? "text-green-600" : "text-red-600"}`} />
                <Badge variant={isMonitoring ? "default" : "destructive"}>
                  {isMonitoring ? "Monitoring Active" : "Monitoring Inactive"}
                </Badge>
                {!isMonitoring && (
                  <Button size="sm" variant="outline" onClick={startMonitoring}>
                    <RefreshCw className="w-3 h-3 mr-1" />
                    Start
                  </Button>
                )}
              </div>

              {/* Data Quality */}
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Data Quality</span>
                <Badge className={getStatusColor(dataQuality.status)}>{dataQuality.status.toUpperCase()}</Badge>
              </div>
              <Progress value={dataQuality.score} className="w-32 h-2" />
              <p className="text-xs text-muted-foreground">{dataQuality.message}</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Performance Overview Dashboard */}
      {performanceReport && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Current Performance Overview
              <Button variant="ghost" size="sm" onClick={loadPerformanceData} className="ml-auto">
                <RefreshCw className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-700">{performanceReport.successRate.toFixed(1)}%</div>
                <div className="text-sm text-green-600">Success Rate</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {performanceReport.successRate >= 98
                    ? "Excellent"
                    : performanceReport.successRate >= 95
                      ? "Good"
                      : performanceReport.successRate >= 90
                        ? "Fair"
                        : "Needs Attention"}
                </div>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-700">{performanceReport.averageLoadTime.toFixed(0)}ms</div>
                <div className="text-sm text-blue-600">Avg Load Time</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {performanceReport.averageLoadTime <= 1000
                    ? "Very Fast"
                    : performanceReport.averageLoadTime <= 2000
                      ? "Fast"
                      : performanceReport.averageLoadTime <= 3000
                        ? "Acceptable"
                        : "Slow"}
                </div>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-700">
                  {performanceReport.fallbackUsageRate.toFixed(1)}%
                </div>
                <div className="text-sm text-orange-600">Fallback Usage</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {performanceReport.fallbackUsageRate <= 5
                    ? "Minimal"
                    : performanceReport.fallbackUsageRate <= 15
                      ? "Low"
                      : performanceReport.fallbackUsageRate <= 25
                        ? "Moderate"
                        : "High"}
                </div>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-700">{performanceReport.totalLogos}</div>
                <div className="text-sm text-purple-600">Total Samples</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {performanceReport.totalLogos >= 100
                    ? "Rich Dataset"
                    : performanceReport.totalLogos >= 50
                      ? "Good Dataset"
                      : performanceReport.totalLogos >= 20
                        ? "Fair Dataset"
                        : "Limited Dataset"}
                </div>
              </div>
            </div>

            {/* Performance Insights */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {performanceReport.slowestLogo && (
                <Alert>
                  <Clock className="h-4 w-4" />
                  <AlertDescription>
                    <div className="text-sm">
                      <strong>Slowest Logo:</strong> {performanceReport.slowestLogo.logoName}(
                      {performanceReport.slowestLogo.loadTime.toFixed(0)}ms)
                    </div>
                  </AlertDescription>
                </Alert>
              )}

              {performanceReport.fastestLogo && (
                <Alert>
                  <Zap className="h-4 w-4" />
                  <AlertDescription>
                    <div className="text-sm">
                      <strong>Fastest Logo:</strong> {performanceReport.fastestLogo.logoName}(
                      {performanceReport.fastestLogo.loadTime.toFixed(0)}ms)
                    </div>
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Data Quality Alert */}
      {dataQuality.status === "poor" && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-2">
              <div className="font-medium">Limited Performance Data</div>
              <div className="text-sm">AI recommendations work best with more performance samples. Consider:</div>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Let the system collect data for 24-48 hours</li>
                <li>Ensure logo monitoring is active across your application</li>
                <li>Test different user scenarios to generate diverse data</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Main Configuration Interface */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ai-recommendations" className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            AI Recommendations
            {appliedRecommendations.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {appliedRecommendations.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="manual-config" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Manual Configuration
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ai-recommendations" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* High-Confidence AI Panel */}
            <div className="lg:col-span-2">
              <HighConfidenceAIPanel onRecommendationsApplied={handleApplyRecommendation} />
            </div>

            {/* AI Insights Sidebar */}
            <div className="space-y-6">
              {/* AI Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Award className="w-4 h-4 text-gold-600" />
                    AI Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Quality Score</span>
                    <div className="flex items-center gap-2">
                      <Progress value={dataQuality.score} className="w-16 h-2" />
                      <Badge variant="outline" className={getStatusColor(dataQuality.status)}>
                        {dataQuality.score}%
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">High-Confidence Recs</span>
                    <Badge variant="outline" className="text-green-700 border-green-300">
                      90%+ Ready
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Applied Recommendations</span>
                    <Badge variant="outline">{appliedRecommendations.length}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Monitoring Status</span>
                    <Badge variant={isMonitoring ? "default" : "destructive"}>
                      {isMonitoring ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Premium AI Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    Premium AI Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-xs">
                  <div className="p-2 bg-gold-50 rounded border border-gold-200">
                    <div className="flex items-center gap-1 mb-1">
                      <Award className="w-3 h-3 text-gold-600" />
                      <span className="font-medium text-gold-800">90%+ Confidence</span>
                    </div>
                    <p className="text-gold-700">
                      Only the highest quality AI recommendations with proven accuracy and reliability.
                    </p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded border border-blue-200">
                    <div className="flex items-center gap-1 mb-1">
                      <Brain className="w-3 h-3 text-blue-600" />
                      <span className="font-medium text-blue-800">Smart Auto-Apply</span>
                    </div>
                    <p className="text-blue-700">
                      Automatically apply multiple high-confidence recommendations with one click.
                    </p>
                  </div>
                  <div className="p-2 bg-green-50 rounded border border-green-200">
                    <div className="flex items-center gap-1 mb-1">
                      <Target className="w-3 h-3 text-green-600" />
                      <span className="font-medium text-green-800">Optimal Targets</span>
                    </div>
                    <p className="text-green-700">
                      AI-calculated optimal performance targets based on your specific environment.
                    </p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded border border-purple-200">
                    <div className="flex items-center gap-1 mb-1">
                      <Shield className="w-3 h-3 text-purple-600" />
                      <span className="font-medium text-purple-800">Risk Mitigation</span>
                    </div>
                    <p className="text-purple-700">
                      Advanced risk assessment ensures recommendations won't cause alert fatigue.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Zap className="w-4 h-4 text-purple-600" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => setActiveTab("manual-config")}
                  >
                    <Settings className="w-3 h-3 mr-2" />
                    Create Custom Threshold
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={loadPerformanceData}
                  >
                    <TrendingUp className="w-3 h-3 mr-2" />
                    Refresh Performance Data
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => {
                      const thresholds = logoPerformanceMonitor.getThresholds()
                      toast({
                        title: "Active Thresholds",
                        description: `You have ${thresholds.length} active threshold${thresholds.length !== 1 ? "s" : ""} monitoring performance.`,
                      })
                    }}
                  >
                    <Target className="w-3 h-3 mr-2" />
                    View Active Thresholds
                  </Button>
                  {!isMonitoring && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start bg-transparent"
                      onClick={startMonitoring}
                    >
                      <Activity className="w-3 h-3 mr-2" />
                      Start Monitoring
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="manual-config">
          <CustomThresholdWizard />
        </TabsContent>
      </Tabs>

      {/* Applied Recommendations Summary */}
      {appliedRecommendations.length > 0 && (
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Brain className="w-5 h-5 text-green-600" />
              Applied AI Recommendations
              <Badge variant="outline" className="text-green-700 border-green-300">
                {appliedRecommendations.length} Active
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {appliedRecommendations.map((rec, index) => (
                <div key={index} className="p-3 bg-white rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm capitalize">{rec.metric.replace(/([A-Z])/g, " $1")}</span>
                    <Badge className="text-xs" variant="outline">
                      {rec.confidence}% confidence
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {rec.condition} {rec.recommendedValue}
                    {rec.metric === "averageLoadTime" ? "ms" : "%"}
                  </p>
                  <div className="mt-2">
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        rec.priority === "critical"
                          ? "text-red-700 border-red-300"
                          : rec.priority === "high"
                            ? "text-orange-700 border-orange-300"
                            : rec.priority === "medium"
                              ? "text-yellow-700 border-yellow-300"
                              : "text-blue-700 border-blue-300"
                      }`}
                    >
                      {rec.priority} priority
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                🤖 These AI-generated thresholds are now actively monitoring your logo performance. The system will
                continue learning from your data to provide even better recommendations.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
