"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`text-xs px-3 py-1 h-7 ${
          language === "en"
            ? "bg-white text-gray-900 hover:bg-white/90"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
      >
        EN
      </Button>
      <Button
        variant={language === "es" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("es")}
        className={`text-xs px-3 py-1 h-7 ${
          language === "es"
            ? "bg-white text-gray-900 hover:bg-white/90"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
      >
        ES
      </Button>
    </div>
  )
}
