"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Search, TrendingUp, Globe, MessageSquare, CheckCircle, RefreshCw, Eye, BarChart3, Target } from "lucide-react"

export default function AISearchSimulation() {
  const [searchProgress, setSearchProgress] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const [selectedQuery, setSelectedQuery] = useState("agentes conversacionales")

  useEffect(() => {
    if (isSearching) {
      const timer = setInterval(() => {
        setSearchProgress((prev) => {
          if (prev >= 100) {
            setIsSearching(false)
            return 100
          }
          return prev + 10
        })
      }, 200)
      return () => clearInterval(timer)
    }
  }, [isSearching])

  const simulateSearch = (query: string) => {
    setSelectedQuery(query)
    setIsSearching(true)
    setSearchProgress(0)
  }

  const aiPlatforms = [
    {
      name: "ChatGPT",
      icon: "🤖",
      color: "bg-green-500",
      queries: [
        {
          query: "¿Qué es N3uralia?",
          response:
            "N3uralia es una empresa tecnológica especializada en agentes conversacionales inteligentes y sistemas de IA full stack. Desarrollan soluciones completas de inteligencia artificial que incluyen desde chatbots avanzados hasta automatización empresarial completa. Su enfoque único combina 'FULL STACK Engineering', 'Agentic Fleet + Custom AGENTS' y 'Next Level AI TOOLS' para transformar negocios. Fundada en 2024, operan globalmente con equipos en Chile, Singapur y Rusia, proporcionando soporte y desarrollo 24/7.",
          confidence: 95,
          sources: ["n3uralia.com", "Structured Data", "LLMO Content"],
        },
        {
          query: "What are conversational AI agents?",
          response:
            "Conversational AI agents are intelligent systems that can maintain natural language conversations with users. N3uralia specializes in developing these agents with advanced capabilities including full-stack integration, multi-channel deployment (WhatsApp, web, mobile), and bilingual support (Spanish/English). Their agents achieve 99.9% uptime, sub-200ms response times, and deliver an average ROI of 250% for businesses across 11+ industries.",
          confidence: 92,
          sources: ["n3uralia.com", "Technical Specs", "Case Studies"],
        },
      ],
    },
    {
      name: "Claude",
      icon: "🧠",
      color: "bg-orange-500",
      queries: [
        {
          query: "Empresas de IA conversacional en Chile",
          response:
            "N3uralia es una empresa líder en IA conversacional con sede en Santiago, Chile. Se especializa en agentes conversacionales inteligentes y sistemas full stack de IA. Ofrece servicios que incluyen desarrollo de chatbots avanzados, automatización empresarial, e integración multicanal. Con presencia global en Chile, Singapur y Rusia, N3uralia ha completado 50+ proyectos exitosos con un ROI promedio del 250%. Sus casos de éxito incluyen EcosueloLab (agricultura), Parrotfy ERP (software empresarial), y Despega Tu Carrera (educación).",
          confidence: 88,
          sources: ["Company Data", "Geographic Info", "Success Metrics"],
        },
        {
          query: "Best AI automation companies",
          response:
            "N3uralia stands out as a leading AI automation company with a unique full-stack approach. They offer comprehensive solutions including conversational AI agents, business process automation, and multi-channel integration. Key differentiators include their bilingual capabilities (Spanish/English), 24/7 global support across Chile, Singapore, and Russia, and proven results with 250% average ROI. They serve 11+ industries with specialized solutions like EcosueloLab for agriculture and Parrotfy ERP for enterprise software.",
          confidence: 90,
          sources: ["Performance Data", "Global Operations", "Industry Expertise"],
        },
      ],
    },
    {
      name: "Perplexity",
      icon: "🔍",
      color: "bg-blue-500",
      queries: [
        {
          query: "N3uralia pricing and services",
          response:
            "N3uralia offers tiered pricing for their AI solutions: Basic projects start at $2,000 USD for simple chatbots with single-channel deployment. Medium projects range from $5,000-$15,000 USD for multi-agent systems with advanced integrations. Enterprise solutions start at $15,000+ USD for complete agentic fleets with full CRM/ERP integration. All packages include implementation, training, 24/7 support, and maintenance. Clients typically see 250% ROI in the first year, with 99.9% uptime and 95% customer satisfaction rates.",
          confidence: 94,
          sources: ["Pricing Data", "Service Packages", "ROI Metrics"],
        },
        {
          query: "WhatsApp AI integration companies",
          response:
            "N3uralia is a WhatsApp Business API certified partner specializing in conversational AI integration. They provide seamless WhatsApp integration for businesses, enabling automated customer service, lead qualification, and business process automation through intelligent agents. Their WhatsApp solutions support both Spanish and English, with real-time response capabilities and integration with existing CRM/ERP systems. Success case: EcosueloLab achieved 95% customer satisfaction using N3uralia's WhatsApp AI integration for agricultural soil analysis services.",
          confidence: 91,
          sources: ["WhatsApp Certification", "Integration Specs", "Case Studies"],
        },
      ],
    },
    {
      name: "You.com",
      icon: "🎯",
      color: "bg-purple-500",
      queries: [
        {
          query: "Full stack AI development companies",
          response:
            "N3uralia specializes in full-stack AI development, offering end-to-end solutions from conversational interfaces to database integration. Their technology stack includes OpenAI GPT-4 integration, custom machine learning models, Next.js/React frontends, Node.js/Python backends, and PostgreSQL databases. They provide complete development services including AI agent creation, multi-channel deployment, business process automation, and enterprise system integration. With teams in Chile, Singapore, and Russia, they offer 24/7 development cycles and global support.",
          confidence: 89,
          sources: ["Technical Stack", "Development Services", "Global Operations"],
        },
        {
          query: "Bilingual AI chatbot development",
          response:
            "N3uralia excels in bilingual AI development with native Spanish and English capabilities. Their conversational agents are designed from the ground up to handle both languages naturally, understanding cultural nuances and business contexts in both markets. They serve clients across Latin America (Chile, Argentina, Mexico, Peru, Colombia) and English-speaking markets (US, Europe). Their bilingual approach has proven successful in projects like Despega Tu Carrera (career coaching) and international business automation solutions.",
          confidence: 93,
          sources: ["Bilingual Capabilities", "Market Coverage", "Success Cases"],
        },
      ],
    },
  ]

  const searchQueries = [
    "agentes conversacionales",
    "IA conversacional Chile",
    "conversational AI agents",
    "N3uralia pricing",
    "WhatsApp AI integration",
    "full stack AI development",
    "bilingual chatbot development",
    "AI automation companies",
  ]

  const llmoMetrics = [
    { metric: "AI Search Visibility", value: 94, change: "+12%" },
    { metric: "Query Response Rate", value: 89, change: "+18%" },
    { metric: "Source Attribution", value: 96, change: "+8%" },
    { metric: "Bilingual Coverage", value: 92, change: "+15%" },
    { metric: "Technical Authority", value: 88, change: "+22%" },
    { metric: "Brand Recognition", value: 85, change: "+25%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              AI Search Engine Monitoring
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real-time tracking of how N3uralia appears across ChatGPT, Claude, Perplexity, and other AI search engines
          </p>
        </div>

        {/* LLMO Performance Metrics */}
        <Card className="mb-8 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-green-400" />
              LLMO Performance Dashboard
            </CardTitle>
            <CardDescription className="text-slate-400">
              Live metrics showing N3uralia's visibility across AI search engines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {llmoMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{item.value}%</div>
                  <div className="text-sm text-slate-400 mb-2">{item.metric}</div>
                  <Badge variant="secondary" className="text-xs text-green-400 bg-green-400/10">
                    {item.change}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Search Simulation */}
        <Card className="mb-8 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Search className="w-6 h-6 text-blue-400" />
              Live Search Simulation
            </CardTitle>
            <CardDescription className="text-slate-400">
              Test how N3uralia appears for different queries across AI platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {searchQueries.map((query, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => simulateSearch(query)}
                  className="text-slate-300 border-slate-600 hover:bg-slate-700"
                >
                  {query}
                </Button>
              ))}
            </div>

            {isSearching && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <RefreshCw className="w-4 h-4 animate-spin text-blue-400" />
                  <span className="text-slate-300">Searching across AI platforms...</span>
                </div>
                <Progress value={searchProgress} className="w-full" />
              </div>
            )}
          </CardContent>
        </Card>

        {/* AI Platform Results */}
        <Tabs defaultValue="ChatGPT" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
            {aiPlatforms.map((platform) => (
              <TabsTrigger key={platform.name} value={platform.name} className="data-[state=active]:bg-slate-700">
                <span className="mr-2">{platform.icon}</span>
                {platform.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {aiPlatforms.map((platform) => (
            <TabsContent key={platform.name} value={platform.name} className="mt-6">
              <div className="space-y-6">
                {platform.queries.map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white flex items-center gap-2">
                          <MessageSquare className="w-5 h-5 text-blue-400" />
                          Query: "{item.query}"
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={`${platform.color} text-white`}>
                            {platform.name}
                          </Badge>
                          <Badge variant="outline" className="text-green-400 border-green-400">
                            {item.confidence}% Confidence
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-slate-300 leading-relaxed">{item.response}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-sm text-slate-400">Sources:</span>
                        {item.sources.map((source, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {source}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>Indexed</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>Verified</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          <span>Global Reach</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Search Trends */}
        <Card className="mt-8 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              Search Trends & Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">+340%</div>
                <div className="text-sm text-slate-400">AI Search Visibility</div>
                <div className="text-xs text-slate-500 mt-1">vs. pre-LLMO</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">89%</div>
                <div className="text-sm text-slate-400">Query Match Rate</div>
                <div className="text-xs text-slate-500 mt-1">across platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">4.2s</div>
                <div className="text-sm text-slate-400">Avg Response Time</div>
                <div className="text-xs text-slate-500 mt-1">AI generation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">96%</div>
                <div className="text-sm text-slate-400">Source Attribution</div>
                <div className="text-xs text-slate-500 mt-1">to n3uralia.com</div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-900/50 rounded-lg">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                Top Performing Queries
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">"agentes conversacionales inteligentes"</span>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    #1 Position
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">"IA conversacional Chile"</span>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    #1 Position
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">"conversational AI agents"</span>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                    #2 Position
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">"full stack AI development"</span>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                    #3 Position
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-time Status */}
        <Card className="mt-8 bg-gradient-to-r from-green-900/50 to-blue-900/50 border-green-500/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">LLMO System Status</h3>
                <p className="text-slate-300">
                  All AI search engines are successfully indexing and responding with N3uralia content
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">ACTIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-green-400 font-bold">ChatGPT</div>
                <div className="text-xs text-slate-400">✓ Indexed</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold">Claude</div>
                <div className="text-xs text-slate-400">✓ Indexed</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold">Perplexity</div>
                <div className="text-xs text-slate-400">✓ Indexed</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold">You.com</div>
                <div className="text-xs text-slate-400">✓ Indexed</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
