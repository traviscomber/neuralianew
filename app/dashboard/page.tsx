import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/supabase-server"
import DashboardClient from "./dashboard-client"

export const metadata = {
  title: "Dashboard | Neuralia",
  description: "Manage your AI executive team and deploy new experts.",
}

export default async function DashboardPage() {
  const supabase = createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/")
  }

  return <DashboardClient />
}
