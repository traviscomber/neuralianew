import { supabase } from "./supabase"
import type { AuthError, User } from "@supabase/supabase-js"

export const authService = {
  async signUp(email: string, password: string, metadata?: any) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata || {},
        },
      })
      return { data, error }
    } catch (error) {
      console.error("Sign up error:", error)
      return { data: null, error: error as AuthError }
    }
  },

  async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      return { data, error }
    } catch (error) {
      console.error("Sign in error:", error)
      return { data: null, error: error as AuthError }
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
      return { data, error }
    } catch (error) {
      console.error("OAuth sign in error:", error)
      return { data: null, error: error as AuthError }
    }
  },

  async signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      return { error }
    } catch (error) {
      console.error("Sign out error:", error)
      return { error: error as AuthError }
    }
  },

  async resetPassword(email: string) {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })
      return { data, error }
    } catch (error) {
      console.error("Reset password error:", error)
      return { data: null, error: error as AuthError }
    }
  },

  async updatePassword(password: string) {
    try {
      const { data, error } = await supabase.auth.updateUser({
        password,
      })
      return { data, error }
    } catch (error) {
      console.error("Update password error:", error)
      return { data: null, error: error as AuthError }
    }
  },

  async updateProfile(updates: any) {
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: updates,
      })
      return { data, error }
    } catch (error) {
      console.error("Update profile error:", error)
      return { data: null, error: error as AuthError }
    }
  },

  async getCurrentUser(): Promise<User | null> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      return user
    } catch (error) {
      console.error("Get current user error:", error)
      return null
    }
  },
}
