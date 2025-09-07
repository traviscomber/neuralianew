import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { TruckIcon as TouchIcon, Ruler, Smartphone } from "lucide-react"

export default function MobileButtonTestLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Loading */}
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-4">
            <TouchIcon className="w-4 h-4 mr-2" />
            Test de Botones Móviles
          </Badge>
          <div className="space-y-4">
            <Skeleton className="h-8 sm:h-10 lg:h-12 w-3/4 mx-auto bg-slate-700/50" />
            <Skeleton className="h-6 w-2/3 mx-auto bg-slate-700/50" />
          </div>
        </div>

        {/* Device Info Loading */}
        <Card className="mb-6 sm:mb-8 bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Smartphone className="w-5 h-5 animate-pulse" />
              <span>Información del Dispositivo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-4 bg-slate-700/30 rounded-lg text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2 bg-slate-600/50" />
                  <Skeleton className="h-4 w-24 mx-auto bg-slate-600/50" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Button Demo Loading */}
        <Card className="mb-6 sm:mb-8 bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Ruler className="w-5 h-5 animate-pulse" />
              <span>Demo de Botones Optimizados</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Skeleton className="h-4 w-3/4 bg-slate-700/50" />

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
                <Skeleton className="h-12 sm:h-10 w-full sm:w-40 bg-slate-700/50 rounded-md" />
                <Skeleton className="h-12 sm:h-10 w-full sm:w-44 bg-slate-700/50 rounded-md" />
                <Skeleton className="h-12 sm:h-10 w-full sm:w-36 bg-slate-700/50 rounded-md" />
              </div>

              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full bg-slate-700/50" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Touch Target Analysis Loading */}
        <Card className="mb-6 sm:mb-8 bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">
              <Skeleton className="h-6 w-48 bg-slate-700/50" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="p-4 rounded-lg border border-slate-700/50 bg-slate-700/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-32 bg-slate-600/50" />
                      <Skeleton className="h-4 w-48 bg-slate-600/50" />
                      <Skeleton className="h-3 w-64 bg-slate-600/50" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-slate-600/50 rounded animate-pulse"></div>
                      <Skeleton className="h-4 w-12 bg-slate-600/50" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* WCAG Guidelines Loading */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">
              <Skeleton className="h-6 w-56 bg-slate-700/50" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-6 w-32 bg-slate-700/50" />
                  <div className="space-y-2">
                    {[...Array(5)].map((_, j) => (
                      <Skeleton key={j} className="h-4 w-full bg-slate-600/50" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
