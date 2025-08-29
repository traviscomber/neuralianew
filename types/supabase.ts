export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
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
          type: string
          icon: string
          price: number
          features: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          type: string
          icon: string
          price: number
          features: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          type?: string
          icon?: string
          price?: number
          features?: Json
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
          agent_description: string | null
          agent_type: string
          icon: string
          status: string
          configuration: Json
          is_trial: boolean
          trial_ends_at: string | null
          payment_status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          agent_id: string
          agent_name: string
          agent_description?: string | null
          agent_type: string
          icon: string
          status: string
          configuration: Json
          is_trial?: boolean
          trial_ends_at?: string | null
          payment_status: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          agent_id?: string
          agent_name?: string
          agent_description?: string | null
          agent_type?: string
          icon?: string
          status?: string
          configuration?: Json
          is_trial?: boolean
          trial_ends_at?: string | null
          payment_status?: string
          created_at?: string
          updated_at?: string
        }
      }
      purchases: {
        Row: {
          id: string
          user_id: string
          items: Json
          total_amount: number
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          items: Json
          total_amount: number
          status: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          items?: Json
          total_amount?: number
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      chat_conversations: {
        Row: {
          id: string
          user_id: string | null
          agent_id: string | null
          messages: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          agent_id?: string | null
          messages: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          agent_id?: string | null
          messages?: Json
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
