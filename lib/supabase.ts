import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Get environment variables with fallbacks
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

// Only throw error in production or when actually using the client
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase environment variables not found, using fallback configuration")
    // Return a mock client for development
    return null
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  })
}

const createSupabaseAdminClient = () => {
  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn("Supabase admin environment variables not found")
    return null
  }

  return createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

// Client-side Supabase client (browser)
export const supabase = createSupabaseClient()

// Server-side Supabase client with service role
export const supabaseAdmin = createSupabaseAdminClient()

// Database helper functions with null checks
export const dbHelpers = {
  async createProfile(userId: string, email: string, fullName?: string) {
    if (!supabaseAdmin) {
      throw new Error("Supabase admin client not available")
    }

    const { data, error } = await supabaseAdmin
      .from("profiles")
      .insert({
        id: userId,
        email,
        full_name: fullName,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getProfile(userId: string) {
    if (!supabaseAdmin) {
      throw new Error("Supabase admin client not available")
    }

    const { data, error } = await supabaseAdmin.from("profiles").select("*").eq("id", userId).single()

    if (error && error.code !== "PGRST116") throw error
    return data
  },

  async deployAgent(userId: string, agentId: string, configuration: any) {
    if (!supabaseAdmin) {
      throw new Error("Supabase admin client not available")
    }

    const { data, error } = await supabaseAdmin
      .from("deployed_agents")
      .insert({
        user_id: userId,
        agent_id: agentId,
        agent_name: configuration.name || "Unnamed Agent",
        agent_description: configuration.description,
        agent_type: configuration.type || "general",
        icon: configuration.icon || "🤖",
        status: "active",
        configuration: configuration,
        is_trial: true,
        trial_ends_at: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        payment_status: "trial",
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getUserDeployedAgents(userId: string) {
    if (!supabaseAdmin) {
      throw new Error("Supabase admin client not available")
    }

    const { data, error } = await supabaseAdmin
      .from("deployed_agents")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) throw error
    return data || []
  },

  async removeDeployedAgent(userId: string, agentId: string) {
    if (!supabaseAdmin) {
      throw new Error("Supabase admin client not available")
    }

    const { error } = await supabaseAdmin.from("deployed_agents").delete().eq("user_id", userId).eq("agent_id", agentId)

    if (error) throw error
    return true
  },

  async createPurchase(userId: string, items: any[], totalAmount: number) {
    if (!supabaseAdmin) {
      throw new Error("Supabase admin client not available")
    }

    const { data, error } = await supabaseAdmin
      .from("purchases")
      .insert({
        user_id: userId,
        items: items,
        total_amount: totalAmount,
        status: "completed",
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getUserPurchases(userId: string) {
    if (!supabaseAdmin) {
      throw new Error("Supabase admin client not available")
    }

    const { data, error } = await supabaseAdmin
      .from("purchases")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) throw error
    return data || []
  },
}

export default supabase
