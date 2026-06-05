"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Analytics and monitoring coming soon</p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Welcome to Your Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Real-time analytics and monitoring tools will be available here soon.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
