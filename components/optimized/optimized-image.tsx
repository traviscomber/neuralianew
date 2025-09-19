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
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { ref, isVisible } = useLazyLoad()

  // Generate WebP version if supported
  const getOptimizedSrc = (originalSrc: string) => {
    if (typeof window === "undefined") return originalSrc

    const canvas = document.createElement("canvas")
    const supportsWebP = canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0

    if (supportsWebP && !originalSrc.includes(".svg")) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, ".webp")
    }

    return originalSrc
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    console.warn(`Failed to load image: ${src}`)
  }

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`} style={{ width, height }}>
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    )
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      {(isVisible || priority) && (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" style={{ width, height }} />
          )}
          <Image
            src={getOptimizedSrc(src) || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            quality={quality}
            priority={priority}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
            onLoad={handleLoad}
            onError={handleError}
            sizes={`(max-width: 768px) ${Math.min(width, 400)}px, ${width}px`}
          />
        </>
      )}
    </div>
  )
}
