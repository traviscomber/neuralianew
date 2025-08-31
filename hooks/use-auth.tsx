"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  email: string
  name?: string
}

interface Profile {
  id: string
  role: string
  subscription_plan: string
  subscription_status: string
}

interface AuthContextType {
  user: User | null
  profile: Profile | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock auth for demo
    setUser({
      id: "demo-user",
      email: "admin@neuralia.ai",
      name: "Demo User",
    })
    setProfile({
      id: "demo-profile",
      role: "admin",
      subscription_plan: "pro",
      subscription_status: "active",
    })
    setLoading(false)
  }, [])

  return <AuthContext.Provider value={{ user, profile, loading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
