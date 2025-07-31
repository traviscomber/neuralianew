"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)

    // Check if it's a chunk loading error
    const isChunkError =
      error.message.includes("Loading chunk") ||
      error.message.includes("ChunkLoadError") ||
      error.name === "ChunkLoadError"

    if (isChunkError) {
      // Check if we've already tried reloading
      const hasReloaded = sessionStorage.getItem("chunk-error-reload")

      if (!hasReloaded) {
        // Mark that we're about to reload
        sessionStorage.setItem("chunk-error-reload", "true")

        // Reload the page after a short delay
        setTimeout(() => {
          window.location.reload()
        }, 1000)

        return
      }

      // If we've already reloaded once, clear the flag and show the error UI
      sessionStorage.removeItem("chunk-error-reload")
    }
  }, [error])

  const isChunkError =
    error.message.includes("Loading chunk") ||
    error.message.includes("ChunkLoadError") ||
    error.name === "ChunkLoadError"

  const handleRetry = () => {
    // Clear any cached data and retry
    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name)
        })
      })
    }

    // Clear the reload flag and refresh
    sessionStorage.removeItem("chunk-error-reload")
    window.location.reload()
  }

  const handleGoHome = () => {
    sessionStorage.removeItem("chunk-error-reload")
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-xl">{isChunkError ? "Loading Error" : "Something went wrong"}</CardTitle>
          <CardDescription>
            {isChunkError
              ? "There was a problem loading the application. This is usually temporary."
              : "An unexpected error occurred. Please try again."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {process.env.NODE_ENV === "development" && (
            <details className="text-sm text-gray-600 bg-gray-100 p-3 rounded">
              <summary className="cursor-pointer font-medium">Error Details</summary>
              <pre className="mt-2 whitespace-pre-wrap break-words">{error.message}</pre>
            </details>
          )}

          <div className="flex flex-col gap-2">
            <Button onClick={handleRetry} className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button onClick={handleGoHome} variant="outline" className="w-full bg-transparent">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
