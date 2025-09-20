import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const clientIP = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    // Get location data from IP (you can integrate with a geolocation service)
    const locationData = await getLocationFromIP(clientIP)

    const analyticsEvent = {
      session_id: body.session_id,
      user_id: body.user_id || null,
      event_type: body.event_type,
      event_data: body.event_data,
      page_url: body.page_url,
      user_agent: body.user_agent,
      ip_address: clientIP,
      timestamp: body.timestamp,
      device_type: body.device_type,
      browser: body.browser,
      country: locationData?.country,
      city: locationData?.city,
    }

    const { data, error } = await supabase.from("user_analytics").insert([analyticsEvent])

    if (error) {
      console.error("Analytics insert error:", error)
      return NextResponse.json({ error: "Failed to save analytics" }, { status: 500 })
    }

    // Update session data
    await updateSessionData(body.session_id, body.event_type, body.event_data)

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Analytics API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const timeRange = searchParams.get("timeRange") || "24h"
    const eventType = searchParams.get("eventType")
    const page = searchParams.get("page")

    let query = supabase.from("user_analytics").select("*").order("timestamp", { ascending: false })

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

    if (eventType) {
      query = query.eq("event_type", eventType)
    }

    if (page) {
      query = query.eq("page_url", page)
    }

    const { data, error } = await query.limit(1000)

    if (error) {
      return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 })
    }

    // Process data for dashboard
    const processedData = processAnalyticsData(data)

    return NextResponse.json({
      success: true,
      data: processedData,
      raw: data,
    })
  } catch (error) {
    console.error("Analytics GET error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

async function getLocationFromIP(ip: string) {
  try {
    // You can integrate with services like ipapi.co, ipgeolocation.io, etc.
    // For now, returning mock data
    return {
      country: "Unknown",
      city: "Unknown",
    }
  } catch (error) {
    return null
  }
}

async function updateSessionData(sessionId: string, eventType: string, eventData: any) {
  try {
    // Check if session exists
    const { data: existingSession } = await supabase
      .from("user_sessions")
      .select("*")
      .eq("session_id", sessionId)
      .single()

    if (existingSession) {
      // Update existing session
      const updates: any = {
        end_time: new Date().toISOString(),
        page_views: existingSession.page_views + (eventType === "page_view" ? 1 : 0),
      }

      if (eventType === "page_unload" && eventData?.time_on_page) {
        updates.total_time = existingSession.total_time + eventData.time_on_page
      }

      await supabase.from("user_sessions").update(updates).eq("session_id", sessionId)
    } else if (eventType === "page_view") {
      // Create new session
      const newSession = {
        session_id: sessionId,
        start_time: new Date().toISOString(),
        page_views: 1,
        total_time: 0,
        bounce_rate: false,
        conversion_count: 0,
        device_info: {
          type: eventData?.device_type || "unknown",
          browser: eventData?.browser || "unknown",
          os: "unknown",
          screen_resolution: `${eventData?.viewport?.width}x${eventData?.viewport?.height}`,
        },
      }

      await supabase.from("user_sessions").insert([newSession])
    }
  } catch (error) {
    console.error("Session update error:", error)
  }
}

function processAnalyticsData(data: any[]) {
  const processed = {
    totalEvents: data.length,
    uniqueSessions: new Set(data.map((d) => d.session_id)).size,
    pageViews: data.filter((d) => d.event_type === "page_view").length,
    clicks: data.filter((d) => d.event_type === "click").length,
    conversions: data.filter((d) => d.event_type === "conversion").length,
    deviceBreakdown: {},
    browserBreakdown: {},
    topPages: {},
    hourlyActivity: Array(24).fill(0),
    scrollDepthData: [],
  }

  data.forEach((event) => {
    // Device breakdown
    const device = event.device_type || "unknown"
    processed.deviceBreakdown[device] = (processed.deviceBreakdown[device] || 0) + 1

    // Browser breakdown
    const browser = event.browser || "unknown"
    processed.browserBreakdown[browser] = (processed.browserBreakdown[browser] || 0) + 1

    // Top pages
    const page = event.page_url || "unknown"
    processed.topPages[page] = (processed.topPages[page] || 0) + 1

    // Hourly activity
    const hour = new Date(event.timestamp).getHours()
    processed.hourlyActivity[hour]++

    // Scroll depth data
    if (event.event_type === "scroll") {
      processed.scrollDepthData.push({
        depth: event.event_data?.depth || 0,
        page: event.page_url,
        timestamp: event.timestamp,
      })
    }
  })

  return processed
}
