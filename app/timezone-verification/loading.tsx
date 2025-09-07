import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Clock, RefreshCw, CheckCircle2 } from "lucide-react"

export default function TimezoneVerificationLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Loading */}
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Verificación de Zonas Horarias
          </Badge>
          <div className="space-y-4">
            <Skeleton className="h-8 sm:h-10 lg:h-12 w-3/4 mx-auto bg-slate-700/50" />
            <Skeleton className="h-6 w-2/3 mx-auto bg-slate-700/50" />
          </div>
        </div>

        {/* Control Panel Loading */}
        <Card className="mb-6 sm:mb-8 bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2 text-lg sm:text-xl">
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Panel de Control</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Mobile Button Loading - Enhanced Spacing */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
                <Skeleton className="h-12 sm:h-10 w-full sm:w-40 bg-slate-700/50 rounded-md" />
                <Skeleton className="h-12 sm:h-10 w-full sm:w-44 bg-slate-700/50 rounded-md" />
                <Skeleton className="h-12 sm:h-10 w-full sm:w-36 bg-slate-700/50 rounded-md" />
              </div>

              {/* Status Information Loading */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="p-3 sm:p-2 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center justify-between sm:justify-start sm:space-x-2">
                      <Skeleton className="h-4 w-20 bg-slate-600/50" />
                      <Skeleton className="h-4 w-12 bg-slate-600/50" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timezone Cards Loading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="bg-slate-800/50 border-slate-700/50">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Skeleton className="w-8 h-8 sm:w-12 sm:h-12 rounded bg-slate-700/50" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 sm:h-6 w-20 bg-slate-700/50" />
                    <Skeleton className="h-3 sm:h-4 w-16 bg-slate-700/50" />
                    <Skeleton className="h-3 w-12 bg-slate-700/50" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-400 animate-pulse" />
                    <Skeleton className="h-8 sm:h-10 w-20 bg-slate-700/50" />
                  </div>
                  <Skeleton className="h-4 w-32 mx-auto bg-slate-700/50" />
                  <Skeleton className="h-6 w-28 mx-auto bg-slate-700/50 rounded-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Test Results Loading */}
        <Card className="bg-slate-800/50 border-slate-700/50 mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between text-lg sm:text-xl">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 animate-pulse" />
                <span>Resultados de Tests en Tiempo Real</span>
              </div>
              <Skeleton className="h-6 w-16 bg-slate-700/50 rounded-full" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-80 sm:max-h-96">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 rounded-lg bg-slate-700/20 space-y-2 sm:space-y-0"
                >
                  <div className="flex items-start space-x-3 min-w-0 flex-1">
                    <div className="w-2 h-2 rounded-full bg-slate-600 mt-2 animate-pulse"></div>
                    <div className="min-w-0 flex-1 space-y-2">
                      <Skeleton className="h-4 w-32 bg-slate-600/50" />
                      <Skeleton className="h-3 w-48 bg-slate-600/50" />
                    </div>
                  </div>
                  <Skeleton className="h-3 w-16 bg-slate-600/50" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Summary Statistics Loading */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="bg-slate-800/30 border-slate-700/50">
              <CardContent className="p-3 sm:p-4 text-center">
                <Skeleton className="h-6 sm:h-8 w-12 mx-auto mb-2 bg-slate-700/50" />
                <Skeleton className="h-3 sm:h-4 w-20 mx-auto bg-slate-700/50" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
