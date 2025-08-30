import { createClient } from "./supabase"

// Browser-specific Supabase client
export const supabase = createClient()

// Named export
export { createClient }

// Default export
export default supabase
