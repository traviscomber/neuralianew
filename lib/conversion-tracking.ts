import { supabase } from "./supabase"
import { analytics } from "./analytics"
import type { ConversionEvent } from "./supabase"

export class ConversionTracker {
  private trackedConversions = new Set<string>()

  async trackConversion(conversionType: string, value = 0, additionalData?: Record<string, any>): Promise<void> {
    const sessionId = analytics.getSessionId()

    if (!sessionId || !analytics.isReady()) {
      console.warn("Cannot track conversion: session not ready")
      return
    }

    // Prevent duplicate conversions within the same session
    const conversionKey = `${sessionId}-${conversionType}`
    if (this.trackedConversions.has(conversionKey)) {
      console.log("Conversion already tracked for this session:", conversionType)
      return
    }

    const conversionData: ConversionEvent = {
      session_id: sessionId,
      conversion_type: conversionType,
      conversion_value: value,
      page_url: window.location.pathname,
      additional_data: additionalData || {},
    }

    try {
      const { data, error } = await supabase.from("conversion_events").insert(conversionData).select()

      if (error) {
        console.error("Failed to track conversion:", error)
        return
      }

      // Mark as tracked
      this.trackedConversions.add(conversionKey)

      // Also track as a regular event
      await analytics.trackEvent("conversion", {
        conversion_type: conversionType,
        conversion_value: value,
        ...additionalData,
      })

      console.log("Conversion tracked:", conversionType, value)
    } catch (error) {
      console.error("Conversion tracking error:", error)
    }
  }

  // Pre-defined conversion types
  async trackContactForm(formData?: Record<string, any>): Promise<void> {
    await this.trackConversion("contact_form", 1, formData)
  }

  async trackHeroCTA(): Promise<void> {
    await this.trackConversion("hero_cta", 1)
  }

  async trackDemoRequest(): Promise<void> {
    await this.trackConversion("demo_request", 1)
  }

  async trackNewsletterSignup(): Promise<void> {
    await this.trackConversion("newsletter_signup", 1)
  }

  async trackDownload(fileName?: string): Promise<void> {
    await this.trackConversion("download", 1, { file_name: fileName })
  }

  async trackPurchase(amount: number, productId?: string): Promise<void> {
    await this.trackConversion("purchase", amount, { product_id: productId })
  }

  async trackSignup(): Promise<void> {
    await this.trackConversion("signup", 1)
  }
}

// Export singleton instance
export const conversionTracker = new ConversionTracker()

// Auto-track conversions based on data attributes
if (typeof window !== "undefined") {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement
    const conversionType = target.getAttribute("data-conversion")

    if (conversionType) {
      const conversionValue = Number.parseFloat(target.getAttribute("data-conversion-value") || "1")
      conversionTracker.trackConversion(conversionType, conversionValue)
    }
  })

  // Track form submissions
  document.addEventListener("submit", (event) => {
    const form = event.target as HTMLFormElement
    const conversionType = form.getAttribute("data-conversion")

    if (conversionType) {
      const formData = new FormData(form)
      const data: Record<string, any> = {}
      formData.forEach((value, key) => {
        data[key] = value
      })

      conversionTracker.trackConversion(conversionType, 1, data)
    }
  })
}
