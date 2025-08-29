import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "@/types/supabase"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dptblcvifavtbvngivkb.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdGJsY3ZpZmF2dGJ2bmdpdmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNzc1MjYsImV4cCI6MjA2Njc1MzUyNn0.GxB1UkdkrNA9Hhz04wRTnkpWZGllwgLrXcde7cEiNZw"

export const supabase = createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)

export default supabase
