import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const conversionData = {
      session_id: body.session_id,
      user_id: body.user_id || null,
      conversion_type: body.conversion_type,
      conversion_value: body.conversion_value || null,
      source_page: body.source_page,
      funnel_step: body.funnel_step,
      timestamp: body.timestamp,
      user_data: body.user_data || {},
    }

    const { data, error } = await supabase.from("conversions").insert([conversionData])

    if (error) {
      console.error("Conversion insert error:", error)
      return NextResponse.json({ error: "Failed to save conversion" }, { status: 500 })
    }

    // Update session conversion count
    await updateSessionConversions(body.session_id)

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Conversion API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const timeRange = searchParams.get("timeRange") || "24h"
    const conversionType = searchParams.get("conversionType")
    const sourcePage = searchParams.get("sourcePage")

    let query = supabase.from("conversions").select("*").order("timestamp", { ascending: false })

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

    if (conversionType) {
      query = query.eq("conversion_type", conversionType)
    }

    if (sourcePage) {
      query = query.eq("source_page", sourcePage)
    }

    const { data, error } = await query.limit(1000)

    if (error) {
      return NextResponse.json({ error: "Failed to fetch conversions" }, { status: 500 })
    }

    // Process conversion data
    const processedData = processConversionData(data)

    return NextResponse.json({
      success: true,
      data: processedData,
      raw: data,
    })
  } catch (error) {
    console.error("Conversion GET error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

async function updateSessionConversions(sessionId: string) {
  try {
    const { data: session } = await supabase
      .from("user_sessions")
      .select("conversion_count")
      .eq("session_id", sessionId)
      .single()

    if (session) {
      await supabase
        .from("user_sessions")
        .update({
          conversion_count: (session.conversion_count || 0) + 1,
        })
        .eq("session_id", sessionId)
    }
  } catch (error) {
    console.error("Session conversion update error:", error)
  }
}

function processConversionData(data: any[]) {
  const processed = {
    totalConversions: data.length,
    conversionsByType: {},
    conversionsByPage: {},
    conversionsByFunnelStep: {},
    conversionRate: 0,
    averageTimeToConversion: 0,
    topConvertingPages: {},
    conversionTrends: [],
  }

  data.forEach((conversion) => {
    // Conversions by type
    const type = conversion.conversion_type
    processed.conversionsByType[type] = (processed.conversionsByType[type] || 0) + 1

    // Conversions by page
    const page = conversion.source_page
    processed.conversionsByPage[page] = (processed.conversionsByPage[page] || 0) + 1

    // Conversions by funnel step
    const step = conversion.funnel_step
    processed.conversionsByFunnelStep[step] = (processed.conversionsByFunnelStep[step] || 0) + 1

    // Top converting pages
    processed.topConvertingPages[page] = (processed.topConvertingPages[page] || 0) + 1
  })

  // Calculate conversion trends (hourly)
  const hourlyConversions = Array(24).fill(0)
  data.forEach((conversion) => {
    const hour = new Date(conversion.timestamp).getHours()
    hourlyConversions[hour]++
  })

  processed.conversionTrends = hourlyConversions.map((count, hour) => ({
    hour,
    conversions: count,
  }))

  return processed
}
