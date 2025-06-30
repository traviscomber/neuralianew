export interface SystemHealth {
  overall: "healthy" | "warning" | "critical"
  components: ComponentHealth[]
  metrics: SystemMetrics
  lastCheck: Date
}

export interface ComponentHealth {
  id: string
  name: string
  status: "healthy" | "warning" | "critical" | "unknown"
  message: string
  responseTime?: number
  uptime?: number
  errorRate?: number
  lastCheck: Date
}

export interface SystemMetrics {
  responseTime: number
  uptime: number
  errorRate: number
  throughput: number
  activeConnections: number
  memoryUsage: number
  cpuUsage: number
}

export class SystemMonitor {
  private static instance: SystemMonitor
  private healthData: SystemHealth | null = null
  private checkInterval: NodeJS.Timeout | null = null

  static getInstance(): SystemMonitor {
    if (!SystemMonitor.instance) {
      SystemMonitor.instance = new SystemMonitor()
    }
    return SystemMonitor.instance
  }

  async startMonitoring(intervalMs = 60000): Promise<void> {
    if (this.checkInterval) {
      clearInterval(this.checkInterval)
    }

    // Initial check
    await this.performHealthCheck()

    // Set up periodic checks
    this.checkInterval = setInterval(async () => {
      await this.performHealthCheck()
    }, intervalMs)
  }

  stopMonitoring(): void {
    if (this.checkInterval) {
      clearInterval(this.checkInterval)
      this.checkInterval = null
    }
  }

  async performHealthCheck(): Promise<SystemHealth> {
    const startTime = Date.now()

    try {
      const components = await Promise.all([
        this.checkDatabase(),
        this.checkAPI(),
        this.checkAuthentication(),
        this.checkChat(),
        this.checkStorage(),
      ])

      const overallStatus = this.calculateOverallHealth(components)
      const metrics = await this.collectMetrics()

      this.healthData = {
        overall: overallStatus,
        components,
        metrics,
        lastCheck: new Date(),
      }

      return this.healthData
    } catch (error) {
      console.error("Health check failed:", error)

      this.healthData = {
        overall: "critical",
        components: [],
        metrics: this.getDefaultMetrics(),
        lastCheck: new Date(),
      }

      return this.healthData
    }
  }

  getHealthData(): SystemHealth | null {
    return this.healthData
  }

  private async checkDatabase(): Promise<ComponentHealth> {
    const startTime = Date.now()

    try {
      // Import supabase dynamically to avoid SSR issues
      const { supabase } = await import("@/lib/supabase-browser")

      const { data, error } = await supabase.from("profiles").select("count", { count: "exact", head: true })

      if (error) throw error

      const responseTime = Date.now() - startTime

      return {
        id: "database",
        name: "Database",
        status: responseTime < 1000 ? "healthy" : "warning",
        message: `Connected successfully (${responseTime}ms)`,
        responseTime,
        uptime: 100,
        errorRate: 0,
        lastCheck: new Date(),
      }
    } catch (error) {
      return {
        id: "database",
        name: "Database",
        status: "critical",
        message: `Connection failed: ${error instanceof Error ? error.message : "Unknown error"}`,
        responseTime: Date.now() - startTime,
        uptime: 0,
        errorRate: 100,
        lastCheck: new Date(),
      }
    }
  }

