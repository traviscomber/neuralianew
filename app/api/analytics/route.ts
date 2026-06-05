import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase-server"

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const body = await request.json()

    const { table, data } = body

    if (!table || !data) {
      return NextResponse.json({ error: "Missing table or data" }, { status: 400 })
    }

    const { data: result, error } = await supabase.from(table).insert(data)

    if (error) {
      console.error(`Analytics insert error for ${table}:`, error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error("Analytics API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const { searchParams } = new URL(request.url)

    const timeRange = searchParams.get("timeRange") || "24h"
    const metric = searchParams.get("metric")
    const page = searchParams.get("page")

    // Convert time range to hours
    const timeRangeMap: Record<string, number> = {
      "1h": 1,
      "24h": 24,
      "7d": 168,
      "30d": 720,
    }

    const hours = timeRangeMap[timeRange] || 24
    const startTime = new Date(Date.now() - hours * 60 * 60 * 1000).toISOString()

    // Get real-time metrics
    const queries = await Promise.allSettled([
      // Active sessions
      supabase
        .from("user_sessions")
        .select("session_id, start_time, device_info, browser_info, location")
        .gte("start_time", startTime)
        .is("end_time", null),

      // Page views
      supabase
        .from("page_views")
        .select("page_url, timestamp, load_time_ms, scroll_depth")
        .gte("timestamp", startTime),

      // User events
      supabase
        .from("user_events")
        .select("event_type, timestamp, page_url")
        .gte("timestamp", startTime),

      // Conversions
      supabase
        .from("conversions")
        .select("conversion_type, timestamp, source_page, conversion_value")
        .gte("timestamp", startTime),

      // Performance metrics
      supabase
        .from("performance_metrics")
        .select("metric_name, metric_value, timestamp")
        .gte("timestamp", startTime),
    ])

    const [sessionsResult, pageViewsResult, eventsResult, conversionsResult, performanceResult] = queries

    // Process results
    const activeSessions = sessionsResult.status === "fulfilled" ? sessionsResult.value.data || [] : []
    const pageViews = pageViewsResult.status === "fulfilled" ? pageViewsResult.value.data || [] : []
    const events = eventsResult.status === "fulfilled" ? eventsResult.value.data || [] : []
    const conversions = conversionsResult.status === "fulfilled" ? conversionsResult.value.data || [] : []
    const performance = performanceResult.status === "fulfilled" ? performanceResult.value.data || [] : []

    // Calculate metrics
    const metrics = {
      activeSessions: activeSessions.length,
      totalPageViews: pageViews.length,
      totalEvents: events.length,
      totalConversions: conversions.length,
      conversionRate: activeSessions.length > 0 ? (conversions.length / activeSessions.length) * 100 : 0,
      avgLoadTime:
        pageViews.length > 0 ? pageViews.reduce((sum, pv) => sum + (pv.load_time_ms || 0), 0) / pageViews.length : 0,
      avgScrollDepth:
        pageViews.length > 0 ? pageViews.reduce((sum, pv) => sum + (pv.scroll_depth || 0), 0) / pageViews.length : 0,
    }

    // Device breakdown
    const deviceBreakdown = activeSessions.reduce((acc: Record<string, number>, session) => {
      const deviceType = session.device_info?.type || "unknown"
      acc[deviceType] = (acc[deviceType] || 0) + 1
      return acc
    }, {})

    // Browser breakdown
    const browserBreakdown = activeSessions.reduce((acc: Record<string, number>, session) => {
      const browserName = session.browser_info?.name || "unknown"
      acc[browserName] = (acc[browserName] || 0) + 1
      return acc
    }, {})

    // Top pages
    const topPages = pageViews.reduce((acc: Record<string, number>, pv) => {
      acc[pv.page_url] = (acc[pv.page_url] || 0) + 1
      return acc
    }, {})

    const sortedPages = Object.entries(topPages)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .slice(0, 10)
      .map(([url, count]) => ({ url, count }))

    // Event types breakdown
    const eventTypes = events.reduce((acc: Record<string, number>, event) => {
      acc[event.event_type] = (acc[event.event_type] || 0) + 1
      return acc
    }, {})

    // Conversion types breakdown - sort by count descending
    const conversionTypesObj = conversions.reduce((acc: Record<string, number>, conversion) => {
      acc[conversion.conversion_type] = (acc[conversion.conversion_type] || 0) + 1
      return acc
    }, {})

    const conversionTypes = Object.entries(conversionTypesObj)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .reduce((acc, [type, count]) => ({ ...acc, [type]: count }), {})

    // Performance metrics breakdown
    const performanceMetrics = performance.reduce(
      (acc: Record<string, number[]>, metric) => {
        if (!acc[metric.metric_name]) acc[metric.metric_name] = []
        acc[metric.metric_name].push(metric.metric_value)
        return acc
      },
      {} as Record<string, number[]>,
    )

    // Calculate average performance metrics
    const avgPerformanceMetrics = Object.entries(performanceMetrics).reduce(
      (acc, [name, values]) => {
        acc[name] = values.reduce((sum, val) => sum + val, 0) / values.length
        return acc
      },
      {} as Record<string, number>,
    )

    // Location breakdown
    const locationBreakdown = activeSessions.reduce((acc: Record<string, number>, session) => {
      const country = session.location?.country || "unknown"
      acc[country] = (acc[country] || 0) + 1
      return acc
    }, {})

    return NextResponse.json({
      metrics,
      deviceBreakdown,
      browserBreakdown,
      topPages: sortedPages,
      eventTypes,
      conversionTypes,
      performanceMetrics: avgPerformanceMetrics,
      locationBreakdown,
      timeRange,
      activeSessions: activeSessions.map((session) => ({
        session_id: session.session_id,
        start_time: session.start_time,
        device_type: session.device_info?.type,
        browser: session.browser_info?.name,
        country: session.location?.country,
      })),
    })
  } catch (error) {
    console.error("Analytics API GET error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
