"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Package, Users } from "lucide-react"

interface DownloadItem {
  id: string
  name: string
  description: string
  type: "report" | "data" | "software"
  size: string
  downloads: number
  lastUpdated: string
}

const mockDownloads: DownloadItem[] = [
  {
    id: "1",
    name: "User Analytics Report",
    description: "Comprehensive analytics report for Q4 2024",
    type: "report",
    size: "2.4 MB",
    downloads: 156,
    lastUpdated: "2024-01-15",
  },
  {
    id: "2",
    name: "Agent Performance Data",
    description: "Performance metrics and usage statistics",
    type: "data",
    size: "8.7 MB",
    downloads: 89,
    lastUpdated: "2024-01-12",
  },
  {
    id: "3",
    name: "Neuralia SDK",
    description: "Software development kit for custom integrations",
    type: "software",
    size: "45.2 MB",
    downloads: 234,
    lastUpdated: "2024-01-10",
  },
]

export default function AdminDownloadsPage() {
  const [downloads] = useState<DownloadItem[]>(mockDownloads)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "report":
        return <FileText className="h-4 w-4" />
      case "data":
        return <Package className="h-4 w-4" />
      case "software":
        return <Download className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case "report":
        return "default"
      case "data":
        return "secondary"
      case "software":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Downloads</h1>
        <p className="text-muted-foreground">Manage and monitor downloadable resources</p>
      </div>

      <div className="grid gap-6">
        {downloads.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getTypeIcon(item.type)}
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <Badge variant={getTypeBadgeVariant(item.type)}>{item.type}</Badge>
                </div>
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Package className="h-4 w-4" />
                  {item.size}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {item.downloads} downloads
                </div>
                <div>Last updated: {new Date(item.lastUpdated).toLocaleDateString()}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
