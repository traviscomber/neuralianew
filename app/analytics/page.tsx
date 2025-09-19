"use client"

import { WebVitalsDashboard } from "@/components/analytics/web-vitals-dashboard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Home, Bot, Zap, Wrench, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AnalyticsPage() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Web Vitals Analytics</h1>
              <p className="text-gray-300">Real-time Core Web Vitals monitoring for N3uralia</p>
            </div>
          </div>
          <Button
            onClick={handleRefresh}
            variant="outline"
            size="sm"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
        </div>

        {/* Navigation Helper */}
        <Card className="mb-8 bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Zap className="h-5 w-5" />
              Generate More Data
            </CardTitle>
            <CardDescription className="text-gray-300">
              Navigate to different pages to collect comprehensive Web Vitals metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                onClick={() => handleNavigation("/")}
                variant="outline"
                className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
              >
                <Home className="h-4 w-4" />
                Home Page
              </Button>
              <Button
                onClick={() => handleNavigation("/agents")}
                variant="outline"
                className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
              >
                <Bot className="h-4 w-4" />
                Agents
              </Button>
              <Button
                onClick={() => handleNavigation("/systems")}
                variant="outline"
                className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
              >
                <Zap className="h-4 w-4" />
                Systems
              </Button>
              <Button
                onClick={() => handleNavigation("/services")}
                variant="outline"
                className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
              >
                <Wrench className="h-4 w-4" />
                Services
              </Button>
            </div>
            <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <h4 className="font-medium text-blue-200 mb-2">💡 How to Generate Metrics:</h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
                <div>
                  • <strong>LCP/FCP:</strong> Navigate between pages
                </div>
                <div>
                  • <strong>FID/INP:</strong> Click buttons and interact
                </div>
                <div>
                  • <strong>CLS:</strong> Let images load completely
                </div>
                <div>
                  • <strong>TTFB:</strong> Automatic on page visits
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Metrics Status */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline" className="border-green-500/50 text-green-400">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live Monitoring Active
            </Badge>
            <Badge variant="outline" className="border-blue-500/50 text-blue-400">
              Real-time Updates
            </Badge>
          </div>
        </div>

        {/* Dashboard */}
        <WebVitalsDashboard />

        {/* Instructions */}
        <Card className="mt-8 bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Understanding Your Metrics</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-white mb-2">Core Web Vitals</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>LCP:</strong> Largest content loads in &lt;2.5s
                  </li>
                  <li>
                    • <strong>FID:</strong> First interaction responds in &lt;100ms
                  </li>
                  <li>
                    • <strong>CLS:</strong> Visual stability score &lt;0.1
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Additional Metrics</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>FCP:</strong> First content appears in &lt;1.8s
                  </li>
                  <li>
                    • <strong>TTFB:</strong> Server responds in &lt;800ms
                  </li>
                  <li>
                    • <strong>INP:</strong> Interactions complete in &lt;200ms
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
