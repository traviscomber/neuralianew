import { NextResponse } from "next/server"
import { validateEnvironmentVariables, logValidationResults } from "@/lib/env"
import { createServerClient } from "@/lib/supabase"

export const runtime = "nodejs"

async function checkDatabaseHealth(): Promise<{ status: "healthy" | "degraded" | "unhealthy"; message: string }> {
  try {
    const client = createServerClient()
    const { data, error } = await client.from("profiles").select("count").limit(1)

    if (error) {
      return { status: "unhealthy", message: `Database error: ${error.message}` }
    }

    return { status: "healthy", message: "Database connected and operational" }
  } catch (error) {
    return {
      status: "unhealthy",
      message: `Database check failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

async function checkEnvironmentHealth(): Promise<{ status: "healthy" | "degraded" | "unhealthy"; errors: string[] }> {
  const validation = validateEnvironmentVariables()
  return {
    status: validation.valid ? "healthy" : "unhealthy",
    errors: validation.errors,
  }
}

export async function GET() {
  try {
    const timestamp = new Date().toISOString()
    const environment = process.env.NODE_ENV || "development"

    // Check environment variables
    const envHealth = await checkEnvironmentHealth()

    // Check database if env is healthy
    let dbHealth: { status: "healthy" | "degraded" | "unhealthy" | "skipped"; message: string } = { status: "skipped", message: "Skipped due to env errors" }
    if (envHealth.status === "healthy") {
      dbHealth = await checkDatabaseHealth()
    }

    // Determine overall status
    const allHealthy = envHealth.status === "healthy" && dbHealth.status === "healthy"
    const overallStatus = allHealthy ? "healthy" : envHealth.status === "unhealthy" || dbHealth.status === "unhealthy" ? "unhealthy" : "degraded"

    const healthData = {
      status: overallStatus,
      timestamp,
      version: process.env.npm_package_version || "1.0.0",
      environment,
      uptime: Math.floor(process.uptime()),
      memory: {
        heapUsed: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        heapTotal: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
        rss: Math.round(process.memoryUsage().rss / 1024 / 1024),
        external: Math.round(process.memoryUsage().external / 1024 / 1024),
      },
      services: {
        environment: envHealth,
        database: dbHealth.status === "skipped" ? { status: "skipped", message: dbHealth.message } : dbHealth,
        api: { status: "healthy", message: "API operational" },
      },
      checks: {
        environmentVariables: envHealth.status === "healthy" ? "passed" : "failed",
        database: dbHealth.status === "healthy" ? "passed" : dbHealth.status === "skipped" ? "skipped" : "failed",
      },
    }

    const statusCode = overallStatus === "healthy" ? 200 : overallStatus === "degraded" ? 206 : 503

    return NextResponse.json(healthData, { status: statusCode })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"

    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: errorMessage,
        services: {
          api: { status: "degraded", message: "Health check failed" },
        },
      },
      { status: 503 },
    )
  }
}
