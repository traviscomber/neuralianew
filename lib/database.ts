import { supabase } from "./supabase"
import type { Database } from "@/types/supabase"

type Tables = Database["public"]["Tables"]
type AIAgent = Tables["ai_agents"]["Row"]
type Profile = Tables["profiles"]["Row"]
type DeployedAgent = Tables["deployed_agents"]["Row"]

export async function getAIAgents(): Promise<AIAgent[]> {
  const { data, error } = await supabase.from("ai_agents").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching AI agents:", error)
    return []
  }

  return data || []
}

export async function getUserProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

  if (error) {
    console.error("Error fetching user profile:", error)
    return null
  }

  return data
}

export async function createUserProfile(userId: string, email: string, fullName?: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from("profiles")
    .insert({
      id: userId,
      email,
      full_name: fullName,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single()

  if (error) {
    console.error("Error creating user profile:", error)
    return null
  }

  return data
}

export async function deployAgent(userId: string, agentId: string): Promise<DeployedAgent | null> {
  const { data, error } = await supabase
    .from("deployed_agents")
    .insert({
      user_id: userId,
      agent_id: agentId,
      deployment_status: "active",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single()

  if (error) {
    console.error("Error deploying agent:", error)
    return null
  }

  return data
}

export async function getUserDeployedAgents(userId: string): Promise<DeployedAgent[]> {
  const { data, error } = await supabase
    .from("deployed_agents")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching deployed agents:", error)
    return []
  }

  return data || []
}
