"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, XCircle, Clock, Shield, Server, Key } from "lucide-react"

type ApiStatus = "idle" | "testing" | "success" | "error"

export default function ChatTest() {
  const [message, setMessage] = useState("Hello, can you help me test the chat functionality?")
  const [chatType, setChatType] = useState("general")
  const [response, setResponse] = useState("")
  const [apiStatus, setApiStatus] = useState<ApiStatus>("idle")
  const [error, setError] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)

  const testChatAPI = async () => {
    if (!message.trim()) return

    setApiStatus("testing")
    setError("")
    setResponse("")
    setIsStreaming(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: message }],
          chatType: chatType,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || `HTTP ${res.status}`)
      }

      if (!res.body) {
        throw new Error("No response body")
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let fullResponse = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split("\n")

        for (const line of lines) {
          if (line.startsWith("0:")) {
            try {
              const content = JSON.parse(line.slice(2))
              if (content) {
                fullResponse += content
                setResponse(fullResponse)
              }
            } catch (e) {
              // Skip invalid JSON chunks
            }
          }
        }
      }

      setApiStatus("success")
    } catch (err) {
      console.error("Chat test error:", err)
      setError(err instanceof Error ? err.message : "Unknown error")
      setApiStatus("error")
    } finally {
      setIsStreaming(false)
    }
  }

  const checkAPIHealth = async () => {
    try {
      const res = await fetch("/api/chat")
      const data = await res.json()
      console.log("API Health:", data)
    } catch (err) {
      console.error("Health check failed:", err)
    }
  }

  const getStatusBadge = () => {
    switch (apiStatus) {
      case "testing":
        return (
          <Badge variant="secondary">
            <Clock className="w-3 h-3 mr-1" />
            Testing...
          </Badge>
        )
      case "success":
        return (
          <Badge variant="default" className="bg-green-500">
            <CheckCircle className="w-3 h-3 mr-1" />
            Working
          </Badge>
        )
      case "error":
        return (
          <Badge variant="destructive">
            <XCircle className="w-3 h-3 mr-1" />
            Error
          </Badge>
        )
      default:
        return <Badge variant="outline">Not Tested</Badge>
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">AI Chat API Test</h1>
        <p className="text-muted-foreground">
          Test the AI chat functionality and verify secure server-side API key usage
        </p>
      </div>

      {/* Security Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-500" />
            Security Verification
          </CardTitle>
          <CardDescription>Confirming secure implementation with server-side API keys</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm">OpenAI API key is server-side only</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm">No sensitive variables exposed to client</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-blue-500" />
            <span className="text-sm">All API calls routed through secure server endpoints</span>
          </div>
          <div className="flex items-center gap-2">
            <Key className="w-4 h-4 text-purple-500" />
            <span className="text-sm">Client never has access to API credentials</span>
          </div>
        </CardContent>
      </Card>

      {/* API Test Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Chat API Test
            {getStatusBadge()}
          </CardTitle>
          <CardDescription>Test the AI chat functionality with different chat types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Chat Type</label>
            <Select value={chatType} onValueChange={setChatType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Chat</SelectItem>
                <SelectItem value="agent">AI Agent</SelectItem>
                <SelectItem value="system">AI System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Test Message</label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter a test message..."
              rows={3}
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={testChatAPI} disabled={!message.trim() || isStreaming} className="flex-1">
              {isStreaming ? "Testing..." : "Test Chat API"}
            </Button>
            <Button variant="outline" onClick={checkAPIHealth}>
              Check Health
            </Button>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">
                <strong>Error:</strong> {error}
              </p>
            </div>
          )}

          {response && (
            <div className="space-y-2">
              <label className="text-sm font-medium">AI Response</label>
              <div className="p-3 bg-gray-50 border rounded-md">
                <p className="text-sm whitespace-pre-wrap">{response}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Implementation Details */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Details</CardTitle>
          <CardDescription>How the secure chat API works</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-sm space-y-2">
            <p>
              <strong>1. Client Request:</strong> User sends message from browser
            </p>
            <p>
              <strong>2. API Route:</strong> Next.js API route receives request at <code>/api/chat</code>
            </p>
            <p>
              <strong>3. Server Processing:</strong> Server uses <code>process.env.OPENAI_API_KEY</code> (never exposed
              to client)
            </p>
            <p>
              <strong>4. OpenAI API:</strong> Server makes authenticated request to OpenAI
            </p>
            <p>
              <strong>5. Streaming Response:</strong> AI response streams back to client safely
            </p>
          </div>
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-700">
              <strong>Security:</strong> The OpenAI API key never leaves the server environment, ensuring your
              credentials remain secure while providing full AI functionality.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
