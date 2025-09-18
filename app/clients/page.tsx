"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Star,
  MessageCircle,
  ArrowRight,
  Building,
  Globe,
  Award,
  Database,
  MessageSquare,
  Zap,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

const translations = {
  en: {
    title: "Our Clients",
    subtitle:
      "Trusted by leading companies worldwide to deliver exceptional AI solutions that connect to any API and transform data into natural conversation.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    whatsappText: "Hello N3uralia, I'd like to learn more about your conversational AI solutions",
    keyCapability: "Key Capability",
    apiIntegration: "API Integration & Conversational AI",
    clients: {
      parrotfyia: {
        company: "ParrotfyIA",
        industry: "Business Intelligence",
        description:
          "Advanced conversational AI system that connects to any ERP API and transforms complex business data into natural language responses. Users can ask questions about inventory, sales, finances, and operations in plain language and receive intelligent, contextual answers.",
        capabilities: [
          "Connects to any ERP system API (SAP, Oracle, Microsoft Dynamics, custom systems)",
          "Transforms complex database queries into natural language conversations",
          "Real-time data processing and intelligent response generation",
          "Multi-language support for global business operations",
          "Context-aware conversations that understand business relationships",
          "Secure API authentication and data encryption protocols",
        ],
        examples: [
          "User: 'How are our Q3 sales performing?' → AI: 'Your Q3 sales are up 15% compared to last quarter, with the highest growth in the electronics division at $2.3M...'",
          "User: 'Do we have enough inventory for the Johnson order?' → AI: 'Yes, we have sufficient stock. The Johnson order requires 500 units and we currently have 1,200 units available...'",
          "User: 'Show me our top customers this month' → AI: 'Here are your top 5 customers by revenue this month: TechCorp ($45K), GlobalSoft ($38K)...'",
        ],
      },
      ecosuelolab: {
        company: "EcosueloLab",
        industry: "Agriculture Technology",
        description:
          "Intelligent agricultural system that connects to satellite data APIs, weather services, and soil sensor networks to provide conversational insights about crop conditions. Farmers can ask natural language questions and receive detailed, actionable responses.",
        capabilities: [
          "Integrates with satellite imagery APIs (NASA, ESA, commercial providers)",
          "Connects to weather service APIs and IoT soil sensors",
          "Processes multi-source agricultural data in real-time",
          "Converts complex agricultural analytics into simple conversations",
          "Provides personalized farming recommendations based on specific field conditions",
          "Supports multiple languages for international agricultural operations",
        ],
        examples: [
          "Farmer: 'How is my corn field doing?' → AI: 'Your corn field in sector 3 is showing healthy growth. Satellite data indicates 85% crop coverage with good chlorophyll levels...'",
          "Farmer: 'What nutrients does sector 5 need?' → AI: 'Based on soil analysis, sector 5 needs nitrogen supplementation. I recommend applying 40kg/hectare of urea fertilizer...'",
          "Farmer: 'Should I irrigate tomorrow?' → AI: 'Weather forecast shows 15mm of rain expected tomorrow afternoon. I recommend delaying irrigation until Thursday...'",
        ],
      },
      despegacarrera: {
        company: "Despega Tu Carrera",
        industry: "Education Technology",
        description:
          "Comprehensive AI-powered career coaching platform that connects to job market APIs, professional development resources, and career databases to provide personalized mentoring through natural conversation.",
        capabilities: [
          "Integrates with job board APIs (LinkedIn, Indeed, local job markets)",
          "Connects to professional development and certification databases",
          "Processes career data and market trends in real-time",
          "Provides personalized career guidance through natural dialogue",
          "Offers contextual advice based on individual career profiles",
          "Supports career development in multiple languages and markets",
        ],
        examples: [
          "User: 'What skills should I learn for data science?' → AI: 'Based on current market trends, focus on Python, SQL, and machine learning. I see 340 data science jobs requiring these skills...'",
          "User: 'How should I prepare for my marketing interview?' → AI: 'For your marketing interview at TechStart, prepare examples of campaign ROI. Research their recent product launch and suggest improvement strategies...'",
          "User: 'Is my resume competitive?' → AI: 'Your resume shows strong technical skills, but add more quantified achievements. For example, instead of managed projects, say managed 5 projects worth $2M...'",
        ],
      },
    },
    stats: {
      clients: "50+ Clients",
      satisfaction: "96% Satisfaction",
      projects: "200+ Projects",
      countries: "15+ Countries",
    },
    ctaTitle: "Ready to Transform Your Data into Conversations?",
    ctaSubtitle:
      "Discover how N3uralia can connect your APIs and databases to create intelligent conversational experiences for your users.",
  },
  es: {
    title: "Nuestros Clientes",
    subtitle:
      "Confiado por empresas líderes a nivel mundial para entregar soluciones IA excepcionales que se conectan a cualquier API y transforman datos en conversación natural.",
    getStarted: "Comenzar",
    learnMore: "Saber Más",
    whatsappText: "Hola N3uralia, me gustaría conocer más sobre sus soluciones IA conversacionales",
    keyCapability: "Capacidad Clave",
    apiIntegration: "Integración de APIs e IA Conversacional",
    clients: {
      parrotfyia: {
        company: "ParrotfyIA",
        industry: "Inteligencia de Negocios",
        description:
          "Sistema avanzado de IA conversacional que se conecta a cualquier API de ERP y transforma datos empresariales complejos en respuestas de lenguaje natural. Los usuarios pueden hacer preguntas sobre inventario, ventas, finanzas y operaciones en lenguaje simple y recibir respuestas inteligentes y contextuales.",
        capabilities: [
          "Se conecta a cualquier API de sistema ERP (SAP, Oracle, Microsoft Dynamics, sistemas personalizados)",
          "Transforma consultas complejas de base de datos en conversaciones de lenguaje natural",
          "Procesamiento de datos en tiempo real y generación inteligente de respuestas",
          "Soporte multiidioma para operaciones comerciales globales",
          "Conversaciones conscientes del contexto que entienden relaciones comerciales",
          "Protocolos seguros de autenticación API y encriptación de datos",
        ],
        examples: [
          "Usuario: '¿Cómo van nuestras ventas del Q3?' → IA: 'Sus ventas del Q3 han aumentado 15% comparado al trimestre pasado, con el mayor crecimiento en la división de electrónicos con $2.3M...'",
          "Usuario: '¿Tenemos suficiente inventario para el pedido de Johnson?' → IA: 'Sí, tenemos stock suficiente. El pedido de Johnson requiere 500 unidades y actualmente tenemos 1,200 unidades disponibles...'",
          "Usuario: 'Muéstrame nuestros mejores clientes este mes' → IA: 'Aquí están sus 5 mejores clientes por ingresos este mes: TechCorp ($45K), GlobalSoft ($38K)...'",
        ],
      },
      ecosuelolab: {
        company: "EcosueloLab",
        industry: "Tecnología Agrícola",
        description:
          "Sistema agrícola inteligente que se conecta a APIs de datos satelitales, servicios meteorológicos y redes de sensores de suelo para proporcionar insights conversacionales sobre condiciones de cultivos. Los agricultores pueden hacer preguntas en lenguaje natural y recibir respuestas detalladas y accionables.",
        capabilities: [
          "Se integra con APIs de imágenes satelitales (NASA, ESA, proveedores comerciales)",
          "Se conecta a APIs de servicios meteorológicos y sensores IoT de suelo",
          "Procesa datos agrícolas de múltiples fuentes en tiempo real",
          "Convierte análisis agrícolas complejos en conversaciones simples",
          "Proporciona recomendaciones agrícolas personalizadas basadas en condiciones específicas del campo",
          "Soporta múltiples idiomas para operaciones agrícolas internacionales",
        ],
        examples: [
          "Agricultor: '¿Cómo está mi campo de maíz?' → IA: 'Su campo de maíz en el sector 3 muestra crecimiento saludable. Los datos satelitales indican 85% de cobertura de cultivo con buenos niveles de clorofila...'",
          "Agricultor: '¿Qué nutrientes necesita el sector 5?' → IA: 'Basado en el análisis de suelo, el sector 5 necesita suplementación de nitrógeno. Recomiendo aplicar 40kg/hectárea de fertilizante de urea...'",
          "Agricultor: '¿Debo regar mañana?' → IA: 'El pronóstico del tiempo muestra 15mm de lluvia esperada mañana por la tarde. Recomiendo retrasar el riego hasta el jueves...'",
        ],
      },
      despegacarrera: {
        company: "Despega Tu Carrera",
        industry: "Tecnología Educativa",
        description:
          "Plataforma integral de coaching profesional impulsada por IA que se conecta a APIs del mercado laboral, recursos de desarrollo profesional y bases de datos de carreras para proporcionar mentoría personalizada a través de conversación natural.",
        capabilities: [
          "Se integra con APIs de bolsas de trabajo (LinkedIn, Indeed, mercados laborales locales)",
          "Se conecta a bases de datos de desarrollo profesional y certificación",
          "Procesa datos de carrera y tendencias del mercado en tiempo real",
          "Proporciona orientación profesional personalizada a través de diálogo natural",
          "Ofrece consejos contextuales basados en perfiles profesionales individuales",
          "Soporta desarrollo profesional en múltiples idiomas y mercados",
        ],
        examples: [
          "Usuario: '¿Qué habilidades debo aprender para ciencia de datos?' → IA: 'Basado en tendencias actuales del mercado, enfócate en Python, SQL y aprendizaje automático. Veo 340 trabajos de ciencia de datos que requieren estas habilidades...'",
          "Usuario: '¿Cómo debo prepararme para mi entrevista de marketing?' → IA: 'Para tu entrevista de marketing en TechStart, prepara ejemplos de ROI de campañas. Investiga su lanzamiento de producto reciente y sugiere estrategias de mejora...'",
          "Usuario: '¿Es competitivo mi currículum?' → IA: 'Tu currículum muestra habilidades técnicas sólidas, pero agrega más logros cuantificados. Por ejemplo, en lugar de gestioné proyectos, di gestioné 5 proyectos valorados en $2M...'",
        ],
      },
    },
    stats: {
      clients: "50+ Clientes",
      satisfaction: "96% Satisfacción",
      projects: "200+ Proyectos",
      countries: "15+ Países",
    },
    ctaTitle: "¿Listo para Transformar Tus Datos en Conversaciones?",
    ctaSubtitle:
      "Descubre cómo N3uralia puede conectar tus APIs y bases de datos para crear experiencias conversacionales inteligentes para tus usuarios.",
  },
}

