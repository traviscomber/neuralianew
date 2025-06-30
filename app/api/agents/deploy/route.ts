import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  try {
    // Get the authorization header
    const authHeader = request.headers.get("authorization")
    const accessToken = authHeader?.replace("Bearer ", "")

    // Create Supabase client with the access token
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
        global: {
          headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
        },
      },
    )

    // Get the current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Auth error:", userError)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Parse the request body
    const body = await request.json()
    const { agentId, agentType, name, description, configuration } = body

    if (!agentId || !agentType || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if agent is already deployed
    const { data: existingAgent } = await supabase
      .from("deployed_agents")
      .select("id")
      .eq("user_id", user.id)
      .eq("agent_id", agentId)
      .single()

    if (existingAgent) {
      return NextResponse.json({ error: "Agent already deployed" }, { status: 409 })
    }

    // Create deployment record
    const deploymentData = {
      user_id: user.id,
      agent_id: agentId,
      agent_type: agentType,
      name,
      description,
      status: "active" as const,
      deployment_url: `https://neuralia.ai/chat/${agentType}`,
      configuration: configuration || {},
      performance_metrics: {
        conversations: 0,
        messages: 0,
        avgResponseTime: 0,
        satisfaction: 0,
      },
    }

    const { data: deployedAgent, error: deployError } = await supabase
      .from("deployed_agents")
      .insert(deploymentData)
      .select()
      .single()

    if (deployError) {
      console.error("Deploy error:", deployError)
      return NextResponse.json({ error: "Failed to deploy agent" }, { status: 500 })
    }

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
