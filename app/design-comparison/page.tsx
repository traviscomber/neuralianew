import { Navigation } from "@/components/navigation"
import { ComparisonAnalysis } from "@/components/landing/comparison-analysis"
import { ScaleAIImprovements } from "@/components/landing/scale-ai-improvements"
import { Footer } from "@/components/landing/footer"

export default function DesignComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        <ComparisonAnalysis />
        <ScaleAIImprovements />
      </main>

      <Footer />
    </div>
  )
}
