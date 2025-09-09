"use client"

import { CustomThresholdWizard } from "@/components/monitoring/custom-threshold-wizard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Sparkles, Brain, TrendingUp, Shield, Zap, CheckCircle, Clock, AlertTriangle } from "lucide-react"

export default function CustomThresholdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Target className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Custom Alert Thresholds
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create intelligent performance monitoring thresholds with AI-powered recommendations and guided
            configuration for optimal logo performance tracking.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2 border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Brain className="w-5 h-5 text-blue-600" />
                AI-Powered Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get intelligent threshold recommendations based on your actual performance data and industry best
                practices.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Badge variant="outline" className="text-xs">
                  Smart Analysis
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Data-Driven
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-green-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="w-5 h-5 text-green-600" />
                Guided Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Step-by-step wizard with validation, real-time feedback, and contextual help for perfect setup.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Badge variant="outline" className="text-xs">
                  4-Step Process
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Validation
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-purple-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="w-5 h-5 text-purple-600" />
                Multi-Channel Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Configure multiple notification channels with smart cooldowns and severity-based routing.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Badge variant="outline" className="text-xs">
                  Browser
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Webhook
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Email
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metrics Overview */}
        <Card className="mb-8 border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Available Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Success Rate</h3>
                  <p className="text-sm text-muted-foreground">Monitor logo loading success percentage</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Load Time</h3>
                  <p className="text-sm text-muted-foreground">Track average loading performance</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
                <div>
                  <h3 className="font-semibold">Fallback Usage</h3>
                  <p className="text-sm text-muted-foreground">Monitor dependency on fallback URLs</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Wizard Component */}
        <CustomThresholdWizard />
      </div>
    </div>
  )
}
