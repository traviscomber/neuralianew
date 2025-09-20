import { supabase } from "./supabase"
import type { ConversionEvent } from "./supabase"

export class ConversionTracker {
  private sessionId: string | null = null
  private trackedConversions = new Set<string>()

  setSessionId(sessionId: string | null) {
    this.sessionId = sessionId
  }

  resetTracking() {
    this.trackedConversions.clear()
  }

  async trackConversion(type: string, value = 0, additionalData?: Record<string, any>): Promise<void> {
    if (!this.sessionId) {
      console.warn("Cannot track conversion: no session ID")
      return
    }

    // Prevent duplicate conversions in the same session
    const conversionKey = `${this.sessionId}_${type}`
    if (this.trackedConversions.has(conversionKey)) {
      console.log("Conversion already tracked in this session:", type)
      return
    }

    try {
      const conversionData: ConversionEvent = {
        session_id: this.sessionId,
        conversion_type: type,
        conversion_value: value,
        page_url: window.location.pathname,
        additional_data: additionalData || {},
      }

      const { data, error } = await supabase.from("conversion_events").insert(conversionData).select()

      if (error) {
        console.error("Failed to track conversion:", error)
        return
      }

      // Mark as tracked
      this.trackedConversions.add(conversionKey)
      console.log("Conversion tracked:", type, value)
    } catch (error) {
      console.error("Conversion tracking error:", error)
    }
  }

  // Pre-defined conversion methods
  async trackHeroCTA(): Promise<void> {
    await this.trackConversion("hero_cta", 15, {
      source: "hero_section",
      action: "cta_click",
    })
  }

  async trackContactForm(): Promise<void> {
    await this.trackConversion("contact_form", 25, {
      source: "contact_section",
      action: "form_submit",
    })
  }

  async trackDemoRequest(): Promise<void> {
    await this.trackConversion("demo_request", 30, {
      source: "demo_section",
      action: "demo_request",
    })
  }

  async trackWhatsAppClick(): Promise<void> {
    await this.trackConversion("whatsapp_click", 10, {
      source: "contact_widget",
      action: "whatsapp_click",
    })
  }

  async trackNewsletterSignup(): Promise<void> {
    await this.trackConversion("newsletter_signup", 5, {
      source: "newsletter_form",
      action: "email_submit",
    })
  }

  async trackServiceInquiry(): Promise<void> {
    await this.trackConversion("service_inquiry", 20, {
      source: "services_page",
      action: "inquiry_submit",
    })
  }

  async trackCaseStudyView(): Promise<void> {
    await this.trackConversion("case_study_view", 8, {
      source: "case_studies",
      action: "case_study_click",
    })
  }
}

// Export singleton instance
export const conversionTracker = new ConversionTracker()
