import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase-server"

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const body = await request.json()

    const { data, error } = await supabase.from("heatmap_data").insert(body)

    if (error) {
      console.error("Heatmap insert error:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Heatmap API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const { searchParams } = new URL(request.url)

    const timeRange = searchParams.get("timeRange") || "24h"
    const page = searchParams.get("page") || window?.location?.pathname || "/"
    const deviceType = searchParams.get("deviceType")

    // Convert time range to hours
    const timeRangeMap: Record<string, number> = {
      "1h": 1,
      "24h": 24,
      "7d": 168,
      "30d": 720,
    }

    const hours = timeRangeMap[timeRange] || 24
    const startTime = new Date(Date.now() - hours * 60 * 60 * 1000).toISOString()

    // Build query
    let query = supabase.from("heatmap_data").select("*").gte("timestamp", startTime)

    if (page) {
      query = query.eq("page_url", page)
    }

    if (deviceType) {
      query = query.eq("device_type", deviceType)
    }

    const { data: heatmapData, error } = await query.order("timestamp", { ascending: false })

    if (error) {
      console.error("Heatmap fetch error:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Process heatmap data for visualization
    const processedData = processHeatmapData(heatmapData || [])

    return NextResponse.json({
      heatmapData: heatmapData || [],
      processedData,
      totalClicks: heatmapData?.length || 0,
      timeRange,
      page,
      deviceType,
    })
  } catch (error) {
    console.error("Heatmap API GET error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function processHeatmapData(data: any[]): {
  clusters: any[]
  density: any[]
  maxIntensity: number
  deviceBreakdown: Record<string, number>
  viewportSizes: { size: string; count: number }[]
  clicksByHour: { hour: number; count: number }[]
  topElements: { selector: string; count: number }[]
  totalClicks: number
} {
  if (!data.length) return { 
    clusters: [], 
    density: [], 
    maxIntensity: 0,
    deviceBreakdown: {},
    viewportSizes: [],
    clicksByHour: Array.from({ length: 24 }, (_, hour) => ({ hour, count: 0 })),
    topElements: [],
    totalClicks: 0,
  }

  // Group clicks by proximity (clustering)
  const clusters = clusterClicks(data, 50) // 50px radius

  // Create density map
  const density = createDensityMap(data)

  // Find max intensity for normalization
  const maxIntensity = Math.max(...density.map((d) => d.intensity))

  // Device breakdown
  const deviceBreakdown = data.reduce((acc: Record<string, number>, click) => {
    const device = click.device_type || "unknown"
    acc[device] = (acc[device] || 0) + 1
    return acc
  }, {})

  // Viewport size analysis
  const viewportSizes = data.reduce((acc: Record<string, number>, click) => {
    const size = `${click.viewport_width}x${click.viewport_height}`
    acc[size] = (acc[size] || 0) + 1
    return acc
  }, {})

  // Click distribution by hour
  const clicksByHour = data.reduce((acc: Record<number, number>, click) => {
    const hour = new Date(click.timestamp).getHours()
    acc[hour] = (acc[hour] || 0) + 1
    return acc
  }, {})

  // Fill missing hours
  for (let i = 0; i < 24; i++) {
    if (!(i in clicksByHour)) {
      clicksByHour[i] = 0
    }
  }

  // Element analysis (if element_selector is available)
  const elementClicks = data.reduce((acc: Record<string, number>, click) => {
    if (click.element_selector) {
      acc[click.element_selector] = (acc[click.element_selector] || 0) + 1
    }
    return acc
  }, {})

  const topElements = Object.entries(elementClicks)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .slice(0, 10)
    .map(([selector, count]) => ({ selector, count }))

  return {
    clusters,
    density,
    maxIntensity,
    deviceBreakdown,
    viewportSizes: Object.entries(viewportSizes)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .slice(0, 5)
      .map(([size, count]) => ({ size, count })),
    clicksByHour: Object.entries(clicksByHour)
      .sort(([a], [b]) => Number.parseInt(a) - Number.parseInt(b))
      .map(([hour, count]) => ({ hour: Number.parseInt(hour), count })),
    topElements,
    totalClicks: data.length,
  }
}

function clusterClicks(clicks: any[], radius: number) {
  const clusters: any[] = []
  const processed = new Set<number>()

  clicks.forEach((click, index) => {
    if (processed.has(index)) return

    const cluster = {
      x: click.click_x,
      y: click.click_y,
      count: 1,
      clicks: [click],
    }

    // Find nearby clicks
    clicks.forEach((otherClick, otherIndex) => {
      if (index === otherIndex || processed.has(otherIndex)) return

      const distance = Math.sqrt(
        Math.pow(click.click_x - otherClick.click_x, 2) + Math.pow(click.click_y - otherClick.click_y, 2),
      )

      if (distance <= radius) {
        cluster.clicks.push(otherClick)
        cluster.count++
        processed.add(otherIndex)
      }
    })

    // Calculate cluster center
    if (cluster.clicks.length > 1) {
      cluster.x = cluster.clicks.reduce((sum, c) => sum + c.click_x, 0) / cluster.clicks.length
      cluster.y = cluster.clicks.reduce((sum, c) => sum + c.click_y, 0) / cluster.clicks.length
    }

    clusters.push(cluster)
    processed.add(index)
  })

  return clusters.sort((a, b) => b.count - a.count)
}

function createDensityMap(clicks: any[], gridSize = 20) {
  if (!clicks.length) return []

  // Find bounds
  const minX = Math.min(...clicks.map((c) => c.click_x))
  const maxX = Math.max(...clicks.map((c) => c.click_x))
  const minY = Math.min(...clicks.map((c) => c.click_y))
  const maxY = Math.max(...clicks.map((c) => c.click_y))

  const density: Array<{ x: number; y: number; intensity: number }> = []

  // Create grid
  for (let x = minX; x <= maxX; x += gridSize) {
    for (let y = minY; y <= maxY; y += gridSize) {
      let intensity = 0

      // Count clicks in this grid cell
      clicks.forEach((click) => {
        if (click.click_x >= x && click.click_x < x + gridSize && click.click_y >= y && click.click_y < y + gridSize) {
          intensity++
        }
      })

      if (intensity > 0) {
        density.push({ x, y, intensity })
      }
    }
  }

  return density
}
