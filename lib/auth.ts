import { createClient } from "@/lib/supabase-browser"

// Get the site URL for redirects
function getSiteUrl(): string {
  // Check for production site URL first
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  // Check for Vercel URL
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  // Fallback to localhost for development
  return "http://localhost:3000"
}

export const authService = {
  async signUp(email: string, password: string, userData?: any) {
    const supabase = createClient()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${getSiteUrl()}/auth/callback`,
        data: userData,
      },
    })

    if (error) throw error
    return data
  },

  async signIn(email: string, password: string) {
    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error
    return data
  },

  async signOut() {
    const supabase = createClient()

    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async resetPassword(email: string) {
    const supabase = createClient()

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${getSiteUrl()}/reset-password`,
    })

    if (error) throw error
  },

  async updatePassword(password: string) {
    const supabase = createClient()

    const { error } = await supabase.auth.updateUser({
      password,
    })

    if (error) throw error
  },

  async signInWithProvider(provider: "google" | "github") {
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${getSiteUrl()}/auth/callback`,
      },
    })

    if (error) throw error
  },
}
