"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { MousePointer, Smartphone, Monitor, Tablet, RefreshCw, Download, Settings } from "lucide-react"

interface HeatmapPoint {
  x: number
  y: number
  intensity: number
  viewport_width: number
  viewport_height: number
  device_type: string
  timestamp: string
}

interface HeatmapViewerProps {
  pageUrl?: string
  timeRange?: string
}

export function HeatmapViewer({ pageUrl = "/", timeRange = "24h" }: HeatmapViewerProps) {
  const [heatmapData, setHeatmapData] = useState<HeatmapPoint[]>([])
  const [loading, setLoading] = useState(true)
  const [deviceFilter, setDeviceFilter] = useState<string>("all")
  const [intensity, setIntensity] = useState([50])
  const [showOverlay, setShowOverlay] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchHeatmapData()
  }, [pageUrl, timeRange, deviceFilter])

  useEffect(() => {
    if (heatmapData.length > 0 && canvasRef.current) {
      renderHeatmap()
    }
  }, [heatmapData, intensity, showOverlay])

  const fetchHeatmapData = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        pageUrl,
        timeRange,
        ...(deviceFilter !== "all" && { deviceType: deviceFilter }),
      })

      const response = await fetch(`/api/heatmap?${params}`)
      const data = await response.json()

      if (data.success && data.raw) {
        const processedPoints: HeatmapPoint[] = data.raw.map((point: any) => ({
          x: point.click_x,
          y: point.click_y,
          intensity: 1,
          viewport_width: point.viewport_width,
          viewport_height: point.viewport_height,
          device_type: point.device_type,
          timestamp: point.timestamp,
        }))

        setHeatmapData(processedPoints)
      }
    } catch (error) {
      console.error("Heatmap data fetch error:", error)
    } finally {
      setLoading(false)
    }
  }

  const renderHeatmap = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to match viewport
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Create gradient for heatmap
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 25)
    gradient.addColorStop(0, `rgba(255, 0, 0, ${intensity[0] / 100})`)
    gradient.addColorStop(0.3, `rgba(255, 165, 0, ${intensity[0] / 150})`)
    gradient.addColorStop(0.6, `rgba(255, 255, 0, ${intensity[0] / 200})`)
    gradient.addColorStop(1, "rgba(255, 255, 0, 0)")

    // Draw heatmap points
    heatmapData.forEach((point) => {
      // Scale coordinates to canvas size
      const scaledX = (point.x / point.viewport_width) * canvas.width
      const scaledY = (point.y / point.viewport_height) * canvas.height

      ctx.save()
      ctx.translate(scaledX, scaledY)
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(0, 0, 25, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    })

    // Apply blur effect
    ctx.filter = "blur(15px)"
    ctx.globalCompositeOperation = "multiply"
  }

  const exportHeatmapData = () => {
    const dataStr = JSON.stringify(heatmapData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `heatmap-${pageUrl.replace("/", "home")}-${timeRange}.json`
    link.click()
    URL.revokeObjectURL(url)
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

  const deviceStats = heatmapData.reduce(
    (acc, point) => {
      acc[point.device_type] = (acc[point.device_type] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Heatmap Analysis</h2>
          <p className="text-muted-foreground">Visual representation of user interactions on {pageUrl}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={exportHeatmapData} disabled={heatmapData.length === 0}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" onClick={fetchHeatmapData} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium">Device:</label>
          <Select value={deviceFilter} onValueChange={setDeviceFilter}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Devices</SelectItem>
              <SelectItem value="desktop">Desktop</SelectItem>
              <SelectItem value="tablet">Tablet</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium">Intensity:</label>
          <div className="w-32">
            <Slider value={intensity} onValueChange={setIntensity} max={100} min={10} step={10} />
          </div>
          <span className="text-sm text-muted-foreground">{intensity[0]}%</span>
        </div>

        <Button variant="outline" size="sm" onClick={() => setShowOverlay(!showOverlay)}>
          <Settings className="h-4 w-4 mr-2" />
          {showOverlay ? "Hide" : "Show"} Overlay
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{heatmapData.length}</div>
          </CardContent>
        </Card>

        {Object.entries(deviceStats).map(([device, count]) => (
          <Card key={device}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium capitalize">{device}</CardTitle>
              {getDeviceIcon(device)}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{count}</div>
              <p className="text-xs text-muted-foreground">
                {heatmapData.length > 0 ? Math.round((count / heatmapData.length) * 100) : 0}% of clicks
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Heatmap Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Click Heatmap</CardTitle>
          <CardDescription>
            Red areas indicate high interaction, yellow areas indicate moderate interaction
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <RefreshCw className="h-8 w-8 animate-spin" />
                <span className="ml-2">Loading heatmap...</span>
              </div>
            ) : (
              <>
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full"
                  style={{ mixBlendMode: "multiply" }}
                />
                {showOverlay && (
                  <div ref={overlayRef} className="absolute inset-0 pointer-events-none">
                    {heatmapData.map((point, index) => (
                      <div
                        key={index}
                        className="absolute w-2 h-2 bg-red-500 rounded-full opacity-50"
                        style={{
                          left: `${(point.x / point.viewport_width) * 100}%`,
                          top: `${(point.y / point.viewport_height) * 100}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis */}
      <Tabs defaultValue="clicks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="clicks">Click Analysis</TabsTrigger>
          <TabsTrigger value="scroll">Scroll Behavior</TabsTrigger>
          <TabsTrigger value="elements">Element Popularity</TabsTrigger>
        </TabsList>

        <TabsContent value="clicks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Click Distribution</CardTitle>
              <CardDescription>Analysis of click patterns by device and time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(deviceStats).map(([device, count]) => (
                  <div key={device} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getDeviceIcon(device)}
                      <span className="capitalize">{device}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{
                            width: `${heatmapData.length > 0 ? (count / heatmapData.length) * 100 : 0}%`,
                          }}
                        />
                      </div>
                      <Badge variant="secondary">{count}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scroll" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scroll Behavior</CardTitle>
              <CardDescription>How users scroll through the page</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Scroll behavior analysis will be available with more data points.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="elements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Element Popularity</CardTitle>
              <CardDescription>Most clicked elements on the page</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Element popularity analysis will be available with element selector data.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
