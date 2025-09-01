"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Cpu, Lock, Zap, Globe, BarChart, MessageSquare } from "lucide-react"

export default function TechnicalFeaturesSection() {
  const technicalFeatures = [
    {
      icon: Code,
      title: "APIs RESTful",
      description: "Integración perfecta con cualquier sistema existente mediante APIs robustas y documentadas.",
    },
    {
      icon: Database,
      title: "Base de Datos Vectorial",
      description: "Almacenamiento optimizado para búsqueda semántica y recuperación de información contextual.",
    },
    {
      icon: Cloud,
      title: "Arquitectura Cloud-Native",
      description: "Escalabilidad automática en AWS/Azure con alta disponibilidad y redundancia.",
    },
    {
      icon: Cpu,
      title: "Procesamiento en Tiempo Real",
      description: "Inferencia de IA optimizada con latencia ultra-baja para respuestas instantáneas.",
    },
    {
      icon: Lock,
      title: "Encriptación End-to-End",
      description: "Seguridad empresarial con cifrado AES-256 y cumplimiento de normativas internacionales.",
    },
    {
      icon: Zap,
      title: "Auto-scaling Inteligente",
      description: "Ajuste automático de recursos basado en demanda para optimizar costos y rendimiento.",
    },
    {
      icon: Globe,
      title: "CDN Global",
      description: "Red de distribución mundial para garantizar baja latencia desde cualquier ubicación.",
    },
    {
      icon: BarChart,
      title: "Analytics en Tiempo Real",
      description: "Métricas detalladas y dashboards interactivos para monitoreo continuo del rendimiento.",
    },
    {
      icon: MessageSquare,
      title: "NLP Avanzado",
      description: "Procesamiento de lenguaje natural con modelos transformer de última generación.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30">
            Arquitectura Técnica
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Tecnología de vanguardia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Infraestructura robusta y escalable diseñada para empresas exigentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalFeatures.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
