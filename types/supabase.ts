export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      ai_agents: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          category: string
          features: string[]
          icon: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          category: string
          features: string[]
          icon: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          category?: string
          features?: string[]
          icon?: string
          created_at?: string
          updated_at?: string
        }
      }
      deployed_agents: {
        Row: {
          id: string
          user_id: string
          agent_id: string
          agent_name: string
          agent_description: string
          agent_icon: string
          deployment_date: string
          status: string
          trial_ends_at: string | null
          is_trial: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          agent_id: string
          agent_name: string
          agent_description: string
          agent_icon: string
          deployment_date?: string
          status?: string
          trial_ends_at?: string | null
          is_trial?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          agent_id?: string
          agent_name?: string
          agent_description?: string
          agent_icon?: string
          deployment_date?: string
          status?: string
          trial_ends_at?: string | null
          is_trial?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      chat_conversations: {
        Row: {
          id: string
          user_id: string
          agent_id: string
          messages: Json[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          agent_id: string
          messages: Json[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          agent_id?: string
          messages?: Json[]
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
