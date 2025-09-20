import { analytics } from "./analytics"

export type ConversionType =
  | "page_view"
  | "button_click"
  | "form_submission"
  | "download"
  | "signup"
  | "purchase"
  | "contact"

export interface ConversionConfig {
  type: ConversionType
  value?: number
  data?: Record<string, any>
}

export class ConversionTracker {
  private static instance: ConversionTracker
  private trackedConversions: Set<string> = new Set()

  public static getInstance(): ConversionTracker {
    if (!ConversionTracker.instance) {
      ConversionTracker.instance = new ConversionTracker()
    }
    return ConversionTracker.instance
  }

  public async trackConversion(config: ConversionConfig): Promise<void> {
    const sessionId = analytics.getSessionId()
    if (!sessionId) {
      console.warn("Cannot track conversion: no session ID")
      return
    }

    // Create unique key for this conversion
    const conversionKey = `${sessionId}_${config.type}`

    // Check if already tracked to prevent duplicates
    if (this.trackedConversions.has(conversionKey)) {
      console.log(`Conversion ${config.type} already tracked for this session`)
      return
    }

    try {
      await analytics.trackConversion({
        conversion_type: config.type,
        conversion_value: config.value || 0,
        conversion_data: config.data || {},
        page_url: window.location.href,
      })

      // Mark as tracked
      this.trackedConversions.add(conversionKey)

      console.log(`Conversion tracked: ${config.type}`, config)
    } catch (error) {
      console.error("Failed to track conversion:", error)
    }
  }

  public async trackPageView(): Promise<void> {
    await this.trackConversion({
      type: "page_view",
      data: {
        page: window.location.pathname,
        title: document.title,
        referrer: document.referrer,
      },
    })
  }

  public async trackButtonClick(buttonText: string, buttonId?: string): Promise<void> {
    await this.trackConversion({
      type: "button_click",
      data: {
        button_text: buttonText,
        button_id: buttonId,
        page: window.location.pathname,
      },
    })
  }

  public async trackFormSubmission(formId: string, formData?: Record<string, any>): Promise<void> {
    await this.trackConversion({
      type: "form_submission",
      data: {
        form_id: formId,
        form_data: formData,
        page: window.location.pathname,
      },
    })
  }

  public async trackDownload(fileName: string, fileType?: string): Promise<void> {
    await this.trackConversion({
      type: "download",
      data: {
        file_name: fileName,
        file_type: fileType,
        page: window.location.pathname,
      },
    })
  }

  public async trackSignup(method?: string): Promise<void> {
    await this.trackConversion({
      type: "signup",
      value: 1,
      data: {
        signup_method: method,
        page: window.location.pathname,
      },
    })
  }

  public async trackPurchase(amount: number, currency = "USD", productId?: string): Promise<void> {
    await this.trackConversion({
      type: "purchase",
      value: amount,
      data: {
        currency,
        product_id: productId,
        page: window.location.pathname,
      },
    })
  }

  public async trackContact(method: string): Promise<void> {
    await this.trackConversion({
      type: "contact",
      data: {
        contact_method: method,
        page: window.location.pathname,
      },
    })
  }

  public clearTrackedConversions(): void {
    this.trackedConversions.clear()
  }
}

// Export singleton instance
export const conversionTracker = ConversionTracker.getInstance()
