/* --------------------------------------------------------------------------
   Central Supabase helper with proper singleton pattern
   -------------------------------------------------------------------------- */

import { createClient as supabaseCreateClient, createClientComponentClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

/** Resolve credentials from env – works both client & server side. */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/** Global singleton instances */
let _browserClient: ReturnType<typeof supabaseCreateClient> | undefined = undefined
let _serverClient: ReturnType<typeof supabaseCreateClient> | undefined = undefined
let supabaseInstance: ReturnType<typeof createClientComponentClient> | null = null

/**
 * Create a **new** Supabase client.
 * Use this when you explicitly need a fresh client (e.g. per request).
 */
export function createClient() {
  return supabaseCreateClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      flowType: "pkce",
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
export function getSupabase() {
  if (!supabaseInstance) {
    supabaseInstance = createClientComponentClient()
  }
  return supabaseInstance
}

export const supabase = typeof window !== "undefined" ? getBrowserClient() : createServerClient()
export default supabase

/** ---------------------------------------------------------------
 *  High-level helpers that the rest of the app relies on
 *  ------------------------------------------------------------- */
const getClient = () => (typeof window !== "undefined" ? getBrowserClient() : createServerClient())

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

  /** Get the Supabase client for direct use */
  getClient,
}
