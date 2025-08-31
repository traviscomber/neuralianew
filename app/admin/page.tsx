"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Users, Activity, Settings, Shield, BarChart3, CheckCircle, AlertTriangle } from "lucide-react"

export default function AdminPage() {
  const { user, profile } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")

  // Check if user is admin
  const isAdmin = profile?.role === "admin" || user?.email === "admin@neuralia.ai"

  if (!user) {
    return (
      <div className="container mx-auto py-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
            <span className="text-yellow-800">Please sign in to access the admin panel.</span>
          </div>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <Shield className="h-4 w-4 text-red-600 mr-2" />
            <span className="text-red-800">Access denied. Admin privileges required.</span>
          </div>
        </div>
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
              <p className="text-gray-600">Database management and system administration</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Health Status */}
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-green-800">
              Database Status: <strong>Healthy</strong>
            </span>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Tables</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <Database className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Users</p>
                      <p className="text-2xl font-bold">1,234</p>
                    </div>
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">RLS Policies</p>
                      <p className="text-2xl font-bold">15</p>
                    </div>
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Triggers</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <Activity className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>Database performance and status indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Database Connection</span>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Connected
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Row Level Security</span>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <Shield className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Performance</span>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <BarChart3 className="mr-1 h-3 w-3" />
                        Optimal
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest system operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-100">
                        <Activity className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Database backup completed</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-100">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New user registered</p>
                        <p className="text-xs text-gray-500">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-purple-100">
                        <Shield className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Security scan completed</p>
                        <p className="text-xs text-gray-500">6 hours ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">User management features coming soon</p>
                  <Button>Add New User</Button>
                </div>
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
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">Analytics dashboard coming soon</p>
                  <Button>View Reports</Button>
                </div>
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
                    <Activity className="mr-2 h-4 w-4" />
                    Refresh Statistics
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Database className="mr-2 h-4 w-4" />
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
                  <CardTitle>System Operations</CardTitle>
                  <CardDescription>Administrative operations and tools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Settings className="mr-2 h-4 w-4" />
                    System Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Users className="mr-2 h-4 w-4" />
                    User Management
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Activity className="mr-2 h-4 w-4" />
                    Activity Logs
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 bg-transparent">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Emergency Actions
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
