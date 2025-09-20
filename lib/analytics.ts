import { createClient } from "./supabase"

export interface AnalyticsEvent {
  session_id: string
  page_url: string
  event_type: string
  element_selector?: string
  element_text?: string
  element_attributes?: Record<string, any>
  coordinates?: { x: number; y: number; viewport_width: number; viewport_height: number }
  event_data?: Record<string, any>
}

export interface PageView {
  session_id: string
  page_url: string
  page_title?: string
  referrer?: string
  load_time_ms?: number
  scroll_depth?: number
  time_on_page_seconds?: number
}

export interface UserSession {
  session_id?: string
  user_id?: string
  device_info: Record<string, any>
  browser_info: Record<string, any>
  location: Record<string, any>
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  referrer?: string
  ip_address?: string
  user_agent: string
}

class AnalyticsManager {
  private supabase = createClient()
  private sessionId: string | null = null
  private pageStartTime: number = Date.now()
  private maxScrollDepth = 0
  private isTracking = false

  constructor() {
    if (typeof window !== "undefined") {
      this.initializeSession()
      this.setupEventListeners()
    }
  }

  private async initializeSession() {
    // Get or create session ID
    this.sessionId = sessionStorage.getItem("analytics_session_id")

    if (!this.sessionId) {
      this.sessionId = this.generateSessionId()
      sessionStorage.setItem("analytics_session_id", this.sessionId)

      // Create new session record
      await this.createSession()
    }

    this.isTracking = true

    // Track initial page view
    await this.trackPageView()
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private async createSession() {
    if (!this.sessionId) return

    const sessionData: UserSession = {
      session_id: this.sessionId,
      device_info: this.getDeviceInfo(),
      browser_info: this.getBrowserInfo(),
      location: await this.getLocationInfo(),
      utm_source: this.getUrlParameter("utm_source"),
      utm_medium: this.getUrlParameter("utm_medium"),
      utm_campaign: this.getUrlParameter("utm_campaign"),
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    }

    try {
      const { error } = await this.supabase.from("user_sessions").insert(sessionData)

      if (error) {
        console.error("Failed to create session:", error)
      }
    } catch (error) {
      console.error("Session creation error:", error)
    }
  }

  private getDeviceInfo() {
    const width = window.innerWidth
    let deviceType = "desktop"

    if (width <= 768) deviceType = "mobile"
    else if (width <= 1024) deviceType = "tablet"

    return {
      type: deviceType,
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      pixel_ratio: window.devicePixelRatio || 1,
      os: this.getOperatingSystem(),
      touch_support: "ontouchstart" in window,
    }
  }

  private getBrowserInfo() {
    const ua = navigator.userAgent
    let browserName = "Unknown"
    let browserVersion = "Unknown"

    if (ua.includes("Chrome")) {
      browserName = "Chrome"
      browserVersion = ua.match(/Chrome\/([0-9.]+)/)?.[1] || "Unknown"
    } else if (ua.includes("Firefox")) {
      browserName = "Firefox"
      browserVersion = ua.match(/Firefox\/([0-9.]+)/)?.[1] || "Unknown"
    } else if (ua.includes("Safari")) {
      browserName = "Safari"
      browserVersion = ua.match(/Version\/([0-9.]+)/)?.[1] || "Unknown"
    } else if (ua.includes("Edge")) {
      browserName = "Edge"
      browserVersion = ua.match(/Edge\/([0-9.]+)/)?.[1] || "Unknown"
    }

    return {
      name: browserName,
      version: browserVersion,
      language: navigator.language,
      languages: navigator.languages,
      cookie_enabled: navigator.cookieEnabled,
      do_not_track: navigator.doNotTrack === "1",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }
  }

  private getOperatingSystem(): string {
    const ua = navigator.userAgent
    if (ua.includes("Windows")) return "Windows"
    if (ua.includes("Mac")) return "macOS"
    if (ua.includes("Linux")) return "Linux"
    if (ua.includes("Android")) return "Android"
    if (ua.includes("iOS")) return "iOS"
    return "Unknown"
  }

  private async getLocationInfo() {
    try {
      // Use a geolocation service or IP-based location
      const response = await fetch("https://ipapi.co/json/")
      const data = await response.json()

      return {
        country: data.country_name,
        country_code: data.country_code,
        region: data.region,
        city: data.city,
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone,
        isp: data.org,
      }
    } catch (error) {
      console.error("Failed to get location:", error)
      return {
        country: "Unknown",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }
    }
  }

  private getUrlParameter(name: string): string | null {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name)
  }

