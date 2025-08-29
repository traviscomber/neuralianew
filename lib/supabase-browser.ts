import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

const supabaseUrl = "https://dptblcvifavtbvngivkb.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdGJsY3ZpZmF2dGJ2bmdpdmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNzc1MjYsImV4cCI6MjA2Njc1MzUyNn0.GxB1UkdkrNA9Hhz04wRTnkpWZGllwgLrXcde7cEiNZw"

// Browser client with anon key (singleton pattern)
let supabaseInstance: ReturnType<typeof createClient<Database>> | null = null

export const supabase = (() => {
  if (!supabaseInstance) {
    supabaseInstance = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    })
  }
  return supabaseInstance
})()

export default supabase
