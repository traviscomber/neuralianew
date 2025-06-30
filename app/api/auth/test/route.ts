import { NextResponse } from "next/server"
import { createServiceRoleClient } from "@/lib/supabase-server"

export async function GET() {
  try {
    const supabase = createServiceRoleClient()

    // Test 1: Basic connection
    const { data: connectionTest, error: connectionError } = await supabase.from("profiles").select("count").limit(1)

    if (connectionError) {
      return NextResponse.json({
        success: false,
        error: "Database connection failed",
        details: connectionError.message,
      })
    }

    // Test 2: Check if tables exist
    const tables = ["profiles", "ai_agents", "chat_conversations", "user_analytics"]
    const tableTests = []

    for (const table of tables) {
      try {
        const { error } = await supabase.from(table).select("*").limit(1)
        tableTests.push({
          table,
          exists: !error,
          error: error?.message || null,
        })
      } catch (err) {
        tableTests.push({
          table,
          exists: false,
          error: err instanceof Error ? err.message : "Unknown error",
        })
      }
    }

    // Test 3: Environment variables
    const envVars = {
      NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      SUPABASE_ANON_KEY: !!process.env.SUPABASE_ANON_KEY,
      SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      NEXT_PUBLIC_SITE_URL: !!process.env.NEXT_PUBLIC_SITE_URL,
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      tests: {
        connection: { success: true, message: "Database connection successful" },
        tables: tableTests,
        environment: envVars,
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Test failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
