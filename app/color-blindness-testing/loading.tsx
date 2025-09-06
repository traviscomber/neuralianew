"use client"

import { Glasses, Sparkles, CheckCircle2, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function ColorBlindnessTestingLoading() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
            <Glasses className="w-8 h-8 text-purple-600 animate-pulse" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Testing Enhanced Icon Accessibility</h1>
            <p className="text-slate-600">Analyzing improved color blindness compatibility with icon enhancements...</p>
          </div>
          <Progress value={85} className="w-64 mx-auto" />
          <div className="text-sm text-slate-500 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Testing enhanced visual cues for 8.5% of the global population
            <CheckCircle2 className="w-4 h-4 text-green-500 animate-pulse" />
          </div>
          <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Measuring improvements
            </div>
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Analyzing icon benefits
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Validating accessibility
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
