"use client"

import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Export the singleton so other modules can do:
//   import { supabase } from "@/lib/supabase"
export const supabase = createClient()

// If someone prefers a default import, export it as default too.
export default supabase

// Types
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

export interface UserPreferences {
  id: string
  user_id: string
  preferred_name?: string
  communication_style: "professional" | "casual" | "friendly"
  timezone?: string
  language: string
  notification_preferences: Record<string, any>
  agent_preferences: Record<string, any>
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

export interface OrchestratorConversation {
  id: string
  user_id: string
  conversation_title: string
  messages: Array<{
    id: string
    role: "user" | "assistant"
    content: string
    timestamp: string
    data_extracted?: Record<string, any>
  }>
  company_data: {
    company_name?: string
    industry?: string
    size?: string
    goals?: string[]
    challenges?: string[]
    vision?: string
    values?: string[]
    target_market?: string
    revenue_model?: string
    key_metrics?: string[]
    current_tools?: string[]
    pain_points?: string[]
    priorities?: string[]
  }
  last_updated: string
  created_at: string
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

// Database helpers with error handling
export const db = {
  profiles: {
    async get(userId: string) {
      try {
        const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()
        if (error) throw error
        return data as Profile
      } catch (error) {
        console.error("Error fetching profile:", error)
        throw error
      }
    },

    async update(userId: string, updates: Partial<Profile>) {
      try {
        const { data, error } = await supabase.from("profiles").update(updates).eq("id", userId).select().single()
        if (error) throw error
        return data as Profile
      } catch (error) {
        console.error("Error updating profile:", error)
        throw error
      }
    },

    async create(profile: Omit<Profile, "created_at" | "updated_at">) {
      try {
        const { data, error } = await supabase.from("profiles").insert(profile).select().single()
        if (error) throw error
        return data as Profile
      } catch (error) {
        console.error("Error creating profile:", error)
        throw error
      }
    },
  },

  preferences: {
    async get(userId: string) {
      try {
        const { data, error } = await supabase.from("user_preferences").select("*").eq("user_id", userId).single()
        if (error && error.code !== "PGRST116") throw error
        return data as UserPreferences | null
      } catch (error) {
        console.error("Error fetching user preferences:", error)
        return null
      }
    },

    async getOrCreate(userId: string) {
      try {
        const { data, error } = await supabase.rpc("get_or_create_user_preferences", { p_user_id: userId })
        if (error) throw error
        return data as UserPreferences
      } catch (error) {
        console.error("Error getting or creating user preferences:", error)
        throw error
      }
    },

    async update(userId: string, updates: Partial<UserPreferences>) {
      try {
        const { data, error } = await supabase
          .from("user_preferences")
          .update(updates)
          .eq("user_id", userId)
          .select()
          .single()
        if (error) throw error
        return data as UserPreferences
      } catch (error) {
        console.error("Error updating user preferences:", error)
        throw error
      }
    },

    async updatePreferredName(userId: string, preferredName: string) {
      try {
        const { data, error } = await supabase
          .from("user_preferences")
          .update({ preferred_name: preferredName })
          .eq("user_id", userId)
          .select()
          .single()
        if (error) throw error
        return data as UserPreferences
      } catch (error) {
        console.error("Error updating preferred name:", error)
        throw error
      }
    },
  },

  conversations: {
    async get(userId: string, solutionType?: string) {
      try {
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
      } catch (error) {
        console.error("Error fetching conversations:", error)
        throw error
      }
    },

    async create(conversation: Omit<ChatConversation, "id" | "created_at" | "updated_at">) {
      try {
        const { data, error } = await supabase.from("chat_conversations").insert(conversation).select().single()
        if (error) throw error
        return data as ChatConversation
      } catch (error) {
        console.error("Error creating conversation:", error)
        throw error
      }
    },

    async update(id: string, updates: Partial<ChatConversation>) {
      try {
        const { data, error } = await supabase.from("chat_conversations").update(updates).eq("id", id).select().single()
        if (error) throw error
        return data as ChatConversation
      } catch (error) {
        console.error("Error updating conversation:", error)
        throw error
      }
    },
  },

  orchestrator: {
    async getConversation(userId: string) {
      try {
        const { data, error } = await supabase
          .from("orchestrator_conversations")
          .select("*")
          .eq("user_id", userId)
          .order("last_updated", { ascending: false })
          .limit(1)
          .single()

        if (error && error.code !== "PGRST116") throw error
        return data as OrchestratorConversation | null
      } catch (error) {
        console.error("Error fetching orchestrator conversation:", error)
        return null
      }
    },

    async createConversation(userId: string) {
      try {
        const initialMessage = {
          id: Date.now().toString(),
          role: "assistant" as const,
          content: `Hello! I'm your Central Orchestrator. I'm here to learn about your company and help optimize all your AI agents based on your specific business needs.

Let's start with some basic information about your company. Could you tell me:

1. **Company Name & Industry**: What's your company name and what industry are you in?
2. **Company Size**: How many employees do you have?
3. **Primary Goals**: What are your main business objectives for this year?

Feel free to share as much detail as you'd like - the more I know about your business, the better I can coordinate your AI agents to serve your specific needs.`,
          timestamp: new Date().toISOString(),
        }

        const { data, error } = await supabase
          .from("orchestrator_conversations")
          .insert({
            user_id: userId,
            conversation_title: "Company Setup & Configuration",
            messages: [initialMessage],
            company_data: {},
          })
          .select()
          .single()

        if (error) throw error
        return data as OrchestratorConversation
      } catch (error) {
        console.error("Error creating orchestrator conversation:", error)
        throw error
      }
    },

    async addMessage(conversationId: string, message: any) {
      try {
        const { data, error } = await supabase.rpc("add_orchestrator_message", {
          conversation_id: conversationId,
          message_data: message,
        })

        if (error) throw error
        return data as OrchestratorConversation
      } catch (error) {
        console.error("Error adding orchestrator message:", error)
        throw error
      }
    },

    async updateCompanyData(conversationId: string, companyData: Record<string, any>) {
      try {
        const { data, error } = await supabase.rpc("update_company_data", {
          conversation_id: conversationId,
          new_data: companyData,
        })

        if (error) throw error
        return data as OrchestratorConversation
      } catch (error) {
        console.error("Error updating company data:", error)
        throw error
      }
    },
  },

  agents: {
    async list(userId: string) {
      try {
        const { data, error } = await supabase
          .from("ai_agents")
          .select("*")
          .eq("user_id", userId)
          .order("created_at", { ascending: false })

        if (error) throw error
        return data as AIAgent[]
      } catch (error) {
        console.error("Error fetching agents:", error)
        throw error
      }
    },

    async create(agent: Omit<AIAgent, "id" | "created_at" | "updated_at">) {
      try {
        const { data, error } = await supabase.from("ai_agents").insert(agent).select().single()
        if (error) throw error
        return data as AIAgent
      } catch (error) {
        console.error("Error creating agent:", error)
        throw error
      }
    },

    async update(id: string, updates: Partial<AIAgent>) {
      try {
        const { data, error } = await supabase.from("ai_agents").update(updates).eq("id", id).select().single()
        if (error) throw error
        return data as AIAgent
      } catch (error) {
        console.error("Error updating agent:", error)
        throw error
      }
    },

    async delete(id: string) {
      try {
        const { error } = await supabase.from("ai_agents").delete().eq("id", id)
        if (error) throw error
      } catch (error) {
        console.error("Error deleting agent:", error)
        throw error
      }
    },
  },

  systems: {
    async list(userId: string) {
      try {
        const { data, error } = await supabase
          .from("ai_systems")
          .select("*")
          .eq("user_id", userId)
          .order("created_at", { ascending: false })

        if (error) throw error
        return data as AISystem[]
      } catch (error) {
        console.error("Error fetching systems:", error)
        throw error
      }
    },

    async create(system: Omit<AISystem, "id" | "created_at" | "updated_at">) {
      try {
        const { data, error } = await supabase.from("ai_systems").insert(system).select().single()
        if (error) throw error
        return data as AISystem
      } catch (error) {
        console.error("Error creating system:", error)
        throw error
      }
    },

    async update(id: string, updates: Partial<AISystem>) {
      try {
        const { data, error } = await supabase.from("ai_systems").update(updates).eq("id", id).select().single()
        if (error) throw error
        return data as AISystem
      } catch (error) {
        console.error("Error updating system:", error)
        throw error
      }
    },

    async delete(id: string) {
      try {
        const { error } = await supabase.from("ai_systems").delete().eq("id", id)
        if (error) throw error
      } catch (error) {
        console.error("Error deleting system:", error)
        throw error
      }
    },
  },
}
