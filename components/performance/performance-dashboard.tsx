"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { performanceMonitor } from "@/lib/performance-monitor"
import { Activity, Clock, Zap, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react"

interface PerformanceData {
  lcp: number
  fid: number
  cls: number
  ttfb: number
  bundleSize: number
  imageOptimization: number
  cacheHitRate: number
}

export function PerformanceDashboard() {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null)
  const [isMonitoring, setIsMonitoring] = useState(false)

  useEffect(() => {
    // Simulate performance data collection
    const collectPerformanceData = () => {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming

      setPerformanceData({
        lcp: Math.random() * 2000 + 1000, // Simulated LCP
        fid: Math.random() * 100 + 50, // Simulated FID
        cls: Math.random() * 0.1, // Simulated CLS
        ttfb: navigation?.responseStart - navigation?.requestStart || 200,
        bundleSize: 450, // KB
        imageOptimization: 85, // Percentage
        cacheHitRate: 92, // Percentage
      })
    }

    collectPerformanceData()
    const interval = setInterval(collectPerformanceData, 5000)

    return () => clearInterval(interval)
  }, [])

  const startMonitoring = () => {
    performanceMonitor.startMonitoring()
    setIsMonitoring(true)
  }

  const stopMonitoring = () => {
    performanceMonitor.stopMonitoring()
    setIsMonitoring(false)
  }

  const getScoreColor = (score: number, thresholds: { good: number; needs_improvement: number }) => {
    if (score <= thresholds.good) return "text-green-600 bg-green-100"
    if (score <= thresholds.needs_improvement) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600 bg-green-100"
    if (percentage >= 70) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  if (!performanceData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Performance Dashboard</h2>
          <p className="text-gray-600 mt-1">Real-time website performance monitoring</p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${isMonitoring ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}></div>
          <Button
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            variant={isMonitoring ? "destructive" : "default"}
          >
            {isMonitoring ? "Stop Monitoring" : "Start Monitoring"}
          </Button>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Largest Contentful Paint</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performanceData.lcp.toFixed(0)}ms</div>
            <Badge className={getScoreColor(performanceData.lcp, { good: 2500, needs_improvement: 4000 })}>
              {performanceData.lcp <= 2500 ? "Good" : performanceData.lcp <= 4000 ? "Needs Improvement" : "Poor"}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">First Input Delay</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performanceData.fid.toFixed(0)}ms</div>
            <Badge className={getScoreColor(performanceData.fid, { good: 100, needs_improvement: 300 })}>
              {performanceData.fid <= 100 ? "Good" : performanceData.fid <= 300 ? "Needs Improvement" : "Poor"}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cumulative Layout Shift</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performanceData.cls.toFixed(3)}</div>
            <Badge className={getScoreColor(performanceData.cls * 1000, { good: 100, needs_improvement: 250 })}>
              {performanceData.cls <= 0.1 ? "Good" : performanceData.cls <= 0.25 ? "Needs Improvement" : "Poor"}
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time to First Byte</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performanceData.ttfb.toFixed(0)}ms</div>
            <Badge className={getScoreColor(performanceData.ttfb, { good: 200, needs_improvement: 500 })}>
              {performanceData.ttfb <= 200 ? "Excellent" : performanceData.ttfb <= 500 ? "Good" : "Needs Work"}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bundle Size</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performanceData.bundleSize}KB</div>
            <Badge className={getScoreColor(performanceData.bundleSize, { good: 300, needs_improvement: 500 })}>
              {performanceData.bundleSize <= 300 ? "Optimal" : performanceData.bundleSize <= 500 ? "Good" : "Large"}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Image Optimization</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performanceData.imageOptimization}%</div>
            <Badge className={getPercentageColor(performanceData.imageOptimization)}>
              {performanceData.imageOptimization >= 90
                ? "Excellent"
                : performanceData.imageOptimization >= 70
                  ? "Good"
                  : "Needs Work"}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cache Hit Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performanceData.cacheHitRate}%</div>
            <Badge className={getPercentageColor(performanceData.cacheHitRate)}>
              {performanceData.cacheHitRate >= 90 ? "Excellent" : performanceData.cacheHitRate >= 70 ? "Good" : "Poor"}
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold">Image Optimization</h4>
                <p className="text-sm text-gray-600">Images are well optimized with WebP format and proper sizing</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold">Bundle Size</h4>
                <p className="text-sm text-gray-600">
                  Consider code splitting for large components to reduce initial bundle size
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold">Caching Strategy</h4>
                <p className="text-sm text-gray-600">Good cache hit rate indicates effective caching strategy</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
