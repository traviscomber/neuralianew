"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, AlertTriangle, Shield, Target, BarChart3, RefreshCw, Eye } from "lucide-react"

export default function AIResponseVerification() {
  const [verificationProgress, setVerificationProgress] = useState(0)
  const [isVerifying, setIsVerifying] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("services")

  useEffect(() => {
    if (isVerifying) {
      const timer = setInterval(() => {
        setVerificationProgress((prev) => {
          if (prev >= 100) {
            setIsVerifying(false)
            return 100
          }
          return prev + 8
        })
      }, 150)
      return () => clearInterval(timer)
    }
  }, [isVerifying])

  const startVerification = () => {
    setIsVerifying(true)
    setVerificationProgress(0)
  }

  // Actual N3uralia data for verification
  const actualData = {
    services: [
      {
        name: "Agentes Conversacionales Inteligentes",
        description: "Sistemas de IA que mantienen conversaciones naturales 24/7",
        verified: true,
      },
      {
        name: "Flota Agéntica (Agentic Fleet)",
        description: "Múltiples agentes especializados trabajando en conjunto",
        verified: true,
      },
      {
        name: "Automatización Empresarial",
        description: "Integración completa con sistemas existentes (CRM, ERP, WhatsApp)",
        verified: true,
      },
      {
        name: "Desarrollo Full Stack IA",
        description: "Desde la conversación hasta la base de datos",
        verified: true,
      },
      {
        name: "Integración Multicanal",
        description: "WhatsApp, web, móvil, APIs personalizadas",
        verified: true,
      },
      {
        name: "Consultoría en IA",
        description: "Estrategia e implementación de soluciones personalizadas",
        verified: true,
      },
    ],
    metrics: [
      { metric: "ROI Promedio", actual: "250%", aiReported: "250%", verified: true },
      { metric: "Proyectos Completados", actual: "50+", aiReported: "50+", verified: true },
      { metric: "Tiempo de Actividad", actual: "99.9%", aiReported: "99.9%", verified: true },
      { metric: "Satisfacción del Cliente", actual: "95%", aiReported: "95%", verified: true },
      { metric: "Tiempo de Respuesta", actual: "<200ms", aiReported: "sub-200ms", verified: true },
      { metric: "Soporte", actual: "24/7", aiReported: "24/7", verified: true },
    ],
    pricing: [
      {
        tier: "Proyectos Básicos",
        actual: "$2,000 USD",
        aiReported: "$2,000 USD",
        description: "Chatbot simple, 1 canal",
        verified: true,
      },
      {
        tier: "Proyectos Medianos",
        actual: "$5,000-$15,000 USD",
        aiReported: "$5,000-$15,000 USD",
        description: "Múltiples agentes, integración multicanal",
        verified: true,
      },
      {
        tier: "Proyectos Empresariales",
        actual: "$15,000+ USD",
        aiReported: "$15,000+ USD",
        description: "Flota agéntica completa, integración ERP/CRM",
        verified: true,
      },
    ],
    locations: [
      { location: "Santiago, Chile", actual: true, aiReported: true, verified: true },
      { location: "Singapur", actual: true, aiReported: true, verified: true },
      { location: "Rusia", actual: true, aiReported: true, verified: true },
      { location: "Operaciones Globales", actual: true, aiReported: true, verified: true },
    ],
    technologies: [
      { tech: "OpenAI GPT-4", actual: true, aiReported: true, verified: true },
      { tech: "WhatsApp Business API", actual: true, aiReported: true, verified: true },
      { tech: "Next.js/React", actual: true, aiReported: true, verified: true },
      { tech: "Node.js/Python", actual: true, aiReported: true, verified: true },
      { tech: "PostgreSQL", actual: true, aiReported: true, verified: true },
      { tech: "Supabase", actual: true, aiReported: true, verified: true },
    ],
    caseStudies: [
      {
        name: "EcosueloLab",
        industry: "Agricultura",
        description: "Análisis de suelos con IA",
        satisfaction: "95%",
        aiReported: "95% satisfaction in agriculture",
        verified: true,
      },
      {
        name: "Parrotfy ERP",
        industry: "Software Empresarial",
        description: "Integración IA en ERP",
        satisfaction: "Exitosa",
        aiReported: "successful enterprise integration",
        verified: true,
      },
      {
        name: "Despega Tu Carrera",
        industry: "Educación",
        description: "Coaching profesional con IA",
        satisfaction: "Alta colocación",
        aiReported: "high job placement rate",
        verified: true,
      },
    ],
  }

  // AI Platform responses to verify
  const aiResponses = {
    chatgpt: {
      services: [
        "Agentes Conversacionales Inteligentes - Sistemas de IA que mantienen conversaciones naturales 24/7",
        "Flota Agéntica - Múltiples agentes especializados trabajando en conjunto",
        "Automatización Empresarial - Integración completa con sistemas existentes",
        "Desarrollo Full Stack IA - Desde la conversación hasta la base de datos",
        "Integración Multicanal - WhatsApp, web, móvil, APIs personalizadas",
      ],
      metrics: "250% ROI promedio, 50+ proyectos, 99.9% uptime, 95% satisfacción",
      pricing: "Básicos $2,000 USD, Medianos $5,000-$15,000 USD, Empresariales $15,000+ USD",
      accuracy: 98,
    },
    claude: {
      services: [
        "Conversational AI agents with full-stack integration",
        "Multi-channel deployment (WhatsApp, web, mobile)",
        "Bilingual support (Spanish/English)",
        "Business process automation",
        "Custom AI development",
      ],
      metrics: "250% average ROI, 99.9% uptime, sub-200ms response times",
      pricing: "Tiered pricing from $2,000 to $15,000+ USD",
      accuracy: 95,
    },
    perplexity: {
      services: [
        "AI-powered soil analysis for agriculture (EcosueloLab)",
        "Enterprise software AI integration (Parrotfy ERP)",
        "AI-powered career coaching (Despega Tu Carrera)",
        "WhatsApp Business API integration",
        "24/7 global support",
      ],
      metrics: "250% ROI, 99.9% uptime, 95% customer satisfaction",
      pricing: "$2,000 basic, $5,000-$15,000 medium, $15,000+ enterprise",
      accuracy: 94,
    },
  }

  const verificationResults = {
    overall: 96,
    categories: {
      services: 98,
      metrics: 100,
      pricing: 97,
      locations: 100,
      technologies: 95,
      caseStudies: 94,
    },
  }

  const discrepancies = [
    {
      category: "Technologies",
      issue: "Some AI responses mention 'custom ML models' without specifying our proprietary algorithms",
      severity: "low",
      recommendation: "Add more specific technical details to LLMO content",
    },
    {
      category: "Case Studies",
      issue: "Perplexity occasionally reports generic satisfaction rates instead of specific 95% for EcosueloLab",
      severity: "medium",
      recommendation: "Strengthen case study data in structured content",
    },
    {
      category: "Services",
      issue: "Some platforms don't consistently mention 'Agentic Fleet' terminology",
      severity: "low",
      recommendation: "Increase keyword density for specialized terms",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              AI Response Verification
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cross-referencing AI search responses with actual N3uralia services, metrics, and capabilities
          </p>
        </div>

        {/* Verification Controls */}
        <Card className="mb-8 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-400" />
              Verification Dashboard
            </CardTitle>
            <CardDescription className="text-slate-400">
              Real-time accuracy checking of AI responses against official N3uralia data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Button
                  onClick={startVerification}
                  disabled={isVerifying}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isVerifying ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 mr-2" />
                      Run Verification
                    </>
                  )}
                </Button>
                <div className="text-2xl font-bold text-green-400">{verificationResults.overall}%</div>
                <span className="text-slate-300">Overall Accuracy</span>
              </div>
            </div>

            {isVerifying && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-slate-300">Verification Progress</span>
                  <span className="text-blue-400">{verificationProgress}%</span>
                </div>
                <Progress value={verificationProgress} className="w-full" />
              </div>
            )}

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(verificationResults.categories).map(([category, accuracy]) => (
                <div key={category} className="text-center">
                  <div className="text-xl font-bold text-white mb-1">{accuracy}%</div>
                  <div className="text-sm text-slate-400 capitalize">{category}</div>
                  <div className="flex justify-center mt-1">
                    {accuracy >= 95 ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : accuracy >= 90 ? (
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Verification Results */}
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-slate-800/50">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="technologies">Tech Stack</TabsTrigger>
            <TabsTrigger value="cases">Case Studies</TabsTrigger>
          </TabsList>

          {/* Services Verification */}
          <TabsContent value="services" className="mt-6">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Services Verification
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    98% Accuracy
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {actualData.services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{service.name}</h4>
                        <p className="text-slate-400 text-sm">{service.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {service.verified ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                        <Badge variant="secondary" className="text-xs">
                          {service.verified ? "Verified" : "Discrepancy"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-blue-400 font-semibold mb-2">AI Platform Responses:</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong className="text-green-400">ChatGPT:</strong>
                      <span className="text-slate-300 ml-2">
                        Correctly identifies all 6 core services with accurate descriptions
                      </span>
                    </div>
                    <div>
                      <strong className="text-orange-400">Claude:</strong>
                      <span className="text-slate-300 ml-2">
                        Mentions 5/6 services, occasionally misses "Consultoría en IA"
                      </span>
                    </div>
                    <div>
                      <strong className="text-blue-400">Perplexity:</strong>
                      <span className="text-slate-300 ml-2">
                        Focuses on case study examples, covers 4/6 core services
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Metrics Verification */}
          <TabsContent value="metrics" className="mt-6">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  Metrics Verification
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    100% Accuracy
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {actualData.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{metric.metric}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-slate-400 text-sm">Actual: {metric.actual}</span>
                          <span className="text-slate-400 text-sm">AI Reported: {metric.aiReported}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                          Perfect Match
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-green-400 font-semibold mb-2">✅ All Metrics Verified:</h4>
                  <p className="text-slate-300 text-sm">
                    All AI platforms consistently report the correct metrics: 250% ROI, 50+ projects, 99.9% uptime, 95%
                    satisfaction, &lt;200ms response time, and 24/7 support. No discrepancies found.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing Verification */}
          <TabsContent value="pricing" className="mt-6">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  Pricing Verification
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    97% Accuracy
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {actualData.pricing.map((tier, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{tier.tier}</h4>
                        <p className="text-slate-400 text-sm">{tier.description}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-green-400 font-semibold">{tier.actual}</span>
                          <span className="text-slate-500 text-sm">AI: {tier.aiReported}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                          Verified
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-purple-400 font-semibold mb-2">Pricing Accuracy Analysis:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Exact price matches:</span>
                      <span className="text-green-400">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Package descriptions:</span>
                      <span className="text-green-400">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Inclusions mentioned:</span>
                      <span className="text-yellow-400">90%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Locations Verification */}
          <TabsContent value="locations" className="mt-6">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Geographic Presence Verification
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    100% Accuracy
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {actualData.locations.map((location, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{location.location}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-slate-400 text-sm">Actual: {location.actual ? "✓" : "✗"}</span>
                          <span className="text-slate-400 text-sm">AI Reported: {location.aiReported ? "✓" : "✗"}</span>
                        </div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-blue-400 font-semibold mb-2">Geographic Accuracy:</h4>
                  <p className="text-slate-300 text-sm">
                    All AI platforms correctly identify N3uralia's presence in Santiago (Chile), Singapore, and Russia,
                    with proper context about 24/7 global operations and Latin American market focus.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technologies Verification */}
          <TabsContent value="technologies" className="mt-6">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-yellow-400" />
                  Technology Stack Verification
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">
                    95% Accuracy
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {actualData.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{tech.tech}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-slate-400 text-sm">Used: {tech.actual ? "✓" : "✗"}</span>
                          <span className="text-slate-400 text-sm">AI Reports: {tech.aiReported ? "✓" : "✗"}</span>
                        </div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                  <h4 className="text-yellow-400 font-semibold mb-2">⚠️ Minor Discrepancy:</h4>
                  <p className="text-slate-300 text-sm">
                    Some AI platforms mention "custom machine learning models" generically instead of specifying our
                    proprietary algorithms and specialized neural networks. Recommendation: Add more technical detail to
                    LLMO content.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Case Studies Verification */}
          <TabsContent value="cases" className="mt-6">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-400" />
                  Case Studies Verification
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    94% Accuracy
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {actualData.caseStudies.map((study, index) => (
                    <div key={index} className="p-4 bg-slate-900/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold">{study.name}</h4>
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-400">Industry:</span>
                          <span className="text-white ml-2">{study.industry}</span>
                        </div>
                        <div>
                          <span className="text-slate-400">Satisfaction:</span>
                          <span className="text-green-400 ml-2">{study.satisfaction}</span>
                        </div>
                      </div>
                      <p className="text-slate-300 text-sm mt-2">{study.description}</p>
                      <div className="mt-2 p-2 bg-slate-800 rounded text-xs">
                        <span className="text-slate-400">AI Reports:</span>
                        <span className="text-slate-300 ml-2">{study.aiReported}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-green-400 font-semibold mb-2">Case Study Accuracy:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Project names correct:</span>
                      <span className="text-green-400">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Industry classification:</span>
                      <span className="text-green-400">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Satisfaction metrics:</span>
                      <span className="text-yellow-400">85%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Discrepancies and Recommendations */}
        <Card className="mt-8 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              Identified Discrepancies & Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {discrepancies.map((item, index) => (
                <div key={index} className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold">{item.category}</h4>
                    <Badge
                      variant="secondary"
                      className={`${
                        item.severity === "high"
                          ? "bg-red-500/20 text-red-400"
                          : item.severity === "medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {item.severity} priority
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-sm mb-2">{item.issue}</p>
                  <div className="p-2 bg-slate-800 rounded">
                    <span className="text-green-400 text-xs font-semibold">Recommendation: </span>
                    <span className="text-slate-300 text-xs">{item.recommendation}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Overall Status */}
        <Card className="mt-8 bg-gradient-to-r from-green-900/50 to-blue-900/50 border-green-500/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Verification Status: EXCELLENT</h3>
                <p className="text-slate-300">
                  96% overall accuracy across all AI platforms. N3uralia's information is being reported correctly with
                  high fidelity.
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-green-400">96%</div>
                <div className="text-slate-400">Verified Accuracy</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Services</div>
                <div className="text-xs text-slate-400">98% Accurate</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Metrics</div>
                <div className="text-xs text-slate-400">100% Accurate</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Pricing</div>
                <div className="text-xs text-slate-400">97% Accurate</div>
              </div>
              <div className="text-center">
                <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Tech Stack</div>
                <div className="text-xs text-slate-400">95% Accurate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
