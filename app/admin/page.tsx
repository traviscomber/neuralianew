"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Users, MessageSquare, TrendingUp, Activity, Zap, Shield, Globe } from "lucide-react"

export default function AdminPage() {
  const [stats, setStats] = useState({
    totalAgents: 0,
    activeUsers: 0,
    conversations: 0,
    uptime: 0,
  })

  useEffect(() => {
    // Animate stats
    const timer = setInterval(() => {
      setStats((prev) => ({
        totalAgents: Math.min(prev.totalAgents + 1, 150),
        activeUsers: Math.min(prev.activeUsers + 50, 25000),
        conversations: Math.min(prev.conversations + 1000, 2500000),
        uptime: Math.min(prev.uptime + 0.1, 99.9),
      }))
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const agents = [
    { name: "EcosueloLab", status: "Active", users: 5000, accuracy: 96.2 },
    { name: "Career Coach", status: "Active", users: 10000, accuracy: 94.8 },
    { name: "ParrotfyIA", status: "Active", users: 8000, accuracy: 95.5 },
    { name: "Enterprise AI", status: "Active", users: 2000, accuracy: 98.1 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold gradient-text">Neuralia Admin</h1>
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">Vibe Dashboard</Badge>
          </div>
          <p className="text-gray-600">Real-time monitoring of our AI ecosystem</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Agents</p>
                  <p className="text-3xl font-bold gradient-text">{stats.totalAgents}</p>
                </div>
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-3xl font-bold gradient-text">{(stats.activeUsers / 1000).toFixed(0)}K</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Conversations</p>
                  <p className="text-3xl font-bold gradient-text">{(stats.conversations / 1000000).toFixed(1)}M</p>
                </div>
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Uptime</p>
                  <p className="text-3xl font-bold gradient-text">{stats.uptime.toFixed(1)}%</p>
                </div>
                <Activity className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="agents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="agents">AI Agents</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Active AI Agents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {agents.map((agent, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div>
                          <h3 className="font-semibold">{agent.name}</h3>
                          <p className="text-sm text-gray-600">{agent.users.toLocaleString()} active users</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">{agent.accuracy}% accuracy</Badge>
                        <Badge className="bg-green-100 text-green-800">{agent.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Response</span>
                      <span className="font-semibold">180ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span>95th Percentile</span>
                      <span className="font-semibold">350ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span>99th Percentile</span>
                      <span className="font-semibold">800ms</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>API Status</span>
                      <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Database</span>
                      <Badge className="bg-green-100 text-green-800">Optimal</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>AI Models</span>
                      <Badge className="bg-green-100 text-green-800">Running</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">25K+</div>
                    <div className="text-gray-600">Total Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">15K</div>
                    <div className="text-gray-600">Daily Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">98%</div>
                    <div className="text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>SSL Certificates</span>
                      <Badge className="bg-green-100 text-green-800">Valid</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Firewall</span>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Data Encryption</span>
                      <Badge className="bg-green-100 text-green-800">AES-256</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Global Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Americas</span>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Europe</span>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Asia Pacific</span>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">Deploy New Agent</Button>
                <Button variant="outline">View Logs</Button>
                <Button variant="outline">System Backup</Button>
                <Button variant="outline">Generate Report</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
