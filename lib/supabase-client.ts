import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/types/supabase"

// Create a singleton client for browser use
let supabaseClient: ReturnType<typeof createClientComponentClient<Database>> | null = null

export function getSupabaseClient() {
  if (!supabaseClient) {
    supabaseClient = createClientComponentClient<Database>()
  }
  return supabaseClient
}

// Helper functions for common operations
export async function getCurrentUser() {
  const supabase = getSupabaseClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    console.error("Error getting current user:", error)
    return null
  }

  return user
}

export async function getUserProfile(userId: string) {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

  if (error) {
    console.error("Error getting user profile:", error)
    return null
  }

  return data
}

export async function getDeployedAgents(userId: string) {
  const supabase = getSupabaseClient()

  console.log("Fetching deployed agents for user:", userId)

  const { data, error } = await supabase
    .from("deployed_agents")
    .select(`
      id,
      user_id,
      agent_id,
      name,
      agent_name,
      description,
      agent_description,
      agent_type,
      icon,
      status,
      deployment_date,
      trial_start,
      trial_end,
      created_at,
      updated_at
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching deployed agents:", error)
    throw error
  }

  console.log("Found deployed agents:", data?.length || 0)
  return data || []
}

export async function deployAgentTrial(
  userId: string,
  agentData: {
    id: string
    name: string
    description?: string
    category?: string
    icon?: string
    price?: number
  },
) {
  const supabase = getSupabaseClient()

  const now = new Date()
  const trialEnd = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000) // +5 days

  const { data, error } = await supabase
    .from("deployed_agents")
    .insert({
      user_id: userId,
      agent_id: agentData.id,
      name: agentData.name,
      agent_name: agentData.name,
      description: agentData.description || "AI Executive Agent",
      agent_description: agentData.description || "AI Executive Agent",
      agent_type: "neural-executive",
      icon: agentData.icon || "🤖",
      status: "trial",
      deployment_date: now.toISOString(),
      trial_start: now.toISOString(),
      trial_end: trialEnd.toISOString(),
    })
    .select()
    .single()

  if (error) {
    console.error("Error deploying agent:", error)
    throw error
  }

  return data
}
