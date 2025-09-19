"use client"

import { PerformanceDashboard } from "@/components/performance/performance-dashboard"
import { Navigation } from "@/components/navigation"

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <PerformanceDashboard />
        </div>
      </div>
    </div>
  )
}
