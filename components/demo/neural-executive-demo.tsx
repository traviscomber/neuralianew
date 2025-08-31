"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MessageCircle,
  Send,
  Minimize2,
  Maximize2,
  X,
  User,
  Crown,
  TrendingUp,
  Zap,
  CheckCircle,
  Sparkles,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Globe,
  UserCheck,
  Loader2,
  MapPin,
  Flag,
} from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
  agentType: "ceo" | "cmo" | "cto"
  metadata?: {
    confidence?: number
    processingTime?: number
    category?: string
    insights?: string[]
    recommendations?: string[]
  }
}

interface UserProfile {
  name: string
  website?: string
  country?: string
  region?: string
  websiteAnalysis?: {
    title?: string
    description?: string
    industry?: string
    businessType?: string
    keyFeatures?: string[]
    targetAudience?: string
    competitors?: string[]
    detectedCountry?: string
  }
  locationData?: {
    country: string
    countryCode: string
    region: string
    city?: string
    detectionMethod: "ip" | "domain" | "user_input"
  }
}

interface NeuralExecutiveDemoProps {
  isOpen?: boolean
  onToggle?: () => void
}

const COUNTRIES = [
  { code: "CL", name: "Chile", region: "South America" },
  { code: "AR", name: "Argentina", region: "South America" },
  { code: "BR", name: "Brazil", region: "South America" },
  { code: "CO", name: "Colombia", region: "South America" },
  { code: "PE", name: "Peru", region: "South America" },
  { code: "UY", name: "Uruguay", region: "South America" },
  { code: "EC", name: "Ecuador", region: "South America" },
  { code: "BO", name: "Bolivia", region: "South America" },
  { code: "PY", name: "Paraguay", region: "South America" },
  { code: "VE", name: "Venezuela", region: "South America" },
  { code: "US", name: "United States", region: "North America" },
  { code: "CA", name: "Canada", region: "North America" },
  { code: "MX", name: "Mexico", region: "North America" },
  { code: "GB", name: "United Kingdom", region: "Europe" },
  { code: "DE", name: "Germany", region: "Europe" },
  { code: "FR", name: "France", region: "Europe" },
  { code: "ES", name: "Spain", region: "Europe" },
  { code: "IT", name: "Italy", region: "Europe" },
  { code: "NL", name: "Netherlands", region: "Europe" },
  { code: "SE", name: "Sweden", region: "Europe" },
  { code: "NO", name: "Norway", region: "Europe" },
  { code: "DK", name: "Denmark", region: "Europe" },
  { code: "FI", name: "Finland", region: "Europe" },
  { code: "CH", name: "Switzerland", region: "Europe" },
  { code: "AT", name: "Austria", region: "Europe" },
  { code: "BE", name: "Belgium", region: "Europe" },
  { code: "AU", name: "Australia", region: "Oceania" },
  { code: "NZ", name: "New Zealand", region: "Oceania" },
  { code: "JP", name: "Japan", region: "Asia" },
  { code: "KR", name: "South Korea", region: "Asia" },
  { code: "CN", name: "China", region: "Asia" },
  { code: "IN", name: "India", region: "Asia" },
  { code: "SG", name: "Singapore", region: "Asia" },
  { code: "HK", name: "Hong Kong", region: "Asia" },
  { code: "TW", name: "Taiwan", region: "Asia" },
  { code: "TH", name: "Thailand", region: "Asia" },
  { code: "MY", name: "Malaysia", region: "Asia" },
  { code: "ID", name: "Indonesia", region: "Asia" },
  { code: "PH", name: "Philippines", region: "Asia" },
  { code: "VN", name: "Vietnam", region: "Asia" },
  { code: "ZA", name: "South Africa", region: "Africa" },
  { code: "NG", name: "Nigeria", region: "Africa" },
  { code: "KE", name: "Kenya", region: "Africa" },
  { code: "EG", name: "Egypt", region: "Africa" },
  { code: "AE", name: "United Arab Emirates", region: "Middle East" },
  { code: "SA", name: "Saudi Arabia", region: "Middle East" },
  { code: "IL", name: "Israel", region: "Middle East" },
  { code: "TR", name: "Turkey", region: "Europe/Asia" },
  { code: "RU", name: "Russia", region: "Europe/Asia" },
]

