import { analytics } from "./analytics"

export type ConversionType =
  | "whatsapp_click"
  | "form_submit"
  | "email_signup"
  | "demo_request"
  | "contact_form"
  | "hero_cta"
  | "services_cta"

export interface ConversionGoal {
  type: ConversionType
  name: string
  description: string
  value?: number
  selector?: string
  event?: string
}

export const CONVERSION_GOALS: ConversionGoal[] = [
  {
    type: "whatsapp_click",
    name: "WhatsApp Contact",
    description: "User clicked WhatsApp contact button",
    value: 10,
    selector: '[data-conversion="whatsapp_click"]',
    event: "click",
  },
  {
    type: "hero_cta",
    name: "Hero CTA Click",
    description: "User clicked main hero call-to-action",
    value: 5,
    selector: '[data-conversion="hero_cta"]',
    event: "click",
  },
  {
    type: "services_cta",
    name: "Services CTA Click",
    description: "User clicked services call-to-action",
    value: 3,
    selector: '[data-conversion="services_cta"]',
    event: "click",
  },
  {
    type: "contact_form",
    name: "Contact Form Submit",
    description: "User submitted contact form",
    value: 15,
    selector: '[data-conversion="contact_form"]',
    event: "submit",
  },
  {
    type: "demo_request",
    name: "Demo Request",
    description: "User requested a demo",
    value: 20,
    selector: '[data-conversion="demo_request"]',
    event: "click",
  },
  {
    type: "email_signup",
    name: "Email Signup",
    description: "User signed up for newsletter",
    value: 2,
    selector: '[data-conversion="email_signup"]',
    event: "submit",
  },
]

class ConversionTracker {
  private goals: ConversionGoal[] = CONVERSION_GOALS
  private isInitialized = false

  constructor() {
    this.initialize()
  }

