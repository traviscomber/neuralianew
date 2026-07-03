import { NextRequest, NextResponse } from "next/server"
import * as Sentry from "@sentry/nextjs"
import { captureException } from "./sentry"

export function withErrorBoundary(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const transaction = Sentry.startTransaction({
      op: "http.server",
      name: `${req.method} ${req.nextUrl.pathname}`,
    })

    try {
      const startTime = performance.now()
      const response = await handler(req)
      const duration = performance.now() - startTime

      transaction.setTag("status_code", response.status)
      transaction.setMeasurement("duration", duration, "ms")

      if (response.status >= 400) {
        const data = await response.clone().json().catch(() => ({}))
        Sentry.captureMessage(`HTTP ${response.status}: ${req.nextUrl.pathname}`, {
          level: "warning",
          extra: {
            request: {
              method: req.method,
              url: req.nextUrl.toString(),
              headers: Object.fromEntries(req.headers.entries()),
            },
            response: {
              status: response.status,
              data,
            },
          },
        })
      }

      transaction.finish()
      return response
    } catch (error) {
      transaction.setTag("error", true)
      captureException(error, {
        route: req.nextUrl.pathname,
        method: req.method,
      })
      transaction.finish()

      return NextResponse.json(
        {
          status: "error",
          message: error instanceof Error ? error.message : "Unknown error occurred",
          timestamp: new Date().toISOString(),
        },
        { status: 500 },
      )
    }
  }
}

export function withTransaction(name: string, handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const transaction = Sentry.startTransaction({
      op: `http.${name}`,
      name,
    })

    try {
      const response = await handler(req)
      transaction.finish()
      return response
    } catch (error) {
      transaction.setTag("error", true)
      captureException(error)
      transaction.finish()
      throw error
    }
  }
}