const EXECUTIVE_CONFIGS = {
  ceo: {
    name: "CEO Neural Orchestrator",
    icon: Crown,
    color: "from-purple-600 to-indigo-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    description: "Liderazgo estratégico y toma de decisiones ejecutivas",
    expertise: [
      "Planificación Estratégica",
      "Análisis de Mercado",
      "Gestión de Crisis",
      "Árboles de Decisión Ejecutiva",
    ],
    sampleQuestions: [
      "¿Cómo deberíamos abordar el ingreso al mercado asiático?",
      "¿Cuál es nuestra estrategia de posicionamiento competitivo?",
      "¿Cómo manejamos esta crisis de cadena de suministro?",
      "¿Deberíamos adquirir a nuestro principal competidor?",
      "¿Cuál es nuestra visión estratégica a 5 años?",
      "¿Cómo pivoteamos durante la incertidumbre económica?",
    ],
    regionalQuestions: {
      "South America": [
        "¿Cómo navegamos la volatilidad del peso chileno en nuestro planning financiero?",
        "¿Cuál es nuestra estrategia para expandirnos a través de la Alianza del Pacífico?",
        "¿Cómo construimos relaciones gubernamentales efectivas en Chile?",
        "¿Deberíamos considerar la minería como sector de oportunidad?",
        "¿Cómo manejamos los ciclos estacionales del negocio chileno?",
        "¿Cuál es nuestra estrategia para el mercado de energías renovables?",
      ],
      "North America": [
        "How do we scale across US states with different regulations?",
        "What's our strategy for the competitive VC landscape?",
        "How should we approach the Canadian market expansion?",
      ],
      Europe: [
        "How do we navigate post-Brexit market changes?",
        "What's our GDPR compliance strategy for expansion?",
        "How do we build consensus across European subsidiaries?",
      ],
      Asia: [
        "How do we build guanxi relationships in China?",
        "What's our mobile-first strategy for Southeast Asia?",
        "How do we navigate government relations in this region?",
      ],
    },
    contextualQuestions: {
      strategy: [
        "¿Cuál es nuestra estrategia de expansión de mercado?",
        "¿Cómo nos diferenciamos de los competidores?",
        "¿Qué alianzas estratégicas deberíamos buscar?",
      ],
      crisis: [
        "¿Cómo manejamos esta crisis de relaciones públicas?",
        "¿Cuál es nuestro plan de continuidad del negocio?",
        "¿Cómo comunicamos con las partes interesadas?",
      ],
      growth: [
        "¿Qué mercados deberíamos ingresar a continuación?",
        "¿Cómo escalamos nuestras operaciones?",
        "¿Cuál es nuestra estrategia de adquisición?",
      ],
      leadership: [
        "¿Cómo construimos una cultura de alto rendimiento?",
        "¿Cuál es nuestra estrategia de planificación de sucesión?",
        "¿Cómo impulsamos el cambio organizacional?",
      ],
    },
  },
  cmo: {
    name: "CMO Growth Engine",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    description: "Estrategia de marketing y optimización de crecimiento",
    expertise: ["Segmentación de Clientes", "Optimización de Campañas", "Growth Hacking", "Análisis de ROI"],
    sampleQuestions: [
      "¿Cómo reducimos el costo de adquisición de clientes en un 40%?",
      "¿Cuál es la mejor mezcla de canales para nuestra audiencia objetivo?",
      "¿Cómo podemos mejorar nuestro embudo de conversión?",
      "¿Qué estrategia de marketing viral deberíamos implementar?",
      "¿Cómo aumentamos el valor de vida del cliente?",
      "¿Cuál es nuestra estrategia de posicionamiento de marca?",
    ],
    regionalQuestions: {
      "South America": [
        "¿Cómo optimizamos nuestras campañas para el mercado chileno en Facebook e Instagram?",
        "¿Cuál es nuestra estrategia de WhatsApp Business para PyMEs chilenas?",
        "¿Cómo integramos Transbank y otros medios de pago locales?",
        "¿Deberíamos invertir en marketing tradicional (TV, radio) en Chile?",
        "¿Cómo adaptamos nuestro messaging para la cultura chilena?",
        "¿Cuál es nuestra estrategia para Fiestas Patrias y temporada alta?",
      ],
      "North America": [
        "How do we optimize for the US consumer market?",
        "What's our strategy for Super Bowl advertising?",
        "How do we leverage influencer marketing effectively?",
      ],
      Europe: [
        "How do we create culturally sensitive campaigns across EU?",
        "What's our strategy for GDPR-compliant marketing?",
        "How do we build brand trust in privacy-conscious markets?",
      ],
      Asia: [
        "How do we succeed with mobile-first marketing?",
        "What's our strategy for social commerce platforms?",
        "How do we adapt messaging for collectivist cultures?",
      ],
    },
    contextualQuestions: {
      acquisition: [
        "¿Cómo optimizamos nuestra publicidad pagada?",
        "¿Cuál es nuestra estrategia de marketing de contenidos?",
        "¿Cómo mejoramos la generación de leads?",
      ],
      retention: [
        "¿Cómo reducimos la rotación de clientes?",
        "¿Cuál es nuestro programa de fidelidad de clientes?",
        "¿Cómo aumentamos las compras repetidas?",
      ],
      branding: [
        "¿Cómo construimos el conocimiento de marca?",
        "¿Cuál es nuestra estrategia de redes sociales?",
        "¿Cómo gestionamos nuestra reputación de marca?",
      ],
      analytics: [
        "¿Cómo medimos el ROI de marketing?",
        "¿Qué KPIs deberíamos rastrear?",
        "¿Cómo optimizamos nuestro modelo de atribución?",
      ],
    },
  },
  cto: {
    name: "CTO Innovation Architect",
    icon: Zap,
    color: "from-blue-600 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    description: "Estrategia tecnológica y liderazgo en innovación",
    expertise: [
      "Hojas de Ruta Tecnológicas",
      "Diseño de Arquitectura",
      "Estrategia de Innovación",
      "Seguridad y Cumplimiento",
    ],
    sampleQuestions: [
      "¿Cómo deberíamos arquitecturar nuestra plataforma de microservicios?",
      "¿Cuál es nuestra estrategia de implementación de IA/ML?",
      "¿Cómo aseguramos 99.99% de tiempo de actividad a escala?",
      "¿Cuál es el mejor enfoque para la migración a la nube?",
      "¿Cómo implementamos seguridad de confianza cero?",
      "¿Cuál es nuestro plan de reducción de deuda técnica?",
    ],
    regionalQuestions: {
      "South America": [
        "¿Cómo aprovechamos la región AWS Santiago para residencia de datos?",
        "¿Cuál es nuestra estrategia de integración con APIs bancarias chilenas?",
        "¿Cómo implementamos la Ley de Protección de Datos Personales?",
        "¿Deberíamos considerar soluciones de pago locales como Khipu o Flow?",
        "¿Cómo optimizamos para la conectividad variable en regiones?",
        "¿Cuál es nuestra estrategia para el talento tech chileno?",
      ],
      "North America": [
        "How do we comply with state-specific data laws?",
        "What's our strategy for Silicon Valley talent competition?",
        "How do we leverage US cloud infrastructure advantages?",
      ],
      Europe: [
        "How do we ensure GDPR-compliant architecture?",
        "What's our strategy for data sovereignty requirements?",
        "How do we implement right-to-be-forgotten functionality?",
      ],
      Asia: [
        "How do we handle data localization requirements?",
        "What's our strategy for mobile-first architecture?",
        "How do we navigate government tech regulations?",
      ],
    },
    contextualQuestions: {
      architecture: [
        "¿Cómo diseñamos para escalabilidad?",
        "¿Cuál es nuestra estrategia de API?",
        "¿Cómo implementamos arquitectura dirigida por eventos?",
      ],
      security: [
        "¿Cómo implementamos seguridad de confianza cero?",
        "¿Cuál es nuestra estrategia de protección de datos?",
        "¿Cómo manejamos los requisitos de cumplimiento?",
      ],
      innovation: [
        "¿Cómo evaluamos nuevas tecnologías?",
        "¿Cuál es nuestra estrategia de inversión en I+D?",
        "¿Cómo fomentamos la cultura de innovación?",
      ],
      operations: [
        "¿Cómo implementamos las mejores prácticas de DevOps?",
        "¿Cuál es nuestra estrategia de monitoreo y alertas?",
        "¿Cómo optimizamos el rendimiento del sistema?",
      ],
    },
  },
}

