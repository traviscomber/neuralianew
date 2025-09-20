import analytics from "./analytics"

export interface ConversionGoal {
  id: string
  name: string
  type: "click" | "form" | "scroll" | "time" | "page_view"
  selector?: string
  value?: number
  conditions?: Record<string, any>
}

export const CONVERSION_GOALS: ConversionGoal[] = [
  {
    id: "whatsapp_click",
    name: "WhatsApp Contact Click",
    type: "click",
    selector: '[data-conversion="whatsapp_click"]',
    value: 10,
  },
  {
    id: "hero_cta",
    name: "Hero CTA Click",
    type: "click",
    selector: '[data-conversion="hero_cta"]',
    value: 15,
  },
  {
    id: "contact_form",
    name: "Contact Form Submission",
    type: "form",
    selector: '[data-conversion="contact_form"]',
    value: 25,
  },
  {
    id: "demo_request",
    name: "Demo Request",
    type: "click",
    selector: '[data-conversion="demo_request"]',
    value: 30,
  },
  {
    id: "newsletter_signup",
    name: "Newsletter Signup",
    type: "form",
    selector: '[data-conversion="newsletter_signup"]',
    value: 5,
  },
  {
    id: "scroll_engagement",
    name: "Deep Scroll Engagement",
    type: "scroll",
    conditions: { scroll_depth: 80 },
    value: 2,
  },
  {
    id: "time_engagement",
    name: "Time Engagement",
    type: "time",
    conditions: { time_on_page: 120 }, // 2 minutes
    value: 3,
  },
]

class ConversionTracker {
  private trackedConversions = new Set<string>()
  private timeEngagementTracked = false
  private scrollEngagementTracked = false
  private pageStartTime = Date.now()

  constructor() {
    if (typeof window !== "undefined") {
      this.initializeTracking()
    }
  }

  private initializeTracking() {
    // Track click conversions
    this.setupClickTracking()

    // Track form conversions
    this.setupFormTracking()

    // Track scroll conversions
    this.setupScrollTracking()

    // Track time-based conversions
    this.setupTimeTracking()

    // Track exit intent
    this.setupExitIntentTracking()
  }

  private setupClickTracking() {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement
      const conversionType = target.getAttribute("data-conversion")

      if (conversionType) {
        this.trackConversion(conversionType, target)
      }
    })
  }

  private setupFormTracking() {
    document.addEventListener("submit", (event) => {
      const form = event.target as HTMLFormElement
      const conversionType = form.getAttribute("data-conversion")

      if (conversionType) {
        this.trackConversion(conversionType, form)
      }
    })
  }

  private setupScrollTracking() {
    let maxScrollDepth = 0

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      const scrollPercentage = Math.round(((scrollTop + windowHeight) / documentHeight) * 100)

      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage

        // Check for scroll-based conversions
        const scrollGoal = CONVERSION_GOALS.find(
          (goal) =>
            goal.type === "scroll" &&
            goal.conditions?.scroll_depth <= scrollPercentage &&
            !this.scrollEngagementTracked,
        )

        if (scrollGoal) {
          this.trackConversion(scrollGoal.id)
          this.scrollEngagementTracked = true
        }
      }
    }

    let scrollTimeout: NodeJS.Timeout
    document.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 100)
    })
  }

  private setupTimeTracking() {
    // Track time milestones
    const timeGoals = CONVERSION_GOALS.filter((goal) => goal.type === "time")

    timeGoals.forEach((goal) => {
      const timeThreshold = goal.conditions?.time_on_page * 1000 // Convert to ms

      setTimeout(() => {
        if (!this.timeEngagementTracked) {
          this.trackConversion(goal.id)
          this.timeEngagementTracked = true
        }
      }, timeThreshold)
    })

    // Track engagement milestones
    const engagementMilestones = [30000, 120000, 300000] // 30s, 2min, 5min

    engagementMilestones.forEach((milestone) => {
      setTimeout(() => {
        this.trackConversion(`time_engagement_${milestone / 1000}s`, null, {
          milestone: milestone / 1000,
          time_on_page: (Date.now() - this.pageStartTime) / 1000,
        })
      }, milestone)
    })
  }

  private setupExitIntentTracking() {
    let exitIntentTracked = false

    // Mouse leave detection
    document.addEventListener("mouseleave", (event) => {
      if (event.clientY <= 0 && !exitIntentTracked) {
        this.trackConversion("exit_intent", null, {
          trigger: "mouse_leave",
          time_on_page: (Date.now() - this.pageStartTime) / 1000,
        })
        exitIntentTracked = true
      }
    })

    // Tab visibility change
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && !exitIntentTracked) {
        this.trackConversion("exit_intent", null, {
          trigger: "tab_hidden",
          time_on_page: (Date.now() - this.pageStartTime) / 1000,
        })
        exitIntentTracked = true
      }
    })
  }

  async trackConversion(conversionType: string, element?: HTMLElement | null, additionalData?: Record<string, any>) {
    // Prevent duplicate tracking
    const conversionKey = `${conversionType}_${Date.now()}`
    if (this.trackedConversions.has(conversionKey)) return

    this.trackedConversions.add(conversionKey)

    // Find conversion goal
    const goal = CONVERSION_GOALS.find((g) => g.id === conversionType)
    const value = goal?.value || 0

    // Prepare conversion data
    const conversionData = {
      conversion_type: conversionType,
      conversion_value: value,
      source_page: window.location.href,
      target_element: element ? this.getElementSelector(element) : null,
      conversion_data: {
        goal_name: goal?.name,
        element_text: element?.textContent?.trim().substring(0, 100),
        timestamp: new Date().toISOString(),
        ...additionalData,
      },
    }

    // Track via analytics
    await analytics.trackConversion(conversionType, value, conversionData)

    // Dispatch custom event for other listeners
    window.dispatchEvent(
      new CustomEvent("conversion", {
        detail: conversionData,
      }),
    )

    console.log("Conversion tracked:", conversionData)
  }

  private getElementSelector(element: HTMLElement): string {
    if (element.id) return `#${element.id}`
    if (element.className) return `.${element.className.split(" ").join(".")}`
    return element.tagName.toLowerCase()
  }

  // Public methods
  addConversionGoal(goal: ConversionGoal) {
    CONVERSION_GOALS.push(goal)
  }

  removeConversionGoal(goalId: string) {
    const index = CONVERSION_GOALS.findIndex((g) => g.id === goalId)
    if (index > -1) {
      CONVERSION_GOALS.splice(index, 1)
    }
  }

  getConversionGoals(): ConversionGoal[] {
    return [...CONVERSION_GOALS]
  }

  // Manual conversion tracking
  async manualTrackConversion(conversionType: string, value?: number, data?: Record<string, any>) {
    await this.trackConversion(conversionType, null, { manual: true, ...data })
  }

  // Reset tracking state (useful for SPA navigation)
  resetTracking() {
    this.trackedConversions.clear()
    this.timeEngagementTracked = false
    this.scrollEngagementTracked = false
    this.pageStartTime = Date.now()
  }
}

// Create singleton instance
export const conversionTracker = new ConversionTracker()

// Export for use in React components
export default conversionTracker
