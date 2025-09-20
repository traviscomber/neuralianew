"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Users, MousePointer, Eye, Smartphone, Monitor, Tablet, RefreshCw, Target, Activity } from "lucide-react"

interface DashboardData {
  realTimeVisitors: number
  totalPageViews: number
  totalClicks: number
  totalConversions: number
  conversionRate: number
  averageTimeOnPage: number
  deviceBreakdown: Record<string, number>
  topPages: Record<string, number>
  recentEvents: any[]
  conversionsByType: Record<string, number>
  hourlyActivity: number[]
}

export function RealTimeDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState("1h")
  const [autoRefresh, setAutoRefresh] = useState(true)

  useEffect(() => {
    fetchDashboardData()

    if (autoRefresh) {
      const interval = setInterval(fetchDashboardData, 30000) // Refresh every 30 seconds
      return () => clearInterval(interval)
    }
  }, [timeRange, autoRefresh])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)

      // Fetch analytics data
      const analyticsResponse = await fetch(`/api/analytics?timeRange=${timeRange}`)
      const analyticsData = await analyticsResponse.json()

      // Fetch conversion data
      const conversionsResponse = await fetch(`/api/conversions?timeRange=${timeRange}`)
      const conversionsData = await conversionsResponse.json()

      // Fetch heatmap data
      const heatmapResponse = await fetch(`/api/heatmap?timeRange=${timeRange}`)
      const heatmapData = await heatmapResponse.json()

      // Process and combine data
      const processedData: DashboardData = {
        realTimeVisitors: analyticsData.data?.uniqueSessions || 0,
        totalPageViews: analyticsData.data?.pageViews || 0,
        totalClicks: analyticsData.data?.clicks || 0,
        totalConversions: conversionsData.data?.totalConversions || 0,
        conversionRate: calculateConversionRate(
          conversionsData.data?.totalConversions || 0,
          analyticsData.data?.uniqueSessions || 0,
        ),
        averageTimeOnPage: 0, // Calculate from session data
        deviceBreakdown: analyticsData.data?.deviceBreakdown || {},
        topPages: analyticsData.data?.topPages || {},
        recentEvents: analyticsData.raw?.slice(0, 10) || [],
        conversionsByType: conversionsData.data?.conversionsByType || {},
        hourlyActivity: analyticsData.data?.hourlyActivity || Array(24).fill(0),
      }

      setData(processedData)
    } catch (error) {
      console.error("Dashboard data fetch error:", error)
    } finally {
      setLoading(false)
    }
  }

  const calculateConversionRate = (conversions: number, visitors: number): number => {
    if (visitors === 0) return 0
    return Math.round((conversions / visitors) * 100 * 100) / 100
  }

  const getDeviceIcon = (device: string) => {
    switch (device) {
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

  if (loading && !data) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading dashboard...</span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Real-Time Analytics</h1>
          <p className="text-muted-foreground">Live insights into your website performance</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => setAutoRefresh(!autoRefresh)}>
            <Activity className={`h-4 w-4 mr-2 ${autoRefresh ? "animate-pulse" : ""}`} />
            {autoRefresh ? "Auto-refresh ON" : "Auto-refresh OFF"}
          </Button>
          <Button variant="outline" size="sm" onClick={fetchDashboardData} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="flex space-x-2">
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

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Real-time Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.realTimeVisitors || 0}</div>
            <p className="text-xs text-muted-foreground">Active sessions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.totalPageViews || 0}</div>
            <p className="text-xs text-muted-foreground">Total page views</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversions</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.totalConversions || 0}</div>
            <p className="text-xs text-muted-foreground">{data?.conversionRate || 0}% conversion rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interactions</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.totalClicks || 0}</div>
            <p className="text-xs text-muted-foreground">Total clicks</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Device Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
                <CardDescription>Visitors by device type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(data?.deviceBreakdown || {}).map(([device, count]) => {
                  const total = Object.values(data?.deviceBreakdown || {}).reduce((a, b) => a + b, 0)
                  const percentage = total > 0 ? Math.round((count / total) * 100) : 0

                  return (
                    <div key={device} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getDeviceIcon(device)}
                        <span className="capitalize">{device}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={percentage} className="w-20" />
                        <span className="text-sm font-medium">{count}</span>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Top Pages */}
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Most visited pages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(data?.topPages || {})
                  .sort(([, a], [, b]) => (b as number) - (a as number))
                  .slice(0, 5)
                  .map(([page, views]) => (
                    <div key={page} className="flex items-center justify-between">
                      <span className="text-sm truncate flex-1">{page}</span>
                      <Badge variant="secondary">{views as number}</Badge>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conversions" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Conversions by Type */}
            <Card>
              <CardHeader>
                <CardTitle>Conversions by Type</CardTitle>
                <CardDescription>Breakdown of conversion types</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(data?.conversionsByType || {}).map(([type, count]) => {
                  const total = Object.values(data?.conversionsByType || {}).reduce((a, b) => a + b, 0)
                  const percentage = total > 0 ? Math.round((count / total) * 100) : 0

                  return (
                    <div key={type} className="flex items-center justify-between">
                      <span className="capitalize text-sm">{type.replace("_", " ")}</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={percentage} className="w-20" />
                        <span className="text-sm font-medium">{count}</span>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Conversion Rate Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Conversion Performance</CardTitle>
                <CardDescription>Key conversion metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Conversion Rate</span>
                  <span className="text-2xl font-bold">{data?.conversionRate || 0}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Conversions</span>
                  <span className="text-lg font-semibold">{data?.totalConversions || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Visitors</span>
                  <span className="text-lg font-semibold">{data?.realTimeVisitors || 0}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="devices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Device Analytics</CardTitle>
              <CardDescription>Detailed device and browser information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(data?.deviceBreakdown || {}).map(([device, count]) => (
                  <div key={device} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getDeviceIcon(device)}
                        <span className="font-medium capitalize">{device}</span>
                      </div>
                      <Badge>{count} visitors</Badge>
                    </div>
                    <Progress
                      value={
                        Object.values(data?.deviceBreakdown || {}).reduce((a, b) => a + b, 0) > 0
                          ? (count / Object.values(data?.deviceBreakdown || {}).reduce((a, b) => a + b, 0)) * 100
                          : 0
                      }
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Page Performance</CardTitle>
              <CardDescription>Detailed page analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(data?.topPages || {})
                  .sort(([, a], [, b]) => (b as number) - (a as number))
                  .map(([page, views]) => (
                    <div key={page} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{page}</div>
                        <div className="text-sm text-muted-foreground">{views as number} views</div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{views as number}</Badge>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest user interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data?.recentEvents?.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">{event.event_type}</Badge>
                      <div>
                        <div className="text-sm font-medium">{event.page_url}</div>
                        <div className="text-xs text-muted-foreground">
                          {event.device_type} • {event.browser}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(event.timestamp).toLocaleTimeString()}
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
