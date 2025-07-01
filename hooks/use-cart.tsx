"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/use-auth"

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

export type CartItem = {
  id: string
  name: string
  description: string
  price: number
  category?: string
  icon?: string
}

export type DeployedAgentRow = {
  id: number
  agent_id: string
  user_id: string
  /* NEW → matches NOT-NULL db column */
  name: string
  /* existing/optional cols */
  agent_description: string | null
  agent_type: string
  icon: string | null
  status: "deploying" | "active" | "paused" | "error"
  created_at: string
}

type CartContextValue = {
  /* cart */
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  /* deployments */
  deployedAgents: DeployedAgentRow[]
  deployAgent: (item: CartItem) => Promise<void>
  deployAgents: () => Promise<void>
  upgradeAgent: (rowId: number) => Promise<void>
  isAgentDeployed: (agentId: string) => boolean
  isAgentDeploying: (agentId: string) => boolean
}

const CartContext = createContext<CartContextValue | null>(null)

//
// ─── PROVIDER ───────────────────────────────────────────────────────────────────
//

export function CartProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const { toast } = useToast()

  // ── Cart items persisted in localStorage ──────────────────────
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return []
    try {
      const stored = localStorage.getItem("neuralia-cart")
      return stored ? (JSON.parse(stored) as CartItem[]) : []
    } catch {
      return []
    }
  })

  // ── Deployed agents fetched from Supabase ─────────────────────
  const [deployedAgents, setDeployedAgents] = useState<DeployedAgentRow[]>([])

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("neuralia-cart", JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items])

  // Fetch deployed agents for the signed-in user
  useEffect(() => {
    if (!user) {
      setDeployedAgents([])
      return
    }
    ;(async () => {
      const { data, error } = await supabase
        .from("deployed_agents")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      if (!error && data) setDeployedAgents(data as DeployedAgentRow[])
    })()
  }, [user])

  // ── Cart helpers ──────────────────────────────────────────────
  const addToCart = useCallback(
    (item: CartItem) => {
      setItems((prev) => {
        if (prev.some((i) => i.id === item.id)) return prev
        return [...prev, item]
      })
      toast({
        title: "Added to cart",
        description: item.name,
      })
    },
    [toast],
  )

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const getTotalItems = useCallback(() => items.length, [items])

  const getTotalPrice = useCallback(() => items.reduce((sum, it) => sum + it.price, 0), [items])

  // ── Deployment helpers ────────────────────────────────────────
  const buildPayload = (item: CartItem) => ({
    user_id: user!.id,
    agent_id: item.id,
    /* supply the NOT-NULL “name” column */
    name: item.name,
    /* keep optional cols if they exist, they’re ignored otherwise */
    agent_description: item.description || null,
    agent_type: item.category || "general",
    icon: item.icon || "🤖",
    status: "deploying" as const,
  })

  const deployAgent = useCallback(
    async (item: CartItem) => {
      if (!user) {
        toast({ title: "Please sign in first", variant: "destructive" })
        return
      }

      const { data, error } = await supabase.from("deployed_agents").insert(buildPayload(item)).select().single()

      if (error) {
        console.error("deployAgent error:", error)
        toast({
          title: "Deployment failed",
          description: error.message,
          variant: "destructive",
        })
        return
      }

      setDeployedAgents((prev) => [data as DeployedAgentRow, ...prev])
      toast({
        title: "Deployment started",
        description: `${item.name} is spinning up`,
      })
    },
    [user, toast],
  )

  const deployAgents = useCallback(async () => {
    if (!user) {
      toast({ title: "Please sign in first", variant: "destructive" })
      return
    }
    if (items.length === 0) {
      toast({ title: "Cart is empty", description: "Add an agent first" })
      return
    }

    const payload = items.map(buildPayload)
    const { data, error } = await supabase.from("deployed_agents").insert(payload).select()

    if (error) {
      console.error("deployAgents error:", error)
      toast({
        title: "Deployment failed",
        description: error.message,
        variant: "destructive",
      })
      return
    }

    setDeployedAgents((prev) => [...(data as DeployedAgentRow[]), ...prev])
    clearCart()
    toast({
      title: "Deployment started",
      description: "Your agents are spinning up",
    })
  }, [user, items, toast, clearCart])

  const upgradeAgent = useCallback(
    async (rowId: number) => {
      const { data, error } = await supabase
        .from("deployed_agents")
        .update({ status: "active" })
        .eq("id", rowId)
        .select()
        .single()

      if (error) {
        console.error("upgradeAgent error:", error)
        toast({
          title: "Upgrade failed",
          description: error.message,
          variant: "destructive",
        })
        return
      }

      setDeployedAgents((prev) => prev.map((r) => (r.id === rowId ? { ...r, status: "active" } : r)))
      toast({ title: "Agent upgraded", description: "Now active" })
    },
    [toast],
  )

  // ── Convenience look-ups for UI ───────────────────────────────
  const isAgentDeployed = useCallback(
    (agentId: string) => deployedAgents.some((d) => d.agent_id === agentId && d.status === "active"),
    [deployedAgents],
  )

  const isAgentDeploying = useCallback(
    (agentId: string) => deployedAgents.some((d) => d.agent_id === agentId && d.status === "deploying"),
    [deployedAgents],
  )

  // ── Memoised context value ────────────────────────────────────
  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalItems,
      getTotalPrice,
      deployedAgents,
      deployAgent,
      deployAgents,
      upgradeAgent,
      isAgentDeployed,
      isAgentDeploying,
    }),
    [
      items,
      deployedAgents,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalItems,
      getTotalPrice,
      deployAgent,
      deployAgents,
      upgradeAgent,
      isAgentDeployed,
      isAgentDeploying,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

//
// ─── HOOK ───────────────────────────────────────────────────────
//

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within a CartProvider")
  return ctx
}
