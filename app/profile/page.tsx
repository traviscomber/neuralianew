"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"
import {
  User,
  Mail,
  Calendar,
  Shield,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  LayoutDashboard,
  Settings,
  Save,
  Zap,
  Clock,
} from "lucide-react"

export default function ProfilePage() {
  const { user, loading, updateProfile } = useAuth()
  const { deployAgent, isAgentDeployed, isAgentDeploying } = useCart()
  const router = useRouter()
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
  })

  // Available agents for deployment
  const availableAgents = [
    {
      id: "financial-advisor",
      name: "Financial Strategy Expert",
      description: "Advanced financial planning, investment strategy, and risk management specialist",
      icon: "💰",
      price: 449,
      category: "Finance",
    },
    {
      id: "legal-counsel",
      name: "Legal Advisory Expert",
      description: "Corporate legal expertise covering compliance, contracts, and regulatory matters",
      icon: "⚖️",
      price: 499,
      category: "Legal",
    },
    {
      id: "operations-manager",
      name: "Operations Excellence Expert",
      description: "Process optimization, supply chain management, and operational efficiency specialist",
      icon: "⚙️",
      price: 379,
      category: "Operations",
    },
    {
      id: "innovation-strategist",
      name: "Innovation & R&D Expert",
      description: "Product development, innovation strategy, and technology advancement specialist",
      icon: "🚀",
      price: 429,
      category: "Innovation",
    },
  ]

  useEffect(() => {
    if (!loading && !user) {
      router.push("/")
      return
    }

    if (user) {
      setFormData({
        full_name: user.user_metadata?.full_name || "",
        phone: user.user_metadata?.phone || "",
      })
    }
  }, [user, loading, router])

  const handleSave = async () => {
    if (!user) return

    setIsSaving(true)
    try {
      const { error } = await updateProfile(formData)
      if (error) {
        toast({
          title: "Error",
          description: "Failed to update profile. Please try again.",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Success",
          description: "Profile updated successfully!",
        })
        setIsEditing(false)
      }
    } catch (error) {
      console.error("Profile update error:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    if (user) {
      setFormData({
        full_name: user.user_metadata?.full_name || "",
        phone: user.user_metadata?.phone || "",
      })
    }
    setIsEditing(false)
  }

  const handleDeployAgent = async (agent: any) => {
    try {
      await deployAgent(agent)
      toast({
        title: "Deployment Started",
        description: `${agent.name} is being deployed with a 5-day free trial.`,
      })
    } catch (error) {
      console.error("Deploy error:", error)
      toast({
        title: "Deployment Failed",
        description: "Failed to deploy agent. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <User className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Loading Profile...</h2>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const createdAt = new Date(user.created_at).toLocaleDateString()
  const lastSignIn = user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : "Never"
  const isEmailVerified = user.email_confirmed_at !== null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={() => router.push("/dashboard")}>
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>Manage your personal information and preferences</CardDescription>
                </div>
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)}>
                    <Settings className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={handleCancel} disabled={isSaving}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave} disabled={isSaving}>
                      <Save className="mr-2 h-4 w-4" />
                      {isSaving ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="full_name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      placeholder="Enter your full name"
                    />
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-md">{user.user_metadata?.full_name || "Not set"}</div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="p-3 bg-gray-50 rounded-md flex items-center justify-between">
                    <span>{user.email}</span>
                    {isEmailVerified ? (
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Verified
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        <AlertCircle className="mr-1 h-3 w-3" />
                        Unverified
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                    />
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-md">{user.user_metadata?.phone || "Not set"}</div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>User ID</Label>
                  <div className="p-3 bg-gray-50 rounded-md font-mono text-sm">{user.id}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Account Security
              </CardTitle>
              <CardDescription>Security information and verification status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Email Verification</p>
                        <p className="text-sm text-gray-500">
                          {isEmailVerified ? "Your email is verified" : "Email not verified"}
                        </p>
                      </div>
                    </div>
                    {isEmailVerified ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                    )}
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Account Type</p>
                        <p className="text-sm text-gray-500">Standard User Account</p>
                      </div>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <p className="font-medium">Account Created</p>
                    </div>
                    <p className="text-sm text-gray-600">{createdAt}</p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <User className="h-5 w-5 text-gray-500" />
                      <p className="font-medium">Last Sign In</p>
                    </div>
                    <p className="text-sm text-gray-600">{lastSignIn}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deploy Neural Agents */}
          <Card>
            <CardHeader>
              <CardTitle>Deploy Neural Agents</CardTitle>
              <CardDescription>Start your 5-day free trial with any of our AI experts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {availableAgents.map((agent) => {
                  const deployed = isAgentDeployed(agent.id)
                  const deploying = isAgentDeploying(agent.id)

                  return (
                    <Card key={agent.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{agent.icon}</div>
                          <div>
                            <CardTitle className="text-lg">{agent.name}</CardTitle>
                            <Badge variant="outline" className="text-xs mt-1">
                              {agent.category}
                            </Badge>
                          </div>
                        </div>
                        <CardDescription className="text-sm leading-relaxed">{agent.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="text-lg font-bold">${agent.price}</div>
                            <div className="text-xs text-gray-500">one-time</div>
                          </div>

                          {deployed ? (
                            <Button className="w-full" disabled>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Already Deployed
                            </Button>
                          ) : deploying ? (
                            <Button disabled className="w-full">
                              <Clock className="mr-2 h-4 w-4" />
                              Deploying...
                            </Button>
                          ) : (
                            <Button onClick={() => handleDeployAgent(agent)} className="w-full">
                              <Zap className="mr-2 h-4 w-4" />
                              Start 5-Day Trial
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common account management tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" onClick={() => router.push("/dashboard")} className="justify-start">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Go to Dashboard
                </Button>
                <Button variant="outline" className="justify-start bg-transparent">
                  <Shield className="mr-2 h-4 w-4" />
                  Security Settings
                </Button>
                <Button variant="outline" className="justify-start bg-transparent">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
