"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Users, Eye, MousePointer, Target, Clock, Smartphone, Monitor, Tablet, Download, RefreshCw } from "lucide-react"

interface AnalyticsData {
  metrics: {
    activeSessions: number
    totalPageViews: number
    totalEvents: number
    totalConversions: number
    conversionRate: number
    avgLoadTime: number
    avgScrollDepth: number
  }
  deviceBreakdown: Record<string, number>
  browserBreakdown: Record<string, number>
  topPages: Array<{ url: string; count: number }>
  eventTypes: Record<string, number>
  conversionTypes: Record<string, number>
  performanceMetrics: Record<string, number>
  locationBreakdown: Record<string, number>
  activeSessions: Array<{
    session_id: string
    start_time: string
    device_type: string
    browser: string
    country: string
  }>
}

export function RealTimeDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState("24h")
  const [autoRefresh, setAutoRefresh] = useState(true)

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/analytics?timeRange=${timeRange}`)
      const analyticsData = await response.json()
      setData(analyticsData)
    } catch (error) {
      console.error("Failed to fetch analytics:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalytics()
  }, [timeRange])

  useEffect((): (() => void) | undefined => {
    if (!autoRefresh) {
      return undefined
    }

    const interval = setInterval(fetchAnalytics, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [autoRefresh, timeRange])

  const exportData = () => {
    if (!data) return

    const exportData = {
      timestamp: new Date().toISOString(),
      timeRange,
      ...data,
    }

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `analytics-${timeRange}-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
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

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">Failed to load analytics data</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Real-Time Analytics</h1>
          <p className="text-muted-foreground">Live insights into user behavior and conversions</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
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

          <Button variant="outline" size="sm" onClick={() => setAutoRefresh(!autoRefresh)}>
            <RefreshCw className={`h-4 w-4 mr-2 ${autoRefresh ? "animate-spin" : ""}`} />
            Auto Refresh
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
            <div className="text-2xl font-bold">{data.metrics.activeSessions}</div>
            <p className="text-xs text-muted-foreground">Currently browsing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.metrics.totalPageViews}</div>
            <p className="text-xs text-muted-foreground">Total views in {timeRange}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Events</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.metrics.totalEvents}</div>
            <p className="text-xs text-muted-foreground">Clicks, scrolls, interactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversions</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.metrics.totalConversions}</div>
            <p className="text-xs text-muted-foreground">{data.metrics.conversionRate.toFixed(1)}% conversion rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Active Sessions */}
            <Card>
              <CardHeader>
                <CardTitle>Active Sessions</CardTitle>
                <CardDescription>Currently active user sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {data.activeSessions.slice(0, 5).map((session) => (
                    <div key={session.session_id} className="flex items-center justify-between p-2 border rounded">
                      <div className="flex items-center gap-2">
                        {getDeviceIcon(session.device_type)}
                        <div>
                          <p className="text-sm font-medium">{session.browser}</p>
                          <p className="text-xs text-muted-foreground">{session.country}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">
                        {Math.round((Date.now() - new Date(session.start_time).getTime()) / 60000)}m ago
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Average load times and Core Web Vitals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Average Load Time</span>
                    <span className="text-sm font-medium">{data.metrics.avgLoadTime.toFixed(0)}ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Average Scroll Depth</span>
                    <span className="text-sm font-medium">{data.metrics.avgScrollDepth.toFixed(0)}%</span>
                  </div>
                  {Object.entries(data.performanceMetrics).map(([metric, value]) => (
                    <div key={metric} className="flex items-center justify-between">
                      <span className="text-sm">{metric}</span>
                      <span className="text-sm font-medium">{value.toFixed(0)}ms</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="devices" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Device Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Device Types</CardTitle>
                <CardDescription>Sessions by device type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(data.deviceBreakdown).map(([device, count]) => {
                    const percentage = (count / data.metrics.activeSessions) * 100
                    return (
                      <div key={device} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {getDeviceIcon(device)}
                            <span className="text-sm font-medium capitalize">{device}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {count} ({percentage.toFixed(1)}%)
                          </span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Browser Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Browsers</CardTitle>
                <CardDescription>Sessions by browser</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(data.browserBreakdown).map(([browser, count]) => {
                    const percentage = (count / data.metrics.activeSessions) * 100
                    return (
                      <div key={browser} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{browser}</span>
                          <span className="text-sm text-muted-foreground">
                            {count} ({percentage.toFixed(1)}%)
                          </span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages in the selected time range</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.topPages.map((page, index) => {
                  const percentage = (page.count / data.metrics.totalPageViews) * 100
                  return (
                    <div key={page.url} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">#{index + 1}</Badge>
                          <span className="text-sm font-medium truncate max-w-md">{page.url}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {page.count} views ({percentage.toFixed(1)}%)
                        </span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversions" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Conversion Types */}
            <Card>
              <CardHeader>
                <CardTitle>Conversion Types</CardTitle>
                <CardDescription>Breakdown by conversion goal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(data.conversionTypes).map(([type, count]) => {
                    const percentage = (count / data.metrics.totalConversions) * 100
                    return (
                      <div key={type} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{type.replace("_", " ")}</span>
                          <span className="text-sm text-muted-foreground">
                            {count} ({percentage.toFixed(1)}%)
                          </span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Event Types */}
            <Card>
              <CardHeader>
                <CardTitle>Event Types</CardTitle>
                <CardDescription>User interaction breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(data.eventTypes).map(([type, count]) => {
                    const percentage = (count / data.metrics.totalEvents) * 100
                    return (
                      <div key={type} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium capitalize">{type}</span>
                          <span className="text-sm text-muted-foreground">
                            {count} ({percentage.toFixed(1)}%)
                          </span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>Site performance metrics and Core Web Vitals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-2xl font-bold">{data.metrics.avgLoadTime.toFixed(0)}ms</div>
                  <p className="text-sm text-muted-foreground">Average Load Time</p>
                </div>

                <div className="text-center p-4 border rounded">
                  <Target className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <div className="text-2xl font-bold">{data.metrics.avgScrollDepth.toFixed(0)}%</div>
                  <p className="text-sm text-muted-foreground">Average Scroll Depth</p>
                </div>

                <div className="text-center p-4 border rounded">
                  <Users className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <div className="text-2xl font-bold">{data.metrics.conversionRate.toFixed(1)}%</div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
