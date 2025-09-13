"use client"

import type React from "react"

import { useRef, useCallback } from "react"

interface SwipeGestureOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  threshold?: number
  maxTime?: number
}

export function useSwipeGestures({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  maxTime = 300,
}: SwipeGestureOptions) {
  const touchStart = useRef<{ x: number; y: number; time: number } | null>(null)

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    }
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    // Prevent default to avoid scrolling while swiping
    if (touchStart.current) {
      e.preventDefault()
    }
  }, [])

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart.current) return

      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - touchStart.current.x
      const deltaY = touch.clientY - touchStart.current.y
      const deltaTime = Date.now() - touchStart.current.time

      // Check if the swipe was fast enough
      if (deltaTime > maxTime) {
        touchStart.current = null
        return
      }

      const absDeltaX = Math.abs(deltaX)
      const absDeltaY = Math.abs(deltaY)

      // Determine if it's a horizontal or vertical swipe
      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (absDeltaX > threshold) {
          if (deltaX > 0) {
            onSwipeRight?.()
          } else {
            onSwipeLeft?.()
          }
        }
      } else {
        // Vertical swipe
        if (absDeltaY > threshold) {
          if (deltaY > 0) {
            onSwipeDown?.()
          } else {
            onSwipeUp?.()
          }
        }
      }

      touchStart.current = null
    },
    [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold, maxTime],
  )

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }
}
