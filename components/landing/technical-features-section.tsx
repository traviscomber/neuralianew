"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Cpu, Lock, Zap, Globe, BarChart, Webhook } from "lucide-react"

export default function TechnicalFeaturesSection() {
  const technicalFeatures = [
    {
      icon: Code,
      title: "APIs RESTful",
      description: "Integración sencilla con endpoints documentados y SDKs en múltiples lenguajes.",
    },
    {
      icon: Database,
      title: "Base de Datos Escalable",
      description: "PostgreSQL con replicación automática y backup continuo para máxima disponibilidad.",
    },
    {
      icon: Cloud,
      title: "Infraestructura Cloud",
      description: "Desplegado en AWS/Vercel con auto-scaling y distribución global de contenido.",
    },
    {
      icon: Cpu,
      title: "Procesamiento IA",
      description: "GPT-4 Turbo y modelos especializados para comprensión contextual avanzada.",
    },
    {
      icon: Lock,
      title: "Seguridad Avanzada",
      description: "Encriptación AES-256, autenticación OAuth2 y cumplimiento GDPR completo.",
    },
    {
      icon: Zap,
      title: "Tiempo Real",
      description: "WebSockets y Server-Sent Events para comunicación instantánea bidireccional.",
    },
    {
      icon: Globe,
      title: "Multi-idioma",
      description: "Soporte nativo para español, inglés y detección automática de idioma.",
    },
    {
      icon: BarChart,
      title: "Analytics Integrado",
      description: "Métricas en tiempo real con dashboards personalizables y reportes automáticos.",
    },
    {
      icon: Webhook,
      title: "Webhooks",
      description: "Notificaciones automáticas para integración con sistemas externos y workflows.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Arquitectura Técnica</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Tecnología empresarial robusta</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Infraestructura escalable y segura diseñada para empresas que requieren máximo rendimiento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">¿Necesitas una integración personalizada?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nuestro equipo técnico puede desarrollar conectores específicos para tu stack tecnológico
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["Salesforce", "HubSpot", "SAP", "Oracle", "Microsoft", "Shopify", "WooCommerce", "Magento"].map(
                (tech) => (
                  <Badge key={tech} variant="outline" className="bg-white">
                    {tech}
                  </Badge>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
