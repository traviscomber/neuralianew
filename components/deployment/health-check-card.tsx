import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StatusIndicator } from "./status-indicator"
import { CheckCircle, Shield, Zap, Monitor, Activity } from "lucide-react"

interface HealthCheck {
  name: string
  status: "pass" | "fail" | "warning" | "checking"
  description: string
  details?: string
  timestamp: string
  category: "security" | "performance" | "functionality" | "accessibility"
}

interface HealthCheckCardProps {
  checks: HealthCheck[]
  title: string
}

export function HealthCheckCard({ checks, title }: HealthCheckCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "security":
        return <Shield className="w-4 h-4 text-blue-600" />
      case "performance":
        return <Zap className="w-4 h-4 text-yellow-600" />
      case "functionality":
        return <Monitor className="w-4 h-4 text-green-600" />
      case "accessibility":
        return <Activity className="w-4 h-4 text-purple-600" />
      default:
        return <CheckCircle className="w-4 h-4 text-gray-600" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "security":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "performance":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "functionality":
        return "bg-green-100 text-green-800 border-green-200"
      case "accessibility":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "pass":
        return "bg-green-100 text-green-800 border-green-200"
      case "fail":
        return "bg-red-100 text-red-800 border-red-200"
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "checking":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const passedChecks = checks.filter((check) => check.status === "pass").length
  const warningChecks = checks.filter((check) => check.status === "warning").length
  const failedChecks = checks.filter((check) => check.status === "fail").length
  const checkingChecks = checks.filter((check) => check.status === "checking").length

  return (
    <Card className="border border-slate-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg">{title}</span>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-600">{passedChecks} passed</span>
            {warningChecks > 0 && <span className="text-yellow-600">{warningChecks} warnings</span>}
            {failedChecks > 0 && <span className="text-red-600">{failedChecks} failed</span>}
            {checkingChecks > 0 && <span className="text-blue-600">{checkingChecks} checking</span>}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {checks.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No health checks available</p>
              <p className="text-xs text-slate-400 mt-1">Run a health check to see results</p>
            </div>
          ) : (
            checks.map((check, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg border bg-slate-50 border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <StatusIndicator status={check.status} size="md" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-slate-900">{check.name}</h4>
                      <Badge className={`text-xs ${getCategoryColor(check.category)}`}>
                        <span className="flex items-center gap-1">
                          {getCategoryIcon(check.category)}
                          {check.category}
                        </span>
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={`text-xs ${getStatusBadgeColor(check.status)}`}>
                        {check.status.toUpperCase()}
                      </Badge>
                      <span className="text-xs text-slate-500">{check.timestamp}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{check.description}</p>
                  {check.details && (
                    <div className="text-xs text-slate-500 bg-slate-100 p-2 rounded border-l-2 border-slate-300">
                      <strong>Details:</strong> {check.details}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
