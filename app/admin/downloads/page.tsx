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
  uploadDate: string
  category: string
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
        uploadDate: "2024-01-15",
        category: "Documentation",
      },
      {
        id: "2",
        name: "Executive Dashboard Template",
        description: "Template for executive dashboard setup",
        fileType: "ZIP",
        size: "8.2 MB",
        downloadCount: 89,
        uploadDate: "2024-01-10",
        category: "Templates",
      },
      {
        id: "3",
        name: "API Integration Examples",
        description: "Code examples for API integrations",
        fileType: "ZIP",
        size: "1.8 MB",
        downloadCount: 234,
        uploadDate: "2024-01-08",
        category: "Code",
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
          <CardContent className="flex items-center justify-center py-8">
            <p>Please log in to access admin downloads.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Downloads</h1>
        <p className="text-muted-foreground">Manage and download administrative files and resources</p>
      </div>

      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-gray-200 rounded mb-4"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
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
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>
                      {item.fileType} • {item.size}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span>{item.downloadCount} downloads</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Uploaded {new Date(item.uploadDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <Button onClick={() => handleDownload(item)} className="w-full">
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
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No downloads available</h3>
            <p className="text-muted-foreground text-center">There are currently no files available for download.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
