import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase-server"

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    const body = await request.json()

    const {
      session_id,
      page_url,
      click_x,
      click_y,
      viewport_width,
      viewport_height,
      element_selector,
      scroll_depth,
      device_type,
    } = body

    if (!session_id || !page_url || click_x === undefined || click_y === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert heatmap data
    const { error } = await supabase.from("heatmap_data").insert({
      session_id,
      page_url,
      click_x,
      click_y,
      viewport_width,
      viewport_height,
      element_selector,
      scroll_depth: scroll_depth || 0,
      device_type,
    })

    if (error) {
      console.error("Failed to insert heatmap data:", error)
      return NextResponse.json({ error: "Failed to track heatmap data" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Heatmap POST error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient()
    const { searchParams } = new URL(request.url)

    const page = searchParams.get("page") || "/"
    const deviceType = searchParams.get("deviceType")
    const timeRange = searchParams.get("timeRange") || "24h"

    // Convert time range to milliseconds
    const intervalMap: Record<string, number> = {
      "1h": 60 * 60 * 1000,
      "24h": 24 * 60 * 60 * 1000,
      "7d": 7 * 24 * 60 * 60 * 1000,
      "30d": 30 * 24 * 60 * 60 * 1000,
    }

    const interval = intervalMap[timeRange] || 24 * 60 * 60 * 1000
    const startTime = new Date(Date.now() - interval).toISOString()

    // Build query
    let query = supabase.from("heatmap_data").select("*").eq("page_url", page).gte("timestamp", startTime)

    if (deviceType) {
      query = query.eq("device_type", deviceType)
    }

    const { data: heatmapData, error } = await query.order("timestamp", { ascending: false })

    if (error) {
      console.error("Heatmap query error:", error)
      return NextResponse.json({ error: "Failed to fetch heatmap data" }, { status: 500 })
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
    console.error("Heatmap API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function processHeatmapData(data: any[]) {
  // Group clicks by proximity (within 50px radius)
  const clusters: Array<{
    x: number
    y: number
    intensity: number
    clicks: number
    elements: string[]
  }> = []

  const CLUSTER_RADIUS = 50

  data.forEach((click) => {
    let addedToCluster = false

    // Try to add to existing cluster
    for (const cluster of clusters) {
      const distance = Math.sqrt(Math.pow(click.click_x - cluster.x, 2) + Math.pow(click.click_y - cluster.y, 2))

      if (distance <= CLUSTER_RADIUS) {
        // Update cluster center (weighted average)
        const totalClicks = cluster.clicks + 1
        cluster.x = (cluster.x * cluster.clicks + click.click_x) / totalClicks
        cluster.y = (cluster.y * cluster.clicks + click.click_y) / totalClicks
        cluster.clicks = totalClicks
        cluster.intensity = Math.min(cluster.intensity + 0.1, 1)

        if (click.element_selector && !cluster.elements.includes(click.element_selector)) {
          cluster.elements.push(click.element_selector)
        }

        addedToCluster = true
        break
      }
    }

    // Create new cluster if not added to existing one
    if (!addedToCluster) {
      clusters.push({
        x: click.click_x,
        y: click.click_y,
        intensity: 0.1,
        clicks: 1,
        elements: click.element_selector ? [click.element_selector] : [],
      })
    }
  })

  // Sort clusters by intensity (most clicked first)
  clusters.sort((a, b) => b.intensity - a.intensity)

  // Calculate statistics
  const stats = {
    totalClicks: data.length,
    uniqueElements: [...new Set(data.map((d) => d.element_selector).filter(Boolean))].length,
    avgClicksPerSession: data.length > 0 ? data.length / new Set(data.map((d) => d.session_id)).size : 0,
    deviceBreakdown: data.reduce(
      (acc, click) => {
        const device = click.device_type || "unknown"
        acc[device] = (acc[device] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    ),
    topElements: getTopElements(data),
    clicksByHour: getClicksByHour(data),
  }

  return {
    clusters,
    stats,
  }
}

function getTopElements(data: any[]) {
  const elementCounts = data.reduce(
    (acc, click) => {
      if (click.element_selector) {
        acc[click.element_selector] = (acc[click.element_selector] || 0) + 1
      }
      return acc
    },
    {} as Record<string, number>,
  )

  return Object.entries(elementCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([element, count]) => ({ element, count }))
}

function getClicksByHour(data: any[]) {
  const hourCounts = data.reduce(
    (acc, click) => {
      const hour = new Date(click.timestamp).getHours()
      acc[hour] = (acc[hour] || 0) + 1
      return acc
    },
    {} as Record<number, number>,
  )

  // Fill in missing hours with 0
  for (let i = 0; i < 24; i++) {
    if (!(i in hourCounts)) {
      hourCounts[i] = 0
    }
  }

  return Object.entries(hourCounts)
    .sort(([a], [b]) => Number.parseInt(a) - Number.parseInt(b))
    .map(([hour, count]) => ({ hour: Number.parseInt(hour), count }))
}
