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
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const translations = {
  en: {
    title: "AI Products & Solutions",
    subtitle: "Complete AI-powered products designed to transform your business operations and customer experience.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    whatsappText: "Hello N3uralia, I'm interested in your AI Products & Solutions",
    products: {
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
    title: "Productos y Soluciones IA",
    subtitle:
      "Productos completos impulsados por IA diseñados para transformar las operaciones de tu negocio y la experiencia del cliente.",
    getStarted: "Comenzar",
    learnMore: "Saber Más",
    whatsappText: "Hola N3uralia, me interesan sus Productos y Soluciones IA",
    products: {
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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(t.products).map(([key, product], index) => {
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
                    <Button onClick={handleWhatsAppClick} className="w-full bg-slate-800 hover:bg-slate-900 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {t.getStarted}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
