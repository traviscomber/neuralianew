"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "./auth-modal"
import { UserMenu } from "./user-menu"
import { useAuth } from "@/hooks/use-auth"

export function AuthButton() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <Button variant="outline" disabled>
        Loading...
      </Button>
    )
  }

  if (user) {
    return <UserMenu user={user} />
  }

  return (
    <>
      <Button onClick={() => setShowAuthModal(true)}>Sign In</Button>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  )
}
