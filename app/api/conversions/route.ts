import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase-server"

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    const body = await request.json()

    const { data, error } = await supabase.from("conversions").insert(body)

    if (error) {
      console.error("Conversion insert error:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Conversion API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient()
    const { searchParams } = new URL(request.url)

    const timeRange = searchParams.get("timeRange") || "24h"
    const conversionType = searchParams.get("type")
    const sourcePage = searchParams.get("sourcePage")

    // Convert time range to milliseconds
    const intervalMap: Record<string, number> = {
      "1h": 60 * 60 * 1000,
      "24h": 24 * 60 * 60 * 1000,
      "7d": 7 * 24 * 60 * 60 * 1000,
      "30d": 30 * 24 * 60 * 60 * 1000,
    }

    const interval = intervalMap[timeRange] || 24 * 60 * 60 * 1000
    const startTime = new Date(Date.now() - interval).toISOString()

    // Build conversions query
    let conversionsQuery = supabase.from("conversions").select("*").gte("timestamp", startTime)

    if (conversionType) {
      conversionsQuery = conversionsQuery.eq("conversion_type", conversionType)
    }

    if (sourcePage) {
      conversionsQuery = conversionsQuery.eq("source_page", sourcePage)
    }

    const { data: conversions, error: conversionsError } = await conversionsQuery.order("timestamp", {
      ascending: false,
    })

    if (conversionsError) {
      console.error("Conversions query error:", conversionsError)
      return NextResponse.json({ error: "Failed to fetch conversions" }, { status: 500 })
    }

    // Get session data for conversion rate calculation
    const { data: sessions, error: sessionsError } = await supabase
      .from("user_sessions")
      .select("session_id, start_time")
      .gte("start_time", startTime)

    if (sessionsError) {
      console.error("Sessions query error:", sessionsError)
    }

    // Calculate funnel data
    const { data: funnelData, error: funnelError } = await supabase.rpc("get_funnel_analysis", {
      time_range: `${interval / 1000} seconds`,
    })

    if (funnelError) {
      console.error("Funnel query error:", funnelError)
    }

    // Process conversion data
    const processedData = processConversionData(conversions || [], sessions || [])

    return NextResponse.json({
      conversions: conversions || [],
      funnel: funnelData || [],
      metrics: processedData,
      timeRange,
    })
  } catch (error) {
    console.error("Conversions API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function processConversionData(conversions: any[], sessions: any[]) {
  const totalSessions = sessions.length
  const totalConversions = conversions.length

  // Conversion rate
  const conversionRate = totalSessions > 0 ? (totalConversions / totalSessions) * 100 : 0

  // Conversion types breakdown
  const conversionTypes = conversions.reduce(
    (acc, conversion) => {
      const type = conversion.conversion_type
      acc[type] = (acc[type] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Source pages breakdown
  const sourcePages = conversions.reduce(
    (acc, conversion) => {
      const page = conversion.source_page
      acc[page] = (acc[page] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Conversions by hour
  const conversionsByHour = conversions.reduce(
    (acc, conversion) => {
      const hour = new Date(conversion.timestamp).getHours()
      acc[hour] = (acc[hour] || 0) + 1
      return acc
    },
    {} as Record<number, number>,
  )

  // Fill in missing hours with 0
  for (let i = 0; i < 24; i++) {
    if (!(i in conversionsByHour)) {
      conversionsByHour[i] = 0
    }
  }

  // Average conversion value
  const conversionsWithValue = conversions.filter((c) => c.conversion_value)
  const avgConversionValue =
    conversionsWithValue.length > 0
      ? conversionsWithValue.reduce((sum, c) => sum + c.conversion_value, 0) / conversionsWithValue.length
      : 0

  // Time to conversion (from session start)
  const timeToConversion = conversions
    .map((conversion) => {
      const session = sessions.find((s) => s.session_id === conversion.session_id)
      if (session) {
        const sessionStart = new Date(session.start_time).getTime()
        const conversionTime = new Date(conversion.timestamp).getTime()
        return conversionTime - sessionStart
      }
      return 0
    })
    .filter((time) => time > 0)

  const avgTimeToConversion =
    timeToConversion.length > 0 ? timeToConversion.reduce((sum, time) => sum + time, 0) / timeToConversion.length : 0

  return {
    totalSessions,
    totalConversions,
    conversionRate: Math.round(conversionRate * 100) / 100,
    conversionTypes: Object.entries(conversionTypes)
      .sort(([, a], [, b]) => b - a)
      .reduce((acc, [type, count]) => ({ ...acc, [type]: count }), {}),
    sourcePages: Object.entries(sourcePages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .reduce((acc, [page, count]) => ({ ...acc, [page]: count }), {}),
    conversionsByHour: Object.entries(conversionsByHour)
      .sort(([a], [b]) => Number.parseInt(a) - Number.parseInt(b))
      .map(([hour, count]) => ({ hour: Number.parseInt(hour), count })),
    avgConversionValue: Math.round(avgConversionValue * 100) / 100,
    avgTimeToConversion: Math.round(avgTimeToConversion / 1000), // in seconds
  }
}
