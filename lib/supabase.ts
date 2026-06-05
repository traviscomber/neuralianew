import { createBrowserClient as createSupabaseClient } from "@supabase/ssr"

// Browser client (singleton pattern) - lazy initialization
let browserClient: ReturnType<typeof createSupabaseClient> | null = null

export function createBrowserClient() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn("Supabase environment variables not configured yet")
    return null as any
  }

  if (browserClient) return browserClient

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  browserClient = createSupabaseClient(supabaseUrl, supabaseAnonKey)
  return browserClient
}

export const supabase = {
  get client() {
    return createBrowserClient()
  },
  // Proxy auth methods for backwards compatibility
  auth: {
    signUp: (credentials: any) => createBrowserClient()?.auth.signUp(credentials),
    signInWithPassword: (credentials: any) => createBrowserClient()?.auth.signInWithPassword(credentials),
    signInWithOAuth: (options: any) => createBrowserClient()?.auth.signInWithOAuth(options),
    signOut: () => createBrowserClient()?.auth.signOut(),
    resetPasswordForEmail: (email: string, options: any) =>
      createBrowserClient()?.auth.resetPasswordForEmail(email, options),
    updateUser: (updates: any) => createBrowserClient()?.auth.updateUser(updates),
    getUser: () => createBrowserClient()?.auth.getUser(),
  },
  from: (table: string) => createBrowserClient()?.from(table),
}

// Server client for API routes
export function createServerClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!serviceRoleKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY missing")

  return createSupabaseClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

// Helper function to handle Supabase errors
export function handleSupabaseError(error: any, context: string): null {
  console.error(`Supabase error in ${context}:`, error)

  if (error?.code === "PGRST116") {
    console.warn(`Table not found in ${context}. This might be expected during initial setup.`)
  }

  return null
}

// Test connection function
export async function testSupabaseConnection() {
  try {
    const client = createBrowserClient()
    if (!client) return false

    const { data, error } = await client.from("profiles").select("count").limit(1)

    if (error) {
      console.error("Supabase connection test failed:", error)
      return false
    }

    console.log("Supabase connection successful")
    return true
  } catch (error) {
    console.error("Supabase connection test error:", error)
    return false
  }
}

export type Database = {
  public: {
    Tables: {
      user_sessions: {
        Row: {
          session_id: string
          user_id: string | null
          created_at: string
          updated_at: string
          expires_at: string
          user_agent: string | null
          ip_address: string | null
          device_type: string | null
          browser: string | null
          os: string | null
          screen_resolution: string | null
          timezone: string | null
          language: string | null
          referrer: string | null
          utm_source: string | null
          utm_medium: string | null
          utm_campaign: string | null
          utm_term: string | null
          utm_content: string | null
          is_active: boolean
          last_activity: string
        }
        Insert: {
          session_id?: string
          user_id?: string | null
          created_at?: string
          updated_at?: string
          expires_at?: string
          user_agent?: string | null
          ip_address?: string | null
          device_type?: string | null
          browser?: string | null
          os?: string | null
          screen_resolution?: string | null
          timezone?: string | null
          language?: string | null
          referrer?: string | null
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          utm_term?: string | null
          utm_content?: string | null
          is_active?: boolean
          last_activity?: string
        }
        Update: {
          session_id?: string
          user_id?: string | null
          created_at?: string
          updated_at?: string
          expires_at?: string
          user_agent?: string | null
          ip_address?: string | null
          device_type?: string | null
          browser?: string | null
          os?: string | null
          screen_resolution?: string | null
          timezone?: string | null
          language?: string | null
          referrer?: string | null
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          utm_term?: string | null
          utm_content?: string | null
          is_active?: boolean
          last_activity?: string
        }
      }
      page_views: {
        Row: {
          id: string
          session_id: string
          user_id: string | null
          page_url: string
          page_title: string | null
          referrer: string | null
          created_at: string
          time_on_page: number
          scroll_depth: number
          bounce: boolean
        }
        Insert: {
          id?: string
          session_id: string
          user_id?: string | null
          page_url: string
          page_title?: string | null
          referrer?: string | null
          created_at?: string
          time_on_page?: number
          scroll_depth?: number
          bounce?: boolean
        }
        Update: {
          id?: string
          session_id?: string
          user_id?: string | null
          page_url?: string
          page_title?: string | null
          referrer?: string | null
          created_at?: string
          time_on_page?: number
          scroll_depth?: number
          bounce?: boolean
        }
      }
      user_events: {
        Row: {
          id: string
          session_id: string
          user_id: string | null
          event_type: string
          event_name: string
          event_data: any
          page_url: string | null
          created_at: string
          element_id: string | null
          element_class: string | null
          element_text: string | null
          x_coordinate: number | null
          y_coordinate: number | null
        }
        Insert: {
          id?: string
          session_id: string
          user_id?: string | null
          event_type: string
          event_name: string
          event_data?: any
          page_url?: string | null
          created_at?: string
          element_id?: string | null
          element_class?: string | null
          element_text?: string | null
          x_coordinate?: number | null
          y_coordinate?: number | null
        }
        Update: {
          id?: string
          session_id?: string
          user_id?: string | null
          event_type?: string
          event_name?: string
          event_data?: any
          page_url?: string | null
          created_at?: string
          element_id?: string | null
          element_class?: string | null
          element_text?: string | null
          x_coordinate?: number | null
          y_coordinate?: number | null
        }
      }
      conversion_events: {
        Row: {
          id: string
          session_id: string
          user_id: string | null
          conversion_type: string
          conversion_value: number
          conversion_data: any
          page_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          session_id: string
          user_id?: string | null
          conversion_type: string
          conversion_value?: number
          conversion_data?: any
          page_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          session_id?: string
          user_id?: string | null
          conversion_type?: string
          conversion_value?: number
          conversion_data?: any
          page_url?: string | null
          created_at?: string
        }
      }
      performance_metrics: {
        Row: {
          id: string
          session_id: string
          page_url: string
          metric_name: string
          metric_value: number
          created_at: string
          user_agent: string | null
          connection_type: string | null
        }
        Insert: {
          id?: string
          session_id: string
          page_url: string
          metric_name: string
          metric_value: number
          created_at?: string
          user_agent?: string | null
          connection_type?: string | null
        }
        Update: {
          id?: string
          session_id?: string
          page_url?: string
          metric_name?: string
          metric_value?: number
          created_at?: string
          user_agent?: string | null
          connection_type?: string | null
        }
      }
    }
  }
}

// Default export for convenience
export default createBrowserClient
