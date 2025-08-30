/* --------------------------------------------------------------------------
   Central Supabase helper with proper singleton pattern
   -------------------------------------------------------------------------- */

import { createClient as supabaseCreateClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

/** Resolve credentials from env – works both client & server side. */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/** Global singleton instances */
let _browserClient: ReturnType<typeof supabaseCreateClient> | undefined = undefined
let _serverClient: ReturnType<typeof supabaseCreateClient> | undefined = undefined

/**
 * Create a **new** Supabase client.
 * Use this when you explicitly need a fresh client (e.g. per request).
 */
export function createClient() {
  return supabaseCreateClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  })
}

/**
 * Get the singleton browser client
 */
function getBrowserClient() {
  if (typeof window === "undefined") {
    throw new Error("getBrowserClient() can only be called on the client side")
  }

  if (!_browserClient) {
    _browserClient = createClient()
  }

  return _browserClient
}

/**
 * Server-side helper for Route Handlers / Server Actions.
 */
export function createServerClient() {
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!_serverClient) {
    _serverClient = supabaseCreateClient<Database>(supabaseUrl, serviceRole || supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
      global: {
        headers: { "X-Client-Environment": "server" },
      },
    })
  }

  return _serverClient
}

/**
 * Main export - returns the appropriate client based on environment
 */
export const supabase = typeof window !== "undefined" ? getBrowserClient() : createServerClient()

function getClient() {
  return typeof window !== "undefined" ? getBrowserClient() : createServerClient()
}

/** ---------------------------------------------------------------
 *  High-level helpers that the rest of the app relies on
 *  ------------------------------------------------------------- */
export const dbHelpers = {
  /** Return all AI agents (newest first). */
  async getAIAgents() {
    const { data, error } = await getClient().from("ai_agents").select("*").order("created_at", { ascending: false })

    if (error) throw error
    return data
  },

  /** Return agents the given user has deployed (newest first). */
  async getUserDeployedAgents(userId: string) {
    const { data, error } = await getClient()
      .from("deployed_agents")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) throw error
    return data
  },

  /** Insert a new deployed agent row and return it. */
  async deployAgent(userId: string, agentData: any) {
    const { data, error } = await getClient()
      .from("deployed_agents")
      .insert({
        user_id: userId,
        agent_id: agentData.id,
        agent_name: agentData.name,
        agent_description: agentData.description || null,
        agent_type: agentData.category,
        status: "trial",
        deployment_date: new Date().toISOString(),
        trial_start_date: new Date().toISOString(),
        trial_end_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  /** Remove a deployed agent */
  async removeDeployedAgent(userId: string, agentId: string) {
    const { error } = await getClient().from("deployed_agents").delete().eq("user_id", userId).eq("agent_id", agentId)

    if (error) throw error
    return true
  },

  /** Create a new profile */
  async createProfile(userId: string, profileData: any) {
    const { data, error } = await getClient()
      .from("profiles")
      .insert({
        id: userId,
        ...profileData,
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  /** Get user profile */
  async getProfile(userId: string) {
    const { data, error } = await getClient().from("profiles").select("*").eq("id", userId).single()

    if (error) throw error
    return data
  },

  /** Create a purchase record */
  async createPurchase(userId: string, cartItems: any[], total: number) {
    const { data, error } = await getClient()
      .from("purchases")
      .insert({
        user_id: userId,
        items: cartItems,
        total_amount: total,
        status: "completed",
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  /** Get user purchases */
  async getUserPurchases(userId: string) {
    const { data, error } = await getClient()
      .from("purchases")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) throw error
    return data
  },

  /** Save conversation */
  async saveConversation(userId: string, agentType: string, messages: any[]) {
    const { data, error } = await getClient()
      .from("chat_conversations")
      .insert({
        user_id: userId,
        chat_type: "agent",
        specific_agent: agentType,
        messages: messages,
        message_count: messages.length,
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  /** Get conversation history */
  async getConversationHistory(userId: string, agentType: string, limit = 50) {
    const { data, error } = await getClient()
      .from("chat_conversations")
      .select("*")
      .eq("user_id", userId)
      .eq("specific_agent", agentType)
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) throw error
    return data
  },

  /** Update user preferences */
  async updateUserPreferences(userId: string, preferences: any) {
    const { data, error } = await getClient()
      .from("user_preferences")
      .upsert({
        user_id: userId,
        preferred_name: preferences.preferred_name,
        communication_style: preferences.communication_style,
        agent_preferences: preferences.agent_preferences,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  /** Get user preferences */
  async getUserPreferences(userId: string) {
    const { data, error } = await getClient().from("user_preferences").select("*").eq("user_id", userId).single()

    if (error && error.code !== "PGRST116") throw error // PGRST116 is "not found"
    return data
  },

  /** Get the Supabase client for direct use */
  getClient,
}

/** Default export kept for backward compatibility. */
export default supabase
