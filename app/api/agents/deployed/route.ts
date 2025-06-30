import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase-server"

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient() // now cookie-aware

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data, error } = await supabase
      .from("deployed_agents")
      .select("*")
      .eq("user_id", user.id)
      .order("deployed_at", { ascending: false })

    if (error) {
      console.error("Fetch deployed agents error:", error)
      return NextResponse.json({ error: "Failed to fetch deployed agents" }, { status: 500 })
    }

    return NextResponse.json({ success: true, agents: data ?? [] })
  } catch (err) {
    console.error("Get deployed agents error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
