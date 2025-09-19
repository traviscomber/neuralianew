export interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  timeToInteractive: number
  totalBlockingTime: number
}

export interface ComponentMetrics {
  componentName: string
  renderTime: number
  reRenderCount: number
  memoryUsage: number
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: PerformanceMetrics[] = []
  private componentMetrics: ComponentMetrics[] = []
  private observers: PerformanceObserver[] = []

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  startMonitoring(): void {
    if (typeof window === "undefined") return

    // Core Web Vitals monitoring
    this.monitorWebVitals()

    // Resource loading monitoring
    this.monitorResourceLoading()

    // Component performance monitoring
    this.monitorComponentPerformance()

    // Memory usage monitoring
    this.monitorMemoryUsage()
  }

  private monitorWebVitals(): void {
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as PerformanceEntry
      console.log("LCP:", lastEntry.startTime)
    })
    lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })
    this.observers.push(lcpObserver)

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        console.log("FID:", entry.processingStart - entry.startTime)
      })
    })
    fidObserver.observe({ entryTypes: ["first-input"] })
    this.observers.push(fidObserver)

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          console.log("CLS:", entry.value)
        }
      })
    })
    clsObserver.observe({ entryTypes: ["layout-shift"] })
    this.observers.push(clsObserver)
  }

  private monitorResourceLoading(): void {
    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.name.includes(".png") || entry.name.includes(".jpg") || entry.name.includes(".jpeg")) {
          const loadTime = entry.responseEnd - entry.startTime
          if (loadTime > 1000) {
            console.warn(`Slow image loading: ${entry.name} took ${loadTime}ms`)
          }
        }
      })
    })
    resourceObserver.observe({ entryTypes: ["resource"] })
    this.observers.push(resourceObserver)
  }

  private monitorComponentPerformance(): void {
    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        console.warn(`Long task detected: ${entry.duration}ms`)
      })
    })
    longTaskObserver.observe({ entryTypes: ["longtask"] })
    this.observers.push(longTaskObserver)
  }

  private monitorMemoryUsage(): void {
    if ("memory" in performance) {
      setInterval(() => {
        const memory = (performance as any).memory
        if (memory.usedJSHeapSize > 50 * 1024 * 1024) {
          // 50MB threshold
          console.warn("High memory usage detected:", {
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + "MB",
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + "MB",
          })
        }
      }, 10000)
    }
  }

  measureComponentRender(componentName: string, renderFn: () => void): void {
    const startTime = performance.now()
    renderFn()
    const endTime = performance.now()

    const existingMetric = this.componentMetrics.find((m) => m.componentName === componentName)
    if (existingMetric) {
      existingMetric.renderTime = endTime - startTime
      existingMetric.reRenderCount++
    } else {
      this.componentMetrics.push({
        componentName,
        renderTime: endTime - startTime,
        reRenderCount: 1,
        memoryUsage: 0,
      })
    }
  }

  getPerformanceReport(): {
    webVitals: any
    slowComponents: ComponentMetrics[]
    recommendations: string[]
  } {
    const slowComponents = this.componentMetrics.filter((m) => m.renderTime > 16) // 60fps threshold

    const recommendations = []
    if (slowComponents.length > 0) {
      recommendations.push("Consider optimizing slow-rendering components")
    }

    return {
      webVitals: this.getWebVitals(),
      slowComponents,
      recommendations,
    }
  }

  private getWebVitals(): any {
    return {
      // This would be populated by the observers
      lcp: "Monitoring...",
      fid: "Monitoring...",
      cls: "Monitoring...",
    }
  }

  stopMonitoring(): void {
    this.observers.forEach((observer) => observer.disconnect())
    this.observers = []
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance()

// Image optimization utilities
export const optimizeImage = (src: string, width: number, height: number): string => {
  // Add WebP support detection
  const supportsWebP =
    typeof window !== "undefined" &&
    document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") === 0

  if (supportsWebP && !src.includes(".svg")) {
    return `${src}?format=webp&width=${width}&height=${height}&quality=85`
  }

  return `${src}?width=${width}&height=${height}&quality=85`
}

// Lazy loading utility
export const createIntersectionObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  if (typeof window === "undefined") return null

  return new IntersectionObserver(callback, {
    rootMargin: "50px",
    threshold: 0.1,
  })
}

// Bundle size analyzer
export const analyzeBundleSize = () => {
  if (typeof window === "undefined") return

  const scripts = Array.from(document.querySelectorAll("script[src]"))
  const totalSize = scripts.reduce((total, script) => {
    const src = (script as HTMLScriptElement).src
    if (src.includes("/_next/static/")) {
      // Estimate bundle size (this would need actual measurement in production)
      return total + 100 // KB estimate
    }
    return total
  }, 0)

  console.log(`Estimated bundle size: ${totalSize}KB`)

  if (totalSize > 500) {
    console.warn("Bundle size is large. Consider code splitting.")
  }
}
