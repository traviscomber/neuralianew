import { supabase } from "./supabase"
import type { UserSession, PageView, UserEvent, HeatmapData, PerformanceMetric } from "./supabase"

export class AnalyticsManager {
  private sessionId: string | null = null
  private isInitialized = false
  private initPromise: Promise<void> | null = null
  private sessionCreated = false
  private sessionVerified = false
  private retryCount = 0
  private maxRetries = 5
  private initializationAttempts = 0
  private maxInitAttempts = 3

  constructor() {
    if (typeof window !== "undefined") {
      this.initPromise = this.initialize()
    }
  }

  private async initialize(): Promise<void> {
    this.initializationAttempts++

    try {
      console.log(`Analytics initialization attempt ${this.initializationAttempts}`)

      // Generate or retrieve session ID
      this.sessionId = this.getOrCreateSessionId()
      console.log("Generated session ID:", this.sessionId)

      // Create session with comprehensive retry logic
      await this.createSessionWithRetry()

      // Double-check session exists before marking as ready
      if (this.sessionCreated && this.sessionVerified) {
        await this.finalVerifySession()
      }

      // Only set up listeners after session is confirmed to exist
      if (this.sessionCreated && this.sessionVerified) {
        this.setupEventListeners()
        this.setupPerformanceTracking()
        this.isInitialized = true
        console.log("Analytics initialized successfully with session:", this.sessionId)
      } else {
        throw new Error("Session creation or verification failed")
      }
    } catch (error) {
      console.error(`Analytics initialization attempt ${this.initializationAttempts} failed:`, error)

      if (this.initializationAttempts < this.maxInitAttempts) {
        // Reset state and retry
        this.sessionCreated = false
        this.sessionVerified = false
        this.sessionId = null

        // Wait before retry
        await new Promise((resolve) => setTimeout(resolve, 2000 * this.initializationAttempts))
        return this.initialize()
      } else {
        // Final fallback - mark as initialized but don't track
        console.error("All initialization attempts failed, running in fallback mode")
        this.sessionId = this.generateSessionId()
        this.isInitialized = true
        this.sessionCreated = false
        this.sessionVerified = false
      }
    }
  }

