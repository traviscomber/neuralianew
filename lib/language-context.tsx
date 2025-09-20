"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.aiAgents": "AI Agents",
    "nav.systems": "Systems",
    "nav.products": "Products",
    "nav.clients": "Clients",
    "nav.contacts": "Contacts",
    "nav.login": "Login",
    "nav.signup": "Sign Up",
    "nav.dashboard": "Dashboard",
    "nav.logout": "Logout",

    // Hero Section
    "hero.title": "AI Agents & Automations",
    "hero.subtitle": "Build your own ecosystem",
    "hero.description":
      "Create intelligent AI agents that automate your business processes and integrate seamlessly with your existing systems.",
    "hero.cta.primary": "Start Building",
    "hero.cta.secondary": "Watch Demo",
    "hero.chat.placeholder": "Ask me anything about AI agents...",
    "hero.chat.send": "Send",

    // Features
    "features.title": "Powerful Features",
    "features.subtitle": "Everything you need to build and deploy AI agents",
    "features.leadQualification.title": "Lead Qualification",
    "features.leadQualification.description": "Automatically qualify and score leads using AI-powered conversations",
    "features.customerSupport.title": "Customer Support",
    "features.customerSupport.description": "24/7 intelligent customer support with human-like responses",
    "features.contentCreator.title": "Content Creator",
    "features.contentCreator.description": "Generate high-quality content for marketing and communications",
    "features.workflowAutomation.title": "Workflow Automation",
    "features.workflowAutomation.description": "Automate complex business processes with intelligent decision making",
    "features.dataEntry.title": "Data Entry Assistant",
    "features.dataEntry.description": "Streamline data entry and processing with AI accuracy",
    "features.salesAssistant.title": "AI Sales Assistant",
    "features.salesAssistant.description": "Boost sales with intelligent lead nurturing and follow-ups",

    // Clients
    "clients.title": "Trusted by Industry Leaders",
    "clients.subtitle": "Companies worldwide trust our AI solutions",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Ready to transform your business with AI?",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",

    // Footer
    "footer.company": "Company",
    "footer.products": "Products",
    "footer.resources": "Resources",
    "footer.legal": "Legal",
    "footer.about": "About Us",
    "footer.careers": "Careers",
    "footer.blog": "Blog",
    "footer.documentation": "Documentation",
    "footer.support": "Support",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "All rights reserved.",

    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.success": "Success!",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.close": "Close",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.sort": "Sort",
    "common.export": "Export",
    "common.import": "Import",
  },
  es: {
    // Navigation
    "nav.aiAgents": "Agentes IA",
    "nav.systems": "Sistemas",
    "nav.products": "Productos",
    "nav.clients": "Clientes",
    "nav.contacts": "Contactos",
    "nav.login": "Iniciar Sesión",
    "nav.signup": "Registrarse",
    "nav.dashboard": "Panel",
    "nav.logout": "Cerrar Sesión",

    // Hero Section
    "hero.title": "Agentes IA y Automatizaciones",
    "hero.subtitle": "Construye tu propio ecosistema",
    "hero.description":
      "Crea agentes de IA inteligentes que automaticen tus procesos de negocio e integren perfectamente con tus sistemas existentes.",
    "hero.cta.primary": "Comenzar a Construir",
    "hero.cta.secondary": "Ver Demo",
    "hero.chat.placeholder": "Pregúntame sobre agentes de IA...",
    "hero.chat.send": "Enviar",

    // Features
    "features.title": "Características Poderosas",
    "features.subtitle": "Todo lo que necesitas para construir y desplegar agentes de IA",
    "features.leadQualification.title": "Calificación de Leads",
    "features.leadQualification.description":
      "Califica y puntúa leads automáticamente usando conversaciones impulsadas por IA",
    "features.customerSupport.title": "Soporte al Cliente",
    "features.customerSupport.description":
      "Soporte inteligente al cliente 24/7 con respuestas similares a las humanas",
    "features.contentCreator.title": "Creador de Contenido",
    "features.contentCreator.description": "Genera contenido de alta calidad para marketing y comunicaciones",
    "features.workflowAutomation.title": "Automatización de Flujos",
    "features.workflowAutomation.description":
      "Automatiza procesos de negocio complejos con toma de decisiones inteligente",
    "features.dataEntry.title": "Asistente de Entrada de Datos",
    "features.dataEntry.description": "Optimiza la entrada y procesamiento de datos con precisión de IA",
    "features.salesAssistant.title": "Asistente de Ventas IA",
    "features.salesAssistant.description": "Impulsa las ventas con nutrición inteligente de leads y seguimientos",

    // Clients
    "clients.title": "Confiado por Líderes de la Industria",
    "clients.subtitle": "Empresas en todo el mundo confían en nuestras soluciones de IA",

    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.subtitle": "¿Listo para transformar tu negocio con IA?",
    "contact.name": "Nombre",
    "contact.email": "Correo Electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",

    // Footer
    "footer.company": "Empresa",
    "footer.products": "Productos",
    "footer.resources": "Recursos",
    "footer.legal": "Legal",
    "footer.about": "Acerca de Nosotros",
    "footer.careers": "Carreras",
    "footer.blog": "Blog",
    "footer.documentation": "Documentación",
    "footer.support": "Soporte",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.rights": "Todos los derechos reservados.",

    // Common
    "common.loading": "Cargando...",
    "common.error": "Ocurrió un error",
    "common.success": "¡Éxito!",
    "common.cancel": "Cancelar",
    "common.save": "Guardar",
    "common.edit": "Editar",
    "common.delete": "Eliminar",
    "common.close": "Cerrar",
    "common.back": "Atrás",
    "common.next": "Siguiente",
    "common.previous": "Anterior",
    "common.search": "Buscar",
    "common.filter": "Filtrar",
    "common.sort": "Ordenar",
    "common.export": "Exportar",
    "common.import": "Importar",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

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
