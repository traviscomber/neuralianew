import PrivacyClientWrapper from "./client-wrapper"
import Navigation from "@/components/navigation"

export default function PoliticasDePrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <PrivacyClientWrapper />
      </div>
    </div>
  )
}
