import { createBrowserClient } from "./supabase"

class AnalyticsService {
  private supabase: any = null
  private sessionId: string | null = null
  private initialized = false

  async initialize(): Promise<void> {
    if (this.initialized) return

    try {
      this.supabase = createBrowserClient()
      if (!this.supabase) {
        console.warn("⚠️ Supabase not configured, analytics disabled")
        return
      }

      this.sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

      const { error } = await this.supabase.from("user_sessions").insert({
        session_id: this.sessionId,
        device_type: window.innerWidth < 768 ? "mobile" : "desktop",
        browser: navigator.userAgent.includes("Chrome") ? "Chrome" : "Other",
        os: navigator.userAgent.includes("Mac") ? "macOS" : "Other",
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        active: true,
      })

      if (error) throw error

      this.initialized = true
      console.log("✅ Analytics initialized:", this.sessionId)

      await this.trackPageView(window.location.pathname, document.title)
    } catch (error) {
      console.error("❌ Analytics failed:", error)
    }
  }

  async trackPageView(url: string, title: string): Promise<void> {
    if (!this.sessionId || !this.supabase) return

    try {
      await this.supabase.from("page_views").insert({
        session_id: this.sessionId,
        page_url: url,
        page_title: title,
      })
      console.log("✅ Page tracked:", url)
    } catch (error) {
      console.error("❌ Track failed:", error)
    }
  }

  async trackEvent(type: string, name: string, data?: any): Promise<void> {
    if (!this.sessionId || !this.supabase) return

    try {
      await this.supabase.from("user_events").insert({
        session_id: this.sessionId,
        event_type: type,
        event_name: name,
        event_data: data,
        page_url: window.location.pathname,
      })
      console.log("✅ Event tracked:", name)
    } catch (error) {
      console.error("❌ Event failed:", error)
    }
  }

  getSessionId(): string | null {
    return this.sessionId
  }

  async trackConversion(data: Record<string, any>): Promise<void> {
    if (!this.sessionId || !this.supabase) return
    try {
      await this.supabase.from("conversions").insert({
        session_id: this.sessionId,
        ...data,
        created_at: new Date().toISOString(),
      })
    } catch (error) {
      console.error("❌ Conversion tracking failed:", error)
    }
  }
}

export const analytics = new AnalyticsService()
