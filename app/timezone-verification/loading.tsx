import { RefreshCw, Clock, Globe, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TimezoneVerificationLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Timezone Verification System</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Loading 24/7 coverage monitoring and real-time timezone verification...
          </p>
        </div>

        {/* Loading Status */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <RefreshCw className="w-5 h-5 animate-spin text-blue-600" />
              Initializing Global Coverage Monitor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-200 rounded animate-pulse"></div>
                <span className="text-slate-600">Loading Santiago, Chile timezone...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-200 rounded animate-pulse"></div>
                <span className="text-slate-600">Loading Kaliningrado, Russia timezone...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-200 rounded animate-pulse"></div>
                <span className="text-slate-600">Loading Singapore timezone...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-200 rounded animate-pulse"></div>
                <span className="text-slate-600">Verifying 24/7 coverage...</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading Clock Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { flag: "🇨🇱", city: "Santiago", country: "Chile" },
            { flag: "🇷🇺", city: "Kaliningrado", country: "Rusia" },
            { flag: "🇸🇬", city: "Singapur", country: "Singapur" },
          ].map((location, index) => (
            <Card key={index} className="border border-slate-200">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="text-2xl sm:text-3xl">{location.flag}</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{location.city}</h3>
                    <p className="text-xs sm:text-sm text-slate-600">{location.country}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-slate-300 animate-pulse">--:--</div>
                  <div className="w-24 h-6 bg-slate-200 rounded-full mx-auto animate-pulse"></div>
                  <div className="text-xs text-slate-400">Loading timezone data...</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Loading Summary Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-300 animate-pulse">--</div>
              <div className="text-xs sm:text-sm text-slate-500">Total Updates</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-300 animate-pulse">--</div>
              <div className="text-xs sm:text-sm text-slate-500">Active Teams</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-300 animate-pulse">--</div>
              <div className="text-xs sm:text-sm text-slate-500">Tests Passed</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-300 animate-pulse">--</div>
              <div className="text-xs sm:text-sm text-slate-500">Coverage Status</div>
            </CardContent>
          </Card>
        </div>

        {/* Loading Tabs */}
        <Card className="border border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-400" />
              Loading Coverage Analysis...
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Activity className="w-4 h-4 text-slate-400" />
                <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-slate-400" />
                <div className="w-3/4 h-4 bg-slate-200 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-4 h-4 text-slate-400 animate-spin" />
                <div className="w-5/6 h-4 bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading Message */}
        <Card className="border border-green-200 bg-green-50">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <RefreshCw className="w-6 h-6 text-green-600 animate-spin" />
              <span className="text-lg font-semibold text-green-900">Preparing 24/7 Coverage Monitor</span>
            </div>
            <p className="text-green-800 mb-2">
              Initializing real-time timezone verification and global team coverage analysis...
            </p>
            <p className="text-sm text-green-700">
              This includes optimized shift schedules, overnight coverage handling, and continuous gap detection.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
