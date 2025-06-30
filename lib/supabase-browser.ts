/**
 * Browser-side Supabase client (singleton)
 * ---------------------------------------
 *  - `createClient()`  → returns the singleton
 *  - `supabase`        → ready-made default export
 */
import { createClient as createSupabaseClient } from "@supabase/supabase-js"
import type { SupabaseClient } from "@supabase/supabase-js"

let browserClient: SupabaseClient | undefined

export function createClient(): SupabaseClient {
  if (!browserClient) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    browserClient = createSupabaseClient(url, anon)
  }
  return browserClient
}

/* convenience singleton */
export const supabase = createClient()
