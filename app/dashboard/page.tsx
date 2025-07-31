import { Suspense } from "react"
import DashboardClient from "./dashboard-client"

export const metadata = {
  title: "Dashboard | Neuralia",
  description: "Manage your AI executive team and deploy new experts.",
}

// Make this page dynamic to prevent SSR issues
export const dynamic = "force-dynamic"

function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        </div>
        <p className="text-gray-600">Loading your neural dashboard...</p>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardClient />
    </Suspense>
  )
}
