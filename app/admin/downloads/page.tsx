"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar, User } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

interface DownloadItem {
  id: string
  name: string
  description: string
  fileSize: string
  downloadCount: number
  uploadDate: string
  category: string
  fileType: string
}

export default function AdminDownloadsPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [downloads, setDownloads] = useState<DownloadItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login")
      return
    }

    // Mock data for demonstration
    const mockDownloads: DownloadItem[] = [
      {
        id: "1",
        name: "AI Agent Configuration Guide",
        description: "Complete guide for configuring AI agents in your business environment.",
        fileSize: "2.4 MB",
        downloadCount: 156,
        uploadDate: "2024-01-15",
        category: "Documentation",
        fileType: "PDF",
      },
      {
        id: "2",
        name: "API Integration Templates",
        description: "Ready-to-use templates for integrating Neuralia APIs.",
        fileSize: "1.8 MB",
        downloadCount: 89,
        uploadDate: "2024-01-10",
        category: "Templates",
        fileType: "ZIP",
      },
      {
        id: "3",
        name: "Business Process Automation Toolkit",
        description: "Tools and scripts for automating common business processes.",
        fileSize: "5.2 MB",
        downloadCount: 234,
        uploadDate: "2024-01-05",
        category: "Tools",
        fileType: "ZIP",
      },
      {
        id: "4",
        name: "Training Data Preparation Guide",
        description: "Best practices for preparing training data for AI models.",
        fileSize: "3.1 MB",
        downloadCount: 67,
        uploadDate: "2023-12-28",
        category: "Documentation",
        fileType: "PDF",
      },
    ]

    setDownloads(mockDownloads)
    setIsLoading(false)
  }, [user, loading, router])

  const handleDownload = (item: DownloadItem) => {
    // In a real application, this would trigger an actual download
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
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Templates":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Tools":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getFileTypeIcon = (fileType: string) => {
    switch (fileType) {
      case "PDF":
        return <FileText className="h-4 w-4" />
      case "ZIP":
        return <Download className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  if (loading || isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Downloads</h1>
        <p className="text-muted-foreground mt-2">Access and download resources, documentation, and tools.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {downloads.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  {getFileTypeIcon(item.fileType)}
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </div>
                <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
              </div>
              <CardDescription className="line-clamp-2">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(item.uploadDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{item.downloadCount} downloads</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.fileSize}</span>
                  <Button onClick={() => handleDownload(item)} size="sm" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {downloads.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No downloads available</h3>
          <p className="text-muted-foreground">Check back later for new resources and documentation.</p>
        </div>
      )}
    </div>
  )
}
