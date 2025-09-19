"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Package,
  Sparkles,
  Zap,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Star,
  Bot,
  Database,
  Shield,
  TrendingUp,
  Users,
  ExternalLink,
  Globe,
  Palette,
  Hotel,
  TrendingUpIcon,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

const translations = {
  en: {
    title: "Our Products",
    subtitle: "Complete AI-powered products designed to transform your business operations and customer experience.",
    visitWebsite: "Visit Website",
    getStarted: "Get Started",
    learnMore: "Learn More",
    whatsappText: "Hello N3uralia, I'm interested in your Products",
    keyFeatures: "Key Features",
    products: {
      neuralia360: {
        title: "N3uralia 360°",
        subtitle: "Full Dome and VR Studio",
        description:
          "Revolutionary mathematical art platform that creates stunning visual content for Full Dome 360° projection systems and immersive VR environments. Our advanced algorithms generate breathtaking mathematical visualizations that transform any space into an immersive artistic experience.",
        detailedDescription:
          "N3uralia 360° combines cutting-edge mathematics with artistic vision to create unprecedented visual experiences. Our platform generates real-time mathematical art that adapts to dome environments, planetariums, and VR headsets, offering audiences a journey through the beauty of mathematical concepts visualized in stunning detail.",
        features: [
          "Real-time mathematical art generation",
          "Full Dome 360° projection compatibility",
          "VR environment optimization",
          "Custom algorithm development",
          "Interactive mathematical visualizations",
          "Multi-platform deployment",
        ],
        website: "https://n3uralia360.com",
        price: "Custom pricing",
      },
      hawo: {
        title: "Hawo AI Meeting Rooms",
        subtitle: "Virtual Hotel Solution",
        description:
          "Next-generation virtual hotel meeting room platform powered by advanced AI. Features intelligent moderation, real-time multi-language translation, smart scheduling systems, and seamless collaboration tools designed specifically for the hospitality industry.",
        detailedDescription:
          "Hawo revolutionizes the hotel industry by providing AI-powered virtual meeting spaces that enhance guest experiences and operational efficiency. Our platform integrates seamlessly with hotel management systems, offering guests and businesses a premium virtual meeting experience with enterprise-grade features.",
        features: [
          "AI-powered meeting moderation",
          "Real-time multi-language translation",
          "Intelligent scheduling and booking",
          "Hotel management system integration",
          "Premium virtual environments",
          "Advanced analytics and reporting",
        ],
        website: "https://hawo.ai",
        price: "From $199/month",
      },
      rosetta: {
        title: "Rosetta",
        subtitle: "Crypto Trading Co-Pilot",
        description:
          "Advanced AI-powered cryptocurrency trading platform that predicts market movements with 90% accuracy. Rosetta analyzes market patterns, sentiment, and technical indicators to provide intelligent trading recommendations for any cryptocurrency.",
        detailedDescription:
          "Rosetta leverages sophisticated machine learning algorithms and real-time market analysis to provide traders with unprecedented market insights. Our AI processes vast amounts of market data, social sentiment, and technical indicators to deliver highly accurate predictions and trading strategies.",
        features: [
          "90% market prediction accuracy",
          "Multi-cryptocurrency support",
          "Real-time market analysis",
          "Sentiment analysis integration",
          "Risk management tools",
          "Automated trading strategies",
        ],
        website: "https://rosetta.n3uralia.com",
        price: "From $99/month",
      },
    },
    additionalProducts: {
      conversationalAI: {
        title: "Conversational AI Platform",
        description:
          "Complete chatbot and virtual assistant platform with natural language processing and multi-channel support.",
        features: ["Natural language understanding", "Multi-channel deployment", "Advanced analytics dashboard"],
        price: "From $299/month",
      },
      aiAnalytics: {
        title: "AI Analytics Suite",
        description:
          "Comprehensive analytics platform powered by AI to provide actionable insights and predictive analytics.",
        features: ["Predictive analytics", "Real-time dashboards", "Custom reporting tools"],
        price: "From $499/month",
      },
      automationPlatform: {
        title: "Process Automation Platform",
        description:
          "End-to-end automation platform that streamlines business processes using AI and machine learning.",
        features: ["Workflow automation", "AI-powered decision making", "Integration with existing systems"],
        price: "From $799/month",
      },
      enterpriseSuite: {
        title: "Enterprise AI Suite",
        description:
          "Complete enterprise solution combining all AI tools with advanced security, compliance, and scalability.",
        features: ["Full AI toolkit", "Enterprise security", "24/7 premium support"],
        price: "Custom pricing",
      },
    },
  },
  es: {
    title: "Nuestros Productos",
    subtitle:
      "Productos completos impulsados por IA diseñados para transformar las operaciones de tu negocio y la experiencia del cliente.",
    visitWebsite: "Visitar Sitio Web",
    getStarted: "Comenzar",
    learnMore: "Saber Más",
    whatsappText: "Hola N3uralia, me interesan sus Productos",
    keyFeatures: "Características Principales",
    products: {
      neuralia360: {
        title: "N3uralia 360°",
        subtitle: "Estudio Full Dome y VR",
        description:
          "Plataforma revolucionaria de arte matemático que crea contenido visual impresionante para sistemas de proyección Full Dome 360° y entornos VR inmersivos. Nuestros algoritmos avanzados generan visualizaciones matemáticas impresionantes que transforman cualquier espacio en una experiencia artística inmersiva.",
        detailedDescription:
          "N3uralia 360° combina matemáticas de vanguardia con visión artística para crear experiencias visuales sin precedentes. Nuestra plataforma genera arte matemático en tiempo real que se adapta a entornos de cúpula, planetarios y cascos VR, ofreciendo a las audiencias un viaje a través de la belleza de los conceptos matemáticos visualizados con detalles impresionantes.",
        features: [
          "Generación de arte matemático en tiempo real",
          "Compatibilidad con proyección Full Dome 360°",
          "Optimización para entornos VR",
          "Desarrollo de algoritmos personalizados",
          "Visualizaciones matemáticas interactivas",
          "Despliegue multiplataforma",
        ],
        website: "https://n3uralia360.com",
        price: "Precio personalizado",
      },
      hawo: {
        title: "Salas de Reuniones IA Hawo",
        subtitle: "Solución Hotelera Virtual",
        description:
          "Plataforma de salas de reuniones virtuales hoteleras de próxima generación impulsada por IA avanzada. Cuenta con moderación inteligente, traducción multiidioma en tiempo real, sistemas de programación inteligente y herramientas de colaboración perfecta diseñadas específicamente para la industria hotelera.",
        detailedDescription:
          "Hawo revoluciona la industria hotelera proporcionando espacios de reuniones virtuales impulsados por IA que mejoran las experiencias de los huéspedes y la eficiencia operativa. Nuestra plataforma se integra perfectamente con los sistemas de gestión hotelera, ofreciendo a huéspedes y empresas una experiencia de reunión virtual premium con características de nivel empresarial.",
        features: [
          "Moderación de reuniones impulsada por IA",
          "Traducción multiidioma en tiempo real",
          "Programación y reservas inteligentes",
          "Integración con sistemas de gestión hotelera",
          "Entornos virtuales premium",
          "Análisis y reportes avanzados",
        ],
        website: "https://hawo.ai",
        price: "Desde $199/mes",
      },
      rosetta: {
        title: "Rosetta",
        subtitle: "Co-Piloto de Trading Crypto",
        description:
          "Plataforma avanzada de trading de criptomonedas impulsada por IA que predice movimientos del mercado con 90% de precisión. Rosetta analiza patrones de mercado, sentimiento e indicadores técnicos para proporcionar recomendaciones de trading inteligentes para cualquier criptomoneda.",
        detailedDescription:
          "Rosetta aprovecha algoritmos sofisticados de machine learning y análisis de mercado en tiempo real para proporcionar a los traders insights de mercado sin precedentes. Nuestra IA procesa vastas cantidades de datos de mercado, sentimiento social e indicadores técnicos para entregar predicciones altamente precisas y estrategias de trading.",
        features: [
          "90% de precisión en predicciones de mercado",
          "Soporte para múltiples criptomonedas",
          "Análisis de mercado en tiempo real",
          "Integración de análisis de sentimiento",
          "Herramientas de gestión de riesgo",
          "Estrategias de trading automatizadas",
        ],
        website: "https://rosetta.n3uralia.com",
        price: "Desde $99/mes",
      },
    },
    additionalProducts: {
      conversationalAI: {
        title: "Plataforma de IA Conversacional",
        description:
          "Plataforma completa de chatbots y asistentes virtuales con procesamiento de lenguaje natural y soporte multicanal.",
        features: ["Comprensión de lenguaje natural", "Despliegue multicanal", "Dashboard de análisis avanzado"],
        price: "Desde $299/mes",
      },
      aiAnalytics: {
        title: "Suite de Análisis IA",
        description:
          "Plataforma de análisis integral impulsada por IA para proporcionar insights accionables y análisis predictivos.",
        features: ["Análisis predictivos", "Dashboards en tiempo real", "Herramientas de reportes personalizados"],
        price: "Desde $499/mes",
      },
      automationPlatform: {
        title: "Plataforma de Automatización",
        description:
          "Plataforma de automatización integral que optimiza procesos empresariales usando IA y machine learning.",
        features: [
          "Automatización de flujos de trabajo",
          "Toma de decisiones impulsada por IA",
          "Integración con sistemas existentes",
        ],
        price: "Desde $799/mes",
      },
      enterpriseSuite: {
        title: "Suite Empresarial IA",
        description:
          "Solución empresarial completa que combina todas las herramientas IA con seguridad avanzada, cumplimiento y escalabilidad.",
        features: ["Kit completo de herramientas IA", "Seguridad empresarial", "Soporte premium 24/7"],
        price: "Precio personalizado",
      },
    },
  },
}

