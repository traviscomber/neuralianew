import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  try {
    // Create Supabase client with proper cookie handling
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: any) {
            cookieStore.set({ name, value: "", ...options })
          },
        },
      },
    )

    // Get the current user from session
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      console.error("Auth error:", authError)
      return NextResponse.json({ error: "Unauthorized - Please sign in again" }, { status: 401 })
    }

    const body = await request.json()
    const { agentId, agentType, name, description, configuration } = body

    if (!agentId || !agentType || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if agent is already deployed for this user
    const { data: existingAgent } = await supabase
      .from("deployed_agents")
      .select("id, status")
      .eq("user_id", user.id)
      .eq("agent_id", agentId)
      .maybeSingle()

    if (existingAgent) {
      if (existingAgent.status === "active") {
        return NextResponse.json({ error: "Agent already deployed" }, { status: 400 })
      } else if (existingAgent.status === "deploying") {
        return NextResponse.json({ error: "Agent is currently deploying" }, { status: 400 })
      }
    }

    // Create deployment record with "active" status (simulating instant deployment)
    const deploymentData = {
      user_id: user.id,
      agent_id: agentId,
      agent_type: agentType,
      name,
      description: description || "",
      status: "active" as const,
      deployment_url: `https://neuralia.ai/agents/${agentId}`,
      configuration: configuration || {},
      performance_metrics: {
        uptime: "100%",
        response_time: "< 1s",
        success_rate: "99.9%",
        last_health_check: new Date().toISOString(),
      },
    }

    const { data: deployedAgent, error: insertError } = await supabase
      .from("deployed_agents")
      .insert(deploymentData)
      .select()
      .single()

    if (insertError) {
      console.error("Database insert error:", insertError)
      return NextResponse.json({ error: "Failed to create deployment record" }, { status: 500 })
    }

    // Return success response
    return NextResponse.json({
      success: true,
      agent: deployedAgent,
      message: "Agent deployed successfully",
    })
  } catch (error) {
    console.error("Deployment error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
