"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Database, Code } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

interface DownloadItem {
  id: string
  name: string
  description: string
  type: "database" | "code" | "documentation" | "config"
  size: string
  downloadUrl: string
  lastUpdated: string
}

export default function AdminDownloadsPage() {
  const { user } = useAuth()
  const [downloads, setDownloads] = useState<DownloadItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading downloads
    const mockDownloads: DownloadItem[] = [
      {
        id: "1",
        name: "Database Schema",
        description: "Complete database schema with all tables and relationships",
        type: "database",
        size: "2.3 MB",
        downloadUrl: "/downloads/schema.sql",
        lastUpdated: "2024-01-15",
      },
      {
        id: "2",
        name: "API Documentation",
        description: "Complete API documentation with examples",
        type: "documentation",
        size: "1.8 MB",
        downloadUrl: "/downloads/api-docs.pdf",
        lastUpdated: "2024-01-14",
      },
      {
        id: "3",
        name: "Configuration Files",
        description: "Environment and configuration templates",
        type: "config",
        size: "45 KB",
        downloadUrl: "/downloads/config.zip",
        lastUpdated: "2024-01-13",
      },
      {
        id: "4",
        name: "Source Code Backup",
        description: "Complete source code backup",
        type: "code",
        size: "15.2 MB",
        downloadUrl: "/downloads/source.zip",
        lastUpdated: "2024-01-12",
      },
    ]

    setTimeout(() => {
      setDownloads(mockDownloads)
      setLoading(false)
    }, 1000)
  }, [])

  const getIcon = (type: string) => {
    switch (type) {
      case "database":
        return <Database className="h-5 w-5" />
      case "code":
        return <Code className="h-5 w-5" />
      case "documentation":
        return <FileText className="h-5 w-5" />
      case "config":
        return <FileText className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "database":
        return "bg-blue-100 text-blue-800"
      case "code":
        return "bg-green-100 text-green-800"
      case "documentation":
        return "bg-purple-100 text-purple-800"
      case "config":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleDownload = (item: DownloadItem) => {
    // In a real app, this would trigger the actual download
    console.log(`Downloading ${item.name}`)
    // You could implement actual file download logic here
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
            <p className="text-muted-foreground">You must be logged in to access downloads.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Downloads</h1>
        <p className="text-muted-foreground">Download system files, documentation, and backups</p>
      </div>

      {loading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {downloads.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getIcon(item.type)}
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </div>
                  <Badge className={getTypeColor(item.type)}>{item.type}</Badge>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Size: {item.size}</span>
                  <span className="text-sm text-muted-foreground">
                    Updated: {new Date(item.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
                <Button onClick={() => handleDownload(item)} className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && downloads.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">No Downloads Available</h2>
            <p className="text-muted-foreground">There are currently no files available for download.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
