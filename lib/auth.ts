"use server"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { createClient } from "@/lib/supabase"

export async function createSupabaseServerClient() {
  const cookieStore = await cookies()

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}

export async function signUp(email: string, password: string) {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  return { data, error }
}

export async function signIn(email: string, password: string) {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function resetPassword(email: string) {
  const supabase = createClient()
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
  })
  if (error) throw error
}

export async function updatePassword(password: string) {
  const supabase = await createSupabaseServerClient()

  const { data, error } = await supabase.auth.updateUser({
    password,
  })

  if (error) {
    return { error }
  }

  return { data }
}

export async function getUser() {
  const supabase = await createSupabaseServerClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    return { user: null, error }
  }

  return { user, error: null }
}

export async function getSession() {
  const supabase = await createSupabaseServerClient()

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()

  if (error) {
    return { session: null, error }
  }

  return { session, error: null }
}