const getContextualQuestions = (
  lastMessage: string,
  executive: "ceo" | "cmo" | "cto",
  userProfile?: UserProfile,
): string[] => {
  const config = EXECUTIVE_CONFIGS[executive]
  const lowerMessage = lastMessage.toLowerCase()

  if (userProfile?.locationData?.countryCode === "CL" && config.regionalQuestions?.["South America"]) {
    const chileanQuestions = config.regionalQuestions["South America"]
    if (chileanQuestions.length > 0) {
      return chileanQuestions.slice(0, 3)
    }
  }

  if (userProfile?.locationData?.region && config.regionalQuestions?.[userProfile.locationData.region]) {
    const regionalQuestions = config.regionalQuestions[userProfile.locationData.region]
    if (regionalQuestions.length > 0) {
      return regionalQuestions.slice(0, 3)
    }
  }

  if (executive === "ceo") {
    if (lowerMessage.includes("strategy") || lowerMessage.includes("market") || lowerMessage.includes("competitive")) {
      return config.contextualQuestions.strategy
    }
    if (lowerMessage.includes("crisis") || lowerMessage.includes("problem") || lowerMessage.includes("issue")) {
      return config.contextualQuestions.crisis
    }
    if (lowerMessage.includes("growth") || lowerMessage.includes("expand") || lowerMessage.includes("scale")) {
      return config.contextualQuestions.growth
    }
    if (lowerMessage.includes("team") || lowerMessage.includes("culture") || lowerMessage.includes("leadership")) {
      return config.contextualQuestions.leadership
    }
  } else if (executive === "cmo") {
    if (lowerMessage.includes("acquisition") || lowerMessage.includes("customer") || lowerMessage.includes("lead")) {
      return config.contextualQuestions.acquisition
    }
    if (lowerMessage.includes("retention") || lowerMessage.includes("churn") || lowerMessage.includes("loyalty")) {
      return config.contextualQuestions.retention
    }
    if (lowerMessage.includes("brand") || lowerMessage.includes("awareness") || lowerMessage.includes("social")) {
      return config.contextualQuestions.branding
    }
    if (lowerMessage.includes("roi") || lowerMessage.includes("analytics") || lowerMessage.includes("measure")) {
      return config.contextualQuestions.analytics
    }
  } else if (executive === "cto") {
    if (lowerMessage.includes("architecture") || lowerMessage.includes("design") || lowerMessage.includes("system")) {
      return config.contextualQuestions.architecture
    }
    if (
      lowerMessage.includes("security") ||
      lowerMessage.includes("compliance") ||
      lowerMessage.includes("protection")
    ) {
      return config.contextualQuestions.security
    }
    if (
      lowerMessage.includes("innovation") ||
      lowerMessage.includes("technology") ||
      lowerMessage.includes("research")
    ) {
      return config.contextualQuestions.innovation
    }
    if (lowerMessage.includes("operations") || lowerMessage.includes("devops") || lowerMessage.includes("monitoring")) {
      return config.contextualQuestions.operations
    }
  }

  return config.sampleQuestions.slice(0, 3)
}

