import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function LighthouseAuditLoading() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Lighthouse Performance Audit</h1>
          <p className="text-xl text-slate-600">Loading audit interface...</p>
        </div>

        <Card className="p-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <h2 className="text-2xl font-bold text-slate-900">Preparing Lighthouse Audit...</h2>
          </div>
          <Progress value={33} className="w-full max-w-md mx-auto" />
        </Card>
      </div>
    </div>
  )
}
