"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-0 px-2 sm:px-3 py-1 sm:py-2 min-h-[40px] sm:min-h-[44px] text-sm sm:text-base font-medium"
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
    >
      {language === "en" ? "ES" : "EN"}
    </Button>
  )
}