const productIcons = {
  neuralia360: Palette,
  hawo: Hotel,
  rosetta: TrendingUpIcon,
  conversationalAI: Bot,
  aiAnalytics: TrendingUp,
  automationPlatform: Zap,
  enterpriseSuite: Package,
}

export default function ProductsPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t.whatsappText)
    window.open(`https://wa.me/56940946660?text=${message}`, "_blank")
  }

  const handleWebsiteClick = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-slate-600 border-slate-300">
            <Package className="w-4 h-4 mr-2" />
            {language === "es" ? "Productos IA" : "AI Products"}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">{t.title}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Featured Products - N3uralia Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === "es" ? "Ecosistema N3uralia" : "N3uralia Ecosystem"}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto" />
          </div>

          <div className="space-y-12">
            {Object.entries(t.products).map(([key, product], index) => {
              const IconComponent = productIcons[key as keyof typeof productIcons]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={key}
                  id={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""} scroll-mt-24`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                          {product.title}
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400">{product.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{product.description}</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{product.detailedDescription}</p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{t.keyFeatures}:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        onClick={() => handleWebsiteClick(product.website)}
                        className="bg-slate-800 hover:bg-slate-900 text-white"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        {t.visitWebsite}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="outline"
                        className="border-slate-300 bg-transparent"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {t.getStarted}
                      </Button>
                    </div>

                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-0 text-lg px-4 py-2">
                      {product.price}
                    </Badge>
                  </div>

                  {/* Logo/Visual */}
                  <div className={`flex justify-center ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="w-80 h-80 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Image
                        src={
                          key === "neuralia360"
                            ? "/logos/n3u360-logo.png"
                            : key === "hawo"
                              ? "/logos/hawo-final-logo.png"
                              : "/logos/rosetta-logo.png"
                        }
                        alt={`${product.title} logo`}
                        width={key === "hawo" ? 280 : 240}
                        height={key === "hawo" ? 120 : 120}
                        className="object-contain filter dark:brightness-0 dark:invert"
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Additional Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === "es" ? "Soluciones Adicionales" : "Additional Solutions"}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(t.additionalProducts).map(([key, product], index) => {
              const IconComponent = productIcons[key as keyof typeof productIcons]
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                            <IconComponent className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                          </div>
                          <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                            {product.title}
                          </CardTitle>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">
                          {product.price}
                        </Badge>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{product.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3 mb-6">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-slate-800 hover:bg-slate-900 text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {t.getStarted}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="shadow-xl border-2 border-slate-200 dark:border-slate-700">
            <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="w-6 h-6" />
                {language === "es" ? "Características Principales" : "Key Features"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {language === "es" ? "IA Avanzada" : "Advanced AI"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {language === "es"
                      ? "Algoritmos de última generación para máximo rendimiento"
                      : "Cutting-edge algorithms for maximum performance"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {language === "es" ? "Integración" : "Integration"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {language === "es"
                      ? "Conecta fácilmente con tus sistemas existentes"
                      : "Easily connect with your existing systems"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {language === "es" ? "Seguridad" : "Security"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {language === "es"
                      ? "Protección de datos de nivel empresarial"
                      : "Enterprise-grade data protection"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {language === "es" ? "Soporte" : "Support"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {language === "es" ? "Equipo de expertos disponible 24/7" : "Expert team available 24/7"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-2xl border-0">
            <CardContent className="p-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400" />
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === "es"
                  ? "¿Listo para potenciar tu negocio con IA?"
                  : "Ready to power your business with AI?"}
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                {language === "es"
                  ? "Descubre cómo nuestros productos IA pueden transformar tu empresa y mejorar la experiencia de tus clientes."
                  : "Discover how our AI products can transform your business and improve your customer experience."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.getStarted}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  onClick={() => window.open("mailto:hello@n3uralia.com", "_blank")}
                >
                  <Package className="w-5 h-5 mr-2" />
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
