"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, ShoppingCart, Users, Leaf, ExternalLink, Play } from "lucide-react"

export default function UseCasesSection() {
  const useCases = [
    {
      id: "parrotfy",
      title: "ParrotfyIA - ERP Inteligente",
      description: "Agente especializado en gestión empresarial y consultas ERP",
      icon: ShoppingCart,
      features: [
        "Consultas de inventario en tiempo real",
        "Reportes financieros automatizados",
        "Gestión de proveedores y clientes",
        "Análisis predictivo de ventas",
      ],
      demo: "Demostración interactiva disponible",
      status: "En producción",
    },
    {
      id: "ecosuelo",
      title: "EcosueloLab - IA Agrícola",
      description: "Agente especializado en análisis de suelos y agricultura",
      icon: Leaf,
      features: [
        "Análisis de composición del suelo",
        "Recomendaciones de cultivos",
        "Monitoreo de condiciones ambientales",
        "Optimización de recursos hídricos",
      ],
      demo: "API + WhatsApp integrado",
      status: "Activo",
    },
    {
      id: "coaching",
      title: "Despega Tu Carrera - Coach IA",
      description: "Agente de coaching profesional y desarrollo de carrera",
      icon: Users,
      features: [
        "Evaluación de habilidades profesionales",
        "Plan de desarrollo personalizado",
        "Simulación de entrevistas",
        "Networking y oportunidades",
      ],
      demo: "Conversación empática y personalizada",
      status: "Disponible",
    },
    {
      id: "crm",
      title: "CRM Conversacional",
      description: "Agente para gestión de relaciones con clientes",
      icon: MessageCircle,
      features: [
        "Seguimiento automático de leads",
        "Calificación inteligente de prospectos",
        "Programación de reuniones",
        "Reportes de pipeline de ventas",
      ],
      demo: "Modo dual: Chat y CRM",
      status: "Operativo",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Casos de Uso</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Soluciones en acción</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestros agentes de IA están transformando diferentes industrias
          </p>
        </div>

        <Tabs defaultValue="parrotfy" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger key={useCase.id} value={useCase.id} className="flex items-center gap-2">
                <useCase.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{useCase.title.split(" - ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <useCase.icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{useCase.title}</h3>
                          <p className="text-muted-foreground">{useCase.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Características principales:</h4>
                        <ul className="space-y-2">
                          {useCase.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="border-green-500 text-green-700">
                          {useCase.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{useCase.demo}</span>
                      </div>

                      <div className="flex gap-3">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Play className="w-4 h-4 mr-2" />
                          Ver Demo
                        </Button>
                        <Button variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Más Información
                        </Button>
                      </div>
                    </div>

                    <div className="bg-slate-100 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <useCase.icon className="w-16 h-16 text-blue-500 mx-auto" />
                        <p className="text-muted-foreground">Demo interactivo disponible</p>
                        <Button variant="outline" size="sm">
                          Iniciar Conversación
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