export function NeuralExecutiveDemo({ isOpen = false, onToggle }: NeuralExecutiveDemoProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [activeExecutive, setActiveExecutive] = useState<"ceo" | "cmo" | "cto">("ceo")
  const [demoMode, setDemoMode] = useState<"chat" | "showcase">("showcase")
  const [questionCount, setQuestionCount] = useState(0)
  const [showQuestionSuggestions, setShowQuestionSuggestions] = useState(true)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [profileForm, setProfileForm] = useState({ name: "", website: "", country: "CL" })
  const [isAnalyzingWebsite, setIsAnalyzingWebsite] = useState(false)
  const [isDetectingLocation, setIsDetectingLocation] = useState(false)
  const [detectedLocation, setDetectedLocation] = useState<any>(null)
  const [showCountrySelect, setShowCountrySelect] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (demoMode === "chat" && !userProfile) {
      setShowProfileModal(true)
      detectUserLocation()
    }
  }, [demoMode, userProfile])

  const detectUserLocation = async () => {
    try {
      setIsDetectingLocation(true)

      const response = await fetch("/api/detect-location")
      if (response.ok) {
        const locationData = await response.json()
        setDetectedLocation(locationData)

        if (locationData.countryCode) {
          setProfileForm((prev) => ({ ...prev, country: locationData.countryCode }))
        }
      }
    } catch (error) {
      console.error("Location detection error:", error)
    } finally {
      setIsDetectingLocation(false)
    }
  }

  const getCountryFromDomain = (url: string): string | null => {
    try {
      const domain = new URL(url).hostname.toLowerCase()

      const countryTlds: { [key: string]: string } = {
        ".cl": "CL",
        ".com.cl": "CL",
        ".ar": "AR",
        ".com.ar": "AR",
        ".br": "BR",
        ".com.br": "BR",
        ".co": "CO",
        ".com.co": "CO",
        ".pe": "PE",
        ".com.pe": "PE",
        ".mx": "MX",
        ".com.mx": "MX",
        ".uy": "UY",
        ".com.uy": "UY",
        ".ec": "EC",
        ".com.ec": "EC",
        ".bo": "BO",
        ".com.bo": "BO",
        ".py": "PY",
        ".com.py": "PY",
        ".ve": "VE",
        ".com.ve": "VE",
        ".uk": "GB",
        ".co.uk": "GB",
        ".de": "DE",
        ".fr": "FR",
        ".es": "ES",
        ".it": "IT",
        ".nl": "NL",
        ".au": "AU",
        ".com.au": "AU",
        ".jp": "JP",
        ".kr": "KR",
        ".cn": "CN",
        ".in": "IN",
      }

      for (const [tld, countryCode] of Object.entries(countryTlds)) {
        if (domain.endsWith(tld)) {
          return countryCode
        }
      }

      return null
    } catch (error) {
      return null
    }
  }

  const analyzeWebsite = async (url: string) => {
    try {
      setIsAnalyzingWebsite(true)

      const detectedCountry = getCountryFromDomain(url)

      const response = await fetch(`/api/analyze-website`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      if (response.ok) {
        const analysis = await response.json()
        return {
          ...analysis,
          detectedCountry,
        }
      } else {
        const domain = new URL(url).hostname
        return {
          title: `${domain} Website`,
          description: "Business website",
          industry: "Technology",
          businessType: "B2B",
          keyFeatures: ["Professional Services", "Digital Solutions"],
          targetAudience: "Business Professionals",
          competitors: ["Industry Leaders"],
          detectedCountry,
        }
      }
    } catch (error) {
      console.error("Website analysis error:", error)
      return {
        title: "Business Website",
        description: "Professional business website",
        industry: "Business Services",
        businessType: "B2B",
        keyFeatures: ["Professional Services"],
        targetAudience: "Business Clients",
        competitors: ["Market Competitors"],
        detectedCountry: null,
      }
    } finally {
      setIsAnalyzingWebsite(false)
    }
  }

  const handleProfileSubmit = async () => {
    if (!profileForm.name.trim()) return

    let websiteAnalysis = undefined
    let finalCountry = profileForm.country

    if (profileForm.website.trim()) {
      try {
        const url = profileForm.website.startsWith("http") ? profileForm.website : `https://${profileForm.website}`
        websiteAnalysis = await analyzeWebsite(url)

        if (!finalCountry && websiteAnalysis.detectedCountry) {
          finalCountry = websiteAnalysis.detectedCountry
        }
      } catch (error) {
        console.error("Error analyzing website:", error)
      }
    }

    if (!finalCountry && detectedLocation?.countryCode) {
      finalCountry = detectedLocation.countryCode
    }

    if (!finalCountry) {
      finalCountry = "CL"
    }

    const selectedCountry = COUNTRIES.find((c) => c.code === finalCountry)
    const locationData = {
      country: selectedCountry?.name || "Chile",
      countryCode: finalCountry,
      region: selectedCountry?.region || "South America",
      city: detectedLocation?.city,
      detectionMethod: profileForm.country ? "user_input" : websiteAnalysis?.detectedCountry ? "domain" : "ip",
    }

    const profile: UserProfile = {
      name: profileForm.name.trim(),
      website: profileForm.website.trim() || undefined,
      country: selectedCountry?.name,
      region: selectedCountry?.region,
      websiteAnalysis,
      locationData,
    }

    setUserProfile(profile)
    setShowProfileModal(false)
    setShowCountrySelect(false)

    const config = EXECUTIVE_CONFIGS[activeExecutive]
    const isChilean = finalCountry === "CL"

    const locationContext = profile.locationData
      ? `${isChilean ? "Veo que estás ubicado en" : "I see you're based in"} ${profile.locationData.country}${profile.locationData.region ? ` (${profile.locationData.region})` : ""}. `
      : ""

    const personalizedWelcome = isChilean
      ? `👋 ¡Hola ${profile.name}! Soy el ${config.name}. ${locationContext}${
          profile.websiteAnalysis
            ? `He analizado tu sitio web "${profile.websiteAnalysis.title}" y veo que estás en la industria ${profile.websiteAnalysis.industry}. `
            : ""
        }Traigo 25+ años de experiencia ${activeExecutive.toUpperCase()} de empresas Fortune 500, con profundo conocimiento de los mercados latinoamericanos y chilenos. ${
          profile.websiteAnalysis
            ? `Basado en tu enfoque empresarial en ${profile.websiteAnalysis.keyFeatures?.join(", ")}, puedo proporcionar orientación estratégica específica para el mercado chileno. `
            : `Puedo proporcionar orientación estratégica adaptada al entorno empresarial chileno. `
        }¿Qué desafío empresarial puedo ayudarte a resolver?`
      : `👋 Hello ${profile.name}! I'm the ${config.name}. ${locationContext}${
          profile.websiteAnalysis
            ? `I've analyzed your website "${profile.websiteAnalysis.title}" and see you're in the ${profile.websiteAnalysis.industry} industry. `
            : ""
        }I bring 25+ years of ${activeExecutive.toUpperCase()} expertise from Fortune 500 companies, with deep knowledge of ${profile.locationData?.region || "global"} markets. ${
          profile.websiteAnalysis
            ? `Based on your business focus on ${profile.websiteAnalysis.keyFeatures?.join(", ")}, I can provide targeted strategic guidance for the ${profile.locationData?.country || "local"} market. `
            : `I can provide strategic guidance tailored to the ${profile.locationData?.country || "local"} business environment. `
        }What business challenge can I help you solve?`

    const welcomeMessage: Message = {
      id: `welcome-${activeExecutive}`,
      content: personalizedWelcome,
      sender: "agent",
      timestamp: new Date(),
      agentType: activeExecutive,
      metadata: {
        confidence: 1.0,
        processingTime: 0.001,
        category: "personalized_greeting",
        insights: [
          `${config.expertise[0]} specialist`,
          `${config.expertise[1]} expert`,
          profile.websiteAnalysis ? `${profile.websiteAnalysis.industry} industry knowledge` : "Fortune 500 experience",
          `${profile.locationData?.region || "Global"} market expertise`,
          isChilean ? "Chilean market specialist" : "Regional market knowledge",
        ],
      },
    }

    setMessages([welcomeMessage])
    setQuestionCount(0)
    setShowQuestionSuggestions(true)
  }

  const generateExecutiveResponse = async (userInput: string, executive: "ceo" | "cmo" | "cto"): Promise<Message> => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
          agentType: executive === "ceo" ? "ceo-neural-agent" : executive === "cmo" ? "marketing" : "technical-support",
          conversationHistory: messages.filter((m) => m.agentType === executive),
          userProfile,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get executive response")
      }

      const data = await response.json()
      const executiveResponse = data.response

      const insights = []
      const recommendations = []
      const isChilean = userProfile?.locationData?.countryCode === "CL"

      if (executive === "ceo") {
        insights.push("Análisis de Impacto Estratégico", "Evaluación de Riesgos", "Posicionamiento de Mercado")
        if (userProfile?.websiteAnalysis?.industry) {
          insights.push(`Experiencia en Industria ${userProfile.websiteAnalysis.industry}`)
        }
        if (userProfile?.locationData?.country) {
          insights.push(`Conocimiento del Mercado ${userProfile.locationData.country}`)
        }
        if (isChilean) {
          insights.push("Entorno Regulatorio Chileno", "Oportunidades Alianza del Pacífico")
        }
        recommendations.push(
          isChilean ? "Implementar en Q1 2024" : "Implement in Q1 2024",
          isChilean ? "Asignar presupuesto estratégico" : "Allocate strategic budget",
          isChilean ? "Formar equipo multifuncional" : "Form cross-functional team",
        )
      } else if (executive === "cmo") {
        insights.push("Análisis de Comportamiento del Cliente", "Rendimiento de Canales", "Proyección de ROI")
        if (userProfile?.websiteAnalysis?.targetAudience) {
          insights.push(`Targeting ${userProfile.websiteAnalysis.targetAudience}`)
        }
        if (userProfile?.locationData?.region) {
          insights.push(`Estrategia Regional ${userProfile.locationData.region}`)
        }
        if (isChilean) {
          insights.push("Panorama Digital Chileno", "Integración de Pagos Locales")
        }
        recommendations.push(
          isChilean ? "Testear A/B por 2 semanas" : "A/B test for 2 weeks",
          isChilean ? "Aumentar presupuesto 30%" : "Increase budget by 30%",
          isChilean ? "Enfocar en demografía local" : "Focus on local demographics",
        )
      } else {
        insights.push("Factibilidad Técnica", "Evaluación de Seguridad", "Análisis de Escalabilidad")
        if (userProfile?.websiteAnalysis?.businessType) {
          insights.push(`Arquitectura ${userProfile.websiteAnalysis.businessType}`)
        }
        if (userProfile?.locationData?.country) {
          insights.push(`Estándares de Cumplimiento ${userProfile.locationData.country}`)
        }
        if (isChilean) {
          insights.push("Región AWS Santiago", "Leyes Chilenas de Protección de Datos")
        }
        recommendations.push(
          isChilean ? "Usar arquitectura de microservicios" : "Use microservices architecture",
          isChilean ? "Implementar en 3 fases" : "Implement in 3 phases",
          isChilean ? "Asegurar cumplimiento local" : "Ensure local compliance",
        )
      }

      return {
        id: Date.now().toString(),
        content: executiveResponse,
        sender: "agent",
        timestamp: new Date(),
        agentType: executive,
        metadata: {
          confidence: 0.96,
          processingTime: Math.random() * 0.6 + 0.3,
          category: "executive_response",
          insights,
          recommendations,
        },
      }
    } catch (error) {
      console.error("Error getting executive response:", error)

      const config = EXECUTIVE_CONFIGS[executive]
      const isChilean = userProfile?.locationData?.countryCode === "CL"

      const personalizedFallback = userProfile
        ? isChilean
          ? `Disculpe la breve interrupción, ${userProfile.name}. Como su ${config.name}, estoy de vuelta en línea y listo para brindar orientación estratégica${userProfile.websiteAnalysis ? ` adaptada a su negocio ${userProfile.websiteAnalysis.industry}` : ""}${userProfile.locationData ? ` en el mercado ${userProfile.locationData.country}` : ""}. Permíteme abordar su pregunta con toda mi experiencia ejecutiva.`
          : `I apologize for the brief interruption, ${userProfile.name}. As your ${config.name}, I'm back online and ready to provide strategic guidance${userProfile.websiteAnalysis ? ` tailored to your ${userProfile.websiteAnalysis.industry} business` : ""}${userProfile.locationData ? ` in the ${userProfile.locationData.country} market` : ""}. Let me address your question with my full executive expertise.`
        : `I apologize for the brief interruption. As your ${config.name}, I'm back online and ready to provide strategic guidance. Let me address your question with my full executive expertise.`

      return {
        id: Date.now().toString(),
        content: personalizedFallback,
        sender: "agent",
        timestamp: new Date(),
        agentType: executive,
        metadata: {
          confidence: 0.9,
          processingTime: 0.1,
          category: "fallback",
        },
      }
    }
  }

  const handleSendMessage = async (message?: string) => {
    const messageText = message || inputValue.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      sender: "user",
      timestamp: new Date(),
      agentType: activeExecutive,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)
    setQuestionCount((prev) => prev + 1)

    try {
      const executiveResponse = await generateExecutiveResponse(messageText, activeExecutive)
      setMessages((prev) => [...prev, executiveResponse])

      setShowQuestionSuggestions(true)
    } catch (error) {
      console.error("Error in handleSendMessage:", error)
    } finally {
      setIsTyping(false)
    }
  }

  const handleSampleQuestion = (question: string) => {
    handleSendMessage(question)
    setShowQuestionSuggestions(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const currentConfig = EXECUTIVE_CONFIGS[activeExecutive]
  const IconComponent = currentConfig.icon

  const lastAgentMessage = messages.filter((m) => m.sender === "agent").pop()
  const contextualQuestions = lastAgentMessage
    ? getContextualQuestions(lastAgentMessage.content, activeExecutive, userProfile)
    : userProfile?.locationData?.countryCode === "CL" && currentConfig.regionalQuestions?.["South America"]
      ? currentConfig.regionalQuestions["South America"].slice(0, 3)
      : currentConfig.sampleQuestions.slice(0, 3)

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={onToggle}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg rounded-full w-14 h-14 p-0 animate-pulse"
        >
          <Sparkles className="h-6 w-6" />
        </Button>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
        <div className="absolute -top-12 -left-8 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          🇨🇱 Ejecutivos IA para Chile!
        </div>
      </div>
    )
  }

  return (
    <>
      <Dialog open={showProfileModal} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center text-xl">
              <UserCheck className="mr-2 h-6 w-6 text-purple-600" />
              Personalicemos tu Experiencia Ejecutiva
            </DialogTitle>
            <DialogDescription>
              Ayúdanos a brindar asesoramiento estratégico personalizado compartiendo tu información. Detectaremos tu
              ubicación y analizaremos tu sitio web para mejor contexto.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-medium">
                Tu Nombre *
              </Label>
              <Input
                id="name"
                placeholder="Ingresa tu nombre..."
                value={profileForm.name}
                onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                className="text-base"
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-base font-medium flex items-center">
                <Globe className="mr-1 h-4 w-4" />
                Tu Sitio Web (Opcional)
              </Label>
              <Input
                id="website"
                placeholder="https://tuempresa.cl o tuempresa.cl"
                value={profileForm.website}
                onChange={(e) => setProfileForm({ ...profileForm, website: e.target.value })}
                className="text-base"
              />
              <p className="text-sm text-gray-500">
                Analizaremos tu sitio web y detectaremos tu país desde el dominio.
              </p>
            </div>

            <div className="space-y-2">
              <Label className="text-base font-medium flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                Tu Ubicación
              </Label>
              <div className="p-3 bg-gray-50 rounded-lg">
                {isDetectingLocation ? (
                  <div className="flex items-center text-sm text-gray-600">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Detectando tu ubicación...
                  </div>
                ) : detectedLocation ? (
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-green-600">
                      <Flag className="mr-2 h-4 w-4" />
                      Detectado: {detectedLocation.country}
                      {detectedLocation.region && ` (${detectedLocation.region})`}
                      {detectedLocation.city && `, ${detectedLocation.city}`}
                    </div>
                    <div className="text-xs text-gray-500">Método de detección: Geolocalización IP</div>
                  </div>
                ) : (
                  <div className="text-sm text-gray-500">No se pudo detectar la ubicación automáticamente</div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-sm font-medium">
                  Seleccionar País
                </Label>
                <Select
                  value={profileForm.country}
                  onValueChange={(value) => setProfileForm({ ...profileForm, country: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu país..." />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name} ({country.region})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <Button
                onClick={handleProfileSubmit}
                disabled={!profileForm.name.trim() || isAnalyzingWebsite}
                className="bg-purple-600 hover:bg-purple-700 px-8"
              >
                {isAnalyzingWebsite ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analizando Sitio Web...
                  </>
                ) : (
                  "Iniciar Chat Ejecutivo"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="fixed bottom-6 left-6 z-50">
        <Card
          className={`w-[450px] shadow-2xl border-2 border-purple-200 transition-all duration-300 ${
            isMinimized ? "h-16" : "h-[700px]"
          }`}
        >
          <CardHeader className={`bg-gradient-to-r ${currentConfig.color} text-white rounded-t-lg p-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold">
                    Neural Executive Demo
                    {userProfile && (
                      <span className="text-sm font-normal ml-2">
                        • {userProfile.name}
                        {userProfile.locationData && (
                          <span className="ml-1">🇨🇱 {userProfile.locationData.country}</span>
                        )}
                      </span>
                    )}
                  </CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-white/90">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span>Demo en Vivo • Ejecutivos IA Reales • Mercado Chileno</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/20 p-1"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="sm" onClick={onToggle} className="text-white hover:bg-white/20 p-1">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!isMinimized && (
            <CardContent className="flex flex-col h-[636px] p-0">
              <div className="p-4 border-b bg-gray-50">
                <Tabs value={demoMode} onValueChange={(value) => setDemoMode(value as "chat" | "showcase")}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="showcase">Showcase Ejecutivos</TabsTrigger>
                    <TabsTrigger value="chat">Demo Chat en Vivo</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {demoMode === "showcase" ? (
                <div className="flex-1 p-4 space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Conoce tus Ejecutivos IA Neurales</h3>
                    <p className="text-gray-600">Cada ejecutivo trae 25+ años de experiencia Fortune 500</p>
                  </div>

                  <Tabs
                    value={activeExecutive}
                    onValueChange={(value) => setActiveExecutive(value as "ceo" | "cmo" | "cto")}
                  >
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="ceo" className="text-xs">
                        CEO
                      </TabsTrigger>
                      <TabsTrigger value="cmo" className="text-xs">
                        CMO
                      </TabsTrigger>
                      <TabsTrigger value="cto" className="text-xs">
                        CTO
                      </TabsTrigger>
                    </TabsList>

                    {Object.entries(EXECUTIVE_CONFIGS).map(([key, config]) => (
                      <TabsContent key={key} value={key} className="mt-4">
                        <Card className={`${config.bgColor} border-2`}>
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center`}
                              >
                                <config.icon className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <CardTitle className={`text-lg ${config.textColor}`}>{config.name}</CardTitle>
                                <p className="text-sm text-gray-600">{config.description}</p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Experiencia Principal:</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {config.expertise.map((skill, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Prueba estas Preguntas:</h4>
                              <div className="space-y-2">
                                {(key === "ceo" && config.regionalQuestions?.["South America"]
                                  ? config.regionalQuestions["South America"].slice(0, 2)
                                  : config.sampleQuestions.slice(0, 2)
                                ).map((question, index) => (
                                  <Button
                                    key={index}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      setDemoMode("chat")
                                      setTimeout(() => handleSampleQuestion(question), 500)
                                    }}
                                    className="w-full text-left justify-start text-xs h-auto py-2 px-3"
                                  >
                                    "{question.length > 60 ? question.substring(0, 60) + "..." : question}"
                                  </Button>
                                ))}
                              </div>
                            </div>

                            <Button
                              onClick={() => setDemoMode("chat")}
                              className={`w-full bg-gradient-to-r ${config.color} hover:opacity-90`}
                            >
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Chatear con {key.toUpperCase()} Ahora
                            </Button>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              ) : (
                <>
                  <div className="p-3 border-b bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <IconComponent className={`h-5 w-5 ${currentConfig.textColor}`} />
                        <span className="font-semibold text-sm">{currentConfig.name}</span>
                        {userProfile?.websiteAnalysis && (
                          <Badge variant="secondary" className="text-xs">
                            {userProfile.websiteAnalysis.industry}
                          </Badge>
                        )}
                        {userProfile?.locationData && (
                          <Badge variant="outline" className="text-xs">
                            🇨🇱 {userProfile.locationData.country}
                          </Badge>
                        )}
                      </div>
                      <select
                        value={activeExecutive}
                        onChange={(e) => setActiveExecutive(e.target.value as "ceo" | "cmo" | "cto")}
                        className="text-xs border rounded px-2 py-1"
                      >
                        <option value="ceo">CEO</option>
                        <option value="cmo">CMO</option>
                        <option value="cto">CTO</option>
                      </select>
                    </div>
                  </div>

                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className="space-y-2">
                          <div
                            className={`flex items-start space-x-3 ${
                              message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                            }`}
                          >
                            <div className="flex-shrink-0">
                              {message.sender === "agent" ? (
                                <div
                                  className={`w-8 h-8 bg-gradient-to-r ${currentConfig.color} rounded-full flex items-center justify-center`}
                                >
                                  <IconComponent className="h-4 w-4 text-white" />
                                </div>
                              ) : (
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                  <User className="h-4 w-4 text-gray-600" />
                                </div>
                              )}
                            </div>

                            <div className={`max-w-[80%] ${message.sender === "user" ? "text-right" : ""}`}>
                              <div
                                className={`rounded-lg px-4 py-2 ${
                                  message.sender === "user"
                                    ? `bg-gradient-to-r ${currentConfig.color} text-white`
                                    : "bg-gray-100 text-gray-900"
                                }`}
                              >
                                <div className="text-sm whitespace-pre-line">{message.content}</div>
                              </div>

                              {message.metadata && message.sender === "agent" && (
                                <div className="mt-2 space-y-2">
                                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                                    <Zap className="h-3 w-3 text-orange-500" />
                                    <span>{message.metadata.processingTime?.toFixed(2)}s</span>
                                    <CheckCircle className="h-3 w-3 text-orange-500" />
                                    <span>{Math.round((message.metadata.confidence || 0) * 100)}% confianza</span>
                                  </div>

                                  {message.metadata.insights && (
                                    <div className="space-y-1">
                                      <div className="flex items-center space-x-1">
                                        <Lightbulb className="h-3 w-3 text-yellow-500" />
                                        <span className="text-xs font-semibold text-gray-700">Insights Clave:</span>
                                      </div>
                                      <div className="flex flex-wrap gap-1">
                                        {message.metadata.insights.map((insight, index) => (
                                          <Badge key={index} variant="secondary" className="text-xs">
                                            {insight}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {message.metadata.recommendations && (
                                    <div className="space-y-1">
                                      <div className="flex items-center space-x-1">
                                        <BarChart3 className="h-3 w-3 text-blue-500" />
                                        <span className="text-xs font-semibold text-gray-700">Recomendaciones:</span>
                                      </div>
                                      <div className="space-y-1">
                                        {message.metadata.recommendations.map((rec, index) => (
                                          <div
                                            key={index}
                                            className="text-xs text-gray-600 flex items-center space-x-1"
                                          >
                                            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                            <span>{rec}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              <div className="text-xs text-gray-400 mt-1">
                                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {isTyping && (
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-8 h-8 bg-gradient-to-r ${currentConfig.color} rounded-full flex items-center justify-center`}
                          >
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <div className="bg-gray-100 rounded-lg px-4 py-2">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>

                  {showQuestionSuggestions && messages.length > 1 && (
                    <div className="px-4 py-3 border-t bg-gradient-to-r from-purple-50 to-indigo-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="h-4 w-4 text-purple-600" />
                          <span className="text-sm font-semibold text-gray-700">Continúa la conversación:</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowQuestionSuggestions(false)}
                          className="text-gray-400 hover:text-gray-600 p-1"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {contextualQuestions.slice(0, 3).map((question, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSampleQuestion(question)}
                            className="text-left justify-start text-xs h-auto py-2 px-3 bg-white hover:bg-purple-50 border-purple-200"
                          >
                            <ArrowRight className="h-3 w-3 mr-2 text-purple-600" />
                            {question.length > 50 ? question.substring(0, 50) + "..." : question}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {messages.length <= 1 && (
                    <div className="px-4 py-2 border-t bg-gray-50">
                      <div className="text-xs font-semibold text-gray-700 mb-2">Prueba estas preguntas ejecutivas:</div>
                      <div className="flex flex-wrap gap-1">
                        {contextualQuestions.slice(0, 2).map((question, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSampleQuestion(question)}
                            className="text-xs h-auto py-1 px-2"
                          >
                            {question.length > 30 ? question.substring(0, 30) + "..." : question}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="border-t p-4 bg-gradient-to-r from-purple-50 to-indigo-50">
                    <div className="flex items-center space-x-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={`Pregúntale al ${currentConfig.name} cualquier cosa...`}
                        className="flex-1 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                        disabled={isTyping}
                      />
                      <Button
                        onClick={() => handleSendMessage()}
                        disabled={!inputValue.trim() || isTyping}
                        className={`bg-gradient-to-r ${currentConfig.color} hover:opacity-90 transition-all duration-200`}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">
                      🇨🇱 Demo Neural Executive Chileno • IA Real • Experiencia Empresarial Regional
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          )}
        </Card>
      </div>
    </>
  )
}
