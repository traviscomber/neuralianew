import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "@/types/supabase"

let client: ReturnType<typeof createBrowserClient<Database>> | undefined

export function createClient() {
  if (client) {
    return client
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dptblcvifavtbvngivkb.supabase.co"
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdGJsY3ZpZmF2dGJ2bmdpdmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNzc1MjYsImV4cCI6MjA2Njc1MzUyNn0.GxB1UkdkrNA9Hhz04wRTnkpWZGllwgLrXcde7cEiNZw"

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables")
  }

  client = createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)
  return client
}

export const supabase = createClient()
export default supabase
