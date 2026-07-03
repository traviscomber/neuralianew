export interface LogoLoadMetrics {
  logoName: string
  primaryUrl: string
  fallbackUrl?: string
  loadTime: number
  success: boolean
  errorType?: string
  timestamp: Date
  userAgent: string
  connectionType?: string
  deviceType: "mobile" | "tablet" | "desktop"
}

export interface PerformanceReport {
  totalLogos: number
  successRate: number
  averageLoadTime: number
  slowestLogo: LogoLoadMetrics | null
  fastestLogo: LogoLoadMetrics | null
  fallbackUsageRate: number
  errorBreakdown: Record<string, number>
  deviceBreakdown: Record<string, { count: number; avgLoadTime: number }>
}

export interface PerformanceThreshold {
  id: string
  name: string
  metric: "successRate" | "averageLoadTime" | "fallbackUsageRate"
  condition: "above" | "below"
  value: number
  enabled: boolean
  cooldownMinutes: number
  lastTriggered?: Date
  notificationChannels: string[]
}

export interface PerformanceAlert {
  id: string
  thresholdId: string
  thresholdName: string
  metric: string
  currentValue: number
  thresholdValue: number
  condition: string
  message: string
  severity: "low" | "medium" | "high" | "critical"
  timestamp: Date
  acknowledged: boolean
}

class LogoPerformanceMonitor {
  private static instance: LogoPerformanceMonitor
  private metrics: LogoLoadMetrics[] = []
  private isMonitoring = false
  private thresholds: PerformanceThreshold[] = []
  private alerts: PerformanceAlert[] = []
  private notificationChannels: Array<{
    id: string
    name: string
    type: "email" | "webhook" | "console" | "browser"
    config: Record<string, any>
    enabled: boolean
  }> = []
  private monitoringInterval: NodeJS.Timeout | null = null

  static getInstance(): LogoPerformanceMonitor {
    if (!LogoPerformanceMonitor.instance) {
      LogoPerformanceMonitor.instance = new LogoPerformanceMonitor()
    }
    return LogoPerformanceMonitor.instance
  }

  startMonitoring(intervalMs = 30000): void {
    if (this.isMonitoring) return

    this.isMonitoring = true

    // Initialize thresholds if not already done
    if (this.thresholds.length === 0) {
      this.initializeDefaultThresholds()
    }

    // Request browser notification permission
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission()
    }

    this.monitoringInterval = setInterval(() => {
      this.checkMetrics()
      this.checkPerformanceThresholds() // Add threshold checking
    }, intervalMs)

