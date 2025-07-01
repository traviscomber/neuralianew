/**
 * Browser-side Supabase client (compatibility wrapper).
 *
 * Many files were written to import `@/lib/supabase-browser`.
 * To avoid multiple GoTrueClient instances we delegate everything to
 * the *single* shared client defined in `@/lib/supabase`.
 */

import { createClient, supabase } from "./supabase"
import { dbHelpers } from "@/lib/supabase"

// Named export expected by legacy code
export { createClient, supabase }

// In case something still calls `createClient()` directly
// Default export keeps import supabase from "@/lib/supabase-browser" working
export default supabase

// Re-export the singleton client and helpers to avoid multiple GoTrueClient instances
export { dbHelpers }
