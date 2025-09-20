"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eye, EyeOff, Smartphone, Monitor, Tablet, MousePointer, BarChart3 } from "lucide-react"

interface HeatmapData {
  heatmapData: Array<{
    id: string
    click_x: number
    click_y: number
    viewport_width: number
    viewport_height: number
    device_type: string
    timestamp: string
  }>
  processedData: {
    clusters: Array<{
      x: number
      y: number
      count: number
      clicks: any[]
    }>
    density: Array<{
      x: number
      y: number
      intensity: number
    }>
    maxIntensity: number
    deviceBreakdown: Record<string, number>
    viewportSizes: Array<{ size: string; count: number }>
    clicksByHour: Array<{ hour: number; count: number }>
    topElements: Array<{ selector: string; count: number }>
    totalClicks: number
  }
  totalClicks: number
  timeRange: string
  page: string
  deviceType?: string
}

export function HeatmapViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [data, setData] = useState<HeatmapData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState("24h")
  const [deviceFilter, setDeviceFilter] = useState<string>("")
  const [intensity, setIntensity] = useState([50])
  const [showHeatmap, setShowHeatmap] = useState(true)
  const [showClusters, setShowClusters] = useState(true)

  const fetchHeatmapData = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        timeRange,
        page: window.location.pathname,
      })

      if (deviceFilter) {
        params.append("deviceType", deviceFilter)
      }

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
  }, [timeRange, deviceFilter])

  useEffect(() => {
    if (data && canvasRef.current) {
      drawHeatmap()
    }
  }, [data, intensity, showHeatmap, showClusters])

  const drawHeatmap = () => {
    const canvas = canvasRef.current
    if (!canvas || !data) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to match viewport
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const intensityMultiplier = intensity[0] / 50

    if (showHeatmap && data.processedData.density.length > 0) {
      // Draw density heatmap
      data.processedData.density.forEach((point) => {
        const normalizedIntensity = (point.intensity / data.processedData.maxIntensity) * intensityMultiplier
        const radius = Math.max(20, normalizedIntensity * 50)

        // Create radial gradient
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius)

        const alpha = Math.min(normalizedIntensity * 0.6, 0.8)
        gradient.addColorStop(0, `rgba(255, 0, 0, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(255, 255, 0, ${alpha * 0.5})`)
        gradient.addColorStop(1, `rgba(255, 255, 0, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    if (showClusters && data.processedData.clusters.length > 0) {
      // Draw click clusters
      data.processedData.clusters.forEach((cluster) => {
        const radius = Math.max(5, Math.min(cluster.count * 3, 30))

        // Draw cluster circle
        ctx.fillStyle = `rgba(0, 100, 255, 0.7)`
        ctx.beginPath()
        ctx.arc(cluster.x, cluster.y, radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw cluster border
        ctx.strokeStyle = `rgba(0, 50, 150, 0.9)`
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw click count
        if (cluster.count > 1) {
          ctx.fillStyle = "white"
          ctx.font = "bold 12px Arial"
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(cluster.count.toString(), cluster.x, cluster.y)
        }
      })
    }
  }

  const exportHeatmap = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Create download link
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `heatmap-${timeRange}-${Date.now()}.png`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }
    })
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
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading heatmap data...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!data || data.totalClicks === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <MousePointer className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Click Data Available</h3>
            <p className="text-muted-foreground">
              No clicks have been recorded for the selected time range and filters.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Heatmap Viewer</h1>
          <p className="text-muted-foreground">Visual representation of user clicks and interactions</p>
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

          <Button variant="outline" size="sm" onClick={exportHeatmap}>
            <Download className="h-4 w-4 mr-2" />
            Export PNG
          </Button>
        </div>
      </div>

      {/* Heatmap Canvas and Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Heatmap Display */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Click Heatmap</CardTitle>
                  <CardDescription>
                    {data.totalClicks} clicks recorded in {timeRange}
                  </CardDescription>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant={showHeatmap ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowHeatmap(!showHeatmap)}
                  >
                    {showHeatmap ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    Heatmap
                  </Button>

                  <Button
                    variant={showClusters ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowClusters(!showClusters)}
                  >
                    {showClusters ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    Clusters
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  className="absolute top-0 left-0 pointer-events-none z-10 border rounded"
                  style={{
                    width: "100%",
                    height: "400px",
                    background: "rgba(0,0,0,0.05)",
                  }}
                />
                <div className="h-96 bg-gray-50 rounded border flex items-center justify-center">
                  <p className="text-muted-foreground">Page content overlay</p>
                </div>
              </div>

              {/* Intensity Control */}
              <div className="mt-4 space-y-2">
                <label className="text-sm font-medium">Intensity: {intensity[0]}%</label>
                <Slider
                  value={intensity}
                  onValueChange={setIntensity}
                  max={100}
                  min={10}
                  step={10}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Panel */}
        <div className="space-y-4">
          {/* Device Filter */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Device Filter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button
                  variant={deviceFilter === "" ? "default" : "outline"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => setDeviceFilter("")}
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  All Devices
                </Button>

                {Object.entries(data.processedData.deviceBreakdown).map(([device, count]) => (
                  <Button
                    key={device}
                    variant={deviceFilter === device ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-between"
                    onClick={() => setDeviceFilter(device)}
                  >
                    <div className="flex items-center">
                      {getDeviceIcon(device)}
                      <span className="ml-2 capitalize">{device}</span>
                    </div>
                    <Badge variant="secondary">{count}</Badge>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Clusters */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Click Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {data.processedData.clusters.slice(0, 5).map((cluster, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <p className="text-sm font-medium">Area #{index + 1}</p>
                      <p className="text-xs text-muted-foreground">
                        ({Math.round(cluster.x)}, {Math.round(cluster.y)})
                      </p>
                    </div>
                    <Badge>{cluster.count} clicks</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Total Clicks</span>
                  <span className="text-sm font-medium">{data.totalClicks}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm">Click Clusters</span>
                  <span className="text-sm font-medium">{data.processedData.clusters.length}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm">Max Intensity</span>
                  <span className="text-sm font-medium">{data.processedData.maxIntensity}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm">Viewport Sizes</span>
                  <span className="text-sm font-medium">{data.processedData.viewportSizes.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="elements" className="space-y-4">
        <TabsList>
          <TabsTrigger value="elements">Top Elements</TabsTrigger>
          <TabsTrigger value="viewports">Viewport Sizes</TabsTrigger>
          <TabsTrigger value="timeline">Click Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="elements">
          <Card>
            <CardHeader>
              <CardTitle>Most Clicked Elements</CardTitle>
              <CardDescription>Elements with the highest click counts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {data.processedData.topElements.map((element, index) => (
                  <div key={element.selector} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">#{index + 1}</Badge>
                      <code className="text-sm bg-muted px-2 py-1 rounded">{element.selector}</code>
                    </div>
                    <Badge>{element.count} clicks</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="viewports">
          <Card>
            <CardHeader>
              <CardTitle>Viewport Sizes</CardTitle>
              <CardDescription>Most common screen resolutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {data.processedData.viewportSizes.map((viewport, index) => (
                  <div key={viewport.size} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">#{index + 1}</Badge>
                      <span className="font-mono text-sm">{viewport.size}</span>
                    </div>
                    <Badge>{viewport.count} sessions</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Clicks by Hour</CardTitle>
              <CardDescription>Click distribution throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {data.processedData.clicksByHour.map((hourData) => (
                  <div key={hourData.hour} className="flex items-center gap-3">
                    <span className="text-sm font-mono w-12">{hourData.hour.toString().padStart(2, "0")}:00</span>
                    <div className="flex-1 bg-muted rounded-full h-2 relative">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${(hourData.count / Math.max(...data.processedData.clicksByHour.map((h) => h.count))) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">{hourData.count}</span>
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
