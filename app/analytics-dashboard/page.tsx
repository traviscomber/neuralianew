"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RealTimeDashboard } from "@/components/analytics/real-time-dashboard"
import { HeatmapViewer } from "@/components/analytics/heatmap-viewer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, MousePointer, TrendingUp, Users } from "lucide-react"

export default function AnalyticsDashboardPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Comprehensive analytics and user behavior insights for your Neuralia landing page.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Analytics Status</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge variant="default" className="bg-green-500">
              Active
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">Real-time tracking enabled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Heatmap Data</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge variant="default" className="bg-blue-500">
              Collecting
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">Click tracking active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge variant="default" className="bg-purple-500">
              Tracking
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">7 conversion goals set</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Sessions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge variant="default" className="bg-orange-500">
              Live
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">Session tracking active</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="realtime" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="realtime">Real-Time Analytics</TabsTrigger>
          <TabsTrigger value="heatmap">Click Heatmaps</TabsTrigger>
          <TabsTrigger value="conversions">Conversion Funnel</TabsTrigger>
        </TabsList>

        <TabsContent value="realtime" className="space-y-6">
          <RealTimeDashboard />
        </TabsContent>

        <TabsContent value="heatmap" className="space-y-6">
          <HeatmapViewer />
        </TabsContent>

        <TabsContent value="conversions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel Analysis</CardTitle>
              <CardDescription>Track user journey from landing to conversion</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <p>Conversion funnel visualization will be displayed here.</p>
                <p className="text-sm mt-2">Data is being collected from your conversion tracking setup.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Implementation Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Status</CardTitle>
          <CardDescription>Analytics system setup and configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">✅ Completed Setup</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Database tables created</li>
                <li>• Analytics provider configured</li>
                <li>• Real-time dashboard active</li>
                <li>• Heatmap visualization ready</li>
                <li>• API endpoints functional</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">🔄 Next Steps</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Add conversion tracking to components</li>
                <li>• Test WhatsApp button tracking</li>
                <li>• Verify form submission tracking</li>
                <li>• Monitor real-time data collection</li>
                <li>• Set up automated reports</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
