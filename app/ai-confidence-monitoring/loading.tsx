export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse space-y-6">
          {/* Header skeleton */}
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="h-8 bg-slate-700 rounded w-96"></div>
              <div className="h-4 bg-slate-700 rounded w-64"></div>
            </div>
            <div className="h-10 bg-slate-700 rounded w-24"></div>
          </div>

          {/* Overview cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-slate-700 rounded"></div>
            ))}
          </div>

          {/* Tabs skeleton */}
          <div className="space-y-6">
            <div className="h-10 bg-slate-700 rounded w-64"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-slate-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
