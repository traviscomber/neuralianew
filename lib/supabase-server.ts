import { cookies } from "next/headers"
import { createServerClient, type CookieOptions, type SupabaseClient } from "@supabase/ssr"

/**
 * Returns a cookie-aware Supabase server client.
 * Works in Route Handlers, Server Components, and Server Actions.
 *
 * Exports:
 *  • createServerClientWithCookies – canonical helper
 *  • createClient       – alias (for legacy imports)
 */
export function createServerClientWithCookies(): SupabaseClient<any, "public", any> {
  const cookieStore = cookies()

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: CookieOptions) {
        cookieStore.delete({ name, ...options })
      },
    },
  })
}

// named exports expected by the rest of the code-base
export const createClient = createServerClientWithCookies
export default createServerClientWithCookies
