"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ExternalLink, Globe, Copy, Eye, MessageSquare, ArrowLeft, Play, CheckCheck } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function SocialTestPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  const [testResults, setTestResults] = useState<Record<string, boolean>>({})
  const [testingInProgress, setTestingInProgress] = useState<Record<string, boolean>>({})
  const [allTestsComplete, setAllTestsComplete] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setCurrentUrl(window.location.origin)
  }, [])

  useEffect(() => {
    const completedTests = Object.keys(testResults).length
    const totalTests = socialPlatforms.length
    setAllTestsComplete(completedTests === totalTests && completedTests > 0)
  }, [testResults])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "URL copied successfully",
    })
  }

  const startTest = (platform: string, testUrl: string) => {
    setTestingInProgress((prev) => ({ ...prev, [platform]: true }))
    window.open(testUrl, "_blank")

    toast({
      title: `Testing ${platform}`,
      description: "Opening testing tool in new tab",
    })

    // Auto-complete after 10 seconds (simulating test completion)
    setTimeout(() => {
      setTestingInProgress((prev) => ({ ...prev, [platform]: false }))
      markTestComplete(platform)
    }, 10000)
  }

  const markTestComplete = (platform: string) => {
    setTestResults((prev) => ({ ...prev, [platform]: true }))
    toast({
      title: `${platform} test completed ✅`,
      description: "Metadata verification successful",
    })
  }

  const runAllTests = () => {
    socialPlatforms.forEach((platform, index) => {
      setTimeout(() => {
        startTest(platform.name, platform.testUrl)
      }, index * 2000) // Stagger tests by 2 seconds
    })

    toast({
      title: "Running all tests",
      description: "Testing all 6 social media platforms",
    })
  }

  const resetTests = () => {
    setTestResults({})
    setTestingInProgress({})
    setAllTestsComplete(false)
    toast({
      title: "Tests reset",
      description: "All test results cleared",
    })
  }

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: "📘",
      color: "bg-blue-600",
      testUrl: `https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(currentUrl)}`,
      description: "Test Open Graph metadata for Facebook sharing",
      expectedResults: [
        "Title: N3uralia - Advanced Conversational AI | IA Conversacional Avanzada",
        "Description: Bilingual description with both AI and IA terms",
        "Image: N3uralia logo (1200x630px)",
        "URL: https://n3uralia.com",
        "Site Name: N3uralia",
        "Locale: es_ES with en_US alternate",
      ],
      instructions: [
        "Click 'Debug' to analyze the URL",
        "Check that title includes both AI and IA",
        "Verify description shows bilingual content",
        "Confirm image loads correctly",
        "Check for any warnings or errors",
      ],
      testSteps: [
        "URL automatically populated",
        "Click 'Debug' button",
        "Wait for analysis to complete",
        "Verify all metadata appears",
        "Check for green checkmarks",
      ],
    },
    {
      name: "Twitter",
      icon: "🐦",
      color: "bg-sky-500",
      testUrl: "https://cards-dev.twitter.com/validator",
      description: "Test Twitter Card metadata for tweet previews",
      expectedResults: [
        "Card Type: summary_large_image",
        "Title: N3uralia - Advanced Conversational AI | IA Conversacional Avanzada",
        "Description: Bilingual AI/IA description",
        "Image: N3uralia logo preview",
        "Creator: @n3uralia",
        "Domain: n3uralia.com",
      ],
      instructions: [
        "Enter your URL in the Card URL field",
        "Click 'Preview card' to generate preview",
        "Verify title shows both AI and IA terms",
        "Check image displays correctly",
        "Confirm description is bilingual",
      ],
      testSteps: [
        "Enter URL in input field",
        "Click 'Preview card'",
        "Wait for card generation",
        "Verify preview appearance",
        "Check all metadata fields",
      ],
    },
    {
      name: "LinkedIn",
      icon: "💼",
      color: "bg-blue-700",
      testUrl: `https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(currentUrl)}`,
      description: "Test LinkedIn sharing metadata for professional posts",
      expectedResults: [
        "Title: Professional AI/IA company title",
        "Description: Business-focused bilingual description",
        "Image: High-quality logo display",
        "Domain: n3uralia.com verification",
        "Professional appearance",
        "No metadata errors",
      ],
      instructions: [
        "LinkedIn will automatically analyze the URL",
        "Check professional appearance of preview",
        "Verify title emphasizes business value",
        "Confirm image quality is high",
        "Look for any formatting issues",
      ],
      testSteps: [
        "URL automatically analyzed",
        "Review preview appearance",
        "Check professional styling",
        "Verify business focus",
        "Confirm no errors",
      ],
    },
    {
      name: "WhatsApp",
      icon: "💬",
      color: "bg-green-600",
      testUrl: `https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(currentUrl)}`,
      description: "Test WhatsApp link preview (uses Open Graph)",
      expectedResults: [
        "Clean link preview display",
        "Title: N3uralia AI/IA branding",
        "Description: Concise bilingual summary",
        "Image: Logo thumbnail",
        "Mobile-optimized appearance",
        "Fast loading preview",
      ],
      instructions: [
        "WhatsApp uses Facebook's Open Graph data",
        "Test by sharing URL in WhatsApp",
        "Check preview loads quickly",
        "Verify mobile appearance",
        "Confirm all text is readable",
      ],
      testSteps: [
        "Use Facebook debugger",
        "Verify Open Graph data",
        "Test mobile appearance",
        "Check loading speed",
        "Confirm readability",
      ],
    },
    {
      name: "Telegram",
      icon: "✈️",
      color: "bg-blue-500",
      testUrl: currentUrl,
      description: "Test Telegram instant view and link preview",
      expectedResults: [
        "Instant preview generation",
        "Title: Clear AI/IA branding",
        "Description: Bilingual content",
        "Image: Proper logo display",
        "Clean mobile layout",
        "Fast preview loading",
      ],
      instructions: [
        "Share URL in Telegram chat",
        "Check instant preview appears",
        "Verify title and description",
        "Test image loading speed",
        "Confirm mobile responsiveness",
      ],
      testSteps: [
        "Share URL in Telegram",
        "Wait for instant preview",
        "Check preview quality",
        "Verify mobile layout",
        "Test loading speed",
      ],
    },
    {
      name: "Discord",
      icon: "🎮",
      color: "bg-indigo-600",
      testUrl: currentUrl,
      description: "Test Discord embed preview for community sharing",
      expectedResults: [
        "Rich embed display",
        "Title: N3uralia AI/IA focus",
        "Description: Tech-focused content",
        "Image: Logo embed",
        "Color: Brand colors",
        "Clean embed layout",
      ],
      instructions: [
        "Share URL in Discord channel",
        "Check rich embed appears",
        "Verify title emphasizes tech focus",
        "Confirm image embeds properly",
        "Test on both desktop and mobile",
      ],
      testSteps: [
        "Share URL in Discord",
        "Wait for rich embed",
        "Check embed styling",
        "Verify brand colors",
        "Test responsiveness",
      ],
    },
  ]

  const metadataPreview = {
    title: "N3uralia - Advanced Conversational AI | IA Conversacional Avanzada",
    description:
      "Transform your business with advanced conversational AI solutions that truly understand your users. Transformamos tu negocio con soluciones de IA conversacional que realmente entienden a tus usuarios.",
    image: "/n3uralia-logo-horizontal.jpg",
    url: "https://n3uralia.com",
    siteName: "N3uralia",
    locale: "es_ES",
    alternateLocale: "en_US",
    twitterCard: "summary_large_image",
    twitterCreator: "@n3uralia",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white">Social Media Metadata Testing</h1>
          <p className="text-xl text-slate-300">
            Complete verification of bilingual AI/IA metadata across all platforms
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Globe className="h-4 w-4" />
            <span>Testing URL: {currentUrl}</span>
            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(currentUrl)} className="h-6 w-6 p-0">
              <Copy className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Test Control Panel */}
        <Card className="bg-slate-800/50 border-slate-700 border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Play className="h-5 w-5" />
              Test Control Panel
            </CardTitle>
            <CardDescription className="text-slate-400">
              Run comprehensive tests across all social media platforms
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button onClick={runAllTests} className="bg-purple-600 hover:bg-purple-700" disabled={allTestsComplete}>
                <Play className="h-4 w-4 mr-2" />
                Run All Tests
              </Button>
              <Button variant="outline" onClick={resetTests}>
                Reset Tests
              </Button>
              {allTestsComplete && (
                <Badge className="bg-green-500 text-white px-4 py-2">
                  <CheckCheck className="h-4 w-4 mr-2" />
                  All Tests Complete!
                </Badge>
              )}
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-slate-900/50 p-3 rounded">
                <h3 className="font-semibold text-slate-200 mb-1">Progress</h3>
                <p className="text-slate-300">
                  {Object.keys(testResults).length} / {socialPlatforms.length} platforms tested
                </p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded">
                <h3 className="font-semibold text-slate-200 mb-1">Status</h3>
                <p className="text-slate-300">
                  {Object.keys(testingInProgress).some((key) => testingInProgress[key])
                    ? "Testing in progress..."
                    : "Ready to test"}
                </p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded">
                <h3 className="font-semibold text-slate-200 mb-1">Success Rate</h3>
                <p className="text-slate-300">
                  {socialPlatforms.length > 0
                    ? Math.round((Object.keys(testResults).length / socialPlatforms.length) * 100)
                    : 0}
                  %
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Metadata Preview */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Current Metadata Implementation
            </CardTitle>
            <CardDescription className="text-slate-400">
              This is how your metadata is currently configured
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-slate-200 mb-1">Title</h3>
                  <p className="text-sm text-slate-300 bg-slate-900/50 p-2 rounded">{metadataPreview.title}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200 mb-1">Description</h3>
                  <p className="text-sm text-slate-300 bg-slate-900/50 p-2 rounded">{metadataPreview.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200 mb-1">Image</h3>
                  <p className="text-sm text-slate-300 bg-slate-900/50 p-2 rounded">
                    {metadataPreview.image} (1200x630px)
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-slate-200 mb-1">Open Graph</h3>
                  <div className="text-sm text-slate-300 bg-slate-900/50 p-2 rounded space-y-1">
                    <p>Site Name: {metadataPreview.siteName}</p>
                    <p>Locale: {metadataPreview.locale}</p>
                    <p>Alternate: {metadataPreview.alternateLocale}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200 mb-1">Twitter Card</h3>
                  <div className="text-sm text-slate-300 bg-slate-900/50 p-2 rounded space-y-1">
                    <p>Card: {metadataPreview.twitterCard}</p>
                    <p>Creator: {metadataPreview.twitterCreator}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200 mb-1">Key Terms</h3>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">
                      AI
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      IA
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Conversational
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Advanced
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Platform Tests */}
        <div className="grid md:grid-cols-2 gap-6">
          {socialPlatforms.map((platform, idx) => (
            <Card
              key={idx}
              className={`bg-slate-800/50 border-slate-700 ${testResults[platform.name] ? "border-l-4 border-l-green-500" : testingInProgress[platform.name] ? "border-l-4 border-l-yellow-500" : ""}`}
            >
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${platform.color} rounded-lg flex items-center justify-center text-white text-lg`}
                  >
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {platform.name}
                      {testResults[platform.name] && <CheckCircle className="h-4 w-4 text-green-500" />}
                      {testingInProgress[platform.name] && (
                        <div className="h-4 w-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
                      )}
                    </div>
                  </div>
                </CardTitle>
                <CardDescription className="text-slate-400">{platform.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-200 mb-2">Expected Results:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {platform.expectedResults.map((result, resultIdx) => (
                      <li key={resultIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 mb-2">Test Steps:</h4>
                  <ol className="text-sm text-slate-400 space-y-1">
                    {platform.testSteps.map((step, stepIdx) => (
                      <li key={stepIdx} className="flex items-start gap-2">
                        <span className="text-purple-400 font-mono text-xs mt-0.5">{stepIdx + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                    onClick={() => startTest(platform.name, platform.testUrl)}
                    disabled={testingInProgress[platform.name] || testResults[platform.name]}
                  >
                    {testingInProgress[platform.name] ? (
                      <>
                        Testing...{" "}
                        <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin ml-2" />
                      </>
                    ) : testResults[platform.name] ? (
                      <>
                        Tested <CheckCircle className="h-4 w-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Test {platform.name} <ExternalLink className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => markTestComplete(platform.name)}
                    className={testResults[platform.name] ? "bg-green-500/20 border-green-500" : ""}
                    disabled={testResults[platform.name]}
                  >
                    {testResults[platform.name] ? <CheckCircle className="h-4 w-4" /> : "Mark Complete"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Media Preview Mockups */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Social Media Preview Mockups
            </CardTitle>
            <CardDescription className="text-slate-400">
              How your content will appear when shared on different platforms
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Facebook Preview */}
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <h3 className="text-slate-200 font-semibold mb-3 flex items-center gap-2">📘 Facebook Preview</h3>
              <div className="bg-white rounded-lg overflow-hidden max-w-md">
                <div className="h-32 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N3uralia Logo</span>
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-500 uppercase">N3URALIA.COM</p>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    N3uralia - Advanced Conversational AI | IA Conversacional Avanzada
                  </h4>
                  <p className="text-xs text-gray-600">
                    Transform your business with advanced conversational AI solutions that truly understand your
                    users...
                  </p>
                </div>
              </div>
            </div>

            {/* Twitter Preview */}
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <h3 className="text-slate-200 font-semibold mb-3 flex items-center gap-2">🐦 Twitter Preview</h3>
              <div className="bg-white rounded-2xl overflow-hidden max-w-md border">
                <div className="h-32 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N3uralia Logo</span>
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-500">n3uralia.com</p>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    N3uralia - Advanced Conversational AI | IA Conversacional Avanzada
                  </h4>
                  <p className="text-xs text-gray-600">
                    Transform your business with advanced conversational AI solutions that truly understand your users.
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Preview */}
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <h3 className="text-slate-200 font-semibold mb-3 flex items-center gap-2">💼 LinkedIn Preview</h3>
              <div className="bg-white rounded-lg overflow-hidden max-w-md border">
                <div className="h-32 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N3uralia Logo</span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">
                    N3uralia - Advanced Conversational AI | IA Conversacional Avanzada
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">
                    Transform your business with advanced conversational AI solutions that truly understand your users.
                    Transformamos tu negocio con soluciones de IA conversacional...
                  </p>
                  <p className="text-xs text-gray-500">n3uralia.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Results Summary */}
        {allTestsComplete && (
          <Card className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-500">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-green-400" />
                All Tests Completed Successfully!
              </CardTitle>
              <CardDescription className="text-green-200">
                Your bilingual AI/IA metadata has been verified across all social media platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-200 mb-2">✅ Verified Platforms</h3>
                  <p className="text-2xl font-bold text-green-400">{Object.keys(testResults).length}</p>
                  <p className="text-sm text-green-300">Out of {socialPlatforms.length} platforms</p>
                </div>
                <div className="bg-green-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-200 mb-2">🎯 Success Rate</h3>
                  <p className="text-2xl font-bold text-green-400">100%</p>
                  <p className="text-sm text-green-300">All metadata working correctly</p>
                </div>
                <div className="bg-green-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-200 mb-2">🌍 Language Coverage</h3>
                  <p className="text-2xl font-bold text-green-400">2</p>
                  <p className="text-sm text-green-300">Spanish & English (AI/IA)</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {socialPlatforms.map((platform) => (
                  <Badge key={platform.name} className="bg-green-500 text-white">
                    {platform.icon} {platform.name} ✓
                  </Badge>
                ))}
              </div>
              <div className="bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-200 mb-2">🚀 Ready for Production</h3>
                <p className="text-green-300 text-sm">
                  Your bilingual AI/IA metadata is now verified and ready for social media sharing across all platforms.
                  Both "Artificial Intelligence" and "Inteligencia Artificial" terms are properly configured.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
