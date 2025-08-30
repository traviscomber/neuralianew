import { createClient as createSupabaseClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side Supabase client
export const createClient = () => {
  return createSupabaseClient<Database>(supabaseUrl, supabaseAnonKey)
}

// Client-side Supabase client - REQUIRED NAMED EXPORT
export const supabase = createClient()

// Server-side Supabase client
export const createServerClient = () => {
  return createSupabaseClient<Database>(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

// Database helper functions
export const dbHelpers = {
  // User profile operations
  async createProfile(userId: string, profileData: any) {
    const client = createClient()
    return await client.from("profiles").insert({
      id: userId,
      ...profileData,
    })
  },

  async getProfile(userId: string) {
    const client = createClient()
    return await client.from("profiles").select("*").eq("id", userId).single()
  },

  async updateProfile(userId: string, updates: any) {
    const client = createClient()
    return await client.from("profiles").update(updates).eq("id", userId)
  },

  // AI Agents operations
  async createAgent(agentData: any) {
    const client = createClient()
    return await client.from("ai_agents").insert(agentData)
  },

  async getUserAgents(userId: string) {
    const client = createClient()
    return await client.from("ai_agents").select("*").eq("user_id", userId)
  },

  async updateAgent(agentId: string, updates: any) {
    const client = createClient()
    return await client.from("ai_agents").update(updates).eq("id", agentId)
  },

  async deleteAgent(agentId: string) {
    const client = createClient()
    return await client.from("ai_agents").delete().eq("id", agentId)
  },

  // AI Systems operations
  async createSystem(systemData: any) {
    const client = createClient()
    return await client.from("ai_systems").insert(systemData)
  },

  async getUserSystems(userId: string) {
    const client = createClient()
    return await client.from("ai_systems").select("*").eq("user_id", userId)
  },

  async updateSystem(systemId: string, updates: any) {
    const client = createClient()
    return await client.from("ai_systems").update(updates).eq("id", systemId)
  },

  async deleteSystem(systemId: string) {
    const client = createClient()
    return await client.from("ai_systems").delete().eq("id", systemId)
  },

  // Chat conversations operations
  async createConversation(conversationData: any) {
    const client = createClient()
    return await client.from("chat_conversations").insert(conversationData)
  },

  async getUserConversations(userId: string) {
    const client = createClient()
    return await client
      .from("chat_conversations")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
  },

  async updateConversation(conversationId: string, updates: any) {
    const client = createClient()
    return await client.from("chat_conversations").update(updates).eq("id", conversationId)
  },

  async deleteConversation(conversationId: string) {
    const client = createClient()
    return await client.from("chat_conversations").delete().eq("id", conversationId)
  },

  // User analytics operations
  async createAnalytics(analyticsData: any) {
    const client = createClient()
    return await client.from("user_analytics").insert(analyticsData)
  },

  async getUserAnalytics(userId: string) {
    const client = createClient()
    return await client
      .from("user_analytics")
      .select("*")
      .eq("user_id", userId)
      .order("period_start", { ascending: false })
  },

  async updateAnalytics(analyticsId: string, updates: any) {
    const client = createClient()
    return await client.from("user_analytics").update(updates).eq("id", analyticsId)
  },

  // Deployed agents operations
  async deployAgent(deploymentData: any) {
    const client = createClient()
    return await client.from("deployed_agents").insert(deploymentData)
  },

  async getUserDeployedAgents(userId: string) {
    const client = createClient()
    return await client
      .from("deployed_agents")
      .select("*")
      .eq("user_id", userId)
      .order("deployment_date", { ascending: false })
  },

  async updateDeployedAgent(deploymentId: string, updates: any) {
    const client = createClient()
    return await client.from("deployed_agents").update(updates).eq("id", deploymentId)
  },

  async deleteDeployedAgent(deploymentId: string) {
    const client = createClient()
    return await client.from("deployed_agents").delete().eq("id", deploymentId)
  },

  // Error reporting
  async reportError(errorData: any) {
    const client = createClient()
    return await client.from("error_reports").insert(errorData)
  },

  // Health check
  async healthCheck() {
    const client = createClient()
    return await client.from("profiles").select("count").limit(1)
  },
}

// Alias for backward compatibility
export const dbService = dbHelpers

export default supabase
