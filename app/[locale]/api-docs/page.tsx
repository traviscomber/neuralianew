'use client'

import { useState } from 'react'
import Link from 'next/link'
import { API_ENDPOINTS } from '@/lib/api-schema'
import { Copy, Lock, Unlock } from 'lucide-react'

export default function APIDocsPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <main className="min-h-screen bg-background">

      {/* Resources */}
      <section className="border-t border-border px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/docs/api/openapi.json"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-2">OpenAPI Specification</h3>
              <p className="text-sm text-muted-foreground">Full OpenAPI 3.0.0 schema</p>
            </Link>

            <Link
              href="/api/v1/health"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-2">Health Status</h3>
              <p className="text-sm text-muted-foreground">Current system health</p>
            </Link>

            <a
              href="https://github.com/neuralia/api-client"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-2">JavaScript Client</h3>
              <p className="text-sm text-muted-foreground">Official SDK for JavaScript</p>
            </a>

            <a
              href="https://github.com/neuralia/api-client-python"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-2">Python Client</h3>
              <p className="text-sm text-muted-foreground">Official SDK for Python</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function EndpointDetail({ endpointId, onCopy, copied }: { endpointId: string; onCopy: (text: string, id: string) => void; copied: string | null }) {
  const [category, name] = endpointId.split('-')
  const categoryKey = category as keyof typeof API_ENDPOINTS
  const endpoint = (API_ENDPOINTS[categoryKey] as any)?.[name]

  if (!endpoint) return null

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{endpoint.description}</h3>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded font-mono text-sm font-semibold">
            {endpoint.method}
          </div>
          <code className="text-sm text-muted-foreground break-all">{endpoint.path}</code>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-2">Authentication</h4>
        <div className="flex items-center gap-2">
          {endpoint.authentication === 'required' ? (
            <Lock className="w-4 h-4 text-red-500" />
          ) : (
            <Unlock className="w-4 h-4 text-green-500" />
          )}
          <span className="text-sm text-muted-foreground">{endpoint.authentication}</span>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-2">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {endpoint.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 bg-muted/50 border border-border rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-mono text-sm">Example cURL</h4>
          <button
            onClick={() => onCopy(`curl ${endpoint.path}`, endpointId)}
            className="text-xs text-primary hover:underline flex items-center gap-1"
          >
            {copied === endpointId ? 'Copied!' : 'Copy'} <Copy className="w-3 h-3" />
          </button>
        </div>
        <code className="text-xs text-muted-foreground break-all">{`curl ${endpoint.path}`}</code>
      </div>
    </div>
  )
}

function CodeBlock({ code, language, onCopy, copied }: { code: string; language: string; onCopy: () => void; copied: boolean }) {
  return (
    <div className="relative">
      <pre className="p-4 bg-muted/50 border border-border rounded-lg overflow-x-auto text-xs text-muted-foreground">
        <code>{code}</code>
      </pre>
      <button
        onClick={onCopy}
        className="absolute top-2 right-2 text-xs text-primary hover:underline flex items-center gap-1 bg-background px-2 py-1 rounded border border-border"
      >
        {copied ? 'Copied!' : 'Copy'} <Copy className="w-3 h-3" />
      </button>
    </div>
  )
}
