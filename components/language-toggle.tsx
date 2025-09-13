"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
          language === "en" ? "bg-black text-white shadow-sm" : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        }`}
      >
        EN
      </Button>
      <Button
        variant={language === "es" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("es")}
        className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
          language === "es" ? "bg-black text-white shadow-sm" : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        }`}
      >
        ES
      </Button>
    </div>
  )
}
