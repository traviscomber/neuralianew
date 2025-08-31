"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  name?: string
}

interface Profile {
  id: string
  user_id: string
  role: string
  full_name?: string
}

interface AuthContextType {
  user: User | null
  profile: Profile | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock authentication check
    const mockUser = {
      id: "1",
      email: "admin@neuralia.ai",
      name: "Admin User",
    }
    const mockProfile = {
      id: "1",
      user_id: "1",
      role: "admin",
      full_name: "Admin User",
    }

    setUser(mockUser)
    setProfile(mockProfile)
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    // Mock sign in
    const mockUser = {
      id: "1",
      email: email,
      name: "User",
    }
    const mockProfile = {
      id: "1",
      user_id: "1",
      role: email === "admin@neuralia.ai" ? "admin" : "user",
      full_name: "User",
    }

    setUser(mockUser)
    setProfile(mockProfile)
    setLoading(false)
  }

  const signUp = async (email: string, password: string) => {
    setLoading(true)
    // Mock sign up
    const mockUser = {
      id: "2",
      email: email,
      name: "New User",
    }
    const mockProfile = {
      id: "2",
      user_id: "2",
      role: "user",
      full_name: "New User",
    }

    setUser(mockUser)
    setProfile(mockProfile)
    setLoading(false)
  }

  const signOut = async () => {
    setUser(null)
    setProfile(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        signIn,
        signUp,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
