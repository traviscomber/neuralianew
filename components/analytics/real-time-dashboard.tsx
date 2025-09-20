"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Users, Eye, TrendingUp, Clock, Smartphone, Monitor, Tablet, RefreshCw, Download } from "lucide-react"

interface AnalyticsData {
  events: any[]
  sessions: any[]
  conversions: any[]
  metrics: {
    uniqueSessions: number
    totalPageViews: number
    totalClicks: number
    totalConversions: number
    conversionRate: number
    bounceRate: number
    avgSessionDuration: number
    deviceBreakdown: Record<string, number>
    browserBreakdown: Record<string, number>
    topPages: Record<string, number>
  }
}

interface RealTimeDashboardProps {
  className?: string
}

export function RealTimeDashboard({ className }: RealTimeDashboardProps) {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState("24h")
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  const fetchAnalytics = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/analytics?timeRange=${timeRange}`)
      const analyticsData = await response.json()
      setData(analyticsData)
      setLastUpdated(new Date())
    } catch (error) {
      console.error("Failed to fetch analytics:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalytics()
  }, [timeRange])

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(fetchAnalytics, 30000) // Refresh every 30 seconds
      return () => clearInterval(interval)
    }
  }, [autoRefresh, timeRange])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  const getDeviceIcon = (device: string) => {
    switch (device.toLowerCase()) {
      case "mobile":
        return <Smartphone className="h-4 w-4" />
      case "tablet":
        return <Tablet className="h-4 w-4" />
      case "desktop":
        return <Monitor className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  const exportData = () => {
    if (!data) return

    const exportData = {
      timestamp: new Date().toISOString(),
      timeRange,
      metrics: data.metrics,
      events: data.events,
      sessions: data.sessions,
      conversions: data.conversions,
    }

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `analytics-${timeRange}-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (loading && !data) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="pb-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Real-Time Analytics</h2>
          <p className="text-muted-foreground">Last updated: {lastUpdated.toLocaleTimeString()}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {["1h", "24h", "7d", "30d"].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={autoRefresh ? "bg-green-50 border-green-200" : ""}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${autoRefresh ? "animate-spin" : ""}`} />
            Auto
          </Button>

          <Button variant="outline" size="sm" onClick={exportData}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data?.metrics.uniqueSessions || 0)}</div>
            <Badge variant="secondary" className="mt-1">
              {timeRange} period
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data?.metrics.totalPageViews || 0)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {data?.metrics.uniqueSessions
                ? `${(data.metrics.totalPageViews / data.metrics.uniqueSessions).toFixed(1)} per session`
                : "0 per session"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data?.metrics.totalConversions || 0)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {data?.metrics.conversionRate?.toFixed(1) || 0}% conversion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatDuration(data?.metrics.avgSessionDuration || 0)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {data?.metrics.bounceRate?.toFixed(1) || 0}% bounce rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
                <CardDescription>Visitors by device type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(data?.metrics.deviceBreakdown || {}).map(([device, count]) => {
                  const total = Object.values(data?.metrics.deviceBreakdown || {}).reduce((a, b) => a + b, 0)
                  const percentage = total > 0 ? (count / total) * 100 : 0

                  return (
                    <div key={device} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getDeviceIcon(device)}
                        <span className="capitalize">{device}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={percentage} className="w-20" />
                        <span className="text-sm font-medium w-12 text-right">{count}</span>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Browser Breakdown</CardTitle>
                <CardDescription>Visitors by browser</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(data?.metrics.browserBreakdown || {})
                  .slice(0, 5)
                  .map(([browser, count]) => {
                    const total = Object.values(data?.metrics.browserBreakdown || {}).reduce((a, b) => a + b, 0)
                    const percentage = total > 0 ? (count / total) * 100 : 0

                    return (
                      <div key={browser} className="flex items-center justify-between">
                        <span>{browser}</span>
                        <div className="flex items-center gap-2">
                          <Progress value={percentage} className="w-20" />
                          <span className="text-sm font-medium w-12 text-right">{count}</span>
                        </div>
                      </div>
                    )
                  })}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="devices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Device Analytics</CardTitle>
              <CardDescription>Detailed breakdown by device type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(data?.metrics.deviceBreakdown || {}).map(([device, count]) => {
                  const total = Object.values(data?.metrics.deviceBreakdown || {}).reduce((a, b) => a + b, 0)
                  const percentage = total > 0 ? (count / total) * 100 : 0

                  return (
                    <div key={device} className="text-center p-4 border rounded-lg">
                      <div className="flex justify-center mb-2">{getDeviceIcon(device)}</div>
                      <h3 className="font-semibold capitalize">{device}</h3>
                      <p className="text-2xl font-bold">{count}</p>
                      <p className="text-sm text-muted-foreground">{percentage.toFixed(1)}%</p>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(data?.metrics.topPages || {})
                  .slice(0, 10)
                  .map(([page, views]) => {
                    const maxViews = Math.max(...Object.values(data?.metrics.topPages || {}))
                    const percentage = maxViews > 0 ? (views / maxViews) * 100 : 0

                    return (
                      <div key={page} className="flex items-center justify-between">
                        <span className="font-mono text-sm">{page}</span>
                        <div className="flex items-center gap-2">
                          <Progress value={percentage} className="w-20" />
                          <span className="text-sm font-medium w-12 text-right">{views}</span>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest user events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {data?.events.slice(0, 50).map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {event.event_type}
                      </Badge>
                      <span className="text-sm">{event.page_url}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      {getDeviceIcon(event.device_type)}
                      <span>{new Date(event.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