  private async createSessionWithRetry(): Promise<void> {
    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        console.log(`Session creation attempt ${attempt + 1}/${this.maxRetries + 1}`)

        await this.ensureSessionExists()

        if (this.sessionCreated && this.sessionVerified) {
          console.log(`Session created and verified successfully on attempt ${attempt + 1}`)
          return
        }
      } catch (error) {
        console.error(`Session creation attempt ${attempt + 1} failed:`, error)

        if (attempt === this.maxRetries) {
          throw new Error(`Session creation failed after ${this.maxRetries + 1} attempts: ${error}`)
        }

        // Reset state before retry
        this.sessionCreated = false
        this.sessionVerified = false

        // Exponential backoff
        const delay = Math.min(1000 * Math.pow(2, attempt), 10000)
        console.log(`Waiting ${delay}ms before retry...`)
        await new Promise((resolve) => setTimeout(resolve, delay))
      }
    }
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem("analytics_session_id")
    if (!sessionId) {
      sessionId = this.generateSessionId()
      sessionStorage.setItem("analytics_session_id", sessionId)
    }
    return sessionId
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private async ensureSessionExists(): Promise<void> {
    if (!this.sessionId) {
      throw new Error("No session ID available")
    }

    try {
      // First, check if session already exists
      console.log("Checking if session exists:", this.sessionId)
      const { data: existingSession, error: checkError } = await supabase
        .from("user_sessions")
        .select("session_id, id")
        .eq("session_id", this.sessionId)
        .maybeSingle()

      if (checkError) {
        console.error("Error checking existing session:", checkError)
        throw checkError
      }

      if (existingSession) {
        // Session exists, mark as created and verified
        this.sessionCreated = true
        this.sessionVerified = true
        console.log("Found existing session:", this.sessionId)
        return
      }

      // Create new session
      console.log("Creating new session:", this.sessionId)
      await this.createNewSession()

      // Verify the session was created successfully
      await this.verifySessionExists()
    } catch (error) {
      console.error("Session creation/verification error:", error)
      throw error
    }
  }

  private async createNewSession(): Promise<void> {
    if (!this.sessionId) {
      throw new Error("No session ID available for creation")
    }

    try {
      // Get location info with timeout
      const locationInfo = await Promise.race([
        this.getLocationInfo(),
        new Promise<{ country: string; city: string }>((resolve) =>
          setTimeout(() => resolve({ country: "Unknown", city: "Unknown" }), 1500),
        ),
      ])

      const sessionData: UserSession = {
        session_id: this.sessionId,
        user_agent: navigator.userAgent,
        device_type: this.getDeviceType(),
        browser: this.getBrowserName(),
        os: this.getOperatingSystem(),
        screen_resolution: `${screen.width}x${screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer || null,
        utm_source: this.getUrlParameter("utm_source"),
        utm_medium: this.getUrlParameter("utm_medium"),
        utm_campaign: this.getUrlParameter("utm_campaign"),
        utm_term: this.getUrlParameter("utm_term"),
        utm_content: this.getUrlParameter("utm_content"),
        country: locationInfo.country,
        city: locationInfo.city,
      }

      console.log("Inserting session data:", { session_id: sessionData.session_id })

      const { data, error } = await supabase.from("user_sessions").insert(sessionData).select().single()

      if (error) {
        if (error.code === "23505") {
          // Unique constraint violation - session already exists
          console.log("Session already exists during creation (unique constraint)")
          this.sessionCreated = true
          return
        }
        console.error("Failed to create session:", error)
        throw error
      }

      this.sessionCreated = true
      console.log("New session created successfully:", data?.session_id)
    } catch (error) {
      console.error("Failed to create new session:", error)
      throw error
    }
  }

  private async verifySessionExists(): Promise<void> {
    if (!this.sessionId || !this.sessionCreated) {
      throw new Error("Cannot verify session: not created or no session ID")
    }

    try {
      console.log("Verifying session exists:", this.sessionId)

      const { data: verifySession, error: verifyError } = await supabase
        .from("user_sessions")
        .select("session_id")
        .eq("session_id", this.sessionId)
        .single()

      if (verifyError) {
        console.error("Session verification error:", verifyError)
        throw verifyError
      }

      if (verifySession) {
        this.sessionVerified = true
        console.log("Session verified successfully:", this.sessionId)
      } else {
        throw new Error("Session verification failed - session not found")
      }
    } catch (error) {
      console.error("Session verification failed:", error)
      this.sessionVerified = false
      throw error
    }
  }

  private async finalVerifySession(): Promise<void> {
    if (!this.sessionId) return

    try {
      console.log("Final session verification:", this.sessionId)

      const { data, error } = await supabase
        .from("user_sessions")
        .select("session_id")
        .eq("session_id", this.sessionId)
        .single()

      if (error || !data) {
        console.error("Final verification failed:", error)
        this.sessionVerified = false
        throw new Error("Final session verification failed")
      }

      console.log("Final verification successful:", data.session_id)
    } catch (error) {
      console.error("Final verification error:", error)
      throw error
    }
  }

  private async getLocationInfo(): Promise<{ country: string; city: string }> {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 1500)

      const response = await fetch("https://ipapi.co/json/", {
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) throw new Error("Failed to fetch location")

      const data = await response.json()
      return {
        country: data.country_name || "Unknown",
        city: data.city || "Unknown",
      }
    } catch (error) {
      console.warn("Failed to get location info:", error)
      return { country: "Unknown", city: "Unknown" }
    }
  }

  private getDeviceType(): string {
    const userAgent = navigator.userAgent.toLowerCase()
    if (/tablet|ipad|playbook|silk/.test(userAgent)) {
      return "tablet"
    }
    if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/.test(userAgent)) {
      return "mobile"
    }
    return "desktop"
  }

  private getBrowserName(): string {
    const userAgent = navigator.userAgent
    if (userAgent.includes("Chrome")) return "Chrome"
    if (userAgent.includes("Firefox")) return "Firefox"
    if (userAgent.includes("Safari")) return "Safari"
    if (userAgent.includes("Edge")) return "Edge"
    if (userAgent.includes("Opera")) return "Opera"
    return "Unknown"
  }

  private getOperatingSystem(): string {
    const userAgent = navigator.userAgent
    if (userAgent.includes("Windows")) return "Windows"
    if (userAgent.includes("Mac")) return "macOS"
    if (userAgent.includes("Linux")) return "Linux"
    if (userAgent.includes("Android")) return "Android"
    if (userAgent.includes("iOS")) return "iOS"
    return "Unknown"
  }

  private getUrlParameter(name: string): string | null {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name)
  }

  private setupEventListeners(): void {
    // Track page visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.trackEvent("page_hidden", { timestamp: Date.now() })
      } else {
        this.trackEvent("page_visible", { timestamp: Date.now() })
      }
    })

    // Track beforeunload
    window.addEventListener("beforeunload", () => {
      this.trackEvent("page_unload", { timestamp: Date.now() })
    })

    // Track scroll events (heavily throttled)
    let scrollTimeout: NodeJS.Timeout
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        this.trackEvent("scroll", { scroll_depth: Math.min(100, Math.max(0, scrollDepth || 0)) })
      }, 1000) // Increased throttle to reduce events
    })
  }

  private setupPerformanceTracking(): void {
    // Track Core Web Vitals and basic performance metrics
    window.addEventListener("load", () => {
      setTimeout(() => {
        try {
          const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
          if (navigation) {
            this.trackPerformanceMetric("page_load_time", navigation.loadEventEnd - navigation.loadEventStart)
            this.trackPerformanceMetric(
              "dom_content_loaded",
              navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            )
            this.trackPerformanceMetric("first_contentful_paint", navigation.loadEventEnd - navigation.fetchStart)
          }
        } catch (error) {
          console.warn("Performance tracking failed:", error)
        }
      }, 2000) // Increased delay to ensure session is ready
    })
  }

  async waitForInitialization(): Promise<void> {
    if (this.initPromise) {
      await this.initPromise
    }
  }

  isReady(): boolean {
    return this.isInitialized && this.sessionId !== null && this.sessionCreated && this.sessionVerified
  }

  async trackPageView(url: string, title?: string): Promise<void> {
    try {
      await this.waitForInitialization()

      if (!this.isReady()) {
        console.warn("Cannot track page view: session not ready or verified")
        return
      }

      // Double-check session exists before tracking
      await this.ensureSessionStillExists()

      const pageViewData: PageView = {
        session_id: this.sessionId!,
        page_url: url,
        page_title: title || document.title,
        referrer: document.referrer || null,
        load_time: Math.round(performance.now()),
      }

      console.log("Tracking page view:", { session_id: pageViewData.session_id, page_url: pageViewData.page_url })

      const { data, error } = await supabase.from("page_views").insert(pageViewData).select()

      if (error) {
        console.error("Failed to track page view:", error)

        // If foreign key error, try to recreate session
        if (error.code === "23503") {
          console.log("Foreign key error in page view, attempting to recreate session")
          await this.handleForeignKeyError()
        }
        return
      }

      console.log("Page view tracked successfully:", url)
    } catch (error) {
      console.error("Page view tracking error:", error)
    }
  }

  private async ensureSessionStillExists(): Promise<void> {
    if (!this.sessionId) return

    try {
      const { data, error } = await supabase
        .from("user_sessions")
        .select("session_id")
        .eq("session_id", this.sessionId)
        .single()

      if (error || !data) {
        console.warn("Session no longer exists, recreating...")
        await this.handleForeignKeyError()
      }
    } catch (error) {
      console.warn("Error checking session existence:", error)
    }
  }

  private async handleForeignKeyError(): Promise<void> {
    console.log("Handling foreign key error - recreating session")

    // Reset state
    this.sessionCreated = false
    this.sessionVerified = false

    // Generate new session ID
    this.sessionId = this.generateSessionId()
    sessionStorage.setItem("analytics_session_id", this.sessionId)

    // Recreate session
    try {
      await this.createSessionWithRetry()
    } catch (error) {
      console.error("Failed to recreate session after foreign key error:", error)
    }
  }

  async trackEvent(eventType: string, eventData?: Record<string, any>): Promise<void> {
    try {
      await this.waitForInitialization()

      if (!this.isReady()) {
        console.warn("Cannot track event: session not ready or verified")
        return
      }

      const userEventData: UserEvent = {
        session_id: this.sessionId!,
        event_type: eventType,
        event_data: eventData || {},
        page_url: window.location.pathname,
        page_title: document.title,
      }

      const { data, error } = await supabase.from("user_events").insert(userEventData).select()

      if (error) {
        console.error("Failed to track event:", error)

        // If foreign key error, try to recreate session
        if (error.code === "23503") {
          console.log("Foreign key error in event tracking, attempting to recreate session")
          await this.handleForeignKeyError()
        }
        return
      }

      console.log("Event tracked:", eventType)
    } catch (error) {
      console.error("Event tracking error:", error)
    }
  }

  async trackClick(element: HTMLElement, x: number, y: number): Promise<void> {
    try {
      await this.waitForInitialization()

      if (!this.isReady()) {
        console.warn("Cannot track click: session not ready or verified")
        return
      }

      // Track as user event
      const elementSelector = this.getElementSelector(element)
      const elementText = element.textContent?.trim().substring(0, 100) || ""

      await this.trackEvent("click", {
        element_selector: elementSelector,
        element_text: elementText,
        coordinates: { x, y },
        element_tag: element.tagName.toLowerCase(),
      })

      // Track as heatmap data
      await this.trackHeatmapClick(x, y, elementSelector)
    } catch (error) {
      console.error("Click tracking error:", error)
    }
  }

  async trackHeatmapClick(x: number, y: number, elementSelector?: string): Promise<void> {
    try {
      await this.waitForInitialization()

      if (!this.isReady()) {
        console.warn("Cannot track heatmap click: session not ready or verified")
        return
      }

      const heatmapData: HeatmapData = {
        session_id: this.sessionId!,
        page_url: window.location.pathname,
        x_coordinate: Math.round(x),
        y_coordinate: Math.round(y),
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
        device_type: this.getDeviceType(),
        element_selector: elementSelector || null,
      }

      const { data, error } = await supabase.from("heatmap_data").insert(heatmapData).select()

      if (error) {
        console.error("Failed to track heatmap click:", error)

        if (error.code === "23503") {
          await this.handleForeignKeyError()
        }
        return
      }

      console.log("Heatmap click tracked:", { x, y })
    } catch (error) {
      console.error("Heatmap tracking error:", error)
    }
  }

  async trackPerformanceMetric(metricName: string, value: number): Promise<void> {
    try {
      await this.waitForInitialization()

      if (!this.isReady()) {
        console.warn("Cannot track performance metric: session not ready or verified")
        return
      }

      const performanceData: PerformanceMetric = {
        session_id: this.sessionId!,
        page_url: window.location.pathname,
        metric_name: metricName,
        metric_value: value,
      }

      const { data, error } = await supabase.from("performance_metrics").insert(performanceData).select()

      if (error) {
        console.error("Failed to track performance metric:", error)

        if (error.code === "23503") {
          await this.handleForeignKeyError()
        }
        return
      }

      console.log("Performance metric tracked:", metricName, value)
    } catch (error) {
      console.error("Performance tracking error:", error)
    }
  }

  private getElementSelector(element: HTMLElement): string {
    // Generate a CSS selector for the element
    if (element.id) {
      return `#${element.id}`
    }

    if (element.className) {
      const classes = element.className
        .split(" ")
        .filter((c) => c.trim())
        .join(".")
      if (classes) {
        return `.${classes}`
      }
    }

    // Fallback to tag name with position
    const parent = element.parentElement
    if (parent) {
      const siblings = Array.from(parent.children).filter((child) => child.tagName === element.tagName)
      const index = siblings.indexOf(element)
      return `${element.tagName.toLowerCase()}:nth-of-type(${index + 1})`
    }

    return element.tagName.toLowerCase()
  }

  getSessionId(): string | null {
    return this.sessionId
  }
}

// Export singleton instance
export const analytics = new AnalyticsManager()
