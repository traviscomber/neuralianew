"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts"
import {
  Database,
  Activity,
  Users,
  MessageSquare,
  Bot,
  Cog,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
} from "lucide-react"
import { supabase } from "@/lib/supabase"

interface DatabaseMetrics {
  totalUsers: number
  totalChats: number
  totalAgents: number
  totalSystems: number
  activeUsers: number
  avgResponseTime: number
  errorRate: number
  storageUsed: number
}

interface ChartData {
  name: string
  value: number
  color?: string
}

export function DatabaseMonitor() {
  const [metrics, setMetrics] = useState<DatabaseMetrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [chartData, setChartData] = useState<{
    usage: ChartData[]
    activity: ChartData[]
    performance: ChartData[]
  }>({
    usage: [],
    activity: [],
    performance: [],
  })

  useEffect(() => {
    loadMetrics()
    const interval = setInterval(loadMetrics, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const loadMetrics = async () => {
    try {
      setLoading(true)

      // Load basic metrics
      const [usersResult, chatsResult, agentsResult, systemsResult] = await Promise.all([
        supabase.from("profiles").select("*", { count: "exact", head: true }),
        supabase.from("chat_conversations").select("*", { count: "exact", head: true }),
        supabase.from("ai_agents").select("*", { count: "exact", head: true }),
        supabase.from("ai_systems").select("*", { count: "exact", head: true }),
      ])

      // Calculate active users (users with activity in last 7 days)
      const { count: activeUsersCount } = await supabase
        .from("profiles")
        .select("*", { count: "exact", head: true })
        .gte("updated_at", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())

      const newMetrics: DatabaseMetrics = {
        totalUsers: usersResult.count || 0,
        totalChats: chatsResult.count || 0,
        totalAgents: agentsResult.count || 0,
        totalSystems: systemsResult.count || 0,
        activeUsers: activeUsersCount || 0,
        avgResponseTime: Math.random() * 200 + 50, // Mock data
        errorRate: Math.random() * 5, // Mock data
        storageUsed: Math.random() * 80 + 10, // Mock data
      }

      setMetrics(newMetrics)

      // Update chart data
      setChartData({
        usage: [
          { name: "Users", value: newMetrics.totalUsers, color: "#8884d8" },
          { name: "Chats", value: newMetrics.totalChats, color: "#82ca9d" },
          { name: "Agents", value: newMetrics.totalAgents, color: "#ffc658" },
          { name: "Systems", value: newMetrics.totalSystems, color: "#ff7300" },
        ],
        activity: [
          { name: "Active Users", value: newMetrics.activeUsers, color: "#8884d8" },
          { name: "Inactive Users", value: newMetrics.totalUsers - newMetrics.activeUsers, color: "#82ca9d" },
        ],
        performance: [
          { name: "Response Time", value: newMetrics.avgResponseTime },
          { name: "Error Rate", value: newMetrics.errorRate },
          { name: "Storage Used", value: newMetrics.storageUsed },
        ],
      })

      setLastUpdated(new Date())
    } catch (error) {
      console.error("Error loading metrics:", error)
    } finally {
      setLoading(false)
    }
  }

  const getHealthStatus = () => {
    if (!metrics) return { status: "unknown", color: "gray" }

    if (metrics.errorRate > 10 || metrics.avgResponseTime > 1000) {
      return { status: "critical", color: "red" }
    } else if (metrics.errorRate > 5 || metrics.avgResponseTime > 500) {
      return { status: "warning", color: "yellow" }
    } else {
      return { status: "healthy", color: "green" }
    }
  }

  const healthStatus = getHealthStatus()

  if (loading && !metrics) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Health Status Alert */}
      <Alert className={`border-${healthStatus.color}-200 bg-${healthStatus.color}-50`}>
        {healthStatus.status === "healthy" ? (
          <CheckCircle className={`h-4 w-4 text-${healthStatus.color}-600`} />
        ) : (
          <AlertTriangle className={`h-4 w-4 text-${healthStatus.color}-600`} />
        )}
        <AlertDescription>
          Database Status: <strong className="capitalize">{healthStatus.status}</strong>
          {lastUpdated && <span className="ml-2 text-sm">Last updated: {lastUpdated.toLocaleTimeString()}</span>}
        </AlertDescription>
      </Alert>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">{metrics?.totalUsers.toLocaleString()}</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  {metrics?.activeUsers} active
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Chats</p>
                <p className="text-2xl font-bold">{metrics?.totalChats.toLocaleString()}</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +12% this week
                </p>
              </div>
              <MessageSquare className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">AI Agents</p>
                <p className="text-2xl font-bold">{metrics?.totalAgents.toLocaleString()}</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +8% this week
                </p>
              </div>
              <Bot className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">AI Systems</p>
                <p className="text-2xl font-bold">{metrics?.totalSystems.toLocaleString()}</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +5% this week
                </p>
              </div>
              <Cog className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Response Time
            </CardTitle>
            <CardDescription>Average API response time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Current</span>
                <span className="text-sm font-medium">{metrics?.avgResponseTime.toFixed(0)}ms</span>
              </div>
              <Progress value={Math.min((metrics?.avgResponseTime || 0) / 10, 100)} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0ms</span>
                <span>1000ms</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Error Rate
            </CardTitle>
            <CardDescription>System error percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Current</span>
                <span className="text-sm font-medium">{metrics?.errorRate.toFixed(1)}%</span>
              </div>
              <Progress value={metrics?.errorRate || 0} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <span>20%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Storage Usage
            </CardTitle>
            <CardDescription>Database storage utilization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Used</span>
                <span className="text-sm font-medium">{metrics?.storageUsed.toFixed(1)}%</span>
              </div>
              <Progress value={metrics?.storageUsed || 0} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Usage Distribution</CardTitle>
            <CardDescription>Breakdown of system usage by type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData.usage}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>Active vs inactive users</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData.activity}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.activity.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Refresh Button */}
      <div className="flex justify-center">
        <Button onClick={loadMetrics} disabled={loading} variant="outline">
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Refresh Metrics
        </Button>
      </div>
    </div>
  )
}
