import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase

// Helper function to handle Supabase errors
export function handleSupabaseError(error: any, context: string) {
  console.error(`Supabase error in ${context}:`, error)

  if (error?.code === "PGRST116") {
    console.warn(`Table not found in ${context}. This might be expected during initial setup.`)
  }

  return null
}

// Test connection function
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from("profiles").select("count").limit(1)

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
