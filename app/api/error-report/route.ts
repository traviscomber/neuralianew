import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { error, metadata, user_id } = body

    const supabase = createServerClient()

    const { data, error: insertError } = await supabase
      .from("error_reports")
      .insert({
        error_message: error?.message || "Unknown error",
        error_stack: error?.stack || null,
        metadata: metadata || {},
        user_id: user_id || null,
        created_at: new Date().toISOString(),
      })
      .select()

    if (insertError) {
      console.error("Failed to insert error report:", insertError)
      return NextResponse.json({ error: "Failed to save error report", details: insertError }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error in error-report API:", error)
    return NextResponse.json({ error: "Internal server error", details: error }, { status: 500 })
  }
}
