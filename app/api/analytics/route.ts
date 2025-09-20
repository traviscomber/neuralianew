import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase-server"

function getMilliseconds(interval: string): number {
  const intervalMap: Record<string, number> = {
    "1 hour": 60 * 60 * 1000,
    "24 hours": 24 * 60 * 60 * 1000,
    "7 days": 7 * 24 * 60 * 60 * 1000,
    "30 days": 30 * 24 * 60 * 60 * 1000,
  }

  return intervalMap[interval] || 24 * 60 * 60 * 1000
}

function calculateMetrics(events: any[], sessions: any[], conversions: any[]) {
  const uniqueSessions = new Set(events.map((e) => e.session_id)).size
  const totalPageViews = events.filter((e) => e.event_type === "page_view").length
  const totalClicks = events.filter((e) => e.event_type === "click").length
  const totalConversions = conversions.length

  // Device breakdown
  const deviceBreakdown = events.reduce((acc, event) => {
    const device = event.device_type || "unknown"
    acc[device] = (acc[device] || 0) + 1
    return acc
  }, {})

  // Browser breakdown
  const browserBreakdown = events.reduce((acc, event) => {
    const browser = event.browser || "unknown"
    acc[browser] = (acc[browser] || 0) + 1
    return acc
  }, {})

  // Top pages
  const pageViews = events.filter((e) => e.event_type === "page_view")
  const topPages = pageViews.reduce((acc, event) => {
    const page = event.page_url
    acc[page] = (acc[page] || 0) + 1
    return acc
  }, {})

  // Conversion rate
  const conversionRate = uniqueSessions > 0 ? (totalConversions / uniqueSessions) * 100 : 0

  // Bounce rate (sessions with only 1 page view and < 30s)
  const bounceRate =
    sessions.length > 0
      ? (sessions.filter((s) => s.page_views <= 1 && s.total_time < 30000).length / sessions.length) * 100
      : 0

  // Average session duration
  const avgSessionDuration =
    sessions.length > 0 ? sessions.reduce((sum, s) => sum + (s.total_time || 0), 0) / sessions.length : 0

  return {
    uniqueSessions,
    totalPageViews,
    totalClicks,
    totalConversions,
    conversionRate: Math.round(conversionRate * 100) / 100,
    bounceRate: Math.round(bounceRate * 100) / 100,
    avgSessionDuration: Math.round(avgSessionDuration / 1000), // in seconds
    deviceBreakdown,
    browserBreakdown,
    topPages: Object.entries(topPages)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .slice(0, 10)
      .reduce((acc, [page, count]) => ({ ...acc, [page]: count }), {}),
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    const body = await request.json()

    const { event_type, event_data, session_id } = body

    if (!event_type || !session_id) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert analytics event
    const { error } = await supabase.from("user_analytics").insert({
      session_id,
      event_type,
      event_data: event_data || {},
      page_url: body.page_url || "/",
      user_agent: body.user_agent,
      device_type: body.device_type,
      browser: body.browser,
      country: body.country,
      city: body.city,
    })

    if (error) {
      console.error("Failed to insert analytics event:", error)
      return NextResponse.json({ error: "Failed to track event" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Analytics POST error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient()
    const { searchParams } = new URL(request.url)

    const timeRange = searchParams.get("timeRange") || "24h"
    const page = searchParams.get("page")
    const deviceType = searchParams.get("deviceType")

    // Convert time range to SQL interval
    const intervalMap: Record<string, string> = {
      "1h": "1 hour",
      "24h": "24 hours",
      "7d": "7 days",
      "30d": "30 days",
    }

    const interval = intervalMap[timeRange] || "24 hours"

    // Build base query
    let query = supabase
      .from("user_analytics")
      .select("*")
      .gte("timestamp", new Date(Date.now() - getMilliseconds(interval)).toISOString())

    // Apply filters
    if (page) {
      query = query.eq("page_url", page)
    }

    if (deviceType) {
      query = query.eq("device_type", deviceType)
    }

    const { data: events, error } = await query.order("timestamp", { ascending: false })

    if (error) {
      console.error("Analytics query error:", error)
      return NextResponse.json({ error: "Failed to fetch analytics data" }, { status: 500 })
    }

    // Get session data
    const { data: sessions, error: sessionError } = await supabase
      .from("user_sessions")
      .select("*")
      .gte("start_time", new Date(Date.now() - getMilliseconds(interval)).toISOString())

    if (sessionError) {
      console.error("Session query error:", sessionError)
    }

    // Get conversion data
    const { data: conversions, error: conversionError } = await supabase
      .from("conversions")
      .select("*")
      .gte("timestamp", new Date(Date.now() - getMilliseconds(interval)).toISOString())

    if (conversionError) {
      console.error("Conversion query error:", conversionError)
    }

    // Calculate metrics
    const metrics = calculateMetrics(events || [], sessions || [], conversions || [])

    return NextResponse.json({
      events: events || [],
      sessions: sessions || [],
      conversions: conversions || [],
      metrics,
    })
  } catch (error) {
    console.error("Analytics API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
