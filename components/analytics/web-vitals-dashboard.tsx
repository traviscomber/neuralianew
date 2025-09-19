"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useWebVitals } from "./web-vitals-provider"
import { Activity, Clock, Eye, MousePointer, Zap, Globe } from "lucide-react"

const metricIcons = {
  CLS: MousePointer,
  FID: MousePointer,
  FCP: Eye,
  LCP: Eye,
  TTFB: Globe,
  INP: Activity,
}

const metricDescriptions = {
  CLS: "Cumulative Layout Shift - Visual stability of the page",
  FID: "First Input Delay - Responsiveness to user interactions",
  FCP: "First Contentful Paint - Time to first visible content",
  LCP: "Largest Contentful Paint - Loading performance",
  TTFB: "Time to First Byte - Server response time",
  INP: "Interaction to Next Paint - Overall responsiveness",
}

const metricUnits = {
  CLS: "",
  FID: "ms",
  FCP: "ms",
  LCP: "ms",
  TTFB: "ms",
  INP: "ms",
}

const getRatingColor = (rating: string) => {
  switch (rating) {
    case "good":
      return "bg-green-500"
    case "needs-improvement":
      return "bg-yellow-500"
    case "poor":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

const getRatingBadgeVariant = (rating: string) => {
  switch (rating) {
    case "good":
      return "default"
    case "needs-improvement":
      return "secondary"
    case "poor":
      return "destructive"
    default:
      return "outline"
  }
}

const getRecommendation = (name: string, rating: string) => {
  if (rating === "good") return "Great performance! 🎉"

  const recommendations = {
    CLS: "Optimize images with dimensions, avoid dynamic content insertion",
    FID: "Reduce JavaScript execution time, optimize event handlers",
    FCP: "Optimize critical resources, reduce server response time",
    LCP: "Optimize images, improve server response, remove render-blocking resources",
    TTFB: "Optimize server performance, use CDN, reduce server processing time",
    INP: "Optimize JavaScript, reduce main thread blocking, improve event handling",
  }

  return recommendations[name as keyof typeof recommendations] || "Consider optimizing this metric"
}

export function WebVitalsDashboard() {
  const { metrics, overallScore, isLoading, lastReport } = useWebVitals()

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="pb-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="h-2 bg-gray-200 rounded w-full"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Zap className="h-5 w-5" />
            Overall Performance Score
          </CardTitle>
          <CardDescription className="text-gray-300">Based on all Core Web Vitals metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-white">{overallScore}</div>
            <div className="flex-1">
              <Progress value={overallScore} className="h-3" />
            </div>
            <Badge variant={overallScore >= 80 ? "default" : overallScore >= 50 ? "secondary" : "destructive"}>
              {overallScore >= 80 ? "Good" : overallScore >= 50 ? "Needs Improvement" : "Poor"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {metrics.length === 0 ? (
          <Card className="md:col-span-2 lg:col-span-3">
            <CardContent className="flex items-center justify-center h-32">
              <div className="text-center text-gray-400">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <p>Collecting Web Vitals data...</p>
                <p className="text-sm">Interact with the page to generate metrics</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          metrics.map((metric) => {
            const Icon = metricIcons[metric.name as keyof typeof metricIcons] || Activity
            return (
              <Card key={metric.name} className="relative overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {metric.name}
                    </div>
                    <Badge variant={getRatingBadgeVariant(metric.rating)}>{metric.rating.replace("-", " ")}</Badge>
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {metricDescriptions[metric.name as keyof typeof metricDescriptions]}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold">
                        {metric.name === "CLS" ? metric.value.toFixed(3) : Math.round(metric.value)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {metricUnits[metric.name as keyof typeof metricUnits]}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Performance</span>
                        <span>{metric.rating}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getRatingColor(metric.rating)}`}
                          style={{
                            width:
                              metric.rating === "good" ? "100%" : metric.rating === "needs-improvement" ? "60%" : "30%",
                          }}
                        />
                      </div>
                    </div>

                    <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                      💡 {getRecommendation(metric.name, metric.rating)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })
        )}
      </div>

      {/* Last Report Info */}
      {lastReport && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Last Report</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-gray-500 space-y-1">
            <p>
              <strong>URL:</strong> {lastReport.url}
            </p>
            <p>
              <strong>Timestamp:</strong> {new Date(lastReport.timestamp).toLocaleString()}
            </p>
            <p>
              <strong>Connection:</strong> {lastReport.connectionType || "Unknown"}
            </p>
            <p>
              <strong>Metrics Count:</strong> {lastReport.metrics.length}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
