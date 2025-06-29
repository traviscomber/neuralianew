"use client"

import { useAuth } from "@/hooks/use-auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  Bot,
  Cog,
  MessageSquare,
  TrendingUp,
  Users,
  Activity,
  Plus,
  ArrowUpRight,
  Calendar,
  Clock,
} from "lucide-react"

export default function DashboardPage() {
  const { user, profile } = useAuth()

  if (!user) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <p>Please sign in to view your dashboard.</p>
        </div>
      </div>
    )
  }

  const stats = [
    {
      title: "AI Agents",
      value: profile?.total_agents || 0,
      change: "+12%",
      icon: Bot,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "AI Systems",
      value: profile?.total_systems || 0,
      change: "+8%",
      icon: Cog,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Conversations",
      value: profile?.total_conversations || 0,
      change: "+23%",
      icon: MessageSquare,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Active Users",
      value: "1.2k",
      change: "+5%",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "agent_created",
      title: "New AI Agent Created",
      description: "Customer Support Bot v2.0",
      time: "2 hours ago",
      icon: Bot,
    },
    {
      id: 2,
      type: "system_deployed",
      title: "AI System Deployed",
      description: "Email Classification System",
      time: "4 hours ago",
      icon: Cog,
    },
    {
      id: 3,
      type: "conversation",
      title: "High Volume Detected",
      description: "1,000+ conversations processed",
      time: "6 hours ago",
      icon: MessageSquare,
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {profile?.name || user.email?.split("@")[0]}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Last 30 days
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Agent
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Performance Overview
                </CardTitle>
                <CardDescription>Your AI agents and systems performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="agents" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="agents">AI Agents</TabsTrigger>
                    <TabsTrigger value="systems">AI Systems</TabsTrigger>
                    <TabsTrigger value="conversations">Conversations</TabsTrigger>
                  </TabsList>

                  <TabsContent value="agents" className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Customer Support Bot</span>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <Progress value={85} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Response Rate: 85%</span>
                        <span>1,234 interactions</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Sales Assistant</span>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <Progress value={92} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Conversion Rate: 92%</span>
                        <span>856 interactions</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="systems" className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Email Classification</span>
                        <Badge variant="secondary">Running</Badge>
                      </div>
                      <Progress value={78} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Accuracy: 78%</span>
                        <span>2,456 emails processed</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="conversations" className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Total Conversations</span>
                        <span className="text-sm font-medium">{profile?.total_conversations || 0}</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Satisfaction: 4.8/5</span>
                        <span>+23% this month</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Bot className="h-6 w-6 mb-2" />
                    Create AI Agent
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Cog className="h-6 w-6 mb-2" />
                    Deploy System
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <BarChart3 className="h-6 w-6 mb-2" />
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Account Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Plan</span>
                  <Badge variant="secondary" className="capitalize">
                    {profile?.subscription_plan || "Free"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Status</span>
                  <Badge variant="secondary" className="text-green-600">
                    Active
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-muted">
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
