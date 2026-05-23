"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show placeholder while mounting to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="w-9 h-9 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors duration-300"
        disabled
      >
        <Moon className="h-4 w-4" />
      </Button>
    )
  }

  // Default to dark if theme is undefined
  const currentTheme = theme || "dark"

  const handleThemeChange = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (currentTheme === "light") {
      setTheme("dark")
    } else if (currentTheme === "dark") {
      setTheme("black")
    } else {
      setTheme("light")
    }
  }

  const getThemeIcon = () => {
    switch (currentTheme) {
      case "dark":
        return <Moon className="h-4 w-4 text-slate-400 transition-colors duration-300" />
      case "black":
        return <div className="w-4 h-4 rounded-full bg-black dark:bg-white" />
      case "light":
      default:
        return <Sun className="h-4 w-4 text-amber-500 transition-colors duration-300" />
    }
  }

  const getThemeLabel = () => {
    switch (currentTheme) {
      case "dark":
        return "Dark"
      case "black":
        return "Black"
      case "light":
      default:
        return "Light"
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleThemeChange}
      className="w-9 h-9 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors duration-300 cursor-pointer"
      title={`Current theme: ${getThemeLabel()}. Click to cycle: Light → Dark → Black`}
      type="button"
    >
      {getThemeIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
