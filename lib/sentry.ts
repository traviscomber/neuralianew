import * as Sentry from "@sentry/nextjs"

export function initSentry() {
  if (process.env.SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.NODE_ENV || "development",
      enabled: process.env.NODE_ENV === "production",
      tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
      debug: process.env.NODE_ENV === "development",
      integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Sentry.Integrations.OnUncaughtException(),
        new Sentry.Integrations.OnUnhandledRejection(),
      ],
      beforeSend(event) {
        // Filter out certain errors
        if (event.exception) {
          const error = event.exception.values?.[0]?.value || ""
          // Ignore 404s and client-side errors that aren't critical
          if (error.includes("404") || error.includes("AbortError")) {
            return null
          }
        }
        return event
      },
    })
  }
}

export function captureException(error: unknown, context?: Record<string, unknown>) {
  if (process.env.SENTRY_DSN) {
    Sentry.captureException(error, {
      contexts: {
        custom: context || {},
      },
    })
  }
}

export function captureMessage(message: string, level: "fatal" | "error" | "warning" | "info" = "error") {
  if (process.env.SENTRY_DSN) {
    Sentry.captureMessage(message, level)
  }
}

export function setUser(userId: string, email?: string, username?: string) {
  if (process.env.SENTRY_DSN) {
    Sentry.setUser({
      id: userId,
      email,
      username,
    })
  }
}

export function clearUser() {
  if (process.env.SENTRY_DSN) {
    Sentry.setUser(null)
  }
}

export function addBreadcrumb(message: string, data?: Record<string, unknown>, category = "custom") {
  if (process.env.SENTRY_DSN) {
    Sentry.addBreadcrumb({
      message,
      data,
      category,
      level: "info",
    })
  }
}
