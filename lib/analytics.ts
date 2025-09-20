export interface AnalyticsEvent {
  id?: string
  session_id: string
  user_id?: string
  event_type: "page_view" | "click" | "scroll" | "form_submit" | "conversion" | "heatmap" | "ab_test"
  event_data: Record<string, any>
  page_url: string
  user_agent: string
  ip_address?: string
  timestamp: Date
  device_type: "desktop" | "tablet" | "mobile"
  browser: string
  country?: string
  city?: string
}

export interface ConversionEvent {
  id?: string
  session_id: string
  user_id?: string
  conversion_type: "whatsapp_click" | "form_submit" | "email_signup" | "demo_request" | "contact_form"
  conversion_value?: number
  source_page: string
  funnel_step: number
  timestamp: Date
  user_data?: Record<string, any>
}

export interface HeatmapData {
  id?: string
  session_id: string
  page_url: string
  element_selector: string
  click_x: number
  click_y: number
  viewport_width: number
  viewport_height: number
  scroll_depth: number
  timestamp: Date
  device_type: "desktop" | "tablet" | "mobile"
}

export interface UserSession {
  id?: string
  session_id: string
  user_id?: string
  start_time: Date
  end_time?: Date
  page_views: number
  total_time: number
  bounce_rate: boolean
  conversion_count: number
  device_info: {
    type: "desktop" | "tablet" | "mobile"
    browser: string
    os: string
    screen_resolution: string
  }
  location?: {
    country: string
    city: string
    timezone: string
  }
}

export class AnalyticsTracker {
  private sessionId: string
  private userId?: string
  private startTime: Date
  private pageStartTime: Date
  private scrollDepth = 0
  private maxScrollDepth = 0
  private interactions = 0
  private isTracking = true

