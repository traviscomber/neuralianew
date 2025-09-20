"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eye, EyeOff, RotateCcw, Smartphone, Monitor, Tablet, MousePointer } from "lucide-react"

interface HeatmapData {
  heatmapData: any[]
  processedData: {
    clusters: Array<{
      x: number
      y: number
      intensity: number
      clicks: number
      elements: string[]
    }>
    stats: {
      totalClicks: number
      uniqueElements: number
      avgClicksPerSession: number
      deviceBreakdown: Record<string, number>
      topElements: Array<{ element: string; count: number }>
      clicksByHour: Array<{ hour: number; count: number }>
    }
  }
  totalClicks: number
  timeRange: string
  page: string
  deviceType?: string
}

interface HeatmapViewerProps {
  className?: string
}

export function HeatmapViewer({ className }: HeatmapViewerProps) {
  const [data, setData] = useState<HeatmapData | null>(null)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState("/")
  const [deviceType, setDeviceType] = useState<string>("")
  const [timeRange, setTimeRange] = useState("24h")
  const [showHeatmap, setShowHeatmap] = useState(true)
  const [intensity, setIntensity] = useState([0.7])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const fetchHeatmapData = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page,
        timeRange,
        ...(deviceType && { deviceType }),
      })

      const response = await fetch(`/api/heatmap?${params}`)
      const heatmapData = await response.json()
      setData(heatmapData)
    } catch (error) {
      console.error("Failed to fetch heatmap data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHeatmapData()
  }, [page, deviceType, timeRange])

  useEffect(() => {
    if (data && showHeatmap && canvasRef.current && containerRef.current) {
      drawHeatmap()
    }
  }, [data, showHeatmap, intensity])

  const drawHeatmap = () => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container || !data) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to match container
    const rect = container.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw heatmap clusters
    data.processedData.clusters.forEach((cluster) => {
      const radius = Math.max(20, cluster.clicks * 5)
      const alpha = Math.min(cluster.intensity * intensity[0], 1)

      // Create radial gradient
      const gradient = ctx.createRadialGradient(cluster.x, cluster.y, 0, cluster.x, cluster.y, radius)

      gradient.addColorStop(0, `rgba(255, 0, 0, ${alpha})`)
      gradient.addColorStop(0.5, `rgba(255, 165, 0, ${alpha * 0.7})`)
      gradient.addColorStop(1, `rgba(255, 255, 0, 0)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(cluster.x, cluster.y, radius, 0, 2 * Math.PI)
      ctx.fill()

      // Draw click count
      if (cluster.clicks > 1) {
        ctx.fillStyle = "white"
        ctx.font = "12px Arial"
        ctx.textAlign = "center"
        ctx.fillText(cluster.clicks.toString(), cluster.x, cluster.y + 4)
      }
    })
  }

  const exportHeatmap = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = `heatmap-${page.replace("/", "home")}-${timeRange}.png`
    link.href = canvas.toDataURL()
    link.click()
  }

  const resetView = () => {
    setIntensity([0.7])
    setShowHeatmap(true)
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

  if (loading) {
    return (
      <div className={`space-y-6 ${className}`}>
        <Card className="animate-pulse">
          <CardHeader>
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-gray-200 rounded"></div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Click Heatmap</h2>
          <p className="text-muted-foreground">
            {data?.totalClicks || 0} clicks on {page} ({timeRange})
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            {["/", "/services", "/products", "/contact"].map((pagePath) => (
              <Button
                key={pagePath}
                variant={page === pagePath ? "default" : "outline"}
                size="sm"
                onClick={() => setPage(pagePath)}
              >
                {pagePath === "/" ? "Home" : pagePath.slice(1)}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {["", "desktop", "tablet", "mobile"].map((device) => (
              <Button
                key={device}
                variant={deviceType === device ? "default" : "outline"}
                size="sm"
                onClick={() => setDeviceType(device)}
              >
                {device ? getDeviceIcon(device) : "All"}
              </Button>
            ))}
          </div>

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
        </div>
      </div>

      {/* Heatmap Visualization */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Interactive Heatmap</CardTitle>
              <CardDescription>
                Click density visualization with {data?.processedData.clusters.length || 0} clusters
              </CardDescription>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowHeatmap(!showHeatmap)}>
                {showHeatmap ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>

              <Button variant="outline" size="sm" onClick={resetView}>
                <RotateCcw className="h-4 w-4" />
              </Button>

              <Button variant="outline" size="sm" onClick={exportHeatmap}>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {showHeatmap && (
            <div className="flex items-center gap-4 mt-4">
              <span className="text-sm font-medium">Intensity:</span>
              <Slider value={intensity} onValueChange={setIntensity} max={1} min={0.1} step={0.1} className="w-32" />
              <span className="text-sm text-muted-foreground">{Math.round(intensity[0] * 100)}%</span>
            </div>
          )}
        </CardHeader>

        <CardContent>
          <div ref={containerRef} className="relative w-full h-96 bg-gray-50 border rounded-lg overflow-hidden">
            {showHeatmap && (
              <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                style={{ mixBlendMode: "multiply" }}
              />
            )}

            {/* Simulated page content for context */}
            <div className="absolute inset-0 p-4 text-gray-400">
              <div className="h-16 bg-gray-200 rounded mb-4 flex items-center justify-center">Header / Navigation</div>
              <div className="h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">Hero Section</div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="h-24 bg-gray-200 rounded flex items-center justify-center">Feature 1</div>
                <div className="h-24 bg-gray-200 rounded flex items-center justify-center">Feature 2</div>
                <div className="h-24 bg-gray-200 rounded flex items-center justify-center">Feature 3</div>
              </div>
              <div className="h-20 bg-gray-200 rounded flex items-center justify-center">Footer</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Tabs */}
      <Tabs defaultValue="stats" className="space-y-4">
        <TabsList>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="elements">Top Elements</TabsTrigger>
          <TabsTrigger value="activity">Activity Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="stats" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.processedData.stats.totalClicks || 0}</div>
                <Badge variant="secondary" className="mt-1">
                  <MousePointer className="h-3 w-3 mr-1" />
                  {data?.processedData.clusters.length || 0} clusters
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Unique Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.processedData.stats.uniqueElements || 0}</div>
                <p className="text-xs text-muted-foreground mt-1">Interactive elements clicked</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg. Clicks/Session</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {data?.processedData.stats.avgClicksPerSession.toFixed(1) || "0.0"}
                </div>
                <p className="text-xs text-muted-foreground mt-1">User engagement level</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Peak Hour</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {data?.processedData.stats.clicksByHour.reduce((max, curr) => (curr.count > max.count ? curr : max), {
                    hour: 0,
                    count: 0,
                  }).hour || 0}
                  :00
                </div>
                <p className="text-xs text-muted-foreground mt-1">Most active time</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Device Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(data?.processedData.stats.deviceBreakdown || {}).map(([device, count]) => {
                  const total = Object.values(data?.processedData.stats.deviceBreakdown || {}).reduce(
                    (a, b) => a + b,
                    0,
                  )
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

        <TabsContent value="elements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Most Clicked Elements</CardTitle>
              <CardDescription>Top interactive elements by click count</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data?.processedData.stats.topElements.map((element, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">{element.element}</code>
                    </div>
                    <Badge variant="outline">{element.count} clicks</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hourly Activity</CardTitle>
              <CardDescription>Click distribution throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-12 gap-1">
                {data?.processedData.stats.clicksByHour.map((hourData) => {
                  const maxClicks = Math.max(...(data?.processedData.stats.clicksByHour.map((h) => h.count) || [1]))
                  const height = maxClicks > 0 ? (hourData.count / maxClicks) * 100 : 0

                  return (
                    <div key={hourData.hour} className="text-center">
                      <div
                        className="bg-blue-500 rounded-t mb-1 transition-all duration-300 hover:bg-blue-600"
                        style={{ height: `${Math.max(height, 4)}px` }}
                        title={`${hourData.hour}:00 - ${hourData.count} clicks`}
                      />
                      <span className="text-xs text-muted-foreground">{hourData.hour}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
