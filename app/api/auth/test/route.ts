import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase-server"

export async function GET() {
  try {
    const supabase = createClient()

    // Test 1: Basic connection
    const { data: connectionTest, error: connectionError } = await supabase.from("profiles").select("count").limit(1)

    if (connectionError) {
      return NextResponse.json({
        success: false,
        error: "Database connection failed",
        details: connectionError.message,
      })
    }

    // Test 2: Check if all required tables exist
    const tables = [
      "profiles",
      "ai_agents",
      "ai_systems",
      "chat_conversations",
      "user_analytics",
      "orchestrator_conversations",
      "deployed_agents",
      "user_preferences",
      "error_reports",
    ]

    const tableTests = []
    for (const table of tables) {
      try {
        const { error } = await supabase.from(table).select("*").limit(1)
        tableTests.push({
          table,
          exists: !error,
          error: error?.message,
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
    const envCheck = {
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      supabaseServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      openaiKey: !!process.env.OPENAI_API_KEY,
      siteUrl: !!process.env.NEXT_PUBLIC_SITE_URL,
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      tests: {
        connection: { success: true, message: "Database connected successfully" },
        tables: tableTests,
        environment: envCheck,
      },
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Server error",
      details: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
