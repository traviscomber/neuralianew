"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Package, Users } from "lucide-react"

interface DownloadItem {
  id: string
  name: string
  type: "agent" | "system" | "report"
  size: string
  downloads: number
  lastUpdated: string
  status: "active" | "deprecated" | "beta"
}

export default function AdminDownloadsPage() {
  const [downloads, setDownloads] = useState<DownloadItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for demonstration
    const mockDownloads: DownloadItem[] = [
      {
        id: "1",
        name: "Customer Service Agent v2.1",
        type: "agent",
        size: "15.2 MB",
        downloads: 1247,
        lastUpdated: "2024-01-15",
        status: "active",
      },
      {
        id: "2",
        name: "Sales Assistant Pro",
        type: "agent",
        size: "22.8 MB",
        downloads: 892,
        lastUpdated: "2024-01-12",
        status: "active",
      },
      {
        id: "3",
        name: "Analytics Dashboard System",
        type: "system",
        size: "45.6 MB",
        downloads: 456,
        lastUpdated: "2024-01-10",
        status: "beta",
      },
      {
        id: "4",
        name: "Monthly Usage Report",
        type: "report",
        size: "2.1 MB",
        downloads: 234,
        lastUpdated: "2024-01-08",
        status: "active",
      },
      {
        id: "5",
        name: "Legacy Support Agent v1.5",
        type: "agent",
        size: "12.4 MB",
        downloads: 89,
        lastUpdated: "2023-12-20",
        status: "deprecated",
      },
    ]

    setTimeout(() => {
      setDownloads(mockDownloads)
      setLoading(false)
    }, 1000)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "beta":
        return "bg-blue-100 text-blue-800"
      case "deprecated":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "agent":
        return <Users className="h-4 w-4" />
      case "system":
        return <Package className="h-4 w-4" />
      case "report":
        return <FileText className="h-4 w-4" />
      default:
        return <Download className="h-4 w-4" />
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Downloads Management</h1>
        <p className="text-muted-foreground mt-2">Manage and monitor downloadable content for your platform</p>
      </div>

      <div className="grid gap-6">
        {downloads.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-2">
                {getTypeIcon(item.type)}
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Type</p>
                  <p className="font-medium capitalize">{item.type}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Size</p>
                  <p className="font-medium">{item.size}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Downloads</p>
                  <p className="font-medium">{item.downloads.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Last Updated</p>
                  <p className="font-medium">{new Date(item.lastUpdated).toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {downloads.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Download className="h-12 w-12 text-muted-foreground mb-4" />
            <CardTitle className="mb-2">No Downloads Available</CardTitle>
            <CardDescription>There are currently no downloadable items available.</CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
