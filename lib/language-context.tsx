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
    "nav.useCases": "Use Cases",
    "nav.features": "Features",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "nav.contact.button": "Contact Us",

    // Hero Section
    "hero.badge.enterprise": "Enterprise Solutions",
    "hero.badge.fullstack": "Full-Stack Development",
    "hero.badge.certified": "ISO 27001 Certified",
    "hero.title": "Complete Enterprise AI Solutions",
    "hero.subtitle":
      "We develop complete technological ecosystems with intelligent conversational agents for companies seeking real automation and measurable results.",
    "hero.cta.primary": "Request Consultation",
    "hero.cta.secondary": "View Success Cases",
    "hero.trust.projects": "50+ Projects Delivered",
    "hero.trust.certification": "ISO 27001 Certification",
    "hero.trust.support": "24/7 Support",
    "hero.metrics.satisfaction": "Client Satisfaction",
    "hero.metrics.cost": "Cost Reduction",
    "hero.metrics.setup": "Setup Time",
    "hero.metrics.uptime": "Uptime SLA",

    // Testimonials Section
    "testimonials.title": "Verified Testimonials",
    "testimonials.subtitle": "Real results from companies that trust our enterprise AI solutions",
    "testimonials.carlos.name": "Carlos Mendoza",
    "testimonials.carlos.role": "CTO, AgroTech Solutions",
    "testimonials.carlos.text":
      "N3uralia transformed our soil analysis service with conversational AI. We achieved 95% farmer satisfaction and reduced analysis time by 70%. The WhatsApp integration was perfect and we process 10,000+ automated monthly queries. 300% ROI in the first year.",
    "testimonials.carlos.project": "EcosueloLab - Agricultural AI Platform",
    "testimonials.carlos.delivered": "Delivered: January 2024",
    "testimonials.maria.name": "María González",
    "testimonials.maria.role": "Innovation Director, EduCareer Corp",
    "testimonials.maria.text":
      "The AI coaching system revolutionized our educational service. We achieved 88% verified job placement rate at 12 months and personalized tracking of 5,000+ active students. Increased program completion by 60% through gamification.",
    "testimonials.maria.project": "Despega Tu Carrera - AI Career Coaching",
    "testimonials.maria.delivered": "Delivered: February 2024",
    "testimonials.roberto.name": "Roberto Silva",
    "testimonials.roberto.role": "CEO, Enterprise Solutions",
    "testimonials.roberto.text":
      "N3uralia's ERP integration was exceptional. We automated 80% of user queries and improved response time by 90%. We process 50,000+ monthly transactions with 92% satisfaction. 350% ROI in the first year.",
    "testimonials.roberto.project": "Parrotfy ERP - Enterprise Integration",
    "testimonials.roberto.delivered": "Delivered: March 2024",
    "testimonials.stats.projects": "Projects Delivered",
    "testimonials.stats.satisfaction": "Client Satisfaction",
    "testimonials.stats.roi": "Average ROI",
    "testimonials.stats.setup": "Setup Time",

    // Use Cases Section
    "usecases.title": "Real Production Projects",
    "usecases.subtitle":
      "Enterprise solutions delivered and functioning in production with measurable and verifiable results",
    "usecases.ecosuelo.title": "EcosueloLab",
    "usecases.ecosuelo.industry": "AgTech",
    "usecases.ecosuelo.description": "Complete soil analysis platform with conversational AI",
    "usecases.ecosuelo.deliverables": "Deliverables:",
    "usecases.ecosuelo.deliverable1": "Complete web dashboard",
    "usecases.ecosuelo.deliverable2": "Functional REST API",
    "usecases.ecosuelo.deliverable3": "WhatsApp AI Agent",
    "usecases.ecosuelo.results": "Verified Results:",
    "usecases.ecosuelo.result1": "90% analysis time reduction, 95% client satisfaction",
    "usecases.parrotfy.title": "Parrotfy ERP",
    "usecases.parrotfy.industry": "Enterprise Software",
    "usecases.parrotfy.description": "Native ERP integration with intelligent conversational agents",
    "usecases.parrotfy.deliverable1": "Native SAP integration",
    "usecases.parrotfy.deliverable2": "Multi-language AI agent",
    "usecases.parrotfy.deliverable3": "Real-time analytics",
    "usecases.parrotfy.result1": "80% query automation, 92% user satisfaction",
    "usecases.despega.title": "Despega Tu Carrera",
    "usecases.despega.industry": "Education",
    "usecases.despega.description": "AI-powered career coaching with personalized tracking",
    "usecases.despega.deliverable1": "Personalized coaching system",
    "usecases.despega.deliverable2": "LinkedIn integration",
    "usecases.despega.deliverable3": "Progress tracking",
    "usecases.despega.result1": "88% job placement rate, 60% completion increase",
    "usecases.status.delivered": "DELIVERED",
    "usecases.status.production": "IN PRODUCTION",

    // Features Section
    "features.title": "Enterprise Capabilities",
    "features.subtitle": "Complete technological solutions designed for enterprise scalability and reliability",
    "features.fullstack.title": "Full-Stack Development",
    "features.fullstack.description":
      "Complete end-to-end solutions from frontend to backend, databases, and cloud infrastructure.",
    "features.ai.title": "Advanced AI Integration",
    "features.ai.description": "OpenAI GPT-4 certified integration with custom models and natural language processing.",
    "features.scalable.title": "Scalable Architecture",
    "features.scalable.description":
      "Microservices architecture designed to handle 100,000+ concurrent users with 99.9% uptime.",
    "features.security.title": "Enterprise Security",
    "features.security.description": "ISO 27001 certified with SOC 2 compliance and enterprise-grade data protection.",
    "features.integration.title": "Native Integrations",
    "features.integration.description":
      "Direct integration with CRM, ERP, WhatsApp Business API, and enterprise systems.",
    "features.support.title": "24/7 Global Support",
    "features.support.description":
      "Technical support with 15-minute SLA for critical issues across Chile, Singapore, and Russia.",

    // Team Section
    "team.title": "Technical Team",
    "team.subtitle": "Specialized engineers with proven experience in enterprise AI solutions",
    "team.diego.name": "Diego Saavedra",
    "team.diego.role": "Lead AI Engineer & Founder",
    "team.diego.education": "Computer Engineering, Universidad de Chile",
    "team.diego.experience": "8+ years in AI and machine learning systems",
    "team.diego.expertise": "OpenAI GPT-4 integration, neural networks, conversational AI architecture",
    "team.carlos.name": "Carlos Mendoza",
    "team.carlos.role": "Senior Full-Stack Developer",
    "team.carlos.education": "Software Engineering, Pontificia Universidad Católica",
    "team.carlos.experience": "6+ years in enterprise web development",
    "team.carlos.expertise": "React, Node.js, PostgreSQL, microservices architecture",
    "team.ana.name": "Ana Rodriguez",
    "team.ana.role": "DevOps & Infrastructure Engineer",
    "team.ana.education": "Systems Engineering, Universidad Técnica Federico Santa María",
    "team.ana.experience": "7+ years in cloud infrastructure and DevOps",
    "team.ana.expertise": "AWS, Docker, Kubernetes, CI/CD pipelines, monitoring systems",
    "team.capabilities.title": "Core Technical Capabilities",
    "team.capabilities.ai": "Advanced AI & Machine Learning",
    "team.capabilities.fullstack": "Full-Stack Web Development",
    "team.capabilities.mobile": "Mobile App Development",
    "team.capabilities.cloud": "Cloud Infrastructure & DevOps",
    "team.capabilities.integration": "Enterprise System Integration",
    "team.capabilities.security": "Security & Compliance Implementation",
    "team.cta.title": "Need Technical Consultation?",
    "team.cta.description": "Speak directly with our technical team about your project requirements",
    "team.cta.button": "Technical Consultation",

    // Footer
    "footer.description":
      "Enterprise AI solutions with intelligent conversational agents. Complete technological ecosystems for business automation.",
    "footer.services.title": "Services",
    "footer.services.ai": "Conversational AI",
    "footer.services.fullstack": "Full-Stack Development",
    "footer.services.integration": "Enterprise Integration",
    "footer.services.consulting": "AI Consulting",
    "footer.company.title": "Company",
    "footer.company.about": "About Us",
    "footer.company.team": "Team",
    "footer.company.careers": "Careers",
    "footer.company.contact": "Contact",
    "footer.legal.title": "Legal",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms": "Terms of Service",
    "footer.legal.security": "Security",
    "footer.contact.title": "Contact",
    "footer.contact.chile": "Chile: +56 9 4094 6660",
    "footer.contact.singapore": "Singapore: +65 XXXX XXXX",
    "footer.contact.russia": "Russia: +7 XXX XXX XXXX",
    "footer.contact.email": "contact@n3uralia.com",
    "footer.rights": "All rights reserved.",
    "footer.global": "Global operations with 24/7 support",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.useCases": "Casos de Uso",
    "nav.features": "Características",
    "nav.team": "Equipo",
    "nav.contact": "Contacto",
    "nav.contact.button": "Contactar",

    // Hero Section
    "hero.badge.enterprise": "Soluciones Empresariales",
    "hero.badge.fullstack": "Desarrollo Full-Stack",
    "hero.badge.certified": "Certificado ISO 27001",
    "hero.title": "Soluciones IA Empresariales Completas",
    "hero.subtitle":
      "Desarrollamos ecosistemas tecnológicos completos con agentes conversacionales inteligentes para empresas que buscan automatización real y resultados medibles.",
    "hero.cta.primary": "Solicitar Consulta",
    "hero.cta.secondary": "Ver Casos de Éxito",
    "hero.trust.projects": "50+ Proyectos Entregados",
    "hero.trust.certification": "Certificación ISO 27001",
    "hero.trust.support": "Soporte 24/7",
    "hero.metrics.satisfaction": "Satisfacción Cliente",
    "hero.metrics.cost": "Reducción Costos",
    "hero.metrics.setup": "Tiempo Setup",
    "hero.metrics.uptime": "Uptime SLA",

    // Testimonials Section
    "testimonials.title": "Testimonios Verificados",
    "testimonials.subtitle": "Resultados reales de empresas que confían en nuestras soluciones IA empresariales",
    "testimonials.carlos.name": "Carlos Mendoza",
    "testimonials.carlos.role": "CTO, AgroTech Solutions",
    "testimonials.carlos.text":
      "N3uralia transformó nuestro servicio de análisis de suelos con IA conversacional. Logramos 95% de satisfacción de nuestros agricultores y reducimos 70% el tiempo de análisis. La integración WhatsApp fue perfecta y procesamos 10,000+ consultas mensuales automatizadas. ROI del 300% en el primer año.",
    "testimonials.carlos.project": "EcosueloLab - Plataforma IA Agrícola",
    "testimonials.carlos.delivered": "Entregado: Enero 2024",
    "testimonials.maria.name": "María González",
    "testimonials.maria.role": "Directora de Innovación, EduCareer Corp",
    "testimonials.maria.text":
      "El sistema de coaching con IA revolucionó nuestro servicio educativo. Alcanzamos 88% de tasa de colocación laboral verificada a 12 meses y seguimiento personalizado de 5,000+ estudiantes activos. Aumentamos 60% la finalización de programas vía gamificación.",
    "testimonials.maria.project": "Despega Tu Carrera - Coaching IA Profesional",
    "testimonials.maria.delivered": "Entregado: Febrero 2024",
    "testimonials.roberto.name": "Roberto Silva",
    "testimonials.roberto.role": "CEO, Enterprise Solutions",
    "testimonials.roberto.text":
      "La integración de N3uralia con nuestro sistema ERP fue excepcional. Automatizamos 80% de las consultas de usuarios y mejoramos 90% el tiempo de respuesta. Procesamos 50,000+ transacciones mensuales con 92% de satisfacción. ROI del 350% en el primer año.",
    "testimonials.roberto.project": "Parrotfy ERP - Integración Empresarial",
    "testimonials.roberto.delivered": "Entregado: Marzo 2024",
    "testimonials.stats.projects": "Proyectos Entregados",
    "testimonials.stats.satisfaction": "Satisfacción Cliente",
    "testimonials.stats.roi": "ROI Promedio",
    "testimonials.stats.setup": "Tiempo Setup",

    // Use Cases Section
    "usecases.title": "Proyectos Reales en Producción",
    "usecases.subtitle":
      "Soluciones empresariales entregadas y funcionando en producción con resultados medibles y verificables",
    "usecases.ecosuelo.title": "EcosueloLab",
    "usecases.ecosuelo.industry": "AgTech",
    "usecases.ecosuelo.description": "Plataforma completa de análisis de suelo con IA conversacional",
    "usecases.ecosuelo.deliverables": "Entregables:",
    "usecases.ecosuelo.deliverable1": "Dashboard web completo",
    "usecases.ecosuelo.deliverable2": "API REST funcional",
    "usecases.ecosuelo.deliverable3": "Agente WhatsApp IA",
    "usecases.ecosuelo.results": "Resultados Verificados:",
    "usecases.ecosuelo.result1": "90% reducción tiempo análisis, 95% satisfacción cliente",
    "usecases.parrotfy.title": "Parrotfy ERP",
    "usecases.parrotfy.industry": "Software Empresarial",
    "usecases.parrotfy.description": "Integración nativa ERP con agentes conversacionales inteligentes",
    "usecases.parrotfy.deliverable1": "Integración nativa SAP",
    "usecases.parrotfy.deliverable2": "Agente IA multiidioma",
    "usecases.parrotfy.deliverable3": "Analytics en tiempo real",
    "usecases.parrotfy.result1": "80% automatización consultas, 92% satisfacción usuarios",
    "usecases.despega.title": "Despega Tu Carrera",
    "usecases.despega.industry": "Educación",
    "usecases.despega.description": "Coaching profesional con IA y seguimiento personalizado",
    "usecases.despega.deliverable1": "Sistema coaching personalizado",
    "usecases.despega.deliverable2": "Integración LinkedIn",
    "usecases.despega.deliverable3": "Seguimiento de progreso",
    "usecases.despega.result1": "88% tasa colocación laboral, 60% aumento finalización",
    "usecases.status.delivered": "ENTREGADO",
    "usecases.status.production": "EN PRODUCCIÓN",

    // Features Section
    "features.title": "Capacidades Empresariales",
    "features.subtitle": "Soluciones tecnológicas completas diseñadas para escalabilidad y confiabilidad empresarial",
    "features.fullstack.title": "Desarrollo Full-Stack",
    "features.fullstack.description":
      "Soluciones completas de extremo a extremo desde frontend hasta backend, bases de datos e infraestructura cloud.",
    "features.ai.title": "Integración IA Avanzada",
    "features.ai.description":
      "Integración certificada OpenAI GPT-4 con modelos personalizados y procesamiento de lenguaje natural.",
    "features.scalable.title": "Arquitectura Escalable",
    "features.scalable.description":
      "Arquitectura de microservicios diseñada para manejar 100,000+ usuarios concurrentes con 99.9% uptime.",
    "features.security.title": "Seguridad Empresarial",
    "features.security.description":
      "Certificado ISO 27001 con cumplimiento SOC 2 y protección de datos de nivel empresarial.",
    "features.integration.title": "Integraciones Nativas",
    "features.integration.description":
      "Integración directa con CRM, ERP, WhatsApp Business API y sistemas empresariales.",
    "features.support.title": "Soporte Global 24/7",
    "features.support.description":
      "Soporte técnico con SLA de 15 minutos para issues críticos en Chile, Singapur y Rusia.",

    // Team Section
    "team.title": "Equipo Técnico",
    "team.subtitle": "Ingenieros especializados con experiencia comprobada en soluciones IA empresariales",
    "team.diego.name": "Diego Saavedra",
    "team.diego.role": "Ingeniero IA Principal & Fundador",
    "team.diego.education": "Ingeniería en Computación, Universidad de Chile",
    "team.diego.experience": "8+ años en sistemas IA y machine learning",
    "team.diego.expertise": "Integración OpenAI GPT-4, redes neuronales, arquitectura IA conversacional",
    "team.carlos.name": "Carlos Mendoza",
    "team.carlos.role": "Desarrollador Full-Stack Senior",
    "team.carlos.education": "Ingeniería de Software, Pontificia Universidad Católica",
    "team.carlos.experience": "6+ años en desarrollo web empresarial",
    "team.carlos.expertise": "React, Node.js, PostgreSQL, arquitectura de microservicios",
    "team.ana.name": "Ana Rodríguez",
    "team.ana.role": "Ingeniera DevOps & Infraestructura",
    "team.ana.education": "Ingeniería en Sistemas, Universidad Técnica Federico Santa María",
    "team.ana.experience": "7+ años en infraestructura cloud y DevOps",
    "team.ana.expertise": "AWS, Docker, Kubernetes, pipelines CI/CD, sistemas de monitoreo",
    "team.capabilities.title": "Capacidades Técnicas Principales",
    "team.capabilities.ai": "IA Avanzada & Machine Learning",
    "team.capabilities.fullstack": "Desarrollo Web Full-Stack",
    "team.capabilities.mobile": "Desarrollo de Apps Móviles",
    "team.capabilities.cloud": "Infraestructura Cloud & DevOps",
    "team.capabilities.integration": "Integración Sistemas Empresariales",
    "team.capabilities.security": "Implementación Seguridad & Compliance",
    "team.cta.title": "¿Necesitas Consulta Técnica?",
    "team.cta.description": "Habla directamente con nuestro equipo técnico sobre los requerimientos de tu proyecto",
    "team.cta.button": "Consulta Técnica",

    // Footer
    "footer.description":
      "Soluciones IA empresariales con agentes conversacionales inteligentes. Ecosistemas tecnológicos completos para automatización empresarial.",
    "footer.services.title": "Servicios",
    "footer.services.ai": "IA Conversacional",
    "footer.services.fullstack": "Desarrollo Full-Stack",
    "footer.services.integration": "Integración Empresarial",
    "footer.services.consulting": "Consultoría IA",
    "footer.company.title": "Empresa",
    "footer.company.about": "Acerca de",
    "footer.company.team": "Equipo",
    "footer.company.careers": "Carreras",
    "footer.company.contact": "Contacto",
    "footer.legal.title": "Legal",
    "footer.legal.privacy": "Política de Privacidad",
    "footer.legal.terms": "Términos de Servicio",
    "footer.legal.security": "Seguridad",
    "footer.contact.title": "Contacto",
    "footer.contact.chile": "Chile: +56 9 4094 6660",
    "footer.contact.singapore": "Singapur: +65 XXXX XXXX",
    "footer.contact.russia": "Rusia: +7 XXX XXX XXXX",
    "footer.contact.email": "contacto@n3uralia.com",
    "footer.rights": "Todos los derechos reservados.",
    "footer.global": "Operaciones globales con soporte 24/7",
  },
}

