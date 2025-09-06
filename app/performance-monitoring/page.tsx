"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  Clock,
  Zap,
  Users,
  DollarSign,
  AlertTriangle,
  BarChart3,
  Eye,
  Smartphone,
  Shield,
  Target,
  ArrowUp,
  ArrowDown,
  Minus,
} from "lucide-react"

interface PerformanceMetric {
  name: string
  current: number
  previous: number
  target: number
  unit: string
  trend: "up" | "down" | "stable"
  improvement: number
  status: "excellent" | "good" | "warning" | "critical"
  icon: React.ReactNode
  category: string
}

interface BusinessImpact {
  metric: string
  beforeValue: number
  currentValue: number
  improvement: number
  revenueImpact: number
  confidence: number
  trend: "up" | "down" | "stable"
}

export default function PerformanceMonitoringPage() {
  const [isMonitoring, setIsMonitoring] = useState(true)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([])
  const [businessImpacts, setBusinessImpacts] = useState<BusinessImpact[]>([])
  const [alertsTriggered, setAlertsTriggered] = useState(0)
  const [alertsResolved, setAlertsResolved] = useState(0)
  const [selectedTimeRange, setSelectedTimeRange] = useState("1h")
  const monitoringInterval = useRef<NodeJS.Timeout>()
  const startTime = useRef<Date>(new Date())

  useEffect(() => {
    // Initialize metrics with SaaS High Performance preset values
    const initialMetrics: PerformanceMetric[] = [
      {
        name: "Largest Contentful Paint",
        current: 2000,
        previous: 3200,
        target: 2000,
        unit: "ms",
        trend: "down",
        improvement: -37.5,
        status: "excellent",
        icon: <Zap className="w-5 h-5" />,
        category: "performance",
      },
      {
        name: "First Contentful Paint",
        current: 1200,
        previous: 2000,
        target: 1200,
        unit: "ms",
        trend: "down",
        improvement: -40,
        status: "excellent",
        icon: <Clock className="w-5 h-5" />,
        category: "performance",
      },
      {
        name: "Cumulative Layout Shift",
        current: 0.05,
        previous: 0.18,
        target: 0.05,
        unit: "",
        trend: "down",
        improvement: -72.2,
        status: "excellent",
        icon: <Target className="w-5 h-5" />,
        category: "performance",
      },
      {
        name: "First Input Delay",
        current: 80,
        previous: 150,
        target: 80,
        unit: "ms",
        trend: "down",
        improvement: -46.7,
        status: "excellent",
        icon: <Activity className="w-5 h-5" />,
        category: "performance",
      },
      {
        name: "Bounce Rate",
        current: 25,
        previous: 45,
        target: 25,
        unit: "%",
        trend: "down",
        improvement: -44.4,
        status: "excellent",
        icon: <Users className="w-5 h-5" />,
        category: "business",
      },
      {
        name: "Conversion Rate",
        current: 8.5,
        previous: 4.2,
        target: 8.5,
        unit: "%",
        trend: "up",
        improvement: 102.4,
        status: "excellent",
        icon: <DollarSign className="w-5 h-5" />,
        category: "business",
      },
      {
        name: "Session Duration",
        current: 180,
        previous: 120,
        target: 180,
        unit: "s",
        trend: "up",
        improvement: 50,
        status: "excellent",
        icon: <Clock className="w-5 h-5" />,
        category: "business",
      },
      {
        name: "Error Rate",
        current: 1.0,
        previous: 2.5,
        target: 1.0,
        unit: "%",
        trend: "down",
        improvement: -60,
        status: "excellent",
        icon: <AlertTriangle className="w-5 h-5" />,
        category: "technical",
      },
      {
        name: "API Response Time",
        current: 200,
        previous: 450,
        target: 200,
        unit: "ms",
        trend: "down",
        improvement: -55.6,
        status: "excellent",
        icon: <Zap className="w-5 h-5" />,
        category: "technical",
      },
      {
        name: "Mobile Speed Score",
        current: 85,
        previous: 72,
        target: 85,
        unit: "",
        trend: "up",
        improvement: 18.1,
        status: "excellent",
        icon: <Smartphone className="w-5 h-5" />,
        category: "technical",
      },
      {
        name: "WCAG Compliance",
        current: 95,
        previous: 85,
        target: 95,
        unit: "%",
        trend: "up",
        improvement: 11.8,
        status: "excellent",
        icon: <Eye className="w-5 h-5" />,
        category: "accessibility",
      },
      {
        name: "Security Score",
        current: 98,
        previous: 92,
        target: 98,
        unit: "%",
        trend: "up",
        improvement: 6.5,
        status: "excellent",
        icon: <Shield className="w-5 h-5" />,
        category: "security",
      },
    ]

    const initialBusinessImpacts: BusinessImpact[] = [
      {
        metric: "Revenue Growth",
        beforeValue: 100000,
        currentValue: 118000,
        improvement: 18,
        revenueImpact: 245000,
        confidence: 92,
        trend: "up",
      },
      {
        metric: "User Satisfaction",
        beforeValue: 72,
        currentValue: 88,
        improvement: 22.2,
        revenueImpact: 180000,
        confidence: 89,
        trend: "up",
      },
      {
        metric: "Customer Retention",
        beforeValue: 78,
        currentValue: 89,
        improvement: 14.1,
        revenueImpact: 320000,
        confidence: 94,
        trend: "up",
      },
      {
        metric: "Trial Conversion",
        beforeValue: 4.2,
        currentValue: 8.5,
        improvement: 102.4,
        revenueImpact: 420000,
        confidence: 96,
        trend: "up",
      },
      {
        metric: "Support Tickets",
        beforeValue: 150,
        currentValue: 89,
        improvement: -40.7,
        revenueImpact: 85000,
        confidence: 87,
        trend: "down",
      },
    ]

    setMetrics(initialMetrics)
    setBusinessImpacts(initialBusinessImpacts)

    // Start real-time monitoring
    const updateMetrics = () => {
      setTimeElapsed((prev) => prev + 1)

      // Simulate real-time metric updates with small variations
      setMetrics((prevMetrics) =>
        prevMetrics.map((metric) => {
          const variation = (Math.random() - 0.5) * 0.1 // ±5% variation
          let newCurrent = metric.current * (1 + variation)

          // Ensure metrics stay within realistic bounds
          if (metric.unit === "ms") {
            newCurrent = Math.max(50, Math.min(newCurrent, metric.previous))
          } else if (metric.unit === "%") {
            newCurrent = Math.max(0, Math.min(100, newCurrent))
          }

          return {
            ...metric,
            current: Math.round(newCurrent * 100) / 100,
          }
        }),
      )

      // Simulate business impact updates
      setBusinessImpacts((prevImpacts) =>
        prevImpacts.map((impact) => {
          const variation = (Math.random() - 0.5) * 0.05 // ±2.5% variation
          const newCurrent = impact.currentValue * (1 + variation)

          return {
            ...impact,
            currentValue: Math.round(newCurrent * 100) / 100,
            improvement: Math.round(((newCurrent - impact.beforeValue) / impact.beforeValue) * 10000) / 100,
          }
        }),
      )

      // Simulate alert activity
      if (Math.random() > 0.95) {
        setAlertsTriggered((prev) => prev + 1)
      }
      if (Math.random() > 0.92) {
        setAlertsResolved((prev) => prev + 1)
      }
    }

    monitoringInterval.current = setInterval(updateMetrics, 2000)

    return () => {
      if (monitoringInterval.current) {
        clearInterval(monitoringInterval.current)
      }
    }
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600 bg-green-100 border-green-200"
      case "good":
        return "text-blue-600 bg-blue-100 border-blue-200"
      case "warning":
        return "text-yellow-600 bg-yellow-100 border-yellow-200"
      case "critical":
        return "text-red-600 bg-red-100 border-red-200"
      default:
        return "text-gray-600 bg-gray-100 border-gray-200"
    }
  }

  const getTrendIcon = (trend: string, improvement: number) => {
    if (trend === "up" && improvement > 0) return <ArrowUp className="w-4 h-4 text-green-600" />
    if (trend === "down" && improvement < 0) return <ArrowDown className="w-4 h-4 text-green-600" />
    if (trend === "up" && improvement < 0) return <ArrowUp className="w-4 h-4 text-red-600" />
    if (trend === "down" && improvement > 0) return <ArrowDown className="w-4 h-4 text-red-600" />
    return <Minus className="w-4 h-4 text-gray-600" />
  }

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`
    } else {
      return `${secs}s`
    }
  }

  const totalRevenueImpact = businessImpacts.reduce((sum, impact) => sum + impact.revenueImpact, 0)
  const avgConfidence = businessImpacts.reduce((sum, impact) => sum + impact.confidence, 0) / businessImpacts.length

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-slate-900 mb-4">Real-Time Performance Monitoring</h1>
            <p className="text-xl text-slate-600">
              Tracking improvements after SaaS High Performance preset application
            </p>
          </div>

          {/* Monitoring Status */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${isMonitoring ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
                  />
                  <span className="font-semibold text-slate-900">
                    {isMonitoring ? "Live Monitoring Active" : "Monitoring Paused"}
                  </span>
                </div>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">SaaS High Performance Preset</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-slate-600">
                  Monitoring for: <span className="font-semibold">{formatDuration(timeElapsed)}</span>
                </div>
                <Button
                  onClick={() => setIsMonitoring(!isMonitoring)}
                  variant={isMonitoring ? "outline" : "default"}
                  size="sm"
                >
                  {isMonitoring ? "Pause" : "Resume"}
                </Button>
              </div>
            </div>

            {/* Key Performance Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">+35%</div>
                <div className="text-sm text-slate-600">Performance Improvement</div>
                <div className="text-xs text-green-600">vs. previous configuration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">${(totalRevenueImpact / 1000).toFixed(0)}K</div>
                <div className="text-sm text-slate-600">Projected Revenue Impact</div>
                <div className="text-xs text-blue-600">Annual projection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{avgConfidence.toFixed(0)}%</div>
                <div className="text-sm text-slate-600">Confidence Level</div>
                <div className="text-xs text-purple-600">Based on data quality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{alertsTriggered - alertsResolved}</div>
                <div className="text-sm text-slate-600">Active Alerts</div>
                <div className="text-xs text-orange-600">{alertsResolved} resolved</div>
              </div>
            </div>
          </Card>

          {/* Performance Metrics Tabs */}
          <Tabs defaultValue="performance" className="mb-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
              <TabsTrigger value="impact">Impact Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="performance">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-blue-600" />
                  Core Web Vitals Performance
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {metrics
                    .filter((metric) => metric.category === "performance")
                    .map((metric, index) => (
                      <div key={index} className="p-6 bg-white rounded-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-blue-600">{metric.icon}</div>
                          <div className="flex items-center space-x-1">
                            {getTrendIcon(metric.trend, metric.improvement)}
                            <Badge className={getStatusColor(metric.status)}>{metric.status}</Badge>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h3 className="font-semibold text-slate-900 mb-2">{metric.name}</h3>
                          <div className="text-3xl font-bold text-slate-900 mb-1">
                            {metric.current}
                            {metric.unit}
                          </div>
                          <div className="text-sm text-slate-600">
                            Target: {metric.target}
                            {metric.unit}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>
                              Previous: {metric.previous}
                              {metric.unit}
                            </span>
                            <span className={metric.improvement < 0 ? "text-green-600" : "text-blue-600"}>
                              {metric.improvement > 0 ? "+" : ""}
                              {metric.improvement.toFixed(1)}%
                            </span>
                          </div>
                          <Progress
                            value={Math.min(100, Math.max(0, 100 - Math.abs(metric.improvement)))}
                            className="h-2"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="business">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                  Business Metrics Performance
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {metrics
                    .filter((metric) => metric.category === "business")
                    .map((metric, index) => (
                      <div key={index} className="p-6 bg-white rounded-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-green-600">{metric.icon}</div>
                          <div className="flex items-center space-x-1">
                            {getTrendIcon(metric.trend, metric.improvement)}
                            <Badge className={getStatusColor(metric.status)}>{metric.status}</Badge>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h3 className="font-semibold text-slate-900 mb-2">{metric.name}</h3>
                          <div className="text-3xl font-bold text-slate-900 mb-1">
                            {metric.current}
                            {metric.unit}
                          </div>
                          <div className="text-sm text-slate-600">
                            Target: {metric.target}
                            {metric.unit}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>
                              Previous: {metric.previous}
                              {metric.unit}
                            </span>
                            <span className={metric.improvement > 0 ? "text-green-600" : "text-red-600"}>
                              {metric.improvement > 0 ? "+" : ""}
                              {metric.improvement.toFixed(1)}%
                            </span>
                          </div>
                          <Progress value={Math.min(100, Math.max(0, Math.abs(metric.improvement)))} className="h-2" />
                        </div>
                      </div>
                    ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="technical">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-purple-600" />
                  Technical Performance Metrics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {metrics
                    .filter((metric) => metric.category === "technical")
                    .map((metric, index) => (
                      <div key={index} className="p-6 bg-white rounded-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-purple-600">{metric.icon}</div>
                          <div className="flex items-center space-x-1">
                            {getTrendIcon(metric.trend, metric.improvement)}
                            <Badge className={getStatusColor(metric.status)}>{metric.status}</Badge>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h3 className="font-semibold text-slate-900 mb-2">{metric.name}</h3>
                          <div className="text-3xl font-bold text-slate-900 mb-1">
                            {metric.current}
                            {metric.unit}
                          </div>
                          <div className="text-sm text-slate-600">
                            Target: {metric.target}
                            {metric.unit}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>
                              Previous: {metric.previous}
                              {metric.unit}
                            </span>
                            <span className={metric.improvement < 0 ? "text-green-600" : "text-blue-600"}>
                              {metric.improvement > 0 ? "+" : ""}
                              {metric.improvement.toFixed(1)}%
                            </span>
                          </div>
                          <Progress
                            value={Math.min(100, Math.max(0, 100 - Math.abs(metric.improvement)))}
                            className="h-2"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="accessibility">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-2 text-emerald-600" />
                  Accessibility & Security Metrics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {metrics
                    .filter((metric) => ["accessibility", "security"].includes(metric.category))
                    .map((metric, index) => (
                      <div key={index} className="p-6 bg-white rounded-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-emerald-600">{metric.icon}</div>
                          <div className="flex items-center space-x-1">
                            {getTrendIcon(metric.trend, metric.improvement)}
                            <Badge className={getStatusColor(metric.status)}>{metric.status}</Badge>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h3 className="font-semibold text-slate-900 mb-2">{metric.name}</h3>
                          <div className="text-3xl font-bold text-slate-900 mb-1">
                            {metric.current}
                            {metric.unit}
                          </div>
                          <div className="text-sm text-slate-600">
                            Target: {metric.target}
                            {metric.unit}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>
                              Previous: {metric.previous}
                              {metric.unit}
                            </span>
                            <span className={metric.improvement > 0 ? "text-green-600" : "text-red-600"}>
                              {metric.improvement > 0 ? "+" : ""}
                              {metric.improvement.toFixed(1)}%
                            </span>
                          </div>
                          <Progress value={Math.min(100, Math.max(0, Math.abs(metric.improvement)))} className="h-2" />
                        </div>
                      </div>
                    ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="impact">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-orange-600" />
                  Business Impact Analysis
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {businessImpacts.map((impact, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-slate-900">{impact.metric}</h3>
                        <div className="flex items-center space-x-1">
                          {getTrendIcon(impact.trend, impact.improvement)}
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                            {impact.confidence}% confidence
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="text-2xl font-bold text-slate-900">
                            {impact.currentValue.toFixed(impact.metric.includes("Rate") ? 1 : 0)}
                            {impact.metric.includes("Rate") || impact.metric.includes("Satisfaction") ? "%" : ""}
                          </div>
                          <div className="text-sm text-slate-600">
                            Previous: {impact.beforeValue.toFixed(impact.metric.includes("Rate") ? 1 : 0)}
                            {impact.metric.includes("Rate") || impact.metric.includes("Satisfaction") ? "%" : ""}
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Improvement:</span>
                          <span
                            className={`font-semibold ${impact.improvement > 0 ? "text-green-600" : "text-red-600"}`}
                          >
                            {impact.improvement > 0 ? "+" : ""}
                            {impact.improvement.toFixed(1)}%
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Revenue Impact:</span>
                          <span className="font-semibold text-green-600">
                            ${(impact.revenueImpact / 1000).toFixed(0)}K
                          </span>
                        </div>

                        <Progress value={Math.min(100, Math.abs(impact.improvement))} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        ${(totalRevenueImpact / 1000).toFixed(0)}K
                      </div>
                      <div className="text-sm text-green-800">Total Revenue Impact</div>
                      <div className="text-xs text-green-600">Annual projection</div>
                    </div>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{avgConfidence.toFixed(0)}%</div>
                      <div className="text-sm text-blue-800">Average Confidence</div>
                      <div className="text-xs text-blue-600">Data reliability</div>
                    </div>
                  </div>

                  <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        {businessImpacts.filter((i) => i.improvement > 0).length}
                      </div>
                      <div className="text-sm text-purple-800">Positive Impacts</div>
                      <div className="text-xs text-purple-600">Out of {businessImpacts.length} metrics</div>
                    </div>
                  </div>

                  <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">
                        {Math.max(...businessImpacts.map((i) => i.improvement)).toFixed(1)}%
                      </div>
                      <div className="text-sm text-orange-800">Best Improvement</div>
                      <div className="text-xs text-orange-600">Trial conversion rate</div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Actions */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Monitoring Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <BarChart3 className="w-4 h-4 mr-2" />
                Export Performance Report
              </Button>
              <Button variant="outline">
                <Activity className="w-4 h-4 mr-2" />
                Configure A/B Testing
              </Button>
              <Button variant="outline">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Set Custom Alerts
              </Button>
              <Button variant="outline">
                <Clock className="w-4 h-4 mr-2" />
                Schedule Review
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
