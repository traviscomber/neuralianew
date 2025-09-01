"use client"

import type React from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"

const Navigation = dynamic(() => import("@/components/navigation"), {
  loading: () => (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="w-32 h-8 bg-muted animate-pulse rounded" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-20 h-8 bg-muted animate-pulse rounded" />
            <div className="w-24 h-8 bg-muted animate-pulse rounded" />
          </div>
        </div>
      </div>
    </div>
  ),
})

const Footer = dynamic(() => import("@/components/landing/footer"), {
  loading: () => (
    <div className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="w-24 h-6 bg-slate-700 animate-pulse rounded" />
              <div className="space-y-2">
                <div className="w-32 h-4 bg-slate-700 animate-pulse rounded" />
                <div className="w-28 h-4 bg-slate-700 animate-pulse rounded" />
                <div className="w-36 h-4 bg-slate-700 animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <>
      <Suspense
        fallback={
          <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <div className="w-32 h-8 bg-muted animate-pulse rounded" />
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <div className="w-20 h-8 bg-muted animate-pulse rounded" />
                  <div className="w-24 h-8 bg-muted animate-pulse rounded" />
                </div>
              </div>
            </div>
          </div>
        }
      >
        <Navigation />
      </Suspense>

      {children}

      <Suspense
        fallback={
          <div className="bg-slate-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-24 h-6 bg-slate-700 animate-pulse rounded" />
                    <div className="space-y-2">
                      <div className="w-32 h-4 bg-slate-700 animate-pulse rounded" />
                      <div className="w-28 h-4 bg-slate-700 animate-pulse rounded" />
                      <div className="w-36 h-4 bg-slate-700 animate-pulse rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <Footer />
      </Suspense>
    </>
  )
}
