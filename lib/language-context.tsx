"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const translations = {
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.clients": "Clients",
    "nav.contact": "Contact",
    "nav.startProject": "Start Project",

    // Hero
    "hero.badge": "Enterprise AI Solutions",
    "hero.title": "Building Bridges to",
    "hero.titleBold": "AI",
    "hero.subtitle":
      "At N3uralia, we specialize in cutting-edge AI solutions designed to elevate your business to new heights. Our intuitive platforms harness the power of artificial intelligence, transforming complex data into actionable insights.",
    "hero.cta.primary": "Explore Solutions",
    "hero.cta.secondary": "Contact Human",

    // Services
    "services.badge": "Our Services",
    "services.title": "AI-Powered",
    "services.titleBold": "Solutions",
    "services.subtitle":
      "Comprehensive AI solutions designed to transform your business operations and enhance customer experiences across all touchpoints.",
  },
  es: {
    // Navigation
    "nav.services": "Servicios",
    "nav.process": "Proceso",
    "nav.clients": "Clientes",
    "nav.contact": "Contacto",
    "nav.startProject": "Iniciar Proyecto",

    // Hero
    "hero.badge": "Soluciones IA Empresariales",
    "hero.title": "Construyendo Puentes hacia la",
    "hero.titleBold": "IA",
    "hero.subtitle":
      "En N3uralia, nos especializamos en soluciones de IA de vanguardia diseñadas para elevar tu negocio a nuevas alturas. Nuestras plataformas intuitivas aprovechan el poder de la inteligencia artificial, transformando datos complejos en insights accionables.",
    "hero.cta.primary": "Explorar Soluciones",
    "hero.cta.secondary": "Contactar Humano",

    // Services
    "services.badge": "Nuestros Servicios",
    "services.title": "Soluciones",
    "services.titleBold": "Potenciadas por IA",
    "services.subtitle":
      "Soluciones integrales de IA diseñadas para transformar las operaciones de tu negocio y mejorar las experiencias del cliente en todos los puntos de contacto.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
