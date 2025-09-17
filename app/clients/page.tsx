"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Users,
  Star,
  Quote,
  MessageCircle,
  ArrowRight,
  Building,
  TrendingUp,
  CheckCircle,
  Zap,
  Globe,
  Award,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const translations = {
  en: {
    title: "Our Clients",
    subtitle:
      "Trusted by leading companies worldwide to deliver exceptional AI solutions and drive digital transformation.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    whatsappText: "Hello N3uralia, I'd like to learn more about your client success stories",
    testimonials: {
      ecosuelolab: {
        company: "EcosueloLab",
        industry: "Agriculture Technology",
        person: "Dr. María González",
        role: "CTO",
        testimonial:
          "N3uralia transformed our agricultural analysis platform. The AI integration reduced analysis time by 70% and improved accuracy significantly. Their full-stack approach delivered exactly what we needed.",
        results: ["70% faster analysis", "95% client satisfaction", "40% cost reduction"],
      },
      parrotfyia: {
        company: "ParrotfyIA",
        industry: "Business Intelligence",
        person: "Carlos Mendoza",
        role: "CEO",
        testimonial:
          "The AI-powered ERP system N3uralia built for us revolutionized our operations. Real-time insights and automated processes have increased our efficiency by 80%.",
        results: ["80% efficiency increase", "92% user satisfaction", "60% faster decisions"],
      },
      despegacarrera: {
        company: "Despega Tu Carrera",
        industry: "Education Technology",
        person: "Ana Rodríguez",
        role: "Founder",
        testimonial:
          "The complete educational platform with AI coaching that N3uralia developed has achieved an 88% job placement rate for our students. Outstanding results!",
        results: ["88% placement rate", "90% student retention", "50% faster matching"],
      },
    },
    stats: {
      clients: "50+ Clients",
      satisfaction: "96% Satisfaction",
      projects: "200+ Projects",
      countries: "15+ Countries",
    },
  },
  es: {
    title: "Nuestros Clientes",
    subtitle:
      "Confiado por empresas líderes a nivel mundial para entregar soluciones IA excepcionales e impulsar la transformación digital.",
    getStarted: "Comenzar",
    learnMore: "Saber Más",
    whatsappText: "Hola N3uralia, me gustaría conocer más sobre sus casos de éxito con clientes",
    testimonials: {
      ecosuelolab: {
        company: "EcosueloLab",
        industry: "Tecnología Agrícola",
        person: "Dra. María González",
        role: "CTO",
        testimonial:
          "N3uralia transformó nuestra plataforma de análisis agrícola. La integración de IA redujo el tiempo de análisis en 70% y mejoró significativamente la precisión. Su enfoque full-stack entregó exactamente lo que necesitábamos.",
        results: ["70% análisis más rápido", "95% satisfacción del cliente", "40% reducción de costos"],
      },
      parrotfyia: {
        company: "ParrotfyIA",
        industry: "Inteligencia de Negocios",
        person: "Carlos Mendoza",
        role: "CEO",
        testimonial:
          "El sistema ERP impulsado por IA que N3uralia construyó para nosotros revolucionó nuestras operaciones. Los insights en tiempo real y procesos automatizados han aumentado nuestra eficiencia en 80%.",
        results: ["80% aumento de eficiencia", "92% satisfacción del usuario", "60% decisiones más rápidas"],
      },
      despegacarrera: {
        company: "Despega Tu Carrera",
        industry: "Tecnología Educativa",
        person: "Ana Rodríguez",
        role: "Fundadora",
        testimonial:
          "La plataforma educativa completa con coaching IA que N3uralia desarrolló ha logrado una tasa de colocación laboral del 88% para nuestros estudiantes. ¡Resultados excepcionales!",
        results: ["88% tasa de colocación", "90% retención de estudiantes", "50% matching más rápido"],
      },
    },
    stats: {
      clients: "50+ Clientes",
      satisfaction: "96% Satisfacción",
      projects: "200+ Proyectos",
      countries: "15+ Países",
    },
  },
}

export default function ClientsPage() {
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
            <Users className="w-4 h-4 mr-2" />
            {language === "es" ? "Clientes" : "Clients"}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">{t.title}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {Object.entries(t.stats).map(([key, stat], index) => (
            <Card key={key} className="text-center p-6 shadow-lg border-2 border-slate-200 dark:border-slate-700">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 capitalize">
                {key === "clients" && <Users className="w-4 h-4 mx-auto mb-1" />}
                {key === "satisfaction" && <Star className="w-4 h-4 mx-auto mb-1" />}
                {key === "projects" && <Building className="w-4 h-4 mx-auto mb-1" />}
                {key === "countries" && <Globe className="w-4 h-4 mx-auto mb-1" />}
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          {Object.entries(t.testimonials).map(([key, testimonial], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-slate-800 text-white text-lg font-bold">
                        {testimonial.person
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                          {testimonial.company}
                        </CardTitle>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-0">
                          {testimonial.industry}
                        </Badge>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 font-medium">
                        {testimonial.person} - {testimonial.role}
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-slate-400 mb-3" />
                    <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed italic">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {testimonial.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-green-800 dark:text-green-300 font-medium text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="shadow-xl border-2 border-slate-200 dark:border-slate-700">
            <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Award className="w-6 h-6" />
                {language === "es" ? "Métricas de Éxito" : "Success Metrics"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {language === "es" ? "Crecimiento Promedio" : "Average Growth"}
                  </h3>
                  <p className="text-4xl font-bold text-green-600 mb-2">65%</p>
                  <p className="text-slate-600 dark:text-slate-300">
                    {language === "es" ? "Aumento en eficiencia operacional" : "Increase in operational efficiency"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {language === "es" ? "Satisfacción del Cliente" : "Client Satisfaction"}
                  </h3>
                  <p className="text-4xl font-bold text-blue-600 mb-2">96%</p>
                  <p className="text-slate-600 dark:text-slate-300">
                    {language === "es" ? "Tasa de satisfacción promedio" : "Average satisfaction rate"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {language === "es" ? "Tiempo de Implementación" : "Implementation Time"}
                  </h3>
                  <p className="text-4xl font-bold text-purple-600 mb-2">30%</p>
                  <p className="text-slate-600 dark:text-slate-300">
                    {language === "es" ? "Más rápido que la competencia" : "Faster than competitors"}
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-2xl border-0">
            <CardContent className="p-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <Award className="w-6 h-6 text-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === "es"
                  ? "¿Listo para unirte a nuestros clientes exitosos?"
                  : "Ready to join our successful clients?"}
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                {language === "es"
                  ? "Descubre cómo podemos transformar tu negocio con soluciones IA personalizadas y soporte de clase mundial."
                  : "Discover how we can transform your business with custom AI solutions and world-class support."}
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
