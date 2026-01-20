"use client"

import { useState } from "react"

export function useLanguage() {
  const [language] = useState("es")
  
  return {
    language,
    setLanguage: () => {}, // no-op since we're using local state
  }
}