    console.log("🚀 Logo Performance Monitor started with automated alerts")
  }

  stopMonitoring(): void {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval)
      this.monitoringInterval = null
    }
    this.isMonitoring = false
    console.log("⏹️ Logo Performance Monitor stopped")
  }

  recordLogoLoad(
    logoName: string,
    primaryUrl: string,
    fallbackUrl: string | undefined,
    startTime: number,
    success: boolean,
    errorType?: string,
  ): void {
    if (!this.isMonitoring) return

    const loadTime = performance.now() - startTime
    const deviceType = this.getDeviceType()
    const connectionType = this.getConnectionType()

    const metric: LogoLoadMetrics = {
      logoName,
      primaryUrl,
      fallbackUrl,
      loadTime,
      success,
      errorType,
      timestamp: new Date(),
      userAgent: navigator.userAgent,
      connectionType,
      deviceType,
    }

    this.metrics.push(metric)

    // Keep only last 1000 metrics to prevent memory issues
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000)
    }

    // Log performance issues
    if (loadTime > 3000) {
      console.warn(`🐌 Slow logo load: ${logoName} took ${loadTime.toFixed(2)}ms`)
    }

    if (!success) {
      console.error(`❌ Logo load failed: ${logoName} - ${errorType}`)
    }

    this.checkPerformanceThresholds()
  }

  private getDeviceType(): "mobile" | "tablet" | "desktop" {
    const width = window.innerWidth
    if (width < 768) return "mobile"
    if (width < 1024) return "tablet"
    return "desktop"
  }

  private getConnectionType(): string | undefined {
    // @ts-ignore - navigator.connection is experimental
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    return connection?.effectiveType || undefined
  }

  generateReport(): PerformanceReport {
    if (this.metrics.length === 0) {
      return {
        totalLogos: 0,
        successRate: 0,
        averageLoadTime: 0,
        slowestLogo: null,
        fastestLogo: null,
        fallbackUsageRate: 0,
        errorBreakdown: {},
        deviceBreakdown: {},
      }
    }

    const successfulLoads = this.metrics.filter((m) => m.success)
    const successRate = (successfulLoads.length / this.metrics.length) * 100
    const averageLoadTime = successfulLoads.reduce((sum, m) => sum + m.loadTime, 0) / successfulLoads.length

    const sortedByLoadTime = [...successfulLoads].sort((a, b) => a.loadTime - b.loadTime)
    const slowestLogo = sortedByLoadTime[sortedByLoadTime.length - 1] || null
    const fastestLogo = sortedByLoadTime[0] || null

    const fallbackUsed = this.metrics.filter((m) => m.errorType === "fallback_used").length
    const fallbackUsageRate = (fallbackUsed / this.metrics.length) * 100

    // Error breakdown
    const errorBreakdown: Record<string, number> = {}
    this.metrics.forEach((m) => {
      if (m.errorType) {
        errorBreakdown[m.errorType] = (errorBreakdown[m.errorType] || 0) + 1
      }
    })

    // Device breakdown
    const deviceBreakdown: Record<string, { count: number; avgLoadTime: number }> = {}
    const deviceGroups = this.groupBy(successfulLoads, "deviceType")

    Object.entries(deviceGroups).forEach(([device, metrics]) => {
      const avgLoadTime = metrics.reduce((sum, m) => sum + m.loadTime, 0) / metrics.length
      deviceBreakdown[device] = {
        count: metrics.length,
        avgLoadTime,
      }
    })

    return {
      totalLogos: this.metrics.length,
      successRate,
      averageLoadTime,
      slowestLogo,
      fastestLogo,
      fallbackUsageRate,
      errorBreakdown,
      deviceBreakdown,
    }
  }

  private groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce(
      (groups, item) => {
        const group = String(item[key])
        groups[group] = groups[group] || []
        groups[group].push(item)
        return groups
      },
      {} as Record<string, T[]>,
    )
  }

  initializeDefaultThresholds(): void {
    this.thresholds = [
      {
        id: "success-rate-critical",
        name: "Critical Success Rate",
        metric: "successRate",
        condition: "below",
        value: 90,
        enabled: true,
        cooldownMinutes: 5,
        notificationChannels: ["browser", "console"],
      },
      {
        id: "success-rate-warning",
        name: "Low Success Rate",
        metric: "successRate",
        condition: "below",
        value: 95,
        enabled: true,
        cooldownMinutes: 10,
        notificationChannels: ["console"],
      },
      {
        id: "load-time-critical",
        name: "Critical Load Time",
        metric: "averageLoadTime",
        condition: "above",
        value: 3000,
        enabled: true,
        cooldownMinutes: 5,
        notificationChannels: ["browser", "console"],
      },
      {
        id: "load-time-warning",
        name: "Slow Load Time",
        metric: "averageLoadTime",
        condition: "above",
        value: 2000,
        enabled: true,
        cooldownMinutes: 15,
        notificationChannels: ["console"],
      },
      {
        id: "fallback-usage-critical",
        name: "High Fallback Usage",
        metric: "fallbackUsageRate",
        condition: "above",
        value: 25,
        enabled: true,
        cooldownMinutes: 10,
        notificationChannels: ["browser", "console"],
      },
      {
        id: "fallback-usage-warning",
        name: "Elevated Fallback Usage",
        metric: "fallbackUsageRate",
        condition: "above",
        value: 15,
        enabled: true,
        cooldownMinutes: 20,
        notificationChannels: ["console"],
      },
    ]

    this.notificationChannels = [
      {
        id: "console",
        name: "Console Logging",
        type: "console",
        config: {},
        enabled: true,
      },
      {
        id: "browser",
        name: "Browser Notifications",
        type: "browser",
        config: {},
        enabled: true,
      },
    ]

    this.loadStoredConfiguration()
  }

  private loadStoredConfiguration(): void {
    try {
      const storedThresholds = localStorage.getItem("logoPerformanceThresholds")
      if (storedThresholds) {
        this.thresholds = JSON.parse(storedThresholds).map((t: any) => ({
          ...t,
          lastTriggered: t.lastTriggered ? new Date(t.lastTriggered) : undefined,
        }))
      }

      const storedChannels = localStorage.getItem("logoPerformanceChannels")
      if (storedChannels) {
        this.notificationChannels = JSON.parse(storedChannels)
      }

      const storedAlerts = localStorage.getItem("logoPerformanceAlerts")
      if (storedAlerts) {
        this.alerts = JSON.parse(storedAlerts).map((a: any) => ({
          ...a,
          timestamp: new Date(a.timestamp),
        }))
      }
    } catch (error) {
      console.error("Failed to load stored performance configuration:", error)
    }
  }

  private saveConfiguration(): void {
    try {
      localStorage.setItem("logoPerformanceThresholds", JSON.stringify(this.thresholds))
      localStorage.setItem("logoPerformanceChannels", JSON.stringify(this.notificationChannels))
      localStorage.setItem("logoPerformanceAlerts", JSON.stringify(this.alerts))
    } catch (error) {
      console.error("Failed to save performance configuration:", error)
    }
  }

  checkPerformanceThresholds(): void {
    if (!this.isMonitoring || this.metrics.length < 5) return // Need minimum data

    const report = this.generateReport()
    const now = new Date()

    this.thresholds.forEach((threshold) => {
      if (!threshold.enabled) return

      // Check cooldown
      if (threshold.lastTriggered) {
        const timeSinceLastTrigger = now.getTime() - threshold.lastTriggered.getTime()
        const cooldownMs = threshold.cooldownMinutes * 60 * 1000
        if (timeSinceLastTrigger < cooldownMs) return
      }

      const currentValue = report[threshold.metric]
      let shouldTrigger = false

      if (threshold.condition === "above") {
        shouldTrigger = currentValue > threshold.value
      } else {
        shouldTrigger = currentValue < threshold.value
      }

      if (shouldTrigger) {
        this.triggerAlert(threshold, currentValue, report)
      }
    })
  }

  private triggerAlert(threshold: PerformanceThreshold, currentValue: number, report: PerformanceReport): void {
    const severity = this.calculateSeverity(threshold, currentValue)

    const alert: PerformanceAlert = {
      id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      thresholdId: threshold.id,
      thresholdName: threshold.name,
      metric: threshold.metric,
      currentValue,
      thresholdValue: threshold.value,
      condition: threshold.condition,
      message: this.generateAlertMessage(threshold, currentValue),
      severity,
      timestamp: new Date(),
      acknowledged: false,
    }

    // Add to alerts
    this.alerts.unshift(alert)

    // Keep only last 100 alerts
    if (this.alerts.length > 100) {
      this.alerts = this.alerts.slice(0, 100)
    }

    // Update threshold
    const thresholdIndex = this.thresholds.findIndex((t) => t.id === threshold.id)
    if (thresholdIndex !== -1) {
      this.thresholds[thresholdIndex].lastTriggered = new Date()
    }

    // Send notifications
    this.sendNotifications(alert, threshold.notificationChannels)

    // Save configuration
    this.saveConfiguration()

    // Emit event for real-time UI updates
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("performanceAlert", { detail: alert }))
    }
  }

  private calculateSeverity(
    threshold: PerformanceThreshold,
    currentValue: number,
  ): "low" | "medium" | "high" | "critical" {
    const deviation = Math.abs(currentValue - threshold.value) / threshold.value

    if (threshold.metric === "successRate") {
      if (currentValue < 85) return "critical"
      if (currentValue < 90) return "high"
      if (currentValue < 95) return "medium"
      return "low"
    }

    if (threshold.metric === "averageLoadTime") {
      if (currentValue > 5000) return "critical"
      if (currentValue > 3000) return "high"
      if (currentValue > 2000) return "medium"
      return "low"
    }

    if (threshold.metric === "fallbackUsageRate") {
      if (currentValue > 30) return "critical"
      if (currentValue > 20) return "high"
      if (currentValue > 10) return "medium"
      return "low"
    }

    return deviation > 0.5 ? "critical" : deviation > 0.3 ? "high" : deviation > 0.1 ? "medium" : "low"
  }

  private generateAlertMessage(threshold: PerformanceThreshold, currentValue: number): string {
    const metricName = threshold.metric.replace(/([A-Z])/g, " $1").toLowerCase()
    const unit = threshold.metric === "averageLoadTime" ? "ms" : "%"

    return `${threshold.name}: ${metricName} is ${currentValue.toFixed(1)}${unit} (threshold: ${threshold.condition} ${threshold.value}${unit})`
  }

  private async sendNotifications(alert: PerformanceAlert, channelIds: string[]): Promise<void> {
    const enabledChannels = this.notificationChannels.filter(
      (channel) => channel.enabled && channelIds.includes(channel.id),
    )

    for (const channel of enabledChannels) {
      try {
        await this.sendNotificationToChannel(alert, channel)
      } catch (error) {
        console.error(`Failed to send notification via ${channel.type}:`, error)
      }
    }
  }

  private async sendNotificationToChannel(alert: PerformanceAlert, channel: any): Promise<void> {
    switch (channel.type) {
      case "console":
        this.sendConsoleNotification(alert)
        break
      case "browser":
        await this.sendBrowserNotification(alert)
        break
      case "webhook":
        await this.sendWebhookNotification(alert, channel.config)
        break
      case "email":
        await this.sendEmailNotification(alert, channel.config)
        break
      default:
        console.warn(`Unknown notification channel type: ${channel.type}`)
    }
  }

  private sendConsoleNotification(alert: PerformanceAlert): void {
    const emoji =
      alert.severity === "critical" ? "🚨" : alert.severity === "high" ? "⚠️" : alert.severity === "medium" ? "⚡" : "ℹ️"
    const style =
      alert.severity === "critical"
        ? "color: red; font-weight: bold;"
        : alert.severity === "high"
          ? "color: orange; font-weight: bold;"
          : alert.severity === "medium"
            ? "color: yellow; font-weight: bold;"
            : "color: blue;"

    console.log(`%c${emoji} LOGO PERFORMANCE ALERT: ${alert.message}`, style)
    console.log(`%cTimestamp: ${alert.timestamp.toLocaleString()}`, "color: gray;")
    console.log(`%cSeverity: ${alert.severity.toUpperCase()}`, style)
  }

  private async sendBrowserNotification(alert: PerformanceAlert): Promise<void> {
    if (!("Notification" in window)) return

    let permission = Notification.permission
    if (permission === "default") {
      permission = await Notification.requestPermission()
    }

    if (permission === "granted") {
      const notification = new Notification(`Logo Performance Alert`, {
        body: alert.message,
        icon: "/n3uralia-logo.png",
        badge: "/n3uralia-logo.png",
        tag: `logo-performance-${alert.severity}`,
        requireInteraction: alert.severity === "critical",
        timestamp: alert.timestamp.getTime(),
      })

      notification.onclick = () => {
        window.focus()
        notification.close()
        // Navigate to performance dashboard
        if (window.location.pathname !== "/logo-performance-monitor") {
          window.location.href = "/logo-performance-monitor"
        }
      }

      // Auto-close after 10 seconds for non-critical alerts
      if (alert.severity !== "critical") {
        setTimeout(() => notification.close(), 10000)
      }
    }
  }

  private async sendWebhookNotification(alert: PerformanceAlert, config: any): Promise<void> {
    if (!config.url) return

    const payload = {
      alert,
      timestamp: alert.timestamp.toISOString(),
      source: "N3uralia Logo Performance Monitor",
    }

    await fetch(config.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(config.headers || {}),
      },
      body: JSON.stringify(payload),
    })
  }

  private async sendEmailNotification(alert: PerformanceAlert, config: any): Promise<void> {
    // This would integrate with your email service
    console.log(`📧 Email notification would be sent to ${config.email}:`, {
      subject: `[${alert.severity.toUpperCase()}] Logo Performance Alert`,
      body: alert.message,
      timestamp: alert.timestamp.toISOString(),
    })
  }

  // Public API methods for threshold management
  addThreshold(threshold: Omit<PerformanceThreshold, "id">): PerformanceThreshold {
    const newThreshold: PerformanceThreshold = {
      ...threshold,
      id: `threshold_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    }

    this.thresholds.push(newThreshold)
    this.saveConfiguration()
    return newThreshold
  }

  updateThreshold(thresholdId: string, updates: Partial<PerformanceThreshold>): boolean {
    const index = this.thresholds.findIndex((t) => t.id === thresholdId)
    if (index === -1) return false

    this.thresholds[index] = { ...this.thresholds[index], ...updates }
    this.saveConfiguration()
    return true
  }

  deleteThreshold(thresholdId: string): boolean {
    const index = this.thresholds.findIndex((t) => t.id === thresholdId)
    if (index === -1) return false

    this.thresholds.splice(index, 1)
    this.saveConfiguration()
    return true
  }

  addNotificationChannel(channel: Omit<any, "id">): any {
    const newChannel = {
      ...channel,
      id: `channel_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    }

    this.notificationChannels.push(newChannel)
    this.saveConfiguration()
    return newChannel
  }

  acknowledgeAlert(alertId: string): boolean {
    const index = this.alerts.findIndex((a) => a.id === alertId)
    if (index === -1) return false

    this.alerts[index].acknowledged = true
    this.saveConfiguration()
    return true
  }

  getThresholds(): PerformanceThreshold[] {
    return [...this.thresholds]
  }

  getAlerts(): PerformanceAlert[] {
    return [...this.alerts]
  }

  getNotificationChannels(): any[] {
    return [...this.notificationChannels]
  }

  getUnacknowledgedAlerts(): PerformanceAlert[] {
    return this.alerts.filter((alert) => !alert.acknowledged)
  }

  getMetricsByLogo(logoName: string): LogoLoadMetrics[] {
    return this.metrics.filter((m) => m.logoName === logoName)
  }

  getSlowLogos(threshold = 2000): LogoLoadMetrics[] {
    return this.metrics.filter((m) => m.loadTime > threshold)
  }

  getFailedLogos(): LogoLoadMetrics[] {
    return this.metrics.filter((m) => !m.success)
  }

  exportMetrics(): string {
    const report = this.generateReport()
    const exportData = {
      timestamp: new Date().toISOString(),
      report,
      rawMetrics: this.metrics,
    }
    return JSON.stringify(exportData, null, 2)
  }

  clearMetrics(): void {
    this.metrics = []
    console.log("🧹 Logo performance metrics cleared")
  }

  private checkMetrics(): void {
    // Placeholder for any additional metric checks
  }

  // Custom threshold templates for different environments
  getThresholdTemplates(): Record<string, Partial<PerformanceThreshold>[]> {
    return {
      production: [
        {
          name: "Production Critical Success Rate",
          metric: "successRate",
          condition: "below",
          value: 98,
          enabled: true,
          cooldownMinutes: 2,
          notificationChannels: ["browser", "webhook", "email"],
        },
        {
          name: "Production Load Time Warning",
          metric: "averageLoadTime",
          condition: "above",
          value: 1500,
          enabled: true,
          cooldownMinutes: 5,
          notificationChannels: ["console", "webhook"],
        },
        {
          name: "Production Fallback Usage Alert",
          metric: "fallbackUsageRate",
          condition: "above",
          value: 5,
          enabled: true,
          cooldownMinutes: 10,
          notificationChannels: ["browser", "email"],
        },
      ],
      development: [
        {
          name: "Dev Success Rate Monitor",
          metric: "successRate",
          condition: "below",
          value: 90,
          enabled: true,
          cooldownMinutes: 15,
          notificationChannels: ["console"],
        },
        {
          name: "Dev Load Time Monitor",
          metric: "averageLoadTime",
          condition: "above",
          value: 3000,
          enabled: true,
          cooldownMinutes: 20,
          notificationChannels: ["console"],
        },
      ],
      testing: [
        {
          name: "Test Environment Success Rate",
          metric: "successRate",
          condition: "below",
          value: 85,
          enabled: true,
          cooldownMinutes: 30,
          notificationChannels: ["console"],
        },
        {
          name: "Test Load Time Threshold",
          metric: "averageLoadTime",
          condition: "above",
          value: 5000,
          enabled: true,
          cooldownMinutes: 30,
          notificationChannels: ["console"],
        },
      ],
    }
  }

  // Apply threshold template
  applyThresholdTemplate(templateName: string): boolean {
    const templates = this.getThresholdTemplates()
    const template = templates[templateName]

    if (!template) return false

    // Clear existing thresholds
    this.thresholds = []

    // Apply template thresholds
    template.forEach((thresholdData) => {
      this.addThreshold(thresholdData as Omit<PerformanceThreshold, "id">)
    })

    this.saveConfiguration()
    return true
  }

  // Validate threshold configuration
  validateThreshold(threshold: Partial<PerformanceThreshold>): { valid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!threshold.name || threshold.name.trim().length === 0) {
      errors.push("Threshold name is required")
    }

    if (!threshold.metric) {
      errors.push("Metric selection is required")
    }

    if (!threshold.condition) {
      errors.push("Condition selection is required")
    }

    if (threshold.value === undefined || threshold.value === null) {
      errors.push("Threshold value is required")
    } else {
      // Validate value ranges based on metric
      if (threshold.metric === "successRate" || threshold.metric === "fallbackUsageRate") {
        if (threshold.value < 0 || threshold.value > 100) {
          errors.push("Percentage values must be between 0 and 100")
        }
      }

      if (threshold.metric === "averageLoadTime") {
        if (threshold.value < 0) {
          errors.push("Load time must be a positive number")
        }
        if (threshold.value > 30000) {
          errors.push("Load time threshold seems too high (>30 seconds)")
        }
      }
    }

    if (threshold.cooldownMinutes !== undefined && threshold.cooldownMinutes < 1) {
      errors.push("Cooldown must be at least 1 minute")
    }

    if (!threshold.notificationChannels || threshold.notificationChannels.length === 0) {
      errors.push("At least one notification channel must be selected")
    }

    return {
      valid: errors.length === 0,
      errors,
    }
  }

  // Get threshold recommendations based on current performance
  getThresholdRecommendations(): { metric: string; recommendedValue: number; reason: string }[] {
    const report = this.generateReport()
    const recommendations: { metric: string; recommendedValue: number; reason: string }[] = []

    if (this.metrics.length < 10) {
      return [
        {
          metric: "general",
          recommendedValue: 0,
          reason: "Collect more performance data (at least 10 samples) for accurate recommendations",
        },
      ]
    }

    // Success rate recommendations
    if (report.successRate >= 98) {
      recommendations.push({
        metric: "successRate",
        recommendedValue: Math.max(95, report.successRate - 2),
        reason: `Current success rate is excellent (${report.successRate.toFixed(1)}%). Set threshold slightly below current performance.`,
      })
    } else if (report.successRate >= 95) {
      recommendations.push({
        metric: "successRate",
        recommendedValue: 92,
        reason: `Current success rate is good (${report.successRate.toFixed(1)}%). Set conservative threshold.`,
      })
    } else {
      recommendations.push({
        metric: "successRate",
        recommendedValue: 90,
        reason: `Current success rate needs improvement (${report.successRate.toFixed(1)}%). Set achievable threshold.`,
      })
    }

    // Load time recommendations
    if (report.averageLoadTime <= 1000) {
      recommendations.push({
        metric: "averageLoadTime",
        recommendedValue: Math.max(1500, report.averageLoadTime * 1.5),
        reason: `Current load time is excellent (${report.averageLoadTime.toFixed(0)}ms). Set threshold with buffer.`,
      })
    } else if (report.averageLoadTime <= 2000) {
      recommendations.push({
        metric: "averageLoadTime",
        recommendedValue: 2500,
        reason: `Current load time is acceptable (${report.averageLoadTime.toFixed(0)}ms). Set moderate threshold.`,
      })
    } else {
      recommendations.push({
        metric: "averageLoadTime",
        recommendedValue: 3000,
        reason: `Current load time needs optimization (${report.averageLoadTime.toFixed(0)}ms). Set achievable threshold.`,
      })
    }

    // Fallback usage recommendations
    if (report.fallbackUsageRate <= 5) {
      recommendations.push({
        metric: "fallbackUsageRate",
        recommendedValue: 10,
        reason: `Current fallback usage is low (${report.fallbackUsageRate.toFixed(1)}%). Set conservative threshold.`,
      })
    } else if (report.fallbackUsageRate <= 15) {
      recommendations.push({
        metric: "fallbackUsageRate",
        recommendedValue: 20,
        reason: `Current fallback usage is moderate (${report.fallbackUsageRate.toFixed(1)}%). Set reasonable threshold.`,
      })
    } else {
      recommendations.push({
        metric: "fallbackUsageRate",
        recommendedValue: 25,
        reason: `Current fallback usage is high (${report.fallbackUsageRate.toFixed(1)}%). Focus on improving primary sources.`,
      })
    }

    return recommendations
  }
}