export default function ClientsPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t.whatsappText)
    window.open(`https://wa.me/56940946660?text=${message}`, "_blank")
  }

  const getLogoSize = (key: string) => {
    if (key === "parrotfyia" || key === "despegacarrera") {
      return {
        width: 180,
        height: 90,
        className: "h-20 w-auto object-contain filter brightness-0 invert",
      }
    }
    return {
      width: 120,
      height: 60,
      className: "h-12 w-auto object-contain filter brightness-0 invert",
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-gray-600 border-gray-300 bg-white">
            <Users className="w-4 h-4 mr-2" />
            {language === "es" ? "Clientes" : "Clients"}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">{t.subtitle}</p>
          <div className="w-24 h-px bg-gray-400 mx-auto mt-8"></div>
        </motion.div>

        {/* Key Capability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="bg-gray-50 border border-gray-200 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Database className="w-8 h-8 text-gray-600" />
                <MessageSquare className="w-8 h-8 text-gray-600" />
                <Zap className="w-8 h-8 text-gray-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">{t.keyCapability}</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">{t.apiIntegration}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {Object.entries(t.stats).map(([key, stat], index) => (
            <Card key={key} className="text-center p-6 bg-white border border-gray-200 shadow-sm">
              <div className="text-3xl font-light text-gray-900 mb-2">{stat}</div>
              <div className="text-sm text-gray-600 capitalize">
                {key === "clients" && <Users className="w-4 h-4 mx-auto mb-1 text-gray-400" />}
                {key === "satisfaction" && <Star className="w-4 h-4 mx-auto mb-1 text-gray-400" />}
                {key === "projects" && <Building className="w-4 h-4 mx-auto mb-1 text-gray-400" />}
                {key === "countries" && <Globe className="w-4 h-4 mx-auto mb-1 text-gray-400" />}
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Detailed Client Cases */}
        <div className="space-y-12 mb-16">
          {Object.entries(t.clients).map(([key, client], index) => {
            const logoSize = getLogoSize(key)
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden">
                  {/* Client Header - Black banner with logo only */}
                  <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                    <div className="flex items-center justify-center py-4">
                      <Image
                        src={`/logos/${key === "ecosuelolab" ? "ecosuelo-logo.png" : key === "parrotfyia" ? "parrotfy-logo.png" : "despega-tu-carrera-logo.png"}`}
                        alt={client.company}
                        width={logoSize.width}
                        height={logoSize.height}
                        className={logoSize.className}
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="p-8">
                    {/* Description */}
                    <div className="mb-8">
                      <p className="text-gray-700 text-lg leading-relaxed font-light">{client.description}</p>
                    </div>

                    {/* Capabilities */}
                    <div className="mb-8">
                      <h3 className="flex items-center gap-2 text-xl font-light text-gray-900 mb-4">
                        <Database className="w-6 h-6 text-gray-500" />
                        {language === "en" ? "Technical Capabilities" : "Capacidades Técnicas"}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {client.capabilities.map((capability, capIndex) => (
                          <div
                            key={capIndex}
                            className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200"
                          >
                            <Zap className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Conversation Examples */}
                    <div>
                      <h3 className="flex items-center gap-2 text-xl font-light text-gray-900 mb-4">
                        <MessageSquare className="w-6 h-6 text-gray-500" />
                        {language === "en" ? "Conversation Examples" : "Ejemplos de Conversación"}
                      </h3>
                      <div className="space-y-4">
                        {client.examples.map((example, exampleIndex) => (
                          <div
                            key={exampleIndex}
                            className="p-4 bg-gray-50 rounded-lg border border-gray-200 border-l-4 border-l-gray-400"
                          >
                            <p className="text-gray-700 text-sm font-mono leading-relaxed">{example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gray-900 text-white shadow-lg border-0">
            <CardContent className="p-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-gray-400" />
                <Award className="w-6 h-6 text-gray-400" />
                <Star className="w-6 h-6 text-gray-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-4">{t.ctaTitle}</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">{t.ctaSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.getStarted}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                  onClick={() => window.open("mailto:hello@n3uralia.com", "_blank")}
                >
                  <Users className="w-5 h-5 mr-2" />
                  {t.learnMore}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
