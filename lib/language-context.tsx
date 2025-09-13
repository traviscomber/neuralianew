"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Hero section
    "hero.title": "Building Bridges to AI",
    "hero.subtitle1":
      "At N3uralia, we specialize in cutting-edge AI solutions designed to elevate your business to new heights.",
    "hero.subtitle2":
      "Our intuitive platforms harness the power of artificial intelligence, transforming complex data into actionable insights.",
    "hero.cta.explore": "Explore Solutions",
    "hero.cta.contact": "Contact Human",

    // Services section
    "services.agents.title": "AGENTS and AUTOMATIONS",
    "services.multitask.title": "MULTITASK AGENTIC SYSTEMS",
    "services.fullstack.title": "FULL STACK PROJECTS",
    "services.readmore": "Read more",

    // Flow section
    "flow.title": "How It Works",
    "flow.datasource": "Data Source",
    "flow.datasource.desc": "Use your cloud or create new Database from scratch",
    "flow.aiapi": "AI API Connection",
    "flow.aiapi.desc": "Connect or create AI tool and process data",
    "flow.outputs": "Multiple Outputs",
    "flow.outputs.desc": "Collect results or create an automated action",

    // Solutions section
    "solutions.title": "Solutions",
    "solutions.subtitle": "Popular AI Agents",

    // Testimonials section
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Real feedback from real businesses",

    // Clients section
    "clients.title": "Our Clients",
    "clients.subtitle": "Proven results across industries",

    // Products section
    "products.title": "Innovation Lab",
    "products.subtitle": "Cutting-edge AI products",

    // Deploy section
    "deploy.title": "Deploy Your AI Agent",

    // Trust section
    "trust.title": "Trust & Reliability",

    // FAQ section
    "faq.title": "Got Questions?",

    // Contact section
    "contact.title": "Contact Us",
  },
  es: {
    // Hero section
    "hero.title": "Construyendo Puentes hacia la IA",
    "hero.subtitle1":
      "En N3uralia, nos especializamos en soluciones de IA de vanguardia diseñadas para elevar tu negocio a nuevas alturas.",
    "hero.subtitle2":
      "Nuestras plataformas intuitivas aprovechan el poder de la inteligencia artificial, transformando datos complejos en insights accionables.",
    "hero.cta.explore": "Explorar Soluciones",
    "hero.cta.contact": "Contactar Humano",

    // Services section
    "services.agents.title": "AGENTES y AUTOMATIZACIONES",
    "services.multitask.title": "SISTEMAS AGÉNTICOS MULTITAREA",
    "services.fullstack.title": "PROYECTOS FULL STACK",
    "services.readmore": "Leer más",

    // Flow section
    "flow.title": "Cómo Funciona",
    "flow.datasource": "Fuente de Datos",
    "flow.datasource.desc": "Usa tu nube o crea nueva Base de Datos desde cero",
    "flow.aiapi": "Conexión API IA",
    "flow.aiapi.desc": "Conecta o crea herramienta IA y procesa datos",
    "flow.outputs": "Múltiples Salidas",
    "flow.outputs.desc": "Recopila resultados o crea una acción automatizada",

    // Solutions section
    "solutions.title": "Soluciones",
    "solutions.subtitle": "Agentes de IA Populares",

    // Testimonials section
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.subtitle": "Comentarios reales de empresas reales",

    // Clients section
    "clients.title": "Nuestros Clientes",
    "clients.subtitle": "Resultados comprobados en diversas industrias",

    // Products section
    "products.title": "Laboratorio de Innovación",
    "products.subtitle": "Productos de IA de vanguardia",

    // Deploy section
    "deploy.title": "Despliega tu Agente IA",

    // Trust section
    "trust.title": "Confianza y Confiabilidad",

    // FAQ section
    "faq.title": "¿Tienes Preguntas?",

    // Contact section
    "contact.title": "Contáctanos",
  },
}

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

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
