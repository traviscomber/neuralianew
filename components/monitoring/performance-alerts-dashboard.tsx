"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
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
  Mail,
  MessageSquare,
  Plus,
  Settings,
  Webhook,
  Monitor,
  Edit,
  Trash2,
} from "lucide-react"
import {
  logoPerformanceMonitor,
  type PerformanceThreshold,
  type PerformanceAlert,
} from "@/lib/logo-performance-monitor"
import { toast } from "@/hooks/use-toast"

export function PerformanceAlertsDashboard() {
  const [thresholds, setThresholds] = useState<PerformanceThreshold[]>([])
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([])
  const [channels, setChannels] = useState<any[]>([])
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isChannelDialogOpen, setIsChannelDialogOpen] = useState(false)
  const [editingThreshold, setEditingThreshold] = useState<PerformanceThreshold | null>(null)
  const [newThreshold, setNewThreshold] = useState<Partial<PerformanceThreshold>>({
    name: "",
    metric: "successRate",
    condition: "below",
    value: 95,
    enabled: true,
    cooldownMinutes: 10,
    notificationChannels: ["console"],
  })
  const [newChannel, setNewChannel] = useState<any>({
    name: "",
    type: "console",
    config: {},
    enabled: true,
  })

  const loadData = () => {
    setThresholds(logoPerformanceMonitor.getThresholds())
    setAlerts(logoPerformanceMonitor.getAlerts())
    setChannels(logoPerformanceMonitor.getNotificationChannels())
  }

  useEffect(() => {
    loadData()

    // Listen for real-time alerts
    const handlePerformanceAlert = (event: CustomEvent) => {
      const alert = event.detail as PerformanceAlert
      setAlerts((prev) => [alert, ...prev])

      // Show toast notification
      toast({
        title: `Performance Alert: ${alert.thresholdName}`,
        description: alert.message,
        variant: alert.severity === "critical" || alert.severity === "high" ? "destructive" : "default",
      })
    }

    if (typeof window !== "undefined") {
      window.addEventListener("performanceAlert", handlePerformanceAlert as EventListener)
      return () => {
        window.removeEventListener("performanceAlert", handlePerformanceAlert as EventListener)
      }
    }
  }, [])

  const createThreshold = () => {
    if (!newThreshold.name || newThreshold.value === undefined) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const threshold = logoPerformanceMonitor.addThreshold(newThreshold as Omit<PerformanceThreshold, "id">)
    setThresholds((prev) => [...prev, threshold])

    setNewThreshold({
      name: "",
      metric: "successRate",
      condition: "below",
      value: 95,
      enabled: true,
      cooldownMinutes: 10,
      notificationChannels: ["console"],
    })
    setIsCreateDialogOpen(false)

    toast({
      title: "Threshold Created",
      description: `Performance threshold "${threshold.name}" has been created.`,
    })
  }

  const updateThreshold = (thresholdId: string, updates: Partial<PerformanceThreshold>) => {
    const success = logoPerformanceMonitor.updateThreshold(thresholdId, updates)
    if (success) {
      setThresholds((prev) => prev.map((t) => (t.id === thresholdId ? { ...t, ...updates } : t)))
    }
  }

  const deleteThreshold = (thresholdId: string) => {
    const success = logoPerformanceMonitor.deleteThreshold(thresholdId)
    if (success) {
      setThresholds((prev) => prev.filter((t) => t.id !== thresholdId))
      toast({
        title: "Threshold Deleted",
        description: "Performance threshold has been deleted.",
      })
    }
  }

  const createChannel = () => {
    if (!newChannel.name || !newChannel.type) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const channel = logoPerformanceMonitor.addNotificationChannel(newChannel)
    setChannels((prev) => [...prev, channel])

    setNewChannel({
      name: "",
      type: "console",
      config: {},
      enabled: true,
    })
    setIsChannelDialogOpen(false)

    toast({
      title: "Channel Created",
      description: `Notification channel "${channel.name}" has been created.`,
    })
  }

  const acknowledgeAlert = (alertId: string) => {
    const success = logoPerformanceMonitor.acknowledgeAlert(alertId)
    if (success) {
      setAlerts((prev) => prev.map((a) => (a.id === alertId ? { ...a, acknowledged: true } : a)))
    }
  }

  const testNotifications = async () => {
    // Request browser notification permission
    if ("Notification" in window) {
      const permission = await Notification.requestPermission()
      if (permission === "granted") {
        new Notification("Test Notification", {
          body: "Logo performance monitoring notifications are working!",
          icon: "/n3uralia-logo.png",
        })

        toast({
          title: "Test Successful",
          description: "Browser notifications are working correctly.",
        })
      } else {
        toast({
          title: "Permission Denied",
          description: "Please enable browser notifications for alerts.",
          variant: "destructive",
        })
      }
    }
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

  const getChannelIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="w-4 h-4" />
      case "webhook":
        return <Webhook className="w-4 h-4" />
      case "browser":
        return <Monitor className="w-4 h-4" />
      case "console":
        return <MessageSquare className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  const unacknowledgedCount = alerts.filter((a) => !a.acknowledged).length
  const criticalCount = alerts.filter((a) => a.severity === "critical" && !a.acknowledged).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BellRing className="w-5 h-5" />
                Performance Alert Configuration
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Configure automated notifications for logo performance thresholds
              </p>
            </div>
            <div className="flex items-center gap-4">
              {unacknowledgedCount > 0 && (
                <Badge className="bg-red-100 text-red-800 border-red-200">{unacknowledgedCount} unacknowledged</Badge>
              )}
              {criticalCount > 0 && (
                <Badge className="bg-red-500 text-white animate-pulse">{criticalCount} critical</Badge>
              )}
              <Button onClick={testNotifications} variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Test Notifications
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Thresholds</p>
                <p className="text-2xl font-bold">{thresholds.filter((t) => t.enabled).length}</p>
              </div>
              <Settings className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Recent Alerts</p>
                <p className="text-2xl font-bold">{alerts.length}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Notification Channels</p>
                <p className="text-2xl font-bold">{channels.filter((c) => c.enabled).length}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Critical Alerts</p>
                <p className="text-2xl font-bold">{criticalCount}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="thresholds" className="space-y-4">
        <TabsList>
          <TabsTrigger value="thresholds">Thresholds</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="channels">Channels</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="thresholds">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Performance Thresholds</CardTitle>
                  <p className="text-sm text-muted-foreground">Configure automatic alerts for performance metrics</p>
                </div>
                <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Threshold
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create Performance Threshold</DialogTitle>
                      <DialogDescription>Set up automated alerts for specific performance conditions</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div>
                        <Label htmlFor="name">Threshold Name</Label>
                        <Input
                          id="name"
                          value={newThreshold.name}
                          onChange={(e) => setNewThreshold({ ...newThreshold, name: e.target.value })}
                          placeholder="Low Success Rate Alert"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="metric">Metric</Label>
                          <Select
                            value={newThreshold.metric}
                            onValueChange={(value: any) => setNewThreshold({ ...newThreshold, metric: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="successRate">Success Rate (%)</SelectItem>
                              <SelectItem value="averageLoadTime">Average Load Time (ms)</SelectItem>
                              <SelectItem value="fallbackUsageRate">Fallback Usage Rate (%)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="condition">Condition</Label>
                          <Select
                            value={newThreshold.condition}
                            onValueChange={(value: any) => setNewThreshold({ ...newThreshold, condition: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="above">Above</SelectItem>
                              <SelectItem value="below">Below</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="value">Threshold Value</Label>
                          <Input
                            id="value"
                            type="number"
                            value={newThreshold.value}
                            onChange={(e) => setNewThreshold({ ...newThreshold, value: Number(e.target.value) })}
                            placeholder="95"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cooldown">Cooldown (minutes)</Label>
                          <Input
                            id="cooldown"
                            type="number"
                            value={newThreshold.cooldownMinutes}
                            onChange={(e) =>
                              setNewThreshold({ ...newThreshold, cooldownMinutes: Number(e.target.value) })
                            }
                            placeholder="10"
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="enabled"
                          checked={newThreshold.enabled}
                          onCheckedChange={(checked) => setNewThreshold({ ...newThreshold, enabled: checked })}
                        />
                        <Label htmlFor="enabled">Enable this threshold</Label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={createThreshold}>Create Threshold</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {thresholds.map((threshold) => (
                  <div
                    key={threshold.id}
                    className="flex items-center justify-between p-4 border border-slate-200 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <Switch
                        checked={threshold.enabled}
                        onCheckedChange={(checked) => updateThreshold(threshold.id, { enabled: checked })}
                      />
                      <div>
                        <h3 className="font-semibold text-slate-900">{threshold.name}</h3>
                        <p className="text-sm text-slate-600">
                          {threshold.metric.replace(/([A-Z])/g, " $1").toLowerCase()} {threshold.condition}{" "}
                          {threshold.value}
                          {threshold.metric === "averageLoadTime" ? "ms" : "%"}
                        </p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-slate-500">
                          <span>Cooldown: {threshold.cooldownMinutes}min</span>
                          {threshold.lastTriggered && (
                            <span>Last triggered: {threshold.lastTriggered.toLocaleString()}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingThreshold(threshold)
                          setNewThreshold(threshold)
                          setIsCreateDialogOpen(true)
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteThreshold(threshold.id)}
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

        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <p className="text-sm text-muted-foreground">View and manage triggered performance alerts</p>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px]">
                <div className="space-y-4">
                  {alerts.length === 0 ? (
                    <div className="text-center py-8">
                      <Bell className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-600">No alerts yet</p>
                    </div>
                  ) : (
                    alerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-4 border rounded-lg ${
                          alert.acknowledged ? "border-slate-200 bg-slate-50" : "border-orange-200 bg-orange-50"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge className={getSeverityColor(alert.severity)}>{alert.severity}</Badge>
                              <span className="text-sm text-slate-600">{alert.timestamp.toLocaleString()}</span>
                              {alert.acknowledged && (
                                <Badge className="bg-green-100 text-green-800 border-green-200">Acknowledged</Badge>
                              )}
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-1">{alert.thresholdName}</h3>
                            <p className="text-sm text-slate-600 mb-2">{alert.message}</p>
                            <div className="text-xs text-slate-500">
                              Current: {alert.currentValue.toFixed(1)} | Threshold: {alert.condition}{" "}
                              {alert.thresholdValue}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {!alert.acknowledged && (
                              <Button variant="outline" size="sm" onClick={() => acknowledgeAlert(alert.id)}>
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Acknowledge
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
                  <p className="text-sm text-muted-foreground">Configure how and where alerts are sent</p>
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
                            placeholder="Email Alerts"
                          />
                        </div>
                        <div>
                          <Label htmlFor="channelType">Type</Label>
                          <Select
                            value={newChannel.type}
                            onValueChange={(value) => setNewChannel({ ...newChannel, type: value, config: {} })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="console">Console Logging</SelectItem>
                              <SelectItem value="browser">Browser Notifications</SelectItem>
                              <SelectItem value="webhook">Webhook</SelectItem>
                              <SelectItem value="email">Email</SelectItem>
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
                      <Button onClick={createChannel}>Add Channel</Button>
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
                        <Switch checked={channel.enabled} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{channel.name}</h3>
                        <p className="text-sm text-slate-600 capitalize">{channel.type}</p>
                        <div className="text-xs text-slate-500">
                          {channel.type === "email" && channel.config.email}
                          {channel.type === "webhook" && channel.config.url}
                          {channel.type === "browser" && "Browser notifications"}
                          {channel.type === "console" && "Console logging"}
                        </div>
                      </div>
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
              <p className="text-sm text-muted-foreground">Global configuration for performance alerts</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">Browser Notifications</h3>
                  <p className="text-sm text-slate-600">Enable desktop notifications for critical alerts</p>
                </div>
                <Button onClick={testNotifications} variant="outline">
                  Test & Enable
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">Console Logging</h3>
                  <p className="text-sm text-slate-600">Log all alerts to browser console</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">Alert Persistence</h3>
                  <p className="text-sm text-slate-600">Keep alert history in local storage</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
