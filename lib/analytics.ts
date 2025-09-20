import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export class Analytics {
  private supabase = createClient(supabaseUrl, supabaseAnonKey)
  private sessionId: string | null = null
  private initialized = false

  async init() {
    if (this.initialized) return

    try {
      // Generate session ID
      this.sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

      // Get user agent and other session data
      const userAgent = typeof window !== "undefined" ? window.navigator.userAgent : ""
      const referrer = typeof document !== "undefined" ? document.referrer : ""

      // Create session record
      const { error } = await this.supabase.from("analytics_sessions").insert({
        id: this.sessionId,
        user_agent: userAgent,
        referrer: referrer,
        session_start: new Date().toISOString(),
        last_activity: new Date().toISOString(),
      })

      if (error) {
        console.warn("Analytics session creation failed:", error)
      } else {
        this.initialized = true
        console.log("Analytics initialized successfully")
      }
    } catch (error) {
      console.warn("Analytics initialization failed:", error)
    }
  }

  async trackEvent(eventName: string, properties: Record<string, any> = {}) {
    if (!this.initialized || !this.sessionId) {
      await this.init()
    }

    try {
      const { error } = await this.supabase.from("analytics_events").insert({
        session_id: this.sessionId,
        event_name: eventName,
        event_properties: properties,
        page_url: typeof window !== "undefined" ? window.location.href : "",
        timestamp: new Date().toISOString(),
      })

      if (error) {
        console.warn("Event tracking failed:", error)
      }
    } catch (error) {
      console.warn("Event tracking error:", error)
    }
  }

  async trackPageView(url?: string) {
    const pageUrl = url || (typeof window !== "undefined" ? window.location.href : "")
    await this.trackEvent("page_view", { page_url: pageUrl })
  }

  async trackConversion(type: string, value?: number) {
    if (!this.initialized || !this.sessionId) {
      await this.init()
    }

    try {
      const { error } = await this.supabase.from("analytics_conversions").insert({
        session_id: this.sessionId,
        conversion_type: type,
        conversion_value: value || 0,
        page_url: typeof window !== "undefined" ? window.location.href : "",
        timestamp: new Date().toISOString(),
      })

      if (error) {
        console.warn("Conversion tracking failed:", error)
      }
    } catch (error) {
      console.warn("Conversion tracking error:", error)
    }
  }

  async updateSessionActivity() {
    if (!this.sessionId) return

    try {
      const { error } = await this.supabase
        .from("analytics_sessions")
        .update({
          last_activity: new Date().toISOString(),
        })
        .eq("id", this.sessionId)

      if (error) {
        console.warn("Session activity update failed:", error)
      }
    } catch (error) {
      console.warn("Session activity update error:", error)
    }
  }
}

// Export singleton instance
const analytics = new Analytics()
export default analytics

// Named exports for compatibility
export const initializeAnalytics = () => analytics.init()
export const trackEvent = (eventName: string, properties?: Record<string, any>) =>
  analytics.trackEvent(eventName, properties)
export const trackPageView = (url?: string) => analytics.trackPageView(url)
export const trackConversion = (type: string, value?: number) => analytics.trackConversion(type, value)
