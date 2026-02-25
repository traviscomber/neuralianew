"use client"

import { useState } from "react"
import Image from "next/image"
import { useLazyLoad } from "@/hooks/use-performance"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  loadingStrategy?: "lazy" | "eager" | "native"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75, // Reduced from 85 for better compression
  placeholder = "empty",
  blurDataURL,
  loadingStrategy = "lazy",
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { ref, isVisible } = useLazyLoad()

  // Determine if image should be loaded now
  const shouldLoad = priority || (isVisible && loadingStrategy === "lazy") || loadingStrategy === "eager"

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    console.warn(`[v0] Failed to load image: ${src}`)
  }

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`} style={{ width, height }}>
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    )
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {shouldLoad && (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" style={{ width, height }} />
          )}
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            quality={quality}
            priority={priority}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"} w-full h-full object-cover`}
            onLoad={handleLoad}
            onError={handleError}
            sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px`}
            loading={loadingStrategy === "native" ? "lazy" : undefined}
          />
        </>
      )}
    </div>
  )
}
