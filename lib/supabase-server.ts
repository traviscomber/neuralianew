/**
 * Server-side Supabase client (compatibility wrapper).
 *
 * Keeps `@/lib/supabase-server` import paths working while ensuring
 * we only rely on the single implementation held in `@/lib/supabase`.
 */

import { createServerClient as _createServerClient, supabase, createClient, dbHelpers } from "@/lib/supabase"

// Named export
export const createServerClient = _createServerClient
export { supabase, createClient, dbHelpers }

// Default export (if someone does `import createServerClient from ...`)
export default supabase
