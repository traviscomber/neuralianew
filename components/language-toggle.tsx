"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === "en" ? "ES" : "EN"}</span>
    </Button>
  )
}
