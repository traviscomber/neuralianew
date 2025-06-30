import { createClient as createSupabaseClient, type SupabaseClient } from "@supabase/supabase-js"

/**
 * ---------------------------------------------------------------------
 * Supabase singleton for the browser / server.
 * ---------------------------------------------------------------------
 */
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "Supabase environment variables NEXT_PUBLIC_SUPABASE_URL and " + "NEXT_PUBLIC_SUPABASE_ANON_KEY must be set.",
  )
}

/**
 * Typed helper if you generated types from your DB.
 * Replace `any` with the generated Database interface if available.
 */
export type TypedSupabaseClient = SupabaseClient<any>

/**
 * Factory – returns a **fresh** client.  Useful inside Server Actions or
 * short-lived scripts where you do _not_ want to reuse the singleton.
 */
export function createClient(): SupabaseClient {
  return createSupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}

/**
 * Shared singleton – import `supabase` for the common case where you only need
 * one client instance (e.g. in React Client Components).
 */
export const supabase: SupabaseClient = createClient()

/**
 * ---------------------------------------------------------------------
 * dbHelpers – utility functions used across the app
 * ---------------------------------------------------------------------
 */
export const dbHelpers = {
  supabase,

  async getAIAgents() {
    const { data, error } = await supabase.from("ai_agents").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching AI agents:", error)
      return []
    }
    return data || []
  },

  async deployAgent(userId: string, agentId: string, configuration: Record<string, unknown>) {
    const { data, error } = await supabase
      .from("deployed_agents")
      .insert({
        user_id: userId,
        agent_id: agentId,
        deployment_status: "deploying",
        deployment_progress: 0,
        configuration,
        deployed_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async updateDeploymentStatus(deploymentId: string, status: string, progress?: number | null) {
    const updates: Record<string, unknown> = { deployment_status: status }
    if (typeof progress === "number") updates.deployment_progress = progress
    if (status === "active") updates.activated_at = new Date().toISOString()

    const { error } = await supabase.from("deployed_agents").update(updates).eq("id", deploymentId)

    if (error) throw error
  },

  async getUserDeployedAgents(userId: string) {
    const { data, error } = await supabase
      .from("deployed_agents")
      .select(
        `
        *,
        ai_agents (
          id,
          name,
          type,
          description,
          capabilities,
          pricing
        )
      `,
      )
      .eq("user_id", userId)
      .eq("deployment_status", "active")

    if (error) {
      console.error("Error fetching deployed agents:", error)
      return []
    }
    return data || []
  },

  async saveConversation(userId: string, agentType: string, messages: Array<{ role: string; content: string }>) {
    const { data, error } = await supabase
      .from("chat_conversations")
      .insert({
        user_id: userId,
        agent_type: agentType,
        messages,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getConversationHistory(userId: string, agentType: string, limit = 10) {
    const { data, error } = await supabase
      .from("chat_conversations")
      .select("*")
      .eq("user_id", userId)
      .eq("agent_type", agentType)
      .order("updated_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("Error fetching conversation history:", error)
      return []
    }
    return data || []
  },

  async updateUserPreferences(userId: string, preferences: Record<string, unknown>) {
    const { data, error } = await supabase
      .from("user_preferences")
      .upsert({
        user_id: userId,
        preferences,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getUserPreferences(userId: string) {
    const { data, error } = await supabase.from("user_preferences").select("*").eq("user_id", userId).single()

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching user preferences:", error)
      return null
    }
    return data
  },
}

/** Default export keeps existing import paths working */
export default supabase
