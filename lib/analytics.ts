import { createClient } from "@/lib/supabase-browser"

export interface AnalyticsEvent {
  session_id: string
  event_type: "page_view" | "click" | "scroll" | "form_submit" | "conversion" | "heatmap" | "ab_test" | "page_unload"
  event_data: Record<string, any>
  page_url: string
  user_agent?: string
  device_type?: "desktop" | "tablet" | "mobile"
  browser?: string
  country?: string
  city?: string
}

export interface UserSession {
  session_id: string
  user_id?: string
  device_info: Record<string, any>
  location: Record<string, any>
}

export interface HeatmapData {
  session_id: string
  page_url: string
  element_selector?: string
  click_x: number
  click_y: number
  viewport_width: number
  viewport_height: number
  scroll_depth?: number
  device_type?: "desktop" | "tablet" | "mobile"
}

export interface ConversionEvent {
  session_id: string
  user_id?: string
  conversion_type:
    | "whatsapp_click"
    | "form_submit"
    | "email_signup"
    | "demo_request"
    | "contact_form"
    | "hero_cta"
    | "services_cta"
  conversion_value?: number
  source_page: string
  funnel_step?: number
  user_data?: Record<string, any>
}

class AnalyticsService {
  private supabase = createClient()
  private sessionId: string
  private startTime: number
  private pageViews = 0
  private scrollDepth = 0
  private timeOnPage = 0
  private isTracking = false

