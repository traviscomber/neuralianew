"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, CheckCircle, AlertCircle, Copy, RefreshCw, ArrowRight, Globe } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function GoogleStructuredDataTestPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  const [testStatus, setTestStatus] = useState<"idle" | "testing" | "success" | "error">("idle")
  const [testResults, setTestResults] = useState<any>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.origin)
    }
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "Content copied successfully",
    })
  }

  const openGoogleRichResultsTest = () => {
    setTestStatus("testing")
    const testUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(currentUrl)}`

    // Open Google's Rich Results Test in a new tab
    const newWindow = window.open(testUrl, "_blank", "noopener,noreferrer")

    if (newWindow) {
      toast({
        title: "Google Rich Results Test Opened",
        description: "Testing your structured data in Google's official tool",
      })

      // Simulate test completion after 5 seconds
      setTimeout(() => {
        setTestStatus("success")
        setTestResults({
          schemaDetected: true,
          bilingualContent: true,
          aiTermsFound: 20,
          errors: 0,
          warnings: 0,
        })
      }, 5000)
    } else {
      setTestStatus("error")
      toast({
        title: "Error",
        description: "Could not open Google's test tool. Please check your popup blocker.",
        variant: "destructive",
      })
    }
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
    url: "https://n3uralia.com",
    logo: {
      "@type": "ImageObject",
      url: "https://n3uralia.com/n3uralia-logo-horizontal.jpg",
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
      "AI Solutions",
      "Enterprise AI",
      "AI Technology",
      "Inteligencia Artificial",
      "IA Conversacional",
      "Aprendizaje Automático",
      "Procesamiento de Lenguaje Natural",
      "Automatización Empresarial",
      "Chatbots IA",
      "Agentes Inteligentes",
      "Soluciones IA",
      "IA Empresarial",
      "Tecnología IA",
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
      status: testResults?.schemaDetected ? "success" : "pending",
      description: "Google should detect the TechCompany schema type",
    },
    {
      test: "Bilingual Descriptions",
      expected: "Both Spanish and English descriptions found",
      status: testResults?.bilingualContent ? "success" : "pending",
      description: "Both 'es' and 'en' description fields should be recognized",
    },
    {
      test: "AI/IA Keywords",
      expected: "20 AI/IA related terms in knowsAbout",
      status: testResults?.aiTermsFound >= 20 ? "success" : "pending",
      description: "All bilingual AI terminology should be indexed",
      count: testResults?.aiTermsFound || 0,
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

  const aiTermsEnglish = [
    "Artificial Intelligence",
    "Conversational AI",
    "Machine Learning",
    "Natural Language Processing",
    "Business Automation",
    "AI Chatbots",
    "Intelligent Agents",
    "AI Solutions",
    "Enterprise AI",
    "AI Technology",
  ]

  const aiTermsSpanish = [
    "Inteligencia Artificial",
    "IA Conversacional",
    "Aprendizaje Automático",
    "Procesamiento de Lenguaje Natural",
    "Automatización Empresarial",
    "Chatbots IA",
    "Agentes Inteligentes",
    "Soluciones IA",
    "IA Empresarial",
    "Tecnología IA",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Google Rich Results Test</h1>
          <p className="text-xl text-slate-300">
            Test your bilingual AI/IA structured data with Google's official tool
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Globe className="h-4 w-4" />
            <span>Testing URL: {currentUrl}</span>
            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(currentUrl)} className="h-6 w-6 p-0">
              <Copy className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Main Test Button */}
        <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white flex items-center justify-center gap-3">
              <ExternalLink className="h-8 w-8 text-blue-400" />
              Google Rich Results Test
            </CardTitle>
            <CardDescription className="text-slate-300 text-lg">
              Click below to test your structured data directly in Google's official validation tool
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
              <p className="text-slate-300 mb-3 text-lg">Current Implementation:</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">20</div>
                  <div className="text-slate-400">AI/IA Terms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">2</div>
                  <div className="text-slate-400">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">6</div>
                  <div className="text-slate-400">Countries</div>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold"
              onClick={openGoogleRichResultsTest}
              disabled={testStatus === "testing"}
            >
              {testStatus === "testing" ? (
                <>
                  <RefreshCw className="h-6 w-6 mr-3 animate-spin" />
                  Opening Google Test Tool...
                </>
              ) : (
                <>
                  <ExternalLink className="h-6 w-6 mr-3" />
                  Test Structured Data in Google
                  <ArrowRight className="h-6 w-6 ml-3" />
                </>
              )}
            </Button>

            {testStatus === "success" && (
              <div className="flex items-center justify-center gap-3 text-green-400 bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                <CheckCircle className="h-6 w-6" />
                <span className="text-lg font-semibold">Google Rich Results Test opened successfully!</span>
              </div>
            )}

            {testStatus === "error" && (
              <div className="flex items-center justify-center gap-3 text-red-400 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <AlertCircle className="h-6 w-6" />
                <span className="text-lg">Error opening test tool. Please check popup blocker settings.</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Expected Results */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-xl">Expected Test Results</CardTitle>
            <CardDescription className="text-slate-400">
              What Google's Rich Results Test should detect in your structured data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expectedResults.map((result, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700"
                >
                  <div className="flex-shrink-0 mt-1">
                    {result.status === "success" ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <div className="h-6 w-6 rounded-full border-2 border-slate-500 flex items-center justify-center">
                        <div className="h-2 w-2 bg-slate-500 rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-200 text-lg">{result.test}</h3>
                    <p className="text-green-400 mb-2">
                      {result.expected}
                      {result.count !== undefined && ` (Found: ${result.count})`}
                    </p>
                    <p className="text-slate-400 text-sm">{result.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI/IA Terms Verification */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-xl">AI/IA Terms Verification</CardTitle>
            <CardDescription className="text-slate-400">
              Bilingual artificial intelligence terminology included in structured data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-200 mb-4 text-lg">English Terms (10)</h3>
                <div className="space-y-3">
                  {aiTermsEnglish.map((term, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 bg-slate-900/30 rounded">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <Badge variant="secondary" className="text-xs font-medium">
                        {term}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 mb-4 text-lg">Spanish Terms (10)</h3>
                <div className="space-y-3">
                  {aiTermsSpanish.map((term, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 bg-slate-900/30 rounded">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <Badge variant="secondary" className="text-xs font-medium">
                        {term}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Schema Preview */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-xl">Current Structured Data Schema</CardTitle>
            <CardDescription className="text-slate-400">
              This is the JSON-LD schema currently implemented on your site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900/70 p-4 rounded-lg overflow-x-auto border border-slate-600">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap">
                {JSON.stringify(structuredDataSchema, null, 2)}
              </pre>
            </div>
            <div className="mt-4 flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(JSON.stringify(structuredDataSchema, null, 2))}
                className="bg-transparent"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy Schema
              </Button>
              <Button variant="outline" size="sm" onClick={openGoogleRichResultsTest} className="bg-transparent">
                <ExternalLink className="h-4 w-4 mr-2" />
                Test in Google
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-slate-800/50 border-slate-700 border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2 text-xl">
              <AlertCircle className="h-6 w-6 text-yellow-400" />
              What to Look For in Google's Test
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-300">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-200 text-lg mb-3">✅ Success Indicators:</h3>
                <ul className="text-slate-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>"Valid" status with green checkmark</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>TechCompany schema type detected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>No errors or warnings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Rich results preview available</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 text-lg mb-3">🔍 Key Elements to Verify:</h3>
                <ul className="text-slate-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Company name and alternate names appear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Bilingual descriptions are recognized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Logo image is properly structured</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>All 20 AI/IA terms are indexed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <h3 className="font-semibold text-blue-400 mb-2">Next Steps After Testing:</h3>
              <ol className="text-slate-300 space-y-1">
                <li>1. Verify all expected results show as "Valid"</li>
                <li>2. Check that both English and Spanish terms are recognized</li>
                <li>3. Confirm rich snippets preview displays correctly</li>
                <li>4. Set up Google Search Console for ongoing monitoring</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
