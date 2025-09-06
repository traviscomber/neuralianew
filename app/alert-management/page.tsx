"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertTriangle,
  Bell,
  BellRing,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Plus,
  Settings,
  Shield,
  Users,
  Webhook,
  Zap,
  Eye,
  Search,
  Smartphone,
  Wifi,
  Activity,
  Edit,
  Trash2,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface AlertRule {
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

interface AlertNotification {
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

interface NotificationChannel {
  id: string
  name: string
  type: "email" | "webhook" | "slack" | "teams" | "sms"
  config: Record<string, any>
  enabled: boolean
  testStatus?: "success" | "failed" | "pending"
}

export default function AlertManagementPage() {
  const [alertRules, setAlertRules] = useState<AlertRule[]>([])
  const [notifications, setNotifications] = useState<AlertNotification[]>([])
  const [channels, setChannels] = useState<NotificationChannel[]>([])
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isChannelDialogOpen, setIsChannelDialogOpen] = useState(false)
  const [editingRule, setEditingRule] = useState<AlertRule | null>(null)
  const [editingChannel, setEditingChannel] = useState<NotificationChannel | null>(null)
  const [newRule, setNewRule] = useState<Partial<AlertRule>>({
    name: "",
    description: "",
    metric: "",
    category: "performance",
    condition: "greater_than",
    threshold: 0,
    severity: "medium",
    enabled: true,
    notifications: [],
    cooldown: 300,
  })
  const [newChannel, setNewChannel] = useState<Partial<NotificationChannel>>({
    name: "",
    type: "email",
    config: {},
    enabled: true,
  })

  const metricOptions = [
    { category: "performance", metrics: ["fcp", "lcp", "cls", "fid", "inp", "tti", "tbt", "speedIndex", "ttfb"] },
    {
      category: "userExperience",
      metrics: ["clickThroughRate", "bounceRate", "sessionDuration", "conversionRate", "errorRate"],
    },
    { category: "accessibility", metrics: ["wcagAA", "wcagAAA", "colorContrast", "keyboardNav", "screenReader"] },
    { category: "security", metrics: ["contentSecurityPolicy", "httpsRedirect", "hsts", "xFrameOptions"] },
    { category: "seo", metrics: ["metaTags", "titleOptimization", "pageSpeed", "coreWebVitals"] },
    { category: "mobile", metrics: ["mobileSpeed", "touchTargets", "thumbFriendly"] },
    { category: "network", metrics: ["wifiSpeed", "mobile4gSpeed", "mobile3gSpeed", "slow3gSpeed"] },
  ]

  useEffect(() => {
    loadAlertRules()
    loadNotifications()
    loadNotificationChannels()

    // Simulate real-time monitoring
    const interval = setInterval(() => {
      checkMetricsAndTriggerAlerts()
    }, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const loadAlertRules = () => {
    // Load from localStorage or API
    const savedRules = localStorage.getItem("alertRules")
    if (savedRules) {
      const rules = JSON.parse(savedRules).map((rule: any) => ({
        ...rule,
        createdAt: new Date(rule.createdAt),
        lastTriggered: rule.lastTriggered ? new Date(rule.lastTriggered) : undefined,
      }))
      setAlertRules(rules)
    } else {
      // Default rules
      const defaultRules: AlertRule[] = [
        {
          id: "1",
          name: "High Page Load Time",
          description: "Alert when LCP exceeds 2.5 seconds",
          metric: "lcp",
          category: "performance",
          condition: "greater_than",
          threshold: 2500,
          severity: "high",
          enabled: true,
          notifications: ["email-1"],
          cooldown: 300,
          createdAt: new Date(),
          triggerCount: 0,
        },
        {
          id: "2",
          name: "High Bounce Rate",
          description: "Alert when bounce rate exceeds 40%",
          metric: "bounceRate",
          category: "userExperience",
          condition: "greater_than",
          threshold: 40,
          severity: "medium",
          enabled: true,
          notifications: ["email-1", "slack-1"],
          cooldown: 600,
          createdAt: new Date(),
          triggerCount: 0,
        },
        {
          id: "3",
          name: "Low Accessibility Score",
          description: "Alert when WCAG AA compliance drops below 90%",
          metric: "wcagAA",
          category: "accessibility",
          condition: "less_than",
          threshold: 90,
          severity: "critical",
          enabled: true,
          notifications: ["email-1", "webhook-1"],
          cooldown: 900,
          createdAt: new Date(),
          triggerCount: 0,
        },
      ]
      setAlertRules(defaultRules)
      localStorage.setItem("alertRules", JSON.stringify(defaultRules))
    }
  }

  const loadNotifications = () => {
    const savedNotifications = localStorage.getItem("alertNotifications")
    if (savedNotifications) {
      const notifications = JSON.parse(savedNotifications).map((notification: any) => ({
        ...notification,
        timestamp: new Date(notification.timestamp),
        resolvedAt: notification.resolvedAt ? new Date(notification.resolvedAt) : undefined,
      }))
      setNotifications(notifications)
    }
  }

  const loadNotificationChannels = () => {
    const savedChannels = localStorage.getItem("notificationChannels")
    if (savedChannels) {
      setChannels(JSON.parse(savedChannels))
    } else {
      // Default channels
      const defaultChannels: NotificationChannel[] = [
        {
          id: "email-1",
          name: "Primary Email",
          type: "email",
          config: { email: "alerts@n3uralia.com" },
          enabled: true,
        },
        {
          id: "slack-1",
          name: "Engineering Slack",
          type: "slack",
          config: { webhook: "https://hooks.slack.com/services/..." },
          enabled: true,
        },
        {
          id: "webhook-1",
          name: "Monitoring Webhook",
          type: "webhook",
          config: { url: "https://api.n3uralia.com/alerts" },
          enabled: true,
        },
      ]
      setChannels(defaultChannels)
      localStorage.setItem("notificationChannels", JSON.stringify(defaultChannels))
    }
  }

  const checkMetricsAndTriggerAlerts = () => {
    // Simulate metric checking and alert triggering
    const currentMetrics = {
      lcp: Math.random() * 3000 + 1000,
      bounceRate: Math.random() * 50 + 20,
      wcagAA: Math.random() * 20 + 80,
      errorRate: Math.random() * 5,
      conversionRate: Math.random() * 8 + 2,
    }

    alertRules.forEach((rule) => {
      if (!rule.enabled) return

      const metricValue = currentMetrics[rule.metric as keyof typeof currentMetrics]
      if (metricValue === undefined) return

      let shouldTrigger = false
      switch (rule.condition) {
        case "greater_than":
          shouldTrigger = metricValue > rule.threshold
          break
        case "less_than":
          shouldTrigger = metricValue < rule.threshold
          break
        case "equals":
          shouldTrigger = metricValue === rule.threshold
          break
        case "not_equals":
          shouldTrigger = metricValue !== rule.threshold
          break
      }

      if (shouldTrigger) {
        // Check cooldown
        const now = new Date()
        if (rule.lastTriggered && now.getTime() - rule.lastTriggered.getTime() < rule.cooldown * 1000) {
          return
        }

        triggerAlert(rule, metricValue)
      }
    })
  }

  const triggerAlert = (rule: AlertRule, value: number) => {
    const notification: AlertNotification = {
      id: Date.now().toString(),
      ruleId: rule.id,
      ruleName: rule.name,
      metric: rule.metric,
      value,
      threshold: rule.threshold,
      severity: rule.severity,
      message: `${rule.name}: ${rule.metric} is ${value} (threshold: ${rule.threshold})`,
      timestamp: new Date(),
      acknowledged: false,
    }

    setNotifications((prev) => [notification, ...prev])

    // Update rule
    const updatedRule = {
      ...rule,
      lastTriggered: new Date(),
      triggerCount: rule.triggerCount + 1,
    }

    setAlertRules((prev) => prev.map((r) => (r.id === rule.id ? updatedRule : r)))

    // Send notifications
    sendNotification(notification, rule.notifications)

    // Save to localStorage
    const updatedNotifications = [notification, ...notifications]
    localStorage.setItem("alertNotifications", JSON.stringify(updatedNotifications))

    const updatedRules = alertRules.map((r) => (r.id === rule.id ? updatedRule : r))
    localStorage.setItem("alertRules", JSON.stringify(updatedRules))

    toast({
      title: "Alert Triggered",
      description: notification.message,
      variant: rule.severity === "critical" || rule.severity === "high" ? "destructive" : "default",
    })
  }

  const sendNotification = async (notification: AlertNotification, channelIds: string[]) => {
    for (const channelId of channelIds) {
      const channel = channels.find((c) => c.id === channelId && c.enabled)
      if (!channel) continue

      try {
        switch (channel.type) {
          case "email":
            console.log(`Sending email to ${channel.config.email}:`, notification.message)
            break
          case "slack":
            console.log(`Sending Slack message to ${channel.config.webhook}:`, notification.message)
            break
          case "webhook":
            console.log(`Sending webhook to ${channel.config.url}:`, notification)
            break
          case "teams":
            console.log(`Sending Teams message:`, notification.message)
            break
          case "sms":
            console.log(`Sending SMS to ${channel.config.phone}:`, notification.message)
            break
        }
      } catch (error) {
        console.error(`Failed to send notification via ${channel.type}:`, error)
      }
    }
  }

  const createAlertRule = () => {
    if (!newRule.name || !newRule.metric) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const rule: AlertRule = {
      id: Date.now().toString(),
      name: newRule.name!,
      description: newRule.description || "",
      metric: newRule.metric!,
      category: newRule.category!,
      condition: newRule.condition!,
      threshold: newRule.threshold!,
      severity: newRule.severity!,
      enabled: newRule.enabled!,
      notifications: newRule.notifications!,
      cooldown: newRule.cooldown!,
      createdAt: new Date(),
      triggerCount: 0,
    }

    const updatedRules = [...alertRules, rule]
    setAlertRules(updatedRules)
    localStorage.setItem("alertRules", JSON.stringify(updatedRules))

    setNewRule({
      name: "",
      description: "",
      metric: "",
      category: "performance",
      condition: "greater_than",
      threshold: 0,
      severity: "medium",
      enabled: true,
      notifications: [],
      cooldown: 300,
    })
    setIsCreateDialogOpen(false)

    toast({
      title: "Alert Rule Created",
      description: `Alert rule "${rule.name}" has been created successfully.`,
    })
  }

  const updateAlertRule = (ruleId: string, updates: Partial<AlertRule>) => {
    const updatedRules = alertRules.map((rule) => (rule.id === ruleId ? { ...rule, ...updates } : rule))
    setAlertRules(updatedRules)
    localStorage.setItem("alertRules", JSON.stringify(updatedRules))
  }

  const deleteAlertRule = (ruleId: string) => {
    const updatedRules = alertRules.filter((rule) => rule.id !== ruleId)
    setAlertRules(updatedRules)
    localStorage.setItem("alertRules", JSON.stringify(updatedRules))

    toast({
      title: "Alert Rule Deleted",
      description: "The alert rule has been deleted successfully.",
    })
  }

  const createNotificationChannel = () => {
    if (!newChannel.name || !newChannel.type) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const channel: NotificationChannel = {
      id: `${newChannel.type}-${Date.now()}`,
      name: newChannel.name!,
      type: newChannel.type!,
      config: newChannel.config!,
      enabled: newChannel.enabled!,
    }

    const updatedChannels = [...channels, channel]
    setChannels(updatedChannels)
    localStorage.setItem("notificationChannels", JSON.stringify(updatedChannels))

    setNewChannel({
      name: "",
      type: "email",
      config: {},
      enabled: true,
    })
    setIsChannelDialogOpen(false)

    toast({
      title: "Notification Channel Created",
      description: `Channel "${channel.name}" has been created successfully.`,
    })
  }

  const testNotificationChannel = async (channelId: string) => {
    const channel = channels.find((c) => c.id === channelId)
    if (!channel) return

    setChannels((prev) => prev.map((c) => (c.id === channelId ? { ...c, testStatus: "pending" } : c)))

    // Simulate test
    setTimeout(() => {
      const success = Math.random() > 0.2 // 80% success rate
      setChannels((prev) =>
        prev.map((c) => (c.id === channelId ? { ...c, testStatus: success ? "success" : "failed" } : c)),
      )

      toast({
        title: success ? "Test Successful" : "Test Failed",
        description: success
          ? `Test notification sent successfully to ${channel.name}`
          : `Failed to send test notification to ${channel.name}`,
        variant: success ? "default" : "destructive",
      })
    }, 2000)
  }

  const acknowledgeNotification = (notificationId: string) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === notificationId ? { ...notification, acknowledged: true } : notification,
    )
    setNotifications(updatedNotifications)
    localStorage.setItem("alertNotifications", JSON.stringify(updatedNotifications))
  }

  const resolveNotification = (notificationId: string) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === notificationId
        ? { ...notification, acknowledged: true, resolvedAt: new Date() }
        : notification,
    )
    setNotifications(updatedNotifications)
    localStorage.setItem("alertNotifications", JSON.stringify(updatedNotifications))
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "performance":
        return <Zap className="w-4 h-4" />
      case "userExperience":
        return <Users className="w-4 h-4" />
      case "accessibility":
        return <Eye className="w-4 h-4" />
      case "security":
        return <Shield className="w-4 h-4" />
      case "seo":
        return <Search className="w-4 h-4" />
      case "mobile":
        return <Smartphone className="w-4 h-4" />
      case "network":
        return <Wifi className="w-4 h-4" />
      default:
        return <Activity className="w-4 h-4" />
    }
  }

  const getChannelIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="w-4 h-4" />
      case "slack":
        return <MessageSquare className="w-4 h-4" />
      case "webhook":
        return <Webhook className="w-4 h-4" />
      case "teams":
        return <MessageSquare className="w-4 h-4" />
      case "sms":
        return <MessageSquare className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  const unacknowledgedCount = notifications.filter((n) => !n.acknowledged).length
  const criticalCount = notifications.filter((n) => n.severity === "critical" && !n.resolvedAt).length

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center">
                <BellRing className="w-8 h-8 mr-3 text-blue-600" />
                Alert Management
              </h1>
              <p className="text-slate-600 mt-2">
                Configure automated alerts for performance and UX metric degradation
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {unacknowledgedCount > 0 && (
                <Badge className="bg-red-100 text-red-800 border-red-200">{unacknowledgedCount} unacknowledged</Badge>
              )}
              {criticalCount > 0 && (
                <Badge className="bg-red-500 text-white animate-pulse">{criticalCount} critical</Badge>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Active Rules</p>
                    <p className="text-2xl font-bold text-slate-900">{alertRules.filter((r) => r.enabled).length}</p>
                  </div>
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Notifications (24h)</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {notifications.filter((n) => Date.now() - n.timestamp.getTime() < 86400000).length}
                    </p>
                  </div>
                  <Bell className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Channels</p>
                    <p className="text-2xl font-bold text-slate-900">{channels.filter((c) => c.enabled).length}</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Critical Alerts</p>
                    <p className="text-2xl font-bold text-slate-900">{criticalCount}</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="rules" className="space-y-6">
            <TabsList>
              <TabsTrigger value="rules">Alert Rules</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="channels">Channels</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="rules">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Alert Rules</CardTitle>
                      <CardDescription>Configure automated alerts for metric thresholds and conditions</CardDescription>
                    </div>
                    <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="w-4 h-4 mr-2" />
                          Create Rule
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Create Alert Rule</DialogTitle>
                          <DialogDescription>
                            Set up a new alert rule to monitor specific metrics and conditions
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Rule Name</Label>
                              <Input
                                id="name"
                                value={newRule.name}
                                onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
                                placeholder="High Page Load Time"
                              />
                            </div>
                            <div>
                              <Label htmlFor="category">Category</Label>
                              <Select
                                value={newRule.category}
                                onValueChange={(value) => setNewRule({ ...newRule, category: value, metric: "" })}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="performance">Performance</SelectItem>
                                  <SelectItem value="userExperience">User Experience</SelectItem>
                                  <SelectItem value="accessibility">Accessibility</SelectItem>
                                  <SelectItem value="security">Security</SelectItem>
                                  <SelectItem value="seo">SEO</SelectItem>
                                  <SelectItem value="mobile">Mobile</SelectItem>
                                  <SelectItem value="network">Network</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="description">Description</Label>
                            <Input
                              id="description"
                              value={newRule.description}
                              onChange={(e) => setNewRule({ ...newRule, description: e.target.value })}
                              placeholder="Alert when LCP exceeds 2.5 seconds"
                            />
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="metric">Metric</Label>
                              <Select
                                value={newRule.metric}
                                onValueChange={(value) => setNewRule({ ...newRule, metric: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select metric" />
                                </SelectTrigger>
                                <SelectContent>
                                  {metricOptions
                                    .find((cat) => cat.category === newRule.category)
                                    ?.metrics.map((metric) => (
                                      <SelectItem key={metric} value={metric}>
                                        {metric}
                                      </SelectItem>
                                    ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="condition">Condition</Label>
                              <Select
                                value={newRule.condition}
                                onValueChange={(value: any) => setNewRule({ ...newRule, condition: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="greater_than">Greater than</SelectItem>
                                  <SelectItem value="less_than">Less than</SelectItem>
                                  <SelectItem value="equals">Equals</SelectItem>
                                  <SelectItem value="not_equals">Not equals</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="threshold">Threshold</Label>
                              <Input
                                id="threshold"
                                type="number"
                                value={newRule.threshold}
                                onChange={(e) => setNewRule({ ...newRule, threshold: Number(e.target.value) })}
                                placeholder="2500"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="severity">Severity</Label>
                              <Select
                                value={newRule.severity}
                                onValueChange={(value: any) => setNewRule({ ...newRule, severity: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="low">Low</SelectItem>
                                  <SelectItem value="medium">Medium</SelectItem>
                                  <SelectItem value="high">High</SelectItem>
                                  <SelectItem value="critical">Critical</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="cooldown">Cooldown (seconds)</Label>
                              <Input
                                id="cooldown"
                                type="number"
                                value={newRule.cooldown}
                                onChange={(e) => setNewRule({ ...newRule, cooldown: Number(e.target.value) })}
                                placeholder="300"
                              />
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              id="enabled"
                              checked={newRule.enabled}
                              onCheckedChange={(checked) => setNewRule({ ...newRule, enabled: checked })}
                            />
                            <Label htmlFor="enabled">Enable this rule</Label>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={createAlertRule}>Create Rule</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alertRules.map((rule) => (
                      <div
                        key={rule.id}
                        className="flex items-center justify-between p-4 border border-slate-200 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            {getCategoryIcon(rule.category)}
                            <Switch
                              checked={rule.enabled}
                              onCheckedChange={(checked) => updateAlertRule(rule.id, { enabled: checked })}
                            />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold text-slate-900">{rule.name}</h3>
                              <Badge className={getSeverityColor(rule.severity)}>{rule.severity}</Badge>
                            </div>
                            <p className="text-sm text-slate-600">{rule.description}</p>
                            <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500">
                              <span>
                                {rule.metric} {rule.condition.replace("_", " ")} {rule.threshold}
                              </span>
                              <span>Triggered {rule.triggerCount} times</span>
                              {rule.lastTriggered && <span>Last: {rule.lastTriggered.toLocaleString()}</span>}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setEditingRule(rule)
                              setIsCreateDialogOpen(true)
                            }}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteAlertRule(rule.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                  <CardDescription>View and manage triggered alerts and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px]">
                    <div className="space-y-4">
                      {notifications.length === 0 ? (
                        <div className="text-center py-8">
                          <Bell className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                          <p className="text-slate-600">No notifications yet</p>
                        </div>
                      ) : (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 border rounded-lg ${
                              notification.acknowledged
                                ? "border-slate-200 bg-slate-50"
                                : "border-orange-200 bg-orange-50"
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Badge className={getSeverityColor(notification.severity)}>
                                    {notification.severity}
                                  </Badge>
                                  <span className="text-sm text-slate-600">
                                    {notification.timestamp.toLocaleString()}
                                  </span>
                                  {notification.resolvedAt && (
                                    <Badge className="bg-green-100 text-green-800 border-green-200">Resolved</Badge>
                                  )}
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-1">{notification.ruleName}</h3>
                                <p className="text-sm text-slate-600 mb-2">{notification.message}</p>
                                <div className="text-xs text-slate-500">
                                  Metric: {notification.metric} | Value: {notification.value} | Threshold:{" "}
                                  {notification.threshold}
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                {!notification.acknowledged && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => acknowledgeNotification(notification.id)}
                                  >
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    Acknowledge
                                  </Button>
                                )}
                                {!notification.resolvedAt && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => resolveNotification(notification.id)}
                                  >
                                    Resolve
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="channels">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Notification Channels</CardTitle>
                      <CardDescription>Configure how and where alerts are sent</CardDescription>
                    </div>
                    <Dialog open={isChannelDialogOpen} onOpenChange={setIsChannelDialogOpen}>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="w-4 h-4 mr-2" />
                          Add Channel
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Notification Channel</DialogTitle>
                          <DialogDescription>Configure a new notification channel</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="channelName">Channel Name</Label>
                              <Input
                                id="channelName"
                                value={newChannel.name}
                                onChange={(e) => setNewChannel({ ...newChannel, name: e.target.value })}
                                placeholder="Primary Email"
                              />
                            </div>
                            <div>
                              <Label htmlFor="channelType">Type</Label>
                              <Select
                                value={newChannel.type}
                                onValueChange={(value: any) =>
                                  setNewChannel({ ...newChannel, type: value, config: {} })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="email">Email</SelectItem>
                                  <SelectItem value="slack">Slack</SelectItem>
                                  <SelectItem value="webhook">Webhook</SelectItem>
                                  <SelectItem value="teams">Microsoft Teams</SelectItem>
                                  <SelectItem value="sms">SMS</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          {newChannel.type === "email" && (
                            <div>
                              <Label htmlFor="email">Email Address</Label>
                              <Input
                                id="email"
                                type="email"
                                value={newChannel.config?.email || ""}
                                onChange={(e) =>
                                  setNewChannel({
                                    ...newChannel,
                                    config: { ...newChannel.config, email: e.target.value },
                                  })
                                }
                                placeholder="alerts@n3uralia.com"
                              />
                            </div>
                          )}
                          {newChannel.type === "webhook" && (
                            <div>
                              <Label htmlFor="webhookUrl">Webhook URL</Label>
                              <Input
                                id="webhookUrl"
                                value={newChannel.config?.url || ""}
                                onChange={(e) =>
                                  setNewChannel({
                                    ...newChannel,
                                    config: { ...newChannel.config, url: e.target.value },
                                  })
                                }
                                placeholder="https://api.n3uralia.com/alerts"
                              />
                            </div>
                          )}
                          {(newChannel.type === "slack" || newChannel.type === "teams") && (
                            <div>
                              <Label htmlFor="webhookUrl">Webhook URL</Label>
                              <Input
                                id="webhookUrl"
                                value={newChannel.config?.webhook || ""}
                                onChange={(e) =>
                                  setNewChannel({
                                    ...newChannel,
                                    config: { ...newChannel.config, webhook: e.target.value },
                                  })
                                }
                                placeholder="https://hooks.slack.com/services/..."
                              />
                            </div>
                          )}
                          {newChannel.type === "sms" && (
                            <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                value={newChannel.config?.phone || ""}
                                onChange={(e) =>
                                  setNewChannel({
                                    ...newChannel,
                                    config: { ...newChannel.config, phone: e.target.value },
                                  })
                                }
                                placeholder="+1234567890"
                              />
                            </div>
                          )}
                          <div className="flex items-center space-x-2">
                            <Switch
                              id="channelEnabled"
                              checked={newChannel.enabled}
                              onCheckedChange={(checked) => setNewChannel({ ...newChannel, enabled: checked })}
                            />
                            <Label htmlFor="channelEnabled">Enable this channel</Label>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsChannelDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={createNotificationChannel}>Add Channel</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {channels.map((channel) => (
                      <div
                        key={channel.id}
                        className="flex items-center justify-between p-4 border border-slate-200 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            {getChannelIcon(channel.type)}
                            <Switch
                              checked={channel.enabled}
                              onCheckedChange={(checked) => {
                                const updatedChannels = channels.map((c) =>
                                  c.id === channel.id ? { ...c, enabled: checked } : c,
                                )
                                setChannels(updatedChannels)
                                localStorage.setItem("notificationChannels", JSON.stringify(updatedChannels))
                              }}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900">{channel.name}</h3>
                            <p className="text-sm text-slate-600 capitalize">{channel.type}</p>
                            <div className="text-xs text-slate-500">
                              {channel.type === "email" && channel.config.email}
                              {channel.type === "webhook" && channel.config.url}
                              {channel.type === "slack" && "Slack Integration"}
                              {channel.type === "teams" && "Microsoft Teams"}
                              {channel.type === "sms" && channel.config.phone}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {channel.testStatus && (
                            <Badge
                              className={
                                channel.testStatus === "success"
                                  ? "bg-green-100 text-green-800 border-green-200"
                                  : channel.testStatus === "failed"
                                    ? "bg-red-100 text-red-800 border-red-200"
                                    : "bg-yellow-100 text-yellow-800 border-yellow-200"
                              }
                            >
                              {channel.testStatus}
                            </Badge>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => testNotificationChannel(channel.id)}
                            disabled={channel.testStatus === "pending"}
                          >
                            {channel.testStatus === "pending" ? <Clock className="w-4 h-4 animate-spin" /> : "Test"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Alert Settings</CardTitle>
                  <CardDescription>Global configuration for the alert system</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">Global Alert System</h3>
                      <p className="text-sm text-slate-600">Enable or disable all alert monitoring</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">Quiet Hours</h3>
                      <p className="text-sm text-slate-600">Suppress non-critical alerts during specified hours</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">Alert Aggregation</h3>
                      <p className="text-sm text-slate-600">Group similar alerts to reduce notification spam</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Default Cooldown Period</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Minimum time between alerts for the same rule (seconds)
                    </p>
                    <Input type="number" defaultValue="300" className="w-32" />
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Retention Period</h3>
                    <p className="text-sm text-slate-600 mb-4">How long to keep alert history (days)</p>
                    <Input type="number" defaultValue="30" className="w-32" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
