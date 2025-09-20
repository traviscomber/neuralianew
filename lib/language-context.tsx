"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.agents": "AI Agents",
    "nav.systems": "Systems",
    "nav.products": "Products",
    "nav.services": "Services",
    "nav.clients": "Clients",
    "nav.contact": "Contact",
    "nav.language": "Language",

    // Hero Section
    "hero.title": "Transform Your Business with AI Agents",
    "hero.subtitle":
      "Intelligent automation solutions that work 24/7 to boost your productivity and reduce operational costs",
    "hero.cta": "Start Free Trial",
    "hero.demo": "Request Demo",
    "hero.chat.placeholder": "Ask me about AI agents...",
    "hero.chat.send": "Send",

    // Features Section
    "features.title": "Why Choose Our AI Agents?",
    "features.subtitle": "Discover the power of intelligent automation",
    "features.leadQualification.title": "Lead Qualification",
    "features.leadQualification.description": "Automatically qualify and score leads based on your criteria",
    "features.customerSupport.title": "24/7 Customer Support",
    "features.customerSupport.description": "Provide instant support to your customers around the clock",
    "features.contentCreator.title": "Content Creation",
    "features.contentCreator.description": "Generate high-quality content for your marketing campaigns",
    "features.workflowAutomation.title": "Workflow Automation",
    "features.workflowAutomation.description": "Streamline your business processes with intelligent automation",
    "features.dataEntry.title": "Data Entry Assistant",
    "features.dataEntry.description": "Automate data entry tasks with high accuracy and speed",
    "features.salesAssistant.title": "AI Sales Assistant",
    "features.salesAssistant.description": "Boost your sales with AI-powered sales assistance",

    // Systems Section
    "systems.title": "AI Systems & Architecture",
    "systems.subtitle": "Enterprise-grade AI infrastructure built for scale",
    "systems.agentsAutomations.title": "AI Agents & Automations",
    "systems.agentsAutomations.description": "Deploy intelligent agents that handle complex tasks autonomously",
    "systems.ownEcosystem.title": "Your Own AI Ecosystem",
    "systems.ownEcosystem.description": "Build and manage your custom AI ecosystem with full control",
    "systems.fullstack.title": "Full-Stack AI Solutions",
    "systems.fullstack.description": "Complete AI solutions from data processing to user interfaces",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive AI solutions for your business needs",
    "services.aiAgentDevelopment": "AI Agent Development",
    "services.processAutomation": "Process Automation",
    "services.enterpriseIntegration": "Enterprise Integration",

    // Clients Section
    "clients.title": "Trusted by Industry Leaders",
    "clients.subtitle": "Join hundreds of companies that have transformed their operations with our AI solutions",

    // Contact Section
    "contact.title": "Ready to Get Started?",
    "contact.subtitle": "Contact us today to discuss your AI automation needs",
    "contact.cta": "Contact Us",
    "contact.whatsapp": "WhatsApp",

    // Footer
    "footer.description": "Transform your business with intelligent AI agents and automation systems.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "All rights reserved.",

    // Common
    "common.learnMore": "Learn More",
    "common.getStarted": "Get Started",
    "common.viewAll": "View All",
    "common.readMore": "Read More",
    "common.close": "Close",
    "common.loading": "Loading...",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.agents": "Agentes IA",
    "nav.systems": "Sistemas",
    "nav.products": "Productos",
    "nav.services": "Servicios",
    "nav.clients": "Clientes",
    "nav.contact": "Contacto",
    "nav.language": "Idioma",

    // Hero Section
    "hero.title": "Transforma Tu Negocio con Agentes de IA",
    "hero.subtitle":
      "Soluciones de automatización inteligente que trabajan 24/7 para aumentar tu productividad y reducir costos operativos",
    "hero.cta": "Prueba Gratuita",
    "hero.demo": "Solicitar Demo",
    "hero.chat.placeholder": "Pregúntame sobre agentes de IA...",
    "hero.chat.send": "Enviar",

    // Features Section
    "features.title": "¿Por Qué Elegir Nuestros Agentes de IA?",
    "features.subtitle": "Descubre el poder de la automatización inteligente",
    "features.leadQualification.title": "Calificación de Leads",
    "features.leadQualification.description": "Califica y puntúa leads automáticamente según tus criterios",
    "features.customerSupport.title": "Soporte 24/7",
    "features.customerSupport.description": "Brinda soporte instantáneo a tus clientes las 24 horas",
    "features.contentCreator.title": "Creación de Contenido",
    "features.contentCreator.description": "Genera contenido de alta calidad para tus campañas de marketing",
    "features.workflowAutomation.title": "Automatización de Flujos",
    "features.workflowAutomation.description": "Optimiza tus procesos empresariales con automatización inteligente",
    "features.dataEntry.title": "Asistente de Entrada de Datos",
    "features.dataEntry.description": "Automatiza tareas de entrada de datos con alta precisión y velocidad",
    "features.salesAssistant.title": "Asistente de Ventas IA",
    "features.salesAssistant.description": "Impulsa tus ventas con asistencia de ventas potenciada por IA",

    // Systems Section
    "systems.title": "Sistemas y Arquitectura de IA",
    "systems.subtitle": "Infraestructura de IA de nivel empresarial construida para escalar",
    "systems.agentsAutomations.title": "Agentes IA y Automatizaciones",
    "systems.agentsAutomations.description":
      "Despliega agentes inteligentes que manejan tareas complejas de forma autónoma",
    "systems.ownEcosystem.title": "Tu Propio Ecosistema de IA",
    "systems.ownEcosystem.description": "Construye y gestiona tu ecosistema de IA personalizado con control total",
    "systems.fullstack.title": "Soluciones IA Full-Stack",
    "systems.fullstack.description": "Soluciones IA completas desde procesamiento de datos hasta interfaces de usuario",

    // Services Section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones IA integrales para las necesidades de tu negocio",
    "services.aiAgentDevelopment": "Desarrollo de Agentes IA",
    "services.processAutomation": "Automatización de Procesos",
    "services.enterpriseIntegration": "Integración Empresarial",

    // Clients Section
    "clients.title": "Confiado por Líderes de la Industria",
    "clients.subtitle":
      "Únete a cientos de empresas que han transformado sus operaciones con nuestras soluciones de IA",

    // Contact Section
    "contact.title": "¿Listo para Comenzar?",
    "contact.subtitle": "Contáctanos hoy para discutir tus necesidades de automatización IA",
    "contact.cta": "Contáctanos",
    "contact.whatsapp": "WhatsApp",

    // Footer
    "footer.description": "Transforma tu negocio con agentes IA inteligentes y sistemas de automatización.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.services": "Servicios",
    "footer.legal": "Legal",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.rights": "Todos los derechos reservados.",

    // Common
    "common.learnMore": "Saber Más",
    "common.getStarted": "Comenzar",
    "common.viewAll": "Ver Todo",
    "common.readMore": "Leer Más",
    "common.close": "Cerrar",
    "common.loading": "Cargando...",
  },
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // Load language from localStorage or detect from browser
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguageState(savedLanguage)
    } else {
      // Detect from browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith("es")) {
        setLanguageState("es")
      } else {
        setLanguageState("en")
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
