import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    if (!body.url || !body.timestamp || !Array.isArray(body.metrics)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    // Log the web vitals data (in production, you'd save to database)
    console.log("Web Vitals Report:", {
      url: body.url,
      timestamp: new Date(body.timestamp).toISOString(),
      metrics: body.metrics.map((metric: any) => ({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
      })),
      userAgent: body.userAgent,
      connectionType: body.connectionType,
    })

    // Here you could save to database, send to analytics service, etc.
    // Example: await saveToDatabase(body)
    // Example: await sendToAnalyticsService(body)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing web vitals:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Web Vitals API endpoint",
    endpoints: {
      POST: "Submit web vitals data",
    },
  })
}
