"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, BarChart3, Zap, CheckCircle, ArrowRight, Users, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    icon: Bot,
    title: "Agentes IA Conversacionales",
    titleEn: "Conversational AI Agents",
    description:
      "Chatbots inteligentes que entienden el contexto y mantienen conversaciones naturales con tus clientes.",
    descriptionEn:
      "Intelligent chatbots that understand context and maintain natural conversations with your customers.",
    features: [
      "Procesamiento de lenguaje natural avanzado",
      "Integración con bases de datos empresariales",
      "Respuestas personalizadas por cliente",
      "Aprendizaje continuo de interacciones",
    ],
    featuresEn: [
      "Advanced natural language processing",
      "Enterprise database integration",
      "Personalized customer responses",
      "Continuous learning from interactions",
    ],
    stats: {
      efficiency: "95%",
      timeSaved: "8h/día",
      clients: "500+",
    },
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: MessageSquare,
    title: "Automatización de WhatsApp",
    titleEn: "WhatsApp Automation",
    description: "Automatiza completamente tus conversaciones de WhatsApp Business con respuestas inteligentes 24/7.",
    descriptionEn: "Fully automate your WhatsApp Business conversations with intelligent 24/7 responses.",
    features: [
      "API oficial de WhatsApp Business",
      "Gestión automática de consultas",
      "Integración con CRM existente",
      "Métricas detalladas de conversación",
    ],
    featuresEn: [
      "Official WhatsApp Business API",
      "Automatic query management",
      "Existing CRM integration",
      "Detailed conversation metrics",
    ],
    stats: {
      efficiency: "90%",
      timeSaved: "6h/día",
      clients: "1200+",
    },
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Analytics Conversacional",
    titleEn: "Conversational Analytics",
    description:
      "Obtén insights profundos sobre las interacciones con clientes y optimiza tu estrategia de comunicación.",
    descriptionEn: "Get deep insights into customer interactions and optimize your communication strategy.",
    features: [
      "Dashboard en tiempo real",
      "Análisis de sentimientos automático",
      "Reportes personalizados",
      "Predicción de tendencias de consultas",
    ],
    featuresEn: ["Real-time dashboard", "Automatic sentiment analysis", "Custom reports", "Query trend prediction"],
    stats: {
      efficiency: "85%",
      timeSaved: "4h/día",
      clients: "300+",
    },
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Zap,
    title: "Integración Empresarial",
    titleEn: "Enterprise Integration",
    description: "Conecta todos tus sistemas empresariales para crear un ecosistema de comunicación unificado.",
    descriptionEn: "Connect all your enterprise systems to create a unified communication ecosystem.",
    features: [
      "APIs RESTful robustas",
      "Conectores pre-construidos",
      "Sincronización de datos en tiempo real",
      "Arquitectura escalable y segura",
    ],
    featuresEn: [
      "Robust RESTful APIs",
      "Pre-built connectors",
      "Real-time data synchronization",
      "Scalable and secure architecture",
    ],
    stats: {
      efficiency: "98%",
      timeSaved: "12h/día",
      clients: "150+",
    },
    color: "from-purple-500 to-pink-600",
  },
]

export function ServicesSection() {
  const { language } = useLanguage()

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            {language === "en" ? "Our Services" : "Nuestros Servicios"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-6">
            {language === "en" ? "AI Solutions" : "Soluciones IA"}
            <br />
            <span className="font-bold">{language === "en" ? "for Business" : "para Empresas"}</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {language === "en"
              ? "Transform your business communication with our comprehensive AI-powered solutions designed for modern enterprises."
              : "Transforma la comunicación de tu empresa con nuestras soluciones integrales impulsadas por IA diseñadas para empresas modernas."}
          </p>
        </motion.div>

        {/* Services Grid with Flip Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <div className="relative w-full h-96 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front Side */}
                <Card className="absolute inset-0 w-full h-full backface-hidden bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {language === "en" ? "Hover for details" : "Pasa el cursor para detalles"}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-black mb-4">
                      {language === "en" ? service.titleEn : service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed font-light flex-grow">
                      {language === "en" ? service.descriptionEn : service.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{service.stats.clients}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{service.stats.efficiency}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                    </div>
                  </CardContent>
                </Card>

                {/* Back Side */}
                <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black text-white border-0 rounded-2xl">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-black" />
                      </div>
                      <Badge className="bg-white/20 text-white border-0 text-xs">
                        {language === "en" ? "Premium" : "Premium"}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-4">{language === "en" ? service.titleEn : service.title}</h3>

                    <div className="space-y-3 mb-6 flex-grow">
                      {(language === "en" ? service.featuresEn : service.features).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{service.stats.efficiency}</div>
                        <div className="text-xs text-gray-400">{language === "en" ? "Efficiency" : "Eficiencia"}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{service.stats.timeSaved}</div>
                        <div className="text-xs text-gray-400">
                          {language === "en" ? "Time Saved" : "Tiempo Ahorrado"}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{service.stats.clients}</div>
                        <div className="text-xs text-gray-400">{language === "en" ? "Clients" : "Clientes"}</div>
                      </div>
                    </div>

                    <Button className="w-full bg-white text-black hover:bg-gray-100 font-semibold rounded-xl" asChild>
                      <a
                        href={`https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20información%20sobre%20${encodeURIComponent(service.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {language === "en" ? "Get Started" : "Comenzar"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-3xl font-light text-black mb-6">
              {language === "en" ? "Ready to Transform Your Business?" : "¿Listo para Transformar tu Negocio?"}
            </h3>
            <p className="text-gray-600 font-light text-lg mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Let's discuss how our AI solutions can revolutionize your customer communication and business processes."
                : "Hablemos sobre cómo nuestras soluciones IA pueden revolucionar tu comunicación con clientes y procesos de negocio."}
            </p>
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
              asChild
            >
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20una%20consulta%20completa%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                {language === "en" ? "Schedule Consultation" : "Agendar Consulta"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}
