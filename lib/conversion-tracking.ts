export interface ConversionGoal {
  id: string
  name: string
  type: "whatsapp_click" | "form_submit" | "email_signup" | "demo_request" | "contact_form"
  value: number
  selector?: string
  url_pattern?: string
  event_name?: string
}

export interface FunnelStep {
  id: string
  name: string
  page_pattern: string
  required_action?: string
  order: number
}

export interface ConversionFunnel {
  id: string
  name: string
  steps: FunnelStep[]
  goals: ConversionGoal[]
}

export class ConversionTracker {
  private goals: ConversionGoal[] = []
  private funnels: ConversionFunnel[] = []
  private sessionData: Map<string, any> = new Map()

  constructor() {
    this.initializeDefaultGoals()
    this.initializeDefaultFunnels()
  }

  private initializeDefaultGoals() {
    this.goals = [
      {
        id: "whatsapp_contact",
        name: "WhatsApp Contact",
        type: "whatsapp_click",
        value: 100,
        selector: 'a[href*="wa.me"], a[href*="whatsapp"]',
      },
      {
        id: "contact_form",
        name: "Contact Form Submission",
        type: "form_submit",
        value: 150,
        selector: 'form[data-conversion="contact"]',
      },
      {
        id: "demo_request",
        name: "Demo Request",
        type: "demo_request",
        value: 200,
        selector: '[data-conversion="demo"]',
      },
      {
        id: "email_signup",
        name: "Email Newsletter Signup",
        type: "email_signup",
        value: 50,
        selector: 'form[data-conversion="newsletter"]',
      },
    ]
  }

  private initializeDefaultFunnels() {
    this.funnels = [
      {
        id: "main_conversion_funnel",
        name: "Main Conversion Funnel",
        steps: [
          {
            id: "landing",
            name: "Landing Page Visit",
            page_pattern: "^/$",
            order: 1,
          },
          {
            id: "services_view",
            name: "Services Page View",
            page_pattern: "^/(services|products|agents|systems)",
            order: 2,
          },
          {
            id: "contact_intent",
            name: "Contact Intent",
            page_pattern: "^/contact",
            required_action: "page_view",
            order: 3,
          },
          {
            id: "conversion",
            name: "Conversion",
            page_pattern: ".*",
            required_action: "conversion",
            order: 4,
          },
        ],
        goals: this.goals,
      },
    ]
  }

  public trackConversionGoal(goalId: string, sessionId: string, additionalData?: any) {
    const goal = this.goals.find((g) => g.id === goalId)
    if (!goal) return

    // Send conversion event
    fetch("/api/conversions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: sessionId,
        conversion_type: goal.type,
        conversion_value: goal.value,
        source_page: window.location.pathname,
        funnel_step: this.getCurrentFunnelStep(sessionId),
        timestamp: new Date(),
        user_data: {
          goal_id: goalId,
          goal_name: goal.name,
          ...additionalData,
        },
      }),
    }).catch((error) => console.error("Conversion tracking error:", error))

    // Update session data
    this.updateSessionConversionData(sessionId, goal)
  }

  public trackFunnelStep(sessionId: string, currentPage: string) {
    const funnel = this.funnels[0] // Use main funnel for now
    const currentStep = this.findCurrentFunnelStep(currentPage, funnel)

    if (currentStep) {
      const sessionData = this.sessionData.get(sessionId) || {}
      sessionData.currentFunnelStep = currentStep.order
      sessionData.funnelProgress = sessionData.funnelProgress || []

      if (!sessionData.funnelProgress.includes(currentStep.id)) {
        sessionData.funnelProgress.push(currentStep.id)
      }

      this.sessionData.set(sessionId, sessionData)
    }
  }

  private findCurrentFunnelStep(currentPage: string, funnel: ConversionFunnel): FunnelStep | null {
    return (
      funnel.steps.find((step) => {
        const regex = new RegExp(step.page_pattern)
        return regex.test(currentPage)
      }) || null
    )
  }

  private getCurrentFunnelStep(sessionId: string): number {
    const sessionData = this.sessionData.get(sessionId)
    return sessionData?.currentFunnelStep || 1
  }

  private updateSessionConversionData(sessionId: string, goal: ConversionGoal) {
    const sessionData = this.sessionData.get(sessionId) || {}
    sessionData.conversions = sessionData.conversions || []
    sessionData.conversions.push({
      goalId: goal.id,
      goalName: goal.name,
      value: goal.value,
      timestamp: new Date(),
    })
    sessionData.totalConversionValue = (sessionData.totalConversionValue || 0) + goal.value
    this.sessionData.set(sessionId, sessionData)
  }

  public getConversionRate(timeRange = "24h"): Promise<number> {
    return fetch(`/api/analytics/conversion-rate?timeRange=${timeRange}`)
      .then((response) => response.json())
      .then((data) => data.conversionRate || 0)
      .catch(() => 0)
  }

  public getFunnelAnalysis(funnelId: string, timeRange = "24h"): Promise<any> {
    return fetch(`/api/analytics/funnel-analysis?funnelId=${funnelId}&timeRange=${timeRange}`)
      .then((response) => response.json())
      .then((data) => data.funnelData || {})
      .catch(() => ({}))
  }

  public getTopConvertingPages(timeRange = "24h"): Promise<any[]> {
    return fetch(`/api/conversions?timeRange=${timeRange}`)
      .then((response) => response.json())
      .then((data) => {
        const pages = data.data?.topConvertingPages || {}
        return Object.entries(pages)
          .map(([page, conversions]) => ({ page, conversions }))
          .sort((a, b) => (b.conversions as number) - (a.conversions as number))
      })
      .catch(() => [])
  }

  public addCustomGoal(goal: ConversionGoal) {
    this.goals.push(goal)
  }

  public removeGoal(goalId: string) {
    this.goals = this.goals.filter((g) => g.id !== goalId)
  }

  public getGoals(): ConversionGoal[] {
    return [...this.goals]
  }

  public getFunnels(): ConversionFunnel[] {
    return [...this.funnels]
  }
}

// Singleton instance
export const conversionTracker = new ConversionTracker()
