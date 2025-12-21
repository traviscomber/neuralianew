"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Activity, BarChart3, Shield, Search, Users, Eye, Smartphone } from "lucide-react"

export default function AdvancedMetricsLoading() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>

          {/* Real-time Dashboard Skeleton */}
          <Card className="p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Activity className="w-6 h-6 mr-2 text-green-600" />
                <Skeleton className="h-6 w-48" />
              </div>
              <Skeleton className="h-6 w-16" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto mb-1" />
                  <Skeleton className="h-3 w-24 mx-auto" />
                </div>
              ))}
            </div>
          </Card>

          {/* Analysis Status */}
          <Card className="p-8 mb-8 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <Skeleton className="h-6 w-64" />
            </div>
            <Skeleton className="h-4 w-96 mx-auto mb-4" />
            <Skeleton className="h-2 w-full max-w-md mx-auto" />
          </Card>

          {/* Tabs Skeleton */}
          <div className="mb-8">
            <div className="flex space-x-1 mb-6">
              {[
                { icon: BarChart3, label: "Performance" },
                { icon: Users, label: "User Experience" },
                { icon: Eye, label: "Accessibility" },
                { icon: Shield, label: "Security" },
                { icon: Search, label: "SEO" },
                { icon: Smartphone, label: "Mobile" },
                { icon: Activity, label: "Network" },
              ].map((tab, i) => (
                <div key={i} className="flex items-center space-x-2 px-4 py-2 bg-white rounded border">
                  <tab.icon className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-600">{tab.label}</span>
                </div>
              ))}
            </div>

            <Card className="w-full max-w-md animate-pulse">
              <CardContent className="p-8">
                <div className="space-y-3">
                  <div className="h-6 bg-gray-300 rounded-md w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
                  <div className="h-12 bg-gray-300 rounded-md"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-4 bg-gray-300 rounded-md"></div>
                    <div className="h-4 bg-gray-300 rounded-md"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions Skeleton */}
          <Card className="p-8">
            <Skeleton className="h-6 w-48 mb-6" />
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-32" />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
