"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Server,
  Database,
  Cloud,
  Shield,
  Zap,
  Globe,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Star,
  Cpu,
  Network,
  Lock,
  BarChart3,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const translations = {
  en: {
    title: "AI Infrastructure Systems",
    subtitle: "Enterprise-grade infrastructure powering intelligent automation and scalable AI solutions.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    whatsappText: "Hello N3uralia, I'm interested in AI Infrastructure Systems for my business",
    systems: {
      cloudInfrastructure: {
        title: "Cloud Infrastructure",
        description:
          "Scalable cloud architecture designed for AI workloads with automatic scaling and global distribution.",
        features: ["Auto-scaling capabilities", "Global CDN distribution", "99.9% uptime guarantee"],
      },
      dataManagement: {
        title: "Data Management",
        description:
          "Advanced data pipelines and storage solutions optimized for AI training and real-time processing.",
        features: ["Real-time data processing", "Secure data encryption", "Automated backups"],
      },
      securityFramework: {
        title: "Security Framework",
        description:
          "Enterprise-grade security with end-to-end encryption, compliance monitoring, and threat detection.",
        features: ["End-to-end encryption", "SOC 2 compliance", "24/7 threat monitoring"],
      },
      performanceMonitoring: {
        title: "Performance Monitoring",
        description: "Advanced monitoring and analytics platform providing real-time insights into system performance.",
        features: ["Real-time analytics", "Predictive maintenance", "Custom dashboards"],
      },
    },
  },
  es: {
    title: "Sistemas de Infraestructura IA",
    subtitle:
      "Infraestructura de nivel empresarial que impulsa la automatización inteligente y soluciones IA escalables.",
    getStarted: "Comenzar",
    learnMore: "Saber Más",
    whatsappText: "Hola N3uralia, me interesan los Sistemas de Infraestructura IA para mi empresa",
    systems: {
      cloudInfrastructure: {
        title: "Infraestructura en la Nube",
        description:
          "Arquitectura en la nube escalable diseñada para cargas de trabajo IA con escalado automático y distribución global.",
        features: ["Capacidades de auto-escalado", "Distribución CDN global", "Garantía de 99.9% uptime"],
      },
      dataManagement: {
        title: "Gestión de Datos",
        description:
          "Pipelines de datos avanzados y soluciones de almacenamiento optimizadas para entrenamiento IA y procesamiento en tiempo real.",
        features: ["Procesamiento de datos en tiempo real", "Encriptación segura de datos", "Respaldos automatizados"],
      },
      securityFramework: {
        title: "Marco de Seguridad",
        description:
          "Seguridad de nivel empresarial con encriptación de extremo a extremo, monitoreo de cumplimiento y detección de amenazas.",
        features: ["Encriptación de extremo a extremo", "Cumplimiento SOC 2", "Monitoreo de amenazas 24/7"],
      },
      performanceMonitoring: {
        title: "Monitoreo de Rendimiento",
        description:
          "Plataforma avanzada de monitoreo y análisis que proporciona insights en tiempo real sobre el rendimiento del sistema.",
        features: ["Análisis en tiempo real", "Mantenimiento predictivo", "Dashboards personalizados"],
      },
    },
  },
}

const systemIcons = {
  cloudInfrastructure: Cloud,
  dataManagement: Database,
  securityFramework: Shield,
  performanceMonitoring: BarChart3,
}

export default function SystemsPage() {
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
            <Server className="w-4 h-4 mr-2" />
            {language === "es" ? "Sistemas IA" : "AI Systems"}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">{t.title}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Systems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(t.systems).map(([key, system], index) => {
            const IconComponent = systemIcons[key as keyof typeof systemIcons]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                        <IconComponent className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">{system.title}</CardTitle>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{system.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {system.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="shadow-xl border-2 border-slate-200 dark:border-slate-700">
            <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Network className="w-6 h-6" />
                {language === "es" ? "Arquitectura del Sistema" : "System Architecture"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {language === "es" ? "Procesamiento IA" : "AI Processing"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {language === "es"
                      ? "Motores de IA optimizados para procesamiento en tiempo real"
                      : "Optimized AI engines for real-time processing"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {language === "es" ? "Almacenamiento" : "Data Storage"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {language === "es"
                      ? "Bases de datos distribuidas con alta disponibilidad"
                      : "Distributed databases with high availability"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {language === "es" ? "Seguridad" : "Security"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {language === "es"
                      ? "Protección multicapa con encriptación avanzada"
                      : "Multi-layer protection with advanced encryption"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {language === "es" ? "Distribución" : "Distribution"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {language === "es"
                      ? "Red global con baja latencia y alta velocidad"
                      : "Global network with low latency and high speed"}
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
                  ? "¿Listo para modernizar tu infraestructura?"
                  : "Ready to modernize your infrastructure?"}
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                {language === "es"
                  ? "Nuestros expertos en infraestructura te ayudarán a construir sistemas escalables y seguros."
                  : "Our infrastructure experts will help you build scalable and secure systems."}
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
                  <Server className="w-5 h-5 mr-2" />
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
