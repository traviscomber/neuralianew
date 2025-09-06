"use client"

import { Keyboard } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function KeyboardAccessibilityLoading() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
          <Keyboard className="w-8 h-8 text-blue-600 animate-pulse" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Loading Keyboard Tests</h1>
          <p className="text-slate-600">Preparing comprehensive keyboard accessibility analysis...</p>
        </div>
        <Progress value={45} className="w-full" />
        <div className="text-sm text-slate-500">Testing tab order, focus management, and keyboard shortcuts</div>
      </div>
    </div>
  )
}
