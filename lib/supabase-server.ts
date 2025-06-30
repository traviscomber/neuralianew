/**
 * Server-side Supabase client (compatibility wrapper).
 *
 * Keeps `@/lib/supabase-server` import paths working while ensuring
 * we only rely on the single implementation held in `@/lib/supabase`.
 */

import { createServerClient as _createServerClient } from "@/lib/supabase"

/** Named exports */
export const createServerClient = _createServerClient
export const createClient = _createServerClient // <-- Added line

/** Default export (for `import createServerClient from ...`) */
export default _createServerClient
