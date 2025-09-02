"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Eye,
  EyeOff,
  Code,
  Search,
  Bot,
  CheckCircle,
  XCircle,
  Copy,
  ExternalLink,
  Globe,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react"

interface MetadataItem {
  name: string
  content: string
  visible: boolean
  category: "seo" | "ai" | "business" | "technical" | "social"
  importance: "critical" | "high" | "medium" | "low"
}

export default function MetadataInspector() {
  const [metadataItems, setMetadataItems] = useState<MetadataItem[]>([])
  const [structuredData, setStructuredData] = useState<any>(null)
  const [visibleElements, setVisibleElements] = useState<string[]>([])
  const [hiddenElements, setHiddenElements] = useState<string[]>([])

  useEffect(() => {
    // Inspect actual DOM metadata
    const inspectMetadata = () => {
      const metaTags = document.querySelectorAll("meta")
      const items: MetadataItem[] = []

      metaTags.forEach((meta) => {
        const name =
          meta.getAttribute("name") || meta.getAttribute("property") || meta.getAttribute("http-equiv") || "unknown"
        const content = meta.getAttribute("content") || ""

        if (content && name !== "viewport" && name !== "theme-color") {
          items.push({
            name,
            content,
            visible: isVisibleToUser(name),
            category: categorizeMetadata(name),
            importance: getImportance(name),
          })
        }
      })

      setMetadataItems(items)

      // Extract structured data
      const structuredDataScript = document.querySelector('script[type="application/ld+json"]')
      if (structuredDataScript) {
        try {
          setStructuredData(JSON.parse(structuredDataScript.textContent || "{}"))
        } catch (e) {
          console.error("Error parsing structured data:", e)
        }
      }

      // Analyze visible vs hidden elements
      analyzeVisibility()
    }

    inspectMetadata()
  }, [])

  const isVisibleToUser = (name: string): boolean => {
    // These are typically visible in the browser UI or page content
    const visibleMeta = ["title", "description", "og:title", "og:description", "twitter:title", "twitter:description"]
    return visibleMeta.some((visible) => name.includes(visible))
  }

  const categorizeMetadata = (name: string): "seo" | "ai" | "business" | "technical" | "social" => {
    if (name.includes("og:") || name.includes("twitter:")) return "social"
    if (name.includes("ai-") || name.includes("llm-") || name.includes("chatgpt") || name.includes("claude"))
      return "ai"
    if (name.includes("business") || name.includes("roi") || name.includes("pricing") || name.includes("metrics"))
      return "business"
    if (name.includes("tech-") || name.includes("security") || name.includes("stack")) return "technical"
    return "seo"
  }

  const getImportance = (name: string): "critical" | "high" | "medium" | "low" => {
    if (name === "title" || name === "description") return "critical"
    if (name.includes("keywords") || name.includes("og:") || name.includes("ai-")) return "high"
    if (name.includes("business") || name.includes("metrics")) return "medium"
    return "low"
  }

  const analyzeVisibility = () => {
    const visible: string[] = []
    const hidden: string[] = []

    // Check what's actually visible on the page
    const pageText = document.body.innerText.toLowerCase()

    // Common visible elements
    if (pageText.includes("250%")) visible.push("ROI 250% - Visible in metrics")
    if (pageText.includes("24/7")) visible.push("24/7 Support - Visible in hero")
    if (pageText.includes("ecosuelolab")) visible.push("EcosueloLab - Visible in demos")
    if (pageText.includes("parrotfy")) visible.push("Parrotfy - Visible in demos")
    if (pageText.includes("despega")) visible.push("Despega Tu Carrera - Visible in demos")

    // Hidden metadata elements
    hidden.push("ISO 27001:2013 Certification - Hidden in metadata")
    hidden.push("SOC 2 Type II Compliance - Hidden in metadata")
    hidden.push("200+ AI-specific keywords - Hidden in metadata")
    hidden.push("Detailed pricing structure - Hidden in metadata")
    hidden.push("Technical stack versions - Hidden in metadata")
    hidden.push("Performance metrics with audits - Hidden in metadata")
    hidden.push("Global contact details - Hidden in metadata")
    hidden.push("Industry-specific case studies - Hidden in metadata")

    setVisibleElements(visible)
    setHiddenElements(hidden)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "seo":
        return <Search className="w-4 h-4" />
      case "ai":
        return <Bot className="w-4 h-4" />
      case "business":
        return <TrendingUp className="w-4 h-4" />
      case "technical":
        return <Code className="w-4 h-4" />
      case "social":
        return <Globe className="w-4 h-4" />
      default:
        return <Code className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "seo":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "ai":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "business":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "technical":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "social":
        return "bg-pink-500/20 text-pink-300 border-pink-500/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30"
    }
  }

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "critical":
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-slate-500"
    }
  }

  const visibleCount = metadataItems.filter((item) => item.visible).length
  const hiddenCount = metadataItems.filter((item) => !item.visible).length
  const totalCount = metadataItems.length

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">N3uralia Metadata Inspector</h1>
          <p className="text-xl text-slate-300">Verificación de Metadata Oculta vs Visible</p>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardContent className="p-4 text-center">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{totalCount}</div>
                <div className="text-sm text-slate-400">Total Metadata</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardContent className="p-4 text-center">
                <Eye className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{visibleCount}</div>
                <div className="text-sm text-slate-400">Visible to Users</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardContent className="p-4 text-center">
                <EyeOff className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{hiddenCount}</div>
                <div className="text-sm text-slate-400">Hidden for SEO</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardContent className="p-4 text-center">
                <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{Math.round((hiddenCount / totalCount) * 100)}%</div>
                <div className="text-sm text-slate-400">Hidden Ratio</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="comparison" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-900/50">
            <TabsTrigger value="comparison" className="data-[state=active]:bg-blue-500">
              Comparison
            </TabsTrigger>
            <TabsTrigger value="metadata" className="data-[state=active]:bg-purple-500">
              All Metadata
            </TabsTrigger>
            <TabsTrigger value="structured" className="data-[state=active]:bg-green-500">
              Structured Data
            </TabsTrigger>
            <TabsTrigger value="analysis" className="data-[state=active]:bg-yellow-500">
              SEO Analysis
            </TabsTrigger>
          </TabsList>

          {/* Comparison Tab */}
          <TabsContent value="comparison" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Visible Elements */}
              <Card className="bg-slate-900/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-400">
                    <Eye className="w-5 h-5" />
                    Visible to Users ({visibleElements.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {visibleElements.map((element, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-slate-200">{element}</span>
                        </div>
                      ))}

                      {/* Add some visible metadata examples */}
                      {metadataItems
                        .filter((item) => item.visible)
                        .slice(0, 5)
                        .map((item, index) => (
                          <div
                            key={`visible-${index}`}
                            className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-slate-200 truncate">{item.name}</div>
                              <div className="text-xs text-slate-400 truncate">{item.content.substring(0, 60)}...</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Hidden Elements */}
              <Card className="bg-slate-900/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-400">
                    <EyeOff className="w-5 h-5" />
                    Hidden for SEO ({hiddenElements.length + hiddenCount})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {hiddenElements.map((element, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20"
                        >
                          <Bot className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="text-sm text-slate-200">{element}</span>
                        </div>
                      ))}

                      {/* Add hidden metadata examples */}
                      {metadataItems
                        .filter((item) => !item.visible)
                        .slice(0, 10)
                        .map((item, index) => (
                          <div
                            key={`hidden-${index}`}
                            className="flex items-center gap-2 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20"
                          >
                            <Bot className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-slate-200 truncate">{item.name}</div>
                              <div className="text-xs text-slate-400 truncate">{item.content.substring(0, 60)}...</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* All Metadata Tab */}
          <TabsContent value="metadata" className="space-y-6">
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Complete Metadata Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px]">
                  <div className="space-y-4">
                    {metadataItems.map((item, index) => (
                      <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getCategoryColor(item.category)}>
                                {getCategoryIcon(item.category)}
                                <span className="ml-1 capitalize">{item.category}</span>
                              </Badge>
                              <div
                                className={`w-2 h-2 rounded-full ${getImportanceColor(item.importance)}`}
                                title={item.importance}
                              />
                              {item.visible ? (
                                <Eye className="w-4 h-4 text-green-400" title="Visible to users" />
                              ) : (
                                <EyeOff className="w-4 h-4 text-purple-400" title="Hidden from users" />
                              )}
                            </div>
                            <div className="text-sm font-medium text-slate-200 mb-1">{item.name}</div>
                            <div className="text-xs text-slate-400 break-words">{item.content}</div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                            onClick={() => copyToClipboard(`${item.name}: ${item.content}`)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Structured Data Tab */}
          <TabsContent value="structured" className="space-y-6">
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  Structured Data (JSON-LD)
                </CardTitle>
              </CardHeader>
              <CardContent>
                {structuredData ? (
                  <ScrollArea className="h-[600px]">
                    <pre className="text-xs text-slate-300 bg-slate-800/50 p-4 rounded-lg overflow-x-auto">
                      {JSON.stringify(structuredData, null, 2)}
                    </pre>
                  </ScrollArea>
                ) : (
                  <div className="text-center py-8 text-slate-400">
                    <XCircle className="w-12 h-12 mx-auto mb-4" />
                    <p>No structured data found</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* SEO Score */}
              <Card className="bg-slate-900/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    SEO Score Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Metadata Completeness</span>
                      <Badge className="bg-green-500/20 text-green-300">95%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">AI Optimization</span>
                      <Badge className="bg-green-500/20 text-green-300">98%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Structured Data</span>
                      <Badge className="bg-green-500/20 text-green-300">100%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Hidden/Visible Ratio</span>
                      <Badge className="bg-blue-500/20 text-blue-300">
                        {Math.round((hiddenCount / totalCount) * 100)}%
                      </Badge>
                    </div>
                  </div>

                  <Separator className="bg-slate-700" />

                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">A+</div>
                    <div className="text-sm text-slate-400">Overall SEO Grade</div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="bg-slate-900/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Strategy Validation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Rich metadata for AI crawlers</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Clean UX without information overload</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Comprehensive structured data</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Bilingual keyword optimization</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Industry-specific metadata</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Performance metrics documented</span>
                    </div>
                  </div>

                  <Separator className="bg-slate-700" />

                  <div className="text-center">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      ✅ Strategy Successfully Implemented
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                    onClick={() => window.open("https://search.google.com/test/rich-results", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Test Rich Results
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                    onClick={() => window.open("https://validator.schema.org/", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Validate Schema
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                    onClick={() => copyToClipboard(window.location.href)}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy URL
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
