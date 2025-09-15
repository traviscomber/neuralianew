"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent font-medium"
    >
      {language === "en" ? "ES" : "EN"}
    </Button>
  )
}
