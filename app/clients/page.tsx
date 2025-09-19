"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, CheckCircle, Users, MessageSquare, Zap } from "lucide-react"
import Image from "next/image"

export default function ClientsPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Clients",
      subtitle: "Discover how N3uralia transforms businesses with conversational AI solutions",
      keyCapability: {
        title: "Key Capability: API Integration + Conversational AI",
        description:
          "N3uralia connects to any existing system or data source and transforms complex information into natural, conversational responses. Our AI agents can access real-time data from ERPs, databases, APIs, and web services, then communicate this information in plain language that users can easily understand and act upon.",
      },
      clients: {
        parrotfy: {
          name: "ParrotfyIA",
          industry: "ERP & Business Intelligence",
          description:
            "Advanced ERP system with conversational AI interface that transforms complex business data into natural language interactions. Users can query sales performance, inventory levels, customer analytics, and financial reports through simple conversations.",
          capabilities: [
            "Real-time ERP data access and analysis",
            "Natural language business intelligence queries",
            "Automated report generation and insights",
            "Multi-department data integration",
            "Conversational dashboard interactions",
          ],
          conversations: [
            {
              user: "What were our top 5 customers by revenue last month?",
              ai: "Based on your sales data, here are your top 5 customers by revenue for last month: 1) TechCorp Solutions - $45,230, 2) Global Industries - $38,950, 3) Innovation Labs - $32,100, 4) Digital Dynamics - $28,750, 5) Future Systems - $25,400. TechCorp Solutions increased their purchases by 23% compared to the previous month.",
            },
            {
              user: "Do we have enough inventory for the Johnson order?",
              ai: "I've checked your current inventory levels. For the Johnson order requiring 150 units of Product A and 75 units of Product B: Product A - You have 180 units available (30 units surplus), Product B - You have 68 units available (7 units short). I recommend placing an urgent order for Product B to fulfill this completely.",
            },
            {
              user: "Show me this quarter's performance summary",
              ai: "This quarter's performance shows strong growth: Total Revenue: $1.2M (18% increase vs last quarter), New Customers: 47 (25% increase), Customer Retention: 94%, Top Performing Product: Digital Solutions Suite (35% of total revenue). Your sales team exceeded targets by 12%, with the highest performance in the enterprise segment.",
            },
          ],
        },
        ecosuelo: {
          name: "EcosueloLab",
          industry: "Agricultural Technology",
          description:
            "Intelligent agricultural management system that provides conversational access to soil analysis, crop monitoring, and farming recommendations. Farmers can get instant insights about their land and crops through natural language interactions.",
          capabilities: [
            "Real-time soil condition monitoring and analysis",
            "Crop health assessment and recommendations",
            "Weather integration and farming alerts",
            "Irrigation optimization suggestions",
            "Pest and disease identification support",
          ],
          conversations: [
            {
              user: "How is the soil condition in field sector 3?",
              ai: "Field sector 3 shows good overall soil health. Current readings: pH level 6.8 (optimal for your corn crop), moisture content 45% (adequate), nitrogen levels slightly low at 12 ppm (recommend fertilization), phosphorus and potassium levels are within optimal ranges. The soil temperature is 18°C, perfect for current growth stage.",
            },
            {
              user: "When should I water the tomatoes?",
              ai: "Based on current soil moisture (32%) and weather forecast, I recommend watering your tomatoes tomorrow morning between 6-8 AM. The soil moisture is approaching the 30% threshold for tomatoes. With sunny weather predicted for the next 3 days and temperatures reaching 28°C, early morning watering will ensure optimal absorption and reduce evaporation.",
            },
            {
              user: "Are there any pest risks I should know about?",
              ai: "Current pest risk assessment for your area: Moderate risk for aphids due to recent warm, humid conditions. I've detected early signs of potential aphid activity in your pepper plants based on leaf analysis. Recommendation: Apply organic neem oil spray in the evening for the next 3 days. Also, beneficial ladybugs are active in your area - consider introducing them as natural pest control.",
            },
          ],
        },
        despega: {
          name: "Despega Tu Carrera",
          industry: "Career Development & Education",
          description:
            "AI-powered career guidance platform that provides personalized advice, skill assessments, and professional development recommendations through conversational interactions. Users receive tailored career coaching and job market insights.",
          capabilities: [
            "Personalized career path recommendations",
            "Skills gap analysis and development plans",
            "Interview preparation and practice sessions",
            "Resume optimization and feedback",
            "Job market trends and salary insights",
          ],
          conversations: [
            {
              user: "I want to transition from marketing to data science. What skills do I need?",
              ai: "Great career transition choice! Based on your marketing background, you already have valuable analytical thinking skills. For data science, you'll need: Technical Skills - Python programming (start with pandas, numpy), SQL for databases, statistics and probability, machine learning basics. Your marketing experience gives you domain expertise that's highly valued. I recommend starting with a 3-month Python course, then focusing on data analysis projects using marketing datasets you're familiar with.",
            },
            {
              user: "How should I prepare for a product manager interview?",
              ai: "Product manager interviews typically cover 4 key areas: 1) Product Strategy - Practice market sizing, competitive analysis, and product roadmap questions. 2) Technical Understanding - Know basic tech concepts, APIs, and development processes. 3) Data Analysis - Be ready to interpret metrics and make data-driven decisions. 4) Leadership - Prepare examples of cross-functional collaboration. I recommend practicing with case studies like 'How would you improve Instagram Stories?' and preparing your own product success stories.",
            },
            {
              user: "What's the current job market like for UX designers?",
              ai: "The UX design market is competitive but growing. Current trends: High demand for UX/UI designers with AI/ML experience, average salary range $65K-$120K depending on experience and location, remote opportunities increased by 40% since 2022. Top skills in demand: user research, prototyping tools (Figma, Sketch), accessibility design, and mobile-first design. Companies are particularly seeking designers who understand conversion optimization and can work closely with product teams.",
            },
          ],
        },
      },
      cta: {
        title: "Ready to Transform Your Business?",
        description:
          "Join these successful companies and discover how N3uralia can revolutionize your operations with conversational AI.",
        whatsappButton: "Contact via WhatsApp",
        emailButton: "Send Email",
      },
    },
    es: {
      title: "Nuestros Clientes",
      subtitle: "Descubre cómo N3uralia transforma empresas con soluciones de IA conversacional",
      keyCapability: {
        title: "Capacidad Clave: Integración API + IA Conversacional",
        description:
          "N3uralia se conecta a cualquier sistema existente o fuente de datos y transforma información compleja en respuestas conversacionales naturales. Nuestros agentes de IA pueden acceder a datos en tiempo real desde ERPs, bases de datos, APIs y servicios web, luego comunicar esta información en lenguaje sencillo que los usuarios pueden entender y usar fácilmente.",
      },
      clients: {
        parrotfy: {
          name: "ParrotfyIA",
          industry: "ERP e Inteligencia de Negocios",
          description:
            "Sistema ERP avanzado con interfaz de IA conversacional que transforma datos empresariales complejos en interacciones de lenguaje natural. Los usuarios pueden consultar rendimiento de ventas, niveles de inventario, análisis de clientes e informes financieros a través de conversaciones simples.",
          capabilities: [
            "Acceso y análisis de datos ERP en tiempo real",
            "Consultas de inteligencia de negocios en lenguaje natural",
            "Generación automatizada de informes e insights",
            "Integración de datos multi-departamental",
            "Interacciones conversacionales con dashboards",
          ],
          conversations: [
            {
              user: "¿Cuáles fueron nuestros 5 principales clientes por ingresos el mes pasado?",
              ai: "Basado en tus datos de ventas, aquí están tus 5 principales clientes por ingresos del mes pasado: 1) TechCorp Solutions - $45,230, 2) Global Industries - $38,950, 3) Innovation Labs - $32,100, 4) Digital Dynamics - $28,750, 5) Future Systems - $25,400. TechCorp Solutions aumentó sus compras en un 23% comparado con el mes anterior.",
            },
            {
              user: "¿Tenemos suficiente inventario para el pedido de Johnson?",
              ai: "He revisado tus niveles de inventario actuales. Para el pedido de Johnson que requiere 150 unidades del Producto A y 75 unidades del Producto B: Producto A - Tienes 180 unidades disponibles (30 unidades de excedente), Producto B - Tienes 68 unidades disponibles (7 unidades faltantes). Recomiendo hacer un pedido urgente del Producto B para completar este pedido.",
            },
            {
              user: "Muéstrame el resumen de rendimiento de este trimestre",
              ai: "El rendimiento de este trimestre muestra un crecimiento sólido: Ingresos Totales: $1.2M (18% de aumento vs trimestre anterior), Nuevos Clientes: 47 (25% de aumento), Retención de Clientes: 94%, Producto de Mayor Rendimiento: Digital Solutions Suite (35% de ingresos totales). Tu equipo de ventas superó las metas en un 12%, con el mayor rendimiento en el segmento empresarial.",
            },
          ],
        },
        ecosuelo: {
          name: "EcosueloLab",
          industry: "Tecnología Agrícola",
          description:
            "Sistema inteligente de gestión agrícola que proporciona acceso conversacional a análisis de suelo, monitoreo de cultivos y recomendaciones de agricultura. Los agricultores pueden obtener insights instantáneos sobre su tierra y cultivos a través de interacciones en lenguaje natural.",
          capabilities: [
            "Monitoreo y análisis de condiciones del suelo en tiempo real",
            "Evaluación de salud de cultivos y recomendaciones",
            "Integración climática y alertas agrícolas",
            "Sugerencias de optimización de riego",
            "Soporte de identificación de plagas y enfermedades",
          ],
          conversations: [
            {
              user: "¿Cómo está la condición del suelo en el sector 3 del campo?",
              ai: "El sector 3 del campo muestra buena salud general del suelo. Lecturas actuales: nivel de pH 6.8 (óptimo para tu cultivo de maíz), contenido de humedad 45% (adecuado), niveles de nitrógeno ligeramente bajos en 12 ppm (recomiendo fertilización), los niveles de fósforo y potasio están dentro de rangos óptimos. La temperatura del suelo es 18°C, perfecta para la etapa de crecimiento actual.",
            },
            {
              user: "¿Cuándo debo regar los tomates?",
              ai: "Basado en la humedad actual del suelo (32%) y el pronóstico del tiempo, recomiendo regar tus tomates mañana en la mañana entre las 6-8 AM. La humedad del suelo se está acercando al umbral del 30% para tomates. Con clima soleado pronosticado para los próximos 3 días y temperaturas alcanzando 28°C, el riego matutino temprano asegurará absorción óptima y reducirá la evaporación.",
            },
            {
              user: "¿Hay algún riesgo de plagas que deba conocer?",
              ai: "Evaluación actual de riesgo de plagas para tu área: Riesgo moderado de pulgones debido a condiciones recientes cálidas y húmedas. He detectado signos tempranos de actividad potencial de pulgones en tus plantas de pimiento basado en análisis de hojas. Recomendación: Aplica spray de aceite de neem orgánico en la tarde durante los próximos 3 días. Además, las mariquitas beneficiosas están activas en tu área - considera introducirlas como control natural de plagas.",
            },
          ],
        },
        despega: {
          name: "Despega Tu Carrera",
          industry: "Desarrollo Profesional y Educación",
          description:
            "Plataforma de orientación profesional impulsada por IA que proporciona consejos personalizados, evaluaciones de habilidades y recomendaciones de desarrollo profesional a través de interacciones conversacionales. Los usuarios reciben coaching profesional personalizado e insights del mercado laboral.",
          capabilities: [
            "Recomendaciones personalizadas de trayectoria profesional",
            "Análisis de brechas de habilidades y planes de desarrollo",
            "Preparación y práctica de entrevistas",
            "Optimización y retroalimentación de currículum",
            "Tendencias del mercado laboral e insights salariales",
          ],
          conversations: [
            {
              user: "Quiero hacer la transición de marketing a ciencia de datos. ¿Qué habilidades necesito?",
              ai: "¡Excelente elección de transición profesional! Basado en tu experiencia en marketing, ya tienes valiosas habilidades de pensamiento analítico. Para ciencia de datos, necesitarás: Habilidades Técnicas - Programación en Python (comienza con pandas, numpy), SQL para bases de datos, estadística y probabilidad, fundamentos de machine learning. Tu experiencia en marketing te da expertise de dominio que es muy valorado. Recomiendo comenzar con un curso de Python de 3 meses, luego enfocarte en proyectos de análisis de datos usando datasets de marketing que ya conoces.",
            },
            {
              user: "¿Cómo debo prepararme para una entrevista de product manager?",
              ai: "Las entrevistas de product manager típicamente cubren 4 áreas clave: 1) Estrategia de Producto - Practica dimensionamiento de mercado, análisis competitivo y preguntas de roadmap de producto. 2) Entendimiento Técnico - Conoce conceptos básicos de tecnología, APIs y procesos de desarrollo. 3) Análisis de Datos - Prepárate para interpretar métricas y tomar decisiones basadas en datos. 4) Liderazgo - Prepara ejemplos de colaboración interfuncional. Recomiendo practicar con casos de estudio como '¿Cómo mejorarías Instagram Stories?' y preparar tus propias historias de éxito de productos.",
            },
            {
              user: "¿Cómo está el mercado laboral actual para diseñadores UX?",
              ai: "El mercado de diseño UX es competitivo pero está creciendo. Tendencias actuales: Alta demanda de diseñadores UX/UI con experiencia en IA/ML, rango salarial promedio $65K-$120K dependiendo de experiencia y ubicación, oportunidades remotas aumentaron 40% desde 2022. Habilidades más demandadas: investigación de usuarios, herramientas de prototipado (Figma, Sketch), diseño de accesibilidad y diseño mobile-first. Las empresas buscan particularmente diseñadores que entiendan optimización de conversiones y puedan trabajar estrechamente con equipos de producto.",
            },
          ],
        },
      },
      cta: {
        title: "¿Listo para Transformar tu Negocio?",
        description:
          "Únete a estas empresas exitosas y descubre cómo N3uralia puede revolucionar tus operaciones con IA conversacional.",
        whatsappButton: "Contactar por WhatsApp",
        emailButton: "Enviar Email",
      },
    },
  }

  const t = content[language]
  const whatsappNumber = "+56940946660"

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      language === "es"
        ? "¡Hola! Estoy interesado en conocer más sobre las soluciones de IA de N3uralia."
        : "Hello! I'm interested in learning more about N3uralia's AI solutions.",
    )
    window.open(`https://wa.me/${whatsappNumber.replace("+", "")}?text=${message}`, "_blank")
  }

  const openEmail = () => {
    const subject = encodeURIComponent(
      language === "es"
        ? "Consulta sobre soluciones de IA conversacional"
        : "Inquiry about conversational AI solutions",
    )
    const body = encodeURIComponent(
      language === "es"
        ? "Hola, me gustaría conocer más sobre cómo N3uralia puede ayudar a transformar mi negocio con IA conversacional."
        : "Hello, I would like to learn more about how N3uralia can help transform my business with conversational AI.",
    )
    window.open(`mailto:hello@n3uralia.com?subject=${subject}&body=${body}`)
  }

  const getLogoSize = (clientKey: string) => {
    if (clientKey === "parrotfy" || clientKey === "despega") {
      return { width: 180, height: 90, className: "h-20" }
    }
    return { width: 120, height: 60, className: "h-12" }
  }

  const getLogoSrc = (clientKey: string) => {
    const logos = {
      parrotfy: "/logos/parrotfy-logo.png",
      ecosuelo: "/logos/ecosuelo-logo.png",
      despega: "/logos/despega-tu-carrera-logo.png",
    }
    return logos[clientKey as keyof typeof logos]
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">{t.subtitle}</p>
        </div>

        {/* Key Capability Banner */}
        <div className="mb-16">
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Zap className="w-8 h-8 text-gray-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">{t.keyCapability.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">{t.keyCapability.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Client Case Studies */}
        <div className="space-y-16">
          {Object.entries(t.clients).map(([key, client]) => {
            const logoSize = getLogoSize(key)
            const logoSrc = getLogoSrc(key)

            return (
              <Card key={key} className="border-gray-200 shadow-sm overflow-hidden">
                {/* Black Banner with Logo - Using N3uralia brand black */}
                <CardHeader className="bg-black text-white p-8">
                  <div className="flex justify-center">
                    <Image
                      src={logoSrc || "/placeholder.svg"}
                      alt={`${client.name} Logo`}
                      width={logoSize.width}
                      height={logoSize.height}
                      className={`${logoSize.className} w-auto filter brightness-0 invert`}
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
                    <h3 className="text-xl font-light text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-gray-500 mr-2" />
                      {language === "es" ? "Capacidades Técnicas" : "Technical Capabilities"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {client.capabilities.map((capability, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 font-light">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conversation Examples */}
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-6 flex items-center">
                      <MessageSquare className="w-5 h-5 text-gray-500 mr-2" />
                      {language === "es" ? "Ejemplos de Conversación" : "Conversation Examples"}
                    </h3>
                    <div className="space-y-6">
                      {client.conversations.map((conv, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0">
                                <Users className="w-5 h-5 text-gray-500" />
                              </div>
                              <div className="bg-white rounded-lg p-3 border border-gray-200 flex-1">
                                <p className="text-gray-800 font-light">{conv.user}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0">
                                <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">AI</span>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-3 border border-gray-200 flex-1">
                                <p className="text-gray-800 font-light leading-relaxed">{conv.ai}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <Card className="bg-black text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">{t.cta.title}</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">{t.cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={openWhatsApp} size="lg" className="bg-white text-black hover:bg-gray-100 font-medium">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.cta.whatsappButton}
                </Button>
                <Button
                  onClick={openEmail}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black font-medium bg-transparent"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t.cta.emailButton}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
