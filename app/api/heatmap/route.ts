import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const heatmapData = {
      session_id: body.session_id,
      page_url: body.page_url,
      element_selector: body.element_selector,
      click_x: body.click_x,
      click_y: body.click_y,
      viewport_width: body.viewport_width,
      viewport_height: body.viewport_height,
      scroll_depth: body.scroll_depth,
      timestamp: body.timestamp,
      device_type: body.device_type,
    }

    const { data, error } = await supabase.from("heatmap_data").insert([heatmapData])

    if (error) {
      console.error("Heatmap insert error:", error)
      return NextResponse.json({ error: "Failed to save heatmap data" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Heatmap API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const pageUrl = searchParams.get("pageUrl")
    const timeRange = searchParams.get("timeRange") || "24h"
    const deviceType = searchParams.get("deviceType")

    let query = supabase.from("heatmap_data").select("*").order("timestamp", { ascending: false })

    if (pageUrl) {
      query = query.eq("page_url", pageUrl)
    }

    if (deviceType) {
      query = query.eq("device_type", deviceType)
    }

    // Apply time range filter
    const now = new Date()
    const startTime = new Date()

    switch (timeRange) {
      case "1h":
        startTime.setHours(now.getHours() - 1)
        break
      case "24h":
        startTime.setDate(now.getDate() - 1)
        break
      case "7d":
        startTime.setDate(now.getDate() - 7)
        break
      case "30d":
        startTime.setDate(now.getDate() - 30)
        break
    }

    query = query.gte("timestamp", startTime.toISOString())

    const { data, error } = await query.limit(5000)

    if (error) {
      return NextResponse.json({ error: "Failed to fetch heatmap data" }, { status: 500 })
    }

    // Process heatmap data for visualization
    const processedData = processHeatmapData(data)

    return NextResponse.json({
      success: true,
      data: processedData,
      raw: data,
    })
  } catch (error) {
    console.error("Heatmap GET error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function processHeatmapData(data: any[]) {
  const processed = {
    clickDensity: {},
    elementPopularity: {},
    scrollHeatmap: {},
    deviceComparison: {
      desktop: [],
      tablet: [],
      mobile: [],
    },
  }

  data.forEach((point) => {
    const key = `${point.click_x},${point.click_y}`
    processed.clickDensity[key] = (processed.clickDensity[key] || 0) + 1

    const element = point.element_selector
    processed.elementPopularity[element] = (processed.elementPopularity[element] || 0) + 1

    const scrollKey = `${point.scroll_depth}`
    processed.scrollHeatmap[scrollKey] = (processed.scrollHeatmap[scrollKey] || 0) + 1

    if (point.device_type in processed.deviceComparison) {
      processed.deviceComparison[point.device_type].push({
        x: point.click_x,
        y: point.click_y,
        viewport_width: point.viewport_width,
        viewport_height: point.viewport_height,
      })
    }
  })

  return processed
}
