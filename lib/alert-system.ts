export interface AlertRule {
  id: string
  name: string
  description: string
  metric: string
  category: string
  condition: "greater_than" | "less_than" | "equals" | "not_equals"
  threshold: number
  severity: "low" | "medium" | "high" | "critical"
  enabled: boolean
  notifications: string[]
  cooldown: number
  createdAt: Date
  lastTriggered?: Date
  triggerCount: number
}

export interface AlertNotification {
  id: string
  ruleId: string
  ruleName: string
  metric: string
  value: number
  threshold: number
  severity: "low" | "medium" | "high" | "critical"
  message: string
  timestamp: Date
  acknowledged: boolean
  resolvedAt?: Date
}

export interface NotificationChannel {
  id: string
  name: string
  type: "email" | "webhook" | "slack" | "teams" | "sms"
  config: Record<string, any>
  enabled: boolean
  testStatus?: "success" | "failed" | "pending"
}

export interface MetricValue {
  metric: string
  value: number
  timestamp: Date
  category: string
}

export class AlertSystem {
  private static instance: AlertSystem
  private rules: AlertRule[] = []
  private channels: NotificationChannel[] = []
  private notifications: AlertNotification[] = []
  private isMonitoring = false
  private monitoringInterval: NodeJS.Timeout | null = null

  static getInstance(): AlertSystem {
    if (!AlertSystem.instance) {
      AlertSystem.instance = new AlertSystem()
    }
    return AlertSystem.instance
  }

  async initialize(): Promise<void> {
    await this.loadConfiguration()
    this.startMonitoring()
  }

  private async loadConfiguration(): Promise<void> {
    try {
      // Load from localStorage or API
      const savedRules = localStorage.getItem("alertRules")
      if (savedRules) {
        this.rules = JSON.parse(savedRules).map((rule: any) => ({
          ...rule,
          createdAt: new Date(rule.createdAt),
          lastTriggered: rule.lastTriggered ? new Date(rule.lastTriggered) : undefined,
        }))
      }

      const savedChannels = localStorage.getItem("notificationChannels")
      if (savedChannels) {
        this.channels = JSON.parse(savedChannels)
      }

      const savedNotifications = localStorage.getItem("alertNotifications")
      if (savedNotifications) {
        this.notifications = JSON.parse(savedNotifications).map((notification: any) => ({
          ...notification,
          timestamp: new Date(notification.timestamp),
          resolvedAt: notification.resolvedAt ? new Date(notification.resolvedAt) : undefined,
        }))
      }
    } catch (error) {
      console.error("Failed to load alert configuration:", error)
    }
  }

  private async saveConfiguration(): Promise<void> {
    try {
      localStorage.setItem("alertRules", JSON.stringify(this.rules))
      localStorage.setItem("notificationChannels", JSON.stringify(this.channels))
      localStorage.setItem("alertNotifications", JSON.stringify(this.notifications))
    } catch (error) {
      console.error("Failed to save alert configuration:", error)
    }
  }

  startMonitoring(intervalMs = 30000): void {
    if (this.isMonitoring) return

    this.isMonitoring = true
    this.monitoringInterval = setInterval(() => {
      this.checkMetrics()
    }, intervalMs)

    console.log("Alert monitoring started")
  }

