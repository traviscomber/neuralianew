import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dptblcvifavtbvngivkb.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdGJsY3ZpZmF2dGJ2bmdpdmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNzc1MjYsImV4cCI6MjA2Njc1MzUyNn0.GxB1UkdkrNA9Hhz04wRTnkpWZGllwgLrXcde7cEiNZw"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
})

// Database helper functions
export const dbService = {
  // User profiles
  async createProfile(userId: string, profileData: any) {
    const { data, error } = await supabase.from("profiles").insert({
      id: userId,
      ...profileData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    return { data, error }
  },

  async getProfile(userId: string) {
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()
    return { data, error }
  },

  async updateProfile(userId: string, updates: any) {
    const { data, error } = await supabase
      .from("profiles")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId)
    return { data, error }
  },

  // Deployed agents
  async deployAgent(userId: string, agentData: any) {
    const trialEndDate = new Date()
    trialEndDate.setDate(trialEndDate.getDate() + 5)

    const { data, error } = await supabase.from("deployed_agents").insert({
      user_id: userId,
      agent_name: agentData.id,
      agent_description: agentData.description,
      agent_type: agentData.category,
      status: "trial",
      deployment_date: new Date().toISOString(),
      trial_start_date: new Date().toISOString(),
      trial_end_date: trialEndDate.toISOString(),
      price: agentData.price,
    })
    return { data, error }
  },

  async getDeployedAgents(userId: string) {
    const { data, error } = await supabase.from("deployed_agents").select("*").eq("user_id", userId)
    return { data, error }
  },

  async removeDeployedAgent(userId: string, agentName: string) {
    const { data, error } = await supabase
      .from("deployed_agents")
      .delete()
      .eq("user_id", userId)
      .eq("agent_name", agentName)
    return { data, error }
  },

  // Chat conversations
  async saveConversation(userId: string, conversationData: any) {
    const { data, error } = await supabase.from("chat_conversations").insert({
      user_id: userId,
      ...conversationData,
      created_at: new Date().toISOString(),
    })
    return { data, error }
  },

  async getConversations(userId: string) {
    const { data, error } = await supabase
      .from("chat_conversations")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
    return { data, error }
  },

  // User analytics
  async trackUserActivity(userId: string, activityData: any) {
    const { data, error } = await supabase.from("user_analytics").insert({
      user_id: userId,
      ...activityData,
      timestamp: new Date().toISOString(),
    })
    return { data, error }
  },

  // Purchases
  async createPurchase(userId: string, purchaseData: any) {
    const { data, error } = await supabase.from("purchases").insert({
      user_id: userId,
      ...purchaseData,
      created_at: new Date().toISOString(),
    })
    return { data, error }
  },

  async getPurchases(userId: string) {
    const { data, error } = await supabase.from("purchases").select("*").eq("user_id", userId)
    return { data, error }
  },
}
