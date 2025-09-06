"use client"

import { useState, useEffect, useCallback } from "react"
import { alertSystem, type AlertRule, type AlertNotification, type NotificationChannel } from "@/lib/alert-system"

export function useAlertSystem() {
  const [rules, setRules] = useState<AlertRule[]>([])
  const [notifications, setNotifications] = useState<AlertNotification[]>([])
  const [channels, setChannels] = useState<NotificationChannel[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isMonitoring, setIsMonitoring] = useState(false)

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        setRules(alertSystem.getRules())
        setNotifications(alertSystem.getNotifications())
        setChannels(alertSystem.getChannels())
        setIsMonitoring(alertSystem.isMonitoringActive())
      } catch (error) {
        console.error("Failed to load alert system data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  // Listen for real-time alert events
  useEffect(() => {
    const handleAlertTriggered = (event: CustomEvent) => {
      const notification = event.detail as AlertNotification
      setNotifications((prev) => [notification, ...prev])
    }

    if (typeof window !== "undefined") {
      window.addEventListener("alertTriggered", handleAlertTriggered as EventListener)
      return () => {
        window.removeEventListener("alertTriggered", handleAlertTriggered as EventListener)
      }
    }
  }, [])

  // Rule management
  const createRule = useCallback(async (rule: Omit<AlertRule, "id" | "createdAt" | "triggerCount">) => {
    try {
      const newRule = await alertSystem.addRule(rule)
      setRules((prev) => [...prev, newRule])
      return newRule
    } catch (error) {
      console.error("Failed to create rule:", error)
      throw error
    }
  }, [])

  const updateRule = useCallback(async (ruleId: string, updates: Partial<AlertRule>) => {
    try {
      const updatedRule = await alertSystem.updateRule(ruleId, updates)
      if (updatedRule) {
        setRules((prev) => prev.map((rule) => (rule.id === ruleId ? updatedRule : rule)))
      }
      return updatedRule
    } catch (error) {
      console.error("Failed to update rule:", error)
      throw error
    }
  }, [])

  const deleteRule = useCallback(async (ruleId: string) => {
    try {
      const success = await alertSystem.deleteRule(ruleId)
      if (success) {
        setRules((prev) => prev.filter((rule) => rule.id !== ruleId))
      }
      return success
    } catch (error) {
      console.error("Failed to delete rule:", error)
      throw error
    }
  }, [])

  // Channel management
  const createChannel = useCallback(async (channel: Omit<NotificationChannel, "id">) => {
    try {
      const newChannel = await alertSystem.addChannel(channel)
      setChannels((prev) => [...prev, newChannel])
      return newChannel
    } catch (error) {
      console.error("Failed to create channel:", error)
      throw error
    }
  }, [])

  const testChannel = useCallback(async (channelId: string) => {
    try {
      return await alertSystem.testChannel(channelId)
    } catch (error) {
      console.error("Failed to test channel:", error)
      throw error
    }
  }, [])

  // Notification management
  const acknowledgeNotification = useCallback(async (notificationId: string) => {
    try {
      const success = await alertSystem.acknowledgeNotification(notificationId)
      if (success) {
        setNotifications((prev) =>
          prev.map((notification) =>
            notification.id === notificationId ? { ...notification, acknowledged: true } : notification,
          ),
        )
      }
      return success
    } catch (error) {
      console.error("Failed to acknowledge notification:", error)
      throw error
    }
  }, [])

  const resolveNotification = useCallback(async (notificationId: string) => {
    try {
      const success = await alertSystem.resolveNotification(notificationId)
      if (success) {
        setNotifications((prev) =>
          prev.map((notification) =>
            notification.id === notificationId
              ? { ...notification, acknowledged: true, resolvedAt: new Date() }
              : notification,
          ),
        )
      }
      return success
    } catch (error) {
      console.error("Failed to resolve notification:", error)
      throw error
    }
  }, [])

  // Monitoring control
  const startMonitoring = useCallback(() => {
    alertSystem.startMonitoring()
    setIsMonitoring(true)
  }, [])

  const stopMonitoring = useCallback(() => {
    alertSystem.stopMonitoring()
    setIsMonitoring(false)
  }, [])

  // Statistics
  const getStatistics = useCallback(() => {
    return alertSystem.getAlertStatistics()
  }, [])

  const getUnacknowledgedNotifications = useCallback(() => {
    return notifications.filter((notification) => !notification.acknowledged)
  }, [notifications])

  const getCriticalNotifications = useCallback(() => {
    return notifications.filter((notification) => notification.severity === "critical" && !notification.resolvedAt)
  }, [notifications])

  const getActiveRules = useCallback(() => {
    return rules.filter((rule) => rule.enabled)
  }, [rules])

  const getEnabledChannels = useCallback(() => {
    return channels.filter((channel) => channel.enabled)
  }, [channels])

  return {
    // Data
    rules,
    notifications,
    channels,
    isLoading,
    isMonitoring,

    // Rule management
    createRule,
    updateRule,
    deleteRule,

    // Channel management
    createChannel,
    testChannel,

    // Notification management
    acknowledgeNotification,
    resolveNotification,

    // Monitoring control
    startMonitoring,
    stopMonitoring,

    // Statistics and filters
    getStatistics,
    getUnacknowledgedNotifications,
    getCriticalNotifications,
    getActiveRules,
    getEnabledChannels,
  }
}
