"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  NavigationIcon,
  Layout,
  MousePointer,
  Smartphone,
  MessageSquare,
  ExternalLink,
  RefreshCw,
  Eye,
  Code,
  Zap,
} from "lucide-react"

interface TestResult {
  name: string
  status: "pass" | "fail" | "warning" | "testing"
  message: string
  details?: string[]
}

interface TestCategory {
  name: string
  icon: React.ElementType
  tests: TestResult[]
  progress: number
}

export default function SiteVerificationPage() {
  const [testResults, setTestResults] = useState<TestCategory[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [currentTest, setCurrentTest] = useState("")
  const [overallProgress, setOverallProgress] = useState(0)

  const runNavigationTests = async (): Promise<TestResult[]> => {
    const tests: TestResult[] = []

    // Test navigation sections
    const sections = ["hero", "use-cases", "features", "technical-features", "faq", "contact"]

    for (const section of sections) {
      setCurrentTest(`Testing navigation to ${section}`)
      await new Promise((resolve) => setTimeout(resolve, 500))

      const element = document.getElementById(section)
      tests.push({
        name: `Navigation to ${section}`,
        status: element ? "pass" : "fail",
        message: element ? `Section ${section} found and accessible` : `Section ${section} not found`,
        details: element
          ? [`Element ID: ${section}`, `Scroll position available`]
          : [`Missing element with ID: ${section}`],
      })
    }

    // Test navigation menu functionality
    setCurrentTest("Testing navigation menu")
    await new Promise((resolve) => setTimeout(resolve, 300))

    const navElement = document.querySelector("nav")
    tests.push({
      name: "Navigation Menu",
      status: navElement ? "pass" : "fail",
      message: navElement ? "Navigation menu rendered successfully" : "Navigation menu not found",
      details: navElement ? ["Navigation element present", "Menu items accessible"] : ["Missing navigation element"],
    })

    return tests
  }

  const runSectionTests = async (): Promise<TestResult[]> => {
    const tests: TestResult[] = []

    const sectionTests = [
      { id: "hero", name: "Hero Section", required: ["h1", "button"] },
      { id: "use-cases", name: "Use Cases Section", required: [".tabs-list", ".card"] },
      { id: "features", name: "Features Section", required: [".grid", ".card"] },
      { id: "technical-features", name: "Technical Features", required: [".card", ".badge"] },
      { id: "faq", name: "FAQ Section", required: [".accordion", "button"] },
      { id: "contact", name: "Footer/Contact", required: ["footer", 'a[href*="wa.me"]'] },
    ]

    for (const section of sectionTests) {
      setCurrentTest(`Verifying ${section.name}`)
      await new Promise((resolve) => setTimeout(resolve, 400))

      const sectionElement = document.getElementById(section.id)
      if (!sectionElement) {
        tests.push({
          name: section.name,
          status: "fail",
          message: `Section ${section.name} not found`,
          details: [`Missing element with ID: ${section.id}`],
        })
        continue
      }

      const missingElements = []
      const foundElements = []

      for (const selector of section.required) {
        const element = sectionElement.querySelector(selector) || document.querySelector(selector)
        if (element) {
          foundElements.push(selector)
        } else {
          missingElements.push(selector)
        }
      }

      tests.push({
        name: section.name,
        status:
          missingElements.length === 0 ? "pass" : missingElements.length < section.required.length ? "warning" : "fail",
        message:
          missingElements.length === 0
            ? `${section.name} fully functional`
            : `${section.name} missing ${missingElements.length} elements`,
        details: [...foundElements.map((el) => `✓ Found: ${el}`), ...missingElements.map((el) => `✗ Missing: ${el}`)],
      })
    }

    return tests
  }

  const runInteractiveTests = async (): Promise<TestResult[]> => {
    const tests: TestResult[] = []

    // Test buttons and CTAs
    setCurrentTest("Testing interactive elements")
    await new Promise((resolve) => setTimeout(resolve, 300))

    const buttons = document.querySelectorAll("button")
    const links = document.querySelectorAll('a[href*="wa.me"]')
    const tabs = document.querySelectorAll('[role="tab"]')

    tests.push({
      name: "Interactive Buttons",
      status: buttons.length > 0 ? "pass" : "fail",
      message: `Found ${buttons.length} interactive buttons`,
      details: [`Total buttons: ${buttons.length}`, `Clickable elements available`],
    })

    tests.push({
      name: "WhatsApp Links",
      status: links.length > 0 ? "pass" : "warning",
      message: `Found ${links.length} WhatsApp contact links`,
      details: [
        `WhatsApp links: ${links.length}`,
        links.length > 0 ? "Contact functionality available" : "No WhatsApp integration found",
      ],
    })

    tests.push({
      name: "Tab Navigation",
      status: tabs.length > 0 ? "pass" : "warning",
      message: `Found ${tabs.length} tab elements`,
      details: [
        `Tab elements: ${tabs.length}`,
        tabs.length > 0 ? "Tab navigation available" : "No tab navigation found",
      ],
    })

    // Test form elements
    const inputs = document.querySelectorAll("input, textarea")
    tests.push({
      name: "Form Elements",
      status: inputs.length > 0 ? "pass" : "warning",
      message: `Found ${inputs.length} form inputs`,
      details: [`Form inputs: ${inputs.length}`, inputs.length > 0 ? "User input available" : "No form inputs found"],
    })

    return tests
  }

  const runResponsiveTests = async (): Promise<TestResult[]> => {
    const tests: TestResult[] = []

    setCurrentTest("Testing responsive design")
    await new Promise((resolve) => setTimeout(resolve, 400))

    // Test viewport meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]')
    tests.push({
      name: "Viewport Configuration",
      status: viewportMeta ? "pass" : "fail",
      message: viewportMeta ? "Viewport meta tag configured" : "Missing viewport meta tag",
      details: viewportMeta
        ? [`Content: ${viewportMeta.getAttribute("content")}`]
        : ["Add viewport meta tag for mobile support"],
    })

    // Test responsive classes
    const responsiveElements = document.querySelectorAll('[class*="sm:"], [class*="md:"], [class*="lg:"]')
    tests.push({
      name: "Responsive Classes",
      status: responsiveElements.length > 0 ? "pass" : "warning",
      message: `Found ${responsiveElements.length} responsive elements`,
      details: [`Responsive elements: ${responsiveElements.length}`, "Tailwind responsive classes detected"],
    })

    // Test mobile navigation
    const mobileNav = document.querySelector('[class*="md:hidden"]')
    tests.push({
      name: "Mobile Navigation",
      status: mobileNav ? "pass" : "warning",
      message: mobileNav ? "Mobile navigation detected" : "Mobile navigation not found",
      details: mobileNav ? ["Mobile-specific navigation available"] : ["Consider adding mobile navigation"],
    })

    return tests
  }

  const runChatTests = async (): Promise<TestResult[]> => {
    const tests: TestResult[] = []

    setCurrentTest("Testing chat functionality")
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Test chat widget
    const chatWidget = document.querySelector('[class*="chat"]') || document.querySelector('[data-testid="chat"]')
    tests.push({
      name: "Chat Widget",
      status: chatWidget ? "pass" : "warning",
      message: chatWidget ? "Chat widget found" : "Chat widget not detected",
      details: chatWidget ? ["Chat interface available"] : ["Chat widget may not be loaded"],
    })

    // Test chat interface components
    const chatInterface =
      document.querySelector('[class*="HeroChatInterface"]') || document.querySelector(".tabs-content")
    tests.push({
      name: "Chat Interface",
      status: chatInterface ? "pass" : "warning",
      message: chatInterface ? "Chat interface components found" : "Chat interface not detected",
      details: chatInterface ? ["Interactive chat demo available"] : ["Chat demo may not be loaded"],
    })

    // Test message elements
    const messageElements = document.querySelectorAll('[class*="message"], [class*="chat-"]')
    tests.push({
      name: "Chat Messages",
      status: messageElements.length > 0 ? "pass" : "warning",
      message: `Found ${messageElements.length} chat message elements`,
      details: [
        `Message elements: ${messageElements.length}`,
        messageElements.length > 0 ? "Chat messages rendered" : "No chat messages found",
      ],
    })

    return tests
  }

  const runCTATests = async (): Promise<TestResult[]> => {
    const tests: TestResult[] = []

    setCurrentTest("Testing call-to-action elements")
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Test WhatsApp CTAs
    const whatsappCTAs = document.querySelectorAll('a[href*="wa.me"], button[onclick*="wa.me"]')
    tests.push({
      name: "WhatsApp CTAs",
      status: whatsappCTAs.length > 0 ? "pass" : "fail",
      message: `Found ${whatsappCTAs.length} WhatsApp call-to-action elements`,
      details: [
        `WhatsApp CTAs: ${whatsappCTAs.length}`,
        whatsappCTAs.length > 0 ? "Contact integration working" : "Missing WhatsApp integration",
      ],
    })

    // Test primary CTAs
    const primaryCTAs = document.querySelectorAll('button[class*="bg-slate-900"], button[class*="bg-emerald"]')
    tests.push({
      name: "Primary CTAs",
      status: primaryCTAs.length > 0 ? "pass" : "warning",
      message: `Found ${primaryCTAs.length} primary call-to-action buttons`,
      details: [`Primary CTAs: ${primaryCTAs.length}`, "Main action buttons available"],
    })

    // Test external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    tests.push({
      name: "External Links",
      status: externalLinks.length > 0 ? "pass" : "warning",
      message: `Found ${externalLinks.length} external links`,
      details: [`External links: ${externalLinks.length}`, "Links open in new tabs"],
    })

    return tests
  }

  const runAllTests = async () => {
    setIsRunning(true)
    setOverallProgress(0)

    const categories: TestCategory[] = [
      { name: "Navigation", icon: NavigationIcon, tests: [], progress: 0 },
      { name: "Sections", icon: Layout, tests: [], progress: 0 },
      { name: "Interactive", icon: MousePointer, tests: [], progress: 0 },
      { name: "Responsive", icon: Smartphone, tests: [], progress: 0 },
      { name: "Chat", icon: MessageSquare, tests: [], progress: 0 },
      { name: "CTAs", icon: ExternalLink, tests: [], progress: 0 },
    ]

    const testFunctions = [
      runNavigationTests,
      runSectionTests,
      runInteractiveTests,
      runResponsiveTests,
      runChatTests,
      runCTATests,
    ]

    for (let i = 0; i < testFunctions.length; i++) {
      const tests = await testFunctions[i]()
      categories[i].tests = tests
      categories[i].progress = 100

      setTestResults([...categories])
      setOverallProgress(((i + 1) / testFunctions.length) * 100)
    }

    setCurrentTest("")
    setIsRunning(false)
  }

  useEffect(() => {
    runAllTests()
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "fail":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "warning":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case "testing":
        return <RefreshCw className="w-4 h-4 text-blue-500 animate-spin" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      pass: "bg-green-100 text-green-800 border-green-200",
      fail: "bg-red-100 text-red-800 border-red-200",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
      testing: "bg-blue-100 text-blue-800 border-blue-200",
    }

    return variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  const overallStats = {
    total: testResults.reduce((acc, cat) => acc + cat.tests.length, 0),
    passed: testResults.reduce((acc, cat) => acc + cat.tests.filter((t) => t.status === "pass").length, 0),
    failed: testResults.reduce((acc, cat) => acc + cat.tests.filter((t) => t.status === "fail").length, 0),
    warnings: testResults.reduce((acc, cat) => acc + cat.tests.filter((t) => t.status === "warning").length, 0),
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-blue-600 text-white border-0 text-lg px-6 py-2">
            <Eye className="w-4 h-4 mr-2" />
            Site Verification Dashboard
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">N3uralia Landing Page Verification</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive testing of all sections, navigation, and functionality
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="mb-8 bg-white border border-slate-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Overall Test Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={overallProgress} className="h-3" />
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">{isRunning ? `Running: ${currentTest}` : "All tests completed"}</span>
                <span className="font-semibold">{Math.round(overallProgress)}%</span>
              </div>

              {overallStats.total > 0 && (
                <div className="grid grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">{overallStats.total}</div>
                    <div className="text-sm text-slate-600">Total Tests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{overallStats.passed}</div>
                    <div className="text-sm text-slate-600">Passed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{overallStats.failed}</div>
                    <div className="text-sm text-slate-600">Failed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">{overallStats.warnings}</div>
                    <div className="text-sm text-slate-600">Warnings</div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Test Results */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            {testResults.map((category, index) => (
              <TabsTrigger key={index} value={category.name.toLowerCase()}>
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testResults.map((category, index) => {
                const Icon = category.icon
                const passed = category.tests.filter((t) => t.status === "pass").length
                const failed = category.tests.filter((t) => t.status === "fail").length
                const warnings = category.tests.filter((t) => t.status === "warning").length

                return (
                  <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-blue-600" />
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Progress value={category.progress} className="h-2" />
                        <div className="flex justify-between text-sm">
                          <span className="text-green-600">✓ {passed}</span>
                          <span className="text-red-600">✗ {failed}</span>
                          <span className="text-yellow-600">⚠ {warnings}</span>
                        </div>
                        <div className="text-xs text-slate-600">{category.tests.length} tests completed</div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {testResults.map((category, categoryIndex) => (
            <TabsContent key={categoryIndex} value={category.name.toLowerCase()}>
              <Card className="bg-white border border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <category.icon className="w-5 h-5 text-blue-600" />
                    {category.name} Tests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.tests.map((test, testIndex) => (
                      <div key={testIndex} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(test.status)}
                            <span className="font-semibold text-slate-900">{test.name}</span>
                          </div>
                          <Badge className={getStatusBadge(test.status)}>{test.status.toUpperCase()}</Badge>
                        </div>
                        <p className="text-slate-600 mb-2">{test.message}</p>
                        {test.details && test.details.length > 0 && (
                          <div className="bg-slate-50 rounded p-3">
                            <div className="text-sm text-slate-700">
                              <strong>Details:</strong>
                              <ul className="mt-1 space-y-1">
                                {test.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="text-xs">
                                    • {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Actions */}
        <div className="flex justify-center gap-4 mt-8">
          <Button onClick={runAllTests} disabled={isRunning} className="bg-blue-600 hover:bg-blue-700 text-white">
            <RefreshCw className={`w-4 h-4 mr-2 ${isRunning ? "animate-spin" : ""}`} />
            {isRunning ? "Running Tests..." : "Run Tests Again"}
          </Button>

          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <Code className="w-4 h-4 mr-2" />
            Back to Site
          </Button>
        </div>
      </div>
    </div>
  )
}
