"use client"

import { useState, useEffect } from "react"

interface VibeAnalytics {
  totalVisitors: number
  intentDetected: Record<string, number>
  budgetRanges: Record<string, number>
  buyerTypes: Record<string, number>
  conversionRate: number
  avgSessionDuration: number
}

export function VibeAnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<VibeAnalytics>({
    totalVisitors: 1240,
    intentDetected: {
      explorer: 520,
      builder: 310,
      buyer: 280,
      partner: 130,
    },
    budgetRanges: {
      startup: 480,
      "mid-market": 560,
      enterprise: 200,
    },
    buyerTypes: {
      individual: 200,
      startup: 280,
      smb: 420,
      institution: 220,
      agency: 120,
    },
    conversionRate: 0.32,
    avgSessionDuration: 8.5,
  })

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border border-primary/20 p-4 rounded-lg">
          <p className="text-xs font-medium text-muted-foreground mb-2">Total Visitors</p>
          <p className="text-3xl font-bold text-foreground">{analytics.totalVisitors}</p>
          <p className="text-xs text-primary mt-2">+28% vs last week</p>
        </div>
        <div className="border border-primary/20 p-4 rounded-lg">
          <p className="text-xs font-medium text-muted-foreground mb-2">Conversion Rate</p>
          <p className="text-3xl font-bold text-foreground">{(analytics.conversionRate * 100).toFixed(1)}%</p>
          <p className="text-xs text-primary mt-2">+4.2% vs last week</p>
        </div>
        <div className="border border-primary/20 p-4 rounded-lg">
          <p className="text-xs font-medium text-muted-foreground mb-2">Avg Session</p>
          <p className="text-3xl font-bold text-foreground">{analytics.avgSessionDuration}m</p>
          <p className="text-xs text-primary mt-2">+1.2m longer</p>
        </div>
        <div className="border border-primary/20 p-4 rounded-lg">
          <p className="text-xs font-medium text-muted-foreground mb-2">Top Intent</p>
          <p className="text-3xl font-bold text-primary">Explorer</p>
          <p className="text-xs text-muted-foreground mt-2">42% of visitors</p>
        </div>
      </div>

      {/* Intent Distribution */}
      <div className="border border-gray-200 p-6 rounded-lg">
        <h3 className="font-bold text-foreground mb-6">Intent Distribution</h3>
        <div className="space-y-4">
          {Object.entries(analytics.intentDetected).map(([intent, count]) => {
            const percentage = (count / analytics.totalVisitors) * 100
            return (
              <div key={intent}>
                <div className="flex justify-between mb-2">
                  <p className="text-sm font-medium text-foreground capitalize">{intent}</p>
                  <p className="text-sm text-muted-foreground">{count} visitors</p>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all" style={{ width: `${percentage}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Budget & Buyer Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h3 className="font-bold text-foreground mb-6">Budget Ranges</h3>
          <div className="space-y-3">
            {Object.entries(analytics.budgetRanges).map(([range, count]) => (
              <div key={range} className="flex items-center justify-between">
                <p className="text-sm text-foreground capitalize">{range}</p>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${(count / analytics.totalVisitors) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground w-12 text-right">{count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg">
          <h3 className="font-bold text-foreground mb-6">Buyer Types</h3>
          <div className="space-y-3">
            {Object.entries(analytics.buyerTypes).map(([type, count]) => (
              <div key={type} className="flex items-center justify-between">
                <p className="text-sm text-foreground capitalize">{type.replace("-", " ")}</p>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${(count / analytics.totalVisitors) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground w-12 text-right">{count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
        <h3 className="font-bold text-foreground mb-4">Key Insights</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li>✓ Explorers are your largest segment (42%) - focus on immersive experiences & demos</li>
          <li>✓ Mid-market buyers spend 45% longer on platform than other segments</li>
          <li>✓ Institutional buyers (22%) show highest intent → dedicated outreach</li>
          <li>✓ Builder intent leads to 2.3x higher conversion vs explorers</li>
          <li>✓ Desktop users spend 3x longer than mobile - optimize mobile UX</li>
        </ul>
      </div>
    </div>
  )
}
