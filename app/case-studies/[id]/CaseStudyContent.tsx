"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Building2, Clock, Users, Target, CheckCircle, ArrowRight, Award } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import Navigation from "@/components/navigation"
import { Footer } from "@/components/layout/footer"

const caseStudyData: Record<string, any> = {
  "retail-automation": {
    title: {
      en: "Retail Chain Automation",
      es: "Automatización de Cadena Retail",
    },
    client: "MegaRetail Corp",
    industry: {
      en: "Retail & E-commerce",
      es: "Retail y E-commerce",
    },
    overview: {
      en: "MegaRetail Corp, a leading retail chain with 150+ stores across Latin America, faced significant challenges with inventory management, leading to frequent stockouts and overstock situations. Our AI-powered solution transformed their entire supply chain operation.",
      es: "MegaRetail Corp, una cadena retail líder con 150+ tiendas en Latinoamérica, enfrentaba desafíos significativos con la gestión de inventario, llevando a frecuentes falta de stock y situaciones de sobrestock. Nuestra solución impulsada por IA transformó toda su operación de cadena de suministro.",
    },
    challenge: {
      en: "The client struggled with manual inventory tracking, resulting in 40% stockout rate, $3.2M in lost sales annually, and inefficient warehouse operations across multiple locations.",
      es: "El cliente luchaba con el seguimiento manual de inventario, resultando en 40% de tasa de falta de stock, $3.2M en ventas perdidas anualmente, y operaciones de almacén ineficientes en múltiples ubicaciones.",
    },
    solution: {
      en: "We implemented an AI-powered inventory management system with predictive analytics, automated reordering, and real-time tracking across all store locations.",
      es: "Implementamos un sistema de gestión de inventario impulsado por IA con análisis predictivo, reordenamiento automatizado, y seguimiento en tiempo real en todas las ubicaciones de tiendas.",
    },
    results: [
      {
        metric: "85%",
        label: { en: "Reduction in stockouts", es: "Reducción en falta de stock" },
      },
      {
        metric: "$2.3M",
        label: { en: "Annual cost savings", es: "Ahorro anual de costos" },
      },
      {
        metric: "60%",
        label: { en: "Faster inventory turnover", es: "Rotación de inventario más rápida" },
      },
      {
        metric: "99.2%",
        label: { en: "System uptime", es: "Tiempo de actividad del sistema" },
      },
    ],
    technologies: ["Python", "TensorFlow", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    timeline: [
      {
        phase: { en: "Discovery & Planning", es: "Descubrimiento y Planificación" },
        duration: "4 weeks",
        description: {
          en: "Analyzed current systems, identified pain points, and designed solution architecture",
          es: "Analizamos sistemas actuales, identificamos puntos de dolor, y diseñamos arquitectura de solución",
        },
      },
      {
        phase: { en: "Development & Testing", es: "Desarrollo y Pruebas" },
        duration: "12 weeks",
        description: {
          en: "Built AI models, developed APIs, and conducted extensive testing",
          es: "Construimos modelos de IA, desarrollamos APIs, y realizamos pruebas extensivas",
        },
      },
      {
        phase: { en: "Pilot Implementation", es: "Implementación Piloto" },
        duration: "6 weeks",
        description: {
          en: "Deployed to 10 pilot stores, gathered feedback, and refined the system",
          es: "Desplegamos en 10 tiendas piloto, recopilamos retroalimentación, y refinamos el sistema",
        },
      },
      {
        phase: { en: "Full Rollout", es: "Despliegue Completo" },
        duration: "8 weeks",
        description: {
          en: "Rolled out to all 150+ stores with comprehensive training and support",
          es: "Desplegamos en todas las 150+ tiendas con entrenamiento y soporte integral",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "N3uralia's AI solution has revolutionized our inventory management. We've seen dramatic improvements in stock availability and significant cost savings. Their team's expertise and support throughout the project was exceptional.",
        es: "La solución de IA de N3uralia ha revolucionado nuestra gestión de inventario. Hemos visto mejoras dramáticas en disponibilidad de stock y ahorros significativos de costos. La experiencia y soporte de su equipo durante el proyecto fue excepcional.",
      },
      author: "Maria Rodriguez",
      position: { en: "Chief Operations Officer", es: "Directora de Operaciones" },
    },
    image: "/placeholder.svg?height=400&width=600&text=Retail+Dashboard",
  },
  "banking-chatbot": {
    title: {
      en: "Banking Customer Service AI",
      es: "IA de Atención al Cliente Bancario",
    },
    client: "SecureBank International",
    industry: {
      en: "Financial Services",
      es: "Servicios Financieros",
    },
    overview: {
      en: "SecureBank International needed to modernize their customer service operations to handle increasing query volumes while maintaining security standards. Our multilingual AI chatbot solution transformed their customer experience.",
      es: "SecureBank International necesitaba modernizar sus operaciones de servicio al cliente para manejar volúmenes crecientes de consultas mientras mantenía estándares de seguridad. Nuestra solución de chatbot de IA multiidioma transformó su experiencia del cliente.",
    },
    challenge: {
      en: "High call center costs, long wait times averaging 12 minutes, and inability to provide 24/7 support in multiple languages were impacting customer satisfaction.",
      es: "Altos costos de call center, largos tiempos de espera promediando 12 minutos, e incapacidad de proporcionar soporte 24/7 en múltiples idiomas estaban impactando la satisfacción del cliente.",
    },
    solution: {
      en: "We developed a secure, multilingual AI chatbot with natural language processing, integrated with banking systems for real-time account information and transaction capabilities.",
      es: "Desarrollamos un chatbot de IA seguro y multiidioma con procesamiento de lenguaje natural, integrado con sistemas bancarios para información de cuenta en tiempo real y capacidades de transacción.",
    },
    results: [
      {
        metric: "92%",
        label: { en: "Query resolution rate", es: "Tasa de resolución de consultas" },
      },
      {
        metric: "$1.8M",
        label: { en: "Annual operational savings", es: "Ahorro operacional anual" },
      },
      {
        metric: "24/7",
        label: { en: "Service availability", es: "Disponibilidad del servicio" },
      },
      {
        metric: "2.3s",
        label: { en: "Average response time", es: "Tiempo promedio de respuesta" },
      },
    ],
    technologies: ["Node.js", "OpenAI GPT", "MongoDB", "Redis", "Docker", "AWS"],
    timeline: [
      {
        phase: { en: "Requirements Analysis", es: "Análisis de Requisitos" },
        duration: "3 weeks",
        description: {
          en: "Analyzed banking workflows, security requirements, and customer interaction patterns",
          es: "Analizamos flujos de trabajo bancarios, requisitos de seguridad, y patrones de interacción del cliente",
        },
      },
      {
        phase: { en: "AI Model Development", es: "Desarrollo de Modelo de IA" },
        duration: "8 weeks",
        description: {
          en: "Trained custom NLP models, developed conversation flows, and implemented security protocols",
          es: "Entrenamos modelos NLP personalizados, desarrollamos flujos de conversación, e implementamos protocolos de seguridad",
        },
      },
      {
        phase: { en: "Integration & Testing", es: "Integración y Pruebas" },
        duration: "6 weeks",
        description: {
          en: "Integrated with banking systems, conducted security audits, and performed load testing",
          es: "Integramos con sistemas bancarios, realizamos auditorías de seguridad, y ejecutamos pruebas de carga",
        },
      },
      {
        phase: { en: "Deployment & Training", es: "Despliegue y Entrenamiento" },
        duration: "3 weeks",
        description: {
          en: "Deployed to production, trained staff, and established monitoring systems",
          es: "Desplegamos a producción, entrenamos personal, y establecimos sistemas de monitoreo",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "The AI chatbot has exceeded our expectations. Customer satisfaction scores have improved significantly, and we've reduced operational costs while providing better service. N3uralia delivered a world-class solution.",
        es: "El chatbot de IA ha superado nuestras expectativas. Las puntuaciones de satisfacción del cliente han mejorado significativamente, y hemos reducido costos operacionales mientras proporcionamos mejor servicio. N3uralia entregó una solución de clase mundial.",
      },
      author: "Carlos Mendez",
      position: { en: "Head of Digital Banking", es: "Jefe de Banca Digital" },
    },
    image: "/placeholder.svg?height=400&width=600&text=Banking+Chatbot",
  },
  "manufacturing-optimization": {
    title: {
      en: "Manufacturing Process Optimization",
      es: "Optimización de Procesos de Manufactura",
    },
    client: "TechManufacturing Ltd",
    industry: {
      en: "Manufacturing",
      es: "Manufactura",
    },
    overview: {
      en: "TechManufacturing Ltd sought to modernize their production line with IoT sensors and AI analytics to improve efficiency, reduce downtime, and enhance quality control across their manufacturing facilities.",
      es: "TechManufacturing Ltd buscaba modernizar su línea de producción con sensores IoT y análisis de IA para mejorar eficiencia, reducir tiempo de inactividad, y mejorar control de calidad en sus instalaciones de manufactura.",
    },
    challenge: {
      en: "Frequent equipment failures, quality control issues resulting in 15% defect rate, and inefficient production scheduling were impacting profitability and customer satisfaction.",
      es: "Fallas frecuentes de equipos, problemas de control de calidad resultando en 15% de tasa de defectos, y programación de producción ineficiente estaban impactando rentabilidad y satisfacción del cliente.",
    },
    solution: {
      en: "We implemented an IoT-enabled predictive maintenance system with AI-powered quality control and production optimization algorithms to maximize efficiency and minimize defects.",
      es: "Implementamos un sistema de mantenimiento predictivo habilitado por IoT con control de calidad impulsado por IA y algoritmos de optimización de producción para maximizar eficiencia y minimizar defectos.",
    },
    results: [
      {
        metric: "35%",
        label: { en: "Increase in efficiency", es: "Aumento en eficiencia" },
      },
      {
        metric: "$4.2M",
        label: { en: "Annual cost savings", es: "Ahorro anual de costos" },
      },
      {
        metric: "78%",
        label: { en: "Reduction in defects", es: "Reducción en defectos" },
      },
      {
        metric: "90%",
        label: { en: "Reduction in downtime", es: "Reducción en tiempo de inactividad" },
      },
    ],
    technologies: ["Python", "TensorFlow", "InfluxDB", "Grafana", "Docker", "Kubernetes"],
    timeline: [
      {
        phase: { en: "Assessment & Design", es: "Evaluación y Diseño" },
        duration: "6 weeks",
        description: {
          en: "Assessed current manufacturing processes, designed IoT architecture, and planned sensor deployment",
          es: "Evaluamos procesos de manufactura actuales, diseñamos arquitectura IoT, y planificamos despliegue de sensores",
        },
      },
      {
        phase: { en: "IoT Implementation", es: "Implementación IoT" },
        duration: "10 weeks",
        description: {
          en: "Installed sensors, developed data collection systems, and established connectivity infrastructure",
          es: "Instalamos sensores, desarrollamos sistemas de recolección de datos, y establecimos infraestructura de conectividad",
        },
      },
      {
        phase: { en: "AI Model Development", es: "Desarrollo de Modelo de IA" },
        duration: "12 weeks",
        description: {
          en: "Built predictive models, developed quality control algorithms, and created optimization systems",
          es: "Construimos modelos predictivos, desarrollamos algoritmos de control de calidad, y creamos sistemas de optimización",
        },
      },
      {
        phase: { en: "Integration & Optimization", es: "Integración y Optimización" },
        duration: "8 weeks",
        description: {
          en: "Integrated all systems, fine-tuned algorithms, and optimized performance across production lines",
          es: "Integramos todos los sistemas, afinamos algoritmos, y optimizamos rendimiento en líneas de producción",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "N3uralia's IoT and AI solution has transformed our manufacturing operations. We've achieved unprecedented efficiency gains and quality improvements. The predictive maintenance alone has saved us millions in potential downtime costs.",
        es: "La solución IoT y de IA de N3uralia ha transformado nuestras operaciones de manufactura. Hemos logrado ganancias de eficiencia sin precedentes y mejoras de calidad. Solo el mantenimiento predictivo nos ha ahorrado millones en costos potenciales de tiempo de inactividad.",
      },
      author: "Roberto Silva",
      position: { en: "Manufacturing Director", es: "Director de Manufactura" },
    },
    image: "/placeholder.svg?height=400&width=600&text=Manufacturing+Analytics",
  },
}

export function CaseStudyContent() {
  const params = useParams()
  const { language } = useLanguage()
  const caseId = params.id as string
  const caseStudy = caseStudyData[caseId]

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === "en" ? "Case Study Not Found" : "Caso de Estudio No Encontrado"}
          </h1>
          <Link href="/case-studies">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              {language === "en" ? "Back to Case Studies" : "Volver a Casos de Estudio"}
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "en" ? "Back to Case Studies" : "Volver a Casos de Estudio"}
            </Link>

            <Badge variant="outline" className="mb-6 border-white/20 text-white">
              {caseStudy.industry[language]}
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">{caseStudy.title[language]}</h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
              <div className="flex items-center">
                <Building2 className="w-5 h-5 mr-2" />
                {caseStudy.client}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {caseStudy.timeline.reduce((total: number, phase: any) => {
                  const weeks = Number.parseInt(phase.duration.split(" ")[0])
                  return total + weeks
                }, 0)}{" "}
                {language === "en" ? "weeks total" : "semanas total"}
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                {language === "en" ? "12 specialists" : "12 especialistas"}
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">{caseStudy.overview[language]}</p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img
              src={caseStudy.image || "/placeholder.svg"}
              alt={caseStudy.title[language]}
              className="w-full h-96 object-cover rounded-lg shadow-2xl -mt-16 relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              {language === "en" ? "Key Results" : "Resultados Clave"}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudy.results.map((result: any, index: number) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-5xl font-bold text-gray-900 mb-4">{result.metric}</div>
                    <div className="text-gray-600 font-medium">{result.label[language]}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-gray-600" />
                  {language === "en" ? "The Challenge" : "El Desafío"}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.challenge[language]}</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-8 h-8 mr-3 text-gray-600" />
                  {language === "en" ? "Our Solution" : "Nuestra Solución"}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.solution[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              {language === "en" ? "Project Timeline" : "Cronograma del Proyecto"}
            </h2>

            <div className="space-y-8">
              {caseStudy.timeline.map((phase: any, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{phase.phase[language]}</h4>
                      <Badge variant="outline" className="w-fit">
                        {phase.duration}
                      </Badge>
                    </div>
                    <p className="text-gray-700">{phase.description[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              {language === "en" ? "Technologies Used" : "Tecnologías Utilizadas"}
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.technologies.map((tech: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-lg px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-8 text-gray-400" />
            <blockquote className="text-2xl font-light italic mb-8 leading-relaxed">
              "{caseStudy.testimonial.quote[language]}"
            </blockquote>
            <div>
              <div className="font-bold text-xl">{caseStudy.testimonial.author}</div>
              <div className="text-gray-300">{caseStudy.testimonial.position[language]}</div>
              <div className="text-gray-400">{caseStudy.client}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {language === "en" ? "Ready to Transform Your Business?" : "¿Listo para Transformar tu Negocio?"}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Let's discuss how our AI solutions can deliver similar results for your organization."
              : "Hablemos sobre cómo nuestras soluciones de IA pueden entregar resultados similares para tu organización."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                {language === "en" ? "Start Your Project" : "Iniciar tu Proyecto"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="https://web.whatsapp.com/send/?phone=56993826127&text=Hola+N3uralia%2C+me+gustaría+conocer+más+sobre+vuestras+soluciones+de+IA&type=phone_number&app_absent=0">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                {language === "en" ? "Schedule Consultation" : "Agendar Consulta"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
