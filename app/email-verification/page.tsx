"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, XCircle, Loader2, Mail, Shield, Server, AlertCircle, RefreshCw } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface DNSStatus {
  status?: string
  dns?: {
    spf: boolean
    dkim: boolean
    mx: boolean
  }
  configured?: boolean
  timestamp?: string
}

interface EmailResult {
  success: boolean
  error?: string
  details?: string
  data?: any
  message?: string
}

export default function EmailVerificationPage() {
  const [loading, setLoading] = useState(false)
  const [testEmail, setTestEmail] = useState("")
  const [result, setResult] = useState<EmailResult | null>(null)
  const [dnsStatus, setDnsStatus] = useState<DNSStatus | null>(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    checkDNSStatus()
  }, [])

  const checkDNSStatus = async () => {
    setChecking(true)
    try {
      const response = await fetch("/api/email/test")
      const data = await response.json()
      setDnsStatus(data)
    } catch (error) {
      console.error("Failed to check DNS status:", error)
      setDnsStatus({
        status: "error",
        dns: { spf: false, dkim: false, mx: false },
        configured: false,
      })
    } finally {
      setChecking(false)
    }
  }

  const sendTestEmail = async (type: string) => {
    if (!testEmail) {
      alert("Por favor ingresa un email")
      return
    }

    if (!testEmail.includes("@")) {
      alert("Por favor ingresa un email válido")
      return
    }

    setLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/email/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          to: testEmail,
          name: "Usuario de Prueba",
          message: "Este es un email de prueba desde N3uralia",
          resetLink: "https://n3uralia.com/reset-password?token=test123",
          agentName: "Test AI Agent",
          status: "success",
          company: "Empresa Demo",
        }),
      })

      const data = await response.json()
      setResult(data)
    } catch (error: any) {
      setResult({
        success: false,
        error: "Failed to send email",
        details: error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  const allDNSConfigured = dnsStatus?.dns?.spf && dnsStatus?.dns?.dkim && dnsStatus?.dns?.mx

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 py-8">
          <h1 className="text-4xl font-bold text-white">📧 Email Service Verification</h1>
          <p className="text-gray-400 text-lg">Verify DNS records and test email delivery</p>
        </div>

        {/* Alert if not configured */}
        {!dnsStatus?.configured && !checking && (
          <Alert className="bg-red-900/20 border-red-500/50">
            <AlertCircle className="h-4 w-4 text-red-400" />
            <AlertDescription className="text-red-200">
              <strong>API Key Not Configured:</strong> Add RESEND_API_KEY to your environment variables to enable email
              functionality.
            </AlertDescription>
          </Alert>
        )}

        {/* DNS Status */}
        <Card className="bg-slate-800 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Server className="w-5 h-5" />
              DNS Records Status
            </CardTitle>
            <CardDescription>Current configuration of your domain's email records</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {checking ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center space-y-4">
                  <Loader2 className="w-12 h-12 animate-spin text-purple-400 mx-auto" />
                  <p className="text-gray-400">Checking DNS configuration...</p>
                </div>
              </div>
            ) : dnsStatus ? (
              <>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-700 rounded-lg transition-all hover:bg-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="font-semibold text-white">SPF Record</span>
                      </div>
                      {dnsStatus.dns?.spf ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <Badge variant={dnsStatus.dns?.spf ? "default" : "destructive"}>
                      {dnsStatus.dns?.spf ? "Configured" : "Missing"}
                    </Badge>
                    <p className="text-xs text-gray-400 mt-2">Prevents email spoofing</p>
                  </div>

                  <div className="p-4 bg-slate-700 rounded-lg transition-all hover:bg-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-purple-400" />
                        <span className="font-semibold text-white">DKIM Record</span>
                      </div>
                      {dnsStatus.dns?.dkim ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <Badge variant={dnsStatus.dns?.dkim ? "default" : "destructive"}>
                      {dnsStatus.dns?.dkim ? "Configured" : "Missing"}
                    </Badge>
                    <p className="text-xs text-gray-400 mt-2">Verifies email authenticity</p>
                  </div>

                  <div className="p-4 bg-slate-700 rounded-lg transition-all hover:bg-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-green-400" />
                        <span className="font-semibold text-white">MX Record</span>
                      </div>
                      {dnsStatus.dns?.mx ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <Badge variant={dnsStatus.dns?.mx ? "default" : "destructive"}>
                      {dnsStatus.dns?.mx ? "Configured" : "Missing"}
                    </Badge>
                    <p className="text-xs text-gray-400 mt-2">Routes incoming emails</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-gray-300">API Key Configured:</span>
                    <Badge variant={dnsStatus?.configured ? "default" : "destructive"}>
                      {dnsStatus?.configured ? "Yes" : "No"}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-gray-300">Service Status:</span>
                    <Badge variant={allDNSConfigured && dnsStatus?.configured ? "default" : "secondary"}>
                      {allDNSConfigured && dnsStatus?.configured ? "Operational" : "Setup Required"}
                    </Badge>
                  </div>
                </div>

                {dnsStatus.timestamp && (
                  <p className="text-xs text-gray-500 text-center">
                    Last checked: {new Date(dnsStatus.timestamp).toLocaleString()}
                  </p>
                )}
              </>
            ) : (
              <div className="text-center py-8 text-gray-400">Failed to load DNS status. Please refresh the page.</div>
            )}

            <Button
              onClick={checkDNSStatus}
              disabled={checking}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {checking ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Checking...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Status
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Email Testing */}
        <Card className="bg-slate-800 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Test Email Delivery</CardTitle>
            <CardDescription>Send test emails to verify your configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="test-email" className="text-white">
                Test Email Address
              </Label>
              <Input
                id="test-email"
                type="email"
                placeholder="tu@email.com"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                className="bg-slate-700 border-purple-500/20 text-white placeholder:text-gray-500"
                disabled={!dnsStatus?.configured}
              />
              {!dnsStatus?.configured && (
                <p className="text-xs text-red-400 mt-1">⚠️ Configure API key first to enable testing</p>
              )}
            </div>

            <Tabs defaultValue="welcome" className="w-full">
              <TabsList className="grid grid-cols-4 bg-slate-700">
                <TabsTrigger value="welcome" disabled={!dnsStatus?.configured}>
                  Welcome
                </TabsTrigger>
                <TabsTrigger value="reset" disabled={!dnsStatus?.configured}>
                  Password
                </TabsTrigger>
                <TabsTrigger value="contact" disabled={!dnsStatus?.configured}>
                  Contact
                </TabsTrigger>
                <TabsTrigger value="deploy" disabled={!dnsStatus?.configured}>
                  Deployment
                </TabsTrigger>
              </TabsList>

              <TabsContent value="welcome" className="space-y-2">
                <p className="text-sm text-gray-400">Send a welcome email for new users</p>
                <Button
                  onClick={() => sendTestEmail("welcome")}
                  disabled={loading || !dnsStatus?.configured}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Mail className="w-4 h-4 mr-2" />}
                  {loading ? "Sending..." : "Send Welcome Email"}
                </Button>
              </TabsContent>

              <TabsContent value="reset" className="space-y-2">
                <p className="text-sm text-gray-400">Send a password reset email</p>
                <Button
                  onClick={() => sendTestEmail("password-reset")}
                  disabled={loading || !dnsStatus?.configured}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Shield className="w-4 h-4 mr-2" />}
                  {loading ? "Sending..." : "Send Reset Email"}
                </Button>
              </TabsContent>

              <TabsContent value="contact" className="space-y-2">
                <p className="text-sm text-gray-400">Send a contact form notification</p>
                <Button
                  onClick={() => sendTestEmail("contact")}
                  disabled={loading || !dnsStatus?.configured}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Mail className="w-4 h-4 mr-2" />}
                  {loading ? "Sending..." : "Send Contact Email"}
                </Button>
              </TabsContent>

              <TabsContent value="deploy" className="space-y-2">
                <p className="text-sm text-gray-400">Send an agent deployment notification</p>
                <Button
                  onClick={() => sendTestEmail("deployment")}
                  disabled={loading || !dnsStatus?.configured}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                  )}
                  {loading ? "Sending..." : "Send Deployment Email"}
                </Button>
              </TabsContent>
            </Tabs>

            {result && (
              <div
                className={`p-4 rounded-lg border ${
                  result.success ? "bg-green-900/20 border-green-500/50" : "bg-red-900/20 border-red-500/50"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {result.success ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span className="font-semibold text-white">
                    {result.success ? "✅ Email Sent Successfully!" : "❌ Email Failed"}
                  </span>
                </div>
                {result.success ? (
                  <div className="space-y-2">
                    <p className="text-sm text-green-300">Check your inbox (and spam folder) for the test email.</p>
                    {result.message && <p className="text-xs text-green-400">{result.message}</p>}
                  </div>
                ) : (
                  <div className="text-sm text-red-300 space-y-1">
                    <p>
                      <strong>Error:</strong> {result.error || "Unknown error"}
                    </p>
                    {result.details && (
                      <p className="text-xs">
                        <strong>Details:</strong> {result.details}
                      </p>
                    )}
                  </div>
                )}
                <details className="mt-3">
                  <summary className="text-xs text-gray-400 cursor-pointer hover:text-gray-300">
                    Show technical details
                  </summary>
                  <pre className="text-xs text-gray-400 overflow-auto mt-2 bg-slate-900/50 p-2 rounded">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </details>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Setup Guide */}
        <Card className="bg-slate-800 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">📚 Quick Setup Guide</CardTitle>
            <CardDescription>Add these DNS records to your domain</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">MX Record</h3>
                  <code className="block p-3 bg-slate-900 rounded text-xs font-mono">
                    Type: MX
                    <br />
                    Host: send
                    <br />
                    Value: feedback-smtp.ap-northeast-1.amazonses.com
                    <br />
                    Priority: 10
                    <br />
                    TTL: 60
                  </code>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">SPF Record (TXT)</h3>
                  <code className="block p-3 bg-slate-900 rounded text-xs font-mono">
                    Type: TXT
                    <br />
                    Host: send
                    <br />
                    Value: v=spf1 include:amazonses.com ~all
                    <br />
                    TTL: 60
                  </code>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">DKIM Record (TXT)</h3>
                  <code className="block p-3 bg-slate-900 rounded text-xs font-mono overflow-x-auto">
                    Type: TXT
                    <br />
                    Host: resend._domainkey
                    <br />
                    Value: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBWynraG8S...
                    <br />
                    <span className="text-yellow-400">↑ Copy full key from Resend dashboard</span>
                    <br />
                    TTL: Auto
                  </code>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">DMARC Record (Recommended)</h3>
                  <code className="block p-3 bg-slate-900 rounded text-xs font-mono">
                    Type: TXT
                    <br />
                    Host: _dmarc
                    <br />
                    Value: v=DMARC1; p=none;
                    <br />
                    TTL: Auto
                  </code>
                </div>
              </div>
            </div>

            <Alert className="bg-blue-900/20 border-blue-500/20">
              <AlertCircle className="h-4 w-4 text-blue-400" />
              <AlertDescription className="text-blue-200">
                <p className="font-semibold mb-2">Important Notes:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>DNS propagation can take 24-48 hours</li>
                  <li>Add RESEND_API_KEY to Vercel environment variables</li>
                  <li>Verify your domain in Resend dashboard</li>
                  <li>Check spam folder when testing</li>
                </ul>
              </AlertDescription>
            </Alert>

            <div className="grid gap-3">
              <Button
                onClick={() => window.open("https://resend.com/domains", "_blank")}
                variant="outline"
                className="w-full border-purple-500/20 text-white hover:bg-purple-500/10"
              >
                🚀 Open Resend Dashboard
              </Button>
              <Button
                onClick={() => window.open("/docs/EMAIL_SETUP.md", "_blank")}
                variant="outline"
                className="w-full border-purple-500/20 text-white hover:bg-purple-500/10"
              >
                📖 View Full Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
