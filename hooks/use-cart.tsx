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
}

export type DeployedAgentRow = {
  id: number
  agent_id: string
  user_id: string
  agent_type: string
  status: "deploying" | "active" | "inactive" | "error"
  created_at: string
}

type CartContextValue = {
  items: CartItem[]
  deployedAgents: DeployedAgentRow[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  getTotalItems: () => number
  deployAgents: () => Promise<void>
  upgradeAgent: (id: number) => Promise<void>
}

const CartContext = createContext<CartContextValue | null>(null)

//
// ─── PROVIDER ───────────────────────────────────────────────────────────────────
//

export function CartProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast()
  const { user } = useAuth()

  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return []
    try {
      const stored = localStorage.getItem("neuralia-cart")
      return stored ? (JSON.parse(stored) as CartItem[]) : []
    } catch {
      return []
    }
  })

  const [deployedAgents, setDeployedAgents] = useState<DeployedAgentRow[]>([])

  // ── Local-storage sync ────────────────────────────────────────
  useEffect(() => {
    try {
      localStorage.setItem("neuralia-cart", JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items])

  // ── Load deployed agents for the signed-in user ───────────────
  useEffect(() => {
    if (!user) {
      setDeployedAgents([])
      return
    }
    ;(async () => {
      const { data, error } = await supabase
        .from<DeployedAgentRow>("deployed_agents")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      if (!error && data) setDeployedAgents(data)
    })()
  }, [user])

  // ── Cart helpers ──────────────────────────────────────────────
  const addToCart = useCallback(
    (item: CartItem) => {
      setItems((prev) => {
        // prevent duplicates
        if (prev.some((i) => i.id === item.id)) return prev
        return [...prev, item]
      })
      // Defer toast to avoid update-during-render warnings
      setTimeout(() => {
        toast({
          title: "Added to cart",
          description: item.name,
        })
      }, 0)
    },
    [toast],
  )

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const getTotalItems = useCallback(() => items.length, [items])

  // ── Deploy agents ─────────────────────────────────────────────
  const deployAgents = useCallback(async () => {
    if (!user) {
      setTimeout(() => {
        toast({
          title: "Please sign in first",
          variant: "destructive",
        })
      }, 0)
      return
    }

    if (items.length === 0) {
      setTimeout(() => {
        toast({
          title: "Cart is empty",
          description: "Add an agent to deploy",
        })
      }, 0)
      return
    }

    const payload = items.map((item) => ({
      agent_id: item.id,
      user_id: user.id,
      agent_type: item.category || "general",
      status: "deploying" as const,
    }))

    const { data, error } = await supabase.from("deployed_agents").insert(payload).select()

    if (error) {
      console.error("deployAgents error:", error)
      setTimeout(() => {
        toast({
          title: "Deployment failed",
          description: error.message,
          variant: "destructive",
        })
      }, 0)
      return
    }

    // Success – refresh list & clear cart
    setDeployedAgents((prev) => [...data, ...prev])
    clearCart()
    setTimeout(() => {
      toast({
        title: "Deployment started",
        description: "Your neural agents are now deploying",
      })
    }, 0)
  }, [user, items, toast, clearCart])

  // ── Upgrade agent (deploying → active) ────────────────────────
  const upgradeAgent = useCallback(
    async (rowId: number) => {
      const { data, error } = await supabase
        .from("deployed_agents")
        .update({ status: "active" })
        .eq("id", rowId)
        .select()

      if (error) {
        console.error("upgradeAgent error:", error)
        setTimeout(() => {
          toast({
            title: "Upgrade failed",
            description: error.message,
            variant: "destructive",
          })
        }, 0)
        return
      }

      setDeployedAgents((prev) => prev.map((row) => (row.id === rowId ? { ...row, status: "active" } : row)))
      setTimeout(() => {
        toast({
          title: "Agent upgraded",
          description: "Status set to active",
        })
      }, 0)
    },
    [toast],
  )

  // ── Memoised context value ────────────────────────────────────
  const value = useMemo<CartContextValue>(
    () => ({
      items,
      deployedAgents,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalItems,
      deployAgents,
      upgradeAgent,
    }),
    [items, deployedAgents, addToCart, removeFromCart, clearCart, getTotalItems, deployAgents, upgradeAgent],
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
