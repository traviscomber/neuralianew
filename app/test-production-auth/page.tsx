"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, XCircle, AlertCircle, User, Database, Settings } from "lucide-react"

interface TestResult {
  name: string
  status: "success" | "error" | "warning"
  message: string
  details?: any
}

export default function TestProductionAuth() {
  const { user, profile, signOut } = useAuth()
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [apiTestResults, setApiTestResults] = useState<any>(null)

  useEffect(() => {
    runBasicTests()
    runApiTests()
  }, [user, profile])

  const runBasicTests = () => {
    const results: TestResult[] = []

    // Test 1: User Authentication
    if (user) {
      results.push({
        name: "User Authentication",
        status: "success",
        message: `User authenticated: ${user.email}`,
        details: { userId: user.id, email: user.email },
      })
    } else {
      results.push({
        name: "User Authentication",
        status: "warning",
        message: "No user currently authenticated",
      })
    }

    // Test 2: Profile Data
    if (profile) {
      results.push({
        name: "Profile Data",
        status: "success",
        message: `Profile loaded: ${profile.full_name || profile.email}`,
        details: profile,
      })
    } else if (user) {
      results.push({
        name: "Profile Data",
        status: "error",
        message: "User authenticated but profile not found",
      })
    } else {
      results.push({
        name: "Profile Data",
        status: "warning",
        message: "No profile data (user not authenticated)",
      })
    }

    // Test 3: Environment Variables
    const hasRequiredEnvVars = !!(
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      process.env.NEXT_PUBLIC_SITE_URL
    )

    results.push({
      name: "Environment Configuration",
      status: hasRequiredEnvVars ? "success" : "error",
      message: hasRequiredEnvVars
        ? "Required environment variables configured"
        : "Missing required environment variables",
    })

    setTestResults(results)
  }

  const runApiTests = async () => {
    try {
      const response = await fetch("/api/auth/test")
      const data = await response.json()
      setApiTestResults(data)
    } catch (error) {
      setApiTestResults({
        success: false,
        error: "Failed to run API tests",
        details: error instanceof Error ? error.message : "Unknown error",
      })
    }
  }

  const runComprehensiveTests = async () => {
    setIsRunning(true)

    // Re-run all tests
    runBasicTests()
    await runApiTests()

    // Add a small delay for UX
    setTimeout(() => {
      setIsRunning(false)
    }, 1000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "error":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      success: "default",
      error: "destructive",
      warning: "secondary",
    } as const

    return <Badge variant={variants[status as keyof typeof variants] || "secondary"}>{status.toUpperCase()}</Badge>
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Production Auth Testing</h1>
          <p className="text-muted-foreground">Comprehensive testing of Supabase authentication in production</p>
        </div>

        {/* Current User Status */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Current User Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            {user ? (
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>User ID:</strong> {user.id}
                </p>
                <p>
                  <strong>Profile Name:</strong> {profile?.full_name || "Not set"}
                </p>
                <p>
                  <strong>Role:</strong> {profile?.role || "user"}
                </p>
                <Button onClick={signOut} variant="outline" size="sm">
                  Sign Out
                </Button>
              </div>
            ) : (
              <p className="text-muted-foreground">No user currently authenticated</p>
            )}
          </CardContent>
        </Card>

        {/* Test Results */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Authentication Tests
            </CardTitle>
            <CardDescription>Real-time testing of authentication components</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button onClick={runComprehensiveTests} disabled={isRunning} className="mb-4">
                {isRunning ? "Running Tests..." : "Run All Tests"}
              </Button>

              {testResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(result.status)}
                    <div>
                      <p className="font-medium">{result.name}</p>
                      <p className="text-sm text-muted-foreground">{result.message}</p>
                    </div>
                  </div>
                  {getStatusBadge(result.status)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* API Test Results */}
        {apiTestResults && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Database & API Tests
              </CardTitle>
              <CardDescription>Server-side testing results</CardDescription>
            </CardHeader>
            <CardContent>
              {apiTestResults.success ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="font-medium">API Tests Passed</span>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">Database Tables</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {apiTestResults.tests?.tables?.map((table: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded">
                          <span className="text-sm">{table.table}</span>
                          {table.exists ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-600" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">Environment Variables</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {Object.entries(apiTestResults.tests?.environment || {}).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-2 border rounded">
                          <span className="text-sm">{key}</span>
                          {value ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-600" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <XCircle className="h-4 w-4" />
                  <span>API Tests Failed: {apiTestResults.error}</span>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
