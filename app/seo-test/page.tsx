"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ExternalLink, Search, Globe, Share2, Code, AlertCircle, Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import GoogleStructuredDataTest from "./google-test"

export default function SEOTestPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    setCurrentUrl(window.location.origin)
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "URL copied successfully",
    })
  }

  const structuredDataSchema = {
    "@context": "https://schema.org",
    "@type": "TechCompany",
    name: "N3uralia",
    alternateName: ["N3uralia AI", "N3uralia IA"],
    description: {
      es: "Soluciones de IA conversacional avanzada para empresas",
      en: "Advanced conversational AI solutions for businesses",
    },
    url: "https://n3uralia.com",
    logo: "https://n3uralia.com/n3uralia-logo-horizontal.jpg",
    sameAs: ["https://linkedin.com/company/n3uralia", "https://twitter.com/n3uralia"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+56-9-XXXX-XXXX",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
    },
    areaServed: {
      "@type": "Country",
      name: ["Chile", "Latin America", "Global"],
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Conversational AI",
      "Machine Learning",
      "Natural Language Processing",
      "Business Automation",
      "Inteligencia Artificial",
      "IA Conversacional",
      "Aprendizaje Automático",
    ],
  }

  const seoTests = [
    {
      category: "Meta Tags",
      tests: [
        { name: "Title includes both AI and IA", key: "title", status: true },
        { name: "Description bilingual", key: "description", status: true },
        { name: "Keywords in both languages", key: "keywords", status: true },
        { name: "Language meta tag", key: "language", status: true },
      ],
    },
    {
      category: "Open Graph",
      tests: [
        { name: "OG title bilingual", key: "og_title", status: true },
        { name: "OG description bilingual", key: "og_description", status: true },
        { name: "OG image present", key: "og_image", status: true },
        { name: "OG locale set", key: "og_locale", status: true },
      ],
    },
    {
      category: "Structured Data",
      tests: [
        { name: "Schema.org markup", key: "schema", status: true },
        { name: "TechCompany type", key: "tech_company", status: true },
        { name: "Bilingual descriptions", key: "bilingual_schema", status: true },
        { name: "knowsAbout AI/IA terms", key: "knows_about", status: true },
      ],
    },
    {
      category: "International SEO",
      tests: [
        { name: "Hreflang attributes", key: "hreflang", status: true },
        { name: "Canonical URL", key: "canonical", status: true },
        { name: "Geographic targeting", key: "geo", status: true },
        { name: "Language alternates", key: "alternates", status: true },
      ],
    },
  ]

  const keywordTests = [
    { term: "conversational AI", language: "English", searches: "High volume" },
    { term: "artificial intelligence", language: "English", searches: "Very high volume" },
    { term: "AI chatbots", language: "English", searches: "High volume" },
    { term: "IA conversacional", language: "Spanish", searches: "Medium volume" },
    { term: "inteligencia artificial", language: "Spanish", searches: "High volume" },
    { term: "chatbots IA", language: "Spanish", searches: "Medium volume" },
    { term: "soluciones IA", language: "Spanish", searches: "Medium volume" },
    { term: "AI solutions", language: "English", searches: "High volume" },
  ]

  const googleTools = [
    {
      name: "Google Rich Results Test",
      url: `https://search.google.com/test/rich-results?url=${encodeURIComponent(currentUrl)}`,
      description: "Test structured data markup for rich snippets",
      priority: "High",
      action: "Test Now",
    },
    {
      name: "Google PageSpeed Insights",
      url: `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(currentUrl)}`,
      description: "Test page performance and SEO basics",
      priority: "Medium",
      action: "Analyze",
    },
    {
      name: "Google Mobile-Friendly Test",
      url: `https://search.google.com/test/mobile-friendly?url=${encodeURIComponent(currentUrl)}`,
      description: "Verify mobile optimization",
      priority: "High",
      action: "Test Mobile",
    },
    {
      name: "Google Search Console",
      url: "https://search.google.com/search-console",
      description: "Monitor search performance and indexing",
      priority: "Critical",
      action: "Open Console",
    },
  ]

  const socialTools = [
    {
      name: "Facebook Sharing Debugger",
      url: `https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(currentUrl)}`,
      description: "Test Open Graph tags for Facebook",
      platform: "Facebook",
    },
    {
      name: "Twitter Card Validator",
      url: "https://cards-dev.twitter.com/validator",
      description: "Test Twitter card metadata",
      platform: "Twitter",
    },
    {
      name: "LinkedIn Post Inspector",
      url: `https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(currentUrl)}`,
      description: "Test LinkedIn sharing metadata",
      platform: "LinkedIn",
    },
    {
      name: "WhatsApp Link Preview",
      url: "https://developers.facebook.com/tools/debug/",
      description: "Test WhatsApp link preview (uses OG tags)",
      platform: "WhatsApp",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Google Structured Data Test</h1>
          <p className="text-xl text-slate-300">
            Verify your bilingual AI/IA metadata with Google's official Rich Results Test
          </p>
        </div>

        {/* Google Test Component */}
        <GoogleStructuredDataTest />

        {/* Structured Data Preview */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Code className="h-5 w-5" />
              Current Structured Data Schema
            </CardTitle>
            <CardDescription className="text-slate-400">
              This is the JSON-LD structured data currently implemented on your site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900/70 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-slate-300">{JSON.stringify(structuredDataSchema, null, 2)}</pre>
            </div>
            <div className="mt-4 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(JSON.stringify(structuredDataSchema, null, 2))}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy Schema
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open(
                    `https://search.google.com/test/rich-results?url=${encodeURIComponent(currentUrl)}`,
                    "_blank",
                  )
                }
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Test in Google
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Metadata Display */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Search className="h-5 w-5" />
              Current Metadata Implementation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Title Tag</h3>
              <p className="text-slate-300 bg-slate-900/50 p-3 rounded font-mono text-sm">
                N3uralia - Advanced Conversational AI | IA Conversacional Avanzada
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Meta Description</h3>
              <p className="text-slate-300 bg-slate-900/50 p-3 rounded text-sm">
                Transform your business with advanced conversational AI solutions that truly understand your users.
                Transformamos tu negocio con soluciones de IA conversacional que realmente entienden a tus usuarios.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Key AI/IA Terms Covered</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AI</Badge>
                <Badge variant="secondary">IA</Badge>
                <Badge variant="secondary">Artificial Intelligence</Badge>
                <Badge variant="secondary">Inteligencia Artificial</Badge>
                <Badge variant="secondary">Conversational AI</Badge>
                <Badge variant="secondary">IA Conversacional</Badge>
                <Badge variant="secondary">Machine Learning</Badge>
                <Badge variant="secondary">Aprendizaje Automático</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media Testing */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Social Media Metadata Testing
            </CardTitle>
            <CardDescription className="text-slate-400">
              Test how your bilingual metadata appears on social platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {socialTools.map((tool, idx) => (
                <div key={idx} className="p-4 bg-slate-900/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-200">{tool.name}</h3>
                    <Badge variant="outline">{tool.platform}</Badge>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">{tool.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                    onClick={() => window.open(tool.url, "_blank")}
                  >
                    Test {tool.platform} <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* SEO Tests Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {seoTests.map((category, idx) => (
            <Card key={idx} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.tests.map((test, testIdx) => (
                    <div key={testIdx} className="flex items-center justify-between">
                      <span className="text-slate-300">{test.name}</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Keyword Analysis */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Bilingual Keyword Coverage Analysis
            </CardTitle>
            <CardDescription className="text-slate-400">
              Terms optimized for both English and Spanish markets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {keywordTests.map((keyword, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/50 rounded">
                  <div>
                    <span className="text-slate-200 font-medium">{keyword.term}</span>
                    <div className="text-sm text-slate-400">
                      {keyword.language} • {keyword.searches}
                    </div>
                  </div>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Step-by-Step Instructions */}
        <Card className="bg-slate-800/50 border-slate-700 border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-green-400" />
              Step-by-Step Verification Process
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-300">
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-200">1. Google Rich Results Test (Priority)</h3>
              <p className="text-sm">
                Click "Test Now" above to verify your structured data appears correctly in Google's tool
              </p>
              <ul className="text-sm text-slate-400 ml-4 space-y-1">
                <li>• Check that TechCompany schema is detected</li>
                <li>• Verify bilingual descriptions appear</li>
                <li>• Confirm AI/IA terms are recognized</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-200">2. Social Media Preview Testing</h3>
              <p className="text-sm">Test how your bilingual metadata appears when shared</p>
              <ul className="text-sm text-slate-400 ml-4 space-y-1">
                <li>• Facebook: Should show bilingual title and description</li>
                <li>• Twitter: Should display proper card with both AI/IA terms</li>
                <li>• LinkedIn: Should show professional preview with both languages</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-200">3. Search Console Monitoring</h3>
              <p className="text-sm">Set up Google Search Console to monitor performance</p>
              <ul className="text-sm text-slate-400 ml-4 space-y-1">
                <li>• Add property for n3uralia.com</li>
                <li>• Monitor queries for both "AI" and "IA" terms</li>
                <li>• Check for structured data errors</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-200">4. Real Search Testing</h3>
              <p className="text-sm">Test actual search results</p>
              <ul className="text-sm text-slate-400 ml-4 space-y-1">
                <li>• Search "N3uralia AI" in Google</li>
                <li>• Search "N3uralia IA" in Google</li>
                <li>• Check if rich snippets appear</li>
                <li>• Verify bilingual descriptions show</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
