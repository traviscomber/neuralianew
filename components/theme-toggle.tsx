"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="w-9 h-9 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors duration-300"
      >
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"
  const isBlack = theme === "black"

  const handleThemeChange = () => {
    if (!isDark) {
      // Light -> Dark
      setTheme("dark")
    } else if (isDark && !isBlack) {
      // Dark -> Black
      setTheme("black")
    } else {
      // Black -> Light
      setTheme("light")
    }
  }

  const getThemeLabel = () => {
    if (isBlack) return "Black"
    if (isDark) return "Dark"
    return "Light"
  }

  const getThemeIcon = () => {
    if (isBlack) return "⚫"
    if (isDark) return "🌙"
    return "☀️"
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleThemeChange}
      className="w-9 h-9 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors duration-300"
      title={`Theme: ${getThemeLabel()}. Click to cycle through Light → Dark → Black`}
    >
      {isDark ? (
        isBlack ? (
          <span className="text-lg">⚫</span>
        ) : (
          <Moon className="h-4 w-4 text-slate-700 dark:text-slate-300 transition-colors duration-300" />
        )
      ) : (
        <Sun className="h-4 w-4 text-slate-700 dark:text-slate-300 transition-colors duration-300" />
      )}
      <span className="sr-only">Toggle theme. Current: {getThemeLabel()}</span>
    </Button>
  )
}
