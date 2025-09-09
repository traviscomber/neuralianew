"use client"

import { Navigation } from "@/components/navigation"
import { LogoPerformanceDashboard } from "@/components/monitoring/logo-performance-dashboard"

export default function LogoPerformanceMonitorPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-slate-900 mb-4">Logo Performance Monitor</h1>
            <p className="text-xl text-slate-600">
              Real-time monitoring of logo loading speeds and fallback URL performance
            </p>
          </div>

          {/* Dashboard */}
          <LogoPerformanceDashboard />
        </div>
      </div>
    </div>
  )
}
