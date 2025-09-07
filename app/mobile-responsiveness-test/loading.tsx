import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Smartphone, Tablet, Monitor } from "lucide-react"

export default function MobileResponsivenessTestLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Loading */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-4">
            <Eye className="w-4 h-4 mr-2" />
            Test de Responsividad
          </Badge>
          <div className="space-y-4">
            <Skeleton className="h-12 w-2/3 mx-auto bg-slate-700/50" />
            <Skeleton className="h-6 w-1/2 mx-auto bg-slate-700/50" />
          </div>
        </div>

        <Tabs defaultValue="preview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border border-slate-700/50">
            <TabsTrigger value="preview" className="text-white">
              Vista Previa
            </TabsTrigger>
            <TabsTrigger value="tests" className="text-white">
              Resultados de Tests
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="space-y-6">
            {/* Device Selector Loading */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Selector de Dispositivo</span>
                  <Skeleton className="h-6 w-24 bg-slate-700/50" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center space-y-2 p-3 border border-slate-600 rounded-lg bg-slate-700/20"
                    >
                      {i < 2 ? (
                        <Smartphone className="w-6 h-6 text-slate-400 animate-pulse" />
                      ) : i < 4 ? (
                        <Tablet className="w-6 h-6 text-slate-400 animate-pulse" />
                      ) : (
                        <Monitor className="w-6 h-6 text-slate-400 animate-pulse" />
                      )}
                      <div className="text-center space-y-1">
                        <Skeleton className="h-3 w-20 bg-slate-600/50" />
                        <Skeleton className="h-3 w-16 bg-slate-600/50" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Preview Frame Loading */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">
                  <Skeleton className="h-6 w-48 bg-slate-700/50" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div className="border-2 border-slate-600 rounded-lg overflow-hidden bg-slate-900 w-full max-w-4xl h-96">
                    <div className="w-full h-full bg-slate-800/50 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <Skeleton className="h-4 w-32 bg-slate-700/50 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tests" className="space-y-6">
            {/* Test Results Summary Loading */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="bg-slate-800/30 border-slate-700/50">
                  <CardContent className="p-4 text-center">
                    <Skeleton className="h-8 w-8 mx-auto mb-2 bg-slate-700/50" />
                    <Skeleton className="h-4 w-16 mx-auto bg-slate-700/50" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Test Results Loading */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">
                  <Skeleton className="h-6 w-64 bg-slate-700/50" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="border border-slate-700/50 rounded-lg p-4 bg-slate-800/30">
                      <div className="flex items-center justify-between mb-3">
                        <Skeleton className="h-6 w-32 bg-slate-700/50" />
                        <div className="flex items-center space-x-4">
                          <Smartphone className="w-4 h-4 text-slate-400" />
                          <Tablet className="w-4 h-4 text-slate-400" />
                          <Monitor className="w-4 h-4 text-slate-400" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-3 mb-3">
                        {[...Array(3)].map((_, j) => (
                          <Skeleton key={j} className="h-12 bg-slate-700/50 rounded" />
                        ))}
                      </div>
                      <Skeleton className="h-16 bg-slate-700/30 rounded" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
