"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-200"
    >
      <Globe className="w-4 h-4 mr-2" />
      <span className="font-medium">{language === "en" ? "ES" : "EN"}</span>
    </Button>
  )
}