  stopMonitoring(): void {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval)
      this.monitoringInterval = null
    }
    this.isMonitoring = false
    console.log("Alert monitoring stopped")
  }

  private async checkMetrics(): Promise<void> {
    try {
      const metrics = await this.collectCurrentMetrics()

      for (const metric of metrics) {
        await this.evaluateMetric(metric)
      }
    } catch (error) {
      console.error("Error checking metrics:", error)
    }
  }

  private async collectCurrentMetrics(): Promise<MetricValue[]> {
    // Simulate collecting real metrics from various sources
    const currentTime = new Date()

    return [
      {
        metric: "lcp",
        value: Math.random() * 3000 + 1000,
        timestamp: currentTime,
        category: "performance",
      },
      {
        metric: "fcp",
        value: Math.random() * 2000 + 500,
        timestamp: currentTime,
        category: "performance",
      },
      {
        metric: "cls",
        value: Math.random() * 0.3,
        timestamp: currentTime,
        category: "performance",
      },
      {
        metric: "bounceRate",
        value: Math.random() * 50 + 20,
        timestamp: currentTime,
        category: "userExperience",
      },
      {
        metric: "conversionRate",
        value: Math.random() * 8 + 2,
        timestamp: currentTime,
        category: "userExperience",
      },
      {
        metric: "errorRate",
        value: Math.random() * 5,
        timestamp: currentTime,
        category: "userExperience",
      },
      {
        metric: "wcagAA",
        value: Math.random() * 20 + 80,
        timestamp: currentTime,
        category: "accessibility",
      },
      {
        metric: "mobileSpeed",
        value: Math.random() * 30 + 70,
        timestamp: currentTime,
        category: "mobile",
      },
    ]
  }

  private async evaluateMetric(metric: MetricValue): Promise<void> {
    const applicableRules = this.rules.filter((rule) => rule.enabled && rule.metric === metric.metric)

    for (const rule of applicableRules) {
      if (this.shouldTriggerAlert(rule, metric)) {
        await this.triggerAlert(rule, metric)
      }
    }
  }

  private shouldTriggerAlert(rule: AlertRule, metric: MetricValue): boolean {
    // Check cooldown period
    if (rule.lastTriggered) {
      const timeSinceLastTrigger = Date.now() - rule.lastTriggered.getTime()
      if (timeSinceLastTrigger < rule.cooldown * 1000) {
        return false
      }
    }

    // Evaluate condition
    switch (rule.condition) {
      case "greater_than":
        return metric.value > rule.threshold
      case "less_than":
        return metric.value < rule.threshold
      case "equals":
        return metric.value === rule.threshold
      case "not_equals":
        return metric.value !== rule.threshold
      default:
        return false
    }
  }

  private async triggerAlert(rule: AlertRule, metric: MetricValue): Promise<void> {
    const notification: AlertNotification = {
      id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ruleId: rule.id,
      ruleName: rule.name,
      metric: rule.metric,
      value: metric.value,
      threshold: rule.threshold,
      severity: rule.severity,
      message: this.generateAlertMessage(rule, metric),
      timestamp: new Date(),
      acknowledged: false,
    }

    // Add to notifications
    this.notifications.unshift(notification)

    // Update rule
    const ruleIndex = this.rules.findIndex((r) => r.id === rule.id)
    if (ruleIndex !== -1) {
      this.rules[ruleIndex] = {
        ...rule,
        lastTriggered: new Date(),
        triggerCount: rule.triggerCount + 1,
      }
    }

    // Send notifications
    await this.sendNotifications(notification, rule.notifications)

    // Save configuration
    await this.saveConfiguration()

    // Emit event for real-time updates
    this.emitAlertEvent(notification)

    console.log(`Alert triggered: ${notification.message}`)
  }

  private generateAlertMessage(rule: AlertRule, metric: MetricValue): string {
    const conditionText = rule.condition.replace("_", " ")
    return `${rule.name}: ${rule.metric} is ${metric.value.toFixed(2)} (${conditionText} ${rule.threshold})`
  }

  private async sendNotifications(notification: AlertNotification, channelIds: string[]): Promise<void> {
    const enabledChannels = this.channels.filter((channel) => channel.enabled && channelIds.includes(channel.id))

    const notificationPromises = enabledChannels.map((channel) => this.sendNotificationToChannel(notification, channel))

    await Promise.allSettled(notificationPromises)
  }

  private async sendNotificationToChannel(
    notification: AlertNotification,
    channel: NotificationChannel,
  ): Promise<void> {
    try {
      switch (channel.type) {
        case "email":
          await this.sendEmailNotification(notification, channel)
          break
        case "webhook":
          await this.sendWebhookNotification(notification, channel)
          break
        case "slack":
          await this.sendSlackNotification(notification, channel)
          break
        case "teams":
          await this.sendTeamsNotification(notification, channel)
          break
        case "sms":
          await this.sendSMSNotification(notification, channel)
          break
        default:
          console.warn(`Unknown notification channel type: ${channel.type}`)
      }
    } catch (error) {
      console.error(`Failed to send notification via ${channel.type}:`, error)
    }
  }

  private async sendEmailNotification(notification: AlertNotification, channel: NotificationChannel): Promise<void> {
    // Simulate email sending
    console.log(`📧 Email sent to ${channel.config.email}:`, {
      subject: `[${notification.severity.toUpperCase()}] ${notification.ruleName}`,
      body: notification.message,
      timestamp: notification.timestamp.toISOString(),
    })
  }

  private async sendWebhookNotification(notification: AlertNotification, channel: NotificationChannel): Promise<void> {
    // Simulate webhook call
    console.log(`🔗 Webhook sent to ${channel.config.url}:`, {
      alert: notification,
      channel: channel.name,
    })
  }

  private async sendSlackNotification(notification: AlertNotification, channel: NotificationChannel): Promise<void> {
    // Simulate Slack message
    const color = this.getSeverityColor(notification.severity)
    console.log(`💬 Slack message sent:`, {
      webhook: channel.config.webhook,
      payload: {
        text: `Alert: ${notification.ruleName}`,
        attachments: [
          {
            color,
            fields: [
              { title: "Metric", value: notification.metric, short: true },
              { title: "Value", value: notification.value.toString(), short: true },
              { title: "Threshold", value: notification.threshold.toString(), short: true },
              { title: "Severity", value: notification.severity, short: true },
            ],
            ts: Math.floor(notification.timestamp.getTime() / 1000),
          },
        ],
      },
    })
  }

  private async sendTeamsNotification(notification: AlertNotification, channel: NotificationChannel): Promise<void> {
    // Simulate Teams message
    console.log(`🟦 Teams message sent:`, {
      webhook: channel.config.webhook,
      payload: {
        "@type": "MessageCard",
        "@context": "http://schema.org/extensions",
        themeColor: this.getSeverityColor(notification.severity),
        summary: notification.ruleName,
        sections: [
          {
            activityTitle: notification.ruleName,
            activitySubtitle: notification.message,
            facts: [
              { name: "Metric", value: notification.metric },
              { name: "Value", value: notification.value.toString() },
              { name: "Threshold", value: notification.threshold.toString() },
              { name: "Severity", value: notification.severity },
            ],
          },
        ],
      },
    })
  }

  private async sendSMSNotification(notification: AlertNotification, channel: NotificationChannel): Promise<void> {
    // Simulate SMS sending
    console.log(`📱 SMS sent to ${channel.config.phone}:`, {
      message: `[${notification.severity.toUpperCase()}] ${notification.message}`,
      timestamp: notification.timestamp.toISOString(),
    })
  }

  private getSeverityColor(severity: string): string {
    switch (severity) {
      case "critical":
        return "#dc2626"
      case "high":
        return "#ea580c"
      case "medium":
        return "#d97706"
      case "low":
        return "#2563eb"
      default:
        return "#6b7280"
    }
  }

  private emitAlertEvent(notification: AlertNotification): void {
    // Emit custom event for real-time UI updates
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("alertTriggered", {
          detail: notification,
        }),
      )
    }
  }

  // Public API methods
  async addRule(rule: Omit<AlertRule, "id" | "createdAt" | "triggerCount">): Promise<AlertRule> {
    const newRule: AlertRule = {
      ...rule,
      id: `rule_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date(),
      triggerCount: 0,
    }

    this.rules.push(newRule)
    await this.saveConfiguration()
    return newRule
  }

  async updateRule(ruleId: string, updates: Partial<AlertRule>): Promise<AlertRule | null> {
    const ruleIndex = this.rules.findIndex((rule) => rule.id === ruleId)
    if (ruleIndex === -1) return null

    this.rules[ruleIndex] = { ...this.rules[ruleIndex], ...updates }
    await this.saveConfiguration()
    return this.rules[ruleIndex]
  }

  async deleteRule(ruleId: string): Promise<boolean> {
    const ruleIndex = this.rules.findIndex((rule) => rule.id === ruleId)
    if (ruleIndex === -1) return false

    this.rules.splice(ruleIndex, 1)
    await this.saveConfiguration()
    return true
  }

  async addChannel(channel: Omit<NotificationChannel, "id">): Promise<NotificationChannel> {
    const newChannel: NotificationChannel = {
      ...channel,
      id: `${channel.type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    }

    this.channels.push(newChannel)
    await this.saveConfiguration()
    return newChannel
  }

  async testChannel(channelId: string): Promise<boolean> {
    const channel = this.channels.find((c) => c.id === channelId)
    if (!channel) return false

    const testNotification: AlertNotification = {
      id: "test",
      ruleId: "test",
      ruleName: "Test Alert",
      metric: "test_metric",
      value: 100,
      threshold: 50,
      severity: "low",
      message: "This is a test notification from N3uralia Alert System",
      timestamp: new Date(),
      acknowledged: false,
    }

    try {
      await this.sendNotificationToChannel(testNotification, channel)
      return true
    } catch (error) {
      console.error("Channel test failed:", error)
      return false
    }
  }

  async acknowledgeNotification(notificationId: string): Promise<boolean> {
    const notificationIndex = this.notifications.findIndex((n) => n.id === notificationId)
    if (notificationIndex === -1) return false

    this.notifications[notificationIndex].acknowledged = true
    await this.saveConfiguration()
    return true
  }

  async resolveNotification(notificationId: string): Promise<boolean> {
    const notificationIndex = this.notifications.findIndex((n) => n.id === notificationId)
    if (notificationIndex === -1) return false

    this.notifications[notificationIndex].acknowledged = true
    this.notifications[notificationIndex].resolvedAt = new Date()
    await this.saveConfiguration()
    return true
  }

  // Getters
  getRules(): AlertRule[] {
    return [...this.rules]
  }

  getChannels(): NotificationChannel[] {
    return [...this.channels]
  }

  getNotifications(): AlertNotification[] {
    return [...this.notifications]
  }

  getActiveRules(): AlertRule[] {
    return this.rules.filter((rule) => rule.enabled)
  }

  getUnacknowledgedNotifications(): AlertNotification[] {
    return this.notifications.filter((notification) => !notification.acknowledged)
  }

  getCriticalNotifications(): AlertNotification[] {
    return this.notifications.filter((notification) => notification.severity === "critical" && !notification.resolvedAt)
  }

  isMonitoringActive(): boolean {
    return this.isMonitoring
  }

  // Statistics
  getAlertStatistics(): {
    totalRules: number
    activeRules: number
    totalNotifications: number
    unacknowledgedNotifications: number
    criticalNotifications: number
    notificationsLast24h: number
    topTriggeredRules: Array<{ rule: AlertRule; count: number }>
  } {
    const now = Date.now()
    const last24h = now - 24 * 60 * 60 * 1000

    return {
      totalRules: this.rules.length,
      activeRules: this.rules.filter((r) => r.enabled).length,
      totalNotifications: this.notifications.length,
      unacknowledgedNotifications: this.notifications.filter((n) => !n.acknowledged).length,
      criticalNotifications: this.notifications.filter((n) => n.severity === "critical" && !n.resolvedAt).length,
      notificationsLast24h: this.notifications.filter((n) => n.timestamp.getTime() > last24h).length,
      topTriggeredRules: this.rules
        .filter((r) => r.triggerCount > 0)
        .sort((a, b) => b.triggerCount - a.triggerCount)
        .slice(0, 5)
        .map((rule) => ({ rule, count: rule.triggerCount })),
    }
  }
}

// Export singleton instance
export const alertSystem = AlertSystem.getInstance()

// Auto-initialize if in browser environment
if (typeof window !== "undefined") {
  alertSystem.initialize().catch(console.error)
}
