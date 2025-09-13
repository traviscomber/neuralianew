"use client"

import { useRef, useEffect, type RefObject } from "react"

interface SwipeGestureOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  minDistance?: number
  maxTime?: number
}

interface TouchPosition {
  x: number
  y: number
  time: number
}

export function useSwipeGestures(options: SwipeGestureOptions): {
  elementRef: RefObject<HTMLElement>
} {
  const elementRef = useRef<HTMLElement>(null)
  const touchStartRef = useRef<TouchPosition | null>(null)

  const { onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, minDistance = 50, maxTime = 300 } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return

      const touch = e.changedTouches[0]
      const touchEnd = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      }

      const deltaX = touchEnd.x - touchStartRef.current.x
      const deltaY = touchEnd.y - touchStartRef.current.y
      const deltaTime = touchEnd.time - touchStartRef.current.time

      // Check if swipe is within time limit
      if (deltaTime > maxTime) {
        touchStartRef.current = null
        return
      }

      const absDeltaX = Math.abs(deltaX)
      const absDeltaY = Math.abs(deltaY)

      // Check if swipe distance is sufficient
      if (Math.max(absDeltaX, absDeltaY) < minDistance) {
        touchStartRef.current = null
        return
      }

      // Determine swipe direction
      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0 && onSwipeRight) {
          onSwipeRight()
        } else if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft()
        }
      } else {
        // Vertical swipe
        if (deltaY > 0 && onSwipeDown) {
          onSwipeDown()
        } else if (deltaY < 0 && onSwipeUp) {
          onSwipeUp()
        }
      }

      touchStartRef.current = null
    }

    const handleTouchMove = (e: TouchEvent) => {
      // Prevent default to avoid scrolling during swipe detection
      if (touchStartRef.current) {
        e.preventDefault()
      }
    }

    element.addEventListener("touchstart", handleTouchStart, { passive: true })
    element.addEventListener("touchend", handleTouchEnd, { passive: true })
    element.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      element.removeEventListener("touchstart", handleTouchStart)
      element.removeEventListener("touchend", handleTouchEnd)
      element.removeEventListener("touchmove", handleTouchMove)
    }
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, minDistance, maxTime])

  return { elementRef }
}
