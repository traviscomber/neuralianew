"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar, User } from "lucide-react"

interface DownloadItem {
  id: string
  name: string
  description: string
  fileType: string
  size: string
  downloadCount: number
  uploadedAt: string
  uploadedBy: string
  category: string
}

export default function AdminDownloadsPage() {
  const [downloads, setDownloads] = useState<DownloadItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for demonstration
    const mockDownloads: DownloadItem[] = [
      {
        id: "1",
        name: "AI Agent Configuration Guide",
        description: "Complete guide for configuring AI agents in your organization",
        fileType: "PDF",
        size: "2.4 MB",
        downloadCount: 156,
        uploadedAt: "2024-01-15",
        uploadedBy: "Admin User",
        category: "Documentation",
      },
      {
        id: "2",
        name: "API Integration Examples",
        description: "Code examples for integrating with Neuralia APIs",
        fileType: "ZIP",
        size: "5.1 MB",
        downloadCount: 89,
        uploadedAt: "2024-01-10",
        uploadedBy: "Developer Team",
        category: "Code",
      },
      {
        id: "3",
        name: "User Training Materials",
        description: "Training materials for end users",
        fileType: "PPTX",
        size: "12.3 MB",
        downloadCount: 234,
        uploadedAt: "2024-01-08",
        uploadedBy: "Training Team",
        category: "Training",
      },
    ]

    setTimeout(() => {
      setDownloads(mockDownloads)
      setLoading(false)
    }, 1000)
  }, [])

  const handleDownload = (item: DownloadItem) => {
    // Mock download functionality
    console.log(`Downloading: ${item.name}`)

    // Update download count
    setDownloads((prev) =>
      prev.map((download) =>
        download.id === item.id ? { ...download, downloadCount: download.downloadCount + 1 } : download,
      ),
    )
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Documentation":
        return "bg-blue-100 text-blue-800"
      case "Code":
        return "bg-green-100 text-green-800"
      case "Training":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Downloads</h1>
        <p className="text-muted-foreground">Manage and monitor downloadable resources</p>
      </div>

      <div className="grid gap-6">
        {downloads.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    {item.name}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
                <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    {item.fileType} • {item.size}
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    {item.downloadCount} downloads
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(item.uploadedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {item.uploadedBy}
                  </div>
                </div>
                <Button onClick={() => handleDownload(item)} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {downloads.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No downloads available</h3>
            <p className="text-muted-foreground text-center">
              There are currently no downloadable resources available.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
