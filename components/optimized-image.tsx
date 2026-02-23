import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  objectFit?: "contain" | "cover" | "fill"
  placeholder?: "blur" | "empty"
}

/**
 * Optimized Image Component
 * Automatically handles Next.js Image optimization with proper sizing and lazy loading
 */
export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = "",
  objectFit = "cover",
  placeholder = "blur",
}: OptimizedImageProps) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder={placeholder}
        className={cn(
          "w-full h-auto transition-transform duration-300 hover:scale-105",
          className
        )}
        style={{
          objectFit: objectFit,
        }}
      />
    </div>
  )
}

/**
 * Hero Image - Optimized for above-fold content
 */
export function HeroImage({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={1200}
      height={600}
      priority={true}
      className={className}
      objectFit="cover"
    />
  )
}

/**
 * Section Image - Optimized for mid-page content
 */
export function SectionImage({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={800}
      height={600}
      priority={false}
      className={className}
      objectFit="cover"
    />
  )
}

/**
 * Card Image - Optimized for card containers
 */
export function CardImage({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={400}
      height={300}
      priority={false}
      className={className}
      objectFit="cover"
    />
  )
}
