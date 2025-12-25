"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.agents": "AI Agents",
    "nav.systems": "Systems",
    "nav.products": "Products",
    "nav.clients": "Clients",
    "nav.contact": "Contact",
    "nav.capabilities": "Capabilities",
    "nav.outcomes": "Outcomes",
    "nav.about": "About",
    "nav.pricing": "Pricing",
    "nav.services": "Services",

    // Hero Section
    "hero.badge": "Trusted by 500+ companies",
    "hero.title": "AI Orchestration Made Simple",
    "hero.subtitle": "Connect agents, automate workflows, and scale intelligent systems in minutes.",
    "hero.cta1": "Start Building",
    "hero.cta2": "See Demo",
    "hero.benefit1": "99.99% Uptime",
    "hero.benefit2": "Deploy in Minutes",
    "hero.benefit3": "Production Ready",
    "hero.stat1_label": "Active Agents",
    "hero.stat1_value": "47",
    "hero.stat2_label": "Workflows Running",
    "hero.stat2_value": "128",
    "hero.stat3_label": "Success Rate",
    "hero.stat3_value": "99.8%",

    // Section Headers
    "sections.core_title": "The N3uralia Core",
    "sections.core_subtitle": "Five interconnected systems orchestrated as one",

    "sections.capabilities_title": "Five Doors Into AI",
    "sections.capabilities_subtitle": "Complete capabilities for every part of your infrastructure",

    "sections.outcomes_title": "Real Outcomes",
    "sections.outcomes_subtitle": "From cities to enterprises, proven impact",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.agents": "Agentes IA",
    "nav.systems": "Sistemas",
    "nav.products": "Productos",
    "nav.clients": "Clientes",
    "nav.contact": "Contacto",
    "nav.capabilities": "Capacidades",
    "nav.outcomes": "Resultados",
    "nav.about": "Acerca de",
    "nav.pricing": "Precios",
    "nav.services": "Servicios",

    // Hero Section
    "hero.badge": "Confiado por 500+ empresas",
    "hero.title": "Orquestación de IA Simplificada",
    "hero.subtitle": "Conecta agentes, automatiza flujos y escala sistemas inteligentes en minutos.",
    "hero.cta1": "Comenzar",
    "hero.cta2": "Ver Demo",
    "hero.benefit1": "99.99% Uptime",
    "hero.benefit2": "Deploy en Minutos",
    "hero.benefit3": "Listo para Producción",
    "hero.stat1_label": "Agentes Activos",
    "hero.stat1_value": "47",
    "hero.stat2_label": "Flujos en Ejecución",
    "hero.stat2_value": "128",
    "hero.stat3_label": "Tasa de Éxito",
    "hero.stat3_value": "99.8%",

    // Section Headers
    "sections.core_title": "El Núcleo de N3uralia",
    "sections.core_subtitle": "Cinco sistemas interconectados orquestados como uno",

    "sections.capabilities_title": "Cinco Puertas hacia la IA",
    "sections.capabilities_subtitle": "Capacidades completas para cada parte de tu infraestructura",

    "sections.outcomes_title": "Resultados Reales",
    "sections.outcomes_subtitle": "De ciudades a empresas, impacto probado",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language
      if (saved === "en" || saved === "es") {
        setLanguageState(saved)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be within LanguageProvider")
  return context
}
