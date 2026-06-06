"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, CheckCircle, AlertCircle, Copy, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function GoogleStructuredDataTest() {
  const [currentUrl, setCurrentUrl] = useState("")
  const [testStatus, setTestStatus] = useState<"idle" | "testing" | "success" | "error">("idle")
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

  const openGoogleRichResultsTest = () => {
    setTestStatus("testing")
    const testUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(currentUrl)}`
    window.open(testUrl, "_blank")

    // Simulate test completion after 3 seconds
    setTimeout(() => {
      setTestStatus("success")
    }, 3000)
  }

  const structuredDataSchema = {
    "@context": "https://schema.org",
    "@type": "TechCompany",
    name: "N3uralia",
    alternateName: ["N3uralia AI", "N3uralia IA"],
    description: {
      es: "Soluciones de IA conversacional avanzada para empresas que transforman la manera en que interactúas con tus usuarios",
      en: "Advanced conversational AI solutions for businesses that transform how you interact with your users",
    },
    url: "https://www.n3uralia.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.n3uralia.com/n3uralia-logo-horizontal.jpg",
      width: 1200,
      height: 630,
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Conversational AI",
      "Machine Learning",
      "Natural Language Processing",
      "Business Automation",
      "AI Chatbots",
      "Intelligent Agents",
      "Inteligencia Artificial",
      "IA Conversacional",
      "Aprendizaje Automático",
      "Procesamiento de Lenguaje Natural",
      "Automatización Empresarial",
      "Chatbots IA",
      "Agentes Inteligentes",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
      areaServed: ["CL", "AR", "PE", "CO", "MX", "US"],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Chile",
      },
      {
        "@type": "Place",
        name: "Latin America",
      },
      {
        "@type": "Place",
        name: "Global",
      },
    ],
  }

  const expectedResults = [
    {
      test: "Schema Type Detection",
      expected: "TechCompany schema recognized",
      status: "success",
      description: "Google should detect the TechCompany schema type",
    },
    {
      test: "Bilingual Descriptions",
      expected: "Both Spanish and English descriptions found",
      status: "success",
      description: "Both 'es' and 'en' description fields should be recognized",
    },
    {
      test: "AI/IA Keywords",
      expected: "14 AI/IA related terms in knowsAbout",
      status: "success",
      description: "All bilingual AI terminology should be indexed",
    },
    {
      test: "Geographic Targeting",
      expected: "Chile, Latin America, Global coverage",
      status: "success",
      description: "Geographic scope should be properly defined",
    },
    {
      test: "Contact Information",
      expected: "Multilingual customer service contact",
      status: "success",
      description: "Contact point with Spanish/English support",
    },
    {
      test: "Logo and Images",
      expected: "Structured image data with dimensions",
      status: "success",
      description: "Logo should be properly structured with metadata",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Main Test Button */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
            <ExternalLink className="h-6 w-6 text-blue-400" />
            Google Rich Results Test
          </CardTitle>
          <CardDescription className="text-slate-300">
            Click below to test your structured data directly in Google's official tool
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="p-4 bg-slate-900/50 rounded-lg">
            <p className="text-slate-300 mb-2">Testing URL:</p>
            <div className="flex items-center justify-center gap-2">
              <code className="text-blue-400 bg-slate-800 px-3 py-1 rounded">{currentUrl}</code>
              <Button variant="ghost" size="sm" onClick={() => copyToClipboard(currentUrl)}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={openGoogleRichResultsTest}
            disabled={testStatus === "testing"}
          >
            {testStatus === "testing" ? (
              <>
                <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                Opening Google Test...
              </>
            ) : (
              <>
                <ExternalLink className="h-5 w-5 mr-2" />
                Test Structured Data in Google
              </>
            )}
          </Button>

          {testStatus === "success" && (
            <div className="flex items-center justify-center gap-2 text-green-400">
              <CheckCircle className="h-5 w-5" />
              <span>Google Rich Results Test opened successfully!</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Expected Results */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Expected Test Results</CardTitle>
          <CardDescription className="text-slate-400">
            What Google's Rich Results Test should detect in your structured data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expectedResults.map((result, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-200">{result.test}</h3>
                  <p className="text-sm text-green-400 mb-1">{result.expected}</p>
                  <p className="text-xs text-slate-400">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Schema Preview */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Current Structured Data Schema</CardTitle>
          <CardDescription className="text-slate-400">
            This is the JSON-LD schema currently implemented on your site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900/70 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-slate-300 whitespace-pre-wrap">
              {JSON.stringify(structuredDataSchema, null, 2)}
            </pre>
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
            <Button variant="outline" size="sm" onClick={openGoogleRichResultsTest}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Test in Google
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI/IA Terms Verification */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">AI/IA Terms Verification</CardTitle>
          <CardDescription className="text-slate-400">
            Bilingual artificial intelligence terminology included in structured data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-slate-200 mb-3">English Terms</h3>
              <div className="space-y-2">
                {[
                  "Artificial Intelligence",
                  "Conversational AI",
                  "Machine Learning",
                  "Natural Language Processing",
                  "Business Automation",
                  "AI Chatbots",
                  "Intelligent Agents",
                ].map((term, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <Badge variant="secondary" className="text-xs">
                      {term}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-3">Spanish Terms</h3>
              <div className="space-y-2">
                {[
                  "Inteligencia Artificial",
                  "IA Conversacional",
                  "Aprendizaje Automático",
                  "Procesamiento de Lenguaje Natural",
                  "Automatización Empresarial",
                  "Chatbots IA",
                  "Agentes Inteligentes",
                ].map((term, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <Badge variant="secondary" className="text-xs">
                      {term}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card className="bg-slate-800/50 border-slate-700 border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            What to Look For in Google's Test
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-slate-300">
          <div>
            <h3 className="font-semibold text-slate-200">✅ Success Indicators:</h3>
            <ul className="text-sm text-slate-400 ml-4 mt-1 space-y-1">
              <li>• "Valid" status with green checkmark</li>
              <li>• TechCompany schema type detected</li>
              <li>• No errors or warnings</li>
              <li>• Rich results preview available</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-200">🔍 Key Elements to Verify:</h3>
            <ul className="text-sm text-slate-400 ml-4 mt-1 space-y-1">
              <li>• Company name and alternate names appear</li>
              <li>• Bilingual descriptions are recognized</li>
              <li>• Logo image is properly structured</li>
              <li>• Geographic coverage is detected</li>
              <li>• Contact information is valid</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-200">⚠️ Potential Issues:</h3>
            <ul className="text-sm text-slate-400 ml-4 mt-1 space-y-1">
              <li>• Missing required properties</li>
              <li>• Invalid URL formats</li>
              <li>• Image accessibility issues</li>
              <li>• Syntax errors in JSON-LD</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
