"use client"

import { useEffect, useRef, useState } from "react"

export function usePerformance(componentName: string) {
  const renderCount = useRef(0)
  const [renderTime, setRenderTime] = useState(0)

  useEffect(() => {
    const startTime = performance.now()

    return () => {
      const endTime = performance.now()
      const duration = endTime - startTime
      setRenderTime(duration)
      renderCount.current++

      if (duration > 16) {
        // 60fps threshold
        console.warn(`${componentName} render took ${duration.toFixed(2)}ms`)
      }
    }
  })

  return {
    renderTime,
    renderCount: renderCount.current,
  }
}

export function useImagePreloader(images: string[]) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image()
          img.onload = () => resolve(src)
          img.onerror = () => reject(src)
          img.src = src
        })
      })

      try {
        const loaded = await Promise.allSettled(imagePromises)
        const successful = loaded
          .filter((result): result is PromiseFulfilledResult<string> => result.status === "fulfilled")
          .map((result) => result.value)

        setLoadedImages(new Set(successful))
      } catch (error) {
        console.error("Error preloading images:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (images.length > 0) {
      preloadImages()
    }
  }, [images])

  return { loadedImages, isLoading }
}

export function useLazyLoad() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
