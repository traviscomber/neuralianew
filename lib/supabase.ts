/* --------------------------------------------------------------------------
   Central Supabase helper
   --------------------------------------------------------------------------
   ‣ createClient()          – returns a new browser-side Supabase client
   ‣ supabase (singleton)    – default browser client (use on the client only)
   ‣ createServerClient()    – re-exported from ./supabase-server for server /
                                route-handler usage
   -------------------------------------------------------------------------- */

import { createClient as supabaseCreateClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

/** Resolve credentials from env – works both client & server side. */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || ""

/** Throw early if something is missing. */
if (!supabaseUrl || !supabaseAnonKey) {
  // NOTE: we guard with typeof window so the browser bundle won’t crash
  if (typeof window === "undefined") {
    throw new Error(
      "Supabase environment variables are not set. " +
        "Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY exist.",
    )
  }
}

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
 * Browser-side singleton so most components can just:
 *   import { supabase } from "@/lib/supabase"
 */
let _browserClient: ReturnType<typeof createClient> | undefined = undefined

export const supabase =
  typeof window !== "undefined"
    ? (_browserClient ??= createClient())
    : // On the server we force the caller to create their own client
      (undefined as never)

/**
 * Server-side helper for Route Handlers / Server Actions.
 * It prefers the Service-Role key (never shipped to the browser), falling
 * back to the anon key when the SR key is not available.
 *
 * Usage (server only):
 *   const supabase = createServerClient()
 */
export function createServerClient() {
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY
  return supabaseCreateClient<Database>(supabaseUrl, serviceRole || supabaseAnonKey, {
    auth: {
      // Server code usually handles its own cookies; no persistence needed
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      // Helpful header for debugging – removed in client bundle tree-shake
      headers: { "X-Client-Environment": "server" },
    },
  })
}

function getClient() {
  // In the browser use the shared singleton, on the server use a fresh client
  return typeof window !== "undefined" ? supabase : createServerClient()
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
      .order("deployed_at", { ascending: false })

    if (error) throw error
    return data
  },

  /** Insert a new deployed agent row and return it. */
  async deployAgent(userId: string, agentData: any) {
    const now = new Date()
    const fiveDays = 5 * 24 * 60 * 60 * 1000

    const { data, error } = await getClient()
      .from("deployed_agents")
      .insert({
        user_id: userId,
        agent_id: agentData.id,
        agent_name: agentData.name,
        agent_description: agentData.description,
        agent_type: agentData.category,
        status: "trial",
        deployed_at: now.toISOString(),
        expires_at: new Date(now.getTime() + fiveDays).toISOString(),
        metadata: agentData,
      })
      .select()
      .single()

    if (error) throw error
    return data
  },
}

/** Default export kept for backward compatibility. */
export default supabase