  private setupEventListeners() {
    if (typeof window === "undefined") return

    // Track clicks
    document.addEventListener("click", (event) => {
      this.trackClick(event)
    })

    // Track scroll depth
    let scrollTimeout: NodeJS.Timeout
    document.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        this.trackScrollDepth()
      }, 100)
    })

    // Track page unload
    window.addEventListener("beforeunload", () => {
      this.trackPageExit()
    })

    // Track visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.trackPageExit()
      } else {
        this.pageStartTime = Date.now()
      }
    })

    // Track form submissions
    document.addEventListener("submit", (event) => {
      this.trackFormSubmission(event)
    })

    // Track performance metrics
    if ("performance" in window) {
      window.addEventListener("load", () => {
        setTimeout(() => this.trackPerformanceMetrics(), 1000)
      })
    }
  }

  async trackPageView(customData?: Partial<PageView>) {
    if (!this.sessionId || !this.isTracking) return

    const pageViewData: PageView = {
      session_id: this.sessionId,
      page_url: window.location.href,
      page_title: document.title,
      referrer: document.referrer || null,
      load_time_ms: performance.now(),
      ...customData,
    }

    try {
      const { error } = await this.supabase.from("page_views").insert(pageViewData)

      if (error) {
        console.error("Failed to track page view:", error)
      }
    } catch (error) {
      console.error("Page view tracking error:", error)
    }
  }

  async trackEvent(eventData: Partial<AnalyticsEvent>) {
    if (!this.sessionId || !this.isTracking) return

    const event: AnalyticsEvent = {
      session_id: this.sessionId,
      page_url: window.location.href,
      event_type: "custom",
      ...eventData,
    }

    try {
      const { error } = await this.supabase.from("user_events").insert(event)

      if (error) {
        console.error("Failed to track event:", error)
      }
    } catch (error) {
      console.error("Event tracking error:", error)
    }
  }

  private async trackClick(event: MouseEvent) {
    const target = event.target as HTMLElement
    if (!target) return

    const elementSelector = this.getElementSelector(target)
    const elementText = target.textContent?.trim().substring(0, 100) || ""

    // Track heatmap data
    await this.trackHeatmapClick(event.clientX, event.clientY)

    // Track click event
    await this.trackEvent({
      event_type: "click",
      element_selector: elementSelector,
      element_text: elementText,
      element_attributes: this.getElementAttributes(target),
      coordinates: {
        x: event.clientX,
        y: event.clientY,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
      },
    })
  }

  private async trackHeatmapClick(x: number, y: number) {
    if (!this.sessionId) return

    const deviceInfo = this.getDeviceInfo()

    try {
      const { error } = await this.supabase.from("heatmap_data").insert({
        session_id: this.sessionId,
        page_url: window.location.href,
        click_x: x,
        click_y: y,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
        device_type: deviceInfo.type,
      })

      if (error) {
        console.error("Failed to track heatmap click:", error)
      }
    } catch (error) {
      console.error("Heatmap tracking error:", error)
    }
  }

  private trackScrollDepth() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    const scrollPercentage = Math.round(((scrollTop + windowHeight) / documentHeight) * 100)

    if (scrollPercentage > this.maxScrollDepth) {
      this.maxScrollDepth = scrollPercentage

      // Track milestone scroll depths
      const milestones = [25, 50, 75, 90]
      const milestone = milestones.find((m) => scrollPercentage >= m && this.maxScrollDepth < m)

      if (milestone) {
        this.trackEvent({
          event_type: "scroll",
          event_data: {
            scroll_depth: scrollPercentage,
            milestone: milestone,
          },
        })
      }
    }
  }

  private trackPageExit() {
    if (!this.sessionId) return

    const timeOnPage = Math.round((Date.now() - this.pageStartTime) / 1000)

    // Update page view with exit data
    this.supabase
      .from("page_views")
      .update({
        time_on_page_seconds: timeOnPage,
        scroll_depth: this.maxScrollDepth,
        exit_page: true,
      })
      .eq("session_id", this.sessionId)
      .eq("page_url", window.location.href)
      .then(({ error }) => {
        if (error) {
          console.error("Failed to update page exit:", error)
        }
      })
  }

  private async trackFormSubmission(event: SubmitEvent) {
    const form = event.target as HTMLFormElement
    if (!form) return

    const formData = new FormData(form)
    const formFields = Array.from(formData.keys())

    await this.trackEvent({
      event_type: "form_submit",
      element_selector: this.getElementSelector(form),
      event_data: {
        form_id: form.id,
        form_action: form.action,
        form_method: form.method,
        field_count: formFields.length,
        fields: formFields,
      },
    })
  }

  private async trackPerformanceMetrics() {
    if (!("performance" in window) || !this.sessionId) return

    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
    const paint = performance.getEntriesByType("paint")

    const metrics = [
      { name: "TTFB", value: navigation.responseStart - navigation.requestStart },
      { name: "DOM_LOAD", value: navigation.domContentLoadedEventEnd - navigation.navigationStart },
      { name: "WINDOW_LOAD", value: navigation.loadEventEnd - navigation.navigationStart },
    ]

    // Add paint metrics
    paint.forEach((entry) => {
      metrics.push({
        name: entry.name.toUpperCase().replace("-", "_"),
        value: entry.startTime,
      })
    })

    // Track Core Web Vitals if available
    if ("web-vitals" in window) {
      // This would require importing web-vitals library
      // For now, we'll track basic metrics
    }

    for (const metric of metrics) {
      try {
        await this.supabase.from("performance_metrics").insert({
          session_id: this.sessionId,
          page_url: window.location.href,
          metric_name: metric.name,
          metric_value: metric.value,
        })
      } catch (error) {
        console.error("Failed to track performance metric:", error)
      }
    }
  }

  private getElementSelector(element: HTMLElement): string {
    if (element.id) return `#${element.id}`
    if (element.className) return `.${element.className.split(" ").join(".")}`
    return element.tagName.toLowerCase()
  }

  private getElementAttributes(element: HTMLElement): Record<string, any> {
    const attributes: Record<string, any> = {}

    for (let i = 0; i < element.attributes.length; i++) {
      const attr = element.attributes[i]
      attributes[attr.name] = attr.value
    }

    return attributes
  }

  // Public methods for manual tracking
  async trackConversion(conversionType: string, value?: number, additionalData?: Record<string, any>) {
    if (!this.sessionId) return

    try {
      const { error } = await this.supabase.from("conversions").insert({
        session_id: this.sessionId,
        conversion_type: conversionType,
        conversion_value: value,
        source_page: window.location.href,
        conversion_data: additionalData || {},
      })

      if (error) {
        console.error("Failed to track conversion:", error)
      }
    } catch (error) {
      console.error("Conversion tracking error:", error)
    }
  }

  async trackCustomEvent(eventType: string, eventData?: Record<string, any>) {
    await this.trackEvent({
      event_type: eventType,
      event_data: eventData,
    })
  }

  // Get session ID for external use
  getSessionId(): string | null {
    return this.sessionId
  }

  // Stop tracking
  stopTracking() {
    this.isTracking = false
  }

  // Resume tracking
  startTracking() {
    this.isTracking = true
  }
}

// Create singleton instance
export const analytics = new AnalyticsManager()

// Export for use in React components
export default analytics