  constructor() {
    this.sessionId = this.generateSessionId()
    this.startTime = Date.now()
    this.initializeSession()
    this.setupEventListeners()
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private async initializeSession() {
    try {
      const deviceInfo = this.getDeviceInfo()
      const location = await this.getLocationInfo()

      const { error } = await this.supabase.from("user_sessions").insert({
        session_id: this.sessionId,
        device_info: deviceInfo,
        location: location,
        start_time: new Date().toISOString(),
      })

      if (error) {
        console.error("Failed to initialize session:", error)
      } else {
        this.isTracking = true
      }
    } catch (error) {
      console.error("Session initialization error:", error)
    }
  }

  private getDeviceInfo() {
    const userAgent = navigator.userAgent
    const deviceType = this.getDeviceType()
    const browser = this.getBrowser()

    return {
      user_agent: userAgent,
      device_type: deviceType,
      browser: browser,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      platform: navigator.platform,
    }
  }

  private getDeviceType(): "desktop" | "tablet" | "mobile" {
    const width = window.innerWidth
    if (width < 768) return "mobile"
    if (width < 1024) return "tablet"
    return "desktop"
  }

  private getBrowser(): string {
    const userAgent = navigator.userAgent
    if (userAgent.includes("Chrome")) return "Chrome"
    if (userAgent.includes("Firefox")) return "Firefox"
    if (userAgent.includes("Safari")) return "Safari"
    if (userAgent.includes("Edge")) return "Edge"
    return "Unknown"
  }

  private async getLocationInfo() {
    try {
      // Use a geolocation API or IP-based service
      const response = await fetch("https://ipapi.co/json/")
      const data = await response.json()
      return {
        country: data.country_name,
        city: data.city,
        region: data.region,
        timezone: data.timezone,
        ip: data.ip,
      }
    } catch (error) {
      return {
        country: "Unknown",
        city: "Unknown",
        region: "Unknown",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }
    }
  }

  private setupEventListeners() {
    // Track page views
    this.trackPageView()

    // Track clicks
    document.addEventListener("click", (event) => {
      this.trackClick(event)
    })

    // Track scroll depth
    let maxScrollDepth = 0
    window.addEventListener("scroll", () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      )

      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent
        this.scrollDepth = scrollPercent

        // Track milestone scroll events
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          this.trackEvent({
            event_type: "scroll",
            event_data: {
              scroll_depth: scrollPercent,
              milestone: true,
            },
          })
        }
      }
    })

    // Track page unload
    window.addEventListener("beforeunload", () => {
      this.trackPageUnload()
    })

    // Track time on page
    setInterval(() => {
      this.timeOnPage += 1000

      // Track engagement milestones
      if ([30000, 120000, 300000].includes(this.timeOnPage)) {
        this.trackEvent({
          event_type: "scroll",
          event_data: {
            time_on_page: this.timeOnPage,
            engagement_milestone: true,
          },
        })
      }
    }, 1000)

    // Track form submissions
    document.addEventListener("submit", (event) => {
      this.trackFormSubmit(event)
    })
  }

  async trackEvent(eventData: Partial<AnalyticsEvent>) {
    if (!this.isTracking) return

    const event: AnalyticsEvent = {
      session_id: this.sessionId,
      event_type: eventData.event_type || "page_view",
      event_data: eventData.event_data || {},
      page_url: window.location.pathname,
      user_agent: navigator.userAgent,
      device_type: this.getDeviceType(),
      browser: this.getBrowser(),
      ...eventData,
    }

    try {
      const { error } = await this.supabase.from("user_analytics").insert(event)

      if (error) {
        console.error("Failed to track event:", error)
      }
    } catch (error) {
      console.error("Event tracking error:", error)
    }
  }

  trackPageView() {
    this.pageViews++
    this.trackEvent({
      event_type: "page_view",
      event_data: {
        page_title: document.title,
        referrer: document.referrer,
        page_views: this.pageViews,
        load_time: performance.now(),
      },
    })
  }

  trackClick(event: MouseEvent) {
    const target = event.target as HTMLElement
    const elementInfo = {
      tag_name: target.tagName,
      class_name: target.className,
      id: target.id,
      text_content: target.textContent?.slice(0, 100),
      href: target.getAttribute("href"),
      data_attributes: this.getDataAttributes(target),
    }

    this.trackEvent({
      event_type: "click",
      event_data: {
        element: elementInfo,
        coordinates: { x: event.clientX, y: event.clientY },
        scroll_depth: this.scrollDepth,
      },
    })

    // Track heatmap data
    this.trackHeatmapData({
      click_x: event.clientX,
      click_y: event.clientY,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      element_selector: this.getElementSelector(target),
      scroll_depth: this.scrollDepth,
    })
  }

  trackFormSubmit(event: SubmitEvent) {
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const formFields = Object.fromEntries(formData.entries())

    this.trackEvent({
      event_type: "form_submit",
      event_data: {
        form_id: form.id,
        form_action: form.action,
        form_method: form.method,
        field_count: Object.keys(formFields).length,
        fields: Object.keys(formFields),
      },
    })
  }

  trackPageUnload() {
    const timeOnPage = Date.now() - this.startTime

    this.trackEvent({
      event_type: "page_unload",
      event_data: {
        time_on_page: timeOnPage,
        page_views: this.pageViews,
        max_scroll_depth: this.scrollDepth,
        bounce: this.pageViews === 1 && timeOnPage < 30000,
      },
    })
  }

  async trackHeatmapData(data: Partial<HeatmapData>) {
    if (!this.isTracking) return

    const heatmapData: HeatmapData = {
      session_id: this.sessionId,
      page_url: window.location.pathname,
      click_x: data.click_x || 0,
      click_y: data.click_y || 0,
      viewport_width: data.viewport_width || window.innerWidth,
      viewport_height: data.viewport_height || window.innerHeight,
      device_type: this.getDeviceType(),
      ...data,
    }

    try {
      const { error } = await this.supabase.from("heatmap_data").insert(heatmapData)

      if (error) {
        console.error("Failed to track heatmap data:", error)
      }
    } catch (error) {
      console.error("Heatmap tracking error:", error)
    }
  }

  async trackConversion(conversionData: Partial<ConversionEvent>) {
    if (!this.isTracking) return

    const conversion: ConversionEvent = {
      session_id: this.sessionId,
      conversion_type: conversionData.conversion_type || "hero_cta",
      source_page: window.location.pathname,
      funnel_step: 1,
      ...conversionData,
    }

    try {
      const { error } = await this.supabase.from("conversions").insert(conversion)

      if (error) {
        console.error("Failed to track conversion:", error)
      }
    } catch (error) {
      console.error("Conversion tracking error:", error)
    }
  }

  private getDataAttributes(element: HTMLElement): Record<string, string> {
    const dataAttrs: Record<string, string> = {}
    for (const attr of element.attributes) {
      if (attr.name.startsWith("data-")) {
        dataAttrs[attr.name] = attr.value
      }
    }
    return dataAttrs
  }

  private getElementSelector(element: HTMLElement): string {
    if (element.id) return `#${element.id}`
    if (element.className) return `.${element.className.split(" ").join(".")}`
    return element.tagName.toLowerCase()
  }

  // Public methods for manual tracking
  public trackCustomEvent(eventType: string, eventData: Record<string, any>) {
    this.trackEvent({
      event_type: eventType as any,
      event_data: eventData,
    })
  }

  public trackCustomConversion(
    type: ConversionEvent["conversion_type"],
    value?: number,
    userData?: Record<string, any>,
  ) {
    this.trackConversion({
      conversion_type: type,
      conversion_value: value,
      user_data: userData,
    })
  }

  public getSessionId(): string {
    return this.sessionId
  }

  public getAnalyticsData() {
    return {
      sessionId: this.sessionId,
      pageViews: this.pageViews,
      timeOnPage: Date.now() - this.startTime,
      scrollDepth: this.scrollDepth,
      deviceType: this.getDeviceType(),
      browser: this.getBrowser(),
    }
  }
}

// Export singleton instance
export const analytics = new AnalyticsService()
export default analytics
