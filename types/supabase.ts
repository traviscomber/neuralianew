export type Json = string | number | boolean | null | { [k: string]: Json } | Json[]
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name?: string
          avatar_url?: string
          subscription_plan?: string
          subscription_status?: string
          metadata?: any
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name?: string
          avatar_url?: string
          subscription_plan?: string
          subscription_status?: string
          metadata?: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          avatar_url?: string
          subscription_plan?: string
          subscription_status?: string
          metadata?: any
          created_at?: string
          updated_at?: string
        }
      }
      ai_agents: {
        Row: { id: string; name: string; description: string }
        Insert: { id?: string; name: string; description: string }
        Update: Partial<Database["public"]["Tables"]["ai_agents"]["Row"]>
      }
      deployed_agents: {
        Row: {
          id: string
          user_id: string
          agent_id: string
          agent_name: string
          agent_description?: string
          agent_avatar?: string
          status: string
          deployed_at: string
          expires_at?: string
          metadata?: any
          created_at: string
          updated_at: string
        }
        Insert: Partial<Database["public"]["Tables"]["deployed_agents"]["Row"]>
        Update: Partial<Database["public"]["Tables"]["deployed_agents"]["Row"]>
      }
    }
    Views: never
    Functions: never
    Enums: never
  }
}
