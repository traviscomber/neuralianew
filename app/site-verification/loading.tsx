"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Eye, RefreshCw } from "lucide-react"

export default function SiteVerificationLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-blue-600 text-white border-0 text-lg px-6 py-2">
            <Eye className="w-4 h-4 mr-2" />
            Site Verification Dashboard
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">N3uralia Landing Page Verification</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Initializing comprehensive site verification tests...
          </p>
        </div>

        {/* Loading Progress */}
        <Card className="mb-8 bg-white border border-slate-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-blue-600 animate-spin" />
              <Skeleton className="h-6 w-48" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={25} className="h-3" />
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Initializing test suite...</span>
                <span className="font-semibold">25%</span>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Total Tests</div>
                </div>
                <div className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Passed</div>
                </div>
                <div className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Failed</div>
                </div>
                <div className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Warnings</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading Test Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="bg-white border border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Skeleton className="w-5 h-5 rounded" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Progress value={Math.random() * 100} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-4 w-8" />
                  </div>
                  <Skeleton className="h-4 w-32" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Loading Message */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center gap-2 text-slate-600">
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>Running comprehensive site verification tests...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
