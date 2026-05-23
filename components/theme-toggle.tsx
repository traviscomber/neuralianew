"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme || "dark"

  const handleClick = () => {
    if (currentTheme === "light") {
      setTheme("dark")
    } else if (currentTheme === "dark") {
      setTheme("black")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (currentTheme) {
      case "dark":
        return <Moon className="w-4 h-4" />
      case "black":
        return <div className="w-4 h-4 rounded-full bg-black dark:bg-white" />
      default:
        return <Sun className="w-4 h-4" />
    }
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center w-9 h-9 rounded border border-border bg-background hover:bg-muted transition-colors"
      title="Toggle theme"
      type="button"
    >
      {getIcon()}
    </button>
  )
}
