import { supabase } from "@/lib/supabase"

export interface Profile {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  company_name?: string
  company_size?: string
  industry?: string
  role: string
  subscription_plan?: string
  total_agents?: number
  total_systems?: number
  total_conversations?: number
  is_active: boolean
  preferences?: any
  created_at: string
  updated_at: string
}

export interface AIAgent {
  id: string
  user_id: string
  name: string
  description?: string
  agent_type: string
  configuration: any
  status: string
  created_at: string
  updated_at: string
}

export interface ChatConversation {
  id: string
  user_id: string
  agent_type: string
  user_message?: string
  agent_response?: string
  metadata?: any
  created_at: string
}

export interface UserPreferences {
  id: string
  user_id: string
  theme?: string
  language?: string
  notifications?: boolean
  email_updates?: boolean
  preferences?: any
  created_at: string
  updated_at: string
}

// Database helper functions
export const dbHelpers = {
  // Profile operations
  async getProfile(userId: string): Promise<Profile | null> {
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching profile:", error)
      throw error
    }
    return data
  },

  async createProfile(userId: string, profileData: Partial<Profile>): Promise<Profile> {
    const { data, error } = await supabase
      .from("profiles")
      .insert({
        id: userId,
        ...profileData,
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating profile:", error)
      throw error
    }
    return data
  },

  async updateProfile(userId: string, updates: Partial<Profile>): Promise<Profile> {
    const { data, error } = await supabase.from("profiles").update(updates).eq("id", userId).select().single()

    if (error) {
      console.error("Error updating profile:", error)
      throw error
    }
    return data
  },

  // AI Agent operations
  async getAIAgents(userId?: string): Promise<AIAgent[]> {
    let query = supabase.from("ai_agents").select("*")

    if (userId) {
      query = query.eq("user_id", userId)
    }

    const { data, error } = await query.order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching AI agents:", error)
      throw error
    }
    return data || []
  },

  async createAIAgent(agentData: Omit<AIAgent, "id" | "created_at" | "updated_at">): Promise<AIAgent> {
    const { data, error } = await supabase.from("ai_agents").insert(agentData).select().single()

    if (error) {
      console.error("Error creating AI agent:", error)
      throw error
    }
    return data
  },

  async updateAIAgent(agentId: string, updates: Partial<AIAgent>): Promise<AIAgent> {
    const { data, error } = await supabase.from("ai_agents").update(updates).eq("id", agentId).select().single()

    if (error) {
      console.error("Error updating AI agent:", error)
      throw error
    }
    return data
  },

  async deleteAIAgent(agentId: string): Promise<void> {
    const { error } = await supabase.from("ai_agents").delete().eq("id", agentId)

    if (error) {
      console.error("Error deleting AI agent:", error)
      throw error
    }
  },

  // Chat conversation operations
  async saveConversation(conversationData: Omit<ChatConversation, "id" | "created_at">): Promise<ChatConversation> {
    const { data, error } = await supabase.from("chat_conversations").insert(conversationData).select().single()

    if (error) {
      console.error("Error saving conversation:", error)
      throw error
    }
    return data
  },

  async getConversationHistory(userId: string, agentType?: string, limit = 50): Promise<ChatConversation[]> {
    let query = supabase
      .from("chat_conversations")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(limit)

    if (agentType) {
      query = query.eq("agent_type", agentType)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching conversation history:", error)
      throw error
    }
    return data || []
  },

  // User preferences operations
  async getUserPreferences(userId: string): Promise<UserPreferences | null> {
    const { data, error } = await supabase.from("user_preferences").select("*").eq("user_id", userId).single()

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching user preferences:", error)
      throw error
    }
    return data
  },

  async updateUserPreferences(userId: string, preferences: Partial<UserPreferences>): Promise<UserPreferences> {
    const { data, error } = await supabase
      .from("user_preferences")
      .upsert({
        user_id: userId,
        ...preferences,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error("Error updating user preferences:", error)
      throw error
    }
    return data
  },

  // Admin operations
  async getAllProfiles(): Promise<Profile[]> {
    const { data, error } = await supabase.from("profiles").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching all profiles:", error)
      throw error
    }
    return data || []
  },

  async updateUserRole(userId: string, role: string): Promise<Profile> {
    const { data, error } = await supabase.from("profiles").update({ role }).eq("id", userId).select().single()

    if (error) {
      console.error("Error updating user role:", error)
      throw error
    }
    return data
  },

  // Analytics operations
  async getDashboardStats(userId: string): Promise<{
    totalAgents: number
    totalSystems: number
    totalConversations: number
    recentActivity: any[]
  }> {
    try {
      // Get agent count
      const { count: agentCount } = await supabase
        .from("ai_agents")
        .select("*", { count: "exact", head: true })
        .eq("user_id", userId)

      // Get conversation count
      const { count: conversationCount } = await supabase
        .from("chat_conversations")
        .select("*", { count: "exact", head: true })
        .eq("user_id", userId)

      // Get recent activity
      const { data: recentActivity } = await supabase
        .from("chat_conversations")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(10)

      return {
        totalAgents: agentCount || 0,
        totalSystems: 0, // Placeholder for systems
        totalConversations: conversationCount || 0,
        recentActivity: recentActivity || [],
      }
    } catch (error) {
      console.error("Error fetching dashboard stats:", error)
      return {
        totalAgents: 0,
        totalSystems: 0,
        totalConversations: 0,
        recentActivity: [],
      }
    }
  },

  // Deployment operations (placeholders for compatibility)
  async deployAgent(userId: string, agentId: string, configuration: any) {
    // This would integrate with your deployment service
    console.log("Deploy agent:", { userId, agentId, configuration })
    return { success: true, deploymentId: `deploy_${Date.now()}` }
  },

  async updateDeploymentStatus(deploymentId: string, status: string, progress?: number) {
    // This would update deployment status
    console.log("Update deployment:", { deploymentId, status, progress })
    return { success: true }
  },

  async getUserDeployedAgents(userId: string) {
    // This would fetch deployed agents
    console.log("Get deployed agents for:", userId)
    return []
  },
}

export default dbHelpers
