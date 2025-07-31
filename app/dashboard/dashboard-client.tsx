"use client"

import dynamic from "next/dynamic"

// Lazy-load the client component with `ssr: false` so it never executes on the server.
const DashboardClient = dynamic(() => import("@/components/dashboard/dashboard-client"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        </div>
        <p className="text-gray-600">Loading your neural dashboard...</p>
      </div>
    </div>
  ),
})

export default function DashboardClientPage() {
  return <DashboardClient />
}
