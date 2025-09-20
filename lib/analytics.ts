import { supabase } from "./supabase"
import type { UserSession, PageView, UserEvent, HeatmapData, PerformanceMetric } from "./supabase"

export class AnalyticsManager {
  private sessionId: string | null = null
  private isInitialized = false
  private initPromise: Promise<void> | null = null
  private sessionCreated = false

  constructor() {
    if (typeof window !== "undefined") {
      this.initPromise = this.initialize()
    }
  }

  private async initialize(): Promise<void> {
    try {
      // Generate or retrieve session ID
      this.sessionId = this.getOrCreateSessionId()

      // Create session record and wait for it to complete
      await this.createSession()

      // Set up event listeners
      this.setupEventListeners()

      // Set up performance tracking
      this.setupPerformanceTracking()

      this.isInitialized = true
      console.log("Analytics initialized with session:", this.sessionId)
    } catch (error) {
      console.error("Failed to initialize analytics:", error)
      // Continue with fallback session ID
      this.sessionId = this.generateSessionId()
      this.isInitialized = true
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

  private async createSession(): Promise<void> {
    if (!this.sessionId || this.sessionCreated) return

    try {
      // Get location info with timeout
      const locationInfo = await Promise.race([
        this.getLocationInfo(),
        new Promise<{ country: string; city: string }>((resolve) =>
          setTimeout(() => resolve({ country: "Unknown", city: "Unknown" }), 3000),
        ),
      ])

      const sessionData: UserSession = {
        session_id: this.sessionId,
        user_agent: navigator.userAgent,
        device_type: this.getDeviceType(),
        browser: this.getBrowserName(),
        os: this.getOperatingSystem(),
        screen_resolution: `${screen.width}x${screen.height}`,
        referrer: document.referrer || null,
        utm_source: this.getUrlParameter("utm_source"),
        utm_medium: this.getUrlParameter("utm_medium"),
        utm_campaign: this.getUrlParameter("utm_campaign"),
        country: locationInfo.country,
        city: locationInfo.city,
      }

      const { data, error } = await supabase.from("user_sessions").insert(sessionData).select()

      if (error) {
        console.error("Failed to create session:", error)
        throw error
      }

      this.sessionCreated = true
      console.log("Session created successfully:", data)
    } catch (error) {
      console.error("Session creation error:", error)
      // Mark as created to prevent infinite retries
      this.sessionCreated = true
      throw error
    }
  }

  private async getLocationInfo(): Promise<{ country: string; city: string }> {
    try {
      const response = await fetch("https://ipapi.co/json/")
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

    // Track scroll events
    let scrollTimeout: NodeJS.Timeout
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        this.trackEvent("scroll", { scroll_depth: scrollDepth })
      }, 250)
    })

    // Track clicks
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement
      if (target) {
        this.trackClick(target, event.clientX, event.clientY)
      }
    })
  }

  private setupPerformanceTracking(): void {
    // Track Core Web Vitals and basic performance metrics
    window.addEventListener("load", () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
        if (navigation) {
          this.trackPerformanceMetric("page_load_time", navigation.loadEventEnd - navigation.loadEventStart)
          this.trackPerformanceMetric(
            "dom_content_loaded",
            navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          )
          this.trackPerformanceMetric("first_contentful_paint", navigation.loadEventEnd - navigation.fetchStart)
        }
      }, 100)
    })
  }

  async waitForInitialization(): Promise<void> {
    if (this.initPromise) {
      await this.initPromise
    }
  }

  isReady(): boolean {
    return this.isInitialized && this.sessionId !== null && this.sessionCreated
  }

  async trackPageView(url: string, title?: string): Promise<void> {
    await this.waitForInitialization()

    if (!this.sessionId || !this.sessionCreated) {
      console.warn("Cannot track page view: session not ready")
      return
    }

    const pageViewData: PageView = {
      session_id: this.sessionId,
      page_url: url,
      page_title: title || document.title,
      referrer: document.referrer || null,
      load_time: Math.round(performance.now()),
    }

    try {
      const { data, error } = await supabase.from("page_views").insert(pageViewData).select()

      if (error) {
        console.error("Failed to track page view:", error)
        return
      }

      console.log("Page view tracked:", url)
    } catch (error) {
      console.error("Page view tracking error:", error)
    }
  }

  async trackEvent(eventType: string, eventData?: Record<string, any>): Promise<void> {
    await this.waitForInitialization()

    if (!this.sessionId || !this.sessionCreated) {
      console.warn("Cannot track event: session not ready")
      return
    }

    const userEventData: UserEvent = {
      session_id: this.sessionId,
      event_type: eventType,
      event_data: eventData || {},
      page_url: window.location.pathname,
    }

    try {
      const { data, error } = await supabase.from("user_events").insert(userEventData).select()

      if (error) {
        console.error("Failed to track event:", error)
        return
      }

      console.log("Event tracked:", eventType, eventData)
    } catch (error) {
      console.error("Event tracking error:", error)
    }
  }

  async trackClick(element: HTMLElement, x: number, y: number): Promise<void> {
    await this.waitForInitialization()

    if (!this.sessionId || !this.sessionCreated) {
      console.warn("Cannot track click: session not ready")
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
  }

  async trackHeatmapClick(x: number, y: number, elementSelector?: string): Promise<void> {
    await this.waitForInitialization()

    if (!this.sessionId || !this.sessionCreated) {
      console.warn("Cannot track heatmap click: session not ready")
      return
    }

    const heatmapData: HeatmapData = {
      session_id: this.sessionId,
      page_url: window.location.pathname,
      x_coordinate: Math.round(x),
      y_coordinate: Math.round(y),
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      device_type: this.getDeviceType(),
      element_selector: elementSelector || null,
    }

    try {
      const { data, error } = await supabase.from("heatmap_data").insert(heatmapData).select()

      if (error) {
        console.error("Failed to track heatmap click:", error)
        return
      }

      console.log("Heatmap click tracked:", { x, y })
    } catch (error) {
      console.error("Heatmap tracking error:", error)
    }
  }

  async trackPerformanceMetric(metricName: string, value: number): Promise<void> {
    await this.waitForInitialization()

    if (!this.sessionId || !this.sessionCreated) {
      console.warn("Cannot track performance metric: session not ready")
      return
    }

    const performanceData: PerformanceMetric = {
      session_id: this.sessionId,
      page_url: window.location.pathname,
      metric_name: metricName,
      metric_value: value,
    }

    try {
      const { data, error } = await supabase.from("performance_metrics").insert(performanceData).select()

      if (error) {
        console.error("Failed to track performance metric:", error)
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
