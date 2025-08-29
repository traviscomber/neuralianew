import { supabaseAdmin } from "./supabase"
import type { Database } from "@/types/supabase"

type Profile = Database["public"]["Tables"]["profiles"]["Row"]
type DeployedAgent = Database["public"]["Tables"]["deployed_agents"]["Row"]
type Purchase = Database["public"]["Tables"]["purchases"]["Row"]

export class DatabaseService {
  static async createProfile(userId: string, email: string, fullName?: string): Promise<Profile> {
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
  }

  static async getProfile(userId: string): Promise<Profile | null> {
    const { data, error } = await supabaseAdmin.from("profiles").select("*").eq("id", userId).single()

    if (error && error.code !== "PGRST116") throw error
    return data
  }

  static async updateProfile(userId: string, updates: Partial<Profile>): Promise<Profile> {
    const { data, error } = await supabaseAdmin
      .from("profiles")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId)
      .select()
      .single()

    if (error) throw error
    return data
  }

  static async deployAgent(userId: string, agentId: string, configuration: any): Promise<DeployedAgent> {
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
  }

  static async getUserDeployedAgents(userId: string): Promise<DeployedAgent[]> {
    const { data, error } = await supabaseAdmin
      .from("deployed_agents")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) throw error
    return data || []
  }

  static async removeDeployedAgent(userId: string, agentId: string): Promise<boolean> {
    const { error } = await supabaseAdmin.from("deployed_agents").delete().eq("user_id", userId).eq("agent_id", agentId)

    if (error) throw error
    return true
  }

  static async createPurchase(userId: string, items: any[], totalAmount: number): Promise<Purchase> {
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
  }

  static async getUserPurchases(userId: string): Promise<Purchase[]> {
    const { data, error } = await supabaseAdmin
      .from("purchases")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) throw error
    return data || []
  }

  static async createChatConversation(userId: string, agentId: string, title?: string) {
    const { data, error } = await supabaseAdmin
      .from("chat_conversations")
      .insert({
        user_id: userId,
        agent_id: agentId,
        title: title || "New Conversation",
        status: "active",
      })
      .select()
      .single()

    if (error) throw error
    return data
  }

  static async getUserConversations(userId: string) {
    const { data, error } = await supabaseAdmin
      .from("chat_conversations")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) throw error
    return data || []
  }
}

export const dbService = DatabaseService
