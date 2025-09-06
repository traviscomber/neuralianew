"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shield } from "lucide-react"

export default function WCAGContrastVerificationLoading() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
            <Shield className="w-8 h-8 text-blue-600 animate-pulse" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Initializing WCAG Tests</h1>
            <p className="text-slate-600">Preparing contrast ratio calculations...</p>
          </div>
          <Progress value={45} className="w-64 mx-auto" />

          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-600">Loading color definitions...</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-600">Calculating luminance values...</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-600">Testing WCAG compliance...</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
