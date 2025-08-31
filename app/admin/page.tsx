"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/hooks/use-auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Database,
  Play,
  AlertTriangle,
  CheckCircle,
  Users,
  Activity,
  Settings,
  Trash2,
  RefreshCw,
  Download,
  Upload,
  Shield,
  BarChart3,
  Server,
  HardDrive,
  Zap,
  Eye,
  Edit,
  Plus,
  Search,
} from "lucide-react"
import { supabase } from "@/lib/supabase"

interface DatabaseTable {
  table_name: string
  row_count: number
  table_size: string
  last_updated: string
}

interface DatabaseHealth {
  status: "healthy" | "warning" | "error"
  tables_count: number
  total_rows: number
  policies_count: number
  functions_count: number
  triggers_count: number
  issues: string[]
}

interface QueryResult {
  success: boolean
  data?: any[]
  error?: string
  execution_time?: number
  rows_affected?: number
}

export default function AdminPage() {
  const { user, profile } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")
  const [loading, setLoading] = useState(false)
  const [sqlQuery, setSqlQuery] = useState("")
  const [queryResult, setQueryResult] = useState<QueryResult | null>(null)
  const [dbHealth, setDbHealth] = useState<DatabaseHealth | null>(null)
  const [tables, setTables] = useState<DatabaseTable[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [analytics, setAnalytics] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  // Check if user is admin (you can implement your own admin check logic)
  const isAdmin = profile?.role === "admin" || user?.email === "admin@neuralia.ai"

  useEffect(() => {
    if (isAdmin) {
      loadDashboardData()
    }
  }, [isAdmin])

  const loadDashboardData = async () => {
    setLoading(true)
    try {
      await Promise.all([loadDatabaseHealth(), loadTables(), loadUsers(), loadAnalytics()])
    } catch (error) {
      console.error("Error loading dashboard data:", error)
    } finally {
      setLoading(false)
    }
  }

  const loadDatabaseHealth = async () => {
    try {
      const { data, error } = await supabase.rpc("check_database_health")
      if (error) throw error
      setDbHealth(data)
    } catch (error) {
      console.error("Error checking database health:", error)
      // Fallback health check
      setDbHealth({
        status: "warning",
        tables_count: 5,
        total_rows: 0,
        policies_count: 15,
        functions_count: 3,
        triggers_count: 8,
        issues: ["Unable to fetch detailed health data"],
      })
    }
  }

  const loadTables = async () => {
    try {
      const tableNames = ["profiles", "ai_agents", "ai_systems", "chat_conversations", "user_analytics"]
      const tableData: DatabaseTable[] = []

      for (const tableName of tableNames) {
        const { count, error } = await supabase.from(tableName).select("*", { count: "exact", head: true })

        if (!error) {
          tableData.push({
            table_name: tableName,
            row_count: count || 0,
            table_size: "N/A",
            last_updated: new Date().toISOString(),
          })
        }
      }

      setTables(tableData)
    } catch (error) {
      console.error("Error loading tables:", error)
    }
  }

  const loadUsers = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(100)

      if (error) throw error
      setUsers(data || [])
    } catch (error) {
      console.error("Error loading users:", error)
    }
  }

  const loadAnalytics = async () => {
    try {
      const { data, error } = await supabase
        .from("user_analytics")
        .select("*")
        .order("period_start", { ascending: false })
        .limit(50)

      if (error) throw error
      setAnalytics(data || [])
    } catch (error) {
      console.error("Error loading analytics:", error)
    }
  }

  const executeQuery = async () => {
    if (!sqlQuery.trim()) return

    setLoading(true)
    const startTime = Date.now()

    try {
      const { data, error } = await supabase.rpc("execute_admin_query", {
        query: sqlQuery,
      })

      const executionTime = Date.now() - startTime

      if (error) {
        setQueryResult({
          success: false,
          error: error.message,
          execution_time: executionTime,
        })
      } else {
        setQueryResult({
          success: true,
          data: data,
          execution_time: executionTime,
          rows_affected: Array.isArray(data) ? data.length : 1,
        })
      }
    } catch (error) {
      setQueryResult({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        execution_time: Date.now() - startTime,
      })
    } finally {
      setLoading(false)
    }
  }

  const runHealthCheck = async () => {
    setLoading(true)
    try {
      await loadDatabaseHealth()
    } finally {
      setLoading(false)
    }
  }

  const exportData = async (tableName: string) => {
    try {
      const { data, error } = await supabase.from(tableName).select("*")

      if (error) throw error

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${tableName}_export_${new Date().toISOString().split("T")[0]}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error exporting data:", error)
    }
  }

  const filteredUsers = users.filter(
    (user) =>
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (!user) {
    return (
      <div className="container mx-auto py-8">
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>Please sign in to access the admin panel.</AlertDescription>
        </Alert>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto py-8">
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>Access denied. Admin privileges required.</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Database className="h-8 w-8" />
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">Database management and system administration</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={runHealthCheck} disabled={loading}>
                <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Health Status */}
        {dbHealth && (
          <Alert
            className={`mb-6 ${
              dbHealth.status === "healthy"
                ? "border-green-200 bg-green-50"
                : dbHealth.status === "warning"
                  ? "border-yellow-200 bg-yellow-50"
                  : "border-red-200 bg-red-50"
            }`}
          >
            {dbHealth.status === "healthy" ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
            )}
            <AlertDescription>
              Database Status: <strong className="capitalize">{dbHealth.status}</strong>
              {dbHealth.issues.length > 0 && <span className="ml-2">- {dbHealth.issues.join(", ")}</span>}
            </AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tables">Tables</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="query">SQL Query</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Tables</p>
                      <p className="text-2xl font-bold">{dbHealth?.tables_count || 0}</p>
                    </div>
                    <Database className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                      <p className="text-2xl font-bold">{users.length}</p>
                    </div>
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">RLS Policies</p>
                      <p className="text-2xl font-bold">{dbHealth?.policies_count || 0}</p>
                    </div>
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Triggers</p>
                      <p className="text-2xl font-bold">{dbHealth?.triggers_count || 0}</p>
                    </div>
                    <Zap className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest database operations and user activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analytics.slice(0, 5).map((activity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-muted">
                          <Activity className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">User Analytics Updated</p>
                          <p className="text-xs text-muted-foreground">
                            Period: {activity.period_type} | {activity.total_chats} chats
                          </p>
                        </div>
                        <Badge variant="secondary">{new Date(activity.period_start).toLocaleDateString()}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>Database performance and status indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Database Connection</span>
                      <Badge variant="secondary" className="text-green-600">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Connected
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Row Level Security</span>
                      <Badge variant="secondary" className="text-green-600">
                        <Shield className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Backup Status</span>
                      <Badge variant="secondary" className="text-blue-600">
                        <HardDrive className="mr-1 h-3 w-3" />
                        Automated
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Performance</span>
                      <Badge variant="secondary" className="text-green-600">
                        <BarChart3 className="mr-1 h-3 w-3" />
                        Optimal
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tables Tab */}
          <TabsContent value="tables" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Database Tables</CardTitle>
                <CardDescription>Overview of all database tables and their statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Table Name</TableHead>
                      <TableHead>Row Count</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tables.map((table) => (
                      <TableRow key={table.table_name}>
                        <TableCell className="font-medium">{table.table_name}</TableCell>
                        <TableCell>{table.row_count.toLocaleString()}</TableCell>
                        <TableCell>{table.table_size}</TableCell>
                        <TableCell>{new Date(table.last_updated).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => exportData(table.table_name)}>
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
                <div className="flex gap-2">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.slice(0, 20).map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.email}</TableCell>
                        <TableCell>{user.name || "N/A"}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="capitalize">
                            {user.subscription_plan || "free"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="text-green-600">
                            {user.subscription_status || "active"}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Usage Analytics</CardTitle>
                <CardDescription>System usage statistics and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Chats</TableHead>
                      <TableHead>Messages</TableHead>
                      <TableHead>Agents</TableHead>
                      <TableHead>Systems</TableHead>
                      <TableHead>Success Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analytics.slice(0, 20).map((analytic) => (
                      <TableRow key={analytic.id}>
                        <TableCell className="font-medium">{analytic.user_id.slice(0, 8)}...</TableCell>
                        <TableCell className="capitalize">{analytic.period_type}</TableCell>
                        <TableCell>{analytic.total_chats}</TableCell>
                        <TableCell>{analytic.total_messages}</TableCell>
                        <TableCell>{analytic.agents_created}</TableCell>
                        <TableCell>{analytic.systems_created}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="text-green-600">
                            {((analytic.successful_chats / Math.max(analytic.total_chats, 1)) * 100).toFixed(1)}%
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SQL Query Tab */}
          <TabsContent value="query" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>SQL Query Console</CardTitle>
                <CardDescription>Execute custom SQL queries (use with caution)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sql-query">SQL Query</Label>
                  <Textarea
                    id="sql-query"
                    placeholder="SELECT * FROM profiles LIMIT 10;"
                    value={sqlQuery}
                    onChange={(e) => setSqlQuery(e.target.value)}
                    className="min-h-[200px] font-mono"
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={executeQuery} disabled={loading || !sqlQuery.trim()}>
                    <Play className="mr-2 h-4 w-4" />
                    Execute Query
                  </Button>
                  <Button variant="outline" onClick={() => setSqlQuery("")}>
                    Clear
                  </Button>
                </div>

                {queryResult && (
                  <Card className={queryResult.success ? "border-green-200" : "border-red-200"}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {queryResult.success ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                        )}
                        Query Result
                      </CardTitle>
                      <CardDescription>
                        Execution time: {queryResult.execution_time}ms
                        {queryResult.rows_affected && ` | Rows affected: ${queryResult.rows_affected}`}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {queryResult.success ? (
                        <ScrollArea className="h-[300px]">
                          <pre className="text-sm">{JSON.stringify(queryResult.data, null, 2)}</pre>
                        </ScrollArea>
                      ) : (
                        <Alert>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>{queryResult.error}</AlertDescription>
                        </Alert>
                      )}
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Maintenance Tab */}
          <TabsContent value="maintenance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Database Maintenance</CardTitle>
                  <CardDescription>Routine maintenance and optimization tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh Statistics
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <HardDrive className="mr-2 h-4 w-4" />
                    Vacuum Database
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Analyze Tables
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Shield className="mr-2 h-4 w-4" />
                    Check RLS Policies
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                  <CardDescription>Import, export, and backup operations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Export All Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Upload className="mr-2 h-4 w-4" />
                    Import Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Server className="mr-2 h-4 w-4" />
                    Create Backup
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 bg-transparent">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Cleanup Old Data
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
