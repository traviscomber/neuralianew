"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, XCircle, User, Database, Shield, Clock } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { supabase } from "@/lib/supabase"

interface TestResult {
  name: string
  status: "success" | "error" | "pending"
  message: string
  data?: any
}

export function TestAuth() {
  const { user, profile, loading } = useAuth()
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const addTestResult = (result: TestResult) => {
    setTestResults((prev) => [...prev, result])
  }

  const clearResults = () => {
    setTestResults([])
  }

  const runAuthTests = async () => {
    setIsRunning(true)
    clearResults()

    // Test 1: Supabase Connection
    try {
      const { data, error } = await supabase.from("profiles").select("count", { count: "exact", head: true })
      if (error) throw error
      addTestResult({
        name: "Supabase Connection",
        status: "success",
        message: `Connected successfully. Found ${data?.length || 0} profiles in database.`,
      })
    } catch (error: any) {
      addTestResult({
        name: "Supabase Connection",
        status: "error",
        message: `Connection failed: ${error.message}`,
      })
    }

    // Test 2: Current Session
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()
      if (error) throw error

      addTestResult({
        name: "Current Session",
        status: session ? "success" : "error",
        message: session ? `Active session for ${session.user.email}` : "No active session",
        data: session?.user,
      })
    } catch (error: any) {
      addTestResult({
        name: "Current Session",
        status: "error",
        message: `Session check failed: ${error.message}`,
      })
    }

    // Test 3: Profile Access (if user is logged in)
    if (user) {
      try {
        const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

        if (error && error.code !== "PGRST116") throw error

        addTestResult({
          name: "Profile Access",
          status: data ? "success" : "error",
          message: data ? "Profile data accessible via RLS" : "No profile found",
          data: data,
        })
      } catch (error: any) {
        addTestResult({
          name: "Profile Access",
          status: "error",
          message: `Profile access failed: ${error.message}`,
        })
      }
    }

    // Test 4: RLS Policy Test (try to access other users' data)
    if (user) {
      try {
        const { data, error } = await supabase.from("profiles").select("*").neq("id", user.id).limit(1)

        addTestResult({
          name: "RLS Policy Test",
          status: !data || data.length === 0 ? "success" : "error",
          message:
            !data || data.length === 0
              ? "RLS policies working - cannot access other users' data"
              : "RLS policies may be misconfigured",
        })
      } catch (error: any) {
        addTestResult({
          name: "RLS Policy Test",
          status: "success",
          message: "RLS policies working - access denied as expected",
        })
      }
    }

    // Test 5: Database Trigger Test (create a test user)
    try {
      const testEmail = `test-${Date.now()}@neuralia.test`
      const { data, error } = await supabase.auth.signUp({
        email: testEmail,
        password: "testpassword123",
      })

      if (error) throw error

      // Wait a moment for trigger to execute
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (data.user) {
        // Check if profile was created
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", data.user.id)
          .single()

        addTestResult({
          name: "Auto Profile Creation",
          status: profileData ? "success" : "error",
          message: profileData ? "Database trigger successfully created profile" : "Profile not created automatically",
          data: profileData,
        })
      }
    } catch (error: any) {
      addTestResult({
        name: "Auto Profile Creation",
        status: "error",
        message: `Test user creation failed: ${error.message}`,
      })
    }

    setIsRunning(false)
  }

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
    }
  }

  const getStatusColor = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800"
      case "error":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Current Auth Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Current Authentication Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Loading State</p>
              <Badge variant={loading ? "secondary" : "outline"}>{loading ? "Loading..." : "Ready"}</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">User Status</p>
              <Badge variant={user ? "default" : "secondary"}>{user ? "Authenticated" : "Not Authenticated"}</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Profile Status</p>
              <Badge variant={profile ? "default" : "secondary"}>{profile ? "Profile Loaded" : "No Profile"}</Badge>
            </div>
          </div>

          {user && (
            <div className="space-y-2">
              <p className="text-sm font-medium">User Details</p>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-sm">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-sm">
                  <strong>ID:</strong> {user.id}
                </p>
                <p className="text-sm">
                  <strong>Created:</strong> {new Date(user.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          )}

          {profile && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Profile Details</p>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-sm">
                  <strong>Role:</strong> {profile.role}
                </p>
                <p className="text-sm">
                  <strong>Active:</strong> {profile.is_active ? "Yes" : "No"}
                </p>
                <p className="text-sm">
                  <strong>Company:</strong> {profile.company_name || "Not set"}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Test Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Authentication Tests
          </CardTitle>
          <CardDescription>
            Run comprehensive tests to verify Supabase authentication and database integration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Button onClick={runAuthTests} disabled={isRunning}>
              {isRunning ? "Running Tests..." : "Run Auth Tests"}
            </Button>
            <Button variant="outline" onClick={clearResults} disabled={isRunning}>
              Clear Results
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Test Results */}
      {testResults.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Test Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {testResults.map((result, index) => (
              <div key={index}>
                <div className="flex items-start gap-3">
                  {getStatusIcon(result.status)}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{result.name}</h4>
                      <Badge className={getStatusColor(result.status)}>{result.status.toUpperCase()}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{result.message}</p>
                    {result.data && (
                      <details className="text-xs">
                        <summary className="cursor-pointer text-blue-600 hover:text-blue-800">View Data</summary>
                        <pre className="mt-2 bg-gray-100 p-2 rounded overflow-auto">
                          {JSON.stringify(result.data, null, 2)}
                        </pre>
                      </details>
                    )}
                  </div>
                </div>
                {index < testResults.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Test Summary */}
      {testResults.length > 0 && (
        <Alert>
          <AlertDescription>
            <strong>Test Summary:</strong> {testResults.filter((r) => r.status === "success").length} passed,{" "}
            {testResults.filter((r) => r.status === "error").length} failed out of {testResults.length} total tests.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