export const logoPerformanceMonitor = LogoPerformanceMonitor.getInstance()

// Enhanced image loading utility with performance monitoring
export function createMonitoredImageLoader() {
  return {
    loadImage: (
      logoName: string,
      primaryUrl: string,
      fallbackUrl: string,
      onLoad: (src: string, usedFallback: boolean) => void,
      onError: () => void,
    ) => {
      const startTime = performance.now()
      const img = new Image()

      img.onload = () => {
        logoPerformanceMonitor.recordLogoLoad(logoName, primaryUrl, fallbackUrl, startTime, true)
        onLoad(img.src, img.src === fallbackUrl)
      }

      img.onerror = () => {
        if (img.src === primaryUrl && fallbackUrl) {
          // Try fallback
          logoPerformanceMonitor.recordLogoLoad(logoName, primaryUrl, fallbackUrl, startTime, false, "primary_failed")

          const fallbackStartTime = performance.now()
          img.onload = () => {
            logoPerformanceMonitor.recordLogoLoad(
              logoName,
              fallbackUrl,
              undefined,
              fallbackStartTime,
              true,
              "fallback_used",
            )
            onLoad(img.src, true)
          }

          img.onerror = () => {
            logoPerformanceMonitor.recordLogoLoad(
              logoName,
              fallbackUrl,
              undefined,
              fallbackStartTime,
              false,
              "fallback_failed",
            )
            onError()
          }

          img.src = fallbackUrl
        } else {
          logoPerformanceMonitor.recordLogoLoad(logoName, primaryUrl, fallbackUrl, startTime, false, "load_failed")
          onError()
        }
      }

      img.src = primaryUrl
    },
  }
}

