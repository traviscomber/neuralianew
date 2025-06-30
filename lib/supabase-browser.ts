import { createBrowserClient } from "@supabase/ssr"

// Create a single instance to avoid multiple GoTrueClient instances
const supabaseClient = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

export function createClient() {
  return supabaseClient
}

// Export the client instance for direct use
export const supabase = supabaseClient

// Default export
export default supabaseClient
