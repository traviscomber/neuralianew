"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChatWidget } from "@/components/chat/chat-widget"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import { Brain, Activity, Settings } from "lucide-react"

// Lazy-load the client component with `ssr: false` so it never executes on the server.
const DashboardClient = dynamic(() => import("@/components/dashboard/dashboard-client"), { ssr: false })

export default function DashboardClientPage() {
  const { user } = useAuth()
  const { deployedAgents, addToCart, deployAgent, isDeploying, isAgentDeployed, isAgentDeploying } = useCart()
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [specificAgent, setSpecificAgent] = useState<string | null>(null)

  const handleChat = (agentType: string) => {
    setSpecificAgent(agentType)
    setIsChatOpen(true)
  }

  const availableAgents = [
    {
      id: "financial-advisor",
      type: "financial-advisor",
      name: "Financial Strategy Expert",
      description: "Advanced financial planning, investment strategy, and risk management specialist",
      icon: "💰",
      price: 449,
      features: ["Financial Planning", "Investment Strategy", "Risk Assessment", "Budget Optimization"],
      color: "bg-emerald-600",
      category: "Finance",
    },
    {
      id: "legal-counsel",
      type: "legal-counsel",
      name: "Legal Advisory Expert",
      description: "Corporate legal expertise covering compliance, contracts, and regulatory matters",
      icon: "⚖️",
      price: 499,
      features: ["Contract Review", "Compliance Management", "Legal Research", "Risk Mitigation"],
      color: "bg-slate-600",
      category: "Legal",
    },
    {
      id: "operations-manager",
      type: "operations-manager",
      name: "Operations Excellence Expert",
      description: "Process optimization, supply chain management, and operational efficiency specialist",
      icon: "⚙️",
      price: 379,
      features: ["Process Optimization", "Supply Chain Management", "Quality Control", "Efficiency Analysis"],
      color: "bg-amber-600",
      category: "Operations",
    },
    {
      id: "innovation-strategist",
      type: "innovation-strategist",
      name: "Innovation & R&D Expert",
      description: "Product development, innovation strategy, and technology advancement specialist",
      icon: "🚀",
      price: 429,
      features: ["Product Development", "Innovation Strategy", "Technology Assessment", "Market Research"],
      color: "bg-violet-600",
      category: "Innovation",
    },
  ]

  const handleDeployAgent = async (agent: any) => {
    await deployAgent(agent)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Neuralia Dashboard
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="px-3 py-1">
                <Activity className="mr-1 h-3 w-3" />
                {deployedAgents.length} Active Agents
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <DashboardClient />

      {/* Chat Widget */}
      {isChatOpen && (
        <ChatWidget
          isOpen={isChatOpen}
          onClose={() => {
            setIsChatOpen(false)
            setSpecificAgent(null)
          }}
          specificAgent={specificAgent}
        />
      )}
    </div>
  )
}