// Performance monitoring hooks for React components
export function useLogoPerformanceMonitoring() {
  const startMonitoring = () => logoPerformanceMonitor.startMonitoring()
  const stopMonitoring = () => logoPerformanceMonitor.stopMonitoring()
  const getReport = () => logoPerformanceMonitor.generateReport()
  const exportData = () => logoPerformanceMonitor.exportMetrics()
  const clearData = () => logoPerformanceMonitor.clearMetrics()
  const getThresholds = () => logoPerformanceMonitor.getThresholds()
  const getAlerts = () => logoPerformanceMonitor.getAlerts()
  const getNotificationChannels = () => logoPerformanceMonitor.getNotificationChannels()
  const getUnacknowledgedAlerts = () => logoPerformanceMonitor.getUnacknowledgedAlerts()
  const addThreshold = (threshold: Omit<PerformanceThreshold, "id">) => logoPerformanceMonitor.addThreshold(threshold)
  const updateThreshold = (thresholdId: string, updates: Partial<PerformanceThreshold>) =>
    logoPerformanceMonitor.updateThreshold(thresholdId, updates)
  const deleteThreshold = (thresholdId: string) => logoPerformanceMonitor.deleteThreshold(thresholdId)
  const addNotificationChannel = (channel: Omit<any, "id">) => logoPerformanceMonitor.addNotificationChannel(channel)
  const acknowledgeAlert = (alertId: string) => logoPerformanceMonitor.acknowledgeAlert(alertId)

  return {
    startMonitoring,
    stopMonitoring,
    getReport,
    exportData,
    clearData,
    getThresholds,
    getAlerts,
    getNotificationChannels,
    getUnacknowledgedAlerts,
    addThreshold,
    updateThreshold,
    deleteThreshold,
    addNotificationChannel,
    acknowledgeAlert,
  }
}
