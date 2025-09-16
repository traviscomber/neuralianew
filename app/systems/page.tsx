"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Database, Cloud, Shield, Zap, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function SystemsPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "AI Systems",
      title: "Enterprise-Grade AI Infrastructure",
      subtitle: "Robust, scalable systems that power your AI transformation with reliability and performance.",
      systems: [
        {
          icon: Cpu,
          title: "Neural Processing Engine",
          description: "Advanced AI processing capabilities with multi-model support and real-time inference.",
        },
        {
          icon: Database,
          title: "Knowledge Management",
          description: "Intelligent data storage and retrieval systems for contextual AI responses.",
        },
        {
          icon: Cloud,
          title: "Cloud Infrastructure",
          description: "Scalable cloud architecture that grows with your business needs.",
        },
        {
          icon: Shield,
          title: "Security Framework",
          description: "Enterprise-grade security with encryption, compliance, and data protection.",
        },
        {
          icon: Zap,
          title: "Real-time Processing",
          description: "Lightning-fast response times with optimized processing pipelines.",
        },
        {
          icon: Globe,
          title: "Global Distribution",
          description: "Worldwide infrastructure ensuring low latency and high availability.",
        },
      ],
    },
    es: {
      badge: "Sistemas IA",
      title: "Infraestructura de IA de Nivel Empresarial",
      subtitle: "Sistemas robustos y escalables que impulsan tu transformación con IA con confiabilidad y rendimiento.",
      systems: [
        {
          icon: Cpu,
          title: "Motor de Procesamiento Neural",
          description:
            "Capacidades avanzadas de procesamiento de IA con soporte multi-modelo e inferencia en tiempo real.",
        },
        {
          icon: Database,
          title: "Gestión de Conocimiento",
          description:
            "Sistemas inteligentes de almacenamiento y recuperación de datos para respuestas contextuales de IA.",
        },
        {
          icon: Cloud,
          title: "Infraestructura en la Nube",
          description: "Arquitectura escalable en la nube que crece con las necesidades de tu negocio.",
        },
        {
          icon: Shield,
          title: "Marco de Seguridad",
          description: "Seguridad de nivel empresarial con encriptación, cumplimiento y protección de datos.",
        },
        {
          icon: Zap,
          title: "Procesamiento en Tiempo Real",
          description: "Tiempos de respuesta ultrarrápidos con pipelines de procesamiento optimizados.",
        },
        {
          icon: Globe,
          title: "Distribución Global",
          description: "Infraestructura mundial que asegura baja latencia y alta disponibilidad.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 border-gray-200"
              >
                {t.badge}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t.title}</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.systems.map((system, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <system.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{system.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{system.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
