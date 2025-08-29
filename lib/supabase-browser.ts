"use client"

import { createBrowserClient } from "@supabase/ssr"

// Create the supabase client
export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

// Export the createClient function
export function createClient() {
  return supabase
}

// Default export
export default supabase
