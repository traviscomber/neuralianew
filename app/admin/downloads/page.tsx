"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

interface DownloadItem {
  id: string
  name: string
  description: string
  fileType: string
  size: string
  downloadCount: number
  createdAt: string
  updatedAt: string
}

export default function AdminDownloadsPage() {
  const { user } = useAuth()
  const [downloads, setDownloads] = useState<DownloadItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading downloads data
    const mockDownloads: DownloadItem[] = [
      {
        id: "1",
        name: "AI Agent Configuration Guide",
        description: "Complete guide for configuring AI agents",
        fileType: "PDF",
        size: "2.5 MB",
        downloadCount: 156,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-20",
      },
      {
        id: "2",
        name: "API Documentation",
        description: "Full API documentation for developers",
        fileType: "PDF",
        size: "1.8 MB",
        downloadCount: 89,
        createdAt: "2024-01-10",
        updatedAt: "2024-01-18",
      },
      {
        id: "3",
        name: "User Manual",
        description: "Comprehensive user manual for the platform",
        fileType: "PDF",
        size: "3.2 MB",
        downloadCount: 234,
        createdAt: "2024-01-05",
        updatedAt: "2024-01-15",
      },
    ]

    setTimeout(() => {
      setDownloads(mockDownloads)
      setLoading(false)
    }, 1000)
  }, [])

  const handleDownload = (item: DownloadItem) => {
    // Simulate download
    console.log(`Downloading ${item.name}`)
    // In a real app, this would trigger the actual download
    setDownloads((prev) =>
      prev.map((download) =>
        download.id === item.id ? { ...download, downloadCount: download.downloadCount + 1 } : download,
      ),
    )
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">Please log in to access downloads.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Downloads</h1>
        <p className="text-muted-foreground mt-2">Access documentation, guides, and resources</p>
      </div>

      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded"></div>
                  <div className="h-3 bg-muted rounded w-2/3"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {downloads.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </div>
                  <Badge variant="secondary">{item.fileType}</Badge>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Size: {item.size}</span>
                    <span>{item.downloadCount} downloads</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>Updated {new Date(item.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <Button onClick={() => handleDownload(item)} className="w-full" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && downloads.length === 0 && (
        <Card>
          <CardContent className="flex items-center justify-center h-64">
            <div className="text-center">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No downloads available at the moment.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
