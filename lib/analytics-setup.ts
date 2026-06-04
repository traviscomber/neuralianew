// Analytics Setup for N3uralia
// Tracks audience segment engagement, conversion paths, and ROI by customer type

declare global {
  interface Window {
    gtag?: (command: string, action: string, data?: Record<string, any>) => void
  }
}

export function initializeAnalytics() {
  // GA4 Event Categories by Audience
  const audienceEvents = {
    cto: {
      viewCapabilities: 'view_enterprise_capabilities',
      viewCaseStudy: 'view_integration_case_study',
      downloadWhitepaper: 'download_governance_whitepaper',
      requestDemo: 'request_production_demo',
      contactSales: 'cto_contact_sales',
    },
    founder: {
      viewPricing: 'view_startup_pricing',
      viewLivingAgents: 'view_learning_agents',
      requestTrial: 'request_free_trial',
      contactSales: 'founder_contact_sales',
      watchDemo: 'watch_quick_demo',
    },
    operations: {
      viewROICalculator: 'view_roi_calculator',
      viewUseCases: 'view_operation_use_cases',
      downloadImplementationGuide: 'download_implementation_guide',
      contactSales: 'operations_contact_sales',
      scheduleCall: 'schedule_operations_call',
    },
  }

  // Conversion Tracking
  const conversionEvents = {
    newsletter_signup: 'newsletter_subscribe',
    blog_share: 'content_shared',
    resource_download: 'resource_downloaded',
    demo_scheduled: 'demo_scheduled',
    sales_contact: 'sales_inquiry',
  }

  // Content Engagement
  const contentEvents = {
    blog_post_view: 'blog_post_view',
    blog_time_on_page: 'blog_time_on_page',
    faq_expand: 'faq_item_expanded',
    video_play: 'video_played',
    resource_download: 'resource_downloaded',
  }

  return {
    audienceEvents,
    conversionEvents,
    contentEvents,
  }
}

// GA4 Custom Dimensions
export const customDimensions = {
  audience_segment: 'dimension1', // cto, founder, operations
  company_size: 'dimension2', // enterprise, mid-market, startup
  industry: 'dimension3', // banking, retail, manufacturing, etc
  content_type: 'dimension4', // blog, faq, case-study, whitepaper
  conversion_stage: 'dimension5', // awareness, consideration, decision
}

// GA4 Custom Metrics
export const customMetrics = {
  engagement_score: 'metric1', // Weighted engagement calculation
  content_depth: 'metric2', // Pages viewed in session
  time_to_conversion: 'metric3', // Minutes from first visit to conversion
}

// Function to track audience-specific events
export function trackAudienceEvent(audienceType: 'cto' | 'founder' | 'operations', eventName: string, data?: Record<string, any>) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', eventName, {
    audience_segment: audienceType,
    ...data,
  })
}

// Function to track conversion
export function trackConversion(conversionType: string, value?: number, audienceSegment?: string) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'purchase', {
    value: value || 1,
    currency: 'CLP',
    conversion_type: conversionType,
    ...(audienceSegment && { audience_segment: audienceSegment }),
  })
}

// Function to track content engagement
export function trackContentEngagement(contentType: string, contentTitle: string, timeOnPage?: number) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'scroll', {
    content_type: contentType,
    content_title: contentTitle,
    engagement_time: timeOnPage,
  })
}
