"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-sm font-medium transition-colors ${
          language === "en" ? "text-black" : "text-gray-500 hover:text-gray-700"
        }`}
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => setLanguage("es")}
        className={`px-2 py-1 text-sm font-medium transition-colors ${
          language === "es" ? "text-black" : "text-gray-500 hover:text-gray-700"
        }`}
      >
        ES
      </button>
    </div>
  )
}
