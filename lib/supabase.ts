import { createBrowserClient } from "@supabase/ssr"

// Export the createClient function that other files expect
export function createClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

// Pre-instantiated client for convenience
const supabase = createClient()

// Types for our database tables
export interface Profile {
  id: string
  email: string
  name?: string
  avatar_url?: string
  company_name?: string
  website?: string
  industry?: string
  phone?: string
  role?: string
  created_at: string
  updated_at: string
}

export interface ChatConversation {
  id: string
  user_id: string
  solution_type: "agent" | "system" | "general"
  conversation_state: Record<string, any>
  messages: Array<{
    role: "user" | "assistant"
    content: string
    timestamp: string
  }>
  created_at: string
  updated_at: string
}

export interface AIAgent {
  id: string
  user_id: string
  name: string
  type: "customer-service" | "sales" | "hr" | "operations" | "marketing" | "data"
  description?: string
  configuration: Record<string, any>
  status: "draft" | "active" | "paused" | "archived"
  created_at: string
  updated_at: string
}

export interface AISystem {
  id: string
  user_id: string
  name: string
  type: "data-integration" | "business-intelligence" | "automation" | "analytics"
  description?: string
  configuration: Record<string, any>
  data_sources: Array<Record<string, any>>
  status: "draft" | "active" | "paused" | "archived"
  created_at: string
  updated_at: string
}

export interface UserSession {
  id: string
  user_id: string
  session_data: Record<string, any>
  last_activity: string
  created_at: string
}

// Helper functions for database operations
export const db = {
  profiles: {
    async get(userId: string) {
      const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()
      if (error) throw error
      return data as Profile
    },

    async update(userId: string, updates: Partial<Profile>) {
      const { data, error } = await supabase.from("profiles").update(updates).eq("id", userId).select().single()
      if (error) throw error
      return data as Profile
    },

    async create(profile: Omit<Profile, "created_at" | "updated_at">) {
      const { data, error } = await supabase.from("profiles").insert(profile).select().single()
      if (error) throw error
      return data as Profile
    },
  },

  conversations: {
    async get(userId: string, solutionType?: string) {
      let query = supabase
        .from("chat_conversations")
        .select("*")
        .eq("user_id", userId)
        .order("updated_at", { ascending: false })

      if (solutionType) {
        query = query.eq("solution_type", solutionType)
      }

      const { data, error } = await query
      if (error) throw error
      return data as ChatConversation[]
    },

    async create(conversation: Omit<ChatConversation, "id" | "created_at" | "updated_at">) {
      const { data, error } = await supabase.from("chat_conversations").insert(conversation).select().single()
      if (error) throw error
      return data as ChatConversation
    },

    async update(id: string, updates: Partial<ChatConversation>) {
      const { data, error } = await supabase.from("chat_conversations").update(updates).eq("id", id).select().single()
      if (error) throw error
      return data as ChatConversation
    },
  },

  agents: {
    async list(userId: string) {
      const { data, error } = await supabase
        .from("ai_agents")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })

      if (error) throw error
      return data as AIAgent[]
    },

    async create(agent: Omit<AIAgent, "id" | "created_at" | "updated_at">) {
      const { data, error } = await supabase.from("ai_agents").insert(agent).select().single()
      if (error) throw error
      return data as AIAgent
    },

    async update(id: string, updates: Partial<AIAgent>) {
      const { data, error } = await supabase.from("ai_agents").update(updates).eq("id", id).select().single()
      if (error) throw error
      return data as AIAgent
    },

    async delete(id: string) {
      const { error } = await supabase.from("ai_agents").delete().eq("id", id)
      if (error) throw error
    },
  },

  systems: {
    async list(userId: string) {
      const { data, error } = await supabase
        .from("ai_systems")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })

      if (error) throw error
      return data as AISystem[]
    },

    async create(system: Omit<AISystem, "id" | "created_at" | "updated_at">) {
      const { data, error } = await supabase.from("ai_systems").insert(system).select().single()
      if (error) throw error
      return data as AISystem
    },

    async update(id: string, updates: Partial<AISystem>) {
      const { data, error } = await supabase.from("ai_systems").update(updates).eq("id", id).select().single()
      if (error) throw error
      return data as AISystem
    },

    async delete(id: string) {
      const { error } = await supabase.from("ai_systems").delete().eq("id", id)
      if (error) throw error
    },
  },
}
