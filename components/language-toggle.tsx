"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase font-bold">{language}</span>
    </Button>
  )
}
