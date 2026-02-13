/**
 * Database Query Monitoring
 * Tracks query performance and helps identify bottlenecks
 */

interface QueryMetrics {
  queryId: string
  table: string
  operation: 'select' | 'insert' | 'update' | 'delete' | 'upsert'
  duration: number // milliseconds
  timestamp: Date
  rowCount?: number
  error?: string
  success: boolean
}

interface QueryStats {
  totalQueries: number
  totalDuration: number
  slowestQuery: QueryMetrics | null
  averageDuration: number
  errorCount: number
  queriesByTable: Record<string, number>
  queriesByOperation: Record<string, number>
}

class QueryMonitor {
  private metrics: QueryMetrics[] = []
  private readonly maxMetrics = 10000 // Keep last 10k queries
  private readonly slowQueryThreshold = 1000 // 1 second

  /**
   * Record a query metric
   */
  recordQuery(metric: QueryMetrics): void {
    this.metrics.push(metric)

    // Keep buffer size manageable
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics)
    }

    // Log slow queries
    if (metric.duration > this.slowQueryThreshold) {
      console.warn(
        `[SLOW QUERY] ${metric.table}.${metric.operation} took ${metric.duration}ms`,
        {
          table: metric.table,
          duration: metric.duration,
          timestamp: metric.timestamp,
        }
      )
    }

    // Log errors
    if (metric.error) {
      console.error(`[QUERY ERROR] ${metric.table}.${metric.operation}:`, metric.error)
    }
  }

  /**
   * Get current statistics
   */
  getStats(): QueryStats {
    if (this.metrics.length === 0) {
      return {
        totalQueries: 0,
        totalDuration: 0,
        slowestQuery: null,
        averageDuration: 0,
        errorCount: 0,
        queriesByTable: {},
        queriesByOperation: {},
      }
    }

    const totalDuration = this.metrics.reduce((sum, m) => sum + m.duration, 0)
    const errorCount = this.metrics.filter((m) => !m.success).length
    const slowestQuery = this.metrics.reduce((slowest, current) =>
      current.duration > slowest.duration ? current : slowest
    )

    const queriesByTable: Record<string, number> = {}
    const queriesByOperation: Record<string, number> = {}

    for (const metric of this.metrics) {
      queriesByTable[metric.table] = (queriesByTable[metric.table] || 0) + 1
      queriesByOperation[metric.operation] = (queriesByOperation[metric.operation] || 0) + 1
    }

    return {
      totalQueries: this.metrics.length,
      totalDuration,
      slowestQuery,
      averageDuration: totalDuration / this.metrics.length,
      errorCount,
      queriesByTable,
      queriesByOperation,
    }
  }

  /**
   * Get metrics for specific table
   */
  getTableMetrics(table: string): QueryMetrics[] {
    return this.metrics.filter((m) => m.table === table)
  }

  /**
   * Get slow queries (above threshold)
   */
  getSlowQueries(threshold = this.slowQueryThreshold): QueryMetrics[] {
    return this.metrics.filter((m) => m.duration > threshold).sort((a, b) => b.duration - a.duration)
  }

  /**
   * Get failed queries
   */
  getFailedQueries(): QueryMetrics[] {
    return this.metrics.filter((m) => !m.success)
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics = []
  }

  /**
   * Export metrics as JSON
   */
  export(): QueryMetrics[] {
    return [...this.metrics]
  }
}

// Global query monitor instance
const queryMonitor = new QueryMonitor()

/**
 * Wrap Supabase query with monitoring
 */
export async function monitoredQuery<T>(
  table: string,
  operation: 'select' | 'insert' | 'update' | 'delete' | 'upsert',
  queryFn: () => Promise<T>,
  options?: {
    rowCount?: number
  }
): Promise<T> {
  const startTime = performance.now()
  const queryId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

  try {
    const result = await queryFn()

    const duration = Math.round(performance.now() - startTime)

    queryMonitor.recordQuery({
      queryId,
      table,
      operation,
      duration,
      timestamp: new Date(),
      rowCount: options?.rowCount,
      success: true,
    })

    return result
  } catch (error) {
    const duration = Math.round(performance.now() - startTime)
    const errorMessage = error instanceof Error ? error.message : String(error)

    queryMonitor.recordQuery({
      queryId,
      table,
      operation,
      duration,
      timestamp: new Date(),
      error: errorMessage,
      success: false,
    })

    throw error
  }
}

/**
 * Get global query statistics
 */
export function getQueryStats(): QueryStats {
  return queryMonitor.getStats()
}

/**
 * Get slow queries
 */
export function getSlowQueries(threshold = 1000): QueryMetrics[] {
  return queryMonitor.getSlowQueries(threshold)
}

/**
 * Get failed queries
 */
export function getFailedQueries(): QueryMetrics[] {
  return queryMonitor.getFailedQueries()
}

/**
 * Clear monitoring data
 */
export function clearMonitoring(): void {
  queryMonitor.clear()
}

/**
 * Export all metrics
 */
export function exportMetrics(): QueryMetrics[] {
  return queryMonitor.export()
}

/**
 * API endpoint for monitoring dashboard (add to api/monitoring/stats.ts)
 */
export function createMonitoringEndpoint() {
  return {
    getStats: () => getQueryStats(),
    getSlowQueries: (threshold?: number) => getSlowQueries(threshold),
    getFailedQueries: () => getFailedQueries(),
  }
}
