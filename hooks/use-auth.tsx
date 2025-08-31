"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "@supabase/supabase-js"

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock auth state
    const mockUser = {
      id: "mock-user-id",
      email: "demo@neuralia.ai",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      app_metadata: {},
      user_metadata: {},
      aud: "authenticated",
      confirmation_sent_at: null,
      recovery_sent_at: null,
      email_change_sent_at: null,
      new_email: null,
      invited_at: null,
      action_link: null,
      email_confirmed_at: new Date().toISOString(),
      phone_confirmed_at: null,
      confirmed_at: new Date().toISOString(),
      last_sign_in_at: new Date().toISOString(),
      role: "authenticated",
      phone: null,
      identities: [],
      factors: [],
    } as User

    // Simulate loading
    setTimeout(() => {
      setUser(mockUser)
      setLoading(false)
    }, 1000)
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    // Mock sign in
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      id: "mock-user-id",
      email,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      app_metadata: {},
      user_metadata: {},
      aud: "authenticated",
      confirmation_sent_at: null,
      recovery_sent_at: null,
      email_change_sent_at: null,
      new_email: null,
      invited_at: null,
      action_link: null,
      email_confirmed_at: new Date().toISOString(),
      phone_confirmed_at: null,
      confirmed_at: new Date().toISOString(),
      last_sign_in_at: new Date().toISOString(),
      role: "authenticated",
      phone: null,
      identities: [],
      factors: [],
    } as User)
    setLoading(false)
  }

  const signUp = async (email: string, password: string) => {
    setLoading(true)
    // Mock sign up
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      id: "mock-user-id",
      email,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      app_metadata: {},
      user_metadata: {},
      aud: "authenticated",
      confirmation_sent_at: null,
      recovery_sent_at: null,
      email_change_sent_at: null,
      new_email: null,
      invited_at: null,
      action_link: null,
      email_confirmed_at: new Date().toISOString(),
      phone_confirmed_at: null,
      confirmed_at: new Date().toISOString(),
      last_sign_in_at: new Date().toISOString(),
      role: "authenticated",
      phone: null,
      identities: [],
      factors: [],
    } as User)
    setLoading(false)
  }

  const signOut = async () => {
    setLoading(true)
    // Mock sign out
    await new Promise((resolve) => setTimeout(resolve, 500))
    setUser(null)
    setLoading(false)
  }

  return <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
