import { createClient as createSupabaseClient } from "@supabase/supabase-js"
import { createServerClient as createSupabaseServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import type { Database } from "@/types/supabase"

// Environment validation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

// Prevent service role key from being exposed to client
if (typeof window !== "undefined" && supabaseAnonKey?.includes("service_role")) {
  throw new Error("🚨 Service role key detected in browser! Check your environment variables.")
}

// Browser client (singleton)
let browserClient: ReturnType<typeof createSupabaseClient<Database>> | null = null

export function createClient() {
  if (typeof window === "undefined") {
    // Server-side: create a new client each time
    return createSupabaseClient<Database>(supabaseUrl!, supabaseAnonKey!)
  }

  // Browser-side: use singleton
  if (!browserClient) {
    browserClient = createSupabaseClient<Database>(supabaseUrl!, supabaseAnonKey!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: "pkce",
      },
    })
  }

  return browserClient
}

// Server client with cookies (for SSR/API routes)
export function createServerClient() {
  const cookieStore = cookies()

  return createSupabaseServerClient<Database>(supabaseUrl!, supabaseAnonKey!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: any) {
        cookieStore.set({ name, value: "", ...options })
      },
    },
  })
}

// Service role client (for privileged operations)
export function createServiceClient() {
  if (!supabaseServiceKey) {
    throw new Error("Service role key not available")
  }

  return createSupabaseClient<Database>(supabaseUrl!, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

// Default browser client export
export const supabase = createClient()

// Database helpers using service client
export const dbHelpers = {
  async getAIAgents() {
    const client = createServiceClient()
    const { data, error } = await client.from("ai_agents").select("*").order("created_at", { ascending: false })

    if (error) throw error
    return data
  },

  async deployAgent(userId: string, agent: any) {
    const client = createServiceClient()

    const trialEnd = new Date()
    trialEnd.setDate(trialEnd.getDate() + 5) // 5-day trial

    const { data, error } = await client
      .from("deployed_agents")
      .insert({
        user_id: userId,
        agent_id: agent.id,
        agent_name: agent.name,
        agent_description: agent.description,
        agent_type: agent.type,
        icon: agent.icon || "🤖",
        status: "trial",
        trial_start: new Date().toISOString(),
        trial_end: trialEnd.toISOString(),
        configuration: {},
        deployed_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getUserDeployedAgents(userId: string) {
    const client = createServiceClient()
    const { data, error } = await client
      .from("deployed_agents")
      .select("*")
      .eq("user_id", userId)
      .order("deployed_at", { ascending: false })

    if (error) throw error
    return data
  },

  async createUserProfile(userId: string, email: string) {
    const client = createServiceClient()
    const { data, error } = await client
      .from("profiles")
      .insert({
        id: userId,
        email: email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error && error.code !== "23505") {
      // Ignore duplicate key errors
      throw error
    }
    return data
  },
}
