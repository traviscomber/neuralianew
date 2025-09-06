"use client"

import { Shield } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function AccessibilityTestLoading() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
            <Shield className="w-8 h-8 text-blue-600 animate-pulse" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Initializing Accessibility Tests</h1>
            <p className="text-slate-600">Preparing WCAG compliance analysis...</p>
          </div>
          <Progress value={25} className="w-64 mx-auto" />
          <div className="text-sm text-slate-500">Loading color contrast analyzer...</div>
        </div>
      </div>
    </div>
  )
}
