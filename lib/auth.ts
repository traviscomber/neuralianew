import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface User {
  id: string
  email: string
  user_metadata?: {
    full_name?: string
    avatar_url?: string
  }
  app_metadata?: {
    provider?: string
    providers?: string[]
  }
}

export interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

export const authService = {
  async signUp(email: string, password: string, metadata?: any) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
        },
      })

      if (error) throw error

      return { user: data.user, session: data.session, error: null }
    } catch (error: any) {
      return { user: null, session: null, error: error.message }
    }
  },

  async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      return { user: data.user, session: data.session, error: null }
    } catch (error: any) {
      return { user: null, session: null, error: error.message }
    }
  },

  async signInWithProvider(provider: "google" | "github" | "discord") {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  },

  async signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  },

  async resetPassword(email: string) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) throw error

      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  },

  async updatePassword(password: string) {
    try {
      const { error } = await supabase.auth.updateUser({
        password,
      })

      if (error) throw error

      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  },

  async updateProfile(updates: any) {
    try {
      const { error } = await supabase.auth.updateUser({
        data: updates,
      })

      if (error) throw error

      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  },

  async getCurrentUser() {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()

      if (error) throw error

      return { user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    }
  },

  async getCurrentSession() {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()

      if (error) throw error

      return { session, error: null }
    } catch (error: any) {
      return { session: null, error: error.message }
    }
  },

  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback)
  },

  async refreshSession() {
    try {
      const { data, error } = await supabase.auth.refreshSession()

      if (error) throw error

      return { session: data.session, error: null }
    } catch (error: any) {
      return { session: null, error: error.message }
    }
  },
}

export default authService