  constructor() {
    this.sessionId = this.generateSessionId()
    this.startTime = new Date()
    this.pageStartTime = new Date()
    this.initializeTracking()
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private initializeTracking() {
    if (typeof window === "undefined") return

    // Track page views
    this.trackPageView()

    // Track scroll depth
    this.trackScrollDepth()

    // Track clicks
    this.trackClicks()

    // Track form submissions
    this.trackFormSubmissions()

    // Track page unload
    this.trackPageUnload()

    // Track mouse movements for heatmap
    this.trackMouseMovements()
  }

  private async sendEvent(event: Partial<AnalyticsEvent>) {
    if (!this.isTracking) return

    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...event,
          session_id: this.sessionId,
          user_id: this.userId,
          timestamp: new Date(),
          user_agent: navigator.userAgent,
          device_type: this.getDeviceType(),
          browser: this.getBrowser(),
        }),
      })
    } catch (error) {
      console.error("Analytics tracking error:", error)
    }
  }

  private trackPageView() {
    this.sendEvent({
      event_type: "page_view",
      page_url: window.location.pathname,
      event_data: {
        referrer: document.referrer,
        title: document.title,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      },
    })
  }

  private trackScrollDepth() {
    let ticking = false

    const updateScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      this.scrollDepth = Math.round((scrollTop / docHeight) * 100)

      if (this.scrollDepth > this.maxScrollDepth) {
        this.maxScrollDepth = this.scrollDepth

        // Send scroll milestone events
        if (this.maxScrollDepth >= 25 && this.maxScrollDepth < 50) {
          this.sendEvent({
            event_type: "scroll",
            page_url: window.location.pathname,
            event_data: { depth: 25, milestone: "25%" },
          })
        } else if (this.maxScrollDepth >= 50 && this.maxScrollDepth < 75) {
          this.sendEvent({
            event_type: "scroll",
            page_url: window.location.pathname,
            event_data: { depth: 50, milestone: "50%" },
          })
        } else if (this.maxScrollDepth >= 75 && this.maxScrollDepth < 90) {
          this.sendEvent({
            event_type: "scroll",
            page_url: window.location.pathname,
            event_data: { depth: 75, milestone: "75%" },
          })
        } else if (this.maxScrollDepth >= 90) {
          this.sendEvent({
            event_type: "scroll",
            page_url: window.location.pathname,
            event_data: { depth: 90, milestone: "90%" },
          })
        }
      }

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDepth)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
  }

  private trackClicks() {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement
      const elementInfo = this.getElementInfo(target)

      this.interactions++

      this.sendEvent({
        event_type: "click",
        page_url: window.location.pathname,
        event_data: {
          element: elementInfo,
          coordinates: {
            x: event.clientX,
            y: event.clientY,
          },
          interactions_count: this.interactions,
        },
      })

      // Track heatmap data
      this.trackHeatmapClick(event)

      // Check for conversion events
      this.checkConversionClick(target, event)
    })
  }

  private trackFormSubmissions() {
    document.addEventListener("submit", (event) => {
      const form = event.target as HTMLFormElement
      const formData = new FormData(form)
      const formFields: Record<string, any> = {}

      formData.forEach((value, key) => {
        formFields[key] = value
      })

      this.sendEvent({
        event_type: "form_submit",
        page_url: window.location.pathname,
        event_data: {
          form_id: form.id,
          form_action: form.action,
          form_method: form.method,
          fields: Object.keys(formFields),
          field_count: Object.keys(formFields).length,
        },
      })

      // Track as conversion
      this.trackConversion("form_submit", {
        form_id: form.id,
        fields: formFields,
      })
    })
  }

  private trackPageUnload() {
    window.addEventListener("beforeunload", () => {
      const timeOnPage = Date.now() - this.pageStartTime.getTime()

      navigator.sendBeacon(
        "/api/analytics",
        JSON.stringify({
          session_id: this.sessionId,
          user_id: this.userId,
          event_type: "page_unload",
          page_url: window.location.pathname,
          event_data: {
            time_on_page: timeOnPage,
            max_scroll_depth: this.maxScrollDepth,
            interactions: this.interactions,
          },
          timestamp: new Date(),
          user_agent: navigator.userAgent,
          device_type: this.getDeviceType(),
          browser: this.getBrowser(),
        }),
      )
    })
  }

  private trackMouseMovements() {
    let mousePositions: Array<{ x: number; y: number; timestamp: number }> = []
    let lastSent = Date.now()

    document.addEventListener("mousemove", (event) => {
      mousePositions.push({
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now(),
      })

      // Send mouse data every 5 seconds
      if (Date.now() - lastSent > 5000 && mousePositions.length > 0) {
        this.sendEvent({
          event_type: "heatmap",
          page_url: window.location.pathname,
          event_data: {
            mouse_positions: mousePositions,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
          },
        })

        mousePositions = []
        lastSent = Date.now()
      }
    })
  }

  private trackHeatmapClick(event: MouseEvent) {
    const target = event.target as HTMLElement

    fetch("/api/heatmap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: this.sessionId,
        page_url: window.location.pathname,
        element_selector: this.getElementSelector(target),
        click_x: event.clientX,
        click_y: event.clientY,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
        scroll_depth: this.scrollDepth,
        timestamp: new Date(),
        device_type: this.getDeviceType(),
      }),
    }).catch((error) => console.error("Heatmap tracking error:", error))
  }

  private checkConversionClick(target: HTMLElement, event: MouseEvent) {
    // Check for WhatsApp clicks
    if (target.closest('a[href*="wa.me"]') || target.closest('a[href*="whatsapp"]')) {
      this.trackConversion("whatsapp_click", {
        element: this.getElementInfo(target),
        coordinates: { x: event.clientX, y: event.clientY },
      })
    }

    // Check for contact form clicks
    if (target.closest('[data-conversion="contact"]')) {
      this.trackConversion("contact_form", {
        element: this.getElementInfo(target),
      })
    }

    // Check for demo request clicks
    if (target.closest('[data-conversion="demo"]')) {
      this.trackConversion("demo_request", {
        element: this.getElementInfo(target),
      })
    }
  }

  public trackConversion(type: ConversionEvent["conversion_type"], data?: Record<string, any>) {
    fetch("/api/conversions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: this.sessionId,
        user_id: this.userId,
        conversion_type: type,
        source_page: window.location.pathname,
        funnel_step: this.getFunnelStep(),
        timestamp: new Date(),
        user_data: data,
      }),
    }).catch((error) => console.error("Conversion tracking error:", error))
  }

  public trackABTest(testName: string, variant: string) {
    this.sendEvent({
      event_type: "ab_test",
      page_url: window.location.pathname,
      event_data: {
        test_name: testName,
        variant: variant,
        session_id: this.sessionId,
      },
    })
  }

  private getElementInfo(element: HTMLElement) {
    return {
      tag: element.tagName.toLowerCase(),
      id: element.id,
      classes: Array.from(element.classList),
      text: element.textContent?.slice(0, 100),
      href: element.getAttribute("href"),
      type: element.getAttribute("type"),
    }
  }

  private getElementSelector(element: HTMLElement): string {
    if (element.id) return `#${element.id}`

    let selector = element.tagName.toLowerCase()
    if (element.className) {
      selector += "." + Array.from(element.classList).join(".")
    }

    return selector
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

  private getFunnelStep(): number {
    const path = window.location.pathname
    if (path === "/") return 1
    if (path.includes("/services") || path.includes("/products")) return 2
    if (path.includes("/contact") || path.includes("/demo")) return 3
    return 1
  }

  public setUserId(userId: string) {
    this.userId = userId
  }

  public getSessionId(): string {
    return this.sessionId
  }

  public stopTracking() {
    this.isTracking = false
  }
}

// Singleton instance
export const analyticsTracker = new AnalyticsTracker()