// Language detection function
const detectLanguage = (): Language => {
  // Check if we're in the browser
  if (typeof window === "undefined") return "en"

  // Check localStorage first
  const savedLanguage = localStorage.getItem("n3uralia-language") as Language
  if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
    return savedLanguage
  }

  // Check browser language
  const browserLanguage = navigator.language.toLowerCase()

  // Spanish-speaking countries and regions
  const spanishRegions = [
    "es",
    "es-es",
    "es-mx",
    "es-ar",
    "es-co",
    "es-pe",
    "es-ve",
    "es-cl",
    "es-ec",
    "es-gt",
    "es-cu",
    "es-bo",
    "es-do",
    "es-hn",
    "es-py",
    "es-sv",
    "es-ni",
    "es-cr",
    "es-pa",
    "es-uy",
    "es-pr",
  ]

  if (spanishRegions.some((region) => browserLanguage.startsWith(region))) {
    return "es"
  }

  // Try to detect by geolocation (simplified approach using timezone)
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const spanishTimezones = [
      "America/Santiago",
      "America/Argentina/Buenos_Aires",
      "America/Mexico_City",
      "America/Lima",
      "America/Bogota",
      "America/Caracas",
      "Europe/Madrid",
      "America/Montevideo",
      "America/Asuncion",
      "America/La_Paz",
    ]

    if (spanishTimezones.includes(timezone)) {
      return "es"
    }
  } catch (error) {
    console.log("Timezone detection failed:", error)
  }

  // Default to English
  return "en"
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const detectedLanguage = detectLanguage()
    setLanguageState(detectedLanguage)
    setIsInitialized(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("n3uralia-language", lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  // Don't render until language is detected to prevent hydration mismatch
  if (!isInitialized) {
    return null
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
