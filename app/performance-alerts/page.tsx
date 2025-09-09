"use client"

import { Navigation } from "@/components/navigation"
import { PerformanceAlertsDashboard } from "@/components/monitoring/performance-alerts-dashboard"

export default function PerformanceAlertsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Performance Alert Configuration</h1>
            <p className="text-slate-600 mt-2">
              Configure automated notifications for logo performance thresholds and monitoring
            </p>
          </div>

          <PerformanceAlertsDashboard />
        </div>
      </div>
    </div>
  )
}
