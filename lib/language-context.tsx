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
    // Navigation
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",

    // Hero section
    "hero.title": "Building Bridges to AI",
    "hero.subtitle1":
      "At N3uralia, we specialize in cutting-edge AI solutions designed to elevate your business to new heights.",
    "hero.subtitle2":
      "Our intuitive platforms harness the power of artificial intelligence, transforming complex data into actionable insights.",
    "hero.cta.explore": "Explore Solutions",
    "hero.cta.contact": "Contact Human",

    // Services section
    "services.badge": "Our Services",
    "services.title": "AI-Powered",
    "services.titleBold": "Solutions",
    "services.subtitle":
      "Comprehensive AI solutions designed to transform your business operations and enhance customer experiences across all touchpoints.",
    "services.agents.title": "AGENTS and\nAUTOMATIONS",
    "services.multitask.title": "MULTITASK\nAGENTIC SYSTEMS",
    "services.fullstack.title": "FULL STACK\nPROJECTS",
    "services.readmore": "Read more",

    // Flow section
    "flow.badge": "Our Process",
    "flow.title": "From Idea to",
    "flow.titleBold": "Implementation",
    "flow.subtitle":
      "Our streamlined process ensures rapid deployment of AI solutions tailored to your business needs.",
    "flow.step1.title": "1. Consultation",
    "flow.step1.desc": "We analyze your business needs and identify AI opportunities",
    "flow.step1.duration": "1-2 days",
    "flow.step2.title": "2. AI Design",
    "flow.step2.desc": "Custom AI agents and workflows designed for your specific use case",
    "flow.step2.duration": "3-5 days",
    "flow.step3.title": "3. Development",
    "flow.step3.desc": "Full-stack development with modern technologies and best practices",
    "flow.step3.duration": "1-3 weeks",
    "flow.step4.title": "4. Deployment",
    "flow.step4.desc": "Seamless integration with your existing systems and infrastructure",
    "flow.step4.duration": "1-2 days",
    "flow.cta.title": "Ready to get started?",
    "flow.cta.subtitle": "Let's discuss your project and create a custom AI solution for your business.",
    "flow.cta.button": "Start Your Project",

    // Testimonials section
    "testimonials.badge": "Client Success Stories",
    "testimonials.title": "What Our",
    "testimonials.titleBold": "Clients Say",
    "testimonials.subtitle":
      "Real feedback from businesses that have transformed their operations with our AI solutions.",
    "testimonials.stats.satisfaction": "Client Satisfaction",
    "testimonials.stats.projects": "Projects Delivered",
    "testimonials.stats.support": "Support Available",

    // FAQ section
    "faq.badge": "FAQ",
    "faq.title": "Frequently Asked",
    "faq.titleBold": "Questions",
    "faq.subtitle": "Everything you need to know about our AI solutions and services.",

    // Contact section
    "contact.badge": "Get In Touch",
    "contact.title": "Let's Build",
    "contact.titleBold": "Together",
    "contact.subtitle":
      "Ready to transform your business with AI? Get in touch with our team and let's discuss your project.",
    "contact.form.title": "Send us a message",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "How can we help?",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell us about your project...",
    "contact.form.send": "Send Message",
    "contact.info.title": "Get in touch",
    "contact.info.email": "Email",
    "contact.info.emailDesc": "Get in touch via email",
    "contact.info.phone": "Phone",
    "contact.info.phoneDesc": "Call us directly",
    "contact.info.location": "Location",
    "contact.info.locationDesc": "Our headquarters",
    "contact.hours.title": "Office Hours",
    "contact.hours.weekdays": "Monday - Friday:",
    "contact.hours.saturday": "Saturday:",
    "contact.hours.sunday": "Sunday:",
    "contact.hours.closed": "Closed",
    "contact.emergency.title": "Emergency Support",
    "contact.emergency.desc":
      "Need urgent assistance? Our emergency support is available 24/7 for critical issues and system outages.",
    "contact.emergency.button": "Emergency Contact",

    // Footer
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.legal": "Legal",
    "footer.description":
      "Building bridges to AI with cutting-edge solutions that transform businesses worldwide. Full-stack development, intelligent agents, and enterprise-grade support.",
    "footer.copyright": "All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.inChile": "in Chile",
    "footer.startProject": "Start Project",
  },
  es: {
    // Navigation
    "nav.services": "Servicios",
    "nav.process": "Proceso",
    "nav.testimonials": "Testimonios",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.getStarted": "Comenzar",

    // Hero section
    "hero.title": "Construyendo Puentes hacia la IA",
    "hero.subtitle1":
      "En N3uralia, nos especializamos en soluciones de IA de vanguardia diseñadas para elevar tu negocio a nuevas alturas.",
    "hero.subtitle2":
      "Nuestras plataformas intuitivas aprovechan el poder de la inteligencia artificial, transformando datos complejos en insights accionables.",
    "hero.cta.explore": "Explorar Soluciones",
    "hero.cta.contact": "Contactar Humano",

    // Services section
    "services.badge": "Nuestros Servicios",
    "services.title": "Soluciones",
    "services.titleBold": "Potenciadas por IA",
    "services.subtitle":
      "Soluciones integrales de IA diseñadas para transformar las operaciones de tu negocio y mejorar las experiencias del cliente en todos los puntos de contacto.",
    "services.agents.title": "AGENTES y\nAUTOMATIZACIONES",
    "services.multitask.title": "SISTEMAS\nAGÉNTICOS MULTITAREA",
    "services.fullstack.title": "PROYECTOS\nFULL STACK",
    "services.readmore": "Leer más",

    // Flow section
    "flow.badge": "Nuestro Proceso",
    "flow.title": "De la Idea a la",
    "flow.titleBold": "Implementación",
    "flow.subtitle":
      "Nuestro proceso optimizado asegura el despliegue rápido de soluciones IA adaptadas a las necesidades de tu negocio.",
    "flow.step1.title": "1. Consulta",
    "flow.step1.desc": "Analizamos las necesidades de tu negocio e identificamos oportunidades de IA",
    "flow.step1.duration": "1-2 días",
    "flow.step2.title": "2. Diseño IA",
    "flow.step2.desc": "Agentes IA personalizados y flujos de trabajo diseñados para tu caso específico",
    "flow.step2.duration": "3-5 días",
    "flow.step3.title": "3. Desarrollo",
    "flow.step3.desc": "Desarrollo full-stack con tecnologías modernas y mejores prácticas",
    "flow.step3.duration": "1-3 semanas",
    "flow.step4.title": "4. Despliegue",
    "flow.step4.desc": "Integración perfecta con tus sistemas e infraestructura existentes",
    "flow.step4.duration": "1-2 días",
    "flow.cta.title": "¿Listo para comenzar?",
    "flow.cta.subtitle": "Hablemos de tu proyecto y creemos una solución IA personalizada para tu negocio.",
    "flow.cta.button": "Iniciar Tu Proyecto",

    // Testimonials section
    "testimonials.badge": "Historias de Éxito",
    "testimonials.title": "Lo Que Dicen",
    "testimonials.titleBold": "Nuestros Clientes",
    "testimonials.subtitle":
      "Comentarios reales de empresas que han transformado sus operaciones con nuestras soluciones de IA.",
    "testimonials.stats.satisfaction": "Satisfacción del Cliente",
    "testimonials.stats.projects": "Proyectos Entregados",
    "testimonials.stats.support": "Soporte Disponible",

    // FAQ section
    "faq.badge": "Preguntas Frecuentes",
    "faq.title": "Preguntas",
    "faq.titleBold": "Frecuentes",
    "faq.subtitle": "Todo lo que necesitas saber sobre nuestras soluciones y servicios de IA.",

    // Contact section
    "contact.badge": "Contáctanos",
    "contact.title": "Construyamos",
    "contact.titleBold": "Juntos",
    "contact.subtitle":
      "¿Listo para transformar tu negocio con IA? Ponte en contacto con nuestro equipo y hablemos de tu proyecto.",
    "contact.form.title": "Envíanos un mensaje",
    "contact.form.name": "Nombre",
    "contact.form.namePlaceholder": "Tu nombre",
    "contact.form.email": "Correo",
    "contact.form.emailPlaceholder": "tu@correo.com",
    "contact.form.subject": "Asunto",
    "contact.form.subjectPlaceholder": "¿Cómo podemos ayudar?",
    "contact.form.message": "Mensaje",
    "contact.form.messagePlaceholder": "Cuéntanos sobre tu proyecto...",
    "contact.form.send": "Enviar Mensaje",
    "contact.info.title": "Ponte en contacto",
    "contact.info.email": "Correo",
    "contact.info.emailDesc": "Contáctanos por correo",
    "contact.info.phone": "Teléfono",
    "contact.info.phoneDesc": "Llámanos directamente",
    "contact.info.location": "Ubicación",
    "contact.info.locationDesc": "Nuestra sede principal",
    "contact.hours.title": "Horario de Oficina",
    "contact.hours.weekdays": "Lunes - Viernes:",
    "contact.hours.saturday": "Sábado:",
    "contact.hours.sunday": "Domingo:",
    "contact.hours.closed": "Cerrado",
    "contact.emergency.title": "Soporte de Emergencia",
    "contact.emergency.desc":
      "¿Necesitas asistencia urgente? Nuestro soporte de emergencia está disponible 24/7 para problemas críticos y caídas del sistema.",
    "contact.emergency.button": "Contacto de Emergencia",

    // Footer
    "footer.services": "Servicios",
    "footer.company": "Empresa",
    "footer.resources": "Recursos",
    "footer.legal": "Legal",
    "footer.description":
      "Construyendo puentes hacia la IA con soluciones de vanguardia que transforman empresas a nivel mundial. Desarrollo full-stack, agentes inteligentes y soporte de nivel empresarial.",
    "footer.copyright": "Todos los derechos reservados.",
    "footer.madeWith": "Hecho con",
    "footer.inChile": "en Chile",
    "footer.startProject": "Iniciar Proyecto",
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
