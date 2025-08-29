import { createClient, createServerClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Get environment variables with fallbacks
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dptblcvifavtbvngivkb.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdGJsY3ZpZmF2dGJ2bmdpdmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNzc1MjYsImV4cCI6MjA2Njc1MzUyNn0.GxB1UkdkrNA9Hhz04wRTnkpWZGllwgLrXcde7cEiNZw"
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdGJsY3ZpZmF2dGJ2bmdpdmtiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTE3NzUyNiwiZXhwIjoyMDY2NzUzNTI2fQ.dh6RKDuDSpp18baxBO-D46K4fPGr-7-8H4KMRsmBjyM"

// Client-side Supabase client (browser)
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
})

// Server-side Supabase client with service role
export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

// Export createClient and createServerClient for compatibility
export { createClient, createServerClient }

// Database helper functions
export const dbHelpers = {
  async createProfile(userId: string, email: string, fullName?: string) {
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
    const { data, error } = await supabaseAdmin.from("profiles").select("*").eq("id", userId).single()

    if (error && error.code !== "PGRST116") throw error
    return data
  },

  async deployAgent(userId: string, agentId: string, configuration: any) {
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
    const { data, error } = await supabaseAdmin
      .from("deployed_agents")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) throw error
    return data || []
  },

  async removeDeployedAgent(userId: string, agentId: string) {
    const { error } = await supabaseAdmin.from("deployed_agents").delete().eq("user_id", userId).eq("agent_id", agentId)

    if (error) throw error
    return true
  },

  async createPurchase(userId: string, items: any[], totalAmount: number) {
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
