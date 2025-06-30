import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const dbHelpers = {
  supabase,

  async getAIAgents() {
    const { data, error } = await supabase.from("ai_agents").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching AI agents:", error)
      return []
    }

    return data || []
  },

  async deployAgent(userId: string, agentId: string, configuration: any) {
    const { data, error } = await supabase
      .from("deployed_agents")
      .insert({
        user_id: userId,
        agent_id: agentId,
        deployment_status: "deploying",
        deployment_progress: 0,
        configuration,
        deployed_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return data
  },

  async updateDeploymentStatus(deploymentId: string, status: string, progress?: number) {
    const updateData: any = {
      deployment_status: status,
    }

    if (progress !== undefined) {
      updateData.deployment_progress = progress
    }

    if (status === "active") {
      updateData.activated_at = new Date().toISOString()
    }

    const { error } = await supabase.from("deployed_agents").update(updateData).eq("id", deploymentId)

    if (error) {
      throw error
    }
  },

  async getUserDeployedAgents(userId: string) {
    const { data, error } = await supabase
      .from("deployed_agents")
      .select(`
        *,
        ai_agents (
          id,
          name,
          type,
          description,
          capabilities,
          pricing
        )
      `)
      .eq("user_id", userId)
      .eq("deployment_status", "active")

    if (error) {
      console.error("Error fetching deployed agents:", error)
      return []
    }

    return data || []
  },

  async saveConversation(userId: string, agentType: string, messages: any[]) {
    const { data, error } = await supabase
      .from("chat_conversations")
      .insert({
        user_id: userId,
        agent_type: agentType,
        messages,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return data
  },

  async getConversationHistory(userId: string, agentType: string, limit = 10) {
    const { data, error } = await supabase
      .from("chat_conversations")
      .select("*")
      .eq("user_id", userId)
      .eq("agent_type", agentType)
      .order("updated_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("Error fetching conversation history:", error)
      return []
    }

    return data || []
  },

  async updateUserPreferences(userId: string, preferences: any) {
    const { data, error } = await supabase
      .from("user_preferences")
      .upsert({
        user_id: userId,
        preferences,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return data
  },

  async getUserPreferences(userId: string) {
    const { data, error } = await supabase.from("user_preferences").select("*").eq("user_id", userId).single()

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching user preferences:", error)
      return null
    }

    return data
  },
}

// Re-export createClient for compatibility with other modules
export { createClient }

export default supabase
