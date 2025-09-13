"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setLanguage(language === "en" ? "es" : "en")
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      onKeyDown={handleKeyDown}
      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-50 focus:bg-gray-50 px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"} language`}
      role="button"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{language === "en" ? "ES" : "EN"}</span>
    </Button>
  )
}
