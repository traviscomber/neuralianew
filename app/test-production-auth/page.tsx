"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/hooks/use-auth"
import { CheckCircle, XCircle, AlertCircle, Loader2 } from "lucide-react"

interface TestResult {
  name: string
  status: "success" | "error" | "warning" | "loading"
  message: string
  details?: any
}

export default function TestProductionAuth() {
  const { user, profile, loading } = useAuth()
  const [tests, setTests] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const runTests = async () => {
    setIsRunning(true)
    const testResults: TestResult[] = []

    // Test 1: API Connection
    try {
      const response = await fetch("/api/auth/test")
      const data = await response.json()

      testResults.push({
        name: "API Connection",
        status: data.success ? "success" : "error",
        message: data.success ? "API endpoint accessible" : "API endpoint failed",
        details: data,
      })
    } catch (error) {
      testResults.push({
        name: "API Connection",
        status: "error",
        message: "Failed to reach API endpoint",
        details: error,
      })
    }

    // Test 2: Environment Variables
    const requiredEnvVars = ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY"]

    const missingVars = requiredEnvVars.filter((varName) => !process.env[varName] && typeof window !== "undefined")

    testResults.push({
      name: "Environment Variables",
      status: missingVars.length === 0 ? "success" : "warning",
      message:
        missingVars.length === 0 ? "All required environment variables present" : `Missing: ${missingVars.join(", ")}`,
      details: { missing: missingVars },
    })

    // Test 3: User Authentication Status
    testResults.push({
      name: "Authentication Status",
      status: user ? "success" : "warning",
      message: user ? `Authenticated as ${user.email}` : "No user authenticated",
      details: { user: user ? { id: user.id, email: user.email } : null },
    })

    // Test 4: Profile Data
    if (user) {
      testResults.push({
        name: "Profile Data",
        status: profile ? "success" : "warning",
        message: profile ? "Profile data loaded" : "No profile data found",
        details: profile,
      })
    }

    setTests(testResults)
    setIsRunning(false)
  }

  useEffect(() => {
    runTests()
  }, [user, profile])

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case "loading":
        return <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
    }
  }

  const getStatusColor = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800"
      case "error":
        return "bg-red-100 text-red-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      case "loading":
        return "bg-blue-100 text-blue-800"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Production Auth Test</h1>
          <p className="text-muted-foreground">
            Comprehensive testing of Supabase authentication in production environment
          </p>
        </div>

        <div className="grid gap-6">
          {/* Current User Status */}
          <Card>
            <CardHeader>
              <CardTitle>Current User Status</CardTitle>
              <CardDescription>Your current authentication state</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Loading user data...</span>
                </div>
              ) : user ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800">Authenticated</Badge>
                    <span className="text-sm text-muted-foreground">{user.email}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">User ID: {user.id}</div>
                  {profile && (
                    <div className="text-sm text-muted-foreground">
                      Profile: {profile.full_name || "No name set"} ({profile.role})
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Badge className="bg-gray-100 text-gray-800">Not Authenticated</Badge>
                  <span className="text-sm text-muted-foreground">No user signed in</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Test Results */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>System Tests</CardTitle>
                <CardDescription>Automated tests for production environment</CardDescription>
              </div>
              <Button onClick={runTests} disabled={isRunning}>
                {isRunning ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Running Tests
                  </>
                ) : (
                  "Run Tests"
                )}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tests.map((test, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                    {getStatusIcon(test.status)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{test.name}</span>
                        <Badge className={getStatusColor(test.status)}>{test.status.toUpperCase()}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{test.message}</p>
                      {test.details && (
                        <details className="mt-2">
                          <summary className="text-xs text-muted-foreground cursor-pointer">View Details</summary>
                          <pre className="mt-1 text-xs bg-gray-50 p-2 rounded overflow-auto">
                            {JSON.stringify(test.details, null, 2)}
                          </pre>
                        </details>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Test authentication flows</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => (window.location.href = "/")}>
                  Go to Homepage
                </Button>
                <Button variant="outline" onClick={() => (window.location.href = "/dashboard")}>
                  Go to Dashboard
                </Button>
                {!user && (
                  <Button
                    onClick={() => {
                      // This would trigger your auth modal
                      console.log("Open auth modal")
                    }}
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
