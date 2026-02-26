'use client'

import { useState } from 'react'
import Link from 'next/link'
import { API_ENDPOINTS } from '@/lib/api-schema'
import { Copy, ExternalLink, Lock, Unlock } from 'lucide-react'
import { SectionBackground } from '@/components/section-background'

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
      <SectionBackground section="blog" className="border-b border-border">
      {/* Hero */}
      <section className="border-b border-border px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">API Documentation</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Production-ready endpoints for Living Agents and Agentic Systems
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Base URL</h3>
              <code className="text-sm text-primary break-all">https://api.neuralia.ai/api/v1</code>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Version</h3>
              <code className="text-sm text-primary">v1</code>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Format</h3>
              <code className="text-sm text-primary">JSON</code>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Authentication</h3>
            <div className="p-4 bg-muted/50 border border-border rounded-lg font-mono text-sm">
              <div className="text-muted-foreground">Authorization: Bearer YOUR_JWT_TOKEN</div>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">Endpoints</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <div className="space-y-2">
                  {Object.entries(API_ENDPOINTS).map(([category, endpoints]) => (
                    <div key={category}>
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider px-3 py-2">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <div className="space-y-1">
                        {Object.entries(endpoints).map(([name, endpoint]) => (
                          <button
                            key={`${category}-${name}`}
                            onClick={() => setSelectedEndpoint(`${category}-${name}`)}
                            className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                              selectedEndpoint === `${category}-${name}`
                                ? 'bg-primary text-primary-foreground'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                          >
                            <div className="font-mono text-xs">{endpoint.method}</div>
                            <div className="truncate">{endpoint.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              {selectedEndpoint ? (
                <EndpointDetail endpointId={selectedEndpoint} onCopy={copyToClipboard} copied={copied} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">Select an endpoint to view details</p>
                  <Link
                    href="/docs/api/openapi.json"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    View OpenAPI Schema <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="border-t border-border bg-muted/20 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Usage Examples</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Health Check</h3>
              <CodeBlock
                code={`curl https://api.neuralia.ai/api/v1/health`}
                language="bash"
                onCopy={() => copyToClipboard('curl https://api.neuralia.ai/api/v1/health', 'health')}
                copied={copied === 'health'}
              />
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">List Living Agents</h3>
              <CodeBlock
                code={`curl -H "Authorization: Bearer TOKEN" \\
  https://api.neuralia.ai/api/v1/living-agents`}
                language="bash"
                onCopy={() =>
                  copyToClipboard(
                    'curl -H "Authorization: Bearer TOKEN" https://api.neuralia.ai/api/v1/living-agents',
                    'agents'
                  )
                }
                copied={copied === 'agents'}
              />
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Send Chat Message</h3>
              <CodeBlock
                code={`curl -X POST https://api.neuralia.ai/api/v1/chat \\
  -H "Content-Type: application/json" \\
  -d '{
    "messages": [{
      "role": "user",
      "content": "Hola"
    }]
  }'`}
                language="bash"
                onCopy={() =>
                  copyToClipboard(
                    'curl -X POST https://api.neuralia.ai/api/v1/chat -H "Content-Type: application/json" -d \'{"messages": [{"role": "user", "content": "Hola"}]}\'',
                    'chat'
                  )
                }
                copied={copied === 'chat'}
              />
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Track Event</h3>
              <CodeBlock
                code={`curl -X POST https://api.neuralia.ai/api/v1/analytics \\
  -H "Content-Type: application/json" \\
  -d '{
    "eventName": "agent_interaction",
    "userId": "user123",
    "properties": {}
  }'`}
                language="bash"
                onCopy={() => copyToClipboard('curl -X POST https://api.neuralia.ai/api/v1/analytics', 'analytics')}
                copied={copied === 'analytics'}
              />
            </div>
          </div>
        </div>
      </section>
      </SectionBackground>

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
