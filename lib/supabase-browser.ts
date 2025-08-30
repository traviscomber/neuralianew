import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "@/types/supabase"

// Create the browser client
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}

// Export the singleton instance
export const supabase = createClient()

// Default export for backward compatibility
export default supabase
