import { CheckCircle, XCircle, AlertTriangle, RefreshCw } from "lucide-react"

interface StatusIndicatorProps {
  status: "pass" | "fail" | "warning" | "checking"
  size?: "sm" | "md" | "lg"
}

export function StatusIndicator({ status, size = "md" }: StatusIndicatorProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const iconClass = sizeClasses[size]

  switch (status) {
    case "pass":
      return <CheckCircle className={`${iconClass} text-green-500`} />
    case "fail":
      return <XCircle className={`${iconClass} text-red-500`} />
    case "warning":
      return <AlertTriangle className={`${iconClass} text-yellow-500`} />
    case "checking":
      return <RefreshCw className={`${iconClass} text-blue-500 animate-spin`} />
    default:
      return <RefreshCw className={`${iconClass} text-gray-400`} />
  }
}