  private initialize() {
    if (this.isInitialized || typeof window === "undefined") return

    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setupTracking())
    } else {
      this.setupTracking()
    }

    this.isInitialized = true
  }

  private setupTracking() {
    // Set up automatic conversion tracking for all goals
    this.goals.forEach((goal) => {
      if (goal.selector && goal.event) {
        this.setupGoalTracking(goal)
      }
    })

    // Set up scroll-based micro-conversions
    this.setupScrollTracking()

    // Set up time-based engagement tracking
    this.setupTimeTracking()

    // Set up exit intent tracking
    this.setupExitIntentTracking()
  }

  private setupGoalTracking(goal: ConversionGoal) {
    const elements = document.querySelectorAll(goal.selector!)

    elements.forEach((element) => {
      element.addEventListener(goal.event!, (event) => {
        this.trackConversion(goal.type, {
          value: goal.value,
          element: goal.selector,
          goalName: goal.name,
          timestamp: Date.now(),
        })

        // Track additional context for forms
        if (goal.event === "submit" && element instanceof HTMLFormElement) {
          const formData = new FormData(element)
          const formFields = Object.fromEntries(formData.entries())

          analytics.trackCustomEvent("form_conversion", {
            conversion_type: goal.type,
            form_fields: Object.keys(formFields),
            field_count: Object.keys(formFields).length,
          })
        }

        // Track additional context for links
        if (goal.event === "click" && element instanceof HTMLAnchorElement) {
          analytics.trackCustomEvent("link_conversion", {
            conversion_type: goal.type,
            href: element.href,
            text: element.textContent?.trim(),
          })
        }
      })
    })
  }

  private setupScrollTracking() {
    let maxScrollDepth = 0
    const scrollMilestones = [25, 50, 75, 90]
    const trackedMilestones = new Set<number>()

    const trackScrollMilestone = (depth: number) => {
      if (!trackedMilestones.has(depth)) {
        trackedMilestones.add(depth)

        analytics.trackCustomEvent("scroll_milestone", {
          scroll_depth: depth,
          is_conversion: depth >= 80, // 80%+ scroll is considered a micro-conversion
        })

        // Track 80%+ scroll as a micro-conversion
        if (depth >= 80) {
          this.trackConversion("hero_cta", {
            value: 1,
            conversionSubtype: "scroll_engagement",
            scrollDepth: depth,
          })
        }
      }
    }

    window.addEventListener("scroll", () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      )

      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent

        scrollMilestones.forEach((milestone) => {
          if (scrollPercent >= milestone) {
            trackScrollMilestone(milestone)
          }
        })
      }
    })
  }

  private setupTimeTracking() {
    const engagementMilestones = [30, 120, 300] // 30s, 2min, 5min
    const trackedEngagement = new Set<number>()

    engagementMilestones.forEach((seconds) => {
      setTimeout(() => {
        if (!trackedEngagement.has(seconds)) {
          trackedEngagement.add(seconds)

          analytics.trackCustomEvent("engagement_milestone", {
            time_on_page: seconds * 1000,
            is_conversion: seconds >= 120, // 2+ minutes is considered engaged
          })

          // Track 2+ minutes as engagement conversion
          if (seconds >= 120) {
            this.trackConversion("hero_cta", {
              value: 2,
              conversionSubtype: "time_engagement",
              timeOnPage: seconds,
            })
          }
        }
      }, seconds * 1000)
    })
  }

  private setupExitIntentTracking() {
    let exitIntentTracked = false

    const trackExitIntent = () => {
      if (!exitIntentTracked) {
        exitIntentTracked = true

        analytics.trackCustomEvent("exit_intent", {
          time_on_page: Date.now() - performance.timing.navigationStart,
          scroll_depth: Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
          ),
        })
      }
    }

    // Track mouse leaving viewport (desktop)
    document.addEventListener("mouseleave", (event) => {
      if (event.clientY <= 0) {
        trackExitIntent()
      }
    })

    // Track page visibility change (mobile/tab switching)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        trackExitIntent()
      }
    })
  }

  public trackConversion(type: ConversionType, data?: Record<string, any>) {
    const goal = this.goals.find((g) => g.type === type)

    analytics.trackCustomConversion(type, goal?.value, {
      goalName: goal?.name,
      goalDescription: goal?.description,
      ...data,
    })

    // Also track as a custom event for additional analytics
    analytics.trackCustomEvent("conversion", {
      conversion_type: type,
      conversion_value: goal?.value,
      ...data,
    })

    console.log(`🎯 Conversion tracked: ${type}`, data)
  }

  public addCustomGoal(goal: ConversionGoal) {
    this.goals.push(goal)

    if (goal.selector && goal.event && this.isInitialized) {
      this.setupGoalTracking(goal)
    }
  }

  public getGoals(): ConversionGoal[] {
    return [...this.goals]
  }

  public getGoal(type: ConversionType): ConversionGoal | undefined {
    return this.goals.find((g) => g.type === type)
  }

  // Manual conversion tracking methods
  public trackWhatsAppClick(data?: Record<string, any>) {
    this.trackConversion("whatsapp_click", data)
  }

  public trackHeroCTA(data?: Record<string, any>) {
    this.trackConversion("hero_cta", data)
  }

  public trackServicesCTA(data?: Record<string, any>) {
    this.trackConversion("services_cta", data)
  }

  public trackContactForm(data?: Record<string, any>) {
    this.trackConversion("contact_form", data)
  }

  public trackDemoRequest(data?: Record<string, any>) {
    this.trackConversion("demo_request", data)
  }

  public trackEmailSignup(data?: Record<string, any>) {
    this.trackConversion("email_signup", data)
  }

  // Utility methods
  public getConversionValue(type: ConversionType): number {
    const goal = this.getGoal(type)
    return goal?.value || 0
  }

  public getTotalPotentialValue(): number {
    return this.goals.reduce((sum, goal) => sum + (goal.value || 0), 0)
  }
}

// Export singleton instance
export const conversionTracker = new ConversionTracker()
export default conversionTracker