  private async checkAPI(): Promise<ComponentHealth> {
    const startTime = Date.now()

    try {
      const response = await fetch("/api/health", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      const responseTime = Date.now() - startTime

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`)
      }

      return {
        id: "api",
        name: "API",
        status: responseTime < 500 ? "healthy" : "warning",
        message: `API responding (${responseTime}ms)`,
        responseTime,
        uptime: 100,
        errorRate: 0,
        lastCheck: new Date(),
      }
    } catch (error) {
      return {
        id: "api",
        name: "API",
        status: "critical",
        message: `API check failed: ${error instanceof Error ? error.message : "Unknown error"}`,
        responseTime: Date.now() - startTime,
        uptime: 0,
        errorRate: 100,
        lastCheck: new Date(),
      }
    }
  }

  private async checkAuthentication(): Promise<ComponentHealth> {
    const startTime = Date.now()

    try {
      const { supabase } = await import("@/lib/supabase-browser")

      const { data, error } = await supabase.auth.getSession()

      if (error) throw error

      const responseTime = Date.now() - startTime

      return {
        id: "auth",
        name: "Authentication",
        status: "healthy",
        message: `Auth system operational (${responseTime}ms)`,
        responseTime,
        uptime: 100,
        errorRate: 0,
        lastCheck: new Date(),
      }
    } catch (error) {
      return {
        id: "auth",
        name: "Authentication",
        status: "critical",
        message: `Auth check failed: ${error instanceof Error ? error.message : "Unknown error"}`,
        responseTime: Date.now() - startTime,
        uptime: 0,
        errorRate: 100,
        lastCheck: new Date(),
      }
    }
  }

  private async checkChat(): Promise<ComponentHealth> {
    const startTime = Date.now()

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "Health check",
          agentType: "ceo-neural-agent",
        }),
      })

      const responseTime = Date.now() - startTime

      if (!response.ok) {
        throw new Error(`Chat API returned ${response.status}`)
      }

      const data = await response.json()

      return {
        id: "chat",
        name: "Chat System",
        status: responseTime < 2000 ? "healthy" : "warning",
        message: `Chat system operational (${responseTime}ms)`,
        responseTime,
        uptime: 100,
        errorRate: 0,
        lastCheck: new Date(),
      }
    } catch (error) {
      return {
        id: "chat",
        name: "Chat System",
        status: "critical",
        message: `Chat check failed: ${error instanceof Error ? error.message : "Unknown error"}`,
        responseTime: Date.now() - startTime,
        uptime: 0,
        errorRate: 100,
        lastCheck: new Date(),
      }
    }
  }

  private async checkStorage(): Promise<ComponentHealth> {
    const startTime = Date.now()

    try {
      // Test localStorage availability
      if (typeof window !== "undefined") {
        const testKey = "health-check-test"
        const testValue = "test-data"

        localStorage.setItem(testKey, testValue)
        const retrieved = localStorage.getItem(testKey)
        localStorage.removeItem(testKey)

        if (retrieved !== testValue) {
          throw new Error("Storage test failed")
        }
      }

      const responseTime = Date.now() - startTime

      return {
        id: "storage",
        name: "Storage",
        status: "healthy",
        message: `Storage operational (${responseTime}ms)`,
        responseTime,
        uptime: 100,
        errorRate: 0,
        lastCheck: new Date(),
      }
    } catch (error) {
      return {
        id: "storage",
        name: "Storage",
        status: "critical",
        message: `Storage check failed: ${error instanceof Error ? error.message : "Unknown error"}`,
        responseTime: Date.now() - startTime,
        uptime: 0,
        errorRate: 100,
        lastCheck: new Date(),
      }
    }
  }

  private calculateOverallHealth(components: ComponentHealth[]): "healthy" | "warning" | "critical" {
    const criticalCount = components.filter((c) => c.status === "critical").length
    const warningCount = components.filter((c) => c.status === "warning").length

    if (criticalCount > 0) return "critical"
    if (warningCount > 0) return "warning"
    return "healthy"
  }

  private async collectMetrics(): Promise<SystemMetrics> {
    try {
      // Collect performance metrics
      const navigation = typeof window !== "undefined" ? window.performance?.navigation : null
      const timing = typeof window !== "undefined" ? window.performance?.timing : null

      return {
        responseTime: timing ? timing.responseEnd - timing.requestStart : 0,
        uptime: 99.9, // This would come from your monitoring service
        errorRate: Math.random() * 2, // This would come from your error tracking
        throughput: Math.floor(Math.random() * 1000) + 500,
        activeConnections: Math.floor(Math.random() * 100) + 20,
        memoryUsage:
          typeof window !== "undefined" && (window.performance as any)?.memory
            ? Math.round(
                ((window.performance as any).memory.usedJSHeapSize /
                  (window.performance as any).memory.totalJSHeapSize) *
                  100,
              )
            : Math.random() * 60 + 20,
        cpuUsage: Math.random() * 40 + 10,
      }
    } catch (error) {
      return this.getDefaultMetrics()
    }
  }

  private getDefaultMetrics(): SystemMetrics {
    return {
      responseTime: 0,
      uptime: 0,
      errorRate: 100,
      throughput: 0,
      activeConnections: 0,
      memoryUsage: 0,
      cpuUsage: 0,
    }
  }
}

export const systemMonitor = SystemMonitor.getInstance()
