"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-white/10 rounded-lg p-1">
      <Globe className="w-4 h-4 text-white mr-2" />
      <button
        onClick={() => setLanguage("es")}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          language === "es" ? "bg-white text-black" : "text-white hover:text-gray-300"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          language === "en" ? "bg-white text-black" : "text-white hover:text-gray-300"
        }`}
      >
        EN
      </button>
    </div>
  )
}
