"use server"

import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"
import { createClient as createEdgeClient } from "@supabase/supabase-js"
import type { SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/**
 * Returns a server-side Supabase client that stores auth in cookies.
 */
export function getServerClient(): SupabaseClient {
  const cookieStore = cookies()
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: { get: cookieStore.get.bind(cookieStore), set: cookieStore.set.bind(cookieStore) },
  })
}

/**
 * Lightweight client for non-cookie server utilities (e.g. cron).
 */
export function getEdgeClient(): SupabaseClient {
  return createEdgeClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  })
}

/* -------------------------------------------------------------------------- */
/*                               Auth Helpers                                 */
/* -------------------------------------------------------------------------- */

/**
 * Sign in with e-mail & password.
 */
export async function signIn(email: string, password: string) {
  const supabase = getServerClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
}

/**
 * Register a new account.
 */
export async function signUp(email: string, password: string) {
  const supabase = getServerClient()
  const { error } = await supabase.auth.signUp({ email, password })
  if (error) throw error
}

/**
 * Trigger a password-reset e-mail.  <--- Export requested by the error
 */
export async function resetPassword(email: string) {
  const supabase = getEdgeClient()
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/reset-password`,
  })
  if (error) throw error
}

/**
 * Complete the password-reset flow.
 */
export async function updatePassword(accessToken: string, newPassword: string) {
  const supabase = getEdgeClient()
  const { error } = await supabase.auth.updateUser({ password: newPassword }, { accessToken })
  if (error) throw error
}

/**
 * Sign out and clear session cookies.
 */
export async function signOut() {
  const supabase = getServerClient()
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
