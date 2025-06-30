"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, Settings, LogOut, Loader2 } from "lucide-react"

export function UserMenu() {
  const { user, profile, signOut } = useAuth()
  const router = useRouter()
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  if (!user) return null

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    console.log("Sign out clicked")
    setIsSigningOut(true)
    setIsOpen(false)

    try {
      await signOut()
      console.log("Sign out successful, redirecting...")
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error("Sign out error:", error)
    } finally {
      setIsSigningOut(false)
    }
  }

  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("Profile clicked")
    setIsOpen(false)
    router.push("/profile")
  }

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("Settings clicked")
    setIsOpen(false)
    router.push("/settings")
  }

  const getInitials = (name: string | null | undefined, email: string | undefined) => {
    if (name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    }
    if (email) {
      return email[0].toUpperCase()
    }
    return "U"
  }

  const displayName = profile?.full_name || user.email?.split("@")[0] || "User"

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={profile?.avatar_url || ""} alt={displayName} />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-semibold">
              {getInitials(profile?.full_name, user?.email)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{displayName}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleProfileClick} className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSettingsClick} className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="cursor-pointer text-red-600 focus:text-red-600"
        >
          {isSigningOut ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogOut className="mr-2 h-4 w-4" />}
          <span>{isSigningOut ? "Signing out..." : "Log out"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
