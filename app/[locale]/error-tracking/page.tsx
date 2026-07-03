'use client'

import { useEffect, useState } from 'react'
import { AlertCircle, TrendingUp, Clock, MapPin } from 'lucide-react'

interface ErrorEvent {
  id: string
  message: string
  level: 'error' | 'warning' | 'info'
  timestamp: string
  context?: Record<string, unknown>
  stack?: string
}

export default function ErrorTrackingPage() {
  const [errors, setErrors] = useState<ErrorEvent[]>([])
  const [stats, setStats] = useState({
    totalErrors: 0,
    errorsLast24h: 0,
    errorRate: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In production, fetch from your monitoring service
    // For now, show placeholder data
    const mockErrors: ErrorEvent[] = [
      {
        id: '1',
        message: 'Database connection timeout',
        level: 'error',
        timestamp: new Date().toISOString(),
        context: { service: 'database', retry: 3 },
      },
      {
        id: '2',
        message: 'API rate limit exceeded',
        level: 'warning',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        context: { endpoint: '/api/v1/chat', limit: 1000 },
      },
    ]

    setErrors(mockErrors)
    setStats({
      totalErrors: 1247,
      errorsLast24h: 12,
      errorRate: 0.23,
    })
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen bg-background px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">Loading error tracking data...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
            <h1 className="text-4xl font-bold text-foreground">Error Tracking Dashboard</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Real-time error monitoring and debugging powered by Sentry
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase">Total Errors</h3>
                <AlertCircle className="w-4 h-4 text-red-500" />
              </div>
              <p className="text-3xl font-bold text-foreground">{stats.totalErrors.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-2">Lifetime total</p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase">Last 24 Hours</h3>
                <Clock className="w-4 h-4 text-yellow-500" />
              </div>
              <p className="text-3xl font-bold text-foreground">{stats.errorsLast24h}</p>
              <p className="text-xs text-muted-foreground mt-2">Recent activity</p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase">Error Rate</h3>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-foreground">{stats.errorRate.toFixed(2)}%</p>
              <p className="text-xs text-muted-foreground mt-2">Per 1,000 requests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Errors */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recent Errors</h2>

          <div className="space-y-4">
            {errors.map((error) => (
              <div key={error.id} className="p-4 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      error.level === 'error' ? 'bg-red-500' : error.level === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}
                  ></div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 truncate">{error.message}</h3>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(error.timestamp).toLocaleString()}
                      </div>
                      {error.context && error.context['service'] ? (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {String(error.context['service'])}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground capitalize">
                    {error.level}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {errors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No errors recorded in this period</p>
              <p className="text-sm text-muted-foreground">Great! Your system is running smoothly.</p>
            </div>
          )}
        </div>
      </section>

      {/* Integration Info */}
      <section className="border-t border-border bg-muted/20 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Sentry Integration</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-4">Captured Metrics</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Exception tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Performance monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Transaction tracing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Breadcrumb tracking
                </li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-4">Data Retention</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Errors: 90 days</li>
                <li>Transactions: 24 hours</li>
                <li>Breadcrumbs: 24 hours</li>
                <li>Release tracking: Unlimited</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-600">
              💡 Tip: Configure alerts in Sentry to be notified of critical errors in real-time.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
