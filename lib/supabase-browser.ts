/**
 * Browser-side Supabase client (compatibility wrapper).
 *
 * Many files were written to import `@/lib/supabase-browser`.
 * To avoid multiple GoTrueClient instances we delegate everything to
 * the *single* shared client defined in `@/lib/supabase`.
 */

import { supabase as supabaseSingleton, createClient as createClientSingleton } from "@/lib/supabase"

// Named export expected by legacy code
export const supabase = supabaseSingleton

// In case something still calls `createClient()` directly
export const createClient = () => createClientSingleton()

// Default export keeps import supabase from "@/lib/supabase-browser" working
export default supabaseSingleton
