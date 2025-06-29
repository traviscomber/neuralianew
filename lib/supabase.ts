"use client"

import { createBrowserClient } from "@supabase/ssr"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export function createClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Missing Supabase environment variables")
    // Return a mock client for development
    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signOut: () => Promise.resolve({ error: null }),
        signInWithPassword: () => Promise.resolve({ data: null, error: null }),
        signUp: () => Promise.resolve({ data: null, error: null }),
        resetPasswordForEmail: () => Promise.resolve({ data: null, error: null }),
        updateUser: () => Promise.resolve({ data: null, error: null }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: null }),
            order: () => Promise.resolve({ data: [], error: null }),
          }),
          order: () => Promise.resolve({ data: [], error: null }),
        }),
        insert: () => ({
          select: () => ({
            single: () => Promise.resolve({ data: null, error: null }),
          }),
        }),
        update: () => ({
          eq: () => ({
            select: () => ({
              single: () => Promise.resolve({ data: null, error: null }),
            }),
          }),
        }),
        delete: () => ({
          eq: () => Promise.resolve({ error: null }),
        }),
      }),
    } as any
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

// Singleton client with proper error handling
let _browserClient: ReturnType<typeof createClient> | null = null

export const supabase = (() => {
  if (typeof window === "undefined") {
    // Server-side: return mock to prevent SSR issues
    return createClient()
  }

  if (!_browserClient) {
    _browserClient = createClient()
  }
  return _browserClient
})()

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
