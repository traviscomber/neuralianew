"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Monitor, Clock, Shield } from "lucide-react"

export default function DeploymentMonitorLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Deployment Monitor</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Loading real-time system health monitoring...
          </p>
        </div>

        {/* Loading Status */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <RefreshCw className="w-5 h-5 animate-spin text-blue-600" />
              Initializing Health Checks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-200 rounded animate-pulse"></div>
                <span className="text-slate-600">Loading SSR safety verification...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-200 rounded animate-pulse"></div>
                <span className="text-slate-600">Checking mobile testing interfaces...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-200 rounded animate-pulse"></div>
                <span className="text-slate-600">Verifying WCAG compliance...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-200 rounded animate-pulse"></div>
                <span className="text-slate-600">Analyzing performance metrics...</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-green-600" />
                Mobile Hero Test
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-3 bg-slate-200 rounded animate-pulse w-3/4"></div>
                <Badge className="bg-slate-200 text-transparent animate-pulse">Loading...</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Timezone Verification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-3 bg-slate-200 rounded animate-pulse w-2/3"></div>
                <Badge className="bg-slate-200 text-transparent animate-pulse">Loading...</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" />
                Button Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-3 bg-slate-200 rounded animate-pulse w-4/5"></div>
                <Badge className="bg-slate-200 text-transparent animate-pulse">Loading...</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Metrics Loading */}
        <Card className="border border-slate-200">
          <CardHeader>
            <CardTitle>System Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="h-8 bg-slate-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="h-8 bg-slate-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="h-8 bg-slate-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="h-8 bg-slate-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
