import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  global: {
    headers: {
      "x-application-name": "neuralia-analytics",
    },
  },
})

// Server-side client for API routes
export function createServerClient() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

// Database types
export interface UserSession {
  id?: string
  session_id: string
  user_agent?: string | null
  ip_address?: string | null
  country?: string | null
  city?: string | null
  device_type?: string | null
  browser?: string | null
  os?: string | null
  screen_resolution?: string | null
  language?: string | null
  timezone?: string | null
  referrer?: string | null
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  utm_term?: string | null
  utm_content?: string | null
  created_at?: string
  updated_at?: string
}

export interface PageView {
  id?: string
  session_id: string
  page_url: string
  page_title?: string | null
  referrer?: string | null
  load_time?: number | null
  time_on_page?: number
  scroll_depth?: number
  created_at?: string
}

export interface UserEvent {
  id?: string
  session_id: string
  event_type: string
  event_data?: Record<string, any>
  page_url?: string | null
  page_title?: string | null
  element_selector?: string | null
  timestamp?: string
}

export interface HeatmapData {
  id?: string
  session_id: string
  page_url: string
  x_coordinate: number
  y_coordinate: number
  viewport_width?: number | null
  viewport_height?: number | null
  device_type?: string | null
  element_selector?: string | null
  click_timestamp?: string
}

export interface PerformanceMetric {
  id?: string
  session_id: string
  page_url: string
  metric_name: string
  metric_value: number
  timestamp?: string
}

export interface ConversionEvent {
  id?: string
  session_id: string
  conversion_type: string
  conversion_value?: number
  page_url?: string | null
  element_selector?: string | null
  additional_data?: Record<string, any>
  timestamp?: string
}

export interface SessionStats {
  id?: string
  session_id: string
  total_page_views?: number
  total_events?: number
  total_time_spent?: number
  bounce_rate?: number
  created_at?: string
  updated_at?: string
}
