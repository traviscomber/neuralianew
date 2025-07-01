import { createClient as createSupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Singleton pattern for browser client
let supabaseInstance: ReturnType<typeof createSupabaseClient> | null = null

export function createClient() {
  if (!supabaseInstance) {
    supabaseInstance = createSupabaseClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  }
  return supabaseInstance
}

// Server-side client with service role key
export function createServerClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!serviceRoleKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY")
  }

  return createSupabaseClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

// Export the singleton instance directly
export const supabase = createClient()

// Database helper functions
export const dbHelpers = {
  async getAIAgents() {
    const { data, error } = await supabase.from("ai_agents").select("*")
    if (error) throw error
    return data
  },

  async deployAgent(userId: string, agentId: string, configuration: any) {
    const { data, error } = await supabase
      .from("ai_agents")
      .insert({
        user_id: userId,
        agent_type: agentId,
        name: configuration.name,
        description: configuration.description,
        configuration,
        status: "active",
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async updateDeploymentStatus(deploymentId: string, status: string, progress?: number) {
    const { data, error } = await supabase
      .from("ai_agents")
      .update({ status, ...(progress && { progress }) })
      .eq("id", deploymentId)
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getUserDeployedAgents(userId: string) {
    const { data, error } = await supabase.from("ai_agents").select("*").eq("user_id", userId).eq("status", "active")

    if (error) throw error
    return data
  },

  async saveConversation(userId: string, agentType: string, messages: any[]) {
    const conversations = messages.map((msg) => ({
      user_id: userId,
      agent_type: agentType,
      user_message: msg.sender === "user" ? msg.content : null,
      agent_response: msg.sender === "agent" ? msg.content : null,
      created_at: msg.timestamp,
    }))

    const { data, error } = await supabase.from("chat_conversations").insert(conversations).select()

    if (error) throw error
    return data
  },

  async getConversationHistory(userId: string, agentType: string, limit = 50) {
    const { data, error } = await supabase
      .from("chat_conversations")
      .select("*")
      .eq("user_id", userId)
      .eq("agent_type", agentType)
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) throw error
    return data
  },

  async updateUserPreferences(userId: string, preferences: any) {
    const { data, error } = await supabase
      .from("user_preferences")
      .upsert({
        user_id: userId,
        ...preferences,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getUserPreferences(userId: string) {
    const { data, error } = await supabase.from("user_preferences").select("*").eq("user_id", userId).single()

    if (error && error.code !== "PGRST116") throw error
    return data
  },

  async getProfile(userId: string) {
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

    if (error && error.code !== "PGRST116") throw error
    return data
  },

  async createProfile(userId: string, email: string, data: any = {}) {
    const { data: profile, error } = await supabase
      .from("profiles")
      .insert({
        id: userId,
        email,
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error
    return profile
  },
}

// Re-export for compatibility
export { supabase as default }
