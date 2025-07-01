/**
 * Thin re-export so code that imports `lib/supabase-browser` continues to work
 * without creating a second Supabase client instance.
 *
 * All logic and the actual singleton live in `lib/supabase.ts`.
 */

import supabaseDefault from "./supabase"

/**
 * Named export expected by the rest of the codebase.
 *
 * Example usage elsewhere:
 *   import { supabase } from '@/lib/supabase-browser'
 */
export const supabase = supabaseDefault

/**
 * Default export for backward compatibility (if anything does
 * `import supabase from '@/lib/supabase-browser'`).
 */
export default supabaseDefault
